export type ExamType = 'AKT' | 'KFP'

export type Difficulty = 'easy' | 'moderate' | 'hard'

export const SPECIALTIES = [
  'Cardiovascular',
  'Respiratory',
  'Endocrine & Metabolic',
  'Renal & Urology',
  'Gastroenterology & Nutrition',
  'Musculoskeletal & Rheumatology',
  'Mental Health',
  'Neurology',
  'Dermatology',
  'ENT & Ophthalmology',
  "Women's Health",
  "Men's Health",
  'Sexual Health & STIs',
  'Child & Adolescent Health',
  'Aged Care & Geriatrics',
  'Palliative Care',
  'Emergency & Acute Care',
  'Infectious Disease & Immunisation',
  'Haematology & Oncology',
  'Preventive Care & Population Health',
  'Aboriginal & Torres Strait Islander Health',
  'Rural & Remote Health',
  'Ethics, Legal & Professional Practice',
  'Pharmacology & Therapeutics',
  'Practice Management & Quality',
  'Genomics',
] as const

export type Specialty = (typeof SPECIALTIES)[number]

export interface McqOption {
  key: string // 'A' | 'B' | 'C' | 'D' | 'E'
  text: string
}

/** A single standalone AKT-style multiple choice question. */
export interface AktQuestion {
  id: string
  exam: 'AKT'
  specialty: Specialty
  topic: string
  difficulty: Difficulty
  stem: string
  options: McqOption[]
  correctKey: string
  /** Overall teaching point / summary explanation. */
  explanation: string
  /** Why each option (including the correct one) is right or wrong, keyed by option key. */
  optionExplanations: Record<string, string>
  reference?: string
  tags?: string[]
}

/**
 * A single MCQ-adapted item within a KFP case. Real RACGP KFP items are
 * short-answer/extended-response; these are adapted to MCQ format for fast
 * self-testing and are clearly labelled as such in the UI.
 */
export interface KfpItem {
  id: string
  /** Extra clinical information revealed for this item, appended to the case vignette. */
  stemAddendum?: string
  question: string
  options: McqOption[]
  correctKey: string
  explanation: string
  optionExplanations: Record<string, string>
  difficulty: Difficulty
}

/** A KFP clinical case: one vignette with several linked, progressively-revealed items. */
export interface KfpCase {
  id: string
  exam: 'KFP'
  specialty: Specialty
  topic: string
  title: string
  vignette: string
  items: KfpItem[]
}

/** A flattened, practiceable unit — either a whole AKT question or one KFP case item. */
export interface PracticeItem {
  uid: string // AktQuestion.id, or `${caseId}::${itemId}` for KFP
  exam: ExamType
  specialty: Specialty
  topic: string
  difficulty: Difficulty
  /** Full stem text to display, including any KFP vignette + addendum. */
  displayStem: string
  caseId?: string
  caseTitle?: string
  /** 1-based position of this item within its KFP case, for sequencing/display. */
  itemIndex?: number
  caseItemCount?: number
  options: McqOption[]
  correctKey: string
  explanation: string
  optionExplanations: Record<string, string>
}

export type SessionMode = 'exam' | 'block' | 'custom' | 'weak-areas'

export interface SessionRecord {
  id?: number
  exam: ExamType
  mode: SessionMode
  startedAt: number
  finishedAt?: number
  timeLimitSec: number
  questionUids: string[]
  answers: Record<string, string | null>
  correctCount: number
  totalCount: number
  totalTimeSec: number
}

export interface AttemptRecord {
  id?: number
  sessionId: number
  questionUid: string
  exam: ExamType
  specialty: Specialty
  topic: string
  selectedKey: string | null
  correctKey: string
  isCorrect: boolean
  timeTakenSec: number
  answeredAt: number
}

export interface StreakDay {
  date: string // YYYY-MM-DD, local
  questionsAnswered: number
  correctAnswered: number
}

export type BadgeCategory = 'streak' | 'accuracy' | 'speed' | 'volume'

export interface Badge {
  id: string
  label: string
  description: string
  earnedAt: number
  category: BadgeCategory
}

export interface UserSettings {
  id: number // fixed at 1, singleton row
  reminderEnabled: boolean
  reminderTime: string // 'HH:MM' 24h local
  defaultExam: ExamType
  lastOpenedDate?: string
  bestStreak: number
  currentStreak: number
  /** Fastest avg seconds/question among sessions of >=10 Qs with >=80% accuracy. */
  bestPaceSec?: number
  /** Highest accuracy % among sessions of >=20 questions. */
  bestAccuracyPct?: number
}
