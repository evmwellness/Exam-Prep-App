import { describe, expect, it } from 'vitest';
import { postProcessCard } from '@/lib/extraction/extract';
import { WORKED_EXAMPLES } from '@/lib/extraction/examples';
import { extractionSystemPrompt } from '@/lib/extraction/prompt';
import { TRADE_FIELDS, TRADES } from '@/lib/trades';
import { checkCard, FIXTURES } from './fixtures/transcripts';

describe('fixtures and examples are well-formed', () => {
  for (const trade of TRADES) {
    const keys = TRADE_FIELDS[trade].map((f) => f.key);
    it(`${trade}: 10 fixtures referencing real fields`, () => {
      expect(FIXTURES[trade]).toHaveLength(10);
      for (const fx of FIXTURES[trade]) {
        for (const k of [...Object.keys(fx.expect.fields ?? {}), ...(fx.expect.emptyFields ?? [])]) expect(keys).toContain(k);
      }
    });
    it(`${trade}: 3 worked examples with every field`, () => {
      expect(WORKED_EXAMPLES[trade]).toHaveLength(3);
      for (const ex of WORKED_EXAMPLES[trade]) expect(Object.keys(ex.card.fields).sort()).toEqual([...keys].sort());
    });
    it(`${trade}: system prompt includes the examples and no per-request data`, () => {
      const prompt = extractionSystemPrompt(trade);
      expect(prompt).toContain('<example index="3">');
      expect(prompt).not.toContain('{{VISIT_DATE}}');
    });
  }
});

describe('post-processing', () => {
  it('normalises spoken numbers the model left in trade fields', () => {
    const card = postProcessCard(
      {
        client_name: 'Sarah',
        service: ' Roots + gloss ',
        fields: {
          roots_formula: 'seven N plus eight point one',
          lengths_formula: 'Gloss nine V with clear',
          developer_volume: 'twenty volume',
          processing_time: 'Roots thirty-five minutes; gloss ten minutes',
          cut_notes: '',
        },
        next_time: ['A touch warmer', 'A touch warmer', ''],
        remember: ['Getting married in June'],
        rebook_weeks: 6,
        sensitivities: 'Sensitive around the hairline',
      },
      'hair',
    );
    expect(card.fields).toEqual({
      roots_formula: '7N + 8.1',
      lengths_formula: 'Gloss 9V with clear',
      developer_volume: '20 vol',
      processing_time: 'Roots 35 min; gloss 10 min',
      cut_notes: '',
    });
    expect(card.next_time).toEqual(['A touch warmer']);
    expect(card.service).toBe('Roots + gloss');
    expect(checkCard(card, FIXTURES.hair[0])).toEqual([]);
  });

  it('fills missing fields and drops out-of-range rebook intervals', () => {
    const card = postProcessCard({ fields: { lash_map: 'classic, c curl, 9 to 12 mm, point one five' }, rebook_weeks: 400 }, 'lash_brow');
    expect(card.fields.lash_map).toBe('classic, C curl, 9-12 mm, 0.15');
    expect(card.fields.adhesive).toBe('');
    expect(card.rebook_weeks).toBeNull();
  });
});
