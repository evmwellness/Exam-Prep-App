# MathQuest 🐧🐨

A bright, playful math practice app for junior school kids, built with
React, TypeScript, Tailwind CSS and Vite.

Percy the Penguin and Kiki the Koala guide kids through a curriculum of
addition, subtraction, multiplication and division practice matched to
their school stage, with instant feedback, hints, stars, and a progress
dashboard that tracks quiz history over time (saved locally in the
browser).

## Features

- **Curriculum stages** — Prep (addition/subtraction to 20), Year 1
  (building on this, still to 20) and Year 2 (addition/subtraction to
  100, plus multiplication and division)
- **Individual times-table levels** — Year 2 multiplication and division
  are broken into their own 2× through 12× levels, practiced one at a time
- **Road/path progression** — each stage+operation is a winding road of
  level stops; Percy and Kiki stand on the current stop, finishing a level
  unlocks the next one, and stars show mastery
- **Short practice blocks** — 5 to 10 multiple-choice questions per round,
  with instant right/wrong feedback
- **Quick Memory Check** — a mixed 5-10 question recap drawing on every
  level practiced that session, to reinforce retention
- **Hints** from the mascots that explain the underlying concept
- **Stars and celebrations** (confetti!) for strong scores
- **Progress dashboard** — best/average/last score per level, plus a full
  quiz history — all stored in `localStorage`
- **Parent-controlled screen time** — a parent sets an overall 5 or 10
  minute session limit from the PIN-free "Parent Zone" (gated behind a
  quick math challenge so kids can't change it themselves). A warning
  banner appears with 1 minute 30 seconds left, and the app locks with a
  "Screen Time's Up!" screen when the session ends, until a parent
  unlocks more time.
- **Parent performance report** — a second Parent Zone tab breaks down
  every level's attempts, average/best score and trend, and highlights
  strengths vs. areas to improve
- **Bright, shape-filled, kid-friendly UI**

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build
- `npm run lint` — run oxlint
