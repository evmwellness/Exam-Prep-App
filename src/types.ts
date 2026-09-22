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
  /** Keys already learned in previous levels, shown as a quick recap. Empty for Prep. */
  reviewKeys: string[]
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
  /** Overrides the default "type this sentence from the story" instruction, for levels where the typed sentence isn't drawn verbatim from the story (e.g. Prep/Year 1, where it must stick to taught keys). */
  typingInstruction?: string
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
  /** Every key taught by the end of this level (previous levels' keys + this level's newKeys). Used to build the blind memory-recall drill and to validate word lists stay within what's been taught. */
  cumulativeKeys: string[]
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
