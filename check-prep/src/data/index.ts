import type { BaseUnit, Question, Specialty, Unit, UnitExtension } from '../types'

/** Newest first. Supplements sort alongside the regular unit released in the same month. */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function dateKey(u: BaseUnit): number {
  const [m, y] = u.date.split(' ')
  return Number(y) * 12 + MONTHS.indexOf(m)
}

const modules = import.meta.glob<{ default: BaseUnit[] }>('./units/*.ts', { eager: true })
const extraModules = import.meta.glob<{ default: Record<string, UnitExtension> }>('./extra/*.ts', { eager: true })
const EXTRA: Record<string, UnitExtension> = Object.assign({}, ...Object.values(extraModules).map((m) => m.default))

function merge(u: BaseUnit): Unit {
  const x = EXTRA[u.id]
  if (!x) return { ...u, kfp: [] }
  return {
    ...u,
    sections: [...u.sections, ...x.sections],
    mcqs: [...u.mcqs, ...x.questions],
    kfp: x.kfp,
    keyNumbers: x.keyNumbers,
    workedCase: x.workedCase,
  }
}

export const UNITS: Unit[] = Object.values(modules)
  .flatMap((m) => m.default)
  .map(merge)
  .sort(
  (a, b) => dateKey(b) - dateKey(a) || (a.id.startsWith('S') ? 1 : 0) - (b.id.startsWith('S') ? 1 : 0),
)

export function findUnit(id: string): Unit | undefined {
  return UNITS.find((u) => u.id === id)
}

export function specialtyCounts(): { specialty: Specialty; primary: number; total: number }[] {
  const map = new Map<Specialty, { primary: number; total: number }>()
  for (const u of UNITS) {
    const p = map.get(u.specialty) ?? { primary: 0, total: 0 }
    p.primary++
    p.total++
    map.set(u.specialty, p)
    for (const s of u.alsoRelevant) {
      const q = map.get(s) ?? { primary: 0, total: 0 }
      q.total++
      map.set(s, q)
    }
  }
  return [...map.entries()]
    .map(([specialty, c]) => ({ specialty, ...c }))
    .sort((a, b) => b.total - a.total || a.specialty.localeCompare(b.specialty))
}

export function unitMatchesSpecialty(u: Unit, s: Specialty | ''): boolean {
  return !s || u.specialty === s || u.alsoRelevant.includes(s)
}

/** Scored points available in a question (EMQ = one per item) */
export function questionMax(q: Question): number {
  return q.kind === 'emq' ? q.items.length : 1
}

const WPM = 120 // careful study-reading pace (dense clinical notes)

export function readingMinutes(u: Unit): number {
  const text = [
    u.overview,
    ...u.sections.flatMap((s) => [s.heading, ...s.points]),
    ...u.redFlags,
    ...u.examTips,
    ...(u.keyNumbers ?? []),
    ...(u.workedCase?.paragraphs ?? []),
  ].join(' ')
  return Math.max(1, Math.round(text.split(/\s+/).length / WPM))
}
