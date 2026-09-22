import { useState } from 'react';
import type { QuizResult } from '../types';
import { clearHistory, computeStats, starsForResult } from '../data/storage';
import { getOperationMeta } from '../data/operations';
import { Koala, Penguin } from '../components/Mascots';
import { SpeechBubble } from '../components/SpeechBubble';

interface ProgressPageProps {
  history: QuizResult[];
  onBack: () => void;
  onCleared: () => void;
}

export function ProgressPage({ history, onBack, onCleared }: ProgressPageProps) {
  const [confirmingClear, setConfirmingClear] = useState(false);
  const stats = computeStats(history);

  function handleClear() {
    clearHistory();
    setConfirmingClear(false);
    onCleared();
  }

  if (history.length === 0) {
    return (
      <div className="px-4 pb-16 max-w-2xl mx-auto text-center">
        <button onClick={onBack} className="font-heading font-bold text-purple-600 mb-4 hover:underline self-start">
          ← Back
        </button>
        <h2 className="font-heading text-3xl font-extrabold text-purple-700 mb-6">My Progress</h2>
        <div className="flex items-end justify-center gap-4 mb-6">
          <Penguin mood="thinking" className="w-24 h-24" />
          <SpeechBubble color="#eaf6ff" className="max-w-xs">
            No quizzes yet! Let's practice one together.
          </SpeechBubble>
          <Koala mood="happy" className="w-24 h-24" />
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 pb-16 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="font-heading font-bold text-purple-600 hover:underline">
          ← Back
        </button>
        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-purple-700">My Progress</h2>
        <span />
      </div>

      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
        {stats.map((s) => {
          const meta = getOperationMeta(s.operation);
          return (
            <div
              key={`${s.operation}-${s.level}`}
              className="rounded-3xl p-4 shadow-md"
              style={{ background: meta.colorSoft }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-heading font-extrabold text-slate-700">
                  {meta.emoji} {meta.label} · Level {s.level}
                </span>
                <span className="font-heading font-bold text-sm text-slate-500">{s.attempts} tries</span>
              </div>
              <div className="flex justify-between text-sm text-slate-600 font-heading font-bold">
                <span>Best: {Math.round(s.bestPercent)}%</span>
                <span>Average: {Math.round(s.avgPercent)}%</span>
                <span>Last: {Math.round(s.lastPercent)}%</span>
              </div>
              <div className="w-full h-2.5 bg-white/60 rounded-full overflow-hidden mt-2">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${s.bestPercent}%`, background: meta.color }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <h3 className="font-heading text-xl font-extrabold text-slate-700 mb-3">Quiz History</h3>
      <div className="bg-white/80 rounded-3xl shadow-md divide-y divide-slate-100 mb-6 max-h-96 overflow-y-auto">
        {history.map((r) => {
          const meta = getOperationMeta(r.operation);
          const stars = starsForResult(r);
          const date = new Date(r.date);
          return (
            <div key={r.id} className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="font-heading font-bold text-slate-700">
                  {meta.emoji} {meta.label} · Level {r.level}
                </p>
                <p className="text-xs text-slate-400">
                  {date.toLocaleDateString()} {date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <div className="text-right">
                <p className="font-heading font-extrabold text-slate-700">
                  {r.correct}/{r.total}
                </p>
                <p className="text-sm">{'⭐'.repeat(stars)}{'☆'.repeat(3 - stars)}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        {confirmingClear ? (
          <div className="flex items-center gap-3">
            <span className="font-heading font-bold text-slate-600">Clear all history?</span>
            <button
              onClick={handleClear}
              className="font-heading font-bold text-white bg-red-500 rounded-full px-4 py-2 shadow"
            >
              Yes, clear it
            </button>
            <button
              onClick={() => setConfirmingClear(false)}
              className="font-heading font-bold text-slate-600 bg-white rounded-full px-4 py-2 shadow"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmingClear(true)}
            className="font-heading font-bold text-slate-400 hover:text-red-500 text-sm underline"
          >
            Clear history
          </button>
        )}
      </div>
    </div>
  );
}
