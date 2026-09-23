import type { Specialty } from '../types'

export default function SpecialtyBadge({ s, primary = false }: { s: Specialty; primary?: boolean }) {
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
        primary ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-600'
      }`}
    >
      {s}
    </span>
  )
}
