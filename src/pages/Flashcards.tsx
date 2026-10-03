import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { buildReviewQueue, computeNextReview, gradeCard, type FlashcardQueueItem } from '../lib/srs'
import { recordPractice } from '../lib/streak'
import type { ReviewGrade, Specialty } from '../types'

interface NavState {
  specialties?: Specialty[]
}

const GRADE_CONFIG: { grade: ReviewGrade; label: string; className: string }[] = [
  { grade: 'again', label: 'Again', className: 'bg-rose-950/50 border-rose-800 text-rose-300' },
  { grade: 'hard', label: 'Hard', className: 'bg-amber-950/50 border-amber-800 text-amber-300' },
  { grade: 'good', label: 'Good', className: 'bg-sky-950/50 border-sky-700 text-sky-300' },
  { grade: 'easy', label: 'Easy', className: 'bg-emerald-950/50 border-emerald-800 text-emerald-300' },
]

function formatInterval(days: number): string {
  if (days < 1) return '<1d'
  if (days < 30) return `${days}d`
  if (days < 365) return `${Math.round(days / 30)}mo`
  return `${(days / 365).toFixed(1)}y`
}

export default function Flashcards() {
  const navigate = useNavigate()
  const location = useLocation()
  const navState = (location.state as NavState) ?? {}

  const [queue, setQueue] = useState<FlashcardQueueItem[] | null>(null)
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [tally, setTally] = useState<Record<ReviewGrade, number>>({ again: 0, hard: 0, good: 0, easy: 0 })

  useEffect(() => {
    buildReviewQueue({ specialties: navState.specialties }).then(setQueue)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const current = queue?.[index]

  const previewIntervals = useMemo(() => {
    if (!current) return null
    const today = new Date().toISOString().slice(0, 10)
    return Object.fromEntries(
      GRADE_CONFIG.map(({ grade }) => [grade, computeNextReview(current.review, grade, today).intervalDays]),
    ) as Record<ReviewGrade, number>
  }, [current])

  async function finishSession() {
    const total = Object.values(tally).reduce((s, n) => s + n, 0)
    const correctLike = tally.hard + tally.good + tally.easy
    if (total > 0) await recordPractice(total, correctLike)
  }

  async function grade(g: ReviewGrade) {
    if (!current) return
    await gradeCard(current.card.id, g)
    setTally((prev) => ({ ...prev, [g]: prev[g] + 1 }))
    const next = index + 1
    if (next >= (queue?.length ?? 0)) {
      await finishSession()
      setIndex(next) // triggers the "done" view below
    } else {
      setIndex(next)
      setRevealed(false)
    }
  }

  if (queue === null) {
    return <div className="flex-1 flex items-center justify-center text-slate-500 text-sm">Loading…</div>
  }

  if (queue.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <p className="text-lg font-semibold text-slate-200">All caught up</p>
        <p className="text-sm text-slate-500">No flashcards due right now — nice work. Check back tomorrow.</p>
        <button onClick={() => navigate('/')} className="text-sky-400 font-medium">
          Back to dashboard
        </button>
      </div>
    )
  }

  if (index >= queue.length) {
    const total = Object.values(tally).reduce((s, n) => s + n, 0)
    return (
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-lg font-semibold text-slate-200">Session complete</p>
        <p className="text-sm text-slate-500">{total} card{total === 1 ? '' : 's'} reviewed</p>
        <div className="flex gap-3 text-xs">
          {GRADE_CONFIG.map(({ grade: g, label }) => (
            <div key={g} className="text-center">
              <p className="text-lg font-bold text-slate-200">{tally[g]}</p>
              <p className="text-slate-500">{label}</p>
            </div>
          ))}
        </div>
        <button onClick={() => navigate('/')} className="mt-2 py-3 px-6 rounded-xl bg-sky-500 text-slate-950 font-semibold">
          Done
        </button>
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-4 py-3 border-b border-slate-800">
        <button onClick={() => navigate('/')} className="text-slate-500 text-sm">
          Exit
        </button>
        <p className="text-xs text-slate-500">
          {index + 1}/{queue.length}
        </p>
      </header>

      <main className="flex-1 px-4 py-6 flex flex-col">
        <p className="text-xs text-slate-500 mb-1">
          {current!.card.specialty} · {current!.card.topic} {current!.isNew && <span className="text-sky-400">· new</span>}
        </p>
        <div className="flex-1 flex flex-col justify-center">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 min-h-[180px] flex items-center justify-center text-center">
            <p className="text-base text-slate-100 leading-relaxed">{current!.card.front}</p>
          </div>

          {revealed && (
            <div className="mt-4 rounded-2xl bg-slate-950/60 border border-sky-900/40 p-5">
              <p className="text-sm text-slate-200 whitespace-pre-line leading-relaxed">{current!.card.back}</p>
            </div>
          )}
        </div>

        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="mt-6 w-full py-3.5 rounded-xl bg-sky-500 text-slate-950 font-semibold"
          >
            Show answer
          </button>
        ) : (
          <div className="mt-6 grid grid-cols-4 gap-2">
            {GRADE_CONFIG.map(({ grade: g, label, className }) => (
              <button
                key={g}
                onClick={() => grade(g)}
                className={clsx('rounded-xl border py-3 text-center', className)}
              >
                <p className="text-sm font-semibold">{label}</p>
                <p className="text-[10px] opacity-70 mt-0.5">{previewIntervals ? formatInterval(previewIntervals[g]) : ''}</p>
              </button>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
