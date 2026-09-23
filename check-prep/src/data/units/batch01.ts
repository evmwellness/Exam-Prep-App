import type { Unit } from '../../types'

const units: Unit[] = [
  {
    id: '637',
    label: 'Unit 637',
    date: 'Sep 2026',
    title: 'Community palliative care',
    specialty: 'Palliative Care',
    alsoRelevant: ['Aged Care', 'Oncology', 'Professional & Ethical Practice'],
    topics: [
      'Dying at home: planning and anticipatory medicines',
      'Shared care with community palliative care (CPC) services',
      'Malignant bowel obstruction',
      'Terminal delirium and agitation',
      'Breathlessness at end of life',
      'Palliative care in residential aged care',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2026/community-palliative-care',
    overview:
      'Most people say they would prefer to die at home, and the GP is central to making that happen. Good community palliative care means spotting who is deteriorating, talking early about goals of care, and writing anticipatory medicine orders before a crisis. It also means working alongside CPC teams, carers and aged care staff so that everyone knows the plan.',
    sections: [
      {
        heading: 'Recognise and plan',
        points: [
          'Use the "surprise question" ("Would I be surprised if this person died in the next 12 months?") and tools such as SPICT to identify people who may benefit from a palliative approach.',
          'Functional status (AKPS/ECOG) guides prognosis and referral. Declining function with weight loss and more admissions signals the last months of life.',
          'Hold an advance care planning conversation. Record the substitute decision-maker, preferred place of death, and the goals-of-care / resuscitation plan.',
          'Refer to a specialist or CPC service for complex symptoms, psychosocial or spiritual distress, carer burnout, or when a home death is planned.',
        ],
      },
      {
        heading: 'Anticipatory (just-in-case) medicines',
        points: [
          'Prescribe subcutaneous PRN medicines ahead of time for the four common end-of-life symptoms: pain/dyspnoea (opioid), nausea, agitation/delirium, and respiratory secretions.',
          'Typical opioid-naïve starting doses: morphine 2.5–5 mg SC q1–2h PRN. In renal impairment, use hydromorphone at reduced dose or fentanyl instead.',
          'Agitation: midazolam 2.5–5 mg SC PRN. Delirium: haloperidol 0.5–1 mg SC PRN. Noisy secretions: hyoscine butylbromide 20 mg SC PRN.',
          'Oral to SC morphine: the SC dose is roughly one-third to one-half of the oral dose. Continuous syringe drivers deliver the 24-hour dose.',
          'Leave written orders and a medication chart at home or in the facility. Make sure carers know how and when to call for help.',
        ],
      },
      {
        heading: 'Common scenarios',
        points: [
          'Malignant bowel obstruction: stop prokinetics (metoclopramide) if the obstruction is complete. Use hyoscine butylbromide, dexamethasone, octreotide and antiemetics such as haloperidol. Consider venting gastrostomy.',
          'Breathlessness: treat reversible causes. Low-dose opioid, a hand-held fan, positioning, and anxiolytic (midazolam/lorazepam) if panic contributes. Oxygen helps only when hypoxaemic.',
          'Terminal delirium: look for reversible causes (urinary retention, constipation, opioid toxicity, hypercalcaemia, infection). Use haloperidol first line and add midazolam for distress.',
          'Residential aged care: document goals of care, arrange PRN charts and a syringe driver plan. Consider RACF palliative care case conferencing items.',
        ],
      },
      {
        heading: 'Death at home',
        points: [
          'An expected death at home is not an emergency. Families do not need to call 000 or police. Give them written instructions on what to do.',
          'A registered medical practitioner (or, in some states, an RN) verifies the death. The GP completes the Medical Certificate of Cause of Death if the cause is known and the death is not reportable.',
          'Reportable deaths (unexpected, unnatural, violent, related to a procedure, or no known cause) go to the coroner.',
          'Arrange bereavement follow-up for carers. Carer strain and complicated grief are common.',
        ],
      },
    ],
    redFlags: [
      'Spinal cord compression (back pain plus new weakness, sensory level or sphincter change): give dexamethasone and refer urgently.',
      'Hypercalcaemia (confusion, constipation, polyuria) is treatable if in keeping with goals.',
      'SVC obstruction (facial swelling, distended neck veins, dyspnoea).',
      'Uncontrolled pain or opioid toxicity (myoclonus, drowsiness, pinpoint pupils).',
      'Catastrophic haemorrhage risk: plan dark towels and a crisis midazolam dose.',
    ],
    examTips: [
      'KFP answers must be specific. Write "morphine 2.5 mg SC q2h PRN", not just "analgesia".',
      'Remember renal function when choosing opioids. Morphine metabolites accumulate.',
      'Always include the carer and an advance care plan in management answers.',
    ],
    mcqs: [
      {
        stem: 'A 79-year-old man with metastatic prostate cancer is dying at home. His wife reports a loud "rattly" breathing sound; he appears comfortable and is unconscious. What is the most appropriate management?',
        options: [
          'Oropharyngeal suctioning every hour',
          'Reassure the family and give hyoscine butylbromide 20 mg SC PRN',
          'Start IV fluids for dehydration',
          'Furosemide 40 mg IV',
          'Transfer to hospital for chest X-ray',
        ],
        answer: 1,
        explanation:
          'Noisy respiratory secretions near death do not usually distress the patient. Explain this to the family, reposition him, and use an antimuscarinic (hyoscine butylbromide) early. Deep suctioning is distressing, and fluids may make secretions worse.',
      },
      {
        stem: 'Which of the following deaths at home is NOT required to be reported to the coroner?',
        options: [
          'Death after a fall with hip fracture two weeks earlier',
          'Death of a person with known terminal pancreatic cancer receiving palliative care, cause clear',
          'Death within 24 hours of an elective anaesthetic',
          'Death where the cause is unknown',
          'Death of a person in police custody',
        ],
        answer: 1,
        explanation:
          'An expected death from a known natural disease can be certified by the doctor. Deaths after injury (including falls), health procedures, or with unknown cause, and deaths in custody are reportable.',
      },
      {
        stem: 'A 70-year-old woman on oral morphine SR 60 mg twice daily can no longer swallow. What is a reasonable 24-hour subcutaneous morphine dose by syringe driver?',
        options: ['120 mg', '90 mg', '40–60 mg', '10 mg', '240 mg'],
        answer: 2,
        explanation:
          'Her total oral dose is 120 mg/24 h. SC morphine is roughly one-third to one-half of the oral dose, so 40–60 mg over 24 hours.',
      },
      {
        stem: 'A woman with ovarian cancer has complete malignant bowel obstruction with colicky pain and vomiting. Which medicine should be AVOIDED?',
        options: ['Hyoscine butylbromide', 'Octreotide', 'Metoclopramide', 'Dexamethasone', 'Haloperidol'],
        answer: 2,
        explanation:
          'Prokinetics such as metoclopramide can worsen colic and risk perforation in complete obstruction. They are acceptable only in partial obstruction without colic.',
      },
      {
        stem: 'A frail man with end-stage COPD and severe breathlessness at rest has SpO2 of 93% on room air. Which intervention has the best evidence for relieving his breathlessness?',
        options: [
          'Home oxygen at 2 L/min',
          'Low-dose oral morphine and a hand-held fan',
          'Nebulised salbutamol four-hourly',
          'Regular diazepam 10 mg',
          'Long-term prednisolone 50 mg',
        ],
        answer: 1,
        explanation:
          'Low-dose opioids (for example morphine 1–2.5 mg orally PRN or 10 mg/day SR) and airflow to the face reduce chronic breathlessness. Oxygen gives no extra benefit over air in people who are not hypoxaemic.',
      },
    ],
    kfp: [
      {
        title: 'Terry wants to die at home',
        scenario:
          'Terry, 68, has metastatic lung cancer with liver metastases. He is now bed-bound, eating little and sleeping most of the day. His wife Joan is his carer. Terry has clearly stated he wants to die at home. His eGFR is 25 mL/min/1.73m².',
        questions: [
          {
            prompt: 'List the most important steps to prepare for Terry\'s death at home.',
            limit: 'Up to 5',
            answers: [
              'Refer to / liaise with community palliative care service',
              'Document goals of care, not-for-resuscitation and advance care directive / substitute decision-maker',
              'Prescribe anticipatory SC medicines with written orders and medication chart',
              'Educate Joan on signs of dying and what to do at the time of death (no need to call 000)',
              'Arrange equipment (hospital bed, pressure care, continence aids) and carer support / respite',
            ],
          },
          {
            prompt: 'Which opioid would you prescribe for PRN pain and breathlessness given his renal function? Give drug, dose and route.',
            limit: 'Up to 2',
            answers: [
              'Hydromorphone 0.25–0.5 mg SC q1–2h PRN (or fentanyl 12.5–25 microgram SC PRN)',
              'Avoid morphine because of active metabolite accumulation in renal impairment',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '636',
    label: 'Unit 636',
    date: 'Aug 2026',
    title: 'Sexual health',
    specialty: 'Sexual & Reproductive Health',
    alsoRelevant: ['Infectious Diseases', "Women's Health", 'Preventive & Population Health'],
    topics: [
      'Syphilis: stages, serology and treatment',
      'Late-diagnosed HIV',
      'IUD complications and side effects',
      'Vulvodynia and sexual difficulties',
      'Sexual health in custodial settings',
      'The asymptomatic "STI check"',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2026/sexual-health',
    overview:
      'Australia has an ongoing infectious syphilis outbreak, and congenital syphilis cases and deaths have returned. GPs should test widely and interpret serology confidently. Treatment is prompt benzathine benzylpenicillin. Other core skills include recognising late HIV, managing IUD issues, and taking a sensitive sexual history.',
    sections: [
      {
        heading: 'Syphilis',
        points: [
          'Primary: a painless chancre with regional lymphadenopathy. Secondary: a rash including palms/soles, condylomata lata, mucous patches, alopecia. Latent disease has no symptoms. Neuro-, ocular and oto-syphilis can occur at ANY stage.',
          'Serology: a treponemal test (EIA/CMIA, TPPA) confirms infection and stays positive for life. RPR (non-treponemal) shows activity and is used to monitor treatment.',
          'Early syphilis (primary, secondary, early latent <2 years): benzathine benzylpenicillin 2.4 million units IM as a single dose. Late latent or unknown duration: 2.4 MU IM weekly for 3 weeks.',
          'Warn about the Jarisch–Herxheimer reaction (fever or flu-like illness within 24 hours). Syphilis is notifiable. Trace partners (3 months plus symptom duration for primary; longer for secondary/early latent).',
          'Success is a four-fold (two-dilution) fall in RPR by 12 months. Test in pregnancy at the first visit and again later in pregnancy according to current national/state guidance.',
        ],
      },
      {
        heading: 'Late-diagnosed HIV',
        points: [
          'Late diagnosis: CD4 <350 cells/µL. Advanced disease: CD4 <200 or an AIDS-defining illness.',
          'Missed opportunities include recurrent shingles, oral candida, unexplained weight loss, seborrhoeic dermatitis, thrombocytopenia, and a glandular-fever-like illness (seroconversion).',
          'Baseline tests: CD4, viral load, genotype resistance, HLA-B*5701, HBV/HCV, syphilis, TB screen, toxoplasma, CMV, cryptococcal antigen if CD4 <100, renal/liver function, lipids.',
          'Start ART promptly with an s100 prescriber or HIV specialist. Give cotrimoxazole PJP prophylaxis if CD4 <200. U=U: an undetectable viral load means no sexual transmission.',
        ],
      },
      {
        heading: 'IUD issues',
        points: [
          'Irregular bleeding is common in the first 3–6 months with an LNG-IUD. Rule out STI, pregnancy and displacement if it persists or is new.',
          'Missing threads: do a pregnancy test and advise back-up contraception, then arrange a pelvic ultrasound. Get an abdominal X-ray if the device is not in the uterus (possible perforation, about 1 in 1000).',
          'Expulsion risk is highest in the first year and postpartum. PID with an IUD in place: treat with antibiotics. Removal is not routinely required.',
          'Copper IUD: heavier, more painful periods. It is also the most effective emergency contraception (up to 5 days, or later if within 5 days of the earliest estimated ovulation).',
        ],
      },
      {
        heading: 'STI testing and other care',
        points: [
          'Asymptomatic check: chlamydia/gonorrhoea NAAT (self-collected vaginal swab or first-pass urine; add throat and anorectal swabs for men who have sex with men (MSM) and others by exposure), plus syphilis and HIV serology. Check hepatitis B immunity and vaccinate if needed.',
          'Chlamydia: doxycycline 100 mg bd for 7 days. Gonorrhoea: ceftriaxone 500 mg IM plus azithromycin 1 g orally (per Australian STI guidelines). Arrange test of cure for gonorrhoea, and retest for reinfection at 3 months.',
          'Offer HIV PrEP to eligible people. Manage vulvodynia (usually provoked vestibulodynia) with a biopsychosocial approach: vulval care, lubricant, pelvic floor physiotherapy, topical lidocaine, low-dose tricyclic, and psychosexual therapy.',
          'Custodial settings have high BBV and STI prevalence. Barriers include stigma and limited access to condoms and PrEP. Opt-out testing and hepatitis C treatment are effective.',
        ],
      },
    ],
    redFlags: [
      'Visual symptoms, hearing loss or cranial nerve palsy with positive syphilis serology: suspect neurosyphilis and refer the same day.',
      'Positive syphilis serology in pregnancy: treat urgently and notify.',
      'CD4 <200 with fever, cough or headache: think PJP or cryptococcal meningitis.',
      'Severe pelvic pain with an IUD (perforation, ectopic, PID with abscess).',
    ],
    examTips: [
      'Know the staging-based benzathine regimen and the 2-dilution RPR response.',
      'Contact tracing and notification are commonly examined KFP "management" answers.',
      'Always include a pregnancy test in any bleeding or pain question in a person who can become pregnant.',
    ],
    mcqs: [
      {
        stem: 'A 29-year-old man has a painless genital ulcer for 1 week. Syphilis EIA is reactive, TPPA reactive, and RPR 1:32. What is the most appropriate treatment?',
        options: [
          'Doxycycline 100 mg bd for 7 days',
          'Benzathine benzylpenicillin 2.4 million units IM, single dose',
          'Benzathine benzylpenicillin 2.4 million units IM weekly for 3 weeks',
          'Ceftriaxone 500 mg IM plus azithromycin 1 g orally',
          'IV benzylpenicillin for 14 days',
        ],
        answer: 1,
        explanation: 'Primary syphilis is treated with a single IM dose of benzathine benzylpenicillin. The 3-weekly course is for late latent or unknown duration. IV therapy is for neurosyphilis.',
      },
      {
        stem: 'Twelve months after treatment for secondary syphilis, which RPR result indicates adequate response if baseline was 1:64?',
        options: ['1:64', '1:32', '1:16 or lower', 'Reactive TPPA', 'Negative EIA'],
        answer: 2,
        explanation: 'An adequate response is a four-fold (two-dilution) fall in RPR, i.e. 1:64 to 1:16 or lower. Treponemal tests remain positive for life.',
      },
      {
        stem: 'A 35-year-old woman presents with recurrent oral candida, weight loss and herpes zoster last year. HIV test is positive with CD4 150 cells/µL. Besides ART referral, which is most important to start?',
        options: [
          'Azithromycin weekly',
          'Trimethoprim-sulfamethoxazole (cotrimoxazole) prophylaxis',
          'Fluconazole prophylaxis',
          'Isoniazid for 9 months without testing',
          'Valaciclovir suppression',
        ],
        answer: 1,
        explanation: 'CD4 <200 is the threshold for PJP prophylaxis, and cotrimoxazole also protects against toxoplasmosis. MAC prophylaxis is not needed if ART starts promptly.',
      },
      {
        stem: 'A woman cannot feel her copper IUD threads 2 years after insertion. Urine hCG is negative. What is the next most appropriate step?',
        options: [
          'Reassure, no action',
          'Pelvic ultrasound and advise back-up contraception',
          'Immediate hysteroscopy',
          'CT abdomen',
          'Insert a second IUD',
        ],
        answer: 1,
        explanation: 'Missing threads need a pregnancy test, back-up contraception and pelvic ultrasound. Get an abdominal X-ray if ultrasound cannot find the device, to look for extra-uterine migration.',
      },
      {
        stem: 'A 24-year-old woman has a positive gonorrhoea NAAT from a throat swab. After ceftriaxone 500 mg IM plus azithromycin 1 g, what follow-up is recommended?',
        options: [
          'No follow-up needed',
          'Test of cure, particularly for pharyngeal infection, and retest at 3 months',
          'Repeat serology at 6 weeks',
          'Weekly swabs for one month',
          'Blood cultures',
        ],
        answer: 1,
        explanation: 'Pharyngeal gonorrhoea is harder to eradicate and resistance is a concern, so test of cure is recommended (NAAT about 2 weeks after treatment). Retest at 3 months for reinfection.',
      },
    ],
    kfp: [
      {
        title: 'Tuân feels tired and has a new rash',
        scenario:
          'Tuân, 31, a man who has sex with men, presents with 2 weeks of fatigue, sore throat and a non-itchy rash on his trunk, palms and soles. He had condomless anal sex with several casual partners in the last 3 months.',
        questions: [
          {
            prompt: 'List the most likely diagnoses to consider.',
            limit: 'Up to 3',
            answers: ['Secondary syphilis', 'Primary HIV infection (seroconversion)', 'Other viral exanthem (eg EBV, mpox)'],
          },
          {
            prompt: 'List the investigations you would order today.',
            limit: 'Up to 5',
            answers: [
              'Syphilis serology (treponemal + RPR)',
              'HIV antigen/antibody (4th generation) ± HIV viral load',
              'Chlamydia/gonorrhoea NAAT from throat, anorectal swab and urine',
              'Hepatitis B and C serology (and hep A immunity)',
              'Syphilis PCR of any lesion if present',
            ],
          },
          {
            prompt: 'Syphilis is confirmed. List key management steps.',
            limit: 'Up to 4',
            answers: [
              'Benzathine benzylpenicillin 2.4 MU IM single dose',
              'Warn of Jarisch–Herxheimer reaction',
              'Notify public health and contact trace partners',
              'Repeat RPR at 3, 6 and 12 months; offer PrEP if HIV negative',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '635',
    label: 'Unit 635',
    date: 'Jul 2026',
    title: 'Pancreatic conditions: Assessment and management',
    specialty: 'Gastroenterology & Hepatology',
    alsoRelevant: ['Oncology', 'Endocrinology & Metabolic', 'Genetics'],
    topics: [
      'Incidental pancreatic cysts',
      'Recurrent and chronic pancreatitis',
      'Pancreatic exocrine insufficiency (PEI)',
      'Type 3c (pancreatogenic) diabetes',
      'Familial pancreatic cancer risk and genetic testing',
      'Red flags for pancreatic ductal adenocarcinoma',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2026/pancreatic-conditions-assessment-and-management',
    overview:
      'Pancreatic problems in general practice range from common incidental cysts to chronic pancreatitis with maldigestion and diabetes. Pancreatic ductal adenocarcinoma is uncommon, but its symptoms are vague and it is often diagnosed late. The GP\'s role is to risk-stratify, treat PEI and diabetes well, and refer red flags and high-risk families early.',
    sections: [
      {
        heading: 'Pancreatic cysts',
        points: [
          'Cysts are common on CT/MRI and increase with age. Most are benign or low-risk: serous cystadenoma, pseudocyst, or branch-duct IPMN.',
          'Mucinous cysts (IPMN, mucinous cystic neoplasm) have malignant potential. MRI/MRCP is the preferred imaging for characterisation and surveillance.',
          'Worrisome features: cyst ≥3 cm, enhancing mural nodule <5 mm, thickened or enhancing walls, main duct 5–9 mm, growth ≥5 mm in 2 years, raised CA19-9, new diabetes, pancreatitis. These need EUS or specialist review.',
          'High-risk stigmata: obstructive jaundice with a cyst in the pancreatic head, enhancing solid component ≥5 mm, main duct ≥10 mm. Refer urgently to a surgeon.',
        ],
      },
      {
        heading: 'Pancreatitis',
        points: [
          'Diagnose acute pancreatitis with 2 of 3: typical epigastric pain radiating to the back; lipase ≥3× ULN; imaging features.',
          'Common causes are gallstones and alcohol. Also check triglycerides (usually >11 mmol/L), calcium, medicines (azathioprine, valproate, thiazides, GLP-1 RAs), post-ERCP, autoimmune (IgG4), and genetic (PRSS1, SPINK1, CFTR).',
          'After a first "idiopathic" episode in someone over 40, look for an underlying tumour (CT/MRI, EUS).',
          'Chronic pancreatitis causes pain, PEI and diabetes, and increases pancreatic cancer risk. Smoking and alcohol cessation are key.',
        ],
      },
      {
        heading: 'PEI and type 3c diabetes',
        points: [
          'PEI features: steatorrhoea (oily, floating, hard-to-flush stools), bloating, weight loss, and fat-soluble vitamin deficiency (A, D, E, K).',
          'Faecal elastase <200 µg/g suggests PEI (<100 severe). The result can be falsely low with watery stool.',
          'Pancreatic enzyme replacement (PERT): about 25,000–50,000 lipase units with each main meal and half with snacks, taken with the first bite. Titrate up, and add a PPI if the response is poor.',
          'Type 3c diabetes: both insulin and glucagon are lost, so hypoglycaemia risk is higher. Metformin is reasonable early, but many need insulin. Monitor bone density and vitamin levels.',
        ],
      },
      {
        heading: 'Familial risk and red flags',
        points: [
          'High-risk groups: ≥2 relatives with pancreatic cancer (at least one first-degree), and germline BRCA2, BRCA1, PALB2, ATM, Lynch, CDKN2A (FAMMM) or STK11 (Peutz–Jeghers) carriers.',
          'Refer to a familial cancer service for genetic testing, cascade testing of relatives, and surveillance (annual MRI/EUS, usually from age 50, or 10 years before the youngest affected relative).',
          'Red flags for pancreatic cancer: painless jaundice, unexplained weight loss, new epigastric or back pain, new-onset diabetes over 50 with weight loss, steatorrhoea, unexplained VTE.',
          'Investigate with pancreatic protocol CT. CA19-9 is not a screening test (it is also raised in cholestasis and is not produced in about 10% of people).',
        ],
      },
    ],
    redFlags: [
      'Painless obstructive jaundice with or without a palpable gallbladder (Courvoisier sign).',
      'New diabetes over 50 with weight loss and no other explanation.',
      'Cyst with a solid enhancing component or dilated main pancreatic duct ≥10 mm.',
      'Recurrent "idiopathic" pancreatitis in an older adult.',
    ],
    examTips: [
      'For PEI, remember the PERT timing (with meals) and that fat restriction is NOT recommended.',
      'Type 3c diabetes is a common trap: hypoglycaemia risk is high.',
      'Know which genes trigger familial cancer referral.',
    ],
    mcqs: [
      {
        stem: 'A 62-year-old man has an incidental 12 mm branch-duct IPMN on CT with no worrisome features. What is the most appropriate next step?',
        options: [
          'Immediate Whipple procedure',
          'Discharge, no follow-up',
          'Surveillance with MRI/MRCP according to size-based intervals',
          'CA19-9 every month',
          'Endoscopic ultrasound with fine needle aspiration today',
        ],
        answer: 2,
        explanation: 'Small branch-duct IPMNs without worrisome features are managed with MRI surveillance. EUS is reserved for worrisome features.',
      },
      {
        stem: 'A 55-year-old man with chronic alcohol-related pancreatitis has pale, oily, foul-smelling stools and 6 kg weight loss. Faecal elastase is 60 µg/g. What is the most appropriate management?',
        options: [
          'Low-fat diet <20 g/day',
          'Pancreatic enzyme replacement taken with meals and snacks',
          'Loperamide',
          'Cholestyramine',
          'Metronidazole',
        ],
        answer: 1,
        explanation: 'Severe PEI needs PERT with meals. Fat restriction is not recommended, as it worsens malnutrition.',
      },
      {
        stem: 'Which feature best distinguishes type 3c diabetes from type 2 diabetes?',
        options: [
          'Strong association with obesity',
          'Increased risk of hypoglycaemia due to loss of glucagon',
          'Presence of GAD antibodies',
          'Insulin resistance as the main mechanism',
          'Onset always before age 30',
        ],
        answer: 1,
        explanation: 'Destruction of the pancreas reduces both insulin and glucagon, so hypoglycaemia is more likely and less easily corrected.',
      },
      {
        stem: 'A 45-year-old woman whose mother and maternal aunt had pancreatic cancer asks about her risk. What is the best next step?',
        options: [
          'Order CA19-9',
          'Reassure: pancreatic cancer is not hereditary',
          'Refer to a familial cancer service for genetic assessment',
          'Annual abdominal ultrasound',
          'Colonoscopy',
        ],
        answer: 2,
        explanation: 'Two affected relatives including a first-degree relative meets familial risk criteria. Refer for germline testing and consideration of surveillance.',
      },
      {
        stem: 'A 48-year-old woman has her first episode of acute pancreatitis. She drinks minimal alcohol. Ultrasound shows no gallstones. Which blood test is most important to add?',
        options: ['Serum amylase', 'Fasting triglycerides and calcium', 'Serum IgE', 'Thyroid function', 'Vitamin B12'],
        answer: 1,
        explanation: 'Hypertriglyceridaemia and hypercalcaemia are key reversible causes of non-gallstone, non-alcohol pancreatitis.',
      },
    ],
    kfp: [
      {
        title: 'Owen has persistent bloating and oily stools',
        scenario:
          'Owen, 58, has had 3 admissions for acute pancreatitis related to alcohol over 5 years. He now reports bulky, oily stools that are hard to flush, bloating and 7 kg weight loss. He has cut down to 10 standard drinks per week and smokes 15 cigarettes/day.',
        questions: [
          {
            prompt: 'List the investigations you would order.',
            limit: 'Up to 5',
            answers: [
              'Faecal elastase',
              'HbA1c / fasting glucose',
              'Fat-soluble vitamins (A, D, E), INR, B12, iron studies, albumin',
              'CT or MRI pancreas (to assess chronic pancreatitis and exclude malignancy)',
              'LFTs, lipase, coeliac serology',
            ],
          },
          {
            prompt: 'Faecal elastase is 45 µg/g. List the key elements of management.',
            limit: 'Up to 5',
            answers: [
              'Pancreatic enzyme replacement therapy with every meal and snack, titrated to symptoms',
              'Add PPI if inadequate response',
              'Normal-fat diet with dietitian review; vitamin supplementation',
              'Smoking and alcohol cessation support',
              'Screen for diabetes and bone density (DXA)',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'S6',
    label: 'Supplement 6',
    date: 'Jun 2026',
    title: 'Menopause',
    specialty: "Women's Health",
    alsoRelevant: ['Endocrinology & Metabolic', 'Preventive & Population Health', 'Aboriginal & Torres Strait Islander Health'],
    topics: [
      'Diagnosing perimenopause and menopause',
      'Menopausal hormone therapy (MHT): benefits and risks',
      'Non-hormonal treatment of vasomotor symptoms',
      'Genitourinary syndrome of menopause',
      'Premature ovarian insufficiency',
      'Culturally safe menopause care',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2026/menopause',
    overview:
      'Menopause is a clinical diagnosis in women over 45. For most women under 60, or within 10 years of their final period, MHT is the most effective treatment for vasomotor symptoms, and its benefits outweigh its risks. Choosing a regimen means matching it to uterine status, VTE risk and preference, then reviewing regularly using shared decision-making.',
    sections: [
      {
        heading: 'Diagnosis',
        points: [
          'Menopause is 12 months without a period (average age 51). Perimenopause means a changing cycle plus symptoms.',
          'Over 45 with typical symptoms, the diagnosis is clinical. FSH is not needed and fluctuates in perimenopause.',
          'Premature ovarian insufficiency (under 40): oligo/amenorrhoea for ≥4 months plus raised FSH (>25 IU/L). Offer hormone therapy at least until the average age of menopause, and investigate the cause (karyotype, FMR1 premutation, autoimmune).',
          'Early menopause (40–45) also increases cardiovascular and bone risk, so hormone therapy is recommended unless contraindicated.',
        ],
      },
      {
        heading: 'MHT essentials',
        points: [
          'Women with a uterus need a progestogen with oestrogen (micronised progesterone, dydrogesterone, norethisterone, or a 52 mg LNG-IUD) to prevent endometrial hyperplasia.',
          'Transdermal oestradiol does not increase VTE risk. Prefer it with obesity, VTE risk factors, migraine, hypertriglyceridaemia or gallbladder disease.',
          'Breast cancer: combined MHT carries a small, duration-related increase in risk. Oestrogen-only therapy has little or no increase. Micronised progesterone or dydrogesterone may carry lower risk than other progestogens.',
          'Contraindications: current or past breast cancer, oestrogen-dependent cancer, undiagnosed vaginal bleeding, active VTE, active liver disease, recent MI/stroke.',
          'Review at 3 months and then yearly. There is no mandatory stop date; decide individually. Tibolone is an alternative (not for women under 60 with stroke risk factors).',
        ],
      },
      {
        heading: 'Non-hormonal and GSM',
        points: [
          'Vasomotor options: fezolinetant (NK3 receptor antagonist; check LFTs), SSRIs/SNRIs (escitalopram, venlafaxine, desvenlafaxine; avoid paroxetine and fluoxetine with tamoxifen), gabapentin, clonidine, CBT and clinical hypnosis.',
          'Weak or no evidence for most herbal products. Black cohosh is linked to liver toxicity.',
          'Genitourinary syndrome of menopause: vaginal moisturisers and lubricants, plus low-dose vaginal oestrogen (no progestogen needed). Vaginal oestrogen is generally acceptable for GSM even after breast cancer, in discussion with oncology.',
          'Contraception: continue until 12 months of amenorrhoea over age 50, or 24 months under 50 (or to age 55).',
        ],
      },
      {
        heading: 'Long-term health and culturally safe care',
        points: [
          'Check CVD risk, bone health (DXA if risk factors), weight, pelvic floor and mood. MHT prevents osteoporotic fractures.',
          'Keep up screening: cervical (to 74), breast (BreastScreen from 50), bowel (from 45).',
          'Experiences and language of menopause vary across cultures. Use interpreters, involve Aboriginal health workers, and ask what the woman understands and expects.',
          'Screen for mood and sleep disturbance. Perimenopause is a time of increased depression risk.',
        ],
      },
    ],
    redFlags: [
      'Postmenopausal bleeding: needs transvaginal ultrasound (endometrial thickness >4 mm) and gynaecology referral if thickened or persistent.',
      'Unscheduled bleeding on MHT beyond 6 months of starting.',
      'New breast lump or VTE symptoms on MHT.',
      'Menopausal symptoms under 40: investigate for POI.',
    ],
    examTips: [
      'Commonly examined: "uterus = add progestogen", and "transdermal = no VTE increase".',
      'FSH is only useful under 45, and rarely even then.',
      'Know which SSRIs to avoid with tamoxifen (CYP2D6 inhibitors).',
    ],
    mcqs: [
      {
        stem: 'A 51-year-old woman with a BMI of 36 and prior provoked DVT has severe hot flushes. She has an intact uterus. Which MHT regimen is most appropriate?',
        options: [
          'Oral conjugated oestrogen alone',
          'Transdermal oestradiol plus oral micronised progesterone',
          'Oral oestradiol plus norethisterone',
          'Tibolone',
          'Transdermal oestradiol alone',
        ],
        answer: 1,
        explanation: 'Transdermal oestradiol avoids first-pass hepatic effects and does not raise VTE risk. With an intact uterus a progestogen is essential.',
      },
      {
        stem: 'A 47-year-old woman has irregular cycles and night sweats. What is the most appropriate way to diagnose perimenopause?',
        options: ['Single FSH level', 'AMH level', 'Clinical diagnosis based on age and symptoms', 'Pelvic ultrasound', 'Oestradiol level'],
        answer: 2,
        explanation: 'Over 45 with typical symptoms, perimenopause is a clinical diagnosis. Hormones fluctuate widely and are not helpful.',
      },
      {
        stem: 'A 52-year-old woman taking tamoxifen for breast cancer has troublesome hot flushes. Which medicine should be AVOIDED?',
        options: ['Venlafaxine', 'Gabapentin', 'Paroxetine', 'Clonidine', 'Desvenlafaxine'],
        answer: 2,
        explanation: 'Paroxetine (and fluoxetine) strongly inhibit CYP2D6 and reduce conversion of tamoxifen to its active metabolite endoxifen.',
      },
      {
        stem: 'A 38-year-old woman has 6 months of amenorrhoea and hot flushes. FSH is 68 IU/L; pregnancy test negative. What is the most important management principle?',
        options: [
          'Reassure, no treatment until 51',
          'Hormone therapy (MHT or COC) at least until average age of menopause',
          'Start bisphosphonate',
          'Clomiphene',
          'Repeat FSH in 12 months only',
        ],
        answer: 1,
        explanation: 'Premature ovarian insufficiency increases CVD, osteoporosis and dementia risk. Hormone replacement is recommended until about 51 unless contraindicated. Also investigate the cause.',
      },
      {
        stem: 'A 64-year-old woman has vaginal dryness and dyspareunia; no vasomotor symptoms. She has an intact uterus. What is the best first-line pharmacological option?',
        options: [
          'Oral combined MHT',
          'Low-dose vaginal oestriol or oestradiol without progestogen',
          'Vaginal oestrogen plus oral progesterone',
          'Tibolone',
          'Oral oestradiol alone',
        ],
        answer: 1,
        explanation: 'Low-dose vaginal oestrogen treats GSM with minimal systemic absorption. Progestogen protection is not required.',
      },
    ],
    kfp: [
      {
        title: 'Leanne feels hot',
        scenario:
          'Leanne, 50, has had 8 months of hot flushes (10/day) and poor sleep. Last period was 7 months ago. She is a non-smoker, BP 128/80, BMI 27. Her mother had a hip fracture at 72. No personal or family history of breast cancer or VTE.',
        questions: [
          {
            prompt: 'List the most important elements of your assessment before discussing MHT.',
            limit: 'Up to 5',
            answers: [
              'Breast cancer risk (family history, prior breast disease) and up-to-date mammogram',
              'VTE, stroke, cardiovascular and liver disease history',
              'Bleeding pattern and any abnormal bleeding',
              'Cervical screening status and mood/sleep assessment',
              'Contraceptive needs and patient preferences/goals',
            ],
          },
          {
            prompt: 'Leanne chooses MHT. Write an appropriate regimen.',
            limit: 'Up to 2',
            answers: [
              'Transdermal (or oral) oestradiol, low-moderate dose, e.g. oestradiol gel 1 mg daily',
              'Plus progestogen for endometrial protection, e.g. micronised progesterone 100 mg nightly (continuous) or 200 mg for 12–14 days/month (cyclical) — or 52 mg LNG-IUD',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '634',
    label: 'Unit 634',
    date: 'Jun 2026',
    title: 'Lipoedema',
    specialty: "Women's Health",
    alsoRelevant: ['Dermatology', 'Endocrinology & Metabolic', 'Mental Health'],
    topics: [
      'Clinical features of lipoedema vs obesity and lymphoedema',
      'Stages and types of lipoedema',
      'Lipolymphoedema',
      'Conservative management and surgical referral',
      'Comorbidities: recurrent cellulitis, venous disease, obesity',
      'Psychosocial impact and weight stigma',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2026/lipoedema',
    overview:
      'Lipoedema is a chronic, progressive disorder of disproportionate, painful subcutaneous fat. It affects almost only women and is often dismissed as obesity. Recognising it validates the patient\'s experience and enables compression, exercise and comorbidity management. Selected patients can be referred for lymph-sparing liposuction.',
    sections: [
      {
        heading: 'Recognition',
        points: [
          'Bilateral, symmetrical enlargement of the legs (and often arms), sparing the hands and feet. This gives a "cuff" or "bracelet" sign at the ankles.',
          'The tissue is painful and tender, bruises easily and feels heavy. Onset or worsening at puberty, pregnancy or menopause. Often there is a family history.',
          'The disproportionate fat does not reduce with calorie restriction, although coexisting obesity may.',
          'Stemmer sign (inability to pinch skin at the base of the second toe) is NEGATIVE in pure lipoedema and POSITIVE in lymphoedema.',
        ],
      },
      {
        heading: 'Stages, types and differentials',
        points: [
          'Stages reflect skin and tissue: 1 = smooth skin with fine nodules; 2 = uneven skin with larger nodules; 3 = large lobules and overhanging tissue; 4 = lipolymphoedema.',
          'Types describe location: I pelvis/buttocks, II hips to knees, III hips to ankles, IV arms, V lower legs only.',
          'Differentials: obesity (feet involved, not tender), primary or secondary lymphoedema (pitting, often unilateral, feet involved), chronic venous insufficiency, hypothyroidism, Cushing syndrome, medicine-induced oedema.',
          'Investigations are to exclude other causes: TFTs, renal/liver function, albumin, glucose/HbA1c, and venous duplex if varicosities are present. Lymphoscintigraphy is used if lymphoedema is suspected.',
        ],
      },
      {
        heading: 'Management',
        points: [
          'Validate the diagnosis and address weight stigma. Screen for depression, anxiety and disordered eating.',
          'Well-fitted compression garments (flat-knit for larger limbs or lymphoedema) reduce pain and heaviness.',
          'Low-impact exercise such as aqua-based activity, cycling and walking. Refer to physiotherapy or an exercise physiologist, and to a dietitian for an anti-inflammatory, whole-food pattern.',
          'Treat coexisting obesity and insulin resistance (including pharmacotherapy or bariatric options where indicated). This improves function even though lipoedema fat is resistant.',
          'Manual lymphatic drainage and complete decongestive therapy for lipolymphoedema. Refer for lymph-sparing (tumescent or water-assisted) liposuction when conservative care fails and function is impaired.',
        ],
      },
      {
        heading: 'Comorbidities',
        points: [
          'Recurrent cellulitis: treat promptly. Consider prophylaxis (for example phenoxymethylpenicillin) after ≥2 episodes a year, and manage skin care and tinea.',
          'Venous insufficiency, joint hypermobility and knee osteoarthritis (from altered gait) are common.',
          'Pain management: simple analgesia and physical therapies. No medicine has been shown to reduce lipoedema tissue.',
          'Mobility and falls risk increase at later stages. Consider an NDIS or occupational therapy assessment.',
        ],
      },
    ],
    redFlags: [
      'Unilateral leg swelling: exclude DVT.',
      'Rapidly progressive swelling with systemic symptoms: exclude cardiac, renal or hepatic causes, or malignancy.',
      'Fever with a hot, spreading erythematous leg: cellulitis, which may need IV therapy.',
      'Signs of an eating disorder in someone repeatedly dieting without effect.',
    ],
    examTips: [
      'Feet spared plus tenderness plus a negative Stemmer sign point to lipoedema.',
      'Lipoedema is NOT oedema, so diuretics are ineffective.',
      'Always consider the psychosocial burden.',
    ],
    mcqs: [
      {
        stem: 'A 34-year-old woman has symmetrical enlargement of both legs from hips to ankles since puberty, with tenderness and easy bruising. Feet are spared; Stemmer sign is negative. What is the most likely diagnosis?',
        options: ['Primary lymphoedema', 'Lipoedema', 'Chronic venous insufficiency', 'Myxoedema', 'Simple obesity'],
        answer: 1,
        explanation: 'Symmetrical, tender, disproportionate fat that spares the feet, with a negative Stemmer sign, is characteristic of lipoedema.',
      },
      {
        stem: 'Which treatment is NOT effective for lipoedema?',
        options: ['Compression garments', 'Furosemide', 'Aquatic exercise', 'Lymph-sparing liposuction', 'Manual lymphatic drainage for lipolymphoedema'],
        answer: 1,
        explanation: 'Lipoedema is a fat disorder, not fluid retention. Diuretics do not help and can cause harm.',
      },
      {
        stem: 'A woman with stage 3 lipoedema has had 3 episodes of cellulitis in 12 months. In addition to skin care, what is the most appropriate intervention?',
        options: [
          'No action',
          'Long-term prophylactic phenoxymethylpenicillin',
          'Topical mupirocin to legs',
          'Monthly IV ceftriaxone',
          'Oral fluconazole',
        ],
        answer: 1,
        explanation: 'Recurrent cellulitis (≥2 episodes/year) warrants antibiotic prophylaxis, typically phenoxymethylpenicillin 250–500 mg bd, plus treatment of tinea and lymphoedema.',
      },
      {
        stem: 'A positive Stemmer sign in a patient with lipoedema suggests:',
        options: ['Venous thrombosis', 'Development of lipolymphoedema', 'Hypothyroidism', 'Cellulitis', 'Pure stage 1 lipoedema'],
        answer: 1,
        explanation: 'Stemmer sign indicates lymphoedema. In lipoedema this means progression to lipolymphoedema, which needs decongestive therapy.',
      },
      {
        stem: 'Which of the following is most characteristic of lipoedema?',
        options: [
          'Predominantly affects men',
          'Unilateral onset after surgery',
          'Onset around hormonal change (puberty, pregnancy, menopause)',
          'Rapid response to calorie restriction',
          'Pitting oedema of the feet',
        ],
        answer: 2,
        explanation: 'Lipoedema almost exclusively affects women, typically starting or worsening at times of hormonal change, and is resistant to dieting.',
      },
    ],
    kfp: [
      {
        title: 'Chloe thinks she has lipoedema',
        scenario:
          'Chloe, 29, has "always had big legs" that are painful to touch and bruise easily despite years of dieting. Her mother has similar legs. She has read about lipoedema online and is tearful, saying previous doctors told her to "just lose weight".',
        questions: [
          {
            prompt: 'List the key examination findings that would support lipoedema.',
            limit: 'Up to 4',
            answers: [
              'Bilateral symmetrical disproportionate fat of legs ± arms',
              'Sparing of feet/hands with cuff sign at ankles',
              'Tenderness / pain on palpation and bruising',
              'Negative Stemmer sign; non-pitting',
            ],
          },
          {
            prompt: 'List your initial management steps.',
            limit: 'Up to 5',
            answers: [
              'Validate diagnosis, explain condition, avoid weight stigma',
              'Screen for depression, anxiety and disordered eating',
              'Prescribe/refer for fitted compression garments',
              'Refer physiotherapist / exercise physiologist for low-impact exercise (eg aquatic)',
              'Dietitian review; manage comorbidities; consider vascular/lymphoedema specialist referral',
            ],
          },
        ],
      },
    ],
  },
]

export default units
