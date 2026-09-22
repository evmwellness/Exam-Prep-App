import { LionMascot, PlatypusMascot, EmuMascot } from './Mascots'

interface Props {
  onHome: () => void
  totalStars: number
  showReset?: boolean
  onReset?: () => void
}

export default function Header({ onHome, totalStars, showReset, onReset }: Props) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-2 bg-white/70 px-4 py-2 shadow-sm backdrop-blur sm:px-6">
      <button onClick={onHome} className="flex items-center gap-2 transition hover:scale-105 active:scale-95">
        <div className="flex -space-x-3">
          <div className="h-9 w-9"><LionMascot /></div>
          <div className="h-9 w-9"><PlatypusMascot /></div>
          <div className="h-9 w-9"><EmuMascot /></div>
        </div>
        <span className="font-display text-lg font-extrabold text-slate-800 sm:text-xl">Type Mates</span>
      </button>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1.5 font-display font-extrabold text-amber-700 shadow-sm">
          <span>⭐</span>
          <span>{totalStars}</span>
        </div>
        {showReset && onReset && (
          <button
            onClick={onReset}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-500 hover:bg-slate-200"
            title="Reset all progress"
          >
            Reset
          </button>
        )}
      </div>
    </header>
  )
}
