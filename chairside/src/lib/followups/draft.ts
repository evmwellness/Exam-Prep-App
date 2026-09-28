import { z } from 'zod';
import { betaZodOutputFormat } from '@anthropic-ai/sdk/helpers/beta/zod';
import { anthropic, claudeModel, ClaudeRefusalError, fallbackOptions, hasAnthropic } from '../anthropic';
import type { ClientCard } from '../card';
import { TRADE_FIELDS, TRADE_LABELS, type Trade } from '../trades';
import {
  ensureBookingLink,
  findOfferLanguage,
  formatMessage,
  stripWrapper,
  type FollowupType,
} from './compliance';

export interface DraftInput {
  salonName: string;
  bookingLink: string | null;
  trade: Trade;
  clientFirstName: string;
  card: ClientCard;
  /** Human-readable rebook date, e.g. "Tue 11 Nov". */
  rebookDueLabel: string | null;
}

export type DraftedTexts = Record<FollowupType, string>;

const AFTERCARE: Record<Trade, string> = {
  hair: 'use colour-safe, sulphate-free shampoo and wait 48 hours before washing if you can',
  nails: 'use cuticle oil daily and wear gloves for cleaning to keep them lasting',
  lash_brow: 'keep them dry for 24 hours, avoid oil-based products, and brush them through each morning',
};

const DraftSchema = z.object({
  thank_you: z.string().describe('Sent today: thank-you plus one or two practical aftercare tips.'),
  check_in: z.string().describe('Sent on day 2-3: a friendly check-in asking how things are settling.'),
  rebook: z.string().describe('Sent about a week before the rebook date: a gentle nudge to book, including the booking link.'),
});

const SYSTEM_PROMPT = `You write short follow-up text messages (SMS) that a beauty professional sends to a client after an appointment. Each text is personal, warm and plain, written in the professional's voice, as if they typed it themselves.

Rules for every text:
- 1-3 short sentences, under 280 characters. Use the client's first name once.
- Do not start with the salon name and do not add "Reply STOP to opt out" - both are added automatically.
- No hashtags, no more than one emoji, no ALL CAPS.
- You may mention one personal detail from the "remember" list when it fits naturally (e.g. "Good luck with the wedding planning!"). Never mention health details, allergies or sensitivities.
- The thank-you and check-in texts must not contain any offer, discount, promotion, deal, sale, voucher or anything "free". They are service messages only.
- The rebook text must include the booking link exactly as given, if one is given, and may mention when they are due back.`;

function describeCard(input: DraftInput): string {
  const fields = TRADE_FIELDS[input.trade]
    .map((f) => ({ label: f.label, value: input.card.fields[f.key] }))
    .filter((f) => f.value)
    .map((f) => `- ${f.label}: ${f.value}`)
    .join('\n');
  return [
    `Salon: ${input.salonName}`,
    `Trade: ${TRADE_LABELS[input.trade]}`,
    `Client first name: ${input.clientFirstName}`,
    `Service today: ${input.card.service || '(not stated)'}`,
    fields ? `Card:\n${fields}` : '',
    input.card.next_time.length ? `Next time: ${input.card.next_time.join('; ')}` : '',
    input.card.remember.length ? `Remember: ${input.card.remember.join('; ')}` : '',
    `Typical aftercare for this trade: ${AFTERCARE[input.trade]}`,
    input.rebookDueLabel ? `Due back around: ${input.rebookDueLabel}` : 'Rebook date: not set',
    input.bookingLink ? `Booking link: ${input.bookingLink}` : 'Booking link: none',
  ]
    .filter(Boolean)
    .join('\n');
}

/** Deterministic templates, used without an Anthropic key or if drafting fails. */
export function templateTexts(input: DraftInput): DraftedTexts {
  const name = input.clientFirstName;
  const service = input.card.service ? `your ${input.card.service.toLowerCase()}` : 'everything';
  const due = input.rebookDueLabel ? ` around ${input.rebookDueLabel}` : ' soon';
  return {
    thank_you: `Thanks for coming in today, ${name}! Quick aftercare tip: ${AFTERCARE[input.trade]}.`,
    check_in: `Hi ${name}, just checking in - how is ${service} settling in? Let me know if anything needs a tweak.`,
    rebook: `Hi ${name}, you're due back${due}. Grab a time that suits you${input.bookingLink ? `: ${input.bookingLink}` : '.'}`,
  };
}

/** Apply the compliance wrapper and checks to raw drafts. */
export function finalizeDrafts(raw: DraftedTexts, input: DraftInput): DraftedTexts {
  const fallback = templateTexts(input);
  const out = {} as DraftedTexts;
  for (const type of ['thank_you', 'check_in', 'rebook'] as const) {
    let core = stripWrapper(raw[type] ?? '', input.salonName);
    if (!core) core = fallback[type];
    if (type !== 'rebook' && findOfferLanguage(core)) core = fallback[type];
    if (type === 'rebook') core = ensureBookingLink(core, input.bookingLink);
    out[type] = formatMessage(core, input.salonName);
  }
  return out;
}

/** Draft the three follow-up texts from the card with Claude (templates as fallback). */
export async function draftFollowups(input: DraftInput): Promise<{ texts: DraftedTexts; source: 'claude' | 'template' }> {
  if (!hasAnthropic()) return { texts: finalizeDrafts(templateTexts(input), input), source: 'template' };

  const model = claudeModel();
  const { betas, fallbacks } = fallbackOptions(model);
  try {
    const response = await anthropic().beta.messages.parse({
      model,
      max_tokens: 4000,
      ...(betas.length ? { betas } : {}),
      ...(fallbacks ? { fallbacks } : {}),
      system: SYSTEM_PROMPT,
      messages: [{ role: 'user', content: `${describeCard(input)}\n\nWrite the three texts.` }],
      output_config: { effort: 'low', format: betaZodOutputFormat(DraftSchema) },
    });
    if (response.stop_reason === 'refusal') throw new ClaudeRefusalError();
    if (!response.parsed_output) throw new Error('No drafts returned');
    return { texts: finalizeDrafts(response.parsed_output, input), source: 'claude' };
  } catch (err) {
    console.error('[drafts] falling back to templates:', err);
    return { texts: finalizeDrafts(templateTexts(input), input), source: 'template' };
  }
}
