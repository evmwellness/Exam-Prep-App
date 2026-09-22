export type Operation = 'addition' | 'subtraction' | 'multiplication' | 'division';

export type SessionMinutes = 5 | 10;

export type Stage = 'prep' | 'year1' | 'year2';

export type LevelKind = 'range' | 'table';

/** One stop on a stage+operation road: either a number-range level (add/sub) or a times-table level (mult/div). */
export interface CurriculumLevel {
  id: string;
  stage: Stage;
  operation: Operation;
  kind: LevelKind;
  label: string;
  shortLabel: string;
  order: number;
  maxNumber?: number; // for 'range' levels
  table?: number; // for 'table' levels (2-12)
}

export interface StageMeta {
  key: Stage;
  label: string;
  ageHint: string;
  description: string;
  color: string;
  colorSoft: string;
  emoji: string;
}

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
  levelId: string;
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

export interface ParentSettings {
  sessionMinutes: SessionMinutes;
}

export interface ScreenSessionState {
  startedAt: number; // epoch ms
  sessionMinutes: SessionMinutes;
  locked: boolean;
}
