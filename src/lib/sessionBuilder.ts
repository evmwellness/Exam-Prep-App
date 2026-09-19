import type { ExamType, PracticeItem, SessionMode, Specialty } from '../types'
import { aktPracticeItems, kfpExamFormatPracticeItems, kfpPracticeItems } from '../data/practiceItems'
import { EXAM_SIM_DEFAULTS } from './examConfig'
import { estimateBlockQuestionCount, getRecentAvgPaceSec } from './pace'
import { buildWeakAreaSet, shuffle } from './weakAreas'

export interface BuiltSession {
  mode: SessionMode
  exam: ExamType
  items: PracticeItem[]
  timeLimitSec: number
}

export interface BuildSessionParams {
  exam: ExamType
  mode: SessionMode
  blockMinutes?: 20 | 25
  customCount?: number
  specialties?: Specialty[]
  focusWeakAreas?: boolean
  /** KFP only: also draw from the legacy sequential case-study bank (bonus practice, not the current exam format). */
  includeCaseStudies?: boolean
}

/** AKT items are standalone; KFP defaults to current-format MCQ+EMQ, optionally widened to include legacy cases. */
function basePool(exam: ExamType, includeCaseStudies?: boolean): PracticeItem[] {
  if (exam === 'AKT') return aktPracticeItems
  return includeCaseStudies ? kfpPracticeItems : kfpExamFormatPracticeItems
}

function filterBySpecialty(pool: PracticeItem[], specialties?: Specialty[]): PracticeItem[] {
  if (!specialties || specialties.length === 0) return pool
  const set = new Set(specialties)
  return pool.filter((i) => set.has(i.specialty))
}

/** Groups items by KFP case/EMQ theme (AKT and standalone KFP MCQ items are each their own singleton group), shuffles group order. */
function shuffledGroups(pool: PracticeItem[]): PracticeItem[][] {
  const byCase = new Map<string, PracticeItem[]>()
  for (const item of pool) {
    const key = item.caseId ?? item.uid
    const list = byCase.get(key) ?? []
    list.push(item)
    byCase.set(key, list)
  }
  for (const list of byCase.values()) list.sort((a, b) => (a.itemIndex ?? 0) - (b.itemIndex ?? 0))
  return shuffle([...byCase.values()])
}

function pickGroupsUpTo(pool: PracticeItem[], targetCount: number): PracticeItem[] {
  const groups = shuffledGroups(pool)
  const result: PracticeItem[] = []
  for (const group of groups) {
    if (result.length >= targetCount) break
    result.push(...group)
  }
  return result
}

export async function buildSession(params: BuildSessionParams): Promise<BuiltSession> {
  const { exam, mode } = params
  const fullPool = basePool(exam, params.includeCaseStudies)
  const specialtyPool = filterBySpecialty(fullPool, params.specialties)

  if (mode === 'exam') {
    const config = EXAM_SIM_DEFAULTS[exam]
    const items = exam === 'AKT' ? shuffle(fullPool).slice(0, config.questionCount) : pickGroupsUpTo(fullPool, config.questionCount)
    return { mode, exam, items, timeLimitSec: config.durationMinutes * 60 }
  }

  if (mode === 'block') {
    const blockMinutes = params.blockMinutes ?? 20
    const targetCount = await estimateBlockQuestionCount(exam, blockMinutes)
    const items = params.focusWeakAreas
      ? await buildWeakAreaSet(exam, targetCount, specialtyPool)
      : exam === 'AKT'
        ? shuffle(specialtyPool).slice(0, targetCount)
        : pickGroupsUpTo(specialtyPool, targetCount)
    return { mode, exam, items, timeLimitSec: blockMinutes * 60 }
  }

  // custom / weak-areas
  const targetCount = params.customCount ?? 20
  const items = params.focusWeakAreas
    ? await buildWeakAreaSet(exam, targetCount, specialtyPool)
    : exam === 'AKT'
      ? shuffle(specialtyPool).slice(0, targetCount)
      : pickGroupsUpTo(specialtyPool, targetCount)
  const pace = await getRecentAvgPaceSec(exam)
  const timeLimitSec = Math.max(60, Math.round(items.length * pace * 1.3))
  return { mode, exam, items, timeLimitSec }
}
