import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  '637': {
    sections: [
      {
        heading: 'Prognosis and phases of illness',
        points: [
          'Palliative Care Outcomes Collaboration (PCOC) phases are Stable, Unstable, Deteriorating, Terminal and Bereavement. Services use them to match the intensity of care to need, and a change of phase should trigger a review of the care plan.',
          'Illness trajectories differ. In cancer, function is fairly well maintained and then declines rapidly over weeks to months. Organ failure (heart failure, COPD) follows a slow decline punctuated by acute crises, any of which may be fatal. Frailty and dementia bring a long, slow dwindling. Knowing the trajectory helps you time conversations.',
          'SPICT general indicators: two or more unplanned admissions in 6 months, performance status poor or deteriorating (in bed or chair more than 50% of the day), dependence on others for care, weight loss over 10% in 3–6 months, persistent symptoms despite optimal treatment, and the person or family asking for palliative care or a focus on quality of life.',
          'AKPS (Australia-modified Karnofsky Performance Status) runs from 100 (normal) to 10 (comatose or barely rousable). An AKPS of 40 or less (in bed more than 50% of the time) usually means a prognosis of weeks to a few months in cancer.',
          'Prognostic uncertainty is not a reason to delay planning. Frame it as "We may be looking at months rather than years" and review as things change.',
        ],
      },
      {
        heading: 'The shared-care model with community palliative care',
        points: [
          'CPC teams (specialist palliative care nurses, palliative medicine specialists, allied health, social work, pastoral care) work alongside the GP. They do not replace the GP. The GP usually remains the prescriber, the certifier of death and the continuity clinician.',
          'Refer early: at a change in phase, for complex symptoms, psychosocial or existential distress, carer strain, or when a home death is planned. Many services take referrals directly from GPs with a brief summary and current medicines.',
          'CPC services typically provide 24-hour phone advice for carers, nursing visits, equipment loans (hospital beds, commodes, pressure mattresses), syringe driver set-up and monitoring, and bereavement follow-up.',
          'Agree who does what: who responds after hours, who writes the syringe driver chart, and who the family should call first. Put this in writing and share it with the ambulance service where state systems allow (for example ambulance palliative care plans or registers).',
          'MBS supports this care through home visits, GP chronic condition management plans, case conferencing items (including residential aged care), and after-hours care. Documented case conferences with CPC and the family are high-value.',
        ],
      },
      {
        heading: 'Prescribing for the dying patient',
        points: [
          'Rationalise medicines as swallowing fails. Stop statins, antihypertensives (if BP is low), diabetes medicines (or reduce to minimal, with symptom-based glucose checks), bisphosphonates, vitamins and anticoagulants (in discussion with the patient and family). Continue or convert medicines for symptom control, seizures and steroid dependence.',
          'Seizure prophylaxis when oral route is lost: SC midazolam (bolus PRN or continuous infusion, for example 10–30 mg/24 h), or levetiracetam SC off-label in specialist-supported settings.',
          'Diabetes near death: aim to avoid symptomatic hypo- and hyperglycaemia rather than hit targets. Type 1 diabetes still needs some basal insulin until the very last days. Stop routine BGL monitoring when the person is dying.',
          'The PBS Palliative Care Schedule lists extra items and quantities (for example certain opioids, antiemetics and hyoscine butylbromide ampoules) for patients receiving palliative care. Authority requirements vary.',
          'Syringe drivers: common compatible combinations include morphine or hydromorphone with midazolam, haloperidol and/or hyoscine butylbromide in water for injection. Check compatibility references. Cyclizine precipitates with some drugs, and dexamethasone is usually given as a separate SC bolus.',
          'Opioid conversion rule of thumb: oral morphine 30 mg ≈ SC morphine 10–15 mg ≈ oral oxycodone 15–20 mg ≈ SC hydromorphone 2 mg (approximate; reduce by 25–50% when switching opioids because of incomplete cross-tolerance). Fentanyl patches are continued at the end of life, with PRN SC opioid for breakthrough.',
        ],
      },
      {
        heading: 'Delirium, agitation and existential distress',
        points: [
          'Terminal delirium affects most people in the final days. Hypoactive delirium (withdrawn, drowsy) is often missed. Hyperactive delirium (restless, agitated) is distressing for families.',
          'Look for quickly reversible contributors that fit the goals of care: urinary retention (bladder scan or catheter), faecal impaction, pain, opioid neurotoxicity, hypercalcaemia, hypoxia, withdrawal from nicotine or alcohol, anticholinergic medicines.',
          'Non-drug care: a calm environment, familiar people, lighting cues and reorientation where appropriate, and explaining to the family that confusion is part of dying.',
          'Medicines: haloperidol 0.5–1 mg SC 2–4 hourly PRN (max usually 5 mg/day in the elderly) for delirium, plus midazolam 2.5–5 mg SC PRN if agitation persists. Refractory terminal agitation needs specialist advice about palliative sedation, which is proportionate sedation to relieve suffering, not to hasten death.',
          'Existential and spiritual distress ("total pain") responds to presence, legacy work, pastoral care, and culturally appropriate practices. Ask "What is most important to you now?" and "What are you most worried about?"',
        ],
      },
      {
        heading: 'Residential aged care and emergency departments',
        points: [
          'Many people die in residential aged care homes. Good care relies on up-to-date advance care directives, clear goals of care, anticipatory PRN charts and a syringe driver plan, plus staff who are confident to call the GP before the ambulance.',
          'A residential aged care case conference (GP, nursing staff, family, CPC) is the most effective single step to prevent unwanted transfers to hospital.',
          'Transfers to ED are sometimes appropriate: for a fracture needing fixation for comfort, for a symptom that cannot be managed at home, or when the goals of care allow active treatment. The problem is the unplanned transfer that no one wanted.',
          'After a hospital admission, reconcile medicines, update the care plan and check the discharge summary for new goals-of-care decisions. Palliative care wards and inpatient hospices provide respite and terminal care when home is no longer sustainable.',
          'Specialist palliative care in-reach to aged care, and telehealth consultations, are increasingly available and can be accessed by the GP.',
        ],
      },
      {
        heading: 'Carers, cultural safety and bereavement',
        points: [
          'Carers need practical training: mouth care, turning, giving SC PRN medicines via a subcutaneous cannula (with written instructions and a medication log), recognising signs of dying, and who to call.',
          'Carer Gateway, respite (including in-home and residential respite), and the Carer Payment or Carer Allowance can help. Screen carers for exhaustion and depression. They are often your patients too.',
          'For Aboriginal and Torres Strait Islander people, returning to Country, involving family and community, and "sorry business" may be central. Involve Aboriginal health workers or liaison officers early.',
          'Cultural and religious needs around death vary (for example positioning, washing the body, timing of burial). Ask the family directly and document preferences.',
          'Bereavement follow-up: a phone call or visit within weeks of the death. Most grief is normal. Prolonged grief disorder (intense yearning or preoccupation persisting at least 12 months and impairing function) warrants referral for grief-focused therapy.',
        ],
      },
      {
        heading: 'Conversations about dying',
        points: [
          'Prepare: check what the person already knows, who they want present, and whether an interpreter is needed. Sit down, allow time, and avoid jargon.',
          'Use "ask–tell–ask": "What have the doctors told you about where things are heading?" Give information in small chunks, then check understanding and emotion before continuing.',
          'Respond to emotion before information. Name it ("This is a lot to take in"), and allow silence. Offering more facts to someone in shock rarely helps.',
          'Discuss what matters: "If time were short, what would be most important to you?" "Are there things you would not want?" This makes treatment decisions (such as hospital transfer, antibiotics or artificial nutrition) easier to align with values.',
          'Artificial hydration and nutrition near death rarely improve comfort and can worsen oedema, secretions and breathlessness. Mouth care relieves thirst better. Explain that loss of appetite is part of dying, not "starving".',
          'Voluntary assisted dying is lawful in all states and the ACT, with differing rules on who may raise it. Know your jurisdiction and your professional obligations, including conscientious objection and onward referral or information requirements.',
        ],
      },
      {
        heading: 'Breathlessness, bleeding and other crises at home',
        points: [
          'Acute breathlessness crisis: sit the person upright, use a fan and calm reassurance, give an SC opioid PRN, and add midazolam if panic is prominent. A written crisis plan lets carers act quickly.',
          'Malignant pleural effusion or ascites: drainage relieves symptoms and can be arranged as a day procedure. Indwelling pleural or peritoneal catheters allow home drainage by community nurses.',
          'Catastrophic haemorrhage (for example head and neck cancer or a large vessel near a tumour): prepare the family, keep dark towels available, and pre-draw midazolam 5–10 mg SC or buccal to reduce awareness. Stay with the person.',
          'Seizures: buccal or intranasal midazolam 10 mg (5 mg in frail patients), repeated once if needed. Arrange a continuous SC infusion if they recur.',
          'Hypercalcaemia (confusion, thirst, constipation, nausea) can be treated with IV fluids and zoledronic acid if the goals of care support it. Symptoms improve within days.',
          'Spinal cord compression: new back pain with leg weakness, sensory level or sphincter change. Give dexamethasone 16 mg and seek urgent specialist advice, even in advanced disease, as radiotherapy may preserve function.',
        ],
      },
    ],
    keyNumbers: [
      'Opioid-naïve PRN: morphine 2.5–5 mg SC q1–2h',
      'Oral → SC morphine: divide by 2–3',
      'Breakthrough dose ≈ 1/6–1/10 of 24 h total',
      'Haloperidol 0.5–1 mg SC PRN for delirium or nausea',
      'Midazolam 2.5–5 mg SC PRN for agitation',
      'Hyoscine butylbromide 20 mg SC PRN for secretions',
      'AKPS ≤40 = in bed >50% of the day',
      'Prolonged grief disorder: symptoms ≥12 months (DSM-5-TR)',
      'Switching opioids: reduce the equianalgesic dose by 25–50%',
      'eGFR <30: avoid morphine; use hydromorphone (reduced) or fentanyl',
    ],
    workedCase: {
      title: 'Planning a home death for a man with heart failure',
      paragraphs: [
        'Arthur, 86, has NYHA class IV heart failure and stage 4 CKD. He has had three admissions in 4 months and now spends most of the day in his recliner. He tells you he does not want to go back to hospital. His wife Margaret, 83, is his carer and is anxious about "doing the wrong thing".',
        'You recognise the organ-failure trajectory and the SPICT indicators (repeated admissions, declining function), and you hold a family meeting. Arthur confirms he wants comfort-focused care at home. You complete a goals-of-care form and an advance care directive, and you register a palliative care plan with the ambulance service. You refer to CPC and arrange a home visit with their nurse.',
        'Medicines: you continue low-dose furosemide for symptomatic congestion and stop the statin and aspirin. Because of his renal function, you prescribe hydromorphone 0.25 mg SC q2h PRN for breathlessness or pain, rather than morphine. You add midazolam 2.5 mg SC PRN for distressing breathlessness with anxiety, haloperidol 0.5 mg SC PRN for delirium or nausea, and hyoscine butylbromide 20 mg SC PRN for secretions. You leave a written medication chart with the CPC team and arrange respite options for Margaret.',
        'Six weeks later Arthur dies peacefully at home. Margaret calls the CPC after-hours number, not 000. You attend to verify the death and complete the death certificate the next morning. You call Margaret 2 weeks later to check how she is coping.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Symptom management at the end of life',
        lead: 'For each patient, choose the SINGLE most appropriate medicine.',
        options: [
          'Morphine 2.5 mg SC',
          'Hydromorphone 0.25 mg SC',
          'Haloperidol 0.5 mg SC',
          'Midazolam 2.5 mg SC',
          'Hyoscine butylbromide 20 mg SC',
          'Metoclopramide 10 mg SC',
          'Dexamethasone 8 mg SC',
          'Octreotide 100 microgram SC',
          'Furosemide 40 mg IV',
          'Ondansetron 8 mg SL',
        ],
        items: [
          {
            stem: 'An unconscious woman in her last hours has loud rattling breathing; the family are distressed.',
            answer: 4,
            explanation: 'Antimuscarinic for respiratory secretions, plus explanation and repositioning.',
          },
          {
            stem: 'A man with eGFR 15 and lung cancer has breakthrough pain and breathlessness; he is opioid-naïve.',
            answer: 1,
            explanation: 'Hydromorphone is preferred in severe renal impairment because morphine metabolites accumulate.',
          },
          {
            stem: 'A confused, agitated man is pulling at his lines and hallucinating; urinary retention has been excluded.',
            answer: 2,
            explanation: 'Haloperidol is first line for delirium. Add midazolam if distress persists.',
          },
          {
            stem: 'A woman with ovarian cancer has nausea and early satiety from gastric stasis; there is no bowel obstruction.',
            answer: 5,
            explanation: 'Prokinetic for gastric stasis, provided there is no complete obstruction.',
          },
        ],
      },
    ],
    kfp: [
      {
        title: 'Duncan is increasingly confused and aggressive',
        scenario:
          'Duncan, 74, has metastatic prostate cancer with bone and liver metastases. He is cared for at home by his daughter with CPC support. He takes MS Contin 60 mg bd, oxycodone IR 10 mg PRN (using 4–5 doses a day), dexamethasone 4 mg mane and oxybutynin. Over 3 days he has become confused, agitated at night and has lashed out at his daughter.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which of the following are potentially reversible contributors to his delirium that you should assess at today\'s home visit?',
            options: [
              'Urinary retention',
              'Faecal impaction',
              'Hypercalcaemia',
              'Opioid toxicity',
              'Anticholinergic burden (oxybutynin)',
              'Vitamin B12 deficiency',
              'Iron deficiency',
              'Hypothyroidism',
            ],
            answers: [0, 1, 2, 3, 4],
            explanation: 'Retention, constipation, hypercalcaemia, opioid toxicity and anticholinergics are common, quickly reversible causes in palliative delirium. B12, iron and thyroid are not acute causes.',
          },
          {
            kind: 'sba',
            context: 'A bladder scan shows 850 mL. Corrected calcium is 2.45 mmol/L. He has myoclonic jerks and pinpoint pupils. eGFR has fallen from 55 to 28.',
            stem: 'What is the most appropriate change to his opioid regimen?',
            options: [
              'Increase MS Contin to 90 mg bd',
              'Stop opioids completely',
              'Reduce the total opioid dose and switch from morphine to an opioid less dependent on renal clearance (e.g. hydromorphone at reduced dose)',
              'Add naloxone 400 microgram IV',
              'Continue unchanged and add haloperidol only',
            ],
            answer: 2,
            explanation: 'Myoclonus with falling renal function suggests morphine metabolite accumulation. Reduce the dose and rotate opioid. Full reversal with naloxone would precipitate severe pain.',
          },
          {
            kind: 'sba',
            stem: 'What is the most appropriate immediate step for his urinary retention?',
            options: ['Tamsulosin and review in a week', 'Indwelling urinary catheter', 'Increase oxybutynin', 'Refer to urology outpatients', 'Fluid restriction'],
            answer: 1,
            explanation: 'Urgent catheterisation relieves distress and often improves agitation. Also stop oxybutynin, which contributes.',
          },
          {
            kind: 'emq',
            theme: 'Medicines for terminal symptoms',
            lead: 'Two days later Duncan can no longer swallow. Choose the SINGLE best subcutaneous medicine for each need.',
            options: ['Midazolam', 'Haloperidol', 'Hyoscine butylbromide', 'Metoclopramide', 'Dexamethasone', 'Hydromorphone', 'Clonazepam', 'Promethazine'],
            items: [
              { stem: 'Continuous background analgesia in his syringe driver', answer: 5 },
              { stem: 'Night-time confusion with hallucinations', answer: 1 },
              { stem: 'Severe anxiety and restlessness not settling with the delirium medicine', answer: 0 },
            ],
          },
          {
            kind: 'multi',
            context: 'Duncan dies peacefully at home at 3 am. His daughter phones you in the morning.',
            stem: 'Which TWO statements are correct?',
            options: [
              'She should have called 000 and police at the time of death',
              'As his GP you can verify the death and complete the Medical Certificate of Cause of Death if the cause is clear',
              'The death must be reported to the coroner because he died at home',
              'Arrange bereavement follow-up for his daughter',
              'An autopsy is required for all home deaths',
            ],
            answers: [1, 3],
            explanation: 'An expected death at home from a known natural cause is not reportable. The GP certifies it, and bereavement support is part of care.',
          },
        ],
      },
    ],
  },
  '636': {
    sections: [
      {
        heading: 'Interpreting syphilis serology',
        points: [
          'Typical Australian lab algorithm: a treponemal screening immunoassay (EIA/CMIA). If reactive, a second treponemal test (TPPA) confirms it, and RPR gives activity. PCR of a lesion swab detects early primary syphilis before serology turns positive.',
          'Treponemal positive + RPR reactive: current or recently treated infection. Stage it by history, examination and previous results (check with the lab and state sexual health service; previous results matter).',
          'Treponemal positive + RPR non-reactive: very early infection (repeat in 2–4 weeks), past treated infection, or late latent infection. If there is no documented treatment, treat as late latent.',
          'Isolated reactive EIA with negative TPPA and RPR is likely a false positive (more common in pregnancy, autoimmune disease and older age). Repeat and seek specialist advice.',
          'Serofast state: RPR stays low-positive (≤1:4) despite adequate treatment. Monitor rather than retreat, unless the titre rises four-fold (reinfection or treatment failure).',
        ],
      },
      {
        heading: 'Special situations in syphilis',
        points: [
          'Pregnancy: treat with benzathine benzylpenicillin according to stage, ideally more than 30 days before delivery. Notify the neonatal team, who assess the baby at birth. Penicillin allergy in pregnancy requires desensitisation (there is no adequate alternative).',
          'Neurosyphilis and ocular or otosyphilis can occur at any stage. Symptoms include headache, visual change, uveitis, hearing loss, tinnitus and cranial nerve palsies. Needs same-day referral, lumbar puncture as advised, and IV benzylpenicillin for 10–14 days.',
          'Penicillin allergy (non-pregnant): doxycycline 100 mg bd for 14 days (early) or 28 days (late), with specialist input. Many reported allergies are not true allergies, so consider allergy delabelling.',
          'Partner management: notify and treat partners of early syphilis presumptively (even if their serology is negative) if contact was within 90 days. Online tools (for example "Let Them Know") support anonymous notification.',
          'Screening frequency: MSM and people at higher risk should be tested every 3–6 months along with HIV and other STIs. In outbreak areas, test anyone with a compatible rash or ulcer.',
        ],
      },
      {
        heading: 'Late-diagnosed HIV: ongoing care',
        points: [
          'Opportunistic infections by CD4 count: <200 PJP (dry cough, exertional desaturation); <100 cerebral toxoplasmosis, cryptococcal meningitis; <50 CMV retinitis, MAC. TB can occur at any CD4 count.',
          'Immune reconstitution inflammatory syndrome (IRIS): paradoxical worsening of an infection (TB, cryptococcus, MAC) weeks after starting ART as immunity recovers. Needs specialist review. ART is usually continued.',
          'Modern ART is usually a single tablet daily (for example an integrase inhibitor plus two NRTIs). Check interactions: polyvalent cations (iron, calcium, antacids) reduce integrase inhibitor absorption; some statins and St John\'s wort interact.',
          'Long-term GP care: CVD risk (higher in HIV), cervical and anal cancer screening, bone density, renal function (tenofovir), mental health, smoking cessation, vaccinations (pneumococcal, HPV, hepatitis A/B, zoster). Avoid live vaccines if CD4 <200.',
          'Disclosure and privacy: support the person\'s choices, and explain that U=U removes sexual transmission risk once viral load is undetectable for 6 months. Partner notification can be assisted by sexual health services.',
        ],
      },
      {
        heading: 'IUD insertion: before and after',
        points: [
          'Before: exclude pregnancy (or insert within 5 days of UPSI as emergency contraception for copper). Screen for chlamydia and gonorrhoea if at risk (insertion need not wait for results in asymptomatic people). Discuss pain relief options.',
          'Contraceptive cover: copper works immediately. LNG-IUD is immediately effective if inserted in the first 7 days of the cycle. Otherwise use condoms or abstain for 7 days.',
          'Common after-effects: cramping for days, spotting and irregular bleeding for 3–6 months with LNG-IUD, and heavier periods with copper IUD (NSAIDs or tranexamic acid help).',
          'Check threads at a 6-week review (or teach self-check). Perforation risk (about 1–2 per 1000) is higher when inserted during breastfeeding and within 36 weeks postpartum.',
          'Pregnancy with an IUD in situ: exclude ectopic. For an intrauterine pregnancy, remove the IUD if the threads are visible in the first trimester, which reduces miscarriage and infection risk.',
          'Duration: the 52 mg LNG-IUD is effective for contraception for 8 years (per current TGA approval). Copper IUDs last 5–10 years depending on type.',
        ],
      },
      {
        heading: 'Vulvodynia and sexual difficulties',
        points: [
          'Vulvodynia is vulval pain lasting at least 3 months with no clear identifiable cause. It can be provoked (for example by penetration, tampons or tight clothing) or unprovoked, and localised (vestibulodynia) or generalised.',
          'Examination: normal-looking skin, with pain on light touch (cotton-swab test) at the vestibule. Exclude candida, dermatoses (lichen sclerosus, lichen planus), atrophy, HSV and trichomonas.',
          'Contributors: pelvic floor overactivity, prior recurrent candida or topical irritants, anxiety, sexual trauma, relationship factors. Pain leads to fear, then muscle guarding, then more pain.',
          'Management: remove irritants (soap-free wash, cotton underwear), use lubricant, pelvic floor physiotherapy with down-training and dilators, topical lidocaine 5% before intercourse, low-dose amitriptyline or nortriptyline (10–50 mg), CBT and sex therapy. Couples may benefit from temporarily focusing on non-penetrative intimacy.',
          'Low desire, arousal difficulties and anorgasmia often coexist. Use a biopsychosocial assessment and the PLISSIT model.',
        ],
      },
      {
        heading: 'Sexual health in custodial settings',
        points: [
          'People in prison have much higher rates of hepatitis C, hepatitis B, HIV and STIs than the general population. Contributors include injecting, tattooing with shared equipment, and sex without access to condoms.',
          'Barriers include stigma, lack of privacy and confidentiality, limited access to condoms, lubricant, clean injecting equipment and PrEP, and transfers and releases that interrupt care.',
          'Opt-in or opt-out BBV and STI testing at reception, hepatitis B vaccination, and hepatitis C treatment with DAAs (widely available in Australian prisons) are effective public health interventions.',
          'Transition to the community is high-risk: overdose (reduced tolerance, so supply naloxone), loss of follow-up, and medication gaps. GP handover and linkage improve continuity.',
          'Apply the same confidentiality and consent standards as in the community. People in custody retain their right to consent to testing and treatment.',
        ],
      },
      {
        heading: 'Testing by anatomy, exposure and window period',
        points: [
          'Test according to the sites exposed. Throat and anorectal swabs matter because most pharyngeal and many anorectal gonorrhoea and chlamydia infections are asymptomatic. A urine test alone misses them.',
          'Window periods: chlamydia and gonorrhoea NAAT about 2 weeks; syphilis serology up to 6 weeks (and up to 12 weeks to exclude); HIV 4th-generation antigen/antibody about 6 weeks; hepatitis B surface antigen up to 12 weeks; hepatitis C antibody up to 12 weeks (RNA earlier).',
          'After a specific risk, test now and repeat after the window period. Do not delay testing someone who has symptoms.',
          'Mycoplasma genitalium: test only if there are symptoms (urethritis, cervicitis, PID) or a partner is positive. Resistance-guided therapy (doxycycline, then moxifloxacin or azithromycin by resistance result).',
          'Trichomonas vaginalis is common in some remote communities and older women. NAAT is sensitive. Treat with metronidazole 2 g stat or 400 mg bd for 7 days, and treat partners.',
          'Herpes: PCR swab of an active lesion. First episode: valaciclovir 500 mg bd for 5–10 days. Offer suppressive therapy if recurrences are frequent (≥6 a year) or distressing.',
        ],
      },
      {
        heading: 'HIV prevention: PrEP and PEP',
        points: [
          'PrEP (tenofovir disoproxil + emtricitabine) is PBS-listed and can be prescribed by any GP. Before starting, confirm HIV negative (4th-generation test within 7 days), check hepatitis B status and renal function, and screen for STIs.',
          'Daily dosing suits everyone. On-demand "2-1-1" dosing (2 tablets 2–24 h before sex, then 1 at 24 h and 1 at 48 h) is an option for cisgender men who have sex with men, and is not suitable for people with hepatitis B.',
          'PrEP follow-up is 3-monthly: HIV test, STI screen and creatinine/eGFR (at least 6-monthly), with a prescription for no more than 3 months at a time.',
          'PEP after a high-risk exposure must start within 72 hours, ideally within 24 hours. It is a 28-day course (usually tenofovir/emtricitabine ± dolutegravir), accessed through EDs and sexual health clinics. Follow up with HIV testing at 6 and 12 weeks.',
          'Doxycycline post-exposure prophylaxis (200 mg within 72 hours after condomless sex) reduces syphilis and chlamydia in MSM. Australian consensus supports considering it mainly for MSM with a recent bacterial STI, given resistance concerns.',
          'Vaccinate against hepatitis A, hepatitis B, HPV (up to age 26 funded, with extended eligibility in some groups) and mpox (JYNNEOS, 2 doses) for eligible people.',
        ],
      },
    ],
    keyNumbers: [
      'Early syphilis: benzathine benzylpenicillin 2.4 MU IM × 1',
      'Late or unknown duration: 2.4 MU IM weekly × 3',
      'Adequate response: 4-fold (2-dilution) RPR fall by 12 months',
      'Chlamydia: doxycycline 100 mg bd × 7 days',
      'Gonorrhoea: ceftriaxone 500 mg IM + azithromycin 1 g PO',
      'Late HIV diagnosis: CD4 <350; advanced <200',
      'PJP prophylaxis if CD4 <200',
      'Copper IUD as EC: within 5 days of UPSI',
      'IUD perforation ≈ 1–2/1000 insertions',
      'Vulvodynia: pain ≥3 months with no identifiable cause',
    ],
    workedCase: {
      title: 'Reactive syphilis serology in a routine screen',
      paragraphs: [
        'Rio, 26, a man who has sex with men, attends for a routine 3-monthly STI screen while taking PrEP. He has no symptoms. Syphilis EIA is reactive, TPPA reactive and RPR 1:16. His screen 3 months ago was negative.',
        'Because his previous serology was negative within the last year, this is early latent syphilis (acquired within 2 years). You examine him for a chancre, rash, mucosal lesions and neurological or eye symptoms, and find none. You check whether he has a true penicillin allergy (he does not).',
        'You give benzathine benzylpenicillin 2.4 million units IM as a single dose, warn him about the Jarisch–Herxheimer reaction, and advise no sex for 7 days after treatment and until partners are treated. You notify the public health unit (syphilis is notifiable) and help him notify partners from the last 12 months using an online anonymous tool.',
        'You arrange RPR at 3, 6 and 12 months. At 6 months his RPR is 1:2, a four-fold fall confirming adequate response. You continue 3-monthly testing because of his ongoing risk.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Interpreting syphilis serology',
        lead: 'Choose the SINGLE most likely interpretation for each result.',
        options: [
          'Early infectious syphilis needing treatment',
          'Adequately treated past infection (serological scar)',
          'Likely false-positive screening test',
          'Very early primary infection – repeat serology in 2–4 weeks',
          'Reinfection or treatment failure',
          'Late latent syphilis (untreated, unknown duration)',
          'Neurosyphilis',
          'Congenital syphilis',
        ],
        items: [
          {
            stem: 'EIA reactive, TPPA reactive, RPR non-reactive. Documented treatment for secondary syphilis 6 years ago.',
            answer: 1,
          },
          {
            stem: 'Treated for early syphilis last year with RPR falling to 1:2; now RPR 1:32 after new partners.',
            answer: 4,
          },
          {
            stem: 'EIA weakly reactive, TPPA non-reactive, RPR non-reactive in a pregnant woman with lupus.',
            answer: 2,
          },
          {
            stem: 'A 70-year-old with no history of treatment: EIA and TPPA reactive, RPR 1:2, no symptoms, no previous tests.',
            answer: 5,
          },
        ],
      },
    ],
    kfp: [
      {
        title: 'Rio has reactive syphilis serology',
        scenario:
          'Rio, 24, presents 5 days after a routine STI screen showed syphilis EIA reactive, TPPA reactive and RPR 1:64. He has had a non-itchy rash on his trunk for 2 weeks and, since yesterday, blurred vision in his left eye. He has had several male partners in the last 6 months.',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the most important immediate management step?',
            options: [
              'Benzathine benzylpenicillin 2.4 MU IM single dose and review in a week',
              'Same-day referral for ophthalmology and infectious diseases/sexual health assessment for ocular syphilis',
              'Doxycycline 100 mg bd for 14 days',
              'Repeat serology in 2 weeks',
              'Topical steroid eye drops',
            ],
            answer: 1,
            explanation: 'Visual symptoms with syphilis suggest ocular syphilis. Treat it like neurosyphilis: urgent assessment and IV benzylpenicillin.',
          },
          {
            kind: 'multi',
            stem: 'Which THREE additional tests should be ordered today?',
            options: ['HIV antigen/antibody test', 'Chlamydia/gonorrhoea NAAT from throat, anorectum and urine', 'Hepatitis B and C serology', 'Thyroid function tests', 'Serum ferritin', 'Blood cultures'],
            answers: [0, 1, 2],
            explanation: 'Co-infections are common. Test for HIV, other STIs and BBVs.',
          },
          {
            kind: 'sba',
            context: 'Rio is treated in hospital with IV benzylpenicillin for 14 days. His vision recovers. He returns to you for follow-up.',
            stem: 'Which schedule of RPR monitoring is most appropriate?',
            options: ['No further testing needed', 'RPR at 3, 6 and 12 months (and 24 months if slow response)', 'Weekly RPR for 3 months', 'TPPA every 3 months', 'RPR only if symptoms recur'],
            answer: 1,
            explanation: 'Monitor RPR to confirm a four-fold fall. Treponemal tests stay positive and are not used for monitoring.',
          },
          {
            kind: 'multi',
            stem: 'Which TWO public health actions are required?',
            options: [
              'Notify the case to the state/territory public health unit',
              'Partner notification and presumptive treatment of recent partners',
              'Report to police',
              'Inform his employer',
              'Mandatory quarantine for 30 days',
            ],
            answers: [0, 1],
            explanation: 'Syphilis is notifiable. Partner notification interrupts transmission.',
          },
          {
            kind: 'sba',
            context: 'His HIV test is negative.',
            stem: 'What prevention strategy should you offer?',
            options: ['Doxycycline PEP alone', 'HIV PrEP with 3-monthly STI and BBV testing', 'No intervention needed', 'Annual HIV test only', 'Prophylactic penicillin monthly'],
            answer: 1,
            explanation: 'Syphilis diagnosis in an MSM indicates high HIV risk. PrEP plus regular testing is recommended.',
          },
        ],
      },
    ],
  },
  '635': {
    sections: [
      {
        heading: 'Acute pancreatitis in general practice',
        points: [
          'Presentation: sudden severe epigastric pain radiating to the back, nausea and vomiting, often relieved by leaning forward. Suspected acute pancreatitis needs same-day ED assessment. It can deteriorate rapidly (SIRS, organ failure).',
          'Severity (revised Atlanta): mild (no organ failure or complications), moderately severe (transient organ failure <48 h or local complications), severe (persistent organ failure >48 h). Pancreatic necrosis and infected collections drive mortality.',
          'After a gallstone pancreatitis, cholecystectomy during the same admission (or within 2–4 weeks for mild disease) prevents recurrence. Check that it has been arranged.',
          'After alcohol-related pancreatitis, the most important intervention is abstinence. Offer relapse-prevention medicines (acamprosate, naltrexone if the liver allows) and counselling.',
          'Follow-up after any episode: fasting lipids, calcium, glucose/HbA1c (new diabetes may appear), and review of possible drug causes. Imaging at 6–8 weeks if a collection or suspected underlying lesion was noted.',
        ],
      },
      {
        heading: 'Chronic pancreatitis: diagnosis and pain',
        points: [
          'Causes are classified by TIGAR-O: Toxic-metabolic (alcohol, smoking, hypercalcaemia, hypertriglyceridaemia, CKD), Idiopathic, Genetic (PRSS1, SPINK1, CFTR, CTRC), Autoimmune (IgG4), Recurrent acute pancreatitis, Obstructive (strictures, tumours, pancreas divisum).',
          'Imaging: CT (calcifications, duct dilatation, atrophy) and MRCP, with secretin-enhanced MRCP in specialist centres. EUS is useful in early disease. Pancreatic calcification on plain X-ray is a late sign.',
          'Pain is the dominant symptom for most patients. Stop smoking and alcohol. Paracetamol and NSAIDs first. Add neuropathic agents (pregabalin has trial evidence), and use opioids cautiously (tramadol or low doses). Refer for endoscopic or surgical options when a dilated duct or stones are present.',
          'Watch for complications: pseudocysts, bile duct or duodenal stricture, splenic vein thrombosis (gastric varices), pancreatic cancer (lifetime risk increased up to about 10–20-fold in hereditary pancreatitis).',
          'Opioid dependence, depression and malnutrition are common. A multidisciplinary approach (gastroenterology, pain service, dietitian, psychology) works best.',
        ],
      },
      {
        heading: 'PERT in practice',
        points: [
          'Common products are Creon 10,000, 25,000 and 35,000 (lipase units per capsule), with Creon Micro for children.',
          'Typical adult start: 50,000 lipase units with each main meal and 25,000 with snacks. Titrate up to 75,000–100,000 per meal if steatorrhoea persists. There is no fixed maximum in adults, but doses above 10,000 units/kg/day increase fibrosing colonopathy concerns in children.',
          'Timing matters: take with the first mouthful of food, or split between the start and middle of a longer meal. Swallow whole, or open capsules onto acidic soft food (apple puree) without crushing the microspheres.',
          'Poor response: check timing and adherence, then add a PPI (enzymes are inactivated by acid), and consider SIBO, bile acid malabsorption or coeliac disease.',
          'Monitor weight, stool pattern, fat-soluble vitamins (A, D, E, K), zinc, magnesium and bone density. Treat vitamin D deficiency. Dietitian input is essential. Low-fat diets are not recommended.',
        ],
      },
      {
        heading: 'Type 3c (pancreatogenic) diabetes',
        points: [
          'Consider it in anyone with pancreatitis, pancreatic surgery, cystic fibrosis, haemochromatosis or pancreatic cancer who develops diabetes. It is under-recognised and often labelled type 2.',
          'Features include loss of insulin, glucagon and pancreatic polypeptide secretion, brittle glycaemic control, hypoglycaemia risk (impaired counter-regulation), and coexisting PEI, which affects absorption and glucose variability.',
          'Treatment: metformin for mild hyperglycaemia if tolerated (it may lower cancer risk). Many need insulin, often basal-bolus with conservative targets and CGM. Use caution with GLP-1 RAs and DPP-4 inhibitors given the pancreatitis history (usually avoided).',
          'Treat PEI concurrently: proper PERT improves nutrient absorption and stabilises glucose.',
          'Hypoglycaemia education, driving advice, glucagon availability, and a sick-day plan are essential.',
        ],
      },
      {
        heading: 'Pancreatic cyst surveillance essentials',
        points: [
          'Serous cystadenoma (microcystic, "honeycomb", central scar) is benign and usually needs no surveillance if asymptomatic.',
          'Branch-duct IPMN communicates with the main duct and is the commonest incidental mucinous cyst. Main-duct IPMN (MPD ≥5 mm without other cause) has a high malignancy risk, so refer to a surgeon.',
          'Mucinous cystic neoplasm occurs almost exclusively in women aged 40–60, in the body or tail with ovarian-type stroma. Resection is often recommended.',
          'Surveillance intervals for low-risk branch-duct IPMN depend on size and guideline (for example MRI at 1 year, then every 1–2 years, lengthening if stable). Stopping surveillance is reasonable if the person is no longer fit for surgery.',
          'Explain to anxious patients that most small cysts never become cancer, and that surveillance exists to catch the rare ones that change.',
        ],
      },
      {
        heading: 'Genetic assessment and cascade testing',
        points: [
          'Refer to a familial cancer centre for three reasons. First, a personal history of pancreatic ductal adenocarcinoma: germline testing is now offered to all PDAC patients in many centres. Second, a strong family history of pancreatic cancer. Third, a known pathogenic variant in the family.',
          'Relevant genes: BRCA2 (commonest), BRCA1, PALB2, ATM, the Lynch genes (MLH1, MSH2, MSH6, PMS2), CDKN2A (with melanoma, FAMMM), STK11 (Peutz–Jeghers), and PRSS1 (hereditary pancreatitis).',
          'Cascade testing: once a variant is found, first-degree relatives are offered predictive testing. Carriers enter surveillance programs (MRI or EUS) and any other cancer screening relevant to the gene (breast, ovarian, bowel, skin).',
          'Genetic results have life insurance implications (currently limited by an industry moratorium, with legislation announced). Discuss this before testing.',
          'Modifiable risk in high-risk families: stop smoking, maintain a healthy weight, limit alcohol, and manage diabetes.',
        ],
      },
      {
        heading: 'Less common causes to remember',
        points: [
          'Autoimmune pancreatitis type 1 (IgG4-related disease): older men, painless jaundice, "sausage-shaped" pancreas on CT, raised serum IgG4, and other organ involvement (sclerosing cholangitis, salivary glands, retroperitoneal fibrosis). Steroid-responsive. It can mimic pancreatic cancer.',
          'Drug-induced pancreatitis: azathioprine, mercaptopurine, valproate, didanosine, oestrogens, thiazides, furosemide, sulfasalazine and mesalazine, tetracyclines, GLP-1 RAs (association uncertain), and corticosteroids. Stop the suspected drug.',
          'Post-ERCP pancreatitis occurs after about 3–5% of procedures. Rectal indomethacin reduces risk in hospital protocols.',
          'Hypercalcaemia (primary hyperparathyroidism) and hypertriglyceridaemia (familial chylomicronaemia, poorly controlled diabetes, alcohol, oestrogen, pregnancy) are reversible metabolic causes.',
          'Genetic: consider testing (PRSS1, SPINK1, CFTR, CTRC) for recurrent acute or chronic pancreatitis under 35, or with a family history. Hereditary pancreatitis carries a high lifetime cancer risk.',
          'Anatomical: pancreas divisum and sphincter of Oddi dysfunction are considered in specialist settings after common causes have been excluded.',
        ],
      },
      {
        heading: 'Nutrition, bone health and follow-up',
        points: [
          'Malnutrition is common in chronic pancreatitis. Screen weight, BMI and muscle mass (grip strength) at every review, and involve a dietitian early.',
          'Encourage small, frequent, normal-fat meals with PERT, and complete abstinence from alcohol. Medium-chain triglyceride supplements can help when steatorrhoea persists.',
          'Osteoporosis and osteopenia affect up to two-thirds of patients. Arrange DXA at diagnosis and then every 1–2 years, correct vitamin D, and ensure adequate calcium intake.',
          'Check fat-soluble vitamins (A, D, E, INR for K), B12 (reduced absorption in PEI), zinc and magnesium yearly or if symptomatic (night blindness, bruising, neuropathy).',
          'Annual review checklist: pain and opioid use, alcohol and smoking, weight and stool pattern, HbA1c (type 3c diabetes), vitamins and bone, mood, and new red flags that could indicate cancer.',
          'Offer vaccination (influenza, pneumococcal) and assess ability to work or study. Chronic pain and diarrhoea have major social consequences.',
        ],
      },
    ],
    keyNumbers: [
      'Acute pancreatitis: lipase ≥3 × ULN (2 of 3 criteria)',
      'Hypertriglyceridaemia cause: TG usually >11 mmol/L',
      'Faecal elastase: <200 µg/g PEI, <100 severe',
      'PERT start: ~50,000 lipase units/meal, 25,000/snack',
      'Worrisome cyst: ≥3 cm, MPD 5–9 mm, growth ≥5 mm/2 yr',
      'High-risk stigmata: MPD ≥10 mm, solid enhancing component ≥5 mm',
      'Familial PDAC surveillance usually from age 50 (or 10 years before youngest case)',
      'New diabetes >50 years + weight loss → consider PDAC',
      'Severe acute pancreatitis: organ failure >48 h',
      'CA19-9: not a screening test',
    ],
    workedCase: {
      title: 'New hyperglycaemia after years of pancreatitis',
      paragraphs: [
        'Francis, 61, has had chronic alcohol-related pancreatitis for 8 years. He stopped drinking 2 years ago. His HbA1c has risen to 68 mmol/mol, and he reports loose, pale stools and a 5 kg weight loss. He is lean (BMI 21).',
        'You suspect type 3c diabetes with coexisting PEI. Faecal elastase is 35 µg/g. Vitamin D is 32 nmol/L. Because new diabetes with weight loss can also signal pancreatic cancer, you arrange a pancreatic protocol CT. It shows calcification and duct dilatation but no mass.',
        'You start PERT at 50,000 units with meals and 25,000 with snacks, add a PPI after 2 weeks of partial response, and replace vitamin D. For glucose, you start low-dose metformin and then, as HbA1c remains high, basal insulin with conservative targets and CGM because of his hypoglycaemia risk. You give hypoglycaemia education and a glucagon kit.',
        'At 3 months his weight has increased by 3 kg, his stools have normalised and glucose is steadier. You arrange a DXA scan and dietitian review, and you plan annual review of fat-soluble vitamins.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Pancreatic cystic lesions',
        lead: 'Choose the SINGLE most appropriate next step for each scenario.',
        options: [
          'Reassure – no surveillance needed',
          'MRI/MRCP surveillance',
          'Endoscopic ultrasound ± FNA',
          'Urgent pancreatic surgical referral',
          'Repeat CT in 1 week',
          'CA19-9 alone',
          'Start PERT',
          'Stop surveillance given comorbidity',
        ],
        items: [
          {
            stem: 'A 58-year-old with a 14 mm branch-duct IPMN, no worrisome features.',
            answer: 1,
          },
          {
            stem: 'A 66-year-old with a 32 mm cyst and a 4 mm enhancing mural nodule.',
            answer: 2,
          },
          {
            stem: 'A 70-year-old with a pancreatic head cyst and new obstructive jaundice.',
            answer: 3,
          },
          {
            stem: 'A 91-year-old frail nursing home resident with a stable 10 mm IPMN who would not be fit for surgery.',
            answer: 7,
          },
        ],
      },
    ],
    kfp: [
      {
        title: 'Katrina\'s first episode of pancreatitis',
        scenario:
          'Katrina, 44, was discharged 1 week ago after her first episode of mild acute pancreatitis. Ultrasound showed no gallstones. She drinks 2 standard drinks a week. Her BMI is 33, and she takes hydrochlorothiazide and an oestrogen-containing contraceptive pill. She attends for follow-up.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE investigations are most important to identify the cause?',
            options: [
              'Fasting triglycerides',
              'Serum calcium',
              'Repeat imaging (MRCP or EUS) to look for microlithiasis or structural lesion',
              'Serum amylase',
              'Thyroid function',
              'Anti-TTG antibodies',
              'Stool culture',
            ],
            answers: [0, 1, 2],
            explanation: 'Hypertriglyceridaemia, hypercalcaemia and occult biliary or structural causes are key. Amylase does not help find the cause.',
          },
          {
            kind: 'sba',
            context: 'Her fasting triglycerides are 14.2 mmol/L.',
            stem: 'Which of her medicines is most likely contributing?',
            options: ['Paracetamol', 'The oral oestrogen-containing contraceptive', 'Vitamin D', 'Loratadine', 'Omeprazole'],
            answer: 1,
            explanation: 'Oral oestrogen raises triglycerides. Thiazides also contribute. Switch to non-oestrogen contraception.',
          },
          {
            kind: 'multi',
            stem: 'Which THREE interventions are most appropriate to prevent recurrence?',
            options: [
              'Fibrate therapy (e.g. fenofibrate)',
              'Stop oestrogen; switch to non-oestrogen contraception',
              'Very low-fat diet, alcohol avoidance and weight loss',
              'Long-term antibiotics',
              'Pancreatic enzymes with meals',
              'Increase hydrochlorothiazide',
            ],
            answers: [0, 1, 2],
            explanation: 'Lowering triglycerides below 5.6 mmol/L prevents recurrence. The fat restriction advice here is for hypertriglyceridaemia, not PEI.',
          },
          {
            kind: 'sba',
            context: 'Two years later Katrina, now 46, has lost 6 kg unintentionally and has a new diagnosis of diabetes (HbA1c 62).',
            stem: 'What is the most important investigation?',
            options: ['Repeat triglycerides only', 'Pancreatic protocol CT', 'OGTT', 'C-peptide', 'Faecal fat collection'],
            answer: 1,
            explanation: 'New diabetes with weight loss after pancreatitis needs imaging to exclude pancreatic cancer.',
          },
          {
            kind: 'emq',
            theme: 'Glucose-lowering choice',
            lead: 'CT shows chronic pancreatitis without a mass. Choose the SINGLE most appropriate option.',
            options: ['Metformin', 'GLP-1 receptor agonist', 'Acarbose', 'Sulfonylurea at high dose', 'Insulin with conservative targets and CGM', 'SGLT2 inhibitor', 'No treatment'],
            items: [
              { stem: 'First-line agent for mild hyperglycaemia in type 3c diabetes', answer: 0 },
              { stem: 'Agent class generally avoided because of her pancreatitis history', answer: 1 },
              { stem: 'Best option if HbA1c remains high and she has recurrent hypoglycaemia on other agents', answer: 4 },
            ],
          },
        ],
      },
    ],
  },
}

export default extra
