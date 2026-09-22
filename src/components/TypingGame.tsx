import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { MascotId, TypingResult } from '../types'
import Keyboard from './Keyboard'
import MascotBubble from './MascotBubble'
import { calculateStats } from '../utils/typingStats'
import { useSound } from '../hooks/useSound'

interface Props {
  text: string
  mascot: MascotId
  mode: 'practice' | 'exam'
  title: string
  instructions?: string
  timeLimitSeconds?: number
  onComplete: (result: TypingResult) => void
  onGiveUp?: () => void
}

export default function TypingGame({
  text,
  mascot,
  mode,
  title,
  instructions,
  timeLimitSeconds,
  onComplete,
  onGiveUp,
}: Props) {
  const [typed, setTyped] = useState('')
  const [errorCount, setErrorCount] = useState(0)
  const [pressedKey, setPressedKey] = useState<string | undefined>(undefined)
  const [lastWasError, setLastWasError] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [finished, setFinished] = useState(false)
  const startRef = useRef<number | null>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const { playCorrect, playError, playSuccess } = useSound()
  const flashTimeout = useRef<number | null>(null)

  const cleanText = text

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (finished) return
    const interval = window.setInterval(() => {
      if (startRef.current !== null) {
        setElapsed((Date.now() - startRef.current) / 1000)
      }
    }, 250)
    return () => window.clearInterval(interval)
  }, [finished])

  const finish = useCallback(
    (finalTyped: string) => {
      if (finished) return
      setFinished(true)
      const timeSeconds = startRef.current ? (Date.now() - startRef.current) / 1000 : 0
      let errors = 0
      const len = Math.max(finalTyped.length, cleanText.length)
      for (let i = 0; i < len; i++) {
        if (finalTyped[i] !== cleanText[i]) errors++
      }
      const result = calculateStats(cleanText.length, mode === 'practice' ? errorCount : errors, timeSeconds || 1)
      playSuccess()
      onComplete(result)
    },
    [finished, cleanText, errorCount, mode, onComplete, playSuccess],
  )

  useEffect(() => {
    if (!timeLimitSeconds || finished) return
    if (elapsed >= timeLimitSeconds) {
      finish(typed)
    }
  }, [elapsed, timeLimitSeconds, finished, finish, typed])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (startRef.current === null && value.length > 0) {
      startRef.current = Date.now()
    }

    if (mode === 'practice') {
      // Only accept the keystroke if it extends the correct prefix, or is a valid backspace.
      if (value.length < typed.length) {
        setTyped(value)
        return
      }
      const nextChar = value[value.length - 1]
      const expectedChar = cleanText[typed.length]
      if (nextChar === expectedChar) {
        setPressedKey(nextChar)
        setLastWasError(false)
        playCorrect()
        const newTyped = value
        setTyped(newTyped)
        if (newTyped.length >= cleanText.length) {
          finish(newTyped)
        }
      } else {
        setPressedKey(nextChar)
        setLastWasError(true)
        setErrorCount((c) => c + 1)
        playError()
      }
    } else {
      setPressedKey(value[value.length - 1])
      setLastWasError(value[value.length - 1] !== cleanText[value.length - 1])
      if (value[value.length - 1] !== cleanText[value.length - 1] && value.length > typed.length) {
        playError()
      } else if (value.length > typed.length) {
        playCorrect()
      }
      setTyped(value)
      if (value.length >= cleanText.length) {
        finish(value)
      }
    }

    if (flashTimeout.current) window.clearTimeout(flashTimeout.current)
    flashTimeout.current = window.setTimeout(() => setPressedKey(undefined), 200)
  }

  const nextChar = cleanText[typed.length]

  const renderedText = useMemo(() => {
    const chars = cleanText.split('')
    return chars.map((ch, i) => {
      let cls = 'text-slate-400'
      if (i < typed.length) {
        cls = typed[i] === ch ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-100 underline'
      } else if (i === typed.length) {
        cls = 'text-slate-900 bg-yellow-200 animate-pulse rounded'
      }
      const display = ch === '\n' ? '⏎\n' : ch
      return (
        <span key={i} className={`${cls} rounded-sm`}>
          {display}
        </span>
      )
    })
  }, [cleanText, typed])

  const progressPct = Math.min(100, Math.round((typed.length / cleanText.length) * 100))
  const remaining = timeLimitSeconds ? Math.max(0, Math.ceil(timeLimitSeconds - elapsed)) : null

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-display text-xl font-extrabold text-slate-800 sm:text-2xl">{title}</h2>
        {remaining !== null && (
          <div
            className={`rounded-full px-4 py-1.5 font-mono text-lg font-bold shadow ${
              remaining <= 30 ? 'bg-rose-500 text-white animate-pulse' : 'bg-white text-slate-700'
            }`}
          >
            ⏱ {Math.floor(remaining / 60)}:{String(remaining % 60).padStart(2, '0')}
          </div>
        )}
      </div>

      {instructions && <MascotBubble mascot={mascot} message={instructions} size="sm" />}

      <div className="h-2 w-full overflow-hidden rounded-full bg-white/70">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="rounded-3xl border-4 border-white bg-white/90 p-5 shadow-lg">
        <p className="whitespace-pre-wrap break-words font-mono text-lg leading-relaxed tracking-wide sm:text-xl">
          {renderedText}
        </p>
      </div>

      <textarea
        ref={inputRef}
        value={typed}
        onChange={handleChange}
        onPaste={(e) => e.preventDefault()}
        disabled={finished}
        rows={mode === 'exam' ? 4 : 2}
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
        className="w-full resize-none rounded-2xl border-4 border-billabong/40 bg-white p-4 font-mono text-lg shadow-inner focus:border-billabong focus:outline-none"
        placeholder="Click here and start typing what you see above..."
      />

      <Keyboard nextKey={nextChar} pressedKey={pressedKey} lastWasError={lastWasError} />

      {onGiveUp && (
        <button
          onClick={onGiveUp}
          className="self-center rounded-full bg-white/70 px-4 py-1.5 text-sm font-bold text-slate-500 hover:bg-white"
        >
          ← Back to lessons
        </button>
      )}
    </div>
  )
}
