import { sample, shuffle } from './shuffle'

const SHIFT_WORDS = ['Zara', 'Xavier', 'Violet', 'Zoe', 'Max', 'Nina', 'Carlos', 'Ivy']

export function buildKeyDrill(newKeys: string[]): string {
  const singleKeys = newKeys.filter((k) => k.length === 1)
  const groups: string[] = []

  singleKeys.forEach((k) => {
    groups.push(k + k, k + k + k)
  })

  for (let i = 0; i < singleKeys.length - 1; i++) {
    groups.push(singleKeys[i] + singleKeys[i + 1])
    groups.push(singleKeys[i + 1] + singleKeys[i])
  }

  if (singleKeys.length > 0) {
    groups.push(singleKeys.join(''))
  }

  if (newKeys.includes('Shift')) {
    groups.push(...sample(SHIFT_WORDS, 4))
  }

  return groups.join(' ')
}

export function buildWordsText(wordList: string[], sentenceList: string[]): string {
  const words = sample(wordList, Math.min(10, wordList.length))
  const sentences = sample(sentenceList, Math.min(2, sentenceList.length))
  return `${words.join(' ')} ${sentences.join(' ')}`.trim()
}

/**
 * A short "no hints" drill mixing today's new keys with a handful of
 * previously-learned keys, used to test recall instead of copying.
 */
export function buildBlindReviewDrill(newKeys: string[], cumulativeKeys: string[]): string {
  const newSingles = newKeys.filter((k) => k.length === 1)
  const priorKeys = cumulativeKeys.filter((k) => k.length === 1 && !newSingles.includes(k))
  const reviewSample = sample(priorKeys, Math.min(6, priorKeys.length))
  // weight new keys more heavily so the test focuses on what was just taught
  const pool = shuffle([...newSingles, ...newSingles, ...reviewSample])

  const chunks: string[] = []
  for (let i = 0; i < pool.length; i += 2) {
    chunks.push(pool.slice(i, i + 2).join(''))
  }
  return chunks.join(' ')
}
