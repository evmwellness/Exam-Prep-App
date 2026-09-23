import { useState } from 'react';
import type { ParentSettings, QuizResult, ScreenSessionState, SessionMinutes } from '../types';
import { SCREEN_TIME_OPTIONS } from '../data/operations';
import { ParentReport } from './ParentReport';

interface ParentZoneProps {
  settings: ParentSettings;
  sessionState: ScreenSessionState;
  history: QuizResult[];
  onChangeSessionMinutes: (minutes: SessionMinutes) => void;
  onResetNow: () => void;
  onClose: () => void;
}

function formatTime(ms: number): string {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

type Tab = 'time' | 'report';

export function ParentZone({
  settings,
  sessionState,
  history,
  onChangeSessionMinutes,
  onResetNow,
  onClose,
}: ParentZoneProps) {
  const [tab, setTab] = useState<Tab>('time');
  const [justReset, setJustReset] = useState(false);
  const remaining = sessionState.locked
    ? 0
    : Math.max(0, sessionState.sessionMinutes * 60 * 1000 - (Date.now() - sessionState.startedAt));

  return (
    <div className="px-4 pb-16 max-w-2xl mx-auto">
      <button onClick={onClose} className="font-heading font-bold text-purple-600 mb-4 hover:underline">
        ← Back
      </button>

      <h2 className="font-heading text-3xl font-extrabold text-center text-purple-700 mb-2">Parent Zone</h2>
      <p className="text-center text-slate-500 mb-6">Manage screen time and see how practice is going</p>

      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setTab('time')}
          className={`rounded-full px-4 py-2 font-heading font-bold text-sm transition-colors ${
            tab === 'time' ? 'bg-purple-600 text-white' : 'bg-white/70 text-purple-700 hover:bg-white'
          }`}
        >
          ⏱️ Screen Time
        </button>
        <button
          onClick={() => setTab('report')}
          className={`rounded-full px-4 py-2 font-heading font-bold text-sm transition-colors ${
            tab === 'report' ? 'bg-purple-600 text-white' : 'bg-white/70 text-purple-700 hover:bg-white'
          }`}
        >
          📊 Performance Report
        </button>
      </div>

      {tab === 'time' ? (
        <>
          <div className="bg-white/80 rounded-3xl p-5 shadow-md mb-6 text-center">
            <p className="font-heading font-bold text-slate-500 mb-1">Current status</p>
            <p className="font-heading text-2xl font-extrabold text-slate-800">
              {sessionState.locked ? 'Locked — time is up' : `${formatTime(remaining)} remaining`}
            </p>
          </div>

          <div className="bg-white/80 rounded-3xl p-5 shadow-md mb-6">
            <p className="font-heading font-extrabold text-slate-700 mb-3">Screen time limit</p>
            <div className="grid grid-cols-2 gap-3">
              {SCREEN_TIME_OPTIONS.map((opt) => (
                <button
                  key={opt.minutes}
                  onClick={() => onChangeSessionMinutes(opt.minutes)}
                  className={`rounded-2xl p-4 flex flex-col items-center gap-1 shadow-md bg-white transition-transform hover:scale-105 active:scale-95 border-4 ${
                    settings.sessionMinutes === opt.minutes ? 'border-sky-400' : 'border-transparent'
                  }`}
                >
                  <span className="font-heading font-extrabold text-lg text-slate-800">{opt.label}</span>
                  <span className="text-xs text-slate-500 text-center">{opt.hint}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-400 mt-3">
              A warning appears when 1 minute 30 seconds are left. The app locks when time runs out.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => {
                onResetNow();
                setJustReset(true);
                window.setTimeout(() => setJustReset(false), 2000);
              }}
              className="font-heading font-extrabold text-white bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl px-6 py-3 shadow-lg hover:scale-105 active:scale-95 transition-transform"
            >
              {justReset ? '✔ Session started!' : `🔄 Start a fresh ${settings.sessionMinutes}-minute session`}
            </button>
          </div>
        </>
      ) : (
        <ParentReport history={history} />
      )}
    </div>
  );
}
