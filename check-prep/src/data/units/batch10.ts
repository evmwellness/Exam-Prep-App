import type { Unit } from '../../types'

const units: Unit[] = [
  {
    id: '597',
    label: 'Unit 597',
    date: 'Sep 2022',
    title: 'Preschooler health',
    specialty: 'Paediatrics & Child Health',
    alsoRelevant: ['Preventive & Population Health', 'Gastroenterology & Hepatology'],
    topics: [
      'Chronic diarrhoea in young children',
      'Fussy eating strategies',
      'Developmental surveillance with PEDS',
      'Behavioural sleep problems',
      'Immunisation: AEFI vs vaccine administration errors',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2022/preschooler-health',
    overview:
      'Preschoolers bring common worries to general practice: diarrhoea, fussy eating, sleep, development and vaccines. GPs can separate benign patterns (toddler\'s diarrhoea, typical fussy eating) from red flags. They give practical, evidence-based behavioural strategies, use structured developmental tools, and handle vaccine adverse events and errors transparently.',
    sections: [
      {
        heading: 'Chronic diarrhoea',
        points: [
          'Toddler\'s diarrhoea (functional): 1–4 years old, loose stools with undigested food, thriving, no nocturnal stools. Linked to high juice or fruit intake and low fat. Reduce juice and normalise diet.',
          'Differentials: post-gastroenteritis lactose intolerance, giardiasis, coeliac disease (check tTG-IgA + total IgA), cow\'s milk protein allergy, constipation with overflow, cystic fibrosis (poor growth, respiratory symptoms), IBD (rare).',
          'Tests if there are red flags or poor growth: stool MCS, ova and parasites (Giardia PCR), coeliac serology, FBC, iron studies, CRP, faecal calprotectin (less reliable in young children).',
          'Plot growth on centile charts. Falling centiles is the key red flag.',
        ],
      },
      {
        heading: 'Fussy eating and development',
        points: [
          'Division of responsibility: the parent decides what, when and where; the child decides whether and how much.',
          'Offer new foods repeatedly (10–15 exposures). Eat family meals together. No pressure, bribes or screens at meals. Limit milk (about 500 mL/day) and juice.',
          'PEDS (Parents\' Evaluation of Developmental Status): 10 questions eliciting parental concerns. Significant concerns lead to further assessment or referral (for example an early childhood development service or paediatrician).',
          'Speech and language red flags: no babble by 12 months, no words by 16–18 months, no 2-word phrases by 24 months, any regression. Check hearing and consider autism.',
        ],
      },
      {
        heading: 'Sleep',
        points: [
          'Limit-setting sleep problem (stalling, refusing bedtime): consistent routine, clear limits, reward charts, a "bedtime pass".',
          'Sleep-onset association (needs a parent, feeding or rocking to fall asleep, and again after night waking): controlled comforting or "camping out" (gradual parental withdrawal). Bedtime fading can help.',
          'Screen for OSA (snoring, apnoeas), restless legs (iron deficiency) and anxiety.',
          'Melatonin is not first line for behavioural insomnia in typically developing children.',
        ],
      },
      {
        heading: 'Immunisation issues',
        points: [
          'AEFI (adverse event following immunisation) is any untoward event after vaccination, such as fever, a large local reaction, a febrile seizure or anaphylaxis. Report it to the state or territory health department or TGA.',
          'A vaccine administration error is a preventable error: wrong vaccine, dose, route, age or interval, an expired product, or a cold chain breach.',
          'After an administration error: tell the parent (open disclosure), assess whether a repeat dose is needed (Australian Immunisation Handbook or state immunisation service), document, report as required, and review systems.',
          '4-year schedule: DTPa-IPV. Annual influenza vaccine is funded from 6 months to under 5 years. Egg allergy is NOT a contraindication to influenza or MMR vaccines.',
        ],
      },
    ],
    redFlags: [
      'Diarrhoea with faltering growth, blood or nocturnal stools.',
      'Loss of previously acquired skills (developmental regression).',
      'Anaphylaxis after vaccination: adrenaline IM and report.',
      'Snoring with apnoeas or poor growth: OSA.',
    ],
    examTips: [
      'Know the difference between an AEFI and a vaccine administration error, and what to do for each.',
      'Toddler\'s diarrhoea means a thriving child: manage juice, fat and fibre.',
      'Controlled comforting is for sleep-onset association. A reward system is for limit-setting problems.',
    ],
    mcqs: [
      {
        stem: 'A thriving 2-year-old has 3–4 loose stools a day with visible undigested vegetables. He drinks 600 mL apple juice daily. Growth is on the 50th centile. What is the most likely diagnosis?',
        options: ['Coeliac disease', 'Toddler\'s diarrhoea', 'Giardiasis', 'Crohn disease', 'Cystic fibrosis'],
        answer: 1,
        explanation: 'Toddler\'s diarrhoea is common and benign. Reduce juice and normalise fat and fibre intake.',
      },
      {
        stem: 'A practice nurse realises she gave a 4-year-old an adult-formulation dTpa instead of DTPa-IPV. What is the most appropriate first step?',
        options: [
          'Do not tell the family',
          'Inform the parent openly, seek advice on revaccination, document and report per state requirements',
          'Give a second dose immediately of the same vaccine',
          'Report to police',
          'Record it as an AEFI only',
        ],
        answer: 1,
        explanation: 'This is a vaccine administration error. Open disclosure, advice from the immunisation service, documentation and system review are needed.',
      },
      {
        stem: 'A 3-year-old only falls asleep while his mother lies with him and wakes twice nightly needing her again. Which strategy is most appropriate?',
        options: ['Melatonin', 'Controlled comforting or gradual parental withdrawal (camping out)', 'Sedating antihistamine', 'Later bedtime by 3 hours', 'Co-sleeping permanently'],
        answer: 1,
        explanation: 'This is sleep-onset association disorder. Teach independent sleep onset with graduated techniques.',
      },
      {
        stem: 'Which is the best strategy for a fussy-eating 3-year-old who is growing normally?',
        options: [
          'Insist the plate is finished',
          'Repeated exposure to new foods without pressure, shared family meals',
          'Offer dessert as a reward for vegetables',
          'Unlimited milk to ensure calories',
          'Prescribe an appetite stimulant',
        ],
        answer: 1,
        explanation: 'The division of responsibility and repeated neutral exposure improve acceptance.',
      },
      {
        stem: 'A child with a known egg allergy (hives) is due for influenza vaccine. What is correct?',
        options: [
          'Contraindicated',
          'Can be given as normal in a standard setting',
          'Must be given in hospital',
          'Give only half dose',
          'Skin test first',
        ],
        answer: 1,
        explanation: 'Egg allergy, including anaphylaxis, is not a contraindication to influenza vaccine per the Australian Immunisation Handbook.',
      },
    ],
    kfp: [
      {
        title: 'Harry\'s mother is worried about his development',
        scenario:
          'Harry, 2 years 3 months, says only about 5 words and does not combine words. He lines up toys, has limited eye contact and does not point to show things. His mother is worried. He had frequent ear infections last year.',
        questions: [
          {
            prompt: 'List the key assessments you would perform or arrange.',
            limit: 'Up to 4',
            answers: [
              'Formal hearing assessment (audiology)',
              'Developmental screening (PEDS/ASQ) and autism screening (e.g. SACS-R/M-CHAT)',
              'Full developmental and physical exam, growth, head circumference',
              'Family and social history, parental concerns, regression',
            ],
          },
          {
            prompt: 'List your management steps.',
            limit: 'Up to 4',
            answers: [
              'Refer to paediatrician / multidisciplinary autism assessment',
              'Refer to speech pathology early (do not wait for diagnosis)',
              'Inform about NDIS early childhood approach',
              'Support parents and arrange follow-up',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '596',
    label: 'Unit 596',
    date: 'Aug 2022',
    title: 'Planetary health',
    specialty: 'Preventive & Population Health',
    alsoRelevant: ['Respiratory', 'Infectious Diseases', 'Mental Health'],
    topics: [
      'Low-carbon asthma care (inhaler choice)',
      'Climate change and infectious disease distribution',
      'Heat-related illness and heat-sensitive medicines',
      'Eco-anxiety and climate-related mental health',
      'Lifestyle co-benefits for health and environment',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2022/planetary-health',
    overview:
      'Climate change is a health issue that GPs already see: heatwaves, floods, shifting infections, and mental distress. Healthcare contributes about 7% of Australia\'s carbon emissions. GPs can lower their footprint through good disease control, sensible inhaler choice and less low-value care, while protecting vulnerable patients.',
    sections: [
      {
        heading: 'Asthma and inhalers',
        points: [
          'pMDIs contain HFC propellants with high global warming potential. Salbutamol pMDIs are a major contributor.',
          'Best green strategy: good asthma control means less reliever use. Anti-inflammatory reliever (as-needed budesonide–formoterol) reduces SABA use.',
          'Consider dry powder inhalers when the patient can generate adequate inspiratory flow and prefers them. Always check technique.',
          'Use spacers with pMDIs. Return used inhalers to pharmacies for disposal, and avoid over-prescribing.',
        ],
      },
      {
        heading: 'Infectious diseases',
        points: [
          'Warmer and wetter conditions expand mosquito-borne disease: dengue (Aedes, north Queensland), Ross River, Murray Valley encephalitis, Japanese encephalitis (southeastern outbreak 2022 after floods).',
          'After floods: leptospirosis, melioidosis (tropical north), gastroenteritis, wound infections, mould-related respiratory illness.',
          'Fever after flood exposure: think leptospirosis (doxycycline), arboviruses, melioidosis. Notify public health when required.',
          'JE vaccine is recommended for people at higher risk in affected areas (per current state guidance).',
        ],
      },
      {
        heading: 'Heat',
        points: [
          'Heat exhaustion: thirst, fatigue, headache, nausea, core temperature <40 °C, normal mental state. Cool, rehydrate, rest.',
          'Heat stroke: core temperature >40 °C with CNS dysfunction (confusion, seizures, coma). This is an emergency: rapid cooling (cold water immersion or ice packs) and call 000.',
          'At-risk groups: older people, infants, pregnancy, chronic disease, outdoor workers, people experiencing homelessness, social isolation.',
          'Heat-sensitive medicines: diuretics, ACEi/ARBs, SGLT2i (dehydration), anticholinergics and antipsychotics (impaired sweating), β-blockers, lithium (toxicity with dehydration). Write heat-health plans.',
        ],
      },
      {
        heading: 'Mental health and co-benefits',
        points: [
          'Eco-anxiety or climate distress is a rational response, not a disorder. Validate it and support action and connection. Screen for depression if function is impaired.',
          'Disasters (bushfires, floods) increase PTSD, depression, alcohol use and family violence.',
          'Co-benefits: active transport and plant-rich diets reduce emissions AND CVD, diabetes and cancer risk.',
          'Choosing wisely (avoiding unnecessary tests and scripts) reduces both harm and carbon.',
        ],
      },
    ],
    redFlags: [
      'Hyperthermia with confusion: heat stroke.',
      'Fever, jaundice and renal impairment after a flood: severe leptospirosis.',
      'Fever with headache and altered mental state in an endemic area: encephalitis (JE, MVE).',
      'Lithium toxicity during a heatwave (tremor, confusion, vomiting).',
    ],
    examTips: [
      'Heat stroke vs heat exhaustion: CNS dysfunction is the discriminator.',
      'Know which medicines increase heat risk.',
      'Know the SABA-reduction strategies in asthma.',
    ],
    mcqs: [
      {
        stem: 'Which change most reduces the carbon footprint of asthma care while improving outcomes?',
        options: [
          'Prescribing more salbutamol pMDIs',
          'Improving asthma control with anti-inflammatory therapy to reduce SABA use',
          'Nebulisers for all',
          'Oral salbutamol',
          'Stopping ICS',
        ],
        answer: 1,
        explanation: 'Good control reduces reliever pMDI use, and so both emissions and exacerbations.',
      },
      {
        stem: 'An 80-year-old on furosemide is found confused during a heatwave, temperature 40.8 °C, hot dry skin. What is the most appropriate immediate management?',
        options: ['Oral paracetamol and observe', 'Rapid active cooling and emergency transfer', 'Increase furosemide', 'Antibiotics', 'Warm blankets'],
        answer: 1,
        explanation: 'Heat stroke is life-threatening. Paracetamol is ineffective because it is not a fever.',
      },
      {
        stem: 'Which medicine most increases risk of toxicity during dehydration in a heatwave?',
        options: ['Paracetamol', 'Lithium', 'Levothyroxine', 'Omeprazole', 'Vitamin D'],
        answer: 1,
        explanation: 'Dehydration reduces lithium clearance, which can precipitate toxicity.',
      },
      {
        stem: 'A farmer has fever, severe myalgia and conjunctival suffusion two weeks after cleaning up after floods. What is the most likely diagnosis?',
        options: ['Influenza', 'Leptospirosis', 'Q fever', 'Dengue', 'Melioidosis'],
        answer: 1,
        explanation: 'Leptospirosis follows exposure to contaminated floodwater. Conjunctival suffusion is characteristic.',
      },
      {
        stem: 'A 28-year-old reports persistent worry about climate change affecting her decision to have children, but is functioning well. What is the best approach?',
        options: [
          'Diagnose generalised anxiety disorder and start SSRI',
          'Validate concerns, explore coping and meaningful action, screen for depression',
          'Dismiss as irrational',
          'Refer to psychiatry urgently',
          'Benzodiazepine PRN',
        ],
        answer: 1,
        explanation: 'Climate distress is a normal response. Support coping and connection, and monitor function.',
      },
    ],
    kfp: [
      {
        title: 'Kate is concerned following a heatwave',
        scenario:
          'Kate, 45, cares for her father Frank, 82, who lives alone. During last week\'s heatwave he became dizzy and confused. His medicines: furosemide, perindopril, empagliflozin, oxybutynin and lithium (for bipolar disorder). More heatwaves are forecast.',
        questions: [
          {
            prompt: 'List the medicines that increase Frank\'s heat risk and why.',
            limit: 'Up to 4',
            answers: [
              'Furosemide and empagliflozin – volume depletion/dehydration',
              'Perindopril – hypotension and renal impairment with dehydration',
              'Oxybutynin – anticholinergic, impairs sweating (and confusion)',
              'Lithium – toxicity with dehydration',
            ],
          },
          {
            prompt: 'List the components of a heat-health plan for Frank.',
            limit: 'Up to 5',
            answers: [
              'Check lithium level, UEC; consider deprescribing oxybutynin',
              'Sick-day/heat rules: when to withhold diuretic/SGLT2i/ACEi in consultation with GP',
              'Cool environment (air-conditioning/cooler places), fluids, avoid heat of day',
              'Daily check-ins (family/neighbour/community service) during heatwaves',
              'Recognise heat illness warning signs and when to call 000',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '595',
    label: 'Unit 595',
    date: 'Jul 2022',
    title: 'Respiratory conditions',
    specialty: 'Respiratory',
    alsoRelevant: ['Paediatrics & Child Health'],
    topics: [
      'Chronic wet vs dry cough in children',
      'Protracted bacterial bronchitis (PBB)',
      'Paediatric obstructive sleep apnoea',
      'Optimising asthma management',
      'Breathlessness in adults (COPD, asthma)',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2022/respiratory-conditions',
    overview:
      'Cough and breathlessness are among the most common GP presentations. In children, separate wet from dry chronic cough: wet cough suggests PBB or bronchiectasis. Recognise paediatric OSA. In adults and adolescents, current asthma management moves away from SABA-only treatment towards ICS-containing relievers, supported by checks of technique and adherence.',
    sections: [
      {
        heading: 'Chronic cough in children',
        points: [
          'Chronic cough in children lasts more than 4 weeks. Classify as wet (productive) or dry, and look for specific pointers such as wheeze, clubbing, failure to thrive, choking episodes, or cough since birth.',
          'Protracted bacterial bronchitis (PBB): chronic wet cough, no other cause, resolves with 2 weeks of appropriate antibiotics (amoxicillin–clavulanate). Organisms: H. influenzae, S. pneumoniae, M. catarrhalis.',
          'Persistent wet cough after 4 weeks of antibiotics, or recurrent PBB (>3 episodes a year): refer for CT and bronchiectasis evaluation (especially Aboriginal and Torres Strait Islander children).',
          'Dry cough: often post-viral. Consider asthma only with other features (wheeze, atopy, response to treatment), and habit cough (absent in sleep). Avoid empirical asthma treatment without evidence.',
        ],
      },
      {
        heading: 'Paediatric OSA',
        points: [
          'Features: snoring ≥3 nights a week, witnessed apnoeas, gasping, mouth breathing, restless sleep, enuresis, daytime behaviour and attention problems, poor growth.',
          'Main cause is adenotonsillar hypertrophy. Also obesity, craniofacial abnormalities and neuromuscular disease.',
          'Investigation: overnight polysomnography is the gold standard. Oximetry can triage severity. Refer to ENT or a sleep physician.',
          'Treatment: adenotonsillectomy. Intranasal corticosteroids ± montelukast for mild disease. Weight management where relevant.',
        ],
      },
      {
        heading: 'Asthma optimisation',
        points: [
          'Adults and adolescents: no SABA-only treatment. Mild asthma: as-needed budesonide–formoterol (anti-inflammatory reliever). Moderate: maintenance-and-reliever therapy (MART) or ICS-LABA.',
          'Before stepping up, check inhaler technique (most patients err), adherence, triggers (smoking, vaping), comorbidities (rhinitis, GORD, obesity), and confirm the diagnosis with spirometry.',
          'A written asthma action plan for everyone. Review within weeks of a flare. Refer severe or uncontrolled asthma for biologics.',
          'Children: daily preventer if symptoms are frequent or flares are significant. Low-dose ICS or montelukast (warn about neuropsychiatric effects) according to age and pattern.',
        ],
      },
      {
        heading: 'Breathlessness in adults',
        points: [
          'COPD is confirmed by spirometry showing post-bronchodilator FEV1/FVC <0.7. Assess severity and exacerbations (COPD-X).',
          'COPD management: smoking cessation, vaccination, pulmonary rehabilitation, LAMA ± LABA, add ICS if exacerbations with eosinophilia. COPD action plan.',
          'Asthma–COPD overlap: include ICS. Avoid LABA without ICS in asthma.',
          'Other causes: heart failure, anaemia, ILD (crackles, clubbing), PE, obesity, deconditioning.',
        ],
      },
    ],
    redFlags: [
      'Cough with choking at onset (foreign body), haemoptysis, failure to thrive, clubbing.',
      'Wet cough persisting after antibiotics: bronchiectasis.',
      'Severe asthma: unable to speak, SpO2 <92%, silent chest, drowsiness.',
      'Child with OSA plus poor growth or pulmonary hypertension signs.',
    ],
    examTips: [
      'Know the PBB definition: wet cough >4 weeks, resolves with 2 weeks of antibiotics.',
      'SABA-only treatment is no longer recommended for adults and adolescents.',
      'Check inhaler technique before stepping up.',
    ],
    mcqs: [
      {
        stem: 'A 3-year-old has had a wet cough for 6 weeks. He is otherwise well, with no wheeze, and chest X-ray is normal. What is the most appropriate management?',
        options: ['Inhaled corticosteroid', '2 weeks of amoxicillin–clavulanate', 'Reassure – viral', 'Oral prednisolone', 'Montelukast'],
        answer: 1,
        explanation: 'This fits PBB. Two weeks of appropriate antibiotics usually resolve the cough.',
      },
      {
        stem: 'A 5-year-old snores nightly, has witnessed pauses in breathing and is inattentive at kindergarten. Tonsils are large. What is the gold standard investigation?',
        options: ['Lateral neck X-ray', 'Overnight polysomnography', 'Spirometry', 'Echocardiogram', 'Sleep diary'],
        answer: 1,
        explanation: 'Polysomnography confirms and grades paediatric OSA.',
      },
      {
        stem: 'A 25-year-old with mild asthma uses salbutamol 2–3 times a week only. What is recommended?',
        options: [
          'Continue salbutamol alone',
          'As-needed low-dose budesonide–formoterol',
          'High-dose ICS',
          'Oral theophylline',
          'LABA monotherapy',
        ],
        answer: 1,
        explanation: 'An anti-inflammatory reliever reduces severe exacerbations compared with SABA alone.',
      },
      {
        stem: 'A 60-year-old ex-smoker has breathlessness. Post-bronchodilator FEV1/FVC is 0.62. What is the diagnosis?',
        options: ['Asthma', 'COPD (persistent airflow limitation)', 'Restrictive lung disease', 'Normal', 'Heart failure'],
        answer: 1,
        explanation: 'Post-bronchodilator FEV1/FVC <0.7 confirms persistent airflow limitation consistent with COPD.',
      },
      {
        stem: 'An adult with asthma remains uncontrolled on ICS-LABA. What is the first step before stepping up?',
        options: ['Add oral steroids', 'Check inhaler technique and adherence', 'Refer for biologic', 'Add theophylline', 'Order CT chest'],
        answer: 1,
        explanation: 'Poor technique and adherence are the commonest reasons for poor control.',
      },
    ],
    kfp: [
      {
        title: 'Muhammad has a cough',
        scenario:
          'Muhammad, 4, has a wet-sounding cough for 8 weeks after a cold. He has had one 5-day course of amoxicillin with partial improvement. No wheeze, growing well, no clubbing. He attends childcare.',
        questions: [
          {
            prompt: 'What is the most likely diagnosis and appropriate treatment?',
            limit: 'Up to 2',
            answers: ['Protracted bacterial bronchitis', 'Amoxicillin–clavulanate for 2 weeks (extend to 4 weeks if partial response)'],
          },
          {
            prompt: 'List the indications for referral / further investigation.',
            limit: 'Up to 4',
            answers: [
              'Wet cough persisting after 4 weeks of antibiotics',
              'Recurrent PBB (>3 episodes/year)',
              'Specific cough pointers: clubbing, failure to thrive, haemoptysis, choking episode',
              'Aboriginal/Torres Strait Islander child or other bronchiectasis risk – lower threshold (CT chest, respiratory paediatrician)',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '594',
    label: 'Unit 594',
    date: 'Jun 2022',
    title: 'Fertility and preconception',
    specialty: 'Sexual & Reproductive Health',
    alsoRelevant: ["Women's Health", "Men's Health", 'Endocrinology & Metabolic'],
    topics: [
      'Preconception care',
      'Fertility awareness and timing intercourse',
      'Polycystic ovary syndrome (PCOS) diagnosis',
      'Investigating infertility (primary and secondary)',
      'IVF process',
      'Recurrent pregnancy loss',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2022/fertility-and-preconception',
    overview:
      'GPs are well placed to optimise health before conception, advise on fertility awareness, and start infertility investigations for both partners. They also diagnose PCOS and support people through IVF and pregnancy loss. Age is the most important factor in female fertility, so timely referral matters.',
    sections: [
      {
        heading: 'Preconception care',
        points: [
          'Folic acid 0.4–0.5 mg daily from at least 1 month before conception to 12 weeks. Use 5 mg if high risk (previous NTD, diabetes, obesity, antiepileptics, malabsorption). Iodine 150 µg.',
          'Vaccination: check MMR and varicella immunity (live vaccines, avoid pregnancy for 28 days afterwards). Influenza, COVID-19 and pertussis are given in pregnancy.',
          'Review medicines (valproate, isotretinoin, ACEi/ARB, warfarin, methotrexate, statins). Optimise chronic disease (diabetes HbA1c, thyroid, epilepsy, hypertension).',
          'Lifestyle: stop smoking and alcohol, aim for a healthy weight. Offer carrier screening and bring cervical screening up to date.',
        ],
      },
      {
        heading: 'Fertility awareness and PCOS',
        points: [
          'The fertile window is the 6 days ending on ovulation day. Intercourse every 1–2 days across the window. Ovulation is about 14 days before the next period. Cervical mucus and LH kits help identify it.',
          'Investigate after 12 months of trying (under 35), 6 months (35 or over), or immediately if there is a known problem (irregular cycles, endometriosis, male factor).',
          'PCOS (International 2023 guideline): 2 of 3 of oligo/anovulation, clinical or biochemical hyperandrogenism, and polycystic ovarian morphology on ultrasound OR raised AMH (in adults). Exclude thyroid disease, hyperprolactinaemia and non-classic CAH.',
          'PCOS fertility: lifestyle and weight, letrozole first-line for ovulation induction, ± metformin. Screen for diabetes (OGTT), dyslipidaemia and depression.',
        ],
      },
      {
        heading: 'Infertility work-up',
        points: [
          'Female: mid-luteal progesterone (about 7 days before the expected period) to confirm ovulation, TSH, prolactin, AMH (ovarian reserve, not a measure of fertility), rubella and varicella immunity, chlamydia, pelvic ultrasound. Tubal patency (HyCoSy or HSG) via a specialist.',
          'Male: semen analysis (see Men\'s health).',
          'Secondary infertility: investigate the same way. Consider new factors such as age, weight change, tubal damage from infection or surgery, and Asherman syndrome after curettage.',
          'IVF steps: ovarian stimulation (FSH injections), trigger, transvaginal egg retrieval, fertilisation (IVF or ICSI), embryo culture, single embryo transfer, luteal support. Risks: OHSS, multiple pregnancy, cost and emotional burden.',
        ],
      },
      {
        heading: 'Recurrent pregnancy loss',
        points: [
          'Defined as 2 or more pregnancy losses (ESHRE). Investigate after 2 losses, or after 3 depending on local guidance.',
          'Tests: antiphospholipid antibodies (lupus anticoagulant, anticardiolipin, anti-β2-glycoprotein I; repeat at 12 weeks), TSH and TPO antibodies, pelvic ultrasound (3D) for uterine anomalies, and genetic testing of pregnancy tissue.',
          'Antiphospholipid syndrome: low-dose aspirin + LMWH in pregnancy. Progesterone may help women with bleeding in early pregnancy and prior miscarriage.',
          'Offer psychological support. Many couples have no identifiable cause, but the chance of a successful next pregnancy remains good.',
        ],
      },
    ],
    redFlags: [
      'Pelvic pain with a positive pregnancy test: exclude ectopic pregnancy.',
      'Age ≥35 with infertility: refer earlier (after 6 months).',
      'Amenorrhoea with galactorrhoea or visual symptoms: prolactinoma.',
      'OHSS during IVF: abdominal distension, breathlessness, oliguria.',
    ],
    examTips: [
      'Folic acid dose and indications for 5 mg are examined often.',
      'Investigation timing: 12 months under 35, 6 months at 35 or over.',
      'Know the PCOS criteria and that letrozole is first line.',
    ],
    mcqs: [
      {
        stem: 'A 29-year-old with epilepsy on lamotrigine plans pregnancy. What folic acid dose is recommended?',
        options: ['0.4 mg daily', '0.5 mg daily', '5 mg daily', 'Not required', '1 mg weekly'],
        answer: 2,
        explanation: 'Antiepileptic medicines are an indication for high-dose (5 mg) folic acid.',
      },
      {
        stem: 'A 37-year-old woman has been trying to conceive for 7 months with regular cycles. What is appropriate?',
        options: [
          'Wait until 12 months',
          'Begin infertility investigations for both partners now',
          'Start clomiphene empirically',
          'IVF referral without tests',
          'Reassure until 40',
        ],
        answer: 1,
        explanation: 'At 35 or over, investigate after 6 months of trying.',
      },
      {
        stem: 'A 26-year-old has irregular cycles (every 45–60 days) and hirsutism. TSH and prolactin are normal. What additional finding confirms PCOS?',
        options: [
          'None – she already meets criteria',
          'Raised LH/FSH ratio required',
          'Insulin level required',
          'Laparoscopy',
          'Positive pregnancy test',
        ],
        answer: 0,
        explanation: 'Oligo-ovulation plus clinical hyperandrogenism meets 2 of 3 Rotterdam criteria once other causes are excluded.',
      },
      {
        stem: 'What is the first-line ovulation induction agent for women with PCOS?',
        options: ['Clomiphene citrate', 'Letrozole', 'Metformin alone', 'Gonadotrophins', 'Bromocriptine'],
        answer: 1,
        explanation: 'Letrozole gives higher live birth rates than clomiphene in PCOS.',
      },
      {
        stem: 'A woman has had two consecutive first-trimester miscarriages. Which test is most important?',
        options: ['Serum progesterone', 'Antiphospholipid antibodies', 'Karyotype of both partners in all cases', 'HLA typing', 'Natural killer cell testing'],
        answer: 1,
        explanation: 'APS is a treatable cause. Test and confirm with a repeat at 12 weeks.',
      },
    ],
    kfp: [
      {
        title: 'Caitlin and Mostafa are worried they can\'t conceive',
        scenario:
          'Caitlin, 33, and Mostafa, 36, have had regular unprotected intercourse for 14 months without pregnancy. Caitlin\'s cycles are regular (28–30 days). She had chlamydia at 19. Mostafa smokes and uses a sauna daily.',
        questions: [
          {
            prompt: 'List the investigations for Caitlin.',
            limit: 'Up to 5',
            answers: [
              'Mid-luteal progesterone (confirm ovulation)',
              'TSH, prolactin, AMH',
              'Rubella/varicella immunity; STI screen (chlamydia)',
              'Pelvic ultrasound',
              'Tubal patency test (HyCoSy/HSG) given prior chlamydia',
            ],
          },
          {
            prompt: 'List the investigations and advice for Mostafa.',
            limit: 'Up to 3',
            answers: [
              'Semen analysis (repeat if abnormal)',
              'Stop smoking; avoid heat exposure (sauna)',
              'Healthy weight, limit alcohol; review medicines/steroids',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '593',
    label: 'Unit 593',
    date: 'May 2022',
    title: 'Dermatology',
    specialty: 'Dermatology',
    alsoRelevant: ['Rheumatology', 'Mental Health'],
    topics: [
      'Stepwise acne treatment',
      'Psoriasis and its comorbidities',
      'Onychomycosis',
      'Vitiligo: prognosis and management',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2022/dermatology',
    overview:
      'Acne, psoriasis, fungal nails and vitiligo are common and affect quality of life. Match acne treatment to severity and avoid antibiotic monotherapy. Treat psoriasis as a systemic inflammatory disease with comorbidities. Confirm onychomycosis before systemic treatment, and counsel patients with vitiligo on prognosis.',
    sections: [
      {
        heading: 'Acne',
        points: [
          'Mild comedonal: topical retinoid (adapalene, tretinoin). Mild to moderate papulopustular: topical retinoid + benzoyl peroxide ± topical clindamycin (always with BPO).',
          'Moderate: add oral doxycycline or minocycline for about 3 months with topical retinoid/BPO. Never use antibiotics alone.',
          'Women: COC (anti-androgenic progestogens), spironolactone. Severe, nodular or scarring acne, or failure of treatment: dermatology for isotretinoin (teratogenic, so strict contraception; monitor mood and lipids).',
          'Acne scarring and low mood are indications to escalate early.',
        ],
      },
      {
        heading: 'Psoriasis',
        points: [
          'Chronic plaque psoriasis: well-demarcated, silvery-scaled plaques on extensor surfaces, scalp, umbilicus and natal cleft. Nail pitting and onycholysis.',
          'Comorbidities: psoriatic arthritis (up to 30%; screen with PEST), metabolic syndrome, obesity, T2DM, CVD, NAFLD, depression, alcohol misuse, IBD.',
          'Topical: potent steroid + calcipotriol combination, coal tar, keratolytics for scalp. Phototherapy. Systemic (methotrexate, acitretin, ciclosporin) and biologics through dermatology.',
          'Avoid systemic steroids (rebound or pustular flares). Lithium, β-blockers and antimalarials can worsen psoriasis.',
        ],
      },
      {
        heading: 'Onychomycosis',
        points: [
          'Confirm with nail clippings for microscopy and culture (± PCR) before systemic therapy. About half of dystrophic nails are not fungal (psoriasis, trauma).',
          'Terbinafine 250 mg daily: 12 weeks for toenails, 6 weeks for fingernails. Check baseline LFT. Nails take 12–18 months to grow out.',
          'Topical amorolfine or ciclopirox for limited distal disease (<50% of the nail, matrix spared).',
          'Treat coexisting tinea pedis and advise on footwear hygiene. Recurrence is common.',
        ],
      },
      {
        heading: 'Vitiligo',
        points: [
          'Depigmented, well-demarcated macules. Non-segmental (symmetrical, progressive) vs segmental (unilateral, stabilises early).',
          'Poor prognostic indicators: leukotrichia (white hairs), acral and mucosal sites, long duration. Signs of active disease: Koebner phenomenon, confetti-like or trichrome lesions.',
          'Better repigmentation: face and neck, recent onset, children.',
          'Treatment: potent topical steroid or calcineurin inhibitor (face), narrowband UVB, topical JAK inhibitor (specialist). Sun protection and camouflage. Check TSH (autoimmune thyroid disease). Offer psychological support.',
        ],
      },
    ],
    redFlags: [
      'Mood change or suicidal ideation on isotretinoin.',
      'Generalised pustular or erythrodermic psoriasis: admit.',
      'Pigmented nail streak (melanonychia) that is widening or irregular: subungual melanoma.',
      'Acne fulminans (systemic symptoms, ulcerated nodules).',
    ],
    examTips: [
      'Avoid oral antibiotic monotherapy for acne. Always combine with a topical retinoid or BPO.',
      'Confirm fungal nail infection before terbinafine.',
      'Remember psoriasis comorbidities, especially psoriatic arthritis and CVD.',
    ],
    mcqs: [
      {
        stem: 'A 16-year-old has moderate inflammatory acne on the face and back not responding to topical adapalene/BPO. What is the next step?',
        options: [
          'Oral doxycycline alone',
          'Oral doxycycline plus continued topical retinoid/BPO for ~3 months',
          'Oral prednisolone',
          'Topical clindamycin alone',
          'Isotretinoin immediately by GP',
        ],
        answer: 1,
        explanation: 'Combining oral antibiotics with topicals improves efficacy and limits resistance.',
      },
      {
        stem: 'A man with psoriasis has swollen fingers (dactylitis) and nail pitting. What is the most likely diagnosis?',
        options: ['Rheumatoid arthritis', 'Psoriatic arthritis', 'Gout', 'Osteoarthritis', 'Reactive arthritis'],
        answer: 1,
        explanation: 'Dactylitis and nail disease are characteristic of psoriatic arthritis.',
      },
      {
        stem: 'A 55-year-old has thickened yellow toenails. What should be done before prescribing terbinafine?',
        options: ['Nothing', 'Nail clippings for microscopy and culture, and baseline LFT', 'X-ray foot', 'Skin biopsy', 'Start itraconazole instead'],
        answer: 1,
        explanation: 'Confirm fungal infection because many nail dystrophies mimic it. Check liver function.',
      },
      {
        stem: 'Which feature suggests a poorer response to repigmentation therapy in vitiligo?',
        options: ['Facial lesions', 'Recent onset', 'Leukotrichia (white hairs) within patches', 'Childhood onset', 'Small lesions'],
        answer: 2,
        explanation: 'Leukotrichia indicates loss of the follicular melanocyte reservoir needed for repigmentation.',
      },
      {
        stem: 'Which medicine is known to exacerbate psoriasis?',
        options: ['Paracetamol', 'Lithium', 'Amoxicillin', 'Metformin', 'Atorvastatin'],
        answer: 1,
        explanation: 'Lithium, β-blockers, antimalarials and withdrawal of systemic steroids can flare psoriasis.',
      },
    ],
    kfp: [
      {
        title: 'Xanthe has concerns about her acne',
        scenario:
          'Xanthe, 19, has had acne for 4 years. She has tried topical adapalene–BPO and two 3-month courses of doxycycline. She now has deep nodules on her jaw and early scarring, and says she avoids going out.',
        questions: [
          {
            prompt: 'List the key issues to assess.',
            limit: 'Up to 4',
            answers: [
              'Severity – nodular acne with scarring',
              'Psychological impact – depression, anxiety, suicidal ideation',
              'Contraception and pregnancy plans',
              'Features of hyperandrogenism/PCOS (irregular periods, hirsutism)',
            ],
          },
          {
            prompt: 'List your management plan.',
            limit: 'Up to 4',
            answers: [
              'Refer to dermatologist for isotretinoin',
              'Discuss teratogenicity – two forms of contraception / reliable contraception and pregnancy testing',
              'Baseline bloods for isotretinoin (lipids, LFT) and mood monitoring',
              'Consider hormonal therapy (COC/spironolactone) and psychological support meanwhile',
            ],
          },
        ],
      },
    ],
  },
]

export default units
