import type { Unit } from '../../types'

const units: Unit[] = [
  {
    id: '607',
    label: 'Unit 607',
    date: 'Nov 2023',
    title: 'Rare diseases',
    specialty: 'Genetics',
    alsoRelevant: ['Paediatrics & Child Health', 'Sexual & Reproductive Health', 'Professional & Ethical Practice'],
    topics: [
      'Recognising possible undiagnosed rare disease',
      'Genomic testing pathways',
      'Reproductive carrier screening',
      'Finding reliable information',
      'Communicating about heritable conditions',
      'Care coordination and patient support organisations',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2023/rare-diseases',
    overview:
      'Rare diseases are individually rare but collectively common, affecting about 8% of Australians. Around 80% are genetic. Patients often wait years for a diagnosis. GPs can shorten this "diagnostic odyssey" by recognising red flags, using genomic pathways and trustworthy resources, and coordinating holistic, person-centred care with centres of expertise.',
    sections: [
      {
        heading: 'Red flags for rare disease',
        points: [
          'Multisystem involvement, unusual combinations of symptoms, or symptoms that do not fit common diagnoses.',
          'Early onset, developmental delay or regression, dysmorphic features, failure to thrive.',
          'Family history of similar illness, early deaths or recurrent miscarriage, or consanguinity.',
          'Poor response to standard treatment, or recurrent "atypical" presentations such as recurrent angioedema without urticaria (hereditary angioedema).',
        ],
      },
      {
        heading: 'Testing and information',
        points: [
          'Refer to clinical genetics or paediatrics. Medicare funds genomic (exome or genome) testing in specified situations, such as children with syndromic features or intellectual disability, usually requested by specialists.',
          'Reproductive carrier screening for cystic fibrosis, spinal muscular atrophy and fragile X is Medicare-funded (once per lifetime) for people planning or in early pregnancy. Expanded panels are available privately.',
          'Reliable sources: Orphanet, GeneReviews, OMIM, Rare Voices Australia, Genetic Alliance Australia, SWAN Australia (Syndromes Without A Name).',
          'Discuss the implications of results before testing: incidental findings, family implications, life insurance (currently limited by an industry moratorium, with legislative reform underway).',
        ],
      },
      {
        heading: 'Communicating about heritable conditions',
        points: [
          'Use non-directive, non-judgemental language, and respect reproductive autonomy.',
          'Cascade testing: support the patient to inform at-risk relatives (family letters from genetics services). Relatives\' information is confidential.',
          'Address guilt and blame in carriers. Explain inheritance simply (autosomal dominant 50%, autosomal recessive 25% per pregnancy for carrier couples, X-linked).',
          'Offer genetic counselling before and after testing.',
        ],
      },
      {
        heading: 'Holistic care',
        points: [
          'The GP is the "medical home": care plans, team care arrangements, NDIS access, carer support, school and work letters.',
          'Link with centres of expertise and patient support organisations. Peer connection reduces isolation for patients and families.',
          'Emergency care plans or letters for conditions such as HAE, metabolic disorders or adrenal insufficiency.',
          'Undiagnosed patients still deserve symptom management and support. Periodically reconsider diagnoses as testing evolves (re-analysis of genomic data).',
        ],
      },
    ],
    redFlags: [
      'Developmental regression in a child: urgent paediatric referral.',
      'Recurrent unexplained angioedema or abdominal attacks: check C4 and C1-inhibitor.',
      'Metabolic crisis features (vomiting, lethargy, encephalopathy) with fasting or illness.',
      'Carer burnout in families of children with complex needs.',
    ],
    examTips: [
      'Know Medicare-funded reproductive carrier screening (CF, SMA, fragile X).',
      'Know autosomal recessive and dominant recurrence risks.',
      'Cascade testing and confidentiality are frequent ethics questions.',
    ],
    mcqs: [
      {
        stem: 'A couple planning pregnancy ask about carrier testing. Which conditions are included in Medicare-funded reproductive carrier screening?',
        options: [
          'Down syndrome, trisomy 18, trisomy 13',
          'Cystic fibrosis, spinal muscular atrophy, fragile X syndrome',
          'Huntington disease, BRCA1, BRCA2',
          'Thalassaemia only',
          'Tay–Sachs only',
        ],
        answer: 1,
        explanation: 'Medicare funds carrier screening for CF, SMA and fragile X once per lifetime.',
      },
      {
        stem: 'Both partners are carriers of an autosomal recessive condition. What is the chance each pregnancy is affected?',
        options: ['0%', '25%', '50%', '75%', '100%'],
        answer: 1,
        explanation: 'The chance is 1 in 4 affected, 1 in 2 carriers, and 1 in 4 unaffected non-carriers per pregnancy.',
      },
      {
        stem: 'A 25-year-old has recurrent swelling of the lips and hands and episodes of severe abdominal pain, without urticaria, unresponsive to antihistamines. Which test is most useful?',
        options: ['Total IgE', 'C4 and C1-esterase inhibitor level/function', 'Tryptase', 'ANA', 'Skin prick testing'],
        answer: 1,
        explanation: 'Hereditary angioedema is bradykinin-mediated. Low C4 with low or dysfunctional C1-INH is diagnostic.',
      },
      {
        stem: 'A patient with a newly diagnosed BRCA2 variant refuses to tell her sister. What is the best approach?',
        options: [
          'Contact the sister directly without consent',
          'Explore her concerns and support disclosure (e.g. family letter), respecting confidentiality',
          'Report to authorities',
          'Discharge the patient',
          'Tell her it is illegal not to disclose',
        ],
        answer: 1,
        explanation: 'Support voluntary disclosure. Breaching confidentiality is only considered in rare, serious circumstances under specific legal provisions.',
      },
      {
        stem: 'Which resource is most appropriate for families with a child who has an undiagnosed genetic condition?',
        options: ['SWAN Australia (Syndromes Without A Name)', 'Beyond Blue', 'Quitline', 'Lifeline only', 'Cancer Council'],
        answer: 0,
        explanation: 'SWAN supports families of children with undiagnosed genetic conditions.',
      },
    ],
    kfp: [
      {
        title: 'Margaret is planning a baby',
        scenario:
          'Margaret, 31, and her partner plan to conceive. Her nephew has cystic fibrosis. She asks about her chance of having an affected child.',
        questions: [
          {
            prompt: 'List the steps you would take.',
            limit: 'Up to 4',
            answers: [
              'Take a three-generation family history',
              'Offer reproductive carrier screening (CF, SMA, fragile X – Medicare funded; ± expanded panel)',
              'If Margaret is a carrier, test partner',
              'Refer to genetic counselling (especially if family variant known or both carriers)',
            ],
          },
          {
            prompt: 'Both are CF carriers. List the reproductive options to discuss.',
            limit: 'Up to 4',
            answers: [
              'Natural conception with no testing (25% risk)',
              'Prenatal diagnosis (CVS or amniocentesis) with option of termination',
              'IVF with preimplantation genetic testing (PGT-M)',
              'Donor gametes or adoption',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '606',
    label: 'Unit 606',
    date: 'Oct 2023',
    title: "Men's health",
    specialty: "Men's Health",
    alsoRelevant: ['Endocrinology & Metabolic', 'Sexual & Reproductive Health', 'Aboriginal & Torres Strait Islander Health'],
    topics: [
      'Male hypogonadism and Klinefelter syndrome',
      'Male infertility assessment',
      'Anabolic–androgenic steroid misuse and cessation',
      'Body (muscle) dysmorphia',
      'Lifestyle-related decline in midlife',
      'MBS items for Aboriginal and Torres Strait Islander men',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2023/men-s-health',
    overview:
      'Men engage less with primary care and often present late. Key GP skills: investigate fatigue and low libido properly (true hypogonadism vs age-related change), diagnose Klinefelter syndrome, assess male factor infertility, and manage anabolic steroid use and muscle dysmorphia without judgement. Culturally safe services help engage Aboriginal and Torres Strait Islander men.',
    sections: [
      {
        heading: 'Hypogonadism and Klinefelter',
        points: [
          'Test with a morning (8–10 am) fasting total testosterone, repeated if low, plus LH and FSH. Also check SHBG, prolactin, ferritin and glucose if indicated.',
          'Primary (testicular) hypogonadism: low T, high LH/FSH. Secondary (pituitary or hypothalamic): low T with low or normal LH/FSH. Consider obesity, opioids, prolactinoma, haemochromatosis.',
          'Klinefelter (47,XXY), about 1 in 600 men: small firm testes, tall stature, gynaecomastia, infertility (azoospermia), learning difficulties. Confirm with karyotype.',
          'Testosterone treatment is for confirmed pathological hypogonadism. It suppresses spermatogenesis, so discuss fertility first (sperm retrieval, e.g. micro-TESE in Klinefelter). Monitor Hct, PSA (age-appropriate), lipids and bone density.',
        ],
      },
      {
        heading: 'Male infertility',
        points: [
          'Male factor contributes to about half of infertile couples. Investigate both partners in parallel.',
          'Semen analysis (2 samples, 2–7 days abstinence). History: prior testicular problems, mumps orchitis, chemotherapy, anabolic steroids or testosterone, heat, smoking, alcohol, medicines.',
          'Examine testicular volume, varicocele, and presence of the vas deferens (absent in CF-related CBAVD).',
          'Azoospermia or severe oligospermia: FSH, testosterone, karyotype, Y-chromosome microdeletion, CFTR testing. Refer to an andrologist or fertility specialist.',
        ],
      },
      {
        heading: 'Anabolic steroids and body image',
        points: [
          'AAS use harms: infertility, testicular atrophy, gynaecomastia, acne, polycythaemia, dyslipidaemia, hypertension, cardiomyopathy, mood change and aggression, injection-related BBVs.',
          'Harm reduction: sterile equipment, BBV testing, BP, lipid and Hct monitoring, and an honest non-judgemental approach.',
          'Cessation leads to "post-cycle" hypogonadism (low mood, fatigue, low libido) lasting months. Support and monitor, and refer to endocrinology for HPG axis recovery.',
          'Muscle dysmorphia (a form of body dysmorphic disorder): preoccupation with being "too small". Treat with CBT ± SSRI. Screen for eating disorder and depression.',
        ],
      },
      {
        heading: 'Midlife and culturally safe care',
        points: [
          'Lifestyle decline: weight gain, alcohol, inactivity, OSA, depression. Use the 45–49 health check and CVD risk assessment.',
          'Erectile dysfunction is an early CVD marker. Assess CVD risk, diabetes and lipids.',
          'Aboriginal and Torres Strait Islander Health Assessment (MBS 715) unlocks follow-up allied health and nurse or Aboriginal health worker items. Closing the Gap PBS co-payment support.',
          'Culturally safe, men-friendly services: male Aboriginal health workers, yarning, men\'s groups, flexible hours.',
        ],
      },
    ],
    redFlags: [
      'Testicular lump: ultrasound for testicular cancer.',
      'Visual field defect or headache with low testosterone and high prolactin: pituitary tumour.',
      'Chest pain or palpitations in an AAS user.',
      'Suicidal ideation in men (about 3 in 4 suicides in Australia are male).',
    ],
    examTips: [
      'Exogenous testosterone causes infertility. This is a frequently examined trap.',
      'Use a morning fasting sample and repeat before diagnosing low testosterone.',
      'Primary vs secondary hypogonadism is determined by LH/FSH.',
    ],
    mcqs: [
      {
        stem: 'A 28-year-old man with infertility has small firm testes, gynaecomastia and tall stature. Testosterone is low, LH and FSH high. What is the most likely diagnosis?',
        options: ['Kallmann syndrome', 'Klinefelter syndrome', 'Prolactinoma', 'Anabolic steroid use', 'Varicocele'],
        answer: 1,
        explanation: 'Primary hypogonadism with small firm testes suggests 47,XXY. Confirm with karyotype.',
      },
      {
        stem: 'A 32-year-old man trying to conceive asks for testosterone to "boost" fertility. What is the best advice?',
        options: [
          'Testosterone improves sperm count',
          'Exogenous testosterone suppresses spermatogenesis and should be avoided',
          'Testosterone gel is safe for fertility',
          'Only injectable testosterone reduces fertility',
          'Testosterone has no effect on sperm',
        ],
        answer: 1,
        explanation: 'Exogenous androgens suppress LH and FSH, causing oligo- or azoospermia.',
      },
      {
        stem: 'A 24-year-old bodybuilder using injected steroids has Hct 0.56. What is the most important risk?',
        options: ['Hypoglycaemia', 'Thrombosis (erythrocytosis)', 'Hypokalaemia', 'Hyperthyroidism', 'Osteoporosis'],
        answer: 1,
        explanation: 'Androgen-induced erythrocytosis increases thrombotic risk.',
      },
      {
        stem: 'A man presents with azoospermia and absent vas deferens on examination. Which test is most relevant?',
        options: ['Karyotype only', 'CFTR gene testing', 'Prolactin', 'Thyroid function', 'Testicular biopsy first'],
        answer: 1,
        explanation: 'Congenital bilateral absence of the vas deferens is associated with CFTR variants. Partner carrier testing also matters.',
      },
      {
        stem: 'A 22-year-old weightlifter is constantly preoccupied that he is "too small", checks mirrors for hours and uses steroids. What is the most likely diagnosis?',
        options: ['Narcissistic personality', 'Muscle dysmorphia (body dysmorphic disorder)', 'Anorexia nervosa', 'Generalised anxiety', 'Normal behaviour'],
        answer: 1,
        explanation: 'Muscle dysmorphia is a subtype of BDD. Treat with CBT ± SSRI.',
      },
    ],
    kfp: [
      {
        title: 'Nathan is worried about his progress at the gym',
        scenario:
          'Nathan, 26, has used injected testosterone and nandrolone for 18 months. He wants to stop because he and his partner want a baby. He has acne, mild gynaecomastia and feels flat and tired when between cycles.',
        questions: [
          {
            prompt: 'List the investigations you would arrange.',
            limit: 'Up to 5',
            answers: [
              'FBC (haematocrit)',
              'Lipids, LFT, UEC, glucose',
              'Testosterone, LH, FSH, oestradiol',
              'Semen analysis',
              'BBV screen (HIV, HBV, HCV); BP and ECG',
            ],
          },
          {
            prompt: 'List key management points.',
            limit: 'Up to 4',
            answers: [
              'Support cessation non-judgementally; explain recovery of HPG axis may take months',
              'Monitor for hypogonadal symptoms and depression/suicide risk after stopping',
              'Screen for muscle dysmorphia; offer psychological support',
              'Refer to endocrinology/fertility specialist if persistent hypogonadism or abnormal semen analysis',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '605',
    label: 'Unit 605',
    date: 'Aug 2023',
    title: 'Aesthetic conditions',
    specialty: 'Dermatology',
    alsoRelevant: ['Mental Health', 'Professional & Ethical Practice'],
    topics: [
      'Melasma and facial pigmentation',
      'Rosacea',
      'Body dysmorphic disorder and cosmetic requests',
      'Dermal filler and botulinum toxin complications',
      'Medical Board cosmetic procedure standards (2023)',
      'Safe referral options',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2023/aesthetic-conditions',
    overview:
      'Patients often bring appearance-related concerns to their GP. Common medical causes include melasma and rosacea, and some patients have body dysmorphic disorder. GPs should manage treatable skin conditions, recognise complications of cosmetic injectables, screen for BDD, and understand the Medical Board of Australia\'s 2023 cosmetic procedure standards.',
    sections: [
      {
        heading: 'Pigmentation',
        points: [
          'Melasma: symmetrical brown patches on the cheeks, forehead and upper lip. Mostly women, with hormonal triggers (pregnancy, COC) and UV and visible light exposure.',
          'Management: strict broad-spectrum sun protection (tinted sunscreens with iron oxide block visible light), hydroquinone 2–4% short-term, triple-combination cream, azelaic acid. Oral tranexamic acid is off-label (exclude VTE risk).',
          'Avoid aggressive lasers, which can worsen melasma. Relapse is common.',
          'Always exclude lentigo maligna (irregular, changing pigmentation). Dermoscopy, and biopsy if in doubt.',
        ],
      },
      {
        heading: 'Rosacea',
        points: [
          'Features: persistent central facial erythema, flushing, telangiectasia, papules and pustules (no comedones), ocular symptoms (gritty eyes, blepharitis), phymatous change.',
          'Triggers: heat, alcohol, spicy food, sun, stress, topical steroids.',
          'Treatment: topical ivermectin, metronidazole or azelaic acid for papules. Brimonidine or oxymetazoline for erythema. Oral doxycycline (low dose) for moderate to severe disease. Vascular laser (IPL) for telangiectasia.',
          'Rosacea and flushing can affect mood and self-esteem. Screen for depression.',
        ],
      },
      {
        heading: 'Cosmetic injectable complications',
        points: [
          'Vascular occlusion after filler: immediate blanching or livedo, pain, then dusky skin. This is an emergency: hyaluronidase (for HA fillers), massage, warm compress, urgent specialist care.',
          'Visual loss after facial filler (retinal artery occlusion) needs immediate ophthalmology care.',
          'Overfilling or "filler fatigue", nodules, biofilm infection, delayed hypersensitivity. Hyaluronidase dissolves HA fillers.',
          'Botulinum toxin: ptosis, asymmetry, dysphagia (rare). Effects wear off in about 3 months.',
        ],
      },
      {
        heading: 'Body dysmorphia and regulation',
        points: [
          'BDD: preoccupation with perceived flaws, causing distress and checking or camouflaging. Cosmetic procedures rarely help and can worsen it. Screen (for example with the BDDQ) and treat with CBT ± SSRI.',
          'Medical Board standards (2023) for cosmetic surgery and procedures include BDD screening, cooling-off periods, restrictions for under-18s, and in-person or video consultation before prescribing cosmetic injectables (no remote "tick-box" prescribing).',
          'Advertising must not use testimonials, target minors, or create unrealistic expectations.',
          'Refer to dermatologists or plastic surgeons with appropriate endorsement, and document informed consent.',
        ],
      },
    ],
    redFlags: [
      'Blanching or severe pain during or after filler: vascular occlusion.',
      'Visual disturbance after facial filler: emergency.',
      'Irregular, changing pigmented lesion: melanoma or lentigo maligna.',
      'Suicidal ideation in BDD (high risk).',
    ],
    examTips: [
      'Hyaluronidase for filler occlusion is a must-know.',
      'Rosacea has no comedones. Acne has comedones.',
      'Know the key features of the 2023 Medical Board cosmetic standards.',
    ],
    mcqs: [
      {
        stem: 'A 34-year-old woman has symmetrical brown patches on her cheeks and upper lip that worsened during pregnancy. What is the most important long-term measure?',
        options: ['Laser resurfacing', 'Strict sun protection including visible light (tinted sunscreen)', 'Oral isotretinoin', 'Topical steroid', 'Cryotherapy'],
        answer: 1,
        explanation: 'Melasma is driven by UV and visible light. Photoprotection is essential for any treatment to work.',
      },
      {
        stem: 'A 45-year-old man has facial flushing, central erythema and papules with no comedones. What is the most likely diagnosis?',
        options: ['Acne vulgaris', 'Rosacea', 'Seborrhoeic dermatitis', 'Lupus', 'Carcinoid syndrome'],
        answer: 1,
        explanation: 'Rosacea: central facial erythema, papulopustules, no comedones.',
      },
      {
        stem: 'Ten minutes after hyaluronic acid filler to the nasolabial fold, the skin blanches and becomes painful. What is the immediate treatment?',
        options: ['Ice and observe', 'High-dose hyaluronidase injection and urgent management', 'Oral antibiotics', 'Topical steroid', 'Antihistamine'],
        answer: 1,
        explanation: 'Vascular occlusion is an emergency. Hyaluronidase dissolves HA filler to restore flow.',
      },
      {
        stem: 'A 25-year-old repeatedly requests procedures to fix her "deformed" nose, which appears normal. She spends hours checking mirrors. What is the most appropriate response?',
        options: [
          'Refer for rhinoplasty',
          'Screen for body dysmorphic disorder and offer CBT ± SSRI',
          'Prescribe filler',
          'Reassure and discharge',
          'Refer to ENT',
        ],
        answer: 1,
        explanation: 'BDD responds poorly to cosmetic procedures. Mental health treatment is indicated.',
      },
      {
        stem: 'Which topical agent is used for the persistent erythema of rosacea?',
        options: ['Brimonidine gel', 'Clobetasol', 'Tretinoin', 'Benzoyl peroxide', 'Hydroquinone'],
        answer: 0,
        explanation: 'α-agonists (brimonidine, oxymetazoline) cause vasoconstriction and reduce erythema temporarily.',
      },
    ],
    kfp: [
      {
        title: 'Malcolm is red-faced',
        scenario:
          'Malcolm, 52, has a red face that is embarrassing him at work. He flushes with wine and hot drinks, has bumps on his cheeks and nose, and his eyes feel gritty. He has been using his wife\'s hydrocortisone cream.',
        questions: [
          {
            prompt: 'What is the diagnosis and what features would you document?',
            limit: 'Up to 3',
            answers: ['Rosacea (papulopustular with ocular involvement)', 'Absence of comedones; central facial erythema/telangiectasia', 'Ocular rosacea/blepharitis; any phymatous change'],
          },
          {
            prompt: 'List your management.',
            limit: 'Up to 5',
            answers: [
              'Stop topical corticosteroid',
              'Avoid triggers (alcohol, heat, hot drinks, sun) and daily sunscreen',
              'Topical ivermectin or metronidazole/azelaic acid',
              'Oral doxycycline (low dose) for papules/ocular disease; lid hygiene',
              'Consider brimonidine for erythema and vascular laser referral; screen mood',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '604',
    label: 'Unit 604',
    date: 'Jun 2023',
    title: 'Smoking cessation',
    specialty: 'Addiction Medicine',
    alsoRelevant: ['Respiratory', 'Mental Health', "Women's Health"],
    topics: [
      'Smoking cessation in pregnancy',
      'Smoking cessation in people with mental illness',
      'Chronic liver disease and cessation pharmacotherapy',
      'Clozapine/olanzapine interaction with smoking',
      'Assessing and managing vaping in young people',
      'Pharmacotherapy choices',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2023/smoking-cessation',
    overview:
      'Smoking remains the leading preventable cause of death. The Ask–Advise–Help approach with combination pharmacotherapy and behavioural support (Quitline 13 7848) doubles or triples quit rates. Special groups need tailored care: pregnancy, mental illness (including the clozapine interaction), chronic liver disease and young people who vape.',
    sections: [
      {
        heading: 'Core approach',
        points: [
          'Ask everyone and record smoking status. Advise quitting in a clear, personalised, non-judgemental way. Help with pharmacotherapy and a Quitline referral.',
          'First-line: varenicline, or combination NRT (patch + fast-acting oral form), which is more effective than a single form. Bupropion is an alternative.',
          'Varenicline: start 1–2 weeks before the quit date and continue for 12 weeks (extend to 24). Nausea and vivid dreams are common.',
          'Nicotine vaping products are pharmacy-only and may be considered for people who have not quit with first-line options. Aim for a time-limited plan to stop vaping too.',
        ],
      },
      {
        heading: 'Pregnancy',
        points: [
          'Quitting at any stage helps (less growth restriction, stillbirth, preterm birth and SIDS).',
          'Behavioural support is first line. NRT can be used if the person cannot quit without it. Prefer intermittent oral forms, and remove patches overnight.',
          'Varenicline and bupropion are not recommended in pregnancy.',
          'Offer support to partners and households, and continue after birth (relapse is common).',
        ],
      },
      {
        heading: 'Mental illness and liver disease',
        points: [
          'People with mental illness smoke at high rates and die earlier. They want to quit as much as others. Quitting improves anxiety, depression and quality of life.',
          'Varenicline is safe and effective in people with psychiatric illness (EAGLES trial showed no significant increase in neuropsychiatric events). Monitor mental state.',
          'Tobacco SMOKE (not nicotine) induces CYP1A2. When someone quits, clozapine and olanzapine levels can rise sharply (clozapine by 50% or more). Reduce the dose and monitor levels. Restarting smoking lowers levels and risks relapse.',
          'Chronic liver disease: NRT and varenicline (renally cleared) are safe. Bupropion needs dose reduction or avoidance in severe impairment.',
        ],
      },
      {
        heading: 'Young people and vaping',
        points: [
          'Assess nicotine dependence (time to first vape, cravings), frequency, access, and co-use of tobacco or cannabis.',
          'Many vapes contain high nicotine concentrations even when labelled "nicotine-free". Worsening asthma is a common presentation.',
          'Motivational interviewing, text-based programs, Quitline. NRT is approved from age 12.',
          'Involve parents with consent, and address stress, anxiety and peer factors.',
        ],
      },
    ],
    redFlags: [
      'Confusion, sedation, seizures or hypersalivation in a clozapine user who recently quit smoking: clozapine toxicity.',
      'Worsening asthma or lung injury (EVALI) in young vapers.',
      'Mood change or suicidal ideation during a quit attempt.',
      'Haemoptysis or weight loss in a smoker: lung cancer.',
    ],
    examTips: [
      'The clozapine and smoking cessation interaction is a very common exam question.',
      'Combination NRT is better than a single form.',
      'Varenicline is not contraindicated in mental illness.',
    ],
    mcqs: [
      {
        stem: 'A man with schizophrenia stable on clozapine stopped smoking 1 week ago. He is now drowsy, drooling and had a brief seizure. What is the most likely cause?',
        options: [
          'Nicotine withdrawal',
          'Clozapine toxicity from reduced CYP1A2 induction',
          'Relapse of psychosis',
          'Neuroleptic malignant syndrome',
          'Hypoglycaemia',
        ],
        answer: 1,
        explanation: 'Stopping smoking removes CYP1A2 induction, so clozapine levels rise. Check levels and reduce the dose.',
      },
      {
        stem: 'A pregnant woman at 14 weeks smokes 10/day and cannot quit with counselling alone. What is the most appropriate pharmacotherapy?',
        options: ['Varenicline', 'Bupropion', 'Intermittent oral NRT (e.g. gum, lozenge, spray)', 'Nicotine vape only', 'No pharmacotherapy is ever appropriate'],
        answer: 2,
        explanation: 'NRT is preferred in pregnancy when behavioural support fails. Intermittent forms give a lower total nicotine dose.',
      },
      {
        stem: 'Which smoking cessation option has the highest quit rates?',
        options: ['Nicotine patch alone', 'Varenicline or combination NRT', 'Nicotine gum alone', 'Cold turkey without support', 'Hypnotherapy'],
        answer: 1,
        explanation: 'Varenicline and combination NRT are the most effective pharmacotherapies, especially with behavioural support.',
      },
      {
        stem: 'A man with alcohol-related cirrhosis (Child-Pugh B) wants to quit smoking. Which pharmacotherapy requires most caution?',
        options: ['Nicotine patch', 'Varenicline', 'Bupropion', 'Nicotine lozenge', 'Nicotine inhaler'],
        answer: 2,
        explanation: 'Bupropion is hepatically metabolised and needs dose reduction. It also lowers the seizure threshold.',
      },
      {
        stem: 'Which statement about varenicline in people with depression is correct?',
        options: [
          'Contraindicated',
          'Can be used with monitoring; large trials show no significant increase in neuropsychiatric adverse events',
          'Only with an antipsychotic',
          'Causes psychosis in most',
          'Less effective than placebo',
        ],
        answer: 1,
        explanation: 'The EAGLES trial supported the safety of varenicline in people with psychiatric illness.',
      },
    ],
    kfp: [
      {
        title: 'Georgina is becoming unwell again',
        scenario:
          'Georgina, 44, has schizophrenia and has been stable for years on clozapine 400 mg daily. She quit smoking (30/day) 10 days ago with NRT patches. Her support worker reports she is very sleepy, drooling and unsteady.',
        questions: [
          {
            prompt: 'List the most likely cause and investigations.',
            limit: 'Up to 3',
            answers: [
              'Clozapine toxicity due to loss of CYP1A2 induction after smoking cessation',
              'Urgent clozapine (and norclozapine) level',
              'FBC (neutrophils), ECG, BGL, troponin/CRP (myocarditis)',
            ],
          },
          {
            prompt: 'List your management steps.',
            limit: 'Up to 4',
            answers: [
              'Assess urgently / hospital if severe (seizures, reduced consciousness)',
              'Reduce clozapine dose (≈30–50%) in consultation with psychiatrist; recheck levels',
              'Continue supporting smoking abstinence (NRT is fine – nicotine does not induce CYP1A2)',
              'Educate patient/carers and mental health team about interaction if she resumes smoking',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '603',
    label: 'Unit 603',
    date: 'Apr 2023',
    title: 'Travel health',
    specialty: 'Infectious Diseases',
    alsoRelevant: ['Preventive & Population Health', "Women's Health"],
    topics: [
      'The pre-travel consultation',
      'Travel vaccines and malaria prophylaxis',
      'Travellers with chronic conditions',
      'Fever in the returned traveller',
      'Rabies exposure abroad',
      'Pregnancy and travel',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2023/travel-health',
    overview:
      'A pre-travel consultation 6–8 weeks before departure covers several things: a risk assessment of the itinerary and the traveller, routine and travel vaccines, malaria prevention, and bite, food and water advice. It also covers chronic disease plans. Any fever in a returned traveller is malaria until proven otherwise.',
    sections: [
      {
        heading: 'Pre-travel',
        points: [
          'Assess destination (rural or urban), duration, activities, accommodation, health status, pregnancy and medicines.',
          'Update routine vaccines (MMR, dTpa, influenza, COVID-19). Travel vaccines by risk: hepatitis A, typhoid, rabies pre-exposure, Japanese encephalitis, cholera, meningococcal ACWY (Hajj, meningitis belt), yellow fever (accredited centre; certificate valid for life).',
          'Live vaccines (yellow fever, Imojev JE, MMR, oral typhoid) are contraindicated in pregnancy and significant immunosuppression. Yellow fever exemption letters are available.',
          'Advise mosquito bite avoidance (DEET or picaridin, permethrin-treated clothing), safe food and water, road safety, sexual health, and travel insurance.',
        ],
      },
      {
        heading: 'Malaria prevention',
        points: [
          'Atovaquone–proguanil: start 1–2 days before, continue 7 days after. Well tolerated, but more expensive.',
          'Doxycycline 100 mg daily: start 1–2 days before, continue 4 weeks after. Photosensitivity, oesophagitis, candidiasis. Not for use in pregnancy or under 8 years.',
          'Mefloquine weekly: start 2–3 weeks before, continue 4 weeks after. Neuropsychiatric effects. Can be used in pregnancy when travel is unavoidable.',
          'No prophylaxis is 100% effective. Fever up to a year after travel needs malaria testing.',
        ],
      },
      {
        heading: 'Returned traveller',
        points: [
          'Fever: exclude malaria urgently with thick and thin films or an RDT, repeated ×3 over 24–48 hours if negative. Falciparum can deteriorate within hours.',
          'Also consider dengue (NS1 antigen, serology; avoid NSAIDs), typhoid (blood cultures), rickettsia, leptospirosis, influenza, COVID-19, measles, hepatitis A.',
          'Rash plus fever: dengue, measles (notifiable, isolate), rickettsia, meningococcus, acute HIV.',
          'Traveller\'s diarrhoea: rehydrate. Azithromycin for severe or dysenteric illness. Avoid loperamide with bloody diarrhoea or fever.',
        ],
      },
      {
        heading: 'Special situations',
        points: [
          'Rabies exposure (dog or monkey bite in an endemic country): wash the wound for 15 minutes with soap and water. If unvaccinated, give rabies immunoglobulin plus 4 vaccine doses (days 0, 3, 7, 14). If previously vaccinated, give 2 doses (days 0, 3) and no immunoglobulin. Contact the public health unit.',
          'Pregnancy: advise against travel to malaria or Zika areas where possible. Consider VTE risk, insurance, and airline gestation limits.',
          'Chronic disease: carry a medication letter and supplies in hand luggage, and plan insulin timing across time zones. VTE prevention on long flights: mobilise, hydrate, and use compression stockings or LMWH if high risk.',
          'Fitness to fly: recent MI, surgery, pneumothorax, or severe anaemia may need clearance.',
        ],
      },
    ],
    redFlags: [
      'Fever after travel to a malaria area: malaria until proven otherwise.',
      'Dengue warning signs: abdominal pain, persistent vomiting, bleeding, lethargy, rising Hct with falling platelets.',
      'Rash, fever and headache: meningococcal disease.',
      'Neurological symptoms after an animal bite.',
    ],
    examTips: [
      'Know the start and stop times of each malaria prophylactic.',
      'Rabies post-exposure regimen: vaccinated vs unvaccinated.',
      'Live vaccine contraindications in pregnancy are a common trap.',
    ],
    mcqs: [
      {
        stem: 'A 25-year-old returned 10 days ago from Papua New Guinea with fever, headache and rigors. What is the most urgent investigation?',
        options: ['Dengue serology', 'Malaria thick and thin blood films (or RDT)', 'Chest X-ray', 'Stool culture', 'Hepatitis A serology'],
        answer: 1,
        explanation: 'Falciparum malaria can be rapidly fatal, so test the same day and repeat if negative.',
      },
      {
        stem: 'An unvaccinated woman was bitten by a street dog in Bali 2 days ago and cleaned the wound. What is the correct management?',
        options: [
          'Nothing – too late',
          'Rabies immunoglobulin plus rabies vaccine on days 0, 3, 7, 14',
          'Two doses of vaccine only',
          'Tetanus only',
          'Antibiotics only',
        ],
        answer: 1,
        explanation: 'For an unvaccinated person with a category III exposure, give RIG and a 4-dose vaccine course (5 if immunocompromised).',
      },
      {
        stem: 'Which malaria prophylactic must be continued for 4 weeks after leaving the risk area?',
        options: ['Atovaquone–proguanil', 'Doxycycline', 'Chloroquine for 1 day', 'Primaquine for 2 days', 'None'],
        answer: 1,
        explanation: 'Doxycycline and mefloquine are continued for 4 weeks after. Atovaquone–proguanil for 7 days.',
      },
      {
        stem: 'A 20-week pregnant woman plans travel to rural Uganda. Which vaccine is generally contraindicated?',
        options: ['Inactivated influenza', 'dTpa', 'Yellow fever (live)', 'Hepatitis A', 'Inactivated typhoid'],
        answer: 2,
        explanation: 'Yellow fever vaccine is live and generally avoided in pregnancy. Advise deferring travel or give an exemption letter after risk assessment.',
      },
      {
        stem: 'A traveller back from Thailand has fever, retro-orbital headache, myalgia and a platelet count of 90. What is the most appropriate analgesia?',
        options: ['Ibuprofen', 'Aspirin', 'Paracetamol', 'Diclofenac', 'Naproxen'],
        answer: 2,
        explanation: 'Suspected dengue: avoid NSAIDs and aspirin because of bleeding risk.',
      },
    ],
    kfp: [
      {
        title: 'Sam has a fever following a holiday abroad',
        scenario:
          'Sam, 34, returned 8 days ago from 3 weeks backpacking in rural India and Nepal. He has 3 days of fever to 39.5 °C, headache and malaise. He did not take malaria prophylaxis and had no pre-travel vaccines.',
        questions: [
          {
            prompt: 'List the most likely diagnoses.',
            limit: 'Up to 4',
            answers: ['Malaria (vivax or falciparum)', 'Enteric fever (typhoid/paratyphoid)', 'Dengue', 'Rickettsial infection (scrub typhus) / leptospirosis / hepatitis A'],
          },
          {
            prompt: 'List the investigations you would order today.',
            limit: 'Up to 5',
            answers: [
              'Malaria thick and thin films / RDT (repeat ×3 if negative)',
              'Blood cultures (typhoid)',
              'Dengue NS1 antigen and serology',
              'FBC, UEC, LFT, CRP',
              'Urinalysis ± stool culture, CXR if respiratory symptoms',
            ],
          },
        ],
      },
    ],
  },
]

export default units
