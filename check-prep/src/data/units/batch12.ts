import type { BaseUnit } from '../../types'

const NO_LO =
  'RACGP has not published learning outcomes for the 2021 units online. This summary covers core, high-yield topics for this unit\'s subject.'

const units: BaseUnit[] = [
  {
    id: '587',
    label: 'Unit 587',
    date: 'Oct 2021',
    title: 'Sports medicine',
    specialty: 'Musculoskeletal & Sports',
    alsoRelevant: ['Neurology', 'Cardiology', "Women's Health"],
    topics: [
      'Sport-related concussion and return to play',
      'Ankle sprains and the Ottawa ankle rules',
      'ACL injury',
      'Tendinopathy management',
      'Relative energy deficiency in sport (RED-S)',
      'Exercise-induced bronchoconstriction and cardiac screening',
    ],
    overview: `${NO_LO} Sports medicine in general practice means sound injury diagnosis and graded, exercise-based rehabilitation. It also means safe return-to-play decisions, especially after concussion, and recognising serious problems in athletes: cardiac red flags, RED-S and bone stress injury.`,
    sections: [
      {
        heading: 'Concussion',
        points: [
          '"If in doubt, sit them out." Remove the player immediately and never return on the same day.',
          'Red flags needing emergency care: neck pain, deteriorating consciousness, repeated vomiting, seizure, severe or worsening headache, weakness or tingling, double vision, confusion.',
          'Relative rest for 24–48 hours, then gradual return to learn or work first, then a graded return to sport.',
          'Australian community and youth sport guidance: symptom-free before full-contact training, and no return to competition before 21 days after the injury. Persisting symptoms (>4 weeks) need multidisciplinary review.',
        ],
      },
      {
        heading: 'Acute injuries',
        points: [
          'Ottawa ankle rules: X-ray if there is bone tenderness at the posterior edge or tip of either malleolus, the base of the 5th metatarsal or the navicular, OR inability to bear weight for 4 steps (both immediately and at assessment).',
          'Ankle sprain: early mobilisation, functional support (brace), then balance and proprioception training, which reduces recurrence.',
          'ACL rupture: non-contact pivot, "pop", rapid haemarthrosis. Lachman test is the most sensitive. Confirm with MRI. Structured rehabilitation ± reconstruction depending on activity goals.',
          'Hamstring strain: progressive loading. Return-to-sport criteria are strength and function, not just time.',
        ],
      },
      {
        heading: 'Overuse and tendons',
        points: [
          'Tendinopathy (Achilles, patellar, gluteal): progressive loading (isometric, then heavy slow resistance or eccentric) over 12 weeks. Avoid repeated steroid injections near the Achilles. Fluoroquinolones increase rupture risk.',
          'Bone stress injury: focal bony tenderness with pain on hopping. MRI is the most sensitive test. High-risk sites (femoral neck, navicular, anterior tibia) need specialist care.',
          'RED-S (relative energy deficiency in sport): low energy availability leading to menstrual dysfunction, bone stress injuries, low BMD, fatigue, poor performance. It affects males too. Needs a multidisciplinary team including a dietitian. Screen for eating disorders.',
          'Patellofemoral pain: hip and knee strengthening, taping, load management.',
        ],
      },
      {
        heading: 'Cardiorespiratory',
        points: [
          'Exercise-induced bronchoconstriction: SABA 5–20 minutes before exercise, or ICS–formoterol. Check asthma control. WADA permits inhaled salbutamol within limits.',
          'Sudden cardiac death in young athletes: hypertrophic cardiomyopathy, arrhythmogenic cardiomyopathy, channelopathies, coronary anomalies.',
          'Red flags: exertional syncope or chest pain, palpitations with exercise, family history of sudden death under 50. Stop sport, get an ECG and echo, and refer to cardiology.',
          'Older adults starting exercise: use pre-exercise screening (for example the ESSA APSS), and encourage activity for most people.',
        ],
      },
    ],
    redFlags: [
      'Concussion with deteriorating consciousness, repeated vomiting or seizure.',
      'Syncope during exercise.',
      'Amenorrhoea with a stress fracture in an athlete (RED-S).',
      'Hot, swollen joint with fever.',
    ],
    examTips: [
      'Know the Ottawa ankle rules exactly.',
      'Never allow same-day return to play after concussion.',
      'Know the three RED-S components: energy, menstruation, bone.',
    ],
    mcqs: [
      {
        stem: 'A 16-year-old rugby player was concussed yesterday. His coach asks when he can play the semi-final in 8 days if he feels fine. What is the correct advice?',
        options: [
          'He can play if symptom-free',
          'He must follow a graded return, and not return to competition before 21 days after injury',
          'He can play after 48 hours rest',
          'Only a CT scan can clear him',
          'He should never play again',
        ],
        answer: 1,
        explanation: 'Youth and community concussion guidance requires a graded return with a minimum stand-down before competition.',
      },
      {
        stem: 'After an inversion ankle injury, a patient can walk 4 steps. There is tenderness over the anterior talofibular ligament only. What is the next step?',
        options: ['Ankle X-ray', 'No X-ray; functional management of ankle sprain', 'MRI', 'CT scan', 'Below-knee cast'],
        answer: 1,
        explanation: 'The Ottawa rules are negative (no bony tenderness at key sites and able to bear weight), so imaging isn\'t needed.',
      },
      {
        stem: 'A 17-year-old footballer collapses while sprinting and recovers quickly. His uncle died suddenly at 35. What is the most appropriate step?',
        options: [
          'Reassure – vasovagal',
          'Stop sport pending ECG, echocardiogram and cardiology review',
          'Increase hydration',
          'Beta-blocker',
          'Exercise stress test only',
        ],
        answer: 1,
        explanation: 'Exertional syncope plus a family history of sudden death suggests inherited cardiac disease.',
      },
      {
        stem: 'A 19-year-old distance runner has amenorrhoea for 8 months and a metatarsal stress fracture. What is the most likely underlying issue?',
        options: ['PCOS', 'Relative energy deficiency in sport (RED-S)', 'Pregnancy', 'Hyperprolactinaemia', 'Osteogenesis imperfecta'],
        answer: 1,
        explanation: 'Low energy availability causes hypothalamic amenorrhoea and poor bone health.',
      },
      {
        stem: 'Which management has the best evidence for mid-portion Achilles tendinopathy?',
        options: ['Complete rest for 3 months', 'Progressive tendon loading exercise program', 'Repeated corticosteroid injections', 'Ciprofloxacin', 'Immediate surgery'],
        answer: 1,
        explanation: 'Progressive loading (eccentric or heavy slow resistance) is first line. Steroid injections risk rupture.',
      },
    ],
  },
  {
    id: '586',
    label: 'Unit 586',
    date: 'Sep 2021',
    title: 'Cancer',
    specialty: 'Oncology',
    alsoRelevant: ['Respiratory', 'Preventive & Population Health', 'Palliative Care'],
    topics: [
      'Oncological emergencies in general practice',
      'Febrile neutropenia',
      'Immunotherapy adverse effects',
      'Cancer-associated VTE',
      'Lung cancer screening and early diagnosis',
      'Survivorship care',
    ],
    overview: `${NO_LO} Most people with cancer are living with or beyond it, and they see their GP often. GPs must recognise oncological emergencies, especially febrile neutropenia and immune-related adverse events. They also coordinate survivorship care and use the Optimal Care Pathways and screening programs to support earlier diagnosis.`,
    sections: [
      {
        heading: 'Emergencies',
        points: [
          'Febrile neutropenia: temperature ≥38 °C in someone who had chemotherapy in the last 6 weeks. This is an emergency. Send to hospital immediately (don\'t wait for FBC). IV antibiotics within 60 minutes.',
          'Metastatic spinal cord compression: back pain + neurological signs. Dexamethasone and urgent MRI.',
          'Hypercalcaemia: confusion, polyuria, constipation. SVC obstruction: facial swelling, dyspnoea. Tumour lysis after treatment of bulky or haematological cancers.',
          'Neutropenic patients should not have rectal exams or temperatures.',
        ],
      },
      {
        heading: 'Immunotherapy (checkpoint inhibitors)',
        points: [
          'Immune-related adverse events can affect any organ, even months after treatment: colitis (diarrhoea), hepatitis, pneumonitis (cough, dyspnoea), dermatitis, nephritis.',
          'Endocrinopathies: thyroiditis (hyper- then hypothyroid), hypophysitis (headache, fatigue, low cortisol), type 1 diabetes (DKA), adrenal insufficiency.',
          'Any new symptom in a patient on immunotherapy: contact the treating oncology team the same day. Most irAEs need corticosteroids.',
          'Check TFTs, cortisol, glucose and LFTs when symptoms are nonspecific (fatigue).',
        ],
      },
      {
        heading: 'Early diagnosis and screening',
        points: [
          'National Lung Cancer Screening Program (from July 2025): low-dose CT every 2 years for asymptomatic people aged 50–70 with ≥30 pack-years who currently smoke or quit within the last 10 years.',
          'Lung cancer symptoms: persistent cough >3 weeks, haemoptysis (always investigate), weight loss, recurrent chest infections. Get a CXR, then CT if symptoms persist even with a normal CXR.',
          'Use the Cancer Australia Optimal Care Pathways for timely referral. Include bowel, breast and cervical screening participation.',
          'Skin cancer: targeted skin checks for high-risk people, and dermoscopy training.',
        ],
      },
      {
        heading: 'Survivorship and VTE',
        points: [
          'Cancer-associated VTE: DOAC (apixaban, rivaroxaban) or LMWH for at least 6 months. Caution with GI or GU cancers because of bleeding risk.',
          'Vaccination during chemotherapy: inactivated vaccines (influenza, COVID, pneumococcal) are OK. Live vaccines are contraindicated.',
          'Survivorship: surveillance plan, late effects (cardiotoxicity, neuropathy, infertility, early menopause, bone loss), fear of recurrence, return to work, financial toxicity.',
          'Discuss fertility preservation before treatment in reproductive-age patients.',
        ],
      },
    ],
    redFlags: [
      'Fever after recent chemotherapy.',
      'Diarrhoea, breathlessness or severe fatigue on immunotherapy.',
      'Back pain with neurological signs in known cancer.',
      'Haemoptysis in a smoker or ex-smoker.',
    ],
    examTips: [
      'Febrile neutropenia: send to hospital immediately without waiting for bloods.',
      'Immunotherapy irAEs can affect any organ, including the endocrine glands.',
      'Know the lung screening program eligibility.',
    ],
    mcqs: [
      {
        stem: 'A woman who had chemotherapy 9 days ago phones with a temperature of 38.3 °C. She feels well otherwise. What is the most appropriate action?',
        options: [
          'Paracetamol and review tomorrow',
          'Urgent hospital assessment for possible febrile neutropenia',
          'Oral amoxicillin',
          'Check FBC tomorrow',
          'Viral swab and self-isolate',
        ],
        answer: 1,
        explanation: 'Febrile neutropenia is an emergency. IV antibiotics are needed within an hour.',
      },
      {
        stem: 'A man receiving pembrolizumab develops fatigue, headache and low sodium. Which complication is most likely?',
        options: ['Brain metastases only', 'Hypophysitis with secondary adrenal insufficiency', 'Hypercalcaemia', 'SIADH from chemotherapy', 'Migraine'],
        answer: 1,
        explanation: 'Checkpoint inhibitors can cause hypophysitis. Check cortisol and pituitary hormones urgently.',
      },
      {
        stem: 'Which person is eligible for the National Lung Cancer Screening Program?',
        options: [
          '45-year-old current smoker, 20 pack-years',
          '62-year-old who quit 5 years ago with 35 pack-years history',
          '75-year-old current smoker',
          '55-year-old never-smoker with cough',
          '60-year-old who quit 20 years ago',
        ],
        answer: 1,
        explanation: 'Eligibility: 50–70, ≥30 pack-years, current smoker or quit within 10 years, no symptoms.',
      },
      {
        stem: 'A patient with metastatic pancreatic cancer has a DVT. Which is appropriate anticoagulation?',
        options: ['Aspirin', 'DOAC or LMWH for at least 6 months', 'Warfarin for 6 weeks', 'No anticoagulation', 'Clopidogrel'],
        answer: 1,
        explanation: 'Cancer-associated VTE is treated with a DOAC or LMWH, continued while the cancer is active.',
      },
      {
        stem: 'A patient on chemotherapy asks about vaccination. Which is contraindicated?',
        options: ['Inactivated influenza', 'COVID-19 mRNA', 'Live zoster vaccine', 'Pneumococcal conjugate', 'dTpa'],
        answer: 2,
        explanation: 'Live vaccines are contraindicated during immunosuppressive treatment. Recombinant zoster (Shingrix) is non-live.',
      },
    ],
  },
  {
    id: '585',
    label: 'Unit 585',
    date: 'Aug 2021',
    title: 'Adolescent health',
    specialty: 'Paediatrics & Child Health',
    alsoRelevant: ['Mental Health', 'Sexual & Reproductive Health', 'Preventive & Population Health'],
    topics: [
      'HEEADSSS psychosocial assessment',
      'Confidentiality, consent and the mature minor',
      'Contraception and sexual health for young people',
      'Adolescent immunisation',
      'Menstrual problems',
      'Transition to adult care',
    ],
    overview: `${NO_LO} Adolescents are generally healthy, but most adult mental illness, substance use and risky behaviour starts in this period. GPs build trust through confidential consultations and psychosocial screening (HEEADSSS). They offer practical preventive care such as contraception, STI testing, vaccination and mental health support, and they manage transition to adult services.`,
    sections: [
      {
        heading: 'Engagement',
        points: [
          'See the young person alone for part of each visit. Explain confidentiality and its limits (serious risk of harm to self or others, abuse).',
          'Mature minor (Gillick competence): a young person who understands the nature and consequences of treatment can consent. Document the assessment.',
          'Young people can get their own Medicare card from 15. Explain My Health Record and billing privacy.',
          'HEEADSSS: Home, Education/Employment, Eating/Exercise, Activities, Drugs, Sexuality, Suicide/depression, Safety (including online and bullying).',
        ],
      },
      {
        heading: 'Sexual health and contraception',
        points: [
          'LARCs (implant, IUDs) are first-line and suitable for adolescents, including nulliparous young people.',
          'Opportunistic chlamydia and gonorrhoea testing for sexually active young people (first-pass urine or self-collected vaginal swab).',
          'Emergency contraception: copper IUD (most effective), ulipristal, or levonorgestrel. Consider the age of the partner and consent issues (reporting obligations for underage sex or abuse).',
          'HPV vaccine: single dose in the school program (12–13 years), catch-up to age 25. Meningococcal ACWY in Year 10. Check dTpa and hepatitis B.',
        ],
      },
      {
        heading: 'Common problems',
        points: [
          'Mental health: depression, anxiety, self-harm. Safety plan, psychological therapy, headspace, SSRIs (fluoxetine) if moderate to severe.',
          'Eating disorders: rapid weight loss, amenorrhoea, over-exercise. Assess medical risk (HR, BP, temperature, electrolytes).',
          'Dysmenorrhoea: NSAIDs started before pain onset, COC. Consider endometriosis if refractory. Heavy menstrual bleeding since menarche: screen for von Willebrand disease.',
          'Delayed sleep phase: consistent wake time, morning light, screens off before bed. Substance use, vaping and gaming are also common.',
        ],
      },
      {
        heading: 'Chronic illness and transition',
        points: [
          'Adolescents with chronic illness (T1D, asthma, epilepsy, CF) often have poorer adherence during adolescence. Use motivational approaches and involve them in decisions.',
          'Plan transition from paediatric to adult services early (from about 14). The GP provides continuity.',
          'Address risk-taking, driving (for example diabetes and epilepsy rules), alcohol and contraception interactions with their medicines.',
          'Screen for mental health in chronic illness, as rates are higher.',
        ],
      },
    ],
    redFlags: [
      'Suicidal ideation with a plan, or recent self-harm.',
      'Disclosure of sexual abuse or exploitation.',
      'Bradycardia, hypotension or hypothermia with weight loss (eating disorder).',
      'Heavy menstrual bleeding with anaemia or a bleeding history.',
    ],
    examTips: [
      'HEEADSSS is a standard KFP answer. Know each letter.',
      'LARCs are first-line contraception for adolescents.',
      'Explain the limits of confidentiality at the start.',
    ],
    mcqs: [
      {
        stem: 'A 15-year-old requests contraception without her parents knowing. She understands the risks and benefits. What is the correct approach?',
        options: [
          'Refuse until a parent consents',
          'Assess as a mature minor and provide contraception if competent, while screening for abuse and STI',
          'Tell her parents',
          'Only provide condoms',
          'Refer to a gynaecologist',
        ],
        answer: 1,
        explanation: 'A competent minor can consent to contraception. Screen for coercion and abuse and check the partner\'s age.',
      },
      {
        stem: 'What is the most effective reversible contraceptive option for a 17-year-old?',
        options: ['Combined oral contraceptive pill', 'Condoms', 'Etonogestrel implant', 'Withdrawal', 'Progestogen-only pill'],
        answer: 2,
        explanation: 'The implant is the most effective reversible method (failure <0.1%) and is suitable for adolescents.',
      },
      {
        stem: 'A 14-year-old has heavy periods since menarche causing anaemia, and reports frequent nosebleeds. Which test is most important?',
        options: ['Pelvic MRI', 'Von Willebrand studies', 'Thyroid antibodies', 'Pregnancy test only', 'Karyotype'],
        answer: 1,
        explanation: 'Von Willebrand disease is common in adolescents with HMB, especially with other bleeding symptoms.',
      },
      {
        stem: 'What does the second "E" in HEEADSSS stand for?',
        options: ['Exercise only', 'Eating (and exercise)', 'Emotions', 'Employment only', 'Environment'],
        answer: 1,
        explanation: 'Home, Education/Employment, Eating/Exercise, Activities, Drugs, Sexuality, Suicide/depression, Safety.',
      },
      {
        stem: 'A 16-year-old goes to sleep at 2 am and cannot wake for school but sleeps well on weekends until noon. What is the most likely diagnosis?',
        options: ['Narcolepsy', 'Delayed sleep–wake phase disorder', 'Obstructive sleep apnoea', 'Depression only', 'Restless legs'],
        answer: 1,
        explanation: 'A delayed circadian rhythm is common in adolescents. Manage with a fixed wake time, morning light and evening screen reduction (± low-dose melatonin timed early evening).',
      },
    ],
  },
  {
    id: '584',
    label: 'Unit 584',
    date: 'Jul 2021',
    title: 'Cardiovascular disease',
    specialty: 'Cardiology',
    alsoRelevant: ['Preventive & Population Health', 'Endocrinology & Metabolic'],
    topics: [
      'Hypertension diagnosis and management',
      'Lipid management and familial hypercholesterolaemia',
      'Chest pain assessment in general practice',
      'Secondary prevention after ACS',
      'Peripheral arterial disease',
    ],
    overview: `${NO_LO} Cardiovascular disease prevention and early recognition are core GP work. Confirm hypertension with out-of-office readings, treat lipids to target, and recognise familial hypercholesterolaemia. Assess chest pain safely (acute coronary syndrome goes to hospital) and optimise secondary prevention and cardiac rehabilitation.`,
    sections: [
      {
        heading: 'Hypertension',
        points: [
          'Confirm with home BP monitoring (average ≥135/85) or ABPM (24-hour average ≥130/80) before diagnosing. Watch for white-coat and masked hypertension.',
          'Assess CVD risk, end-organ damage (ECG, urine ACR, eGFR, fundi) and secondary causes (young onset, resistant hypertension, hypokalaemia: consider primary aldosteronism).',
          'First-line: ACEi or ARB, dihydropyridine CCB, or thiazide-like diuretic. Low-dose combinations are preferred to maximising one drug. Do not combine ACEi with ARB.',
          'Target <130/80 for most adults if tolerated (individualise in frailty). Lifestyle: salt reduction, weight loss, exercise, alcohol reduction.',
        ],
      },
      {
        heading: 'Lipids and FH',
        points: [
          'Statins for high-risk primary prevention and ALL people with established CVD (high-intensity: atorvastatin 40–80 mg or rosuvastatin 20–40 mg).',
          'Secondary prevention LDL target <1.8 mmol/L (lower, such as <1.4, in very high risk). Add ezetimibe, then PCSK9 inhibitor if criteria are met.',
          'Familial hypercholesterolaemia: LDL ≥5 mmol/L in adults, tendon xanthomata, premature CVD in the family. Use the Dutch Lipid Clinic Network score, refer for genetic testing, and arrange cascade screening of relatives.',
          'Statin muscle symptoms: check CK, consider rechallenge or an alternative statin at lower dose. Most can tolerate some statin.',
        ],
      },
      {
        heading: 'Chest pain and ACS',
        points: [
          'Suspected ACS (ongoing or recent rest pain, dynamic ECG changes): ECG within 10 minutes, aspirin 300 mg (unless contraindicated), GTN if needed, and call 000. Do NOT send for outpatient troponin.',
          'Women, older people and people with diabetes may have atypical symptoms (dyspnoea, fatigue, epigastric pain).',
          'Stable chest pain: assess pre-test probability. CT coronary angiography or functional testing. Antianginals (β-blocker, CCB, nitrates) and risk-factor treatment.',
          'Post-ACS: dual antiplatelet therapy for 12 months (tailored), high-intensity statin, β-blocker (especially with reduced EF), ACEi/ARB, cardiac rehabilitation, smoking cessation. Driving: private licence restrictions for a period after MI (per Assessing Fitness to Drive).',
        ],
      },
      {
        heading: 'Peripheral arterial disease',
        points: [
          'Symptoms: claudication (calf pain on walking relieved by rest), non-healing wounds, rest pain. Risk factors: smoking, diabetes.',
          'ABI <0.9 confirms PAD. Toe pressures if vessels are calcified (diabetes, CKD).',
          'Management: supervised exercise, smoking cessation, statin, antiplatelet, BP and glucose control. Consider low-dose rivaroxaban plus aspirin in selected patients.',
          'Critical limb ischaemia (rest pain, ulcers, gangrene) or acute limb ischaemia (6 Ps) needs urgent vascular referral.',
        ],
      },
    ],
    redFlags: [
      'Chest pain at rest lasting more than 10 minutes: call 000.',
      'Hypertensive emergency: BP ≥180/110 with end-organ symptoms (headache, visual change, chest pain, confusion).',
      'Acute limb ischaemia: pain, pallor, pulselessness, paraesthesia, paralysis, perishingly cold.',
      'Tearing chest or back pain: aortic dissection.',
    ],
    examTips: [
      'Never send suspected ACS for outpatient troponin. This is a classic KFP error.',
      'Confirm hypertension with out-of-office BP.',
      'Know the FH clinical clues and cascade testing.',
    ],
    mcqs: [
      {
        stem: 'A 58-year-old man has had 30 minutes of central chest pressure at rest, now easing. ECG in your clinic shows new ST depression. What is the most appropriate action?',
        options: [
          'Send for troponin and review results tomorrow',
          'Aspirin 300 mg and call an ambulance for emergency transfer',
          'Arrange outpatient stress test',
          'GTN and discharge',
          'Start atorvastatin and review in a week',
        ],
        answer: 1,
        explanation: 'This is suspected ACS. It needs emergency care. Outpatient troponin delays treatment.',
      },
      {
        stem: 'Clinic BP readings in a 50-year-old are 148/92 and 150/94. What is the next best step before diagnosing hypertension?',
        options: [
          'Start two antihypertensives',
          'Home BP monitoring or ABPM',
          'Echocardiogram',
          'Renal artery Doppler',
          'Repeat clinic BP in 1 year',
        ],
        answer: 1,
        explanation: 'Out-of-office measurement excludes white-coat hypertension and confirms the diagnosis.',
      },
      {
        stem: 'A 35-year-old has LDL 6.4 mmol/L, Achilles tendon xanthomata, and his father had an MI at 45. What is the most likely diagnosis?',
        options: ['Secondary hyperlipidaemia from hypothyroidism only', 'Familial hypercholesterolaemia', 'Diabetic dyslipidaemia', 'Nephrotic syndrome', 'Normal variant'],
        answer: 1,
        explanation: 'Very high LDL, xanthomata and premature family CVD suggest FH. Treat intensively and screen relatives.',
      },
      {
        stem: 'Which combination of antihypertensives should be avoided?',
        options: ['ACEi + CCB', 'ARB + thiazide-like diuretic', 'ACEi + ARB', 'CCB + thiazide', 'ACEi + thiazide'],
        answer: 2,
        explanation: 'Dual RAS blockade increases hyperkalaemia and renal harm without cardiovascular benefit.',
      },
      {
        stem: 'A smoker has calf pain after walking 200 m, relieved by rest. What is the key diagnostic test?',
        options: ['Venous duplex', 'Ankle–brachial index', 'Lumbar spine MRI', 'CK', 'D-dimer'],
        answer: 1,
        explanation: 'ABI <0.9 confirms peripheral arterial disease.',
      },
    ],
  },
  {
    id: '583',
    label: 'Unit 583',
    date: 'Jun 2021',
    title: 'Urology',
    specialty: 'Urology & Renal',
    alsoRelevant: ["Men's Health", "Women's Health", 'Oncology'],
    topics: [
      'Haematuria assessment',
      'Kidney stones',
      'Urinary tract infections (including recurrent UTI)',
      'Urinary incontinence in women',
      'Acute scrotum and testicular lumps',
      'Nocturia',
    ],
    overview: `${NO_LO} Urological presentations are common in general practice. Visible haematuria needs investigation for cancer. Stones are managed mostly with analgesia and watchful waiting. Prescribe UTI antibiotics according to guidelines, and use pelvic floor training as first-line for stress incontinence. Testicular torsion is a time-critical surgical emergency.`,
    sections: [
      {
        heading: 'Haematuria and stones',
        points: [
          'Visible haematuria in adults (without proven UTI) needs a CT urogram and cystoscopy through urology, even if it is a single episode or the patient takes anticoagulants.',
          'Persistent non-visible haematuria: investigate if age >50, smoker or other risk factors. Dysmorphic RBCs, proteinuria or reduced eGFR suggest a glomerular cause, so refer to nephrology.',
          'Renal colic: NSAIDs first-line analgesia, non-contrast CT KUB. Stones <5 mm usually pass. Tamsulosin aids passage of distal ureteric stones 5–10 mm.',
          'Emergency: an obstructed, infected kidney (fever + stone) needs urgent decompression. Prevention: fluids for >2.5 L urine a day, less salt and animal protein, normal dietary calcium.',
        ],
      },
      {
        heading: 'UTI',
        points: [
          'Uncomplicated cystitis in women: trimethoprim 300 mg for 3 days, nitrofurantoin 100 mg qid for 5 days, or cefalexin 500 mg bd for 5 days (per current Therapeutic Guidelines).',
          'Pregnancy: cefalexin or nitrofurantoin (avoid near term). Treat asymptomatic bacteriuria ONLY in pregnancy (and before urological procedures).',
          'Men with UTI: 7 days (longer if prostatitis) and consider investigating. Recurrent UTI prevention: vaginal oestrogen (postmenopausal), methenamine hippurate, cranberry (modest), low-dose antibiotic prophylaxis.',
          'Older people: don\'t send urine cultures for non-specific symptoms (such as confusion) without urinary symptoms. Asymptomatic bacteriuria is common.',
        ],
      },
      {
        heading: 'Incontinence and nocturia',
        points: [
          'Stress incontinence: supervised pelvic floor muscle training for at least 3 months is first line. Weight loss. Surgical options if it fails.',
          'Urge incontinence or overactive bladder: bladder training, reduce caffeine, then mirabegron (monitor BP) or antimuscarinics (anticholinergic burden and cognition risk in older adults). Vaginal oestrogen if atrophy.',
          'Use a frequency–volume chart. Nocturnal polyuria (>33% of 24-hour output at night in older adults) suggests heart failure, OSA, evening fluids or diuretic timing.',
          'Exclude retention (post-void residual), UTI, constipation and medicine effects.',
        ],
      },
      {
        heading: 'Scrotal problems',
        points: [
          'Testicular torsion: sudden severe pain, high-riding horizontal testis, absent cremasteric reflex, often with vomiting. Needs surgical exploration within 6 hours. Do NOT delay for ultrasound.',
          'Epididymo-orchitis: gradual pain, fever, urinary symptoms. In sexually active men, treat for chlamydia and gonorrhoea (ceftriaxone + doxycycline). In older men, enteric organisms (per Therapeutic Guidelines).',
          'Testicular cancer: painless lump or heaviness, age 15–40. Scrotal ultrasound and tumour markers (AFP, β-hCG, LDH), with urgent urology referral. Do not biopsy through the scrotum.',
          'Varicocele ("bag of worms", usually left). A new right-sided or non-reducing varicocele needs imaging for a renal mass.',
        ],
      },
    ],
    redFlags: [
      'Sudden severe testicular pain in a young male: torsion.',
      'Fever with an obstructing stone: infected obstructed kidney.',
      'Painless visible haematuria: bladder or renal cancer until proven otherwise.',
      'Acute urinary retention or bilateral hydronephrosis with AKI.',
    ],
    examTips: [
      'Torsion is a clinical diagnosis. Do not delay surgery for imaging.',
      'Treat asymptomatic bacteriuria only in pregnancy.',
      'Pelvic floor muscle training is first line for stress incontinence.',
    ],
    mcqs: [
      {
        stem: 'A 64-year-old ex-smoker has one episode of painless visible haematuria. Urine culture is negative. He takes apixaban. What is the most appropriate step?',
        options: [
          'Attribute to anticoagulant and observe',
          'Refer for CT urogram and cystoscopy',
          'Repeat urinalysis in 3 months',
          'Urine cytology only',
          'Stop apixaban permanently',
        ],
        answer: 1,
        explanation: 'Visible haematuria needs full urological investigation even on anticoagulants.',
      },
      {
        stem: 'A 15-year-old has sudden severe left testicular pain for 2 hours with vomiting. The testis is high-riding with absent cremasteric reflex. What is the most appropriate action?',
        options: ['Scrotal ultrasound first', 'Immediate surgical referral for exploration', 'Antibiotics for epididymitis', 'Analgesia and review tomorrow', 'Urine PCR for chlamydia'],
        answer: 1,
        explanation: 'Suspected torsion needs exploration within 6 hours to save the testis.',
      },
      {
        stem: 'A 26-week pregnant woman has asymptomatic bacteriuria (E. coli, sensitive to all). What is the correct management?',
        options: ['No treatment', 'Treat with an appropriate antibiotic (e.g. cefalexin) and repeat culture', 'Treat only if symptoms develop', 'Cranberry juice only', 'Ciprofloxacin'],
        answer: 1,
        explanation: 'Treating asymptomatic bacteriuria in pregnancy reduces pyelonephritis and preterm birth.',
      },
      {
        stem: 'A 45-year-old woman leaks urine when coughing and running. What is the first-line treatment?',
        options: ['Oxybutynin', 'Supervised pelvic floor muscle training for 3 months', 'Mid-urethral sling surgery', 'Mirabegron', 'Desmopressin'],
        answer: 1,
        explanation: 'PFMT is first-line for stress incontinence.',
      },
      {
        stem: 'A man has renal colic; CT KUB shows a 7 mm distal ureteric stone, no infection, normal renal function. What is appropriate?',
        options: [
          'Immediate lithotripsy',
          'Analgesia (NSAID) plus tamsulosin as medical expulsive therapy, with urology follow-up',
          'IV antibiotics',
          'Open surgery',
          'Allopurinol only',
        ],
        answer: 1,
        explanation: 'Tamsulosin increases passage of distal stones 5–10 mm. Arrange follow-up imaging and urology review.',
      },
    ],
  },
]

export default units
