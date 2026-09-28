import { TRADE_FIELDS, TRADE_LABELS, type Trade } from '../trades';
import { WORKED_EXAMPLES } from './examples';

const EXAMPLE_VISIT_DATE = '2026-03-02';

/** Stable per-trade system prompt (cache-friendly: contains no per-request data). */
export function extractionSystemPrompt(trade: Trade): string {
  const fields = TRADE_FIELDS[trade]
    .map((f) => `- fields.${f.key} — ${f.label}: ${f.hint}`)
    .join('\n');

  const examples = WORKED_EXAMPLES[trade]
    .map((ex, i) => {
      const card = JSON.stringify(ex.card, null, 2).replaceAll('{{VISIT_DATE}}', EXAMPLE_VISIT_DATE);
      return `<example index="${i + 1}">\nVisit date: ${EXAMPLE_VISIT_DATE}\n<transcript>${ex.transcript}</transcript>\n<card>\n${card}\n</card>\n</example>`;
    })
    .join('\n\n');

  return `You turn a ${TRADE_LABELS[trade].toLowerCase()} professional's spoken voice memo, recorded after a client leaves, into a structured client card.

The memo is dictated quickly with busy hands, so it is informal and full of trade jargon and spoken numbers. Write every value the way a pro would write it on a record card:
- Spoken numbers become digits: "seven N plus eight point one" → "7N + 8.1", "point oh seven" → "0.07", "thirty-five minutes" → "35 min", "nine to twelve mil" → "9-12 mm".
- Developer strength is "N vol" ("twenty volume" → "20 vol"). Join colour shades with " + ".
- Lash curls are capital letters + "curl" ("C curl", "CC curl", "D curl"). Nail shapes stay lowercase words ("short almond", "squoval", "long coffin").
- Keep brand and shade names as spoken, with normal capitalisation ("OPI Bubble Bath").

Card fields for this trade:
${fields}

Shared fields:
- client_name: the client's name if spoken, else null.
- service: a short summary of what was done today.
- next_time: changes or ideas for the next visit, as short phrases.
- remember: personal details worth mentioning next time (events, family, pets, travel, work), as short chips of 2-6 words.
- rebook_weeks: the rebook interval in whole weeks if mentioned ("six weeks" → 6; a range → the number they settle on, else the upper bound), otherwise null.
- sensitivities: allergies, reactions, tenderness or comfort notes. Empty string if none.

Only record what the memo says. If a field is not mentioned, use an empty string (or an empty list / null). Never invent formulas, products or personal details. Relative dates like "today" refer to the visit date given with the memo.

<examples>
${examples}
</examples>`;
}

export function extractionUserMessage(transcript: string, visitDate: string, knownClientName: string | null): string {
  const name = knownClientName ? `Client on file: ${knownClientName}\n` : '';
  return `${name}Visit date: ${visitDate}\n<transcript>${transcript}</transcript>\n\nReturn the card for this memo.`;
}
