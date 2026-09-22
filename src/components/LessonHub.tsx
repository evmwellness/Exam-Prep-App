import type { LessonKind, YearLevel } from '../types'
import MascotBubble from './MascotBubble'
import { MascotFor } from './Mascots'

interface Tile {
  kind: LessonKind
  title: string
  desc: string
  icon: string
  gradient: string
}

interface Props {
  year: YearLevel
  getStars: (kind: LessonKind) => number
  onSelectLesson: (kind: LessonKind) => void
  onBack: () => void
}

export default function LessonHub({ year, getStars, onSelectLesson, onBack }: Props) {
  const tiles: Tile[] = [
    {
      kind: 'keys',
      title: 'Meet the Keys',
      desc: year.keyGroup.title,
      icon: '⌨️',
      gradient: 'from-violet-400 to-purple-500',
    },
    {
      kind: 'words',
      title: 'Word Adventure',
      desc: `Practise ${year.label} spelling words`,
      icon: '🔤',
      gradient: 'from-billabong to-teal-400',
    },
    {
      kind: 'reading',
      title: 'Story Time',
      desc: year.reading.title,
      icon: '📖',
      gradient: 'from-gum to-emerald-400',
    },
  ]

  if (year.exam) {
    tiles.push({
      kind: 'exam',
      title: 'NAPLAN Challenge',
      desc: 'Timed story typing test',
      icon: '🏆',
      gradient: 'from-rose-500 to-amber-400',
    })
  }

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6">
      <button onClick={onBack} className="self-start rounded-full bg-white/70 px-4 py-1.5 text-sm font-bold text-slate-500 hover:bg-white">
        ← Year Map
      </button>

      <div className="flex items-center gap-4">
        <div className="h-20 w-20 shrink-0">
          <MascotFor id={year.mascot} />
        </div>
        <div>
          <h2 className="font-display text-2xl font-extrabold text-slate-800 sm:text-3xl">{year.label}</h2>
          <p className="font-body text-slate-600">{year.description}</p>
        </div>
      </div>

      <MascotBubble mascot={year.mascot} message={year.keyGroup.tip} size="sm" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {tiles.map((tile) => {
          const stars = getStars(tile.kind)
          return (
            <button
              key={tile.kind}
              onClick={() => onSelectLesson(tile.kind)}
              className={`flex flex-col items-start gap-2 rounded-3xl border-4 border-white bg-gradient-to-br ${tile.gradient} p-5 text-left text-white shadow-lg transition hover:scale-[1.02] active:scale-95`}
            >
              <div className="flex w-full items-center justify-between">
                <span className="text-3xl">{tile.icon}</span>
                <div className="flex gap-0.5 text-lg">
                  {[1, 2, 3].map((i) => (
                    <span key={i} className={i <= stars ? '' : 'opacity-30'}>
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
              <p className="font-display text-lg font-extrabold">{tile.title}</p>
              <p className="text-sm font-semibold opacity-90">{tile.desc}</p>
            </button>
          )
        })}
      </div>
    </div>
  )
}
