export type MascotId = 'lion' | 'platypus' | 'emu'

export interface Mascot {
  id: MascotId
  name: string
  role: string
  colorClass: string
  bubbleClass: string
}

export type LessonKind = 'keys' | 'words' | 'reading' | 'exam'

export interface KeyGroup {
  title: string
  newKeys: string[]
  fingers: string
  tip: string
}

export interface ComprehensionQuestion {
  question: string
  options: string[]
  correctIndex: number
}

export interface ReadingPassage {
  title: string
  paragraphs: string[]
  questions: ComprehensionQuestion[]
  keySentence: string
}

export interface YearLevel {
  id: string
  order: number
  label: string
  shortLabel: string
  ageHint: string
  color: string
  accent: string
  mascot: MascotId
  description: string
  keyGroup: KeyGroup
  wordList: string[]
  sentenceList: string[]
  reading: ReadingPassage
  exam?: {
    prompt: string
    story: string
    timeLimitSeconds: number
  }
}

export interface LessonProgress {
  keys: number
  words: number
  reading: number
  exam: number
}

export type ProgressState = Record<string, LessonProgress>

export interface TypingResult {
  wpm: number
  accuracy: number
  totalChars: number
  errors: number
  timeSeconds: number
}
