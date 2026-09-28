'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { hasAccess } from '@/lib/billing';
import { normalizeCard, type ClientCard } from '@/lib/card';
import {
  canadaRebookBlocked,
  ensureBookingLink,
  findOfferLanguage,
  formatMessage,
  mustBeOfferFree,
  nextAllowedSendTime,
  stripWrapper,
  type FollowupType,
} from '@/lib/followups/compliance';
import { defaultSendAt } from '@/lib/followups/timing';
import { toE164 } from '@/lib/phone';
import { getSession } from '@/lib/session';
import { createAdminClient } from '@/lib/supabase/admin';
import { createClient } from '@/lib/supabase/server';
import { isTrade } from '@/lib/trades';
import type { Followup } from '@/lib/types';

export type ActionResult<T = undefined> = { ok: true; data?: T } | { ok: false; error: string };

async function sessionOrThrow() {
  const session = await getSession();
  if (!session) throw new Error('Please sign in again.');
  return session;
}

function message(err: unknown): string {
  if (err && typeof err === 'object' && 'message' in err) return String((err as { message: unknown }).message);
  return String(err);
}

// ---------------------------------------------------------------------------
// Onboarding & settings
// ---------------------------------------------------------------------------

export async function createAccountAction(_prev: ActionResult | null, form: FormData): Promise<ActionResult> {
  const supabase = await createClient();
  const trade = String(form.get('trade') ?? 'hair');
  const { error } = await supabase.rpc('create_account', {
    p_name: String(form.get('salon_name') ?? '').trim(),
    p_country: String(form.get('country') ?? 'US'),
    p_timezone: String(form.get('timezone') ?? 'America/New_York'),
    p_trade: isTrade(trade) ? trade : 'hair',
    p_booking_link: String(form.get('booking_link') ?? '').trim() || null,
    p_full_name: String(form.get('full_name') ?? '').trim() || null,
  });
  if (error) return { ok: false, error: error.message };
  if (form.get('demo') === 'on') await supabase.rpc('load_demo_data');
  redirect('/today');
}

export async function updateSettingsAction(_prev: ActionResult | null, form: FormData): Promise<ActionResult> {
  const session = await sessionOrThrow();
  const supabase = await createClient();
  const trade = String(form.get('trade') ?? session.user.trade);
  const { error: userErr } = await supabase
    .from('users')
    .update({ trade: isTrade(trade) ? trade : session.user.trade, full_name: String(form.get('full_name') ?? '').trim() || null })
    .eq('id', session.userId);
  if (userErr) return { ok: false, error: userErr.message };

  if (session.user.role === 'owner') {
    const bookingLink = String(form.get('booking_link') ?? '').trim();
    if (bookingLink && !/^https?:\/\/\S+$/.test(bookingLink)) {
      return { ok: false, error: 'Booking link must start with https://' };
    }
    const { error } = await supabase
      .from('accounts')
      .update({
        name: String(form.get('salon_name') ?? '').trim() || session.account.name,
        booking_link: bookingLink || null,
        timezone: String(form.get('timezone') ?? session.account.timezone),
        country: String(form.get('country') ?? session.account.country),
      })
      .eq('id', session.account.id);
    if (error) return { ok: false, error: error.message };
  }
  revalidatePath('/', 'layout');
  return { ok: true };
}

export async function loadDemoDataAction(): Promise<ActionResult<number>> {
  const supabase = await createClient();
  const { data, error } = await supabase.rpc('load_demo_data');
  if (error) return { ok: false, error: error.message };
  revalidatePath('/', 'layout');
  return { ok: true, data: data as number };
}

export async function inviteStaffAction(_prev: ActionResult | null, form: FormData): Promise<ActionResult> {
  const session = await sessionOrThrow();
  if (session.user.role !== 'owner') return { ok: false, error: 'Only the owner can invite staff.' };
  const email = String(form.get('email') ?? '').trim().toLowerCase();
  const trade = String(form.get('trade') ?? 'hair');
  if (!/^\S+@\S+\.\S+$/.test(email)) return { ok: false, error: 'Enter a valid email.' };
  const supabase = await createClient();
  const { error } = await supabase
    .from('invites')
    .insert({ account_id: session.account.id, email, trade: isTrade(trade) ? trade : 'hair', invited_by: session.userId });
  if (error) return { ok: false, error: error.code === '23505' ? 'That email already has an open invite.' : error.message };

  // Send the invite email when the service key is available; otherwise they can just sign in with that email.
  if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const redirectTo = `${process.env.APP_URL ?? ''}/auth/callback?next=/onboarding`;
    await createAdminClient().auth.admin.inviteUserByEmail(email, { redirectTo }).catch(() => undefined);
  }
  revalidatePath('/settings');
  return { ok: true };
}

// ---------------------------------------------------------------------------
// Clients
// ---------------------------------------------------------------------------

export async function createClientAction(_prev: ActionResult | null, form: FormData): Promise<ActionResult> {
  const session = await sessionOrThrow();
  const name = String(form.get('name') ?? '').trim();
  const phoneRaw = String(form.get('phone') ?? '').trim();
  const consent = form.get('consent');
  const method = String(form.get('consent_method') ?? 'in_person_verbal');
  const trade = String(form.get('trade') ?? session.user.trade);

  if (!name) return { ok: false, error: 'Add the client’s name.' };
  if (consent !== 'yes' && consent !== 'no') {
    return { ok: false, error: 'Ask the client: happy to receive aftercare and rebooking texts?' };
  }
  const phone = phoneRaw ? toE164(phoneRaw, session.account.country) : null;
  if (phoneRaw && !phone) return { ok: false, error: 'That mobile number doesn’t look right.' };
  if (consent === 'yes' && !phone) return { ok: false, error: 'Add a mobile number so we can send their texts.' };

  const supabase = await createClient();
  const { data, error } = await supabase
    .from('clients')
    .insert({
      account_id: session.account.id,
      name,
      phone,
      trade: isTrade(trade) ? trade : session.user.trade,
      sms_consent: consent === 'yes',
      consent_at: consent === 'yes' ? new Date().toISOString() : null,
      consent_method: consent === 'yes' ? method : null,
      created_by: session.userId,
    })
    .select('id')
    .single();
  if (error) {
    return { ok: false, error: error.code === '23505' ? 'A client with that mobile number already exists.' : error.message };
  }
  revalidatePath('/', 'layout');
  redirect(form.get('then') === 'record' ? `/clients/${data.id}/record` : `/clients/${data.id}`);
}

export async function updateClientAction(clientId: string, patch: { name?: string; phone?: string }): Promise<ActionResult> {
  const session = await sessionOrThrow();
  const update: Record<string, unknown> = {};
  if (patch.name !== undefined) {
    if (!patch.name.trim()) return { ok: false, error: 'Name can’t be empty.' };
    update.name = patch.name.trim();
  }
  if (patch.phone !== undefined) {
    const phone = patch.phone.trim() ? toE164(patch.phone, session.account.country) : null;
    if (patch.phone.trim() && !phone) return { ok: false, error: 'That mobile number doesn’t look right.' };
    update.phone = phone;
  }
  const supabase = await createClient();
  const { error } = await supabase.from('clients').update(update).eq('id', clientId);
  if (error) return { ok: false, error: error.message };
  revalidatePath('/', 'layout');
  return { ok: true };
}

/** Record a consent answer (yes / no). Every change is written to the audit log by a DB trigger. */
export async function setConsentAction(clientId: string, consent: boolean, method: string): Promise<ActionResult> {
  await sessionOrThrow();
  const supabase = await createClient();
  const { error } = await supabase
    .from('clients')
    .update(
      consent
        ? { sms_consent: true, consent_at: new Date().toISOString(), consent_method: method, opted_out_at: null }
        : { sms_consent: false },
    )
    .eq('id', clientId);
  if (error) return { ok: false, error: error.message };
  revalidatePath('/', 'layout');
  return { ok: true };
}

// ---------------------------------------------------------------------------
// Visits / cards
// ---------------------------------------------------------------------------

export async function saveCardAction(visitId: string, card: ClientCard): Promise<ActionResult> {
  await sessionOrThrow();
  const supabase = await createClient();
  const { data: visit } = await supabase.from('visits').select('trade').eq('id', visitId).single();
  if (!visit) return { ok: false, error: 'Visit not found.' };
  const clean = normalizeCard(card, visit.trade);
  const { error } = await supabase
    .from('visits')
    .update({ card_json: clean, service: clean.service || null, rebook_weeks: clean.rebook_weeks })
    .eq('id', visitId);
  if (error) return { ok: false, error: error.message };
  revalidatePath('/', 'layout');
  return { ok: true };
}

// ---------------------------------------------------------------------------
// Follow-ups
// ---------------------------------------------------------------------------

export interface FollowupDraftInput {
  id: string;
  type: FollowupType;
  body: string;
  enabled: boolean;
  send_at: string | null;
}

/** Schedule the visit's follow-ups in one tap. Switched-off texts are skipped. */
export async function scheduleFollowupsAction(visitId: string, items: FollowupDraftInput[]): Promise<ActionResult<Followup[]>> {
  const session = await sessionOrThrow();
  if (!hasAccess(session.account)) return { ok: false, error: 'Start your free trial in Settings to schedule texts.' };

  const supabase = await createClient();
  const { data: visit } = await supabase.from('visits').select('*, clients(*)').eq('id', visitId).single();
  if (!visit) return { ok: false, error: 'Visit not found.' };
  const client = visit.clients;
  if (!client.sms_consent) return { ok: false, error: `${client.name} hasn’t agreed to receive texts, so nothing can be scheduled.` };
  if (client.opted_out_at) return { ok: false, error: `${client.name} replied STOP, so nothing can be scheduled.` };
  if (!client.phone) return { ok: false, error: `Add a mobile number for ${client.name} first.` };

  const { account } = session;
  const now = new Date();
  const results: Followup[] = [];

  for (const item of items) {
    if (!item.enabled) {
      const { data, error } = await supabase
        .from('followups')
        .update({ enabled: false, status: 'skipped', body: item.body })
        .eq('id', item.id)
        .in('status', ['draft', 'scheduled', 'skipped'])
        .select()
        .maybeSingle();
      if (error) return { ok: false, error: error.message };
      if (data) results.push(data as Followup);
      continue;
    }

    let core = stripWrapper(item.body, account.name);
    if (!core) return { ok: false, error: 'One of the texts is empty.' };
    if (mustBeOfferFree(item.type)) {
      const offer = findOfferLanguage(core);
      if (offer) {
        return { ok: false, error: `Thank-you and check-in texts can’t include offers or discounts (found “${offer}”).` };
      }
    }
    if (item.type === 'rebook') {
      if (canadaRebookBlocked(account.country, 'rebook', new Date(visit.date), now)) {
        return { ok: false, error: 'Canada: rebook texts can’t go to clients with no visit in the last 24 months.' };
      }
      core = ensureBookingLink(core, account.booking_link);
    }
    const body = formatMessage(core, account.name);
    // No time picked: use the default for this type (rebook needs an interval on the card).
    let requested = item.send_at ? new Date(item.send_at) : null;
    if (!requested) {
      const card = normalizeCard(visit.card_json, visit.trade);
      requested = defaultSendAt(item.type, {
        visitAt: new Date(visit.date),
        rebookWeeks: card.rebook_weeks ?? visit.rebook_weeks,
        timezone: account.timezone,
        now,
      });
      if (!requested) return { ok: false, error: 'Set a rebook interval on the card (or pick a send time) before scheduling the rebook text.' };
    }
    const sendAt = nextAllowedSendTime(requested < now ? now : requested, account.timezone);

    const { data, error } = await supabase
      .from('followups')
      .update({ body, enabled: true, send_at: sendAt.toISOString(), status: 'scheduled', error: null })
      .eq('id', item.id)
      .in('status', ['draft', 'scheduled', 'skipped', 'failed'])
      .select()
      .maybeSingle();
    if (error) return { ok: false, error: error.message };
    if (data) results.push(data as Followup);
  }

  revalidatePath('/', 'layout');
  return { ok: true, data: results };
}

export async function unscheduleFollowupAction(followupId: string): Promise<ActionResult> {
  await sessionOrThrow();
  const supabase = await createClient();
  const { error } = await supabase.from('followups').update({ status: 'draft' }).eq('id', followupId).eq('status', 'scheduled');
  if (error) return { ok: false, error: message(error) };
  revalidatePath('/', 'layout');
  return { ok: true };
}
