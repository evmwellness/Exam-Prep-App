import type { Section } from '../../types'

const topup: Record<string, Section[]> = {
  '613': [
    {
      heading: 'MRI and biopsy pathway',
      points: [
        'A raised PSA should be repeated within 1–3 months (ideally at the same laboratory) before referral, unless very high or the DRE is abnormal. Exclude and treat UTI or prostatitis first.',
        'Multiparametric MRI of the prostate before biopsy is now standard. It is Medicare-funded when requested by a urologist (and by GPs in some circumstances). A PI-RADS score of 3–5 usually leads to targeted biopsy.',
        'Transperineal biopsy has largely replaced transrectal biopsy in Australia because of a much lower risk of sepsis.',
        'The Gleason score and ISUP grade group (1–5) describe tumour aggressiveness. Grade group 1 is low risk, and often suitable for active surveillance.',
        'PSA density (PSA divided by prostate volume) helps interpret a raised PSA in large prostates.',
      ],
    },
    {
      heading: 'Active surveillance',
      points: [
        'Active surveillance is recommended for most men with low-risk prostate cancer (grade group 1, PSA below 10, small-volume disease). It avoids or delays treatment side effects without reducing survival.',
        'It involves PSA every 3–6 months, repeat MRI and repeat biopsy as advised, with treatment offered if the cancer progresses.',
        'This is different from watchful waiting, which is for older or frail men and aims only to treat symptoms if they appear.',
        'Men on active surveillance may feel anxious about "not treating cancer". Explain the evidence and offer psychological support.',
      ],
    },
    {
      heading: 'Androgen deprivation therapy: GP monitoring',
      points: [
        'ADT (such as goserelin, leuprorelin or degarelix) is used for advanced or high-risk disease. It causes hot flushes, fatigue, low libido, erectile dysfunction, weight gain and loss of muscle mass.',
        'Long-term ADT increases the risk of osteoporosis, diabetes and cardiovascular disease. Check bone density at baseline, and monitor glucose, lipids and blood pressure.',
        'Recommend resistance and aerobic exercise, which reduce fatigue and help preserve muscle and bone.',
        'Consider denosumab or bisphosphonates if bone density is low. Check vitamin D and calcium intake.',
        'Mood changes and depression are common. Screen regularly and include the partner in discussions.',
      ],
    },
    {
      heading: 'Quick recap: prostate cancer',
      points: [
        'Offer informed choice about PSA testing to men aged 50–69 at average risk (from 40–45 with a strong family history or BRCA2).',
        'Refer based on age-specific PSA thresholds, rising PSA, or abnormal DRE.',
        'Manage urinary, bowel and sexual side effects of treatment, and support survivorship care in general practice.',
      ],
    },
  ],
  '612': [
    {
      heading: 'Colonoscopy quality and interval surveillance',
      points: [
        'After a positive faecal immunochemical test (FIT), colonoscopy should occur within 120 days. Delays increase the risk of advanced cancer.',
        'Surveillance intervals after polyp removal depend on number, size and histology. For example, 1–2 small tubular adenomas usually need no surveillance or a repeat at 10 years, while 3–4 adenomas or an adenoma 10 mm or larger usually need a 3-year interval.',
        'People with a history of bowel cancer usually have colonoscopy at 1 year after surgery, then at intervals based on findings.',
        'Stop surveillance when the risks outweigh benefits, such as in people over 75–80 with limited life expectancy.',
        'Encourage people to keep doing the National Bowel Cancer Screening Program kit only if they are not already in a colonoscopy surveillance program.',
      ],
    },
    {
      heading: 'Lynch syndrome in practice',
      points: [
        'Lynch syndrome is the most common inherited cause of bowel cancer. It also increases the risk of endometrial, ovarian, gastric, urinary tract and small bowel cancers.',
        'All bowel and endometrial cancers in Australia should have tumour testing for mismatch repair deficiency, which can identify Lynch syndrome.',
        'People with Lynch syndrome need colonoscopy every 1–2 years, starting at 25–30 years depending on the gene.',
        'Aspirin (usually 100 mg daily for at least 2 years, from about age 25) reduces bowel cancer risk in Lynch syndrome. Discuss benefits and bleeding risk.',
        'Refer family members to a familial cancer clinic for cascade testing.',
      ],
    },
    {
      heading: 'Quick recap: bowel cancer',
      points: [
        'FIT every 2 years from age 45 to 74 through the National Bowel Cancer Screening Program.',
        'Rectal bleeding, iron deficiency anaemia, or changed bowel habit in adults of any age need investigation. Early-onset bowel cancer is increasing.',
        'After treatment, the GP helps with surveillance, bowel dysfunction, stoma care, fatigue, and psychological recovery.',
      ],
    },
  ],
  '611': [
    {
      heading: 'Breast symptoms: common and benign',
      points: [
        'Breast pain (mastalgia) alone is rarely due to cancer. Cyclical pain is linked to the menstrual cycle. A well-fitted supportive bra and simple analgesia usually help.',
        'Fibroadenomas are smooth, mobile, rubbery lumps common in young women. After the triple test confirms the diagnosis, most can be left alone.',
        'Breast cysts are common in women in their 40s and around menopause. Ultrasound confirms the diagnosis, and simple cysts can be aspirated if painful.',
        'Nipple discharge from multiple ducts that is milky or green is usually benign. Single-duct, spontaneous, bloody or clear discharge needs investigation.',
        'Mastitis in a non-breastfeeding woman, or one not responding to antibiotics, needs imaging to exclude inflammatory breast cancer or an abscess.',
      ],
    },
    {
      heading: 'Breast cancer in men',
      points: [
        'About 1% of breast cancers occur in men. Risk factors include BRCA2 mutations, Klinefelter syndrome, high oestrogen states and family history.',
        'Presentation is usually a firm, painless lump under or near the nipple, nipple retraction or discharge.',
        'Gynaecomastia (a soft, rubbery, symmetrical disc behind the nipple) is much more common. Review medicines (spironolactone, anabolic steroids, antiandrogens), liver disease, testicular tumours and thyroid disease.',
        'Any unilateral, hard or fixed lump in a man should be assessed with the triple test.',
      ],
    },
    {
      heading: 'Endocrine therapy: supporting adherence',
      points: [
        'Hormone therapy (tamoxifen or an aromatase inhibitor) is usually taken for 5–10 years. Up to half of women stop early because of side effects, which increases the risk of recurrence.',
        'Aromatase inhibitors cause joint pain, stiffness and bone loss. Exercise, analgesia, and switching to another aromatase inhibitor can help. Check bone density and treat osteoporosis.',
        'Tamoxifen increases the risk of VTE and endometrial cancer. Investigate any postmenopausal or abnormal vaginal bleeding.',
        'Hot flushes can be treated with non-hormonal options: venlafaxine, gabapentin or clonidine. Avoid paroxetine and fluoxetine with tamoxifen (they reduce its activation via CYP2D6).',
        'Vaginal dryness: use non-hormonal moisturisers and lubricants first. Discuss vaginal oestrogen with the oncologist.',
      ],
    },
    {
      heading: 'Quick recap: breast cancer',
      points: [
        'Any new breast lump in a woman needs the triple test: clinical examination, imaging, and biopsy.',
        'BreastScreen offers free mammograms every 2 years to women aged 50–74 (and from 40).',
        'Women at high risk may need earlier screening, MRI, risk-reducing medicines (tamoxifen, raloxifene, anastrozole) or surgery.',
      ],
    },
  ],
  '610': [
    {
      heading: 'Atrial fibrillation in general practice',
      points: [
        'Screen opportunistically for AF in people aged 65 and over by pulse palpation or single-lead ECG devices. Confirm with a 12-lead ECG.',
        'Look for causes: hypertension, heart failure, valve disease, thyroid disease, sleep apnoea, alcohol and obesity.',
        'Rate control with a beta-blocker or non-dihydropyridine calcium channel blocker suits most patients. Rhythm control (medicines or ablation) is considered for symptomatic patients and early AF.',
        'Weight loss, alcohol reduction, blood pressure control and treating sleep apnoea reduce AF burden.',
        'Assess stroke risk with CHA2DS2-VA and offer anticoagulation (usually a DOAC) if the score is 2 or more, and consider it if 1.',
      ],
    },
    {
      heading: 'Syncope assessment',
      points: [
        'Most syncope is reflex (vasovagal) or orthostatic. The history is the most important tool.',
        'High-risk features: syncope during exertion or lying down, palpitations beforehand, no warning, structural heart disease, abnormal ECG, family history of sudden death, and older age.',
        'All patients need a 12-lead ECG. Look for long or short QT, Brugada pattern, pre-excitation, conduction block, and signs of hypertrophic cardiomyopathy.',
        'Refer high-risk patients urgently. Low-risk vasovagal syncope can be managed with education, fluids, salt and counter-pressure manoeuvres.',
        'Driving restrictions apply after unexplained syncope. Check the Assessing Fitness to Drive guidelines.',
      ],
    },
    {
      heading: 'Quick recap: heart disease',
      points: [
        'Use the Australian CVD risk calculator for people aged 45–79 (30 and over for Aboriginal and Torres Strait Islander people).',
        'Women more often have atypical symptoms of ACS. Take chest pain seriously in women, and ask about pregnancy complications, which raise future cardiovascular risk.',
        'Heart failure with reduced ejection fraction: start the four pillars early (ACE inhibitor, ARB or ARNI; beta-blocker; mineralocorticoid antagonist; SGLT2 inhibitor).',
        'Refer murmurs with symptoms, or new murmurs in adults, for echocardiography.',
      ],
    },
  ],
  '609': [
    {
      heading: 'Behavioural and psychological symptoms of dementia (BPSD)',
      points: [
        'Almost everyone with dementia has BPSD at some stage: agitation, aggression, wandering, apathy, depression, psychosis and sleep disturbance.',
        'Look for a cause first: pain, constipation, urinary retention, infection, hunger, noise, boredom, unmet needs, or a change in carer or environment.',
        'Non-drug approaches are first line: person-centred care, routine, meaningful activity, music, and carer education. Dementia Support Australia can provide free specialist advice.',
        'Antipsychotics have modest benefits and increase the risk of stroke and death. Use only for severe distress or risk of harm, at low dose, for a short time, with informed consent, and review within 12 weeks.',
        'In residential aged care, antipsychotics are a restrictive practice and need a behaviour support plan and informed consent.',
      ],
    },
    {
      heading: 'Medicines for dementia',
      points: [
        'Cholinesterase inhibitors (donepezil, rivastigmine, galantamine) have modest benefit in mild to moderate Alzheimer disease, and in dementia with Lewy bodies and Parkinson disease dementia.',
        'Side effects include nausea, diarrhoea, bradycardia, syncope and vivid dreams. Check the pulse and ECG in people with heart disease.',
        'Memantine is used in moderate to severe Alzheimer disease.',
        'New anti-amyloid antibodies are available overseas. They have small benefits in early disease, need MRI monitoring, and carry risks of brain swelling and bleeding. Check current Australian approval and access.',
        'Review and reduce anticholinergic and sedative medicines, which worsen cognition.',
      ],
    },
    {
      heading: 'Supporting carers',
      points: [
        'Carers of people with dementia have high rates of stress, depression and physical illness. Ask about their health and wellbeing.',
        'Dementia Australia offers education, counselling and support groups (National Dementia Helpline 1800 100 500).',
        'Refer early for an aged care assessment (My Aged Care) for home support, respite and residential care.',
        'Encourage legal planning while the person still has capacity: enduring power of attorney, enduring guardian and advance care directive.',
      ],
    },
    {
      heading: 'Quick recap: dementia',
      points: [
        'Assess cognition with a validated tool, take a collateral history, and screen for reversible causes (B12, thyroid, calcium, glucose, depression, medicines).',
        'Use the KICA-Cog or KICA-Screen for Aboriginal and Torres Strait Islander people, and the RUDAS in culturally and linguistically diverse populations.',
        'Review driving safety, capacity and future planning early.',
      ],
    },
  ],
}

export default topup
