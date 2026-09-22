import { useState } from 'react'
import type { TypingResult, YearLevel } from '../types'
import MascotBubble from './MascotBubble'
import TypingGame from './TypingGame'
import { starsForResult } from '../utils/typingStats'

interface Props {
  year: YearLevel
  onExit: () => void
  onStarsEarned: (stars: number) => void
}

type Step = 'intro' | 'typing' | 'results'

export default function ExamMode({ year, onExit, onStarsEarned }: Props) {
  const [step, setStep] = useState<Step>('intro')
  const [result, setResult] = useState<TypingResult | null>(null)

  if (!year.exam) return null

  if (step === 'intro') {
    return (
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-5 rounded-3xl border-4 border-white bg-white/90 p-8 text-center shadow-xl">
        <span className="rounded-full bg-rose-100 px-4 py-1 font-display text-xs font-extrabold uppercase tracking-widest text-rose-600">
          Exam Conditions
        </span>
        <h2 className="font-display text-2xl font-extrabold text-slate-800 sm:text-3xl">NAPLAN Story Challenge</h2>
        <MascotBubble mascot={year.mascot} message={year.exam.prompt} floaty={false} />
        <ul className="w-full space-y-2 rounded-2xl bg-amber-50 p-4 text-left font-body text-sm text-slate-700 sm:text-base">
          <li>⏱️ You'll have {Math.round(year.exam.timeLimitSeconds / 60)} minutes on the clock.</li>
          <li>⌨️ Type the story exactly as shown, including capitals and punctuation.</li>
          <li>🚫 No peeking at the keyboard - trust your fingers!</li>
          <li>🌟 Stay calm - mistakes are okay, just keep going like a real exam.</li>
        </ul>
        <div className="flex gap-3">
          <button
            onClick={onExit}
            className="rounded-full bg-slate-200 px-5 py-2.5 font-display font-bold text-slate-600 hover:bg-slate-300"
          >
            ← Not yet
          </button>
          <button
            onClick={() => setStep('typing')}
            className="rounded-full bg-gradient-to-r from-rose-500 to-amber-400 px-8 py-3 font-display font-bold text-white shadow-md transition hover:brightness-105 active:scale-95"
          >
            Start the Challenge!
          </button>
        </div>
      </div>
    )
  }

  if (step === 'typing') {
    return (
      <TypingGame
        text={year.exam.story}
        mascot={year.mascot}
        mode="exam"
        title="NAPLAN Story Challenge"
        timeLimitSeconds={year.exam.timeLimitSeconds}
        onComplete={(res) => {
          setResult(res)
          setStep('results')
        }}
        onGiveUp={onExit}
      />
    )
  }

  const stars = result ? starsForResult(result) : 0

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-5 rounded-3xl border-4 border-amber-300 bg-gradient-to-b from-amber-50 to-white p-8 text-center shadow-xl animate-bounceIn">
      <span className="font-display text-4xl">🏆</span>
      <h2 className="font-display text-2xl font-extrabold text-slate-800 sm:text-3xl">Certificate of Achievement</h2>
      <p className="font-body text-slate-600">You completed the NAPLAN-style typing challenge!</p>

      <div className="grid w-full grid-cols-2 gap-4">
        <div className="rounded-2xl bg-billabong/10 p-4">
          <p className="font-display text-3xl font-extrabold text-billabong">{result?.wpm ?? 0}</p>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Words / min</p>
        </div>
        <div className="rounded-2xl bg-gum/10 p-4">
          <p className="font-display text-3xl font-extrabold text-gum">{result?.accuracy ?? 0}%</p>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Accuracy</p>
        </div>
      </div>

      <div className="flex gap-2 text-5xl">
        {[1, 2, 3].map((i) => (
          <span key={i} className={i <= stars ? 'animate-popIn' : 'opacity-20'} style={{ animationDelay: `${i * 0.15}s` }}>
            ⭐
          </span>
        ))}
      </div>

      <MascotBubble
        mascot={year.mascot}
        talking
        message={
          stars >= 3
            ? "Outstanding! You're ready for the real NAPLAN test!"
            : stars === 2
              ? 'Great effort! A little more practice and you will be exam-ready.'
              : "Good try! Let's practise a bit more before the big day."
        }
      />

      <div className="flex gap-3">
        <button
          onClick={() => {
            setStep('intro')
            setResult(null)
          }}
          className="rounded-full bg-slate-200 px-6 py-3 font-display font-bold text-slate-700 hover:bg-slate-300 active:scale-95"
        >
          Try Again
        </button>
        <button
          onClick={() => {
            onStarsEarned(stars)
            onExit()
          }}
          className="rounded-full bg-gradient-to-r from-outback to-amber-400 px-6 py-3 font-display font-bold text-white shadow-md transition hover:brightness-105 active:scale-95"
        >
          Back to Lessons
        </button>
      </div>
    </div>
  )
}
