import type { TypingResult } from '../types'

export function calculateStats(totalChars: number, errors: number, timeSeconds: number): TypingResult {
  const minutes = Math.max(timeSeconds / 60, 1 / 60)
  const correctChars = Math.max(totalChars - errors, 0)
  const wpm = Math.round(correctChars / 5 / minutes)
  const accuracy = totalChars > 0 ? Math.round((correctChars / totalChars) * 100) : 100
  return {
    wpm: Math.max(wpm, 0),
    accuracy: Math.max(Math.min(accuracy, 100), 0),
    totalChars,
    errors,
    timeSeconds,
  }
}

export function starsForResult(result: TypingResult): number {
  if (result.accuracy >= 95 && result.wpm >= 10) return 3
  if (result.accuracy >= 85) return 2
  if (result.accuracy >= 60) return 1
  return result.totalChars > 0 ? 1 : 0
}

export function starsForReading(correct: number, total: number): number {
  if (total === 0) return 0
  const ratio = correct / total
  if (ratio === 1) return 3
  if (ratio >= 0.5) return 2
  return 1
}
