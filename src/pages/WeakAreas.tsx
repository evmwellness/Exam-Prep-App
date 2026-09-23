import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { computeSpecialtyStats, type SpecialtyStat } from '../lib/weakAreas'
import type { ExamType } from '../types'

export default function WeakAreas() {
  const navigate = useNavigate()
  const [exam, setExam] = useState<ExamType>('AKT')
  const [stats, setStats] = useState<SpecialtyStat[]>([])

  useEffect(() => {
    computeSpecialtyStats(exam).then(setStats)
  }, [exam])

  const weak = stats.filter((s) => s.accuracy !== -1 && s.accuracy < 0.7)
  const unseen = stats.filter((s) => s.accuracy === -1)
  const strong = stats.filter((s) => s.accuracy >= 0.7)

  function practiceSpecialty(specialty: string) {
    navigate('/practice', { state: { quickMode: 'weak', exam, specialty } })
  }

  return (
    <div className="flex-1 px-4 pt-6 pb-8">
      <h1 className="text-xl font-semibold mb-4">Weak areas</h1>

      <div className="flex rounded-full bg-slate-900 border border-slate-800 p-0.5 text-sm mb-5 w-fit">
        {(['AKT', 'KFP'] as ExamType[]).map((e) => (
          <button
            key={e}
            onClick={() => setExam(e)}
            className={clsx('px-4 py-1.5 rounded-full font-medium', exam === e ? 'bg-sky-500 text-slate-950' : 'text-slate-400')}
          >
            {e}
          </button>
        ))}
      </div>

      <button
        onClick={() => navigate('/practice', { state: { quickMode: 'weak', exam } })}
        className="w-full mb-5 text-left rounded-xl bg-amber-950/40 border border-amber-900/50 p-4"
      >
        <p className="font-medium text-amber-200">Practice all weak areas now</p>
        <p className="text-xs text-amber-200/60">Weighted session across every below-target specialty</p>
      </button>

      {weak.length > 0 && (
        <Section title="Needs work (below 70%)">
          {weak.map((s) => (
            <SpecialtyRow key={s.specialty} stat={s} onPractice={() => practiceSpecialty(s.specialty)} />
          ))}
        </Section>
      )}

      {unseen.length > 0 && (
        <Section title="Not yet practiced">
          {unseen.map((s) => (
            <SpecialtyRow key={s.specialty} stat={s} onPractice={() => practiceSpecialty(s.specialty)} />
          ))}
        </Section>
      )}

      {strong.length > 0 && (
        <Section title="On track (70%+)">
          {strong.map((s) => (
            <SpecialtyRow key={s.specialty} stat={s} onPractice={() => practiceSpecialty(s.specialty)} />
          ))}
        </Section>
      )}
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-5">
      <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  )
}

function SpecialtyRow({ stat, onPractice }: { stat: SpecialtyStat; onPractice: () => void }) {
  const pct = stat.accuracy === -1 ? null : Math.round(stat.accuracy * 100)
  return (
    <div className="rounded-xl bg-slate-900 border border-slate-800 p-3.5">
      <div className="flex items-center justify-between mb-1.5">
        <p className="text-sm text-slate-200">{stat.specialty}</p>
        <p className="text-xs text-slate-500">{pct == null ? 'no data' : `${pct}% · ${stat.attempts} Qs`}</p>
      </div>
      <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden mb-2">
        <div
          className={clsx('h-full rounded-full', pct == null ? 'bg-slate-700' : pct < 70 ? 'bg-rose-500' : 'bg-emerald-500')}
          style={{ width: `${pct == null ? 100 : Math.max(4, pct)}%` }}
        />
      </div>
      <button onClick={onPractice} className="text-xs text-sky-400 font-medium">
        Practice this specialty →
      </button>
    </div>
  )
}
