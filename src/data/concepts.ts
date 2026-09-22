import type { Operation } from '../types';

export const CONCEPT_TIPS: Record<Operation, string[]> = {
  addition: [
    "Addition means putting groups together to make a bigger group!",
    "Try counting on your fingers, starting from the bigger number.",
    "If you know 3 + 4, then 4 + 3 gives the same answer — order doesn't matter!",
  ],
  subtraction: [
    "Subtraction means taking some away from a group.",
    "Start at the big number and count backwards to the small number.",
    "Subtraction is the opposite of addition — it can help to check with a + sign!",
  ],
  multiplication: [
    "Multiplication is fast adding — it means groups of the same size!",
    "3 × 4 means 3 groups of 4, or 4 + 4 + 4.",
    "Skip counting helps: 2, 4, 6, 8 is counting by 2s!",
  ],
  division: [
    "Division means sharing into equal groups.",
    "12 ÷ 3 asks: if I share 12 things into 3 groups, how many in each group?",
    "Division is the opposite of multiplication — they're best friends!",
  ],
};

export function randomTip(operation: Operation): string {
  const tips = CONCEPT_TIPS[operation];
  return tips[Math.floor(Math.random() * tips.length)];
}

export const ENCOURAGEMENTS = [
  "You've got this!",
  "Great thinking!",
  "Super job!",
  "Keep going, star!",
  "You're on fire!",
  "Wow, nice work!",
];

export const CORRECT_PRAISE = [
  "Yes! Amazing!",
  "That's right!",
  "Woohoo, correct!",
  "Brilliant!",
  "You nailed it!",
];

export const TRY_AGAIN = [
  "Almost! Let's try the next one.",
  "So close! You'll get it next time.",
  "Nice try — keep practicing!",
  "Good effort! Let's keep going.",
];

export function randomFrom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}
