import { useState } from 'react';
import type { CurriculumLevel, Operation, QuizResult, Stage } from '../types';
import { OPERATIONS, getOperationMeta } from '../data/operations';
import { getOperationsForStage, getStageMeta, getTrack } from '../data/curriculum';
import { levelStatsMap } from '../data/storage';
import { RoadPath } from '../components/RoadPath';
import { randomTip } from '../data/concepts';
import { Penguin } from '../components/Mascots';
import { SpeechBubble } from '../components/SpeechBubble';

interface OperationRoadProps {
  stage: Stage;
  history: QuizResult[];
  initialOperation?: Operation;
  onSelectLevel: (level: CurriculumLevel) => void;
  onBack: () => void;
}

export function OperationRoad({ stage, history, initialOperation, onSelectLevel, onBack }: OperationRoadProps) {
  const availableOps = getOperationsForStage(stage);
  const [operation, setOperation] = useState<Operation>(
    initialOperation && availableOps.includes(initialOperation) ? initialOperation : availableOps[0],
  );
  const stageMeta = getStageMeta(stage);
  const meta = getOperationMeta(operation);
  const track = getTrack(stage, operation);
  const statsMap = levelStatsMap(history);

  return (
    <div className="px-4 pb-16 max-w-4xl mx-auto">
      <button onClick={onBack} className="font-heading font-bold text-purple-600 mb-4 hover:underline">
        ← Back
      </button>

      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-center text-purple-700 mb-1">
        {stageMeta.emoji} {stageMeta.label}
      </h2>
      <p className="text-center text-slate-500 mb-6">{stageMeta.description}</p>

      <div className="flex justify-center gap-2 sm:gap-3 mb-8 flex-wrap">
        {OPERATIONS.filter((op) => availableOps.includes(op.key)).map((op) => (
          <button
            key={op.key}
            onClick={() => setOperation(op.key)}
            className={`rounded-2xl px-4 py-3 flex items-center gap-2 shadow-md font-heading font-bold transition-transform hover:scale-105 active:scale-95 border-4 ${
              operation === op.key ? 'border-purple-500' : 'border-transparent'
            }`}
            style={{ background: op.colorSoft, color: op.color }}
          >
            <span className="text-xl">{op.emoji}</span>
            {op.label}
          </button>
        ))}
      </div>

      <div className="bg-white/60 rounded-3xl p-4 sm:p-6 shadow-md mb-6">
        <RoadPath levels={track} statsMap={statsMap} accentColor={meta.color} onSelect={onSelectLevel} />
      </div>

      <div className="flex items-center justify-center gap-4">
        <Penguin mood="thinking" className="w-14 h-14" />
        <SpeechBubble color="#eaf6ff" className="max-w-xs">
          {randomTip(operation)}
        </SpeechBubble>
      </div>
    </div>
  );
}
