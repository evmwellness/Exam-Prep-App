import type { Unit } from '../../types'

const units: Unit[] = [
  {
    id: '602',
    label: 'Unit 602',
    date: 'Mar 2023',
    title: "Veterans' health",
    specialty: 'Veterans & Military Health',
    alsoRelevant: ['Mental Health', 'Addiction Medicine', 'Aged Care'],
    topics: [
      'Re-engaging veterans with primary care',
      'Structured veteran physical and mental health check',
      'Screening tools: K10, PCL-5, AUDIT, DASS-21',
      'Alcohol use and panic disorder in veterans',
      'Older veterans ageing at home',
      'DVA cards, programs and referral pathways',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2023/veterans-health',
    overview:
      'Veterans\' health needs span musculoskeletal injury, hearing loss, mental health, alcohol use and, later, ageing and multimorbidity. Knowing DVA entitlements (Gold and White Cards, Non-Liability Health Care, home care programs) lets GPs coordinate funded care. A structured health check helps catch problems early.',
    sections: [
      {
        heading: 'DVA essentials',
        points: [
          'Veteran Gold Card: all clinically necessary healthcare. Veteran White Card: accepted service-related conditions, plus Non-Liability Health Care for any mental health condition (and certain cancers and TB).',
          'Claims are made through MyService. The GP\'s role includes clear diagnosis and documentation to support claims.',
          'Programs: Veterans\' Home Care (domestic help, personal care, respite), Coordinated Veterans\' Care (chronic disease care coordination for Gold Card holders), Rehabilitation Appliances Program, community nursing.',
          'Open Arms provides counselling for veterans and families.',
        ],
      },
      {
        heading: 'Structured health check',
        points: [
          'Physical: musculoskeletal injuries (knees, back), hearing (noise-induced loss, tinnitus), CVD risk, sleep, sexual health, skin (sun exposure), occupational exposures.',
          'Mental health: K10 or DASS-21, PCL-5 for PTSD, AUDIT for alcohol. Always ask about suicidal thoughts and firearms.',
          'Social: employment, housing, relationships, financial stress, legal problems, identity after discharge.',
          'Female veterans: ask sensitively about military sexual trauma, reproductive health and bone health.',
        ],
      },
      {
        heading: 'Common problems',
        points: [
          'Alcohol: veterans have higher rates of hazardous drinking. Use a brief intervention (FRAMES) and pharmacotherapy (naltrexone, acamprosate). Screen for co-occurring PTSD and depression.',
          'Panic disorder: recurrent unexpected attacks with worry about future attacks. First-line treatment is CBT (including interoceptive exposure) ± SSRI. Avoid benzodiazepines.',
          'Knee and back pain: exercise-based physiotherapy, weight management, and imaging only when it will change management. DVA can fund allied health.',
          'Breathlessness and fatigue: consider anaemia, cardiac and respiratory disease, OSA, depression, and occupational exposures.',
        ],
      },
      {
        heading: 'Older veterans',
        points: [
          'Supporting ageing in place: Veterans\' Home Care, community nursing, OT home assessment, falls prevention.',
          'Comprehensive medication review (DVA-funded HMR), cognitive screening, and carer support.',
          'Advance care planning, including preferences for place of death.',
          'Watch for late-onset PTSD symptoms triggered by retirement, illness or anniversaries.',
        ],
      },
    ],
    redFlags: [
      'Suicidal ideation with firearm access.',
      'Alcohol withdrawal risk (heavy daily drinking).',
      'Chest pain presenting as "panic" in a middle-aged veteran: exclude cardiac causes.',
      'Carer breakdown or elder abuse in older veterans.',
    ],
    examTips: [
      'Know the difference between the Gold Card and White Card.',
      'Panic disorder: CBT and SSRIs first line, not benzodiazepines.',
      'Include firearms in every veteran mental health KFP.',
    ],
    mcqs: [
      {
        stem: 'Which DVA card covers all clinically necessary healthcare?',
        options: ['Veteran White Card', 'Veteran Gold Card', 'Orange Card only', 'Medicare card', 'Health Care Card'],
        answer: 1,
        explanation: 'The Gold Card covers all conditions. The White Card covers accepted conditions plus Non-Liability Health Care.',
      },
      {
        stem: 'A 35-year-old veteran has recurrent sudden episodes of palpitations, breathlessness and fear of dying, with ongoing worry about further attacks. ECG and TFTs are normal. What is the first-line treatment?',
        options: ['Alprazolam PRN', 'CBT ± SSRI', 'Propranolol long-term', 'Quetiapine', 'Reassurance only'],
        answer: 1,
        explanation: 'Panic disorder is treated with CBT (including exposure) and SSRIs. Benzodiazepines risk dependence.',
      },
      {
        stem: 'An 88-year-old veteran with a Gold Card wants to stay at home after a fall. Which DVA program provides domestic assistance and personal care?',
        options: ['Open Arms', 'Veterans\' Home Care', 'NDIS', 'Rehabilitation Appliances Program only', 'MyService'],
        answer: 1,
        explanation: 'Veterans\' Home Care provides low-level home support. Combine it with OT and falls prevention.',
      },
      {
        stem: 'Which screening tool is designed to detect probable PTSD?',
        options: ['AUDIT', 'PCL-5', 'EPDS', 'GDS', 'MoCA'],
        answer: 1,
        explanation: 'The PTSD Checklist for DSM-5 (PCL-5) is widely used, and the PC-PTSD-5 is a brief screen.',
      },
      {
        stem: 'A veteran drinking 8 standard drinks daily wants help. He had no previous withdrawal complications. Which medicine can support abstinence after withdrawal?',
        options: ['Diazepam long-term', 'Naltrexone or acamprosate', 'Disulfiram in all patients', 'Quetiapine', 'Zolpidem'],
        answer: 1,
        explanation: 'Naltrexone and acamprosate are first-line relapse-prevention medicines.',
      },
    ],
    kfp: [
      {
        title: 'Dakota is worried about his drinking',
        scenario:
          'Dakota, 38, served 12 years in the army including two deployments. Since discharge 2 years ago he drinks 8–10 beers a night, sleeps poorly and has nightmares. He has recently separated from his partner.',
        questions: [
          {
            prompt: 'List the screening assessments you would perform.',
            limit: 'Up to 5',
            answers: [
              'AUDIT (alcohol) and withdrawal history',
              'PCL-5 / PC-PTSD-5 for PTSD',
              'K10/PHQ-9 for depression and anxiety',
              'Suicide risk assessment including firearm access',
              'Physical: LFT, FBC (MCV), BP, weight',
            ],
          },
          {
            prompt: 'List the supports and referrals available to him.',
            limit: 'Up to 4',
            answers: [
              'Veteran White Card – Non-Liability Health Care for mental health and alcohol treatment',
              'Open Arms counselling',
              'Psychologist for trauma-focused therapy',
              'Alcohol treatment (withdrawal plan, naltrexone/acamprosate) and Veteran Health Check',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '601',
    label: 'Unit 601',
    date: 'Feb 2023',
    title: 'Iron deficiency',
    specialty: 'Haematology',
    alsoRelevant: ['Paediatrics & Child Health', "Women's Health", 'Gastroenterology & Hepatology'],
    topics: [
      'Risk factors in infancy and adolescence',
      'Interpreting ferritin (including with inflammation)',
      'Heavy menstrual bleeding and PALM-COEIN',
      'Iron in pregnancy',
      'Iron deficiency in inflammatory bowel disease',
      'Oral vs intravenous iron',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2023/iron-deficiency',
    overview:
      'Iron deficiency is the most common nutritional deficiency worldwide. It causes fatigue, poor concentration and anaemia even before Hb falls. GPs should identify at-risk groups, interpret ferritin in context, find and treat the cause, and choose oral or IV iron appropriately.',
    sections: [
      {
        heading: 'Diagnosis',
        points: [
          'Ferritin <30 µg/L confirms iron deficiency in adults. Ferritin is an acute-phase reactant, so with inflammation (raised CRP) or CKD, ferritin <100 with TSAT <20% suggests iron deficiency.',
          'Iron deficiency without anaemia still causes symptoms (fatigue, restless legs, poor cognition) and deserves treatment.',
          'Find the cause: menstrual loss, GI loss (NSAIDs, cancer, IBD), malabsorption (coeliac, bariatric surgery, PPI), diet (vegetarian), increased needs (growth, pregnancy), blood donation.',
          'Men and postmenopausal women with unexplained iron deficiency need GI investigation (gastroscopy + colonoscopy). Test coeliac serology.',
        ],
      },
      {
        heading: 'Children and adolescents',
        points: [
          'Infant risk factors: prematurity or low birth weight, maternal iron deficiency, early cord clamping, cow\'s milk before 12 months, delayed iron-rich solids after 6 months.',
          'Toddlers: excessive cow\'s milk (>500 mL/day) displaces iron-rich food and can cause occult GI loss. The classic "pale, fussy toddler who drinks lots of milk".',
          'Adolescents: growth spurt, menstruation (especially heavy), vegetarian or vegan diets, sport, disordered eating. Iron deficiency affects school performance.',
          'Treat children with oral iron about 3–6 mg/kg/day elemental. Limit milk and advise on iron-rich foods.',
        ],
      },
      {
        heading: 'Heavy menstrual bleeding and pregnancy',
        points: [
          'PALM-COEIN: structural causes are Polyp, Adenomyosis, Leiomyoma, Malignancy/hyperplasia. Non-structural are Coagulopathy, Ovulatory, Endometrial, Iatrogenic, Not yet classified.',
          'HMB since menarche: screen for bleeding disorders (von Willebrand disease). Investigate with FBC, ferritin, TSH, pelvic ultrasound, STI and cervical screening as appropriate.',
          'HMB treatment: LNG-IUD (most effective medical option), tranexamic acid, NSAIDs, COC or progestogens.',
          'Pregnancy: iron needs rise sharply in the 2nd and 3rd trimesters. Check ferritin at booking and about 28 weeks. Treat ferritin <30. IV iron (from the 2nd trimester) if oral iron fails or repletion is needed quickly.',
        ],
      },
      {
        heading: 'Treatment',
        points: [
          'Oral: 60–100 mg elemental iron once daily or on alternate days (improves absorption because of hepcidin). Take away from tea, coffee, calcium and PPIs, optionally with vitamin C.',
          'Expect an Hb rise of about 20 g/L in 3–4 weeks. Continue for 3 months after Hb normalises to replenish stores.',
          'IV iron: intolerance or non-response to oral iron, malabsorption (IBD, coeliac, bariatric), ongoing losses, late pregnancy, CKD, active IBD. Ferric carboxymaltose can cause hypophosphataemia. Rare anaphylaxis. Skin staining with extravasation.',
          'IBD: iron deficiency is common. IV iron is preferred if the disease is active or Hb <100 g/L.',
        ],
      },
    ],
    redFlags: [
      'Iron deficiency in a man or postmenopausal woman: exclude GI malignancy.',
      'Iron deficiency with dysphagia, weight loss or GI bleeding.',
      'HMB with a bleeding history (epistaxis, post-dental bleeding): von Willebrand disease.',
      'Severe anaemia with cardiac symptoms: urgent transfusion assessment.',
    ],
    examTips: [
      'Know ferritin interpretation in inflammation.',
      'Alternate-day dosing and the Hb response timeline.',
      'Excessive milk in a toddler is a classic scenario.',
    ],
    mcqs: [
      {
        stem: 'An 18-month-old is pale and irritable. He drinks 1 L of cow\'s milk a day and eats little solid food. Hb 85 g/L, MCV 62, ferritin 4. What is the most appropriate management?',
        options: [
          'Blood transfusion',
          'Oral iron and reduce cow\'s milk to <500 mL/day with iron-rich foods',
          'Switch to goat\'s milk',
          'Haemoglobin electrophoresis only',
          'IV iron',
        ],
        answer: 1,
        explanation: 'Excess milk causes iron deficiency. Oral iron plus dietary correction is first line.',
      },
      {
        stem: 'A patient with active Crohn disease has CRP 45, Hb 108, ferritin 80, TSAT 12%. What is the best interpretation?',
        options: [
          'Iron replete',
          'Iron deficiency likely despite ferritin 80 because of inflammation',
          'Anaemia of chronic disease only',
          'Haemochromatosis',
          'B12 deficiency',
        ],
        answer: 1,
        explanation: 'In inflammation, ferritin <100 with low TSAT indicates iron deficiency. IV iron is preferred in active IBD.',
      },
      {
        stem: 'Which is the most effective medical treatment for heavy menstrual bleeding in a woman wanting contraception?',
        options: ['Tranexamic acid', 'Mefenamic acid', 'LNG-IUD (52 mg)', 'Norethisterone days 15–26', 'Copper IUD'],
        answer: 2,
        explanation: 'The LNG-IUD reduces menstrual blood loss by over 90%. A copper IUD can increase bleeding.',
      },
      {
        stem: 'A 65-year-old man has iron deficiency anaemia with no GI symptoms. Coeliac serology is negative. What is the next step?',
        options: ['Oral iron only', 'Gastroscopy and colonoscopy', 'iFOBT', 'Repeat bloods in 6 months', 'Dietary advice'],
        answer: 1,
        explanation: 'Unexplained IDA in older men needs bidirectional endoscopy to exclude malignancy.',
      },
      {
        stem: 'What is an evidence-based way to improve oral iron absorption and tolerability?',
        options: ['Take with breakfast tea', 'Twice-daily dosing', 'Alternate-day single dosing', 'Take with calcium', 'Take with a PPI'],
        answer: 2,
        explanation: 'Iron doses raise hepcidin for about 24 hours. Alternate-day dosing improves fractional absorption and reduces GI side effects.',
      },
    ],
    kfp: [
      {
        title: 'Virginia has heavy periods',
        scenario:
          'Virginia, 42, has had increasingly heavy periods for a year, flooding through pads and passing clots. She feels exhausted. Hb 98 g/L, MCV 72, ferritin 5.',
        questions: [
          {
            prompt: 'List the investigations you would arrange.',
            limit: 'Up to 4',
            answers: [
              'Pelvic (transvaginal) ultrasound',
              'TSH, pregnancy test',
              'Cervical screening if due; STI screen as indicated',
              'Coagulation screen / von Willebrand studies if bleeding history',
            ],
          },
          {
            prompt: 'Ultrasound shows a 3 cm intramural fibroid; cavity normal. List your management.',
            limit: 'Up to 4',
            answers: [
              'Iron replacement – oral (alternate day) or IV if intolerant/severe symptoms',
              'LNG-IUD (52 mg) as first-line medical treatment',
              'Tranexamic acid ± NSAID during menses as alternative/adjunct',
              'Gynaecology referral if medical treatment fails or larger/submucosal fibroid; endometrial sampling if risk factors',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '600',
    label: 'Unit 600',
    date: 'Dec 2022',
    title: 'Paediatric orthopaedics',
    specialty: 'Musculoskeletal & Sports',
    alsoRelevant: ['Paediatrics & Child Health'],
    topics: [
      'Adolescent idiopathic scoliosis and the Risser score',
      'Developmental dysplasia of the hip (DDH)',
      'Limp and hip or knee pain in children (Perthes, SUFE, septic arthritis)',
      'Flat feet: flexible vs rigid',
      'Gross motor delay',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2022/paediatric-orthopaedics',
    overview:
      'Children\'s musculoskeletal complaints are common and mostly benign, but some cannot be missed: septic arthritis, SUFE, DDH, malignancy and progressive scoliosis. Key GP skills are an age-based differential, examining the hip in any knee pain, choosing the right imaging, and knowing when to refer urgently.',
    sections: [
      {
        heading: 'Hip and knee pain by age',
        points: [
          '0–3 years: DDH, septic arthritis, toddler\'s fracture, non-accidental injury.',
          '3–10 years: transient synovitis (after a viral illness, well child), Perthes disease (4–8 years, boys, insidious limp).',
          '10–16 years: SUFE (overweight adolescent, hip OR knee pain, externally rotated leg). Also Osgood–Schlatter and patellofemoral pain.',
          'Knee pain in a child needs a hip examination. SUFE often presents with knee pain. Imaging for SUFE: AP pelvis + frog-leg lateral X-ray. If confirmed, non-weight-bearing and urgent orthopaedics.',
        ],
      },
      {
        heading: 'Septic arthritis vs transient synovitis',
        points: [
          'Kocher criteria: non-weight-bearing, fever >38.5 °C, ESR >40, WCC >12. The more criteria present, the higher the probability of septic arthritis. CRP >20 adds weight.',
          'Suspected septic joint: urgent ultrasound, aspiration and IV antibiotics. It is a surgical emergency.',
          'Transient synovitis: rest, NSAIDs, review in 24–48 hours. It resolves within 1–2 weeks.',
          'Night pain relieved by NSAIDs suggests osteoid osteoma. Night pain with systemic symptoms or a mass suggests malignancy (Ewing sarcoma, osteosarcoma, leukaemia).',
        ],
      },
      {
        heading: 'DDH and development',
        points: [
          'Risk factors: breech presentation (from 34 weeks), family history, female, firstborn, tight swaddling.',
          'Newborn to 3 months: Barlow (dislocatable) and Ortolani (reducible) tests. Older infants: limited abduction, leg length difference (Galeazzi), asymmetric creases.',
          'Hip ultrasound at about 6 weeks for risk factors or abnormal examination. X-ray after 4–6 months. Pavlik harness in early infancy.',
          'Gross motor delay (for example not rolling by 6 months, not sitting by 9 months, not walking by 18 months): assess tone, reflexes and CK (muscular dystrophy in boys). Refer to paediatrics or physiotherapy.',
        ],
      },
      {
        heading: 'Spine and feet',
        points: [
          'Scoliosis: Adam forward bend test shows a rib hump. Refer if scoliometer ≥7°. Standing PA whole-spine X-ray measures the Cobb angle (≥10° = scoliosis).',
          'The Risser score (0–5) grades ossification of the iliac apophysis. Low Risser means more growth remaining and a higher progression risk.',
          'Bracing for a 25–40° curve in a growing child. Surgery usually for >45–50°. Painful scoliosis, left thoracic curves or neurological signs need MRI.',
          'Flexible flatfoot (arch appears on tiptoe or with the Jack toe-raise test; heel inverts on tiptoe): reassure, no orthotics needed. Rigid or painful flatfoot (tarsal coalition): X-ray or CT and refer.',
        ],
      },
    ],
    redFlags: [
      'Febrile child who will not weight-bear: septic arthritis or osteomyelitis.',
      'Adolescent with hip or knee pain and limp: SUFE.',
      'Night pain, weight loss, a mass: bone tumour or leukaemia.',
      'Injury inconsistent with developmental stage or history: non-accidental injury.',
    ],
    examTips: [
      'Examine the hip in any child with knee pain. This is a classic AKT item.',
      'Know the Kocher criteria.',
      'Low Risser score means higher risk of progression.',
    ],
    mcqs: [
      {
        stem: 'A 13-year-old overweight boy has 3 weeks of left knee pain and a limp. His left hip has reduced internal rotation. What is the most appropriate investigation?',
        options: ['Knee MRI', 'AP pelvis and frog-leg lateral hip X-rays', 'Knee X-ray only', 'Bone scan', 'CRP only'],
        answer: 1,
        explanation: 'SUFE commonly refers pain to the knee. Frog-leg lateral views show the slip.',
      },
      {
        stem: 'A 5-year-old has a limp for 2 days after a cold. Afebrile, weight-bearing, mild restriction of hip rotation. CRP normal. What is the most likely diagnosis?',
        options: ['Septic arthritis', 'Transient synovitis', 'Perthes disease', 'SUFE', 'Osteosarcoma'],
        answer: 1,
        explanation: 'Transient synovitis: a well child after a viral illness with normal inflammatory markers. Review in 24–48 hours.',
      },
      {
        stem: 'A 12-year-old girl has a 22° right thoracic curve, is premenarchal and has a Risser score of 0. What does this indicate?',
        options: [
          'Skeletal maturity – no progression expected',
          'Significant growth remaining – high risk of curve progression; refer',
          'Needs immediate surgery',
          'Normal variant',
          'Requires MRI only',
        ],
        answer: 1,
        explanation: 'Risser 0 in a premenarchal girl indicates the maximum growth remaining. Bracing may be needed if the curve progresses.',
      },
      {
        stem: 'A 4-year-old has flat feet; the arch appears when standing on tiptoes. He is pain-free. What is the best management?',
        options: ['Custom orthotics', 'Reassurance – flexible flatfoot', 'X-ray feet', 'Refer to orthopaedic surgeon', 'Physiotherapy daily'],
        answer: 1,
        explanation: 'Flexible flatfoot is a normal variant in young children and needs no treatment.',
      },
      {
        stem: 'Which newborn examination test attempts to relocate a dislocated hip?',
        options: ['Barlow', 'Ortolani', 'Trendelenburg', 'Galeazzi', 'Thomas'],
        answer: 1,
        explanation: 'Ortolani relocates (abduction with anterior pressure). Barlow dislocates an unstable hip.',
      },
    ],
    kfp: [
      {
        title: 'Adrian has a sore left leg',
        scenario:
          'Adrian, 7, has had a limp and left thigh pain for 3 days, worse today. He has a temperature of 38.9 °C and refuses to weight-bear. He had a sore throat last week.',
        questions: [
          {
            prompt: 'List the most important differential diagnoses.',
            limit: 'Up to 4',
            answers: ['Septic arthritis of the hip', 'Osteomyelitis (femur/pelvis)', 'Transient synovitis', 'Malignancy (e.g. leukaemia, Ewing sarcoma)'],
          },
          {
            prompt: 'List the investigations and immediate management.',
            limit: 'Up to 4',
            answers: [
              'Urgent same-day referral to ED/paediatric orthopaedics',
              'FBC, ESR, CRP, blood cultures',
              'Hip ultrasound (effusion) ± X-ray; MRI if osteomyelitis suspected',
              'Joint aspiration and IV antibiotics if septic arthritis suspected',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '599',
    label: 'Unit 599',
    date: 'Nov 2022',
    title: 'Minor injuries',
    specialty: 'Musculoskeletal & Sports',
    alsoRelevant: ['Paediatrics & Child Health', 'Infectious Diseases', 'Dermatology'],
    topics: [
      'Tetanus prophylaxis for wounds',
      'Burns: first aid, TBSA estimation and referral',
      'Animal bites',
      'Pilonidal sinus',
      'Pulled elbow',
      'Cellulitis and the red foot',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2022/minor-injuries',
    overview:
      'Minor injuries are bread-and-butter general practice. GPs need clear rules for tetanus prophylaxis, burn first aid and referral, bite management and antibiotic prophylaxis. They should also recognise conditions such as pulled elbow and pilonidal disease.',
    sections: [
      {
        heading: 'Tetanus',
        points: [
          'Clean, minor wound: give a tetanus-containing vaccine if the person has had <3 doses or their status is unknown, or if ≥10 years since the last dose.',
          'Tetanus-prone wound (soil or manure, puncture, devitalised tissue, burns, delay >6 hours): give vaccine if ≥5 years since the last dose. Add tetanus immunoglobulin if they have had <3 doses or status is unknown.',
          'Complete the primary course later in people who are unvaccinated.',
          'Use dTpa or ADT per the Australian Immunisation Handbook.',
        ],
      },
      {
        heading: 'Burns',
        points: [
          'First aid: cool running water for 20 minutes (effective up to 3 hours after the burn). Remove jewellery. Cover with cling film. Do not use ice or butter.',
          'TBSA: rule of nines for adults. Lund–Browder chart for children (larger head, smaller legs). The patient\'s palm plus fingers is about 1%. Superficial (epidermal) burns are NOT counted.',
          'Refer to a burns unit: >10% TBSA in adults (>5% in children), full thickness >5%, face, hands, feet, genitals, perineum or major joints, circumferential, chemical or electrical, inhalation, suspected non-accidental injury, pregnancy, comorbidities.',
          'Depth: superficial (red, painful, no blisters), partial thickness (blisters, painful, cap refill present), full thickness (white or leathery, painless). Review within 48 hours because depth evolves.',
        ],
      },
      {
        heading: 'Bites',
        points: [
          'Irrigate and debride. Avoid primary closure of hand and puncture wounds. Facial wounds can usually be closed.',
          'Prophylactic amoxicillin–clavulanate for 3–5 days for high-risk bites: cat bites, hands, face, genitals, near joints, deep punctures, crush injuries, immunocompromised patients, delayed presentation.',
          'Cat bites and scratches: Pasteurella multocida (rapid cellulitis within 24 hours) and Bartonella. Check tetanus.',
          'Bat bites or scratches in Australia: risk of Australian bat lyssavirus. Give rabies vaccine ± immunoglobulin, and contact public health.',
        ],
      },
      {
        heading: 'Other presentations',
        points: [
          'Pilonidal sinus: natal cleft pits and abscesses. Risk factors: male, age 15–30, hirsute, obesity, prolonged sitting, deep natal cleft, family history. Abscess needs incision and drainage (off midline). Refer for definitive surgery. Hair removal reduces recurrence.',
          'Pulled elbow (radial head subluxation): age 1–4, after a pull on the arm. The child holds the arm slightly flexed and pronated and won\'t use it, with no swelling. Reduce with hyperpronation or supination–flexion. No X-ray needed if the story is typical.',
          'Red, hot foot: consider cellulitis (spreading erythema, fever), gout (first MTP joint), acute Charcot foot (diabetic neuropathy), DVT, and allergic reaction to an insect bite.',
          'Cellulitis: mark the borders. Use cephalexin or flucloxacillin, and treat tinea between the toes.',
        ],
      },
    ],
    redFlags: [
      'Burn pattern suggesting non-accidental injury (immersion, cigarette, clear demarcation).',
      'Hand bite with reduced finger movement: tendon sheath infection. Refer to hand surgery.',
      'Pulled elbow that does not reduce, or has swelling or bruising: X-ray for fracture.',
      'Rapidly spreading cellulitis with severe pain: necrotising fasciitis.',
    ],
    examTips: [
      'The tetanus rules (5 vs 10 years; immunoglobulin if <3 doses) are high-yield.',
      'Know the burns referral criteria and that superficial burns are excluded from TBSA.',
      'Cat bites always get antibiotic prophylaxis.',
    ],
    mcqs: [
      {
        stem: 'A 45-year-old gardener has a deep puncture wound contaminated with soil. His last tetanus booster was 7 years ago; he completed childhood vaccinations. What is required?',
        options: [
          'Nothing',
          'Tetanus-containing vaccine only',
          'Tetanus immunoglobulin only',
          'Vaccine plus immunoglobulin',
          'Antibiotics only',
        ],
        answer: 1,
        explanation: 'For a tetanus-prone wound, give a booster if ≥5 years since the last dose. Immunoglobulin is only needed with <3 doses or unknown status.',
      },
      {
        stem: 'A 3-year-old spilled hot tea on his chest and one arm, with blisters covering an area about 6 of his palms. What is the best next step after first aid?',
        options: [
          'Manage in GP with dressings',
          'Refer to a paediatric burns unit (>5% TBSA partial thickness)',
          'Apply ice packs',
          'Apply butter and review in a week',
          'Oral antibiotics',
        ],
        answer: 1,
        explanation: 'About 6% TBSA partial thickness in a child exceeds the 5% referral threshold.',
      },
      {
        stem: 'A 2-year-old won\'t use her right arm after her father swung her by the hands. The arm is held slightly flexed and pronated; no swelling or tenderness. What is the most appropriate management?',
        options: ['X-ray elbow', 'Reduce by hyperpronation or supination–flexion', 'Collar and cuff for 3 weeks', 'Refer to orthopaedics', 'Ultrasound'],
        answer: 1,
        explanation: 'A typical pulled elbow is reduced without imaging. The child usually uses the arm within minutes.',
      },
      {
        stem: 'A woman has a cat bite to the hand 4 hours ago. What is the most appropriate management?',
        options: [
          'Primary suture and no antibiotics',
          'Irrigate, leave open, amoxicillin–clavulanate prophylaxis, check tetanus',
          'Topical antibiotic only',
          'Rabies vaccine',
          'Cephalexin alone',
        ],
        answer: 1,
        explanation: 'Cat bites to the hand carry a high infection risk (Pasteurella). Amoxicillin–clavulanate covers the likely organisms.',
      },
      {
        stem: 'Which is a recognised risk factor for pilonidal disease?',
        options: ['Female sex', 'Age >60', 'Prolonged sitting and hirsutism', 'Underweight', 'Vegetarian diet'],
        answer: 2,
        explanation: 'Pilonidal disease is linked to young males, hair, obesity, a deep natal cleft and prolonged sitting.',
      },
    ],
    kfp: [
      {
        title: 'Raquel has been bitten by a dog',
        scenario:
          'Raquel, 34, was bitten on the dorsum of her right hand by a neighbour\'s dog 6 hours ago. There are two 1 cm puncture wounds over the 3rd MCP joint. She has type 1 diabetes. Tetanus status unknown.',
        questions: [
          {
            prompt: 'List the key elements of assessment.',
            limit: 'Up to 4',
            answers: [
              'Tendon function (flexion/extension) and neurovascular status',
              'Joint penetration (MCP) – consider X-ray for fracture/foreign body (tooth)',
              'Signs of infection',
              'Tetanus and vaccination history; immune status (diabetes)',
            ],
          },
          {
            prompt: 'List your management.',
            limit: 'Up to 5',
            answers: [
              'Irrigate and debride; do not suture puncture wound',
              'Amoxicillin–clavulanate prophylaxis 3–5 days',
              'Tetanus vaccine + tetanus immunoglobulin (unknown status, tetanus-prone)',
              'Elevation and review in 24 hours',
              'Refer to hand surgeon if joint involvement ("fight-bite"-type) or signs of infection',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '598',
    label: 'Unit 598',
    date: 'Oct 2022',
    title: 'Lifestyle',
    specialty: 'Preventive & Population Health',
    alsoRelevant: ['Mental Health', 'Addiction Medicine'],
    topics: [
      'Problem gambling: screening and support',
      'Social prescribing and loneliness',
      'Quantifying alcohol (standard drinks)',
      'Stress management',
      'Medication overuse and lifestyle-related headache',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2022/lifestyle',
    overview:
      'Lifestyle factors such as stress, alcohol, gambling and loneliness underlie many general practice presentations. GPs can raise sensitive topics without judgement, measure risk accurately (for example standard drinks), and use community resources through social prescribing and specialist services.',
    sections: [
      {
        heading: 'Gambling',
        points: [
          'Gambling harm is common and hidden. It is associated with depression, suicide, family violence, financial crisis and relationship breakdown.',
          'Brief screen (Lie/Bet): "Have you ever felt the need to bet more and more money?" and "Have you ever had to lie to people important to you about how much you gambled?" A full assessment uses the PGSI.',
          'Support: Gambling Help (1800 858 858, Gambling Help Online), financial counselling, CBT, BetStop (the national online wagering self-exclusion register), and family support.',
          'Screen for co-occurring depression, alcohol use and suicide risk.',
        ],
      },
      {
        heading: 'Alcohol quantification',
        points: [
          'A standard drink is 10 g of alcohol. Standard drinks = volume (L) × % ABV × 0.789.',
          'Examples: a 750 mL bottle of 13.5% wine ≈ 8 standard drinks. A 375 mL can of full-strength beer (4.8%) ≈ 1.4. A 700 mL bottle of spirits (40%) ≈ 22.',
          'NHMRC guideline: no more than 10 standard drinks a week and no more than 4 on any day for healthy adults. None in pregnancy, while breastfeeding, or under 18.',
          'Use AUDIT-C to screen and give brief advice (FRAMES: Feedback, Responsibility, Advice, Menu, Empathy, Self-efficacy).',
        ],
      },
      {
        heading: 'Social prescribing',
        points: [
          'Linking patients to non-medical community supports: arts, exercise, volunteering, men\'s sheds, gardening groups, cultural activities.',
          'Demonstrated benefits: improved wellbeing and self-esteem, reduced loneliness, anxiety and depression, and fewer GP and ED visits.',
          'A link worker or community navigator improves uptake. Follow up at review visits.',
          'Loneliness is a major health risk comparable to smoking and obesity.',
        ],
      },
      {
        heading: 'Stress and headache',
        points: [
          'Stress: assess sources, sleep, alcohol and caffeine, and mood. Use problem-solving, relaxation and mindfulness, exercise, and workplace changes. Psychology via a Mental Health Treatment Plan if needed.',
          'Medication overuse headache: simple analgesics ≥15 days a month, or triptans, codeine or combination analgesics ≥10 days a month, for more than 3 months.',
          'MOH management: withdraw the overused medicine (abrupt for simple analgesics, taper opioids), start preventive therapy (amitriptyline, propranolol, candesartan, topiramate), and keep a headache diary.',
          'Other lifestyle headache triggers: caffeine withdrawal, sleep deprivation, dehydration, skipped meals, alcohol.',
        ],
      },
    ],
    redFlags: [
      'Gambling with suicidal ideation, which is common in severe gambling harm.',
      'Headache red flags: thunderclap onset, neurological deficit, papilloedema, new headache over 50, systemic symptoms.',
      'Alcohol withdrawal risk when someone stops heavy drinking abruptly.',
      'Financial abuse or family violence linked to gambling.',
    ],
    examTips: [
      'Be able to calculate standard drinks quickly. It is examined.',
      'Know the medication overuse headache day thresholds (10 vs 15).',
      'Name specific resources (Gambling Help, BetStop).',
    ],
    mcqs: [
      {
        stem: 'A man drinks a 750 mL bottle of 14% wine each night. Approximately how many standard drinks is this per week?',
        options: ['20', '35', '58', '70', '100'],
        answer: 2,
        explanation: '0.75 × 14 × 0.789 ≈ 8.3 standard drinks a night, or about 58 a week.',
      },
      {
        stem: 'A woman has daily headaches and takes paracetamol–codeine most days for 6 months. What is the most likely diagnosis?',
        options: ['Chronic migraine only', 'Medication overuse headache', 'Cluster headache', 'Idiopathic intracranial hypertension', 'Temporal arteritis'],
        answer: 1,
        explanation: 'Codeine-containing combination analgesics on ≥10 days a month for more than 3 months cause MOH.',
      },
      {
        stem: 'Which brief screening questions are used for problem gambling?',
        options: ['CAGE', 'Lie/Bet questionnaire', 'AUDIT-C', 'PHQ-2', 'SCOFF'],
        answer: 1,
        explanation: 'The Lie/Bet questionnaire is a validated 2-item screen.',
      },
      {
        stem: 'What is the NHMRC alcohol guideline for healthy adults?',
        options: [
          'No more than 2 drinks per day',
          'No more than 10 standard drinks per week and 4 on any one day',
          'No more than 14 per week',
          'No more than 6 per day',
          'No safe limit exists; abstain',
        ],
        answer: 1,
        explanation: 'The 2020 guideline: ≤10 per week and ≤4 on any day to reduce lifetime and injury risk.',
      },
      {
        stem: 'A socially isolated 75-year-old man asks for help feeling lonely. Which intervention best fits "social prescribing"?',
        options: ['Sertraline', 'Referral via link worker to a local men\'s shed', 'Benzodiazepine', 'Psychiatry referral', 'Holter monitor'],
        answer: 1,
        explanation: 'Social prescribing connects people to community activities that address loneliness.',
      },
    ],
    kfp: [
      {
        title: 'Janice\'s stress is increasing',
        scenario:
          'Janice, 48, is stressed and sleeping poorly. She mentions money is tight and she has "been playing the pokies a bit more" since her divorce. She has borrowed from her sister and hidden this from her.',
        questions: [
          {
            prompt: 'List the key areas to assess.',
            limit: 'Up to 5',
            answers: [
              'Gambling severity (Lie/Bet, PGSI) – frequency, losses, chasing',
              'Depression and suicide risk',
              'Alcohol and other substance use',
              'Financial situation, debts, housing, family impact',
              'Family violence / safety and social supports',
            ],
          },
          {
            prompt: 'List your management.',
            limit: 'Up to 4',
            answers: [
              'Refer to Gambling Help (1800 858 858) / gambling counselling (CBT)',
              'Financial counselling',
              'Self-exclusion (venue exclusion, BetStop for online), limit cash access',
              'Mental Health Treatment Plan and follow-up; sleep hygiene/CBT-i',
            ],
          },
        ],
      },
    ],
  },
]

export default units
