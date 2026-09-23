import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  '612': {
    sections: [
      {
        heading: 'Epidemiology and early-onset bowel cancer',
        points: [
          'Bowel (colorectal) cancer is among the most common cancers in Australia, with around 15,000 new cases a year. Five-year survival is over 90% for stage I but under 15% for stage IV.',
          'Incidence in people under 50 has been rising for two decades. These patients often present later because symptoms are attributed to benign causes.',
          'Risk factors: age, family history, inherited syndromes (Lynch, FAP), IBD, previous adenomas, obesity, physical inactivity, red and processed meat, alcohol, smoking, type 2 diabetes.',
          'Protective factors: physical activity, dietary fibre, wholegrains, dairy (calcium), and aspirin in selected people.',
          'Most cancers arise from adenomatous or serrated polyps over about 10 years. That is why screening reduces both incidence and mortality.',
        ],
      },
      {
        heading: 'Increasing screening participation',
        points: [
          'NBCSP participation is only about 40%. GP endorsement is one of the strongest predictors of participation.',
          'Practice strategies: flag eligible patients in the software, discuss at health checks (45–49 and 75+ health assessments), send GP endorsement letters, and use the National Cancer Screening Register (the Participant Management tab shows history and lets you order a replacement kit).',
          'Alternative access: GPs can issue kits directly to patients (the NBCSP alternative access model), especially helpful for Aboriginal and Torres Strait Islander people and people who have lost their kit.',
          'Address barriers: disgust or fear, low health literacy, language (translated instructions), belief that "no symptoms means no cancer", and cost or access to colonoscopy.',
          'A positive iFOBT must be followed by colonoscopy. About a quarter of people do not follow up, so track results and actively recall.',
        ],
      },
      {
        heading: 'Familial risk and genetics',
        points: [
          'Take a three-generation family history of bowel and other cancers (endometrial, ovarian, gastric, urinary tract, small bowel, pancreatic) and ages at diagnosis.',
          'Lynch syndrome (MLH1, MSH2, MSH6, PMS2, EPCAM): lifetime bowel cancer risk up to about 50–70% depending on the gene, plus endometrial and ovarian cancer. Tumours are tested for mismatch repair deficiency (universal testing of CRC in Australia), which prompts germline testing.',
          'FAP (APC gene): hundreds to thousands of adenomas, with near-100% cancer risk without colectomy. Surveillance starts in the teens. MUTYH-associated polyposis is recessive.',
          'Surveillance for Lynch: colonoscopy every 1–2 years from age 25 (varies by gene). Aspirin (for example 100–600 mg daily for 2 years or more) reduces risk. Consider gynaecological risk-reducing surgery after childbearing.',
          'Familial cancer centres provide counselling, testing and cascade testing for relatives.',
        ],
      },
      {
        heading: 'Symptoms and the diagnostic pathway',
        points: [
          'Red flags: rectal bleeding (especially dark or mixed with stool), change in bowel habit for over 6 weeks, iron deficiency anaemia, unexplained weight loss, abdominal pain, abdominal or rectal mass, tenesmus.',
          'Examination: abdomen (masses, hepatomegaly), digital rectal examination (low rectal tumours are palpable), and look for anaemia.',
          'Tests: FBC, iron studies, LFT, CEA (not for diagnosis, but a useful baseline), and colonoscopy. Refer urgently via the Optimal Care Pathway, where symptomatic people should have colonoscopy within 30 days.',
          'CT colonography is an alternative if colonoscopy is unsuitable. Staging for confirmed cancer: CT chest, abdomen and pelvis, plus MRI pelvis for rectal cancer.',
          'Emergency presentations (obstruction, perforation, bleeding) have worse outcomes. Early referral prevents them.',
        ],
      },
      {
        heading: 'Treatment overview',
        points: [
          'Colon cancer: surgical resection (often laparoscopic) with lymph node sampling, plus adjuvant chemotherapy (FOLFOX or CAPOX) for stage III and high-risk stage II.',
          'Rectal cancer: neoadjuvant chemoradiotherapy or total neoadjuvant therapy, then total mesorectal excision. Some complete responders may choose "watch and wait".',
          'Metastatic disease: systemic therapy (chemotherapy, anti-EGFR for RAS wild-type, anti-VEGF, and immunotherapy for MSI-high tumours). Resection of limited liver or lung metastases can be curative.',
          'Stomas: temporary loop ileostomy (to protect an anastomosis, reversed after months) or permanent colostomy (for low rectal tumours with abdominoperineal resection).',
          'Enhanced recovery after surgery (ERAS) programs speed recovery. Prehabilitation (exercise, nutrition, stopping smoking) improves outcomes.',
        ],
      },
      {
        heading: 'Survivorship care in general practice',
        points: [
          'Surveillance (stage I–III): history and examination with CEA every 3–6 months for 2–3 years, then 6-monthly to 5 years. CT chest, abdomen and pelvis at intervals (for example yearly for 3–5 years). Colonoscopy at 1 year, then per findings.',
          'A rising CEA or new symptoms (bone pain, cough, weight loss, jaundice) need prompt imaging and oncology review.',
          'Low anterior resection syndrome (after rectal surgery): frequency, urgency, clustering and incontinence. Manage with diet, loperamide, pelvic floor physiotherapy, and transanal irrigation.',
          'Chemotherapy late effects: oxaliplatin neuropathy (may persist), fatigue, cognitive changes, and cardiotoxicity (fluoropyrimidines can cause coronary vasospasm).',
          'Psychosocial: fear of recurrence, body image with a stoma, sexual dysfunction (nerve damage after pelvic surgery), return to work, financial stress. Support groups and cancer nurse coordinators help.',
          'Lifestyle: physical activity (150+ minutes a week) is associated with lower recurrence and mortality, along with a healthy weight, less alcohol and not smoking. Screen family members.',
        ],
      },
      {
        heading: 'Stoma care essentials',
        points: [
          'A healthy stoma is moist, pink-red and slightly protruding. Colostomies produce formed stool. Ileostomies produce liquid-to-porridge output (500–1000 mL a day once settled).',
          'Common problems: peristomal skin irritation (poorly fitting appliance, leakage), parastomal hernia (bulging, poor seal; use support garments and refer if symptomatic), prolapse, retraction, stenosis, and bleeding from the stoma surface.',
          'High-output ileostomy (over 1.5–2 L a day): dehydration, AKI, hypomagnesaemia. Restrict hypotonic fluids, use oral rehydration solution, loperamide (high doses may be needed, taken before meals), and consider a PPI. Refer if persistent.',
          'Medicines: avoid enteric-coated and modified-release formulations with ileostomies (poor absorption). Oral contraceptives may be less reliable with high output.',
          'Stoma Appliance Scheme: supplies are free through stoma associations once registered. Stomal therapy nurses are key contacts.',
          'Blocked ileostomy (food bolus): no output, cramps, swelling. Avoid high-fibre foods early, and seek urgent review if symptoms persist.',
        ],
      },
    ],
    keyNumbers: [
      'NBCSP: iFOBT every 2 years, 45–74',
      'Positive iFOBT → colonoscopy within 30 days',
      'Symptomatic colonoscopy: within 30 days (OCP)',
      'Lynch: colonoscopy every 1–2 years from ~25',
      'Post-treatment CEA every 3–6 months for 2–3 years',
      'High-output ileostomy: >1.5–2 L/day',
      'Physical activity ≥150 min/week reduces recurrence',
      'Stage I 5-year survival >90%',
    ],
    workedCase: {
      title: 'Linh is feeling off',
      paragraphs: [
        'Linh, 44, a Vietnamese-Australian accountant, has felt tired for 3 months. She attributes occasional blood on the toilet paper to haemorrhoids after her second child. She has had looser stools for 2 months. Her father had "bowel trouble" in his 50s. She is too young for the screening program invitation.',
        'Examination shows pallor and no palpable mass. A DRE is normal. Bloods: Hb 98 g/L, MCV 71, ferritin 6. Iron deficiency anaemia plus a change in bowel habit and bleeding are red flags at any age. You refer her for urgent colonoscopy and gastroscopy under the Optimal Care Pathway, and you do not order an iFOBT.',
        'Colonoscopy shows a sigmoid adenocarcinoma. Mismatch repair testing on the tumour shows MSH2 loss, and germline testing confirms Lynch syndrome. After resection (stage II), she needs colonoscopic surveillance and gynaecological risk discussion. The familial cancer centre offers cascade testing to her siblings and children.',
        'You coordinate survivorship care: CEA and imaging schedule, IV iron, support for returning to work, psychological support, and aspirin after discussion with her oncologist. You ensure her siblings are contacted by the familial cancer service.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Bowel cancer screening and surveillance',
        lead: 'Choose the SINGLE most appropriate recommendation for each person.',
        options: [
          'iFOBT every 2 years from 45',
          'Colonoscopy every 5 years from 50 (or 10 years before youngest relative\'s diagnosis)',
          'Referral to familial cancer centre',
          'Urgent colonoscopy (symptomatic)',
          'Colonoscopy every 1–2 years from 25',
          'No screening needed',
          'CT colonography only',
        ],
        items: [
          { stem: 'A 46-year-old with no symptoms whose grandmother had bowel cancer at 80.', answer: 0 },
          { stem: 'A 38-year-old with confirmed Lynch syndrome (MSH2).', answer: 4 },
          { stem: 'A 45-year-old whose mother had bowel cancer at 52.', answer: 1 },
          { stem: 'A 60-year-old with 2 months of dark blood mixed with stool and weight loss.', answer: 3 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Carrick is tired',
        scenario:
          'Carrick, 67, a retired farmer, presents with 4 months of fatigue and breathlessness on exertion. He has not done the bowel screening kits "because I feel fine down there". He takes aspirin 100 mg daily. Hb is 92 g/L, MCV 70, ferritin 4 µg/L.',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the most appropriate next investigation?',
            options: ['iFOBT', 'Gastroscopy and colonoscopy', 'CT chest', 'Bone marrow biopsy', 'Coeliac serology only and oral iron'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO additional steps are appropriate while awaiting endoscopy?',
            options: [
              'Start iron replacement (oral or IV)',
              'Check coeliac serology',
              'Stop aspirin without assessing indication',
              'Arrange a blood transfusion',
              'Delay endoscopy until iron replete',
            ],
            answers: [0, 1],
          },
          {
            kind: 'sba',
            context: 'Colonoscopy shows a caecal adenocarcinoma. Staging CT shows no metastases.',
            stem: 'What is the most likely treatment pathway?',
            options: [
              'Right hemicolectomy ± adjuvant chemotherapy depending on stage',
              'Chemoradiotherapy then surgery',
              'Palliative care only',
              'Endoscopic polypectomy only',
              'Hormone therapy',
            ],
            answer: 0,
          },
          {
            kind: 'emq',
            theme: 'Follow-up after treatment',
            lead: 'Choose the SINGLE most appropriate action for each finding during surveillance.',
            options: [
              'Continue routine surveillance',
              'Urgent CT and oncology review',
              'Colonoscopy at 1 year',
              'Stop surveillance',
              'Iron studies and review',
            ],
            items: [
              { stem: 'Timing of first surveillance colonoscopy after resection', answer: 2 },
              { stem: 'CEA rises from 2 to 11 µg/L over 3 months', answer: 1 },
              { stem: 'Stable CEA and normal CT at 18 months', answer: 0 },
            ],
          },
          {
            kind: 'multi',
            stem: 'Which TWO actions address prevention for his family?',
            options: [
              'Advise his children about screening and family history (risk category assessment)',
              'Encourage participation in the NBCSP for eligible relatives',
              'All relatives need annual colonoscopy',
              'No action is needed for family',
              'Relatives should take iron supplements',
            ],
            answers: [0, 1],
          },
        ],
      },
    ],
  },
  '611': {
    sections: [
      {
        heading: 'Epidemiology and risk factors',
        points: [
          'About 1 in 7 Australian women will be diagnosed with breast cancer by age 85. Five-year survival is about 92%. Men account for around 1% of cases.',
          'Non-modifiable risk factors: age, female sex, family history, genetic variants (BRCA1, BRCA2, PALB2, TP53, PTEN, CHEK2, ATM), dense breasts, previous chest radiotherapy (for example Hodgkin lymphoma), early menarche and late menopause, previous atypical hyperplasia or LCIS.',
          'Modifiable: alcohol (risk rises with each daily drink), postmenopausal obesity, physical inactivity, combined MHT, and not breastfeeding.',
          'Risk assessment tools: iPrevent (an Australian online tool integrating family history and lifestyle), and Cancer Australia\'s family history categories.',
          'Men with breast cancer or a BRCA2 variant, or a family with male breast cancer, need genetic referral.',
        ],
      },
      {
        heading: 'The triple test in detail',
        points: [
          'Clinical assessment: history (duration, change with cycle, nipple discharge, skin changes, risk factors) and examination of both breasts and axillae. Describe the lump by size, position (clock face), consistency, mobility and tethering.',
          'Imaging under 35: ultrasound first (dense tissue limits mammography), and add mammography if the ultrasound or clinical features are suspicious. Age 35 and over: diagnostic mammogram plus ultrasound.',
          'Non-surgical biopsy: core biopsy (preferred, as it gives histology, receptor status and invasiveness) or FNA (cytology, sometimes for cysts or nodes).',
          'Imaging scores: BI-RADS or the Australian synoptic 1–5 (1 normal, 2 benign, 3 indeterminate, 4 suspicious, 5 malignant). Any score of 3 or more needs further assessment.',
          'Concordance matters: if any component is abnormal or the results are discordant (for example a suspicious clinical lump with benign imaging), the triple test is NOT negative. Refer.',
          'Common benign findings: fibroadenoma (young women, mobile, well defined), cysts (often perimenopausal, aspirate if symptomatic), fibrocystic change, fat necrosis (after trauma).',
        ],
      },
      {
        heading: 'Screening for women at different risk levels',
        points: [
          'Average or slightly above average risk (about 95% of women): BreastScreen mammography every 2 years from 50 to 74. Women aged 40–49 and over 75 are eligible.',
          'Moderate risk (for example one first-degree relative diagnosed before 50, or two relatives on the same side): consider annual mammography from 40–50 and discuss with the patient.',
          'High risk (known BRCA1/2 or other high-risk variant, strong family history, previous chest radiation): refer to a familial cancer service. Annual breast MRI from about 30 (Medicare-rebated under 50 for eligible women) plus mammography, and consider risk-reducing surgery.',
          'Dense breasts: mammography is less sensitive. Some states report density. Supplementary imaging is debated, so discuss individually.',
          'Breast awareness: know your normal. Report changes promptly regardless of screening.',
        ],
      },
      {
        heading: 'Treatments and their GP implications',
        points: [
          'Surgery: breast-conserving surgery plus radiotherapy (equivalent survival to mastectomy for suitable tumours), or mastectomy ± reconstruction. Sentinel node biopsy, or axillary dissection if nodes are involved (higher lymphoedema risk).',
          'Radiotherapy: skin reactions, fatigue, and later breast fibrosis. Cardiac and lung effects are rare with modern techniques.',
          'Endocrine therapy (for ER-positive disease): tamoxifen (pre- or postmenopausal; hot flushes, VTE, endometrial risk, cataracts) or aromatase inhibitors (postmenopausal; arthralgia, bone loss, vaginal dryness), sometimes with ovarian suppression in premenopausal women. Duration is 5–10 years.',
          'HER2-targeted therapy: trastuzumab ± pertuzumab (monitor cardiac function with echo). Chemotherapy: nausea, neutropenia (fever means an emergency), alopecia, neuropathy, early menopause, fertility effects.',
          'CDK4/6 inhibitors (ribociclib, abemaciclib) are used in high-risk early disease and in metastatic disease. Monitor FBC and LFT.',
          'Genomic assays (for example Oncotype DX) help decide on chemotherapy in ER-positive, HER2-negative early cancer.',
        ],
      },
      {
        heading: 'Risk-reducing medicines and surgery',
        points: [
          'Eligible women: those at moderate to high risk (for example an estimated 5-year risk of 1.7% or more, or lifetime risk over 20–30%), previous atypical hyperplasia or LCIS.',
          'Tamoxifen 20 mg daily for 5 years (or 5 mg low-dose in some settings): reduces ER-positive cancer by about 30–40%. Avoid if there is VTE history. Needs contraception (teratogenic). Watch for endometrial effects in postmenopausal women.',
          'Raloxifene 60 mg daily (postmenopausal): also improves bone density, with a lower endometrial risk than tamoxifen. VTE risk.',
          'Aromatase inhibitors (anastrozole, exemestane, postmenopausal): about 50% risk reduction. Arthralgia and bone loss.',
          'Risk-reducing surgery for BRCA carriers: bilateral mastectomy (over 90% risk reduction) and bilateral salpingo-oophorectomy (reduces ovarian cancer risk, recommended after childbearing at around 35–40 for BRCA1 and 40–45 for BRCA2).',
          'Uptake of risk-reducing medicines is low. A careful discussion of absolute benefits and side effects helps decisions.',
        ],
      },
      {
        heading: 'Survivorship and shared care',
        points: [
          'Follow-up: clinical review every 6–12 months for 5 years, then yearly. Annual mammography (and ultrasound as indicated). Blood tests, tumour markers and routine scans are not recommended in asymptomatic women.',
          'Symptoms of recurrence to act on: a new lump, bone pain, persistent cough or breathlessness, headaches or neurological symptoms, jaundice, weight loss.',
          'Lymphoedema: arm swelling, heaviness or tightness. Early referral to a lymphoedema therapist (compression, exercise, skin care) and cellulitis prevention.',
          'Menopausal symptoms: avoid systemic MHT. Non-hormonal options: venlafaxine, gabapentin, CBT, and fezolinetant (specialist). Avoid paroxetine and fluoxetine with tamoxifen. Discuss vaginal oestrogen with oncology.',
          'Bone health on AIs: baseline DXA, calcium and vitamin D, exercise, and bisphosphonates or denosumab (which may also reduce recurrence in postmenopausal women).',
          'Cardiovascular health (after anthracyclines or trastuzumab), weight, exercise, alcohol reduction, fertility and contraception (copper IUD), sexual health, psychological wellbeing and return to work.',
        ],
      },
    ],
    keyNumbers: [
      'BreastScreen: every 2 years, 50–74 (eligible from 40)',
      'Under 35: ultrasound first',
      'Triple test negative only if ALL components benign',
      'High risk: annual MRI from ~30',
      'Tamoxifen 5 years ≈ 30–40% risk reduction',
      'AI prevention ≈ 50% risk reduction (postmenopausal)',
      'Endocrine therapy duration 5–10 years',
      'No routine tumour markers in follow-up',
    ],
    workedCase: {
      title: 'Louise wants to discuss breast screening',
      paragraphs: [
        'Louise, 42, asks whether she should start mammograms. Her mother was diagnosed with breast cancer at 46 and her maternal aunt with ovarian cancer at 55. Louise has two children and drinks about 2 glasses of wine most nights.',
        'You take a three-generation family history. Breast cancer before 50 in a first-degree relative plus ovarian cancer on the same side raises the possibility of a BRCA variant. Using iPrevent, her estimated lifetime risk is high.',
        'You refer her to a familial cancer centre for genetic counselling. Her mother is tested first, as the affected relative, and has a BRCA1 pathogenic variant. Louise tests positive for the same variant.',
        'Her plan now includes annual breast MRI and mammography, a discussion of risk-reducing mastectomy and bilateral salpingo-oophorectomy (recommended by about 40 for BRCA1), and alcohol reduction. Louise chooses a salpingo-oophorectomy at 41 and MRI surveillance, and she will consider mastectomy later. You discuss menopause management after surgery (MHT is generally safe for BRCA carriers without breast cancer, until about 51).',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Breast lumps and imaging',
        lead: 'Choose the SINGLE most likely diagnosis for each woman.',
        options: [
          'Fibroadenoma',
          'Simple breast cyst',
          'Invasive breast cancer',
          'Fat necrosis',
          'Mastitis / breast abscess',
          'Paget disease of the nipple',
          'Duct ectasia',
          'Gynaecomastia',
        ],
        items: [
          { stem: 'A 22-year-old with a 2 cm smooth, rubbery, highly mobile, non-tender lump.', answer: 0 },
          { stem: 'A 60-year-old with a persistent eczematous, crusting rash of one nipple.', answer: 5 },
          { stem: 'A 47-year-old with a tender, smooth, fluctuant lump that appeared quickly; ultrasound shows an anechoic lesion.', answer: 1 },
          { stem: 'A 55-year-old with a hard lump after a seatbelt injury 2 months ago; imaging shows oil cysts and calcification.', answer: 3 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Lucy needs a follow-up plan',
        scenario:
          'Lucy, 58, completed surgery and radiotherapy for ER-positive, HER2-negative breast cancer 6 months ago and started anastrozole. She has joint aches, hot flushes, vaginal dryness and fatigue. She asks what follow-up she needs.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE are appropriate parts of her follow-up?',
            options: [
              'Clinical review every 6–12 months',
              'Annual mammography',
              'Baseline DXA and bone health management',
              'CA 15-3 every 3 months',
              'Annual PET scan',
              'Monthly LFT',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'What is the most appropriate management of her arthralgia?',
            options: [
              'Stop anastrozole immediately',
              'Exercise, simple analgesia, and discuss with oncology (switching to another AI or tamoxifen may help)',
              'Long-term opioids',
              'Oral prednisolone',
              'Start MHT',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO options are appropriate for her hot flushes?',
            options: ['Venlafaxine', 'Gabapentin or CBT', 'Systemic oestrogen MHT', 'Tibolone', 'Paroxetine combined with tamoxifen'],
            answers: [0, 1],
          },
          {
            kind: 'sba',
            context: 'Her DXA shows a T-score of −2.6 at the lumbar spine.',
            stem: 'What is the most appropriate management?',
            options: [
              'Calcium alone',
              'Antiresorptive therapy (e.g. bisphosphonate or denosumab) plus calcium, vitamin D and exercise',
              'Stop anastrozole',
              'Repeat DXA in 5 years',
              'Start tibolone',
            ],
            answer: 1,
          },
          {
            kind: 'emq',
            theme: 'Symptoms after breast cancer',
            lead: 'Choose the SINGLE most appropriate action for each symptom reported at later reviews.',
            options: [
              'Urgent imaging (e.g. bone scan or CT) and oncology review',
              'Lymphoedema therapist referral',
              'Vaginal moisturiser and lubricant; discuss vaginal oestrogen with oncology',
              'Reassure only',
              'Psychology referral',
            ],
            items: [
              { stem: 'New persistent thoracic back pain, worse at night', answer: 0 },
              { stem: 'Heaviness and swelling of the arm on the treated side', answer: 1 },
              { stem: 'Painful intercourse from vaginal dryness', answer: 2 },
              { stem: 'Constant fear of recurrence affecting sleep and work', answer: 4 },
            ],
          },
        ],
      },
    ],
  },
  '610': {
    sections: [
      {
        heading: 'Using the Australian CVD risk calculator',
        points: [
          'The 2023 Australian Guideline for assessing and managing CVD risk uses a calculator (Aus CVD Risk) based on the New Zealand PREDICT equation, recalibrated for Australia. It estimates the 5-year risk of a CVD event.',
          'Inputs: age, sex, smoking, systolic BP, total:HDL cholesterol ratio, diabetes status, and use of BP-lowering, lipid-lowering and anticoagulant medicines. For people with diabetes it adds diabetes duration, HbA1c, BMI, eGFR, urine ACR and insulin use.',
          'Who: ages 45–79 without known CVD. Aboriginal and Torres Strait Islander people from 30. People with diabetes from 35.',
          'Reclassification factors can move someone up a category: family history of premature CVD, CAC score (0 lowers risk; ≥100 or ≥75th percentile raises it), severe mental illness, ethnicity (South Asian, Middle Eastern, Māori, Pacific Islander), and female-specific factors.',
          'Communicate risk with visual aids and absolute numbers: "Your risk of a heart attack or stroke in the next 5 years is about 8 in 100."',
          'Reassess every 2 years for low to intermediate risk, or sooner if factors change.',
        ],
      },
      {
        heading: 'Risk management by category',
        points: [
          'All: lifestyle (stop smoking, physical activity, Mediterranean-style diet, weight management, alcohol reduction).',
          'High risk (5-year ≥10%): start BP-lowering and lipid-lowering medicines unless contraindicated. Treat BP to <130/80 where tolerated.',
          'Intermediate (5–<10%): consider medicines using shared decision-making and reclassification factors.',
          'Low (<5%): lifestyle, and reassess periodically. Treat BP if persistently ≥160/100.',
          'Statin intensity: moderate for primary prevention (for example atorvastatin 10–20 mg, rosuvastatin 5–10 mg), high for established CVD or very high risk.',
          'Aspirin is not recommended for primary prevention in most people.',
        ],
      },
      {
        heading: 'Heart disease in women',
        points: [
          'CVD is the leading cause of death in Australian women but is under-recognised and under-treated. Women are less likely to receive statins, revascularisation and cardiac rehab.',
          'Female-specific risk factors: hypertensive disorders of pregnancy (pre-eclampsia doubles lifetime CVD risk), gestational diabetes (7-fold T2D risk), preterm birth, small-for-gestational-age baby, PCOS, early or premature menopause, and autoimmune disease.',
          'After pre-eclampsia or GDM: annual BP and a check of glucose and lipids, then CVD risk assessment.',
          'Presentations: angina and MI may present with dyspnoea, fatigue, nausea, or jaw, neck, back or epigastric pain. Consider SCAD (spontaneous coronary artery dissection) in young women, especially peripartum, and INOCA (ischaemia with no obstructive coronary arteries, microvascular angina).',
          'Takotsubo cardiomyopathy (stress-induced) mainly affects postmenopausal women after emotional or physical stress.',
          'Breast cancer treatments (anthracyclines, trastuzumab, radiotherapy) add cardiac risk. Cardio-oncology follow-up is important.',
        ],
      },
      {
        heading: 'Heart failure: diagnosis and early intensive treatment',
        points: [
          'Symptoms: breathlessness (exertional, orthopnoea, PND), fatigue, ankle swelling, weight gain. Signs: raised JVP, crackles, S3, oedema, displaced apex.',
          'Investigations: ECG (a normal ECG makes HF less likely), NT-proBNP (a rule-out test: under 125 pg/mL makes chronic HF unlikely), CXR, echo, FBC, UEC, LFT, TSH, iron studies (iron deficiency is common and treatable with IV iron in HFrEF).',
          'Types: HFrEF (LVEF ≤40%), HFmrEF (41–49%), HFpEF (≥50%). SGLT2 inhibitors benefit all types. HFpEF management includes diuretics for congestion and treating hypertension, AF, obesity and diabetes.',
          'HFrEF: start all four pillars early, even at low doses, rather than maximising one before adding the next. "Rapid sequencing" reduces early mortality after admission.',
          'Monitoring when titrating: BP, HR, K⁺ and creatinine (1–2 weeks after changes). Accept a creatinine rise up to 30% and K⁺ up to 5.5.',
          'Avoid: NSAIDs, non-dihydropyridine CCBs, thiazolidinediones, saxagliptin, and flecainide in structural heart disease.',
        ],
      },
      {
        heading: 'Heart failure after discharge',
        points: [
          'The vulnerable phase: readmission risk is high in the first 30 days. Arrange GP review within 7 days, and check the discharge summary for medicine changes, target doses and pending tests.',
          'Education: daily weights (the same time and scales), action plans for weight gain (for example over 2 kg in 2 days), symptom recognition, fluid guidance (individualised; strict restriction only if severe or hyponatraemic), salt reduction (under 2 g sodium a day), and vaccination.',
          'Refer to heart failure nurse programs and cardiac rehabilitation, which reduce readmissions and improve quality of life.',
          'Screen for depression and cognitive impairment, which affect self-care. Involve carers.',
          'Advanced HF: discuss prognosis and goals of care, ICD deactivation preferences, and palliative care involvement.',
        ],
      },
      {
        heading: 'Valvular heart disease',
        points: [
          'Aortic stenosis: the most common valve disease in older people (calcific or bicuspid valve). Symptoms (angina, syncope, dyspnoea, reduced exercise tolerance) mark a sharp worsening in prognosis.',
          'Echo grading: severe AS is a peak velocity ≥4 m/s, mean gradient ≥40 mmHg, or valve area <1 cm². Asymptomatic severe AS needs regular review (6–12 monthly) and advice to report symptoms.',
          'TAVI (transcatheter aortic valve implantation) is now common for older or high-risk patients. Surgical AVR is used for younger patients. Heart team assessment.',
          'Mitral regurgitation: primary (degenerative, prolapse) or secondary (LV dilatation). Transcatheter edge-to-edge repair is an option for some.',
          'Rheumatic heart disease: high rates in Aboriginal and Torres Strait Islander communities and some migrant populations. Mitral stenosis and regurgitation. Secondary prophylaxis with benzathine penicillin every 28 days.',
          'Endocarditis prophylaxis (amoxicillin before dental procedures) is only for the highest-risk groups: prosthetic valves, previous endocarditis, some congenital heart disease, and rheumatic heart disease in Aboriginal and Torres Strait Islander people.',
        ],
      },
      {
        heading: 'Palpitations and reassurance',
        points: [
          'Common benign causes: ectopic beats (feel like "skipped" or "thumping" beats), sinus tachycardia (anxiety, caffeine, fever, anaemia, thyroid disease, pregnancy).',
          'Assessment: timing, onset and offset (sudden suggests SVT), triggers, associated syncope, chest pain or breathlessness, and family history of sudden death.',
          'Investigations: ECG (pre-excitation, long QT, Brugada, heart block, LVH), FBC, TSH, electrolytes, Holter or event monitor matched to symptom frequency (patch monitors, smartphone ECG devices), and echo if there is structural concern.',
          'Reassure when the history and tests are benign: reduce caffeine and alcohol, and treat anxiety. Refer for sustained arrhythmias, syncope, exertional symptoms, abnormal ECG or family history of sudden cardiac death.',
          'SVT: vagal manoeuvres (modified Valsalva), and refer for ablation (curative in most).',
        ],
      },
    ],
    keyNumbers: [
      '5-year CVD risk: high ≥10%, intermediate 5–<10%, low <5%',
      'Risk assessment from 45 (30 if Aboriginal/Torres Strait Islander; 35 with diabetes)',
      'BP target <130/80 for most high-risk patients',
      'NT-proBNP <125 pg/mL makes chronic HF unlikely',
      'HFrEF ≤40%; HFmrEF 41–49%; HFpEF ≥50%',
      'Review within 7 days of HF discharge',
      'Severe AS: velocity ≥4 m/s, mean gradient ≥40, AVA <1 cm²',
      'RHD prophylaxis: benzathine penicillin every 28 days',
      'Accept creatinine rise ≤30% and K⁺ ≤5.5 on HF therapy',
    ],
    workedCase: {
      title: 'Sara is struggling on her morning walks',
      paragraphs: [
        'Sara, 54, has had 6 weeks of breathlessness and "tightness in the jaw" during her morning hill walk, easing with rest. She had pre-eclampsia in both pregnancies and went through menopause at 44. She has hypertension (on amlodipine) and her father had an MI at 58. She attributes the symptoms to "getting unfit".',
        'You recognise possible stable angina with atypical features common in women. ECG is normal. Her calculated 5-year CVD risk is 6%, but with reclassification factors (pre-eclampsia, early menopause, family history) you consider her high risk. Bloods: LDL 3.9, HbA1c 40, eGFR normal.',
        'You start aspirin and a statin, give GTN spray with instructions, and refer for CT coronary angiography (functional testing is an alternative). CTCA shows a 70% LAD stenosis. She is referred to cardiology and starts a beta-blocker. Angiography confirms significant disease, and she has a stent.',
        'Afterwards: dual antiplatelet therapy for 6–12 months, a high-intensity statin (LDL target <1.8), BP control, cardiac rehabilitation, and screening her daughters\' future pregnancy risk. You document her pregnancy history as a CVD risk factor for future clinicians.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Heart failure medicines',
        lead: 'Choose the SINGLE most appropriate medicine for each situation.',
        options: [
          'Bisoprolol',
          'Sacubitril–valsartan',
          'Spironolactone',
          'Dapagliflozin',
          'Furosemide',
          'Digoxin',
          'IV ferric carboxymaltose',
          'Verapamil',
        ],
        items: [
          { stem: 'A patient with HFrEF, ferritin 45 µg/L and TSAT 15%, still fatigued on optimal therapy.', answer: 6 },
          { stem: 'A patient with HFrEF who is still symptomatic on maximum-tolerated ACE inhibitor; switching agents is planned (36-hour washout needed).', answer: 1 },
          { stem: 'A patient with HFpEF (LVEF 58%) and T2D; which agent reduces HF hospitalisation?', answer: 3 },
          { stem: 'A patient with HFrEF with peripheral oedema and orthopnoea needing symptom relief of congestion.', answer: 4 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Jeffrey is slowing down',
        scenario:
          'Jeffrey, 81, a keen lawn bowler, has become breathless walking between greens and had a dizzy spell while walking uphill last week. He has hypertension and takes perindopril. Examination: slow-rising pulse, BP 128/74, and a harsh ejection systolic murmur at the right upper sternal edge radiating to the carotids.',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the most likely diagnosis?',
            options: ['Mitral regurgitation', 'Symptomatic aortic stenosis', 'Hypertrophic cardiomyopathy', 'Innocent flow murmur', 'Aortic regurgitation'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which THREE investigations are most important?',
            options: ['Echocardiogram', 'ECG', 'FBC and UEC', 'Exercise stress test', 'Coronary calcium score', 'D-dimer'],
            answers: [0, 1, 2],
            explanation: 'Exercise testing is contraindicated in symptomatic severe AS.',
          },
          {
            kind: 'sba',
            context: 'Echo shows severe AS (peak velocity 4.6 m/s, mean gradient 48 mmHg, AVA 0.7 cm²) with preserved LV function.',
            stem: 'What is the most appropriate next step?',
            options: [
              'Watchful waiting with repeat echo in 2 years',
              'Urgent cardiology referral for heart team assessment (TAVI or surgical AVR)',
              'Start a beta-blocker and review in 6 months',
              'Increase perindopril',
              'Palliative care only',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO pieces of advice are most important while he awaits intervention?',
            options: [
              'Avoid strenuous exertion and seek urgent help for chest pain, syncope or worsening breathlessness',
              'Avoid dehydration and be cautious with vasodilators (e.g. adjust antihypertensives if hypotensive)',
              'Continue competitive bowls tournaments in the heat',
              'Start a vigorous exercise program',
              'Stop all medicines',
            ],
            answers: [0, 1],
          },
          {
            kind: 'emq',
            theme: 'After valve intervention',
            lead: 'He has a successful TAVI. Choose the SINGLE most appropriate option for each issue.',
            options: [
              'Antiplatelet therapy per cardiology (e.g. aspirin)',
              'Amoxicillin prophylaxis before dental extraction',
              'No dental precautions needed',
              'Annual echocardiogram to monitor valve',
              'Warfarin lifelong for all TAVI patients',
            ],
            items: [
              { stem: 'Antithrombotic therapy if no other indication for anticoagulation', answer: 0 },
              { stem: 'Upcoming dental extraction', answer: 1 },
              { stem: 'Long-term valve surveillance', answer: 3 },
            ],
          },
        ],
      },
    ],
  },
}

export default extra
