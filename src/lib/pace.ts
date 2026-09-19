import { db } from '../db/db'
import type { ExamType } from '../types'
import { DEFAULT_PACE_SEC } from './examConfig'

/** Average seconds/question across the user's last N finished sessions for an exam. */
export async function getRecentAvgPaceSec(exam: ExamType, lookback = 10): Promise<number> {
  const sessions = await db.sessions
    .where('exam')
    .equals(exam)
    .and((s) => s.finishedAt != null && s.totalCount > 0)
    .reverse()
    .sortBy('finishedAt')

  const recent = sessions.slice(-lookback)
  if (recent.length === 0) return DEFAULT_PACE_SEC[exam]

  const totalTime = recent.reduce((sum, s) => sum + s.totalTimeSec, 0)
  const totalQ = recent.reduce((sum, s) => sum + s.totalCount, 0)
  if (totalQ === 0) return DEFAULT_PACE_SEC[exam]
  return totalTime / totalQ
}

export async function estimateBlockQuestionCount(exam: ExamType, blockMinutes: number): Promise<number> {
  const pace = await getRecentAvgPaceSec(exam)
  const count = Math.round((blockMinutes * 60) / pace)
  return Math.max(5, count)
}
