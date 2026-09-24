import { useMemo, useState } from 'react'
import type { Specialty } from '../types'
import { UNITS, specialtyCounts, unitMatchesSpecialty } from '../data'
import type { UnitProgress } from '../useProgress'
import SpecialtyBadge from './SpecialtyBadge'
import { go } from '../useHashRoute'

interface Props {
  progress: Record<string, UnitProgress>
  specialty: Specialty | ''
  setSpecialty: (s: Specialty | '') => void
}

export default function Home({ progress, specialty, setSpecialty }: Props) {
  const [query, setQuery] = useState('')
  const counts = useMemo(specialtyCounts, [])

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return UNITS.filter(
      (u) =>
        unitMatchesSpecialty(u, specialty) &&
        (!q || u.title.toLowerCase().includes(q) || u.topics.some((t) => t.toLowerCase().includes(q)) || u.label.toLowerCase().includes(q)),
    )
  }, [query, specialty])

  const readCount = UNITS.filter((u) => progress[u.id]?.read).length

  return (
    <div>
      <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <h1 className="text-2xl font-bold sm:text-3xl">check revision for AKT &amp; KFP</h1>
        <p className="mt-2 max-w-2xl leading-relaxed text-slate-600">
          The last {UNITS.length} RACGP <em>check</em> units, each with 20 minutes of reading and learning, followed by AKT questions (single best
          answer and extended matching) and a KFP case in the current MCQ format (single best answer, choose-N and extended matching, no
          short answers). Pick a unit, start the 20-minute reading timer, then test yourself.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <span className="rounded-lg bg-slate-100 px-3 py-1.5">
            <strong>{readCount}</strong> / {UNITS.length} units read
          </span>
          <button onClick={() => go('/quiz')} className="rounded-lg bg-teal-700 px-3 py-1.5 font-medium text-white hover:bg-teal-800">
            Mixed AKT quiz →
          </button>
          <button onClick={() => go('/specialties')} className="rounded-lg border border-slate-300 px-3 py-1.5 font-medium hover:bg-slate-50">
            Browse by specialty
          </button>
        </div>
      </section>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search units or topics (e.g. syphilis, gout, ADHD)…"
          className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
        />
        <select
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value as Specialty | '')}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 focus:border-teal-600 focus:outline-none"
        >
          <option value="">All specialties</option>
          {counts.map((c) => (
            <option key={c.specialty} value={c.specialty}>
              {c.specialty} ({c.total})
            </option>
          ))}
        </select>
      </div>

      <p className="mt-3 text-sm text-slate-500">
        Showing {list.length} unit{list.length === 1 ? '' : 's'}
        {specialty && (
          <>
            {' '}
            in <strong>{specialty}</strong>{' '}
            <button className="text-teal-700 hover:underline" onClick={() => setSpecialty('')}>
              (clear)
            </button>
          </>
        )}
      </p>

      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
        {list.map((u) => {
          const p = progress[u.id] ?? {}
          return (
            <li key={u.id}>
              <button
                onClick={() => go(`/unit/${u.id}`)}
                className="flex h-full w-full flex-col rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-teal-500 hover:shadow-sm"
              >
                <div className="flex w-full items-center justify-between text-xs font-medium text-slate-500">
                  <span>
                    {u.label} · {u.date}
                  </span>
                  <span className="flex gap-1.5">
                    {p.read && <span className="rounded bg-green-100 px-1.5 py-0.5 text-green-800">Read</span>}
                    {p.mcqBest !== undefined && (
                      <span className="rounded bg-teal-100 px-1.5 py-0.5 text-teal-800">
                        AKT {Math.round(p.mcqBest * 10) / 10}/{p.mcqTotal}
                      </span>
                    )}
                    {p.kfpDone && <span className="rounded bg-amber-100 px-1.5 py-0.5 text-amber-800">KFP</span>}
                  </span>
                </div>
                <p className="mt-1.5 text-lg font-semibold leading-snug">{u.title}</p>
                <p className="mt-1 line-clamp-2 text-sm text-slate-600">{u.topics.slice(0, 4).join(' · ')}</p>
                <div className="mt-3">
                  <SpecialtyBadge s={u.specialty} primary />
                </div>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
