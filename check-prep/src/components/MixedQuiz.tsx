import { useMemo, useState } from 'react'
import type { Specialty } from '../types'
import { UNITS, specialtyCounts, unitMatchesSpecialty } from '../data'
import { shuffle } from '../shuffle'
import McqQuiz from './McqQuiz'
import { go } from '../useHashRoute'

const SIZES = [10, 20, 40]

export default function MixedQuiz() {
  const counts = useMemo(specialtyCounts, [])
  const [specialty, setSpecialty] = useState<Specialty | ''>('')
  const [size, setSize] = useState(20)
  const [seed, setSeed] = useState(0)
  const [started, setStarted] = useState(false)

  const pool = useMemo(
    () =>
      UNITS.filter((u) => unitMatchesSpecialty(u, specialty)).flatMap((u) =>
        u.mcqs.map((q) => ({ ...q, source: `${u.label} · ${u.title}` })),
      ),
    [specialty],
  )
  const questions = useMemo(() => shuffle(pool).slice(0, size), [pool, size, seed])

  return (
    <div>
      <button onClick={() => go('/')} className="mb-4 text-sm font-medium text-teal-700 hover:underline">
        ← All units
      </button>
      <h1 className="text-2xl font-bold">Mixed AKT quiz</h1>
      <p className="mt-1 text-slate-600">Random single-best-answer questions drawn from across the units – good for spaced revision.</p>

      {!started ? (
        <div className="mt-4 space-y-4 rounded-xl border border-slate-200 bg-white p-5">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Specialty</span>
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value as Specialty | '')}
              className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2"
            >
              <option value="">All specialties</option>
              {counts.map((c) => (
                <option key={c.specialty} value={c.specialty}>
                  {c.specialty}
                </option>
              ))}
            </select>
          </label>
          <div>
            <span className="text-sm font-medium text-slate-700">Number of questions</span>
            <div className="mt-1 flex gap-2">
              {SIZES.map((n) => (
                <button
                  key={n}
                  onClick={() => setSize(n)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium ${size === n ? 'bg-teal-700 text-white' : 'bg-slate-100 hover:bg-slate-200'}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          <p className="text-sm text-slate-500">{pool.length} questions available in this pool.</p>
          <button
            onClick={() => {
              setSeed((s) => s + 1)
              setStarted(true)
            }}
            className="rounded-lg bg-teal-700 px-5 py-2 font-medium text-white hover:bg-teal-800"
          >
            Start quiz
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <McqQuiz key={seed} questions={questions} />
          <button onClick={() => setStarted(false)} className="mt-4 text-sm font-medium text-teal-700 hover:underline">
            ← Change settings
          </button>
        </div>
      )}
    </div>
  )
}
