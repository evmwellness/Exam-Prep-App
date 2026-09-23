import type { BaseUnit } from '../../types'

const units: BaseUnit[] = [
  {
    id: '624',
    label: 'Unit 624',
    date: 'Jul 2025',
    title: 'Abuse and violence in families',
    specialty: 'Abuse & Violence',
    alsoRelevant: ['Mental Health', 'Paediatrics & Child Health', 'Professional & Ethical Practice'],
    topics: [
      'Presentations suggesting family and domestic violence (FDV)',
      'Funnelling questions to ask about abuse',
      'LIVES first-line response',
      'Risk assessment including non-fatal strangulation',
      'Young people and LGBTQA+ people experiencing abuse',
      'Children exposed to FDV and mandatory reporting',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2025/abuse-and-violence-in-families',
    overview:
      'Family and domestic violence is common and often presents indirectly, for example as abdominal pain, insomnia, depression or a request for a certificate. GPs should ask safely, respond with the LIVES framework, assess risk (especially non-fatal strangulation), document carefully, and protect children. People using violence may also present and can be engaged towards accountability.',
    sections: [
      {
        heading: 'Recognising and asking',
        points: [
          'Clues include chronic pain, IBS-type symptoms, headaches, anxiety or depression, substance use, repeated injuries with unclear explanations, a controlling partner who attends, and missed appointments.',
          'Ask alone, never in front of a partner or family member, and use a professional interpreter (not family).',
          'Funnelling: start broad ("How are things at home?"), then specific ("Has anyone hurt you or made you feel afraid?"). Include coercive control: finances, isolation, monitoring, threats.',
          'Men, older people (elder abuse), young people (dating violence) and LGBTQA+ people (threats to "out" someone, withholding gender-affirming care) can all be victim-survivors.',
        ],
      },
      {
        heading: 'LIVES response',
        points: [
          'Listen: empathically, without judgement.',
          'Inquire about needs and concerns: emotional, physical, social and practical.',
          'Validate: "It\'s not your fault. You don\'t deserve this."',
          'Enhance safety: risk assessment and a safety plan (escape bag, safe contacts, code word).',
          'Support: connect with services such as 1800RESPECT, state FDV services, legal aid, housing, and ongoing GP follow-up.',
        ],
      },
      {
        heading: 'Risk assessment',
        points: [
          'High-risk factors for serious harm or homicide: non-fatal strangulation, escalating frequency or severity, recent separation, threats to kill, access to weapons, pregnancy or a new baby, stalking, perpetrator suicidality, sexual assault.',
          'Non-fatal strangulation may leave few visible signs. Look for voice change, petechiae, swallowing difficulty, and neck pain or bruising. Consider imaging for vascular injury.',
          'Immediate danger: call 000 or police. For an adult, respect autonomy unless there is serious, imminent risk. Know your state information-sharing schemes.',
          'Document the patient\'s own words, injuries (body map, photographs with consent), and advice and referrals given.',
        ],
      },
      {
        heading: 'Children and people using violence',
        points: [
          'Exposure to FDV harms child development and is a form of child abuse. GPs are mandatory reporters of child abuse risk in all states and territories (criteria vary).',
          'Consider the children in every FDV disclosure: safety, development, mental health, school.',
          'People using violence: engage without collusion, name the behaviour, assess risk to others, and refer to men\'s behaviour change programs (Men\'s Referral Service 1300 766 491).',
          'Victim-survivors can access 10 days of paid FDV leave (Fair Work). A medical certificate can support this without disclosing details.',
        ],
      },
    ],
    redFlags: [
      'Non-fatal strangulation (a strong predictor of homicide).',
      'Threats to kill, weapon access or recent separation.',
      'A child disclosing harm, or injuries inconsistent with the history.',
      'Suicidality in the victim or the perpetrator.',
    ],
    examTips: [
      'LIVES is the expected answer for responding to disclosure.',
      'Never interview with the partner present, and never use a family member as interpreter.',
      'Mandatory reporting applies to children, not (usually) to adult victims.',
    ],
    mcqs: [
      {
        stem: 'A woman discloses her partner "grabbed my throat" last week. She has a hoarse voice. Which statement is most accurate?',
        options: [
          'No further action needed as there are no bruises',
          'Non-fatal strangulation is a strong predictor of future homicide and warrants urgent risk assessment and safety planning',
          'She must be reported to police without her consent',
          'This is a minor assault',
          'Refer only for voice therapy',
        ],
        answer: 1,
        explanation: 'Strangulation greatly increases homicide risk. Assess for vascular or airway injury too.',
      },
      {
        stem: 'What does the "V" in the LIVES framework stand for?',
        options: ['Verify', 'Validate', 'Vaccinate', 'Violence screen', 'Voice'],
        answer: 1,
        explanation: 'Listen, Inquire, Validate, Enhance safety, Support.',
      },
      {
        stem: 'A woman attending with her husband seems anxious and he answers for her. What is the best approach?',
        options: [
          'Ask about violence in front of him',
          'Arrange to see her alone (e.g. for an examination) before asking',
          'Ask the husband directly',
          'Use their teenage son as interpreter',
          'Ignore – not your role',
        ],
        answer: 1,
        explanation: 'Only ask about abuse when the patient is alone and it is safe to do so.',
      },
      {
        stem: 'A mother discloses ongoing violence from her partner; their children (4 and 7) witness it. What is the GP\'s obligation?',
        options: [
          'No obligation as children were not physically hurt',
          'Consider the children\'s safety and make a report to child protection per state mandatory reporting requirements',
          'Only report if the mother consents',
          'Report the mother for neglect',
          'Refer the children to a paediatrician only',
        ],
        answer: 1,
        explanation: 'Exposure to FDV is harmful to children, and GPs have mandatory reporting obligations when they believe a child is at significant risk.',
      },
      {
        stem: 'A 17-year-old gay man says his partner threatens to tell his family he is gay unless he obeys. This is best described as:',
        options: ['Normal relationship conflict', 'Coercive control / identity-based abuse', 'Bullying at school', 'Sexual harassment only', 'Not abuse because there is no physical violence'],
        answer: 1,
        explanation: 'Threats to "out" someone are a recognised form of abuse in LGBTQA+ relationships.',
      },
    ],
  },
  {
    id: 'S4',
    label: 'Supplement 4',
    date: 'Jun 2025',
    title: 'Oral anticoagulants',
    specialty: 'Cardiology',
    alsoRelevant: ['Haematology', 'Aged Care'],
    topics: [
      'Opportunistic AF detection',
      'Stroke risk (CHA₂DS₂-VA) and bleeding risk',
      'Choosing and dosing DOACs vs warfarin',
      'Renal function and dose adjustment',
      'Triple therapy after PCI',
      'Periprocedural management and bleeding',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2025/oral-anticoagulants',
    overview:
      'Atrial fibrillation raises stroke risk about five-fold, and oral anticoagulants prevent most AF-related strokes, yet they are underused. GPs detect AF, estimate stroke and bleeding risk, choose and dose an anticoagulant correctly (especially for renal function), and manage interactions and procedures. Adherence is supported through shared decision-making.',
    sections: [
      {
        heading: 'Detection and risk',
        points: [
          'Opportunistic screening by pulse palpation or single-lead ECG from age 65 (earlier in Aboriginal and Torres Strait Islander peoples). Confirm with a 12-lead ECG.',
          'CHA₂DS₂-VA: CHF (1), Hypertension (1), Age ≥75 (2), Diabetes (1), Stroke/TIA/thromboembolism (2), Vascular disease (1), Age 65–74 (1).',
          'Anticoagulate if score ≥2. Consider it if score is 1. Aspirin is NOT recommended for stroke prevention in AF.',
          'Assess bleeding risk (for example HAS-BLED) to identify modifiable factors such as BP, NSAIDs, alcohol and labile INR, NOT as a reason to withhold anticoagulation.',
        ],
      },
      {
        heading: 'Choosing and dosing',
        points: [
          'DOACs are preferred over warfarin, EXCEPT with mechanical heart valves or moderate to severe mitral stenosis (use warfarin).',
          'Apixaban 5 mg bd. Reduce to 2.5 mg bd if 2 or more of: age ≥80, weight ≤60 kg, creatinine ≥133 µmol/L.',
          'Rivaroxaban 20 mg daily WITH food, or 15 mg if CrCl 15–49. Dabigatran 150 mg bd, or 110 mg bd if age ≥75 or bleeding risk. Dabigatran is contraindicated if CrCl <30.',
          'Use Cockcroft–Gault creatinine clearance, not eGFR, for dosing. Monitor renal function at least yearly, and every 3–6 months if CrCl <60 or elderly.',
        ],
      },
      {
        heading: 'Complex scenarios',
        points: [
          'After PCI in AF: short triple therapy (OAC + aspirin + clopidogrel, usually ≤1 week, up to 30 days). Then OAC + clopidogrel to 12 months, then OAC alone.',
          'Periprocedural DOAC: interruption depends on bleeding risk and renal function, usually 24–48 hours for apixaban or rivaroxaban and longer for dabigatran with renal impairment. No bridging with heparin for DOACs.',
          'Warfarin: bridge only if thrombotic risk is very high (mechanical mitral valve, recent stroke). Check INR before surgery.',
          'Interactions: NSAIDs, antiplatelets, SSRIs, strong CYP3A4/P-gp inhibitors (azoles, clarithromycin) and inducers (rifampicin, carbamazepine, St John\'s wort).',
        ],
      },
      {
        heading: 'Bleeding and adherence',
        points: [
          'Easy bruising: check dose appropriateness, renal function, FBC and interactions, and look for a source.',
          'Major bleeding: stop the anticoagulant and give urgent care. Reversal: idarucizumab (dabigatran), prothrombin complex concentrate or andexanet (Xa inhibitors, depending on availability), vitamin K + PCC (warfarin).',
          'Missed doses matter because DOAC half-lives are short. Use dose administration aids and pharmacist medication reviews.',
          'Lifestyle: BP control, weight loss, alcohol reduction, and treat OSA. These reduce the AF burden.',
        ],
      },
    ],
    redFlags: [
      'Head injury on an anticoagulant: low threshold for CT.',
      'Melaena or haematemesis: major bleeding.',
      'Acute kidney injury (for example dehydration): DOAC accumulation.',
      'AF with haemodynamic instability or pre-excitation (WPW).',
    ],
    examTips: [
      'The apixaban dose-reduction criteria ("2 of 3") are frequently examined.',
      'Mechanical valve means warfarin only.',
      'Use CrCl (Cockcroft–Gault) for DOAC dosing.',
    ],
    mcqs: [
      {
        stem: 'An 82-year-old woman (weight 58 kg, creatinine 95 µmol/L) with non-valvular AF is starting apixaban. What is the correct dose?',
        options: ['5 mg twice daily', '2.5 mg twice daily', '10 mg twice daily', '2.5 mg daily', '5 mg daily'],
        answer: 1,
        explanation: 'She meets 2 criteria (age ≥80, weight ≤60 kg), so the reduced dose of 2.5 mg bd is used.',
      },
      {
        stem: 'A 70-year-old man with hypertension and AF has a CHA₂DS₂-VA score of:',
        options: ['0', '1', '2', '3', '4'],
        answer: 2,
        explanation: 'Age 65–74 (1) + hypertension (1) = 2, so anticoagulation is recommended.',
      },
      {
        stem: 'Which patient with AF should receive warfarin rather than a DOAC?',
        options: [
          'Bioprosthetic aortic valve 5 years ago',
          'Mechanical mitral valve',
          'Mild aortic stenosis',
          'Age 85 with CrCl 45',
          'Previous ischaemic stroke',
        ],
        answer: 1,
        explanation: 'DOACs are contraindicated with mechanical valves (and moderate to severe mitral stenosis).',
      },
      {
        stem: 'A woman with AF on apixaban is having a low-bleeding-risk procedure. CrCl is 70 mL/min. What is the recommended management?',
        options: [
          'Stop 7 days before and bridge with enoxaparin',
          'Omit for about 24 hours before and resume after haemostasis; no bridging',
          'Continue without interruption for all procedures',
          'Switch to warfarin',
          'Give vitamin K',
        ],
        answer: 1,
        explanation: 'For low-bleeding-risk procedures with normal renal function, withhold apixaban about 24 hours before. DOACs are not bridged. Minor dental and skin procedures often need no interruption.',
      },
      {
        stem: 'Which drug commonly increases DOAC levels and bleeding risk?',
        options: ['Rifampicin', 'Carbamazepine', 'Clarithromycin', 'St John\'s wort', 'Phenytoin'],
        answer: 2,
        explanation: 'Clarithromycin inhibits CYP3A4 and P-gp, raising apixaban and rivaroxaban levels. The others are inducers and lower DOAC levels.',
      },
    ],
  },
  {
    id: '623',
    label: 'Unit 623',
    date: 'Jun 2025',
    title: 'Gender and gender diversity',
    specialty: 'Sexual & Reproductive Health',
    alsoRelevant: ['Mental Health', 'Endocrinology & Metabolic', 'Preventive & Population Health'],
    topics: [
      'Domains of gender affirmation',
      'Informed consent model of care',
      'Feminising hormone therapy and monitoring',
      'Masculinising hormone therapy and monitoring',
      'Screening and preventive care for trans and gender diverse people',
      'Safe, affirming practice',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2025/gender-and-gender-diversity',
    overview:
      'Trans and gender diverse people experience high rates of discrimination, and minority stress drives poorer mental health. GPs can provide affirming primary care, including gender-affirming hormone therapy for adults under an informed consent model. This needs appropriate monitoring, fertility and contraception counselling, and organ-based screening.',
    sections: [
      {
        heading: 'Affirming practice',
        points: [
          'Ask for and use the person\'s name and pronouns. Record gender identity and sex assigned at birth separately to guide screening.',
          'Affirmation domains: social (name, pronouns, clothing), legal (documents), medical (hormones) and surgical.',
          'Minority stress causes high rates of depression, anxiety and suicidality. Screen, and refer to affirming mental health services when needed.',
          'Under the informed consent model (AusPATH), adults with capacity can start hormones after an informed discussion without mandatory psychiatric assessment. Involve mental health professionals if the situation is complex.',
        ],
      },
      {
        heading: 'Feminising hormones',
        points: [
          'Oestradiol (transdermal preferred if over 40, a smoker or at VTE risk) plus an anti-androgen: spironolactone, or low-dose cyproterone acetate (≤12.5 mg daily because of meningioma risk).',
          'Monitor at baseline, 3, 6 and 12 months, then 6–12 monthly: oestradiol, testosterone, UEC and K⁺ (spironolactone), LFT, prolactin, lipids, BP.',
          'Risks: VTE, hypertension, hyperprolactinaemia, reduced fertility, mood changes.',
          'The prostate remains, so discuss PSA as for cis men. Breast screening depends on duration of hormone use and risk.',
        ],
      },
      {
        heading: 'Masculinising hormones',
        points: [
          'Testosterone: IM undecanoate 12-weekly, IM esters 2–3 weekly, or transdermal gel or cream.',
          'Monitor Hb/Hct (polycythaemia: if Hct >0.54, reduce the dose or treat), lipids, LFT, BP, weight and testosterone levels.',
          'Testosterone is NOT contraception and is teratogenic. Offer contraception (such as an IUD or implant) if there is a risk of pregnancy.',
          'Cervical screening is still needed if the person has a cervix. Offer self-collection. Testosterone causes atrophy, so vaginal oestrogen may help examinations.',
        ],
      },
      {
        heading: 'Other care',
        points: [
          'Discuss fertility preservation (sperm or oocyte storage) BEFORE starting hormones.',
          'Young people: refer to specialist multidisciplinary gender services. Puberty suppression is managed by these services and is subject to jurisdictional policies.',
          'Binding can cause skin, rib and breathing problems. Advise safe binding practices.',
          'Sexual health: take an inclusive history, and offer STI testing by anatomy and practices plus PrEP when indicated.',
        ],
      },
    ],
    redFlags: [
      'New severe headache or leg swelling on oestrogen: VTE or cerebral venous sinus thrombosis.',
      'Haematocrit >0.54 on testosterone.',
      'Suicidal ideation, often linked to rejection or discrimination.',
      'Visual disturbance or galactorrhoea on oestrogen: prolactinoma.',
    ],
    examTips: [
      'Screen the organs that are present, not by gender identity.',
      'Testosterone is not contraception. This is examined often.',
      'Know the key monitoring bloods for each hormone regimen.',
    ],
    mcqs: [
      {
        stem: 'A 30-year-old trans man on testosterone has a cervix and has sex with cis men. Which statement is correct?',
        options: [
          'Testosterone provides reliable contraception',
          'Cervical screening is no longer needed',
          'He needs effective contraception and continues cervical screening',
          'Pregnancy is impossible on testosterone',
          'He should stop testosterone to have screening',
        ],
        answer: 2,
        explanation: 'Ovulation can occur on testosterone, and testosterone is teratogenic. Anyone with a cervix aged 25–74 is eligible for 5-yearly HPV screening, and self-collection is an option.',
      },
      {
        stem: 'Which test is most important to monitor for the key haematological risk of testosterone therapy?',
        options: ['Platelet count', 'Haemoglobin and haematocrit', 'White cell count', 'Ferritin', 'INR'],
        answer: 1,
        explanation: 'Testosterone causes erythrocytosis. Hct >0.54 needs dose reduction or venesection.',
      },
      {
        stem: 'A trans woman on oestradiol and spironolactone should have which electrolyte monitored?',
        options: ['Sodium', 'Potassium', 'Calcium', 'Magnesium', 'Phosphate'],
        answer: 1,
        explanation: 'Spironolactone can cause hyperkalaemia, especially with renal impairment or ACE inhibitors.',
      },
      {
        stem: 'What is the main reason to limit cyproterone acetate dose in feminising therapy?',
        options: ['Hyperkalaemia', 'Meningioma risk', 'Renal failure', 'Polycythaemia', 'Hypothyroidism'],
        answer: 1,
        explanation: 'Cyproterone is associated with dose-related meningioma, so low doses (≤12.5 mg/day) are recommended.',
      },
      {
        stem: 'Before starting gender-affirming hormones, which discussion is essential?',
        options: ['Fertility preservation', 'Colonoscopy', 'Bone marrow biopsy', 'Genetic testing', 'Travel vaccinations'],
        answer: 0,
        explanation: 'Hormone therapy can impair fertility, so offer gamete storage before starting.',
      },
    ],
  },
  {
    id: '622',
    label: 'Unit 622',
    date: 'May 2025',
    title: 'Cervical screening and follow-up care',
    specialty: "Women's Health",
    alsoRelevant: ['Preventive & Population Health', 'Oncology', 'Aboriginal & Torres Strait Islander Health'],
    topics: [
      'HPV-based screening and self-collection',
      'Risk pathways: low, intermediate, higher risk',
      'Test of Cure after treated HSIL',
      'Symptomatic women and co-testing',
      'Screening for people with disability, trans men and diverse backgrounds',
      'Under-screened groups and elimination targets',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2025/cervical-screening-and-follow-up-care',
    overview:
      'Australia aims to eliminate cervical cancer by 2035. The National Cervical Screening Program (NCSP) uses 5-yearly HPV tests from 25 to 74. Self-collection is available to everyone eligible. GPs must apply the risk-based follow-up pathways, manage Test of Cure correctly, investigate symptoms (screening is not a diagnostic test), and reach under-screened people.',
    sections: [
      {
        heading: 'Screening basics',
        points: [
          'Who: people with a cervix aged 25–74 who have ever been sexually active, every 5 years, whether HPV-vaccinated or not.',
          'Self-collected vaginal swab is as accurate as clinician collection for HPV detection. If HPV is detected, a clinician-collected sample is needed for cytology (LBC), except for HPV 16/18, which goes straight to colposcopy.',
          'Immunocompromised people: screen every 3 years.',
          'After total hysterectomy for benign reasons with no history of HSIL: no further screening.',
        ],
      },
      {
        heading: 'Results pathways',
        points: [
          'HPV not detected: routine 5-yearly screening.',
          'HPV 16/18 detected (any cytology): refer for colposcopy.',
          'HPV (not 16/18) with negative, pLSIL or LSIL cytology: intermediate risk, so repeat HPV in 12 months. If HPV is still detected at 12 months, refer for colposcopy.',
          'HPV (not 16/18) with pHSIL, HSIL or glandular abnormality: colposcopy.',
          'Direct colposcopy for any oncogenic HPV if: Aboriginal or Torres Strait Islander and ≥50, overdue by ≥2 years, or immunocompromised.',
        ],
      },
      {
        heading: 'Test of Cure and symptoms',
        points: [
          'After treatment for HSIL (CIN2/3): co-test (HPV + LBC) at 12 months and then annually until negative on 2 consecutive occasions. Then return to 5-yearly screening.',
          'After hysterectomy with HSIL on histology: vault co-test at 12 months and annually until 2 negative co-tests.',
          'Symptoms (postcoital or intermenstrual bleeding, unexplained discharge, pain): do a co-test plus speculum examination. Refer to gynaecology if symptoms persist or the cervix looks abnormal, EVEN if tests are negative.',
          'Postmenopausal bleeding: transvaginal ultrasound and gynaecology referral (endometrial cancer).',
        ],
      },
      {
        heading: 'Inclusive screening',
        points: [
          'People with intellectual disability: assess capacity, use supported decision-making and easy-read resources. Self-collection may help.',
          'Trans men and non-binary people with a cervix need screening. Testosterone may cause atrophy.',
          'Survivors of sexual trauma, some cultural backgrounds and First Nations women may prefer self-collection, a female clinician and a trauma-informed approach.',
          'Use the National Cancer Screening Register to check screening history and reminders.',
        ],
      },
    ],
    redFlags: [
      'Postcoital bleeding, even with a normal screen.',
      'Visible cervical lesion: refer, regardless of the test.',
      'Glandular abnormality (AIS): colposcopy with specialist management.',
      'Unexplained vaginal bleeding in a young woman with an abnormal cervix.',
    ],
    examTips: [
      'Know the intermediate risk pathway: repeat in 12 months, not immediate colposcopy.',
      'Test of Cure means co-test annually until 2 consecutive negatives.',
      'Screening tests are for asymptomatic people. Symptoms need co-testing and examination.',
    ],
    mcqs: [
      {
        stem: 'A 34-year-old woman\'s self-collected sample shows HPV (not 16/18) detected. What is the next step?',
        options: [
          'Repeat HPV in 5 years',
          'Return for a clinician-collected sample for cytology (LBC)',
          'Refer directly to colposcopy',
          'Repeat self-collection in 12 months without cytology',
          'Treat with antiviral therapy',
        ],
        answer: 1,
        explanation: 'Self-collected samples cannot give cytology. HPV (not 16/18) needs an LBC sample to triage the risk pathway.',
      },
      {
        stem: 'A 40-year-old non-Indigenous woman has HPV (not 16/18) detected with LBC negative. What is the correct management?',
        options: ['Colposcopy', 'Repeat HPV test in 12 months', 'Return to 5-yearly screening', 'Repeat LBC in 6 months', 'Hysterectomy'],
        answer: 1,
        explanation: 'This is intermediate risk: repeat HPV at 12 months. Refer to colposcopy if HPV persists.',
      },
      {
        stem: 'Nine months ago a woman had LLETZ for HSIL (CIN3). What is the follow-up?',
        options: [
          'Routine 5-yearly HPV test',
          'Co-test at 12 months and annually until 2 consecutive negative co-tests',
          'Colposcopy every 6 months for 5 years',
          'Nothing further',
          'Annual LBC only for life',
        ],
        answer: 1,
        explanation: 'Test of Cure: co-testing at 12 months then annually until negative twice in a row, then 5-yearly.',
      },
      {
        stem: 'A 29-year-old has recurrent postcoital bleeding. Her screening test 2 years ago was HPV negative. What is the most appropriate action?',
        options: [
          'Reassure – screening was negative',
          'Co-test and speculum examination, referring to gynaecology if symptoms persist or the cervix looks abnormal',
          'Wait until next screen in 3 years',
          'Start combined pill',
          'Self-collect HPV test only',
        ],
        answer: 1,
        explanation: 'Symptomatic people need a diagnostic work-up. A negative screen does not exclude cancer.',
      },
      {
        stem: 'A 52-year-old Aboriginal woman who is 3 years overdue has HPV (not 16/18) detected. What is the recommended management?',
        options: ['Repeat in 12 months', 'Direct referral to colposcopy', 'Routine rescreen in 5 years', 'LBC only in 6 months', 'No action'],
        answer: 1,
        explanation: 'Aboriginal or Torres Strait Islander people aged ≥50, and people overdue by ≥2 years, go straight to colposcopy with any oncogenic HPV.',
      },
    ],
  },
  {
    id: '621',
    label: 'Unit 621',
    date: 'Apr 2025',
    title: 'Military medicine and veterans\' health',
    specialty: 'Veterans & Military Health',
    alsoRelevant: ['Mental Health', 'Addiction Medicine', 'Neurology'],
    topics: [
      'Transition from military to civilian life',
      'Screening for depression, anxiety, PTSD and alcohol use',
      'Evidence-based PTSD treatment',
      'Insomnia, anger and irritability',
      'Mild traumatic brain injury and cognitive complaints',
      'DVA supports: Veteran Card, Non-Liability Health Care, Open Arms',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2025/military-medicine-and-veterans-health',
    overview:
      'Veterans are at increased risk of mental illness and suicide, especially in the first years after discharge. GPs are key to re-engaging veterans with primary care. Ask every patient "Have you ever served in the ADF?", screen systematically, provide evidence-based treatment, and connect veterans and families with DVA-funded supports.',
    sections: [
      {
        heading: 'Identify and engage',
        points: [
          'Ask routinely about ADF service, and record it. Many veterans do not volunteer it.',
          'Veteran Health Check (MBS items): annually for the first 5 years after discharge. Covers physical health, mental health, alcohol, sleep, pain, social connection.',
          'Non-Liability Health Care: DVA pays for treatment of ANY mental health condition for anyone with at least one day of continuous full-time service, regardless of cause (Veteran White Card).',
          'Open Arms (1800 011 046) offers free 24/7 counselling for veterans and their families.',
        ],
      },
      {
        heading: 'Screening',
        points: [
          'Depression and anxiety: K10, PHQ-9, GAD-7. PTSD: PC-PTSD-5, then PCL-5. Alcohol: AUDIT-C or AUDIT.',
          'Ask about suicidal thoughts, firearms access, relationship stress, anger and legal problems.',
          'Transition stressors: loss of identity, purpose and camaraderie, employment, finances, family adjustment.',
          'Physical issues: musculoskeletal injury, hearing loss or tinnitus, chronic pain, sleep disorders, toxic exposures.',
        ],
      },
      {
        heading: 'Treatment',
        points: [
          'PTSD first line: trauma-focused psychological therapy (CPT, prolonged exposure, EMDR, trauma-focused CBT).',
          'Medicines if therapy is unavailable or declined, or as an adjunct: SSRIs (sertraline, paroxetine, fluoxetine) or venlafaxine. Avoid benzodiazepines, which worsen outcomes.',
          'Propranolol ("adrenaline blockers") is not recommended to prevent or treat PTSD. Discuss the evidence and the underlying need.',
          'Insomnia: CBT-i. Anger: address the underlying PTSD or depression, use anger management programs, and assess family safety.',
        ],
      },
      {
        heading: 'Cognition and complex care',
        points: [
          'Cognitive complaints can reflect mild TBI (blast or concussion), PTSD, depression, sleep deprivation, alcohol, or medication effects.',
          'Assess with a history of head injuries, cognitive screening (MoCA), and a mood and sleep review. Refer to neuropsychology or rehabilitation if needed.',
          'Coordinate with DVA-funded services such as the Coordinated Veterans\' Care program, allied health and community nursing.',
          'Include families: partners and children often carry the burden, and Open Arms supports them.',
        ],
      },
    ],
    redFlags: [
      'Suicidal ideation plus firearms, especially in the first year after discharge.',
      'Escalating alcohol or drug use.',
      'Violence or threats to family members.',
      'Progressive cognitive decline or focal neurological signs.',
    ],
    examTips: [
      'Non-Liability Health Care means mental health treatment for any veteran, regardless of whether it is linked to service.',
      'Trauma-focused therapy is first line for PTSD. Benzodiazepines are not.',
      'Always ask "Have you served in the ADF?"',
    ],
    mcqs: [
      {
        stem: 'A 32-year-old ex-army soldier discharged 18 months ago has nightmares, hypervigilance and avoidance. PCL-5 is high. What is the first-line treatment?',
        options: ['Diazepam', 'Trauma-focused psychological therapy (e.g. CPT, PE, EMDR)', 'Propranolol', 'Quetiapine', 'Supportive counselling only'],
        answer: 1,
        explanation: 'Trauma-focused therapy has the strongest evidence in PTSD.',
      },
      {
        stem: 'A veteran with depression that he says is unrelated to service asks whether DVA will pay for treatment. What is correct?',
        options: [
          'Only if accepted as service-related',
          'Yes – Non-Liability Health Care covers treatment of any mental health condition for eligible veterans',
          'Only if deployed overseas',
          'Only if over 65',
          'No – Medicare only',
        ],
        answer: 1,
        explanation: 'Anyone with one day of continuous full-time ADF service can access fully funded mental health treatment without proving a link to service.',
      },
      {
        stem: 'Which medicine should be avoided in the management of PTSD?',
        options: ['Sertraline', 'Venlafaxine', 'Benzodiazepines', 'Paroxetine', 'Fluoxetine'],
        answer: 2,
        explanation: 'Benzodiazepines do not help PTSD, may worsen outcomes, and carry dependence risk.',
      },
      {
        stem: 'How often is the MBS Veteran Health Check available after discharge?',
        options: ['Once only', 'Annually for the first 5 years after discharge', 'Every 3 months', 'Only after 10 years', 'At age 45 only'],
        answer: 1,
        explanation: 'Veterans can access an annual comprehensive health assessment for 5 years after leaving the ADF.',
      },
      {
        stem: 'Which service provides free, confidential counselling for veterans and their families?',
        options: ['Lifeline only', 'Open Arms – Veterans & Families Counselling', 'Beyond Blue only', 'headspace', 'Medicare Mental Health Centres only'],
        answer: 1,
        explanation: 'Open Arms is the DVA-funded national counselling service for veterans and families (1800 011 046).',
      },
    ],
  },
]

export default units
