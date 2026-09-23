import type { Unit } from '../../types'

const units: Unit[] = [
  {
    id: '612',
    label: 'Unit 612',
    date: 'Jun 2024',
    title: 'Bowel cancer',
    specialty: 'Oncology',
    alsoRelevant: ['Gastroenterology & Hepatology', 'Preventive & Population Health', 'Genetics'],
    topics: [
      'National Bowel Cancer Screening Program (NBCSP)',
      'Family history risk categories and Lynch syndrome',
      'Red flag symptoms and early-onset bowel cancer',
      'Post-treatment surveillance and survivorship',
      'Stoma care and complications',
      'Supportive and palliative care',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2024/bowel-cancer',
    overview:
      'Bowel cancer is a leading cause of cancer death in Australia, and rates are rising in people under 50. GP endorsement is the strongest predictor of screening participation. GPs categorise family history risk, act on red flags at any age, and support survivors through surveillance, stoma and late-effect management, and palliative care.',
    sections: [
      {
        heading: 'Screening and risk',
        points: [
          'NBCSP: free iFOBT every 2 years from 45 to 74 (people aged 45–49 request their first kit). A positive iFOBT needs colonoscopy, ideally within 30 days.',
          'Category 1 (average or slightly above): 2-yearly iFOBT from 45.',
          'Category 2 (moderate): one FDR diagnosed before 55, or two FDRs at any age. Colonoscopy every 5 years from 50 (or 10 years before the youngest diagnosis).',
          'Category 3 (high): three or more relatives, a known syndrome (Lynch, FAP), or several relatives diagnosed young. Refer to a familial cancer service, which will usually arrange earlier and more frequent colonoscopy. Aspirin reduces cancer risk in Lynch syndrome.',
        ],
      },
      {
        heading: 'Red flags',
        points: [
          'Rectal bleeding (especially with a change in bowel habit), persistent change in bowel habit, iron deficiency anaemia, unexplained weight loss, abdominal or rectal mass, abdominal pain.',
          'Iron deficiency anaemia in men or postmenopausal women needs both gastroscopy AND colonoscopy.',
          'Do NOT use iFOBT to investigate symptoms. Symptomatic people need colonoscopy.',
          'Early-onset colorectal cancer (<50) is often diagnosed late. Do not dismiss bleeding as haemorrhoids without examination and a low threshold for referral.',
        ],
      },
      {
        heading: 'After treatment',
        points: [
          'Surveillance (stage I–III): clinical review and CEA every 3–6 months, CT chest/abdomen/pelvis at intervals for 3–5 years, colonoscopy at 1 year and then as advised.',
          'Late effects: oxaliplatin neuropathy, low anterior resection syndrome (urgency, frequency, clustering), sexual and urinary dysfunction, fatigue, fear of recurrence.',
          'Stoma: watch for high output (>1.5–2 L/day, causing dehydration and AKI; treat with loperamide and oral rehydration), skin irritation, parastomal hernia, retraction, prolapse. Involve a stoma nurse.',
          'Lifestyle: physical activity is associated with lower recurrence. Stop smoking, limit alcohol and red or processed meat.',
        ],
      },
      {
        heading: 'Supportive and palliative care',
        points: [
          'Common metastatic sites are liver and lung. New cough or breathlessness may reflect lung metastases, effusion or PE (cancer greatly increases VTE risk).',
          'Malignant bowel obstruction, ascites, pain and fatigue need a palliative approach and CPC input.',
          'Advance care planning should happen early. Address financial toxicity and carer needs.',
          'Use the Optimal Care Pathway for colorectal cancer to guide timely referral and follow-up.',
        ],
      },
    ],
    redFlags: [
      'Rectal bleeding plus change in bowel habit at any age.',
      'Iron deficiency anaemia without an obvious cause.',
      'Palpable rectal or abdominal mass.',
      'High stoma output with dizziness or reduced urine output.',
    ],
    examTips: [
      'Do not use iFOBT in symptomatic patients. This is a classic AKT distractor.',
      'Know the family history categories.',
      'IDA in a man means both upper and lower endoscopy.',
    ],
    mcqs: [
      {
        stem: 'A 38-year-old woman has 6 weeks of intermittent bright red rectal bleeding mixed with stool and looser bowel motions. Examination shows no haemorrhoids. What is the most appropriate next step?',
        options: ['iFOBT', 'Reassure – too young for cancer', 'Colonoscopy referral', 'Trial of fibre for 3 months', 'CEA level'],
        answer: 2,
        explanation: 'Red flags at any age need colonoscopy. Early-onset CRC is rising. iFOBT is for screening only.',
      },
      {
        stem: 'A 45-year-old man\'s brother was diagnosed with bowel cancer at 48. What is the recommended screening?',
        options: [
          'iFOBT every 2 years',
          'Colonoscopy every 5 years (starting now, as 10 years before brother\'s diagnosis is past)',
          'No screening until 50',
          'CT colonography annually',
          'Genetic testing only',
        ],
        answer: 1,
        explanation: 'One FDR diagnosed before 55 is Category 2. Colonoscopy every 5 years from age 50, or 10 years before the relative\'s diagnosis, whichever comes first.',
      },
      {
        stem: 'A 70-year-old man has Hb 105 g/L, ferritin 8 µg/L. He has no GI symptoms. What is the most appropriate investigation?',
        options: ['Iron infusion and review', 'Gastroscopy and colonoscopy', 'iFOBT', 'CT abdomen', 'Coeliac serology only'],
        answer: 1,
        explanation: 'Unexplained IDA in a man needs bidirectional endoscopy to exclude GI malignancy.',
      },
      {
        stem: 'A man with a new ileostomy reports 2.5 L/day output, dizziness and reduced urine. Which complication is most likely?',
        options: ['Parastomal hernia', 'High-output stoma with dehydration', 'Stoma prolapse', 'Bowel obstruction', 'Stoma retraction'],
        answer: 1,
        explanation: 'High output (>1.5–2 L/day) causes dehydration, AKI and hypomagnesaemia. Check UEC and Mg, rehydrate orally (restrict hypotonic fluids), and give loperamide.',
      },
      {
        stem: 'At what age can Australians first access a free NBCSP iFOBT kit?',
        options: ['40', '45', '50', '55', '60'],
        answer: 1,
        explanation: 'Since July 2024, people aged 45–49 can request a kit. Automatic mailing starts at 50 (per current program rules).',
      },
    ],
    kfp: [
      {
        title: 'Tom is seeking proactive measures',
        scenario:
          'Tom, 42, is well. His mother was diagnosed with bowel cancer at 46 and her sister with endometrial cancer at 50. His maternal grandfather had bowel cancer in his 60s.',
        questions: [
          {
            prompt: 'What is Tom\'s risk category and the most likely hereditary syndrome?',
            limit: 'Up to 2',
            answers: ['Category 3 – high risk', 'Lynch syndrome (hereditary non-polyposis colorectal cancer)'],
          },
          {
            prompt: 'List your management.',
            limit: 'Up to 4',
            answers: [
              'Refer to familial cancer centre for genetic counselling and testing (ideally test affected relative first / tumour MMR testing)',
              'Colonoscopy now and regular colonoscopic surveillance as advised (e.g. 1–2 yearly if Lynch confirmed)',
              'Discuss aspirin chemoprevention',
              'Cascade testing of relatives and education about other Lynch cancers',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '611',
    label: 'Unit 611',
    date: 'May 2024',
    title: 'Breast cancer',
    specialty: 'Oncology',
    alsoRelevant: ["Women's Health", 'Genetics', 'Preventive & Population Health'],
    topics: [
      'The triple test for breast symptoms',
      'Screening and risk categories',
      'Risk-reducing medicines',
      'Treatment: surgery, radiotherapy, endocrine, HER2, chemotherapy',
      'Follow-up and survivorship care',
      'Lifestyle risk reduction',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2024/breast-cancer',
    overview:
      'Breast cancer is the most common cancer in Australian women. GPs investigate symptoms with the triple test, assess familial risk to tailor screening, discuss risk-reducing options, and share survivorship care. That care includes managing the side effects of long-term endocrine therapy.',
    sections: [
      {
        heading: 'Triple test',
        points: [
          'Three components: 1) clinical history and examination, 2) imaging (mammogram + ultrasound if ≥35; ultrasound first if <35), 3) non-surgical biopsy (core biopsy preferred over FNA).',
          'The triple test is negative only if ALL components are benign. Any suspicious or malignant component means referral.',
          'A persistent lump needs full assessment even if imaging is normal. Imaging alone does not exclude cancer.',
          'Other symptoms: nipple change or bloody discharge, skin tethering or peau d\'orange, axillary nodes, unilateral eczematous nipple (Paget disease).',
        ],
      },
      {
        heading: 'Screening and risk',
        points: [
          'BreastScreen: free 2-yearly mammograms for women aged 50–74 (eligible from 40, and after 74).',
          'Assess family history (for example with iPrevent, or Cancer Australia\'s FG1 categories). Moderate risk may warrant earlier or annual mammography.',
          'High risk (such as BRCA1/2 carriers or a strong family history): annual MRI from about 30 (Medicare-funded under 50 for eligible women) plus mammography. Refer to a familial cancer clinic.',
          'Lifestyle risk factors: alcohol, postmenopausal obesity, physical inactivity, combined MHT. Protective: breastfeeding, exercise.',
        ],
      },
      {
        heading: 'Treatment and risk-reducing medicines',
        points: [
          'Early breast cancer: breast-conserving surgery + radiotherapy, or mastectomy. Sentinel node biopsy.',
          'ER-positive: endocrine therapy for 5–10 years (tamoxifen premenopausal; aromatase inhibitor postmenopausal). HER2-positive: trastuzumab (monitor cardiac function). Chemotherapy according to risk.',
          'Risk reduction for high-risk women: tamoxifen (pre- or postmenopausal), raloxifene or anastrozole (postmenopausal) for 5 years. This reduces incidence by about a third to a half.',
          'Tamoxifen: VTE, endometrial cancer (investigate any postmenopausal bleeding), hot flushes. Aromatase inhibitors: arthralgia and bone loss (DXA, calcium and vitamin D, ± antiresorptive).',
        ],
      },
      {
        heading: 'Survivorship',
        points: [
          'Follow-up: clinical review 6–12 monthly and annual mammography of the conserved or contralateral breast. Routine blood tumour markers and whole-body imaging are NOT recommended.',
          'Manage symptoms: menopausal symptoms (non-hormonal options; avoid systemic MHT), lymphoedema, fatigue, fear of recurrence, sexual health, cardiotoxicity.',
          'Endocrine therapy adherence drops over time. Ask about side effects at each visit.',
          'Contraception: non-hormonal (copper IUD) is preferred after breast cancer.',
        ],
      },
    ],
    redFlags: [
      'Breast lump in a woman of any age that persists after a period.',
      'Skin dimpling, peau d\'orange, nipple retraction, bloody discharge.',
      'New bone pain, breathlessness or headache in a survivor: possible metastases.',
      'Postmenopausal bleeding on tamoxifen.',
    ],
    examTips: [
      'Triple test: know the imaging choice by age (<35 ultrasound first).',
      'Know which risk-reducing drug suits pre- versus postmenopausal women.',
      'Routine tumour markers are not recommended in follow-up.',
    ],
    mcqs: [
      {
        stem: 'A 28-year-old woman has a 1.5 cm mobile, non-tender breast lump. Which imaging is most appropriate first?',
        options: ['Mammogram', 'Breast ultrasound', 'MRI', 'CT chest', 'PET scan'],
        answer: 1,
        explanation: 'Under 35, dense breast tissue limits mammography, so ultrasound is first-line imaging.',
      },
      {
        stem: 'A 45-year-old has a palpable lump; mammogram and ultrasound are normal. What should happen next?',
        options: [
          'Reassure and discharge',
          'Complete the triple test with core biopsy or specialist referral',
          'Repeat imaging in 2 years',
          'Start tamoxifen',
          'CA 15-3 tumour marker',
        ],
        answer: 1,
        explanation: 'A clinically suspicious lump needs tissue sampling even if imaging is normal. All three components must be benign.',
      },
      {
        stem: 'A postmenopausal woman on tamoxifen for 2 years reports vaginal bleeding. What is the next step?',
        options: ['Reassure', 'Transvaginal ultrasound and gynaecology referral', 'Stop tamoxifen and observe', 'Start MHT', 'Cervical screening only'],
        answer: 1,
        explanation: 'Tamoxifen increases the risk of endometrial hyperplasia and cancer.',
      },
      {
        stem: 'Which risk-reducing medicine is suitable for a premenopausal woman at high risk of breast cancer?',
        options: ['Anastrozole', 'Raloxifene', 'Tamoxifen', 'Letrozole', 'Exemestane'],
        answer: 2,
        explanation: 'Tamoxifen can be used before and after menopause. AIs and raloxifene are for postmenopausal women.',
      },
      {
        stem: 'A woman on an aromatase inhibitor should have which monitoring?',
        options: ['Annual echocardiogram', 'Bone density (DXA) at baseline and periodically', 'Monthly LFT', 'CA 15-3 every 3 months', 'Annual PET'],
        answer: 1,
        explanation: 'AIs accelerate bone loss. Check DXA and give calcium, vitamin D and antiresorptive therapy if indicated.',
      },
    ],
    kfp: [
      {
        title: 'Marie has a lump in her breast',
        scenario:
          'Marie, 52, found a lump in her left breast 2 weeks ago. Her last BreastScreen was 3 years ago. Examination: 2 cm firm, irregular mass upper outer quadrant, no skin changes, a palpable left axillary node.',
        questions: [
          {
            prompt: 'List the investigations you would arrange.',
            limit: 'Up to 3',
            answers: [
              'Diagnostic bilateral mammogram',
              'Breast and axillary ultrasound',
              'Image-guided core biopsy (of mass ± node)',
            ],
          },
          {
            prompt: 'Biopsy shows invasive ductal carcinoma, ER+, HER2-. List your next steps.',
            limit: 'Up to 4',
            answers: [
              'Urgent referral to breast surgeon / multidisciplinary team',
              'Break news sensitively; provide support (breast care nurse, psychology)',
              'Offer written information and involve support person',
              'Assess family history for genetic referral',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '610',
    label: 'Unit 610',
    date: 'Apr 2024',
    title: 'Heart disease',
    specialty: 'Cardiology',
    alsoRelevant: ["Women's Health", 'Preventive & Population Health', 'Aged Care'],
    topics: [
      'Australian CVD risk calculator (2023)',
      'Sex-specific cardiovascular risk factors in women',
      'Angina and atypical presentations',
      'Heart failure after discharge: four pillars',
      'Valvular heart disease, especially aortic stenosis',
      'Palpitations and reassurance',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2024/heart-disease',
    overview:
      'Heart disease is Australia\'s leading single cause of death. Use the 2023 Australian CVD risk calculator and consider risk-enhancing factors, including those unique to women. Titrate heart failure therapy quickly after discharge, and pick up valve disease early from symptoms and murmurs.',
    sections: [
      {
        heading: 'CVD risk assessment',
        points: [
          'Use the Australian CVD risk calculator (2023) for people aged 45–79 without CVD (from 30 for Aboriginal and Torres Strait Islander people). It gives 5-year risk: high ≥10%, intermediate 5–<10%, low <5%.',
          'Clinically high risk without calculation: established CVD, familial hypercholesterolaemia, moderate to severe CKD, and some people with diabetes and kidney disease.',
          'Reclassification factors: family history of premature CVD, CAC score, ethnicity (for example South Asian, Māori, Pacific), severe mental illness.',
          'High risk: lifestyle measures plus BP-lowering and lipid-lowering therapy. Intermediate: consider medicines and use shared decision-making.',
        ],
      },
      {
        heading: 'Women and heart disease',
        points: [
          'Female-specific risk factors: pre-eclampsia, gestational hypertension, gestational diabetes, preterm birth, PCOS, early menopause (<45), autoimmune disease (SLE, RA).',
          'Women with ACS more often present with breathlessness, fatigue, nausea, or jaw, back or epigastric pain. They are under-investigated.',
          'Consider spontaneous coronary artery dissection (SCAD) in young and peripartum women, and microvascular angina (INOCA).',
          'Ask about pregnancy history at every CVD risk assessment.',
        ],
      },
      {
        heading: 'Heart failure',
        points: [
          'Diagnose with NT-proBNP and echocardiogram. HFrEF means LVEF ≤40%.',
          'Four pillars for HFrEF, started early and together: ACEi/ARB/ARNI (sacubitril–valsartan), β-blocker (bisoprolol, carvedilol, metoprolol succinate), MRA (spironolactone, eplerenone), SGLT2 inhibitor.',
          'Titrate every 2 weeks toward target doses. Monitor K⁺ and creatinine. Diuretics are for congestion and do not change prognosis.',
          'After discharge: GP review within 7 days, daily weights (report >2 kg in 2 days), cardiac rehabilitation, vaccination, and avoid NSAIDs and non-dihydropyridine CCBs.',
        ],
      },
      {
        heading: 'Valve disease',
        points: [
          'Aortic stenosis: exertional breathlessness, angina, syncope, "slowing down". Ejection systolic murmur radiating to the carotids, slow-rising pulse, soft S2.',
          'Echocardiography grades severity. Symptomatic severe AS needs referral for TAVI or surgical AVR, as prognosis without it is poor.',
          'Mitral regurgitation (pansystolic murmur at the apex radiating to the axilla) can cause AF and heart failure.',
          'Any new murmur with breathlessness, syncope or chest pain needs echocardiography.',
        ],
      },
    ],
    redFlags: [
      'Exertional syncope: severe AS, HOCM or arrhythmia.',
      'Chest pain at rest or crescendo angina: ACS.',
      'Rapid weight gain, orthopnoea and oedema: decompensated heart failure.',
      'Hyperkalaemia on an MRA + ACEi/ARNI.',
    ],
    examTips: [
      'Know the four HF pillars and the drugs that worsen HF (NSAIDs, verapamil, diltiazem, pioglitazone).',
      'Pregnancy complications are CVD risk factors, and are examined often.',
      'The classic triad of aortic stenosis is angina, syncope and dyspnoea.',
    ],
    mcqs: [
      {
        stem: 'A 52-year-old woman had pre-eclampsia and gestational diabetes. Her calculated 5-year CVD risk is 6%. How should her pregnancy history be used?',
        options: [
          'Ignore – not relevant after 20 years',
          'As a risk-enhancing factor supporting more intensive prevention',
          'Only relevant if pregnant again',
          'Means she has established CVD',
          'Only affects diabetes screening',
        ],
        answer: 1,
        explanation: 'Pregnancy complications increase lifetime CVD risk and can support reclassification to a higher risk category.',
      },
      {
        stem: 'A 70-year-old man with HFrEF (EF 30%) is discharged on furosemide and ramipril. Which additions most improve prognosis?',
        options: [
          'Digoxin and amiodarone',
          'β-blocker, MRA and SGLT2 inhibitor',
          'Diltiazem',
          'Increase furosemide only',
          'Aspirin and clopidogrel',
        ],
        answer: 1,
        explanation: 'The four pillars (RAS inhibitor/ARNI, β-blocker, MRA, SGLT2i) each reduce mortality or hospitalisation.',
      },
      {
        stem: 'An 80-year-old man reports exertional dizziness and breathlessness. There is a harsh ejection systolic murmur radiating to the carotids. What is the most likely diagnosis?',
        options: ['Mitral regurgitation', 'Aortic stenosis', 'Aortic regurgitation', 'VSD', 'Innocent flow murmur'],
        answer: 1,
        explanation: 'Symptomatic AS needs echocardiography and valve intervention assessment.',
      },
      {
        stem: 'Which medicine should be avoided in heart failure with reduced ejection fraction?',
        options: ['Bisoprolol', 'Spironolactone', 'Verapamil', 'Dapagliflozin', 'Sacubitril–valsartan'],
        answer: 2,
        explanation: 'Non-dihydropyridine CCBs are negatively inotropic and worsen HFrEF.',
      },
      {
        stem: 'From what age is the Australian CVD risk calculator recommended for Aboriginal and Torres Strait Islander people?',
        options: ['18', '30', '45', '50', '60'],
        answer: 1,
        explanation: 'The 2023 guideline recommends risk assessment from age 30 for Aboriginal and Torres Strait Islander people, and 45 for others.',
      },
    ],
    kfp: [
      {
        title: 'Greg is seeking treatment following hospital discharge',
        scenario:
          'Greg, 66, was discharged 4 days ago after his first admission with heart failure. Echo: LVEF 30%. Discharge medicines: furosemide 40 mg daily, perindopril 2.5 mg daily. BP 118/72, HR 88 regular, K⁺ 4.3, eGFR 62. He is mildly breathless on exertion, with no oedema.',
        questions: [
          {
            prompt: 'List the medicine changes you would make over the coming weeks.',
            limit: 'Up to 4',
            answers: [
              'Start β-blocker (e.g. bisoprolol 1.25 mg daily) and titrate',
              'Start SGLT2 inhibitor (dapagliflozin or empagliflozin 10 mg daily)',
              'Start MRA (spironolactone 12.5–25 mg daily) with K⁺/creatinine monitoring',
              'Uptitrate perindopril or switch to sacubitril–valsartan; reduce diuretic if euvolaemic',
            ],
          },
          {
            prompt: 'List non-pharmacological management.',
            limit: 'Up to 4',
            answers: [
              'Daily weights with action plan (report >2 kg gain in 2 days)',
              'Cardiac rehabilitation / heart failure program referral',
              'Influenza, pneumococcal, COVID vaccination',
              'Education: avoid NSAIDs, salt moderation, alcohol limit, smoking cessation',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '609',
    label: 'Unit 609',
    date: 'Mar 2024',
    title: 'Dementia',
    specialty: 'Aged Care',
    alsoRelevant: ['Neurology', 'Aboriginal & Torres Strait Islander Health', 'Professional & Ethical Practice'],
    topics: [
      'Cognitive assessment tools (MoCA, RUDAS, KICA, GPCOG)',
      'Dementia in Aboriginal and Torres Strait Islander peoples',
      'Delirium versus dementia',
      'Younger-onset dementia',
      'Mild cognitive impairment',
      'Capacity assessment and ongoing review',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2024/sports-medicine',
    overview:
      'Dementia is the second leading cause of death in Australia. Diagnosis is often delayed. GPs choose culturally appropriate tools, exclude delirium and reversible causes, and recognise younger-onset and mimic presentations. They plan early for capacity, driving, and support, and review regularly as function changes.',
    sections: [
      {
        heading: 'Assessment tools',
        points: [
          'MoCA: sensitive for MCI (score <26 abnormal). MMSE: less sensitive, used for PBS medicine criteria. GPCOG: quick, includes informant questions.',
          'RUDAS: less influenced by culture, language and education, so it suits CALD populations. Use professional interpreters.',
          'KICA (Kimberley Indigenous Cognitive Assessment) for remote Aboriginal and Torres Strait Islander communities. Good Spirit Good Life is a quality-of-life tool.',
          'Always get a collateral history from family or carers, and assess function (IADLs, ADLs).',
        ],
      },
      {
        heading: 'Work-up',
        points: [
          'Exclude delirium: acute onset, fluctuating, inattention, altered consciousness. Use the 4AT or CAM. Look for infection, medicines, retention, constipation, pain.',
          'Bloods: FBC, UEC, calcium, LFT, TSH, B12, folate, glucose. Syphilis or HIV serology if at risk. Brain CT or MRI.',
          'Screen for depression and anxiety, which can mimic or accompany dementia. Check hearing and vision.',
          'Review anticholinergic burden (oxybutynin, TCAs, antihistamines) and sedatives.',
        ],
      },
      {
        heading: 'Special groups',
        points: [
          'Aboriginal and Torres Strait Islander peoples: dementia rates 3–5 times higher, with earlier onset. Risk factors include head injury, stroke, diabetes, alcohol and social disadvantage. Use culturally safe, family-inclusive approaches.',
          'Younger-onset dementia (<65): consider frontotemporal dementia (behaviour or language change), early Alzheimer disease, alcohol-related brain injury, HIV, and genetic causes. Refer to specialist services. NDIS eligibility applies under 65.',
          'MCI: cognitive decline with preserved independence. About 10–15% progress to dementia each year. Manage vascular risk, hearing, activity and sleep, and repeat cognitive testing in 6–12 months.',
          'Modifiable dementia risk factors include hearing loss, high LDL, hypertension, diabetes, smoking, inactivity, depression, social isolation, air pollution and vision loss.',
        ],
      },
      {
        heading: 'Management and capacity',
        points: [
          'Cholinesterase inhibitors (donepezil, rivastigmine, galantamine) for mild to moderate Alzheimer disease. Watch for bradycardia, syncope and GI effects. Memantine for moderate to severe disease. Anti-amyloid antibodies are specialist-only and need careful selection.',
          'Capacity is decision-specific. Can the person understand, retain, use and weigh the information, and communicate a choice? Encourage early enduring power of attorney and guardianship arrangements, plus advance care planning.',
          'Driving: assess against Assessing Fitness to Drive. Consider an OT driving assessment.',
          'BPSD: non-drug strategies first. Antipsychotics only for severe distress or risk, for short periods, with consent (stroke and mortality risk). Dementia Australia and carer support.',
        ],
      },
    ],
    redFlags: [
      'Rapidly progressive cognitive decline (weeks to months): CJD, tumour, encephalitis. Refer urgently.',
      'Acute confusion: delirium.',
      'Cognitive change with focal neurology or headache.',
      'Unsafe driving, wandering, elder abuse or self-neglect.',
    ],
    examTips: [
      'Know which tool to use: RUDAS for CALD, KICA for remote Aboriginal communities.',
      'Delirium vs dementia is a favourite question.',
      'Capacity is decision-specific and time-specific.',
    ],
    mcqs: [
      {
        stem: 'An 80-year-old woman became confused over 2 days, with fluctuating alertness and poor attention. What is the most likely diagnosis?',
        options: ['Alzheimer disease', 'Delirium', 'Vascular dementia', 'Depression', 'Frontotemporal dementia'],
        answer: 1,
        explanation: 'Acute onset, fluctuation and inattention define delirium. Look for the precipitant.',
      },
      {
        stem: 'Which cognitive screening tool is most appropriate for an older Vietnamese-speaking man with limited formal education?',
        options: ['MMSE in English', 'RUDAS with a professional interpreter', 'Clock drawing only', 'MoCA in English', 'No testing possible'],
        answer: 1,
        explanation: 'RUDAS is designed to minimise cultural and educational bias.',
      },
      {
        stem: 'A 56-year-old man has 1 year of disinhibition, apathy, overeating and poor judgement; memory is relatively preserved. What is the most likely diagnosis?',
        options: ['Alzheimer disease', 'Behavioural variant frontotemporal dementia', 'Depression', 'Lewy body dementia', 'Normal pressure hydrocephalus'],
        answer: 1,
        explanation: 'Early behaviour and personality change with preserved memory suggests bvFTD.',
      },
      {
        stem: 'Which adverse effect should be monitored when starting donepezil?',
        options: ['Tachycardia', 'Bradycardia and syncope', 'Hyperkalaemia', 'Hypoglycaemia', 'Weight gain'],
        answer: 1,
        explanation: 'Cholinergic effects include bradycardia, heart block and syncope. Also GI upset and vivid dreams.',
      },
      {
        stem: 'A man with moderate dementia wants to sell his house. What is the correct approach to capacity?',
        options: [
          'He lacks capacity for all decisions because of dementia',
          'Assess his capacity for this specific decision',
          'His family decides',
          'Capacity only assessed by a psychiatrist',
          'MMSE <20 means incapacity',
        ],
        answer: 1,
        explanation: 'Capacity is decision-specific. A diagnosis or score alone does not determine it.',
      },
    ],
    kfp: [
      {
        title: 'Sophie is concerned about her mother',
        scenario:
          'Sophie brings her mother Maria, 76, who has become forgetful over 18 months: repeating questions, missing bills and getting lost driving once. Maria speaks Italian as her first language and left school at 12. She takes oxybutynin and amitriptyline.',
        questions: [
          {
            prompt: 'List the key steps in your assessment.',
            limit: 'Up to 5',
            answers: [
              'Collateral history from Sophie including function (IADLs/ADLs)',
              'Culturally appropriate cognitive test (e.g. RUDAS) with professional interpreter',
              'Screen for depression and delirium; hearing/vision check',
              'Reversible-cause bloods (FBC, UEC, Ca, LFT, TSH, B12, folate, glucose) and brain imaging',
              'Medication review – anticholinergic burden (oxybutynin, amitriptyline)',
            ],
          },
          {
            prompt: 'List the key safety and planning issues to address.',
            limit: 'Up to 4',
            answers: [
              'Driving safety – assess fitness to drive / OT driving assessment; licensing notification',
              'Enduring power of attorney / guardianship and advance care planning while capacity present',
              'Financial safety and elder abuse risk',
              'Carer support – Dementia Australia, My Aged Care assessment',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '608',
    label: 'Unit 608',
    date: 'Feb 2024',
    title: 'Pancreatic cancer',
    specialty: 'Oncology',
    alsoRelevant: ['Gastroenterology & Hepatology', 'Genetics', 'Palliative Care'],
    topics: [
      'Early signs and symptoms of pancreatic cancer',
      'New-onset diabetes as a warning sign',
      'Pancreatic cystic lesions',
      'High-risk individuals and surveillance',
      'Investigations and the optimal care pathway',
      'Supportive care: pain, PERT, VTE, mood',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2024/pancreatic-cancer',
    overview:
      'Pancreatic cancer has one of the lowest 5-year survival rates, around 12%. Only about 20% of patients are diagnosed with resectable disease. GPs can shorten time to diagnosis by acting on vague but persistent symptoms and investigating new-onset diabetes with weight loss. They also start supportive care early: enzymes, pain, VTE and psychological support.',
    sections: [
      {
        heading: 'Symptoms',
        points: [
          'Early symptoms are vague: epigastric pain radiating to the back, often worse at night or lying flat; weight loss; anorexia; dyspepsia not responding to PPI; fatigue.',
          'Painless obstructive jaundice with dark urine, pale stools and itch (pancreatic head tumour). A palpable gallbladder may be present.',
          'New-onset diabetes in people over 50, especially with weight loss or without typical risk factors, can be an early sign.',
          'Steatorrhoea from exocrine insufficiency, unexplained VTE (Trousseau), depression.',
        ],
      },
      {
        heading: 'Investigation and referral',
        points: [
          'Pancreatic protocol (multiphase) CT abdomen is the first-line test. Ultrasound may miss small tumours.',
          'LFT (cholestatic pattern), FBC, glucose/HbA1c. CA19-9 supports diagnosis but is not diagnostic (false positive in cholestasis, false negative in Lewis antigen-negative people).',
          'The Optimal Care Pathway recommends specialist review within 2 weeks of suspicion. Refer to a high-volume pancreatic MDT. EUS-guided biopsy for tissue.',
          'Don\'t delay referral for jaundice while waiting for markers.',
        ],
      },
      {
        heading: 'Cysts and high-risk individuals',
        points: [
          'Most incidental cysts are benign. Mucinous cysts (IPMN, MCN) need MRI surveillance, and worrisome features need EUS or surgical review.',
          'High risk: strong family history (≥2 affected relatives including an FDR), germline BRCA2/BRCA1/PALB2/ATM, Lynch, CDKN2A, STK11, hereditary pancreatitis.',
          'Surveillance (MRI/EUS) for high-risk people is arranged through familial cancer and specialist pancreatic services.',
          'Modifiable risks: smoking (doubles risk), obesity, diabetes, heavy alcohol use (via chronic pancreatitis).',
        ],
      },
      {
        heading: 'Supportive care',
        points: [
          'PERT for most patients with pancreatic head cancer. It improves weight and quality of life.',
          'Pain: opioids, coeliac plexus block, radiotherapy.',
          'Cancer-associated VTE: LMWH or a DOAC. Treat biliary obstruction with stenting. Manage cachexia with dietitian input.',
          'High rates of depression and anxiety. Early palliative care improves quality of life. Discuss prognosis and goals early.',
        ],
      },
    ],
    redFlags: [
      'Painless jaundice with weight loss.',
      'New diabetes over 50 with weight loss.',
      'Unexplained upper abdominal or back pain with weight loss.',
      'Unprovoked VTE with systemic symptoms.',
    ],
    examTips: [
      'The first-line test is pancreatic protocol CT, not CA19-9.',
      'New-onset diabetes with weight loss is an important trigger.',
      'Refer within 2 weeks under the Optimal Care Pathway.',
    ],
    mcqs: [
      {
        stem: 'A 68-year-old woman has 2 weeks of painless jaundice, pale stools and 5 kg weight loss. What is the most appropriate investigation?',
        options: ['CA19-9 alone', 'Pancreatic protocol CT abdomen', 'Hepatitis serology only', 'Abdominal X-ray', 'Repeat LFT in 6 weeks'],
        answer: 1,
        explanation: 'Painless jaundice with weight loss suggests a pancreatic head tumour, so urgent CT is needed.',
      },
      {
        stem: 'A 63-year-old lean man with no family history is newly diagnosed with diabetes and has lost 6 kg unintentionally. What should be considered?',
        options: ['Type 2 diabetes only', 'Pancreatic cancer', 'Coeliac disease only', 'Addison disease', 'Hyperthyroidism'],
        answer: 1,
        explanation: 'New-onset diabetes with weight loss in older adults warrants evaluation for pancreatic cancer.',
      },
      {
        stem: 'Which statement about CA19-9 is correct?',
        options: [
          'It is a good population screening test',
          'It can be raised in benign biliary obstruction',
          'It is always raised in pancreatic cancer',
          'A normal result excludes cancer',
          'It is specific to pancreatic cancer',
        ],
        answer: 1,
        explanation: 'CA19-9 lacks sensitivity and specificity. It is useful for monitoring, not screening.',
      },
      {
        stem: 'Which is the strongest modifiable risk factor for pancreatic cancer?',
        options: ['Coffee', 'Smoking', 'Red wine', 'Spicy food', 'Dairy'],
        answer: 1,
        explanation: 'Smoking roughly doubles the risk. Obesity and diabetes also contribute.',
      },
      {
        stem: 'A patient with pancreatic cancer has weight loss and oily stools. What is the most appropriate treatment?',
        options: ['Low-fat diet', 'Pancreatic enzyme replacement therapy with meals', 'Loperamide', 'Octreotide', 'Metronidazole'],
        answer: 1,
        explanation: 'PERT treats exocrine insufficiency and improves nutrition and quality of life.',
      },
    ],
    kfp: [
      {
        title: 'Anita has yellow eyes',
        scenario:
          'Anita, 71, has noticed yellow eyes and itchy skin for 10 days, with dark urine. She has lost 4 kg over 2 months and has vague epigastric discomfort. No fever. Bilirubin 180 µmol/L, ALP 520, GGT 610, ALT 140.',
        questions: [
          {
            prompt: 'List the most likely diagnoses.',
            limit: 'Up to 3',
            answers: ['Pancreatic head adenocarcinoma', 'Cholangiocarcinoma / periampullary tumour', 'Choledocholithiasis (less likely without pain/fever)'],
          },
          {
            prompt: 'List your next steps.',
            limit: 'Up to 4',
            answers: [
              'Urgent pancreatic protocol CT abdomen (± ultrasound)',
              'Urgent referral to hepatobiliary/pancreatic surgical unit (within 2 weeks)',
              'Bloods: FBC, UEC, INR (vitamin K), glucose/HbA1c, CA19-9',
              'Symptom management (itch) and safety-netting for cholangitis (fever, rigors)',
            ],
          },
        ],
      },
    ],
  },
]

export default units
