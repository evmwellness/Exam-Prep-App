import { useState } from 'react'
import type { TypingResult, YearLevel } from '../types'
import MascotBubble from './MascotBubble'
import TypingGame from './TypingGame'
import ResultsScreen from './ResultsScreen'
import { starsForReading, starsForResult } from '../utils/typingStats'

interface Props {
  year: YearLevel
  onExit: () => void
  onStarsEarned: (stars: number) => void
}

type Step = 'reading' | 'quiz' | 'typing' | 'results'

export default function ReadingPractice({ year, onExit, onStarsEarned }: Props) {
  const [step, setStep] = useState<Step>('reading')
  const [answers, setAnswers] = useState<number[]>(Array(year.reading.questions.length).fill(-1))
  const [submitted, setSubmitted] = useState(false)
  const [typingResult, setTypingResult] = useState<TypingResult | null>(null)

  const correctCount = answers.reduce(
    (sum, ans, i) => sum + (ans === year.reading.questions[i].correctIndex ? 1 : 0),
    0,
  )

  if (step === 'reading') {
    return (
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
        <h2 className="font-display text-2xl font-extrabold text-slate-800">{year.reading.title}</h2>
        <MascotBubble mascot={year.mascot} message="Read the story below, then I'll ask you a few questions!" size="sm" />
        <div className="space-y-4 rounded-3xl border-4 border-white bg-white/90 p-6 shadow-lg">
          {year.reading.paragraphs.map((p, i) => (
            <p key={i} className="font-body text-lg leading-relaxed text-slate-700 sm:text-xl">
              {p}
            </p>
          ))}
        </div>
        <div className="flex justify-center gap-3">
          <button
            onClick={onExit}
            className="rounded-full bg-white/70 px-5 py-2.5 font-display font-bold text-slate-500 hover:bg-white"
          >
            ← Back
          </button>
          <button
            onClick={() => setStep('quiz')}
            className="rounded-full bg-gradient-to-r from-sky to-blue-400 px-8 py-3 font-display font-bold text-white shadow-md transition hover:brightness-105 active:scale-95"
          >
            I've read it! Quiz me →
          </button>
        </div>
      </div>
    )
  }

  if (step === 'quiz') {
    return (
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-4">
        <h2 className="font-display text-2xl font-extrabold text-slate-800">Story Quiz</h2>
        {year.reading.questions.map((q, qi) => (
          <div key={qi} className="rounded-2xl border-4 border-white bg-white/90 p-4 shadow">
            <p className="mb-3 font-display font-bold text-slate-800">{qi + 1}. {q.question}</p>
            <div className="flex flex-col gap-2">
              {q.options.map((opt, oi) => {
                const selected = answers[qi] === oi
                let cls = 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                if (submitted) {
                  if (oi === q.correctIndex) cls = 'border-emerald-400 bg-emerald-50 text-emerald-800'
                  else if (selected) cls = 'border-rose-400 bg-rose-50 text-rose-700'
                } else if (selected) {
                  cls = 'border-billabong bg-billabong/10'
                }
                return (
                  <button
                    key={oi}
                    disabled={submitted}
                    onClick={() => {
                      const copy = [...answers]
                      copy[qi] = oi
                      setAnswers(copy)
                    }}
                    className={`rounded-xl border-2 px-4 py-2 text-left font-body font-semibold transition ${cls}`}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
          </div>
        ))}

        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            disabled={answers.includes(-1)}
            className="mx-auto rounded-full bg-gradient-to-r from-sky to-blue-400 px-8 py-3 font-display font-bold text-white shadow-md transition hover:brightness-105 active:scale-95 disabled:opacity-40"
          >
            Check my answers
          </button>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <MascotBubble
              mascot={year.mascot}
              message={`You got ${correctCount} out of ${year.reading.questions.length} right!`}
              talking
            />
            <button
              onClick={() => setStep('typing')}
              className="rounded-full bg-gradient-to-r from-outback to-amber-400 px-8 py-3 font-display font-bold text-white shadow-md transition hover:brightness-105 active:scale-95"
            >
              Now type the key sentence →
            </button>
          </div>
        )}
      </div>
    )
  }

  if (step === 'typing') {
    return (
      <TypingGame
        text={year.reading.keySentence}
        mascot={year.mascot}
        mode="practice"
        title="Type the Key Sentence"
        instructions={year.reading.typingInstruction ?? 'Great reading! Now type this important sentence from the story.'}
        onComplete={(res) => {
          setTypingResult(res)
          setStep('results')
        }}
        onGiveUp={onExit}
      />
    )
  }

  const quizStars = starsForReading(correctCount, year.reading.questions.length)
  const typingStars = typingResult ? starsForResult(typingResult) : 0
  const finalStars = Math.max(1, Math.round((quizStars + typingStars) / 2))

  return (
    <ResultsScreen
      mascot={year.mascot}
      stars={finalStars}
      result={typingResult!}
      title="Story Time Complete!"
      onRetry={() => {
        setStep('reading')
        setSubmitted(false)
        setAnswers(Array(year.reading.questions.length).fill(-1))
        setTypingResult(null)
      }}
      onContinue={() => {
        onStarsEarned(finalStars)
        onExit()
      }}
      continueLabel="Back to Lessons"
    />
  )
}
