import type { CurriculumLevel, Question } from '../types';

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRangeAddition(maxNumber: number): Question {
  const a = randInt(1, maxNumber - 1);
  const b = randInt(1, maxNumber - a);
  return { a, b, operation: 'addition', answer: a + b };
}

function generateRangeSubtraction(maxNumber: number): Question {
  const a = randInt(2, maxNumber);
  const b = randInt(0, a);
  return { a, b, operation: 'subtraction', answer: a - b };
}

function generateTableMultiplication(table: number): Question {
  const other = randInt(1, 12);
  const [a, b] = Math.random() < 0.5 ? [table, other] : [other, table];
  return { a, b, operation: 'multiplication', answer: a * b };
}

function generateTableDivision(table: number): Question {
  const quotient = randInt(1, 12);
  const dividend = table * quotient;
  return { a: dividend, b: table, operation: 'division', answer: quotient };
}

export function generateQuestion(level: CurriculumLevel): Question {
  switch (level.operation) {
    case 'addition':
      return generateRangeAddition(level.maxNumber ?? 20);
    case 'subtraction':
      return generateRangeSubtraction(level.maxNumber ?? 20);
    case 'multiplication':
      return generateTableMultiplication(level.table ?? 2);
    case 'division':
      return generateTableDivision(level.table ?? 2);
  }
}

export function generateChoices(question: Question): number[] {
  const choices = new Set<number>([question.answer]);
  const spread = Math.max(2, Math.round(Math.abs(question.answer) * 0.2) + 1);
  let guard = 0;
  while (choices.size < 4 && guard < 50) {
    guard++;
    const offset = randInt(-spread, spread) || 1;
    const candidate = question.answer + offset;
    if (candidate < 0) continue;
    choices.add(candidate);
  }
  const arr = Array.from(choices);
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const MIN_BLOCK_SIZE = 5;
const MAX_BLOCK_SIZE = 10;

/** A short practice block of 5-10 questions from a single curriculum level. */
export function generateQuizBlock(level: CurriculumLevel): Question[] {
  return generateMixedBlock([level]);
}

/**
 * A short block of 5-10 questions drawn evenly at random from one or more
 * curriculum levels — used both for single-level practice (one level) and
 * the end-of-session memory check (several levels mixed together).
 */
export function generateMixedBlock(levels: CurriculumLevel[], count?: number): Question[] {
  const size = count ?? randInt(MIN_BLOCK_SIZE, MAX_BLOCK_SIZE);
  const questions: Question[] = [];
  const seen = new Set<string>();
  let attempts = 0;
  while (questions.length < size && attempts < size * 20) {
    attempts++;
    const level = levels[randInt(0, levels.length - 1)];
    const q = generateQuestion(level);
    const key = `${level.id}-${q.a}-${q.operation}-${q.b}`;
    if (seen.has(key) && attempts < size * 15) continue;
    seen.add(key);
    questions.push(q);
  }
  return questions;
}
