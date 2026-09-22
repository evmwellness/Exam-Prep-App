import type { Level, Operation, Question } from '../types';

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateAddition(level: Level): Question {
  let a: number, b: number;
  switch (level) {
    case 1:
      a = randInt(1, 10);
      b = randInt(1, 10);
      break;
    case 2:
      a = randInt(1, 20);
      b = randInt(1, 20);
      break;
    case 3:
      a = randInt(10, 50);
      b = randInt(10, 50);
      break;
    default:
      a = randInt(20, 100);
      b = randInt(20, 100);
  }
  return { a, b, operation: 'addition', answer: a + b };
}

function generateSubtraction(level: Level): Question {
  let a: number, b: number;
  switch (level) {
    case 1:
      a = randInt(1, 10);
      b = randInt(0, a);
      break;
    case 2:
      a = randInt(1, 20);
      b = randInt(0, a);
      break;
    case 3:
      a = randInt(10, 50);
      b = randInt(0, a);
      break;
    default:
      a = randInt(20, 100);
      b = randInt(0, a);
  }
  return { a, b, operation: 'subtraction', answer: a - b };
}

function generateMultiplication(level: Level): Question {
  let a: number, b: number;
  switch (level) {
    case 1:
      a = randInt(1, 5);
      b = randInt(1, 5);
      break;
    case 2:
      a = randInt(1, 10);
      b = randInt(1, 10);
      break;
    case 3:
      a = randInt(1, 12);
      b = randInt(1, 12);
      break;
    default:
      a = randInt(10, 20);
      b = randInt(1, 12);
  }
  return { a, b, operation: 'multiplication', answer: a * b };
}

function generateDivision(level: Level): Question {
  let divisor: number, quotient: number;
  switch (level) {
    case 1:
      divisor = randInt(1, 5);
      quotient = randInt(1, 5);
      break;
    case 2:
      divisor = randInt(1, 10);
      quotient = randInt(1, 10);
      break;
    case 3:
      divisor = randInt(2, 12);
      quotient = randInt(2, 12);
      break;
    default:
      divisor = randInt(2, 12);
      quotient = randInt(10, 20);
  }
  const dividend = divisor * quotient;
  return { a: dividend, b: divisor, operation: 'division', answer: quotient };
}

export function generateQuestion(operation: Operation, level: Level): Question {
  switch (operation) {
    case 'addition':
      return generateAddition(level);
    case 'subtraction':
      return generateSubtraction(level);
    case 'multiplication':
      return generateMultiplication(level);
    case 'division':
      return generateDivision(level);
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
