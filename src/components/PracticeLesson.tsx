import { useMemo, useState } from 'react'
import type { LessonKind, TypingResult, YearLevel } from '../types'
import TypingGame from './TypingGame'
import ResultsScreen from './ResultsScreen'
import { buildKeyDrill, buildWordsText } from '../utils/buildDrill'
import { starsForResult } from '../utils/typingStats'

interface Props {
  year: YearLevel
  kind: Extract<LessonKind, 'keys' | 'words'>
  onExit: () => void
  onStarsEarned: (stars: number) => void
}

export default function PracticeLesson({ year, kind, onExit, onStarsEarned }: Props) {
  const [attempt, setAttempt] = useState(0)
  const [result, setResult] = useState<TypingResult | null>(null)

  const text = useMemo(() => {
    if (kind === 'keys') return buildKeyDrill(year.keyGroup.newKeys)
    return buildWordsText(year.wordList, year.sentenceList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind, year.id, attempt])

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
        title={kind === 'keys' ? 'Key Practice Complete!' : 'Word Adventure Complete!'}
      />
    )
  }

  return (
    <TypingGame
      key={attempt}
      text={text}
      mascot={year.mascot}
      mode="practice"
      title={kind === 'keys' ? year.keyGroup.title : `${year.label} Word Adventure`}
      instructions={kind === 'keys' ? `${year.keyGroup.fingers} ${year.keyGroup.tip}` : undefined}
      onComplete={setResult}
      onGiveUp={onExit}
    />
  )
}
