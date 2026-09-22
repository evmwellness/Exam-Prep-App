export type Operation = 'addition' | 'subtraction' | 'multiplication' | 'division';

export type Level = 1 | 2 | 3 | 4;

export interface Question {
  a: number;
  b: number;
  operation: Operation;
  answer: number;
}

export interface QuizAnswer {
  question: Question;
  userAnswer: number | null;
  correct: boolean;
  timeMs: number;
}

export interface QuizResult {
  id: string;
  date: string; // ISO string
  operation: Operation;
  level: Level;
  total: number;
  correct: number;
  durationSeconds: number;
  answers: QuizAnswer[];
}

export interface OperationMeta {
  key: Operation;
  label: string;
  symbol: string;
  color: string;
  colorSoft: string;
  emoji: string;
}
