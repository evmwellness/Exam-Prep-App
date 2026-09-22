# MathQuest 🐧🐨

A bright, playful math practice app for junior school kids, built with
React, TypeScript, Tailwind CSS and Vite.

Percy the Penguin and Kiki the Koala guide kids through addition,
subtraction, multiplication and division practice across four difficulty
levels, with instant feedback, hints, stars, and a progress dashboard that
tracks quiz history over time (saved locally in the browser).

## Features

- **Four operations** — addition, subtraction, multiplication, division
- **Four difficulty levels per operation**, from first steps to super star
- **Short practice blocks** — 5 to 10 multiple-choice questions per round,
  with instant right/wrong feedback
- **Hints** from the mascots that explain the underlying concept
- **Stars and celebrations** (confetti!) for strong scores
- **Progress dashboard** — best/average/last score per operation & level,
  plus a full quiz history — all stored in `localStorage`
- **Parent-controlled screen time** — a parent sets an overall 5 or 10
  minute session limit from the PIN-free "Parent Zone" (gated behind a
  quick math challenge so kids can't change it themselves). A warning
  banner appears with 1 minute 30 seconds left, and the app locks with a
  "Screen Time's Up!" screen when the session ends, until a parent
  unlocks more time.
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
