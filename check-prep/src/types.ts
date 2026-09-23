export type Specialty =
  | 'Cardiology'
  | 'Respiratory'
  | 'Gastroenterology & Hepatology'
  | 'Endocrinology & Metabolic'
  | 'Dermatology'
  | 'Mental Health'
  | "Women's Health"
  | 'Sexual & Reproductive Health'
  | "Men's Health"
  | 'Paediatrics & Child Health'
  | 'Musculoskeletal & Sports'
  | 'Neurology'
  | 'Oncology'
  | 'Palliative Care'
  | 'Addiction Medicine'
  | 'Infectious Diseases'
  | 'Preventive & Population Health'
  | 'Aged Care'
  | 'Rural & Remote Health'
  | 'Veterans & Military Health'
  | 'Urology & Renal'
  | 'Ophthalmology'
  | 'Haematology'
  | 'Rheumatology'
  | 'Genetics'
  | 'Abuse & Violence'
  | 'Aboriginal & Torres Strait Islander Health'
  | 'Professional & Ethical Practice'

export interface Section {
  heading: string
  points: string[]
}

/** Single best answer */
export interface MCQ {
  kind?: 'sba'
  /** extra case information revealed before this question (KFP) */
  context?: string
  stem: string
  options: string[]
  /** index into options */
  answer: number
  explanation: string
}

/** "Choose N" – several correct options (KFP style) */
export interface MultiMCQ {
  kind: 'multi'
  context?: string
  stem: string
  options: string[]
  /** indices into options */
  answers: number[]
  explanation: string
}

/** Extended matching: one option list, several stems */
export interface EMQ {
  kind: 'emq'
  context?: string
  theme: string
  lead: string
  options: string[]
  items: { stem: string; answer: number; explanation?: string }[]
}

export type Question = MCQ | MultiMCQ | EMQ

export interface KFPCase {
  title: string
  scenario: string
  questions: Question[]
}

export interface WorkedCase {
  title: string
  paragraphs: string[]
}

/** Additional depth merged into a unit (see data/extra) */
export interface UnitExtension {
  sections: Section[]
  keyNumbers: string[]
  workedCase: WorkedCase
  /** appended to the unit's AKT questions */
  questions: Question[]
  /** replaces the unit's KFP cases */
  kfp: KFPCase[]
}

export interface Unit {
  /** sort key / route id, e.g. "637" or "S6" */
  id: string
  /** label as RACGP publishes it, e.g. "Unit 637" or "Supplement 6" */
  label: string
  /** e.g. "Sep 2026" */
  date: string
  title: string
  specialty: Specialty
  alsoRelevant: Specialty[]
  /** topics covered in the unit */
  topics: string[]
  /** public RACGP page (learning outcomes + case list) */
  url?: string
  overview: string
  sections: Section[]
  redFlags: string[]
  examTips: string[]
  mcqs: Question[]
  kfp: KFPCase[]
  keyNumbers?: string[]
  workedCase?: WorkedCase
}

/** A unit as authored in data/units, before its extension is merged */
export type BaseUnit = Omit<Unit, 'kfp' | 'keyNumbers' | 'workedCase'>
