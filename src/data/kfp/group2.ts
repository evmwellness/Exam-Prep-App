import type { KfpCase } from '../../types'

export const group2Cases: KfpCase[] = [
  {
    id: 'kfp-g2-c1',
    exam: 'KFP',
    specialty: 'Mental Health',
    topic: 'Major depressive disorder with suicidal ideation',
    title: 'Too tired to keep going',
    vignette:
      "Daniel, a 23-year-old apprentice electrician, books a standard consultation for 'trouble sleeping'. Over the past 3 months he has had early morning waking, loss of interest in football and friends, poor concentration at work, and a 5 kg unintentional weight loss. He separated from his partner 4 months ago and has recently been drinking 8-10 standard drinks most Friday and Saturday nights. He has no past psychiatric history and takes no regular medication. He appears flat, makes little eye contact, and says, 'I just feel like I'm dragging myself through every day.'",
    items: [
      {
        id: 'kfp-g2-c1-i1',
        question:
          'Having identified likely major depressive disorder, which single action is most important to undertake during this first consultation?',
        options: [
          { key: 'A', text: 'Directly and specifically ask about suicidal thoughts, intent, plan and access to means' },
          { key: 'B', text: 'Administer a DASS-21 and arrange to discuss the scores at the next visit' },
          { key: 'C', text: 'Advise complete alcohol abstinence and review in 6 weeks to see if mood improves' },
          { key: 'D', text: 'Commence an antidepressant immediately and defer further history to the follow-up visit' },
        ],
        correctKey: 'A',
        explanation:
          'In any patient presenting with depressive symptoms, explicit enquiry about suicidal ideation, intent, plan, means and protective factors is the key decision point, because it determines the urgency and setting of all subsequent management. Asking about suicide does not increase risk. Young men with recent relationship breakdown, hazardous alcohol use and social withdrawal carry additional risk.',
        optionExplanations: {
          A: 'Correct - direct, specific risk enquiry is mandatory at first presentation and drives every subsequent management decision.',
          B: 'Symptom rating scales help track severity but deferring risk assessment to another visit leaves acute risk unassessed.',
          C: 'Reducing hazardous drinking is important, but a 6-week watch-and-wait with no risk assessment is unsafe.',
          D: 'Prescribing without first establishing risk, severity and substance use misses the critical safety step.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfp-g2-c1-i2',
        stemAddendum:
          "On direct questioning Daniel says he has thought 'everyone would be better off without me' several times in the past fortnight, but he has no plan, no intent to act, and says his younger sister and his job are reasons to keep going. He has no access to firearms and there is no history of self-harm. He agrees to involve his mother and is willing to return.",
        question:
          'Given this risk profile, which management approach is most appropriate today?',
        options: [
          { key: 'A', text: 'Arrange involuntary assessment under the Mental Health Act' },
          { key: 'B', text: 'Manage in the community with a collaborative safety plan, a GP Mental Health Treatment Plan, and early review within one week' },
          { key: 'C', text: 'Reassure him that passive thoughts are normal after a breakup and review in 3 months' },
          { key: 'D', text: 'Ask him to sign a written no-suicide contract as the main safety measure' },
        ],
        correctKey: 'B',
        explanation:
          'Passive ideation without plan or intent, with identified protective factors, engagement and available supports, can be managed in primary care provided a collaborative safety plan is made, supports are activated, and review is early and scheduled. A GP Mental Health Treatment Plan enables subsidised psychological therapy.',
        optionExplanations: {
          A: 'Involuntary assessment is not justified: he has no intent or plan, is engaged, and consents to treatment and follow-up.',
          B: 'Correct - community management with a safety plan, supports, a treatment plan and short-interval review matches this risk level.',
          C: 'Normalising and deferring for 3 months ignores moderate-severe depression with suicidal ideation.',
          D: 'No-suicide contracts have no evidence of protective effect and are not a substitute for a safety plan.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g2-c1-i3',
        stemAddendum:
          'You complete a safety plan with Daniel and he consents to baseline investigations before considering medication.',
        question:
          'Which set of baseline investigations is most appropriate at this point?',
        options: [
          { key: 'A', text: 'MRI brain and EEG' },
          { key: 'B', text: 'No investigations; depression is a clinical diagnosis and testing is never indicated' },
          { key: 'C', text: 'Full blood count, iron studies, electrolytes, liver function tests, TSH, glucose/HbA1c and vitamin B12' },
          { key: 'D', text: 'Serum antidepressant pharmacogenomic panel to select the drug' },
        ],
        correctKey: 'C',
        explanation:
          'Targeted screening bloods look for contributors and mimics of depressive symptoms (anaemia, iron deficiency, thyroid disease, diabetes, B12 deficiency) and give a baseline in the context of hazardous alcohol use, unintentional weight loss and planned pharmacotherapy. Liver function is particularly relevant here.',
        optionExplanations: {
          A: 'Neuroimaging and EEG are not indicated without focal neurological signs, seizures or atypical features.',
          B: 'Depression is clinically diagnosed, but targeted baseline bloods are appropriate with weight loss and hazardous alcohol use.',
          C: 'Correct - a focused screen for organic contributors plus a baseline before pharmacotherapy.',
          D: 'Pharmacogenomic testing is not recommended for routine first-line antidepressant selection in Australian practice.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g2-c1-i4',
        stemAddendum:
          "Bloods are normal apart from a mildly raised GGT. At review one week later Daniel's mood remains low, he is still not working effectively, and he asks about medication in addition to the psychologist appointment you arranged.",
        question:
          'Which is the most appropriate pharmacological step, and what specific monitoring must accompany it?',
        options: [
          { key: 'A', text: 'Start an SSRI at a low dose with structured review within 1-2 weeks, specifically monitoring for increased agitation, akathisia and emergent suicidal thoughts' },
          { key: 'B', text: 'Start a tricyclic antidepressant at full therapeutic dose with review in 6 weeks' },
          { key: 'C', text: 'Prescribe diazepam 5 mg three times daily for 4 weeks to settle his symptoms' },
          { key: 'D', text: 'Start an SSRI and advise him that no review is needed until the 4-week psychologist report arrives' },
        ],
        correctKey: 'A',
        explanation:
          'An SSRI started at low dose, combined with psychological therapy, is first-line for moderate-severe depression. In people under 25 there is an increased risk of emergent suicidal thoughts and behaviour in the early weeks, so review within 1-2 weeks of starting or changing dose, with explicit monitoring for agitation, akathisia and worsening ideation, is the key safety feature.',
        optionExplanations: {
          A: 'Correct - low-dose SSRI plus psychological therapy with close early review and specific monitoring in a patient under 25.',
          B: 'Tricyclics are not first-line, are more toxic in overdose, and a 6-week gap to review is unsafe here.',
          C: 'Benzodiazepines do not treat depression, risk dependence, and are hazardous alongside heavy alcohol use.',
          D: 'Deferring review removes the monitoring that makes SSRI initiation safe in a young adult with suicidal ideation.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g2-c1-i5',
        stemAddendum:
          'By 10 weeks Daniel reports substantially improved mood, has returned to full duties, is attending psychology and has reduced his drinking to 4 standard drinks per week.',
        question:
          'What is the most appropriate longer-term plan for his antidepressant therapy?',
        options: [
          { key: 'A', text: 'Cease the SSRI now that he has responded, stopping abruptly to avoid unnecessary exposure' },
          { key: 'B', text: 'Continue the effective dose for at least 6-12 months after remission, then review and taper gradually with relapse-prevention planning' },
          { key: 'C', text: 'Continue the SSRI lifelong regardless of course, as relapse is inevitable after a first episode' },
          { key: 'D', text: 'Halve the dose immediately and switch to as-needed use during stressful periods' },
        ],
        correctKey: 'B',
        explanation:
          'After remission of a first episode of major depression, continuing the effective dose for at least 6-12 months reduces relapse risk. Cessation should then be a shared decision with gradual tapering to limit discontinuation symptoms, alongside relapse-prevention work, ongoing alcohol reduction and a clear plan to re-present early if symptoms return.',
        optionExplanations: {
          A: 'Stopping at response rather than after a continuation phase, and stopping abruptly, both increase relapse and discontinuation symptoms.',
          B: 'Correct - continue 6-12 months post-remission, then review and taper gradually with a relapse-prevention plan.',
          C: 'Indefinite therapy is reserved for recurrent or high-risk illness, not a single treated episode.',
          D: 'Antidepressants are not effective when used intermittently or as-needed.',
        },
        difficulty: 'moderate',
      },
    ],
  },
  {
    id: 'kfp-g2-c2',
    exam: 'KFP',
    specialty: 'Neurology',
    topic: 'Transient ischaemic attack and secondary stroke prevention',
    title: 'Twenty minutes of weakness',
    vignette:
      "Beryl, a 71-year-old retired teacher, attends your practice on a Tuesday morning. Yesterday afternoon she suddenly could not grip her coffee cup with her right hand, and her husband noticed her speech was slurred. Everything returned to normal after about 20 minutes and she feels completely well now. She has hypertension treated with perindopril, type 2 diabetes on metformin, and is an ex-smoker. On examination she is alert with normal speech, no focal neurological deficit, BP 168/92 mmHg, and an irregularly irregular pulse at 96/min.",
    items: [
      {
        id: 'kfp-g2-c2-i1',
        question:
          'What is the single most likely diagnosis for yesterday\'s episode?',
        options: [
          { key: 'A', text: 'Transient ischaemic attack in the left middle cerebral artery territory' },
          { key: 'B', text: 'Migraine with aura' },
          { key: 'C', text: 'Focal seizure with post-ictal Todd paresis' },
          { key: 'D', text: 'Vestibular neuritis' },
        ],
        correctKey: 'A',
        explanation:
          'Abrupt-onset, negative (loss of function) neurological symptoms in a single vascular territory - right hand weakness with dysarthria, consistent with left hemisphere - resolving completely within an hour in a patient with vascular risk factors and an irregular pulse, is a transient ischaemic attack until proven otherwise.',
        optionExplanations: {
          A: 'Correct - sudden onset, focal negative symptoms fitting one vascular territory, full resolution, high vascular risk.',
          B: 'Migraine aura typically evolves over minutes with positive symptoms such as visual scintillations, often followed by headache.',
          C: 'Focal seizures usually produce positive motor phenomena and any Todd paresis follows an observed seizure.',
          D: 'Vestibular neuritis causes prolonged vertigo with nystagmus, not transient unilateral hand weakness and dysarthria.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfp-g2-c2-i2',
        stemAddendum:
          'It is now approximately 20 hours since symptom onset. She is asymptomatic, ambulant, and her husband is with her.',
        question:
          'What is the most appropriate immediate action regarding her assessment pathway?',
        options: [
          { key: 'A', text: 'Arrange urgent same-day assessment at a stroke service or emergency department, as she is a high-risk TIA' },
          { key: 'B', text: 'Refer routinely to a neurologist with an appointment in the next 6-8 weeks' },
          { key: 'C', text: 'Reassure her that symptoms have resolved and review her in a month with the results of outpatient tests' },
          { key: 'D', text: 'Arrange an outpatient MRI brain first and decide on referral only if it shows infarction' },
        ],
        correctKey: 'A',
        explanation:
          'Stroke risk after TIA is highest in the first 48 hours. Features conferring high risk here include TIA within the last 48 hours, motor weakness with speech disturbance, newly detected atrial fibrillation, and uncontrolled hypertension. Australian guidelines recommend urgent same-day specialist assessment and investigation for such patients.',
        optionExplanations: {
          A: 'Correct - recent TIA with motor and speech involvement plus likely AF requires urgent same-day specialist assessment.',
          B: 'A 6-8 week wait exposes her to the period of greatest stroke risk without treatment.',
          C: 'Symptom resolution does not reduce risk; TIA is a warning, not an all-clear.',
          D: 'Waiting on outpatient imaging before referral delays urgent assessment and treatment decisions.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g2-c2-i3',
        stemAddendum:
          'While arranging urgent transfer you perform initial investigations in the practice.',
        question:
          'Which investigation performed today is most likely to change her long-term management?',
        options: [
          { key: 'A', text: 'A 12-lead ECG to confirm atrial fibrillation' },
          { key: 'B', text: 'An EEG' },
          { key: 'C', text: 'Serum troponin' },
          { key: 'D', text: 'A plain skull X-ray' },
        ],
        correctKey: 'A',
        explanation:
          'Confirming atrial fibrillation fundamentally changes secondary prevention, shifting treatment from antiplatelet therapy to anticoagulation and markedly reducing recurrent stroke risk. Carotid imaging and brain imaging are also required urgently, but the ECG is the test available immediately that most directly alters therapy.',
        optionExplanations: {
          A: 'Correct - documented AF changes secondary prevention from antiplatelet therapy to anticoagulation.',
          B: 'EEG is not indicated for a typical TIA presentation.',
          C: 'Troponin may be measured in ED but does not direct stroke prevention in an asymptomatic patient without chest pain.',
          D: 'Skull X-ray has no role in TIA assessment.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfp-g2-c2-i4',
        stemAddendum:
          'ECG confirms atrial fibrillation. At the stroke clinic, CT brain shows only small vessel change with no haemorrhage, carotid Doppler shows less than 50% stenosis bilaterally, and eGFR is 68 mL/min/1.73m2. She is discharged back to you for ongoing management.',
        question:
          'Which antithrombotic strategy is most appropriate for secondary prevention?',
        options: [
          { key: 'A', text: 'Aspirin 100 mg daily alone, long term' },
          { key: 'B', text: 'A direct oral anticoagulant at the dose appropriate for her age and renal function' },
          { key: 'C', text: 'Dual antiplatelet therapy with aspirin and clopidogrel indefinitely' },
          { key: 'D', text: 'No antithrombotic therapy, as her CT showed no infarct' },
        ],
        correctKey: 'B',
        explanation:
          'In TIA or ischaemic stroke with atrial fibrillation and no contraindication, anticoagulation - usually a direct oral anticoagulant, dose-adjusted for age, weight and renal function - is superior to antiplatelet therapy for preventing recurrent stroke. Antiplatelet therapy is not added routinely once anticoagulation is established.',
        optionExplanations: {
          A: 'Aspirin is substantially less effective than anticoagulation for cardioembolic stroke prevention in AF.',
          B: 'Correct - a dose-appropriate DOAC is the guideline-recommended choice given AF, no haemorrhage and adequate renal function.',
          C: 'Indefinite dual antiplatelet therapy increases bleeding without preventing cardioembolic stroke; short-course DAPT applies to non-cardioembolic high-risk TIA.',
          D: 'A normal CT does not exclude TIA and does not remove the high recurrent stroke risk.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g2-c2-i5',
        stemAddendum:
          'She is started on a DOAC and a high-intensity statin. She asks what else she should do and whether she can keep driving.',
        question:
          'Which combination of ongoing management points is most appropriate?',
        options: [
          { key: 'A', text: 'Advise she may drive immediately, and review her blood pressure at her next routine visit in 12 months' },
          { key: 'B', text: 'Advise a private-licence non-driving period per Austroads Assessing Fitness to Drive, target blood pressure control, review renal function and bleeding risk periodically, and give clear FAST safety-netting advice' },
          { key: 'C', text: 'Advise permanent cessation of driving and cease the statin once LDL falls below target' },
          { key: 'D', text: 'Advise bed rest for 6 weeks and avoid all physical activity to prevent another event' },
        ],
        correctKey: 'B',
        explanation:
          'Longer-term care after TIA combines a driving restriction under Austroads Assessing Fitness to Drive (a defined non-driving period for a private licence after TIA, longer for commercial licences), aggressive risk factor control with a blood pressure target, ongoing lipid therapy, periodic review of renal function and bleeding risk on anticoagulation, and explicit FAST advice to call 000 immediately if symptoms recur.',
        optionExplanations: {
          A: 'There is a mandated non-driving period after TIA, and deferring BP review for 12 months leaves a major modifiable risk untreated.',
          B: 'Correct - Austroads-based driving advice, BP and lipid targets, monitoring on anticoagulation, and FAST safety-netting.',
          C: 'Permanent driving cessation is not required after a single TIA with recovery, and statins are continued long term, not stopped at target.',
          D: 'Prolonged inactivity is harmful; graded physical activity is part of secondary prevention.',
        },
        difficulty: 'moderate',
      },
    ],
  },
  {
    id: 'kfp-g2-c3',
    exam: 'KFP',
    specialty: 'Musculoskeletal & Rheumatology',
    topic: 'Acute monoarthritis - gout and septic arthritis',
    title: 'The hot swollen knee',
    vignette:
      "Rakesh, a 58-year-old warehouse supervisor, presents with a 2-day history of a painful, swollen right knee that came on overnight. He can barely weight bear. He has hypertension treated with hydrochlorothiazide, stage 3a chronic kidney disease (eGFR 52 mL/min/1.73m2), a BMI of 33, and drinks 4-5 beers most evenings. He had a similar but milder episode in his left first metatarsophalangeal joint 18 months ago that settled with 'anti-inflammatories'. On examination the knee is hot, red, swollen with an effusion, and exquisitely tender. His temperature is 37.9 degrees Celsius.",
    items: [
      {
        id: 'kfp-g2-c3-i1',
        question:
          'Which diagnosis must be actively excluded before attributing this presentation to gout?',
        options: [
          { key: 'A', text: 'Septic arthritis' },
          { key: 'B', text: 'Osteoarthritis flare' },
          { key: 'C', text: 'Patellofemoral pain syndrome' },
          { key: 'D', text: 'Pes anserine bursitis' },
        ],
        correctKey: 'A',
        explanation:
          'Any acute hot, swollen, exquisitely tender joint is septic arthritis until proven otherwise. It can destroy a joint within days and carries significant mortality. A prior history of gout does not exclude sepsis, and the two can coexist - fever and inability to weight bear raise concern further.',
        optionExplanations: {
          A: 'Correct - septic arthritis is the time-critical diagnosis that must be excluded in any acute hot swollen joint.',
          B: 'Osteoarthritis does not typically produce an acutely hot, red joint with fever over 48 hours.',
          C: 'Patellofemoral pain is an activity-related anterior knee pain without effusion, erythema or fever.',
          D: 'Pes anserine bursitis causes localised medial tibial tenderness, not a hot joint effusion with systemic features.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfp-g2-c3-i2',
        stemAddendum:
          'He has no skin break over the knee, no recent joint injection or surgery, is not immunosuppressed, and has no rigors. You are unable to exclude infection clinically.',
        question:
          'What is the most appropriate immediate step?',
        options: [
          { key: 'A', text: 'Arrange urgent same-day joint aspiration for Gram stain, culture, cell count and crystal microscopy before starting antibiotics' },
          { key: 'B', text: 'Start empirical oral flucloxacillin and review in 3 days' },
          { key: 'C', text: 'Give an intra-articular corticosteroid injection in the practice today for rapid relief' },
          { key: 'D', text: 'Order a serum urate level and treat as gout if it is elevated' },
        ],
        correctKey: 'A',
        explanation:
          'Synovial fluid aspiration is the key investigation: it distinguishes septic arthritis from crystal arthropathy and should be obtained urgently, before antibiotics where possible, without delaying treatment in an unwell patient. In general practice this usually means urgent referral to an emergency department or on-call orthopaedic/rheumatology service for aspiration.',
        optionExplanations: {
          A: 'Correct - urgent aspiration for Gram stain, culture, cell count and crystals is the definitive discriminating step.',
          B: 'Oral antibiotics without aspiration may partially treat and obscure septic arthritis while leaving it inadequately managed.',
          C: 'Injecting corticosteroid into a potentially septic joint risks serious harm.',
          D: 'Serum urate can be normal or low during an acute flare and can be elevated in asymptomatic hyperuricaemia, so it cannot exclude sepsis.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g2-c3-i3',
        stemAddendum:
          'Aspiration in the emergency department yields cloudy fluid with a white cell count of 18,000/mm3, no organisms on Gram stain, negative culture at 48 hours, and negatively birefringent needle-shaped crystals. He is discharged to your care with a diagnosis of acute gout.',
        question:
          'Considering his chronic kidney disease and comorbidities, which is the most appropriate treatment for this acute flare?',
        options: [
          { key: 'A', text: 'High-dose indomethacin for 10 days' },
          { key: 'B', text: 'Low-dose colchicine (1 mg then 500 micrograms one hour later, then reduced/ceased) or a short course of oral prednis(ol)one' },
          { key: 'C', text: 'Commence allopurinol 300 mg daily today as the sole treatment for the flare' },
          { key: 'D', text: 'Paracetamol alone until the flare settles' },
        ],
        correctKey: 'B',
        explanation:
          'With an eGFR of 52 and hypertension, NSAIDs are relatively contraindicated. Low-dose colchicine (renally dose-adjusted) or a short course of oral corticosteroid is preferred. High-dose or prolonged colchicine regimens cause significant toxicity and are no more effective than low-dose regimens.',
        optionExplanations: {
          A: 'High-dose NSAIDs risk further renal impairment, fluid retention and worsening blood pressure in CKD and hypertension.',
          B: 'Correct - low-dose colchicine with renal dose adjustment, or short-course oral corticosteroid, suits his comorbidity profile.',
          C: 'Starting urate-lowering therapy alone does not treat an acute flare and can prolong it if used without anti-inflammatory cover.',
          D: 'Paracetamol alone is inadequate for a severe acute gout flare.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g2-c3-i4',
        stemAddendum:
          'The flare settles within a week. This is his second documented flare, and his serum urate measured 3 weeks later is 0.52 mmol/L.',
        question:
          'What is the most appropriate next step in management?',
        options: [
          { key: 'A', text: 'Take no action unless he has a third flare within the next 12 months' },
          { key: 'B', text: 'Start allopurinol at a low dose (e.g. 50-100 mg daily given his CKD), titrate gradually against serum urate, with anti-inflammatory flare prophylaxis during titration' },
          { key: 'C', text: 'Start allopurinol 300 mg daily immediately with no prophylaxis and no further urate monitoring' },
          { key: 'D', text: 'Prescribe long-term daily NSAIDs to suppress future flares' },
        ],
        correctKey: 'B',
        explanation:
          'Recurrent flares are an indication for urate-lowering therapy. Allopurinol is first-line, started at a low dose (lower in renal impairment) and titrated gradually - this reduces the risk of severe cutaneous adverse reactions and of precipitating flares. Prophylaxis with low-dose colchicine or NSAID during the first months of titration reduces flare frequency.',
        optionExplanations: {
          A: 'He already has recurrent flares, hyperuricaemia and comorbidity - urate-lowering therapy is indicated now.',
          B: 'Correct - start low, go slow, titrate to target, and cover the titration period with flare prophylaxis.',
          C: 'Starting at a high dose without prophylaxis or monitoring increases flare risk and adverse reactions, and fails to confirm target attainment.',
          D: 'Continuous NSAIDs do not lower urate and are hazardous in CKD and hypertension.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g2-c3-i5',
        stemAddendum:
          'He starts allopurinol with prophylaxis and asks what the plan is from here.',
        question:
          'Which combination best describes appropriate long-term management?',
        options: [
          { key: 'A', text: 'Titrate allopurinol to a serum urate target below 0.36 mmol/L (lower if tophi), continue it lifelong including during flares, review the thiazide and alcohol intake, and address weight and cardiovascular risk' },
          { key: 'B', text: 'Stop allopurinol once the urate reaches target, restarting only if another flare occurs' },
          { key: 'C', text: 'Cease allopurinol during any future flare and recommence after it settles' },
          { key: 'D', text: 'Avoid all purine-containing foods as the sole long-term strategy, without medication or urate monitoring' },
        ],
        correctKey: 'A',
        explanation:
          'Effective long-term gout care is treat-to-target: titrate allopurinol until serum urate is sustained below 0.36 mmol/L (below about 0.30 mmol/L with tophi or severe disease), continue it indefinitely and without interruption during flares, and modify contributors - thiazide diuretics, alcohol, obesity - while managing the associated cardiovascular and renal risk.',
        optionExplanations: {
          A: 'Correct - treat to a urate target, continue therapy uninterrupted, and modify drug, alcohol, weight and cardiovascular risk factors.',
          B: 'Stopping at target causes urate to rise again and flares to recur; therapy is continued long term.',
          C: 'Established urate-lowering therapy should not be interrupted during a flare, as this prolongs instability.',
          D: 'Dietary change alone produces only a small urate reduction and is insufficient for recurrent gout with hyperuricaemia.',
        },
        difficulty: 'moderate',
      },
    ],
  },
]
