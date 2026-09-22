import type { CurriculumLevel, QuizResult } from '../types';
import { getLevelById } from './curriculum';

const STORAGE_KEY = 'mathquest_history_v1';

export function loadHistory(): QuizResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as QuizResult[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((r) => r && typeof r.levelId === 'string');
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

export type PerformanceTier = 'strength' | 'developing' | 'needs-practice';

export function classifyPerformance(avgPercent: number): PerformanceTier {
  if (avgPercent >= 80) return 'strength';
  if (avgPercent >= 50) return 'developing';
  return 'needs-practice';
}

export interface LevelStats {
  levelId: string;
  level: CurriculumLevel | undefined;
  attempts: number;
  bestPercent: number;
  lastPercent: number;
  avgPercent: number;
  totalStars: number;
  trend: 'improving' | 'declining' | 'steady';
  tier: PerformanceTier;
}

function average(nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function computeTrend(percentsOldestFirst: number[]): 'improving' | 'declining' | 'steady' {
  if (percentsOldestFirst.length < 2) return 'steady';
  const mid = Math.max(1, Math.floor(percentsOldestFirst.length / 2));
  const firstHalf = percentsOldestFirst.slice(0, mid);
  const secondHalf = percentsOldestFirst.slice(mid);
  if (secondHalf.length === 0) return 'steady';
  const diff = average(secondHalf) - average(firstHalf);
  if (diff >= 10) return 'improving';
  if (diff <= -10) return 'declining';
  return 'steady';
}

/** Per-level performance, grouped from quiz history, ordered by curriculum position. */
export function computeLevelStats(history: QuizResult[]): LevelStats[] {
  const groups = new Map<string, QuizResult[]>();
  for (const r of history) {
    if (!groups.has(r.levelId)) groups.set(r.levelId, []);
    groups.get(r.levelId)!.push(r);
  }
  const stats: LevelStats[] = [];
  for (const [levelId, results] of groups) {
    const newestFirst = [...results].sort((a, b) => (a.date < b.date ? 1 : -1));
    const percentsNewestFirst = newestFirst.map((r) => (r.total > 0 ? (r.correct / r.total) * 100 : 0));
    const percentsOldestFirst = [...percentsNewestFirst].reverse();
    const avgPercent = average(percentsNewestFirst);
    stats.push({
      levelId,
      level: getLevelById(levelId),
      attempts: newestFirst.length,
      bestPercent: Math.max(...percentsNewestFirst),
      lastPercent: percentsNewestFirst[0],
      avgPercent,
      totalStars: newestFirst.reduce((sum, r) => sum + starsForResult(r), 0),
      trend: computeTrend(percentsOldestFirst),
      tier: classifyPerformance(avgPercent),
    });
  }
  return stats.sort((a, b) => {
    if (!a.level || !b.level) return 0;
    if (a.level.stage !== b.level.stage) return a.level.stage.localeCompare(b.level.stage);
    if (a.level.operation !== b.level.operation) return a.level.operation.localeCompare(b.level.operation);
    return a.level.order - b.level.order;
  });
}

export function levelStatsMap(history: QuizResult[]): Map<string, LevelStats> {
  return new Map(computeLevelStats(history).map((s) => [s.levelId, s]));
}
