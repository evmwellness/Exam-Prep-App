import type { Section } from '../../types'

const topup: Record<string, Section[]> = {
  '629': [{ heading: 'Remember', points: ['Weight is one measure of health among many. Improvements in fitness, blood pressure, glucose, mood and quality of life matter even when the scale moves slowly.'] }],
  '628': [{ heading: 'Remember', points: ['Ask about lifestyle at every visit, record it like a vital sign, and celebrate progress. Patients remember encouragement from their GP for a long time.'] }],
  '627': [{ heading: 'Remember', points: ['"Natural" does not mean safe or effective. Check interactions, match evidence with risk, and never let an unproven therapy replace effective treatment for serious disease.'] }],
  '626': [{ heading: 'Remember', points: ['Anticipate, prescribe ahead, communicate clearly, and support families. Most people prefer to die at home, and good planning makes this possible.'] }],
  '625': [
    {
      heading: 'Remember',
      points: [
        'IBD is lifelong, with flares and remissions. Early escalation to effective treatment prevents complications.',
        'Keep vaccinations, bone health, skin checks and mental health on the checklist at every review.',
      ],
    },
  ],
  '624': [
    {
      heading: 'Remember',
      points: [
        'Family violence affects people of every age, gender, culture and income. You may be the first person they tell.',
        'Believe, listen, validate, assess safety and connect them with support. Keep the door open for future visits.',
        'Look after yourself, and debrief after difficult consultations.',
      ],
    },
  ],
  S4: [
    {
      heading: 'Anticoagulation in kidney disease',
      points: [
        'Warfarin is used in people on dialysis or with creatinine clearance below 15 mL/min, although evidence for benefit is limited. Discuss with a nephrologist or cardiologist.',
        'Apixaban has the least kidney clearance of the DOACs and is often preferred in moderate kidney disease.',
        'Dabigatran is mostly cleared by the kidneys. Avoid it when creatinine clearance is below 30 mL/min.',
        'Kidney function can fall suddenly with dehydration, infection or new medicines. Check it when patients are unwell.',
      ],
    },
    {
      heading: 'Remember',
      points: [
        'The right patient, the right medicine, the right dose, and regular review. Talk about bleeding and adherence at every visit.',
      ],
    },
  ],
  '623': [
    {
      heading: 'Intersex variations',
      points: [
        'People with intersex variations (differences of sex development) are born with sex characteristics that do not fit typical definitions of male or female.',
        'Intersex is different from being trans. Many intersex people are not trans or gender diverse.',
        'Past medical practice included non-consensual surgery in infancy. Many intersex people have experienced trauma in healthcare.',
        'Use respectful language, ask what terms the person uses, and refer to specialist and peer support (Intersex Human Rights Australia).',
      ],
    },
    {
      heading: 'Remember',
      points: [
        'Respect, informed consent and organ-based screening underpin good care for trans and gender-diverse people.',
      ],
    },
  ],
  '622': [
    {
      heading: 'Vaginal and vulval cancers',
      points: [
        'HPV also causes some vaginal, vulval, anal, penile and oropharyngeal cancers.',
        'Vulval itch, lumps, ulcers or colour changes that do not respond to treatment need examination and biopsy.',
        'Lichen sclerosus increases the risk of vulval squamous cell carcinoma. Advise long-term follow-up and prompt review of any new lump.',
        'After a hysterectomy for high-grade disease, vaginal vault testing continues according to the guidelines.',
      ],
    },
    {
      heading: 'Remember',
      points: [
        'HPV screening every 5 years, self-collection for all, and a clear plan for each result.',
      ],
    },
  ],
  '621': [
    {
      heading: 'Veterans in the justice and housing systems',
      points: [
        'Some veterans experience homelessness, financial hardship, or contact with the justice system after discharge. These often link with mental illness, alcohol use and relationship breakdown.',
        'Ask about housing, income and legal problems. DVA, Open Arms and ex-service organisations provide practical support.',
        'Veterans in custody still have DVA entitlements. Link them with support before release.',
        'Housing instability makes chronic disease and mental health care harder. Coordinate care with social workers.',
      ],
    },
    {
      heading: 'Remember',
      points: [
        'Ask about service, understand military culture, and link veterans with DVA and Open Arms support.',
      ],
    },
  ],
  '620': [
    {
      heading: 'Leg ulcers',
      points: [
        'Most leg ulcers are venous, usually around the ankle, with oedema, varicose veins, haemosiderin staining and eczema.',
        'Check the ankle–brachial index before compression, to exclude significant arterial disease.',
        'Compression therapy is the key treatment for venous ulcers once arterial disease is excluded.',
        'Ulcers that do not heal after 3 months, or look unusual, need a biopsy to exclude skin cancer, pyoderma gangrenosum or Buruli ulcer.',
      ],
    },
  ],
  '619': [
    {
      heading: 'Skin and ageing',
      points: [
        'With age, the skin becomes thinner, drier and slower to heal. The barrier is weaker and the skin tears more easily.',
        'Skin tears are common in older people. Clean gently, realign the flap, and use non-adherent dressings. Avoid adhesive strips on fragile skin.',
        'Emollients applied twice daily reduce skin tears in aged care settings.',
        'Most wrinkles and pigment changes are caused by sun exposure, not ageing alone. Sun protection at any age helps.',
        'Topical retinoids improve fine lines and photoageing, but can irritate. Start slowly.',
      ],
    },
    {
      heading: 'Remember',
      points: [
        'Gentle cleansing, regular moisturising and sun protection are the foundations of healthy skin at every age.',
      ],
    },
  ],
  '618': [
    {
      heading: 'Alcohol-related brain injury',
      points: [
        'Heavy long-term alcohol use can cause Wernicke encephalopathy (confusion, ataxia and eye movement problems) and Korsakoff syndrome (severe memory loss with confabulation).',
        'Wernicke encephalopathy is a medical emergency. Give high-dose IV thiamine in hospital.',
        'Alcohol-related brain injury may partly improve with abstinence, good nutrition and thiamine.',
        'Consider it in people with heavy drinking and memory or behaviour problems.',
      ],
    },
  ],
  '617': [
    {
      heading: 'Harms from prescription medicines',
      points: [
        'Gabapentinoids (pregabalin, gabapentin) can cause dependence and increase overdose risk with opioids. Prescribe carefully and review regularly.',
        'Z-drugs (zolpidem, zopiclone) have similar dependence and falls risks to benzodiazepines.',
        'Codeine has been prescription-only since 2018. Ask about over-the-counter and online medicines.',
        'Quetiapine at low doses for sleep causes weight gain and metabolic problems. Avoid this use.',
        'Check real-time prescription monitoring before prescribing high-risk medicines.',
      ],
    },
    {
      heading: 'Remember',
      points: [
        'Screen, intervene briefly, treat dependence, reduce harm and support families.',
      ],
    },
  ],
  S2: [
    {
      heading: 'Calcium pyrophosphate disease (pseudogout)',
      points: [
        'Calcium pyrophosphate crystal deposition causes acute arthritis, usually in the knee or wrist of older people.',
        'Joint fluid shows positively birefringent rhomboid crystals. X-rays may show chondrocalcinosis.',
        'Treatment of flares is similar to gout: NSAIDs, colchicine or corticosteroids (including joint injection).',
        'There is no urate-lowering equivalent. Check for associated conditions such as haemochromatosis, hyperparathyroidism and low magnesium in younger people.',
      ],
    },
  ],
  '616': [
    {
      heading: 'Diabetes in older adults',
      points: [
        'In older and frail people, avoid hypoglycaemia. Relax HbA1c targets (for example, up to 8.0–8.5%) and simplify treatment.',
        'Deprescribe medicines that cause hypoglycaemia, such as sulfonylureas and complex insulin regimens.',
        'Watch for weight loss, falls, cognitive decline and swallowing problems, which change treatment needs.',
        'In residential aged care, plan for sick days and end-of-life diabetes care.',
      ],
    },
  ],
}

export default topup
