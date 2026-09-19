import type { ExamType } from '../types'

/**
 * Default exam-simulation timings. RACGP updates its candidate handbooks
 * periodically, so these are sensible defaults, not guaranteed-current
 * official timings — check the current handbook before your sitting.
 */
export const EXAM_SIM_DEFAULTS: Record<ExamType, { questionCount: number; durationMinutes: number }> = {
  AKT: { questionCount: 150, durationMinutes: 185 },
  KFP: { questionCount: 70, durationMinutes: 180 },
}

/** Fallback seconds-per-question used until we have real attempt history. */
export const DEFAULT_PACE_SEC: Record<ExamType, number> = {
  AKT: 74, // ~185min / 150q
  KFP: 154, // ~180min / 70q, KFP items involve more reading per case
}

export const BLOCK_DURATION_OPTIONS_MIN = [20, 25] as const

export function formatSeconds(totalSeconds: number): string {
  const s = Math.max(0, Math.round(totalSeconds))
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  if (h > 0) {
    return `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`
  }
  return `${m}:${String(sec).padStart(2, '0')}`
}
