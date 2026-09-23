import type { KfpCase } from '../../types'

export const group3Cases: KfpCase[] = [
  {
    id: 'kfp-g3-c1',
    exam: 'KFP',
    specialty: "Women's Health",
    topic: 'Hypertension in pregnancy / pre-eclampsia',
    title: 'A headache at 34 weeks',
    vignette:
      "Priya, a 31-year-old primigravida at 34+2 weeks gestation, presents to your general practice for a routine antenatal visit. She mentions a dull frontal headache for the past two days that has not responded to paracetamol, and says her wedding ring has become tight over the last week. Her booking blood pressure at 10 weeks was 112/68 mmHg and her pregnancy has otherwise been uncomplicated. Today, her blood pressure measured with an appropriately sized cuff is 152/98 mmHg. Symphysis-fundal height is 31 cm and fetal movements are reported as normal.",
    items: [
      {
        id: 'kfp-g3-c1-i1',
        question:
          'What is the single most appropriate immediate next step in her assessment during this consultation?',
        options: [
          {
            key: 'A',
            text: 'Repeat the blood pressure after several minutes of rest and send a urine sample for protein:creatinine ratio',
          },
          { key: 'B', text: 'Reassure her that headache and swelling are normal in late pregnancy and review in two weeks' },
          { key: 'C', text: 'Perform a urine dipstick for glucose and arrange an oral glucose tolerance test' },
          { key: 'D', text: 'Commence oral labetalol immediately without further assessment' },
        ],
        correctKey: 'A',
        explanation:
          'New hypertension after 20 weeks gestation must be confirmed on a repeat measurement after rest, and quantified proteinuria (spot urine protein:creatinine ratio) is the key test that distinguishes gestational hypertension from pre-eclampsia. Headache and rapidly progressive oedema are symptoms that raise concern and mandate assessment in the same visit rather than deferral.',
        optionExplanations: {
          A: 'Correct - confirm the elevated reading after rest and quantify proteinuria with a spot protein:creatinine ratio; both change management immediately.',
          B: 'Swelling alone can be physiological, but new hypertension with a persistent headache at 34 weeks is never a reassure-and-return presentation.',
          C: 'Glycosuria and gestational diabetes screening are not relevant to this presentation and would delay recognition of pre-eclampsia.',
          D: 'Antihypertensive therapy may well be needed, but prescribing before confirming the blood pressure and assessing for end-organ involvement skips the decisive diagnostic step.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g3-c1-i2',
        stemAddendum:
          'After 10 minutes of seated rest her blood pressure is 158/104 mmHg in both arms. Urine dipstick shows 2+ protein and the laboratory reports a spot urine protein:creatinine ratio of 62 mg/mmol. Deep tendon reflexes are brisk but there is no clonus. She has no epigastric pain and no visual disturbance.',
        question: 'Which diagnosis best fits her current presentation?',
        options: [
          { key: 'A', text: 'Chronic (pre-existing) hypertension' },
          { key: 'B', text: 'Gestational hypertension without proteinuria' },
          { key: 'C', text: 'Pre-eclampsia' },
          { key: 'D', text: 'White coat hypertension of pregnancy' },
        ],
        correctKey: 'C',
        explanation:
          'Pre-eclampsia is new-onset hypertension (systolic 140 mmHg or above, or diastolic 90 mmHg or above) after 20 weeks gestation, accompanied by evidence of maternal organ dysfunction or uteroplacental dysfunction. Significant proteinuria is defined as a protein:creatinine ratio of 30 mg/mmol or more; at 62 mg/mmol with a persistent headache, this is pre-eclampsia.',
        optionExplanations: {
          A: 'Chronic hypertension is present before 20 weeks or before pregnancy; her booking blood pressure at 10 weeks was normal.',
          B: 'Gestational hypertension is new hypertension after 20 weeks WITHOUT proteinuria or other organ involvement - her protein:creatinine ratio of 62 mg/mmol excludes this label.',
          C: 'Correct - new hypertension after 20 weeks plus proteinuria (>=30 mg/mmol) and symptoms defines pre-eclampsia.',
          D: 'Repeated elevated readings in a symptomatic woman with proteinuria cannot be attributed to a white coat effect.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g3-c1-i3',
        stemAddendum:
          'You explain the diagnosis to Priya and begin organising her care while she remains in the treatment room.',
        question:
          'Which set of investigations is most important to arrange urgently to assess maternal end-organ involvement?',
        options: [
          { key: 'A', text: 'Full blood count, urea/electrolytes/creatinine, liver function tests and coagulation profile' },
          { key: 'B', text: 'Thyroid function tests, iron studies and vitamin D' },
          { key: 'C', text: 'Mid-stream urine culture and a random blood glucose alone' },
          { key: 'D', text: 'Antiphospholipid antibodies, ANA and complement levels' },
        ],
        correctKey: 'A',
        explanation:
          'The urgent bloods in suspected pre-eclampsia look for the organ dysfunction that determines severity and timing of delivery: falling platelets and haemolysis (FBC, film), renal impairment (creatinine), hepatic involvement (transaminases) and coagulopathy. Fetal assessment with CTG and ultrasound for growth, amniotic fluid and umbilical artery Doppler is arranged in parallel by the receiving unit.',
        optionExplanations: {
          A: 'Correct - these detect thrombocytopenia, haemolysis, renal impairment, hepatic dysfunction and coagulopathy, including HELLP syndrome.',
          B: 'These have no role in the acute assessment of pre-eclampsia and would delay definitive care.',
          C: 'Urine culture is reasonable if infection is suspected, but neither test assesses the organ systems affected by pre-eclampsia.',
          D: 'Autoimmune serology may be considered much later in recurrent early-onset disease; it is irrelevant to acute management today.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g3-c1-i4',
        stemAddendum:
          'While you are on the phone to the hospital, a repeat blood pressure reading is 164/108 mmHg. She remains alert, with no clonus, no visual symptoms and no epigastric tenderness.',
        question: 'What is the most appropriate immediate management?',
        options: [
          {
            key: 'A',
            text: 'Give oral labetalol and arrange immediate transfer to the hospital birth unit with escorted transport',
          },
          { key: 'B', text: 'Commence oral ramipril and review in the practice tomorrow' },
          { key: 'C', text: 'Advise bed rest at home with daily home blood pressure monitoring and review in 48 hours' },
          { key: 'D', text: 'Prescribe a thiazide diuretic and arrange an obstetric outpatient appointment in two weeks' },
        ],
        correctKey: 'A',
        explanation:
          'Severe hypertension in pregnancy (systolic 160 mmHg or above, or diastolic 110 mmHg or above) requires prompt treatment to reduce the risk of maternal stroke, and pre-eclampsia at 34 weeks requires same-day assessment in a unit able to monitor mother and fetus and give magnesium sulfate and corticosteroids if needed. Labetalol, nifedipine and methyldopa are the accepted oral agents in pregnancy. She should never drive herself.',
        optionExplanations: {
          A: 'Correct - treat the severe hypertension with a pregnancy-safe agent and transfer urgently for maternal and fetal assessment.',
          B: 'ACE inhibitors are contraindicated in pregnancy because of fetal renal injury, oligohydramnios and skull hypoplasia, and outpatient review tomorrow is unsafe.',
          C: 'Bed rest at home does not treat pre-eclampsia, which can deteriorate to eclampsia or HELLP within hours.',
          D: 'Diuretics are not used to treat hypertension in pregnancy, and a two-week wait risks maternal and fetal catastrophe.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g3-c1-i5',
        stemAddendum:
          'Priya was admitted, given betamethasone, and had an induction of labour at 36 weeks with a healthy baby boy. She returns to you six weeks postpartum. Her blood pressure today is 138/86 mmHg and she is no longer taking antihypertensives. She asks what this means for her future.',
        question:
          'Which statement should most strongly guide her longer-term care plan following pre-eclampsia?',
        options: [
          {
            key: 'A',
            text: 'She should have ongoing blood pressure and cardiovascular risk review, and take low-dose aspirin from early in any future pregnancy',
          },
          { key: 'B', text: 'Pre-eclampsia resolves at delivery and carries no future health implications' },
          { key: 'C', text: 'She should avoid all future pregnancies because recurrence is near-universal' },
          { key: 'D', text: 'She should remain on lifelong antihypertensive therapy regardless of her blood pressure readings' },
        ],
        correctKey: 'A',
        explanation:
          'Pre-eclampsia is a marker of substantially increased lifetime risk of chronic hypertension, ischaemic heart disease, stroke and chronic kidney disease, so it should trigger ongoing blood pressure checks and absolute cardiovascular risk assessment with lifestyle support. In a future pregnancy, low-dose aspirin (typically 100-150 mg nocte) started before 16 weeks, with adequate calcium intake, reduces recurrence risk. Persistent hypertension or proteinuria beyond three months postpartum warrants further investigation.',
        optionExplanations: {
          A: 'Correct - long-term cardiovascular surveillance plus aspirin prophylaxis commenced before 16 weeks in a future pregnancy is the evidence-based plan.',
          B: 'Pre-eclampsia is an independent long-term cardiovascular and renal risk factor, so this is a significant missed opportunity.',
          C: 'Recurrence risk is meaningfully increased but far from universal; future pregnancy is appropriate with planned early aspirin and closer surveillance.',
          D: 'Antihypertensive therapy is guided by her actual readings and absolute cardiovascular risk, not automatically continued for life.',
        },
        difficulty: 'moderate',
      },
    ],
  },
  {
    id: 'kfp-g3-c2',
    exam: 'KFP',
    specialty: 'Child & Adolescent Health',
    topic: 'The acutely limping child',
    title: 'The toddler who will not walk',
    vignette:
      "Noah, a 2-year-old boy, is brought to your practice by his mother because he refuses to walk since waking this morning. He cried when she changed his nappy and screamed when she tried to put him down. There is no history of trauma or falls, and he had a mild runny nose about a week ago. On examination he is miserable but consolable, temperature 38.6 degrees Celsius, heart rate 152/min, and capillary refill 2 seconds. He holds his right hip flexed, abducted and externally rotated, and resists any passive internal rotation. There is no rash and no obvious swelling, bruising or deformity of the leg.",
    items: [
      {
        id: 'kfp-g3-c2-i1',
        question:
          'Which diagnosis is most important to exclude urgently in this child?',
        options: [
          { key: 'A', text: 'Transient synovitis of the hip' },
          { key: 'B', text: 'Septic arthritis of the hip' },
          { key: 'C', text: 'Perthes disease' },
          { key: 'D', text: 'Growing pains' },
        ],
        correctKey: 'B',
        explanation:
          'Fever with refusal to weight bear and a hip held in flexion, abduction and external rotation (the position of maximal joint capacity) is septic arthritis until proven otherwise. It is a surgical emergency: delayed drainage causes irreversible cartilage and femoral head destruction. Transient synovitis is far more common but is a diagnosis made only after sepsis is excluded.',
        optionExplanations: {
          A: 'Transient synovitis is the commonest cause of an atraumatic limp at this age, but the child is usually afebrile or has only a low-grade fever and can generally still bear some weight.',
          B: 'Correct - fever, complete refusal to weight bear and a resistant, externally rotated hip make septic arthritis the time-critical diagnosis to exclude.',
          C: 'Perthes disease typically affects children aged 4-8 years, presents with an insidious painless or mildly painful limp, and does not cause fever.',
          D: 'Benign nocturnal limb pains are bilateral, occur in the evening, resolve by morning and never cause fever or refusal to walk - they are a diagnosis of exclusion in an otherwise well child.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfp-g3-c2-i2',
        stemAddendum:
          'You are able to obtain point-of-care bloods through a nearby pathology collection centre: white cell count 17.8 x10^9/L, CRP 68 mg/L, ESR 54 mm/hr.',
        question:
          'How do these findings most appropriately alter your assessment of this child?',
        options: [
          {
            key: 'A',
            text: 'They substantially increase the probability of septic arthritis and support urgent referral',
          },
          { key: 'B', text: 'A normal-range haemoglobin effectively excludes bone or joint infection' },
          { key: 'C', text: 'They confirm a viral illness and justify symptomatic treatment at home' },
          { key: 'D', text: 'Inflammatory markers are unhelpful in children and should not influence the decision' },
        ],
        correctKey: 'A',
        explanation:
          'Fever above 38.5 degrees Celsius, refusal to weight bear, ESR above 40 mm/hr and white cell count above 12 x10^9/L are the classic predictors (Kocher criteria, with CRP above 20 mg/L a strong additional predictor) of septic arthritis rather than transient synovitis. With all four present, the probability is high. Importantly, normal inflammatory markers would NOT exclude septic arthritis early in its course - clinical suspicion always overrides reassuring bloods.',
        optionExplanations: {
          A: 'Correct - all four predictors are met, markedly raising the probability of septic arthritis and mandating urgent referral.',
          B: 'Haemoglobin has no discriminatory value here; septic arthritis is not excluded by any single normal parameter.',
          C: 'A recent viral prodrome is common in transient synovitis, but this degree of fever and inflammatory response cannot be attributed to a resolved coryzal illness.',
          D: 'Inflammatory markers are a validated part of the risk assessment; they simply must never be used to override a worrying clinical picture.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g3-c2-i3',
        question:
          'Which imaging investigation is most appropriate to arrange as part of his urgent assessment?',
        options: [
          { key: 'A', text: 'Plain hip radiograph alone, reported the following day' },
          { key: 'B', text: 'Urgent ultrasound of the hip to detect a joint effusion' },
          { key: 'C', text: 'Routine outpatient MRI of the pelvis within two weeks' },
          { key: 'D', text: 'Nuclear medicine bone scan arranged from the practice' },
        ],
        correctKey: 'B',
        explanation:
          'Ultrasound is the first-line imaging modality for the acutely irritable hip: it is rapid, radiation-free and sensitive for an effusion, and it guides diagnostic joint aspiration. A plain radiograph is usually obtained as well to look for fracture, Perthes disease or a slipped epiphysis, but it is normal early in septic arthritis and must never delay referral. Aspiration of the joint with Gram stain and culture, plus blood cultures, remains the definitive diagnostic step.',
        optionExplanations: {
          A: 'Radiographs are typically normal in early septic arthritis and next-day reporting introduces a dangerous delay.',
          B: 'Correct - urgent ultrasound detects an effusion and guides aspiration, which is the definitive diagnostic test.',
          C: 'MRI is valuable for suspected osteomyelitis, but an outpatient wait of two weeks is entirely inappropriate for a possible septic joint.',
          D: 'A bone scan is slow, non-specific and not the appropriate primary care pathway for an acutely septic-looking hip.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g3-c2-i4',
        stemAddendum:
          'Noah remains febrile in your treatment room and is now refusing oral fluids. His mother asks whether she can take him home with antibiotics and bring him back tomorrow.',
        question: 'What is the most appropriate management from your practice?',
        options: [
          {
            key: 'A',
            text: 'Arrange immediate transfer to a paediatric emergency department, keeping him nil by mouth and not starting oral antibiotics',
          },
          { key: 'B', text: 'Prescribe oral flucloxacillin and review him in the practice in 24 hours' },
          { key: 'C', text: 'Prescribe ibuprofen for presumed transient synovitis and review in 48-72 hours' },
          { key: 'D', text: 'Refer to an orthopaedic outpatient clinic for an appointment within the next fortnight' },
        ],
        correctKey: 'A',
        explanation:
          'Suspected septic arthritis requires emergency transfer for joint aspiration, blood cultures and intravenous antibiotics, usually with surgical washout. Antibiotics should not be started in the community because they reduce the yield of joint fluid and blood cultures without controlling the infection, and he should be kept fasted in anticipation of theatre. Safety-netting a parent to return tomorrow is not acceptable when the joint may be destroyed within hours.',
        optionExplanations: {
          A: 'Correct - urgent transfer, fasted, with antibiotics deferred until cultures and aspiration are obtained in hospital.',
          B: 'Oral antibiotics are inadequate for a septic joint and compromise the microbiological diagnosis that guides weeks of targeted therapy.',
          C: 'Treating as transient synovitis without excluding sepsis risks permanent joint destruction and avascular necrosis.',
          D: 'A fortnight-long wait for an outpatient appointment represents a critical failure to recognise a surgical emergency.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g3-c2-i5',
        stemAddendum:
          'Noah had an arthrotomy and washout, grew Staphylococcus aureus from joint fluid, and completed antibiotic therapy with an excellent recovery. At his post-discharge review, his mother mentions the family delayed some vaccines during a period of illness and travel, and the Australian Immunisation Register shows he has received nothing since his 12-month visit.',
        question: 'What is the most appropriate approach to his immunisations?',
        options: [
          {
            key: 'A',
            text: 'Give his overdue 18-month vaccines today using a catch-up schedule and record them on the Australian Immunisation Register',
          },
          { key: 'B', text: 'Restart the entire childhood schedule from the beginning' },
          { key: 'C', text: 'Defer all vaccination for 12 months because of his recent severe infection and surgery' },
          { key: 'D', text: 'Give only the live vaccines now and omit the remaining scheduled vaccines' },
        ],
        correctKey: 'A',
        explanation:
          'Under the Australian Immunisation Handbook, doses already given always count - the schedule is resumed, never restarted - and overdue children should be brought up to date opportunistically using the catch-up schedule, with doses reported to the Australian Immunisation Register. The 18-month visit includes DTPa, Haemophilus influenzae type b and MMRV. Recovery from an infection and recent surgery are not contraindications; only current moderate to severe acute illness warrants short deferral.',
        optionExplanations: {
          A: 'Correct - catch up the missed 18-month doses opportunistically at this visit and record them on the register.',
          B: 'Previous valid doses always count; restarting exposes the child to unnecessary injections and delays protection.',
          C: 'Recent infection and surgery are not contraindications, and a further 12-month delay leaves him unprotected against vaccine-preventable disease.',
          D: 'Selectively giving only live vaccines has no basis; the full set of due antigens should be given according to the catch-up schedule.',
        },
        difficulty: 'moderate',
      },
    ],
  },
  {
    id: 'kfp-g3-c3',
    exam: 'KFP',
    specialty: "Men's Health",
    topic: 'PSA testing, LUTS and low testosterone',
    title: 'Asking for a prostate check',
    vignette:
      "Dean, a 54-year-old warehouse supervisor, books an appointment because a workmate was recently diagnosed with prostate cancer and he wants 'the prostate blood test'. On questioning he describes getting up twice most nights to pass urine and a weaker stream over the past year, but no dysuria, haematuria or bone pain. His father died of cardiovascular disease at 71 and there is no family history of prostate or breast cancer. He has a body mass index of 34 kg/m2, takes no regular medications, and has not seen a doctor in six years.",
    items: [
      {
        id: 'kfp-g3-c3-i1',
        question:
          'What is the single most appropriate first step before any blood test is ordered?',
        options: [
          {
            key: 'A',
            text: 'Have a shared decision-making discussion about the benefits and harms of PSA testing, and assess his lower urinary tract symptoms',
          },
          { key: 'B', text: 'Order the PSA immediately without discussion, since he has requested it' },
          { key: 'C', text: 'Tell him PSA testing is not recommended in Australia and decline to test' },
          { key: 'D', text: 'Perform a digital rectal examination as the primary screening test and test only if it is abnormal' },
        ],
        correctKey: 'A',
        explanation:
          'Australian guidance recommends that PSA testing in asymptomatic men be offered only after a discussion of benefits and harms, because testing can lead to biopsy complications and to the detection and treatment of cancers that would never have caused harm. Because he also has lower urinary tract symptoms, structured symptom assessment (for example the IPSS), a urinalysis and a medication and fluid review are part of the same consultation.',
        optionExplanations: {
          A: 'Correct - informed, shared decision-making about the benefits and harms of PSA testing, combined with assessment of his urinary symptoms, must precede testing.',
          B: 'Testing without discussion denies him the chance to weigh over-diagnosis and over-treatment against the mortality benefit.',
          C: 'PSA testing is not recommended as a population screening program, but it IS offered to appropriately informed men, typically two-yearly from age 50 to 69 for men at average risk.',
          D: 'Digital rectal examination is not recommended as a stand-alone primary care screening test; it has poor sensitivity and a normal examination does not exclude cancer.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g3-c3-i2',
        stemAddendum:
          'After the discussion Dean elects to proceed. His IPSS is 11 (moderate symptoms), urinalysis is negative and his total PSA returns at 5.2 micrograms/L.',
        question: 'What is the most appropriate next step in managing this PSA result?',
        options: [
          { key: 'A', text: 'Refer immediately for transrectal biopsy on the basis of this single result' },
          {
            key: 'B',
            text: 'Repeat the total PSA (with free-to-total ratio) in 1-3 months, having excluded recent ejaculation, vigorous exercise, instrumentation and urinary infection',
          },
          { key: 'C', text: 'Reassure him that a PSA of 5.2 micrograms/L is normal for his age and repeat in two years' },
          { key: 'D', text: 'Commence empirical dutasteride and recheck the PSA in six months' },
        ],
        correctKey: 'B',
        explanation:
          'A single elevated PSA should be confirmed before referral, because transient rises follow ejaculation, vigorous exercise or cycling, urinary infection, instrumentation and prostatitis. Australian guidance advises repeating the test within 1-3 months, with the free-to-total ratio, and referring for further investigation if the repeat remains above the age-appropriate threshold (commonly a total PSA above 3.0 micrograms/L in men under 70).',
        optionExplanations: {
          A: 'Referral for biopsy on a single unconfirmed result exposes men to unnecessary procedures; a meaningful proportion of elevated results normalise on repeat.',
          B: 'Correct - confirm with a repeat PSA and free-to-total ratio in 1-3 months after excluding reversible causes of a transient rise.',
          C: 'A total PSA of 5.2 micrograms/L is well above the threshold for a 54-year-old man and cannot be dismissed as age-appropriate.',
          D: 'A 5-alpha-reductase inhibitor roughly halves PSA levels, which would obscure interpretation and delay a cancer diagnosis; it must not be started during diagnostic work-up.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g3-c3-i3',
        stemAddendum:
          'He abstained from ejaculation and cycling for 48 hours before the repeat test. The repeat total PSA is 5.0 micrograms/L with a free-to-total ratio of 11%. Digital rectal examination reveals a smooth, symmetrically enlarged prostate with no nodules.',
        question: 'What is the most appropriate next step?',
        options: [
          { key: 'A', text: 'Refer to a urologist for further assessment, expecting multiparametric MRI before any biopsy' },
          { key: 'B', text: 'Reassure him, as a benign-feeling prostate on examination excludes malignancy' },
          { key: 'C', text: 'Repeat the PSA again in 12 months and take no further action now' },
          { key: 'D', text: 'Arrange a whole-body bone scan and CT abdomen/pelvis from general practice' },
        ],
        correctKey: 'A',
        explanation:
          'A confirmed PSA above the age-specific threshold, particularly with a low free-to-total ratio (below about 25%, and much more concerning at 11%), warrants urological referral. Contemporary Australian practice is that multiparametric MRI is performed before biopsy to target lesions and to allow some men to avoid biopsy altogether. A normal digital rectal examination does not exclude significant cancer.',
        optionExplanations: {
          A: 'Correct - a confirmed elevated PSA with a low free-to-total ratio warrants urology referral, with mpMRI preceding any biopsy decision.',
          B: 'Many clinically significant prostate cancers are impalpable; a normal examination cannot override a persistently elevated PSA.',
          C: 'A further 12 months of observation risks progression of a potentially curable cancer.',
          D: 'Staging imaging is reserved for confirmed high-risk disease and would be inappropriate, costly and anxiety-provoking at this stage.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g3-c3-i4',
        stemAddendum:
          'While arranging the referral, Dean mentions that for the past year he has felt persistently tired, has lost interest in sex and has difficulty maintaining erections. His wife reports loud snoring with witnessed pauses in breathing. Examination shows normal testicular volume and no gynaecomastia.',
        question:
          'Which investigation approach is most appropriate for his suspected androgen deficiency?',
        options: [
          { key: 'A', text: 'A single random afternoon total testosterone level' },
          {
            key: 'B',
            text: 'Two separate fasting morning total testosterone levels, with LH, FSH, SHBG and prolactin',
          },
          { key: 'C', text: 'A salivary testosterone level' },
          { key: 'D', text: 'Commence testosterone therapy empirically and measure levels only if symptoms fail to improve' },
        ],
        correctKey: 'B',
        explanation:
          'Testosterone has a marked diurnal rhythm and falls after food, so diagnosis requires at least two fasting morning samples (before 10 am) on separate days. Gonadotrophins distinguish primary testicular failure (high LH/FSH) from hypogonadotrophic hypogonadism, and SHBG and prolactin aid interpretation. In Australia, PBS-subsidised testosterone for androgen deficiency requires confirmed low levels on two morning samples plus, in most pathways, endocrinologist, urologist or specialist confirmation.',
        optionExplanations: {
          A: 'A single random afternoon sample is unreliable because of diurnal variation and post-prandial suppression, and will misclassify many men.',
          B: 'Correct - two fasting morning total testosterone levels with LH, FSH, SHBG and prolactin establish the diagnosis and localise the cause.',
          C: 'Salivary testosterone is not a validated diagnostic test in Australian practice.',
          D: 'Empirical testosterone without biochemical confirmation is inappropriate, and is specifically hazardous here while prostate cancer is being excluded.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g3-c3-i5',
        stemAddendum:
          'His two morning total testosterone levels are 9.4 and 9.8 nmol/L with a normal LH, FSH and prolactin. His HbA1c is 6.9%, blood pressure 146/90 mmHg and he is awaiting his urology appointment.',
        question: 'What is the most appropriate management plan at this stage?',
        options: [
          {
            key: 'A',
            text: 'Treat his newly diagnosed type 2 diabetes, hypertension and obesity, investigate for obstructive sleep apnoea, and defer any testosterone therapy',
          },
          { key: 'B', text: 'Start testosterone gel now to improve his energy and erectile function' },
          { key: 'C', text: 'Attribute all his symptoms to ageing and provide no specific management' },
          { key: 'D', text: 'Refer for assisted reproductive services as the priority' },
        ],
        correctKey: 'A',
        explanation:
          'A low-normal testosterone with normal gonadotrophins in a man with obesity, newly diagnosed type 2 diabetes and probable obstructive sleep apnoea reflects functional suppression of the hypothalamic-pituitary-gonadal axis, not primary androgen deficiency. Weight loss, treating diabetes and hypertension, and managing sleep apnoea improve both testosterone levels and the symptoms themselves. Crucially, testosterone therapy is contraindicated where prostate cancer is suspected or undiagnosed, so it must not be started before urological assessment is complete.',
        optionExplanations: {
          A: 'Correct - address the reversible metabolic drivers and obstructive sleep apnoea first, and withhold testosterone while prostate cancer is being excluded.',
          B: 'Testosterone is contraindicated with an unresolved suspicion of prostate cancer, is not PBS-subsidised for obesity-related functional suppression, and would not address his metabolic disease.',
          C: 'Dismissing the symptoms misses a new diagnosis of type 2 diabetes, untreated hypertension and probable obstructive sleep apnoea - all modifiable.',
          D: 'Fertility is not the presenting concern and this does not address any of his active clinical problems.',
        },
        difficulty: 'hard',
      },
    ],
  },
]
