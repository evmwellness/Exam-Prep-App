import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  S1: {
    sections: [
      {
        heading: 'Pathophysiology and natural history',
        points: [
          'Atopic eczema results from skin barrier dysfunction (such as filaggrin variants) plus type 2 immune inflammation (IL-4, IL-13, IL-31 drive itch) and microbiome disturbance (S. aureus).',
          'The itch–scratch cycle damages the barrier further and increases inflammation. Breaking it is central to treatment.',
          'Onset is usually before age 5. Many children improve by adolescence, but eczema can persist or start in adulthood.',
          'The atopic march: eczema in infancy is associated with later food allergy, asthma and allergic rhinitis. Early effective eczema control may reduce food sensitisation.',
          'Impact: sleep loss for the child and parents, school absence, bullying, anxiety and depression, financial costs, and family stress.',
        ],
      },
      {
        heading: 'Assessment and severity',
        points: [
          'Diagnose clinically: itch plus typical morphology and distribution, a chronic relapsing course, personal or family atopy, and dry skin.',
          'Distribution changes with age: infants (face, scalp, extensor limbs, sparing the nappy area), children (flexures, wrists, ankles, neck), adults (flexures, hands, face and neck, eyelids).',
          'Skin of colour: erythema may look violaceous, dark brown or grey. Follicular (perifollicular) papules, prurigo nodules and lichenification are more prominent. Post-inflammatory hyper- and hypopigmentation are common.',
          'Severity tools: POEM (patient-reported), EASI or SCORAD (clinician). Assess sleep and quality of life (CDLQI or DLQI).',
          'Look for complications (infection, eczema herpeticum), triggers (irritants, heat, allergens, stress) and comorbid atopy. Check growth in children.',
        ],
      },
      {
        heading: 'Moisturisers and bathing',
        points: [
          'Moisturise at least twice daily and whenever skin feels dry. Use generous amounts (a child may need 250–500 g a week). Pump packs avoid contamination.',
          'Choose a formulation the patient will use: ointments are best for very dry skin, creams in the day and in heat. Avoid fragranced products and those with food proteins (such as oat or goat milk) on broken skin in infants.',
          'Bathing: lukewarm, short (5–10 minutes), with soap-free wash or bath oil, pat dry, and moisturise within 3 minutes.',
          'Wet wraps for flares: apply steroid or moisturiser, then a damp layer then a dry layer for a few hours or overnight. Reduces itch and improves sleep.',
          'Dilute bleach baths (about 0.005%) twice weekly for recurrent infected eczema. Salt baths may soothe some.',
        ],
      },
      {
        heading: 'Topical corticosteroids in practice',
        points: [
          'Potency ladder: mild (hydrocortisone 0.5–1%), moderate (methylprednisolone aceponate 0.1%, triamcinolone 0.02%, clobetasone), potent (mometasone furoate 0.1%, betamethasone valerate 0.1%, betamethasone dipropionate 0.05%), very potent (clobetasol propionate 0.05%).',
          'Site guide: face and flexures mild to moderate (methylprednisolone aceponate is suitable short-term). Trunk and limbs moderate to potent. Palms and soles potent to very potent.',
          'Apply once daily until clear (usually 1–2 weeks), then stop, or use proactive twice-weekly application to flare-prone areas to prevent relapse.',
          'Fingertip unit guide for adults: face and neck 2.5 FTU, one arm 3 FTU, one hand 1 FTU, one leg 6 FTU, front or back of trunk 7 FTU.',
          'Steroid phobia is common and leads to undertreatment. Explain that skin atrophy is rare with appropriate use, and that uncontrolled eczema causes more harm.',
          'Topical steroid withdrawal (red skin syndrome) is reported after prolonged inappropriate potent use, especially on the face. Appropriate intermittent use reduces this risk.',
        ],
      },
      {
        heading: 'Steroid-sparing and advanced therapies',
        points: [
          'Topical calcineurin inhibitors (pimecrolimus 1% cream, tacrolimus ointment 0.03–0.1%): face, eyelids, flexures, and proactive maintenance. Burning on initial use is common. No skin atrophy.',
          'Crisaborole (PDE4 inhibitor ointment) is an option for mild to moderate eczema.',
          'Phototherapy (narrowband UVB) for adults and older children with widespread disease, via dermatology.',
          'Conventional systemic agents: ciclosporin (rapid, monitor BP and renal function), methotrexate, azathioprine, mycophenolate.',
          'Biologics and JAK inhibitors: dupilumab (anti-IL-4Rα; conjunctivitis is common), tralokinumab and lebrikizumab (anti-IL-13), upadacitinib and abrocitinib (oral JAK inhibitors; monitor lipids, FBC and infections, with VTE and CV warnings). PBS access through dermatologists for moderate to severe disease.',
          'Refer for diagnostic uncertainty, severe or refractory disease, recurrent infections, suspected contact allergy (patch testing), or significant psychosocial impact.',
        ],
      },
      {
        heading: 'Triggers and allergy',
        points: [
          'Common irritant triggers: soap, detergents, wool and synthetic fabrics, heat and sweating, low humidity, chlorine, dust.',
          'Aeroallergens (house dust mite, pollen, pet dander) can worsen eczema in some. Extensive avoidance measures have limited benefit.',
          'Food allergy is more common in infants with moderate to severe early-onset eczema, but eczema itself is rarely caused by food. Test only when the history suggests an immediate reaction. Avoid unnecessary elimination diets, which can cause nutritional harm and loss of tolerance.',
          'ASCIA infant feeding advice: introduce common allergens (including peanut and egg) in the first year when the infant is ready, around 6 months but not before 4 months. This reduces food allergy risk, including in infants with eczema.',
          'Contact allergy (for example to preservatives, fragrances, topical antibiotics or steroids) should be suspected when eczema worsens despite treatment or has an unusual distribution. Patch testing helps.',
        ],
      },
      {
        heading: 'Living with eczema and person-centred care',
        points: [
          'Written eczema action plans (for example ASCIA or Eczema Association templates) empower patients and carers. They show how much and what to use for daily care and for flares.',
          'Nurse-led education sessions improve technique and adherence.',
          'Sleep: treat night-time itch (optimise topical treatment, wet wraps, cool environment). Sedating antihistamines have limited benefit beyond sedation and are not recommended long term.',
          'Psychosocial support: screen for anxiety, depression and bullying, and support carers (respite, support groups). School letters for moisturiser and sunscreen use.',
          'People far from home (for example international students or remote residents): access to prescriptions and affordable products, telehealth dermatology, and cultural beliefs about treatment.',
          'Set realistic expectations: eczema is chronic and relapsing, but good control is achievable. Review regularly.',
        ],
      },
    ],
    keyNumbers: [
      'FTU ≈ 0.5 g covers two adult palms',
      'Adult FTUs: face/neck 2.5, arm 3, hand 1, leg 6, trunk front 7',
      'TCS once daily until clear, then twice-weekly proactive',
      'Child moisturiser: 250–500 g/week',
      'Moisturise within 3 minutes of bathing',
      'Dilute bleach bath ≈ 0.005% twice weekly',
      'Introduce allergens (egg, peanut) in first year from ~6 months',
      'Eczema herpeticum: urgent aciclovir',
    ],
    workedCase: {
      title: 'Murray is fed up with topical treatment',
      paragraphs: [
        'Murray, 34, has had eczema since childhood. It now covers about 30% of his body. He uses a potent steroid most days on his arms and trunk, and hydrocortisone on his face. He sleeps 4 hours a night because of itch, has missed work, and says he is "sick of creams that don\'t work". POEM is 22 (severe) and DLQI is 18.',
        'You review technique: he applies thin smears because of fear of skin thinning, uses soap in the shower, and uses a fragranced lotion. You teach FTU dosing, wet wraps for a flare, and soap-free washing. You also start dilute bleach baths because of recurrent staph infections.',
        'You swab crusted areas (S. aureus) and treat with oral cephalexin. You screen for depression (PHQ-9 is 13) and arrange psychology. You consider patch testing because his face has not improved.',
        'Given the severe impact despite optimal topical therapy, you refer him to a dermatologist for systemic therapy. He starts dupilumab under PBS criteria. At 4 months his EASI has improved by 80% and he is sleeping through the night. You manage mild conjunctivitis with lubricants and refer to an optometrist.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Topical corticosteroid choice',
        lead: 'Choose the SINGLE most appropriate topical treatment for each patient.',
        options: [
          'Hydrocortisone 1% cream',
          'Methylprednisolone aceponate 0.1% cream',
          'Mometasone furoate 0.1% ointment',
          'Clobetasol propionate 0.05% ointment',
          'Pimecrolimus 1% cream',
          'Mupirocin ointment',
          'Clotrimazole cream',
        ],
        items: [
          { stem: 'An 8-month-old with mild eczema on the cheeks.', answer: 0 },
          { stem: 'A 30-year-old with chronic lichenified eczema on the palms.', answer: 3 },
          { stem: 'A 10-year-old with a flare of eczema on the legs and trunk.', answer: 2 },
          { stem: 'A 25-year-old with persistent eyelid eczema, worried about steroids.', answer: 4 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Jimmy has itchy skin and sores',
        scenario:
          'Jimmy, 6, has had eczema since infancy. Over 5 days his eczema has become weepy and crusted on his arms and neck, and in the last 24 hours he has developed painful clusters of punched-out erosions on his face near his eye. He has a fever of 38.6 °C.',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the most likely diagnosis of the new facial lesions?',
            options: ['Impetigo', 'Eczema herpeticum', 'Molluscum contagiosum', 'Scabies', 'Allergic contact dermatitis'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which THREE are the most important immediate management steps?',
            options: [
              'Start systemic aciclovir urgently (usually IV in hospital for a febrile child)',
              'Urgent ophthalmology review because of periocular involvement',
              'Swab lesions for HSV PCR and bacterial culture',
              'Apply a potent steroid to the facial lesions',
              'Topical aciclovir alone',
              'Wait for PCR results before treating',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            context: 'He recovers. His mother is worried that steroid creams caused the infection and wants to stop them.',
            stem: 'What is the best advice?',
            options: [
              'Stop all topical corticosteroids permanently',
              'Explain that well-controlled eczema lowers infection risk; resume appropriate TCS once the herpes infection has settled, plus an action plan',
              'Use only natural oils',
              'Use antibiotics long term instead',
              'Use steroids only on the face',
            ],
            answer: 1,
          },
          {
            kind: 'emq',
            theme: 'Eczema action plan',
            lead: 'Choose the SINGLE best action for each situation in his action plan.',
            options: [
              'Moisturise twice daily and after bathing',
              'Moderate or potent TCS once daily until clear',
              'Twice-weekly proactive TCS on flare-prone areas',
              'See the GP urgently',
              'Dilute bleach baths twice weekly',
              'Stop all creams',
            ],
            items: [
              { stem: 'Daily skin care when the skin is clear', answer: 0 },
              { stem: 'A new flare on the arms and legs', answer: 1 },
              { stem: 'Recurrent weepy, crusted, infected-looking flares', answer: 4 },
              { stem: 'Painful blisters or erosions with fever', answer: 3 },
            ],
          },
          {
            kind: 'multi',
            stem: 'Which TWO additional issues should you address with the family?',
            options: [
              'Sleep and its impact on the family, and school support',
              'Bullying or psychosocial impact on Jimmy',
              'Strict elimination of all dairy and eggs',
              'Daily antihistamines long term',
              'Home schooling',
            ],
            answers: [0, 1],
          },
        ],
      },
    ],
  },
  '614': {
    sections: [
      {
        heading: 'Whole-person assessment: threats and strengths',
        points: [
          'Assess across domains: biological (health, medicines, substances, sleep), psychological (thinking patterns, coping, trauma), social (relationships, work, housing, finances), cultural (identity, beliefs, community), spiritual (meaning, faith), relational (family, intimacy), and environmental (safety, neighbourhood, climate).',
          'Each domain can be a threat (a stressor or vulnerability) or a strength (a resource). Asking about strengths builds hope and engagement: "What has helped you get through hard times before?"',
          'Use open, curious questions and summarise back. The person\'s own explanation of their difficulties matters.',
          'Consider developmental stage and life transitions: adolescence, parenthood, retirement, bereavement.',
          'The assessment is therapeutic in itself. Being heard reduces distress.',
        ],
      },
      {
        heading: 'Frameworks for assessment',
        points: [
          'Diagnostic (DSM-5-TR / ICD-11): gives shared language, access to evidence-based treatments and funding (Better Access). Risk of pathologising distress and missing context.',
          'Biopsychosocial model: broad and holistic, but can be unfocused without a formulation.',
          'The 5Ps formulation (Presenting, Predisposing, Precipitating, Perpetuating, Protective): links history to a plan and explains "why now".',
          'Transdiagnostic approaches: targeting shared processes (avoidance, rumination, emotion dysregulation) across conditions, useful when the diagnosis is unclear or comorbid.',
          'Stepped care: match intensity to need (self-help, then GP counselling, then psychological therapy, then specialist or crisis care). IAR (Initial Assessment and Referral) guidance supports level-of-care decisions.',
          'Use validated measures (K10, PHQ-9, GAD-7, DASS-21) as tools, not verdicts. Repeat them to monitor.',
        ],
      },
      {
        heading: 'Trauma-informed difficult conversations',
        points: [
          'Assume trauma may be present in anyone. Many patients have histories they have not disclosed.',
          'Principles: safety (physical and emotional), trustworthiness and transparency, choice, collaboration, empowerment, and cultural, historical and gender considerations.',
          'In practice: explain the purpose of questions, ask permission ("Is it OK if I ask about...?"), allow the person to decline, avoid unnecessary physical examinations, and offer a chaperone.',
          'When distress rises: slow down, validate, use grounding, and do not push for details. Disclosure is not required for good care.',
          'Close conversations carefully: check how the person feels, arrange follow-up, and provide crisis numbers.',
          'Look after yourself: vicarious trauma is real. Use supervision and debriefing.',
        ],
      },
      {
        heading: 'Cognitive bias and clinical reasoning',
        points: [
          'Anchoring: sticking with the first impression. Premature closure: stopping the search once a diagnosis is found. Confirmation bias: seeking only supporting information.',
          'Diagnostic overshadowing: attributing physical symptoms to mental illness (or intellectual disability). This contributes to 10–20 years lower life expectancy in people with serious mental illness.',
          'Affective bias and countertransference: our feelings about a patient (frustration, liking, fear) influence decisions. "Heartsink" patients may be under-investigated.',
          'Mitigation: a diagnostic time-out ("What else could this be?"), considering the worst case, safety-netting, seeking a colleague\'s view, and reflective practice or Balint groups.',
          'Physical health checks for people with serious mental illness: metabolic monitoring on antipsychotics (weight, BP, glucose, lipids), cardiac risk, cancer screening, dental care.',
        ],
      },
      {
        heading: 'Common presentations in detail',
        points: [
          'Back pain with psychosocial yellow flags (fear-avoidance, catastrophising, low mood, work dissatisfaction, compensation issues): early reassurance, activity, graded return to work, and psychology if flags persist.',
          'Social isolation and loneliness in young adults: consider social anxiety, autism, depression, and online versus offline connection. Use CBT and social skills or group programs.',
          'Frequent attendance: consider physical illness, health anxiety, somatic symptom disorder, depression, loneliness, and trauma. Use scheduled visits and a consistent GP.',
          'School refusal: anxiety (separation, social, performance), bullying, learning difficulties, family stress, neurodivergence. Aim for rapid graded return with a school plan. Avoid long certificates.',
          'Insomnia: exclude OSA, restless legs, mood disorders, substances and pain. CBT-i is first line.',
        ],
      },
      {
        heading: 'Eating disorders: detailed management',
        points: [
          'Types: anorexia nervosa (restriction, low weight, fear of weight gain, body image disturbance), bulimia nervosa (binge–compensate cycles), binge eating disorder (the most common), ARFID (avoidant or restrictive intake without body image concern), OSFED.',
          'Medical assessment: weight and BMI (or percentage median BMI in young people), HR and BP lying and standing, temperature, ECG (bradycardia, QTc), UEC, magnesium, phosphate, glucose, FBC, LFT. Check bone density if amenorrhoea lasts more than 6 months.',
          'Admission criteria (examples): HR <50 by day (<45 at night), systolic BP <90, postural HR rise >20 or BP drop >20, temperature <35.5 °C, K⁺ <3.0, phosphate low, syncope, rapid weight loss, acute food refusal, suicidality.',
          'Eating Disorder Treatment and Management Plan (MBS): up to 40 psychological sessions and 20 dietetic sessions a year for eligible patients (anorexia, or others meeting severity criteria).',
          'Evidence-based therapies: family-based treatment (adolescent anorexia), CBT-E (adults), specialist supportive clinical management and MANTRA. Lisdexamfetamine for binge eating disorder (specialist).',
          'Refeeding syndrome: monitor phosphate, potassium and magnesium in the first week of refeeding for severely malnourished patients (usually in hospital).',
        ],
      },
    ],
    keyNumbers: [
      'ED admission: HR <50 day; SBP <90; temp <35.5 °C',
      'Postural HR rise >20 or BP drop >20: unstable',
      'ED Plan: up to 40 psychology + 20 dietetic sessions/year',
      'K10 ≥30 suggests severe distress',
      'PHQ-9: 10 moderate, 15 moderately severe, 20 severe',
      'Serious mental illness: 10–20 years shorter life expectancy',
      'SCOFF ≥2: possible eating disorder',
    ],
    workedCase: {
      title: 'Lena has no friends',
      paragraphs: [
        'Lena, 19, a first-year university student who moved from a regional town, attends for "a check-up" and becomes tearful. She has no friends at university, avoids tutorials, eats alone in her room, and spends nights online. She describes her heart racing and blushing when she has to speak in class.',
        'You use a whole-person approach. The threats are isolation, the move away from family and anxiety about performance. The strengths are a close relationship with her sister, a love of drawing, and her academic ability. The K10 is 29, the PHQ-9 is 11 and the GAD-7 is 14. She has no suicidal ideation. You consider autism, but her social skills are good in safe settings. Her symptoms fit social anxiety disorder.',
        'You write a 5Ps formulation with her. Predisposing: a shy temperament and bullying in high school. Precipitating: the move. Perpetuating: avoidance and online-only contact. Protective: her sister and her art. Plan: a Mental Health Treatment Plan for CBT (exposure hierarchy), the university counselling and disability service (for adjustments), and joining an art club as a first graded step.',
        'At 10 weeks she attends tutorials, has two friends from the art club, and her GAD-7 is 7. You discuss an SSRI only if progress stalls.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Clinical reasoning pitfalls',
        lead: 'Choose the SINGLE bias or concept that best describes each scenario.',
        options: [
          'Diagnostic overshadowing',
          'Anchoring bias',
          'Premature closure',
          'Countertransference',
          'Availability bias',
          'Confirmation bias',
          'Trauma-informed care',
        ],
        items: [
          { stem: 'A man with schizophrenia\'s weight loss and cough are attributed to his antipsychotic without investigation; he has lung cancer.', answer: 0 },
          { stem: 'After seeing two cases of pulmonary embolism this week, a GP orders a CTPA for every breathless patient.', answer: 4 },
          { stem: 'A GP feels irritated by a frequently attending patient and shortens consultations, missing new symptoms.', answer: 3 },
          { stem: 'A GP asks permission before examining, explains each step and offers the patient choice and a chaperone.', answer: 6 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Ana will not go to school',
        scenario:
          'Ana, 13, has missed most of the last 5 weeks of school. Each morning she has abdominal pain and nausea, which settle by mid-morning and are absent on weekends. Her mother asks for a medical certificate "for the rest of term". Examination is normal.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE areas are most important to explore?',
            options: [
              'Anxiety (separation, social, academic) and mood, including self-harm',
              'Bullying or peer problems (including online)',
              'Family factors and learning difficulties',
              'Serum amylase',
              'Abdominal CT',
              'Food intolerance panel',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'What is the best response to the certificate request?',
            options: [
              'Provide a certificate for the rest of term',
              'Explain that prolonged absence reinforces avoidance; aim for early graded return with a plan involving school and family',
              'Refuse and tell the family she is faking',
              'Provide a certificate for 6 months',
              'Suggest home schooling',
            ],
            answer: 1,
          },
          {
            kind: 'sba',
            context: 'Ana discloses anxiety about speaking in class and being excluded by a friendship group. She has no self-harm.',
            stem: 'What is the first-line treatment?',
            options: [
              'Sertraline 50 mg',
              'CBT (e.g. via headspace or psychologist) with a graded exposure plan for school return',
              'Benzodiazepine before school',
              'Referral to paediatric gastroenterology',
              'Hypnotherapy only',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO school-related interventions are most helpful?',
            options: [
              'A school return plan (e.g. starting with part days, a safe person and a quiet space)',
              'School action on the peer exclusion and bullying',
              'Full exemption from all assessments for a year',
              'Changing schools immediately',
              'Suspension of the other students by the GP',
            ],
            answers: [0, 1],
          },
          {
            kind: 'emq',
            theme: 'Follow-up',
            lead: 'Choose the SINGLE best action for each development.',
            options: [
              'Continue plan and review in 2–4 weeks',
              'Urgent suicide risk assessment and safety plan',
              'Consider SSRI (e.g. sertraline or fluoxetine) alongside CBT',
              'Refer for paediatric review of abdominal pain',
              'Provide a long-term certificate',
            ],
            items: [
              { stem: 'Attending 3 days a week and improving', answer: 0 },
              { stem: 'Anxiety remains severe after 10 CBT sessions, with no progress', answer: 2 },
              { stem: 'She reveals cutting her forearms and thoughts of dying', answer: 1 },
            ],
          },
        ],
      },
    ],
  },
  '613': {
    sections: [
      {
        heading: 'Epidemiology and risk',
        points: [
          'Prostate cancer is the most commonly diagnosed cancer in Australian men (about 1 in 6 by age 85) and the second leading cause of male cancer death.',
          'Risk factors: increasing age, family history (a first-degree relative, especially diagnosed under 60, or multiple relatives), BRCA2 (and BRCA1, HOXB13, Lynch) variants, and African ancestry.',
          'Most prostate cancers are slow-growing. Many men die with prostate cancer rather than from it. The challenge is to find clinically significant cancers without overdiagnosing indolent ones.',
          'Aboriginal and Torres Strait Islander men and rural men have lower survival, linked to later diagnosis and access issues.',
          'There are no proven modifiable prevention strategies. 5-ARIs reduce diagnosis of low-grade cancers but are not recommended for prevention.',
        ],
      },
      {
        heading: 'Shared decision-making about PSA testing',
        points: [
          'Current Australian guidance (the RACGP Red Book and prostate cancer guidelines, with updates underway) does not support population screening. Men who ask, or are at increased risk, should be offered information to make an informed choice.',
          'Benefits: about 1 fewer prostate cancer death per 1000 men screened over 10–15 years (varies by trial), and fewer men presenting with metastatic disease.',
          'Harms: false positives (about 3 in 4 raised PSAs are not cancer), anxiety, biopsy complications (infection with transrectal biopsy, bleeding), overdiagnosis (20–50% of screen-detected cancers), and treatment side effects (erectile dysfunction, incontinence).',
          'Newer pathways (MRI before biopsy, transperineal biopsy, active surveillance for low-risk disease) reduce harms, which is changing the balance.',
          'Use decision aids (for example the Prostate Cancer Foundation\'s resources). Document the discussion and decision. For men who choose testing: PSA every 2 years between 50 and 69, from 40–45 with a strong family history or BRCA2.',
        ],
      },
      {
        heading: 'Interpreting PSA',
        points: [
          'Age-related reference ranges vary. Many pathways use a PSA above 3.0 ng/mL (ages 50–69) as abnormal. Also consider PSA velocity and free-to-total ratio (a low free PSA percentage raises cancer probability).',
          'Causes of raised PSA other than cancer: BPH, prostatitis and UTI (wait 6 weeks after treatment), recent ejaculation (48 hours), vigorous cycling, urinary retention, catheterisation or instrumentation.',
          '5-ARIs (finasteride, dutasteride) halve PSA after 6–12 months, so double the value for interpretation. A rising PSA on a 5-ARI is suspicious.',
          'Repeat an elevated PSA in 1–3 months before referral, unless it is markedly raised (for example over 10) or there are symptoms or signs of advanced disease.',
          'Refer to a urologist for persistently raised PSA, an abnormal DRE, or rapidly rising PSA. MRI is usually arranged by the urologist (Medicare-rebated MRI requires specialist referral).',
        ],
      },
      {
        heading: 'Treatment options by risk',
        points: [
          'Low risk (ISUP grade group 1, PSA <10, T1–T2a): active surveillance with PSA every 3–6 months, MRI, and repeat biopsy, and treatment if it progresses. This avoids or delays treatment side effects.',
          'Watchful waiting for older men or men with significant comorbidity: treat symptoms only if they develop (for example ADT for symptomatic progression).',
          'Intermediate risk: radical prostatectomy (open or robotic) or external beam radiotherapy (± short-term ADT) or brachytherapy. Some favourable intermediate-risk cancers may suit surveillance.',
          'High risk or locally advanced: radiotherapy with long-term ADT, or prostatectomy within multimodal therapy.',
          'Metastatic: ADT plus an androgen receptor pathway inhibitor (enzalutamide, abiraterone, apalutamide, darolutamide) ± docetaxel. Castration-resistant disease may use PSMA-targeted radioligand therapy (lutetium-177) and PARP inhibitors for BRCA-mutated tumours.',
          'Genetic testing is recommended for men with metastatic or high-risk disease, or a significant family history (because of implications for family members).',
        ],
      },
      {
        heading: 'Multidisciplinary team',
        points: [
          'Urologist: diagnosis (biopsy), surgery, and surveillance programs.',
          'Radiation oncologist: external beam radiotherapy, brachytherapy, and palliative radiotherapy for bone pain.',
          'Medical oncologist: systemic therapy for advanced disease (ADT combinations, chemotherapy, novel agents).',
          'Prostate cancer specialist nurse: education, coordination and support. Continence physiotherapist: pelvic floor training before and after surgery. Sexual health counsellor or psychologist: erectile dysfunction, intimacy and mood. Exercise physiologist and dietitian: fatigue, ADT metabolic effects.',
          'GP: diagnosis pathway, shared survivorship care, managing side effects and comorbidities, psychosocial support, advance care planning, and palliative care coordination.',
        ],
      },
      {
        heading: 'Managing treatment effects',
        points: [
          'Erectile dysfunction after surgery or radiotherapy: early penile rehabilitation (PDE5 inhibitors, vacuum devices, intracavernosal injections), and partner involvement. Recovery may take 2 years.',
          'Urinary incontinence after prostatectomy: pelvic floor physiotherapy (ideally started before surgery). Most improve within 12 months. Persistent severe incontinence may need a male sling or artificial sphincter.',
          'Radiation effects: acute cystitis and proctitis, late radiation proctitis (rectal bleeding, often a year or more later; investigate with colonoscopy), haematuria (radiation cystitis), and secondary cancers (bladder, rectal).',
          'ADT effects: hot flushes (venlafaxine, gabapentin or medroxyprogesterone can help), fatigue, weight gain, sarcopenia, insulin resistance and diabetes, dyslipidaemia, CVD, osteoporosis (DXA, vitamin D, exercise, denosumab or zoledronic acid), anaemia, cognitive changes, depression, loss of libido, gynaecomastia.',
          'Exercise (resistance and aerobic) is the most effective single intervention against ADT side effects.',
          'Sleep problems may relate to nocturia, hot flushes, anxiety or pain. Assess each.',
        ],
      },
      {
        heading: 'Advanced disease and palliative care',
        points: [
          'Bone metastases: pain (radiotherapy is highly effective), pathological fracture, and spinal cord compression (urgent dexamethasone and MRI).',
          'Hypercalcaemia (less common in prostate cancer), anaemia (marrow infiltration, ADT), and urinary obstruction (hydronephrosis, retention).',
          'Symptom control: opioids, NSAIDs, dexamethasone, and bone-targeted agents (denosumab or zoledronic acid in castration-resistant disease reduce skeletal events).',
          'Early palliative care referral improves quality of life. Discuss goals, prognosis and preferred place of death.',
          'Support carers, and plan for home death if preferred: community palliative care, equipment, anticipatory medicines.',
        ],
      },
    ],
    keyNumbers: [
      'PSA 50–69: every 2 years if informed choice to test',
      'Strong family history/BRCA2: start 40–45',
      'Repeat raised PSA in 1–3 months',
      'Avoid PSA within 48 h of ejaculation; 6 weeks after UTI/prostatitis',
      '5-ARI: double PSA after 6–12 months',
      'ISUP grade group 1 → active surveillance',
      'ADT: DXA baseline, calcium/vitamin D, resistance exercise',
      'Tamsulosin: floppy iris syndrome at cataract surgery',
    ],
    workedCase: {
      title: 'Bob is living with treatment side effects',
      paragraphs: [
        'Bob, 68, had radiotherapy with 18 months of ADT (goserelin) for high-risk prostate cancer, finishing 6 months ago. He reports hot flushes, fatigue, a 7 kg weight gain, low mood, erectile dysfunction, and recent rectal bleeding. His wife says he has withdrawn.',
        'You address each issue. For the rectal bleeding (possible radiation proctitis, but cancer must be excluded) you arrange colonoscopy. You check FBC, HbA1c (new diabetes: 52 mmol/mol), lipids, testosterone recovery, and a DXA scan (osteopenia).',
        'Management: an exercise physiologist program (resistance and aerobic), dietitian review, metformin, a statin review, vitamin D and calcium, and a PDE5 inhibitor with referral to a sexual health counsellor for Bob and his wife. For hot flushes you consider venlafaxine, which may also help mood. PHQ-9 is 14, so you arrange psychology through a Mental Health Treatment Plan and link him to a prostate cancer support group.',
        'Colonoscopy shows radiation proctitis without malignancy. It is treated conservatively. At 4 months his energy and mood are better, he has lost 4 kg, and his PSA remains undetectable.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Prostate cancer management',
        lead: 'Choose the SINGLE most appropriate option for each man.',
        options: [
          'Active surveillance',
          'Watchful waiting',
          'Radical prostatectomy or radiotherapy',
          'ADT plus androgen receptor pathway inhibitor',
          'Repeat PSA in 1–3 months',
          'Urgent MRI spine and dexamethasone',
          'No PSA testing – informed decision declined',
          'Refer to urologist',
        ],
        items: [
          { stem: 'A 62-year-old with ISUP grade group 1 cancer in 2 cores, PSA 6.', answer: 0 },
          { stem: 'A 58-year-old with PSA 4.2 (previous 1.8) a week after a long cycling event; normal DRE.', answer: 4 },
          { stem: 'A 75-year-old with metastatic prostate cancer and new back pain with leg weakness.', answer: 5 },
          { stem: 'A 60-year-old with a hard nodular prostate on DRE and PSA 8.', answer: 7 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Pio has an elevated PSA',
        scenario:
          'Pio, 61, of Samoan background, had a PSA of 7.8 ng/mL at a health check. A repeat 6 weeks later is 8.1. He has mild nocturia and a slow stream. His brother was diagnosed with prostate cancer at 63. DRE shows a moderately enlarged, smooth prostate.',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the most appropriate next step?',
            options: [
              'Start tamsulosin and repeat PSA in 12 months',
              'Refer to a urologist for assessment including multiparametric MRI',
              'Start finasteride and recheck PSA',
              'Bone scan',
              'Reassure – BPH explains the PSA',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO factors increase his risk of clinically significant prostate cancer?',
            options: ['First-degree relative with prostate cancer', 'Persistently raised PSA', 'Nocturia', 'Samoan background', 'Smooth prostate on DRE'],
            answers: [0, 1],
          },
          {
            kind: 'sba',
            context: 'MRI shows a PI-RADS 5 lesion. Transperineal biopsy shows ISUP grade group 3 (Gleason 4+3) cancer. Staging shows no metastases.',
            stem: 'What best describes his management options?',
            options: [
              'Active surveillance only',
              'Radical prostatectomy or radiotherapy with short-term ADT, discussed at a multidisciplinary meeting',
              'Chemotherapy',
              'Watchful waiting',
              'No treatment – cancer is slow growing',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            context: 'He chooses robotic radical prostatectomy.',
            stem: 'Which THREE preparations or follow-up measures are appropriate?',
            options: [
              'Pelvic floor physiotherapy before and after surgery',
              'Discuss erectile rehabilitation options',
              'PSA monitoring after surgery (should become undetectable)',
              'Lifelong ADT after surgery for all men',
              'Annual bone scans',
              'Avoid all exercise for a year',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'emq',
            theme: 'Family and cultural considerations',
            lead: 'Choose the SINGLE best action for each situation.',
            options: [
              'Offer genetic counselling / germline testing discussion',
              'Discuss PSA testing from age 40–45 with his sons',
              'Use culturally appropriate resources and involve family if he wishes',
              'No need to involve family',
              'Recommend finasteride to his sons',
            ],
            items: [
              { stem: 'He wants to know what this means for his three sons (aged 35–42)', answer: 1 },
              { stem: 'His brother also had prostate cancer at 63 and an aunt had breast cancer at 45', answer: 0 },
              { stem: 'He prefers to make decisions together with his wife and eldest son', answer: 2 },
            ],
          },
        ],
      },
    ],
  },
}

export default extra
