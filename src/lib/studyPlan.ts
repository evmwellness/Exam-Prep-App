import type { Specialty, UserSettings } from '../types'

/**
 * Suggested week-by-week order: high clinical-volume topics first,
 * cross-cutting/niche topics last. Each week practices this topic across
 * both AKT and KFP together (same clinical content, two exam formats).
 */
export const STUDY_PLAN_TOPIC_ORDER: Specialty[] = [
  'Cardiovascular',
  'Respiratory',
  'Endocrine & Metabolic',
  'Mental Health',
  'Musculoskeletal & Rheumatology',
  "Women's Health",
  "Men's Health",
  'Child & Adolescent Health',
  'Gastroenterology & Nutrition',
  'Dermatology',
  'Neurology',
  'Renal & Urology',
  'ENT & Ophthalmology',
  'Sexual Health & STIs',
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
]

export type StudyPlanPhase = 'not-set' | 'foundations' | 'weak-areas' | 'final-sim' | 'complete'

export interface StudyPlanWeek {
  phase: StudyPlanPhase
  weekNumber: number // 1-based
  totalWeeks: number
  daysUntilExam: number
  topics: Specialty[] // relevant for 'foundations' phase only
}

function daysBetween(fromISO: string, toISO: string): number {
  const from = new Date(fromISO + 'T00:00:00')
  const to = new Date(toISO + 'T00:00:00')
  return Math.round((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24))
}

export function todayISO(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

/**
 * Three phases sized to fit however many weeks are actually available:
 * - final-sim: last 1-4 weeks, full timed exam simulations
 * - weak-areas: a chunk before that, weighted practice on weak specialties
 * - foundations: everything before, working through STUDY_PLAN_TOPIC_ORDER
 *   (doubling up topics per week if there isn't a full week per topic)
 */
export function computeStudyPlanWeek(settings: Pick<UserSettings, 'targetExamDate' | 'planStartDate'>): StudyPlanWeek | null {
  if (!settings.targetExamDate) return null
  const today = todayISO()
  const start = settings.planStartDate ?? today
  const daysUntilExam = daysBetween(today, settings.targetExamDate)

  if (daysUntilExam < 0) {
    return { phase: 'complete', weekNumber: 0, totalWeeks: 0, daysUntilExam, topics: [] }
  }

  const totalDays = Math.max(1, daysBetween(start, settings.targetExamDate))
  const totalWeeks = Math.max(1, Math.round(totalDays / 7))
  const elapsedWeeks = Math.floor(Math.max(0, daysBetween(start, today)) / 7)
  const weekNumber = Math.min(totalWeeks, elapsedWeeks + 1)

  const finalSimWeeks = totalWeeks >= 8 ? 4 : totalWeeks >= 4 ? 2 : 1
  const remainingAfterSim = Math.max(1, totalWeeks - finalSimWeeks)
  const weakAreaWeeks = remainingAfterSim >= 12 ? 10 : Math.max(1, Math.floor(remainingAfterSim * 0.3))
  const foundationWeeks = Math.max(1, remainingAfterSim - weakAreaWeeks)

  const topicsPerWeek = Math.max(1, Math.ceil(STUDY_PLAN_TOPIC_ORDER.length / foundationWeeks))

  if (weekNumber <= foundationWeeks) {
    const startIdx = (weekNumber - 1) * topicsPerWeek
    const topics = STUDY_PLAN_TOPIC_ORDER.slice(startIdx, startIdx + topicsPerWeek)
    return { phase: 'foundations', weekNumber, totalWeeks, daysUntilExam, topics }
  }
  if (weekNumber <= foundationWeeks + weakAreaWeeks) {
    return { phase: 'weak-areas', weekNumber, totalWeeks, daysUntilExam, topics: [] }
  }
  return { phase: 'final-sim', weekNumber, totalWeeks, daysUntilExam, topics: [] }
}

export function phaseLabel(phase: StudyPlanPhase): string {
  switch (phase) {
    case 'foundations':
      return 'Foundations'
    case 'weak-areas':
      return 'Weak-area review'
    case 'final-sim':
      return 'Final exam simulation'
    case 'complete':
      return 'Exam week'
    default:
      return 'Not set'
  }
}

export function phaseDescription(phase: StudyPlanPhase): string {
  switch (phase) {
    case 'foundations':
      return 'Work through this week’s topic(s) across both AKT and KFP.'
    case 'weak-areas':
      return 'Switch to weighted practice on your lowest-accuracy specialties.'
    case 'final-sim':
      return 'Run full timed exam simulations for AKT and KFP, alternating.'
    case 'complete':
      return 'Your target date has passed — good luck, or update the date if it changed.'
    default:
      return 'Set a target exam date in Settings to generate a week-by-week plan.'
  }
}
