import type { Specialty, Unit } from '../types'

/** Newest first. Supplements sort alongside the regular unit released in the same month. */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function dateKey(u: Unit): number {
  const [m, y] = u.date.split(' ')
  return Number(y) * 12 + MONTHS.indexOf(m)
}

const modules = import.meta.glob<{ default: Unit[] }>('./units/*.ts', { eager: true })

export const UNITS: Unit[] = Object.values(modules)
  .flatMap((m) => m.default)
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
