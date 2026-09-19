import { db, getSettings, updateSettings } from '../db/db'
import type { Badge, SessionRecord } from '../types'
import { computeCurrentStreak } from './streak'

const VOLUME_MILESTONES = [50, 100, 250, 500, 1000, 2500, 5000]
const STREAK_MILESTONES = [3, 7, 14, 21, 30, 60, 100, 200, 365]
const MIN_QUESTIONS_FOR_ACCURACY_BADGE = 15
const MIN_QUESTIONS_FOR_PACE_BADGE = 10
const MIN_ACCURACY_FOR_PACE_BADGE = 0.8

async function awardBadge(id: string, label: string, description: string, category: Badge['category']): Promise<Badge | null> {
  const existing = await db.badges.get(id)
  if (existing) return null
  const badge: Badge = { id, label, description, earnedAt: Date.now(), category }
  await db.badges.put(badge)
  return badge
}

/** Call once after a session is finished. Returns newly-earned badges to celebrate in the UI. */
export async function evaluateBadgesForSession(session: SessionRecord): Promise<Badge[]> {
  const newBadges: Badge[] = []
  const settings = await getSettings()

  // Streak badges
  const { currentStreak } = await computeCurrentStreak()
  const bestStreak = Math.max(settings.bestStreak, currentStreak)
  await updateSettings({ currentStreak, bestStreak })
  for (const milestone of STREAK_MILESTONES) {
    if (currentStreak >= milestone) {
      const b = await awardBadge(
        `streak-${milestone}`,
        `${milestone}-Day Streak`,
        `Practiced ${milestone} days in a row. Consistency is what turns a 1% miss into a comfortable pass.`,
        'streak',
      )
      if (b) newBadges.push(b)
    }
  }
  if (currentStreak > 0 && currentStreak === bestStreak && currentStreak > (settings.bestStreak ?? 0)) {
    const b = await awardBadge(
      `streak-record-${currentStreak}`,
      'New Streak Record!',
      `Your longest streak yet: ${currentStreak} days.`,
      'streak',
    )
    if (b) newBadges.push(b)
  }

  // Volume badges
  const totalAnswered = await db.attempts.count()
  for (const milestone of VOLUME_MILESTONES) {
    if (totalAnswered >= milestone) {
      const b = await awardBadge(
        `volume-${milestone}`,
        `${milestone} Questions Answered`,
        `You've answered ${milestone} questions across your practice history.`,
        'volume',
      )
      if (b) newBadges.push(b)
    }
  }

  // Accuracy badge (this session)
  if (session.totalCount >= MIN_QUESTIONS_FOR_ACCURACY_BADGE) {
    const accuracyPct = (session.correctCount / session.totalCount) * 100
    const bestAccuracyPct = settings.bestAccuracyPct ?? 0
    if (accuracyPct > bestAccuracyPct) {
      await updateSettings({ bestAccuracyPct: accuracyPct })
      const b = await awardBadge(
        `accuracy-record-${Math.round(accuracyPct)}-${session.id}`,
        'New Accuracy Record!',
        `${accuracyPct.toFixed(0)}% correct in a single session (${session.totalCount} questions) — your best yet.`,
        'accuracy',
      )
      if (b) newBadges.push(b)
    }
    if (session.correctCount === session.totalCount) {
      const b = await awardBadge(
        `accuracy-perfect-${session.id}`,
        'Perfect Session',
        `100% correct across ${session.totalCount} questions in one sitting.`,
        'accuracy',
      )
      if (b) newBadges.push(b)
    }
  }

  // Speed badge (this session)
  if (session.totalCount >= MIN_QUESTIONS_FOR_PACE_BADGE) {
    const accuracy = session.correctCount / session.totalCount
    const paceSec = session.totalTimeSec / session.totalCount
    if (accuracy >= MIN_ACCURACY_FOR_PACE_BADGE) {
      const bestPaceSec = settings.bestPaceSec
      if (bestPaceSec == null || paceSec < bestPaceSec) {
        await updateSettings({ bestPaceSec: paceSec })
        const b = await awardBadge(
          `speed-record-${session.id}`,
          'New Speed Record!',
          `${paceSec.toFixed(0)}s/question average while keeping accuracy at ${(accuracy * 100).toFixed(0)}% or higher.`,
          'speed',
        )
        if (b) newBadges.push(b)
      }
    }
  }

  return newBadges
}

export async function getAllBadges(): Promise<Badge[]> {
  return db.badges.orderBy('earnedAt').reverse().toArray()
}
