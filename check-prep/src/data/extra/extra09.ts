import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  '617': {
    sections: [
      {
        heading: 'Screening and brief intervention',
        points: [
          'Screen routinely: AUDIT-C for alcohol (a score of 5 or more in men, 4 or more in women suggests risk), the ASSIST for other substances, and the Heaviness of Smoking Index or time to first vape for nicotine.',
          'Brief intervention (FRAMES): Feedback on risk, Responsibility with the patient, clear Advice, a Menu of options, Empathy, and Self-efficacy. It takes 5–10 minutes and reduces hazardous drinking.',
          'Explore ambivalence with motivational interviewing. Readiness changes over time, so revisit at each visit.',
          'Consider co-occurring mental health conditions, chronic pain, trauma and social factors (housing, employment, relationships).',
          'Know local AOD services, the national Alcohol and Drug Information Service, and family support services.',
        ],
      },
      {
        heading: 'Nicotine and vaping in young people',
        points: [
          'Vaping has risen rapidly in adolescents. Many illicit vapes contain high nicotine concentrations despite "nicotine-free" labels, and some contain harmful chemicals.',
          'Health effects: nicotine dependence, worsening asthma and cough, lung injury (rare EVALI), anxiety and mood effects, sleep disturbance, and burns from device malfunction. Vaping is a gateway to smoking for some.',
          'Assessment: HEEADSSS, frequency and nicotine strength, symptoms of dependence and withdrawal (irritability, cravings, poor concentration), co-use of cannabis or tobacco, and mental health.',
          'Treatment: a quit plan with a quit date, behavioural support (Quitline 13 7848, text and app programs), managing triggers and stress. NRT (patch plus fast-acting form) is approved from age 12 when dependence is significant.',
          'Tapering vape use before stopping, or switching to NRT, can reduce withdrawal. Relapse is common, so normalise it and try again.',
          'Parents: stay calm, keep communication open, avoid confrontation, model behaviour, and use Quit and eSafety resources.',
        ],
      },
      {
        heading: 'Alcohol withdrawal: assessment and outpatient management',
        points: [
          'Estimate risk: daily consumption (standard drinks), time since last drink, previous withdrawals, seizures or DTs, concurrent benzodiazepine or other drug use, medical and psychiatric comorbidity, and home support.',
          'Withdrawal features: tremor, sweating, anxiety, agitation, nausea, tachycardia and hypertension (6–24 hours). Hallucinations (12–48 hours). Seizures (12–48 hours). Delirium tremens (48–96 hours, with confusion, fever and autonomic instability, which is life-threatening).',
          'Use a withdrawal scale (AWS or CIWA-Ar) to guide symptom-triggered or fixed-schedule diazepam. Daily review by GP, nurse or pharmacist. A support person holds the medication.',
          'Typical diazepam schedule: day 1, 10 mg qid; day 2, 10 mg tds; day 3, 10 mg bd; day 4, 5 mg bd; day 5, 5 mg nocte. Adjust to severity, and use smaller doses in older people and liver disease (or oxazepam).',
          'Thiamine for all: 100 mg tds orally (or 300 mg IM/IV daily for 3–5 days if malnourished or Wernicke risk). Give multivitamins and fluids.',
          'Plan relapse prevention before withdrawal ends: acamprosate or naltrexone, counselling, mutual aid (SMART Recovery, AA), follow-up.',
        ],
      },
      {
        heading: 'Supporting families',
        points: [
          'Families experience stress, anxiety, depression, financial hardship, violence and relationship breakdown. They often seek help before the person using substances does.',
          'Assess the family member\'s own wellbeing, safety (family violence), and the safety of children in the home.',
          'CRAFT (Community Reinforcement and Family Training) teaches families to reward non-using behaviour, allow natural consequences, communicate positively and invite the person into treatment. It is more effective than confrontational "interventions" or Al-Anon alone for engaging the person.',
          'Resources: Family Drug Support (1300 368 186), Al-Anon, state family AOD services, and psychology via a Mental Health Treatment Plan for the family member.',
          'Harm reduction for families: naloxone training if opioids are involved, recognising overdose, and safety planning.',
        ],
      },
      {
        heading: 'Iatrogenic opioid dependence in chronic pain',
        points: [
          'Long-term opioids for chronic non-cancer pain have limited evidence of benefit, and carry risks: tolerance, hyperalgesia, dependence, falls, endocrine effects (hypogonadism), constipation, sleep apnoea and overdose.',
          'Review regularly using the "5 As": Analgesia, Activities, Adverse effects, Aberrant behaviours, Affect.',
          'Opioid tapering (without OUD): negotiate, and reduce by about 10% of the original dose every 2–4 weeks (slower if long-term or high dose). Give non-opioid pain strategies and psychological support. Avoid abrupt cessation, which increases overdose and suicide risk.',
          'With OUD: offer opioid dependence treatment (buprenorphine or methadone) rather than tapering alone.',
          'High-risk features: doses over 100 mg oral morphine equivalent a day, co-prescribed benzodiazepines or gabapentinoids, mental illness, a history of overdose. Supply naloxone.',
          'Use real-time prescription monitoring (for example SafeScript) before prescribing Schedule 8 and monitored Schedule 4 medicines.',
        ],
      },
      {
        heading: 'Benzodiazepine dependence',
        points: [
          'Long-term benzodiazepine use leads to tolerance, dependence, cognitive impairment, falls (especially in older adults), motor vehicle accidents and overdose risk with opioids or alcohol.',
          'Withdrawal symptoms: anxiety, insomnia, irritability, perceptual disturbances, tremor, and seizures if stopped abruptly after high doses.',
          'Taper plan: convert to diazepam (long half-life), reduce by about 10–25% every 1–2 weeks, slowing toward the end (the last few mg are often hardest). The total taper may take weeks to months.',
          'Support: CBT for anxiety and insomnia, relaxation, sleep hygiene, and treating underlying depression or anxiety with an SSRI if indicated.',
          'Illicit benzodiazepines ("fake Xanax", etizolam, other analogues) are more potent and unpredictable. Ask specifically.',
          'For high-dose or complicated dependence (polysubstance use, seizures), refer to specialist AOD services for supervised withdrawal.',
        ],
      },
    ],
    keyNumbers: [
      'AUDIT-C risk: ≥5 men, ≥4 women',
      'Standard drink = 10 g alcohol',
      'Withdrawal seizures 12–48 h; DTs 48–96 h',
      'Thiamine 100 mg tds oral; IM/IV if Wernicke risk',
      'Opioid taper ≈10% of original dose every 2–4 weeks',
      'Benzodiazepine taper 10–25% every 1–2 weeks',
      'Quitline 13 7848; Family Drug Support 1300 368 186',
      'NRT approved from age 12',
    ],
    workedCase: {
      title: 'Kelly is tired and anxious',
      paragraphs: [
        'Kelly, 46, has taken alprazolam 1 mg three times daily for 6 years after a panic disorder diagnosis. She also has temazepam 20 mg at night. She feels "foggy", has had two falls this year, and anxiety returns between doses. She wants to stop "but I\'m scared."',
        'You acknowledge that her dependence is iatrogenic and not her fault. You explain the plan: switch to diazepam (roughly equivalent to her total dose; alprazolam 3 mg plus temazepam 20 mg is about 30–40 mg diazepam), stabilise for 1–2 weeks, then reduce by about 10% every 2 weeks, more slowly at low doses.',
        'You start sertraline for panic disorder and refer her for CBT with interoceptive exposure. She receives weekly dispensing. You review her fortnightly to monitor withdrawal symptoms and adjust the pace.',
        'After 7 months she is off benzodiazepines. Her panic attacks are rare, she has had no further falls, and she reports thinking more clearly.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Alcohol and drug withdrawal and dependence',
        lead: 'Choose the SINGLE most appropriate management for each patient.',
        options: [
          'Outpatient diazepam withdrawal regimen with daily review',
          'Inpatient withdrawal management',
          'Parenteral thiamine urgently',
          'Convert to diazepam and taper slowly',
          'Buprenorphine as opioid dependence treatment',
          'Brief intervention (FRAMES)',
          'Combination NRT and Quitline',
          'Abrupt cessation',
        ],
        items: [
          { stem: 'A 55-year-old drinking 10 standard drinks daily with a history of DTs wants to stop.', answer: 1 },
          { stem: 'A 38-year-old drinking 25 standard drinks a week with no dependence symptoms.', answer: 5 },
          { stem: 'A malnourished drinker who is confused with nystagmus and an unsteady gait.', answer: 2 },
          { stem: 'A 17-year-old vaping 1 disposable a day who wants to quit.', answer: 6 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Noah is struggling with chronic pain',
        scenario:
          'Noah, 44, a former truck driver, has chronic neck and shoulder pain after an accident 5 years ago. He takes oxycodone–naloxone 40/20 mg bd and asks for a higher dose. He is sleeping poorly, has stopped going out, and his wife says he is "a different person".',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE areas are most important to assess?',
            options: [
              'Function, mood and suicide risk',
              'Features of opioid use disorder (loss of control, craving, aberrant behaviours)',
              'Adverse effects (sedation, constipation, sleep apnoea, hypogonadism)',
              'Serum opioid levels',
              'MRI of the whole spine',
              'Genetic testing for CYP2D6',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            context: 'He has no aberrant behaviours, but pain relief is poor, he has depression (PHQ-9 16), and function is declining.',
            stem: 'What is the most appropriate approach to his opioids?',
            options: [
              'Increase oxycodone to 60 mg bd',
              'Negotiate a gradual taper while starting non-opioid pain strategies and treating depression',
              'Stop opioids abruptly',
              'Switch to a fentanyl patch at a higher equivalent dose',
              'Add diazepam for sleep',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which THREE interventions should form his multidisciplinary pain plan?',
            options: [
              'Physiotherapy or exercise physiology with graded activity',
              'Psychology (CBT or ACT for chronic pain) via a Mental Health Treatment Plan',
              'Treat depression (e.g. duloxetine, which may also help pain)',
              'Repeated imaging every 3 months',
              'Long-term benzodiazepines',
              'Complete bed rest',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'Which safety measure is essential during his taper?',
            options: [
              'Supply take-home naloxone and explain reduced tolerance',
              'Stop all other medicines',
              'Avoid all follow-up',
              'Prescribe tramadol in addition',
              'Advise him to drive long distances to test sedation',
            ],
            answer: 0,
          },
          {
            kind: 'emq',
            theme: 'Taper difficulties',
            lead: 'Choose the SINGLE best response to each problem during the taper.',
            options: [
              'Pause the taper and review, then continue more slowly',
              'Offer opioid dependence treatment (buprenorphine)',
              'Increase to the original dose permanently',
              'Refer for spinal surgery',
              'Stop the taper completely and discharge',
            ],
            items: [
              { stem: 'Increased pain and poor sleep for 2 weeks after a dose step', answer: 0 },
              { stem: 'He admits buying extra oxycodone online and cannot control use', answer: 1 },
            ],
          },
        ],
      },
    ],
  },
  '616': {
    sections: [
      {
        heading: 'Diagnosis and classification',
        points: [
          'Diagnosis: HbA1c 48 mmol/mol (6.5%) or more, fasting plasma glucose 7.0 mmol/L or more, or 2-hour OGTT 11.1 or more. Confirm with a repeat test unless symptomatic with random glucose over 11.1.',
          'Prediabetes: impaired fasting glucose (6.1–6.9), impaired glucose tolerance (2-hour 7.8–11.0), or HbA1c 42–47. Lifestyle change reduces progression by about 58%.',
          'Screen with AUSDRISK from 40 (from 18 in Aboriginal and Torres Strait Islander people). Test if the score is 12 or more, or there are risk factors (previous GDM, PCOS, antipsychotics, high-risk ethnicity).',
          'Consider type 1 diabetes or LADA in lean people, rapid onset, ketones, or failure of oral therapy. Test GAD antibodies and C-peptide.',
          'HbA1c is unreliable with anaemia, haemoglobinopathies, recent transfusion, pregnancy and advanced CKD.',
        ],
      },
      {
        heading: 'Individualising glucose-lowering therapy',
        points: [
          'The Australian T2D Handbook algorithm: metformin first, then choose add-ons based on comorbidities (CVD, heart failure, CKD), weight goals, hypoglycaemia risk, cost and patient preference.',
          'Weight priority: GLP-1 RA (semaglutide, dulaglutide) or tirzepatide, then SGLT2i. Hypoglycaemia risk priority: avoid sulfonylureas and insulin where possible (DPP-4i, SGLT2i and GLP-1 RA carry low risk).',
          'Older and frail people: relax targets (HbA1c up to 64–70), simplify regimens, deprescribe sulfonylureas, and avoid hypoglycaemia (falls, cognitive decline).',
          'PBS criteria affect access. Check current listings for combinations (for example GLP-1 RA with SGLT2i).',
          'DPP-4 inhibitors (sitagliptin, linagliptin) are weight-neutral and well tolerated but have no cardiorenal benefit. Linagliptin needs no renal adjustment. Watch for bullous pemphigoid.',
        ],
      },
      {
        heading: 'Injectable therapy: rationale and practicalities',
        points: [
          'Start injectables when HbA1c stays above target despite optimal oral therapy, or when there are symptoms of hyperglycaemia or catabolism (weight loss, ketones).',
          'GLP-1 RA first for most (weight loss, CV benefit, low hypoglycaemia risk). Start low, titrate monthly. Nausea is common and settles. Stop if pancreatitis is suspected.',
          'Basal insulin: glargine U100 or U300, degludec, or detemir. Start 10 units at night (or 0.1–0.2 units/kg) and self-titrate by 2 units every 3 days until fasting BGL is at target. Continue metformin, and reduce or stop sulfonylureas.',
          'Intensification: add prandial insulin to the largest meal (basal-plus), premixed insulin twice daily, or basal-bolus. A combined insulin + GLP-1 RA can limit weight gain.',
          'Education (with a credentialled diabetes educator): injection technique and site rotation (lipohypertrophy), hypoglycaemia recognition and treatment (15 g fast carbs, rule of 15), sick-day plans, driving rules, NDSS registration.',
          'CGM (continuous glucose monitoring) improves insulin management. Subsidised for type 1 and some other groups.',
        ],
      },
      {
        heading: 'Cardio–renal–metabolic protection',
        points: [
          'Diabetic kidney disease: screen annually with eGFR + urine ACR. Albuminuria (ACR ≥2.5 in men, ≥3.5 in women) confirmed on repeat tests means increased CV and renal risk.',
          'The four pillars of kidney protection: maximum-tolerated ACEi or ARB, SGLT2i (initiate if eGFR ≥20), finerenone (non-steroidal MRA, for persistent albuminuria with T2D), and GLP-1 RA.',
          'Check K⁺ and creatinine 1–2 weeks after starting an ACEi, ARB or finerenone. A creatinine rise of up to 30% is acceptable.',
          'Lipids: statin for most adults with diabetes over 40, or with complications. Target LDL <1.8 mmol/L (or <1.4 in very high risk).',
          'BP target generally <130/80. Stop smoking. Aspirin only for secondary prevention.',
          'Heart failure (including HFpEF) is common in diabetes. SGLT2i reduces hospitalisation. Avoid pioglitazone and saxagliptin in HF.',
        ],
      },
      {
        heading: 'Feet, eyes and nerves',
        points: [
          'Foot risk stratification: low (normal sensation and pulses), moderate (one risk factor: neuropathy, PAD or deformity), high (a previous ulcer or amputation, or neuropathy plus PAD or deformity, or dialysis). Review frequency increases with risk. High risk means podiatry every 1–3 months.',
          'Neuropathy: 10 g monofilament, vibration (128 Hz tuning fork), ankle reflexes. Painful neuropathy: duloxetine, pregabalin or amitriptyline.',
          'Active foot ulcer: offload, debride, treat infection per Therapeutic Guidelines (for example amoxicillin–clavulanate for moderate infection), check perfusion (toe pressures), and refer to a high-risk foot service within 24–48 hours.',
          'Charcot foot: a hot, red, swollen, often painless foot in neuropathy. Immobilise immediately (non-weight-bearing) and refer urgently. Early diagnosis prevents deformity.',
          'Eyes: retinal screening every 1–2 years (yearly for First Nations people or with retinopathy). Retinal cameras in general practice (MBS items) improve access.',
          'Autonomic neuropathy: gastroparesis, postural hypotension, erectile dysfunction, hypoglycaemia unawareness.',
        ],
      },
      {
        heading: 'Remission and weight-centred care',
        points: [
          'Remission is most likely with early diabetes (under 6 years), significant weight loss (≥10–15 kg), and preserved beta-cell function.',
          'The DiRECT trial: total diet replacement (about 850 kcal a day for 12–20 weeks) then food reintroduction led to remission in 46% at 1 year, which was strongly related to weight loss.',
          'Plan medicine reduction before starting a very low energy diet: stop sulfonylureas and SGLT2i (ketoacidosis risk), reduce insulin, and review antihypertensives.',
          'Metabolic surgery produces remission in many people with T2D and obesity. Consider it at BMI 35 or more (or lower in some Asian populations) with poor control.',
          'Even without remission, weight loss improves glycaemia, BP, lipids, OSA and quality of life. Continue annual complication screening in remission.',
        ],
      },
      {
        heading: 'Special populations',
        points: [
          'Youth-onset T2D: more aggressive, with faster complications. Metformin, GLP-1 RA (approved from 10–12 years for some), intensive lifestyle, family support, and screening for depression and eating disorders.',
          'Aboriginal and Torres Strait Islander peoples: diabetes prevalence is 3–4 times higher, with earlier onset and high rates of kidney disease. Use the 715 health assessment, culturally safe diabetes programs, and PBS Closing the Gap co-payment support.',
          'Pregnancy planning: HbA1c below 48–53, folic acid 5 mg, stop teratogenic drugs (ACEi/ARB, statins, SGLT2i, GLP-1 RA), and switch to insulin or metformin. Get a retinal check.',
          'Ramadan fasting: pre-Ramadan review, adjust sulfonylureas and insulin timing, and advise breaking the fast for hypoglycaemia.',
          'Steroid-induced hyperglycaemia: afternoon peaks. Monitor pre-evening BGLs and consider morning NPH insulin or gliclazide.',
        ],
      },
    ],
    keyNumbers: [
      'Diabetes: HbA1c ≥48 mmol/mol; FPG ≥7.0; 2-h OGTT ≥11.1',
      'Prediabetes: HbA1c 42–47; IFG 6.1–6.9',
      'General HbA1c target ≤53 mmol/mol (7%)',
      'Basal insulin: 10 units, titrate +2 units every 3 days',
      'Hypo: 15 g fast carbs, recheck in 15 min',
      'Albuminuria: ACR ≥2.5 (men) / ≥3.5 (women) mg/mmol',
      'SGLT2i initiation: eGFR ≥20',
      'Retinal screening every 1–2 years',
      'Driving on insulin: BGL >5 to drive',
      'DiRECT: ~850 kcal/day, 46% remission at 1 year',
    ],
    workedCase: {
      title: 'Timmy needs a new management plan',
      paragraphs: [
        'Timmy, 58, has had T2D for 9 years. He takes metformin 1 g bd and gliclazide MR 120 mg daily. HbA1c is 69 mmol/mol, BMI 34, BP 142/88, eGFR 52, ACR 12 mg/mmol (confirmed twice), LDL 2.6 mmol/L on atorvastatin 20 mg. He had two episodes of sweaty shakes last month and drives a delivery van.',
        'You identify several issues: above-target HbA1c, hypoglycaemia on a high-dose sulfonylurea (a driving safety concern), albuminuric CKD, suboptimal BP and LDL, and obesity.',
        'Plan: start an SGLT2 inhibitor (kidney and heart protection) with sick-day education, then a GLP-1 RA for weight and glycaemia. Reduce gliclazide to 30–60 mg and aim to stop it. Increase perindopril to the maximum tolerated dose and check K⁺ and creatinine in 2 weeks. Increase atorvastatin to 40–80 mg. Advise on hypoglycaemia and driving (check BGL before driving, above 5 to drive, carry glucose).',
        'At 6 months HbA1c is 55, weight is down 8 kg, ACR is 6, and he has had no hypos off gliclazide. You add finerenone after nephrology input for residual albuminuria and continue annual foot and eye checks.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Choosing diabetes medicines',
        lead: 'Choose the SINGLE most appropriate addition for each patient on metformin.',
        options: [
          'SGLT2 inhibitor',
          'GLP-1 receptor agonist',
          'Sulfonylurea',
          'DPP-4 inhibitor',
          'Basal insulin',
          'Pioglitazone',
          'Finerenone',
          'No change',
        ],
        items: [
          { stem: 'A 62-year-old with HFrEF and HbA1c 58.', answer: 0 },
          { stem: 'A 50-year-old with BMI 38, prior MI, HbA1c 62, and a strong wish to lose weight.', answer: 1 },
          { stem: 'A 70-year-old with HbA1c 88, polyuria and 6 kg weight loss despite maximal oral therapy.', answer: 4 },
          { stem: 'A 66-year-old on ACEi and SGLT2i with persistent albuminuria and normal K⁺.', answer: 6 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Heather needs her scripts refilled',
        scenario:
          'Heather, 79, lives alone and has T2D for 20 years. She takes metformin 1 g bd, glibenclamide 5 mg bd, and insulin glargine 20 units. Her HbA1c is 51 mmol/mol. She has had two falls in 3 months, lives alone and has mild memory problems. eGFR is 38.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE problems with her current regimen are most concerning?',
            options: [
              'Hypoglycaemia risk from glibenclamide (long-acting sulfonylurea) with insulin in an older person',
              'HbA1c target too tight for her frailty and falls risk',
              'Metformin dose too high for eGFR 38',
              'Glargine is contraindicated in CKD',
              'She is not on a DPP-4 inhibitor',
              'HbA1c is too high',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'What is the most appropriate HbA1c target for Heather?',
            options: ['≤42 mmol/mol', '≤48 mmol/mol', '≤53 mmol/mol', 'Individualised, e.g. ≤64 mmol/mol, avoiding hypoglycaemia', 'No target'],
            answer: 3,
          },
          {
            kind: 'multi',
            stem: 'Which THREE medicine changes are most appropriate?',
            options: [
              'Stop glibenclamide',
              'Reduce metformin to a maximum of 1 g/day',
              'Consider reducing glargine and review BGL pattern (CGM or diary)',
              'Add a second sulfonylurea',
              'Double glargine',
              'Stop all diabetes medicines immediately',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'emq',
            theme: 'Supporting older people with diabetes',
            lead: 'Choose the SINGLE most appropriate intervention for each issue.',
            options: [
              'Home Medicines Review by a pharmacist',
              'Falls assessment and physiotherapy',
              'Cognitive assessment',
              'Dose administration aid (e.g. blister pack)',
              'Insulin pump',
              'Driving assessment',
            ],
            items: [
              { stem: 'Several prescribers and she is unsure which tablets to take', answer: 0 },
              { stem: 'Mild memory problems affecting medication management', answer: 2 },
              { stem: 'Two recent falls', answer: 1 },
            ],
          },
          {
            kind: 'sba',
            stem: 'How should she treat a BGL of 3.2 mmol/L?',
            options: [
              '15 g fast-acting carbohydrate (e.g. 150 mL juice or 6 jelly beans), recheck in 15 minutes, then a longer-acting carbohydrate snack',
              'Eat chocolate only',
              'Wait 1 hour and recheck',
              'Take extra insulin',
              'Drink diet cola',
            ],
            answer: 0,
          },
        ],
      },
    ],
  },
  '615': {
    sections: [
      {
        heading: 'The GP as a family\'s mental health clinician over time',
        points: [
          'GPs may care for several generations. They see how events such as births, illness, job loss, separation and deaths ripple through a family.',
          'Continuity allows early recognition of patterns: postnatal depression in a mother, behaviour change in a child, alcohol use in a parent after job loss.',
          'Family-sensitive practice: ask about family members\' wellbeing and caring roles, identify young carers, and consider how one person\'s illness affects others.',
          'Boundaries: each person is an individual patient with their own confidentiality. Joint consultations need consent from each person.',
          'Some families have complex dynamics, including conflict, separation and custody disputes. Stay neutral, focus on the patient\'s needs, and document carefully.',
        ],
      },
      {
        heading: 'Confidentiality when violence affects the family',
        points: [
          'When both the victim and the person using violence are patients: never disclose one person\'s information to the other, and never confront the person using violence with information from the victim.',
          'Practice systems: flag records securely (not visibly), avoid sending reminders or letters that could expose disclosures, and check contact details are safe (for example use a safe phone number).',
          'Information-sharing schemes (for example Victoria\'s Family Violence Information Sharing Scheme, NSW Part 13A) allow sharing with specified services to assess or manage risk without consent in certain circumstances.',
          'Serious and imminent threat to life or safety: the Privacy Act allows disclosure without consent to lessen or prevent the threat.',
          'Children at risk: mandatory reporting obligations override confidentiality.',
          'My Health Record: patients can restrict access to documents. Consider this in family violence situations.',
        ],
      },
      {
        heading: 'Childhood trauma and adult health',
        points: [
          'The original ACE study (Felitti 1998) found a dose-response relationship: people with 4 or more ACEs had much higher rates of smoking, alcohol use, depression, suicide attempts, heart disease, COPD and liver disease.',
          'Mechanisms: chronic toxic stress affects brain development (amygdala, prefrontal cortex), HPA axis and immune function, and health behaviours used as coping.',
          'Presentations in adults: chronic pain, medically unexplained symptoms, frequent attendance, addiction, mood and personality difficulties, difficulties with trust and authority, and avoidance of examinations.',
          'Screening for ACEs is debated. A trauma-informed approach (universal precautions) is recommended regardless: safety, choice, collaboration and transparency.',
          'Protective factors (a safe, stable relationship with a caring adult) build resilience. Intergenerational cycles can be broken with parenting support.',
          'Treatment: trauma-focused therapies (CPT, EMDR, schema therapy for complex trauma), and phase-based approaches for complex PTSD (stabilisation first).',
        ],
      },
      {
        heading: 'Perinatal mental health',
        points: [
          'Screen with the EPDS in pregnancy and postpartum (for example at 6–12 weeks). Use psychosocial assessment tools such as ANRQ. Include fathers and non-birthing partners.',
          'Baby blues (days 3–10, mild, self-limiting) vs postnatal depression (2 weeks or more of depressive symptoms, impaired functioning) vs postpartum psychosis (onset within 2 weeks, rapid, with confusion, delusions and mood swings; highest risk in bipolar disorder; an emergency).',
          'Perinatal anxiety and OCD are common. Intrusive harm thoughts that are ego-dystonic lead to avoidance, and do not increase risk to the baby.',
          'Treatment: psychological (CBT, IPT), social support, and SSRIs (sertraline preferred in breastfeeding). Mother–baby units for severe illness.',
          'Resources: PANDA helpline (1300 726 306), Gidget Foundation, COPE, and perinatal mental health services.',
          'Screen for family violence, which often starts or escalates in pregnancy.',
        ],
      },
      {
        heading: 'Coping skills GPs can teach',
        points: [
          'Grounding techniques for panic or dissociation: 5-4-3-2-1 senses, slow breathing (4 seconds in, 6 seconds out), naming objects.',
          'Behavioural activation: schedule enjoyable and meaningful activities, starting small, to break the depression–withdrawal cycle.',
          'Problem-solving therapy: define the problem, brainstorm options, choose and plan, then review. It is effective for depression in primary care.',
          'Acceptance and commitment therapy (ACT) concepts: accept difficult thoughts rather than fighting them, clarify values, and take committed action.',
          'Sleep and routine: regular wake time, daylight exposure, exercise, limit alcohol and screens.',
          'Digital tools: MindSpot, This Way Up and Head to Health for guided self-help.',
        ],
      },
      {
        heading: 'Doctor wellbeing in practice',
        points: [
          'Doctors have higher rates of burnout and, among female doctors, higher suicide rates than the general population. Barriers to help-seeking include stigma, confidentiality fears and fear of regulatory consequences.',
          'Warning signs in yourself or colleagues: irritability, cynicism, withdrawal, errors, increasing alcohol or self-prescribing, and dread of work.',
          'Protective habits: have your own GP (don\'t self-treat or prescribe for yourself), protect leave and breaks, keep reasonable caseloads, use peer support, Balint groups or supervision, and keep outside interests.',
          'Services: Doctors\' Health Advisory Services in each state, DRS4DRS, Hand-n-Hand peer support, and RACGP GP Support Program (free counselling).',
          'Mandatory notification: treating practitioners in most states notify AHPRA only for a substantial risk of harm to the public, and WA exempts treating practitioners. Seeking help early is protective.',
          'Organisational factors (workload, administrative burden, bullying) matter as much as personal resilience.',
        ],
      },
    ],
    keyNumbers: [
      'EPDS ≥13: probable depression; any positive item 10 → assess safety',
      'Baby blues: days 3–10, self-limiting',
      'Postpartum psychosis: onset usually within 2 weeks – emergency',
      'Sertraline preferred when breastfeeding',
      'PANDA: 1300 726 306',
      '≥4 ACEs: markedly increased chronic disease and suicide risk',
      'Mandatory notification threshold: substantial risk of harm',
    ],
    workedCase: {
      title: 'Priya feels overwhelmed and alone',
      paragraphs: [
        'Priya, 32, attends with her 8-week-old son. She has been crying daily, is not sleeping even when the baby sleeps, and feels she is a "terrible mother". Her husband works long hours and her family is overseas. EPDS is 17, and item 10 is "hardly ever".',
        'You explore further: low mood and anhedonia for 4 weeks, guilt, and poor appetite. There are no psychotic features. She has occasional fleeting thoughts that the family would be better off without her, with no plan or intent. She has intrusive images of the baby falling, which she finds horrifying and avoids stairs because of. You explain these intrusive thoughts are common and do not mean she will harm him.',
        'You check for family violence (none) and physical causes (TSH, FBC, ferritin). You create a safety plan and involve her husband with her consent. You arrange a Mental Health Treatment Plan for perinatal psychology (CBT), PANDA and local mothers\' groups, and start sertraline 25 mg (increasing to 50 mg), compatible with breastfeeding.',
        'You review her weekly at first. By 8 weeks her EPDS is 8, she has joined a playgroup, and her intrusive thoughts have faded.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Perinatal mental health',
        lead: 'Choose the SINGLE most likely diagnosis for each woman.',
        options: [
          'Baby blues',
          'Postnatal depression',
          'Postpartum psychosis',
          'Perinatal OCD',
          'Generalised anxiety disorder',
          'PTSD after traumatic birth',
          'Hypothyroidism (postpartum thyroiditis)',
          'Normal adjustment',
        ],
        items: [
          { stem: 'Day 4 postpartum: tearful and emotional, sleeping when possible, enjoying the baby.', answer: 0 },
          { stem: 'Day 7 postpartum: not sleeping for 2 days, believes the baby is possessed, confused.', answer: 2 },
          { stem: '3 months postpartum: nightmares and flashbacks about an emergency caesarean, avoids the hospital.', answer: 5 },
          { stem: '4 months postpartum: fatigue, weight gain, low mood, cold intolerance, after a period of palpitations at 6 weeks.', answer: 6 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Paul has many regrets',
        scenario:
          'Paul, 71, has been your patient for 20 years. His wife died 8 months ago. He has lost weight, stopped his bowls club, drinks more whisky at night, and says he "has many regrets" about how he treated his family when he was drinking years ago. He has a shotgun on his hobby farm.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE assessments are most important today?',
            options: [
              'Suicide risk assessment including access to the shotgun',
              'Depression screen (e.g. GDS or PHQ-9) and grief assessment',
              'Alcohol intake (AUDIT)',
              'Serum testosterone',
              'Spirometry',
              'Bone density',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'Which feature best distinguishes depression from normal grief?',
            options: [
              'Sadness and crying',
              'Pervasive low self-worth and loss of interest in all activities, not just thoughts of the deceased',
              'Yearning for his wife',
              'Waves of emotion triggered by reminders',
              'Difficulty sleeping in the first weeks',
            ],
            answer: 1,
          },
          {
            kind: 'sba',
            context: 'Paul has persistent depression (GDS 11/15) and passive death wishes, no current plan.',
            stem: 'What is the most important immediate safety measure?',
            options: [
              'Arrange for the shotgun to be removed or securely stored away from him (e.g. with family or police)',
              'Start zopiclone for sleep',
              'Review in 3 months',
              'Advise him to drink less whisky only',
              'Refer to a dietitian',
            ],
            answer: 0,
          },
          {
            kind: 'multi',
            stem: 'Which THREE treatments are most appropriate?',
            options: [
              'Psychological therapy (e.g. grief-focused or CBT) via a Mental Health Treatment Plan',
              'An antidepressant (e.g. sertraline) with close review',
              'Re-engagement with social connections (e.g. bowls club, men\'s shed) and reduced alcohol',
              'Benzodiazepine nightly',
              'Tell him grief always resolves without help',
              'Refer for ECT immediately',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'emq',
            theme: 'Using continuity of care',
            lead: 'Choose the SINGLE best action for each opportunity.',
            options: [
              'Offer a family meeting with Paul\'s consent',
              'Explore regrets with a view to reconciliation or counselling',
              'Share Paul\'s information with his son without consent',
              'Check on his daughter\'s wellbeing when she attends for her own appointment (without disclosing Paul\'s information)',
              'Stop seeing Paul',
            ],
            items: [
              { stem: 'Paul wants his children to understand he is struggling', answer: 0 },
              { stem: 'Paul\'s regrets about past drinking and family harm', answer: 1 },
              { stem: 'His daughter, also your patient, has recently been bereaved too', answer: 3 },
            ],
          },
        ],
      },
    ],
  },
}

export default extra
