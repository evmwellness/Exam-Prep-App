import { useState } from 'react';
import type { Level, Operation, QuizResult, SessionMinutes } from './types';
import { loadHistory, saveResult, totalStarsEarned } from './data/storage';
import { Header } from './components/Header';
import { FloatingShapes } from './components/FloatingShapes';
import { Home } from './pages/Home';
import { PracticeSetup } from './pages/PracticeSetup';
import { Quiz } from './pages/Quiz';
import { Results } from './pages/Results';
import { ProgressPage } from './pages/Progress';

type View = 'home' | 'setup' | 'quiz' | 'results' | 'progress';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [history, setHistory] = useState<QuizResult[]>(() => loadHistory());
  const [selection, setSelection] = useState<{
    operation: Operation;
    level: Level;
    sessionMinutes: SessionMinutes;
  } | null>(null);
  const [lastResult, setLastResult] = useState<QuizResult | null>(null);

  const stars = totalStarsEarned(history);

  function goHome() {
    setView('home');
  }

  function goSetup() {
    setSelection(null);
    setView('setup');
  }

  function goProgress() {
    setView('progress');
  }

  function beginQuiz(operation: Operation, level: Level, sessionMinutes: SessionMinutes) {
    setSelection({ operation, level, sessionMinutes });
    setView('quiz');
  }

  function completeQuiz(result: QuizResult) {
    const updated = saveResult(result);
    setHistory(updated);
    setLastResult(result);
    setView('results');
  }

  return (
    <div className="min-h-screen relative">
      <FloatingShapes />
      <Header
        onHome={goHome}
        onProgress={goProgress}
        stars={stars}
        active={view === 'home' ? 'home' : view === 'progress' ? 'progress' : 'other'}
      />

      <main className="pt-2">
        {view === 'home' && (
          <Home onStart={goSetup} onProgress={goProgress} quizzesCompleted={history.length} />
        )}

        {view === 'setup' && <PracticeSetup onBegin={beginQuiz} onBack={goHome} />}

        {view === 'quiz' && selection && (
          <Quiz
            operation={selection.operation}
            level={selection.level}
            sessionMinutes={selection.sessionMinutes}
            onComplete={completeQuiz}
            onQuit={goHome}
          />
        )}

        {view === 'results' && lastResult && (
          <Results
            result={lastResult}
            onRetry={() => beginQuiz(lastResult.operation, lastResult.level, lastResult.sessionMinutes)}
            onChooseAnother={goSetup}
            onHome={goHome}
          />
        )}

        {view === 'progress' && (
          <ProgressPage history={history} onBack={goHome} onCleared={() => setHistory(loadHistory())} />
        )}
      </main>
    </div>
  );
}
