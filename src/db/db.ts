import Dexie, { type EntityTable } from 'dexie'
import type { AttemptRecord, Badge, SessionRecord, StreakDay, UserSettings } from '../types'

class ExamPrepDB extends Dexie {
  sessions!: EntityTable<SessionRecord, 'id'>
  attempts!: EntityTable<AttemptRecord, 'id'>
  streakDays!: EntityTable<StreakDay, 'date'>
  badges!: EntityTable<Badge, 'id'>
  settings!: EntityTable<UserSettings, 'id'>

  constructor() {
    super('racgp-exam-prep')
    this.version(1).stores({
      sessions: '++id, exam, mode, startedAt, finishedAt',
      attempts: '++id, sessionId, questionUid, exam, specialty, topic, isCorrect, answeredAt',
      streakDays: 'date',
      badges: 'id, category, earnedAt',
      settings: 'id',
    })
  }
}

export const db = new ExamPrepDB()

export const DEFAULT_SETTINGS: UserSettings = {
  id: 1,
  reminderEnabled: false,
  reminderTime: '19:00',
  defaultExam: 'AKT',
  bestStreak: 0,
  currentStreak: 0,
}

/**
 * Read-only: safe to call from `useLiveQuery`, which runs its querier in a
 * read-only reactive transaction (writing inside it throws Dexie's
 * ReadOnlyError). Falls back to in-memory defaults if no row exists yet —
 * call `ensureSettingsInitialized` once at startup to persist that row.
 */
export async function getSettings(): Promise<UserSettings> {
  const existing = await db.settings.get(1)
  return existing ?? DEFAULT_SETTINGS
}

export async function ensureSettingsInitialized(): Promise<void> {
  const existing = await db.settings.get(1)
  if (!existing) await db.settings.put(DEFAULT_SETTINGS)
}

export async function updateSettings(patch: Partial<UserSettings>): Promise<UserSettings> {
  const current = await getSettings()
  const next = { ...current, ...patch }
  await db.settings.put(next)
  return next
}
