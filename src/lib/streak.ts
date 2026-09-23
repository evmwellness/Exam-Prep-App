import { db } from '../db/db'

export function todayLocalDate(): string {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function dateFromString(s: string): Date {
  const [y, m, d] = s.split('-').map(Number)
  return new Date(y, m - 1, d)
}

function addDays(date: string, delta: number): string {
  const d = dateFromString(date)
  d.setDate(d.getDate() + delta)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/** Record that N questions were answered today (call after each answered question or session end). */
export async function recordPractice(questionsAnswered: number, correctAnswered: number): Promise<void> {
  const date = todayLocalDate()
  const existing = await db.streakDays.get(date)
  await db.streakDays.put({
    date,
    questionsAnswered: (existing?.questionsAnswered ?? 0) + questionsAnswered,
    correctAnswered: (existing?.correctAnswered ?? 0) + correctAnswered,
  })
}

export interface StreakInfo {
  currentStreak: number
  practicedToday: boolean
}

/** Walks backward from today through consecutive practiced days. */
export async function computeCurrentStreak(): Promise<StreakInfo> {
  const today = todayLocalDate()
  const todayRow = await db.streakDays.get(today)
  const practicedToday = (todayRow?.questionsAnswered ?? 0) > 0

  let streak = 0
  let cursor = practicedToday ? today : addDays(today, -1)
  // If not practiced today, streak counts consecutive days up to (and including) yesterday.
  for (;;) {
    const row = await db.streakDays.get(cursor)
    if (row && row.questionsAnswered > 0) {
      streak += 1
      cursor = addDays(cursor, -1)
    } else {
      break
    }
  }
  return { currentStreak: streak, practicedToday }
}

/** Returns a map of date -> questionsAnswered for the last N days, oldest first, for calendar display. */
export async function getStreakCalendar(days: number): Promise<{ date: string; questionsAnswered: number; correctAnswered: number }[]> {
  const today = todayLocalDate()
  const result: { date: string; questionsAnswered: number; correctAnswered: number }[] = []
  for (let i = days - 1; i >= 0; i--) {
    const date = addDays(today, -i)
    const row = await db.streakDays.get(date)
    result.push({
      date,
      questionsAnswered: row?.questionsAnswered ?? 0,
      correctAnswered: row?.correctAnswered ?? 0,
    })
  }
  return result
}
