import { describe, expect, it } from 'vitest';
import { emptyCard } from '@/lib/card';
import { findOfferLanguage, STOP_FOOTER } from '@/lib/followups/compliance';
import { finalizeDrafts, templateTexts, type DraftInput } from '@/lib/followups/draft';

const input: DraftInput = {
  salonName: 'Maison',
  bookingLink: 'https://book.example.com/maison',
  trade: 'hair',
  clientFirstName: 'Sarah',
  card: { ...emptyCard('hair'), service: 'Roots + gloss', remember: ['Getting married in June'], rebook_weeks: 6 },
  rebookDueLabel: 'Thu 12 Nov',
};

describe('follow-up drafts', () => {
  it('templates are compliant', () => {
    const texts = finalizeDrafts(templateTexts(input), input);
    for (const t of Object.values(texts)) {
      expect(t.startsWith('Maison: ')).toBe(true);
      expect(t.endsWith(STOP_FOOTER)).toBe(true);
    }
    expect(findOfferLanguage(texts.thank_you)).toBeNull();
    expect(findOfferLanguage(texts.check_in)).toBeNull();
    expect(texts.rebook).toContain('https://book.example.com/maison');
  });

  it('replaces a model draft that sneaks in an offer', () => {
    const texts = finalizeDrafts(
      { thank_you: 'Thanks Sarah! Enjoy 10% off your next visit.', check_in: 'Hi Sarah, how is the colour?', rebook: 'Time to book, Sarah!' },
      input,
    );
    expect(texts.thank_you).not.toContain('10%');
    expect(texts.check_in).toBe('Maison: Hi Sarah, how is the colour? Reply STOP to opt out');
    expect(texts.rebook).toBe('Maison: Time to book, Sarah! Book here: https://book.example.com/maison Reply STOP to opt out');
  });
});
