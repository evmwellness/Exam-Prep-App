import type { Unit } from '../../types'

const units: Unit[] = [
  {
    id: '629',
    label: 'Unit 629',
    date: 'Dec 2025',
    title: 'Obesity management',
    specialty: 'Endocrinology & Metabolic',
    alsoRelevant: ['Preventive & Population Health', 'Paediatrics & Child Health', 'Aged Care'],
    topics: [
      'Weight stigma and person-centred conversations',
      'Complications and comorbidities of obesity',
      'Lifestyle, pharmacotherapy (GLP-1 RA, tirzepatide) and bariatric surgery',
      'Obesity in pregnancy planning',
      'Children and families',
      'Older adults and sarcopenic obesity',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2025/obesity-management',
    overview:
      'Obesity is a chronic, relapsing disease. It is driven by genetic, environmental and social factors, not just willpower. Start with an unhurried, non-stigmatising conversation (ask permission first). Screen for complications and match treatment intensity to risk. A 5–10% weight loss brings meaningful health gains. Pharmacotherapy and surgery are now core tools, used alongside long-term GP follow-up.',
    sections: [
      {
        heading: 'Assessment',
        points: [
          'BMI: ≥25 overweight, ≥30 obesity. Lower cut-offs apply for Asian populations (≥23 and ≥27.5). Waist circumference (≥80 cm women, ≥94 cm men) reflects visceral risk.',
          'Ask permission to discuss weight, and use person-first language ("person with obesity"). Screen for disordered eating (binge eating), mood and weight-promoting medicines (antipsychotics, insulin, sulfonylureas, steroids).',
          'Check for complications: T2DM/prediabetes, hypertension, dyslipidaemia, MASLD (fatty liver), OSA (STOP-BANG), osteoarthritis, PCOS, GORD, depression, and obesity-related cancers.',
          'Baseline tests: HbA1c or fasting glucose, lipids, LFT, UEC, TSH if clinically indicated, urine ACR.',
        ],
      },
      {
        heading: 'Treatment options',
        points: [
          'Lifestyle: a sustainable energy deficit (dietitian, meal replacements), physical activity with resistance training, sleep, and psychological support.',
          'Pharmacotherapy (BMI ≥30, or ≥27 with a weight-related comorbidity): semaglutide 2.4 mg weekly, tirzepatide, liraglutide 3 mg, phentermine, naltrexone/bupropion, orlistat. Tirzepatide and semaglutide give roughly 15–20% loss.',
          'GLP-1 RA adverse effects: nausea, constipation, gallstones, pancreatitis, loss of lean mass. Tirzepatide reduces oral contraceptive absorption, so use non-oral or barrier methods for 4 weeks after starting and after each dose increase. Stop semaglutide ≥2 months before planned conception.',
          'Bariatric surgery (sleeve gastrectomy, bypass): consider at BMI ≥40, or ≥35 with comorbidities (lower thresholds apply for metabolic disease). It needs lifelong micronutrient monitoring and supplementation.',
        ],
      },
      {
        heading: 'Life stages',
        points: [
          'Children: use family-based lifestyle change and avoid restrictive dieting. Focus on healthy habits, not weight talk. Refer for severe obesity or complications. Some GLP-1 RAs are approved from age 12.',
          'Preconception and pregnancy: BMI ≥30 increases GDM, pre-eclampsia and stillbirth risk. Give folic acid 5 mg daily, test early for hyperglycaemia, and follow gestational weight gain targets.',
          'Older adults: sarcopenic obesity. Prioritise resistance exercise and protein (1.0–1.2 g/kg/day) and preserve function rather than aggressive weight loss.',
          'Weight-neutral approaches (health at every size) can suit people with eating disorder risk. Focus on behaviours and metabolic health.',
        ],
      },
      {
        heading: 'Long-term care',
        points: [
          'Obesity recurs when treatment stops. Plan long-term follow-up, as with any chronic disease.',
          'Use a GP Chronic Condition Management Plan to access allied health (dietitian, exercise physiologist, psychologist).',
          'Set goals on health outcomes such as BP, HbA1c, mobility and sleep, not only kilograms.',
          'Review weight-promoting medicines and switch where possible.',
        ],
      },
    ],
    redFlags: [
      'Rapid unintentional weight loss on treatment: malignancy or eating disorder.',
      'Severe abdominal pain on a GLP-1 RA: pancreatitis or cholecystitis.',
      'Daytime somnolence, morning headaches or hypercapnia: OSA or obesity hypoventilation.',
      'Binge-purge behaviours or extreme restriction.',
    ],
    examTips: [
      'Know the pharmacotherapy BMI thresholds and the surgery thresholds.',
      'Folic acid 5 mg for BMI ≥30 preconception is examined often.',
      'The tirzepatide and oral contraceptive interaction is a newer exam point.',
    ],
    mcqs: [
      {
        stem: 'A 32-year-old woman with BMI 34 is planning her third pregnancy. Which folic acid dose is recommended?',
        options: ['0.4 mg daily', '0.5 mg daily', '5 mg daily', 'Not needed', '10 mg weekly'],
        answer: 2,
        explanation: 'Obesity (BMI ≥30) increases neural tube defect risk. Higher-dose folic acid (5 mg daily) is recommended from at least 1 month before conception.',
      },
      {
        stem: 'A woman starting tirzepatide uses the combined oral contraceptive pill. What advice is most appropriate?',
        options: [
          'No change needed',
          'Use a non-oral method or add barrier contraception for 4 weeks after starting and after each dose increase',
          'Double the pill dose',
          'Stop contraception – tirzepatide is contraceptive',
          'Switch to progestogen-only pill',
        ],
        answer: 1,
        explanation: 'Tirzepatide delays gastric emptying and reduces oral contraceptive exposure, especially at initiation and dose escalation.',
      },
      {
        stem: 'Which statement about bariatric surgery is correct?',
        options: [
          'It is only considered at BMI ≥50',
          'Post-operative micronutrient supplementation is only needed for 6 months',
          'It can be considered at BMI ≥35 with obesity-related comorbidity',
          'It increases diabetes incidence',
          'Pregnancy should be encouraged within 3 months after surgery',
        ],
        answer: 2,
        explanation: 'Surgery is considered at BMI ≥40, or ≥35 with comorbidity, and at lower thresholds for poorly controlled T2DM. Lifelong supplementation is required. Delay pregnancy 12–18 months after surgery.',
      },
      {
        stem: 'An 80-year-old woman with BMI 32, reduced grip strength and slow gait asks about weight loss. What is the best approach?',
        options: [
          'Very low energy diet',
          'Resistance exercise and adequate protein, prioritising function',
          'Phentermine',
          'Bariatric surgery',
          'No intervention',
        ],
        answer: 1,
        explanation: 'Sarcopenic obesity: aggressive weight loss worsens muscle loss. Prioritise strength, protein and function.',
      },
      {
        stem: 'A man with BMI 38 has daytime sleepiness, loud snoring and hypertension. Which investigation is most useful?',
        options: ['Spirometry', 'Sleep study (polysomnography)', 'Echocardiogram', 'Brain MRI', 'Cortisol'],
        answer: 1,
        explanation: 'OSA is common in obesity. Screen with STOP-BANG or Epworth, and confirm with a sleep study.',
      },
    ],
    kfp: [
      {
        title: 'Leah is due a routine health check',
        scenario:
          'Leah, 45, attends for a health check. BMI 36, waist 104 cm, BP 142/88. She has knee pain and is tired. She has tried many diets and says she "has no willpower". She takes no regular medicines.',
        questions: [
          {
            prompt: 'List the investigations you would order.',
            limit: 'Up to 5',
            answers: ['HbA1c / fasting glucose', 'Fasting lipids', 'LFTs (MASLD)', 'UEC and urine ACR', 'Sleep study if OSA symptoms (or STOP-BANG screen)'],
          },
          {
            prompt: 'List key components of your management plan.',
            limit: 'Up to 5',
            answers: [
              'Non-stigmatising discussion; explain obesity as chronic disease; agree goals (5–10% loss, health outcomes)',
              'Dietitian and exercise physiologist referral via Chronic Condition Management Plan',
              'Discuss pharmacotherapy (e.g. GLP-1 RA) given BMI ≥30',
              'Screen for binge eating disorder and depression',
              'Manage BP / CVD risk and regular follow-up',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '628',
    label: 'Unit 628',
    date: 'Nov 2025',
    title: 'Lifestyle medicine',
    specialty: 'Preventive & Population Health',
    alsoRelevant: ['Mental Health', 'Aged Care', 'Aboriginal & Torres Strait Islander Health'],
    topics: [
      'Six pillars of lifestyle medicine',
      'Physical activity guidelines and exercise prescription',
      'Loneliness and social isolation',
      'Social and nature prescriptions',
      'Burnout and stress',
      'Shared medical appointments',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2025/lifestyle-medicine',
    overview:
      'Lifestyle medicine uses evidence-based behaviour change to prevent and treat chronic disease. It covers nutrition, physical activity, sleep, stress, social connection and avoiding risky substances. GPs can "prescribe" movement, nature and social connection as specifically as a medicine. Motivational interviewing and group models such as shared medical appointments help.',
    sections: [
      {
        heading: 'The pillars',
        points: [
          'Nutrition: a whole-food, mostly plant-based pattern (Mediterranean-style), fewer ultra-processed foods and alcohol.',
          'Physical activity (adults 18–64): 150–300 minutes of moderate or 75–150 minutes of vigorous activity per week, plus muscle strengthening on 2 days. Over 65s: at least 30 minutes on most days, including strength, balance and flexibility.',
          'Sleep: 7–9 hours for adults. Treat insomnia with CBT-i first line. Screen for OSA.',
          'Stress management, social connection, and avoiding tobacco and excess alcohol (no more than 10 standard drinks a week and 4 on any day).',
        ],
      },
      {
        heading: 'Loneliness and social prescribing',
        points: [
          'Loneliness and isolation raise all-cause mortality by about 25–30%, similar to other major risk factors. They also increase CVD, dementia and depression risk.',
          'Ask about social connection routinely. Loneliness is subjective: a person can be lonely even when surrounded by people.',
          'Social prescribing links patients, often through a link worker, to community activities such as men\'s sheds, choirs, volunteering, walking groups and sport.',
          'Nature prescriptions (time in green or blue space, "park prescriptions") improve mood, BP and activity. Make them specific: where, how often, and for how long.',
        ],
      },
      {
        heading: 'Behaviour change tools',
        points: [
          'Use the 5As (Ask, Assess, Advise, Assist, Arrange) and motivational interviewing: explore ambivalence and elicit "change talk".',
          'SMART goals (specific, measurable, achievable, relevant, time-bound). Build on existing habits.',
          'Exercise pre-participation screening (for example the ESSA Adult Pre-exercise Screening System) helps identify people who need medical review before vigorous activity.',
          'Burnout (emotional exhaustion, depersonalisation, reduced accomplishment): address workload, boundaries, sleep and support. Screen for depression.',
        ],
      },
      {
        heading: 'Culture and group care',
        points: [
          'For Aboriginal and Torres Strait Islander peoples, social connection to family, kin, community and Country is central to social and emotional wellbeing. Partner with ACCHOs.',
          'Shared medical appointments are group consultations where each patient gets individual medical care in a group setting. Obtain consent for confidentiality, bill each patient individually, and use a facilitator.',
          'They work well for diabetes, weight, chronic pain and lifestyle programs, building peer support and efficiency.',
          'Use the 45–49 year old health assessment and the Aboriginal and Torres Strait Islander health assessment (715) to open prevention conversations.',
        ],
      },
    ],
    redFlags: [
      'Exertional chest pain, syncope or palpitations before starting vigorous exercise: needs cardiac review.',
      'Fatigue with weight loss or other systemic features: do not attribute to lifestyle alone.',
      'Burnout with suicidal ideation.',
      'Hidden depression presenting as loneliness.',
    ],
    examTips: [
      'Know the Australian physical activity numbers by age group.',
      'Prescriptions must be specific (FITT: frequency, intensity, time, type).',
      'Social prescribing and loneliness are newer AKT topics.',
    ],
    mcqs: [
      {
        stem: 'What is the minimum weekly moderate-intensity physical activity recommended for Australian adults aged 18–64?',
        options: ['60 minutes', '100 minutes', '150 minutes', '300 minutes only', '500 minutes'],
        answer: 2,
        explanation: 'The guideline is 150–300 minutes of moderate (or 75–150 minutes vigorous) activity per week, plus muscle strengthening on 2 days.',
      },
      {
        stem: 'A 72-year-old widow reports feeling lonely and tired. Screening for depression is negative. Which intervention has the most direct evidence for addressing her loneliness?',
        options: ['Sertraline', 'Social prescribing to a community group via a link worker', 'Vitamin B12 injections', 'Temazepam', 'Referral to cardiology'],
        answer: 1,
        explanation: 'Social prescribing connects people to meaningful community activities and targets loneliness directly.',
      },
      {
        stem: 'In a shared medical appointment, which statement is correct?',
        options: [
          'Only one patient is billed for the session',
          'Confidentiality is not a concern',
          'Each patient receives individual medical care within a group, with consent regarding shared information',
          'It replaces all one-on-one care',
          'Only allied health can run them',
        ],
        answer: 2,
        explanation: 'Each patient gets individualised care in a group setting, is billed individually, and consents to the group format.',
      },
      {
        stem: 'What is the first-line treatment for chronic insomnia in adults?',
        options: ['Zolpidem', 'Temazepam', 'CBT for insomnia', 'Melatonin 10 mg', 'Quetiapine'],
        answer: 2,
        explanation: 'CBT-i is the first-line treatment with durable benefit. Hypnotics are for short-term use only.',
      },
      {
        stem: 'Which technique best helps an ambivalent patient move toward increasing physical activity?',
        options: [
          'Warning of dire consequences',
          'Motivational interviewing to explore ambivalence and elicit change talk',
          'Providing a pamphlet only',
          'Prescribing a gym membership without discussion',
          'Referral to psychiatry',
        ],
        answer: 1,
        explanation: 'Motivational interviewing is effective for behaviour change. It respects autonomy and resolves ambivalence.',
      },
    ],
    kfp: [
      {
        title: 'Melinda is feeling lonely and tired',
        scenario:
          'Melinda, 68, moved to a new town after her husband died a year ago. She lives alone, rarely leaves home, feels tired and "flat", and has put on 6 kg. She used to enjoy gardening and singing.',
        questions: [
          {
            prompt: 'List the key issues you would assess.',
            limit: 'Up to 4',
            answers: [
              'Depression (PHQ-9 / GDS) and suicide risk; complicated grief',
              'Medical causes of fatigue (FBC, TSH, glucose, iron, B12)',
              'Social connection / loneliness, supports and functional status',
              'Physical activity, diet, alcohol and sleep',
            ],
          },
          {
            prompt: 'Depression screening is mild and bloods normal. List your lifestyle-based management.',
            limit: 'Up to 4',
            answers: [
              'Social prescription (e.g. community choir, garden club) via link worker/community services',
              'Specific physical activity prescription (e.g. walking group 30 min 5 days/week, strength/balance)',
              'Nature prescription (green space, gardening)',
              'Follow-up review; grief counselling/psychology via Mental Health Treatment Plan if needed',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '627',
    label: 'Unit 627',
    date: 'Oct 2025',
    title: 'Integrative medicine',
    specialty: 'Professional & Ethical Practice',
    alsoRelevant: ['Mental Health', 'Gastroenterology & Hepatology', 'Preventive & Population Health'],
    topics: [
      'Taking a complementary medicine history',
      'Herb–drug interactions (St John\'s wort, ginkgo, kava)',
      'Evidence for integrative approaches in pain, depression, IBS',
      'Culturally appropriate nutrition advice',
      'TGA listed vs registered medicines',
      'Scope of practice and ethics',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2025/integrative-medicine',
    overview:
      'About two-thirds of Australians use complementary medicines, and many do not tell their doctor. Integrative medicine combines conventional care with evidence-based complementary and lifestyle therapies. The GP\'s job is to ask non-judgementally, check interactions and harms, appraise the evidence honestly, and stay within scope.',
    sections: [
      {
        heading: 'History and regulation',
        points: [
          'Ask routinely and without judgement: "Do you take any vitamins, herbs, supplements or traditional medicines, or see other practitioners?"',
          'AUST L (listed) medicines are assessed for safety and quality but NOT efficacy. AUST R (registered) medicines are evaluated for efficacy too.',
          'Online and imported products may be adulterated, for example weight-loss products containing sibutramine or "herbal" erectile products containing sildenafil.',
          'Record CAM use in the medication list and review it at each medicine reconciliation.',
        ],
      },
      {
        heading: 'Important interactions and harms',
        points: [
          'St John\'s wort (CYP3A4/P-gp inducer): reduces the effect of the pill, warfarin, ciclosporin, HIV medicines and DOACs. Risk of serotonin syndrome with SSRIs.',
          'Ginkgo, fish oil (high dose), turmeric and garlic may increase bleeding with anticoagulants or antiplatelets.',
          'Kava and black cohosh: hepatotoxicity. Liquorice: hypertension and hypokalaemia. High-dose vitamin A: teratogenic.',
          'Delaying effective treatment (such as cancer therapy) is the most serious harm.',
        ],
      },
      {
        heading: 'Evidence snapshots',
        points: [
          'Depression: exercise is effective. Omega-3 (EPA-predominant) has a modest adjunctive effect. St John\'s wort works in mild to moderate depression but has many interactions.',
          'Chronic pain: exercise, mindfulness and CBT, and acupuncture (modest benefit) within a multidisciplinary plan. Avoid long-term opioids.',
          'IBS and bloating: low FODMAP diet with a dietitian, peppermint oil, soluble fibre (psyllium), and gut-directed hypnotherapy.',
          'Weight loss supplements (garcinia, green tea extract, etc.) lack evidence and some are hepatotoxic.',
        ],
      },
      {
        heading: 'Cultural and ethical practice',
        points: [
          'Nutrition advice should respect cultural foods, family eating practices, religious fasting and budget.',
          'Know your scope. Refer to or collaborate with qualified practitioners, and do not offer unproven therapies as alternatives to effective treatment.',
          'The Medical Board code of conduct requires informed consent, evidence-based advice, and no exploitation of patient vulnerability (including selling products).',
          'Use shared decision-making. Respecting patient values builds trust and keeps them in care.',
        ],
      },
    ],
    redFlags: [
      'Declining effective cancer therapy for alternative treatment.',
      'Jaundice or raised LFTs in a supplement user (kava, black cohosh, green tea extract).',
      'Bleeding on an anticoagulant plus supplements.',
      'Serotonin syndrome features (SSRI + St John\'s wort).',
    ],
    examTips: [
      'St John\'s wort interactions are very commonly examined.',
      'Know the AUST L vs AUST R difference.',
      'IBS answer: low FODMAP with a dietitian, not self-directed restriction.',
    ],
    mcqs: [
      {
        stem: 'A 28-year-old woman on the combined oral contraceptive pill starts an over-the-counter mood supplement and has breakthrough bleeding. Which supplement is most likely responsible?',
        options: ['Fish oil', 'St John\'s wort', 'Magnesium', 'Vitamin D', 'Probiotic'],
        answer: 1,
        explanation: 'St John\'s wort induces CYP3A4 and reduces contraceptive hormone levels, causing breakthrough bleeding and contraceptive failure.',
      },
      {
        stem: 'What does an AUST L number on a product indicate?',
        options: [
          'The product has been proven effective',
          'It is assessed for safety and quality, but not evaluated for efficacy',
          'It is prescription-only',
          'It is PBS-subsidised',
          'It is banned',
        ],
        answer: 1,
        explanation: 'Listed medicines are low risk and can only make limited claims. The TGA does not evaluate their efficacy before listing.',
      },
      {
        stem: 'Which complementary medicine is most associated with hepatotoxicity?',
        options: ['Peppermint oil', 'Kava', 'Psyllium', 'Glucosamine', 'Zinc'],
        answer: 1,
        explanation: 'Kava has caused severe hepatotoxicity. Black cohosh and concentrated green tea extract are also implicated.',
      },
      {
        stem: 'A 35-year-old with IBS reports bloating and discomfort. Which dietary intervention has the best evidence?',
        options: ['Gluten-free diet', 'Low FODMAP diet supervised by a dietitian', 'Food IgG testing and elimination', 'Alkaline diet', 'Carnivore diet'],
        answer: 1,
        explanation: 'Low FODMAP (restriction, then reintroduction, then personalisation) has the strongest evidence for IBS. IgG food testing is not valid.',
      },
      {
        stem: 'A man on warfarin has a rising INR after starting several supplements. Which is most likely to increase bleeding risk?',
        options: ['Vitamin K', 'Ginkgo biloba', 'Coenzyme Q10', 'St John\'s wort', 'Calcium'],
        answer: 1,
        explanation: 'Ginkgo has antiplatelet effects and increases bleeding risk. St John\'s wort and vitamin K reduce warfarin effect.',
      },
    ],
    kfp: [
      {
        title: 'Diego is depressed',
        scenario:
          'Diego, 40, has moderate depression (PHQ-9 = 15). He wants to "avoid chemicals" and has started St John\'s wort bought online. He takes no prescribed medicines but is considering starting sertraline his friend recommended.',
        questions: [
          {
            prompt: 'List key safety issues to discuss about St John\'s wort.',
            limit: 'Up to 3',
            answers: [
              'Serotonin syndrome risk if combined with SSRIs (must not combine)',
              'Enzyme induction (CYP3A4/P-gp) reduces effect of other medicines (e.g. warfarin, DOACs, ciclosporin, HIV drugs) – review any future prescriptions',
              'Variable product quality / standardisation of online products',
            ],
          },
          {
            prompt: 'List evidence-based management options you would offer.',
            limit: 'Up to 4',
            answers: [
              'Psychological therapy (CBT) via Mental Health Treatment Plan',
              'Structured exercise prescription',
              'Antidepressant (SSRI) after stopping St John\'s wort (washout) if preferred/indicated',
              'Sleep, alcohol reduction, social connection; suicide risk assessment and follow-up',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '626',
    label: 'Unit 626',
    date: 'Sep 2025',
    title: 'End-of-life care',
    specialty: 'Palliative Care',
    alsoRelevant: ['Oncology', 'Aged Care', 'Professional & Ethical Practice'],
    topics: [
      'Cancer pain assessment and opioid prescribing',
      'Nausea and vomiting at end of life',
      'Constipation (including opioid-induced)',
      'Talking about choices, goals of care and voluntary assisted dying',
      'Non-cancer palliative care and frequent hospitalisation',
      'Recognising the terminal phase',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2025/end-of-life-care',
    overview:
      'Good end-of-life care depends on careful symptom assessment and matching treatment to the cause. Opioids need proper titration and laxatives. Honest conversations about prognosis and choices, including voluntary assisted dying (VAD) where lawful, are part of it. Coordinated planning then lets people stay at home if they wish.',
    sections: [
      {
        heading: 'Cancer pain',
        points: [
          'Assess pain type: nociceptive (somatic, visceral), neuropathic (burning, shooting) or bone. Also consider "total pain" (psychological, social, spiritual).',
          'Opioid-naïve: oral immediate-release morphine 2.5–5 mg every 4 hours PRN (or oxycodone 2.5–5 mg). Convert to sustained-release once requirements are stable.',
          'Breakthrough dose is about 1/6 to 1/10 of the total 24-hour dose. Always co-prescribe a regular laxative.',
          'Adjuvants: NSAIDs and dexamethasone for bone pain, radiotherapy for bone metastases, gabapentinoids or TCAs for neuropathic pain. Rotate opioids if toxicity occurs.',
        ],
      },
      {
        heading: 'Nausea and vomiting',
        points: [
          'Chemical or metabolic (opioids, hypercalcaemia, uraemia): haloperidol 0.5–1.5 mg.',
          'Gastric stasis: metoclopramide 10 mg before meals (avoid in complete obstruction).',
          'Raised intracranial pressure: dexamethasone. Vestibular: cyclizine or promethazine. Anxiety: benzodiazepine.',
          'Ondansetron is useful for chemotherapy or radiotherapy nausea but is constipating.',
        ],
      },
      {
        heading: 'Constipation',
        points: [
          'Causes: opioids, immobility, low intake, hypercalcaemia, anticholinergics, spinal cord compression, obstruction.',
          'Opioid-induced: regular stimulant plus softener (senna + docusate) or macrogol. Avoid bulk-forming agents (such as psyllium) in frail people with low fluid intake.',
          'Refractory opioid-induced constipation: SC methylnaltrexone or oral naloxegol, contraindicated in bowel obstruction.',
          'Do a rectal exam if impaction is suspected, and use suppositories or enemas.',
        ],
      },
      {
        heading: 'Conversations and planning',
        points: [
          'Ask–tell–ask. "Hope for the best, prepare for the worst." Explore what matters most, fears and trade-offs.',
          'Advance care planning: substitute decision-maker, advance care directive, goals of care. Share plans with hospital and ambulance.',
          'Frequent admissions (heart failure, COPD, frailty) signal the need for a palliative approach and proactive plans that avoid unwanted transfers.',
          'VAD is lawful in all Australian states and the ACT, each with its own eligibility and process. In some states (such as Victoria and South Australia) doctors must not initiate the discussion.',
          'Terminal phase signs: bed-bound, minimal intake, reduced consciousness, changed breathing. Stop non-essential medicines, switch to the SC route, and support the family.',
        ],
      },
    ],
    redFlags: [
      'Back pain with neurological signs in cancer: spinal cord compression. Give dexamethasone and arrange urgent MRI.',
      'Confusion, polyuria and constipation: hypercalcaemia.',
      'Myoclonus, hallucinations or drowsiness: opioid toxicity. Check renal function.',
      'Faeculent vomiting with distension: bowel obstruction.',
    ],
    examTips: [
      'Match the antiemetic to the cause. This is a favourite AKT question.',
      'Always prescribe a laxative with an opioid.',
      'Know the breakthrough dose fraction (1/6–1/10).',
    ],
    mcqs: [
      {
        stem: 'A man takes sustained-release morphine 30 mg twice daily with good control. What is an appropriate breakthrough dose of immediate-release oral morphine?',
        options: ['1–2 mg', '5–10 mg', '30 mg', '60 mg', '0.5 mg'],
        answer: 1,
        explanation: 'Total daily dose is 60 mg. Breakthrough is 1/6–1/10, i.e. 6–10 mg.',
      },
      {
        stem: 'A woman with metastatic breast cancer has persistent nausea, confusion, polyuria and constipation. Which investigation is most urgent?',
        options: ['Serum calcium (corrected)', 'Brain CT', 'Abdominal X-ray', 'TSH', 'Blood cultures'],
        answer: 0,
        explanation: 'This is hypercalcaemia of malignancy, a treatable cause of nausea and confusion. Treat with IV fluids and bisphosphonate if in keeping with goals.',
      },
      {
        stem: 'Which antiemetic is most appropriate for nausea caused by opioids?',
        options: ['Ondansetron', 'Haloperidol', 'Cyclizine', 'Dexamethasone', 'Hyoscine hydrobromide'],
        answer: 1,
        explanation: 'Opioid-induced nausea acts via the chemoreceptor trigger zone (dopamine). Haloperidol or metoclopramide are first choice. Ondansetron worsens constipation.',
      },
      {
        stem: 'A frail man on oxycodone has constipation despite macrogol and senna. There is no obstruction. What is the next best option?',
        options: ['Psyllium', 'Methylnaltrexone subcutaneously', 'Stop all opioids', 'Loperamide', 'Codeine'],
        answer: 1,
        explanation: 'Peripherally acting opioid antagonists (methylnaltrexone, naloxegol) treat refractory opioid-induced constipation without reversing analgesia.',
      },
      {
        stem: 'A man with lung cancer has new thoracic back pain and leg weakness. What is the most appropriate immediate step?',
        options: [
          'Increase morphine and review in a week',
          'High-dose dexamethasone and urgent MRI whole spine / oncology referral',
          'Physiotherapy referral',
          'Plain X-ray only',
          'NSAID and rest',
        ],
        answer: 1,
        explanation: 'Malignant spinal cord compression is an emergency. Give steroids and get urgent MRI and radiotherapy or surgery to preserve function.',
      },
    ],
    kfp: [
      {
        title: 'Clara is in increasing pain',
        scenario:
          'Clara, 72, has metastatic breast cancer with bone metastases. She takes paracetamol 1 g qid and oxycodone IR 5 mg PRN, using about 6 doses a day. She reports constant aching in her hip and back, worse on movement, and hasn\'t opened her bowels for 4 days. eGFR 65.',
        questions: [
          {
            prompt: 'List the key elements of your pain assessment.',
            limit: 'Up to 4',
            answers: [
              'Site, character, severity, radiation, timing (incl. incident pain) – PQRST',
              'Neurological symptoms/signs (cord compression, neuropathic pain)',
              'Examine for pathological fracture (e.g. hip) / imaging',
              'Psychosocial / "total pain", function, sleep and opioid side effects',
            ],
          },
          {
            prompt: 'List your pharmacological management changes.',
            limit: 'Up to 4',
            answers: [
              'Convert to regular sustained-release oxycodone (~30 mg/day → e.g. 15 mg bd)',
              'Breakthrough oxycodone IR 5 mg (1/6 of daily dose) PRN',
              'Regular laxative (e.g. senna + docusate or macrogol)',
              'Add NSAID and/or dexamethasone for bone pain; refer for palliative radiotherapy',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '625',
    label: 'Unit 625',
    date: 'Aug 2025',
    title: 'Inflammatory bowel disease',
    specialty: 'Gastroenterology & Hepatology',
    alsoRelevant: ['Rheumatology', 'Preventive & Population Health'],
    topics: [
      'Symptoms of IBD vs gastroenteritis and IBS',
      'Faecal calprotectin and investigation of diarrhoea',
      'Extra-intestinal manifestations',
      'Perianal Crohn disease',
      'Medicines: 5-ASA, steroids, thiopurines, biologics',
      'Diet, lifestyle, vaccination and surveillance',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2025/inflammatory-bowel-disease',
    overview:
      'Delayed diagnosis of IBD is common because early symptoms overlap with gastroenteritis and IBS. Persistent diarrhoea (>4 weeks), blood, nocturnal symptoms, weight loss or perianal disease need calprotectin and referral. In established IBD, the GP manages vaccination, drug monitoring, bone health, cancer surveillance and flares with the IBD team.',
    sections: [
      {
        heading: 'Diagnosis',
        points: [
          'Gastroenteritis usually settles within 2 weeks. Diarrhoea lasting more than 4 weeks, or with alarm features, needs investigation.',
          'Tests: stool MCS, C. difficile, ova and parasites, FBC, CRP, iron studies, LFT, albumin, coeliac serology, faecal calprotectin.',
          'Calprotectin <50 µg/g makes IBD unlikely. Raised levels (>100–200) suggest intestinal inflammation. False positives occur with NSAIDs, PPIs, infection and polyps.',
          'Crohn disease can affect anywhere from mouth to anus: transmural, skip lesions, fistulae, strictures, perianal disease. Ulcerative colitis is continuous mucosal inflammation from the rectum.',
        ],
      },
      {
        heading: 'Extra-intestinal and complications',
        points: [
          'Joints: peripheral arthritis (often follows bowel activity), sacroiliitis or ankylosing spondylitis (independent of bowel activity).',
          'Skin: erythema nodosum, pyoderma gangrenosum. Eyes: episcleritis, uveitis (urgent). Liver: primary sclerosing cholangitis (with UC).',
          'Perianal abscess or fistula in Crohn disease: surgical drainage, MRI pelvis and gastroenterology referral. A new perianal lump in young people should prompt IBD consideration.',
          'Iron deficiency anaemia (often needs IV iron), VTE risk during flares, osteoporosis with steroids, and colorectal cancer. Start colonoscopic surveillance about 8 years after colitis onset.',
        ],
      },
      {
        heading: 'Medicines',
        points: [
          'Mild to moderate UC: oral plus rectal 5-ASA (mesalazine). Monitor renal function.',
          'Corticosteroids for induction only, never maintenance. Budesonide for ileal Crohn disease. Protect bones.',
          'Thiopurines (azathioprine, mercaptopurine): check TPMT/NUDT15 first. Monitor FBC and LFT, and watch for skin cancer and lymphoma.',
          'Biologics and small molecules (infliximab, adalimumab, vedolizumab, ustekinumab, JAK inhibitors): screen for TB, HBV, HCV, HIV and VZV before starting. Avoid live vaccines.',
          'Methotrexate is teratogenic. Most other IBD medicines (except methotrexate) are continued in pregnancy, and conception should be planned during remission.',
        ],
      },
      {
        heading: 'Lifestyle and prevention',
        points: [
          'Smoking worsens Crohn disease. Stopping is a key intervention.',
          'No single diet cures IBD. A Mediterranean-style pattern is reasonable. Use low-residue food when strictures are present. Exclusive enteral nutrition works in paediatric Crohn disease.',
          'Vaccinate before immunosuppression: influenza, pneumococcal, COVID-19, HPV, recombinant zoster (Shingrix), and hepatitis B if non-immune.',
          'Skin checks on thiopurines. Cervical screening every 3 years for people on immunosuppression.',
        ],
      },
    ],
    redFlags: [
      'Acute severe UC: ≥6 bloody stools a day plus systemic toxicity (tachycardia, fever, anaemia, raised ESR/CRP). Admit.',
      'Painful red eye with photophobia: uveitis.',
      'Abdominal distension and pain on steroids: toxic megacolon or perforation (signs may be masked).',
      'Fever with a perianal lump: abscess needing drainage.',
    ],
    examTips: [
      'Calprotectin distinguishes IBD from IBS. Know its false positives.',
      'Screening before a biologic (TB, hepatitis, VZV) is a common KFP item.',
      'Steroids induce remission but never maintain it.',
    ],
    mcqs: [
      {
        stem: 'A 24-year-old has 6 weeks of loose stools with blood, nocturnal urgency and 4 kg weight loss. Stool cultures are negative. What is the most useful next test?',
        options: ['Hydrogen breath test', 'Faecal calprotectin with urgent gastroenterology referral', 'CT abdomen', 'Trial of low FODMAP diet', 'Stool IgG food panel'],
        answer: 1,
        explanation: 'Alarm features with persistent diarrhoea suggest IBD. Calprotectin supports referral for colonoscopy.',
      },
      {
        stem: 'Before starting azathioprine, which test should be checked?',
        options: ['G6PD', 'TPMT (± NUDT15) activity/genotype', 'HLA-B27', 'Serum amylase', 'Vitamin D'],
        answer: 1,
        explanation: 'Low TPMT activity causes severe myelotoxicity. Dose adjustment or an alternative is needed.',
      },
      {
        stem: 'A patient with Crohn disease will start adalimumab. Which vaccine is contraindicated once therapy begins?',
        options: ['Inactivated influenza', 'Recombinant zoster (Shingrix)', 'Measles-mumps-rubella (MMR)', 'Pneumococcal conjugate', 'HPV'],
        answer: 2,
        explanation: 'Live vaccines (MMR, varicella, yellow fever) are contraindicated on biologic immunosuppression. Give them at least 4 weeks before starting if needed.',
      },
      {
        stem: 'A man with UC has swollen, painful knees and ankles during a flare. What is the most likely diagnosis?',
        options: ['Gout', 'Enteropathic (peripheral) arthritis', 'Septic arthritis', 'Rheumatoid arthritis', 'Reactive arthritis from chlamydia'],
        answer: 1,
        explanation: 'Type 1 peripheral arthritis affects large joints and parallels bowel activity. It settles as the colitis is treated.',
      },
      {
        stem: 'When should colonoscopic surveillance for colorectal cancer usually begin in extensive ulcerative colitis?',
        options: ['At diagnosis', 'About 8 years after symptom onset', 'At age 50 only', 'Never needed', 'After 25 years'],
        answer: 1,
        explanation: 'Colitis-associated cancer risk rises with duration and extent. Surveillance starts about 8 years after onset (sooner, and yearly, with PSC).',
      },
    ],
    kfp: [
      {
        title: 'Tania needs a management plan',
        scenario:
          'Tania, 29, has recently diagnosed ileocolonic Crohn disease. Her gastroenterologist plans to start adalimumab. She smokes 10 cigarettes/day, has had 2 courses of prednisolone this year and hopes to become pregnant in the next few years.',
        questions: [
          {
            prompt: 'List the screening and preventive measures before starting adalimumab.',
            limit: 'Up to 5',
            answers: [
              'TB screening (IGRA ± CXR)',
              'Hepatitis B (HBsAg, anti-HBc, anti-HBs), hepatitis C and HIV serology',
              'VZV serology (and MMR/varicella live vaccines if non-immune before starting)',
              'Inactivated vaccines: influenza, pneumococcal, COVID-19, HPV, recombinant zoster, hep B',
              'Cervical screening up to date',
            ],
          },
          {
            prompt: 'List other key elements of her long-term GP management.',
            limit: 'Up to 4',
            answers: [
              'Smoking cessation support',
              'Bone health (vitamin D, calcium, DXA given steroid exposure)',
              'Preconception planning – conceive in remission; continue biologic; folic acid',
              'Monitor iron/B12, skin checks, sun protection and mental health',
            ],
          },
        ],
      },
    ],
  },
]

export default units
