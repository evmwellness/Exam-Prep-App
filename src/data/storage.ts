import type { Level, Operation, QuizResult } from '../types';

const STORAGE_KEY = 'mathquest_history_v1';

export function loadHistory(): QuizResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as QuizResult[];
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

export function saveResult(result: QuizResult): QuizResult[] {
  const history = loadHistory();
  history.unshift(result);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(0, 300)));
  } catch {
    // storage full or unavailable; ignore
  }
  return history;
}

export function clearHistory(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

export interface StatsForGroup {
  operation: Operation;
  level: Level;
  attempts: number;
  bestPercent: number;
  lastPercent: number;
  avgPercent: number;
  totalStars: number;
}

export function computeStats(history: QuizResult[]): StatsForGroup[] {
  const groups = new Map<string, QuizResult[]>();
  for (const r of history) {
    const key = `${r.operation}-${r.level}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(r);
  }
  const stats: StatsForGroup[] = [];
  for (const [, results] of groups) {
    const sorted = [...results].sort((a, b) => (a.date < b.date ? 1 : -1));
    const percents = sorted.map((r) => (r.total > 0 ? (r.correct / r.total) * 100 : 0));
    stats.push({
      operation: sorted[0].operation,
      level: sorted[0].level,
      attempts: sorted.length,
      bestPercent: Math.max(...percents),
      lastPercent: percents[0],
      avgPercent: percents.reduce((a, b) => a + b, 0) / percents.length,
      totalStars: sorted.reduce((sum, r) => sum + starsForResult(r), 0),
    });
  }
  return stats.sort((a, b) => (a.operation < b.operation ? -1 : a.operation > b.operation ? 1 : a.level - b.level));
}

export function starsForResult(result: QuizResult): number {
  if (result.total === 0) return 0;
  const percent = (result.correct / result.total) * 100;
  if (percent === 100) return 3;
  if (percent >= 70) return 2;
  if (percent >= 40) return 1;
  return 0;
}

export function totalStarsEarned(history: QuizResult[]): number {
  return history.reduce((sum, r) => sum + starsForResult(r), 0);
}
