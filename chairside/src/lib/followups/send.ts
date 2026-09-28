import 'server-only';
import { createAdminClient } from '../supabase/admin';
import { getSmsSender } from '../sms';
import type { Account, Client, Followup } from '../types';
import { decideSend } from './compliance';

export interface ProcessSummary {
  sent: number;
  testMode: number;
  skipped: number;
  rescheduled: number;
  failed: number;
}

type FollowupRow = Followup & { clients: Client; accounts: Account };

/**
 * Send every scheduled follow-up that is due. Run by the cron job, and by
 * "Send all" for a specific set of ids. Each text is claimed (status →
 * sent) before the provider call so a text is never sent twice.
 */
export async function processDueFollowups(opts: { ids?: string[]; now?: Date; limit?: number } = {}): Promise<ProcessSummary> {
  const now = opts.now ?? new Date();
  const admin = createAdminClient();
  const sender = getSmsSender();
  const summary: ProcessSummary = { sent: 0, testMode: 0, skipped: 0, rescheduled: 0, failed: 0 };

  let query = admin
    .from('followups')
    .select('*, clients(*), accounts(*)')
    .eq('status', 'scheduled')
    .lte('send_at', now.toISOString())
    .order('send_at', { ascending: true })
    .limit(opts.limit ?? 200);
  if (opts.ids) query = query.in('id', opts.ids);

  const { data, error } = await query;
  if (error) throw error;

  for (const f of (data ?? []) as FollowupRow[]) {
    const { data: lastVisit } = await admin
      .from('visits')
      .select('date')
      .eq('client_id', f.client_id)
      .order('date', { ascending: false })
      .limit(1)
      .maybeSingle();

    const decision = decideSend({
      type: f.type,
      body: f.body,
      enabled: f.enabled,
      client: f.clients,
      account: f.accounts,
      lastVisitAt: lastVisit ? new Date(lastVisit.date) : null,
      now,
    });

    const audit = (event: string, detail: Record<string, unknown>) =>
      admin.from('audit_log').insert({
        account_id: f.account_id,
        client_id: f.client_id,
        followup_id: f.id,
        event,
        detail: { type: f.type, ...detail },
      });

    if (decision.action === 'skip') {
      await admin.from('followups').update({ status: 'skipped', error: decision.reason }).eq('id', f.id).eq('status', 'scheduled');
      await audit('message_skipped', { reason: decision.reason });
      summary.skipped++;
      continue;
    }
    if (decision.action === 'reschedule') {
      await admin.from('followups').update({ send_at: decision.sendAt.toISOString() }).eq('id', f.id).eq('status', 'scheduled');
      summary.rescheduled++;
      continue;
    }
    if (decision.action === 'fail') {
      await admin.from('followups').update({ status: 'failed', error: decision.reason }).eq('id', f.id).eq('status', 'scheduled');
      await audit('message_failed', { reason: decision.reason });
      summary.failed++;
      continue;
    }

    // Claim the row first: only one worker can move it from scheduled → sent.
    const { data: claimed } = await admin
      .from('followups')
      .update({ status: 'sent', sent_at: now.toISOString(), body: decision.body, error: null })
      .eq('id', f.id)
      .eq('status', 'scheduled')
      .select('id');
    if (!claimed?.length) continue;

    try {
      const result = await sender.send(f.clients.phone!, decision.body);
      await admin.from('followups').update({ provider_message_id: result.providerMessageId }).eq('id', f.id);
      await audit(result.testMode ? 'message_logged_test_mode' : 'message_sent', {
        to: f.clients.phone,
        body: decision.body,
        provider_message_id: result.providerMessageId,
      });
      if (result.testMode) summary.testMode++;
      else summary.sent++;
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err);
      await admin.from('followups').update({ status: 'failed', error: reason }).eq('id', f.id);
      await audit('message_failed', { reason, body: decision.body });
      summary.failed++;
    }
  }

  return summary;
}
