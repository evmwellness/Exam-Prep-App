import { z } from 'zod';
import { TRADE_FIELDS, type Trade } from './trades';

/**
 * A client card. The shape is fixed for every trade; only the keys inside
 * `fields` differ (see TRADE_FIELDS).
 */
export interface ClientCard {
  trade: Trade;
  client_name: string | null;
  service: string;
  fields: Record<string, string>;
  next_time: string[];
  remember: string[];
  rebook_weeks: number | null;
  sensitivities: string;
}

/** Zod schema for the card of one trade — used for structured output from Claude. */
export function cardSchemaFor(trade: Trade) {
  const fieldShape: Record<string, z.ZodString> = {};
  for (const f of TRADE_FIELDS[trade]) {
    fieldShape[f.key] = z.string().describe(`${f.label}. ${f.hint} Empty string if not mentioned.`);
  }
  return z.object({
    client_name: z.string().nullable().describe('Client name if spoken, else null.'),
    service: z.string().describe('Short summary of the service done today, e.g. "Roots + gloss".'),
    fields: z.object(fieldShape),
    next_time: z.array(z.string()).describe('Things to do or change next visit. Short phrases.'),
    remember: z.array(z.string()).describe('Personal details to remember as short chips (2-6 words each).'),
    rebook_weeks: z.number().int().nullable().describe('Rebook interval in weeks, or null if not mentioned.'),
    sensitivities: z.string().describe('Allergies, sensitivities, reactions or comfort notes. Empty string if none.'),
  });
}

export function emptyCard(trade: Trade, clientName: string | null = null): ClientCard {
  const fields: Record<string, string> = {};
  for (const f of TRADE_FIELDS[trade]) fields[f.key] = '';
  return { trade, client_name: clientName, service: '', fields, next_time: [], remember: [], rebook_weeks: null, sensitivities: '' };
}

/** Coerce any stored JSON into a well-formed card for the given trade. */
export function normalizeCard(raw: unknown, trade: Trade): ClientCard {
  const base = emptyCard(trade);
  if (!raw || typeof raw !== 'object') return base;
  const r = raw as Record<string, unknown>;
  const fields = (r.fields && typeof r.fields === 'object' ? r.fields : {}) as Record<string, unknown>;
  for (const f of TRADE_FIELDS[trade]) {
    const v = fields[f.key];
    base.fields[f.key] = typeof v === 'string' ? v : '';
  }
  const strList = (v: unknown) => (Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string' && x.trim() !== '') : []);
  const weeks = typeof r.rebook_weeks === 'number' && Number.isFinite(r.rebook_weeks) ? Math.round(r.rebook_weeks) : null;
  return {
    trade,
    client_name: typeof r.client_name === 'string' ? r.client_name : null,
    service: typeof r.service === 'string' ? r.service : '',
    fields: base.fields,
    next_time: strList(r.next_time),
    remember: strList(r.remember),
    rebook_weeks: weeks !== null && weeks >= 1 && weeks <= 104 ? weeks : null,
    sensitivities: typeof r.sensitivities === 'string' ? r.sensitivities : '',
  };
}
