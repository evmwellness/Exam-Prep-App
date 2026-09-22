import { useCallback, useRef } from 'react'

type ToneOptions = {
  frequency: number
  duration: number
  type?: OscillatorType
  delay?: number
  volume?: number
}

export function useSound() {
  const ctxRef = useRef<AudioContext | null>(null)

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext
      if (!AudioContextClass) return null
      ctxRef.current = new AudioContextClass()
    }
    if (ctxRef.current.state === 'suspended') {
      ctxRef.current.resume().catch(() => {})
    }
    return ctxRef.current
  }, [])

  const playTone = useCallback(
    ({ frequency, duration, type = 'sine', delay = 0, volume = 0.12 }: ToneOptions) => {
      const ctx = getCtx()
      if (!ctx) return
      const startAt = ctx.currentTime + delay
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = type
      osc.frequency.setValueAtTime(frequency, startAt)
      gain.gain.setValueAtTime(volume, startAt)
      gain.gain.exponentialRampToValueAtTime(0.001, startAt + duration)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start(startAt)
      osc.stop(startAt + duration + 0.02)
    },
    [getCtx],
  )

  const playCorrect = useCallback(() => playTone({ frequency: 720, duration: 0.08, type: 'sine' }), [playTone])
  const playError = useCallback(() => playTone({ frequency: 160, duration: 0.15, type: 'sawtooth', volume: 0.08 }), [playTone])
  const playSuccess = useCallback(() => {
    playTone({ frequency: 523.25, duration: 0.12 })
    playTone({ frequency: 659.25, duration: 0.12, delay: 0.1 })
    playTone({ frequency: 783.99, duration: 0.2, delay: 0.2 })
  }, [playTone])
  const playClick = useCallback(() => playTone({ frequency: 440, duration: 0.05, type: 'triangle', volume: 0.08 }), [playTone])

  return { playCorrect, playError, playSuccess, playClick }
}
