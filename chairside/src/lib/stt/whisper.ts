import OpenAI, { toFile } from 'openai';
import type { SpeechToText, TranscribeInput } from './types';

export class WhisperSpeechToText implements SpeechToText {
  readonly name = 'openai-whisper';
  private client: OpenAI;

  constructor(apiKey = process.env.OPENAI_API_KEY) {
    if (!apiKey) throw new Error('OPENAI_API_KEY is not set');
    this.client = new OpenAI({ apiKey });
  }

  async transcribe(input: TranscribeInput): Promise<string> {
    const file = await toFile(input.audio, input.filename, { type: input.mimeType });
    const result = await this.client.audio.transcriptions.create({
      file,
      model: process.env.OPENAI_TRANSCRIBE_MODEL || 'whisper-1',
      // Whisper uses the prompt as spelling/style context, which helps with jargon.
      prompt: input.vocabularyHint,
      language: input.language,
    });
    return result.text.trim();
  }
}
