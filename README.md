> This repo also contains **[check Prep](check-prep/README.md)**: 20-minute RACGP _check_ summaries with AKT/KFP questions (in `check-prep/`).

# Type Mates 🦁🦆🐦

A colourful, playful touch-typing and reading app for Australian primary school kids, from **Prep to Year 5** - built to get students exam-ready for the **NAPLAN** story-writing task.

Three mascot guides lead the way:

- **Larry the Lion** 🦁 - Home Row hero (Prep, Year 3)
- **Percy the Platypus** 🦫 - Word explorer (Year 1, Year 4)
- **Ellie the Emu** 🐦 - Speedy reader (Year 2, Year 5)

## What's inside

Each year level (Prep, Year 1, Year 2, Year 3, Year 4, Year 5) has its own short, bite-sized lesson set:

1. **Meet the Keys** - a finger-placement drill introducing the new keys for that level (starting with the home row, and building up through reaches, pinky stretches, capitals/Shift, and finally numbers & punctuation), shown on a colour-coded virtual keyboard.
2. **Word Adventure** - typing practice using year-level-appropriate spelling/sight words and sentences.
3. **Story Time** - a short illustrated reading passage starring the three mascots, a comprehension quiz, and a key-sentence typing drill that ties reading comprehension to typing practice.
4. **NAPLAN Challenge** (Year 5 only) - a timed, exam-conditions story-typing test modelled on the NAPLAN writing task, complete with a results "certificate", WPM and accuracy stats.

Progress (stars per lesson) is saved locally in the browser (`localStorage`), and each year level unlocks once the previous level's key, word and reading lessons have been attempted.

## Tech stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- Hand-drawn SVG mascots (no external image/audio assets) and simple Web Audio API sound effects

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build
```
