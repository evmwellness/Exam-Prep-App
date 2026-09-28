/**
 * Extraction eval: 10 sample transcripts per trade → Claude → card, checked
 * against the expected facts in tests/fixtures/transcripts.ts.
 *
 *   ANTHROPIC_API_KEY=... npm run test:extraction
 *
 * Calls the real API (30 requests), so it only runs when RUN_EXTRACTION_EVAL=1.
 * Prints a per-trade score table at the end.
 */
import { afterAll, describe, expect, it } from 'vitest';
import { extractCard } from '@/lib/extraction/extract';
import { TRADES, type Trade } from '@/lib/trades';
import { checkCard, FIXTURE_VISIT_DATE, FIXTURES } from './fixtures/transcripts';

const enabled = process.env.RUN_EXTRACTION_EVAL === '1' && Boolean(process.env.ANTHROPIC_API_KEY);

const results: { trade: Trade; id: string; problems: string[] }[] = [];

describe.skipIf(!enabled)('extraction eval (live Claude API)', () => {
  for (const trade of TRADES) {
    describe(trade, () => {
      it.concurrent.each(FIXTURES[trade].map((fx) => [fx.id, fx] as const))('%s', async (_id, fx) => {
        const card = await extractCard({ transcript: fx.transcript, trade, visitDate: FIXTURE_VISIT_DATE });
        const problems = checkCard(card, fx);
        results.push({ trade, id: fx.id, problems });
        expect(problems, `${fx.id}\n${JSON.stringify(card, null, 2)}`).toEqual([]);
      });
    });
  }

  afterAll(() => {
    const rows = TRADES.map((trade) => {
      const r = results.filter((x) => x.trade === trade);
      return { trade, passed: r.filter((x) => x.problems.length === 0).length, total: r.length };
    });
    console.table(rows);
    for (const r of results.filter((x) => x.problems.length)) console.log(`✗ ${r.id}: ${r.problems.join('; ')}`);
  });
});
