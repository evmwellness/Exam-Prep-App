import type { Unit } from '../../types'

const units: Unit[] = [
  {
    id: '616',
    label: 'Unit 616',
    date: 'Oct 2024',
    title: 'Diabetes',
    specialty: 'Endocrinology & Metabolic',
    alsoRelevant: ['Cardiology', 'Urology & Renal', 'Aboriginal & Torres Strait Islander Health'],
    topics: [
      'Individualised glycaemic targets',
      'Cardio–renal–metabolic protection (SGLT2i, GLP-1 RA)',
      'Starting injectable therapy',
      'Diabetes-related foot ulcers',
      'Type 2 diabetes remission',
      'Complication screening and risk tools',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2024/diabetes',
    overview:
      'Type 2 diabetes care has moved from "glucose-centric" to organ protection. Choose SGLT2 inhibitors or GLP-1 receptor agonists for people with cardiovascular, heart failure or kidney disease regardless of HbA1c. Individualise targets, move to injectables in time, screen systematically for complications, and offer remission to motivated people early in the disease.',
    sections: [
      {
        heading: 'Targets and first steps',
        points: [
          'General HbA1c target ≤53 mmol/mol (7%). Use a tighter target (≤48) for younger people early in the disease. Use a looser target (≤64 or higher) in frailty, hypoglycaemia risk or limited life expectancy.',
          'Metformin first line (reduce dose if eGFR 30–44, stop if <30). Lifestyle: weight loss, activity, diet.',
          'With established CVD, heart failure or CKD (eGFR 20–60 or albuminuria), add an SGLT2 inhibitor and/or GLP-1 RA with proven benefit, independent of HbA1c.',
          'Sulfonylureas and insulin carry hypoglycaemia and weight gain risk. Take care in older adults and drivers.',
        ],
      },
      {
        heading: 'Medicine specifics',
        points: [
          'SGLT2i: reduce HF hospitalisation and CKD progression. Risks: genital thrush, volume depletion, euglycaemic DKA. Sick-day rules: withhold when unwell, not eating, or 2–3 days before surgery or colonoscopy.',
          'GLP-1 RA (semaglutide, dulaglutide): weight loss, reduced ASCVD events. GI side effects. Avoid with a history of medullary thyroid cancer or MEN2. Preferred before insulin for most people.',
          'Basal insulin: start glargine or detemir 10 units at night (or 0.1–0.2 units/kg). Titrate by 2 units every 3 days to a fasting BGL of about 4–7 (individualise). Give hypoglycaemia and driving education.',
          'Kidneys: ACEi or ARB at the maximum tolerated dose for albuminuria. Consider finerenone for persistent albuminuria. Statin for most adults with diabetes.',
        ],
      },
      {
        heading: 'Complications',
        points: [
          'Annual: HbA1c (3–6 monthly), lipids, eGFR + urine ACR, BP, foot examination (monofilament, pulses), and a smoking and mood review.',
          'Eyes: retinal screening at least every 2 years, yearly if high risk. Aboriginal and Torres Strait Islander people: yearly.',
          'Foot ulcer: offload, debride, assess infection (probe-to-bone and X-ray/MRI for osteomyelitis) and perfusion (toe pressures or TBI, since ABI may be falsely normal with calcified vessels). Refer early to a high-risk foot service.',
          'Assess CVD risk with the Australian CVD risk calculator (aus cvd risk), which includes diabetes-specific variables.',
        ],
      },
      {
        heading: 'Remission and special situations',
        points: [
          'Remission: HbA1c <48 mmol/mol for ≥3 months off glucose-lowering medicines. Most likely within 6 years of diagnosis with ≥10–15 kg weight loss.',
          'Options: total diet replacement (about 800–900 kcal/day for 12 weeks, as in DiRECT), GLP-1 RA or tirzepatide, and metabolic surgery.',
          'Youth-onset T2D is aggressive, especially in Aboriginal and Torres Strait Islander young people, so treat intensively. Check for T1D (autoantibodies) if lean, young or ketotic.',
          'Driving: follow Assessing Fitness to Drive for insulin or sulfonylurea users (BGL >5 to drive, hypo plan).',
        ],
      },
    ],
    redFlags: [
      'Hot, swollen foot without an ulcer in neuropathy: acute Charcot foot. Offload and refer urgently.',
      'Foot ulcer with spreading cellulitis, gangrene or ischaemia: same-day referral.',
      'Vomiting or abdominal pain on an SGLT2i (even with normal BGL): euglycaemic DKA. Check ketones.',
      'Recurrent severe hypoglycaemia or hypoglycaemia unawareness.',
    ],
    examTips: [
      'SGLT2i sick-day rules and pre-procedure withholding are frequently examined.',
      'Organ protection first: choose drugs by comorbidity, not HbA1c alone.',
      'ABI can mislead in diabetes. Use toe pressures.',
    ],
    mcqs: [
      {
        stem: 'A 64-year-old with T2D (HbA1c 52 mmol/mol on metformin) has heart failure with reduced ejection fraction. Which addition is most appropriate?',
        options: ['Gliclazide', 'SGLT2 inhibitor (e.g. empagliflozin or dapagliflozin)', 'Pioglitazone', 'Sitagliptin', 'No change – HbA1c at target'],
        answer: 1,
        explanation: 'SGLT2 inhibitors reduce HF hospitalisation and mortality regardless of HbA1c. Pioglitazone worsens heart failure.',
      },
      {
        stem: 'A man on dapagliflozin is booked for colonoscopy. What advice is correct?',
        options: [
          'Continue as usual',
          'Withhold for 2–3 days before (including bowel prep day) and restart when eating normally',
          'Double the dose',
          'Stop permanently',
          'Take only on the morning of the procedure',
        ],
        answer: 1,
        explanation: 'Fasting and bowel prep increase euglycaemic DKA risk. Withhold SGLT2i beforehand.',
      },
      {
        stem: 'A woman starting basal insulin glargine 10 units nightly has fasting BGLs of 10–11 mmol/L after 1 week. What is the best next step?',
        options: [
          'Increase glargine by 2 units every 3 days until fasting BGL is at target',
          'Add prandial insulin',
          'Stop metformin',
          'Double to 20 units',
          'Switch to premixed insulin',
        ],
        answer: 0,
        explanation: 'Titrate basal insulin gradually against fasting glucose, with patient-led titration where possible.',
      },
      {
        stem: 'A man with long-standing diabetes has a neuropathic plantar ulcer. Foot pulses are faint; ABI is 1.3. Which test best assesses perfusion?',
        options: ['Repeat ABI', 'Toe pressures / toe–brachial index', 'Capillary refill', 'Plain X-ray', 'Ankle MRI'],
        answer: 1,
        explanation: 'Medial arterial calcification gives falsely high ABI in diabetes. Toe pressures or TBI are more reliable.',
      },
      {
        stem: 'Which definition best describes remission of type 2 diabetes?',
        options: [
          'HbA1c <53 on metformin',
          'HbA1c <48 mmol/mol for at least 3 months after stopping glucose-lowering medicines',
          'Fasting BGL <7 once',
          'Weight loss of 5%',
          'Normal OGTT on insulin',
        ],
        answer: 1,
        explanation: 'This is the international consensus definition of remission.',
      },
    ],
    kfp: [
      {
        title: 'Kevin has a persistent leg wound',
        scenario:
          'Kevin, 68, has T2D for 15 years (HbA1c 71 mmol/mol) and smokes. He has a 4-week, painless ulcer under his first metatarsal head. The surrounding skin is red to 3 cm; the probe touches bone. Pedal pulses are weak.',
        questions: [
          {
            prompt: 'List the investigations you would order.',
            limit: 'Up to 5',
            answers: [
              'Plain X-ray foot (± MRI) for osteomyelitis',
              'Wound swab/deep tissue culture after debridement',
              'FBC, CRP/ESR, UEC, HbA1c',
              'Toe pressures / TBI and arterial duplex',
              'Blood cultures if systemically unwell',
            ],
          },
          {
            prompt: 'List the key management steps.',
            limit: 'Up to 5',
            answers: [
              'Urgent referral to high-risk foot service / multidisciplinary team',
              'Antibiotics for diabetic foot infection with suspected osteomyelitis (per Therapeutic Guidelines)',
              'Offloading (e.g. total contact cast / removable walker)',
              'Vascular surgery referral if ischaemia',
              'Optimise glycaemia, smoking cessation, tetanus status',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '615',
    label: 'Unit 615',
    date: 'Sep 2024',
    title: 'Generalist mental health skills 2',
    specialty: 'Mental Health',
    alsoRelevant: ['Abuse & Violence', 'Professional & Ethical Practice', "Women's Health"],
    topics: [
      'Family-based continuity of mental healthcare',
      'Domestic violence and confidentiality in shared family care',
      'Adverse childhood experiences and adult health',
      'Perinatal mental health',
      'Coping skills and psychological first aid',
      'GP wellbeing and burnout',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2024/generalist-mental-health-skills-2',
    overview:
      'GPs often care for whole families over decades. That gives them a unique view of how trauma, violence and life events shape mental and physical health. The same continuity creates confidentiality challenges and emotional load for the doctor. This unit builds skills in trauma-aware family care and self-care.',
    sections: [
      {
        heading: 'Continuity and families',
        points: [
          'Longitudinal relationships allow early detection, "watchful waiting" and opportunistic care across life transitions: birth, adolescence, separation, illness, bereavement.',
          'Keep each family member\'s information confidential. Never disclose one person\'s information to another without consent.',
          'When the victim and the person using violence attend the same practice: keep records secure, never reveal the disclosure, and consider safety when booking and sending recalls.',
          'Offer perpetrators referral to behaviour change programs, and protect children through mandatory reporting where required.',
        ],
      },
      {
        heading: 'Childhood trauma',
        points: [
          'Adverse childhood experiences (ACEs) include abuse, neglect, household violence, parental mental illness or substance use, and separation.',
          'Four or more ACEs substantially increase the risk of depression, suicide, substance use, heart disease, COPD, chronic pain and early death.',
          'Trauma-informed care means assuming trauma may be present, avoiding re-traumatisation, and focusing on safety, choice, collaboration and trust.',
          'Ask "What happened to you?" rather than "What\'s wrong with you?" Offer trauma-focused therapy when the person is ready.',
        ],
      },
      {
        heading: 'Perinatal and anxiety presentations',
        points: [
          'Perinatal depression and anxiety affect about 1 in 5 mothers and 1 in 10 fathers. Screen with EPDS (≥13 suggests probable depression; any positive on item 10 needs a safety assessment).',
          'Treatment: psychological therapy, social support, and SSRIs (sertraline preferred in breastfeeding). Refer urgently if there are psychotic features (postpartum psychosis is an emergency).',
          'Fear of "losing control" may reflect panic disorder or intrusive thoughts (perinatal OCD). Ego-dystonic intrusive thoughts of harm are common and rarely acted on. Assess carefully and reassure appropriately.',
          'Coping skills: acceptance and commitment therapy (ACT), problem-solving therapy, behavioural activation, grounding techniques.',
        ],
      },
      {
        heading: 'Doctor wellbeing',
        points: [
          'Burnout (exhaustion, cynicism, reduced efficacy) is common in GPs and is linked to errors and leaving the profession.',
          'Protective factors: having your own GP, peer support and Balint groups, boundaries, reasonable workload, leave, and meaning in work.',
          'Support services: Doctors\' Health Advisory Services and DRS4DRS. Seek help early. Treating practitioners have a high threshold for mandatory notification (substantial risk of harm).',
          'Reflect on countertransference with "heartsink" or distressing patients and use supervision.',
        ],
      },
    ],
    redFlags: [
      'Postpartum psychosis (confusion, delusions, rapid onset in the first 2 weeks): emergency admission.',
      'Positive EPDS item 10 (self-harm thoughts).',
      'Children at risk of harm.',
      'Doctor with suicidal ideation (doctors have higher suicide rates, especially female doctors).',
    ],
    examTips: [
      'Know the EPDS cut-off and why item 10 matters.',
      'Confidentiality within families is a common ethics KFP.',
      'Sertraline is the preferred SSRI when breastfeeding.',
    ],
    mcqs: [
      {
        stem: 'A woman 6 weeks postpartum scores 15 on the EPDS and answers "sometimes" to thoughts of self-harm. What is the most important immediate step?',
        options: [
          'Repeat EPDS in 3 months',
          'Detailed suicide risk assessment and safety planning',
          'Start sertraline and review in 6 weeks',
          'Refer to a lactation consultant',
          'Reassure – baby blues',
        ],
        answer: 1,
        explanation: 'A positive item 10 needs immediate assessment of risk, then treatment and support.',
      },
      {
        stem: 'A new mother reports horrifying intrusive images of dropping her baby, which she finds distressing and avoids bathing him. What is the most likely diagnosis?',
        options: ['Postpartum psychosis', 'Perinatal obsessive–compulsive disorder', 'Normal adjustment', 'Bipolar mania', 'Schizophrenia'],
        answer: 1,
        explanation: 'Ego-dystonic intrusive harm thoughts with avoidance are typical of perinatal OCD. They carry low risk of harm, and treatment is CBT ± SSRI.',
      },
      {
        stem: 'A husband asks what his wife discussed with you last week; both are your patients. What should you do?',
        options: [
          'Tell him as they are married',
          'Decline to share without her consent',
          'Share only the diagnosis',
          'Share if he is her carer',
          'Give him her notes',
        ],
        answer: 1,
        explanation: 'Each patient\'s information is confidential, even between spouses.',
      },
      {
        stem: 'Which statement about adverse childhood experiences is correct?',
        options: [
          'They only affect mental health',
          'Higher ACE scores are associated with increased risk of chronic physical diseases such as heart disease and COPD',
          'Effects resolve by adulthood',
          'ACEs are rare in Australia',
          'Screening is harmful',
        ],
        answer: 1,
        explanation: 'The ACE studies showed a dose–response relationship with physical and mental ill-health in adulthood.',
      },
      {
        stem: 'Which SSRI is generally preferred in a breastfeeding mother?',
        options: ['Fluoxetine', 'Sertraline', 'Citalopram', 'Escitalopram', 'Fluvoxamine'],
        answer: 1,
        explanation: 'Sertraline has low milk transfer and the most reassuring safety data. Fluoxetine has a long half-life and higher infant levels.',
      },
    ],
    kfp: [
      {
        title: 'Doctor Dee wants out',
        scenario:
          'Dr Dee, 46, a GP colleague, confides she is exhausted, dreads work, has become cynical with patients and drinks 3–4 glasses of wine nightly. She has no GP of her own and says, "I just want out."',
        questions: [
          {
            prompt: 'List what you would explore with her.',
            limit: 'Up to 4',
            answers: [
              'Suicidal ideation and risk (clarify "want out")',
              'Depression/anxiety symptoms and alcohol use',
              'Workload, work stressors, supports and boundaries',
              'Whether she has her own GP and impact on patient safety/fitness to practise',
            ],
          },
          {
            prompt: 'List appropriate supports and actions.',
            limit: 'Up to 4',
            answers: [
              'Encourage her to see her own independent GP',
              'Doctors\' Health Advisory Service / DRS4DRS',
              'Workload changes, leave, peer support/Balint group, psychology',
              'Recognise mandatory notification threshold is substantial risk of harm to public – usually not met if seeking help',
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'S1',
    label: 'Supplement 1',
    date: 'Aug 2024',
    title: 'Eczema',
    specialty: 'Dermatology',
    alsoRelevant: ['Paediatrics & Child Health', 'Mental Health'],
    topics: [
      'Recognising eczema in skin of colour',
      'Triggers and moisturiser use',
      'Topical corticosteroids: potency, quantity and safety concerns',
      'Topical calcineurin inhibitors and proactive therapy',
      'Infected eczema and eczema herpeticum',
      'Psychosocial burden and systemic therapy referral',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2024/eczema',
    overview:
      'Atopic eczema affects about 1 in 5 Australian children and many adults. It is a chronic relapsing condition driven by barrier dysfunction and inflammation. The mainstays are daily moisturisers, avoiding irritants, and adequate topical corticosteroids (TCS) used confidently until clear. Many treatment failures come from "steroid phobia" and under-treatment.',
    sections: [
      {
        heading: 'Recognition',
        points: [
          'Itchy, dry, inflamed skin. Infants: face, scalp and extensor surfaces. Children and adults: flexures, hands, eyelids.',
          'In skin of colour, erythema may appear violaceous, grey or dark brown rather than red. Follicular (papular) eczema and lichenification are more prominent, so severity is often underestimated.',
          'Post-inflammatory hyper- or hypopigmentation is common and distressing. It improves once inflammation is controlled.',
          'Differentials: scabies, contact dermatitis, seborrhoeic dermatitis, psoriasis, tinea, and cutaneous T-cell lymphoma in adults.',
        ],
      },
      {
        heading: 'Basics',
        points: [
          'Moisturise at least twice daily and after bathing. Use soap-free wash, lukewarm short baths, and cotton clothing.',
          'Triggers: soaps, heat and sweat, wool, dust mite, infection, stress. Food allergy tests only if the history suggests a reaction (mostly relevant in infants with severe eczema).',
          'Wet dressings for flares help cool, hydrate and increase TCS absorption.',
          'Written eczema action plans improve adherence.',
        ],
      },
      {
        heading: 'Topical therapy',
        points: [
          'Match TCS potency to severity and site. Mild (hydrocortisone 1%) for the face and flexures in infants. Moderate (methylprednisolone aceponate 0.1%, once daily, usable short-term on the face). Potent (mometasone, betamethasone dipropionate) for the body and limbs.',
          'Apply once daily until the skin is CLEAR (not just improved), then stop or use proactive twice-weekly maintenance on flare-prone sites.',
          'Fingertip unit (FTU, about 0.5 g) covers an area of two adult palms. Under-dosing is common.',
          'Address TCS fears: appropriate use does not cause skin thinning. Topical calcineurin inhibitors (pimecrolimus, tacrolimus) are steroid-sparing for the face and eyelids.',
        ],
      },
      {
        heading: 'Complications and escalation',
        points: [
          'Impetiginised eczema (crusting, weeping): treat inflammation plus oral cephalexin or flucloxacillin if extensive. Consider bleach baths.',
          'Eczema herpeticum (punched-out erosions, monomorphic vesicles, fever): urgent aciclovir, and refer if near the eye.',
          'Psychosocial burden: sleep loss, school and work impact, bullying, carer exhaustion. Screen for anxiety and depression.',
          'Refer to dermatology for severe or refractory disease: systemic therapy (dupilumab, JAK inhibitors, methotrexate, ciclosporin), phototherapy.',
        ],
      },
    ],
    redFlags: [
      'Eczema herpeticum: urgent antiviral.',
      'Erythroderma (>90% of skin): admit.',
      'Failure to thrive in an infant with severe eczema.',
      'New adult-onset "eczema" not responding to treatment: biopsy (mycosis fungoides).',
    ],
    examTips: [
      'Use the FTU and "until clear" language in KFP answers.',
      'Know how eczema appears in skin of colour. This is a newer assessment focus.',
      'Eczema herpeticum is a must-not-miss.',
    ],
    mcqs: [
      {
        stem: 'A 4-year-old with flexural eczema flares despite emollients. What is the most appropriate treatment for the limbs?',
        options: [
          'Hydrocortisone 1% for 2 days only',
          'Moderate-potency TCS (e.g. methylprednisolone aceponate 0.1%) daily until clear',
          'Oral antihistamine alone',
          'Oral prednisolone',
          'Topical antibiotic',
        ],
        answer: 1,
        explanation: 'An adequate-potency TCS used until the skin is clear is first-line treatment for flares.',
      },
      {
        stem: 'A child with eczema has sudden painful, punched-out erosions and fever. What is the most likely diagnosis?',
        options: ['Impetigo', 'Eczema herpeticum', 'Scabies', 'Molluscum', 'Contact dermatitis'],
        answer: 1,
        explanation: 'HSV superinfection (Kaposi varicelliform eruption) needs urgent systemic aciclovir.',
      },
      {
        stem: 'How much area does one fingertip unit of cream cover?',
        options: ['One adult palm', 'Two adult palms', 'Whole arm', 'Whole face and neck', 'Four adult palms'],
        answer: 1,
        explanation: 'One FTU (about 0.5 g) covers two adult palms (flat hands including fingers).',
      },
      {
        stem: 'A parent is worried about skin thinning from steroids on her son\'s eyelid eczema. Which is the best steroid-sparing option?',
        options: ['Clobetasol', 'Pimecrolimus 1% cream', 'Betamethasone valerate', 'Oral ciclosporin', 'Coal tar'],
        answer: 1,
        explanation: 'Topical calcineurin inhibitors are safe on eyelids and facial skin.',
      },
      {
        stem: 'In darker skin tones, eczema inflammation is most likely to appear as:',
        options: ['Bright red erythema', 'Violaceous, grey or dark brown discolouration', 'Silvery scale', 'Yellow crusting always', 'Blue macules'],
        answer: 1,
        explanation: 'Erythema is harder to see in darker skin. Look for violaceous, grey or brown hues, papules and lichenification.',
      },
    ],
    kfp: [
      {
        title: 'Charlotte has a rash',
        scenario:
          'Charlotte, 18 months, has itchy dry red patches on her cheeks, trunk and outer arms for 3 months, worse after baths with bubble bath. Her mother is using hydrocortisone 1% "only a little, because steroids are dangerous". Charlotte is waking 4 times a night.',
        questions: [
          {
            prompt: 'List the key elements of your management plan.',
            limit: 'Up to 5',
            answers: [
              'Stop bubble bath/soap; soap-free wash, lukewarm short baths',
              'Liberal emollient at least twice daily',
              'Adequate TCS: moderate potency (e.g. methylprednisolone aceponate) to body, mild to face, daily until clear',
              'Explain TCS safety and FTU dosing; written eczema action plan',
              'Review in 1–2 weeks; address sleep/carer burden',
            ],
          },
          {
            prompt: 'Two weeks later she has fever and clusters of punched-out erosions on her face. List your management.',
            limit: 'Up to 3',
            answers: [
              'Diagnose eczema herpeticum',
              'Urgent systemic aciclovir (IV if unwell/infant – usually hospital)',
              'Urgent ophthalmology review if periocular involvement',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '614',
    label: 'Unit 614',
    date: 'Aug 2024',
    title: 'Generalist mental health skills 1',
    specialty: 'Mental Health',
    alsoRelevant: ['Paediatrics & Child Health', 'Professional & Ethical Practice'],
    topics: [
      'Whole-person assessment and formulation',
      'Trauma-informed difficult conversations',
      'Frameworks for assessment (biopsychosocial, 5Ps)',
      'Cognitive bias and diagnostic overshadowing',
      'Eating disorders: risk assessment and plans',
      'School refusal, social isolation, frequent attenders, insomnia',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2024/generalist-mental-health-skills-1',
    overview:
      'Most mental healthcare in Australia is provided by GPs. Generalist skills include whole-person assessment of threats and strengths across life domains and trauma-informed communication. A shared formulation guides the plan, and it helps to know how cognitive biases can derail diagnosis. Eating disorders are a high-risk area where GPs coordinate medical monitoring and team care.',
    sections: [
      {
        heading: 'Whole-person assessment',
        points: [
          'Look across domains: biological, psychological, social, cultural, spiritual, relational and environmental, as sources of both threat and strength.',
          '5Ps formulation: Presenting problem, Predisposing, Precipitating, Perpetuating and Protective factors. It makes the plan make sense to the patient.',
          'Frameworks each have limits. DSM categories help communication and access to care but can miss context. Biopsychosocial formulation is broad but less specific.',
          'Measure: K10, PHQ-9, GAD-7, DASS-21 to track change, not as a substitute for clinical judgement.',
        ],
      },
      {
        heading: 'Trauma-informed communication',
        points: [
          'Principles: safety, trustworthiness, choice, collaboration, empowerment and cultural safety.',
          'Explain what you are doing and why, ask permission, let the patient control the pace, and avoid forcing disclosure.',
          'Chronic pain (such as back pain) often has psychosocial "yellow flags": fear-avoidance, catastrophising, low mood, work issues. Address them early.',
          'Frequent attenders: schedule regular appointments rather than crisis visits. Consider somatic symptom disorder, and avoid unnecessary investigations while staying alert to new pathology.',
        ],
      },
      {
        heading: 'Cognitive bias',
        points: [
          'Diagnostic overshadowing: attributing physical symptoms to a known mental illness, which leads to missed organic disease.',
          'Anchoring, premature closure and availability bias. Use a "what else could this be?" pause and safety-netting.',
          'Countertransference, such as frustration with "heartsink" patients, can distort care. Notice it and reflect on it.',
          'Stigma reduces help-seeking. Language matters.',
        ],
      },
      {
        heading: 'Eating disorders and young people',
        points: [
          'Medical risk markers: HR <50 (day), BP <90/60 or postural drop, temperature <35.5 °C, low K⁺ or phosphate, QTc prolongation, rapid weight loss, syncope. Any of these means urgent admission.',
          'GP role: screen (SCOFF), assess medical risk, and create an Eating Disorder Treatment and Management Plan (up to 40 psychological and 20 dietetic sessions for eligible patients).',
          'Adolescents with anorexia nervosa: family-based treatment is first line. Watch for refeeding syndrome (low phosphate) when nutrition is restored.',
          'School refusal: usually anxiety-driven. Aim for a graded early return with school, family and psychologist collaboration. Insomnia: CBT-i first line.',
        ],
      },
    ],
    redFlags: [
      'Eating disorder with bradycardia, hypotension, hypothermia or electrolyte disturbance: admit.',
      'Suicidal ideation in a socially isolated adolescent.',
      'New physical symptoms in a person with known mental illness: avoid diagnostic overshadowing.',
      'Prolonged school refusal with depression or self-harm.',
    ],
    examTips: [
      'Know the admission criteria for eating disorders. They are commonly examined.',
      'The 5Ps formulation is a useful KFP structure.',
      'Diagnostic overshadowing is a key bias concept.',
    ],
    mcqs: [
      {
        stem: 'A 16-year-old with anorexia nervosa has HR 42 at rest, BP 85/55 with postural drop, and potassium 3.0 mmol/L. What is the most appropriate management?',
        options: [
          'Weekly GP review',
          'Urgent hospital admission for medical stabilisation',
          'Start fluoxetine',
          'Refer to dietitian only',
          'Oral potassium and review in a month',
        ],
        answer: 1,
        explanation: 'Bradycardia, hypotension and hypokalaemia indicate medical instability, which requires admission.',
      },
      {
        stem: 'A woman with schizophrenia complains of chest pain; staff attribute it to anxiety. Which cognitive bias does this represent?',
        options: ['Availability bias', 'Diagnostic overshadowing', 'Confirmation bias of the patient', 'Framing effect', 'Sunk cost'],
        answer: 1,
        explanation: 'Attributing physical symptoms to a mental illness is diagnostic overshadowing. People with severe mental illness have higher cardiovascular mortality.',
      },
      {
        stem: 'Which is the first-line treatment for adolescent anorexia nervosa?',
        options: ['Olanzapine', 'Family-based treatment', 'Individual psychodynamic therapy', 'Fluoxetine', 'Residential care'],
        answer: 1,
        explanation: 'Family-based treatment (Maudsley) has the strongest evidence for adolescents.',
      },
      {
        stem: 'In the 5Ps formulation, ongoing unemployment keeping someone\'s depression going is an example of a:',
        options: ['Predisposing factor', 'Precipitating factor', 'Perpetuating factor', 'Protective factor', 'Presenting problem'],
        answer: 2,
        explanation: 'Perpetuating factors maintain the problem.',
      },
      {
        stem: 'A 13-year-old has missed 3 weeks of school with morning stomach aches that resolve at weekends. What is the best approach?',
        options: [
          'Medical certificate for a term off',
          'Collaborative graded return to school with family, school and psychological support for anxiety',
          'Abdominal CT',
          'Home schooling immediately',
          'Benzodiazepine before school',
        ],
        answer: 1,
        explanation: 'School refusal is usually anxiety-related. Early graded return with support prevents entrenchment.',
      },
    ],
    kfp: [
      {
        title: 'Priya attends frequently',
        scenario:
          'Priya, 38, has attended 14 times in 6 months with headaches, abdominal pain, fatigue and palpitations. Extensive investigations have been normal. She is anxious and worried "something is being missed". Staff find her appointments frustrating.',
        questions: [
          {
            prompt: 'List the key elements of your assessment.',
            limit: 'Up to 4',
            answers: [
              'Review for red flags / new features (avoid missing organic disease)',
              'Screen for anxiety, depression, somatic symptom disorder, health anxiety',
              'Explore trauma history, life stressors, family violence (trauma-informed)',
              'Explore her ideas, concerns and expectations',
            ],
          },
          {
            prompt: 'List the key elements of your management approach.',
            limit: 'Up to 4',
            answers: [
              'Regular scheduled appointments with one GP (continuity) rather than symptom-driven visits',
              'Shared formulation explaining mind–body link; validate symptoms',
              'Limit unnecessary investigations while safety-netting',
              'Mental Health Treatment Plan – CBT; reflect on own countertransference',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '613',
    label: 'Unit 613',
    date: 'Jul 2024',
    title: 'Prostate cancer',
    specialty: 'Oncology',
    alsoRelevant: ["Men's Health", 'Urology & Renal', 'Palliative Care'],
    topics: [
      'PSA testing and shared decision-making',
      'Lower urinary tract symptoms (LUTS) and raised PSA work-up',
      'Active surveillance vs radical treatment',
      'Multidisciplinary team roles',
      'Treatment side effects: ED, incontinence, ADT effects',
      'Advanced prostate cancer and palliative care',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2024/prostate-cancer',
    overview:
      'Prostate cancer is the most commonly diagnosed cancer in Australian men. PSA testing should follow an informed, shared decision. An abnormal PSA is repeated and then referred for MRI and a urology assessment. Many low-grade cancers are best managed with active surveillance. GPs manage treatment side effects, androgen deprivation therapy (ADT) complications and palliative care.',
    sections: [
      {
        heading: 'PSA testing',
        points: [
          'Asymptomatic men aged 50–69 (40/45+ with a strong family history or BRCA2) who choose testing after informed discussion: PSA every 2 years.',
          'Discuss benefits (lower prostate cancer mortality) and harms (false positives, biopsy complications, overdiagnosis and overtreatment).',
          'Raised PSA: repeat in 1–3 months. Avoid testing after ejaculation, vigorous cycling, UTI or prostatitis. 5-ARIs (finasteride, dutasteride) roughly halve PSA.',
          'Persistently raised PSA or an abnormal DRE: refer to a urologist. Multiparametric MRI (PI-RADS) before biopsy reduces unnecessary biopsies. Transperineal biopsy has lower sepsis risk.',
        ],
      },
      {
        heading: 'LUTS',
        points: [
          'Assess with IPSS, a frequency–volume chart, DRE, urinalysis, UEC, and PSA (after discussion). Check post-void residual if retention is suspected.',
          'Storage symptoms (frequency, urgency, nocturia) vs voiding symptoms (hesitancy, poor stream).',
          'Treatment: lifestyle (fluids, caffeine, alcohol). α-blocker (tamsulosin: warn about floppy iris syndrome before cataract surgery). 5-ARI if the prostate is large. Antimuscarinic or β3-agonist for storage symptoms.',
          'Refer: retention, haematuria, abnormal DRE, raised PSA, recurrent UTI, renal impairment.',
        ],
      },
      {
        heading: 'Treatment and team',
        points: [
          'Risk grouping by PSA, ISUP grade group and stage. Low risk (grade group 1): active surveillance (PSA, MRI, repeat biopsy).',
          'Intermediate to high risk: radical prostatectomy or radiotherapy ± ADT. Metastatic: ADT plus androgen receptor pathway inhibitors (such as enzalutamide), chemotherapy, radioligand therapy.',
          'The multidisciplinary team includes urologist, radiation oncologist, medical oncologist, prostate cancer specialist nurse, continence physiotherapist, psychologist, dietitian and GP.',
          'Offer psychological and sexual health support. Prostate Cancer Foundation of Australia resources help.',
        ],
      },
      {
        heading: 'Side effects and survivorship',
        points: [
          'Erectile dysfunction: PDE5 inhibitors, vacuum devices, intracavernosal injections, penile rehabilitation.',
          'Incontinence after prostatectomy: pelvic floor physiotherapy (ideally started before surgery). Radiotherapy: proctitis (rectal bleeding) and cystitis, which can occur late.',
          'ADT: hot flushes, fatigue, loss of libido, gynaecomastia, weight gain, insulin resistance, dyslipidaemia, CVD risk, osteoporosis, low mood and cognitive change.',
          'On ADT: baseline DXA, calcium and vitamin D, resistance exercise, CVD risk management, and an antiresorptive (denosumab or zoledronic acid) when indicated.',
        ],
      },
    ],
    redFlags: [
      'Back pain with neurological symptoms in known prostate cancer: spinal cord compression.',
      'Acute urinary retention.',
      'Bone pain, weight loss or anaemia: metastatic disease.',
      'Hypercalcaemia symptoms.',
    ],
    examTips: [
      'Discussing PSA harms and benefits is a classic KFP item.',
      'Repeat an abnormal PSA before referral, and remember the finasteride effect.',
      'Know ADT bone and metabolic monitoring.',
    ],
    mcqs: [
      {
        stem: 'A 58-year-old man has PSA 5.2 ng/mL. He cycled 60 km the day before. DRE is normal. What is the most appropriate next step?',
        options: ['Urgent biopsy', 'Repeat PSA in 1–3 months avoiding cycling/ejaculation beforehand', 'Start finasteride', 'Bone scan', 'Reassure and discharge'],
        answer: 1,
        explanation: 'Transient PSA rises are common, so repeat the test before referral.',
      },
      {
        stem: 'A man on finasteride for 2 years has PSA 2.0 ng/mL. How should this be interpreted?',
        options: [
          'Normal – no action',
          'Approximately double (≈4.0) to estimate the true PSA',
          'Halve it',
          'PSA is invalid on finasteride',
          'Refer immediately',
        ],
        answer: 1,
        explanation: '5-ARIs reduce PSA by about 50% after 6–12 months.',
      },
      {
        stem: 'A 68-year-old with ISUP grade group 1 prostate cancer, PSA 5, small-volume disease. What is the preferred management?',
        options: ['Radical prostatectomy', 'Active surveillance', 'ADT', 'Chemotherapy', 'Watchful waiting with no monitoring'],
        answer: 1,
        explanation: 'Low-risk disease is best managed with active surveillance, which avoids overtreatment.',
      },
      {
        stem: 'A man on long-term ADT for prostate cancer should have which baseline investigation?',
        options: ['Echocardiogram', 'DXA scan', 'Colonoscopy', 'Brain MRI', 'Spirometry'],
        answer: 1,
        explanation: 'ADT causes significant bone loss and fracture risk.',
      },
      {
        stem: 'Before cataract surgery, which LUTS medicine should the ophthalmologist be told about?',
        options: ['Finasteride', 'Tamsulosin', 'Oxybutynin', 'Mirabegron', 'Tadalafil'],
        answer: 1,
        explanation: 'α1A blockers such as tamsulosin cause intraoperative floppy iris syndrome.',
      },
    ],
    kfp: [
      {
        title: 'Dan wants a prostate check',
        scenario:
          'Dan, 52, is well with no urinary symptoms. His father was diagnosed with prostate cancer at 64. He asks for "a prostate check".',
        questions: [
          {
            prompt: 'List the key points to discuss for an informed decision about PSA testing.',
            limit: 'Up to 5',
            answers: [
              'Benefits – may reduce risk of dying from prostate cancer',
              'Harms – false positives, anxiety, biopsy complications (infection, bleeding)',
              'Overdiagnosis/overtreatment of indolent cancers and treatment side effects (ED, incontinence)',
              'Family history increases his risk',
              'If tested: PSA every 2 years; abnormal results lead to repeat, MRI and urology referral',
            ],
          },
          {
            prompt: 'Dan\'s PSA is 4.8 and repeat is 5.1 ng/mL. What is the next step?',
            limit: 'Up to 1',
            answers: ['Refer to urologist for assessment including multiparametric MRI prostate ± biopsy'],
          },
        ],
      },
    ],
  },
]

export default units
