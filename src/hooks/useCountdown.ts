import { useEffect, useRef, useState } from 'react'

export interface UseCountdownResult {
  secondsLeft: number
  isRunning: boolean
  isExpired: boolean
  pause: () => void
  resume: () => void
}

export function useCountdown(totalSeconds: number, onExpire: () => void): UseCountdownResult {
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds)
  const [isRunning, setIsRunning] = useState(true)
  const onExpireRef = useRef(onExpire)
  onExpireRef.current = onExpire

  useEffect(() => {
    setSecondsLeft(totalSeconds)
  }, [totalSeconds])

  useEffect(() => {
    if (!isRunning) return
    if (secondsLeft <= 0) {
      onExpireRef.current()
      return
    }
    const id = window.setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1))
    }, 1000)
    return () => window.clearInterval(id)
  }, [isRunning, secondsLeft <= 0])

  useEffect(() => {
    if (secondsLeft === 0 && isRunning) {
      onExpireRef.current()
    }
  }, [secondsLeft, isRunning])

  return {
    secondsLeft,
    isRunning,
    isExpired: secondsLeft <= 0,
    pause: () => setIsRunning(false),
    resume: () => setIsRunning(true),
  }
}
