import type { Section } from '../../types'

const topup: Record<string, Section[]> = {
  '615': [
    {
      heading: 'Supporting parents and children together',
      points: [
        'Parental mental illness affects about 1 in 5 children. Ask parents with mental illness about their children, their parenting worries and the supports around the family.',
        'Children of parents with mental illness may take on caring roles, worry about their parent, and feel responsible. Age-appropriate explanations help them understand that the illness is not their fault.',
        'Programs such as Emerging Minds and COPMI (Children of Parents with a Mental Illness) resources help GPs talk with families.',
        'Plan for crises: who will care for the children if the parent becomes unwell or needs admission? Write it down with the family.',
        'Parenting programs such as Triple P and Circle of Security strengthen parent–child relationships and child behaviour.',
      ],
    },
    {
      heading: 'Adolescents and family conflict',
      points: [
        'Family conflict is a common trigger for distress in teenagers. See the young person alone, and then consider a family meeting with their consent.',
        'Help families move from blame to problem-solving. Encourage calm communication and clear, fair limits.',
        'Refer to family therapy where conflict is severe or persistent. Family-based approaches help in adolescent depression, eating disorders and self-harm.',
        'Always check for family violence and child protection concerns when there is serious conflict.',
      ],
    },
    {
      heading: 'Burnout signs in GPs',
      points: [
        'Burnout shows as emotional exhaustion, cynicism or detachment from patients, and a reduced sense of achievement.',
        'Warning signs include irritability, dreading work, more errors, poor sleep, increased alcohol use, and withdrawing from colleagues and family.',
        'Protective steps include having your own GP, protected time off, peer support groups (such as Balint groups), supervision, and clear boundaries around after-hours contact.',
        'Seek help early. Drs4Drs (1300 374 377) offers confidential support. Mandatory notification rules for treating practitioners are narrow and should not stop doctors seeking care.',
      ],
    },
  ],
  S1: [
    {
      heading: 'Common eczema mimics',
      points: [
        'Scabies: intense night-time itch, burrows, and affected family members. Eczema treatment will not clear it.',
        'Tinea: annular patches with an active scaly edge. Steroids make it spread (tinea incognito). Scrape the skin if unsure.',
        'Psoriasis: well-defined plaques with silvery scale on extensor surfaces, scalp and nails. Scalp and nail changes help tell it apart.',
        'Seborrhoeic dermatitis: greasy scale on the scalp, face and skin folds, especially in infants and adults with oily skin.',
        'Contact dermatitis: rash limited to the area exposed to an irritant or allergen. Ask about new products, jewellery and work.',
        'Rarer causes in infants with severe eczema, poor growth and recurrent infections include immunodeficiency. Refer if concerned.',
      ],
    },
    {
      heading: 'Eczema action plan',
      points: [
        'Daily: moisturise the whole body at least twice a day, use a soap-free wash, and bathe briefly in lukewarm water.',
        'Flare: apply the right strength topical steroid once or twice daily to red, rough, itchy areas until the skin is smooth, then continue moisturising.',
        'Infected skin: see the GP for weeping, crusted or painful skin, or clusters of punched-out sores, which could be eczema herpeticum.',
        'Prevention: identify and avoid triggers such as heat, sweat, wool, fragrances and harsh soaps.',
        'Give a written plan and teach technique. Families who understand the plan use treatment more effectively.',
      ],
    },
    {
      heading: 'Remember',
      points: [
        'Eczema is a chronic barrier and inflammatory disease. Daily moisturising plus enough topical steroid for flares controls most cases.',
      ],
    },
  ],
  '614': [
    {
      heading: 'Anxiety presentations in general practice',
      points: [
        'Panic attacks cause sudden intense fear with palpitations, breathlessness, chest pain, dizziness and tingling. Exclude physical causes, then explain the fight-or-flight response.',
        'Panic disorder responds to CBT (including interoceptive exposure) and SSRIs.',
        'Health anxiety involves persistent worry about serious illness despite reassurance. Repeated tests can reinforce the anxiety. Plan regular scheduled reviews and CBT.',
        'Social anxiety disorder often starts in adolescence and causes avoidance of school, work and social events. CBT is very effective.',
        'Obsessive–compulsive disorder is often hidden because of shame. Ask about intrusive thoughts and rituals. CBT with exposure and response prevention, and SSRIs, are effective.',
      ],
    },
    {
      heading: 'Depression: assessment and first steps',
      points: [
        'Screen with the PHQ-2, and use the PHQ-9 or K10 to assess severity and track progress.',
        'Always ask about suicidal thoughts, alcohol and drug use, bipolar symptoms, and psychotic features.',
        'Mild depression: psychological therapy, activity scheduling, exercise, sleep and social connection. Medicines are not first line.',
        'Moderate to severe depression: combine psychological therapy with an antidepressant. Review within 2 weeks of starting.',
        'Continue antidepressants for at least 6–12 months after recovery, longer for recurrent episodes.',
      ],
    },
    {
      heading: 'Remember',
      points: [
        'Assess the whole person, look for physical causes, ask about safety, and use continuity to build trust over time.',
      ],
    },
  ],
  '613': [
    {
      heading: 'Radiotherapy and surgery: late effects',
      points: [
        'After radical prostatectomy, urinary incontinence usually improves over 6–12 months. Pelvic floor physiotherapy helps. Severe persistent incontinence may need an artificial urinary sphincter.',
        'Erectile dysfunction is common after surgery and radiotherapy. Early penile rehabilitation and discussion of options improve outcomes.',
        'Radiation proctitis can cause rectal bleeding, urgency and diarrhoea months to years after radiotherapy. Investigate new bleeding with colonoscopy to exclude other causes.',
        'Radiation cystitis can cause haematuria. Refer for cystoscopy.',
        'Men who have had pelvic radiotherapy have a slightly increased risk of bladder and bowel cancers. Investigate new symptoms promptly.',
      ],
    },
    {
      heading: 'PSA after treatment',
      points: [
        'After radical prostatectomy, PSA should become undetectable. A rising PSA (biochemical recurrence) needs referral back to the urologist or oncologist.',
        'After radiotherapy, PSA falls slowly and may bounce. A rise of 2 ng/mL above the lowest level (nadir) suggests recurrence.',
        'PSMA PET scans are now used to find the site of recurrence and guide treatment.',
        'Agree a PSA follow-up schedule with the specialist team and record it clearly in the shared care plan.',
      ],
    },
    {
      heading: 'Remember',
      points: [
        'Shared decision-making, risk-based treatment and good survivorship care are the pillars of prostate cancer management in general practice.',
      ],
    },
  ],
  '612': [
    {
      heading: 'Bowel preparation and colonoscopy safety',
      points: [
        'Good bowel preparation is essential for an accurate colonoscopy. Give clear written instructions about diet and laxatives.',
        'People with diabetes need plans for insulin and other glucose-lowering medicines during fasting. Stop SGLT2 inhibitors beforehand.',
        'Anticoagulants and antiplatelets may need to be paused if polyps are likely to be removed. Follow the endoscopist\'s advice.',
        'Bowel preparation can cause dehydration and electrolyte problems, especially in older people and those with kidney disease. Choose the preparation carefully.',
        'Complications of colonoscopy (bleeding and perforation) are uncommon, and more likely after polyp removal. Warn patients to report severe pain or bleeding.',
      ],
    },
    {
      heading: 'Bowel dysfunction after rectal cancer treatment',
      points: [
        'Low anterior resection syndrome is common after rectal cancer surgery: urgency, frequency, clustering of bowel motions and incontinence.',
        'Management includes diet changes, fibre, loperamide, pelvic floor physiotherapy and transanal irrigation.',
        'Symptoms often improve over 1–2 years, but may persist. Ask about them and refer to specialist continence services.',
        'Sexual and urinary problems are also common after pelvic surgery and radiotherapy. Ask directly.',
      ],
    },
    {
      heading: 'Remember',
      points: [
        'Screen from 45, investigate symptoms at any age, and support survivors with late effects and surveillance.',
      ],
    },
  ],
  '611': [
    {
      heading: 'Lymphoedema after breast cancer',
      points: [
        'Lymphoedema can develop months or years after surgery or radiotherapy to the axilla. Early signs include heaviness, tightness, and rings or sleeves feeling tight.',
        'Early referral to a lymphoedema practitioner improves outcomes. Treatment includes compression garments, exercise, skin care and manual lymphatic drainage.',
        'Cellulitis in the affected arm needs prompt antibiotics. People with recurrent cellulitis may need prophylactic antibiotics.',
        'Advise good skin care, prompt treatment of cuts, and gradual return to exercise, including resistance training, which is safe.',
        'Blood pressure measurement and blood tests in the affected arm are commonly avoided, although evidence of harm is limited.',
      ],
    },
    {
      heading: 'Recurrence: what to look for',
      points: [
        'Local recurrence: a new lump in the breast, scar or chest wall, or changes in the skin.',
        'Distant spread: persistent bone pain, breathlessness or cough, abdominal pain or jaundice, headaches or neurological symptoms.',
        'Routine blood tests and scans are not recommended for asymptomatic survivors. They do not improve survival.',
        'Annual mammography of the remaining breast tissue is recommended.',
        'Fear of recurrence is very common. Acknowledge it and offer psychological support.',
      ],
    },
    {
      heading: 'Remember',
      points: [
        'The triple test for any lump, risk-based screening, and long-term survivorship care including adherence to hormone therapy.',
      ],
    },
  ],
  '610': [
    {
      heading: 'Chest pain: when it is not the heart',
      points: [
        'Musculoskeletal chest pain is reproducible with palpation or movement. Still consider cardiac causes in people at risk.',
        'Pericarditis causes sharp pain that is worse lying down and better leaning forward, with a friction rub and widespread ST elevation. Treat with NSAIDs and colchicine.',
        'Pulmonary embolism causes pleuritic pain, breathlessness and tachycardia. Use the Wells score and D-dimer to guide testing.',
        'Aortic dissection causes sudden tearing pain radiating to the back, with pulse or blood pressure differences between arms. This is an emergency.',
        'Gastro-oesophageal reflux can mimic angina. Do not diagnose reflux until cardiac causes have been considered.',
      ],
    },
    {
      heading: 'Congenital heart disease in adults',
      points: [
        'More adults are now living with congenital heart disease after childhood surgery. Many need lifelong cardiology follow-up, which is often lost in transition.',
        'Ask about childhood heart surgery, and re-link people with adult congenital heart services.',
        'Pregnancy can be high risk for some conditions. Refer before conception.',
        'Some people need antibiotic prophylaxis before dental procedures to prevent endocarditis. Check current guidelines.',
      ],
    },
    {
      heading: 'Remember',
      points: [
        'Assess absolute cardiovascular risk, treat heart failure early with all four pillars, and do not miss atypical presentations in women.',
      ],
    },
  ],
}

export default topup
