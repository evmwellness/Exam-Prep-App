import { NextResponse } from 'next/server';
import { hasAccess } from '@/lib/billing';
import { processDueFollowups } from '@/lib/followups/send';
import { rebooksDueThisWeek } from '@/lib/queries';
import { getSession } from '@/lib/session';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';
export const maxDuration = 60;

/** "N rebook texts due this week — Send all": bring them forward to now and send. */
export async function POST() {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
  if (!hasAccess(session.account)) return NextResponse.json({ error: 'Start your free trial to send texts.' }, { status: 402 });

  // Read through the user's client so RLS limits this to their own account.
  const due = await rebooksDueThisWeek(session.account.timezone);
  if (due.length === 0) return NextResponse.json({ summary: { sent: 0, testMode: 0, skipped: 0, rescheduled: 0, failed: 0 } });

  const ids = due.map((d) => d.id);
  const now = new Date();
  const supabase = await createClient();
  const { error } = await supabase
    .from('followups')
    .update({ send_at: now.toISOString() })
    .in('id', ids)
    .eq('status', 'scheduled')
    .gt('send_at', now.toISOString());
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const summary = await processDueFollowups({ ids, now });
  return NextResponse.json({ summary });
}
