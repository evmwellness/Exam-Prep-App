import { useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { practiceItemsByUid } from '../data/practiceItems'
import { formatSeconds } from '../lib/examConfig'
import QuestionReview from '../components/question/QuestionReview'
import type { Badge, SessionRecord, Specialty } from '../types'

interface NavState {
  session: SessionRecord & { id: number }
  newBadges: Badge[]
}

export default function Results() {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as NavState | undefined
  const [showAll, setShowAll] = useState(false)

  const rows = useMemo(() => {
    if (!state) return []
    return state.session.questionUids
      .map((uid) => ({ uid, item: practiceItemsByUid.get(uid), selectedKey: state.session.answers[uid] ?? null }))
      .filter((r) => r.item != null)
  }, [state])

  const specialtyBreakdown = useMemo(() => {
    const map = new Map<Specialty, { correct: number; total: number }>()
    for (const r of rows) {
      const s = r.item!.specialty
      const entry = map.get(s) ?? { correct: 0, total: 0 }
      entry.total += 1
      if (r.selectedKey === r.item!.correctKey) entry.correct += 1
      map.set(s, entry)
    }
    return [...map.entries()]
      .map(([specialty, v]) => ({ specialty, accuracy: Math.round((v.correct / v.total) * 100), total: v.total }))
      .sort((a, b) => a.accuracy - b.accuracy)
  }, [rows])

  if (!state) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-3">
        <p className="text-slate-400">No session results to show.</p>
        <button onClick={() => navigate('/practice')} className="text-sky-400 font-medium">
          Start a practice session
        </button>
      </div>
    )
  }

  const { session, newBadges } = state
  const accuracyPct = Math.round((session.correctCount / session.totalCount) * 100)
  const avgPace = session.totalTimeSec / session.totalCount
  const displayRows = showAll ? rows : rows.filter((r) => r.selectedKey !== r.item!.correctKey)
  const weakSpecialtiesInSession = specialtyBreakdown.filter((s) => s.accuracy < 70).map((s) => s.specialty)

  return (
    <div className="flex-1 px-4 pt-6 pb-8">
      <h1 className="text-xl font-semibold mb-1">Session complete</h1>
      <p className="text-xs text-slate-500 mb-5">{session.exam} · {modeLabel(session.mode)}</p>

      <section className="rounded-2xl bg-slate-900 border border-slate-800 p-5 mb-4 text-center">
        <p className="text-4xl font-bold">{accuracyPct}%</p>
        <p className="text-sm text-slate-400 mb-4">{session.correctCount} of {session.totalCount} correct</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg bg-slate-950/60 py-2">
            <p className="font-semibold text-slate-200">{formatSeconds(session.totalTimeSec)}</p>
            <p className="text-slate-500">total time</p>
          </div>
          <div className="rounded-lg bg-slate-950/60 py-2">
            <p className="font-semibold text-slate-200">{avgPace.toFixed(0)}s</p>
            <p className="text-slate-500">avg / question</p>
          </div>
        </div>
      </section>

      {newBadges.length > 0 && (
        <section className="rounded-xl bg-amber-950/30 border border-amber-800/50 p-4 mb-4">
          <p className="text-sm font-semibold text-amber-200 mb-2">New record{newBadges.length > 1 ? 's' : ''}!</p>
          <ul className="space-y-1.5">
            {newBadges.map((b) => (
              <li key={b.id} className="text-xs text-amber-100/80">
                <span className="font-medium text-amber-200">{b.label}</span> — {b.description}
              </li>
            ))}
          </ul>
        </section>
      )}

      {specialtyBreakdown.length > 1 && (
        <section className="rounded-xl bg-slate-900 border border-slate-800 p-4 mb-4">
          <h2 className="text-sm font-semibold text-slate-200 mb-3">Accuracy by specialty (this session)</h2>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={specialtyBreakdown} layout="vertical" margin={{ left: 0, right: 12, top: 4, bottom: 4 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
                <XAxis type="number" domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={{ stroke: '#334155' }} tickLine={false} />
                <YAxis
                  type="category"
                  dataKey="specialty"
                  width={110}
                  tick={{ fill: '#94a3b8', fontSize: 10 }}
                  axisLine={{ stroke: '#334155' }}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 8, fontSize: 12 }}
                  labelStyle={{ color: '#e2e8f0' }}
                  formatter={(value) => [`${value}%`, 'Accuracy']}
                />
                <Bar dataKey="accuracy" radius={[0, 4, 4, 0]}>
                  {specialtyBreakdown.map((s, i) => (
                    <Cell key={i} fill={s.accuracy < 70 ? '#f43f5e' : '#38bdf8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      )}

      {weakSpecialtiesInSession.length > 0 && (
        <button
          onClick={() =>
            navigate('/practice', {
              state: { quickMode: 'weak', exam: session.exam },
            })
          }
          className="w-full mb-4 text-left rounded-xl bg-amber-950/30 border border-amber-900/50 p-3.5"
        >
          <p className="text-sm font-medium text-amber-200">Drill these weak spots now</p>
          <p className="text-xs text-amber-200/60">{weakSpecialtiesInSession.join(', ')}</p>
        </button>
      )}

      <section className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-semibold text-slate-200">
            {showAll ? 'All questions' : 'Answers to review'}
          </h2>
          <button onClick={() => setShowAll((v) => !v)} className="text-xs text-sky-400 font-medium">
            {showAll ? 'Show only wrong/skipped' : 'Show all questions'}
          </button>
        </div>
        {displayRows.length === 0 ? (
          <p className="text-sm text-emerald-400 py-4 text-center">Nothing to review — every answer was correct.</p>
        ) : (
          <div className="space-y-2">
            {displayRows.map((r, i) => (
              <QuestionReview key={r.uid} item={r.item!} selectedKey={r.selectedKey} index={i} />
            ))}
          </div>
        )}
      </section>

      <div className="flex gap-2">
        <button onClick={() => navigate('/')} className="flex-1 py-3 rounded-xl bg-slate-900 border border-slate-800 font-medium">
          Dashboard
        </button>
        <button
          onClick={() => navigate('/practice', { state: { exam: session.exam } })}
          className="flex-1 py-3 rounded-xl bg-sky-500 text-slate-950 font-semibold"
        >
          Practice again
        </button>
      </div>
    </div>
  )
}

function modeLabel(mode: SessionRecord['mode']): string {
  switch (mode) {
    case 'exam':
      return 'Exam simulation'
    case 'block':
      return 'Practice block'
    case 'weak-areas':
      return 'Weak-areas focus'
    default:
      return 'Custom practice'
  }
}
