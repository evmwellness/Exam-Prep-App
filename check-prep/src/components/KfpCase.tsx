import { useState } from 'react'
import type { KFPCase } from '../types'

interface Props {
  kase: KFPCase
  onComplete?: () => void
}

export default function KfpCase({ kase, onComplete }: Props) {
  const [notes, setNotes] = useState<string[]>(kase.questions.map(() => ''))
  const [revealed, setRevealed] = useState<boolean[]>(kase.questions.map(() => false))
  const [ticks, setTicks] = useState<boolean[][]>(kase.questions.map((q) => q.answers.map(() => false)))

  const allRevealed = revealed.every(Boolean)
  const got = ticks.flat().filter(Boolean).length
  const total = ticks.flat().length

  function reveal(i: number) {
    const next = revealed.map((r, j) => (j === i ? true : r))
    setRevealed(next)
    if (next.every(Boolean)) onComplete?.()
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <h3 className="text-lg font-semibold">{kase.title}</h3>
      <p className="mt-2 rounded-lg bg-slate-50 p-4 leading-relaxed text-slate-700">{kase.scenario}</p>

      <ol className="mt-5 space-y-6">
        {kase.questions.map((q, i) => (
          <li key={i}>
            <p className="font-medium">
              Q{i + 1}. {q.prompt} {q.limit && <span className="text-sm font-normal text-slate-500">({q.limit})</span>}
            </p>
            <textarea
              value={notes[i]}
              onChange={(e) => setNotes(notes.map((n, j) => (j === i ? e.target.value : n)))}
              rows={3}
              placeholder="Write your answer – short, specific points, one per line…"
              className="mt-2 w-full rounded-lg border border-slate-300 p-3 text-[15px] focus:border-teal-600 focus:outline-none focus:ring-1 focus:ring-teal-600"
            />
            {!revealed[i] ? (
              <button onClick={() => reveal(i)} className="mt-2 rounded-lg border border-teal-700 px-4 py-1.5 text-sm font-medium text-teal-700 hover:bg-teal-50">
                Show model answer
              </button>
            ) : (
              <div className="mt-2 rounded-lg bg-teal-50 p-4">
                <p className="mb-2 text-sm font-semibold text-teal-900">Model answer – tick the points you got:</p>
                <ul className="space-y-1.5">
                  {q.answers.map((a, k) => (
                    <li key={k}>
                      <label className="flex cursor-pointer items-start gap-2">
                        <input
                          type="checkbox"
                          checked={ticks[i][k]}
                          onChange={() =>
                            setTicks(ticks.map((row, j) => (j === i ? row.map((t, m) => (m === k ? !t : t)) : row)))
                          }
                          className="mt-1 h-4 w-4 accent-teal-700"
                        />
                        <span className="text-teal-950">{a}</span>
                      </label>
                    </li>
                  ))}
                </ul>
                {q.explanation && <p className="mt-2 text-sm text-teal-900">{q.explanation}</p>}
              </div>
            )}
          </li>
        ))}
      </ol>

      {allRevealed && (
        <p className="mt-5 rounded-lg bg-slate-100 p-3 text-center font-medium">
          Self-marked: {got} / {total} key features
        </p>
      )}
    </div>
  )
}
