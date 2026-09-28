import { describe, expect, it } from 'vitest';
import {
  canadaRebookBlocked,
  decideSend,
  ensureBookingLink,
  findOfferLanguage,
  formatMessage,
  isQuietHours,
  nextAllowedSendTime,
  parseInboundKeyword,
  stripWrapper,
} from '@/lib/followups/compliance';
import { defaultSendAt } from '@/lib/followups/timing';

const NY = 'America/New_York';
const at = (iso: string) => new Date(iso);

describe('message wrapper', () => {
  it('starts with the salon name and ends with the opt-out line', () => {
    expect(formatMessage('Thanks for coming in, Sarah!', 'Maison')).toBe('Maison: Thanks for coming in, Sarah! Reply STOP to opt out');
  });
  it('adds a full stop and does not double-wrap', () => {
    const once = formatMessage('Thanks Sarah', 'Maison');
    expect(once).toBe('Maison: Thanks Sarah. Reply STOP to opt out');
    expect(formatMessage(once, 'Maison')).toBe(once);
  });
  it('re-wraps an edited body that lost its footer', () => {
    expect(formatMessage('Maison: Hi Sarah, see you soon!', 'Maison')).toBe('Maison: Hi Sarah, see you soon! Reply STOP to opt out');
    expect(stripWrapper('Maison - hello. Reply STOP to opt out.', 'Maison')).toBe('hello.');
  });
  it('appends the booking link to rebook texts', () => {
    expect(ensureBookingLink('Time for a refresh', 'https://b.co/x')).toBe('Time for a refresh. Book here: https://b.co/x');
    expect(ensureBookingLink('Book at https://b.co/x', 'https://b.co/x')).toBe('Book at https://b.co/x');
  });
});

describe('offer detection (thank-you and check-in)', () => {
  it.each([
    '20% off your next visit',
    'Enjoy a discount next time',
    'Use promo code HAIR10',
    'Here is a voucher for you',
    'Get a free treatment',
    'Special offer this week',
    'Save $10 when you rebook',
    'Our summer sale is on',
  ])('flags "%s"', (text) => {
    expect(findOfferLanguage(text)).not.toBeNull();
  });
  it.each([
    'Feel free to message me if anything feels off',
    'We only use HEMA-free products for you',
    'Thanks for coming in today, Sarah!',
    'Let me know how your lashes are settling in',
    'Deal with any itching by rinsing with cool water',
  ])('allows "%s"', (text) => {
    expect(findOfferLanguage(text)).toBeNull();
  });
});

describe('quiet hours (8am-8pm salon time)', () => {
  it('detects quiet hours in the salon timezone', () => {
    expect(isQuietHours(at('2026-10-01T23:30:00Z'), NY)).toBe(false); // 7:30pm NY
    expect(isQuietHours(at('2026-10-02T00:30:00Z'), NY)).toBe(true); // 8:30pm NY
    expect(isQuietHours(at('2026-10-01T11:59:00Z'), NY)).toBe(true); // 7:59am NY
    expect(isQuietHours(at('2026-10-01T12:00:00Z'), NY)).toBe(false); // 8:00am NY
  });
  it('shifts late evening to the next 8am', () => {
    expect(nextAllowedSendTime(at('2026-10-02T01:00:00Z'), NY).toISOString()).toBe('2026-10-02T12:00:00.000Z');
  });
  it('shifts early morning to 8am the same day', () => {
    expect(nextAllowedSendTime(at('2026-10-01T09:00:00Z'), NY).toISOString()).toBe('2026-10-01T12:00:00.000Z');
  });
  it('handles Australian timezones', () => {
    // 9pm in Sydney (AEST, UTC+10) → 8am next day
    expect(nextAllowedSendTime(at('2026-07-01T11:00:00Z'), 'Australia/Sydney').toISOString()).toBe('2026-07-01T22:00:00.000Z');
  });
});

describe('Canada 24-month rule', () => {
  const now = at('2026-09-28T15:00:00Z');
  it('blocks rebook texts with no visit in 24 months', () => {
    expect(canadaRebookBlocked('CA', 'rebook', at('2024-09-01T00:00:00Z'), now)).toBe(true);
    expect(canadaRebookBlocked('CA', 'rebook', null, now)).toBe(true);
  });
  it('allows recent clients, other text types and other countries', () => {
    expect(canadaRebookBlocked('CA', 'rebook', at('2025-01-01T00:00:00Z'), now)).toBe(false);
    expect(canadaRebookBlocked('CA', 'check_in', at('2020-01-01T00:00:00Z'), now)).toBe(false);
    expect(canadaRebookBlocked('US', 'rebook', at('2020-01-01T00:00:00Z'), now)).toBe(false);
  });
});

describe('send decision', () => {
  const account = { name: 'Maison', country: 'US', timezone: NY, booking_link: 'https://b.co/m' };
  const client = { sms_consent: true, opted_out_at: null, phone: '+12125550101' };
  const base = { type: 'thank_you' as const, body: 'Thanks Sarah!', enabled: true, client, account, lastVisitAt: null, now: at('2026-10-01T16:00:00Z') };

  it('sends a wrapped text in business hours', () => {
    expect(decideSend(base)).toEqual({ action: 'send', body: 'Maison: Thanks Sarah! Reply STOP to opt out' });
  });
  it('never sends without consent or after opt-out', () => {
    expect(decideSend({ ...base, client: { ...client, sms_consent: false } }).action).toBe('skip');
    expect(decideSend({ ...base, client: { ...client, opted_out_at: '2026-09-01T00:00:00Z' } }).action).toBe('skip');
    expect(decideSend({ ...base, client: { ...client, phone: null } }).action).toBe('skip');
  });
  it('reschedules during quiet hours', () => {
    const d = decideSend({ ...base, now: at('2026-10-02T02:00:00Z') });
    expect(d.action).toBe('reschedule');
    if (d.action === 'reschedule') expect(d.sendAt.toISOString()).toBe('2026-10-02T12:00:00.000Z');
  });
  it('fails thank-you texts containing offers', () => {
    expect(decideSend({ ...base, body: 'Thanks! 10% off next time' }).action).toBe('fail');
  });
  it('allows offers in rebook texts and adds the booking link', () => {
    const d = decideSend({ ...base, type: 'rebook', body: 'Due back soon', lastVisitAt: at('2026-09-01T00:00:00Z') });
    expect(d).toEqual({ action: 'send', body: 'Maison: Due back soon. Book here: https://b.co/m Reply STOP to opt out' });
  });
  it('applies the Canada rule to rebook texts', () => {
    const d = decideSend({ ...base, type: 'rebook', account: { ...account, country: 'CA' }, lastVisitAt: at('2023-01-01T00:00:00Z') });
    expect(d.action).toBe('skip');
  });
});

describe('default send times', () => {
  const visitAt = at('2026-10-01T18:00:00Z'); // 2pm NY, Thu 1 Oct
  const now = at('2026-10-01T19:00:00Z'); // 3pm NY
  it('thank-you goes now', () => {
    expect(defaultSendAt('thank_you', { visitAt, rebookWeeks: 6, timezone: NY, now })!.toISOString()).toBe(now.toISOString());
  });
  it('thank-you logged at 9pm waits until 8am', () => {
    const late = at('2026-10-02T01:00:00Z');
    expect(defaultSendAt('thank_you', { visitAt, rebookWeeks: 6, timezone: NY, now: late })!.toISOString()).toBe('2026-10-02T12:00:00.000Z');
  });
  it('check-in on day 2 at 11am', () => {
    expect(defaultSendAt('check_in', { visitAt, rebookWeeks: 6, timezone: NY, now })!.toISOString()).toBe('2026-10-03T15:00:00.000Z');
  });
  it('rebook one week before the rebook date at 10am', () => {
    // 6 weeks after 1 Oct = 12 Nov; minus 7 days = 5 Nov 10am EST (UTC-5)
    expect(defaultSendAt('rebook', { visitAt, rebookWeeks: 6, timezone: NY, now })!.toISOString()).toBe('2026-11-05T15:00:00.000Z');
  });
  it('no rebook text without an interval', () => {
    expect(defaultSendAt('rebook', { visitAt, rebookWeeks: null, timezone: NY, now })).toBeNull();
  });
});

describe('inbound keywords', () => {
  it.each(['STOP', 'stop', ' Stop. ', 'UNSUBSCRIBE', 'unsubscribe', 'cancel', 'STOPALL', 'opt out'])('"%s" opts out', (b) => {
    expect(parseInboundKeyword(b)).toBe('stop');
  });
  it('START opts back in; normal replies are ignored', () => {
    expect(parseInboundKeyword('START')).toBe('start');
    expect(parseInboundKeyword('Thanks, see you then!')).toBeNull();
    expect(parseInboundKeyword("Please don't stop")).toBeNull();
  });
});
