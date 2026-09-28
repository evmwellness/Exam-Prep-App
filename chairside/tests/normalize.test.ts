import { describe, expect, it } from 'vitest';
import { normalizeFieldValue, spokenNumbersToDigits } from '@/lib/extraction/normalize';

describe('spoken numbers', () => {
  it.each([
    ['seven N plus eight point one', '7 N plus 8.1'],
    ['point oh seven', '0.07'],
    ['point one five', '0.15'],
    ['thirty-five minutes', '35 minutes'],
    ['twenty volume', '20 volume'],
    ['nine to twelve', '9 to 12'],
  ])('%s → %s', (input, expected) => {
    expect(spokenNumbersToDigits(input)).toBe(expected);
  });
  it('leaves pronoun "one" alone', () => {
    expect(spokenNumbersToDigits('the one with the gold heart')).toBe('the one with the gold heart');
  });
});

describe('field normalisation', () => {
  it.each([
    ['seven N plus eight point one', '7N + 8.1'],
    ['twenty volume', '20 vol'],
    ['20-vol', '20 vol'],
    ['thirty-five minutes', '35 min'],
    ['Gloss nine V with clear, ten minutes', 'Gloss 9V with clear, 10 min'],
    ['classic, C-curl, nine to twelve mil, point one five', 'classic, C curl, 9-12 mm, 0.15'],
    ['hybrid, d curl, 8 to 11 mm, point oh seven', 'hybrid, D curl, 8-11 mm, 0.07'],
    ['cc curl', 'CC curl'],
    ['5 N + 6 N', '5N + 6N'],
    ['short almond', 'short almond'],
    ['OPI Bubble Bath', 'OPI Bubble Bath'],
    ['2026-09-28', '2026-09-28'],
    ['7N + 8.1', '7N + 8.1'],
  ])('%s → %s', (input, expected) => {
    expect(normalizeFieldValue(input)).toBe(expected);
  });
  it('is idempotent', () => {
    const once = normalizeFieldValue('Roots seven N plus eight point one, twenty volume, thirty five minutes');
    expect(normalizeFieldValue(once)).toBe(once);
    expect(once).toBe('Roots 7N + 8.1, 20 vol, 35 min');
  });
});
