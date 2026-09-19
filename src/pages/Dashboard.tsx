import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import clsx from 'clsx'
import { db, getSettings, updateSettings } from '../db/db'
import { computeCurrentStreak } from '../lib/streak'
import { computeSpecialtyStats } from '../lib/weakAreas'
import { getAllBadges } from '../lib/badges'
import StreakCalendar from '../components/StreakCalendar'
import { FlameIcon, ChevronRightIcon } from '../components/layout/icons'
import type { ExamType } from '../types'

export default function Dashboard() {
  const navigate = useNavigate()
  const settings = useLiveQuery(() => getSettings(), [], undefined)
  const [exam, setExam] = useState<ExamType>('AKT')
  const [streak, setStreak] = useState({ currentStreak: 0, practicedToday: false })
  const [weakest, setWeakest] = useState<Awaited<ReturnType<typeof computeSpecialtyStats>>>([])
  const [badgeCount, setBadgeCount] = useState(0)

  const attemptsCount = useLiveQuery(() => db.attempts.where('exam').equals(exam).count(), [exam], 0)
  const correctCount = useLiveQuery(
    () => db.attempts.where('exam').equals(exam).and((a) => a.isCorrect).count(),
    [exam],
    0,
  )
  const sessionsThisWeek = useLiveQuery(async () => {
    const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000
    return db.sessions.where('exam').equals(exam).and((s) => (s.finishedAt ?? 0) >= weekAgo).count()
  }, [exam], 0)

  useEffect(() => {
    if (settings) setExam(settings.defaultExam)
  }, [settings])

  useEffect(() => {
    computeCurrentStreak().then(setStreak)
    computeSpecialtyStats(exam).then((s) => setWeakest(s.filter((x) => x.attempts > 0 || x.accuracy === -1).slice(0, 3)))
    getAllBadges().then((b) => setBadgeCount(b.length))
  }, [exam, attemptsCount])

  const accuracy = attemptsCount && attemptsCount > 0 ? Math.round(((correctCount ?? 0) / attemptsCount) * 100) : null

  async function switchExam(next: ExamType) {
    setExam(next)
    await updateSettings({ defaultExam: next })
  }

  return (
    <div className="flex-1 px-4 pt-6 pb-4">
      <header className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-xl font-semibold text-slate-100">GP Exam Prep</h1>
          <p className="text-xs text-slate-500">AKT &amp; KFP offline practice</p>
        </div>
        <div className="flex rounded-full bg-slate-900 border border-slate-800 p-0.5 text-sm">
          {(['AKT', 'KFP'] as ExamType[]).map((e) => (
            <button
              key={e}
              onClick={() => switchExam(e)}
              className={clsx(
                'px-3 py-1.5 rounded-full font-medium transition-colors',
                exam === e ? 'bg-sky-500 text-slate-950' : 'text-slate-400',
              )}
            >
              {e}
            </button>
          ))}
        </div>
      </header>

      <section className="rounded-2xl bg-gradient-to-br from-sky-950 to-slate-900 border border-sky-900/60 p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FlameIcon className={clsx(streak.currentStreak > 0 ? 'text-orange-400' : 'text-slate-600')} />
            <div>
              <p className="text-2xl font-bold leading-none">{streak.currentStreak}</p>
              <p className="text-xs text-slate-400">day streak{streak.practicedToday ? ' · done today' : ''}</p>
            </div>
          </div>
          {!streak.practicedToday && (
            <Link
              to="/practice"
              className="text-xs font-medium bg-sky-500 text-slate-950 px-3 py-1.5 rounded-full"
            >
              Practice today
            </Link>
          )}
        </div>
        <div className="mt-3">
          <StreakCalendar days={70} />
        </div>
      </section>

      <section className="grid grid-cols-3 gap-2 mb-4">
        <StatTile label="Answered" value={String(attemptsCount ?? 0)} />
        <StatTile label="Accuracy" value={accuracy == null ? '—' : `${accuracy}%`} />
        <StatTile label="This week" value={String(sessionsThisWeek ?? 0)} sub="sessions" />
      </section>

      <section className="grid gap-2 mb-4">
        <button
          onClick={() => navigate('/practice', { state: { quickMode: 'exam', exam } })}
          className="w-full text-left rounded-xl bg-slate-900 border border-slate-800 p-4 active:scale-[0.99] transition-transform"
        >
          <p className="font-medium">Exam simulation</p>
          <p className="text-xs text-slate-500">Full {exam} timing &amp; question count</p>
        </button>
        <button
          onClick={() => navigate('/practice', { state: { quickMode: 'block', exam } })}
          className="w-full text-left rounded-xl bg-slate-900 border border-slate-800 p-4 active:scale-[0.99] transition-transform"
        >
          <p className="font-medium">20–25 min practice block</p>
          <p className="text-xs text-slate-500">Short interval learning, fits a break</p>
        </button>
        <button
          onClick={() => navigate('/practice', { state: { quickMode: 'weak', exam } })}
          className="w-full text-left rounded-xl bg-amber-950/40 border border-amber-900/50 p-4 active:scale-[0.99] transition-transform"
        >
          <p className="font-medium text-amber-200">Focus on weak areas</p>
          <p className="text-xs text-amber-200/60">Weighted toward your lowest-accuracy topics</p>
        </button>
      </section>

      {weakest.length > 0 && (
        <section className="rounded-xl bg-slate-900 border border-slate-800 p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-semibold text-slate-200">Watch these specialties</h2>
            <Link to="/weak-areas" className="text-xs text-sky-400 flex items-center">
              See all <ChevronRightIcon width={14} height={14} />
            </Link>
          </div>
          <ul className="space-y-2">
            {weakest.map((s) => (
              <li key={s.specialty} className="text-xs">
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">{s.specialty}</span>
                  <span className="text-slate-500">{s.accuracy === -1 ? 'not started' : `${Math.round(s.accuracy * 100)}%`}</span>
                </div>
                <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className={clsx('h-full rounded-full', s.accuracy === -1 ? 'bg-slate-700' : s.accuracy < 0.7 ? 'bg-rose-500' : 'bg-emerald-500')}
                    style={{ width: `${s.accuracy === -1 ? 100 : Math.max(4, s.accuracy * 100)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {badgeCount > 0 && (
        <Link to="/history" className="block text-center text-xs text-slate-500 mb-2">
          {badgeCount} badge{badgeCount === 1 ? '' : 's'} earned — view history for details
        </Link>
      )}
    </div>
  )
}

function StatTile({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-xl bg-slate-900 border border-slate-800 p-3 text-center">
      <p className="text-lg font-bold">{value}</p>
      <p className="text-[10px] text-slate-500 uppercase tracking-wide">{sub ?? label}</p>
    </div>
  )
}
