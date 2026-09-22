import type { YearLevel } from '../types'
import MascotBubble from './MascotBubble'
import Keyboard, { FINGER_COLORS, FINGER_MAP } from './Keyboard'

interface Props {
  year: YearLevel
  onContinue: () => void
}

const HOME_ROW_STEPS = [
  { hand: 'Left pinky', key: 'A', color: FINGER_COLORS[0] },
  { hand: 'Left ring', key: 'S', color: FINGER_COLORS[1] },
  { hand: 'Left middle', key: 'D', color: FINGER_COLORS[2] },
  { hand: 'Left index', key: 'F', color: FINGER_COLORS[3] },
  { hand: 'Right index', key: 'J', color: FINGER_COLORS[4] },
  { hand: 'Right middle', key: 'K', color: FINGER_COLORS[5] },
  { hand: 'Right ring', key: 'L', color: FINGER_COLORS[6] },
  { hand: 'Right pinky', key: ';', color: FINGER_COLORS[7] },
]

export default function FingerPositionIntro({ year, onContinue }: Props) {
  const isFirstEver = year.order === 0

  if (isFirstEver) {
    return (
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-5 rounded-3xl border-4 border-white bg-white/90 p-6 text-center shadow-xl sm:p-8">
        <span className="rounded-full bg-outback/10 px-4 py-1 font-display text-xs font-extrabold uppercase tracking-widest text-outback">
          Before we type anything...
        </span>
        <h2 className="font-display text-2xl font-extrabold text-slate-800 sm:text-3xl">
          Where Do My Fingers Go?
        </h2>
        <MascotBubble mascot={year.mascot} floaty={false} message="This is the ONE thing to learn today. Put one finger on each of these 8 keys, and leave them resting there!" />

        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
          {HOME_ROW_STEPS.map((step, i) => (
            <div key={step.key} className={`flex flex-col items-center gap-1 rounded-2xl border-2 p-3 ${step.color}`}>
              <span className="font-display text-2xl font-extrabold">{step.key}</span>
              <span className="text-center text-[11px] font-bold uppercase tracking-wide opacity-80">{step.hand}</span>
              <span className="text-[10px] opacity-60">Finger {i + 1}</span>
            </div>
          ))}
        </div>

        <Keyboard highlightSet={['a', 's', 'd', 'f', 'j', 'k', 'l', ';']} footerText="These 8 keys are your home. Rest here!" />

        <div className="w-full space-y-2 rounded-2xl bg-amber-50 p-4 text-left font-body text-sm text-slate-700 sm:text-base">
          <p>🖐️ Put your LEFT hand's four fingers gently on <strong>A S D F</strong>.</p>
          <p>🖐️ Put your RIGHT hand's four fingers gently on <strong>J K L ;</strong>.</p>
          <p>👍 Rest your thumbs lightly on the long space bar.</p>
          <p>🤞 Feel the little bumps on <strong>F</strong> and <strong>J</strong>? That's how you find home again without looking down!</p>
        </div>

        <button
          onClick={onContinue}
          className="rounded-full bg-gradient-to-r from-outback to-amber-400 px-8 py-3 font-display font-bold text-white shadow-md transition hover:brightness-105 active:scale-95"
        >
          My fingers are ready!
        </button>
      </div>
    )
  }

  const newSingleKeys = year.keyGroup.newKeys.filter((k) => k.length === 1)
  const newKeysOnBoard = newSingleKeys.filter((k) => k.toLowerCase() in FINGER_MAP)

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-5 rounded-3xl border-4 border-white bg-white/90 p-6 text-center shadow-xl sm:p-8">
      <span className="rounded-full bg-billabong/10 px-4 py-1 font-display text-xs font-extrabold uppercase tracking-widest text-billabong">
        Quick reminder
      </span>
      <h2 className="font-display text-2xl font-extrabold text-slate-800 sm:text-3xl">{year.keyGroup.title}</h2>
      <MascotBubble mascot={year.mascot} floaty={false} message={year.keyGroup.tip} />

      <Keyboard
        highlightSet={newKeysOnBoard}
        footerText={newKeysOnBoard.length > 0 ? 'The glowing keys are new today!' : "No new keys today - it's a new technique!"}
      />

      <div className="w-full rounded-2xl bg-amber-50 p-4 text-left font-body text-sm text-slate-700 sm:text-base">
        <p>{year.keyGroup.fingers}</p>
      </div>

      <button
        onClick={onContinue}
        className="rounded-full bg-gradient-to-r from-outback to-amber-400 px-8 py-3 font-display font-bold text-white shadow-md transition hover:brightness-105 active:scale-95"
      >
        Let's practise!
      </button>
    </div>
  )
}
