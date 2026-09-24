import { useEffect, useState } from 'react'
import type { Unit } from '../types'
import type { UnitProgress } from '../useProgress'
import QuestionSet from './QuestionSet'
import { questionMax } from '../data'
import SpecialtyBadge from './SpecialtyBadge'
import { go } from '../useHashRoute'

type Tab = 'summary' | 'akt' | 'kfp'

const READING_MINUTES = 20

interface Props {
  unit: Unit
  progress: UnitProgress
  onUpdate: (patch: UnitProgress) => void
  onMcq: (score: number, total: number) => void
}

export default function UnitView({ unit, progress, onUpdate, onMcq }: Props) {
  const aktPoints = unit.mcqs.reduce((n, q) => n + questionMax(q), 0)
  const kfpPoints = unit.kfp.reduce((n, k) => n + k.questions.reduce((m, q) => m + questionMax(q), 0), 0)
  // The timer covers the reading only; questions come afterwards, untimed
  const READING_SECONDS = READING_MINUTES * 60

  const [tab, setTab] = useState<Tab>('summary')
  const [running, setRunning] = useState(false)
  const [left, setLeft] = useState(READING_SECONDS)

  useEffect(() => {
    if (!running) return
    const t = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000)
    return () => clearInterval(t)
  }, [running])

  useEffect(() => {
    if (left === 0) setRunning(false)
  }, [left])

  const mm = String(Math.floor(left / 60)).padStart(2, '0')
  const ss = String(left % 60).padStart(2, '0')

  const tabs: { id: Tab; label: string; hint: string }[] = [
    { id: 'summary', label: 'Summary', hint: `${READING_MINUTES} min` },
    { id: 'akt', label: 'AKT', hint: `${aktPoints} Qs` },
    { id: 'kfp', label: 'KFP', hint: `${kfpPoints} Qs` },
  ]

  return (
    <div>
      <button onClick={() => go('/')} className="mb-4 text-sm font-medium text-teal-700 hover:underline">
        ← All units
      </button>

      <header className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        <p className="text-sm font-medium text-slate-500">
          {unit.label} · {unit.date}
        </p>
        <h1 className="mt-1 text-2xl font-bold sm:text-3xl">{unit.title}</h1>
        <div className="mt-3 flex flex-wrap gap-2">
          <SpecialtyBadge s={unit.specialty} primary />
          {unit.alsoRelevant.map((s) => (
            <SpecialtyBadge key={s} s={s} />
          ))}
        </div>
        <div className="mt-4">
          <p className="text-sm font-semibold text-slate-600">Topics covered</p>
          <ul className="mt-1 grid gap-x-6 gap-y-1 text-[15px] text-slate-700 sm:grid-cols-2">
            {unit.topics.map((t) => (
              <li key={t} className="flex gap-2">
                <span className="text-teal-600">•</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 rounded-lg bg-slate-50 px-4 py-3">
          <span className="font-mono text-xl font-semibold tabular-nums">
            {mm}:{ss}
          </span>
          <span className="text-sm text-slate-600">
            {left === 0
              ? 'Reading done. Now try the questions.'
              : running || left < READING_SECONDS
                ? 'Read and learn the summary'
                : `${READING_MINUTES}-minute reading block (questions afterwards)`}
          </span>
          <div className="ml-auto flex gap-2">
            <button
              onClick={() => setRunning((r) => !r)}
              disabled={left === 0}
              className="rounded-lg bg-teal-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-teal-800 disabled:opacity-50"
            >
              {running ? 'Pause' : left < READING_SECONDS ? 'Resume' : 'Start reading'}
            </button>
            {left === 0 && (
              <button
                onClick={() => setTab('akt')}
                className="rounded-lg bg-teal-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-teal-800"
              >
                Go to AKT →
              </button>
            )}
            {left < READING_SECONDS && (
              <button
                onClick={() => {
                  setRunning(false)
                  setLeft(READING_SECONDS)
                }}
                className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm hover:bg-white"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </header>

      <nav className="sticky top-0 z-10 -mx-4 mt-4 flex gap-1 overflow-x-auto bg-slate-50/95 px-4 py-2 backdrop-blur">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition ${
              tab === t.id ? 'bg-teal-700 text-white' : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100'
            }`}
          >
            {t.label} <span className={tab === t.id ? 'text-teal-100' : 'text-slate-400'}>{t.hint}</span>
          </button>
        ))}
      </nav>

      <div className="mt-3">
        {tab === 'summary' && (
          <article className="space-y-4">
            <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
              <h2 className="text-lg font-semibold">Overview</h2>
              <p className="mt-2 text-[16px] leading-relaxed text-slate-700">{unit.overview}</p>
            </section>
            {unit.sections.map((s, i) => (
              <section key={i} className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <h2 className="text-lg font-semibold">{s.heading}</h2>
                <ul className="mt-2 space-y-2">
                  {s.points.map((p, i) => (
                    <li key={i} className="flex gap-2 text-[16px] leading-relaxed text-slate-700">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
            {unit.keyNumbers && unit.keyNumbers.length > 0 && (
              <section className="rounded-xl border border-sky-200 bg-sky-50 p-5 sm:p-6">
                <h2 className="text-lg font-semibold text-sky-950">Numbers, doses &amp; criteria to remember</h2>
                <ul className="mt-2 grid gap-x-6 gap-y-1.5 text-sky-950 sm:grid-cols-2">
                  {unit.keyNumbers.map((k) => (
                    <li key={k} className="flex gap-2">
                      <span className="text-sky-600">▸</span>
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
            {unit.workedCase && (
              <section className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Worked case</p>
                <h2 className="mt-1 text-lg font-semibold">{unit.workedCase.title}</h2>
                <div className="mt-2 space-y-3 text-[16px] leading-relaxed text-slate-700">
                  {unit.workedCase.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            )}
            <section className="rounded-xl border border-red-200 bg-red-50 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-red-900">Red flags – don't miss</h2>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-red-900">
                {unit.redFlags.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>
            <section className="rounded-xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-amber-900">AKT / KFP exam tips</h2>
              <ul className="mt-2 list-disc space-y-1.5 pl-5 text-amber-900">
                {unit.examTips.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>
            <div className="flex flex-wrap items-center justify-between gap-3">
              {unit.url ? (
                <a href={unit.url} target="_blank" rel="noreferrer" className="text-sm text-teal-700 hover:underline">
                  RACGP unit page (learning outcomes & cases) ↗
                </a>
              ) : (
                <span />
              )}
              <button
                onClick={() => {
                  onUpdate({ read: true })
                  setTab('akt')
                  window.scrollTo(0, 0)
                }}
                className="rounded-lg bg-teal-700 px-5 py-2 font-medium text-white hover:bg-teal-800"
              >
                {progress.read ? 'Read ✓ – go to AKT questions' : 'Mark as read & start AKT questions'}
              </button>
            </div>
          </article>
        )}

        {tab === 'akt' && (
          <div>
            <p className="mb-3 text-sm text-slate-600">
              AKT style: single best answer and extended matching. Answer options are shuffled each attempt.
              {progress.mcqBest !== undefined && ` Best so far: ${Math.round(progress.mcqBest * 10) / 10}/${progress.mcqTotal}.`}
            </p>
            <QuestionSet key={unit.id} questions={unit.mcqs} onFinish={onMcq} />
            <div className="mt-4 text-right">
              <button onClick={() => setTab('kfp')} className="text-sm font-medium text-teal-700 hover:underline">
                Continue to KFP case →
              </button>
            </div>
          </div>
        )}

        {tab === 'kfp' && (
          <div className="space-y-4">
            <p className="text-sm text-slate-600">
              Key feature problem: the case unfolds over several questions – single best answer, "choose N" and extended matching.
            </p>
            {unit.kfp.length === 0 && <p className="text-slate-500">KFP case coming soon for this unit.</p>}
            {unit.kfp.map((k) => (
              <QuestionSet
                key={unit.id + k.title}
                questions={k.questions}
                scenario={{ title: k.title, text: k.scenario }}
                onFinish={() => onUpdate({ kfpDone: true })}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
