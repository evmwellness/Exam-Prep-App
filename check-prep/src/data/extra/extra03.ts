import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  '632': {
    sections: [
      {
        heading: 'Taking a seizure history',
        points: [
          'Before the event: circumstances (standing, lying, asleep), triggers (sleep deprivation, alcohol, flashing lights, missed medicines, illness), and warning symptoms such as déjà vu, rising epigastric sensation, smell, fear or visual phenomena. An aura is itself a focal aware seizure.',
          'During the event, from a witness (ask them to video future events on a phone): eyes open or closed, head turning, stiffening then jerking, symmetry, colour (cyanosis), duration, automatisms (lip smacking, fumbling), responsiveness.',
          'After the event: confusion duration, headache, muscle aches, tongue biting (lateral favours epilepsy), incontinence (non-specific), focal weakness (Todd paresis).',
          'Background: febrile seizures, head injury, CNS infection, developmental history, family history of epilepsy or sudden death, substance use, medicines that lower the seizure threshold (tramadol, bupropion, antipsychotics, some antibiotics).',
          'Previous "funny turns" such as unexplained nocturnal tongue biting, morning myoclonic jerks (dropping things) or daydreaming spells often point to an earlier epilepsy onset.',
          'Ask about driving, work (heights, machinery, water), contraception, pregnancy plans, mood and memory.',
        ],
      },
      {
        heading: 'Investigations explained',
        points: [
          'ECG in every first seizure: look for long QT, Brugada pattern, pre-excitation, heart block or HCM. Cardiac syncope can cause convulsive movements.',
          'EEG: a routine EEG detects epileptiform discharges in about 30–50% of people with epilepsy, and yield improves within 24–48 hours of an event and with sleep deprivation. A normal EEG does NOT exclude epilepsy. Non-specific abnormalities are common and can mislead.',
          'MRI brain with an epilepsy protocol finds structural causes (hippocampal sclerosis, cortical dysplasia, tumours, vascular lesions). CT is for emergencies (trauma, anticoagulation, focal deficit, persistent altered state).',
          'Bloods: glucose, sodium, calcium, magnesium, renal and liver function, FBC. Prolactin is rarely useful in practice. Drug screen if suspected.',
          'Video-EEG monitoring (inpatient) is the gold standard to classify recurrent events and to diagnose PNES.',
          'Genetic testing is used in selected epilepsies (early onset, developmental encephalopathies, family history).',
        ],
      },
      {
        heading: 'ILAE classification and syndromes',
        points: [
          'Seizure onset: focal, generalised or unknown. Focal seizures are described by awareness (retained or impaired) and first feature (motor, such as clonic jerking; or non-motor, such as sensory, emotional, cognitive or autonomic). The 2025 ILAE update uses similar concepts with some renamed terms.',
          'Generalised seizures include tonic–clonic, absence (typical absences are brief staring spells with 3 Hz spike-wave, provoked by hyperventilation), myoclonic and atonic (drop attacks).',
          'Juvenile myoclonic epilepsy: teenage onset, morning myoclonic jerks, generalised tonic–clonic seizures after sleep deprivation or alcohol. Responds to valproate, levetiracetam or lamotrigine (which can worsen myoclonus). Usually lifelong treatment.',
          'Childhood absence epilepsy: many brief absences daily, typically ages 4–10, with a good prognosis. Ethosuximide is first line. Carbamazepine worsens absences.',
          'Temporal lobe epilepsy (often hippocampal sclerosis): aura (rising epigastric sensation, déjà vu), then impaired awareness with automatisms. It is frequently drug-resistant and a good surgical candidate.',
          'Self-limited epilepsy with centrotemporal spikes: nocturnal focal facial seizures in school-age children, often outgrown by adolescence.',
        ],
      },
      {
        heading: 'Antiseizure medicines in detail',
        points: [
          'Choose by seizure type, age, sex and reproductive plans, comorbidities (mood, weight, bone, renal and hepatic function), interactions and cost. Start one medicine and titrate to the lowest effective dose.',
          'Levetiracetam: broad spectrum, few interactions, renally cleared. It can cause irritability, depression and, rarely, psychosis. Monitor mood.',
          'Lamotrigine: broad spectrum, favourable in pregnancy and for mood, but must be titrated slowly to reduce SJS/TEN risk. Halve the titration speed with valproate, and double it with enzyme inducers.',
          'Sodium valproate: very effective for generalised epilepsy. Weight gain, tremor, hair loss, hepatotoxicity, pancreatitis, thrombocytopenia. Teratogenic and linked to neurodevelopmental disorders. Regulators also advise caution about paternal exposure.',
          'Carbamazepine and oxcarbazepine: for focal epilepsy. Hyponatraemia, rash (HLA-B*1502 in people of Asian ancestry), enzyme induction. They can worsen absence and myoclonic seizures.',
          'Other options: lacosamide (PR prolongation, so check ECG), topiramate (cognitive slowing, kidney stones, weight loss, teratogenic), zonisamide, clobazam (adjunct), cenobamate and perampanel (specialist).',
          'Do not switch between brands without discussion. Therapeutic drug monitoring is useful for phenytoin and in pregnancy (lamotrigine levels), not routinely for most newer medicines.',
        ],
      },
      {
        heading: 'Women and epilepsy',
        points: [
          'Contraception: enzyme inducers (carbamazepine, oxcarbazepine, phenytoin, phenobarbital, topiramate ≥200 mg, perampanel ≥12 mg) reduce pill, patch, ring and implant efficacy. Use an IUD (copper or LNG) or DMPA.',
          'Combined hormonal contraception lowers lamotrigine levels. Levels rise in the pill-free week, which can cause toxicity.',
          'Preconception: review the diagnosis and medicines with a neurologist at least 6–12 months ahead. Aim for monotherapy at the lowest effective dose. Folic acid 5 mg daily for women taking ASMs.',
          'Pregnancy: most women have unchanged seizure frequency. Lamotrigine and levetiracetam levels fall, so monitor and adjust. Report to the Australian Pregnancy Register of Antiepileptic Drugs.',
          'Breastfeeding is generally encouraged on most ASMs. Watch the infant for sedation with benzodiazepines, phenobarbital or high doses.',
          'Catamenial epilepsy (clustering around menses) may respond to perimenstrual clobazam or hormonal suppression.',
        ],
      },
      {
        heading: 'Driving, work and safety',
        points: [
          'Assessing Fitness to Drive (Austroads) sets the standards. The patient must notify the driver licensing authority. The GP advises and documents, and may report in some states if a patient continues to drive unsafely.',
          'Private vehicle, as a general guide: first unprovoked seizure means about a 6-month non-driving period. Established epilepsy means 12 months seizure-free on treatment. Shorter periods may apply for provoked seizures, sleep-only seizures or seizures that do not impair awareness, on specialist advice.',
          'Commercial standards are much stricter (for example years seizure-free off medication in some cases). Refer to the current standard.',
          'Medication withdrawal: stop driving during withdrawal and for 3 months afterwards.',
          'Work safety: heights, water, machinery, sole responsibility for children. Encourage showers not baths, and swimming only with a supervisor who knows about the epilepsy.',
          'Written seizure management plans for school and work (Epilepsy Australia templates) improve safety.',
        ],
      },
      {
        heading: 'Status epilepticus and rescue therapy',
        points: [
          'Any seizure lasting 5 minutes or more, or repeated seizures without recovery, needs treatment. After 30 minutes, the risk of neuronal injury rises.',
          'Community first aid: time it, protect from injury, place in the recovery position after convulsing stops, do not put anything in the mouth. Call an ambulance at 5 minutes, for a first seizure, or for injury, water or pregnancy.',
          'Rescue medicine: buccal or intranasal midazolam 10 mg for adults (dose by age and weight in children), repeated once after 10 minutes if prescribed in the plan.',
          'Ambulance and hospital: IV or IM midazolam, then second-line levetiracetam, valproate or phenytoin, then anaesthesia if refractory.',
          'After an episode of status, review adherence, triggers, interactions (for example new antibiotics) and whether the treatment plan needs changing.',
        ],
      },
      {
        heading: 'Psychogenic non-epileptic seizures (functional seizures)',
        points: [
          'PNES are common in epilepsy clinics (up to 20–30% of referrals with "refractory epilepsy") and are involuntary, not "faking".',
          'Features: prolonged events, waxing and waning, eyes closed, side-to-side head movements, pelvic thrusting, crying, recall of the event, occurrence in the presence of others, and resistance to eye opening.',
          'Diagnosis is by video-EEG capturing a typical event. Up to 10–20% also have epileptic seizures.',
          'Explain the diagnosis positively: "Your brain is having real episodes caused by a functional problem in how it processes stress and sensations, and it can improve." Stop unnecessary ASMs under specialist guidance.',
          'Treatment is psychological therapy (CBT-informed). Screen for trauma, depression and anxiety. Clear emergency plans avoid iatrogenic harm, such as unnecessary intubation.',
        ],
      },
      {
        heading: 'Long-term care and comorbidities',
        points: [
          'Depression and anxiety affect about 1 in 3 people with epilepsy, and suicide risk is increased. Screen regularly (for example NDDI-E). SSRIs are safe at usual doses.',
          'SUDEP (sudden unexpected death in epilepsy) risk is about 1 in 1000 adults a year, and higher with frequent generalised tonic–clonic seizures, nocturnal seizures and poor adherence. Discuss it openly: seizure control reduces the risk.',
          'Bone health: enzyme inducers and valproate reduce bone density. Check vitamin D and consider DXA with long-term use.',
          'Drug interactions: enzyme inducers lower warfarin, DOAC, statin, oral contraceptive and some chemotherapy levels. Check before prescribing new medicines.',
          'Consider withdrawal after 2 or more years seizure-free, with specialist advice and discussion of recurrence risk (about 30–50%) and driving implications.',
          'Drug-resistant epilepsy: refer early to a comprehensive epilepsy program for surgery, vagus nerve stimulation, responsive neurostimulation or ketogenic dietary therapy.',
        ],
      },
    ],
    keyNumbers: [
      'Status epilepticus: seizure ≥5 minutes',
      'Buccal/intranasal midazolam 10 mg (adult rescue)',
      'Epilepsy: ≥2 unprovoked seizures >24 h apart',
      'Drug-resistant: failure of 2 appropriate ASMs',
      'Folic acid 5 mg for women on ASMs',
      'EEG yield best within 24–48 h',
      'SUDEP ≈ 1/1000 adults per year',
      'Private licence: ~6 months after first seizure; 12 months for epilepsy',
      'HLA-B*1502 before carbamazepine in Asian ancestry',
      'Recurrence after ASM withdrawal ≈ 30–50%',
    ],
    workedCase: {
      title: 'Megan needs her scripts renewed',
      paragraphs: [
        'Megan, 20, has juvenile myoclonic epilepsy diagnosed at 15 and has been seizure-free for 3 years on sodium valproate 500 mg bd. She has a steady partner, uses condoms "most of the time", and asks for a repeat script.',
        'You recognise that valproate in a woman of childbearing potential needs urgent review. You explain its teratogenic risks (about a 1 in 10 chance of major malformations, and up to 30–40% risk of neurodevelopmental problems) and that condoms are not reliable enough. She had never been told this.',
        'You arrange an early neurology review to discuss switching to levetiracetam or lamotrigine. In the meantime you insert an LNG-IUD for highly effective contraception and start folic acid 5 mg. You do not stop valproate abruptly, because of the risk of seizures, including status.',
        'The neurologist cross-titrates her to levetiracetam over 8 weeks. You check her mood during the switch because of the irritability risk. You remind her about driving: switching medicines does not require a break unless seizures recur, but she should not drive during any withdrawal.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Choosing antiseizure medicines',
        lead: 'Choose the SINGLE most appropriate medicine for each patient.',
        options: [
          'Sodium valproate',
          'Levetiracetam',
          'Carbamazepine',
          'Ethosuximide',
          'Lamotrigine',
          'Phenytoin',
          'Topiramate',
          'Clobazam',
          'Buccal midazolam',
        ],
        items: [
          { stem: 'A 7-year-old girl with many daily brief staring spells and 3 Hz spike-wave on EEG.', answer: 3 },
          { stem: 'A 24-year-old man with juvenile myoclonic epilepsy, no mood history, wanting the most effective option.', answer: 0 },
          { stem: 'A 29-year-old woman planning pregnancy with focal epilepsy and a history of depression.', answer: 4 },
          { stem: 'A carer asks what to give if her son\'s tonic–clonic seizure lasts more than 5 minutes.', answer: 8 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Henry is experiencing staring episodes',
        scenario:
          'Henry, 78, has had three episodes in 2 months of suddenly stopping mid-sentence, staring and making chewing movements for 1–2 minutes, then being confused for 20 minutes. He does not remember them. He had a left-hemisphere stroke 2 years ago. He takes apixaban, atorvastatin and perindopril, and he still drives.',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the most likely diagnosis?',
            options: ['Recurrent TIAs', 'Focal impaired awareness seizures (post-stroke epilepsy)', 'Transient global amnesia', 'Vasovagal syncope', 'Hypoglycaemia'],
            answer: 1,
            explanation: 'Stereotyped episodes with automatisms, impaired awareness and post-event confusion after a stroke suggest focal seizures.',
          },
          {
            kind: 'multi',
            stem: 'Which THREE investigations are most appropriate?',
            options: ['EEG', 'MRI brain', 'ECG', 'Lumbar puncture', 'Carotid angiography', 'Serum prolactin'],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            context: 'EEG shows left temporal sharp waves. The neurologist recommends treatment.',
            stem: 'Which ASM is most suitable given his age and apixaban?',
            options: ['Carbamazepine', 'Phenytoin', 'Levetiracetam', 'Phenobarbital', 'Sodium valproate at high dose'],
            answer: 2,
            explanation: 'Levetiracetam has minimal interactions. Enzyme inducers (carbamazepine, phenytoin, phenobarbital) reduce apixaban levels.',
          },
          {
            kind: 'multi',
            stem: 'Which TWO statements about driving are correct?',
            options: [
              'He must stop driving now and notify the licensing authority',
              'He can drive once medication is started',
              'A seizure-free period is required under Assessing Fitness to Drive before resuming private driving',
              'Driving restrictions do not apply to seizures without convulsions',
              'Only commercial drivers need to stop',
            ],
            answers: [0, 2],
          },
          {
            kind: 'emq',
            theme: 'Monitoring and counselling',
            lead: 'Choose the SINGLE most relevant issue for each situation.',
            options: ['Mood change and irritability', 'Hyponatraemia', 'Falls and bone health', 'SUDEP', 'Rash progressing to SJS', 'Weight gain', 'Reduced anticoagulant effect'],
            items: [
              { stem: 'Side effect to warn about when starting levetiracetam', answer: 0 },
              { stem: 'Why enzyme-inducing ASMs are avoided in someone on apixaban', answer: 6 },
              { stem: 'Long-term consideration in an older man on lifelong ASM therapy', answer: 2 },
            ],
          },
        ],
      },
    ],
  },
  '631': {
    sections: [
      {
        heading: 'The first consultation',
        points: [
          'Believe and validate: many patients have been dismissed. A clear statement such as "I believe your symptoms are real, and we will work on this together" builds the therapeutic alliance.',
          'Characterise the fatigue: onset (sudden after infection vs gradual), pattern across the day, what makes it worse, post-exertional malaise (ask "What happens the day after you do more?"), sleep quality, cognitive symptoms, orthostatic symptoms, pain.',
          'Functional impact: work or study, hours upright per day, ability to shower, cook and drive. The DePaul Symptom Questionnaire or a simple activity diary helps.',
          'Screen widely for alternative and coexisting causes: anaemia, thyroid, diabetes, coeliac, sleep apnoea, depression, medicines (beta-blockers, antihistamines, opioids), alcohol, pregnancy, cancer and autoimmune disease.',
          'Use shared problem lists, and plan a series of longer appointments rather than trying to do everything at once.',
        ],
      },
      {
        heading: 'Post-exertional malaise and pacing in practice',
        points: [
          'PEM is a worsening of fatigue, pain, cognitive function and flu-like symptoms, typically 12–72 hours after exertion (physical, cognitive, emotional or sensory), lasting days to weeks. It is the defining feature of ME/CFS.',
          'Pacing means staying within the energy envelope: find a baseline of activity that does not trigger PEM, then plan the day with rest breaks before fatigue.',
          'Practical strategies: break tasks into parts, sit to shower or cook, use rest periods lying down, limit screen time, and use a heart-rate monitor with alerts (for example staying below about 60% of estimated maximum HR in some programs).',
          'Avoid "boom and bust": over-doing on good days leads to crashes. Expanding the envelope, if it happens, is gradual and symptom-led.',
          'Graded exercise therapy (fixed increases regardless of symptoms) is not recommended for ME/CFS (NICE 2021). Tailored physiotherapy that respects PEM can help deconditioning, especially in long COVID without PEM.',
        ],
      },
      {
        heading: 'Long COVID assessment',
        points: [
          'Common symptoms: fatigue, breathlessness, cognitive impairment, chest pain, palpitations, anosmia or parosmia, sleep disturbance, anxiety and depression, PEM, orthostatic intolerance.',
          'Exclude important complications: myocarditis or pericarditis (ECG, troponin, echo if chest pain or palpitations), pulmonary embolism, interstitial lung disease (CXR, spirometry, DLCO), new diabetes, thyroid disease, anaemia.',
          'Exertional desaturation: a 1-minute sit-to-stand or 6-minute walk test with oximetry. A drop of 3% or more needs further assessment.',
          'Most people improve over months. Risk factors for persistent symptoms include female sex, severe acute illness, pre-existing conditions and not being vaccinated.',
          'Vaccination reduces the risk of long COVID. Reinfection can worsen symptoms. Antivirals in the acute phase may reduce risk for eligible people.',
        ],
      },
      {
        heading: 'Symptom management toolkit',
        points: [
          'Sleep: regular times, a wind-down routine, and treatment of sleep apnoea. Low-dose amitriptyline or melatonin may help unrefreshing sleep. Avoid long daytime naps late in the day (short rests are fine).',
          'Pain: gentle movement within limits, heat, and simple analgesics. For widespread pain, consider low-dose amitriptyline, duloxetine or pregabalin (watch sedation). Avoid opioids.',
          'Cognition: pacing cognitive work, reminders and lists, reduced multitasking, quiet environments. An occupational therapist can advise.',
          'Mood: depression and anxiety are common consequences of chronic illness and deserve treatment (psychology, SSRIs at low starting doses because of sensitivity to side effects). CBT can help coping, not "cure".',
          'Nutrition: small frequent meals, adequate protein and fluids. Correct iron, B12 and vitamin D deficiency. There is no evidence for expensive supplements.',
          'Medicines sensitivity is common: start low and go slow.',
        ],
      },
      {
        heading: 'Orthostatic intolerance: detail',
        points: [
          'Symptoms: light-headedness, palpitations, tremulousness, blurred vision, nausea, fatigue and "brain fog" when upright, relieved by lying down. They are worse in heat, after meals, after alcohol and around menses.',
          'The active stand test: after 5–10 minutes lying, record HR and BP at 1, 3, 5 and 10 minutes standing. POTS is an HR rise of 30 bpm or more (40 or more in ages 12–19) without orthostatic hypotension. Orthostatic hypotension is a fall of 20/10 mmHg or more within 3 minutes.',
          'Look for triggers and associations: dehydration, deconditioning, anaemia, medicines (vasodilators, diuretics, TCAs), joint hypermobility, autoimmune disease, pregnancy.',
          'Non-drug measures are the foundation: 2–3 L fluids, 6–10 g salt (unless contraindicated), compression (waist-high or abdominal binder), counter-manoeuvres (leg crossing, squatting), head-up bed tilt, small low-carbohydrate meals, recumbent exercise.',
          'Medicines (usually with specialist input): low-dose propranolol, ivabradine, fludrocortisone, midodrine or pyridostigmine.',
        ],
      },
      {
        heading: 'Fibromyalgia and overlapping conditions',
        points: [
          'Fibromyalgia: widespread pain for 3 months or more, with fatigue, unrefreshing sleep and cognitive symptoms (2016 ACR criteria use a widespread pain index and symptom severity score). Tender point counts are no longer required.',
          'There is significant overlap with ME/CFS, IBS, migraine, TMJ disorder and interstitial cystitis. Central sensitisation is a shared mechanism.',
          'Treatment: education, graded aerobic and resistance exercise tailored to tolerance (unlike ME/CFS with PEM, exercise is first line), CBT or ACT, sleep management, and low-dose amitriptyline, duloxetine or pregabalin.',
          'Hypermobility spectrum disorders and hypermobile EDS often coexist with POTS and fatigue. Screen with the Beighton score and refer to physiotherapy for stabilisation work.',
          'Avoid repeated investigations once serious causes have been excluded. Focus on function and self-management.',
        ],
      },
      {
        heading: 'Mast cell activation syndrome (MCAS): a balanced approach',
        points: [
          'MCAS is increasingly self-diagnosed from online sources. Many patients have genuine multisystem symptoms, but most do not meet criteria.',
          'Criteria (consensus-2): typical episodic symptoms in at least 2 organ systems (flushing, urticaria, angioedema, wheeze, hypotension, diarrhoea or cramps), an objective rise in mast cell mediators during an episode (serum tryptase above baseline × 1.2 + 2 ng/mL, taken within 1–4 hours), and response to mast-cell-targeted therapy.',
          'Measure baseline tryptase. A persistently raised baseline over 20 ng/mL, or over 8 ng/mL with hereditary alpha-tryptasaemia, suggests systemic mastocytosis or HαT and needs specialist workup.',
          'A trial of non-sedating H1 antihistamine (up to 4 times the standard dose) plus an H2 blocker is reasonable for suggestive symptoms. Review objectively.',
          'Beware extensive restrictive diets and unproven treatments, which carry nutritional and psychological harm. Refer to clinical immunology if uncertain.',
        ],
      },
      {
        heading: 'Referral, support and prognosis',
        points: [
          'Refer when: the diagnosis is unclear, red flags are present, symptoms are severe (housebound or bedbound), there is significant orthostatic intolerance, or the patient is a child or adolescent (paediatric services).',
          'Specialist input may come from general medicine, rheumatology, cardiology (POTS), sleep medicine, immunology, rehabilitation or dedicated long COVID clinics.',
          'Severe ME/CFS (housebound or bedbound): home visits, a low-sensory environment, pressure care, nutrition, carer support, NDIS or disability support. Admissions can worsen patients through overstimulation.',
          'Help with documentation: medical certificates, reasonable adjustments (working from home, reduced hours), Centrelink and NDIS forms, and insurance.',
          'Prognosis: many improve, especially with early diagnosis and pacing. Full recovery in adult ME/CFS is less common. Relapses may follow infections or overexertion. Young people generally have a better outlook.',
        ],
      },
    ],
    keyNumbers: [
      'ME/CFS: symptoms ≥6 months with PEM',
      'Long COVID: ≥3 months after infection, lasting ≥2 months',
      'PEM onset 12–72 h after exertion',
      'POTS: HR rise ≥30 bpm (≥40 aged 12–19) within 10 min',
      'Orthostatic hypotension: ≥20/10 mmHg fall within 3 min',
      'Fluids 2–3 L/day; salt 6–10 g/day (if safe)',
      'MCAS tryptase rise: >baseline × 1.2 + 2 ng/mL',
      'Exertional desaturation ≥3% needs assessment',
      'Fibromyalgia: widespread pain ≥3 months',
      'NICE 2021: no graded exercise therapy for ME/CFS',
    ],
    workedCase: {
      title: 'Gordon wonders if he has long COVID',
      paragraphs: [
        'Gordon, 52, an accountant, had COVID-19 5 months ago. He has not been back to work full time: he is breathless climbing stairs, has poor concentration, and "crashes" for 2 days after a busy day. His resting HR is 92.',
        'You take a structured history. The crashes are delayed post-exertional malaise. He also has palpitations on standing. On examination his chest is clear and there are no signs of heart failure. The 1-minute sit-to-stand test shows no desaturation. An active stand test shows an HR rise of 34 bpm with stable BP, consistent with POTS.',
        'Investigations: FBC, UEC, LFT, TSH, HbA1c, ferritin, troponin, ECG and CXR are normal. Echocardiogram (arranged because of palpitations) is normal. You explain that this is long COVID with PEM and POTS features. There is no evidence of heart or lung damage, and many people improve.',
        'Plan: pacing with a heart-rate monitor, a graded return to work with reduced hours (a medical certificate), fluids and salt, and waist-high compression. You refer him to a long COVID or rehabilitation service and a physiotherapist experienced in PEM. At 3 months his crashes are less frequent and he is working 3 days a week.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Fatigue and energy-limiting conditions',
        lead: 'Choose the SINGLE most likely diagnosis for each patient.',
        options: [
          'ME/CFS',
          'Fibromyalgia',
          'Postural orthostatic tachycardia syndrome',
          'Obstructive sleep apnoea',
          'Major depressive disorder',
          'Hypothyroidism',
          'Iron deficiency',
          'Mast cell activation syndrome',
          'Coeliac disease',
        ],
        items: [
          {
            stem: 'A 40-year-old man with loud snoring, witnessed apnoeas, morning headaches and daytime sleepiness.',
            answer: 3,
          },
          {
            stem: 'A 29-year-old woman with 9 months of fatigue after glandular fever; she crashes for days after minor exertion.',
            answer: 0,
          },
          {
            stem: 'A 45-year-old with widespread pain for a year, unrefreshing sleep and poor concentration; symptoms improve with gradual aerobic exercise.',
            answer: 1,
          },
          {
            stem: 'A 22-year-old with light-headedness and palpitations on standing; HR rises by 45 bpm on active stand with no BP drop.',
            answer: 2,
          },
        ],
      },
    ],
    kfp: [
      {
        title: 'Jo\'s long-term fatigue is restrictive',
        scenario:
          'Jo, 35, a teacher, has had 14 months of profound fatigue since a flu-like illness. She has had to stop work. After a family outing she was bedbound for 4 days. She sleeps 10 hours but wakes unrefreshed, has trouble finding words, and gets dizzy when standing in queues.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which FOUR investigations are appropriate to exclude alternative diagnoses?',
            options: ['FBC and ferritin', 'TSH', 'Coeliac serology', 'HbA1c/glucose, UEC, LFT, CRP', 'Whole-body MRI', 'Food IgG panel', 'Serum IgE'],
            answers: [0, 1, 2, 3],
          },
          {
            kind: 'sba',
            context: 'All tests are normal.',
            stem: 'What is the most appropriate management approach?',
            options: [
              'Graded exercise therapy increasing activity by a fixed amount weekly',
              'Pacing within her energy envelope, with symptom management and a supported, flexible return to work',
              'Antidepressant as the primary treatment',
              'Bed rest until symptoms resolve',
              'Long-term antiviral therapy',
            ],
            answer: 1,
          },
          {
            kind: 'sba',
            stem: 'She becomes dizzy when standing. Which bedside test is most useful?',
            options: ['Romberg test', 'Active stand test with HR and BP over 10 minutes', 'Dix–Hallpike', 'Spirometry', 'Carotid sinus massage'],
            answer: 1,
          },
          {
            kind: 'emq',
            theme: 'Symptom management in ME/CFS',
            lead: 'Choose the SINGLE most appropriate intervention for each symptom.',
            options: [
              'Low-dose amitriptyline at night',
              'Fluids, salt and compression',
              'Heart-rate monitoring to guide pacing',
              'High-dose zopiclone',
              'Long-term opioids',
              'Occupational therapy (cognitive strategies, aids)',
              'Complete activity restriction',
            ],
            items: [
              { stem: 'Orthostatic dizziness', answer: 1 },
              { stem: 'Unrefreshing sleep with widespread aches', answer: 0 },
              { stem: 'Avoiding "boom and bust" crashes', answer: 2 },
              { stem: 'Word-finding and memory difficulties affecting daily tasks', answer: 5 },
            ],
          },
          {
            kind: 'multi',
            stem: 'Which TWO statements about prognosis and support are accurate?',
            options: [
              'Many people improve with time, though full recovery in adult ME/CFS is less common',
              'Workplace adjustments and medical documentation for income support are part of GP care',
              'Everyone recovers fully within 6 months',
              'ME/CFS is a form of depression',
              'Exercise always cures ME/CFS',
            ],
            answers: [0, 1],
          },
        ],
      },
    ],
  },
  S5: {
    sections: [
      {
        heading: 'Understanding depression and anxiety in young people',
        points: [
          'Half of lifetime mental disorders begin by 14, and three-quarters by 24. Anxiety disorders often start in childhood; depression rises sharply in adolescence, especially in girls.',
          'Presentations differ from adults: irritability rather than sadness, school decline or refusal, somatic complaints (headaches, abdominal pain), social withdrawal, sleep changes, substance use and self-harm.',
          'Risk factors: family history, bullying (including online), family conflict or violence, trauma, LGBTQA+ minority stress, neurodivergence, chronic illness, academic pressure, social media use patterns.',
          'Protective factors: connection to family, school, culture and community, a trusted adult, physical activity, sleep and meaningful activities.',
          'Distinguish normal distress (such as a relationship break-up) from a disorder by duration (for example 2 weeks or more for depression), severity and functional impact.',
        ],
      },
      {
        heading: 'Building rapport and communicating',
        points: [
          'Arrange part of every consultation alone with the young person. Explain this as routine practice to parents.',
          'Start with safe topics (interests, school, friends), use plain language, be curious, avoid lecturing, and normalise ("Lots of people your age...").',
          'Explain confidentiality clearly at the start, including when you would need to share information (serious risk of harm to self or others, abuse).',
          'Offer choices: appointment times, telehealth, text reminders, bringing a friend. Continuity with one GP helps.',
          'Shared decision-making: present options (watchful waiting, psychological therapy, medication) with honest benefits and risks, and invite the young person\'s preference. Involve parents with consent.',
        ],
      },
      {
        heading: 'Assessment tools and formulation',
        points: [
          'HEEADSSS for psychosocial context. PHQ-A or PHQ-9 (modified for adolescents), K10, GAD-7 or SCAS for anxiety. Measure at baseline and follow-up.',
          'Assess severity: mild (few symptoms, minimal impairment), moderate, or severe (many symptoms, marked impairment, psychotic features or high suicide risk).',
          'Screen for bipolar disorder (family history, previous hypomania). Antidepressants can trigger mania in susceptible young people.',
          'Look for comorbidities: ADHD, autism, eating disorders, substance use, trauma or PTSD, emerging personality difficulties.',
          'Create a simple formulation with the young person (what\'s maintaining the problem, strengths) to guide a shared plan.',
        ],
      },
      {
        heading: 'Psychological and lifestyle treatments',
        points: [
          'First-line for mild to moderate depression and anxiety: CBT, interpersonal therapy (IPT-A), behavioural activation and problem-solving therapy.',
          'Access: headspace centres (ages 12–25), Mental Health Treatment Plan (Better Access), school counsellors, digital programs (for example BRAVE for anxiety, MoodGYM, This Way Up).',
          'Lifestyle: regular sleep and wake times (the adolescent circadian delay is normal), physical activity (effective for depression), reduced alcohol and cannabis, managing social media use, and reconnecting with activities and friends.',
          'Family involvement: psychoeducation for parents, reducing conflict, and supporting the young person without taking over.',
          'Review regularly (every 2–4 weeks initially). If there is no improvement after about 6–8 weeks of adequate therapy, reassess and consider adding medication.',
        ],
      },
      {
        heading: 'The evidence on antidepressants in youth',
        points: [
          'Antidepressants have a smaller effect in young people than in adults, and placebo response is high. Fluoxetine has the most consistent evidence for adolescent depression. Sertraline and escitalopram have some evidence.',
          'For anxiety disorders, SSRIs (sertraline, fluoxetine, fluvoxamine) are effective, with a larger effect than for depression. CBT combined with an SSRI works best for moderate to severe anxiety (CAMS trial).',
          'Combination treatment (SSRI + CBT) speeds recovery in moderate to severe depression (TADS trial).',
          'The TGA boxed warning: under 25, antidepressants are associated with a small increase in suicidal thoughts and behaviours (about 4% vs 2% on placebo in trials), but no increase in completed suicide. Untreated depression carries a much higher risk.',
          'TCAs are ineffective in young people and dangerous in overdose. Venlafaxine has a higher suicidality signal. Paroxetine is not recommended.',
        ],
      },
      {
        heading: 'Prescribing and monitoring protocol',
        points: [
          'Before starting: document the indication, severity, bipolar screen, baseline suicidality, substance use, other medicines, and informed consent (including the boxed warning explained in plain language).',
          'Fluoxetine: 10 mg daily for 1–2 weeks, then 20 mg. Assess response at 4–6 weeks. The maximum in adolescents is usually 40–60 mg with specialist input.',
          'Sertraline: 25 mg daily, increasing to 50 mg after a week, with further increments of 25–50 mg as needed. Escitalopram: 5 mg, increasing to 10 mg.',
          'Review weekly or fortnightly for the first 4 weeks and after any dose change (telehealth is fine). Ask about suicidal thoughts, agitation, akathisia, sleep, mood elevation and side effects.',
          'Provide a limited supply if there is overdose risk. Involve a trusted adult to hold medication if needed. Give crisis numbers (Kids Helpline 1800 55 1800, Lifeline 13 11 14, 13YARN for First Nations people).',
          'Refer to child and youth mental health services or psychiatry if severe, there is no response to 2 adequate trials, or there is psychosis, bipolar features, serious self-harm or complex comorbidity.',
        ],
      },
      {
        heading: 'Culturally safe care for First Nations young people',
        points: [
          'Social and emotional wellbeing (SEWB) is a holistic model: connection to body, mind and emotions, family and kinship, community, culture, Country and spirituality.',
          'Being away from Country (for boarding school, study or work) can drive distress. Maintaining connection is protective.',
          'Work with Aboriginal Community Controlled Health Organisations, Aboriginal health workers and youth workers. Offer yarning-style consultations and involve family if the young person wishes.',
          'Racism, intergenerational trauma and grief are important contributors. Acknowledge them without pathologising culture.',
          'Services: 13YARN crisis support, headspace, ACCHO social and emotional wellbeing teams, and the MBS 715 health assessment to open broader care.',
        ],
      },
      {
        heading: 'Stopping antidepressants well',
        points: [
          'Plan to continue for 6–12 months after remission (longer if there were recurrent episodes), then review with the young person.',
          'Choose a low-stress time (for example school holidays, not exam periods). Agree on relapse signs and a plan.',
          'Taper gradually, reducing by about 25–50% every 2–4 weeks and more slowly at lower doses. Fluoxetine\'s long half-life allows simpler tapering.',
          'Discontinuation symptoms (dizziness, "brain zaps", irritability, flu-like symptoms, sleep disturbance) start within days and are more likely with short half-life drugs such as paroxetine and venlafaxine. Relapse develops over weeks with return of core symptoms.',
          'Continue psychological support during and after tapering. Maintaining sleep, activity and connection reduces relapse risk.',
        ],
      },
    ],
    keyNumbers: [
      'Fluoxetine: start 10 mg, increase to 20 mg after 1–2 weeks',
      'Sertraline: start 25 mg → 50 mg',
      'Review weekly or fortnightly for first 4 weeks',
      'Assess response at 4–6 weeks',
      'Continue 6–12 months after remission',
      'Suicidality signal ≈ 4% vs 2% placebo (trials)',
      'headspace: ages 12–25',
      'Kids Helpline 1800 55 1800; Lifeline 13 11 14; 13YARN 13 92 76',
      'Avoid TCAs, venlafaxine, paroxetine in youth',
      'Taper over ≥4 weeks; slower at lower doses',
    ],
    workedCase: {
      title: 'Sasha is feeling sad',
      paragraphs: [
        'Sasha, 15, is brought by her mother because she has been "moody" for 3 months, has stopped netball and is failing maths. Alone with you, after an explanation of confidentiality, she describes low mood most days, poor sleep, constant tiredness and feeling worthless. She is being excluded by friends online. PHQ-A is 16 (moderately severe). She has occasional thoughts that "everyone would be better off without me" but no plan or intent, and has not self-harmed.',
        'You complete HEEADSSS. There is no substance use, no abuse, and no bipolar family history. You develop a safety plan with her (warning signs, coping strategies, people to contact, crisis lines) and, with her consent, share it with her mother, including removing access to medicines at home.',
        'You create a Mental Health Treatment Plan and refer her to headspace for CBT. She agrees to her mother contacting the school about the online bullying and to getting help from the eSafety Commissioner. You review her fortnightly.',
        'After 8 weeks of CBT her PHQ-A is still 15 and she is missing school. After discussing the evidence and the boxed warning, Sasha and her mother agree to fluoxetine 10 mg, increasing to 20 mg after 2 weeks, with weekly telehealth checks. By 12 weeks her PHQ-A is 7 and she is back at netball. The plan is to continue for 6–12 months, then taper during holidays.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Mental health management in young people',
        lead: 'Choose the SINGLE most appropriate next step for each young person.',
        options: [
          'Watchful waiting with psychoeducation and review in 2 weeks',
          'CBT via headspace or a Mental Health Treatment Plan',
          'Start fluoxetine and continue CBT',
          'Start venlafaxine',
          'Urgent crisis or emergency mental health assessment',
          'Refer to psychiatry for possible bipolar disorder',
          'Stop the SSRI and review urgently',
          'Taper the antidepressant',
        ],
        items: [
          { stem: 'A 14-year-old with 3 weeks of low mood after a break-up; PHQ-A 8; functioning at school.', answer: 0 },
          { stem: 'A 16-year-old with a plan to overdose tonight and access to pills.', answer: 4 },
          { stem: 'A 17-year-old with moderate-severe depression not improving after 10 weeks of CBT.', answer: 2 },
          { stem: 'An 18-year-old on sertraline for 2 weeks who is now sleeping 3 hours a night, talking rapidly and spending impulsively.', answer: 6 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Caleb is away from Country',
        scenario:
          'Caleb, 17, a Yolŋu young man from a remote NT community, is at boarding school in a city. The school nurse brings him in because he has stopped eating properly, is missing classes and has been crying at night. He speaks softly and avoids eye contact.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE approaches are most appropriate to build rapport and cultural safety?',
            options: [
              'Offer to involve an Aboriginal health worker or liaison officer',
              'Use a yarning, unhurried approach and ask about family, community and Country',
              'Explain confidentiality and ask who he would like involved',
              'Insist he makes direct eye contact',
              'Complete a questionnaire only, without discussion',
              'Contact his family without asking him',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            context: 'Caleb says he misses home and family and feels "no good" here. PHQ-A is 14. He has had fleeting thoughts of not wanting to be alive, with no plan.',
            stem: 'What is the most appropriate first-line management?',
            options: [
              'Start sertraline today',
              'Safety plan, culturally appropriate psychological support and strengthening connection to family and culture',
              'Admit to hospital',
              'Send him home permanently',
              'Refer to psychiatry and take no other action',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO services are most appropriate to involve?',
            options: [
              'An Aboriginal Community Controlled Health Organisation or SEWB service',
              '13YARN and headspace (including culturally specific supports)',
              'Police',
              'Child protection (no concerns raised)',
              'Private psychiatric hospital',
            ],
            answers: [0, 1],
          },
          {
            kind: 'sba',
            context: 'Six weeks later he has a regular video call with family and has joined a cultural group, but his mood remains low (PHQ-A 15) and he is struggling at school. He and his aunty (by phone) agree to try medication.',
            stem: 'Which medicine and plan is most appropriate?',
            options: [
              'Amitriptyline 25 mg nightly',
              'Fluoxetine 10 mg, increasing to 20 mg, with weekly early review for suicidality and side effects',
              'Venlafaxine 75 mg',
              'Diazepam 5 mg PRN',
              'Paroxetine 20 mg',
            ],
            answer: 1,
          },
          {
            kind: 'emq',
            theme: 'Follow-up on an SSRI',
            lead: 'Choose the SINGLE most appropriate action for each finding at review.',
            options: [
              'Continue current dose and review',
              'Increase dose',
              'Stop or reduce SSRI urgently and reassess',
              'Plan gradual taper',
              'Switch to a TCA',
              'Add a benzodiazepine long term',
            ],
            items: [
              { stem: 'At 2 weeks: mild nausea, no change in mood, no suicidal thoughts', answer: 0 },
              { stem: 'At 3 weeks: intense restlessness, cannot sit still, new thoughts of self-harm', answer: 2 },
              { stem: 'At 6 weeks on 20 mg: partial improvement, tolerating well', answer: 1 },
              { stem: 'Well for 9 months, heading into long school holidays', answer: 3 },
            ],
          },
        ],
      },
    ],
  },
}

export default extra
