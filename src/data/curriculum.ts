import type { CurriculumLevel, Operation, Stage, StageMeta } from '../types';

export const STAGES: StageMeta[] = [
  {
    key: 'prep',
    label: 'Prep',
    ageHint: 'Ages 4-5',
    description: 'First steps with addition and subtraction, up to 20',
    color: '#3fb950',
    colorSoft: '#caffbf',
    emoji: '🌱',
  },
  {
    key: 'year1',
    label: 'Year 1',
    ageHint: 'Ages 5-6',
    description: 'Building confidence with addition and subtraction to 20',
    color: '#3d8bfd',
    colorSoft: '#bde0fe',
    emoji: '🌼',
  },
  {
    key: 'year2',
    label: 'Year 2',
    ageHint: 'Ages 6-7',
    description: 'Addition and subtraction to 100, plus times tables',
    color: '#b185db',
    colorSoft: '#cdb4db',
    emoji: '🚀',
  },
];

const TABLES = Array.from({ length: 11 }, (_, i) => i + 2); // 2..12

function rangeLevel(
  stage: Stage,
  operation: 'addition' | 'subtraction',
  maxNumber: number,
  order: number,
): CurriculumLevel {
  return {
    id: `${stage}-${operation}-${maxNumber}`,
    stage,
    operation,
    kind: 'range',
    label: `${operation === 'addition' ? 'Addition' : 'Subtraction'} to ${maxNumber}`,
    shortLabel: `To ${maxNumber}`,
    order,
    maxNumber,
  };
}

function tableLevel(
  stage: Stage,
  operation: 'multiplication' | 'division',
  table: number,
  order: number,
): CurriculumLevel {
  return {
    id: `${stage}-${operation}-${table}`,
    stage,
    operation,
    kind: 'table',
    label: operation === 'multiplication' ? `${table} times table` : `Dividing by ${table}`,
    shortLabel: `${table}×`,
    order,
    table,
  };
}

export const CURRICULUM: CurriculumLevel[] = [
  // Prep — addition & subtraction to 20
  rangeLevel('prep', 'addition', 20, 1),
  rangeLevel('prep', 'subtraction', 20, 1),

  // Year 1 — building on Prep, still within 20 but with less scaffolding
  rangeLevel('year1', 'addition', 20, 1),
  rangeLevel('year1', 'subtraction', 20, 1),

  // Year 2 — addition & subtraction to 100, plus times tables 2-12
  rangeLevel('year2', 'addition', 100, 1),
  rangeLevel('year2', 'subtraction', 100, 1),
  ...TABLES.map((t, i) => tableLevel('year2', 'multiplication', t, i + 1)),
  ...TABLES.map((t, i) => tableLevel('year2', 'division', t, i + 1)),
];

export function getLevelById(id: string): CurriculumLevel | undefined {
  return CURRICULUM.find((l) => l.id === id);
}

export function getOperationsForStage(stage: Stage): Operation[] {
  const ops = new Set<Operation>();
  for (const level of CURRICULUM) {
    if (level.stage === stage) ops.add(level.operation);
  }
  return Array.from(ops);
}

export function getTrack(stage: Stage, operation: Operation): CurriculumLevel[] {
  return CURRICULUM.filter((l) => l.stage === stage && l.operation === operation).sort(
    (a, b) => a.order - b.order,
  );
}

export function getStageMeta(stage: Stage): StageMeta {
  return STAGES.find((s) => s.key === stage)!;
}
