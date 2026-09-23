import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  '600': {
    sections: [
      {
        heading: 'Approach to the limping child',
        points: [
          'History: onset (acute or gradual), trauma (witnessed or not), fever or systemic symptoms, pain location (the child may point to the knee for hip pathology), night pain, recent illness, developmental history, and safeguarding concerns.',
          'Examination: observe gait (antalgic, Trendelenburg, toe-walking), look for swelling, warmth and skin changes, examine every joint including the spine and abdomen, check neurovascular status, and measure leg lengths.',
          'Always examine the hip in a child with thigh or knee pain. Internal rotation is lost early in hip pathology.',
          'Red flags: fever, inability to weight-bear, night pain, systemic illness (weight loss, pallor, bruising), bony tenderness, and an unexplained injury in a non-mobile child.',
          'Investigations according to suspicion: FBC, CRP/ESR and blood cultures (infection), X-rays (two views; frog-leg lateral for SUFE), ultrasound (effusion), and MRI (osteomyelitis, occult fracture, tumour).',
          'Toddler\'s fracture: a spiral undisplaced tibial fracture after a minor twist in a 1–3-year-old who refuses to weight-bear. Initial X-ray may be normal, so repeat at 7–10 days.',
        ],
      },
      {
        heading: 'Developmental dysplasia of the hip in detail',
        points: [
          'The spectrum ranges from mild acetabular dysplasia to a dislocated hip. Early detection allows simple treatment. Late diagnosis leads to surgery and early arthritis.',
          'Risk factors: breech presentation after 34 weeks (even with external version), family history, female sex, firstborn, oligohydramnios, other packaging deformities (torticollis, foot deformities), and tight swaddling with legs straight.',
          'Examine at birth, 6–8 weeks, then at routine checks until walking: Barlow and Ortolani tests (valid until about 3 months), limited abduction (the most reliable sign after 3 months), leg length discrepancy (Galeazzi sign), asymmetric skin folds, and a waddling or limping gait after walking age.',
          'Ultrasound at 6 weeks for risk factors (or earlier if the examination is abnormal). After 4–6 months, use an AP pelvis X-ray (the femoral head ossifies).',
          'Treatment: Pavlik harness (under 6 months) for 6–12 weeks, closed reduction and spica cast (6–18 months), and open surgery for later diagnosis.',
          'Hip-healthy swaddling: legs free to bend up and out at the hips.',
        ],
      },
      {
        heading: 'Perthes disease and SUFE',
        points: [
          'Perthes disease (idiopathic avascular necrosis of the femoral head): age 4–8, boys more often, insidious limp with hip, thigh or knee pain, reduced abduction and internal rotation. X-ray shows sclerosis, flattening and fragmentation. MRI detects it early.',
          'Perthes management: orthopaedic referral, activity modification and physiotherapy. Surgery for older children or more extensive involvement. Prognosis is better in younger children.',
          'SUFE (slipped upper femoral epiphysis): age 10–16, obesity, boys, endocrine disorders (hypothyroidism, growth hormone therapy, renal osteodystrophy). Hip, groin, thigh or knee pain with a limp. The leg is externally rotated, and the hip rotates externally on flexion.',
          'SUFE is urgent: stop weight-bearing (crutches or wheelchair) and refer the same day for surgical pinning. An unstable slip risks avascular necrosis. Check the other hip, which is affected in about 20–40%.',
          'Imaging for SUFE: AP pelvis plus frog-leg lateral views of both hips. Klein\'s line fails to intersect the epiphysis.',
        ],
      },
      {
        heading: 'Knee pain in children and adolescents',
        points: [
          'Osgood–Schlatter disease: a painful lump over the tibial tuberosity in active adolescents (10–15). Load management, ice, quadriceps and hamstring stretching. Self-limiting over months.',
          'Sinding-Larsen–Johansson: the same process at the inferior pole of the patella.',
          'Patellofemoral pain: anterior knee pain with stairs, squatting and prolonged sitting. Hip and quadriceps strengthening, load management and taping.',
          'Patellar dislocation: twisting injury, lateral displacement, and often spontaneous reduction. X-ray for osteochondral fragments. Physiotherapy, and surgery if recurrent.',
          'Osteochondritis dissecans: activity-related pain, swelling or locking. X-ray (tunnel view) or MRI. Refer.',
          'Red flags: night pain, a mass or swelling, systemic symptoms (bone tumours, leukaemia), hip pathology (SUFE, Perthes) referring pain to the knee, and a hot swollen joint (septic arthritis).',
        ],
      },
      {
        heading: 'Scoliosis in detail',
        points: [
          'Adolescent idiopathic scoliosis is the commonest type. It affects about 2–3% of adolescents, and progressive curves are more common in girls.',
          'Examination: shoulder and scapular asymmetry, waist asymmetry, trunk shift, and a rib hump on the Adam forward bend test. A scoliometer reading of 7° or more suggests a Cobb angle of about 20° or more and warrants X-ray.',
          'Standing PA and lateral full-spine X-ray: measure the Cobb angle (10° or more is scoliosis) and assess skeletal maturity (Risser 0–5, triradiate cartilage).',
          'Risk of progression is highest with a large curve, low Risser grade (0–1), being premenarchal, and during the peak growth spurt.',
          'Management by curve and maturity: observe with periodic X-rays (under 25°), bracing in growing children (about 25–40°, worn for many hours a day), and surgery (spinal fusion, usually over 45–50°).',
          'Atypical features needing MRI: pain, a left thoracic curve, rapid progression, neurological signs, early onset (under 10), and skin stigmata (café-au-lait spots, hairy patch).',
        ],
      },
      {
        heading: 'Feet and normal variants',
        points: [
          'Flexible flatfoot: the arch appears on tiptoe and with the Jack test (great toe dorsiflexion), and the heel moves into varus on tiptoe. It is common and normal until about 6–8 years. No orthotics needed if painless.',
          'Rigid flatfoot: no arch on tiptoe and restricted subtalar movement. Consider tarsal coalition (adolescents with recurrent sprains or pain), neuromuscular disease or inflammatory arthritis. X-ray or CT and refer.',
          'In-toeing: metatarsus adductus (infants, often resolves), internal tibial torsion (toddlers, resolves by 4–5), femoral anteversion (children who sit in a "W" position, resolves by 8–10). Reassure unless severe, asymmetric or painful.',
          'Bow legs (genu varum) are normal under 2 years. Knock knees (genu valgum) are normal between 3 and 7. Refer if severe, asymmetric, painful or persistent outside these ages, or in a short child (rickets, Blount disease).',
          'Toe-walking: idiopathic toe-walking is common up to 3. Persistent or asymmetric toe-walking needs neurological assessment (cerebral palsy, muscular dystrophy, autism).',
          'Clubfoot (talipes equinovarus) at birth: Ponseti casting soon after birth.',
        ],
      },
      {
        heading: 'Motor delay in infants',
        points: [
          'Milestones (upper limits): head control by 4 months, rolling by 6 months, sitting unsupported by 9 months, standing with support by 12 months, walking independently by 18 months.',
          'Assess tone (hypotonia or hypertonia), reflexes, strength, asymmetry, head circumference and dysmorphic features. Ask about pregnancy, birth, family history and regression.',
          'Hypotonic infant: central causes (cerebral palsy, genetic syndromes such as Down syndrome or Prader–Willi, metabolic disorders) vs peripheral causes (spinal muscular atrophy, congenital myopathies, myasthenia). Weakness with absent reflexes suggests a peripheral cause.',
          'Spinal muscular atrophy (SMA): progressive weakness, absent reflexes, tongue fasciculations, preserved alertness. Newborn screening now includes SMA in Australia, and early treatment (nusinersen, gene therapy) dramatically improves outcomes.',
          'Boys who walk late or have a Gowers sign: check CK (Duchenne muscular dystrophy).',
          'Refer early to paediatrics and physiotherapy. Early intervention and NDIS supports matter.',
        ],
      },
    ],
    keyNumbers: [
      'Kocher criteria: NWB, fever >38.5 °C, ESR >40, WCC >12',
      'DDH ultrasound ~6 weeks; X-ray after 4–6 months',
      'Barlow/Ortolani valid until ~3 months',
      'Perthes 4–8 years; SUFE 10–16 years',
      'SUFE: bilateral in 20–40%',
      'Scoliometer ≥7° → X-ray; Cobb ≥10° = scoliosis',
      'Bracing ~25–40°; surgery >45–50°',
      'Walking by 18 months; sitting by 9 months',
    ],
    workedCase: {
      title: 'Chloe has an asymmetrical shoulder',
      paragraphs: [
        'Chloe, 11, is brought by her mother, who noticed that one shoulder blade sticks out when Chloe wears a swimsuit. Chloe has no pain. She has not started her periods and has grown 8 cm in the last year. Her aunt had "a curved spine".',
        'Examination shows a right thoracic prominence on forward bending, with a scoliometer reading of 11°, shoulder asymmetry, and a normal neurological exam, skin and gait.',
        'You arrange a standing PA and lateral full-spine X-ray. It shows a 28° right thoracic curve with Risser grade 0, meaning significant growth remains and a high risk of progression.',
        'You refer her to a paediatric spinal orthopaedic surgeon. She is fitted with a brace to be worn 18–20 hours a day and has physiotherapy. You support her psychologically (body image, school, adherence) and arrange review of the X-ray every 4–6 months. Two years later, at skeletal maturity, her curve is stable at 30°.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Limping child',
        lead: 'Choose the SINGLE most likely diagnosis for each child.',
        options: [
          'Transient synovitis',
          'Septic arthritis',
          'Perthes disease',
          'Slipped upper femoral epiphysis',
          'Developmental dysplasia of the hip',
          'Toddler\'s fracture',
          'Osgood–Schlatter disease',
          'Acute lymphoblastic leukaemia',
        ],
        items: [
          { stem: 'A 2-year-old who refuses to walk after twisting while running; tender distal tibia; X-ray normal.', answer: 5 },
          { stem: 'A 6-year-old boy with a painless limp for 6 weeks and reduced hip abduction; afebrile.', answer: 2 },
          { stem: 'A 4-year-old with limp, pallor, bruising, bone pain at night and hepatosplenomegaly.', answer: 7 },
          { stem: 'A 13-year-old athlete with a painful bump below the kneecap.', answer: 6 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Petru has a sore knee',
        scenario:
          'Petru, 12, has had left knee pain and a limp for 4 weeks. It started after football. He is overweight (BMI above the 97th centile). He is afebrile. Knee examination is normal. When you flex his left hip, it rotates outward, and internal rotation is reduced.',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the most likely diagnosis?',
            options: ['Osgood–Schlatter disease', 'Slipped upper femoral epiphysis', 'Meniscal tear', 'Perthes disease', 'Patellofemoral pain'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO imaging requests are most appropriate?',
            options: ['AP pelvis X-ray', 'Frog-leg lateral X-rays of both hips', 'Knee MRI', 'Knee X-ray only', 'Bone scan', 'Ultrasound of the knee'],
            answers: [0, 1],
          },
          {
            kind: 'sba',
            context: 'X-rays confirm a left SUFE.',
            stem: 'What is the most appropriate immediate management?',
            options: [
              'Physiotherapy and review in 4 weeks',
              'Non-weight-bearing (crutches or wheelchair) and same-day orthopaedic referral',
              'NSAIDs and continue sport',
              'Weight loss before any referral',
              'Knee brace',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO further issues should you consider?',
            options: [
              'The contralateral hip may also slip – monitor or treat as advised',
              'Screen for endocrine associations if atypical (e.g. hypothyroidism) and address obesity',
              'All SUFEs are caused by child abuse',
              'He should never play sport again',
              'Antibiotics are needed',
            ],
            answers: [0, 1],
          },
          {
            kind: 'emq',
            theme: 'Knee pain referral patterns',
            lead: 'Choose the SINGLE most appropriate management for each child.',
            options: [
              'Reassure, load management and stretching',
              'Urgent same-day orthopaedic referral',
              'Urgent aspiration and IV antibiotics',
              'Hip ultrasound and review in 24–48 hours',
              'Physiotherapy for strengthening',
            ],
            items: [
              { stem: 'A 12-year-old basketballer with tibial tuberosity pain and swelling', answer: 0 },
              { stem: 'A 5-year-old with a limp after a cold, afebrile, normal bloods, mild hip effusion', answer: 3 },
              { stem: 'A 7-year-old with fever 39.2 °C who cannot weight-bear, CRP 110', answer: 2 },
            ],
          },
        ],
      },
    ],
  },
  '599': {
    sections: [
      {
        heading: 'Wound assessment and closure',
        points: [
          'History: mechanism (clean cut, crush, bite, high-pressure injection), time since injury, contamination, foreign body, tetanus status, and comorbidities (diabetes, immunosuppression, anticoagulation).',
          'Examination: size, depth, contamination and devitalised tissue, plus distal neurovascular function and tendon function (test against resistance). Examine through the full range of movement.',
          'Consider X-ray (glass or metal foreign bodies, fractures) or ultrasound (wood or plastic).',
          'Closure options: primary closure for clean wounds within about 12 hours (up to 24 for the face). Delayed primary closure for contaminated wounds. Healing by secondary intention for heavily contaminated wounds or punctures.',
          'Methods: sutures, adhesive strips, tissue glue (small, low-tension, clean wounds), staples (scalp). Suture removal: face 3–5 days, scalp 7 days, trunk 7–10 days, limbs 10–14 days, over joints 14 days.',
          'Refer: tendon, nerve or vessel injury, high-pressure injection injuries (surgical emergency), complex facial or lip wounds crossing the vermilion border, and extensive or heavily contaminated wounds.',
        ],
      },
      {
        heading: 'Tetanus in more detail',
        points: [
          'Clostridium tetani spores are found in soil, dust and animal faeces. The toxin causes muscle rigidity and spasms (lockjaw, opisthotonus). Mortality is significant even with ICU care.',
          'Most Australian cases occur in older adults who are incompletely vaccinated or whose immunity has waned.',
          'Tetanus-prone wounds: contaminated with soil or manure, puncture wounds, devitalised tissue, burns or frostbite, compound fractures, bites, and delay over 6 hours before treatment.',
          'Primary course: 3 doses in childhood (plus boosters). Adults with an unknown or incomplete history should complete a 3-dose course (0, 1 month, 6 months).',
          'Tetanus immunoglobulin (250 IU IM, or 500 IU if more than 24 hours old or heavily contaminated) is for tetanus-prone wounds in people with fewer than 3 doses or unknown status, and in the significantly immunocompromised. Give it at a different site from the vaccine.',
          'An adult dTpa booster at 50 is recommended if the last dose was more than 10 years ago, and at 65.',
        ],
      },
      {
        heading: 'Burns assessment and management',
        points: [
          'First aid: cool running water for 20 minutes (up to 3 hours after the burn), remove clothing and jewellery (unless stuck), cover with cling film, keep the patient warm, and give analgesia. No ice, butter or toothpaste.',
          'Depth: superficial (epidermal): red, painful, no blisters, like sunburn, heals in about 7 days. Superficial partial thickness: pink, blistered, painful, brisk capillary refill, heals in 10–14 days. Deep partial thickness: blotchy red or white, less painful, sluggish refill, needs specialist care. Full thickness: white, leathery or charred, painless, needs grafting.',
          'TBSA: rule of nines in adults (head 9%, each arm 9%, front of trunk 18%, back 18%, each leg 18%, perineum 1%), Lund–Browder chart in children, or the patient\'s palm with fingers (about 1%) for small or patchy burns.',
          'GP management of small superficial partial thickness burns: gentle cleaning, deroof large or tense blisters (practice varies), non-adherent or silver dressings, review at 48 hours and every 2–3 days. Refer if not healed by 10–14 days (scar risk).',
          'Burns unit referral criteria include TBSA over 10% in adults or 5% in children, full thickness over 5%, special areas (face, hands, feet, genitals, perineum, major joints), circumferential burns, electrical, chemical, inhalation, suspected non-accidental injury, and pregnancy.',
          'Tetanus prophylaxis and analgesia. Watch for infection (increasing pain, redness, fever) and toxic shock syndrome in children with small burns (fever, rash, diarrhoea, which is an emergency).',
        ],
      },
      {
        heading: 'Animal and human bites',
        points: [
          'Dogs: crush and tear injuries. Infection risk is about 5–15%. Cats: deep punctures with about 30–50% infection risk, often rapid (Pasteurella multocida within 24 hours).',
          'Human bites and "fight bites" (a clenched fist hitting teeth over the MCP joint): high infection risk and joint penetration. Refer to a hand surgeon for washout. Consider HBV, HCV and HIV exposure.',
          'Management: thorough irrigation, debridement, and leave puncture wounds open. Primary closure is reasonable for clean facial wounds (for cosmetic reasons), with close review.',
          'Antibiotic prophylaxis (amoxicillin–clavulanate for 3–5 days): cat bites, hand, foot or genital bites, punctures, crush injuries, delayed presentation (over 8 hours), immunocompromised patients, asplenia, and wounds near joints or prostheses. For penicillin allergy, per Therapeutic Guidelines (for example doxycycline plus metronidazole).',
          'Infected bites: amoxicillin–clavulanate. IV therapy if spreading, if the patient is systemically unwell, or with tendon sheath infection (Kanavel signs).',
          'Bats: any bite or scratch from an Australian bat carries a risk of Australian bat lyssavirus. Wash, give rabies vaccine ± immunoglobulin, and contact public health. Overseas mammal bites need a rabies risk assessment.',
        ],
      },
      {
        heading: 'Pilonidal disease',
        points: [
          'Hair and debris penetrate the skin of the natal cleft and form sinus tracts and abscesses. Hair is the main driver.',
          'Risk factors: male sex, age 15–30, hirsutism, obesity, a deep natal cleft, prolonged sitting (drivers, students), poor hygiene, and family history.',
          'Presentation: midline pits, a painful swelling or abscess, or chronic discharging sinuses.',
          'An acute abscess needs incision and drainage, preferably off the midline. Antibiotics only for cellulitis or systemic symptoms.',
          'Chronic or recurrent disease: surgical options (minimally invasive pit-picking, off-midline flap procedures). Recurrence rates vary with technique.',
          'Prevention: hair removal (laser is most effective, or shaving or depilatory creams), hygiene, weight loss, and avoiding prolonged sitting.',
        ],
      },
      {
        heading: 'Common soft tissue and minor fractures',
        points: [
          'Pulled elbow (nursemaid\'s elbow): ages 1–4, after a traction injury. The child holds the arm still and pronated, with no swelling. Reduce by hyperpronation (higher success) or supination–flexion. The child should use the arm within 15–30 minutes. X-ray if atypical or not reducing.',
          'Buckle (torus) fractures of the distal radius in children: stable, managed with a removable splint for about 3 weeks. No follow-up X-ray is needed.',
          'Clavicle fractures: sling for comfort, early movement. Refer if displaced with skin tenting, open, or neurovascular compromise.',
          'Finger injuries: mallet finger (extension splint for 6–8 weeks continuously), subungual haematoma (trephine if painful), nail bed injuries, and fingertip amputations (refer).',
          'Scaphoid injury: tenderness in the anatomical snuffbox after a fall on an outstretched hand. Immobilise and arrange scaphoid-view X-rays, then repeat X-ray or MRI if initially normal (risk of avascular necrosis).',
          'The red, hot foot: cellulitis (spreading erythema, tender, fever), gout (1st MTP), acute Charcot foot (diabetic neuropathy), DVT, septic arthritis. Mark cellulitis borders and treat the interdigital tinea portal of entry.',
        ],
      },
    ],
    keyNumbers: [
      'Tetanus: clean wound booster if ≥10 years; tetanus-prone if ≥5 years',
      'TIG if <3 doses or unknown (tetanus-prone): 250 IU IM',
      'Cool burns: running water 20 min (within 3 h)',
      'Burns unit: >10% TBSA adults, >5% children',
      'Palm + fingers ≈ 1% TBSA',
      'Bite prophylaxis: amoxicillin–clavulanate 3–5 days',
      'Suture removal: face 3–5 d, scalp 7 d, limbs 10–14 d',
      'Pulled elbow: ages 1–4; reduce by hyperpronation',
      'Mallet finger: continuous splint 6–8 weeks',
    ],
    workedCase: {
      title: 'Jacob has a burn injury',
      paragraphs: [
        'Jacob, 3, pulled a cup of hot tea off the bench 30 minutes ago. His mother ran cold water over him for 5 minutes. He has blistered, pink, painful areas on his right forearm and upper chest, about 4 of his palms in total. His face is spared.',
        'You continue cooling with running water for a further 15 minutes (effective up to 3 hours) and give paracetamol and ibuprofen. The burn looks superficial partial thickness, about 4% TBSA (below the 5% threshold for children). But you note that the chest and arm are near the neck, and you consider the mechanism and supervision.',
        'The history is consistent: an accidental spill, a pattern with drip marks, and a prompt presentation, with no concerning features for non-accidental injury. After discussion with the paediatric burns unit (they are happy for GP management with review), you clean the wound, apply a silver-impregnated non-adherent dressing, and check his immunisations (up to date).',
        'At review at 48 hours and on day 5, it is healing well. You counsel on kitchen safety (keep hot drinks out of reach, kettle cords back). At 12 days it has healed. You advise sun protection and moisturiser for the new skin, and review for scarring.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Tetanus prophylaxis',
        lead: 'Choose the SINGLE correct tetanus management for each patient.',
        options: [
          'No tetanus vaccine or immunoglobulin needed',
          'Tetanus-containing vaccine only',
          'Tetanus immunoglobulin only',
          'Tetanus-containing vaccine plus tetanus immunoglobulin',
          'Complete primary course only, no dose today',
        ],
        items: [
          { stem: 'A clean kitchen knife cut in a 30-year-old whose last booster was 4 years ago.', answer: 0 },
          { stem: 'A soil-contaminated garden fork puncture in a 40-year-old whose last booster was 7 years ago (fully vaccinated as a child).', answer: 1 },
          { stem: 'A rusty nail puncture in a 70-year-old refugee with no known vaccinations.', answer: 3 },
          { stem: 'A clean paper-cutter laceration in a 55-year-old whose last booster was 12 years ago.', answer: 1 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Pearl has a red foot',
        scenario:
          'Pearl, 68, has type 2 diabetes with peripheral neuropathy. Her left foot has been red, warm and swollen for 5 days. She recalls no injury. She is afebrile and feels well. There is no ulcer. The foot is warm (4 °C warmer than the right), with a mild arch collapse. Foot pulses are present.',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the most important diagnosis to consider?',
            options: ['Cellulitis', 'Acute Charcot neuroarthropathy', 'Gout', 'DVT', 'Plantar fasciitis'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO investigations are most useful?',
            options: ['Foot X-ray (weight-bearing)', 'MRI of the foot', 'Serum urate only', 'D-dimer only', 'Nerve conduction studies', 'ESR only'],
            answers: [0, 1],
          },
          {
            kind: 'sba',
            stem: 'What is the most important immediate management?',
            options: [
              'Oral antibiotics for 10 days',
              'Offloading and immobilisation (non-weight-bearing / total contact cast) with urgent high-risk foot service referral',
              'Colchicine',
              'Physiotherapy to keep walking',
              'Compression stockings',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO features help distinguish Charcot foot from cellulitis?',
            options: [
              'Redness that reduces with elevation of the leg for a few minutes (Charcot)',
              'No portal of entry, fever or raised inflammatory markers',
              'Presence of a deep ulcer probing to bone',
              'Severe pain in a neuropathic foot',
              'Rapidly spreading erythema up the leg',
            ],
            answers: [0, 1],
          },
          {
            kind: 'emq',
            theme: 'Foot problems in diabetes',
            lead: 'Choose the SINGLE most likely diagnosis for each presentation.',
            options: ['Cellulitis', 'Acute Charcot foot', 'Osteomyelitis', 'Gout', 'Critical limb ischaemia', 'Neuropathic ulcer'],
            items: [
              { stem: 'A painless ulcer under the 1st metatarsal head with callus, good pulses', answer: 5 },
              { stem: 'An ulcer where a probe touches bone and ESR is 90', answer: 2 },
              { stem: 'Rest pain at night relieved by hanging the leg over the bed, absent pulses', answer: 4 },
            ],
          },
        ],
      },
    ],
  },
  '598': {
    sections: [
      {
        heading: 'Gambling harm: scope and impact',
        points: [
          'Australians have the highest per-capita gambling losses in the world, driven largely by poker machines ("pokies") and online sports betting.',
          'Gambling harm is a spectrum. Most harm occurs in people with low to moderate risk, not only those with gambling disorder.',
          'Harms: financial (debt, bankruptcy, loss of housing), relationship breakdown, family violence, child neglect, depression, anxiety, suicide, crime, and work problems.',
          'At-risk groups: young men (sports betting), people with mental illness or substance use, people with ADHD, those on dopamine agonists (Parkinson disease, restless legs), and some culturally diverse communities.',
          'Affected others (partners, children) experience significant harm. Offer them support too.',
        ],
      },
      {
        heading: 'Raising gambling sensitively',
        points: [
          'Normalise and ask routinely, especially with depression, anxiety, financial stress, substance use or family violence: "Many people gamble. Do you ever bet on pokies, sports or online?"',
          'Brief screens: Lie/Bet questions, PGSI short forms (PGSI-3). A score of 8 or more on the full PGSI indicates problem gambling.',
          'Explore: frequency, losses relative to income, chasing losses, borrowing, hiding gambling, effects on family and work, and failed attempts to cut back.',
          'Avoid judgement. Shame is a major barrier. Emphasise that help is available and effective.',
          'Check suicide risk. Rates are elevated among people with gambling problems.',
        ],
      },
      {
        heading: 'Support and treatment for gambling',
        points: [
          'Gambling Help Online and phone (1800 858 858): free, 24/7 counselling for gamblers and affected others, with face-to-face services in each state.',
          'CBT (identifying cognitive distortions such as the "gambler\'s fallacy", managing urges and triggers) and motivational interviewing are effective.',
          'Practical barriers: venue self-exclusion programs, BetStop (the national online wagering self-exclusion register), bank gambling blocks on cards, limiting cash access, and letting a trusted person manage finances temporarily.',
          'Financial counselling (free through the National Debt Helpline, 1800 007 007), and legal help.',
          'Treat comorbidities: depression, anxiety, alcohol, ADHD. Review dopamine agonists with the prescriber if gambling started after they were introduced. Naltrexone has some evidence for reducing urges.',
          'Peer support: Gamblers Anonymous and SMART Recovery.',
        ],
      },
      {
        heading: 'Quantifying and reducing alcohol',
        points: [
          'A standard drink is 10 g of pure alcohol. Labels list the number of standard drinks on Australian products.',
          'Formula: volume (L) × ABV (%) × 0.789 = standard drinks. For example 375 mL beer at 4.8% = 0.375 × 4.8 × 0.789 ≈ 1.4.',
          'Typical pours: a restaurant glass of wine (150 mL at 13%) is about 1.5 standard drinks. A home pour is often larger. A schooner of full-strength beer (425 mL) is about 1.6.',
          'Use a drinking diary for a typical week (for example the "typical day" and "heaviest day"), and AUDIT-C or AUDIT.',
          'Brief intervention: give personalised feedback (for example "Your drinking is about 40 drinks a week, 4 times the guideline"), explore the pros and cons of change, set goals (alcohol-free days, lower-strength drinks, smaller glasses), and review.',
          'Consider liver function, BP, mood and sleep, and screen for dependence and withdrawal risk before advising abrupt cessation.',
        ],
      },
      {
        heading: 'Loneliness and social prescribing',
        points: [
          'Loneliness is a subjective sense of lacking connection. Social isolation is an objective lack of contacts. Both increase the risk of CVD, stroke, depression, dementia and death.',
          'Life transitions that trigger loneliness: bereavement, retirement, moving, divorce, becoming a carer, illness or disability, migration.',
          'Social prescribing uses a link worker or community connector to match people with activities based on their interests: men\'s sheds, walking groups, choirs, art classes, volunteering, community gardens and cultural groups.',
          'Evidence shows improved wellbeing, reduced loneliness and reduced GP visits in some programs. Australian pilots are expanding (RACGP and Consumers Health Forum support).',
          'Practical steps: ask about connection, know local services (council directories, community centres), make warm referrals, and follow up.',
        ],
      },
      {
        heading: 'Stress, headache and medication overuse',
        points: [
          'Stress presentations: tension headaches, insomnia, palpitations, GI symptoms, fatigue, irritability and increased alcohol use.',
          'Tension-type headache: bilateral, pressing or tightening, mild to moderate, not worsened by activity. Treat with simple analgesia (limit to under 10–15 days a month), stress management, exercise, sleep, and amitriptyline for chronic cases.',
          'Medication overuse headache: a headache on 15 or more days a month in someone with a pre-existing headache disorder, with regular overuse for more than 3 months (simple analgesics 15 or more days a month; triptans, opioids, combination analgesics 10 or more days a month).',
          'MOH management: education, stop or withdraw the overused medicine (rebound headaches for 2–10 days), start preventive treatment (amitriptyline, propranolol, topiramate, candesartan, CGRP antibodies for migraine via specialist), and keep a headache diary.',
          'Codeine is prescription-only since 2018 because of dependence and MOH. Avoid opioids for headache.',
          'Stress management: problem-solving, relaxation and mindfulness, exercise, sleep routine, reducing caffeine and alcohol, and psychology via a Mental Health Treatment Plan.',
        ],
      },
    ],
    keyNumbers: [
      'Gambling Help: 1800 858 858',
      'National Debt Helpline: 1800 007 007',
      'PGSI ≥8: problem gambling',
      'Standard drink = 10 g alcohol',
      'Standard drinks = L × %ABV × 0.789',
      'NHMRC: ≤10 drinks/week, ≤4/day',
      'MOH: simple analgesics ≥15 days/month; triptans/opioids/combinations ≥10 days/month',
      'Codeine prescription-only since 2018',
    ],
    workedCase: {
      title: 'Diane has a headache',
      paragraphs: [
        'Diane, 44, has had headaches most days for 6 months. She describes a "tight band" around her head. She takes paracetamol–ibuprofen combination tablets on about 20 days a month and a codeine-containing product (prescribed by another doctor) about 12 days a month. She works long hours, sleeps poorly, drinks 4 coffees a day and a bottle of wine on Fridays and Saturdays.',
        'Neurological examination is normal and there are no red flags. You diagnose chronic tension-type headache with medication overuse headache. You explain that frequent painkillers are now maintaining the headaches.',
        'Plan: stop the combination analgesic and taper the codeine over 2 weeks, with warning of a temporary increase in headaches. Start amitriptyline 10 mg at night, increasing to 25 mg. Reduce caffeine gradually. Keep a headache diary. Refer for psychology (stress, CBT for insomnia). Discuss alcohol (about 16 standard drinks over the weekend exceeds the daily guideline).',
        'At 8 weeks her headache days have fallen from 25 to 8 a month. She uses simple analgesia on fewer than 8 days a month, and she has started walking at lunchtime.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Lifestyle-related presentations',
        lead: 'Choose the SINGLE most appropriate intervention for each patient.',
        options: [
          'Gambling Help counselling and self-exclusion',
          'Social prescription via link worker',
          'Brief alcohol intervention with drinking diary',
          'Withdraw overused analgesics and start preventive',
          'Financial counselling (National Debt Helpline)',
          'Urgent brain CT',
          'Benzodiazepine',
        ],
        items: [
          { stem: 'A 35-year-old man losing half his wage weekly on sports betting apps who wants to stop.', answer: 0 },
          { stem: 'A 45-year-old woman with daily headaches using codeine-containing tablets 15 days a month.', answer: 3 },
          { stem: 'A recently widowed 80-year-old man who has stopped leaving the house.', answer: 1 },
          { stem: 'A 60-year-old with sudden severe "worst ever" headache while lifting.', answer: 5 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Piero is lonely',
        scenario:
          'Piero, 78, has lived alone since his wife died 18 months ago. His children live interstate. He has stopped going to the Italian social club, eats mostly toast, and says he "just watches TV all day". He has hearing loss but has stopped wearing his hearing aids. He has lost 4 kg.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE assessments are most important?',
            options: [
              'Depression and suicide risk screening (e.g. GDS)',
              'Nutritional assessment and weight loss workup',
              'Hearing and cognitive assessment',
              'Chest CT',
              'Tumour markers',
              'Echocardiogram',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            context: 'He has mild depression, normal cognition, and weight loss explained by poor intake. He says he feels lonely.',
            stem: 'Which intervention best addresses his loneliness?',
            options: [
              'Sertraline alone',
              'Social prescription (e.g. reconnecting with the Italian club or a men\'s shed) with support to attend, plus hearing aid review',
              'Referral to residential aged care',
              'Benzodiazepine for sleep',
              'No intervention',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO services could support him at home?',
            options: [
              'My Aged Care assessment (e.g. meals, social support programs)',
              'Home-delivered meals or community dining programs',
              'NDIS',
              'Hospital admission',
              'Guardianship tribunal',
            ],
            answers: [0, 1],
          },
          {
            kind: 'sba',
            stem: 'Why is addressing his hearing loss important?',
            options: [
              'Hearing loss is unrelated to loneliness',
              'Untreated hearing loss contributes to social isolation, depression and dementia risk',
              'Hearing aids cure depression',
              'Only for safety reasons',
              'It is not relevant at his age',
            ],
            answer: 1,
          },
          {
            kind: 'emq',
            theme: 'Follow-up',
            lead: 'Choose the SINGLE best action for each development.',
            options: [
              'Continue social prescription and review',
              'Grief counselling',
              'Urgent suicide risk assessment',
              'Dietitian referral',
              'Increase TV time',
            ],
            items: [
              { stem: 'He is attending the club weekly and his mood is improving', answer: 0 },
              { stem: 'He still cries daily and is preoccupied with his wife\'s death 18 months on', answer: 1 },
              { stem: 'He mentions he has "thought about joining her"', answer: 2 },
            ],
          },
        ],
      },
    ],
  },
}

export default extra
