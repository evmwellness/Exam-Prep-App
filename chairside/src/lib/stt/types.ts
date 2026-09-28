export interface TranscribeInput {
  audio: Blob;
  filename: string;
  mimeType: string;
  /** Vocabulary hint for the trade (e.g. "7N, 20 vol, C curl"). */
  vocabularyHint?: string;
  language?: string;
}

/** Speech-to-text provider. Swap implementations with STT_PROVIDER. */
export interface SpeechToText {
  readonly name: string;
  transcribe(input: TranscribeInput): Promise<string>;
}
