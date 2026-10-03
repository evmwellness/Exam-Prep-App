import { db } from '../db/db'
import { allFlashcards, flashcardsForSpecialties } from '../data/flashcards'
import { todayISO } from './studyPlan'
import type { Flashcard, FlashcardReview, ReviewGrade, Specialty } from '../types'

export const DEFAULT_EASE = 2.5
export const MIN_EASE = 1.3
export const DEFAULT_NEW_CARDS_PER_DAY = 15

function addDaysISO(dateISO: string, days: number): string {
  const d = new Date(dateISO + 'T00:00:00')
  d.setDate(d.getDate() + days)
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function createNewReviewState(cardId: string, today: string): FlashcardReview {
  return {
    cardId,
    easeFactor: DEFAULT_EASE,
    intervalDays: 0,
    repetitions: 0,
    dueDate: today,
    lapses: 0,
    introducedAt: Date.now(),
  }
}

/** Pure SM-2-derivative scheduler: grade a card, get its next review state. */
export function computeNextReview(current: FlashcardReview, grade: ReviewGrade, today: string): FlashcardReview {
  let { easeFactor, intervalDays, repetitions, lapses } = current

  if (grade === 'again') {
    repetitions = 0
    intervalDays = 1
    easeFactor = Math.max(MIN_EASE, easeFactor - 0.2)
    lapses += 1
  } else if (grade === 'hard') {
    easeFactor = Math.max(MIN_EASE, easeFactor - 0.15)
    intervalDays = repetitions === 0 ? 1 : Math.max(1, Math.round(intervalDays * 1.2))
    repetitions += 1
  } else if (grade === 'good') {
    repetitions += 1
    intervalDays = repetitions === 1 ? 1 : repetitions === 2 ? 6 : Math.max(1, Math.round(intervalDays * easeFactor))
  } else {
    // easy
    easeFactor += 0.15
    repetitions += 1
    intervalDays = repetitions === 1 ? 4 : Math.max(1, Math.round(intervalDays * easeFactor * 1.3))
  }

  return {
    ...current,
    easeFactor,
    intervalDays,
    repetitions,
    lapses,
    dueDate: addDaysISO(today, intervalDays),
    lastReviewedAt: Date.now(),
  }
}

export async function gradeCard(cardId: string, grade: ReviewGrade): Promise<FlashcardReview> {
  const today = todayISO()
  const existing = await db.flashcardReviews.get(cardId)
  const current = existing ?? createNewReviewState(cardId, today)
  const next = computeNextReview(current, grade, today)
  await db.flashcardReviews.put(next)
  return next
}

export interface SpecialtyWeight {
  specialty: Specialty
  weight: number
}

/** Weak specialties (across AKT+KFP attempts combined) get a higher weight for new-card introduction. */
async function computeSpecialtyWeights(): Promise<Map<Specialty, number>> {
  const attempts = await db.attempts.toArray()
  const bySpecialty = new Map<Specialty, { correct: number; total: number }>()
  for (const a of attempts) {
    const entry = bySpecialty.get(a.specialty) ?? { correct: 0, total: 0 }
    entry.total += 1
    if (a.isCorrect) entry.correct += 1
    bySpecialty.set(a.specialty, entry)
  }
  const weights = new Map<Specialty, number>()
  for (const card of allFlashcards) {
    if (weights.has(card.specialty)) continue
    const stat = bySpecialty.get(card.specialty)
    if (!stat || stat.total < 3) weights.set(card.specialty, 1.5) // unseen/under-tested: slight priority
    else weights.set(card.specialty, stat.correct / stat.total < 0.7 ? 3 : 1)
  }
  return weights
}

function weightedSampleWithoutReplacement<T>(pool: T[], weightFn: (item: T) => number, count: number): T[] {
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

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export interface FlashcardQueueItem {
  card: Flashcard
  review: FlashcardReview
  isNew: boolean
}

export interface FlashcardQueueCounts {
  due: number
  new: number
}

/** How many cards are due for review (+ how many new ones would be introduced) right now, without building the full queue. */
export async function countDueFlashcards(specialties?: Specialty[]): Promise<FlashcardQueueCounts> {
  const today = todayISO()
  const pool = flashcardsForSpecialties(specialties)
  const reviews = await db.flashcardReviews.toArray()
  const reviewByCardId = new Map(reviews.map((r) => [r.cardId, r]))
  let due = 0
  let unseen = 0
  for (const card of pool) {
    const review = reviewByCardId.get(card.id)
    if (!review) unseen += 1
    else if (review.dueDate <= today) due += 1
  }
  const introducedToday = reviews.filter((r) => r.repetitions > 0 && new Date(r.introducedAt).toDateString() === new Date().toDateString()).length
  const newBudget = Math.max(0, DEFAULT_NEW_CARDS_PER_DAY - introducedToday)
  return { due, new: Math.min(unseen, newBudget) }
}

/** Builds today's review queue: all due review cards + weak-area-weighted new cards, shuffled together. */
export async function buildReviewQueue(opts?: { specialties?: Specialty[]; newCardsPerDay?: number }): Promise<FlashcardQueueItem[]> {
  const today = todayISO()
  const pool = flashcardsForSpecialties(opts?.specialties)
  const reviews = await db.flashcardReviews.toArray()
  const reviewByCardId = new Map(reviews.map((r) => [r.cardId, r]))

  const dueItems: FlashcardQueueItem[] = []
  const unseenCards: Flashcard[] = []
  for (const card of pool) {
    const review = reviewByCardId.get(card.id)
    if (!review) unseenCards.push(card)
    else if (review.dueDate <= today) dueItems.push({ card, review, isNew: false })
  }

  const introducedToday = reviews.filter((r) => r.repetitions > 0 && new Date(r.introducedAt).toDateString() === new Date().toDateString()).length
  const newBudget = Math.max(0, (opts?.newCardsPerDay ?? DEFAULT_NEW_CARDS_PER_DAY) - introducedToday)

  const weights = await computeSpecialtyWeights()
  const selectedNew = weightedSampleWithoutReplacement(unseenCards, (c) => weights.get(c.specialty) ?? 1, newBudget)
  const newItems: FlashcardQueueItem[] = selectedNew.map((card) => ({
    card,
    review: createNewReviewState(card.id, today),
    isNew: true,
  }))

  return shuffle([...dueItems, ...newItems])
}
