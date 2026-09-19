import { db } from '../db/db'
import { practiceItemsForExam } from '../data/practiceItems'
import type { AttemptRecord, ExamType, PracticeItem, Specialty } from '../types'

export interface SpecialtyStat {
  specialty: Specialty
  attempts: number
  correct: number
  accuracy: number // 0-1, or -1 if no attempts yet
  avgTimeSec: number
  lastPracticedAt?: number
}

export async function computeSpecialtyStats(exam: ExamType): Promise<SpecialtyStat[]> {
  const attempts = await db.attempts.where('exam').equals(exam).toArray()
  const bySpecialty = new Map<Specialty, AttemptRecord[]>()
  for (const a of attempts) {
    const list = bySpecialty.get(a.specialty) ?? []
    list.push(a)
    bySpecialty.set(a.specialty, list)
  }

  const allSpecialties = new Set<Specialty>(practiceItemsForExam(exam).map((i) => i.specialty))
  const stats: SpecialtyStat[] = []
  for (const specialty of allSpecialties) {
    const list = bySpecialty.get(specialty) ?? []
    const correct = list.filter((a) => a.isCorrect).length
    const totalTime = list.reduce((s, a) => s + a.timeTakenSec, 0)
    stats.push({
      specialty,
      attempts: list.length,
      correct,
      accuracy: list.length > 0 ? correct / list.length : -1,
      avgTimeSec: list.length > 0 ? totalTime / list.length : 0,
      lastPracticedAt: list.length > 0 ? Math.max(...list.map((a) => a.answeredAt)) : undefined,
    })
  }
  return stats.sort((a, b) => {
    if (a.accuracy === -1 && b.accuracy === -1) return a.specialty.localeCompare(b.specialty)
    if (a.accuracy === -1) return -1
    if (b.accuracy === -1) return 1
    return a.accuracy - b.accuracy
  })
}

/** Specialties with accuracy below this (and >=3 attempts) are treated as "weak". */
export const WEAK_ACCURACY_THRESHOLD = 0.7
export const MIN_ATTEMPTS_FOR_WEAK = 3

/**
 * Build a practice set favouring weak specialties and previously-missed
 * items. KFP items are always pulled as complete, in-order cases so the
 * clinical narrative stays coherent.
 */
export async function buildWeakAreaSet(
  exam: ExamType,
  targetCount: number,
  pool: PracticeItem[] = practiceItemsForExam(exam),
): Promise<PracticeItem[]> {
  const items = pool
  const stats = await computeSpecialtyStats(exam)
  const accuracyBySpecialty = new Map(stats.map((s) => [s.specialty, s]))

  // Most recent attempt per question uid, to find "still wrong" items.
  const attempts = await db.attempts.where('exam').equals(exam).sortBy('answeredAt')
  const latestByUid = new Map<string, AttemptRecord>()
  for (const a of attempts) latestByUid.set(a.questionUid, a)
  const stillWrongUids = new Set(
    [...latestByUid.values()].filter((a) => !a.isCorrect).map((a) => a.questionUid),
  )

  function weightFor(item: PracticeItem): number {
    const stat = accuracyBySpecialty.get(item.specialty)
    let weight = 1
    if (!stat || stat.accuracy === -1) weight = 2.5 // unseen specialty: worth surfacing
    else if (stat.accuracy < WEAK_ACCURACY_THRESHOLD) weight = 4
    else weight = Math.max(0.5, 1 - stat.accuracy)
    if (stillWrongUids.has(item.uid)) weight *= 3
    return weight
  }

  if (exam === 'AKT') {
    return weightedSampleWithoutReplacement(items, weightFor, targetCount)
  }

  // KFP: sample whole cases (all their items) by average case weight.
  const byCaseId = new Map<string, PracticeItem[]>()
  for (const item of items) {
    const key = item.caseId ?? item.uid
    const list = byCaseId.get(key) ?? []
    list.push(item)
    byCaseId.set(key, list)
  }
  const cases = [...byCaseId.values()].map((caseItems) => ({
    caseItems,
    weight: caseItems.reduce((s, i) => s + weightFor(i), 0) / caseItems.length,
  }))
  const selectedCases: PracticeItem[][] = []
  let remaining = [...cases]
  let count = 0
  while (count < targetCount && remaining.length > 0) {
    const totalWeight = remaining.reduce((s, c) => s + c.weight, 0)
    let r = Math.random() * totalWeight
    let idx = 0
    for (; idx < remaining.length; idx++) {
      r -= remaining[idx].weight
      if (r <= 0) break
    }
    const picked = remaining[Math.min(idx, remaining.length - 1)]
    selectedCases.push(picked.caseItems)
    count += picked.caseItems.length
    remaining = remaining.filter((c) => c !== picked)
  }
  return selectedCases.flat()
}

function weightedSampleWithoutReplacement<T>(
  pool: T[],
  weightFn: (item: T) => number,
  count: number,
): T[] {
  const candidates = pool.map((item) => ({ item, weight: Math.max(0.01, weightFn(item)) }))
  const result: T[] = []
  while (result.length < count && candidates.length > 0) {
    const totalWeight = candidates.reduce((s, c) => s + c.weight, 0)
    let r = Math.random() * totalWeight
    let idx = 0
    for (; idx < candidates.length; idx++) {
      r -= candidates[idx].weight
      if (r <= 0) break
    }
    const pickedIdx = Math.min(idx, candidates.length - 1)
    result.push(candidates[pickedIdx].item)
    candidates.splice(pickedIdx, 1)
  }
  return result
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
