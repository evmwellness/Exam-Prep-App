import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  '622': {
    sections: [
      {
        heading: 'Why HPV-based screening',
        points: [
          'Persistent infection with oncogenic HPV causes almost all cervical cancers. HPV 16 and 18 cause about 70%.',
          'Primary HPV testing is more sensitive than cytology, allowing a longer interval (5 years) and starting at 25.',
          'Screening from 25 (not 18 or first sexual activity) because cervical cancer is rare in younger women, and HPV infections in young people usually clear. Early treatment of transient lesions can harm future pregnancies (preterm birth).',
          'HPV vaccination (a single dose of 9-valent vaccine in the school program) plus screening puts Australia on track to eliminate cervical cancer as a public health problem by 2035.',
          'Vaccinated people still need screening, because the vaccine does not cover all oncogenic types and many adults were vaccinated after exposure.',
        ],
      },
      {
        heading: 'Offering self-collection well',
        points: [
          'Since July 2022 all eligible people can choose self-collection. It is as accurate as clinician collection for detecting HPV.',
          'Instructions: insert the swab about 4–6 cm into the vagina, rotate for 20–30 seconds, then place it in the tube. It can be done in the clinic bathroom or at home, depending on local lab arrangements.',
          'Self-collection particularly helps under-screened groups: First Nations women, people with trauma history, people with disability, trans men, and people from cultures where speculum exams are unacceptable.',
          'Limitation: no cytology is possible. If HPV (not 16/18) is detected, the person must return for a clinician-collected LBC sample. Explain this up front.',
          'Clinician collection is required for symptomatic people, Test of Cure, and those under follow-up for abnormalities (co-test).',
        ],
      },
      {
        heading: 'The intermediate risk pathway in detail',
        points: [
          'HPV (not 16/18) with LBC negative, pLSIL or LSIL leads to a repeat HPV test in 12 months.',
          'At 12 months: if HPV is not detected, return to 5-yearly screening. If HPV (any type) is still detected, refer for colposcopy.',
          'Exceptions: go straight to colposcopy for anyone immunocompromised, Aboriginal or Torres Strait Islander people aged 50 or over, and anyone overdue by 2 or more years at the time of the positive test.',
          'Explain to patients that intermediate risk is common and most infections clear within 1–2 years. It is not a cancer diagnosis.',
          'Use the NCSP guideline algorithms and the National Cancer Screening Register recalls to avoid people falling through the gaps.',
        ],
      },
      {
        heading: 'Colposcopy and treatment',
        points: [
          'Colposcopy examines the cervix under magnification with acetic acid and Lugol\'s iodine, with biopsy of abnormal areas.',
          'HSIL (CIN2/3) is usually treated with LLETZ (large loop excision of the transformation zone), which removes the abnormal area and provides histology.',
          'LLETZ risks: bleeding, infection, cervical stenosis, and a small increase in preterm birth in future pregnancies (related to depth of excision).',
          'CIN2 in younger people may sometimes be observed, given high regression rates. This is a specialist decision.',
          'Glandular abnormalities (AIS) need specialist management (often cold-knife cone biopsy), because the lesions can be multifocal and high in the canal.',
        ],
      },
      {
        heading: 'Symptoms that need investigation, not screening',
        points: [
          'Symptoms: postcoital bleeding, intermenstrual bleeding, postmenopausal bleeding, persistent unexplained vaginal discharge, deep dyspareunia, and pelvic pain.',
          'Workup: speculum examination, co-test (HPV + LBC) regardless of when the last screen was done, STI tests (chlamydia, gonorrhoea, M. genitalium, trichomonas), and a pregnancy test.',
          'Refer to gynaecology if the cervix looks abnormal (ulcer, mass, contact bleeding) regardless of test results, or if bleeding persists despite normal tests.',
          'Postmenopausal bleeding: transvaginal ultrasound. Endometrial thickness over 4 mm (or persistent bleeding) needs endometrial sampling.',
          'Cervical ectropion is common, especially with the COC and in pregnancy, and can cause postcoital bleeding. It is a diagnosis of exclusion after assessment.',
        ],
      },
      {
        heading: 'Special groups and circumstances',
        points: [
          'Pregnancy: screening can be done safely if due. Use a broom or spatula (avoid endocervical brush). Colposcopy can be performed, and treatment is usually deferred until after delivery unless cancer is suspected.',
          'Immunocompromised people (HIV, transplant recipients, immunosuppressive therapy): screen every 3 years, with direct colposcopy for any oncogenic HPV.',
          'People who have never been sexually active: screening is generally not necessary. Discuss individually, because sexual activity includes any genital skin-to-skin contact.',
          'After hysterectomy: no screening if the hysterectomy was total, for benign reasons, with no history of HSIL. Otherwise vault tests per guideline.',
          'Under 25 with early sexual debut (before 14) and unvaccinated: consider a single HPV test between 20 and 24.',
          'Age 70–74 exit test: a negative HPV test at 70–74 allows exit from the program.',
        ],
      },
      {
        heading: 'Sensitive and inclusive communication',
        points: [
          'Explain why and what: "This test checks for the virus that can cause changes in the cervix years before cancer."',
          'Trauma-informed care: ask about previous experiences, offer a chaperone, offer self-collection, give control ("You can ask me to stop at any time"), and explain each step.',
          'People with intellectual disability: supported decision-making, easy-read materials, desensitisation visits, and self-collection. Capacity and consent must be assessed, and the disability support worker\'s role clarified.',
          'Culturally and linguistically diverse women: professional interpreters, female clinicians, and addressing modesty and beliefs about HPV and sexual activity.',
          'Trans men and non-binary people: use affirming language ("screening test for the cervix"), check pronouns, and offer self-collection. Testosterone can make examinations uncomfortable.',
          'Discuss that HPV is extremely common and does not imply infidelity. It may have been acquired many years earlier.',
        ],
      },
    ],
    keyNumbers: [
      'HPV test every 5 years, ages 25–74',
      'Immunocompromised: every 3 years',
      'HPV 16/18 → colposcopy',
      'HPV (not 16/18) + LBC neg/pLSIL/LSIL → repeat 12 months',
      'Direct colposcopy: immunocompromised, ATSI ≥50, overdue ≥2 years',
      'Test of Cure: co-test 12 months then annually until 2 negatives',
      'Postmenopausal bleeding: TVUS; endometrium >4 mm → refer',
      'Self-collection available to all eligible since July 2022',
      'Elimination target: 2035',
    ],
    workedCase: {
      title: 'Marita presents with her disability support worker',
      paragraphs: [
        'Marita, 38, has a mild intellectual disability and lives in supported accommodation. She has never had cervical screening. Her support worker says she has been "nervous about doctors" since a difficult experience years ago. Marita has had a boyfriend for 3 years.',
        'You speak directly to Marita using simple language and an easy-read leaflet, and you check her understanding with teach-back. You assess her capacity: she understands what the test is for, that she can choose, and what it involves. She can consent to a self-collected test. You clarify that the support worker is there to support her, not to make decisions.',
        'Marita chooses self-collection in the clinic bathroom, with her support worker waiting outside. The result shows HPV (not 16/18) detected. You explain that she now needs a sample from the cervix to check for cell changes.',
        'You arrange a longer appointment with a female GP, a desensitisation visit first, a small speculum, and the option to stop at any time. The LBC shows negative cytology, so she is on the intermediate risk pathway with a repeat HPV test in 12 months. You set a reminder and note her preferences for next time.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'NCSP follow-up pathways',
        lead: 'Choose the SINGLE most appropriate next step for each result.',
        options: [
          'Routine rescreen in 5 years',
          'Repeat HPV test in 12 months',
          'Refer for colposcopy',
          'Return for clinician-collected LBC',
          'Co-test annually until two consecutive negatives',
          'Rescreen in 3 years',
          'No further screening',
        ],
        items: [
          { stem: 'A 45-year-old\'s self-collected HPV test: HPV 16 detected.', answer: 2 },
          { stem: 'A 33-year-old\'s self-collected test: HPV (not 16/18) detected.', answer: 3 },
          { stem: 'A 52-year-old had LLETZ for CIN3 12 months ago; today\'s co-test is negative.', answer: 4 },
          { stem: 'A 30-year-old on long-term immunosuppression after a kidney transplant: HPV not detected.', answer: 5 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Simone is on the intermediate risk pathway',
        scenario:
          'Simone, 41, had a clinician-collected screening test 12 months ago showing HPV (not 16/18) with LBC negative. She is due for her repeat test. She is anxious: "Does this mean I have cancer?" She has a new partner.',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the best explanation of her previous result?',
            options: [
              'She has early cervical cancer',
              'She has an HPV infection that usually clears; the repeat test checks whether it has persisted',
              'Her partner must have been unfaithful',
              'She needs a hysterectomy',
              'The test was a false positive',
            ],
            answer: 1,
          },
          {
            kind: 'sba',
            context: 'Today\'s test shows HPV (not 16/18) still detected, with LBC pLSIL.',
            stem: 'What is the next step?',
            options: ['Repeat in 12 months', 'Refer for colposcopy', 'Routine 5-yearly screening', 'LLETZ without colposcopy', 'Repeat in 6 months'],
            answer: 1,
          },
          {
            kind: 'multi',
            context: 'Colposcopy and biopsy show HSIL (CIN3), treated by LLETZ with clear margins.',
            stem: 'Which TWO statements about follow-up are correct?',
            options: [
              'She needs co-testing at 12 months and then annually until two consecutive negative co-tests',
              'She can return to 5-yearly screening immediately',
              'After completing Test of Cure she returns to routine 5-yearly HPV screening',
              'She needs annual colposcopy for life',
              'Self-collection is appropriate for Test of Cure',
            ],
            answers: [0, 2],
          },
          {
            kind: 'multi',
            stem: 'Which THREE pieces of advice are appropriate after LLETZ?',
            options: [
              'Avoid tampons, intercourse and swimming for about 4 weeks',
              'Seek review for heavy bleeding, offensive discharge or fever',
              'Tell future obstetric carers about the LLETZ (small preterm birth risk)',
              'Stop all contraception',
              'She cannot become pregnant in future',
              'HPV vaccination is contraindicated after LLETZ',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'Her new partner asks whether he needs testing for HPV. What is the best answer?',
            options: [
              'Yes, all partners need HPV testing',
              'There is no routine HPV test for men; HPV is very common and usually clears',
              'He needs a urethral swab',
              'He needs a PSA',
              'He must have HPV vaccination before any contact',
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
  '621': {
    sections: [
      {
        heading: 'The veteran population and transition',
        points: [
          'Australia has more than 600,000 veterans, and about 5,000 people leave the ADF each year. Anyone who has served one day in the ADF (full-time or reserves) is a veteran.',
          'Transition (the first few years after leaving) is a high-risk period: loss of identity, structure, camaraderie and purpose, employment and financial pressures, and relationship strain.',
          'Ex-serving men and women have higher suicide rates than the general population. Rates are especially high among young ex-serving men, those medically discharged, and those with short service.',
          'The Royal Commission into Defence and Veteran Suicide (final report 2024) highlighted the need for better GP engagement and continuity of care.',
          'GPs often see veterans who do not disclose service. Always ask "Have you ever served in the Australian Defence Force?"',
        ],
      },
      {
        heading: 'Structured mental health assessment',
        points: [
          'Build rapport: understand military culture (stoicism, fear of being seen as weak, mistrust of "the system"). Be direct, practical and respectful.',
          'Screening tools: K10 (psychological distress), PHQ-9 (depression), GAD-7 (anxiety), PC-PTSD-5 and PCL-5 (PTSD), AUDIT (alcohol), DASS-21. Also screen for gambling and drug use.',
          'Assess trauma exposure: combat, peacekeeping, disaster response, training accidents, military sexual trauma (MST) and moral injury (acting against or witnessing violations of moral beliefs).',
          'Suicide risk assessment: thoughts, plans, intent, access to means (firearms are common), protective factors, recent losses (relationship, job, legal problems).',
          'Physical contributors: chronic pain, TBI, sleep disorders (OSA, nightmares), tinnitus, and medicines.',
        ],
      },
      {
        heading: 'PTSD: features and treatment',
        points: [
          'DSM-5 PTSD: exposure to trauma, plus intrusions (flashbacks, nightmares), avoidance, negative changes in mood and cognition, and hyperarousal (irritability, hypervigilance, startle, insomnia), lasting more than 1 month with impairment.',
          'Complex presentations include comorbid depression, alcohol use, chronic pain, anger and relationship problems.',
          'First line: trauma-focused psychological therapy. Cognitive processing therapy (CPT), prolonged exposure (PE), EMDR and trauma-focused CBT. Veteran-specific programs are available through Open Arms and DVA-funded psychologists.',
          'Medicines: SSRIs (sertraline, paroxetine, fluoxetine) or venlafaxine as adjuncts or when therapy is unavailable. Prazosin may help trauma nightmares in some (mixed evidence).',
          'Avoid benzodiazepines (worse outcomes, dependence), and avoid prescribing propranolol for PTSD (not effective).',
          'Newer approaches: intensive programs, group programs, and MDMA-assisted therapy (authorised prescribers only since 2023 under TGA rules, specialist psychiatrists).',
        ],
      },
      {
        heading: 'Depression, anger and insomnia',
        points: [
          'Depression: psychological therapy (CBT, behavioural activation), exercise, SSRIs or SNRIs. Screen for bipolar disorder before starting antidepressants.',
          'Anger and irritability: often part of PTSD or depression. Assess family violence risk. Offer anger management within trauma treatment, reduce alcohol, and address sleep.',
          'Insomnia: CBT-i is first line. Treat nightmares (imagery rehearsal therapy, prazosin in selected cases) and OSA. Avoid long-term hypnotics.',
          'Alcohol: high rates of hazardous drinking. Use brief interventions, withdrawal management, naltrexone or acamprosate, and Open Arms or specialist AOD services.',
          'Family impact: partners and children experience secondary effects. Open Arms supports families, and Defence Family Helpline resources exist.',
        ],
      },
      {
        heading: 'Physical health in veterans',
        points: [
          'Musculoskeletal injuries (knees, back, shoulders) from training and deployment are the most common accepted claims. DVA funds physiotherapy and exercise physiology for accepted conditions.',
          'Hearing loss and tinnitus: audiology via DVA Hearing Services. Tinnitus contributes to insomnia and irritability.',
          'Traumatic brain injury, usually mild or blast-related, can cause persistent headache, cognitive complaints, irritability and sleep problems. It overlaps with PTSD. Refer to neuropsychology or rehabilitation when needed.',
          'Exposures: mefloquine (for malaria prophylaxis, with reported neuropsychiatric effects), burn pits, asbestos in older vessels, radiation (atomic test veterans), chemicals. Document exposure history.',
          'Chronic pain management: multidisciplinary, with caution about long-term opioids.',
        ],
      },
      {
        heading: 'DVA entitlements and navigating the system',
        points: [
          'Veteran White Card: treatment for accepted service-related conditions, plus Non-Liability Health Care for all mental health conditions, cancer (malignant neoplasia), pulmonary TB, and some others, regardless of cause.',
          'Veteran Gold Card: all clinically necessary treatment. Eligibility includes older veterans with qualifying service, severe impairment, and some war widows and widowers.',
          'Claims through MyService (online). GP reports support claims: clear diagnoses, onset, impact and treatment. Veterans can get free advocacy through ex-service organisations (for example RSL, Legacy, veteran advocates).',
          'Programs: Coordinated Veterans\' Care (GP and nurse care coordination for Gold Card holders with chronic conditions), Veterans\' Home Care, Rehabilitation Appliances Program, community nursing, Veteran Payment (interim financial support while mental health claims are processed).',
          'Referral forms: DVA D904 for allied health and specialists. Check card type before referral.',
        ],
      },
      {
        heading: 'Cognitive complaints in veterans',
        points: [
          'Memory and concentration problems are common and often multifactorial: PTSD, depression, sleep deprivation, alcohol, medicines (benzodiazepines, opioids, anticholinergics), TBI, pain.',
          'Assessment: history of head injuries, a MoCA or similar screen, mood and sleep screening, alcohol, blood tests (B12, TSH, glucose), and neuroimaging if there are focal signs or progressive decline.',
          'Treat reversible contributors first. Cognitive symptoms often improve with PTSD treatment and better sleep.',
          'Refer to neuropsychology for detailed testing when symptoms persist or affect work and function.',
          'Consider early-onset dementia in older veterans with progressive decline, and plan driving, finances and enduring powers of attorney.',
        ],
      },
    ],
    keyNumbers: [
      'Open Arms: 1800 011 046 (24/7)',
      'Veteran = anyone with 1 day of ADF service',
      'Veteran Health Check: annually for 5 years after discharge',
      'PTSD: symptoms >1 month',
      'Non-Liability Health Care: any mental health condition',
      'Avoid benzodiazepines in PTSD',
      'DVA referral form D904',
    ],
    workedCase: {
      title: 'Yuliana is feeling depressed',
      paragraphs: [
        'Yuliana, 34, left the Army 18 months ago after 10 years of service, including a deployment. She presents with low mood, poor sleep, and guilt about an incident during deployment. She has not told her new GP about her service until you ask directly.',
        'You complete a structured assessment. PHQ-9 is 19, PCL-5 is 48 (probable PTSD), AUDIT is 9, and she has passive suicidal thoughts without a plan. She owns no firearms. She discloses military sexual trauma during training, which she has never reported.',
        'You explain Non-Liability Health Care: she can get a Veteran White Card for mental health treatment without proving a link to service or making a claim. You help her apply, refer her to Open Arms for immediate counselling, and refer her to a psychologist experienced in trauma-focused therapy and MST. You start sertraline after discussing options and create a safety plan.',
        'You complete her Veteran Health Check and discuss support for a DVA claim through a free advocate if she wishes. At 3 months her PHQ-9 is 10 and she has started CPT.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Veterans\' services',
        lead: 'Choose the SINGLE most appropriate service or entitlement for each situation.',
        options: [
          'Open Arms',
          'Non-Liability Health Care (Veteran White Card)',
          'Veteran Gold Card',
          'Veterans\' Home Care',
          'Coordinated Veterans\' Care program',
          'Veteran Health Check (MBS)',
          'MyService claim with advocate support',
          'Medicare Mental Health Treatment Plan only',
        ],
        items: [
          { stem: 'A veteran\'s partner wants counselling for herself.', answer: 0 },
          { stem: 'A 26-year-old who left the Navy 1 year ago attends for a general check-up.', answer: 5 },
          { stem: 'A veteran needs PTSD treatment funded quickly without waiting for a claim decision.', answer: 1 },
          { stem: 'A Gold Card holder with COPD, heart failure and diabetes at risk of hospitalisation.', answer: 4 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Patrick wants adrenaline blockers',
        scenario:
          'Patrick, 30, a former infantry soldier, asks for "adrenaline blockers" (propranolol) after reading they help PTSD. He has nightmares, avoids crowds, startles easily and is irritable with his children. He drinks 5–6 beers a night and keeps a hunting rifle.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE are the most important initial assessments?',
            options: [
              'Suicide risk assessment including firearm access',
              'PTSD screen (PCL-5) and depression screen',
              'Alcohol use (AUDIT)',
              'Serum catecholamines',
              'Brain MRI',
              'Thyroid ultrasound',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'What is the best response to his request for propranolol?',
            options: [
              'Prescribe propranolol 40 mg bd',
              'Explain propranolol is not effective for PTSD and offer evidence-based treatment',
              'Prescribe diazepam instead',
              'Refuse any treatment',
              'Prescribe quetiapine',
            ],
            answer: 1,
          },
          {
            kind: 'sba',
            context: 'PCL-5 is 52. He has no suicidal intent. He agrees to lock his rifle at his brother\'s house.',
            stem: 'What is the first-line treatment?',
            options: [
              'Trauma-focused psychological therapy (e.g. CPT or prolonged exposure)',
              'Benzodiazepine',
              'Supportive counselling only',
              'Antipsychotic',
              'Hypnotherapy only',
            ],
            answer: 0,
          },
          {
            kind: 'multi',
            stem: 'Which TWO funding and support options should you arrange?',
            options: [
              'Non-Liability Health Care via a Veteran White Card',
              'Open Arms counselling for Patrick and his family',
              'NDIS for PTSD',
              'Private health insurance only',
              'Workers compensation',
            ],
            answers: [0, 1],
          },
          {
            kind: 'emq',
            theme: 'Managing associated problems',
            lead: 'Choose the SINGLE most appropriate intervention for each problem.',
            options: ['Imagery rehearsal therapy / prazosin', 'Naltrexone or acamprosate with brief intervention', 'Assess family safety and risk of violence', 'CBT for insomnia', 'Zolpidem long term', 'Increase alcohol at night'],
            items: [
              { stem: 'Trauma-related nightmares', answer: 0 },
              { stem: 'Drinking 5–6 beers nightly', answer: 1 },
              { stem: 'Irritability and shouting at his children', answer: 2 },
            ],
          },
        ],
      },
    ],
  },
  '620': {
    sections: [
      {
        heading: 'Hidradenitis suppurativa: diagnosis and impact',
        points: [
          'Diagnosis is clinical: typical lesions (deep painful nodules, abscesses, sinus tracts, double-ended comedones, scarring), typical sites (axillae, groin, inframammary, perianal, buttocks), and chronicity or recurrence.',
          'Onset is usually after puberty. It is about three times more common in women and has a strong family history in about a third.',
          'Mean diagnostic delay is 7–10 years, often after repeated "boils" treated with incision and short antibiotic courses.',
          'Comorbidities: obesity, metabolic syndrome, PCOS, smoking, IBD (especially Crohn disease), spondyloarthritis, depression and suicidality, pilonidal disease.',
          'Quality-of-life impact is severe: pain, odour, drainage staining clothing, sexual and relationship effects, and work absence. Screen for mood and pain.',
          'Differentials: furunculosis, infected epidermoid cysts, Crohn disease fistulae, lymphogranuloma venereum, cutaneous tuberculosis.',
        ],
      },
      {
        heading: 'Hidradenitis suppurativa: stepwise management',
        points: [
          'Lifestyle: smoking cessation, weight loss (GLP-1 RA may help), loose clothing, avoid friction and shaving trauma (laser hair removal can help).',
          'Topical: antiseptic washes (chlorhexidine or benzoyl peroxide), topical clindamycin 1% for mild disease, resorcinol 15% cream (compounded) for flares.',
          'Oral: doxycycline 100 mg daily for 12 weeks (or longer), clindamycin 300 mg bd + rifampicin 300 mg bd for 10–12 weeks (watch rifampicin interactions, including the pill), metformin or spironolactone in women with hormonal patterns.',
          'Acute painful nodule: intralesional triamcinolone 10 mg/mL. Pain management: NSAIDs, paracetamol, and neuropathic agents for chronic pain.',
          'Specialist: adalimumab or secukinumab (PBS for moderate to severe disease meeting criteria), bimekizumab, deroofing, wide local excision.',
          'Avoid repeated incision and drainage alone, which does not treat the underlying tracts.',
        ],
      },
      {
        heading: 'Buruli ulcer (Mycobacterium ulcerans) in detail',
        points: [
          'Endemic areas: the Mornington and Bellarine Peninsulas, parts of Melbourne\'s inner and eastern suburbs, the Surf Coast and Geelong, and Far North Queensland (Daintree). Visitors can be affected.',
          'Transmission: possums (shedding bacteria in faeces) and mosquitoes are implicated. Incubation is about 4–5 months.',
          'Clinical: an initially painless papule, nodule or plaque, sometimes mistaken for an insect bite or cellulitis, progressing to an ulcer with undermined edges and necrotic slough. It may present as oedema of a limb.',
          'Diagnosis: a PCR swab from the undermined edge (not the ulcer base). Biopsy with PCR if non-ulcerated. Notify in Victoria.',
          'Treatment: rifampicin + clarithromycin (or moxifloxacin) for 8 weeks, with ID input. Paradoxical reactions (worsening lesions during treatment) occur in about 20% and are not treatment failure. Wound care, and occasionally surgery.',
          'Prevention: mosquito avoidance (repellent, covered clothing), and prompt cleaning of cuts when gardening.',
        ],
      },
      {
        heading: 'Vulval pain and dermatoses',
        points: [
          'History: onset, provoked vs spontaneous pain, itch vs pain, discharge, sexual function, products used (soaps, wipes, pads), recurrent thrush treatments, menopause status, skin disease elsewhere.',
          'Examination: vulval architecture (loss of labia minora, clitoral burying in lichen sclerosus), skin colour and texture, erosions, fissures, discharge. Cotton-swab test for vestibulodynia. Check the mouth and skin for lichen planus.',
          'Tests: vaginal swab for candida (culture for species), HSV PCR for erosions, STI tests, and biopsy for uncertain lesions, non-healing areas or suspected VIN or SCC.',
          'Lichen sclerosus: clobetasol propionate 0.05% ointment nightly for 4 weeks, then alternate nights for 4 weeks, then twice weekly, with long-term maintenance. Review at least yearly.',
          'Erosive lichen planus: potent topical steroids, vaginal involvement (dilators, steroids), and specialist care. There is a risk of scarring and SCC.',
          'Recurrent vulvovaginal candidiasis: confirm by culture, induction then weekly fluconazole maintenance for 6 months, and consider non-albicans species.',
        ],
      },
      {
        heading: 'Pregnancy dermatoses',
        points: [
          'Polymorphic eruption of pregnancy: third trimester or immediately postpartum, often first pregnancy, urticarial papules in striae, periumbilical sparing. It resolves within 4–6 weeks of delivery. No fetal risk.',
          'Pemphigoid gestationis: rare, autoimmune, periumbilical onset, then tense blisters. Associated with growth restriction and preterm birth, so needs specialist and obstetric management. Can recur in later pregnancies or with the COC.',
          'Intrahepatic cholestasis of pregnancy: itch (palms and soles, worse at night) without primary rash, and raised serum bile acids. Stillbirth risk rises with bile acids over 100 µmol/L. Treat with ursodeoxycholic acid, with obstetric monitoring and planned delivery.',
          'Atopic eruption of pregnancy: the most common, early onset, eczematous or papular, often with an atopic history. Treat with emollients and topical steroids.',
          'Post-inflammatory hyperpigmentation after PEP or eczema: common in skin of colour. Sun protection, azelaic acid (safe in pregnancy), and hydroquinone after pregnancy.',
        ],
      },
      {
        heading: 'Bullous pemphigoid and other blistering diseases',
        points: [
          'Bullous pemphigoid is the most common autoimmune blistering disease, typically over 70. Tense blisters on erythematous or urticarial skin, itch, flexural and trunk distribution. The mucosa is rarely involved.',
          'Pre-bullous phase: weeks to months of itch and eczematous or urticarial lesions. Consider BP in an older person with unexplained generalised itch.',
          'Diagnosis: skin biopsy (subepidermal blister) plus perilesional direct immunofluorescence (linear IgG and C3). Serum BP180/BP230 antibodies.',
          'Triggers and associations: DPP-4 inhibitors (stop them), diuretics, checkpoint inhibitors, neurological disease (dementia, Parkinson disease, stroke, MS).',
          'Treatment: whole-body clobetasol for widespread disease, doxycycline for mild to moderate disease, oral prednisolone for extensive disease (bone protection, glucose monitoring), and steroid-sparing agents or dupilumab via dermatology. Blister care: deroof large blisters, and give wound care.',
          'Pemphigus vulgaris: younger, flaccid blisters, painful oral erosions, Nikolsky sign positive. Refer urgently (high mortality untreated).',
        ],
      },
    ],
    keyNumbers: [
      'HS: ≥2 episodes in 6 months, flexural sites',
      'Hurley stage I–III',
      'Doxycycline 100 mg daily × 12 weeks (HS)',
      'Buruli: rifampicin + clarithromycin × 8 weeks',
      'Buruli incubation ~4–5 months',
      'Lichen sclerosus SCC risk ~3–5%',
      'Cholestasis of pregnancy: bile acids >100 µmol/L highest stillbirth risk',
      'Bullous pemphigoid: stop DPP-4 inhibitor',
    ],
    workedCase: {
      title: 'Bill has a blistering rash',
      paragraphs: [
        'Bill, 84, lives in residential aged care with Parkinson disease and type 2 diabetes. He is on metformin and sitagliptin. For 2 months he has been scratching and had "eczema" treated with moisturiser. This week he has developed tense, fluid-filled blisters on his thighs, forearms and abdomen. His mouth is clear.',
        'You suspect bullous pemphigoid, given his age, neurological disease, DPP-4 inhibitor use, and a pre-bullous itchy phase. You arrange a punch biopsy from a new blister edge and a perilesional biopsy for direct immunofluorescence, plus BP180 serology. You stop sitagliptin and adjust his diabetes management.',
        'Biopsy confirms BP. With dermatology advice, you start clobetasol propionate cream to the whole body (excluding the face) daily, tapering over months, plus doxycycline 100 mg bd. Nursing staff deroof large blisters with a sterile needle, leaving the roof as a dressing, and monitor for infection.',
        'You discuss prognosis with his family: BP carries significant mortality in the frail elderly, often from infection or treatment complications. You update his advance care plan. At 6 weeks new blisters have stopped and the itch is controlled.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Blistering and itchy skin conditions',
        lead: 'Choose the SINGLE most likely diagnosis for each patient.',
        options: [
          'Bullous pemphigoid',
          'Pemphigus vulgaris',
          'Pemphigoid gestationis',
          'Polymorphic eruption of pregnancy',
          'Intrahepatic cholestasis of pregnancy',
          'Dermatitis herpetiformis',
          'Bullous impetigo',
          'Herpes zoster',
        ],
        items: [
          { stem: 'A 45-year-old with painful oral erosions for 2 months and flaccid blisters that rupture easily.', answer: 1 },
          { stem: 'A woman at 34 weeks with intense itch of palms and soles at night, no rash, bile acids 45 µmol/L.', answer: 4 },
          { stem: 'A 30-year-old with coeliac disease and intensely itchy grouped vesicles on elbows and buttocks.', answer: 5 },
          { stem: 'A woman at 22 weeks with blisters starting around the umbilicus and spreading.', answer: 2 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Una has an ulcer',
        scenario:
          'Una, 58, lives in Rosebud on the Mornington Peninsula. She has a slowly enlarging, painless ulcer on her left calf for 6 weeks. It started as a "mozzie bite". Two courses of cephalexin have not helped. The ulcer is 3 cm with undermined edges and a necrotic base.',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the most likely diagnosis?',
            options: ['Venous ulcer', 'Buruli ulcer (Mycobacterium ulcerans)', 'Pyoderma gangrenosum', 'Basal cell carcinoma', 'Cellulitis'],
            answer: 1,
          },
          {
            kind: 'sba',
            stem: 'Which test is most appropriate?',
            options: [
              'Superficial swab of the ulcer base for MCS',
              'PCR swab taken from under the undermined edge',
              'Venous duplex',
              'ANCA',
              'Skin prick test',
            ],
            answer: 1,
          },
          {
            kind: 'sba',
            context: 'PCR confirms M. ulcerans.',
            stem: 'What is the recommended treatment?',
            options: [
              'Flucloxacillin for 2 weeks',
              'Rifampicin plus clarithromycin (or moxifloxacin) for 8 weeks with ID input',
              'Surgical excision alone',
              'Topical steroid',
              'Doxycycline for 7 days',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which THREE issues should you address when starting treatment?',
            options: [
              'Rifampicin drug interactions (e.g. warfarin, contraceptives, statins)',
              'Warn about paradoxical worsening during treatment',
              'Notify the Department of Health (Victoria)',
              'Isolate her from family',
              'Stop all wound dressings',
              'Treat household contacts with antibiotics',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'emq',
            theme: 'Follow-up findings',
            lead: 'Choose the SINGLE best interpretation or action.',
            options: [
              'Paradoxical reaction – continue treatment and seek ID advice',
              'Treatment failure – stop antibiotics',
              'Drug interaction – review medicines',
              'Normal healing – continue',
              'New malignancy – excise immediately',
            ],
            items: [
              { stem: 'At week 4 the ulcer is larger with a new nodule nearby, but she feels well', answer: 0 },
              { stem: 'Her INR falls unexpectedly on warfarin after starting rifampicin', answer: 2 },
              { stem: 'At 3 months the ulcer has epithelialised with a scar', answer: 3 },
            ],
          },
        ],
      },
    ],
  },
}

export default extra
