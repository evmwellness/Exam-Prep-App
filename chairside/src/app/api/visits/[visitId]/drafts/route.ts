import { NextResponse, type NextRequest } from 'next/server';
import { normalizeCard } from '@/lib/card';
import { firstName } from '@/lib/format';
import type { FollowupType } from '@/lib/followups/compliance';
import { draftFollowups } from '@/lib/followups/draft';
import { defaultSendAt, rebookDueDate } from '@/lib/followups/timing';
import { getSession } from '@/lib/session';
import { createClient } from '@/lib/supabase/server';
import type { Client, Followup, Visit } from '@/lib/types';

export const runtime = 'nodejs';
export const maxDuration = 60;

const TYPES: FollowupType[] = ['thank_you', 'check_in', 'rebook'];

/**
 * Draft (or redraft) the three follow-up texts for a visit. Texts that are
 * already scheduled or sent are left alone.
 */
export async function POST(request: NextRequest, { params }: { params: Promise<{ visitId: string }> }) {
  const { visitId } = await params;
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Not signed in' }, { status: 401 });

  const supabase = await createClient();
  const { data } = await supabase.from('visits').select('*, clients(*)').eq('id', visitId).maybeSingle();
  if (!data) return NextResponse.json({ error: 'Visit not found' }, { status: 404 });
  const visit = data as Visit & { clients: Client };
  const client = visit.clients;

  if (!client.sms_consent || client.opted_out_at) {
    return NextResponse.json({ error: `${client.name} hasn’t agreed to texts, so no follow-ups are drafted.` }, { status: 409 });
  }

  const { account } = session;
  const card = normalizeCard(visit.card_json, visit.trade);
  const visitAt = new Date(visit.date);
  const now = new Date();
  const due = rebookDueDate(visitAt, card.rebook_weeks ?? visit.rebook_weeks, account.timezone);

  const { texts, source } = await draftFollowups({
    salonName: account.name,
    bookingLink: account.booking_link,
    trade: visit.trade,
    clientFirstName: firstName(client.name),
    card,
    rebookDueLabel: due ? due.toFormat('EEE d LLL') : null,
  });

  const { data: existing } = await supabase.from('followups').select('*').eq('visit_id', visitId);
  const byType = new Map((existing as Followup[] | null)?.map((f) => [f.type, f]) ?? []);

  for (const type of TYPES) {
    const current = byType.get(type);
    if (current && (current.status === 'scheduled' || current.status === 'sent')) continue;
    const sendAt = defaultSendAt(type, { visitAt, rebookWeeks: card.rebook_weeks, timezone: account.timezone, now });
    const row = {
      account_id: account.id,
      visit_id: visit.id,
      client_id: client.id,
      type,
      body: texts[type],
      // No rebook interval → no rebook text by default.
      enabled: type === 'rebook' ? Boolean(sendAt) : true,
      send_at: sendAt?.toISOString() ?? null,
      status: 'draft' as const,
      error: null,
    };
    const { error } = current
      ? await supabase.from('followups').update(row).eq('id', current.id)
      : await supabase.from('followups').insert(row);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const { data: followups } = await supabase.from('followups').select('*').eq('visit_id', visitId);
  const order = (f: Followup) => TYPES.indexOf(f.type);
  return NextResponse.json({ followups: ((followups ?? []) as Followup[]).sort((a, b) => order(a) - order(b)), source });
}
