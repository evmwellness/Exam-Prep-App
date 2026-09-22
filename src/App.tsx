import { useEffect, useState } from 'react';
import type { Level, Operation, ParentSettings, QuizResult, ScreenSessionState, SessionMinutes } from './types';
import { loadHistory, saveResult, totalStarsEarned } from './data/storage';
import {
  loadParentSettings,
  resumeOrStartSession,
  saveParentSettings,
  startNewSession,
} from './data/parentControl';
import { Header } from './components/Header';
import { FloatingShapes } from './components/FloatingShapes';
import { ParentGate } from './components/ParentGate';
import { TimeWarningBanner } from './components/TimeWarningBanner';
import { Home } from './pages/Home';
import { PracticeSetup } from './pages/PracticeSetup';
import { Quiz } from './pages/Quiz';
import { Results } from './pages/Results';
import { ProgressPage } from './pages/Progress';
import { ParentZone } from './pages/ParentZone';
import { TimesUp } from './pages/TimesUp';

type View = 'home' | 'setup' | 'quiz' | 'results' | 'progress';

const WARNING_THRESHOLD_MS = 90 * 1000; // 1 minute 30 seconds

export default function App() {
  const [view, setView] = useState<View>('home');
  const [history, setHistory] = useState<QuizResult[]>(() => loadHistory());
  const [selection, setSelection] = useState<{ operation: Operation; level: Level } | null>(null);
  const [lastResult, setLastResult] = useState<QuizResult | null>(null);

  const [parentSettings, setParentSettings] = useState<ParentSettings>(() => loadParentSettings());
  const [sessionState, setSessionState] = useState<ScreenSessionState>(() =>
    resumeOrStartSession(loadParentSettings().sessionMinutes),
  );
  const [now, setNow] = useState(() => Date.now());
  const [parentGateOpen, setParentGateOpen] = useState(false);
  const [parentZoneOpen, setParentZoneOpen] = useState(false);

  const stars = totalStarsEarned(history);

  const remainingMs = sessionState.locked
    ? 0
    : Math.max(0, sessionState.sessionMinutes * 60 * 1000 - (now - sessionState.startedAt));
  const isWarning = !sessionState.locked && remainingMs > 0 && remainingMs <= WARNING_THRESHOLD_MS;

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 500);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!sessionState.locked && remainingMs <= 0) {
      setSessionState({ ...sessionState, locked: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remainingMs, sessionState.locked]);

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

  function beginQuiz(operation: Operation, level: Level) {
    setSelection({ operation, level });
    setView('quiz');
  }

  function completeQuiz(result: QuizResult) {
    const updated = saveResult(result);
    setHistory(updated);
    setLastResult(result);
    setView('results');
  }

  function openParentZoneGate() {
    setParentGateOpen(true);
  }

  function handleChangeSessionMinutes(minutes: SessionMinutes) {
    const updated: ParentSettings = { sessionMinutes: minutes };
    setParentSettings(updated);
    saveParentSettings(updated);
  }

  function handleResetSessionNow() {
    const fresh = startNewSession(parentSettings.sessionMinutes);
    setSessionState(fresh);
    setNow(Date.now());
    setView('home');
  }

  const locked = sessionState.locked;

  return (
    <div className="min-h-screen relative">
      <FloatingShapes />
      <Header
        onHome={goHome}
        onProgress={goProgress}
        onParentZone={openParentZoneGate}
        stars={stars}
        active={view === 'home' ? 'home' : view === 'progress' ? 'progress' : 'other'}
        locked={sessionState.locked && !parentZoneOpen}
      />

      {isWarning && !parentZoneOpen && <TimeWarningBanner remainingMs={remainingMs} />}

      <main className="pt-2">
        {parentZoneOpen ? (
          <ParentZone
            settings={parentSettings}
            sessionState={sessionState}
            onChangeSessionMinutes={handleChangeSessionMinutes}
            onResetNow={handleResetSessionNow}
            onClose={() => setParentZoneOpen(false)}
          />
        ) : locked ? (
          <TimesUp onOpenParentZone={openParentZoneGate} />
        ) : (
          <>
            {view === 'home' && (
              <Home onStart={goSetup} onProgress={goProgress} quizzesCompleted={history.length} />
            )}

            {view === 'setup' && <PracticeSetup onBegin={beginQuiz} onBack={goHome} />}

            {view === 'quiz' && selection && (
              <Quiz
                operation={selection.operation}
                level={selection.level}
                onComplete={completeQuiz}
                onQuit={goHome}
              />
            )}

            {view === 'results' && lastResult && (
              <Results
                result={lastResult}
                onRetry={() => beginQuiz(lastResult.operation, lastResult.level)}
                onChooseAnother={goSetup}
                onHome={goHome}
              />
            )}

            {view === 'progress' && (
              <ProgressPage history={history} onBack={goHome} onCleared={() => setHistory(loadHistory())} />
            )}
          </>
        )}
      </main>

      {parentGateOpen && (
        <ParentGate
          onSuccess={() => {
            setParentGateOpen(false);
            setParentZoneOpen(true);
          }}
          onCancel={() => setParentGateOpen(false)}
        />
      )}
    </div>
  );
}
