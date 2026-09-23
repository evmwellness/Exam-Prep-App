import { useCallback, useEffect, useState } from 'react'

export interface UnitProgress {
  read?: boolean
  mcqBest?: number
  mcqTotal?: number
  kfpDone?: boolean
}

type Progress = Record<string, UnitProgress>

const KEY = 'check-prep-progress-v1'

function load(): Progress {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '{}') as Progress
  } catch {
    return {}
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(load)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(progress))
    } catch {
      // storage unavailable (private mode) - progress just won't persist
    }
  }, [progress])

  const update = useCallback((id: string, patch: UnitProgress) => {
    setProgress((p) => ({ ...p, [id]: { ...p[id], ...patch } }))
  }, [])

  const recordMcq = useCallback((id: string, score: number, total: number) => {
    setProgress((p) => {
      const prev = p[id] ?? {}
      const best = Math.max(prev.mcqBest ?? 0, score)
      return { ...p, [id]: { ...prev, mcqBest: best, mcqTotal: total } }
    })
  }, [])

  const reset = useCallback(() => setProgress({}), [])

  return { progress, update, recordMcq, reset }
}
