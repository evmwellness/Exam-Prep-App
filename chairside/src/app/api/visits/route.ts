import { DateTime } from 'luxon';
import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';
import { hasAnthropic } from '@/lib/anthropic';
import { hasAccess } from '@/lib/billing';
import { emptyCard, type ClientCard } from '@/lib/card';
import { extractCard } from '@/lib/extraction/extract';
import { getSession } from '@/lib/session';
import { createClient } from '@/lib/supabase/server';
import type { Trade } from '@/lib/trades';

export const runtime = 'nodejs';
export const maxDuration = 60;

const Body = z.object({
  clientId: z.string().uuid(),
  transcript: z.string().trim().min(1).max(10_000),
  audioPath: z.string().nullable().optional(),
});

/** Transcript → Claude card → new visit. */
export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
  if (!hasAccess(session.account)) return NextResponse.json({ error: 'Start your free trial to add visits.' }, { status: 402 });

  const parsed = Body.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: 'Add some notes first.' }, { status: 400 });
  const { clientId, transcript, audioPath } = parsed.data;

  const supabase = await createClient();
  const { data: client } = await supabase.from('clients').select('id, name, trade').eq('id', clientId).maybeSingle();
  if (!client) return NextResponse.json({ error: 'Client not found' }, { status: 404 });
  if (audioPath && !audioPath.startsWith(`${session.account.id}/`)) {
    return NextResponse.json({ error: 'Invalid audio path' }, { status: 400 });
  }

  const trade = client.trade as Trade;
  const now = new Date();
  let card: ClientCard = emptyCard(trade, client.name);
  let extractionError: string | null = null;
  if (hasAnthropic()) {
    try {
      card = await extractCard({
        transcript,
        trade,
        visitDate: DateTime.fromJSDate(now, { zone: session.account.timezone }).toISODate()!,
        knownClientName: client.name,
      });
    } catch (err) {
      console.error('[extract]', err);
      extractionError = err instanceof Error ? err.message : 'Extraction failed';
    }
  }

  const { data: visit, error } = await supabase
    .from('visits')
    .insert({
      account_id: session.account.id,
      client_id: client.id,
      user_id: session.userId,
      date: now.toISOString(),
      trade,
      service: card.service || null,
      transcript,
      audio_path: audioPath ?? null,
      card_json: card,
      rebook_weeks: card.rebook_weeks,
    })
    .select('id')
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ visitId: visit.id, extractionError });
}
