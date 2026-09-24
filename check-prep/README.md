# check Prep – 20-minute RACGP check revision

A simple study app for the Australian **FRACGP AKT and KFP exams**. It covers the **last 60 RACGP _check_ units**: Unit 583 (Jun 2021) to Unit 637 (Sep 2026), plus Supplements 1, 2, 4, 5 and 6.

Each unit is a study session with three tabs:

1. **Summary (20 min reading)**: overview, key-point sections, a "numbers, doses & criteria" list, a worked case, practice vignettes, red flags, exam traps and AKT/KFP tips. Every unit has at least 20 minutes of reading at a careful study pace (120 words a minute).
2. **AKT (9 marks)**: 5 single-best-answer MCQs plus a 4-item extended matching question (EMQ), with explanations. SBA options are shuffled on every attempt.
3. **KFP (5–8 marks)**: a key-feature case in the current KFP format. The scenario unfolds in stages, and each stage has a single-best-answer, "choose N" or extended matching question. "Choose N" questions give partial marks.

Other features:

- Topics covered and the main specialty (plus related specialties) shown for every unit
- Search by topic, and filter or browse by specialty
- Mixed AKT quiz (10/20/40 questions) across all units or one specialty
- Built-in 20-minute reading timer. Questions come afterwards and are not timed.
- Progress (read, best AKT score, KFP done) saved in the browser

## About the content

Unit numbers, dates, titles, topics and learning outcomes come from the public RACGP
[check units](https://www.racgp.org.au/check/check-units) pages. The 2021 unit titles come from the RACGP 2021 check program order form.
Full _check_ cases sit behind the gplearning login, so they are **not** reproduced here. The summaries and questions are original,
written to each unit's topics using Australian guidance (Therapeutic Guidelines, RACGP Red Book, Australian Immunisation Handbook,
Australian STI Management Guidelines, NCSP guidelines and others). This app is not affiliated with the RACGP. Always check current guidelines before
applying anything in practice, and complete the real units on gplearning for CPD.

## Adding a new month's unit

Add a `BaseUnit` object (see `src/types.ts`) to any file in `src/data/units/`, or create a new `batchNN.ts` that default-exports a
`BaseUnit[]`. Then add its extended sections, worked case, EMQ and KFP case to a file in `src/data/extra/` (a `Record<string, UnitExtension>`
keyed by unit id), and any further reading to `src/data/topup/`. Files are picked up automatically and sorted newest first.

## Running it

```bash
cd check-prep
npm install
npm run dev      # start the dev server
npm run build    # type-check and build to dist/ (static, can be hosted anywhere)
```
