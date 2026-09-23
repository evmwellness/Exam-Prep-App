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

export interface MCQ {
  stem: string
  options: string[]
  /** index into options */
  answer: number
  explanation: string
}

export interface KFPQuestion {
  prompt: string
  /** e.g. "List up to 3" */
  limit?: string
  answers: string[]
  explanation?: string
}

export interface KFPCase {
  title: string
  scenario: string
  questions: KFPQuestion[]
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
  mcqs: MCQ[]
  kfp: KFPCase[]
}
