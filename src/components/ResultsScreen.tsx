import type { MascotId, TypingResult } from '../types'
import MascotBubble from './MascotBubble'
import ProgressStars from './ProgressStars'

interface Props {
  mascot: MascotId
  stars: number
  result: TypingResult
  onRetry: () => void
  onContinue: () => void
  continueLabel?: string
  title?: string
}

const PRAISE = [
  "You're a typing superstar!",
  'Fantastic fingers today!',
  "Look at you go!",
  'Brilliant work, champion!',
]

export default function ResultsScreen({
  mascot,
  stars,
  result,
  onRetry,
  onContinue,
  continueLabel = 'Continue',
  title = 'Great job!',
}: Props) {
  const message = stars >= 3 ? PRAISE[0] : stars === 2 ? PRAISE[1] : stars === 1 ? PRAISE[2] : "Let's try again - practice makes perfect!"

  return (
    <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-5 rounded-3xl border-4 border-white bg-white/90 p-8 text-center shadow-xl animate-bounceIn">
      <h2 className="font-display text-2xl font-extrabold text-slate-800 sm:text-3xl">{title}</h2>
      <div className="flex gap-2 text-5xl">
        {[1, 2, 3].map((i) => (
          <span key={i} className={i <= stars ? 'animate-popIn' : 'opacity-20'} style={{ animationDelay: `${i * 0.15}s` }}>
            ⭐
          </span>
        ))}
      </div>

      <div className="grid w-full grid-cols-2 gap-4">
        <div className="rounded-2xl bg-billabong/10 p-4">
          <p className="font-display text-3xl font-extrabold text-billabong">{result.wpm}</p>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Words / min</p>
        </div>
        <div className="rounded-2xl bg-gum/10 p-4">
          <p className="font-display text-3xl font-extrabold text-gum">{result.accuracy}%</p>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Accuracy</p>
        </div>
      </div>

      <MascotBubble mascot={mascot} message={message} talking />

      <ProgressStars value={stars} max={3} label="This attempt" />

      <div className="flex gap-3">
        <button
          onClick={onRetry}
          className="rounded-full bg-slate-200 px-6 py-3 font-display font-bold text-slate-700 transition hover:bg-slate-300 active:scale-95"
        >
          Try Again
        </button>
        <button
          onClick={onContinue}
          className="rounded-full bg-gradient-to-r from-outback to-amber-400 px-6 py-3 font-display font-bold text-white shadow-md transition hover:brightness-105 active:scale-95"
        >
          {continueLabel}
        </button>
      </div>
    </div>
  )
}
