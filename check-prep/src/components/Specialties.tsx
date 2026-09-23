import { useMemo } from 'react'
import type { Specialty } from '../types'
import { UNITS, specialtyCounts, unitMatchesSpecialty } from '../data'
import { go } from '../useHashRoute'

export default function Specialties({ onPick }: { onPick: (s: Specialty) => void }) {
  const counts = useMemo(specialtyCounts, [])
  return (
    <div>
      <button onClick={() => go('/')} className="mb-4 text-sm font-medium text-teal-700 hover:underline">
        ← All units
      </button>
      <h1 className="text-2xl font-bold">Specialties covered</h1>
      <p className="mt-1 text-slate-600">
        Primary = the unit's main AKT/KFP domain. Total includes units where the specialty is also relevant.
      </p>
      <ul className="mt-4 space-y-3">
        {counts.map((c) => {
          const units = UNITS.filter((u) => unitMatchesSpecialty(u, c.specialty))
          return (
            <li key={c.specialty} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    onPick(c.specialty)
                    go('/')
                  }}
                  className="text-left text-lg font-semibold text-teal-800 hover:underline"
                >
                  {c.specialty}
                </button>
                <span className="shrink-0 text-sm text-slate-500">
                  {c.primary} primary · {c.total} total
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {units.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => go(`/unit/${u.id}`)}
                    className={`rounded-md px-2 py-1 text-xs ${
                      u.specialty === c.specialty ? 'bg-teal-50 font-medium text-teal-800 ring-1 ring-teal-200' : 'bg-slate-100 text-slate-600'
                    } hover:bg-teal-100`}
                  >
                    {u.title}
                  </button>
                ))}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
