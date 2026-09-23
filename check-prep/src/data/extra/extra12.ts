import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  '609': {
    sections: [
      {
        heading: 'Types of dementia and their features',
        points: [
          'Alzheimer disease (about 60–70%): gradual onset, early episodic memory loss (repeating questions, misplacing items), then language, visuospatial and executive decline.',
          'Vascular dementia: stepwise decline, or gradual with small vessel disease. Executive dysfunction, slowed thinking, gait problems, focal signs, vascular risk factors. It often coexists with Alzheimer disease (mixed dementia).',
          'Dementia with Lewy bodies: fluctuating cognition, visual hallucinations, REM sleep behaviour disorder, parkinsonism, and severe sensitivity to antipsychotics (avoid haloperidol).',
          'Frontotemporal dementia: younger onset (45–65). Behavioural variant (disinhibition, apathy, loss of empathy, compulsive or hyperoral behaviours) or language variants (progressive aphasia).',
          'Parkinson disease dementia (after established PD), alcohol-related brain injury, and rapidly progressive dementias (CJD, autoimmune encephalitis) need specialist evaluation.',
        ],
      },
      {
        heading: 'Choosing and using cognitive tools',
        points: [
          'MoCA (30 points; below 26 abnormal, adjust for low education): sensitive for MCI and executive dysfunction. Takes about 10 minutes.',
          'MMSE (30 points): less sensitive for MCI. Used for PBS criteria for cholinesterase inhibitors (score ≥10).',
          'GPCOG: brief, with a patient section and informant questions. Designed for general practice.',
          'RUDAS (Rowland Universal Dementia Assessment Scale, 30 points; below 23 suggests impairment): minimises cultural and educational bias. Use with CALD patients through an interpreter.',
          'KICA-Cog (Kimberley Indigenous Cognitive Assessment): for Aboriginal and Torres Strait Islander people in remote areas. Includes a carer section. Modified versions exist for urban and regional settings.',
          'Tools support but do not make the diagnosis. Combine them with history, collateral information, function and investigations.',
        ],
      },
      {
        heading: 'Cognitive assessment in Aboriginal and Torres Strait Islander peoples',
        points: [
          'Dementia prevalence is 3–5 times higher, with earlier onset (often in the 50s and 60s).',
          'Risk factors include head injury, stroke, diabetes, hypertension, smoking, alcohol, childhood adversity, and social disadvantage associated with colonisation.',
          'Cultural considerations: family and community involvement, yarning-style conversations, a trusted Aboriginal health worker, appropriate language, and avoiding culturally inappropriate test items.',
          'Stigma and fear of "being taken away" may delay presentation. Emphasise support to stay on Country and with family.',
          'Services: ACCHOs, Dementia Australia\'s First Nations programs, NATSIFACP (National Aboriginal and Torres Strait Islander Flexible Aged Care Program), and My Aged Care with culturally safe assessors.',
        ],
      },
      {
        heading: 'Cognitive concerns in younger people',
        points: [
          'Common causes of cognitive complaints in people under 65: depression, anxiety, stress and burnout, sleep disorders (OSA, insomnia), medicines, alcohol and substances, perimenopause, ADHD, thyroid and B12 problems.',
          '"Worried well" and functional cognitive disorder: preoccupation with memory lapses, inconsistent performance, preserved function. Reassurance, managing contributors and review.',
          'Red flags for younger-onset dementia: progressive decline noticed by others, behaviour or personality change, language decline, loss of work performance, family history of early dementia.',
          'Workup: full bloods (including HIV and syphilis if at risk), MRI brain, neuropsychological testing, and referral to a younger-onset dementia service or neurology. Consider genetic testing (for example FTD genes, early Alzheimer genes) with genetic counselling.',
          'Supports: NDIS (under 65), Younger Onset Dementia Key Worker programs, workplace and financial planning, and support for children in the family.',
        ],
      },
      {
        heading: 'Mild cognitive impairment and ongoing review',
        points: [
          'MCI: a concern about cognition, objective impairment in one or more domains (below expected on testing), preserved independence in daily activities, and not dementia.',
          'About 10–15% progress to dementia each year. Many remain stable or improve, especially when there are reversible contributors (depression, sleep, medicines).',
          'Management: treat vascular risk factors, hearing aids, exercise (aerobic and resistance), cognitive and social engagement, sleep, and a Mediterranean-style diet. Review medicines (anticholinergics, benzodiazepines).',
          'There is no PBS-subsidised drug for MCI. Cholinesterase inhibitors are not recommended for MCI. Anti-amyloid antibodies (for example donanemab) are approved for early Alzheimer disease in specialist settings with amyloid confirmation and MRI monitoring.',
          'Review every 6–12 months: repeat the same cognitive test, check function (IADLs) and gather collateral history. Plan ahead: enduring power of attorney, advance care planning, driving review.',
          'Capacity is decision-specific. People with MCI usually retain capacity for most decisions, so encourage planning early.',
        ],
      },
      {
        heading: 'Managing established dementia',
        points: [
          'Disclose the diagnosis sensitively, with family if the patient wishes. Provide written information and link to Dementia Australia (National Dementia Helpline 1800 100 500).',
          'Medicines: cholinesterase inhibitors (donepezil, rivastigmine patch or capsules, galantamine) for mild to moderate Alzheimer disease, Lewy body dementia and Parkinson disease dementia. Check HR and ECG (bradycardia, heart block). Assess response at 6 months. Memantine for moderate to severe disease.',
          'BPSD (behavioural and psychological symptoms): look for causes (pain, constipation, infection, retention, hunger, boredom, environment, unmet needs). Use non-drug strategies first. Refer to Dementia Support Australia (DBMAS and the Severe Behaviour Response Team).',
          'Antipsychotics (risperidone is the only one TGA-approved for BPSD) only for severe aggression or psychosis causing risk, at the lowest dose, for up to 12 weeks, with review and informed consent. They increase stroke and death risk. Restrictive practice rules apply in aged care.',
          'Carer support: respite, carer education, Carer Gateway, and screening for carer burnout and depression.',
          'Advance care planning while capacity remains, and palliative care in advanced dementia (recurrent infections, eating difficulties, immobility).',
        ],
      },
      {
        heading: 'Capacity, driving and safety',
        points: [
          'Capacity test: can the person understand the information, retain it long enough, use or weigh it to decide, and communicate the decision? It applies to a specific decision at a specific time.',
          'Enhance capacity: choose a good time of day, use simple information and visual aids, involve trusted people, and treat reversible factors.',
          'Legal instruments (these vary by state): enduring power of attorney (financial), enduring guardianship or medical treatment decision-maker, and advance care directives. Guardianship tribunals when there are no instruments and disputes or risk arise.',
          'Driving: dementia usually means eventual loss of a licence. Assess against Assessing Fitness to Drive. A conditional licence with regular review may be possible in early dementia, and an OT driving assessment helps. Patients must notify the licensing authority.',
          'Other safety: firearms, cooking and fire safety, wandering (ID bracelets), financial abuse, medication management (dose administration aids), and falls.',
        ],
      },
    ],
    keyNumbers: [
      'MoCA <26 abnormal (adjust for education)',
      'RUDAS <23 suggests impairment',
      'MCI → dementia ~10–15% per year',
      'Cholinesterase inhibitor PBS: MMSE ≥10',
      'Antipsychotic for BPSD: risperidone, ≤12 weeks, review',
      'Dementia Helpline: 1800 100 500',
      'Younger onset: <65 years (NDIS eligible)',
      'First Nations dementia rates 3–5× higher',
    ],
    workedCase: {
      title: 'Faith is overwhelmed and anxious',
      paragraphs: [
        'Faith, 52, a school principal, is worried she has early Alzheimer disease. She forgets names, loses her train of thought in meetings, and wakes at 3 am ruminating. Her mother developed dementia at 78. She is perimenopausal, with night sweats. The MoCA is 27 (she lost points only on delayed recall of 2 words).',
        'On a careful history, her problems are with attention and word-finding under stress rather than progressive memory loss. Her husband has noticed no decline, and her work performance remains high. The PHQ-9 is 12 and the GAD-7 is 15. You screen for OSA (low risk) and check TSH, B12, FBC and ferritin, which are normal.',
        'You explain that her profile fits anxiety, sleep disruption and perimenopause affecting concentration (a functional cognitive picture) rather than dementia. You reassure her that a late-onset maternal history adds little to her risk.',
        'Plan: CBT for anxiety and insomnia, MHT for vasomotor symptoms (after discussion), exercise, and a review of workload. At 4 months she reports clearer thinking. You agree to repeat the MoCA in 12 months only if concerns persist.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Types of cognitive disorder',
        lead: 'Choose the SINGLE most likely diagnosis for each patient.',
        options: [
          'Alzheimer disease',
          'Vascular dementia',
          'Dementia with Lewy bodies',
          'Behavioural variant frontotemporal dementia',
          'Delirium',
          'Depression with cognitive impairment',
          'Mild cognitive impairment',
          'Normal pressure hydrocephalus',
        ],
        items: [
          { stem: 'A 76-year-old with fluctuating alertness over months, vivid visual hallucinations of children, and mild parkinsonism.', answer: 2 },
          { stem: 'A 72-year-old with gait disturbance ("magnetic gait"), urinary incontinence and cognitive slowing.', answer: 7 },
          { stem: 'A 70-year-old with memory complaints, MoCA 23, who remains fully independent in all daily activities.', answer: 6 },
          { stem: 'A 68-year-old with stepwise decline after two small strokes, poor executive function and hypertension.', answer: 1 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Eliza is confused',
        scenario:
          'Eliza, 84, lives in residential aged care with moderate Alzheimer disease. Staff report that over 2 days she has become more confused, agitated at night, and is refusing food. She normally recognises staff and walks with a frame. Her medicines include donepezil, oxybutynin (started last month) and paracetamol.',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the most likely explanation for her acute change?',
            options: ['Rapid progression of Alzheimer disease', 'Delirium superimposed on dementia', 'New psychotic disorder', 'Normal sundowning', 'Depression'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which FOUR possible causes should you assess?',
            options: ['Urinary tract infection or urinary retention', 'Constipation', 'New anticholinergic medicine (oxybutynin)', 'Pain (e.g. occult fracture)', 'Vitamin D deficiency', 'Seasonal allergy'],
            answers: [0, 1, 2, 3],
          },
          {
            kind: 'sba',
            context: 'She has faecal loading and a bladder scan shows 600 mL. There is no fever.',
            stem: 'Which medicine change is most important?',
            options: ['Increase donepezil', 'Stop oxybutynin', 'Add haloperidol regularly', 'Add temazepam at night', 'Stop paracetamol'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which THREE non-drug measures help manage her delirium?',
            options: [
              'Familiar staff and family presence, reorientation',
              'Glasses and hearing aids in place; good lighting in the day and darkness at night',
              'Hydration, bowel care and mobilisation',
              'Physical restraints',
              'Moving her to a new unfamiliar room',
              'Keeping lights on all night',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'emq',
            theme: 'Behaviour management in dementia',
            lead: 'Choose the SINGLE best action for each situation after the delirium resolves.',
            options: [
              'Low-dose risperidone for up to 12 weeks with consent and review',
              'Refer to Dementia Support Australia',
              'Identify unmet needs and environmental triggers',
              'Haloperidol',
              'Advance care planning discussion with family',
            ],
            items: [
              { stem: 'She calls out repeatedly in the late afternoon', answer: 2 },
              { stem: 'Severe persistent aggression causing risk to staff despite non-drug strategies', answer: 0 },
              { stem: 'Family asks what care she would want if she becomes more unwell', answer: 4 },
            ],
          },
        ],
      },
    ],
  },
  '608': {
    sections: [
      {
        heading: 'Epidemiology and prognosis',
        points: [
          'Pancreatic cancer is the 4th or 5th most common cause of cancer death in Australia. About 4,500 people are diagnosed each year, and 5-year survival is around 12%.',
          'Most (about 90%) are pancreatic ductal adenocarcinoma (PDAC). Neuroendocrine tumours (PNETs) are less common and have a better prognosis.',
          'About 80% present with locally advanced or metastatic disease. Only 15–20% are resectable at diagnosis.',
          'Risk factors: smoking (the strongest modifiable), obesity, diabetes (long-standing and new-onset), chronic pancreatitis, heavy alcohol use (via pancreatitis), family history and genetic syndromes, older age.',
          'Survival is improving with better surgery, multi-agent chemotherapy (FOLFIRINOX, gemcitabine–nab-paclitaxel) and treatment in high-volume centres.',
        ],
      },
      {
        heading: 'Recognising early signs',
        points: [
          'Vague upper abdominal or back pain, dyspepsia, early satiety, nausea, bloating and fatigue are common early and non-specific.',
          'Weight loss, anorexia and steatorrhoea (pale, oily stools) suggest pancreatic involvement.',
          'Painless obstructive jaundice with dark urine, pale stools and itch: pancreatic head or periampullary tumours.',
          'New-onset diabetes over 50, especially with weight loss (typical type 2 diabetes involves weight gain), or sudden worsening of established diabetes.',
          'Unexplained VTE, acute pancreatitis without a clear cause in older adults, and new depression.',
          'Consider pancreatic cancer when symptoms persist or recur despite initial treatment (for example PPI-resistant dyspepsia), and re-evaluate.',
        ],
      },
      {
        heading: 'Pancreatic cystic lesions',
        points: [
          'Pancreatic cysts are found in up to 10–15% of MRI scans in older adults. Most are benign or low-risk.',
          'Types: pseudocyst (after pancreatitis), serous cystadenoma (benign), mucinous lesions (IPMN, MCN; premalignant), solid pseudopapillary neoplasm (young women), cystic neuroendocrine tumour.',
          'Characterise with MRI/MRCP. EUS ± cyst fluid analysis (CEA, cytology) when there are worrisome features or diagnostic uncertainty.',
          'Worrisome features and high-risk stigmata (see Unit 635) guide referral and surgery.',
          'Anxiety is common after an incidental finding. Explain the low risk and the purpose of surveillance.',
        ],
      },
      {
        heading: 'High-risk individuals',
        points: [
          'Familial pancreatic cancer: 2 or more first-degree relatives, or 3 or more relatives on the same side.',
          'Germline carriers: BRCA2, BRCA1, PALB2, ATM, Lynch genes, CDKN2A (FAMMM), STK11 (Peutz–Jeghers), and PRSS1 or SPINK1 (hereditary pancreatitis).',
          'Surveillance programs (EUS and/or MRI yearly) for high-risk individuals in specialist centres usually start at 50 (or 10 years before the youngest affected relative), earlier for Peutz–Jeghers and CDKN2A.',
          'Germline testing is now recommended for all people diagnosed with PDAC, because results guide treatment (such as PARP inhibitors for BRCA) and family cascade testing.',
          'Minimising risk: stop smoking, maintain a healthy weight, limit alcohol, and manage diabetes.',
        ],
      },
      {
        heading: 'Investigations and the optimal care pathway',
        points: [
          'Pancreatic protocol (triphasic) CT is the first-line diagnostic and staging test. MRI and EUS help with small lesions or indeterminate CT.',
          'EUS-guided fine needle biopsy provides tissue before chemotherapy. It is not always needed before surgery for clearly resectable lesions.',
          'CA19-9 helps with prognosis and monitoring. It is not produced by about 10% of people (Lewis antigen-negative) and is raised in cholestasis, pancreatitis and other GI cancers.',
          'Refer urgently to a pancreatic multidisciplinary team (within 2 weeks). Resectability depends on vascular involvement (resectable, borderline, locally advanced).',
          'Biliary stenting for obstructive jaundice (usually ERCP) relieves itch and liver dysfunction and allows chemotherapy.',
        ],
      },
      {
        heading: 'Treatment and supportive care',
        points: [
          'Resectable: Whipple procedure (pancreaticoduodenectomy) for head tumours, or distal pancreatectomy. Neoadjuvant or adjuvant chemotherapy (modified FOLFIRINOX).',
          'Advanced disease: chemotherapy (FOLFIRINOX or gemcitabine-based). Targeted therapy for specific mutations. Clinical trials.',
          'PERT is needed by most patients. Under-treatment of PEI is common and worsens weight loss and quality of life.',
          'Pain: opioids, coeliac plexus block (EUS-guided or percutaneous), and radiotherapy.',
          'VTE prophylaxis and treatment (LMWH or DOAC). Diabetes management (often insulin). Depression and anxiety support. Early palliative care.',
          'After a Whipple procedure: diabetes, PEI, dumping, delayed gastric emptying, and nutritional deficiencies (B12, iron, fat-soluble vitamins).',
        ],
      },
    ],
    keyNumbers: [
      '5-year survival ≈ 12%',
      'Only 15–20% resectable at diagnosis',
      'First-line imaging: pancreatic protocol CT',
      'OCP: specialist review within 2 weeks',
      'CA19-9 not produced by ~10% (Lewis-negative)',
      'Familial: ≥2 FDRs affected',
      'Surveillance usually from age 50 in high-risk groups',
      'Smoking ≈ doubles risk',
    ],
    workedCase: {
      title: 'John is concerned about his glucose levels',
      paragraphs: [
        'John, 66, a lean retired engineer, had a routine HbA1c of 58 mmol/mol, having been 38 two years ago. He has lost 5 kg without trying and reports mild upper abdominal discomfort after meals and paler stools. He has no family history of diabetes.',
        'You note that new-onset diabetes over 50 with weight loss, rather than the weight gain typical of type 2 diabetes, is a warning sign for pancreatic cancer. You arrange a pancreatic protocol CT, LFT, lipase and CA19-9, and refer promptly.',
        'The CT shows a 2.5 cm mass in the pancreatic body without vascular involvement. EUS biopsy confirms adenocarcinoma. He has neoadjuvant chemotherapy and then distal pancreatectomy.',
        'In shared care, you start PERT (steatorrhoea, faecal elastase 80), manage his type 3c diabetes with insulin and CGM, provide VTE prophylaxis advice, and arrange germline testing (a BRCA2 variant is found, and his daughters are referred for cascade testing). You check on his mood and involve the cancer care nurse coordinator.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Upper abdominal presentations',
        lead: 'Choose the SINGLE most appropriate next investigation for each patient.',
        options: [
          'Pancreatic protocol CT',
          'Abdominal ultrasound',
          'Gastroscopy',
          'H. pylori breath test',
          'MRI/MRCP surveillance',
          'Faecal elastase',
          'Serum CA19-9 alone',
          'Colonoscopy',
        ],
        items: [
          { stem: 'A 70-year-old with painless jaundice and weight loss.', answer: 0 },
          { stem: 'A 45-year-old with 3 months of dyspepsia, no alarm features.', answer: 3 },
          { stem: 'A 60-year-old with chronic pancreatitis and pale, oily stools.', answer: 5 },
          { stem: 'A 64-year-old with an incidental 12 mm branch-duct IPMN.', answer: 4 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Richard is losing sleep',
        scenario:
          'Richard, 63, a smoker, has 6 weeks of gnawing epigastric pain radiating to his back, worse lying flat at night and eased by sitting forward. He has lost 4 kg. A 4-week trial of pantoprazole has not helped. Examination is unremarkable.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE features in this history are red flags for pancreatic cancer?',
            options: [
              'Epigastric pain radiating to the back, worse lying flat',
              'Unintentional weight loss',
              'Failure to respond to PPI',
              'Age under 30',
              'Pain relieved by eating',
              'Heartburn only after spicy food',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'What is the most appropriate investigation?',
            options: ['Repeat PPI trial for 8 weeks', 'Pancreatic protocol CT abdomen', 'H. pylori serology', 'Plain abdominal X-ray', 'Barium swallow'],
            answer: 1,
          },
          {
            kind: 'sba',
            context: 'CT shows a pancreatic body mass encasing the coeliac axis and several liver lesions.',
            stem: 'What best describes the treatment approach?',
            options: [
              'Whipple procedure',
              'Palliative systemic chemotherapy with early palliative care and symptom control',
              'Watchful waiting',
              'Radiotherapy alone to cure',
              'Liver transplant',
            ],
            answer: 1,
          },
          {
            kind: 'emq',
            theme: 'Symptom control',
            lead: 'Choose the SINGLE most appropriate intervention for each symptom.',
            options: [
              'Coeliac plexus block',
              'Pancreatic enzyme replacement therapy',
              'Biliary stent via ERCP',
              'LMWH or DOAC',
              'Metoclopramide',
              'Dietary fat restriction',
            ],
            items: [
              { stem: 'Severe back pain despite escalating opioids', answer: 0 },
              { stem: 'Oily stools and weight loss', answer: 1 },
              { stem: 'New jaundice and itch from bile duct obstruction', answer: 2 },
              { stem: 'Right calf DVT', answer: 3 },
            ],
          },
          {
            kind: 'multi',
            stem: 'Which TWO additional actions are recommended?',
            options: [
              'Offer germline genetic testing',
              'Early advance care planning and palliative care referral',
              'Annual CA19-9 screening for his children',
              'Stop all analgesia to monitor progression',
              'Tell him prognosis cannot be discussed',
            ],
            answers: [0, 1],
          },
        ],
      },
    ],
  },
  '607': {
    sections: [
      {
        heading: 'What counts as a rare disease',
        points: [
          'In Australia a rare disease affects fewer than 5 in 10,000 people. There are more than 7,000 rare diseases, affecting about 2 million Australians (around 8%) in total.',
          'About 80% are genetic, and many present in childhood. Others include rare cancers, autoimmune conditions and infections.',
          'Diagnosis takes an average of 5–7 years, with multiple specialists and misdiagnoses along the way (the "diagnostic odyssey").',
          'The National Strategic Action Plan for Rare Diseases (2020) prioritises awareness, coordinated care, research and data.',
          'GPs will see many different rare diseases over a career. The skill is to recognise patterns suggesting a rare cause and to coordinate care, not to know every condition.',
        ],
      },
      {
        heading: 'Indications for investigating an undiagnosed condition',
        points: [
          'Multiple organ systems involved without a unifying common diagnosis.',
          'Unusual features: early-onset common disease (for example stroke under 50, cancer in the 20s), unusual severity, bilateral or multifocal disease, or disease in the "wrong" sex.',
          'Developmental delay, intellectual disability, dysmorphic features, congenital anomalies, seizures, hypotonia, or regression.',
          'A family history of similar symptoms, early deaths, recurrent miscarriage, or consanguinity.',
          'Failure to respond to standard treatment, or recurring "atypical" presentations.',
          'Documenting a detailed pedigree and photographs (with consent) helps geneticists.',
        ],
      },
      {
        heading: 'Genetic and genomic testing pathways',
        points: [
          'Single-gene tests are used when the phenotype is specific (for example CFTR for cystic fibrosis, HFE for haemochromatosis, FMR1 for fragile X).',
          'Chromosomal microarray detects copy number variants (deletions and duplications). It is first-line for developmental delay, intellectual disability and congenital anomalies in children.',
          'Exome or genome sequencing: Medicare-funded for children under 10 with syndromic features or intellectual disability, and for some adult conditions, requested by specialists after genetic consultation. Diagnostic yield is about 30–50% in selected children.',
          'Results can be pathogenic, likely pathogenic, a variant of uncertain significance (VUS: do not act on it, and it may be reclassified), or incidental or secondary findings.',
          'Reanalysis of existing genomic data every 1–2 years increases the diagnostic yield as knowledge grows.',
          'Consent should cover the implications for relatives, possible findings, data storage and insurance implications.',
        ],
      },
      {
        heading: 'Finding reliable information',
        points: [
          'Orphanet (a European portal with disease summaries and expert centres), GeneReviews (clinical genetics reviews), OMIM (a genetic disorder database), and NORD (US).',
          'Australian resources: Rare Voices Australia (the peak body), Genetic Alliance Australia, SWAN Australia (undiagnosed conditions), and disease-specific support groups.',
          'Centres of expertise: specialist clinics in tertiary hospitals (for example metabolic, neuromuscular and lysosomal storage disorder clinics), and the Undiagnosed Diseases Program in some states.',
          'Clinical practice guidelines for specific rare conditions (such as consensus guidelines from patient organisations) help GPs anticipate complications.',
          'Be cautious with unverified online information. Help patients evaluate sources and share reliable ones.',
        ],
      },
      {
        heading: 'Communicating about heritable conditions',
        points: [
          'Use plain language and diagrams to explain inheritance. Autosomal dominant: 50% chance per child. Autosomal recessive: carriers usually unaffected, and 25% per pregnancy when both parents are carriers. X-linked: sons of carrier mothers have a 50% chance of being affected.',
          'Non-directive counselling: respect reproductive choices (natural conception, prenatal testing, PGT-M, donor gametes, adoption) without judgement.',
          'Address emotions: guilt ("I passed this on"), grief, anxiety about other children, and stigma in some cultures.',
          'Family communication: support the patient to inform relatives (family letters from genetic services). Respect confidentiality. Breaching it is rarely justified and should involve legal and ethics advice.',
          'Children: testing for adult-onset conditions is usually deferred until the child can decide, unless there is a medical benefit in childhood.',
        ],
      },
      {
        heading: 'Holistic, person-centred care',
        points: [
          'Care coordination: the GP acts as the "medical home", linking multiple specialists, allied health and community services. Use Chronic Condition Management Plans, case conferences and shared care plans.',
          'Emergency letters or care plans for conditions with acute risks (for example metabolic disorders, adrenal insufficiency, HAE, bleeding disorders), carried by the patient and shared with the local ED.',
          'NDIS access for functional impairment. Carer supports (Carer Gateway, respite). School and work supports.',
          'Mental health: families face uncertainty, isolation and caregiver stress. Screen and support.',
          'Transition from paediatric to adult care is a high-risk period. Plan early.',
          'Palliative care for life-limiting conditions: paediatric palliative services and advance care planning.',
        ],
      },
    ],
    keyNumbers: [
      'Rare disease: <5 in 10,000 people',
      '>7,000 rare diseases; ~2 million Australians',
      '~80% genetic',
      'Average diagnostic odyssey 5–7 years',
      'AD: 50% per child; AR: 25% per pregnancy (carrier parents)',
      'Medicare carrier screening: CF, SMA, fragile X',
      'Exome/genome yield ~30–50% in selected children',
      'VUS: do not act clinically; may be reclassified',
    ],
    workedCase: {
      title: 'Raafe does not have a diagnosis',
      paragraphs: [
        'Raafe, 4, has global developmental delay, hypotonia, seizures that started at age 2, and distinctive facial features. Microarray and fragile X testing were normal. His parents, who are first cousins, are exhausted and feel "no one is coordinating anything".',
        'You take a family history (a maternal cousin with similar features, and consanguinity) and refer to clinical genetics for trio exome sequencing (Medicare-funded), which his paediatrician supports. You link the family with SWAN Australia and a social worker.',
        'While waiting, you create a care plan listing his specialists, medicines, seizure action plan and therapy supports. You help with NDIS access for early childhood therapies and arrange carer respite.',
        'Exome sequencing identifies a homozygous pathogenic variant in an autosomal recessive neurodevelopmental gene. The genetic counsellor explains the 25% recurrence risk. The parents choose PGT-M for a future pregnancy. The family is connected to an international support group, and you continue to coordinate care and monitor their wellbeing.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Inheritance patterns',
        lead: 'Choose the SINGLE most likely inheritance pattern for each condition or family.',
        options: [
          'Autosomal dominant',
          'Autosomal recessive',
          'X-linked recessive',
          'X-linked dominant',
          'Mitochondrial (maternal)',
          'Chromosomal (de novo aneuploidy)',
          'Multifactorial',
        ],
        items: [
          { stem: 'Cystic fibrosis in a child of unaffected parents.', answer: 1 },
          { stem: 'Duchenne muscular dystrophy in two brothers; their mother is well.', answer: 2 },
          { stem: 'Huntington disease in a father and two of his four children.', answer: 0 },
          { stem: 'A condition passed from an affected mother to all her children, never from an affected father.', answer: 4 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Layla is sick of being sick',
        scenario:
          'Layla, 24, has had recurrent episodes since her teens of painful swelling of her hands, face and once her throat, lasting 2–4 days, plus severe abdominal pain attacks that led to two negative laparotomies. Antihistamines, adrenaline and steroids do not help. Her father had similar "allergies".',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the most likely diagnosis?',
            options: ['Chronic urticaria', 'Hereditary angioedema', 'Food allergy', 'Mast cell activation syndrome', 'Familial Mediterranean fever'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO tests are the most appropriate first investigations?',
            options: ['Serum C4', 'C1-esterase inhibitor level and function', 'Total IgE', 'Tryptase', 'Skin prick testing', 'ANA'],
            answers: [0, 1],
          },
          {
            kind: 'multi',
            stem: 'Which THREE management steps are most important?',
            options: [
              'Refer to clinical immunology',
              'Provide a written emergency action plan and on-demand treatment (e.g. icatibant or C1-INH concentrate)',
              'Avoid ACE inhibitors and oestrogen-containing contraception',
              'Daily antihistamines as prevention',
              'Adrenaline autoinjector as the main treatment',
              'Elimination diet',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'Layla asks about her future children. What is the chance each child inherits this condition?',
            options: ['0%', '25%', '50%', '75%', '100%'],
            answer: 2,
            explanation: 'HAE is autosomal dominant.',
          },
          {
            kind: 'emq',
            theme: 'Coordinating care for a rare disease',
            lead: 'Choose the SINGLE best resource or action for each need.',
            options: [
              'HAE Australasia (patient support organisation)',
              'Emergency letter for the local hospital',
              'Cascade testing of relatives',
              'NDIS application',
              'Orphanet / GeneReviews',
            ],
            items: [
              { stem: 'She wants to connect with other people living with HAE', answer: 0 },
              { stem: 'Her sister has similar symptoms and has never been tested', answer: 2 },
              { stem: 'ED staff previously gave only adrenaline during a throat attack', answer: 1 },
            ],
          },
        ],
      },
    ],
  },
}

export default extra
