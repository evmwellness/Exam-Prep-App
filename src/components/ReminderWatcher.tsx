import { useEffect } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { getSettings } from '../db/db'
import { computeCurrentStreak } from '../lib/streak'
import { maybeShowDailyReminder } from '../lib/notifications'

const CHECK_INTERVAL_MS = 5 * 60 * 1000

export default function ReminderWatcher() {
  const settings = useLiveQuery(() => getSettings(), [], undefined)

  useEffect(() => {
    async function check() {
      const s = settings ?? (await getSettings())
      const { currentStreak, practicedToday } = await computeCurrentStreak()
      await maybeShowDailyReminder(s, practicedToday, currentStreak)
    }
    check()
    const id = window.setInterval(check, CHECK_INTERVAL_MS)
    const onVisible = () => document.visibilityState === 'visible' && check()
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      window.clearInterval(id)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [settings])

  return null
}
