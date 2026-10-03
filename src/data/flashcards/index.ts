import type { Flashcard, Specialty } from '../../types'
import { group1Cards } from './group1'
import { group2Cards } from './group2'
import { group3Cards } from './group3'
import { group4Cards } from './group4'
import { group5Cards } from './group5'

export const allFlashcards: Flashcard[] = [
  ...group1Cards,
  ...group2Cards,
  ...group3Cards,
  ...group4Cards,
  ...group5Cards,
]

export const flashcardById: Map<string, Flashcard> = new Map(allFlashcards.map((c) => [c.id, c]))

export function flashcardsForSpecialties(specialties?: Specialty[]): Flashcard[] {
  if (!specialties || specialties.length === 0) return allFlashcards
  const set = new Set(specialties)
  return allFlashcards.filter((c) => set.has(c.specialty))
}
