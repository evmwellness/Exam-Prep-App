import { useState } from 'react';
import { OPERATIONS, LEVELS } from '../data/operations';
import type { Level, Operation } from '../types';
import { Koala, Penguin } from '../components/Mascots';
import { SpeechBubble } from '../components/SpeechBubble';
import { randomTip } from '../data/concepts';

interface PracticeSetupProps {
  onBegin: (operation: Operation, level: Level) => void;
  onBack: () => void;
}

export function PracticeSetup({ onBegin, onBack }: PracticeSetupProps) {
  const [operation, setOperation] = useState<Operation | null>(null);
  const [level, setLevel] = useState<Level | null>(null);

  return (
    <div className="px-4 pb-16 max-w-3xl mx-auto">
      <button onClick={onBack} className="font-heading font-bold text-purple-600 mb-4 hover:underline">
        ← Back
      </button>

      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-center text-purple-700 mb-6">
        Choose what to practice
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
        {OPERATIONS.map((op) => (
          <button
            key={op.key}
            onClick={() => setOperation(op.key)}
            className={`rounded-3xl p-4 sm:p-6 flex flex-col items-center gap-2 shadow-md transition-transform hover:scale-105 active:scale-95 border-4 ${
              operation === op.key ? 'border-purple-500' : 'border-transparent'
            }`}
            style={{ background: op.colorSoft }}
          >
            <span className="text-3xl sm:text-4xl">{op.emoji}</span>
            <span className="font-heading font-extrabold text-lg sm:text-xl" style={{ color: op.color }}>
              {op.symbol}
            </span>
            <span className="font-heading font-bold text-slate-700 text-sm sm:text-base">{op.label}</span>
          </button>
        ))}
      </div>

      {operation && (
        <div className="animate-bounce-in">
          <h3 className="font-heading text-2xl font-extrabold text-center text-purple-700 mb-4">
            Pick a level
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {LEVELS.map((l) => (
              <button
                key={l.level}
                onClick={() => setLevel(l.level)}
                className={`rounded-2xl p-4 flex flex-col items-center gap-1 shadow-md bg-white transition-transform hover:scale-105 active:scale-95 border-4 ${
                  level === l.level ? 'border-orange-400' : 'border-transparent'
                }`}
              >
                <span className="font-heading font-extrabold text-xl text-slate-800">{l.label}</span>
                <span className="text-xs text-slate-500 text-center">{l.hint}</span>
                <span className="text-lg">{'⭐'.repeat(l.level)}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {operation && (
        <div className="flex items-center justify-center gap-4 mb-8">
          <Penguin mood="thinking" className="w-16 h-16" />
          <SpeechBubble color="#eaf6ff" className="max-w-xs">
            {randomTip(operation)}
          </SpeechBubble>
        </div>
      )}

      <div className="flex justify-center">
        <button
          disabled={!operation || !level}
          onClick={() => operation && level && onBegin(operation, level)}
          className="font-heading font-extrabold text-xl text-white bg-gradient-to-br from-green-500 to-emerald-400 rounded-3xl px-10 py-4 shadow-lg hover:scale-105 active:scale-95 transition-transform disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed"
        >
          Start Quiz 🎯
        </button>
      </div>

      <div className="flex justify-center mt-6 opacity-70">
        <Koala mood="happy" className="w-14 h-14" />
      </div>
    </div>
  );
}
