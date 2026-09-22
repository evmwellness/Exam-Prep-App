import { useEffect, useState } from 'react';
import type {
  CurriculumLevel,
  ParentSettings,
  QuizResult,
  ScreenSessionState,
  SessionMinutes,
  Stage,
} from './types';
import { loadHistory, saveResult, totalStarsEarned } from './data/storage';
import { getLevelById, getStageMeta } from './data/curriculum';
import { getOperationMeta } from './data/operations';
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
import { StageSelect } from './pages/StageSelect';
import { OperationRoad } from './pages/OperationRoad';
import { Quiz } from './pages/Quiz';
import { Results } from './pages/Results';
import { ProgressPage } from './pages/Progress';
import { ParentZone } from './pages/ParentZone';
import { TimesUp } from './pages/TimesUp';

type View = 'home' | 'stage' | 'road' | 'quiz' | 'results' | 'progress';

const WARNING_THRESHOLD_MS = 90 * 1000; // 1 minute 30 seconds
const MEMORY_ACCENT = '#7c3aed';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [history, setHistory] = useState<QuizResult[]>(() => loadHistory());
  const [stage, setStage] = useState<Stage | null>(null);
  const [quizLevels, setQuizLevels] = useState<CurriculumLevel[]>([]);
  const [isMemoryCheck, setIsMemoryCheck] = useState(false);
  const [lastResult, setLastResult] = useState<QuizResult | null>(null);
  const [sessionLevelIds, setSessionLevelIds] = useState<string[]>([]);

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

  function goStageSelect() {
    setStage(null);
    setView('stage');
  }

  function selectStage(s: Stage) {
    setStage(s);
    setView('road');
  }

  function goProgress() {
    setView('progress');
  }

  function beginPracticeLevel(level: CurriculumLevel) {
    setQuizLevels([level]);
    setIsMemoryCheck(false);
    setView('quiz');
  }

  function beginMemoryCheck() {
    const levels = sessionLevelIds.map(getLevelById).filter((l): l is CurriculumLevel => Boolean(l));
    if (levels.length === 0) return;
    setQuizLevels(levels);
    setIsMemoryCheck(true);
    setView('quiz');
  }

  function completeQuiz(result: QuizResult) {
    if (isMemoryCheck) {
      setLastResult(result);
      setView('results');
      return;
    }
    const updated = saveResult(result);
    setHistory(updated);
    setSessionLevelIds((prev) => (prev.includes(result.levelId) ? prev : [...prev, result.levelId]));
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
  const currentLevel = quizLevels.length === 1 ? quizLevels[0] : null;
  const quizTitle = isMemoryCheck ? '🧠 Quick Memory Check' : currentLevel?.label ?? '';
  const quizAccent = isMemoryCheck
    ? MEMORY_ACCENT
    : currentLevel
    ? getOperationMeta(currentLevel.operation).color
    : MEMORY_ACCENT;
  const resultsTitleLabel = isMemoryCheck
    ? '🧠 Quick Memory Check'
    : currentLevel
    ? `${getStageMeta(currentLevel.stage).label} · ${currentLevel.label}`
    : '';

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
            history={history}
            onChangeSessionMinutes={handleChangeSessionMinutes}
            onResetNow={handleResetSessionNow}
            onClose={() => setParentZoneOpen(false)}
          />
        ) : locked ? (
          <TimesUp onOpenParentZone={openParentZoneGate} />
        ) : (
          <>
            {view === 'home' && (
              <Home
                onStart={goStageSelect}
                onProgress={goProgress}
                onMemoryCheck={sessionLevelIds.length > 0 ? beginMemoryCheck : undefined}
                quizzesCompleted={history.length}
              />
            )}

            {view === 'stage' && <StageSelect onSelect={selectStage} onBack={goHome} />}

            {view === 'road' && stage && (
              <OperationRoad
                stage={stage}
                history={history}
                initialOperation={currentLevel?.stage === stage ? currentLevel.operation : undefined}
                onSelectLevel={beginPracticeLevel}
                onBack={goStageSelect}
              />
            )}

            {view === 'quiz' && quizLevels.length > 0 && (
              <Quiz
                levels={quizLevels}
                title={quizTitle}
                accentColor={quizAccent}
                onComplete={completeQuiz}
                onQuit={goHome}
              />
            )}

            {view === 'results' && lastResult && (
              <Results
                result={lastResult}
                titleLabel={resultsTitleLabel}
                onRetry={() => (isMemoryCheck ? beginMemoryCheck() : currentLevel && beginPracticeLevel(currentLevel))}
                onChooseAnother={() => (stage ? setView('road') : goStageSelect())}
                onMemoryCheck={!isMemoryCheck && sessionLevelIds.length > 0 ? beginMemoryCheck : undefined}
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
