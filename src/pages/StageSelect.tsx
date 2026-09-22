import { STAGES } from '../data/curriculum';
import type { Stage } from '../types';
import { Koala, Penguin } from '../components/Mascots';

interface StageSelectProps {
  onSelect: (stage: Stage) => void;
  onBack: () => void;
}

export function StageSelect({ onSelect, onBack }: StageSelectProps) {
  return (
    <div className="px-4 pb-16 max-w-2xl mx-auto">
      <button onClick={onBack} className="font-heading font-bold text-purple-600 mb-4 hover:underline">
        ← Back
      </button>

      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-center text-purple-700 mb-2">
        Which stage are you learning at?
      </h2>
      <p className="text-center text-slate-500 mb-8">Ask a grown-up if you're not sure!</p>

      <div className="flex flex-col gap-4">
        {STAGES.map((stage) => (
          <button
            key={stage.key}
            onClick={() => onSelect(stage.key)}
            className="flex items-center gap-4 rounded-3xl p-5 shadow-md text-left transition-transform hover:scale-[1.02] active:scale-95 border-4 border-transparent hover:border-purple-300"
            style={{ background: stage.colorSoft }}
          >
            <span className="text-4xl sm:text-5xl">{stage.emoji}</span>
            <div>
              <p className="font-heading font-extrabold text-xl sm:text-2xl text-slate-800">
                {stage.label} <span className="text-sm font-bold text-slate-500">({stage.ageHint})</span>
              </p>
              <p className="text-slate-600 text-sm sm:text-base">{stage.description}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8 opacity-70">
        <Penguin mood="thinking" className="w-14 h-14" />
        <Koala mood="happy" className="w-14 h-14" />
      </div>
    </div>
  );
}
