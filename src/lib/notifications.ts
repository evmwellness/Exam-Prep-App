import type { UserSettings } from '../types'
import { todayLocalDate } from './streak'

const LAST_SHOWN_KEY = 'gp-exam-prep:lastReminderShownDate'

export function notificationsSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!notificationsSupported()) return 'denied'
  if (Notification.permission !== 'default') return Notification.permission
  return Notification.requestPermission()
}

function currentTimeIsAtOrAfter(hhmm: string): boolean {
  const [h, m] = hhmm.split(':').map(Number)
  const now = new Date()
  const target = new Date(now)
  target.setHours(h, m, 0, 0)
  return now.getTime() >= target.getTime()
}

/**
 * Best-effort daily reminder: fires while the app is open/foregrounded and
 * checks again periodically. True background delivery on a closed PWA
 * needs a push server, which this offline-first app deliberately has none
 * of — Android tends to honour this better than iOS Home Screen apps.
 */
export async function maybeShowDailyReminder(settings: UserSettings, practicedToday: boolean, streak: number): Promise<void> {
  if (!settings.reminderEnabled || practicedToday) return
  if (!notificationsSupported() || Notification.permission !== 'granted') return
  if (!currentTimeIsAtOrAfter(settings.reminderTime)) return

  const today = todayLocalDate()
  if (localStorage.getItem(LAST_SHOWN_KEY) === today) return

  const body = streak > 0
    ? `Keep your ${streak}-day streak alive — a quick block takes 20 minutes.`
    : `Start a streak today with a quick 20-minute practice block.`

  try {
    const registration = await navigator.serviceWorker?.getRegistration()
    if (registration) {
      await registration.showNotification('Time for AKT/KFP practice', {
        body,
        icon: '/icons/icon-192.png',
        badge: '/icons/icon-192.png',
        tag: 'daily-reminder',
      })
    } else {
      new Notification('Time for AKT/KFP practice', { body, icon: '/icons/icon-192.png' })
    }
    localStorage.setItem(LAST_SHOWN_KEY, today)
  } catch {
    // Notifications can throw in unsupported contexts (e.g. some iOS PWA states); fail silently.
  }
}
