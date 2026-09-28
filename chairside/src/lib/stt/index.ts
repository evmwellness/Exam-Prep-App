import type { Trade } from '../trades';
import { DeepgramSpeechToText } from './deepgram';
import type { SpeechToText } from './types';
import { WhisperSpeechToText } from './whisper';

export type { SpeechToText, TranscribeInput } from './types';

export function sttConfigured(): boolean {
  return (process.env.STT_PROVIDER ?? 'whisper') === 'deepgram'
    ? Boolean(process.env.DEEPGRAM_API_KEY)
    : Boolean(process.env.OPENAI_API_KEY);
}

export function getSpeechToText(): SpeechToText {
  switch (process.env.STT_PROVIDER ?? 'whisper') {
    case 'deepgram':
      return new DeepgramSpeechToText();
    case 'whisper':
    default:
      return new WhisperSpeechToText();
  }
}

/** Spelling hints so the transcript keeps trade jargon intact. */
export const VOCABULARY_HINTS: Record<Trade, string> = {
  hair: 'Roots 7N + 8.1, 20 vol developer, gloss, toner, 9V, clear, lightener, balayage, foils, Olaplex, 35 min, rebook',
  nails: 'Gel-X, BIAB, acrylic, builder gel, short almond, squoval, coffin, OPI, DND, The GelBottle, chrome, infill, HEMA-free',
  lash_brow: 'Classic, hybrid, volume, C curl, CC curl, D curl, 9-12 mm, 0.07, 0.15, adhesive, brow lamination, tint, patch test',
};
