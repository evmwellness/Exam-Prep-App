import { DateTime } from 'luxon';

export type FollowupType = 'thank_you' | 'check_in' | 'rebook';

export const FOLLOWUP_LABELS: Record<FollowupType, string> = {
  thank_you: 'Thank-you + aftercare',
  check_in: 'Check-in',
  rebook: 'Rebook nudge',
};

export const STOP_FOOTER = 'Reply STOP to opt out';
export const QUIET_START_HOUR = 20; // 8pm
export const QUIET_END_HOUR = 8; // 8am
export const CANADA_REBOOK_MONTHS = 24;

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Strip our own prefix/footer so a text can be re-wrapped after edits. */
export function stripWrapper(body: string, salonName: string): string {
  let core = body.trim();
  const prefix = new RegExp(`^${escapeRegExp(salonName.trim())}\\s*[:\\-–—]\\s*`, 'i');
  core = core.replace(prefix, '');
  core = core.replace(/\s*reply\s+stop\s+to\s+opt[\s-]*out\.?\s*$/i, '');
  return core.trim();
}

/** Every text starts with the salon's name and ends with the opt-out line. */
export function formatMessage(body: string, salonName: string): string {
  let core = stripWrapper(body, salonName);
  if (core && !/[.!?)]$/.test(core) && !/https?:\/\/\S+$/.test(core)) core += '.';
  return `${salonName.trim()}: ${core} ${STOP_FOOTER}`;
}

export function isWrapped(body: string, salonName: string): boolean {
  return body.trim().startsWith(`${salonName.trim()}:`) && body.trim().endsWith(STOP_FOOTER);
}

/** Make sure a rebook text carries the booking link. */
export function ensureBookingLink(core: string, bookingLink: string | null | undefined): string {
  if (!bookingLink) return core;
  if (core.includes(bookingLink)) return core;
  let trimmed = core.trim();
  if (trimmed && !/[.!?]$/.test(trimmed)) trimmed += '.';
  return `${trimmed} Book here: ${bookingLink}`.trim();
}

const OFFER_PATTERNS: RegExp[] = [
  /\bdiscount(s|ed)?\b/i,
  /\d+\s*(%|percent)\s*off\b/i,
  /\b\d+\s*%/,
  /[$£€]\s*\d+\s*off\b/i,
  /\boffers?\b/i,
  /\bpromo(tion|tions|s)?\b/i,
  /\bpromo\s*code\b/i,
  /\bcoupons?\b/i,
  /\bvouchers?\b/i,
  /\bdeals?\b(?!\s+with)/i,
  /\bsale\b/i,
  /\bspecials?\b(?=\s+(price|offer|rate|deal))/i,
  /\bhalf[\s-]price\b/i,
  /\bcomplimentary\b/i,
  /\bbuy\s+one\b/i,
  /\bbogo\b/i,
  /\blimited[\s-]time\b/i,
  /\bsave\s+([$£€]|\d)/i,
  // "free" as a giveaway, but not "feel free to", "free to", or "HEMA-free".
  /(?<!feel\s)(?<![-\w])free\b(?!\s+to\b)(?!-)/i,
];

/** Thank-you and check-in texts must not contain offers or discounts. */
export function findOfferLanguage(text: string): string | null {
  for (const re of OFFER_PATTERNS) {
    const m = text.match(re);
    if (m) return m[0];
  }
  return null;
}

export function mustBeOfferFree(type: FollowupType): boolean {
  return type === 'thank_you' || type === 'check_in';
}

export function isQuietHours(at: Date, timezone: string): boolean {
  const local = DateTime.fromJSDate(at, { zone: timezone });
  return local.hour < QUIET_END_HOUR || local.hour >= QUIET_START_HOUR;
}

/** Only send 8am–8pm in the salon's timezone; otherwise shift to the next 8am. */
export function nextAllowedSendTime(at: Date, timezone: string): Date {
  const local = DateTime.fromJSDate(at, { zone: timezone });
  if (local.hour < QUIET_END_HOUR) {
    return local.set({ hour: QUIET_END_HOUR, minute: 0, second: 0, millisecond: 0 }).toJSDate();
  }
  if (local.hour >= QUIET_START_HOUR) {
    return local.plus({ days: 1 }).set({ hour: QUIET_END_HOUR, minute: 0, second: 0, millisecond: 0 }).toJSDate();
  }
  return at;
}

/** Canada: don't send rebook texts to clients with no visit in the last 24 months. */
export function canadaRebookBlocked(
  country: string,
  type: FollowupType,
  lastVisitAt: Date | null,
  now: Date,
): boolean {
  if (country.toUpperCase() !== 'CA' || type !== 'rebook') return false;
  if (!lastVisitAt) return true;
  const cutoff = DateTime.fromJSDate(now).minus({ months: CANADA_REBOOK_MONTHS });
  return DateTime.fromJSDate(lastVisitAt) < cutoff;
}

export interface SendCheckInput {
  type: FollowupType;
  body: string;
  enabled: boolean;
  client: { sms_consent: boolean; opted_out_at: string | null; phone: string | null };
  account: { name: string; country: string; timezone: string; booking_link: string | null };
  lastVisitAt: Date | null;
  now: Date;
}

export type SendDecision =
  | { action: 'send'; body: string }
  | { action: 'reschedule'; sendAt: Date; reason: string }
  | { action: 'skip'; reason: string }
  | { action: 'fail'; reason: string };

/** Final gate run by the sending job immediately before each text goes out. */
export function decideSend(input: SendCheckInput): SendDecision {
  const { client, account, type } = input;
  if (!input.enabled) return { action: 'skip', reason: 'Text is switched off' };
  if (!client.sms_consent) return { action: 'skip', reason: 'No SMS consent' };
  if (client.opted_out_at) return { action: 'skip', reason: 'Client opted out' };
  if (!client.phone) return { action: 'skip', reason: 'No mobile number' };
  if (canadaRebookBlocked(account.country, type, input.lastVisitAt, input.now)) {
    return { action: 'skip', reason: 'Canada: no visit in the last 24 months' };
  }
  let body = formatMessage(input.body, account.name);
  if (type === 'rebook' && account.booking_link) {
    body = formatMessage(ensureBookingLink(stripWrapper(body, account.name), account.booking_link), account.name);
  }
  if (mustBeOfferFree(type)) {
    const offer = findOfferLanguage(stripWrapper(body, account.name));
    if (offer) return { action: 'fail', reason: `Contains offer language ("${offer}")` };
  }
  if (isQuietHours(input.now, account.timezone)) {
    return {
      action: 'reschedule',
      sendAt: nextAllowedSendTime(input.now, account.timezone),
      reason: 'Quiet hours (8pm-8am)',
    };
  }
  return { action: 'send', body };
}

export type InboundKeyword = 'stop' | 'start' | 'help' | null;

/** Carrier-standard opt-out / opt-in keywords (whole message, case-insensitive). */
export function parseInboundKeyword(body: string): InboundKeyword {
  const word = body.trim().toUpperCase().replace(/[^A-Z]/g, '');
  if (['STOP', 'STOPALL', 'UNSUBSCRIBE', 'CANCEL', 'END', 'QUIT', 'OPTOUT', 'REVOKE'].includes(word)) return 'stop';
  if (['START', 'UNSTOP', 'YES', 'SUBSCRIBE'].includes(word)) return 'start';
  if (['HELP', 'INFO'].includes(word)) return 'help';
  return null;
}
