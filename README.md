# GP Exam Prep — AKT & KFP

An offline-first installable web app (PWA) for practicing RACGP AKT and KFP
exam-style multiple choice questions. Everything runs and stores data
locally on-device (IndexedDB) — no login, no server, works without a
connection once installed.

## Features

- **Original question bank**: 120 AKT single-best-answer questions and 14
  KFP clinical cases (70 MCQ-adapted items), spanning all major curriculum
  specialties. Content is AI-generated study material mapped to RACGP
  curriculum domains and current Australian general practice guidelines —
  not a reproduction of real past exam papers (RACGP does not publish
  those). See the in-app Settings page for the full content disclaimer,
  including an important note that the **real KFP exam is short-answer,
  not multiple choice**.
- **Practice modes**: full exam simulation (timed to match question count),
  20–25 minute short interval learning blocks, and fully custom sessions
  (question count, specialty filters, weak-area weighting).
- **Countdown timer**, question flagging, and a jump-to-question grid —
  mirrors real exam navigation.
- **End-of-session breakdown**: every wrong or skipped answer is expandable
  to show why each option is right or wrong.
- **Weak-area analytics**: per-specialty accuracy tracking with a weighted
  "focus on weak areas" practice mode.
- **History**: full session log, accuracy trend chart, and specialty
  breakdowns.
- **Streaks & badges**: daily practice streak with a calendar heatmap, plus
  records for streak length, accuracy, and pace.
- **Daily reminder notifications** (best-effort, in-app/foreground-based —
  see Settings for platform limitations).
- **Backup**: export/import your progress as JSON; everything stays local.

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # typecheck + production build
npm run lint      # oxlint
```

## Tech stack

Vite, React, TypeScript, Tailwind CSS v4, Dexie (IndexedDB), React Router
(hash-based, for static/offline hosting), Recharts, `vite-plugin-pwa`.

## Expanding the question bank

Question data lives in `src/data/akt/group*.ts` and `src/data/kfp/group*.ts`,
typed against `src/types.ts`. Add new files following the same schema and
wire them into `src/data/akt/index.ts` / `src/data/kfp/index.ts`.
