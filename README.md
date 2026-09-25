# GP Exam Prep — AKT & KFP

An offline-first installable web app (PWA) for practicing RACGP AKT and KFP
exam-style multiple choice questions. Everything runs and stores data
locally on-device (IndexedDB) — no login, no server, works without a
connection once installed.

## Features

- **Original question bank**: 120 AKT single-best-answer questions; for KFP,
  100 single-best-answer MCQs and 10 Extended Matching Question (EMQ) themes
  (50 items) matching RACGP's current KFP format (MCQ + EMQ, per recent
  candidate reports), plus a bonus legacy bank of 14 sequential clinical
  cases (70 items) for extra reasoning practice. Spans all major curriculum
  specialties. Content is AI-generated study material mapped to RACGP
  curriculum domains and current Australian general practice guidelines —
  not a reproduction of real past exam papers (RACGP does not publish
  those). See the in-app Settings page for the full content disclaimer.
  Exam formats can change — verify against the current RACGP candidate
  handbook before your sitting.
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

Question data lives in `src/data/akt/group*.ts` (AKT MCQs), `src/data/kfpMcq/group*.ts`
(KFP MCQs), `src/data/kfpEmq/group*.ts` (KFP EMQ themes), and `src/data/kfp/group*.ts`
(legacy KFP case bank), typed against `src/types.ts`. Add new files following
the same schema and wire them into the matching `index.ts` aggregator.

## Hush — baby sleep timer (`public/sleep/`)

A separate, dependency-free PWA served at `/sleep/` alongside the exam app
(e.g. `https://<user>.github.io/Exam-Prep-App/sleep/`).

- Sounds: white noise, crackling fire, ocean waves, rainforest, snow falling,
  gentle wind, and Bach's Prelude in C (BWV 846, public domain) for study.
  All are synthesised on the device in a Web Worker, so there are no audio
  files and it works offline.
- Timers: 2 hours and 10 hours presets, plus 15/25/30/45 min, 1, 1½, 3, 8 hours,
  no timer, or a custom length. The last 30 s fade out where the browser allows it.
- Black screen mode while playing (dim countdown fades to pure black; tap to
  show). Optional "keep screen on".
- Keeps playing when the phone is locked or you switch to other apps. It plays
  through an `<audio>` element with Media Session lock-screen controls.
