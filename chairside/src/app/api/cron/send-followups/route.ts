import { NextResponse, type NextRequest } from 'next/server';
import { processDueFollowups } from '@/lib/followups/send';

export const runtime = 'nodejs';
export const maxDuration = 300;

/**
 * Scheduled job: send every follow-up that is due. Vercel Cron calls this with
 * `Authorization: Bearer $CRON_SECRET` (see vercel.json). Can also be called by
 * a Supabase pg_cron job or any scheduler with the same header.
 */
export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const summary = await processDueFollowups();
  console.log('[cron] follow-ups', summary);
  return NextResponse.json({ ok: true, summary });
}

export const POST = GET;
