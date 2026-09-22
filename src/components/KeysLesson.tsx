import { useMemo, useState } from 'react'
import type { TypingResult, YearLevel } from '../types'
import FingerPositionIntro from './FingerPositionIntro'
import TypingGame from './TypingGame'
import ResultsScreen from './ResultsScreen'
import { buildBlindReviewDrill, buildKeyDrill } from '../utils/buildDrill'
import { starsForResult } from '../utils/typingStats'

interface Props {
  year: YearLevel
  onExit: () => void
  onStarsEarned: (stars: number) => void
}

type Step = 'intro' | 'guided' | 'blind' | 'results'

export default function KeysLesson({ year, onExit, onStarsEarned }: Props) {
  const [step, setStep] = useState<Step>('intro')
  const [attempt, setAttempt] = useState(0)
  const [blindResult, setBlindResult] = useState<TypingResult | null>(null)

  const guidedText = useMemo(() => buildKeyDrill(year.keyGroup.newKeys), [year.id, attempt])
  const blindText = useMemo(
    () => buildBlindReviewDrill(year.keyGroup.newKeys, year.cumulativeKeys),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [year.id, attempt],
  )

  if (step === 'intro') {
    return <FingerPositionIntro year={year} onContinue={() => setStep('guided')} />
  }

  if (step === 'guided') {
    return (
      <TypingGame
        key={`guided-${attempt}`}
        text={guidedText}
        mascot={year.mascot}
        mode="practice"
        title={`${year.keyGroup.title} - Practice`}
        instructions={`${year.keyGroup.fingers} ${year.keyGroup.tip}`}
        onComplete={() => setStep('blind')}
        onGiveUp={onExit}
      />
    )
  }

  if (step === 'blind') {
    return (
      <TypingGame
        key={`blind-${attempt}`}
        text={blindText}
        mascot={year.mascot}
        mode="exam"
        blind
        title="Memory Check - No Hints!"
        instructions="Now try it from memory - the keyboard won't show you where to go. Trust your fingers!"
        onComplete={(res) => {
          setBlindResult(res)
          setStep('results')
        }}
        onGiveUp={onExit}
      />
    )
  }

  const stars = blindResult ? starsForResult(blindResult) : 0

  return (
    <ResultsScreen
      mascot={year.mascot}
      stars={stars}
      result={blindResult!}
      title="Memory Check Complete!"
      onRetry={() => {
        setBlindResult(null)
        setAttempt((a) => a + 1)
        setStep('guided')
      }}
      onContinue={() => {
        onStarsEarned(stars)
        onExit()
      }}
      continueLabel="Back to Lessons"
    />
  )
}
