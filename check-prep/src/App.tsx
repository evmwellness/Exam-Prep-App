import { useState } from 'react'
import type { Specialty } from './types'
import { findUnit } from './data'
import { useProgress } from './useProgress'
import { go, useHashRoute } from './useHashRoute'
import Home from './components/Home'
import UnitView from './components/UnitView'
import Specialties from './components/Specialties'
import MixedQuiz from './components/MixedQuiz'

export default function App() {
  const route = useHashRoute()
  const { progress, update, recordMcq, reset } = useProgress()
  const [specialty, setSpecialty] = useState<Specialty | ''>('')

  let page: JSX.Element
  if (route[0] === 'unit' && route[1] && findUnit(route[1])) {
    const unit = findUnit(route[1])!
    page = (
      <UnitView
        key={unit.id}
        unit={unit}
        progress={progress[unit.id] ?? {}}
        onUpdate={(p) => update(unit.id, p)}
        onMcq={(s, t) => recordMcq(unit.id, s, t)}
      />
    )
  } else if (route[0] === 'specialties') {
    page = <Specialties onPick={setSpecialty} />
  } else if (route[0] === 'quiz') {
    page = <MixedQuiz />
  } else {
    page = <Home progress={progress} specialty={specialty} setSpecialty={setSpecialty} />
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-3">
          <button onClick={() => go('/')} className="flex items-center gap-2 font-bold text-teal-800">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-teal-700 text-white">✓</span>
            check Prep
          </button>
          <span className="hidden text-sm text-slate-500 sm:inline">AKT &amp; KFP revision</span>
          <nav className="ml-auto flex gap-4 text-sm font-medium text-slate-600">
            <button onClick={() => go('/')} className="hover:text-teal-700">
              Units
            </button>
            <button onClick={() => go('/specialties')} className="hover:text-teal-700">
              Specialties
            </button>
            <button onClick={() => go('/quiz')} className="hover:text-teal-700">
              Quiz
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6">{page}</main>

      <footer className="mx-auto max-w-4xl px-4 pb-10 text-xs leading-relaxed text-slate-500">
        <p>
          Independent revision notes. Not affiliated with or endorsed by the RACGP. Unit titles, dates and topics come from the public{' '}
          <a className="underline" href="https://www.racgp.org.au/check/check-units" target="_blank" rel="noreferrer">
            check units
          </a>{' '}
          listing; the summaries and questions are original and based on Australian guidelines (e.g. Therapeutic Guidelines, RACGP Red Book,
          Australian STI Management Guidelines). They do not reproduce <em>check</em> case content – complete the full units via gplearning for
          CPD. Always check current guidelines before applying to practice.
        </p>
        <button
          onClick={() => {
            if (confirm('Reset all progress?')) reset()
          }}
          className="mt-2 underline"
        >
          Reset progress
        </button>
      </footer>
    </div>
  )
}
