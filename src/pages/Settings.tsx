import { useRef, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db, getSettings, updateSettings } from '../db/db'
import { notificationsSupported, requestNotificationPermission } from '../lib/notifications'
import type { ExamType } from '../types'

export default function Settings() {
  const settings = useLiveQuery(() => getSettings(), [], undefined)
  const [permission, setPermission] = useState<NotificationPermission>(
    notificationsSupported() ? Notification.permission : 'denied',
  )
  const [busy, setBusy] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  if (!settings) return null

  async function toggleReminder(enabled: boolean) {
    if (enabled && permission !== 'granted') {
      const result = await requestNotificationPermission()
      setPermission(result)
      if (result !== 'granted') return
    }
    await updateSettings({ reminderEnabled: enabled })
  }

  async function exportData() {
    setBusy(true)
    try {
      const [sessions, attempts, streakDays, badges, settingsRow] = await Promise.all([
        db.sessions.toArray(),
        db.attempts.toArray(),
        db.streakDays.toArray(),
        db.badges.toArray(),
        db.settings.toArray(),
      ])
      const payload = { version: 1, exportedAt: new Date().toISOString(), sessions, attempts, streakDays, badges, settings: settingsRow }
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `gp-exam-prep-backup-${new Date().toISOString().slice(0, 10)}.json`
      a.click()
      URL.revokeObjectURL(url)
    } finally {
      setBusy(false)
    }
  }

  async function importData(file: File) {
    if (!window.confirm('Import will merge this backup into your current data. Continue?')) return
    setBusy(true)
    try {
      const text = await file.text()
      const payload = JSON.parse(text)
      await db.transaction('rw', db.sessions, db.attempts, db.streakDays, db.badges, db.settings, async () => {
        if (Array.isArray(payload.sessions)) await db.sessions.bulkPut(payload.sessions)
        if (Array.isArray(payload.attempts)) await db.attempts.bulkPut(payload.attempts)
        if (Array.isArray(payload.streakDays)) await db.streakDays.bulkPut(payload.streakDays)
        if (Array.isArray(payload.badges)) await db.badges.bulkPut(payload.badges)
        if (Array.isArray(payload.settings)) await db.settings.bulkPut(payload.settings)
      })
      alert('Import complete.')
    } catch {
      alert('Could not import that file — it may not be a valid backup.')
    } finally {
      setBusy(false)
    }
  }

  async function resetAllData() {
    if (!window.confirm('This deletes all sessions, attempts, streaks and badges on this device. This cannot be undone. Continue?')) return
    if (!window.confirm('Are you absolutely sure? Type OK to confirm deletion.')) return
    setBusy(true)
    try {
      await db.transaction('rw', db.sessions, db.attempts, db.streakDays, db.badges, async () => {
        await db.sessions.clear()
        await db.attempts.clear()
        await db.streakDays.clear()
        await db.badges.clear()
      })
      await updateSettings({ currentStreak: 0, bestStreak: 0, bestPaceSec: undefined, bestAccuracyPct: undefined })
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="flex-1 px-4 pt-6 pb-8">
      <h1 className="text-xl font-semibold mb-5">Settings</h1>

      <Section title="Daily reminder">
        <Row>
          <div>
            <p className="text-sm text-slate-200">Remind me to practice</p>
            <p className="text-xs text-slate-500">
              {notificationsSupported()
                ? 'Fires while the app is open or recently backgrounded — background delivery on iOS Home Screen apps is limited.'
                : 'Notifications are not supported in this browser.'}
            </p>
          </div>
          <Toggle checked={settings.reminderEnabled} onChange={toggleReminder} disabled={!notificationsSupported()} />
        </Row>
        {settings.reminderEnabled && (
          <Row>
            <p className="text-sm text-slate-200">Reminder time</p>
            <input
              type="time"
              value={settings.reminderTime}
              onChange={(e) => updateSettings({ reminderTime: e.target.value })}
              className="bg-slate-800 border border-slate-700 rounded-lg px-2 py-1 text-sm text-slate-200"
            />
          </Row>
        )}
        {permission === 'denied' && (
          <p className="text-xs text-rose-400 mt-1">
            Notifications are blocked for this app in your browser/OS settings — enable them there to receive reminders.
          </p>
        )}
      </Section>

      <Section title="Default exam">
        <div className="flex gap-2">
          {(['AKT', 'KFP'] as ExamType[]).map((e) => (
            <button
              key={e}
              onClick={() => updateSettings({ defaultExam: e })}
              className={`flex-1 py-2 rounded-lg border text-sm font-medium ${
                settings.defaultExam === e ? 'bg-sky-500 border-sky-500 text-slate-950' : 'bg-slate-900 border-slate-800 text-slate-300'
              }`}
            >
              {e}
            </button>
          ))}
        </div>
      </Section>

      <Section title="Your data">
        <p className="text-xs text-slate-500 mb-3">
          Everything is stored only on this device (IndexedDB) — nothing is sent to a server. Back up before clearing browser
          data or switching devices.
        </p>
        <div className="flex flex-col gap-2">
          <button onClick={exportData} disabled={busy} className="py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm font-medium disabled:opacity-50">
            Export backup (.json)
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={busy}
            className="py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm font-medium disabled:opacity-50"
          >
            Import backup
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) importData(file)
              e.target.value = ''
            }}
          />
          <button
            onClick={resetAllData}
            disabled={busy}
            className="py-2.5 rounded-lg bg-rose-950/40 border border-rose-900/50 text-sm font-medium text-rose-300 disabled:opacity-50"
          >
            Reset all progress
          </button>
        </div>
      </Section>

      <Section title="About this content">
        <p className="text-xs text-slate-400 leading-relaxed mb-2">
          Questions are original, written to mirror RACGP AKT/KFP curriculum domains and current Australian general
          practice guidelines — they are not reproductions of real past exam papers (RACGP does not publish those).
        </p>
        <p className="text-xs text-slate-400 leading-relaxed mb-2">
          The real KFP exam uses short-answer/extended-response items, not multiple choice. The KFP cases here are
          MCQ-adapted for quick phone drilling of clinical reasoning — keep practicing written responses via official
          RACGP resources too.
        </p>
        <p className="text-xs text-slate-400 leading-relaxed">
          Exam simulation timings are sensible defaults, not guaranteed to match the current RACGP candidate handbook —
          check the latest handbook before your sitting.
        </p>
      </Section>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-5">
      <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">{title}</h2>
      <div className="rounded-xl bg-slate-900 border border-slate-800 p-3.5">{children}</div>
    </section>
  )
}

function Row({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-between gap-3 py-1">{children}</div>
}

function Toggle({ checked, onChange, disabled }: { checked: boolean; onChange: (v: boolean) => void; disabled?: boolean }) {
  return (
    <button
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      className={`w-11 h-6 rounded-full transition-colors relative shrink-0 disabled:opacity-40 ${checked ? 'bg-sky-500' : 'bg-slate-700'}`}
    >
      <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-transform ${checked ? 'translate-x-5' : 'translate-x-0.5'}`} />
    </button>
  )
}
