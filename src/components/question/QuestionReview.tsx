import { useState } from 'react'
import clsx from 'clsx'
import type { PracticeItem } from '../../types'
import { CheckIcon, ChevronRightIcon, XIcon } from '../layout/icons'

interface Props {
  item: PracticeItem
  selectedKey: string | null
  index?: number
  defaultOpen?: boolean
}

export default function QuestionReview({ item, selectedKey, index, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen)
  const isCorrect = selectedKey === item.correctKey
  const isUnanswered = selectedKey == null

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden">
      <button onClick={() => setOpen((o) => !o)} className="w-full flex items-center gap-3 px-3.5 py-3 text-left">
        <span
          className={clsx(
            'shrink-0 w-7 h-7 rounded-full flex items-center justify-center',
            isUnanswered ? 'bg-slate-700 text-slate-300' : isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400',
          )}
        >
          {isUnanswered ? '?' : isCorrect ? <CheckIcon width={14} height={14} /> : <XIcon width={14} height={14} />}
        </span>
        <div className="flex-1 min-w-0">
          {index != null && <p className="text-[10px] text-slate-500">Question {index + 1}</p>}
          <p className="text-sm text-slate-200 truncate">{item.caseTitle ? `${item.caseTitle} — ` : ''}{item.topic}</p>
        </div>
        <ChevronRightIcon className={clsx('shrink-0 text-slate-600 transition-transform', open && 'rotate-90')} width={16} height={16} />
      </button>

      {open && (
        <div className="px-3.5 pb-4 border-t border-slate-800 pt-3">
          <p className="text-xs text-slate-500 mb-2">{item.specialty} · {item.topic}</p>
          <p className="text-sm text-slate-200 whitespace-pre-line mb-3">{item.displayStem}</p>
          <div className="space-y-1.5 mb-3">
            {item.options.map((opt) => {
              const isCorrectOpt = opt.key === item.correctKey
              const isSelectedOpt = opt.key === selectedKey
              return (
                <div
                  key={opt.key}
                  className={clsx(
                    'rounded-lg border px-3 py-2 text-xs',
                    isCorrectOpt
                      ? 'border-emerald-700 bg-emerald-950/30'
                      : isSelectedOpt
                        ? 'border-rose-700 bg-rose-950/30'
                        : 'border-slate-800 bg-slate-950/40',
                  )}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={clsx(
                        'w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-semibold shrink-0',
                        isCorrectOpt ? 'bg-emerald-500 text-slate-950' : isSelectedOpt ? 'bg-rose-500 text-slate-950' : 'bg-slate-800 text-slate-400',
                      )}
                    >
                      {opt.key}
                    </span>
                    <span className={clsx('font-medium', isCorrectOpt ? 'text-emerald-300' : isSelectedOpt ? 'text-rose-300' : 'text-slate-300')}>
                      {opt.text}
                    </span>
                    {isSelectedOpt && !isCorrectOpt && <span className="text-[10px] text-rose-400 ml-auto shrink-0">your answer</span>}
                    {isCorrectOpt && <span className="text-[10px] text-emerald-400 ml-auto shrink-0">correct</span>}
                  </div>
                  <p className="text-slate-400 leading-relaxed pl-7">{item.optionExplanations[opt.key]}</p>
                </div>
              )
            })}
          </div>
          <div className="rounded-lg bg-slate-950/60 border border-slate-800 px-3 py-2.5">
            <p className="text-[10px] uppercase tracking-wide text-sky-400 font-semibold mb-1">Why</p>
            <p className="text-xs text-slate-300 leading-relaxed">{item.explanation}</p>
          </div>
        </div>
      )}
    </div>
  )
}
