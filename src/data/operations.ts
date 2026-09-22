import type { Operation, OperationMeta, Level } from '../types';

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

export const LEVELS: { level: Level; label: string; hint: string }[] = [
  { level: 1, label: 'Level 1', hint: 'Just starting out' },
  { level: 2, label: 'Level 2', hint: 'Getting confident' },
  { level: 3, label: 'Level 3', hint: 'Building speed' },
  { level: 4, label: 'Level 4', hint: 'Super star' },
];

export function getOperationMeta(op: Operation): OperationMeta {
  return OPERATIONS.find((o) => o.key === op)!;
}
