import { useCallback, useEffect, useState } from 'react'
import type { LessonKind, ProgressState } from '../types'
import { YEAR_LEVELS } from '../data/yearLevels'

const STORAGE_KEY = 'type-mates-progress-v1'

function emptyLesson() {
  return { keys: 0, words: 0, reading: 0, exam: 0 }
}

function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return {}
    return JSON.parse(raw) as ProgressState
  } catch {
    return {}
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress())

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
    } catch {
      // storage unavailable, ignore
    }
  }, [progress])

  const getStars = useCallback(
    (yearId: string, kind: LessonKind) => progress[yearId]?.[kind] ?? 0,
    [progress],
  )

  const recordStars = useCallback((yearId: string, kind: LessonKind, stars: number) => {
    setProgress((prev) => {
      const current = prev[yearId] ?? emptyLesson()
      const best = Math.max(current[kind] ?? 0, stars)
      if (best === current[kind]) return prev
      return { ...prev, [yearId]: { ...current, [kind]: best } }
    })
  }, [])

  const totalStars = useCallback(
    (yearId: string) => {
      const p = progress[yearId] ?? emptyLesson()
      return p.keys + p.words + p.reading + p.exam
    },
    [progress],
  )

  const isUnlocked = useCallback(
    (yearId: string) => {
      const year = YEAR_LEVELS.find((y) => y.id === yearId)
      if (!year) return false
      if (year.order === 0) return true
      const prev = YEAR_LEVELS.find((y) => y.order === year.order - 1)
      if (!prev) return true
      const p = progress[prev.id] ?? emptyLesson()
      return p.keys >= 1 && p.words >= 1 && p.reading >= 1
    },
    [progress],
  )

  const resetProgress = useCallback(() => {
    setProgress({})
  }, [])

  return { progress, getStars, recordStars, totalStars, isUnlocked, resetProgress }
}
