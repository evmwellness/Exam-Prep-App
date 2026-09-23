# check Prep – 20-minute RACGP check revision

A simple study app for the Australian **FRACGP AKT and KFP exams**. It covers the **last 60 RACGP _check_ units**: Unit 583 (Jun 2021) to Unit 637 (Sep 2026), plus Supplements 1, 2, 4, 5 and 6.

Each unit is a 20-minute session:

1. **Summary (~9 min)**: overview, 4 key-point sections, red flags and AKT/KFP exam tips
2. **AKT MCQs (~6 min)**: 5 single-best-answer questions with explanations. Options are shuffled on every attempt.
3. **KFP case (~5 min)**: a key-feature case. Write short answers, reveal the model answer and self-mark.

Other features:

- Topics covered and the main specialty (plus related specialties) shown for every unit
- Search by topic, and filter or browse by specialty
- Mixed AKT quiz (10/20/40 questions) across all units or one specialty
- Built-in 20-minute timer with suggested pacing
- Progress (read, best AKT score, KFP done) saved in the browser

## About the content

Unit numbers, dates, titles, topics and learning outcomes come from the public RACGP
[check units](https://www.racgp.org.au/check/check-units) pages. The 2021 unit titles come from the RACGP 2021 check program order form.
Full _check_ cases sit behind the gplearning login, so they are **not** reproduced here. The summaries and questions are original,
written to each unit's topics using Australian guidance (Therapeutic Guidelines, RACGP Red Book, Australian Immunisation Handbook,
Australian STI Management Guidelines, NCSP guidelines and others). This app is not affiliated with the RACGP. Always check current guidelines before
applying anything in practice, and complete the real units on gplearning for CPD.

## Adding a new month's unit

Add a `Unit` object (see `src/types.ts`) to any file in `src/data/units/`, or create a new `batchNN.ts` that default-exports a
`Unit[]`. Files are picked up automatically and sorted newest first.

## Running it

```bash
cd check-prep
npm install
npm run dev      # start the dev server
npm run build    # type-check and build to dist/ (static, can be hosted anywhere)
```
