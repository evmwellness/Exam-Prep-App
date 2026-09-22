const ROWS: string[][] = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', "'"],
]

// finger index: 0 left pinky, 1 left ring, 2 left middle, 3 left index,
// 4 right index, 5 right middle, 6 right ring, 7 right pinky
export const FINGER_MAP: Record<string, number> = {
  '1': 0, q: 0, a: 0, z: 0,
  '2': 1, w: 1, s: 1, x: 1,
  '3': 2, e: 2, d: 2, c: 2,
  '4': 3, r: 3, f: 3, v: 3,
  '5': 3, t: 3, g: 3, b: 3,
  '6': 4, y: 4, h: 4, n: 4,
  '7': 4, u: 4, j: 4, m: 4,
  '8': 5, i: 5, k: 5, ',': 5,
  '9': 6, o: 6, l: 6, '.': 6,
  '0': 7, p: 7, ';': 7, "'": 7,
}

export const FINGER_NAMES = [
  'Left pinky',
  'Left ring',
  'Left middle',
  'Left index',
  'Right index',
  'Right middle',
  'Right ring',
  'Right pinky',
]

export const FINGER_COLORS = [
  'bg-violet-200 border-violet-400 text-violet-900',
  'bg-blue-200 border-blue-400 text-blue-900',
  'bg-teal-200 border-teal-400 text-teal-900',
  'bg-emerald-200 border-emerald-400 text-emerald-900',
  'bg-amber-200 border-amber-400 text-amber-900',
  'bg-orange-200 border-orange-400 text-orange-900',
  'bg-rose-200 border-rose-400 text-rose-900',
  'bg-pink-200 border-pink-400 text-pink-900',
]

interface Props {
  nextKey?: string
  pressedKey?: string
  lastWasError?: boolean
  compact?: boolean
  /** Keys to keep steadily ring-highlighted (e.g. during a placement intro), independent of nextKey. */
  highlightSet?: string[]
  /** Swaps the footer caption for a "no hints" memory-test moment. */
  footerText?: string
}

export default function Keyboard({ nextKey, pressedKey, lastWasError, compact, highlightSet, footerText }: Props) {
  const normalizedNext = nextKey?.toLowerCase()
  const normalizedPressed = pressedKey?.toLowerCase()
  const highlightLookup = new Set((highlightSet ?? []).map((k) => k.toLowerCase()))

  return (
    <div className={`select-none rounded-2xl bg-slate-800/90 p-2 shadow-inner sm:p-3 ${compact ? 'scale-90' : ''}`}>
      <div className="flex flex-col items-center gap-1.5">
        {ROWS.map((row, ri) => (
          <div key={ri} className="flex gap-1.5" style={{ marginLeft: ri * 10 }}>
            {row.map((key) => {
              const finger = FINGER_MAP[key] ?? 0
              const isNext = normalizedNext === key
              const isPressed = normalizedPressed === key
              const isSteadyHighlight = highlightLookup.has(key)
              return (
                <div
                  key={key}
                  className={[
                    'key-cap flex h-9 w-9 items-center justify-center rounded-lg border-b-4 font-mono text-sm font-bold transition-all sm:h-11 sm:w-11 sm:text-base',
                    FINGER_COLORS[finger],
                    isPressed ? (lastWasError ? 'pressed animate-shake bg-red-300 border-red-500' : 'pressed bg-green-300 border-green-500') : '',
                    isNext && !isPressed ? 'ring-4 ring-yellow-400 scale-110 z-10 animate-bounceIn' : '',
                    isSteadyHighlight && !isNext && !isPressed ? 'ring-4 ring-yellow-400 scale-110 z-10 animate-pulse' : '',
                  ].join(' ')}
                >
                  {key}
                </div>
              )
            })}
          </div>
        ))}
        <div
          className={[
            'key-cap mt-1 h-8 w-56 rounded-lg border-b-4 bg-slate-200 border-slate-400 sm:h-9 sm:w-64',
            normalizedPressed === ' ' ? (lastWasError ? 'pressed animate-shake bg-red-300 border-red-500' : 'pressed bg-green-300 border-green-500') : '',
            normalizedNext === ' ' ? 'ring-4 ring-yellow-400 animate-bounceIn' : '',
          ].join(' ')}
        />
      </div>
      <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-300 sm:text-xs">
        {footerText ?? 'Look, then type without peeking!'}
      </p>
    </div>
  )
}
