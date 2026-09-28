import Anthropic from '@anthropic-ai/sdk';

let client: Anthropic | null = null;

export function hasAnthropic(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

export function anthropic(): Anthropic {
  if (!client) client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  return client;
}

/** Model used for extraction and drafting. Override with ANTHROPIC_MODEL. */
export function claudeModel(): string {
  return process.env.ANTHROPIC_MODEL || 'claude-opus-5';
}

/**
 * Server-side refusal fallbacks: if the primary model declines a request the
 * API retries it on a suitable model in the same call. Only sent for models
 * that support it.
 */
export function fallbackOptions(model: string): { betas: string[]; fallbacks?: 'default' } {
  if (/^claude-(opus-5|fable-5)/.test(model)) {
    return { betas: ['server-side-fallback-2026-07-01'], fallbacks: 'default' };
  }
  return { betas: [] };
}

export class ClaudeRefusalError extends Error {
  constructor() {
    super('Claude declined to process this note. Please fill in the card by hand.');
  }
}
