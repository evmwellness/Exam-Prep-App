import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLiveQuery } from 'dexie-react-hooks'
import clsx from 'clsx'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { db } from '../db/db'
import { getAllBadges } from '../lib/badges'
import type { ExamType } from '../types'

export default function History() {
  const [exam, setExam] = useState<ExamType | 'ALL'>('ALL')

  const sessions = useLiveQuery(async () => {
    const all = await db.sessions.orderBy('finishedAt').reverse().toArray()
    return exam === 'ALL' ? all : all.filter((s) => s.exam === exam)
  }, [exam], [])

  const badges = useLiveQuery(() => getAllBadges(), [], [])

  const chartData = useMemo(() => {
    return [...(sessions ?? [])]
      .reverse()
      .filter((s) => s.finishedAt)
      .map((s, i) => ({
        index: i + 1,
        accuracy: Math.round((s.correctCount / s.totalCount) * 100),
        date: new Date(s.finishedAt!).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      }))
  }, [sessions])

  return (
    <div className="flex-1 px-4 pt-6 pb-8">
      <h1 className="text-xl font-semibold mb-4">History</h1>

      <div className="flex rounded-full bg-slate-900 border border-slate-800 p-0.5 text-sm mb-4 w-fit">
        {(['ALL', 'AKT', 'KFP'] as const).map((e) => (
          <button
            key={e}
            onClick={() => setExam(e)}
            className={clsx('px-3.5 py-1.5 rounded-full font-medium', exam === e ? 'bg-sky-500 text-slate-950' : 'text-slate-400')}
          >
            {e === 'ALL' ? 'All' : e}
          </button>
        ))}
      </div>

      {chartData.length > 1 && (
        <section className="rounded-xl bg-slate-900 border border-slate-800 p-4 mb-4">
          <h2 className="text-sm font-semibold text-slate-200 mb-3">Accuracy trend</h2>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ left: -20, right: 8, top: 4, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={{ stroke: '#334155' }} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 10 }} axisLine={{ stroke: '#334155' }} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 8, fontSize: 12 }}
                  labelStyle={{ color: '#e2e8f0' }}
                  formatter={(value) => [`${value}%`, 'Accuracy']}
                />
                <Line type="monotone" dataKey="accuracy" stroke="#38bdf8" strokeWidth={2} dot={{ r: 3, fill: '#38bdf8' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      )}

      {badges && badges.length > 0 && (
        <section className="mb-5">
          <h2 className="text-sm font-semibold text-slate-200 mb-2">Badges ({badges.length})</h2>
          <div className="grid grid-cols-2 gap-2">
            {badges.map((b) => (
              <div key={b.id} className="rounded-lg bg-slate-900 border border-slate-800 p-2.5">
                <p className="text-xs font-semibold text-amber-300">{b.label}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{new Date(b.earnedAt).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-sm font-semibold text-slate-200 mb-2">Sessions</h2>
        {!sessions || sessions.length === 0 ? (
          <p className="text-sm text-slate-500 py-6 text-center">No sessions yet — go practice!</p>
        ) : (
          <ul className="space-y-2">
            {sessions.map((s) => {
              const accuracy = Math.round((s.correctCount / s.totalCount) * 100)
              return (
                <li key={s.id}>
                  <Link
                    to={`/history/${s.id}`}
                    className="flex items-center justify-between rounded-xl bg-slate-900 border border-slate-800 px-3.5 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-slate-200">
                        {s.exam} · {modeLabel(s.mode)}
                      </p>
                      <p className="text-xs text-slate-500">
                        {s.finishedAt ? new Date(s.finishedAt).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' }) : '—'}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={clsx('text-sm font-semibold', accuracy >= 70 ? 'text-emerald-400' : 'text-rose-400')}>
                        {s.correctCount}/{s.totalCount}
                      </p>
                      <p className="text-xs text-slate-500">{accuracy}%</p>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </section>
    </div>
  )
}

function modeLabel(mode: string): string {
  switch (mode) {
    case 'exam':
      return 'Exam sim'
    case 'block':
      return 'Practice block'
    case 'weak-areas':
      return 'Weak areas'
    default:
      return 'Custom'
  }
}
