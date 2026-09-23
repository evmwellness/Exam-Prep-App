import type { KfpCase } from '../../types'

export const group4Cases: KfpCase[] = [
  {
    id: 'kfp-g4-c1',
    exam: 'KFP',
    specialty: 'Emergency & Acute Care',
    topic: 'Anaphylaxis in general practice',
    title: 'Collapse after the cashew chicken',
    vignette:
      "Priya, a 19-year-old university student, is brought into your suburban general practice by a friend about 15 minutes after eating a takeaway stir-fry. She has an urticarial rash over her chest and arms, is coughing repeatedly and says her throat feels 'tight'. She has a history of mild asthma and known cashew allergy but has never had a reaction this severe. On assessment she is anxious, respiratory rate 26/min, audible stridor on inspiration, widespread wheeze, heart rate 124/min, blood pressure 102/68 mmHg, oxygen saturation 93% on room air.",
    items: [
      {
        id: 'kfp-g4-c1-i1',
        question:
          'Which single feature of her presentation most clearly establishes that this is anaphylaxis rather than a generalised allergic reaction?',
        options: [
          { key: 'A', text: 'The widespread urticarial rash' },
          { key: 'B', text: 'Inspiratory stridor with wheeze and hypoxaemia' },
          { key: 'C', text: 'Her known history of cashew allergy' },
          { key: 'D', text: 'Her anxiety and tachycardia' },
        ],
        correctKey: 'B',
        explanation:
          'Per ASCIA, anaphylaxis is defined by involvement of the airway, breathing or circulation (or persistent severe gastrointestinal symptoms), with or without skin features. Stridor indicates upper airway obstruction and wheeze with SpO2 93% indicates lower airway involvement - either alone is diagnostic.',
        optionExplanations: {
          A: 'Urticaria alone, however widespread, is a generalised allergic reaction and does not define anaphylaxis.',
          B: 'Correct - upper airway (stridor) and breathing (wheeze, SpO2 93%) compromise are ASCIA-defined anaphylaxis criteria.',
          C: 'A known allergy raises pre-test probability but does not by itself define the severity of this episode.',
          D: 'Anxiety and sinus tachycardia are non-specific and can accompany a mild reaction or distress alone.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfp-g4-c1-i2',
        stemAddendum:
          'Your practice nurse brings the emergency trolley. Priya weighs approximately 55 kg. She has her own adrenaline autoinjector in her bag but has not used it.',
        question: 'What is the most appropriate immediate drug treatment?',
        options: [
          { key: 'A', text: 'Adrenaline 0.5 mg (0.5 mL of 1:1000) intramuscularly into the mid-outer thigh' },
          { key: 'B', text: 'Oral cetirizine 10 mg plus salbutamol 12 puffs via spacer' },
          { key: 'C', text: 'Adrenaline 0.5 mg (0.5 mL of 1:1000) subcutaneously into the upper arm' },
          { key: 'D', text: 'Intravenous hydrocortisone 200 mg while establishing IV access' },
        ],
        correctKey: 'A',
        explanation:
          'Intramuscular adrenaline into the anterolateral thigh is the first-line treatment for anaphylaxis and must not be delayed. The adult/over-20 kg dose is 0.01 mg/kg up to a maximum of 0.5 mg, repeated every 5 minutes as needed. She should also be laid flat with legs raised and given high-flow oxygen.',
        optionExplanations: {
          A: 'Correct - IM adrenaline 0.5 mg into the mid-outer thigh is first-line and time-critical; repeat every 5 minutes if there is no improvement.',
          B: 'Antihistamines and bronchodilators are adjuncts only; using them instead of adrenaline is a common and dangerous error.',
          C: 'Subcutaneous and upper-arm routes give slower, less reliable absorption than the anterolateral thigh IM route.',
          D: 'Corticosteroids have slow onset, do not treat the acute obstruction, and are no longer routinely recommended as first-line.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfp-g4-c1-i3',
        stemAddendum:
          'She receives IM adrenaline, oxygen 8 L/min via mask and is laid flat. Five minutes later stridor persists, blood pressure has fallen to 84/50 mmHg and she is pale and drowsy. An ambulance has been called (estimated arrival 12 minutes).',
        question: 'What is the most appropriate next step?',
        options: [
          { key: 'A', text: 'Wait for the ambulance before giving any further adrenaline' },
          { key: 'B', text: 'Sit her upright to help her breathing and give promethazine IM' },
          { key: 'C', text: 'Repeat IM adrenaline 0.5 mg and start a rapid IV normal saline bolus' },
          { key: 'D', text: 'Give nebulised adrenaline 5 mg as the sole further adrenaline dose' },
        ],
        correctKey: 'C',
        explanation:
          'Refractory anaphylaxis requires repeat IM adrenaline every 5 minutes plus aggressive IV fluid resuscitation (20 mL/kg normal saline) for distributive shock. Posture matters: keep the patient lying flat with legs elevated, as sitting or standing a hypotensive patient up can precipitate fatal empty-ventricle syndrome.',
        optionExplanations: {
          A: 'Delaying repeat adrenaline in deteriorating anaphylaxis is associated with fatal outcomes; treat now.',
          B: 'Sitting a hypotensive anaphylaxis patient up risks sudden cardiovascular collapse, and sedating antihistamines are not treatment.',
          C: 'Correct - repeat IM adrenaline every 5 minutes with IV fluid resuscitation is the correct response to refractory anaphylaxis with hypotension.',
          D: 'Nebulised adrenaline may transiently help upper airway oedema but does not treat shock and does not replace IM dosing.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g4-c1-i4',
        stemAddendum:
          'After a second IM adrenaline dose and 1 litre of normal saline she improves markedly. Blood pressure is 112/72 mmHg, stridor has resolved and saturations are 98%. She feels well and asks whether she can just go home with her friend, since her exams are tomorrow.',
        question: 'What is the most appropriate disposition advice?',
        options: [
          { key: 'A', text: 'Discharge home now with an antihistamine and advice to return if unwell' },
          { key: 'B', text: 'Transfer by ambulance to hospital for observation of at least 4 hours after the last adrenaline dose' },
          { key: 'C', text: 'Observe in the practice for 30 minutes then discharge with a prednisolone script' },
          { key: 'D', text: 'Discharge home provided her friend stays with her overnight' },
        ],
        correctKey: 'B',
        explanation:
          'All patients treated with adrenaline for anaphylaxis require transfer to hospital and observation for at least 4 hours after the last dose because of the risk of biphasic reactions. Longer observation is advised for those who required repeated adrenaline, had severe or refractory features, have asthma, or live far from medical care - all of which apply here.',
        optionExplanations: {
          A: 'Immediate discharge ignores the risk of a biphasic reaction, which can be as severe as the initial event.',
          B: 'Correct - she required two doses of adrenaline and fluids, so ambulance transfer and a minimum 4-hour observation period are mandatory.',
          C: 'Thirty minutes in a general practice is inadequate monitoring and lacks resuscitation backup.',
          D: 'A layperson chaperone is not a substitute for monitored observation in a facility able to re-treat anaphylaxis.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g4-c1-i5',
        stemAddendum:
          'She is discharged from hospital the following day. She attends you for review one week later, bringing the expired autoinjector she was carrying.',
        question:
          'Which set of actions best represents appropriate ongoing general practice management?',
        options: [
          {
            key: 'A',
            text: 'Prescribe two in-date adrenaline autoinjectors, provide and demonstrate an ASCIA Action Plan for Anaphylaxis, and refer to a clinical immunology/allergy specialist',
          },
          { key: 'B', text: 'Arrange serum tryptase now to confirm the diagnosis before any further action' },
          { key: 'C', text: 'Prescribe a daily non-sedating antihistamine and advise strict nut avoidance only' },
          { key: 'D', text: 'Refer for immediate cashew oral immunotherapy in general practice' },
        ],
        correctKey: 'A',
        explanation:
          'Post-anaphylaxis general practice care has three pillars: reliable access to adrenaline (at least two in-date autoinjectors, with technique demonstrated using a trainer device), a personalised written ASCIA Action Plan for Anaphylaxis, and specialist allergy referral for confirmation of triggers and long-term planning. Also advise medical identification jewellery, informing her university, and registering for autoinjector expiry reminders. Her asthma should be optimised, as poorly controlled asthma increases the risk of fatal anaphylaxis.',
        optionExplanations: {
          A: 'Correct - autoinjector supply and training, a written ASCIA action plan, and allergy specialist referral are the core components.',
          B: 'Tryptase is only useful when taken within hours of the reaction; a normal level a week later does not exclude anaphylaxis and delays care.',
          C: 'Antihistamines do not prevent or treat anaphylaxis, and avoidance advice alone leaves her without rescue treatment.',
          D: 'Oral immunotherapy is a specialist-supervised intervention and is never initiated or conducted in general practice.',
        },
        difficulty: 'moderate',
      },
    ],
  },
  {
    id: 'kfp-g4-c2',
    exam: 'KFP',
    specialty: 'Infectious Disease & Immunisation',
    topic: 'Febrile returned traveller and catch-up immunisation',
    title: 'Fever after Bali',
    vignette:
      "Daniel, a 28-year-old office worker, presents on a Monday morning with four days of fever up to 39.4 degrees Celsius, severe headache, myalgia and marked lethargy. He returned nine days ago from a three-week trip through Bali and rural Lombok, where he swam in a river and ate street food. He took no malaria prophylaxis and cannot recall which travel vaccines he received. On examination he looks unwell but alert, temperature 38.9 degrees Celsius, pulse 96/min, blood pressure 118/74 mmHg, no rash, no neck stiffness, mild right upper quadrant tenderness and no localising chest or urinary signs.",
    items: [
      {
        id: 'kfp-g4-c2-i1',
        question:
          'In assessing this febrile returned traveller, which diagnosis must be actively excluded first because of its potential to cause rapid deterioration?',
        options: [
          { key: 'A', text: 'Dengue fever' },
          { key: 'B', text: 'Malaria' },
          { key: 'C', text: 'Hepatitis A' },
          { key: 'D', text: 'Traveller-acquired influenza' },
        ],
        correctKey: 'B',
        explanation:
          'Malaria is the must-not-miss diagnosis in any febrile traveller returning from an endemic area, because falciparum malaria can progress to severe disease and death within hours. He took no prophylaxis, and parts of eastern Indonesia including Lombok carry malaria risk. Fever within three months of return from an endemic area mandates urgent exclusion of malaria regardless of how well the patient looks.',
        optionExplanations: {
          A: 'Dengue is common in Indonesia and is important, but it is usually self-limiting and is not the single most time-critical exclusion.',
          B: 'Correct - falciparum malaria can deteriorate within hours and must be excluded urgently in any febrile returned traveller.',
          C: 'Hepatitis A is plausible given the street food exposure and RUQ tenderness, but it does not cause the same hour-to-hour deterioration risk.',
          D: 'Influenza is a common travel-associated infection but is not the priority exclusion in this setting.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g4-c2-i2',
        stemAddendum:
          'He is haemodynamically stable and able to tolerate oral fluids. Your practice is 10 minutes from a hospital with on-site pathology.',
        question: 'Which investigation strategy is most appropriate today?',
        options: [
          { key: 'A', text: 'Malaria rapid antigen test only, with thick and thin films if the antigen test is positive' },
          {
            key: 'B',
            text: 'Urgent thick and thin blood films plus a malaria rapid antigen test, with FBE, LFTs, UEC, CRP and blood cultures',
          },
          { key: 'C', text: 'Dengue NS1 and serology alone, with malaria testing only if he develops rigors' },
          { key: 'D', text: 'Empirical antibiotics now and repeat testing in 72 hours if he is not improving' },
        ],
        correctKey: 'B',
        explanation:
          'Thick and thin films remain the reference standard and are performed alongside a rapid antigen test, because rapid tests can miss non-falciparum species and low parasitaemia. A single negative set does not exclude malaria - repeat films over 24 to 48 hours (classically three sets) if suspicion persists. Baseline FBE (thrombocytopenia is common in both malaria and dengue), LFTs, UEC, CRP and blood cultures broaden the differential to include typhoid, leptospirosis and rickettsial infection.',
        optionExplanations: {
          A: 'Rapid antigen tests alone can be falsely negative with low parasitaemia or non-falciparum species; films are still required.',
          B: 'Correct - paired films and antigen testing plus baseline bloods and cultures cover the key differentials efficiently.',
          C: 'Deferring malaria testing until rigors appear is unsafe; malaria fever patterns are often irregular early in the illness.',
          D: 'Blind antibiotics without a diagnosis delays identification of malaria and risks masking bacteraemia on later cultures.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g4-c2-i3',
        stemAddendum:
          'Blood films are negative on two occasions and the malaria antigen test is negative. Platelets are 96 x 10^9/L, ALT 180 U/L, creatinine normal, CRP 88 mg/L. Dengue NS1 antigen returns positive. He remains febrile but alert, with good oral intake and normal blood pressure.',
        question:
          'Which finding at review would most strongly indicate he needs urgent hospital referral rather than ambulatory management?',
        options: [
          { key: 'A', text: 'Persisting fever on day 5 of illness' },
          { key: 'B', text: 'Platelet count falling further to 70 x 10^9/L with no bleeding' },
          { key: 'C', text: 'Defervescence with new persistent vomiting, abdominal pain and postural dizziness' },
          { key: 'D', text: 'A fine blanching rash appearing on the trunk' },
        ],
        correctKey: 'C',
        explanation:
          'Dengue warning signs cluster around defervescence (the "critical phase", typically days 4 to 6) when plasma leakage occurs. Persistent vomiting, severe abdominal pain, postural hypotension, mucosal bleeding, lethargy or restlessness, and clinical fluid accumulation all mandate urgent hospital assessment. Paradoxically, the patient often deteriorates as the fever settles - a key feature that is easily missed.',
        optionExplanations: {
          A: 'Ongoing fever alone is expected in the febrile phase and is not itself a warning sign.',
          B: 'A falling platelet count is typical of dengue; in isolation without bleeding or warning signs it does not mandate admission.',
          C: 'Correct - warning signs appearing at defervescence signal the critical plasma leakage phase and require urgent hospital care.',
          D: 'A blanching or convalescent rash is a common, benign feature of dengue.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g4-c2-i4',
        stemAddendum:
          'He has no warning signs. You plan ambulatory management with daily review and clear return advice.',
        question: 'Which analgesic and antipyretic advice is most appropriate?',
        options: [
          { key: 'A', text: 'Paracetamol, avoiding NSAIDs and aspirin' },
          { key: 'B', text: 'Ibuprofen regularly, as it controls fever and myalgia better than paracetamol' },
          { key: 'C', text: 'Low-dose aspirin for the myalgia and headache' },
          { key: 'D', text: 'No analgesia, as it may mask deterioration' },
        ],
        correctKey: 'A',
        explanation:
          'In suspected or confirmed dengue, paracetamol is the analgesic and antipyretic of choice. NSAIDs and aspirin increase bleeding risk in the setting of thrombocytopenia and may worsen gastritis, and aspirin additionally carries a Reye syndrome risk in children. He should also be counselled on generous oral fluid intake and on avoiding further mosquito bites while viraemic to prevent onward local transmission.',
        optionExplanations: {
          A: 'Correct - paracetamol only, with explicit avoidance of NSAIDs and aspirin because of bleeding risk.',
          B: 'NSAIDs impair platelet function and increase gastrointestinal and mucosal bleeding risk in dengue.',
          C: 'Aspirin is contraindicated for the same bleeding reasons and carries additional risks.',
          D: 'Withholding analgesia is unnecessary and inhumane; symptom control does not obscure the recognised warning signs.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfp-g4-c2-i5',
        stemAddendum:
          'He recovers fully over the next fortnight. At his review he mentions he plans to work as a volunteer teacher in rural Cambodia for six months next year. His only documented vaccines are those from his childhood school program; he has no record of adult boosters and no documented hepatitis B serology.',
        question: 'Which is the most appropriate pre-travel immunisation approach at this consultation?',
        options: [
          {
            key: 'A',
            text: 'Review his Australian Immunisation Register record, offer routine catch-up plus hepatitis A and B, typhoid and dTpa, and discuss Japanese encephalitis and rabies pre-exposure vaccination given prolonged rural stay',
          },
          { key: 'B', text: 'Give yellow fever vaccine, as it is required for entry to Cambodia from Australia' },
          { key: 'C', text: 'Defer all vaccination until two weeks before departure to maximise antibody levels' },
          { key: 'D', text: 'Vaccinate against dengue now to prevent a second, more severe infection' },
        ],
        correctKey: 'A',
        explanation:
          'Pre-travel care starts with checking the Australian Immunisation Register and bringing routine vaccines up to date, then adding travel-specific vaccines based on itinerary, duration and activities. A six-month rural placement warrants hepatitis A and B, typhoid, dTpa review, and discussion of Japanese encephalitis and rabies pre-exposure prophylaxis, plus malaria chemoprophylaxis and bite-avoidance advice. Ideally this is done six to eight weeks before departure to allow multi-dose schedules to be completed.',
        optionExplanations: {
          A: 'Correct - register check, routine catch-up, then itinerary-specific vaccines including JE and rabies for prolonged rural exposure.',
          B: 'Yellow fever does not occur in Asia and is not required for travel to Cambodia from Australia.',
          C: 'Deferring until two weeks before departure leaves insufficient time for multi-dose schedules such as rabies or hepatitis B.',
          D: 'Dengue vaccination is not part of routine Australian pre-travel practice and is restricted by prior-infection and age criteria; it is a specialist consideration, not a general practice default.',
        },
        difficulty: 'moderate',
      },
    ],
  },
  {
    id: 'kfp-g4-c3',
    exam: 'KFP',
    specialty: 'Dermatology',
    topic: 'Pigmented lesion assessment and melanoma management',
    title: 'The mole that changed',
    vignette:
      "Margaret, a 62-year-old retired teacher with fair skin (Fitzpatrick type II), blue eyes and a history of significant childhood sunburns in regional Queensland, attends for a skin check. She points to a lesion on her upper back that her daughter noticed had 'gone darker and wonky' over the past six months. On examination there is a 9 mm asymmetric macule with an irregular notched border and variegated brown, black and grey-blue pigmentation. She has numerous solar lentigines and about 40 naevi. There is no ulceration and no palpable lymphadenopathy.",
    items: [
      {
        id: 'kfp-g4-c3-i1',
        question:
          'Which single element of the history or examination most strongly raises suspicion of melanoma in this lesion?',
        options: [
          { key: 'A', text: 'Her fair skin and history of childhood sunburn' },
          { key: 'B', text: 'The reported change in size and colour over six months' },
          { key: 'C', text: 'The presence of about 40 naevi' },
          { key: 'D', text: 'The lesion being located on the upper back' },
        ],
        correctKey: 'B',
        explanation:
          'Change - in size, shape, colour, elevation or symptoms - is the single most important clinical feature suggesting melanoma, and is the "E" (evolving) of the ABCDE rule as well as the basis of the "ugly duckling" and revised 7-point checklist approaches. Phenotype, naevus count and site are risk factors that raise baseline probability but do not, by themselves, characterise a specific lesion as suspicious.',
        optionExplanations: {
          A: 'Fair skin and childhood sunburn are strong melanoma risk factors but describe her risk, not this lesion.',
          B: 'Correct - documented change over months is the most powerful lesion-specific indicator of melanoma.',
          C: 'A high naevus count increases risk but does not make this particular lesion suspicious.',
          D: 'The back is a common melanoma site in both sexes, but site alone is weak evidence.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfp-g4-c3-i2',
        stemAddendum:
          'Dermoscopy shows an asymmetric lesion with an atypical pigment network, irregular peripheral streaks and a blue-white veil.',
        question: 'What is the most appropriate next step?',
        options: [
          { key: 'A', text: 'Excisional biopsy with 2 mm margins and a cuff of subcutaneous fat' },
          { key: 'B', text: 'Punch biopsy through the darkest area for histological diagnosis' },
          { key: 'C', text: 'Shave biopsy of the surface to minimise scarring' },
          { key: 'D', text: 'Photograph the lesion and review in three months to confirm change' },
        ],
        correctKey: 'A',
        explanation:
          'A lesion suspicious for melanoma should undergo complete excisional biopsy with a 2 mm margin and a cuff of subcutaneous fat, oriented to allow later wide local excision. Complete excision permits accurate Breslow thickness measurement, which determines all subsequent management. Partial biopsies risk sampling error and under-staging.',
        optionExplanations: {
          A: 'Correct - complete excisional biopsy with 2 mm margins allows accurate Breslow thickness and staging.',
          B: 'Punch biopsy samples only part of the lesion and may miss the thickest area, leading to under-staging.',
          C: 'Shave biopsy risks transecting the base of the tumour, making Breslow thickness unmeasurable.',
          D: 'Watchful waiting on a dermoscopically suspicious lesion with a history of change delays diagnosis unacceptably.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g4-c3-i3',
        stemAddendum:
          'Histopathology reports a superficial spreading melanoma, Breslow thickness 1.4 mm, no ulceration, mitotic rate 2/mm2, excised with clear but narrow peripheral margins.',
        question: 'What definitive surgical management should now be arranged?',
        options: [
          { key: 'A', text: 'No further surgery, as the initial excision had clear margins' },
          { key: 'B', text: 'Wide local excision with a 1 to 2 cm margin, with discussion of sentinel lymph node biopsy' },
          { key: 'C', text: 'Wide local excision with a 5 mm margin only' },
          { key: 'D', text: 'Wide local excision with a 3 cm margin plus elective complete axillary dissection' },
        ],
        correctKey: 'B',
        explanation:
          'Australian melanoma guidelines recommend a wide local excision margin of 1 to 2 cm for invasive melanoma of 1 to 2 mm Breslow thickness. Sentinel lymph node biopsy should be discussed for melanomas greater than 1 mm thick (or thinner lesions with adverse features) because it provides prognostic information and determines eligibility for adjuvant systemic therapy and trials. This is a specialist referral decision.',
        optionExplanations: {
          A: 'Diagnostic excision margins are not definitive treatment; wide local excision reduces local recurrence risk.',
          B: 'Correct - 1 to 2 cm wide local excision for a 1.4 mm melanoma, with sentinel node biopsy discussed at specialist referral.',
          C: 'A 5 mm margin is appropriate for melanoma in situ, not for a 1.4 mm invasive melanoma.',
          D: 'Margins beyond 2 cm confer no survival benefit, and elective complete lymph node dissection has been superseded by sentinel node biopsy.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g4-c3-i4',
        stemAddendum:
          'She undergoes wide local excision and a negative sentinel lymph node biopsy. Staging is pT2a N0 M0 (stage IB). She asks what scans she needs to make sure it has not spread elsewhere.',
        question: 'What is the most appropriate approach to staging investigations?',
        options: [
          { key: 'A', text: 'Routine whole-body PET-CT and brain MRI now and annually' },
          { key: 'B', text: 'Six-monthly chest X-ray and serum LDH indefinitely' },
          {
            key: 'C',
            text: 'No routine imaging; clinical surveillance with skin and regional lymph node examination, imaging only if symptoms or signs arise',
          },
          { key: 'D', text: 'Annual whole-body CT with contrast for five years' },
        ],
        correctKey: 'C',
        explanation:
          'For stage I and II melanoma, routine imaging is not recommended: yield is very low and false positives lead to unnecessary investigation, radiation exposure and anxiety. Surveillance is clinical, comprising full skin examination and examination of the excision site, in-transit routes and regional nodes. Imaging is reserved for symptoms, signs, or higher-stage disease under specialist direction.',
        optionExplanations: {
          A: 'Routine PET-CT and brain MRI in stage IB disease has a very low yield and a high false-positive rate.',
          B: 'Chest X-ray and LDH surveillance do not improve outcomes and are not recommended for early-stage melanoma.',
          C: 'Correct - clinical surveillance alone for stage IB, with imaging directed by symptoms or findings.',
          D: 'Annual contrast CT exposes her to cumulative radiation and contrast risk without survival benefit at this stage.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g4-c3-i5',
        stemAddendum:
          'She returns to you for shared follow-up care. She is anxious and asks what happens now and whether her two adult children need anything.',
        question: 'Which follow-up and prevention plan is most appropriate?',
        options: [
          {
            key: 'A',
            text: 'Six-monthly full skin and nodal examination for five years with self-examination education, rigorous sun protection, and advice that first-degree relatives undergo regular skin surveillance',
          },
          { key: 'B', text: 'Discharge to routine care, as the melanoma has been completely excised' },
          { key: 'C', text: 'Refer both children for immediate genetic testing for CDKN2A mutations' },
          { key: 'D', text: 'Annual review with sunscreen advice only; no examination of the surgical site is needed' },
        ],
        correctKey: 'A',
        explanation:
          'After stage I to II melanoma, guidelines suggest six-monthly full skin and regional nodal examination for five years, then annually for life, because these patients carry a substantially increased risk of a second primary melanoma as well as local, in-transit and nodal recurrence. Patients should be taught structured self-examination, and first-degree relatives should be advised about their increased risk and regular skin checks. Sun protection counselling (shade, clothing, hat, SPF50+ sunscreen, avoiding solaria) remains central.',
        optionExplanations: {
          A: 'Correct - structured six-monthly surveillance, self-examination education, sun protection, and advice for first-degree relatives.',
          B: 'Complete excision does not remove the elevated risk of recurrence or a second primary melanoma.',
          C: 'Genetic testing is reserved for strong family history patterns (for example three or more affected relatives) and is a specialist genetics referral, not a routine step.',
          D: 'Annual-only review is too infrequent for the first five years, and the surgical site and draining nodes must be examined at each visit.',
        },
        difficulty: 'moderate',
      },
    ],
  },
]
