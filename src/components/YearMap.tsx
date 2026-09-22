import { YEAR_LEVELS } from '../data/yearLevels'
import { MascotFor } from './Mascots'

interface Props {
  isUnlocked: (yearId: string) => boolean
  totalStars: (yearId: string) => number
  onSelect: (yearId: string) => void
}

export default function YearMap({ isUnlocked, totalStars, onSelect }: Props) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-6">
      <div className="text-center">
        <h2 className="font-display text-2xl font-extrabold text-slate-800 sm:text-3xl">Choose Your Year Level</h2>
        <p className="font-body text-slate-600">Follow the path with Larry, Percy and Ellie!</p>
      </div>

      <div className="relative flex flex-col items-center gap-6 sm:gap-4">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-1 -translate-x-1/2 rounded-full bg-white/60 sm:block" />
        {YEAR_LEVELS.map((year, idx) => {
          const unlocked = isUnlocked(year.id)
          const stars = totalStars(year.id)
          const align = idx % 2 === 0 ? 'sm:self-start sm:ml-[8%]' : 'sm:self-end sm:mr-[8%]'
          return (
            <button
              key={year.id}
              disabled={!unlocked}
              onClick={() => onSelect(year.id)}
              className={`relative z-10 flex w-full max-w-sm items-center gap-4 rounded-3xl border-4 border-white bg-gradient-to-r ${year.color} p-4 text-left shadow-lg transition ${align} ${
                unlocked ? 'hover:scale-[1.03] active:scale-95' : 'grayscale opacity-60'
              }`}
            >
              <div className="h-16 w-16 shrink-0 rounded-full bg-white/90 p-1.5 shadow-inner sm:h-20 sm:w-20">
                <MascotFor id={year.mascot} />
              </div>
              <div className="flex-1 text-white">
                <p className="font-display text-lg font-extrabold drop-shadow sm:text-xl">{year.label}</p>
                <p className="text-xs font-semibold opacity-90 sm:text-sm">{year.ageHint}</p>
                <p className="mt-1 text-xs font-semibold opacity-90 sm:text-sm">{year.description}</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                {unlocked ? (
                  <div className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 font-display text-sm font-extrabold text-amber-600 shadow">
                    <span>⭐</span>
                    <span>
                      {stars}/{year.exam ? 12 : 9}
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl">🔒</span>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
