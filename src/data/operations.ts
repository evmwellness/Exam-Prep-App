import type { Operation, OperationMeta, SessionMinutes } from '../types';

export const OPERATIONS: OperationMeta[] = [
  {
    key: 'addition',
    label: 'Addition',
    symbol: '+',
    color: '#3fb950',
    colorSoft: '#caffbf',
    emoji: '🧩',
  },
  {
    key: 'subtraction',
    label: 'Subtraction',
    symbol: '−',
    color: '#3d8bfd',
    colorSoft: '#bde0fe',
    emoji: '🧊',
  },
  {
    key: 'multiplication',
    label: 'Multiplication',
    symbol: '×',
    color: '#ff8fab',
    colorSoft: '#ffc8dd',
    emoji: '🎈',
  },
  {
    key: 'division',
    label: 'Division',
    symbol: '÷',
    color: '#b185db',
    colorSoft: '#cdb4db',
    emoji: '🍕',
  },
];

export const SCREEN_TIME_OPTIONS: { minutes: SessionMinutes; label: string; hint: string }[] = [
  { minutes: 5, label: '5 minutes', hint: 'A quick practice session' },
  { minutes: 10, label: '10 minutes', hint: 'A longer practice session' },
];

export function getOperationMeta(op: Operation): OperationMeta {
  return OPERATIONS.find((o) => o.key === op)!;
}
