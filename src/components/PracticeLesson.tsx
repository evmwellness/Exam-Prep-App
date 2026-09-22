import { useMemo, useState } from 'react'
import type { TypingResult, YearLevel } from '../types'
import TypingGame from './TypingGame'
import ResultsScreen from './ResultsScreen'
import { buildWordsText } from '../utils/buildDrill'
import { starsForResult } from '../utils/typingStats'

interface Props {
  year: YearLevel
  onExit: () => void
  onStarsEarned: (stars: number) => void
}

export default function PracticeLesson({ year, onExit, onStarsEarned }: Props) {
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState<TypingResult | null>(null)

  const text = useMemo(
    () => buildWordsText(year.wordList, year.sentenceList),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [year.id, attempt],
  )

  if (result) {
    const stars = starsForResult(result)
    return (
      <ResultsScreen
        mascot={year.mascot}
        stars={stars}
        result={result}
        onRetry={() => {
          setResult(null)
          setAttempt((a) => a + 1)
        }}
        onContinue={() => {
          onStarsEarned(stars)
          onExit()
        }}
        continueLabel="Back to Lessons"
        title="Word Adventure Complete!"
      />
    )
  }

  return (
    <TypingGame
      key={attempt}
      text={text}
      mascot={year.mascot}
      mode="practice"
      title={`${year.label} Word Adventure`}
      onComplete={setResult}
      onGiveUp={onExit}
    />
  )
}
