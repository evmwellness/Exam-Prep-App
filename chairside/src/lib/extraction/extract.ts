import { betaZodOutputFormat } from '@anthropic-ai/sdk/helpers/beta/zod';
import { anthropic, claudeModel, ClaudeRefusalError, fallbackOptions } from '../anthropic';
import { cardSchemaFor, normalizeCard, type ClientCard } from '../card';
import { TRADE_FIELDS, type Trade } from '../trades';
import { normalizeFieldValue } from './normalize';
import { extractionSystemPrompt, extractionUserMessage } from './prompt';

export interface ExtractInput {
  transcript: string;
  trade: Trade;
  /** YYYY-MM-DD in the salon's timezone. */
  visitDate: string;
  knownClientName?: string | null;
}

/** Transcript → client card, using Claude structured output so the shape is fixed. */
export async function extractCard(input: ExtractInput): Promise<ClientCard> {
  const model = claudeModel();
  const schema = cardSchemaFor(input.trade);
  const { betas, fallbacks } = fallbackOptions(model);

  const response = await anthropic().beta.messages.parse({
    model,
    max_tokens: 16000,
    ...(betas.length ? { betas } : {}),
    ...(fallbacks ? { fallbacks } : {}),
    system: [
      { type: 'text', text: extractionSystemPrompt(input.trade), cache_control: { type: 'ephemeral' } },
    ],
    messages: [
      {
        role: 'user',
        content: extractionUserMessage(input.transcript, input.visitDate, input.knownClientName ?? null),
      },
    ],
    output_config: { effort: 'medium', format: betaZodOutputFormat(schema) },
  });

  if (response.stop_reason === 'refusal') throw new ClaudeRefusalError();
  if (!response.parsed_output) {
    throw new Error(`Extraction returned no card (stop_reason: ${response.stop_reason})`);
  }
  return postProcessCard({ trade: input.trade, ...response.parsed_output }, input.trade);
}

/** Tidy model output: normalise jargon in trade fields and trim lists. */
export function postProcessCard(raw: unknown, trade: Trade): ClientCard {
  const card = normalizeCard(raw, trade);
  for (const f of TRADE_FIELDS[trade]) {
    card.fields[f.key] = normalizeFieldValue(card.fields[f.key] ?? '');
  }
  const clean = (xs: string[]) => [...new Set(xs.map((x) => x.trim()).filter(Boolean))];
  card.next_time = clean(card.next_time);
  card.remember = clean(card.remember);
  card.sensitivities = card.sensitivities.trim();
  card.service = card.service.trim();
  return card;
}
