import type { QuizResult } from '../types';
import { computeLevelStats } from '../data/storage';
import { getOperationMeta } from '../data/operations';
import { getStageMeta } from '../data/curriculum';

interface ParentReportProps {
  history: QuizResult[];
}

const TIER_STYLES: Record<string, { bar: string; badge: string; label: string }> = {
  strength: { bar: '#22c55e', badge: 'bg-green-100 text-green-700', label: 'Strength' },
  developing: { bar: '#f59e0b', badge: 'bg-amber-100 text-amber-700', label: 'Developing' },
  'needs-practice': { bar: '#ef4444', badge: 'bg-red-100 text-red-700', label: 'Needs practice' },
};

const TREND_ICON: Record<string, string> = {
  improving: '📈 Improving',
  declining: '📉 Slipping',
  steady: '➡️ Steady',
};

export function ParentReport({ history }: ParentReportProps) {
  const stats = computeLevelStats(history).filter((s) => s.level);

  if (stats.length === 0) {
    return (
      <div className="bg-white/80 rounded-3xl p-6 shadow-md text-center text-slate-500">
        No practice sessions yet — once your child completes a few rounds, their strengths and
        areas to work on will show up here.
      </div>
    );
  }

  const strengths = [...stats].filter((s) => s.tier === 'strength').sort((a, b) => b.avgPercent - a.avgPercent).slice(0, 3);
  const weaknesses = [...stats]
    .filter((s) => s.tier !== 'strength')
    .sort((a, b) => a.avgPercent - b.avgPercent)
    .slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-4">
          <p className="font-heading font-extrabold text-green-700 mb-2">💪 Strengths</p>
          {strengths.length === 0 ? (
            <p className="text-sm text-slate-500">No strong levels yet — keep practicing!</p>
          ) : (
            <ul className="space-y-1">
              {strengths.map((s) => (
                <li key={s.levelId} className="text-sm font-heading font-bold text-slate-700">
                  {getOperationMeta(s.level!.operation).emoji} {s.level!.label} —{' '}
                  {Math.round(s.avgPercent)}% avg
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-4">
          <p className="font-heading font-extrabold text-red-700 mb-2">🎯 Areas to improve</p>
          {weaknesses.length === 0 ? (
            <p className="text-sm text-slate-500">Nothing standing out — great work!</p>
          ) : (
            <ul className="space-y-1">
              {weaknesses.map((s) => (
                <li key={s.levelId} className="text-sm font-heading font-bold text-slate-700">
                  {getOperationMeta(s.level!.operation).emoji} {s.level!.label} —{' '}
                  {Math.round(s.avgPercent)}% avg
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="bg-white/80 rounded-3xl p-4 sm:p-5 shadow-md">
        <p className="font-heading font-extrabold text-slate-700 mb-3">Full breakdown</p>
        <ul className="space-y-3">
          {stats.map((s) => {
            const level = s.level!;
            const meta = getOperationMeta(level.operation);
            const stageMeta = getStageMeta(level.stage);
            const tierStyle = TIER_STYLES[s.tier];
            return (
              <li key={s.levelId} className="border-b border-slate-100 last:border-0 pb-3 last:pb-0">
                <div className="flex items-center justify-between mb-1 flex-wrap gap-1">
                  <span className="font-heading font-bold text-slate-700 text-sm">
                    {meta.emoji} {level.label}{' '}
                    <span className="text-slate-400 font-normal">· {stageMeta.label}</span>
                  </span>
                  <span className={`text-xs font-heading font-bold rounded-full px-2 py-0.5 ${tierStyle.badge}`}>
                    {tierStyle.label}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-heading font-bold mb-1">
                  <span>{s.attempts} attempt{s.attempts === 1 ? '' : 's'}</span>
                  <span>Avg {Math.round(s.avgPercent)}%</span>
                  <span>Best {Math.round(s.bestPercent)}%</span>
                  <span>{TREND_ICON[s.trend]}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${s.avgPercent}%`, background: tierStyle.bar }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
