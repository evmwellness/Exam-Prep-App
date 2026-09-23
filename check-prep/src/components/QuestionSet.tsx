import { useMemo, useState } from 'react'
import type { EMQ, MCQ, MultiMCQ, Question } from '../types'
import { shuffle } from '../shuffle'
import { questionMax } from '../data'

export type SourcedQuestion = Question & { source?: string }

interface Props {
  questions: SourcedQuestion[]
  /** shown above every question, e.g. the KFP case scenario */
  scenario?: { title: string; text: string }
  onFinish?: (score: number, max: number) => void
}

const LETTERS = 'ABCDEFGHIJKLMNOP'.split('')

function fmt(n: number) {
  return Number.isInteger(n) ? String(n) : n.toFixed(1)
}

export default function QuestionSet({ questions, scenario, onFinish }: Props) {
  const [round, setRound] = useState(0)
  // shuffle SBA / multi option order once per attempt; EMQ lists keep their authored order
  const orders = useMemo(
    () => questions.map((q) => (q.kind === 'emq' ? q.options.map((_, i) => i) : shuffle(q.options.map((_, i) => i)))),
    [questions, round],
  )
  const [idx, setIdx] = useState(0)
  const [earned, setEarned] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const max = useMemo(() => questions.reduce((n, q) => n + questionMax(q), 0), [questions])

  if (questions.length === 0) return <p className="text-slate-500">No questions available.</p>

  if (done) {
    const pct = Math.round((score / max) * 100)
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
        <p className="text-sm uppercase tracking-wide text-slate-500">Your score</p>
        <p className="mt-1 text-4xl font-bold text-teal-700">
          {fmt(score)} / {max}
        </p>
        <p className="mt-2 text-slate-600">
          {pct >= 80 ? 'Excellent – exam ready on this topic.' : pct >= 60 ? 'Good – review the explanations you missed.' : 'Re-read the summary, then try again.'}
        </p>
        <button
          className="mt-5 rounded-lg bg-teal-700 px-5 py-2 font-medium text-white hover:bg-teal-800"
          onClick={() => {
            setIdx(0)
            setEarned(null)
            setScore(0)
            setDone(false)
            setRound((r) => r + 1)
          }}
        >
          Try again
        </button>
      </div>
    )
  }

  const q = questions[idx]
  const answered = earned !== null

  function submit(points: number) {
    setEarned(points)
    setScore((s) => s + points)
  }

  function next() {
    if (idx + 1 >= questions.length) {
      setDone(true)
      onFinish?.(score, max)
    } else {
      setIdx(idx + 1)
      setEarned(null)
    }
  }

  const kindLabel = q.kind === 'emq' ? 'Extended matching' : q.kind === 'multi' ? `Choose ${q.answers.length}` : 'Single best answer'

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="mb-3 flex items-center justify-between text-sm text-slate-500">
        <span>
          Question {idx + 1} of {questions.length} · <span className="font-medium text-slate-600">{kindLabel}</span>
        </span>
        <span>
          Score {fmt(score)}/{max}
        </span>
      </div>
      <div className="mb-4 h-1.5 w-full overflow-hidden rounded bg-slate-100">
        <div className="h-full bg-teal-600 transition-all" style={{ width: `${(idx / questions.length) * 100}%` }} />
      </div>

      {scenario && (
        <details open={idx === 0} className="mb-4 rounded-lg bg-slate-50 p-4">
          <summary className="cursor-pointer font-semibold">{scenario.title}</summary>
          <p className="mt-2 leading-relaxed text-slate-700">{scenario.text}</p>
        </details>
      )}
      {q.context && <p className="mb-3 rounded-lg border-l-4 border-teal-600 bg-teal-50 p-3 leading-relaxed text-teal-950">{q.context}</p>}
      {q.source && <p className="mb-1 text-xs font-medium uppercase tracking-wide text-teal-700">{q.source}</p>}

      {q.kind === 'emq' ? (
        <EmqView key={`${idx}-${round}`} q={q} answered={answered} onSubmit={submit} />
      ) : q.kind === 'multi' ? (
        <MultiView key={`${idx}-${round}`} q={q} order={orders[idx]} answered={answered} onSubmit={submit} />
      ) : (
        <SbaView key={`${idx}-${round}`} q={q} order={orders[idx]} answered={answered} onSubmit={submit} />
      )}

      {answered && (
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="text-sm text-slate-600">
            +{fmt(earned!)} / {questionMax(q)}
          </span>
          <button onClick={next} className="rounded-lg bg-teal-700 px-5 py-2 font-medium text-white hover:bg-teal-800">
            {idx + 1 >= questions.length ? 'See score' : 'Next question'}
          </button>
        </div>
      )}
    </div>
  )
}

function optionClass(answered: boolean, correct: boolean, picked: boolean) {
  if (!answered) return picked ? 'border-teal-600 bg-teal-50' : 'border-slate-200 hover:border-teal-500 hover:bg-teal-50'
  if (correct) return 'border-green-500 bg-green-50'
  if (picked) return 'border-red-400 bg-red-50'
  return 'border-slate-200 opacity-70'
}

function Letter({ l }: { l: string }) {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-600">
      {l}
    </span>
  )
}

function Feedback({ ok, title, text }: { ok: boolean; title: string; text?: string }) {
  return (
    <div className={`mt-4 rounded-lg p-4 ${ok ? 'bg-green-50 text-green-900' : 'bg-amber-50 text-amber-900'}`}>
      <p className="font-semibold">{title}</p>
      {text && <p className="mt-1 leading-relaxed">{text}</p>}
    </div>
  )
}

function SbaView({ q, order, answered, onSubmit }: { q: MCQ; order: number[]; answered: boolean; onSubmit: (p: number) => void }) {
  const [picked, setPicked] = useState<number | null>(null)
  return (
    <>
      <p className="text-[17px] leading-relaxed">{q.stem}</p>
      <div className="mt-4 space-y-2">
        {order.map((orig, pos) => (
          <button
            key={orig}
            disabled={answered}
            onClick={() => {
              setPicked(orig)
              onSubmit(orig === q.answer ? 1 : 0)
            }}
            className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left transition ${optionClass(answered, orig === q.answer, orig === picked)}`}
          >
            <Letter l={LETTERS[pos]} />
            <span>{q.options[orig]}</span>
          </button>
        ))}
      </div>
      {answered && <Feedback ok={picked === q.answer} title={picked === q.answer ? 'Correct' : `Answer: ${q.options[q.answer]}`} text={q.explanation} />}
    </>
  )
}

function MultiView({ q, order, answered, onSubmit }: { q: MultiMCQ; order: number[]; answered: boolean; onSubmit: (p: number) => void }) {
  const [picked, setPicked] = useState<number[]>([])
  const need = q.answers.length
  const hits = picked.filter((p) => q.answers.includes(p)).length
  return (
    <>
      <p className="text-[17px] leading-relaxed">{q.stem}</p>
      <p className="mt-1 text-sm font-medium text-teal-800">Select {need}.</p>
      <div className="mt-4 space-y-2">
        {order.map((orig, pos) => {
          const isPicked = picked.includes(orig)
          return (
            <button
              key={orig}
              disabled={answered}
              onClick={() =>
                setPicked((p) => (isPicked ? p.filter((x) => x !== orig) : p.length < need ? [...p, orig] : p))
              }
              className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left transition ${optionClass(answered, q.answers.includes(orig), isPicked)}`}
            >
              <span className={`mt-1 h-4 w-4 shrink-0 rounded border ${isPicked ? 'border-teal-700 bg-teal-700' : 'border-slate-400'}`} />
              <Letter l={LETTERS[pos]} />
              <span>{q.options[orig]}</span>
            </button>
          )
        })}
      </div>
      {!answered && (
        <button
          disabled={picked.length !== need}
          onClick={() => onSubmit(hits / need)}
          className="mt-4 rounded-lg bg-teal-700 px-5 py-2 font-medium text-white hover:bg-teal-800 disabled:opacity-40"
        >
          Check answer ({picked.length}/{need} selected)
        </button>
      )}
      {answered && (
        <Feedback
          ok={hits === need}
          title={hits === need ? 'All correct' : `${hits} of ${need} correct. Correct: ${q.answers.map((a) => q.options[a]).join('; ')}`}
          text={q.explanation}
        />
      )}
    </>
  )
}

function EmqView({ q, answered, onSubmit }: { q: EMQ; answered: boolean; onSubmit: (p: number) => void }) {
  const [picks, setPicks] = useState<(number | null)[]>(q.items.map(() => null))
  const allPicked = picks.every((p) => p !== null)
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Theme: {q.theme}</p>
      <ol className="mt-2 grid gap-x-6 gap-y-1 rounded-lg bg-slate-50 p-3 text-[15px] sm:grid-cols-2">
        {q.options.map((o, i) => (
          <li key={i} className="flex gap-2">
            <span className="w-5 shrink-0 font-semibold text-slate-500">{LETTERS[i]}</span>
            <span>{o}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-[16px] font-medium leading-relaxed">{q.lead}</p>
      <ol className="mt-3 space-y-4">
        {q.items.map((it, i) => {
          const pick = picks[i]
          const ok = pick === it.answer
          return (
            <li key={i} className={`rounded-lg border p-3 ${answered ? (ok ? 'border-green-500 bg-green-50' : 'border-red-300 bg-red-50') : 'border-slate-200'}`}>
              <p className="leading-relaxed">
                <span className="font-semibold">{i + 1}.</span> {it.stem}
              </p>
              <select
                value={pick ?? ''}
                disabled={answered}
                onChange={(e) => setPicks(picks.map((p, j) => (j === i ? Number(e.target.value) : p)))}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-[15px] focus:border-teal-600 focus:outline-none"
              >
                <option value="" disabled>
                  Choose an option…
                </option>
                {q.options.map((o, k) => (
                  <option key={k} value={k}>
                    {LETTERS[k]}. {o}
                  </option>
                ))}
              </select>
              {answered && (
                <p className="mt-2 text-sm">
                  {ok ? 'Correct' : `Answer: ${LETTERS[it.answer]}. ${q.options[it.answer]}`}
                  {it.explanation && <span className="text-slate-700"> – {it.explanation}</span>}
                </p>
              )}
            </li>
          )
        })}
      </ol>
      {!answered && (
        <button
          disabled={!allPicked}
          onClick={() => onSubmit(picks.filter((p, i) => p === q.items[i].answer).length)}
          className="mt-4 rounded-lg bg-teal-700 px-5 py-2 font-medium text-white hover:bg-teal-800 disabled:opacity-40"
        >
          Check answers
        </button>
      )}
    </>
  )
}
