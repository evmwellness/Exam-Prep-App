import type { KfpCase, PracticeItem } from '../types'
import { aktQuestions } from './akt'
import { kfpCases } from './kfp'

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

function kfpCaseToPracticeItems(kfpCase: KfpCase): PracticeItem[] {
  return kfpCase.items.map((item, index) => ({
    uid: `${kfpCase.id}::${item.id}`,
    exam: 'KFP',
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

function kfpToPracticeItems(): PracticeItem[] {
  return kfpCases.flatMap(kfpCaseToPracticeItems)
}

export const aktPracticeItems: PracticeItem[] = aktToPracticeItems()
export const kfpPracticeItems: PracticeItem[] = kfpToPracticeItems()

export const allPracticeItems: PracticeItem[] = [...aktPracticeItems, ...kfpPracticeItems]

export function practiceItemsForExam(exam: 'AKT' | 'KFP'): PracticeItem[] {
  return exam === 'AKT' ? aktPracticeItems : kfpPracticeItems
}

export const practiceItemsByUid: Map<string, PracticeItem> = new Map(
  allPracticeItems.map((item) => [item.uid, item]),
)
