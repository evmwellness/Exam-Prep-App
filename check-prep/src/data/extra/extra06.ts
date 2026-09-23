import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  '624': {
    sections: [
      {
        heading: 'Scale and forms of family violence',
        points: [
          'About 1 in 4 Australian women and 1 in 7 men have experienced violence, emotional abuse or economic abuse by an intimate partner since age 15. On average, a woman is killed by a current or former partner about every 10 days.',
          'Forms: physical, sexual, emotional or psychological, verbal, economic (controlling money, preventing work), social isolation, spiritual, technology-facilitated (tracking phones, controlling social media), reproductive coercion, stalking.',
          'Coercive control is a pattern of controlling behaviours that removes autonomy and creates fear. It is now a criminal offence in some jurisdictions (for example NSW and QLD).',
          'Family violence includes elder abuse, adolescent violence in the home (young people harming parents), and abuse by other family members or carers.',
          'Risk is higher in pregnancy and after childbirth, around separation, and for women with disability, Aboriginal and Torres Strait Islander women, and migrant women with visa insecurity.',
        ],
      },
      {
        heading: 'Presentations that should raise suspicion',
        points: [
          'Physical: injuries inconsistent with the explanation, injuries at different stages, bruising to the head, neck, breasts and abdomen, defensive injuries to the forearms, dental trauma, perforated eardrums, strangulation signs.',
          'Psychological: anxiety, depression, PTSD, insomnia, suicidal ideation, substance use, eating disorders.',
          'Somatic and chronic: chronic pelvic, abdominal or back pain, headaches, IBS-type symptoms, fatigue, poorly controlled chronic disease.',
          'Reproductive: recurrent STIs, unintended pregnancies, requests for termination, late antenatal booking, antepartum haemorrhage, miscarriage.',
          'Behavioural: frequent attendance or missed appointments, a partner who insists on attending and answers for the patient, reluctance to be examined, delayed presentation.',
          'Requests that may signal abuse: medical certificates, letters for housing or Centrelink, contraception without the partner\'s knowledge.',
        ],
      },
      {
        heading: 'How to ask (funnelling)',
        points: [
          'Create safety: see the patient alone, and use a professional interpreter (not family or friends). Explain confidentiality and its limits.',
          'Start broad and normalise: "Because relationship problems can affect health, I ask all my patients about this."',
          'Move to more specific questions: "How are things at home?" "Do you ever feel afraid of your partner or anyone at home?" "Has anyone hurt you, threatened you or made you do things you didn\'t want to?"',
          'Ask about controlling behaviours: "Does your partner check your phone, control your money or stop you seeing friends?"',
          'Be ready for disclosure and have resources at hand. If the patient does not disclose, keep the door open ("If anything changes, you can talk to me") and document your concern.',
        ],
      },
      {
        heading: 'Safety planning in practice',
        points: [
          'Assess immediate safety: "Is it safe for you to go home today?" "Where are the children?" "Has the violence got worse?"',
          'Use a structured risk tool aligned with your state framework (for example Victoria\'s MARAM, or NSW DVSAT). Refer high-risk cases to specialist services or police.',
          'A safety plan includes safe people to contact, a code word, emergency numbers saved discreetly, an "escape bag" (ID, medicines, money, keys, documents), and planned exit routes.',
          'Technology safety: check for tracking apps and location sharing, advise password changes, and consider the eSafety Commissioner resources.',
          'Legal options: intervention orders (AVO or DVO), police involvement, legal aid, and family law advice. Visa-related protections exist for some migrants.',
          'Documentation: record the patient\'s own words in quotation marks, and document injuries with a body map and dated photographs (with consent). Records may be used in court.',
        ],
      },
      {
        heading: 'Specific populations',
        points: [
          'Young people: dating violence, image-based abuse (sharing intimate images), coercion. Use HEEADSSS, explain confidentiality limits, and refer to youth-specific services.',
          'LGBTQA+ people: threats of "outing", undermining gender identity, withholding hormones, isolating from community. Services may not feel safe, so refer to inclusive services (for example Rainbow Door).',
          'Older people: financial abuse (misuse of power of attorney), neglect, psychological abuse, often by adult children. Call the elder abuse phone line (1800 ELDERHelp) and involve guardianship services when capacity is impaired.',
          'Men as victims: often reluctant to disclose because of stigma. Services include MensLine and state services for male victims.',
          'Women with disability: carers may be abusers, and communication barriers exist. NDIS Quality and Safeguards Commission reporting may apply.',
          'Aboriginal and Torres Strait Islander people: family violence rates are higher, driven by intergenerational trauma and disadvantage. Use culturally safe, community-controlled services.',
        ],
      },
      {
        heading: 'Children and mandatory reporting',
        points: [
          'Children exposed to family violence show emotional, behavioural, developmental and learning problems. Infants may show sleep and feeding problems and failure to thrive. Older children may show aggression, anxiety or school refusal.',
          'Doctors are mandatory reporters of child abuse (including exposure to family violence in several jurisdictions) when they form a reasonable belief that a child is at significant risk of harm.',
          'A report does not require proof. It is made in good faith and is legally protected. Tell the parent if it is safe to do so.',
          'Support the non-offending parent: safety for the parent usually means safety for the children.',
          'Refer children for trauma-informed counselling and paediatric review as needed.',
        ],
      },
      {
        heading: 'Responding to people using violence',
        points: [
          'People who use violence may present with anger, stress, depression, alcohol problems, sleep issues or requests for help.',
          'Approach: be respectful but do not collude or minimise ("It sounds like you have used violence, and that\'s not OK. What could help you stop?"). Assess risk to partner and children, and suicidality.',
          'Refer to men\'s behaviour change programs (Men\'s Referral Service 1300 766 491) and treat co-occurring substance use and mental illness.',
          'Anger management courses alone are not a substitute for behaviour change programs.',
          'If the victim also attends your practice, never disclose information between them. Consider safety when booking appointments.',
        ],
      },
    ],
    keyNumbers: [
      '1800RESPECT: 1800 737 732',
      'Men\'s Referral Service: 1300 766 491',
      'Elder abuse line: 1800 ELDERHelp (1800 353 374)',
      'LIVES: Listen, Inquire, Validate, Enhance safety, Support',
      'Paid family and domestic violence leave: 10 days/year',
      'Non-fatal strangulation: major homicide risk factor',
    ],
    workedCase: {
      title: 'Amber needs a medical certificate',
      paragraphs: [
        'Amber, 29, asks for a medical certificate for 3 days off work for "stress". She seems anxious and has a faint bruise on her neck. When you ask how things are at home, she hesitates, then says her partner "lost it" last weekend and put his hands around her neck. She lost consciousness briefly.',
        'You respond with LIVES: you listen, validate ("No one deserves to be treated like that. It\'s not your fault"), and ask what she needs. You explain that non-fatal strangulation is a serious warning sign. She reports hoarseness and neck pain, so you arrange imaging to exclude vascular injury.',
        'You complete a risk assessment: strangulation, escalating violence, recent separation talk and a firearm in the home put her at high risk. With her consent you contact a specialist family violence service, which arranges safe accommodation, and you discuss police involvement and an intervention order.',
        'You provide the certificate (stating a medical condition, without details) and explain that she is entitled to paid family and domestic violence leave. You document her words and injuries carefully and arrange follow-up through a safe contact method she chooses.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Responding to family and domestic violence',
        lead: 'Choose the SINGLE most appropriate next step for each situation.',
        options: [
          'Call 000 / police immediately',
          'Mandatory report to child protection',
          'Referral to specialist family violence service with safety planning',
          'Referral to men\'s behaviour change program',
          'Refer to elder abuse service / guardianship',
          'Document and keep the door open; no disclosure yet',
          'Couples counselling',
        ],
        items: [
          { stem: 'A woman discloses her partner is waiting outside with a knife and has threatened to kill her today.', answer: 0 },
          { stem: 'A man admits he pushes his partner when drunk and wants help to stop.', answer: 3 },
          { stem: 'A woman with bruises denies any problems at home when asked alone.', answer: 5 },
          { stem: 'A 5-year-old discloses that daddy hurts mummy and hit him with a belt.', answer: 1 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Charlie is having trouble sleeping',
        scenario:
          'Charlie, 24, a trans man, presents with insomnia and panic attacks. He mentions his partner has been "keeping" his testosterone and threatening to tell his family, who do not know he is trans. He has a small bruise on his forearm.',
        questions: [
          {
            kind: 'sba',
            stem: 'How are the partner\'s behaviours best described?',
            options: ['Relationship conflict only', 'Identity-based intimate partner abuse and coercive control', 'Normal behaviour', 'A mental health problem of Charlie\'s', 'Only abuse if physical injury occurs'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which THREE are the most important immediate steps?',
            options: [
              'Validate his experience and assess his immediate safety',
              'Complete a risk assessment including physical violence, threats and escalation',
              'Offer referral to an LGBTQ-inclusive family violence service',
              'Suggest couples counselling with his partner',
              'Contact his family to explain',
              'Advise him to stop testosterone',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'How should you address his testosterone access?',
            options: [
              'Stop testosterone until the relationship resolves',
              'Arrange safe, independent access (e.g. a new script, dispensing arrangement or injections at the clinic)',
              'Give his partner the script',
              'Switch to oestrogen',
              'Nothing – not relevant',
            ],
            answer: 1,
          },
          {
            kind: 'emq',
            theme: 'Managing his symptoms',
            lead: 'Choose the SINGLE most appropriate option for each issue.',
            options: ['Trauma-informed psychological therapy', 'Benzodiazepine nightly', 'Safety plan with code word and emergency contacts', 'Sleep hygiene and CBT-i strategies', 'Antipsychotic', 'Document injuries with a body map and photographs (with consent)'],
            items: [
              { stem: 'Panic attacks linked to fear at home', answer: 0 },
              { stem: 'Preparing to leave safely', answer: 2 },
              { stem: 'The bruise on his arm', answer: 5 },
            ],
          },
          {
            kind: 'multi',
            stem: 'Which TWO statements about confidentiality and reporting are correct?',
            options: [
              'For an adult without children at risk, reporting to police generally requires his consent unless there is serious, imminent risk',
              'You must inform his family',
              'Records should document his words and injuries accurately',
              'Mandatory reporting to child protection applies',
              'You can share information with his partner if they are also your patient',
            ],
            answers: [0, 2],
          },
        ],
      },
    ],
  },
  S4: {
    sections: [
      {
        heading: 'Atrial fibrillation: detection and assessment',
        points: [
          'AF is the most common sustained arrhythmia. Prevalence rises steeply with age (about 10% over 80). Up to a third of cases are asymptomatic and first present with stroke.',
          'Opportunistic screening: pulse palpation or a single-lead ECG device at routine visits from 65 (from 45 in Aboriginal and Torres Strait Islander people in some guidance). Confirm any irregularity with a 12-lead ECG.',
          'Subclinical AF found on devices (pacemakers, wearables) needs a 12-lead ECG, a Holter or patch monitor, and specialist input about anticoagulation.',
          'Initial workup: 12-lead ECG, FBC, UEC (CrCl), LFT, TSH, glucose/HbA1c, lipids, and echocardiogram (valve disease, LV function, atrial size). Assess BP, OSA, alcohol and obesity.',
          'Classify as paroxysmal (self-terminates within 7 days), persistent (>7 days), long-standing persistent (>12 months) or permanent. Stroke risk depends on risk factors, not AF type.',
        ],
      },
      {
        heading: 'Rate, rhythm and risk-factor management',
        points: [
          'Rate control: β-blockers (metoprolol, bisoprolol) or non-dihydropyridine CCBs (diltiazem, verapamil, avoided in HFrEF). Digoxin for sedentary people or heart failure. A target resting HR under 110 is acceptable if asymptomatic.',
          'Rhythm control (cardiology): flecainide (no structural heart disease, with rate-controlling cover), sotalol, amiodarone, cardioversion, and catheter ablation. Early rhythm control improves outcomes in selected patients.',
          'Risk-factor modification reduces AF burden: weight loss (≥10%), BP control, alcohol reduction or abstinence, OSA treatment, exercise, diabetes control.',
          'Anticoagulation decisions are independent of rate or rhythm strategy. Patients remain anticoagulated after successful ablation if their risk score warrants it.',
          'Holiday heart: binge drinking can trigger AF. Abstinence reduces recurrence.',
        ],
      },
      {
        heading: 'Stroke and bleeding risk in shared decisions',
        points: [
          'Untreated AF carries an annual stroke risk of about 2–10% depending on risk factors. Oral anticoagulants reduce stroke by about two-thirds, and DOACs halve intracranial haemorrhage compared with warfarin.',
          'Explain in natural frequencies, for example "Out of 100 people like you, about 6 would have a stroke each year without treatment; with treatment about 2 would."',
          'Falls alone are rarely a reason to withhold anticoagulation. A person would need to fall hundreds of times a year for the bleeding risk to outweigh the benefit.',
          'Bleeding risk scores (HAS-BLED) highlight modifiable factors: uncontrolled hypertension, labile INR, NSAIDs or antiplatelets, alcohol, and renal or hepatic disease.',
          'Decision aids and teach-back improve understanding and adherence. Involve carers where appropriate.',
        ],
      },
      {
        heading: 'Warfarin still has a role',
        points: [
          'Indications where warfarin is preferred: mechanical heart valves, moderate to severe mitral stenosis, antiphospholipid syndrome (especially triple-positive), severe renal impairment (CrCl <15), significant drug interactions with DOACs.',
          'Target INR 2.0–3.0 for AF (higher for some mechanical valves). Time in therapeutic range over 65–70% indicates good control.',
          'Interactions: antibiotics (especially co-trimoxazole, metronidazole, macrolides and fluoroquinolones raise INR), amiodarone, azole antifungals, alcohol, diet (vitamin K), and complementary medicines.',
          'High INR without bleeding: withhold doses and consider low-dose oral vitamin K (1–2 mg) if INR >9. With bleeding: vitamin K IV plus prothrombin complex concentrate.',
          'Point-of-care INR testing and patient self-testing improve convenience in rural areas.',
        ],
      },
      {
        heading: 'Renal decline and dose adjustment',
        points: [
          'Calculate CrCl with Cockcroft–Gault using actual body weight (or adjusted weight in obesity). eGFR is not used for DOAC dosing.',
          'Monitoring: CrCl at least yearly, every 6 months if CrCl 30–60 or age ≥75, and every 3 months if CrCl 15–30. Also after any acute illness (dehydration, AKI).',
          'Dabigatran is the most renally dependent (80% renal clearance) and is contraindicated below 30 mL/min. Apixaban is the least renally dependent.',
          'Sick-day advice: temporarily withhold DOACs during severe dehydrating illness if advised and recheck renal function.',
          'Obesity: DOACs are appropriate up to BMI 40. Above this, standard doses of apixaban or rivaroxaban are generally acceptable, with specialist input for extremes or after bariatric surgery.',
        ],
      },
      {
        heading: 'Transitions of care and periprocedural management',
        points: [
          'At hospital discharge: check the anticoagulant, dose and indication are correct, there is no duplication (for example enoxaparin plus DOAC), and antiplatelet plans after PCI have end dates.',
          'Switching warfarin to DOAC: stop warfarin and start the DOAC when INR <2.0 (apixaban, dabigatran) or <3.0 (rivaroxaban, per product information).',
          'Low bleeding-risk procedures (dental extractions, cataract, skin excisions, endoscopy without polypectomy) can often be done without interruption, or by omitting one dose.',
          'Higher bleeding-risk procedures: withhold apixaban or rivaroxaban 48 hours (longer if CrCl <30), and dabigatran 48–96 hours depending on renal function. Restart 24–72 hours after surgery once haemostasis is secure.',
          'Neuraxial anaesthesia requires longer interruption per anaesthetic guidance. Communicate plans in writing to the patient and the proceduralist.',
        ],
      },
      {
        heading: 'Adherence and patient education',
        points: [
          'Missing DOAC doses leaves patients unprotected within 24 hours. Missed dose rules: for twice-daily DOACs, take within 6 hours of the scheduled time, otherwise skip. For once-daily, take within 12 hours.',
          'Aids: pill boxes or dose administration aids, phone reminders, a pharmacist Home Medicines Review, and linking doses to daily routines.',
          'Educate about bleeding warning signs (black stools, blood in urine, severe headache, prolonged nosebleeds) and to tell all health professionals, including dentists, about anticoagulation.',
          'Avoid OTC NSAIDs and aspirin unless prescribed. Check complementary medicines (fish oil, ginkgo, turmeric, St John\'s wort).',
          'Carry an anticoagulant card or wallet alert.',
        ],
      },
    ],
    keyNumbers: [
      'CHA₂DS₂-VA ≥2 anticoagulate; consider at 1',
      'Apixaban 2.5 mg bd if ≥2 of: age ≥80, weight ≤60 kg, Cr ≥133',
      'Rivaroxaban 20 mg (15 mg if CrCl 15–49) with food',
      'Dabigatran: contraindicated CrCl <30',
      'Warfarin INR 2–3 (AF); TTR >65–70% good',
      'INR >9 no bleeding: vitamin K 1–2 mg oral',
      'CrCl monitoring: 6-monthly if 30–60 or age ≥75',
      'Twice-daily DOAC: missed dose within 6 h, else skip',
      'Post-PCI: triple therapy ≤1 week, OAC + clopidogrel to 12 months',
    ],
    workedCase: {
      title: 'George needs surgery',
      paragraphs: [
        'George, 76, weight 82 kg, creatinine 110 µmol/L (CrCl about 55 mL/min), has AF on apixaban 5 mg bd (CHA₂DS₂-VA 4). He is booked for an elective total hip replacement, a high bleeding-risk procedure with spinal anaesthesia.',
        'You calculate CrCl with Cockcroft–Gault and confirm his dose is correct: he meets only one reduction criterion (age), so 5 mg bd is appropriate. For high-risk surgery with neuraxial anaesthesia and CrCl over 50, you advise the last dose 72 hours before surgery (per the anaesthetic unit\'s protocol, which is more conservative than the minimum 48 hours). No heparin bridging is needed.',
        'You communicate the plan in writing to George, his wife and the surgical team, and advise that post-operative restart (usually prophylactic dosing first, then full dose at 48–72 hours) will be directed by the surgeons.',
        'After discharge, you check his renal function, confirm he is back on apixaban 5 mg bd (not duplicated with enoxaparin), and review adherence with his dose administration aid.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Choosing anticoagulation',
        lead: 'Choose the SINGLE most appropriate option for each patient with AF.',
        options: [
          'Apixaban 5 mg bd',
          'Apixaban 2.5 mg bd',
          'Rivaroxaban 20 mg daily with food',
          'Rivaroxaban 15 mg daily with food',
          'Dabigatran 150 mg bd',
          'Warfarin (target INR 2–3)',
          'Aspirin 100 mg daily',
          'No anticoagulation',
        ],
        items: [
          { stem: 'A 68-year-old man with a mechanical mitral valve.', answer: 5 },
          { stem: 'An 84-year-old woman weighing 52 kg, creatinine 90 µmol/L.', answer: 1 },
          { stem: 'A 58-year-old man with no risk factors (CHA₂DS₂-VA 0).', answer: 7 },
          { stem: 'A 79-year-old man, 70 kg, CrCl 40 mL/min, who prefers once-daily dosing.', answer: 3 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Leila\'s heart is playing up',
        scenario:
          'Leila, 72, has had intermittent palpitations and breathlessness for 2 weeks. Her pulse is irregularly irregular at 124 bpm, BP 148/88. She has hypertension and type 2 diabetes. ECG confirms AF with no acute ischaemia. She is otherwise stable.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which FOUR initial investigations are most appropriate?',
            options: ['FBC and UEC with creatinine clearance', 'TSH', 'Echocardiogram', 'LFT, HbA1c and lipids', 'D-dimer', 'Coronary angiogram'],
            answers: [0, 1, 2, 3],
          },
          {
            kind: 'sba',
            stem: 'What is her CHA₂DS₂-VA score?',
            options: ['1', '2', '3', '4', '5'],
            answer: 2,
            explanation: 'Age 65–74 (1) + hypertension (1) + diabetes (1) = 3.',
          },
          {
            kind: 'sba',
            stem: 'Which initial rate control option is most appropriate if her echocardiogram shows normal LV function?',
            options: ['Metoprolol', 'Amiodarone loading', 'Flecainide alone', 'Digoxin as first line in an active patient', 'No treatment'],
            answer: 0,
          },
          {
            kind: 'sba',
            context: 'Her weight is 68 kg and creatinine 88 µmol/L. She is keen to start anticoagulation.',
            stem: 'Which regimen is most appropriate?',
            options: ['Apixaban 2.5 mg bd', 'Apixaban 5 mg bd', 'Aspirin 100 mg', 'Dabigatran 75 mg bd', 'Enoxaparin long term'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which THREE lifestyle and risk-factor measures reduce her AF burden?',
            options: [
              'BP control to target',
              'Screen for and treat obstructive sleep apnoea',
              'Reduce alcohol intake',
              'Strict bed rest',
              'High-dose caffeine avoidance only',
              'Stop diabetes medicines',
            ],
            answers: [0, 1, 2],
          },
        ],
      },
    ],
  },
  '623': {
    sections: [
      {
        heading: 'Terms and concepts',
        points: [
          'Gender identity is a person\'s internal sense of their gender. Sex assigned at birth is based on physical characteristics. Gender expression is how gender is presented. Sexual orientation is separate from gender identity.',
          'Transgender (trans) people have a gender identity different from the sex assigned at birth. Non-binary people do not identify exclusively as male or female. Cisgender people identify with their assigned sex.',
          'Intersex people (innate variations of sex characteristics) are a distinct group with specific needs. Do not conflate them with trans people.',
          'Gender incongruence (ICD-11) is classified under sexual health conditions, not mental disorders. Gender dysphoria (DSM-5-TR) describes distress related to incongruence.',
          'About 1–3% of young people identify as trans or gender diverse. Many face discrimination, family rejection, bullying and barriers to care.',
        ],
      },
      {
        heading: 'Affirming clinical environments',
        points: [
          'Intake forms that ask for name, pronouns, gender identity and sex assigned at birth separately. Practice software with preferred name fields. Visible inclusive signage.',
          'Staff training: use correct names and pronouns, apologise briefly and correct yourself if you make a mistake, and avoid unnecessary questions about bodies or surgery.',
          'Organ inventory: record which organs are present to guide screening, without making assumptions.',
          'Confidentiality: some patients are not "out" to family, employers or other clinicians. Ask what can be shared in referrals and letters.',
          'Recognise minority stress: prejudice, rejection and concealment drive higher rates of depression, anxiety, self-harm and suicide. Affirming care and family support are strongly protective.',
        ],
      },
      {
        heading: 'Informed consent model and initiating hormones',
        points: [
          'The AusPATH informed consent model allows GPs to initiate gender-affirming hormones for adults with capacity after a comprehensive assessment, without mandatory psychiatric referral.',
          'Assessment: gender history and goals, mental health and supports, medical history (VTE, liver disease, cardiovascular risk, hormone-sensitive cancers), smoking, fertility wishes, and capacity.',
          'Discuss expected effects and timeframes, reversible and irreversible changes, risks, fertility impact and preservation options, and monitoring. Document consent.',
          'Refer to mental health professionals when there are complex mental health issues, capacity concerns or uncertainty, or when the patient requests it. Support rather than gatekeep.',
          'Young people under 18: refer to specialist multidisciplinary paediatric gender services. Policies on puberty suppression vary by jurisdiction (for example Queensland paused new starts in public services in 2025).',
        ],
      },
      {
        heading: 'Feminising hormone therapy: practical details',
        points: [
          'Oestradiol: oral 2–6 mg daily, transdermal gel or patches (preferred over 40, for smokers, or with VTE, liver or migraine risk), or injectable in some settings.',
          'Anti-androgens: spironolactone 50–200 mg daily (monitor K⁺ and BP) or cyproterone acetate ≤12.5 mg daily (meningioma risk, monitor LFT and prolactin, and mood). Some use no anti-androgen if oestradiol alone suppresses testosterone.',
          'Expected effects: breast development (2–3 years), skin softening, fat redistribution, reduced muscle mass, reduced erections and libido, and testicular atrophy. Voice and facial hair do not change (voice therapy and laser help).',
          'Monitoring: at 3, 6 and 12 months, then 6–12 monthly. Check oestradiol (target about 250–600 pmol/L), testosterone (target <2 nmol/L), UEC and K⁺, LFT, prolactin, lipids, HbA1c, BP and weight.',
          'Risks: VTE (especially with oral oestradiol plus smoking), hyperprolactinaemia, hypertension, gallstones, possible breast cancer risk (screen per age and duration of use).',
        ],
      },
      {
        heading: 'Masculinising hormone therapy: practical details',
        points: [
          'Testosterone: IM testosterone undecanoate 1000 mg 10–14 weekly, IM enanthate or mixed esters 2–3 weekly, or transdermal gel or cream daily.',
          'Expected effects: cessation of menses (1–6 months), voice deepening (irreversible), facial and body hair, clitoral growth, increased muscle mass, fat redistribution, acne, and possible scalp hair loss.',
          'Monitoring: Hb and Hct (erythrocytosis; reduce dose if Hct >0.50 and stop or venesect if >0.54), testosterone level (mid-interval, target male reference range), LFT, lipids, BP, weight.',
          'Contraception: testosterone does not reliably prevent ovulation and is teratogenic. Offer IUDs, the implant or DMPA. Emergency contraception works as usual.',
          'Unscheduled bleeding after amenorrhoea on testosterone needs investigation (as for postmenopausal bleeding). Pelvic pain can also occur.',
        ],
      },
      {
        heading: 'Preventive care by organ',
        points: [
          'Cervical screening: everyone with a cervix aged 25–74 who has ever been sexually active. Offer self-collection. Testosterone-related atrophy may make examinations uncomfortable (short-course vaginal oestrogen can help).',
          'Breast: trans women on long-term oestrogen, BreastScreen from 50 (per program eligibility). Trans men after chest reconstruction have residual tissue, so assess risk individually.',
          'Prostate: trans women retain the prostate. PSA may be low on anti-androgens, so interpret with caution.',
          'Bone health: consider DXA for people who have had a gonadectomy and are not on consistent hormone therapy, and for long-term GnRH analogue use.',
          'Cardiovascular: assess risk regularly. Smoking cessation is essential, especially with oestrogen.',
          'Sexual health: take an anatomy-based history, test sites by practice, offer PrEP, and vaccinate against HPV, hepatitis A and B, and mpox where eligible.',
        ],
      },
      {
        heading: 'Social, legal and surgical affirmation',
        points: [
          'Social affirmation: name, pronouns, clothing, hair, binding or tucking (advise safe practices: avoid duct tape, take breaks from binding, watch for skin breakdown).',
          'Legal: requirements for changing birth certificates vary by state and territory. Most no longer require surgery. Letters from doctors may still be requested in some jurisdictions.',
          'Surgical options: chest reconstruction (mastectomy), breast augmentation, genital surgery (vaginoplasty, phalloplasty, metoidioplasty), facial feminisation, hysterectomy or orchidectomy. Access is limited and costly in Australia.',
          'Post-surgical care: vaginoplasty patients need lifelong dilation, and risks include stenosis and fistulae. Phalloplasty has urethral complications. Be aware of these when patients present with urinary or sexual symptoms.',
          'Link patients with peer support organisations and community groups, which reduce isolation.',
        ],
      },
    ],
    keyNumbers: [
      'Cyproterone ≤12.5 mg/day (meningioma risk)',
      'Feminising targets: E2 ~250–600 pmol/L; T <2 nmol/L',
      'Testosterone: Hct >0.50 reduce; >0.54 stop/venesect',
      'Monitoring: 3, 6, 12 months then 6–12 monthly',
      'Cervical screening: all people with a cervix, 25–74',
      'Testosterone is teratogenic and not contraception',
      'Informed consent model (AusPATH) for adults',
    ],
    workedCase: {
      title: 'Rosa has a headache',
      paragraphs: [
        'Rosa, 44, a trans woman, has been on oral oestradiol 6 mg daily and spironolactone 100 mg for 4 years. She smokes 15 cigarettes a day. She presents with 5 days of worsening headache, worse lying down, with blurred vision and nausea.',
        'You recognise red flags for cerebral venous sinus thrombosis: progressive headache, visual symptoms, oral oestrogen and smoking. Examination shows papilloedema. You arrange urgent transfer for CT or MR venography, which confirms CVST. She is anticoagulated in hospital.',
        'Afterwards you review her hormone plan with her and an endocrinologist. Oestrogen is not necessarily stopped permanently, but she switches to transdermal oestradiol at a lower dose once stable on anticoagulation, with specialist advice. You provide intensive smoking cessation support (varenicline and Quitline).',
        'You check potassium, BP and prolactin, update her CVD risk assessment and screening plan, and address her fear of losing affirming care by reassuring her that care will continue safely.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Monitoring gender-affirming hormone therapy',
        lead: 'Choose the SINGLE most likely explanation or action for each result.',
        options: [
          'Reduce testosterone dose',
          'Increase spironolactone',
          'Check for prolactinoma (pituitary MRI) and reduce cyproterone',
          'Stop spironolactone or reduce dose',
          'Switch to transdermal oestradiol',
          'Normal – no change',
          'Investigate for pregnancy',
        ],
        items: [
          { stem: 'A trans man on testosterone with haematocrit 0.53.', answer: 0 },
          { stem: 'A trans woman on spironolactone and ramipril with K⁺ 6.1 mmol/L.', answer: 3 },
          { stem: 'A trans woman on cyproterone 25 mg daily with prolactin 1,800 mIU/L and headaches.', answer: 2 },
          { stem: 'A trans man on testosterone for 2 years with new nausea and missed "spotting", in a relationship with a cis man, using no contraception.', answer: 6 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Elle expresses a gender diverse identity',
        scenario:
          'Elle, 19 (assigned male at birth), tells you she has identified as a woman since childhood and wants to start oestrogen. She has been using a new name at university for a year. She has a history of depression, currently well, and does not smoke. She is not sure about having children.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE are essential parts of your informed consent assessment?',
            options: [
              'Discuss expected effects, timeframes and which are irreversible',
              'Discuss fertility effects and preservation options (sperm storage) before starting',
              'Assess mental health, supports and capacity to consent',
              'Require psychiatric approval before any prescription',
              'Require a year of living as a woman before hormones',
              'Obtain parental consent',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'multi',
            stem: 'Which FOUR baseline tests are appropriate?',
            options: ['UEC and potassium', 'LFT', 'Lipids and HbA1c', 'Testosterone, oestradiol and prolactin', 'Chest X-ray', 'Karyotype'],
            answers: [0, 1, 2, 3],
          },
          {
            kind: 'sba',
            stem: 'Which regimen is a reasonable starting option?',
            options: [
              'Oestradiol (oral or transdermal) with spironolactone or low-dose cyproterone',
              'Testosterone gel',
              'High-dose ethinylestradiol',
              'Cyproterone 100 mg daily alone',
              'Conjugated equine oestrogen with finasteride only',
            ],
            answer: 0,
          },
          {
            kind: 'emq',
            theme: 'Ongoing care',
            lead: 'Choose the SINGLE most appropriate action for each situation.',
            options: [
              'Monitor at 3, 6 and 12 months',
              'Bowel cancer screening',
              'Cervical screening',
              'Discuss prostate health in future; PSA may be lower on therapy',
              'Refer for affirming psychology',
              'Stop hormones',
            ],
            items: [
              { stem: 'Timing of follow-up bloods after starting hormones', answer: 0 },
              { stem: 'She reports increasing distress about family rejection', answer: 4 },
              { stem: 'Long-term screening consideration because she retains a prostate', answer: 3 },
            ],
          },
          {
            kind: 'multi',
            stem: 'Which TWO practice measures best support her care?',
            options: [
              'Record her name and pronouns in the practice system and use them consistently',
              'Ask her what can be shared in referral letters',
              'Use her birth name on all correspondence',
              'Discuss her gender identity with her parents',
              'Require her to present in a particular way',
            ],
            answers: [0, 1],
          },
        ],
      },
    ],
  },
}

export default extra
