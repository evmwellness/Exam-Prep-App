import type { Unit } from '../../types'

const units: Unit[] = [
  {
    id: '633',
    label: 'Unit 633',
    date: 'May 2026',
    title: 'Medical abortion',
    specialty: 'Sexual & Reproductive Health',
    alsoRelevant: ["Women's Health", 'Professional & Ethical Practice'],
    topics: [
      'Unintended pregnancy: options counselling',
      'Eligibility and work-up for early medical abortion',
      'MS-2Step regimen (mifepristone + misoprostol)',
      'Complications: incomplete abortion, ongoing pregnancy, haemorrhage, infection',
      'Contraception after medical abortion',
      'Privacy, minors and conscientious objection',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2026/medical-abortion',
    overview:
      'Early medical abortion (EMA) with mifepristone and misoprostol is safe and effective up to 63 days (9 weeks) of gestation, and can be provided entirely in general practice. Since 2023, any appropriately qualified prescriber can prescribe MS-2Step without extra certification, and pharmacists can dispense it. Core skills are non-judgemental options counselling, excluding ectopic pregnancy, clear safety-netting, and confirming the abortion is complete.',
    sections: [
      {
        heading: 'Options and work-up',
        points: [
          'Give non-directive counselling covering continuing the pregnancy (parenting or adoption), medical abortion and surgical abortion. Check for coercion and family violence.',
          'Confirm the pregnancy and date it (LMP ± ultrasound). Ultrasound confirms intrauterine location and gestation. Do it if dates are uncertain, there is pain or bleeding, or ectopic risk factors (previous ectopic, PID, tubal surgery, IUD in situ).',
          'Tests: blood group and antibodies, Hb if anaemia suspected, and STI screen. Serum β-hCG gives a baseline for follow-up when a "no-test" or ultrasound-free pathway is used.',
          'Contraindications: suspected or confirmed ectopic, IUD in situ (remove first), chronic adrenal failure, long-term systemic corticosteroids, bleeding disorder or anticoagulation, inherited porphyria, severe anaemia, allergy.',
        ],
      },
      {
        heading: 'Regimen and what to expect',
        points: [
          'Mifepristone 200 mg orally, then 24–48 hours later misoprostol 800 microgram buccally (held in the cheeks for 30 minutes).',
          'Cramping and bleeding usually start within 4 hours of misoprostol and are heavier than a period. Give ibuprofen for pain (take it before misoprostol), an antiemetic, and a 24-hour helpline number.',
          'Rh D immunoglobulin: recent guidance no longer routinely recommends it for EMA under 10 weeks. Follow your local protocol.',
          'Follow-up at 1–2 weeks: serum β-hCG fall of ≥80%, low-sensitivity urine pregnancy test at 3–4 weeks, or ultrasound. Persistent pregnancy symptoms need review.',
        ],
      },
      {
        heading: 'Complications',
        points: [
          'Haemorrhage: soaking 2 or more thick pads an hour for 2 hours in a row. Seek urgent care.',
          'Incomplete abortion (retained tissue): repeat misoprostol or aspiration. Ongoing pregnancy (about 1–2%) needs surgical abortion or a repeat regimen, as misoprostol is teratogenic.',
          'Infection: fever >24 hours after misoprostol, offensive discharge, pelvic pain or tenderness. Treat as post-abortal endometritis. Rare Clostridium sepsis can occur without fever.',
          'Undiagnosed ectopic: one-sided pain and ongoing hCG despite bleeding. Mifepristone does not treat ectopic pregnancy.',
        ],
      },
      {
        heading: 'Contraception and legal/ethical',
        points: [
          'Ovulation can return within 2 weeks. Discuss contraception at the first visit.',
          'Implant: insert on the day of mifepristone. DMPA can be given the same day, but may slightly increase the ongoing-pregnancy rate. Pill, ring or patch: start on misoprostol day or within 5 days. IUD: insert once completion is confirmed.',
          'Abortion is decriminalised or lawful in all states and territories, with varying later-gestation provisions. Doctors with a conscientious objection must not obstruct access and in most jurisdictions must refer.',
          'Minors: assess as mature minor (Gillick competence). Protect privacy, for example with a separate Medicare card from age 14 and confidential billing. Keep mandatory reporting obligations in mind.',
        ],
      },
    ],
    redFlags: [
      'Unilateral pelvic pain, shoulder tip pain or syncope: exclude ectopic pregnancy.',
      'Heavy bleeding (≥2 pads/hour for 2 hours) or haemodynamic instability.',
      'Fever, tachycardia or malaise after misoprostol: sepsis.',
      'No bleeding within 24 hours of misoprostol: possible failed abortion or ectopic.',
    ],
    examTips: [
      'Know the 63-day limit and the 24–48 hour interval between the two drugs.',
      'The IUD must be removed before EMA. Corticosteroids and adrenal failure are contraindications.',
      'KFP answers should include contraception, safety-netting and follow-up to confirm completion.',
    ],
    mcqs: [
      {
        stem: 'A 26-year-old woman at 7 weeks by LMP requests medical abortion. She has a copper IUD in situ. What is the most appropriate next step?',
        options: [
          'Proceed with MS-2Step and leave IUD',
          'Ultrasound to exclude ectopic and remove IUD before mifepristone',
          'Misoprostol alone',
          'Refer for surgical abortion only; EMA is contraindicated permanently',
          'Give methotrexate',
        ],
        answer: 1,
        explanation: 'Pregnancy with an IUD increases ectopic risk. Confirm the pregnancy is intrauterine and remove the IUD before starting EMA.',
      },
      {
        stem: 'Which of the following is a contraindication to mifepristone?',
        options: ['Asthma controlled with inhaled budesonide', 'Long-term oral prednisolone for rheumatoid arthritis', 'Previous caesarean section', 'Age 16', 'Breastfeeding'],
        answer: 1,
        explanation: 'Mifepristone is an antiglucocorticoid and can precipitate adrenal insufficiency in long-term systemic steroid users. Inhaled steroids are not a contraindication.',
      },
      {
        stem: 'Two weeks after EMA, a woman has light bleeding. Serum β-hCG has fallen from 18,000 to 1,200 IU/L. What does this indicate?',
        options: ['Ongoing pregnancy', 'Complete abortion likely (fall >80%)', 'Ectopic pregnancy', 'Molar pregnancy', 'Need for immediate curettage'],
        answer: 1,
        explanation: 'A fall of ≥80% from baseline at 7–14 days indicates successful abortion. Light bleeding can continue for weeks.',
      },
      {
        stem: 'A woman wants an etonogestrel implant after EMA. When can it be inserted?',
        options: ['Only after 6 weeks', 'On the day of mifepristone', 'After the next period', 'After negative hCG at 4 weeks only', 'It is contraindicated after abortion'],
        answer: 1,
        explanation: 'The implant can be inserted on the day of mifepristone without affecting efficacy. This gives immediate, highly effective contraception.',
      },
      {
        stem: 'Three days after misoprostol, a patient reports offensive discharge, lower abdominal pain and temperature 38.4 °C. What is the most likely diagnosis?',
        options: ['Normal side effect of misoprostol', 'Post-abortal endometritis', 'Ovarian torsion', 'Urinary tract infection', 'Ongoing pregnancy'],
        answer: 1,
        explanation: 'Fever from misoprostol settles within 24 hours. Fever later with pain and offensive discharge suggests infection and retained products, needing antibiotics ± evacuation.',
      },
    ],
    kfp: [
      {
        title: 'Sienna has ongoing cramping and bleeding',
        scenario:
          'Sienna, 23, took mifepristone and misoprostol for a 7-week pregnancy 10 days ago. She reports ongoing cramping, bleeding like a heavy period and still feels nauseated with breast tenderness. She is afebrile and haemodynamically stable.',
        questions: [
          {
            prompt: 'List the most likely diagnoses.',
            limit: 'Up to 3',
            answers: ['Incomplete abortion (retained products)', 'Ongoing / continuing pregnancy', 'Ectopic pregnancy (if not previously excluded)'],
          },
          {
            prompt: 'List the investigations you would arrange.',
            limit: 'Up to 3',
            answers: ['Quantitative serum β-hCG (compare with baseline)', 'Pelvic (transvaginal) ultrasound', 'FBC (haemoglobin) ± STI screen / group and hold'],
          },
          {
            prompt: 'Ultrasound shows a continuing viable intrauterine pregnancy. Outline management.',
            limit: 'Up to 3',
            answers: [
              'Explain teratogenic risk of misoprostol',
              'Arrange surgical (aspiration) abortion or repeat regimen per specialist advice',
              'Discuss and commence ongoing contraception; provide support/counselling',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '632',
    label: 'Unit 632',
    date: 'Apr 2026',
    title: 'Epilepsy',
    specialty: 'Neurology',
    alsoRelevant: ["Women's Health", 'Aged Care', 'Professional & Ethical Practice'],
    topics: [
      'First seizure assessment and investigation',
      'Seizure classification (ILAE)',
      'Epilepsy mimics: syncope, PNES, migraine aura',
      'Seizures in older adults',
      'Starting and titrating antiseizure medicines',
      'Driving, women of reproductive age, drug-resistant epilepsy',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2026/epilepsy',
    overview:
      'GPs are usually the first to assess a possible seizure. A careful eyewitness history is the most important diagnostic tool. Investigate with ECG, bloods, EEG and MRI, and get a timely neurology review. Advise on driving and safety from day one. Choose antiseizure medicine (ASM) with reproductive potential, interactions and comorbidities in mind. Refer early when two medicines have failed.',
    sections: [
      {
        heading: 'First seizure',
        points: [
          'History from the patient and a witness: warning (aura), triggers (sleep deprivation, alcohol, drugs), what the event looked like, duration, eyes open or closed, colour, tongue biting (lateral), incontinence, post-ictal confusion.',
          'Investigations: ECG (QT, Brugada, heart block), BGL, electrolytes including Ca/Mg, FBC, and a drug screen if relevant. EEG, ideally within 24–48 hours. MRI brain with an epilepsy protocol (preferred over CT, unless acute).',
          'Epilepsy is ≥2 unprovoked seizures more than 24 hours apart, OR 1 unprovoked seizure with ≥60% recurrence risk (such as an epileptiform EEG or structural lesion), OR an epilepsy syndrome.',
          'Safety advice: no driving (private licence: generally 6 months seizure-free after a first unprovoked seizure; 12 months for epilepsy on treatment, per Assessing Fitness to Drive). No swimming or bathing alone, and no heights or dangerous machinery.',
        ],
      },
      {
        heading: 'Classification and mimics',
        points: [
          'Onset is focal, generalised or unknown. Focal seizures are described by awareness (aware or impaired) and motor or non-motor features. Focal to bilateral tonic–clonic replaces "secondary generalised".',
          'Syncope: triggered by posture, pain or heat. Pallor and sweating, brief (<30 s), may have a few jerks, rapid recovery without prolonged confusion.',
          'Psychogenic non-epileptic seizures (PNES): eyes closed, long and fluctuating, side-to-side head movement, pelvic thrusting, recall of the event. Video-EEG is the gold standard. Epilepsy and PNES can coexist.',
          'Other mimics: migraine aura (slow spread over minutes, positive visual phenomena), TIA (negative symptoms), hypoglycaemia, cardiac arrhythmia, sleep disorders.',
        ],
      },
      {
        heading: 'Medicines',
        points: [
          'Start one ASM at a low dose and titrate. Levetiracetam and lamotrigine are common first-line choices for focal and generalised epilepsy. Valproate is highly effective for generalised epilepsy.',
          'Valproate: avoid in women and girls who could become pregnant (major malformations and neurodevelopmental harm) unless there is no alternative and a pregnancy prevention plan is in place.',
          'Enzyme inducers (carbamazepine, phenytoin, topiramate >200 mg) reduce hormonal contraceptive efficacy. Oestrogen and pregnancy lower lamotrigine levels. Prescribe folic acid 5 mg daily for those who could become pregnant.',
          'Levetiracetam can cause mood change and irritability. Lamotrigine can cause rash or SJS (titrate slowly). Carbamazepine causes hyponatraemia; check HLA-B*1502 in people of Asian ancestry.',
          'Drug-resistant epilepsy is failure of 2 appropriate, tolerated ASMs. Refer to a comprehensive epilepsy centre (surgery, devices, diet).',
        ],
      },
      {
        heading: 'Older adults and ongoing care',
        points: [
          'New-onset epilepsy is most common over 65, usually from cerebrovascular disease or neurodegeneration.',
          'Focal impaired awareness seizures (confusion, speech arrest, staring) are often mislabelled as TIA or dementia. Consider EEG for recurrent stereotyped episodes.',
          'Use lower doses and beware interactions (warfarin, DOACs with enzyme inducers). Levetiracetam and lamotrigine are well tolerated.',
          'Seizure action plan and rescue medicine (midazolam buccal or intranasal 10 mg for a seizure lasting over 5 minutes). Discuss SUDEP and bone health, and screen for depression.',
        ],
      },
    ],
    redFlags: [
      'Seizure lasting over 5 minutes, or repeated seizures without recovery: status epilepticus.',
      'First seizure with focal deficit, headache, fever, head injury or anticoagulation: urgent imaging.',
      'Exertional syncope or abnormal ECG: cardiac cause.',
      'Pregnancy on valproate or enzyme inducers.',
    ],
    examTips: [
      'Driving rules are regularly examined. Know the Assessing Fitness to Drive principles and that the patient must notify the licensing authority.',
      'Always ask about contraception and pregnancy plans when prescribing ASMs.',
      'Eyes closed during an event points to PNES. Lateral tongue bite points to epileptic seizure.',
    ],
    mcqs: [
      {
        stem: 'A 24-year-old carpenter had a witnessed generalised tonic–clonic seizure. MRI and bloods are normal; EEG shows generalised spike-and-wave. What is the most important advice today?',
        options: [
          'He may drive immediately if he feels well',
          'He must not drive and should notify the licensing authority; standards require a seizure-free period',
          'He can drive but not at night',
          'Driving restrictions apply only to commercial licences',
          'He must surrender his licence permanently',
        ],
        answer: 1,
        explanation: 'After a seizure, private driving stops for a seizure-free period set by Assessing Fitness to Drive. The patient is responsible for notifying the licensing authority.',
      },
      {
        stem: 'A 20-year-old woman with juvenile myoclonic epilepsy needs an antiseizure medicine. She is not planning pregnancy. Which is LEAST appropriate?',
        options: ['Levetiracetam', 'Lamotrigine', 'Sodium valproate', 'Topiramate with effective contraception', 'Specialist review of options'],
        answer: 2,
        explanation: 'Valproate is highly teratogenic and causes neurodevelopmental harm. Avoid it in women of childbearing potential unless other options fail and a pregnancy prevention program is in place.',
      },
      {
        stem: 'Which feature most strongly suggests a psychogenic non-epileptic seizure?',
        options: ['Lateral tongue bite', 'Eyes forcefully closed during the event', 'Post-ictal confusion for 20 minutes', 'Event arising from sleep', 'Urinary incontinence'],
        answer: 1,
        explanation: 'Eyes closed (often resisting opening) is one of the most reliable signs of PNES. Epileptic seizures typically occur with eyes open.',
      },
      {
        stem: 'A 78-year-old man has brief episodes of speech arrest and unresponsiveness lasting 1–2 minutes, with no recollection, followed by gradual recovery. MRI shows old small vessel disease. What is the most likely diagnosis?',
        options: ['Recurrent TIA', 'Focal impaired awareness seizures', 'Transient global amnesia', 'Vasovagal syncope', 'Alzheimer disease'],
        answer: 1,
        explanation: 'Stereotyped episodes with impaired awareness, amnesia and gradual recovery suggest focal seizures, a common late-onset epilepsy after cerebrovascular disease. TIAs rarely cause loss of awareness.',
      },
      {
        stem: 'A woman taking lamotrigine starts a combined oral contraceptive. What is the most likely consequence?',
        options: ['Lamotrigine toxicity', 'Reduced lamotrigine levels and breakthrough seizures', 'Contraceptive failure', 'Hyponatraemia', 'No interaction'],
        answer: 1,
        explanation: 'Oestrogen induces lamotrigine glucuronidation and can roughly halve its levels. Monitor, and adjust the dose if needed.',
      },
    ],
    kfp: [
      {
        title: 'Ryan wants to return to work',
        scenario:
          'Ryan, 24, a carpenter in a regional town, collapsed at a building site 2 days ago. A co-worker saw him go stiff then jerk all four limbs for about 1 minute; he was confused for 20 minutes afterwards and bit the side of his tongue. He had been working long hours and drinking heavily at the weekend. He drives to work and uses power tools and ladders.',
        questions: [
          {
            prompt: 'List the investigations you would arrange.',
            limit: 'Up to 5',
            answers: [
              'ECG',
              'Blood glucose, electrolytes incl. calcium/magnesium, FBC, LFT',
              'EEG (ideally early, within 24–48 h)',
              'MRI brain (epilepsy protocol)',
              'Urine drug screen / alcohol history',
            ],
          },
          {
            prompt: 'List the safety advice you would give Ryan today.',
            limit: 'Up to 4',
            answers: [
              'Do not drive; he must notify the driver licensing authority',
              'Avoid working at heights, ladders, power tools / dangerous machinery until cleared',
              'Avoid swimming or bathing alone; shower instead',
              'Avoid seizure triggers: sleep deprivation and excess alcohol',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '631',
    label: 'Unit 631',
    date: 'Mar 2026',
    title: 'Chronic fatigue, energy-limiting and post-infection conditions',
    specialty: 'Infectious Diseases',
    alsoRelevant: ['Neurology', 'Mental Health', 'Rheumatology'],
    topics: [
      'ME/CFS diagnostic criteria and post-exertional malaise',
      'Long COVID (post-COVID-19 condition)',
      'Orthostatic intolerance and POTS',
      'Fibromyalgia and chronic pain with fatigue',
      'Mast cell activation syndrome (MCAS) claims',
      'Pacing, symptom management and prognosis',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2026/chronic-fatigue-energy-limiting-and-post-infection',
    overview:
      'Energy-limiting conditions such as ME/CFS and long COVID are common, disabling and often follow infection. The GP\'s role is to exclude alternative diagnoses with targeted tests, recognise post-exertional malaise (PEM), and support pacing rather than graded exercise. Manage treatable components such as orthostatic intolerance, sleep and pain, and provide continuity and validation.',
    sections: [
      {
        heading: 'Recognition',
        points: [
          'ME/CFS (US National Academy of Medicine, 2015): ≥6 months of substantially reduced function with profound fatigue, PEM and unrefreshing sleep, PLUS cognitive impairment or orthostatic intolerance.',
          'PEM is a worsening of symptoms 12–72 hours after physical, cognitive or emotional effort, lasting days or longer. It is the hallmark feature.',
          'Long COVID (WHO): symptoms 3 months after infection, lasting ≥2 months, not explained by another diagnosis. Fatigue, breathlessness, cognitive "fog" and PEM are common.',
          'Post-infective fatigue can also follow EBV, Q fever, Ross River virus and other infections.',
        ],
      },
      {
        heading: 'Targeted investigations',
        points: [
          'Baseline: FBC, ESR/CRP, UEC, LFT, TSH, glucose/HbA1c, iron studies, B12/folate, calcium, CK, coeliac serology, urinalysis, β-hCG where relevant.',
          'Guided by history: morning cortisol, vitamin D, HIV/hepatitis serology, sleep study (OSA), ECG/echo (breathlessness), spirometry.',
          'Screen for depression (PHQ-9) and anxiety. They may coexist, but they do not explain PEM.',
          'Avoid extensive, unvalidated testing. Explain why tests are normal and that the illness is still real.',
        ],
      },
      {
        heading: 'Orthostatic intolerance and MCAS',
        points: [
          'Active stand or NASA lean test: POTS is a sustained HR rise of ≥30 bpm (≥40 bpm aged 12–19) within 10 minutes of standing, without orthostatic hypotension, with symptoms for ≥3 months.',
          'POTS management: 2–3 L fluid and extra salt (if no hypertension or renal disease), waist-high compression, recumbent exercise, avoid triggers. Specialist medicines include propranolol (low dose), ivabradine, fludrocortisone and midodrine.',
          'MCAS diagnosis needs all three: episodic multi-system symptoms, a mediator rise during symptoms (tryptase ≥20% + 2 ng/mL above baseline), and response to anti-mediator therapy. It is over-diagnosed online.',
          'Trial of non-sedating H1 antihistamine ± H2 blocker is reasonable if symptoms suggest it. Refer to immunology.',
        ],
      },
      {
        heading: 'Management and prognosis',
        points: [
          'Pacing: stay within the "energy envelope". Break activities into smaller parts, rest before crashing, and use heart-rate monitoring if helpful.',
          'Graded exercise therapy with fixed increments is NOT recommended for ME/CFS (NICE 2021). CBT can be offered for coping, not as a cure.',
          'Manage sleep hygiene, pain (fibromyalgia: exercise within tolerance, low-dose amitriptyline or duloxetine), mood and cognition. Help with workplace adjustments, Centrelink or NDIS where appropriate.',
          'Prognosis varies. Many long COVID patients improve over 6–12 months. Full recovery from established ME/CFS is less common, but function often improves.',
        ],
      },
    ],
    redFlags: [
      'Weight loss, night sweats, fevers or lymphadenopathy: malignancy or chronic infection.',
      'Exertional chest pain, syncope or hypoxaemia: cardiorespiratory disease.',
      'Proximal weakness or raised CK: myositis.',
      'Suicidal ideation (common in severe ME/CFS).',
    ],
    examTips: [
      'The key distinguishing feature is post-exertional malaise.',
      'Recommend pacing, not graded exercise.',
      'Know the POTS HR criteria and the active stand test.',
    ],
    mcqs: [
      {
        stem: 'A 34-year-old woman has 9 months of fatigue after a viral illness. Walking to the shops leaves her bed-bound for 2 days. Sleep is unrefreshing and she has difficulty concentrating. Investigations are normal. Which management approach is most appropriate?',
        options: [
          'Graded exercise therapy increasing activity by 20% weekly',
          'Pacing within her energy envelope and symptom management',
          'Long-term antiviral therapy',
          'Reassurance that symptoms are psychological',
          'Prolonged bed rest',
        ],
        answer: 1,
        explanation: 'This is ME/CFS with PEM. Pacing is recommended. Fixed-increment graded exercise can worsen symptoms.',
      },
      {
        stem: 'Which finding on an active stand test is consistent with POTS in an adult?',
        options: [
          'SBP fall of 25 mmHg within 3 minutes',
          'Sustained HR increase of 35 bpm within 10 minutes without significant BP fall',
          'HR increase of 15 bpm',
          'Bradycardia on standing',
          'Diastolic rise of 10 mmHg',
        ],
        answer: 1,
        explanation: 'In adults POTS is an HR rise of ≥30 bpm within 10 minutes of standing, without orthostatic hypotension. A large SBP fall indicates orthostatic hypotension.',
      },
      {
        stem: 'A patient believes she has mast cell activation syndrome. Which is required for diagnosis?',
        options: [
          'Raised baseline IgE',
          'Positive skin prick test',
          'Episodic multisystem symptoms, mediator rise (e.g. tryptase) during an episode, and response to anti-mediator therapy',
          'Elevated eosinophils',
          'Positive food IgG panel',
        ],
        answer: 2,
        explanation: 'MCAS needs all three criteria. IgG food panels have no diagnostic value.',
      },
      {
        stem: 'What is the hallmark feature that distinguishes ME/CFS from other causes of chronic fatigue?',
        options: ['Low mood', 'Post-exertional malaise', 'Weight gain', 'Morning stiffness', 'Daytime sleepiness'],
        answer: 1,
        explanation: 'PEM (delayed worsening after exertion) is required for diagnosis and guides management with pacing.',
      },
      {
        stem: 'A 45-year-old man has ongoing breathlessness and fatigue 4 months after COVID-19. Which initial investigation set is most appropriate?',
        options: [
          'No investigations; diagnose long COVID',
          'FBC, CRP, UEC, TFT, ferritin, ECG, CXR ± spirometry',
          'Whole-body PET scan',
          'Muscle biopsy',
          'Food intolerance panel',
        ],
        answer: 1,
        explanation: 'Long COVID is a diagnosis of exclusion. Look for anaemia, thyroid, cardiac, respiratory and thromboembolic causes of breathlessness.',
      },
    ],
    kfp: [
      {
        title: 'Elizabeth has frequent near-fainting episodes',
        scenario:
          'Elizabeth, 19, a university student, has 8 months of light-headedness on standing, palpitations, "brain fog" and fatigue since a viral illness. She nearly faints in the shower and in queues. Lying HR 72, BP 112/70. Examination is otherwise normal.',
        questions: [
          {
            prompt: 'Which bedside test would you perform and what result would support the likely diagnosis?',
            limit: 'Up to 2',
            answers: [
              'Active stand test / NASA lean test (HR and BP lying then standing for 10 minutes)',
              'Sustained HR rise ≥40 bpm (age 12–19) within 10 min without orthostatic hypotension → POTS',
            ],
          },
          {
            prompt: 'List initial non-pharmacological management.',
            limit: 'Up to 4',
            answers: [
              'Increase fluid intake to 2–3 L/day',
              'Increase salt intake',
              'Waist-high compression garments',
              'Recumbent/graded reconditioning exercise within tolerance, pacing; avoid triggers (heat, prolonged standing)',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'S5',
    label: 'Supplement 5',
    date: 'Feb 2026',
    title: 'Antidepressants in teens and young adults',
    specialty: 'Mental Health',
    alsoRelevant: ['Paediatrics & Child Health', 'Aboriginal & Torres Strait Islander Health'],
    topics: [
      'Engaging young people: HEEADSSS and confidentiality',
      'Evidence for antidepressants in young people',
      'Suicidality warnings and monitoring',
      'Non-pharmacological first-line care',
      'Social and emotional wellbeing for Aboriginal youth',
      'Review, akathisia and deprescribing',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2026/antidepressants-in-teens-and-young-adults',
    overview:
      'Depression and anxiety are common in young people, and the GP is often the first point of contact. Build rapport and assess thoroughly first. For mild to moderate illness, psychological therapy comes before medicine. When an antidepressant is needed, fluoxetine has the best evidence. Close early monitoring for suicidality and agitation is essential, as is a planned review and taper.',
    sections: [
      {
        heading: 'Engagement and assessment',
        points: [
          'See the young person alone for part of the consultation. Explain confidentiality and its limits: risk to self, risk to others, abuse.',
          'Use a HEEADSSS psychosocial assessment (Home, Education/Employment, Eating, Activities, Drugs, Sexuality, Suicide/depression, Safety). Screen with PHQ-A or K10.',
          'Suicide risk: ask directly, build a collaborative safety plan, involve family with consent, and restrict access to means.',
          'Look for contributing factors: bullying, family conflict, substance use, neurodivergence, trauma, gender or sexuality stress.',
        ],
      },
      {
        heading: 'Evidence and choice',
        points: [
          'Mild depression: psychoeducation, active monitoring, sleep, exercise, CBT/IPT, and digital programs. headspace and a Mental Health Treatment Plan (Better Access) are options.',
          'Moderate to severe depression: offer an SSRI together with psychological therapy. Fluoxetine is first choice. Sertraline and escitalopram are alternatives.',
          'Anxiety disorders: CBT first. SSRIs (sertraline, fluoxetine) are effective when needed.',
          'Avoid TCAs (ineffective in youth and dangerous in overdose), venlafaxine (higher suicidality signal) and paroxetine.',
        ],
      },
      {
        heading: 'Safe prescribing and monitoring',
        points: [
          'Boxed warning: under-25s have increased risk of suicidal thoughts and behaviour in the early weeks. Review weekly or fortnightly for the first 4 weeks.',
          'Start low: fluoxetine 10 mg daily, increase to 20 mg after 1–2 weeks if tolerated. Allow 4–6 weeks at a therapeutic dose before judging response.',
          'Watch for akathisia or agitation, activation or hypomania (screen for bipolar family history), GI upset, sexual side effects and serotonin syndrome with other serotonergic drugs.',
          'Prescribe limited quantities if there is overdose risk. Check for alcohol and other drug use.',
        ],
      },
      {
        heading: 'Culture, review and deprescribing',
        points: [
          'For Aboriginal and Torres Strait Islander young people, frame care around social and emotional wellbeing: connection to Country, culture, family and community. Involve Aboriginal health workers and community-controlled services.',
          'Continue the antidepressant for 6–12 months after remission. Then plan deprescribing at a low-stress time.',
          'Taper gradually over at least 4 weeks (longer if needed). Distinguish discontinuation symptoms (dizziness, "brain zaps", irritability) from relapse.',
          'Set shared, measurable goals such as school attendance, sleep and activities. Review the diagnosis if there is no response.',
        ],
      },
    ],
    redFlags: [
      'Active suicidal intent or plan, recent self-harm or access to means: urgent crisis team.',
      'New agitation, akathisia or impulsivity after starting an SSRI.',
      'Psychotic features, or mania or hypomania on treatment.',
      'Significant weight loss or restrictive eating (eating disorder).',
    ],
    examTips: [
      'Fluoxetine is first line. Avoid TCAs and venlafaxine in young people.',
      'Early, frequent review is the key safety step, and a common KFP answer.',
      'Confidentiality and its limits are a common KFP answer.',
    ],
    mcqs: [
      {
        stem: 'A 16-year-old has moderate-to-severe depression that has not responded to 8 sessions of CBT. Which medicine is most appropriate to start?',
        options: ['Amitriptyline 25 mg', 'Venlafaxine 75 mg', 'Fluoxetine 10 mg, increasing to 20 mg', 'Paroxetine 20 mg', 'Diazepam 5 mg'],
        answer: 2,
        explanation: 'Fluoxetine has the strongest evidence in adolescents. Starting low and titrating reduces activation side effects.',
      },
      {
        stem: 'When is the risk of emergent suicidal ideation highest after starting an SSRI in a young person?',
        options: ['Before starting', 'First few weeks and after dose changes', 'After 6 months', 'Only during tapering', 'There is no increased risk'],
        answer: 1,
        explanation: 'The signal for increased suicidal thoughts and behaviour in under-25s is concentrated in the early weeks and after dose changes. Review closely then.',
      },
      {
        stem: 'A 19-year-old started sertraline 2 weeks ago and now feels intensely restless, unable to sit still and more distressed. What is the most likely explanation?',
        options: ['Serotonin syndrome', 'Akathisia', 'Worsening depression only', 'Hyperthyroidism', 'Discontinuation syndrome'],
        answer: 1,
        explanation: 'Akathisia is an important SSRI adverse effect linked with increased suicide risk. Review urgently and reduce or stop the SSRI.',
      },
      {
        stem: 'A 17-year-old has been well for 9 months on fluoxetine 20 mg and wishes to stop during school holidays. What is the best advice?',
        options: [
          'Stop immediately',
          'Plan a gradual taper with monitoring for relapse',
          'Switch to venlafaxine',
          'Must continue lifelong',
          'Double dose for 2 weeks then stop',
        ],
        answer: 1,
        explanation: 'After 6–12 months of remission, deprescribing is appropriate, ideally at a low-stress time with a gradual taper and a relapse plan. Fluoxetine\'s long half-life makes discontinuation symptoms less likely.',
      },
      {
        stem: 'Which statement about confidentiality with a 15-year-old is most accurate?',
        options: [
          'Parents must always be informed of the consultation content',
          'Confidentiality is absolute regardless of risk',
          'Confidentiality is maintained unless there is a serious risk of harm to self or others or abuse',
          'A 15-year-old cannot consent to any treatment',
          'Confidentiality applies only after age 16',
        ],
        answer: 2,
        explanation: 'A mature minor can consent. Confidentiality is explained upfront along with its limits (risk and abuse).',
      },
    ],
    kfp: [
      {
        title: 'Callum is restless',
        scenario:
          'Callum, 18, started escitalopram 10 mg 10 days ago for depression. His mother phones worried: he is pacing, cannot sleep, seems more irritable and wrote a dark message on social media last night. Callum attends with her today.',
        questions: [
          {
            prompt: 'List the most important things to assess today.',
            limit: 'Up to 4',
            answers: [
              'Suicidal ideation, intent, plan and access to means',
              'Akathisia / agitation (motor restlessness, inner distress)',
              'Features of hypomania/mania (reduced need for sleep, grandiosity) and family history of bipolar',
              'Substance use and other serotonergic drugs (serotonin syndrome signs)',
            ],
          },
          {
            prompt: 'Callum has thoughts of death but no plan, and marked akathisia. List your management steps.',
            limit: 'Up to 4',
            answers: [
              'Reduce dose or cease escitalopram',
              'Develop a written safety plan with Callum and his mother; means restriction',
              'Close follow-up (within days) and after-hours crisis contacts',
              'Link to psychological therapy / headspace or youth mental health service; consider psychiatry input',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '630',
    label: 'Unit 630',
    date: 'Feb 2026',
    title: 'Rural medicine',
    specialty: 'Rural & Remote Health',
    alsoRelevant: ['Infectious Diseases', 'Mental Health', 'Aboriginal & Torres Strait Islander Health'],
    topics: [
      'Role and scope of the rural generalist',
      'Mental health and suicide in farming communities',
      'Zoonoses and tropical infections (Q fever, leptospirosis, melioidosis)',
      'Cognitive decline and ageing in place rurally',
      'STIs in remote communities',
      'Access, confidentiality and dual relationships',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2026/skin-health-managing-the-skin-microbiome',
    overview:
      'Rural GPs provide broad care with limited local resources and long distances to specialists. They often work in hospitals, emergency and procedural settings too. Good rural practice considers the social context (distance, cost, stoicism, dual relationships, farming life) and region-specific diseases. It uses telehealth and retrieval services and coordinates care over long distances.',
    sections: [
      {
        heading: 'Context of rural practice',
        points: [
          'The Modified Monash Model (MM1–MM7) classifies remoteness and determines workforce incentives and some MBS and training eligibility.',
          'Barriers include travel time and cost, fewer allied health and specialist services, and concerns about confidentiality in small communities.',
          'Dual relationships are common. The GP may be a neighbour, coach or customer. Set clear boundaries and protect privacy.',
          'Use telehealth, outreach specialists, the RFDS and retrieval services. Patient Assisted Travel Schemes help with travel costs.',
        ],
      },
      {
        heading: 'Rural mental health',
        points: [
          'Suicide rates are higher rurally, especially in men and farmers, with drought, financial stress and isolation as contributors.',
          'Access to firearms is higher. Ask about firearms in every suicide risk assessment and arrange safe storage or removal.',
          'Stoicism and stigma delay presentation. Take opportunistic chances (for example an injury visit) to ask about mood and alcohol.',
          'Resources include telehealth psychology, Better Access, rural mental health services, and farmer-specific support programs.',
        ],
      },
      {
        heading: 'Region-specific infections',
        points: [
          'Q fever (Coxiella burnetii): livestock and abattoir workers. Fever, headache, hepatitis, pneumonia. Diagnose with serology or PCR and treat with doxycycline. Pre-vaccination screening (serology + skin test) is required before Q-VAX.',
          'Leptospirosis: floodwater, cattle, dairy and banana workers. Fever, myalgia (calf), conjunctival suffusion, renal and liver involvement. Treat with doxycycline or IV penicillin.',
          'Melioidosis (Burkholderia pseudomallei): tropical north in the wet season. Diabetes, alcohol and CKD are risk factors. Presents as pneumonia, abscesses or sepsis. Needs IV meropenem or ceftazidime and urgent referral.',
          'Also consider Ross River and Barmah Forest virus, Murray Valley and Japanese encephalitis, scrub typhus, and snakebite first aid (pressure immobilisation).',
        ],
      },
      {
        heading: 'Comprehensive care examples',
        points: [
          'Cognitive decline: assess reversible causes (including pesticide or solvent exposure and alcohol), consider driving and firearm safety, and plan for ageing in place. My Aged Care assessments can be done remotely.',
          'Vaginal discharge in remote communities: consider trichomoniasis, chlamydia and gonorrhoea (higher prevalence). Use point-of-care testing and treat partners.',
          'Adolescent health: limited local services and confidentiality concerns. Consider telehealth headspace and school-based services.',
          'Stabilise, then retrieve: know local emergency protocols, and have regular skills training (ALS, obstetric emergencies).',
        ],
      },
    ],
    redFlags: [
      'Fever with sepsis in a diabetic patient in the tropical north during the wet season: melioidosis.',
      'Suicidal ideation with access to firearms.',
      'Snakebite with any systemic symptoms: pressure immobilisation and urgent transfer.',
      'Fever, jaundice and renal impairment after floodwater exposure: severe leptospirosis (Weil disease).',
    ],
    examTips: [
      'The KFP often asks what you can do locally before transfer. Answer with specific resources (RFDS, telehealth).',
      'Firearms questions are expected in rural mental health.',
      'Match the zoonosis to the occupation and region.',
    ],
    mcqs: [
      {
        stem: 'A 42-year-old abattoir worker has 1 week of fever, severe headache, myalgia and mildly raised transaminases. What is the most likely diagnosis?',
        options: ['Influenza', 'Q fever', 'Melioidosis', 'Ross River virus', 'Hepatitis A'],
        answer: 1,
        explanation: 'Q fever is an occupational zoonosis of abattoir and livestock workers. It presents as a flu-like illness with hepatitis or pneumonia. Treat with doxycycline.',
      },
      {
        stem: 'A 55-year-old man with type 2 diabetes in the Northern Territory presents in February with fever, cough and a liver abscess on ultrasound. Which empirical antibiotic is most appropriate?',
        options: ['Oral amoxicillin', 'IV meropenem (or ceftazidime)', 'Oral doxycycline', 'IV flucloxacillin', 'Oral ciprofloxacin'],
        answer: 1,
        explanation: 'Melioidosis must be covered with IV ceftazidime or meropenem. Diabetes and wet-season exposure in the tropical north are classic features.',
      },
      {
        stem: 'Before giving Q fever vaccine (Q-VAX), what must be done?',
        options: [
          'Nothing; give vaccine immediately',
          'Serology and skin test to exclude prior exposure',
          'Chest X-ray',
          'Liver function tests',
          'Tuberculin test',
        ],
        answer: 1,
        explanation: 'Pre-vaccination screening with serology and intradermal skin testing is required. Vaccinating previously sensitised people can cause severe local reactions.',
      },
      {
        stem: 'A 48-year-old farmer with depression discloses thoughts of suicide. He owns several rifles. What is the most important immediate intervention?',
        options: [
          'Start an SSRI and review in 4 weeks',
          'Arrange for firearms to be removed or securely stored away from him',
          'Refer to a dietitian',
          'Recommend a holiday',
          'Prescribe temazepam',
        ],
        answer: 1,
        explanation: 'Means restriction, especially firearms, is one of the most effective suicide prevention strategies. Combine it with a safety plan and urgent mental health support.',
      },
      {
        stem: 'A dairy farmer develops fever, calf pain and conjunctival suffusion after flooding. Creatinine is raised. What is the most likely diagnosis?',
        options: ['Leptospirosis', 'Dengue', 'Q fever', 'Barmah Forest virus', 'Rhabdomyolysis from exercise'],
        answer: 0,
        explanation: 'Leptospirosis follows exposure to animal urine or contaminated floodwater. Conjunctival suffusion, calf myalgia and renal and liver involvement are classic.',
      },
    ],
    kfp: [
      {
        title: 'Jake has a fever',
        scenario:
          'Jake, 27, works in a meatworks in rural Queensland. He has 6 days of fever to 39 °C, severe headache, sweats and a dry cough. He is 3 hours from the nearest regional hospital. Examination: T 38.9 °C, HR 104, BP 118/72, SpO2 95%, mild crackles right base.',
        questions: [
          {
            prompt: 'List the most likely diagnoses.',
            limit: 'Up to 3',
            answers: ['Q fever', 'Leptospirosis', 'Community-acquired pneumonia (other) / influenza'],
          },
          {
            prompt: 'List the investigations you would arrange.',
            limit: 'Up to 4',
            answers: [
              'Q fever serology (and PCR on blood if early)',
              'Leptospira serology/PCR',
              'FBC, UEC, LFT, CRP',
              'Chest X-ray ± blood cultures',
            ],
          },
          {
            prompt: 'What empirical treatment would you start while awaiting results?',
            limit: 'Up to 1',
            answers: ['Doxycycline 100 mg orally twice daily (covers Q fever, leptospirosis and atypical pneumonia)'],
          },
        ],
      },
    ],
  },
]

export default units
