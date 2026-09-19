import { useCallback, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { useCountdown } from '../hooks/useCountdown'
import { formatSeconds } from '../lib/examConfig'
import { db } from '../db/db'
import { recordPractice } from '../lib/streak'
import { evaluateBadgesForSession } from '../lib/badges'
import { FlagIcon, TimerIcon, XIcon } from '../components/layout/icons'
import type { AttemptRecord, SessionRecord } from '../types'
import type { BuiltSession } from '../lib/sessionBuilder'

export default function Session() {
  const navigate = useNavigate()
  const location = useLocation()
  const built = location.state as BuiltSession | undefined

  if (!built || !built.items || built.items.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-3">
        <p className="text-slate-400">No active session. Set one up first.</p>
        <button onClick={() => navigate('/practice')} className="text-sky-400 font-medium">
          Go to practice setup
        </button>
      </div>
    )
  }

  return <SessionRunner built={built} />
}

function SessionRunner({ built }: { built: BuiltSession }) {
  const navigate = useNavigate()
  const { items, exam, mode, timeLimitSec } = built

  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [flagged, setFlagged] = useState<Set<string>>(new Set())
  const [timeSpent, setTimeSpent] = useState<Record<string, number>>({})
  const [showGrid, setShowGrid] = useState(false)
  const [finished, setFinished] = useState(false)
  const enteredAtRef = useRef(Date.now())
  const answersRef = useRef(answers)
  answersRef.current = answers
  const timeSpentRef = useRef(timeSpent)
  timeSpentRef.current = timeSpent

  const current = items[index]

  const commitTime = useCallback((uid: string) => {
    const now = Date.now()
    const delta = (now - enteredAtRef.current) / 1000
    enteredAtRef.current = now
    setTimeSpent((prev) => ({ ...prev, [uid]: (prev[uid] ?? 0) + delta }))
  }, [])

  const finish = useCallback(async () => {
    if (finished) return
    setFinished(true)
    commitTime(items[index].uid)

    const finalAnswers = answersRef.current
    const finalTimes = timeSpentRef.current
    const attemptRows: Omit<AttemptRecord, 'id' | 'sessionId'>[] = items.map((item) => ({
      questionUid: item.uid,
      exam: item.exam,
      specialty: item.specialty,
      topic: item.topic,
      selectedKey: finalAnswers[item.uid] ?? null,
      correctKey: item.correctKey,
      isCorrect: finalAnswers[item.uid] === item.correctKey,
      timeTakenSec: Math.round(finalTimes[item.uid] ?? 0),
      answeredAt: Date.now(),
    }))
    const correctCount = attemptRows.filter((a) => a.isCorrect).length
    const totalTimeSec = attemptRows.reduce((s, a) => s + a.timeTakenSec, 0)

    const session: SessionRecord = {
      exam,
      mode,
      startedAt: Date.now() - totalTimeSec * 1000,
      finishedAt: Date.now(),
      timeLimitSec,
      questionUids: items.map((i) => i.uid),
      answers: finalAnswers,
      correctCount,
      totalCount: items.length,
      totalTimeSec,
    }

    const sessionId = (await db.sessions.add(session)) as number
    await db.attempts.bulkAdd(attemptRows.map((a) => ({ ...a, sessionId })))
    await recordPractice(items.length, correctCount)
    const newBadges = await evaluateBadgesForSession({ ...session, id: sessionId })

    navigate('/results', { state: { sessionId, session: { ...session, id: sessionId }, newBadges }, replace: true })
  }, [items, index, exam, mode, timeLimitSec, commitTime, finished, navigate])

  const { secondsLeft } = useCountdown(timeLimitSec, finish)

  function goTo(newIndex: number) {
    if (newIndex < 0 || newIndex >= items.length) return
    commitTime(current.uid)
    setIndex(newIndex)
    setShowGrid(false)
  }

  function selectAnswer(key: string) {
    setAnswers((prev) => ({ ...prev, [current.uid]: key }))
  }

  function toggleFlag() {
    setFlagged((prev) => {
      const next = new Set(prev)
      if (next.has(current.uid)) next.delete(current.uid)
      else next.add(current.uid)
      return next
    })
  }

  function confirmExit() {
    if (window.confirm('Exit this session? Your progress on it will not be saved.')) {
      navigate('/practice')
    }
  }

  const answeredCount = Object.keys(answers).length
  const isLow = secondsLeft < 120

  return (
    <div className="flex-1 flex flex-col">
      <header className="flex items-center justify-between px-4 py-3 border-b border-slate-800 sticky top-0 bg-slate-950/95 backdrop-blur z-10">
        <button onClick={confirmExit} className="text-slate-500">
          <XIcon width={20} height={20} />
        </button>
        <div className={clsx('flex items-center gap-1.5 font-mono text-sm font-semibold', isLow ? 'text-rose-400' : 'text-slate-200')}>
          <TimerIcon width={16} height={16} />
          {formatSeconds(secondsLeft)}
        </div>
        <button onClick={() => setShowGrid(true)} className="text-xs text-sky-400 font-medium">
          {index + 1}/{items.length}
        </button>
      </header>

      <div className="px-4 py-2 border-b border-slate-900">
        <div className="h-1 rounded-full bg-slate-800 overflow-hidden">
          <div className="h-full bg-sky-500" style={{ width: `${((index + 1) / items.length) * 100}%` }} />
        </div>
      </div>

      <main className="flex-1 px-4 py-4 overflow-y-auto">
        {current.exam === 'KFP' && current.caseTitle && (
          <div className="mb-3">
            <p className="text-xs uppercase tracking-wide text-amber-400/80 font-semibold">
              {current.kfpFormat === 'emq' ? 'Theme' : 'Case'}: {current.caseTitle} · item {current.itemIndex}/{current.caseItemCount}
            </p>
          </div>
        )}
        <p className="text-xs text-slate-500 mb-2">{current.specialty} · {current.topic}</p>
        {current.instructions && (
          <p className="text-xs italic text-sky-300/80 bg-sky-950/30 border border-sky-900/40 rounded-lg px-3 py-2 mb-3">
            {current.instructions}
          </p>
        )}
        <p className="text-[15px] leading-relaxed text-slate-100 whitespace-pre-line mb-5">{current.displayStem}</p>

        <div className="space-y-2 mb-4">
          {current.options.map((opt) => {
            const selected = answers[current.uid] === opt.key
            return (
              <button
                key={opt.key}
                onClick={() => selectAnswer(opt.key)}
                className={clsx(
                  'w-full text-left rounded-xl border px-3.5 py-3 text-sm transition-colors flex gap-3',
                  selected ? 'bg-sky-950/60 border-sky-500 text-sky-100' : 'bg-slate-900 border-slate-800 text-slate-200',
                )}
              >
                <span
                  className={clsx(
                    'shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold',
                    selected ? 'bg-sky-500 text-slate-950' : 'bg-slate-800 text-slate-400',
                  )}
                >
                  {opt.key}
                </span>
                <span>{opt.text}</span>
              </button>
            )
          })}
        </div>

        <button
          onClick={toggleFlag}
          className={clsx(
            'inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border',
            flagged.has(current.uid) ? 'bg-amber-950/50 border-amber-700 text-amber-300' : 'border-slate-800 text-slate-500',
          )}
        >
          <FlagIcon width={14} height={14} />
          {flagged.has(current.uid) ? 'Flagged for review' : 'Flag for review'}
        </button>
      </main>

      <footer className="px-4 py-3 border-t border-slate-800 flex gap-2 sticky bottom-0 bg-slate-950/95 backdrop-blur">
        <button
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
          className="flex-1 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-medium disabled:opacity-40"
        >
          Previous
        </button>
        {index === items.length - 1 ? (
          <button onClick={finish} className="flex-1 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold">
            Finish
          </button>
        ) : (
          <button onClick={() => goTo(index + 1)} className="flex-1 py-3 rounded-xl bg-sky-500 text-slate-950 font-semibold">
            Next
          </button>
        )}
      </footer>

      {showGrid && (
        <QuestionGridOverlay
          items={items}
          answers={answers}
          flagged={flagged}
          currentIndex={index}
          answeredCount={answeredCount}
          onJump={goTo}
          onClose={() => setShowGrid(false)}
          onFinish={() => {
            if (answeredCount < items.length) {
              if (!window.confirm(`${items.length - answeredCount} question(s) unanswered. Finish anyway?`)) return
            }
            finish()
          }}
        />
      )}
    </div>
  )
}

function QuestionGridOverlay({
  items,
  answers,
  flagged,
  currentIndex,
  answeredCount,
  onJump,
  onClose,
  onFinish,
}: {
  items: BuiltSession['items']
  answers: Record<string, string>
  flagged: Set<string>
  currentIndex: number
  answeredCount: number
  onJump: (i: number) => void
  onClose: () => void
  onFinish: () => void
}) {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-end sm:items-center justify-center">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-t-2xl sm:rounded-2xl p-4 max-h-[80vh] flex flex-col">
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold text-sm">
            {answeredCount}/{items.length} answered
          </p>
          <button onClick={onClose} className="text-slate-500">
            <XIcon width={18} height={18} />
          </button>
        </div>
        <div className="grid grid-cols-6 gap-2 overflow-y-auto mb-3">
          {items.map((item, i) => {
            const isAnswered = answers[item.uid] != null
            const isFlagged = flagged.has(item.uid)
            const isCurrent = i === currentIndex
            return (
              <button
                key={item.uid}
                onClick={() => onJump(i)}
                className={clsx(
                  'relative aspect-square rounded-lg text-xs font-medium flex items-center justify-center border',
                  isCurrent && 'ring-2 ring-sky-400',
                  isAnswered ? 'bg-sky-900/60 border-sky-700 text-sky-200' : 'bg-slate-800 border-slate-700 text-slate-400',
                )}
              >
                {i + 1}
                {isFlagged && <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400" />}
              </button>
            )
          })}
        </div>
        <button onClick={onFinish} className="w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold">
          Finish session
        </button>
      </div>
    </div>
  )
}
