import type { EmqTheme, KfpCase, KfpQuestion, PracticeItem } from '../types'
import { aktQuestions } from './akt'
import { kfpCases } from './kfp'
import { kfpMcqQuestions } from './kfpMcq'
import { kfpEmqThemes } from './kfpEmq'

function aktToPracticeItems(): PracticeItem[] {
  return aktQuestions.map((q) => ({
    uid: q.id,
    exam: 'AKT',
    specialty: q.specialty,
    topic: q.topic,
    difficulty: q.difficulty,
    displayStem: q.stem,
    options: q.options,
    correctKey: q.correctKey,
    explanation: q.explanation,
    optionExplanations: q.optionExplanations,
  }))
}

function kfpMcqToPracticeItems(): PracticeItem[] {
  return kfpMcqQuestions.map((q: KfpQuestion) => ({
    uid: q.id,
    exam: 'KFP',
    kfpFormat: 'mcq',
    specialty: q.specialty,
    topic: q.topic,
    difficulty: q.difficulty,
    displayStem: q.stem,
    options: q.options,
    correctKey: q.correctKey,
    explanation: q.explanation,
    optionExplanations: q.optionExplanations,
  }))
}

function emqThemeToPracticeItems(theme: EmqTheme): PracticeItem[] {
  return theme.stems.map((stem, index) => ({
    uid: `${theme.id}::${stem.id}`,
    exam: 'KFP',
    kfpFormat: 'emq',
    specialty: theme.specialty,
    topic: theme.topic,
    difficulty: stem.difficulty,
    displayStem: stem.vignette,
    instructions: theme.instructions,
    caseId: theme.id,
    caseTitle: theme.title,
    itemIndex: index + 1,
    caseItemCount: theme.stems.length,
    options: theme.options,
    correctKey: stem.correctKey,
    explanation: stem.explanation,
    optionExplanations: stem.optionExplanations,
  }))
}

function kfpEmqToPracticeItems(): PracticeItem[] {
  return kfpEmqThemes.flatMap(emqThemeToPracticeItems)
}

function kfpCaseToPracticeItems(kfpCase: KfpCase): PracticeItem[] {
  return kfpCase.items.map((item, index) => ({
    uid: `${kfpCase.id}::${item.id}`,
    exam: 'KFP',
    kfpFormat: 'case',
    specialty: kfpCase.specialty,
    topic: kfpCase.topic,
    difficulty: item.difficulty,
    displayStem: [kfpCase.vignette, item.stemAddendum].filter(Boolean).join('\n\n'),
    caseId: kfpCase.id,
    caseTitle: kfpCase.title,
    itemIndex: index + 1,
    caseItemCount: kfpCase.items.length,
    options: item.options,
    correctKey: item.correctKey,
    explanation: item.explanation,
    optionExplanations: item.optionExplanations,
  }))
}

function kfpCasesToPracticeItems(): PracticeItem[] {
  return kfpCases.flatMap(kfpCaseToPracticeItems)
}

export const aktPracticeItems: PracticeItem[] = aktToPracticeItems()
export const kfpMcqPracticeItems: PracticeItem[] = kfpMcqToPracticeItems()
export const kfpEmqPracticeItems: PracticeItem[] = kfpEmqToPracticeItems()
export const kfpCasePracticeItems: PracticeItem[] = kfpCasesToPracticeItems()

/** MCQ + EMQ items only — matches RACGP's current KFP exam format (per user report, last two sittings this year). */
export const kfpExamFormatPracticeItems: PracticeItem[] = [...kfpMcqPracticeItems, ...kfpEmqPracticeItems]

/** Everything KFP, including the legacy sequential case-study bank (bonus clinical-reasoning practice). */
export const kfpPracticeItems: PracticeItem[] = [...kfpExamFormatPracticeItems, ...kfpCasePracticeItems]

export const allPracticeItems: PracticeItem[] = [...aktPracticeItems, ...kfpPracticeItems]

export function practiceItemsForExam(exam: 'AKT' | 'KFP'): PracticeItem[] {
  return exam === 'AKT' ? aktPracticeItems : kfpPracticeItems
}

export const practiceItemsByUid: Map<string, PracticeItem> = new Map(
  allPracticeItems.map((item) => [item.uid, item]),
)
