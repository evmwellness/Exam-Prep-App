import type { SpeechToText, TranscribeInput } from './types';

/** Deepgram pre-recorded transcription over REST. Set STT_PROVIDER=deepgram. */
export class DeepgramSpeechToText implements SpeechToText {
  readonly name = 'deepgram';

  constructor(private apiKey = process.env.DEEPGRAM_API_KEY) {
    if (!apiKey) throw new Error('DEEPGRAM_API_KEY is not set');
  }

  async transcribe(input: TranscribeInput): Promise<string> {
    const params = new URLSearchParams({ model: 'nova-3', smart_format: 'true', punctuate: 'true' });
    if (input.language) params.set('language', input.language);
    for (const term of (input.vocabularyHint ?? '').split(',').map((t) => t.trim()).filter(Boolean).slice(0, 50)) {
      params.append('keyterm', term);
    }
    const res = await fetch(`https://api.deepgram.com/v1/listen?${params}`, {
      method: 'POST',
      headers: { Authorization: `Token ${this.apiKey}`, 'Content-Type': input.mimeType },
      body: input.audio,
    });
    if (!res.ok) throw new Error(`Deepgram error ${res.status}: ${await res.text()}`);
    const json = (await res.json()) as {
      results?: { channels?: { alternatives?: { transcript?: string }[] }[] };
    };
    return (json.results?.channels?.[0]?.alternatives?.[0]?.transcript ?? '').trim();
  }
}
