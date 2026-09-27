import type { ExamType } from '../types'

/**
 * Default exam-simulation timings, per the official RACGP "AKT and KFP
 * guide": both exams are a 3.5-hour paper plus a universal 30-minute
 * allowance for every candidate, i.e. 4 hours (240 min) each. RACGP updates
 * its candidate handbooks periodically, so verify against the current one
 * before your sitting.
 */
export const EXAM_SIM_DEFAULTS: Record<ExamType, { questionCount: number; durationMinutes: number }> = {
  AKT: { questionCount: 150, durationMinutes: 240 },
  KFP: { questionCount: 70, durationMinutes: 240 },
}

/** Fallback seconds-per-question used until we have real attempt history. */
export const DEFAULT_PACE_SEC: Record<ExamType, number> = {
  AKT: 96, // ~240min / 150q
  KFP: 206, // ~240min / 70q, mixed standalone MCQ + EMQ (shared option list read once per theme)
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
