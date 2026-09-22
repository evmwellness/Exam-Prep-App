import type { CurriculumLevel } from '../types';
import type { LevelStats } from '../data/storage';
import { Koala, Penguin } from './Mascots';

interface RoadPathProps {
  levels: CurriculumLevel[];
  statsMap: Map<string, LevelStats>;
  accentColor: string;
  onSelect: (level: CurriculumLevel) => void;
}

function starsFromPercent(percent: number): number {
  if (percent === 100) return 3;
  if (percent >= 70) return 2;
  if (percent >= 40) return 1;
  return 0;
}

export function RoadPath({ levels, statsMap, accentColor, onSelect }: RoadPathProps) {
  const unlocked = levels.map((_level, i) => i === 0 || statsMap.has(levels[i - 1].id));

  let currentIndex = levels.findIndex((level, i) => {
    if (!unlocked[i]) return false;
    const stats = statsMap.get(level.id);
    const stars = stats ? starsFromPercent(stats.bestPercent) : 0;
    return stars < 3;
  });
  if (currentIndex === -1) {
    currentIndex = unlocked.lastIndexOf(true);
  }

  return (
    <div className="overflow-x-auto pb-4 -mx-4 px-4">
      <div className="flex items-end gap-3 sm:gap-4 min-w-max py-6 relative">
        <div
          className="absolute left-0 right-0 h-2 rounded-full opacity-30"
          style={{ background: accentColor, top: '92px' }}
        />
        {levels.map((level, i) => {
          const isUnlocked = unlocked[i];
          const stats = statsMap.get(level.id);
          const stars = stats ? starsFromPercent(stats.bestPercent) : 0;
          const isCurrent = i === currentIndex;
          const zigzagUp = i % 2 === 0;

          return (
            <div
              key={level.id}
              className="flex flex-col items-center gap-1 relative"
              style={{ marginBottom: zigzagUp ? 24 : 0, marginTop: zigzagUp ? 0 : 24 }}
            >
              {isCurrent && (
                <div className="flex -space-x-2 mb-1 animate-bounce-in">
                  <Penguin mood="excited" className="w-9 h-9" />
                  <Koala mood="happy" className="w-9 h-9" />
                </div>
              )}
              <button
                onClick={() => isUnlocked && onSelect(level)}
                disabled={!isUnlocked}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center font-heading font-extrabold text-lg sm:text-xl shadow-lg border-4 transition-transform ${
                  isUnlocked ? 'hover:scale-110 active:scale-95 border-white' : 'border-white/60 opacity-60 grayscale'
                }`}
                style={{ background: isUnlocked ? accentColor : '#cbd5e1', color: 'white' }}
                title={level.label}
              >
                {isUnlocked ? level.shortLabel : '🔒'}
              </button>
              <span className="font-heading font-bold text-slate-600 text-xs sm:text-sm text-center max-w-[80px]">
                {level.label}
              </span>
              <span className="text-sm">
                {isUnlocked ? '⭐'.repeat(stars) + '☆'.repeat(3 - stars) : ''}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
