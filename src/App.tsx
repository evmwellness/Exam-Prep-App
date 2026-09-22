import { useState } from 'react'
import type { LessonKind } from './types'
import { getYearLevel } from './data/yearLevels'
import { useProgress } from './hooks/useProgress'
import Header from './components/Header'
import HomeScreen from './components/HomeScreen'
import YearMap from './components/YearMap'
import LessonHub from './components/LessonHub'
import PracticeLesson from './components/PracticeLesson'
import ReadingPractice from './components/ReadingPractice'
import ExamMode from './components/ExamMode'

type View =
  | { screen: 'home' }
  | { screen: 'map' }
  | { screen: 'hub'; yearId: string }
  | { screen: 'lesson'; yearId: string; kind: LessonKind }

export default function App() {
  const [view, setView] = useState<View>({ screen: 'home' })
  const { getStars, recordStars, totalStars, isUnlocked, resetProgress } = useProgress()

  const overallStars = totalStars('prep') + totalStars('year1') + totalStars('year2') + totalStars('year3') + totalStars('year4') + totalStars('year5')

  const goHome = () => setView({ screen: 'home' })

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        onHome={goHome}
        totalStars={overallStars}
        showReset={view.screen !== 'home'}
        onReset={() => {
          if (confirm('Reset all your typing progress?')) resetProgress()
        }}
      />

      <main className="flex flex-1 flex-col justify-center py-6">
        {view.screen === 'home' && <HomeScreen onStart={() => setView({ screen: 'map' })} />}

        {view.screen === 'map' && (
          <YearMap
            isUnlocked={isUnlocked}
            totalStars={totalStars}
            onSelect={(yearId) => setView({ screen: 'hub', yearId })}
          />
        )}

        {view.screen === 'hub' &&
          (() => {
            const year = getYearLevel(view.yearId)
            if (!year) return null
            return (
              <LessonHub
                year={year}
                getStars={(kind) => getStars(year.id, kind)}
                onSelectLesson={(kind) => setView({ screen: 'lesson', yearId: year.id, kind })}
                onBack={() => setView({ screen: 'map' })}
              />
            )
          })()}

        {view.screen === 'lesson' &&
          (() => {
            const year = getYearLevel(view.yearId)
            if (!year) return null
            const backToHub = () => setView({ screen: 'hub', yearId: year.id })
            const earn = (stars: number) => recordStars(year.id, view.kind, stars)

            if (view.kind === 'keys' || view.kind === 'words') {
              return <PracticeLesson year={year} kind={view.kind} onExit={backToHub} onStarsEarned={earn} />
            }
            if (view.kind === 'reading') {
              return <ReadingPractice year={year} onExit={backToHub} onStarsEarned={earn} />
            }
            if (view.kind === 'exam') {
              return <ExamMode year={year} onExit={backToHub} onStarsEarned={earn} />
            }
            return null
          })()}
      </main>

      <footer className="py-4 text-center text-xs text-slate-400">
        Made for Aussie kids learning to touch type, from Prep to Year 5.
      </footer>
    </div>
  )
}
