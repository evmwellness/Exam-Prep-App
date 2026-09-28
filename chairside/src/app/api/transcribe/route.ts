import { NextResponse, type NextRequest } from 'next/server';
import { hasAccess } from '@/lib/billing';
import { getSession } from '@/lib/session';
import { getSpeechToText, sttConfigured, VOCABULARY_HINTS } from '@/lib/stt';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';
export const maxDuration = 60;

const MAX_BYTES = 20 * 1024 * 1024;

/** Upload the pro's voice memo to private storage and transcribe it. */
export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
  if (!hasAccess(session.account)) return NextResponse.json({ error: 'Start your free trial to record notes.' }, { status: 402 });

  const form = await request.formData();
  const audio = form.get('audio');
  const clientId = String(form.get('clientId') ?? '');
  if (!(audio instanceof Blob) || audio.size === 0) return NextResponse.json({ error: 'No audio received' }, { status: 400 });
  if (audio.size > MAX_BYTES) return NextResponse.json({ error: 'Recording is too long' }, { status: 413 });

  const supabase = await createClient();
  const { data: client } = await supabase.from('clients').select('id, trade').eq('id', clientId).maybeSingle();
  if (!client) return NextResponse.json({ error: 'Client not found' }, { status: 404 });

  const mimeType = (audio.type || 'audio/webm').split(';')[0];
  const ext = mimeType.includes('mp4') || mimeType.includes('m4a') ? 'm4a' : mimeType.includes('ogg') ? 'ogg' : 'webm';
  const audioPath = `${session.account.id}/${client.id}/${crypto.randomUUID()}.${ext}`;
  const { error: uploadError } = await supabase.storage.from('audio').upload(audioPath, audio, { contentType: mimeType });
  if (uploadError) return NextResponse.json({ error: `Upload failed: ${uploadError.message}` }, { status: 500 });

  if (!sttConfigured()) {
    return NextResponse.json({ transcript: '', audioPath, sttAvailable: false });
  }

  try {
    const transcript = await getSpeechToText().transcribe({
      audio,
      filename: `memo.${ext}`,
      mimeType,
      vocabularyHint: VOCABULARY_HINTS[client.trade as keyof typeof VOCABULARY_HINTS],
    });
    return NextResponse.json({ transcript, audioPath, sttAvailable: true });
  } catch (err) {
    console.error('[transcribe]', err);
    return NextResponse.json(
      { error: 'Couldn’t transcribe that recording. Type your notes or try again.', audioPath },
      { status: 502 },
    );
  }
}
