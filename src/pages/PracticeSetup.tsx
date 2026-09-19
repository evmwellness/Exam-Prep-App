import { useEffect, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { practiceItemsForExam } from '../data/practiceItems'
import { buildSession } from '../lib/sessionBuilder'
import { EXAM_SIM_DEFAULTS } from '../lib/examConfig'
import type { ExamType, SessionMode, Specialty } from '../types'

interface NavState {
  quickMode?: 'exam' | 'block' | 'weak'
  exam?: ExamType
  specialty?: Specialty
}

export default function PracticeSetup() {
  const navigate = useNavigate()
  const location = useLocation()
  const navState = (location.state as NavState) ?? {}

  const [exam, setExam] = useState<ExamType>(navState.exam ?? 'AKT')
  const [mode, setMode] = useState<SessionMode>(navState.quickMode === 'weak' ? 'custom' : (navState.quickMode as SessionMode) ?? 'block')
  const [blockMinutes, setBlockMinutes] = useState<20 | 25>(20)
  const [customCount, setCustomCount] = useState(20)
  const [focusWeakAreas, setFocusWeakAreas] = useState(navState.quickMode === 'weak')
  const [specialties, setSpecialties] = useState<Specialty[]>(navState.specialty ? [navState.specialty] : [])
  const [isBuilding, setIsBuilding] = useState(false)

  useEffect(() => {
    setMode(navState.quickMode === 'weak' ? 'custom' : (navState.quickMode as SessionMode) ?? 'block')
    setFocusWeakAreas(navState.quickMode === 'weak')
    if (navState.exam) setExam(navState.exam)
    if (navState.specialty) setSpecialties([navState.specialty])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key])

  const availableSpecialties = useMemo(() => {
    const set = new Set(practiceItemsForExam(exam).map((i) => i.specialty))
    return [...set].sort()
  }, [exam])

  useEffect(() => {
    setSpecialties((prev) => prev.filter((s) => availableSpecialties.includes(s)))
  }, [availableSpecialties])

  function toggleSpecialty(s: Specialty) {
    setSpecialties((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]))
  }

  async function start() {
    setIsBuilding(true)
    try {
      const built = await buildSession({
        exam,
        mode,
        blockMinutes,
        customCount,
        specialties,
        focusWeakAreas,
      })
      if (built.items.length === 0) {
        setIsBuilding(false)
        alert('No questions match this filter yet — try a broader specialty selection.')
        return
      }
      navigate('/session', { state: built })
    } finally {
      setIsBuilding(false)
    }
  }

  const examConfig = EXAM_SIM_DEFAULTS[exam]

  return (
    <div className="flex-1 px-4 pt-6 pb-8">
      <h1 className="text-xl font-semibold mb-4">Practice setup</h1>

      <div className="flex rounded-full bg-slate-900 border border-slate-800 p-0.5 text-sm mb-4 w-fit">
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

      {exam === 'KFP' && (
        <div className="text-xs text-amber-200/80 bg-amber-950/30 border border-amber-900/40 rounded-lg p-3 mb-4">
          <strong>Format note:</strong> the real RACGP KFP exam is short-answer / extended-response, not
          multiple choice. These cases are MCQ-adapted for fast phone drilling of clinical reasoning —
          keep practicing written key-feature responses too via official RACGP resources.
        </div>
      )}

      <div className="space-y-2 mb-5">
        <ModeCard
          title="Exam simulation"
          description={`${examConfig.questionCount} questions · ${Math.round(examConfig.durationMinutes / 60 * 10) / 10}h timed, matches exam format`}
          selected={mode === 'exam'}
          onSelect={() => setMode('exam')}
        />
        <ModeCard
          title="Short practice block"
          description="20–25 min focused interval, question count paced to your history"
          selected={mode === 'block'}
          onSelect={() => setMode('block')}
        />
        <ModeCard
          title="Custom"
          description="Pick your own count, specialties, and weak-area focus"
          selected={mode === 'custom'}
          onSelect={() => setMode('custom')}
        />
      </div>

      {mode === 'block' && (
        <div className="mb-5">
          <p className="text-sm font-medium text-slate-300 mb-2">Block length</p>
          <div className="flex gap-2">
            {[20, 25].map((m) => (
              <button
                key={m}
                onClick={() => setBlockMinutes(m as 20 | 25)}
                className={clsx(
                  'flex-1 py-2 rounded-lg border text-sm font-medium',
                  blockMinutes === m ? 'bg-sky-500 border-sky-500 text-slate-950' : 'bg-slate-900 border-slate-800 text-slate-300',
                )}
              >
                {m} min
              </button>
            ))}
          </div>
        </div>
      )}

      {mode === 'custom' && (
        <div className="mb-5">
          <p className="text-sm font-medium text-slate-300 mb-2">
            Question count: <span className="text-sky-400">{customCount}</span>
          </p>
          <input
            type="range"
            min={5}
            max={exam === 'AKT' ? 100 : 70}
            step={5}
            value={customCount}
            onChange={(e) => setCustomCount(Number(e.target.value))}
            className="w-full accent-sky-500"
          />
        </div>
      )}

      {mode !== 'exam' && (
        <label className="flex items-center gap-2 mb-5 text-sm text-slate-300">
          <input
            type="checkbox"
            checked={focusWeakAreas}
            onChange={(e) => setFocusWeakAreas(e.target.checked)}
            className="w-4 h-4 accent-amber-500"
          />
          Weight toward my weak areas
        </label>
      )}

      {mode !== 'exam' && (
        <div className="mb-6">
          <p className="text-sm font-medium text-slate-300 mb-2">
            Specialties {specialties.length > 0 ? `(${specialties.length} selected)` : '(all)'}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {availableSpecialties.map((s) => (
              <button
                key={s}
                onClick={() => toggleSpecialty(s)}
                className={clsx(
                  'text-xs px-2.5 py-1 rounded-full border',
                  specialties.includes(s) ? 'bg-sky-500 border-sky-500 text-slate-950' : 'bg-slate-900 border-slate-800 text-slate-400',
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={start}
        disabled={isBuilding}
        className="w-full py-3 rounded-xl bg-sky-500 text-slate-950 font-semibold disabled:opacity-60"
      >
        {isBuilding ? 'Building session…' : 'Start practice'}
      </button>
    </div>
  )
}

function ModeCard({
  title,
  description,
  selected,
  onSelect,
}: {
  title: string
  description: string
  selected: boolean
  onSelect: () => void
}) {
  return (
    <button
      onClick={onSelect}
      className={clsx(
        'w-full text-left rounded-xl border p-3.5 transition-colors',
        selected ? 'bg-sky-950/50 border-sky-600' : 'bg-slate-900 border-slate-800',
      )}
    >
      <p className={clsx('font-medium text-sm', selected ? 'text-sky-300' : 'text-slate-200')}>{title}</p>
      <p className="text-xs text-slate-500 mt-0.5">{description}</p>
    </button>
  )
}
