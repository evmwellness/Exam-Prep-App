import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  '627': {
    sections: [
      {
        heading: 'What integrative medicine is (and is not)',
        points: [
          'Integrative medicine combines conventional medicine with evidence-informed complementary therapies and lifestyle approaches, focusing on the whole person: body, mind, social and spiritual health.',
          'It is not "alternative medicine" (used instead of conventional care). The RACGP position is that complementary therapies should be evidence-based, safe and within the practitioner\'s competence.',
          'Many patients use complementary medicines for chronic conditions (pain, anxiety, fatigue, gut symptoms, menopause) and value a doctor who is open to discussing them.',
          'A good integrative approach improves the therapeutic relationship, adherence and safety, because patients are more likely to disclose what they take.',
          'Key questions for any therapy: is there evidence it works? Is it safe? Does it interact with other treatment? What does it cost? Does it delay effective care?',
        ],
      },
      {
        heading: 'Taking a comprehensive integrative history',
        points: [
          'Ask about vitamins, minerals, herbs, traditional medicines (Chinese, Ayurvedic, Aboriginal bush medicines), homeopathy, supplements, sports and weight-loss products, and "natural" products bought online or overseas.',
          'Ask about other practitioners: naturopaths, chiropractors, osteopaths, acupuncturists, TCM practitioners. Some prescribe high-dose products or order unvalidated tests.',
          'Explore lifestyle and wellbeing: diet, sleep, activity, alcohol, stress, relationships, meaning and purpose, spirituality.',
          'Cultural context: traditional practices may be part of identity. Respect them, and assess safety together (for example heavy metal contamination in some imported Ayurvedic products).',
          'Record everything in the medicines list and review it at every medication reconciliation, before surgery and in pregnancy.',
        ],
      },
      {
        heading: 'Safety: interactions and adverse effects',
        points: [
          'St John\'s wort (CYP3A4 and P-gp inducer): reduces levels of hormonal contraceptives, warfarin, DOACs, ciclosporin and tacrolimus, HIV antiretrovirals, some chemotherapy and digoxin. Serotonin syndrome risk with SSRIs, SNRIs and tramadol.',
          'Bleeding risk with anticoagulants or antiplatelets: ginkgo, high-dose fish oil, garlic, ginger, turmeric (curcumin), dong quai, vitamin E. Stop 1–2 weeks before surgery.',
          'Hepatotoxicity: kava, black cohosh, green tea extract, some TCM products, bodybuilding supplements. Check LFTs when unexplained abnormalities appear.',
          'Liquorice: hypertension and hypokalaemia. Ginseng: may affect glucose and warfarin. Grapefruit (food) inhibits CYP3A4 (felodipine, some statins).',
          'Report adverse events to the TGA. Check the TGA website for recalled and adulterated products (for example weight-loss products containing sibutramine, and sexual enhancement products containing sildenafil).',
          'Pregnancy and breastfeeding: many herbs lack safety data, so advise caution.',
        ],
      },
      {
        heading: 'Evidence for common conditions',
        points: [
          'Depression: exercise (strong evidence), Mediterranean-style diet (SMILES trial), omega-3 EPA-predominant (modest adjunctive), St John\'s wort (effective for mild to moderate depression but interaction-heavy), SAMe (limited).',
          'Anxiety and insomnia: CBT and mindfulness (strong), exercise, lavender oil (Silexan, some evidence for anxiety). Valerian and chamomile have weak evidence.',
          'Chronic pain: exercise, CBT or ACT, mindfulness, yoga and tai chi, acupuncture (modest benefit for some conditions, such as knee OA and low back pain), massage (short-term). Glucosamine has minimal benefit.',
          'IBS: low FODMAP diet, peppermint oil, soluble fibre, gut-directed hypnotherapy, some probiotics (strain-specific, modest).',
          'Osteoarthritis: exercise and weight loss. Turmeric has some evidence for pain. Fish oil evidence is limited.',
          'Menopause: CBT and hypnosis help flushes. Evidence for black cohosh, red clover and soy is inconsistent.',
        ],
      },
      {
        heading: 'Nutrition interventions and culture',
        points: [
          'Nutritional advice must fit culture, family eating practices, religious observance (for example Ramadan fasting, vegetarian diets) and budget.',
          'Food as medicine: dietary patterns (Mediterranean, DASH) have stronger evidence than single supplements.',
          'Supplements with clear indications: iron (deficiency), B12 (deficiency, vegans, metformin, PPIs), vitamin D (deficiency, low sun exposure), folic acid and iodine (pregnancy), calcium (low intake).',
          'Unproven tests: food IgG panels, hair mineral analysis, live blood analysis, unvalidated microbiome or "adrenal fatigue" tests. Explain their lack of validity kindly.',
          'Weight loss supplements (garcinia, raspberry ketones, green tea extract) lack evidence and some are harmful. Dietitian-led approaches and approved pharmacotherapy are better options.',
        ],
      },
      {
        heading: 'Scope of practice, ethics and regulation',
        points: [
          'The Medical Board of Australia code of conduct applies: practise within your competence, provide evidence-based information, obtain informed consent, and avoid exploiting patients.',
          'Selling products from your practice creates a conflict of interest. Disclose financial interests, and avoid it where possible.',
          'Regulation: most complementary medicines are AUST L (listed, low risk, not evaluated for efficacy). AUST R (registered) products are evaluated for efficacy. Practitioners such as naturopaths are not nationally registered. Chiropractors, osteopaths and Chinese medicine practitioners are registered with AHPRA.',
          'When a patient declines effective treatment (such as cancer therapy) in favour of alternatives: stay engaged, respect autonomy, explore fears, keep the door open, and document clearly.',
          'Know when to refer: complex nutritional needs (dietitian), acupuncture (qualified practitioner), mind–body therapies (psychologist or mindfulness programs).',
        ],
      },
      {
        heading: 'Coordinating an integrative management plan',
        points: [
          'Use a biopsychosocial–spiritual formulation to identify all contributing factors and the person\'s goals.',
          'Prioritise interventions with the best evidence and safety, and incorporate the patient\'s preferred complementary options where safe (a "yes, and" approach).',
          'Community resources: exercise groups, mindfulness programs, community gardens, cultural groups, support groups. Make ethical use of free or low-cost options before expensive products.',
          'Set measurable goals and review. Stop therapies that don\'t help after an agreed trial period (for example 8–12 weeks).',
          'Communicate with other practitioners involved, with the patient\'s consent, to avoid duplication and interactions.',
        ],
      },
    ],
    keyNumbers: [
      'About 2 in 3 Australians use complementary medicines',
      'AUST L = listed (safety/quality); AUST R = registered (efficacy)',
      'Stop bleeding-risk herbs 1–2 weeks before surgery',
      'Low FODMAP: restrict → reintroduce → personalise (with dietitian)',
      'Trial period for a new therapy: ~8–12 weeks, then review',
      'St John\'s wort: never combine with SSRIs/SNRIs',
    ],
    workedCase: {
      title: 'Graham wants effective pain management',
      paragraphs: [
        'Graham, 62, has chronic low back pain and knee OA. He takes oxycodone 10 mg bd (started after surgery 2 years ago), plus turmeric, glucosamine, fish oil 4 g/day and ginkgo "for memory" from a naturopath. He recently started warfarin for AF. His INR has been unstable and he bruises easily.',
        'You take a full integrative history and value his interest in natural approaches. You explain that ginkgo, high-dose fish oil and turmeric may increase bleeding risk on warfarin. He agrees to stop ginkgo and turmeric and to reduce fish oil to 1 g. Glucosamine is safe but likely ineffective. He chooses to continue it for 3 months, then review.',
        'For pain you propose an evidence-based plan: an exercise physiologist program (strengthening, walking), weight loss support, a mindfulness-based pain program, topical NSAID for his knee (avoiding oral NSAIDs with warfarin), and a slow oxycodone taper with a pain management plan. He is keen to try acupuncture for his back, and you support a trial with a registered practitioner.',
        'At 3 months his INR is stable, his function has improved, and he has reduced oxycodone by half. You communicate the plan to his naturopath with his consent.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Complementary medicine interactions and harms',
        lead: 'Choose the SINGLE product most likely responsible for each problem.',
        options: [
          'St John\'s wort',
          'Ginkgo biloba',
          'Kava',
          'Liquorice root',
          'Glucosamine',
          'Peppermint oil',
          'Black cohosh',
          'Grapefruit juice',
          'Vitamin D',
        ],
        items: [
          { stem: 'A woman on the combined pill develops breakthrough bleeding and becomes pregnant.', answer: 0 },
          { stem: 'A man with new hypertension and hypokalaemia takes a herbal "adrenal tonic".', answer: 3 },
          { stem: 'A young woman using a herbal product for anxiety presents with jaundice.', answer: 2 },
          { stem: 'A man on felodipine develops headache, flushing and hypotension after starting a morning juice habit.', answer: 7 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Naomi feels bloated and uncomfortable',
        scenario:
          'Naomi, 32, has had 18 months of bloating, abdominal discomfort and alternating bowel habit. A naturopath ordered a food IgG panel showing "intolerance" to 22 foods, and she now eats a very restricted diet. She has lost 4 kg and feels anxious about eating.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE investigations are most appropriate?',
            options: [
              'Coeliac serology (before gluten is removed or after reintroduction)',
              'FBC, iron studies and CRP',
              'Faecal calprotectin',
              'Repeat food IgG panel',
              'Hair mineral analysis',
              'Colonoscopy for everyone with IBS symptoms',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'How should you explain the food IgG test result?',
            options: [
              'It accurately identifies food intolerances',
              'IgG to foods reflects exposure, not intolerance; it is not a valid diagnostic test',
              'It diagnoses food allergy',
              'It should be repeated yearly',
              'It confirms coeliac disease',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            context: 'Investigations are normal. You diagnose IBS.',
            stem: 'Which THREE evidence-based interventions would you recommend?',
            options: [
              'Dietitian-supervised low FODMAP diet with reintroduction',
              'Peppermint oil capsules',
              'Gut-directed hypnotherapy or CBT',
              'Continue avoiding all 22 foods',
              'Colonic irrigation',
              'Long-term antibiotics',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'Given her weight loss and anxiety around eating, what else is important?',
            options: [
              'Screen for disordered eating and ensure nutritional adequacy',
              'Recommend a stricter elimination diet',
              'Start a probiotic only',
              'No further action',
              'Refer for colonoscopy',
            ],
            answer: 0,
          },
          {
            kind: 'emq',
            theme: 'Integrative care planning',
            lead: 'Choose the SINGLE best response to each of Naomi\'s requests.',
            options: [
              'Support – evidence reasonable and safe',
              'Support a time-limited trial with review',
              'Advise against – no evidence and potential harm',
              'Refer to dietitian',
              'Refer to gastroenterologist urgently',
            ],
            items: [
              { stem: 'She wants to start yoga and mindfulness for stress', answer: 0 },
              { stem: 'She wants to try a specific probiotic', answer: 1 },
              { stem: 'She has booked colonic irrigation "to detox"', answer: 2 },
            ],
          },
        ],
      },
    ],
  },
  '626': {
    sections: [
      {
        heading: 'Comprehensive pain assessment',
        points: [
          'Assess each pain separately: site, onset, character, radiation, timing, severity (0–10), exacerbating and relieving factors, and response to medicines. Use body maps and pain diaries.',
          'Mechanism: somatic (well-localised, aching, as in bone metastases), visceral (poorly localised, cramping or pressure, as in liver capsule or bowel), neuropathic (burning, shooting, allodynia, numbness, as in plexus invasion or chemotherapy neuropathy).',
          'Incident pain (on movement or dressing changes) needs pre-emptive short-acting doses 20–30 minutes before the activity.',
          '"Total pain" (Cicely Saunders) includes physical, psychological, social and spiritual suffering. Fear, depression and isolation amplify pain.',
          'Reassess after each change. Examine for new causes (fracture, cord compression, infection, obstruction) rather than simply escalating opioids.',
          'In people with cognitive impairment, use observational tools (for example PAINAD, Abbey Pain Scale).',
        ],
      },
      {
        heading: 'Opioid prescribing principles',
        points: [
          'Start with regular dosing once pain is persistent. Titrate using immediate-release doses, then convert the total 24-hour requirement to a sustained-release formulation plus PRN breakthrough.',
          'Equianalgesia (approximate): oral morphine 10 mg ≈ oral oxycodone 5–7.5 mg ≈ oral hydromorphone 2 mg ≈ SC morphine 3–5 mg. Transdermal fentanyl 12 microgram/h ≈ oral morphine 30–45 mg/day.',
          'Fentanyl and buprenorphine patches suit stable pain and people unable to swallow. They are not for rapid titration or opioid-naïve patients (fentanyl). They take 12–24 hours to reach effect.',
          'Renal impairment: avoid morphine and codeine. Prefer hydromorphone (reduced dose), fentanyl or buprenorphine. Hepatic impairment: reduce doses and extend intervals.',
          'Side effects: constipation (almost universal, so always prescribe a laxative), nausea (usually settles within a week), sedation, confusion, myoclonus, pruritus. Respiratory depression is rare with careful titration.',
          'Address patient and family fears: appropriate opioid use in palliative care does not hasten death and addiction is uncommon. Driving is usually possible on stable doses once effects are known (check local rules).',
        ],
      },
      {
        heading: 'Adjuvant analgesics and interventions',
        points: [
          'Bone pain: NSAIDs (if renal and GI risk allow), dexamethasone, single-fraction palliative radiotherapy (highly effective), bisphosphonates or denosumab for metastatic bone disease.',
          'Neuropathic pain: gabapentin or pregabalin (dose-adjust for renal function), amitriptyline or nortriptyline, duloxetine. Methadone or ketamine in specialist settings.',
          'Liver capsule pain: dexamethasone. Raised intracranial pressure headache: dexamethasone ± radiotherapy.',
          'Visceral colic from bowel obstruction: hyoscine butylbromide.',
          'Interventional options (via palliative or pain specialists): coeliac plexus block for pancreatic cancer, intrathecal analgesia, vertebroplasty, nerve blocks.',
          'Non-drug options: heat, positioning, physiotherapy, massage, music, relaxation, psychological support.',
        ],
      },
      {
        heading: 'Nausea and vomiting: assessment by cause',
        points: [
          'History: timing, relation to eating, medicines and bowel habit, vomit character (undigested food, bile, faeculent), headache, vertigo, anxiety.',
          'Chemical (opioids, hypercalcaemia, uraemia, infection, chemotherapy): haloperidol 0.5–1.5 mg. Check calcium and renal function.',
          'Gastric stasis or squashed stomach (hepatomegaly, ascites): metoclopramide 10 mg tds before meals, small frequent meals. Avoid metoclopramide in complete obstruction.',
          'Bowel obstruction: stop prokinetics if colicky. Use hyoscine butylbromide, octreotide, dexamethasone and haloperidol. Consider a venting gastrostomy.',
          'Raised ICP: dexamethasone. Vestibular or motion: cyclizine or promethazine. Anxiety or anticipatory: lorazepam or midazolam. Refractory: levomepromazine (broad spectrum).',
          'Constipation is a common and often overlooked cause of nausea. Check it first.',
        ],
      },
      {
        heading: 'Constipation at the end of life',
        points: [
          'Causes: opioids and other drugs (anticholinergics, 5-HT3 antagonists, iron, calcium channel blockers), immobility, low intake, dehydration, hypercalcaemia, hypokalaemia, spinal cord compression, intra-abdominal disease.',
          'Assess: bowel history, abdominal exam, and a rectal exam if impaction is suspected. Abdominal X-ray only when obstruction is being considered.',
          'Prevention: a regular stimulant plus softener (senna + docusate) or macrogol when opioids are started. Titrate to a soft stool every 1–3 days.',
          'Rectal measures for impaction: glycerol or bisacodyl suppositories, microenemas, phosphate or arachis oil enemas.',
          'Opioid-induced constipation refractory to laxatives: methylnaltrexone SC or naloxegol oral (not in suspected obstruction). Oxycodone–naloxone combination tablets are an alternative.',
          'Near death, constipation matters only if it causes distress. Avoid burdensome interventions.',
        ],
      },
      {
        heading: 'Talking about end-of-life choices',
        points: [
          'Advance care planning: the patient\'s values, goals and preferences, a substitute decision-maker (appointed by legal instrument), and an advance care directive (forms and legal status vary by state).',
          'Goals of care discussions address what matters most: time, comfort, independence, place of care, and which treatments would or would not be wanted (CPR, ICU, antibiotics, artificial nutrition, transfer to hospital).',
          'Use serious illness conversation frameworks: "What is your understanding of your illness?" "If your health worsens, what are your most important goals?" "What are your biggest fears?"',
          'Voluntary assisted dying: lawful in all states and the ACT, with strict eligibility (decision-making capacity, advanced and progressive condition expected to cause death within 6–12 months, depending on jurisdiction). Assessing practitioners need specific training. Conscientious objection is permitted, with state-specific information or referral obligations.',
          'Cultural and spiritual needs: ask about rituals, family roles and preferences for information sharing (some cultures prefer family to receive news first). Always confirm the patient\'s own wishes.',
        ],
      },
      {
        heading: 'Care in the home and preventing admissions',
        points: [
          'Identify people likely to benefit: frequent admissions, declining function, multimorbidity, carer strain. Use the SPICT and surprise question.',
          'Home supports: community palliative care nursing, equipment (bed, commode, pressure care), personal care through home care packages, carer respite, and after-hours phone support.',
          'Anticipatory prescribing: SC PRN medicines for pain, nausea, agitation and secretions, with a written chart and SC cannula in place.',
          'A crisis plan (who to call, what to do) and an ambulance palliative care plan reduce unwanted ED transfers.',
          'After each hospitalisation: reconcile medicines, update the ACP, and hold a family meeting if goals have changed. Deprescribe medicines with no remaining benefit (statins, osteoporosis drugs, tight diabetes control).',
        ],
      },
    ],
    keyNumbers: [
      'Opioid-naïve: morphine IR 2.5–5 mg PO q4h PRN',
      'Breakthrough = 1/6–1/10 of 24-hour dose',
      'Oral morphine 10 mg ≈ oxycodone 5–7.5 mg ≈ hydromorphone 2 mg',
      'Fentanyl 12 µg/h ≈ oral morphine 30–45 mg/day',
      'Haloperidol 0.5–1.5 mg for chemical nausea',
      'Metoclopramide 10 mg tds for gastric stasis',
      'Dexamethasone 16 mg for suspected spinal cord compression',
      'VAD eligibility: death expected within 6–12 months (by jurisdiction)',
    ],
    workedCase: {
      title: 'Robert is nauseated',
      paragraphs: [
        'Robert, 68, has metastatic colorectal cancer with liver metastases and a large liver. He takes oxycodone SR 20 mg bd. He has had constant nausea for a week, vomits small amounts after meals, and feels full after a few mouthfuls. His bowels opened 5 days ago.',
        'You consider several causes: gastric stasis and "squashed stomach" from hepatomegaly, opioid-related chemical nausea, constipation and hypercalcaemia. Examination shows a firm liver 8 cm below the costal margin, a mildly distended abdomen with active bowel sounds, and a loaded rectum. Corrected calcium is 2.48 mmol/L and creatinine is stable.',
        'You treat the constipation first with a phosphate enema, then regular macrogol and senna. For nausea you start metoclopramide 10 mg before meals, since there is no bowel obstruction, and advise small frequent meals. You add dexamethasone 4 mg mane for liver capsule stretch and appetite, with glucose monitoring.',
        'Within 3 days the nausea has settled and he is eating small meals. You discuss his goals: he wants to stay at home and see his granddaughter\'s birthday next month. You update his advance care plan and refer to community palliative care.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Antiemetic choice in palliative care',
        lead: 'Choose the SINGLE most appropriate antiemetic for each patient.',
        options: [
          'Haloperidol',
          'Metoclopramide',
          'Cyclizine',
          'Dexamethasone',
          'Ondansetron',
          'Lorazepam',
          'Hyoscine butylbromide',
          'Levomepromazine',
        ],
        items: [
          { stem: 'A man with brain metastases, morning headaches and vomiting.', answer: 3 },
          { stem: 'A woman with nausea since starting morphine 3 days ago, no constipation.', answer: 0 },
          { stem: 'A man with early satiety and vomiting of undigested food due to hepatomegaly, no obstruction.', answer: 1 },
          { stem: 'A woman with nausea on the day of chemotherapy.', answer: 4 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Joan has constipation',
        scenario:
          'Joan, 81, has metastatic breast cancer with bone metastases. She takes MS Contin 30 mg bd, paracetamol and amitriptyline 25 mg nocte. She has not opened her bowels for 6 days, feels nauseated and is increasingly confused. Her daughter, who is her carer, is worried.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which FOUR factors could be contributing to her constipation?',
            options: ['Morphine', 'Amitriptyline', 'Hypercalcaemia', 'Reduced mobility and intake', 'Paracetamol', 'Vitamin D deficiency'],
            answers: [0, 1, 2, 3],
          },
          {
            kind: 'multi',
            stem: 'Which THREE assessments are most important today?',
            options: ['Abdominal and rectal examination', 'Corrected calcium and renal function', 'Screen for spinal cord compression (back pain, leg weakness, sphincter change)', 'Colonoscopy', 'CT brain', 'Thyroid function'],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            context: 'Rectal exam shows hard faeces. Corrected calcium is 3.05 mmol/L. There are no neurological signs.',
            stem: 'In line with her goals of care (comfort and time at home, but open to treatment that helps), what is the most appropriate management of her hypercalcaemia?',
            options: [
              'No treatment',
              'IV fluids and zoledronic acid (e.g. via hospital in the home or day unit)',
              'Oral calcium restriction only',
              'Furosemide alone',
              'Cinacalcet',
            ],
            answer: 1,
            explanation: 'Symptomatic hypercalcaemia of malignancy responds to rehydration and a bisphosphonate, improving confusion, nausea and constipation.',
          },
          {
            kind: 'emq',
            theme: 'Bowel management',
            lead: 'Choose the SINGLE most appropriate intervention for each step.',
            options: ['Glycerol/bisacodyl suppository or enema', 'Regular senna + docusate or macrogol', 'Psyllium', 'Methylnaltrexone SC', 'Loperamide', 'Surgical referral'],
            items: [
              { stem: 'Immediate relief of rectal impaction', answer: 0 },
              { stem: 'Ongoing prevention while on regular morphine', answer: 1 },
              { stem: 'Persistent opioid-induced constipation despite optimal laxatives, no obstruction', answer: 3 },
            ],
          },
          {
            kind: 'sba',
            stem: 'Which medicine change would most reduce her ongoing constipation and confusion risk?',
            options: ['Add codeine', 'Review and reduce or stop amitriptyline (anticholinergic)', 'Add oxybutynin', 'Increase morphine', 'Add iron'],
            answer: 1,
          },
        ],
      },
    ],
  },
  '625': {
    sections: [
      {
        heading: 'Epidemiology and pathophysiology',
        points: [
          'Australia has one of the highest IBD rates in the world. Peak onset is at 15–35, with a second smaller peak at 50–70.',
          'IBD is thought to arise from genetic susceptibility, gut microbiome disturbance, immune dysregulation and environmental triggers (Western diet, smoking for Crohn disease, antibiotics in early life).',
          'Crohn disease: transmural inflammation anywhere from mouth to anus (commonly terminal ileum and colon), skip lesions, granulomas. Phenotypes are inflammatory, stricturing and penetrating (fistulising).',
          'Ulcerative colitis: continuous mucosal inflammation starting in the rectum. Extent is proctitis, left-sided or extensive colitis.',
          'Smoking increases Crohn disease risk and severity, and is associated with lower UC risk. Still advise quitting, for general health.',
          'A family history of IBD in a first-degree relative increases risk several-fold.',
        ],
      },
      {
        heading: 'Distinguishing IBD from gastroenteritis and IBS',
        points: [
          'Gastroenteritis: sudden onset, often with contacts or food exposure, vomiting and fever early, resolves within 1–2 weeks.',
          'IBD features: diarrhoea for more than 4 weeks, blood or mucus, nocturnal symptoms, urgency, weight loss, abdominal pain, fever, fatigue, perianal disease, extra-intestinal symptoms, family history.',
          'IBS: chronic pain related to defecation, bloating, no blood, no weight loss, no nocturnal symptoms, normal bloods and calprotectin.',
          'Persistent "gastro" should prompt stool tests (including C. difficile and parasites), bloods and calprotectin rather than repeated reassurance. Delayed diagnosis worsens outcomes.',
          'In older adults, consider colorectal cancer, microscopic colitis and ischaemic colitis. In travellers, consider amoebiasis and giardiasis.',
        ],
      },
      {
        heading: 'Initial workup and referral',
        points: [
          'Bloods: FBC (anaemia, thrombocytosis), CRP, ESR, iron studies, B12 and folate, UEC, LFT, albumin, coeliac serology, vitamin D.',
          'Stool: MCS, C. difficile toxin/PCR, ova and parasites (or multiplex PCR), faecal calprotectin.',
          'Refer urgently to gastroenterology for colonoscopy with biopsies when calprotectin is raised with clinical suspicion. Arrange same-day admission for severe colitis.',
          'Imaging: MRI enterography for small bowel Crohn disease, and MRI pelvis for perianal fistula (specialist-led). CT for complications (abscess, obstruction).',
          'Do not start steroids before seeing gastroenterology unless severe and after discussion, because they can obscure diagnosis and infection must be excluded first.',
        ],
      },
      {
        heading: 'Medication benefits and harms',
        points: [
          '5-ASA (mesalazine): first-line induction and maintenance for mild to moderate UC (oral plus rectal is best for left-sided disease). Little benefit in Crohn disease. Monitor renal function (interstitial nephritis, rare).',
          'Corticosteroids: prednisolone for moderate to severe flares, tapered over about 8 weeks. Budesonide for ileal or right-colon Crohn disease or mild UC. Not for maintenance. Side effects: bone loss, diabetes, infection, mood, cataracts.',
          'Thiopurines (azathioprine, mercaptopurine): check TPMT and NUDT15 first. Monitor FBC and LFT regularly. Risks include myelosuppression, hepatotoxicity, pancreatitis, non-melanoma skin cancer and lymphoma (small).',
          'Methotrexate (weekly, with folic acid): for Crohn disease. Teratogenic, so stop 3–6 months before conception. Monitor FBC and LFT.',
          'Biologics: anti-TNF (infliximab, adalimumab), vedolizumab (gut-selective), ustekinumab or risankizumab (IL-12/23 or IL-23). Small molecules: JAK inhibitors (tofacitinib, upadacitinib) and S1P modulators. Risks: infections (TB, HBV reactivation), and VTE and CVD signals with JAK inhibitors.',
          'Before immunosuppression: screen for TB, HBV, HCV, HIV and VZV, and update vaccines (live vaccines at least 4 weeks before starting).',
        ],
      },
      {
        heading: 'Flares: recognition and GP role',
        points: [
          'Mild UC flare (<4 stools a day, small blood, no systemic features): optimise 5-ASA (increase dose, add rectal therapy) and check adherence. Contact the IBD nurse.',
          'Moderate to severe flare (4–6 or more bloody stools, systemic features): discuss urgently with gastroenterology. Exclude C. difficile and CMV. Oral steroids per specialist advice.',
          'Acute severe UC (Truelove and Witts: 6 or more bloody stools a day plus HR >90, temperature >37.8 °C, Hb <105 g/L or ESR >30) needs admission for IV steroids and VTE prophylaxis, with rescue therapy or colectomy if not responding.',
          'Crohn flare with obstruction (colicky pain, vomiting, distension) or abscess (fever, mass) needs same-day assessment.',
          'Avoid NSAIDs (they can trigger flares), and avoid antidiarrhoeals (loperamide) and opioids in active colitis because of the risk of toxic megacolon.',
        ],
      },
      {
        heading: 'Diet, lifestyle and wellbeing',
        points: [
          'No single diet prevents or cures IBD. A Mediterranean-style diet is reasonable for most. Limit ultra-processed foods and emulsifiers (emerging evidence).',
          'During flares or with strictures: a low-residue diet (less insoluble fibre, skins and seeds) reduces obstruction risk.',
          'Exclusive enteral nutrition (formula only for 6–8 weeks) is first-line induction in paediatric Crohn disease. The Crohn disease exclusion diet is an alternative in some.',
          'Dietitian review for weight loss, malnutrition, restrictive eating (common from fear of symptoms), iron, B12, vitamin D and calcium.',
          'Mental health: anxiety and depression are common and affect flares and adherence. Offer psychology, and gut-directed CBT for overlapping IBS symptoms.',
          'Exercise, sleep and stress management support overall wellbeing. Crohn\'s & Colitis Australia provides resources and a toilet access card ("Can\'t Wait" card).',
        ],
      },
      {
        heading: 'Preventive care and surveillance in IBD',
        points: [
          'Vaccination: influenza yearly, pneumococcal, COVID-19, HPV, hepatitis B (check immunity), recombinant zoster (Shingrix) from 18 if immunosuppressed. Live vaccines are contraindicated on significant immunosuppression.',
          'Bone health: DXA if steroid exposure over 3 months, older age, low BMI or postmenopausal. Calcium and vitamin D with steroid courses.',
          'Colorectal cancer surveillance: colonoscopy from about 8 years after colitis onset (and at PSC diagnosis, then yearly). Intervals depend on risk.',
          'Skin checks yearly on thiopurines (and JAK inhibitors). Cervical screening every 3 years if immunosuppressed.',
          'Pregnancy: best outcomes when conception happens in remission. Continue most IBD medicines, including biologics, but not methotrexate. Folic acid (5 mg with sulfasalazine).',
          'Anaemia: check FBC and ferritin 3–6 monthly in active disease. IV iron is preferred when there is active inflammation or oral iron is intolerant.',
        ],
      },
    ],
    keyNumbers: [
      'Calprotectin <50 µg/g: IBD unlikely; >100–200: inflammation',
      'Diarrhoea >4 weeks: investigate',
      'Acute severe UC: ≥6 bloody stools/day + systemic features',
      'Check TPMT/NUDT15 before thiopurines',
      'Live vaccines ≥4 weeks before immunosuppression',
      'CRC surveillance from ~8 years after colitis onset',
      'Methotrexate: stop 3–6 months before conception',
      'Steroid taper over ~8 weeks; never maintenance',
      'Avoid NSAIDs and loperamide in active colitis',
    ],
    workedCase: {
      title: 'Masaki has diarrhoea',
      paragraphs: [
        'Masaki, 22, a university student, presents with 5 weeks of loose stools up to 6 times a day, including at night, with mucus and occasional blood. Two weeks ago he saw a locum, who diagnosed "gastro" and advised fluids. He has lost 4 kg, and his mouth ulcers keep recurring.',
        'Red flags: duration over 4 weeks, nocturnal stools, blood, weight loss and oral ulcers. Examination: HR 96, afebrile, mild right iliac fossa tenderness, and a small perianal skin tag.',
        'You order FBC (Hb 118 g/L, platelets 480), CRP 38, ferritin 12, albumin 33, coeliac serology (negative), stool MCS and C. difficile (negative), and faecal calprotectin (820 µg/g). You refer urgently to gastroenterology and explain the likely diagnosis of IBD, with safety-netting for worsening pain, fever or heavy bleeding.',
        'Colonoscopy shows ileocolonic Crohn disease. You coordinate with the IBD team: pre-biologic screening (TB IGRA, HBV, HCV, HIV, VZV), inactivated vaccines, IV iron, smoking status (non-smoker) and a psychology referral for his exam stress. He starts adalimumab and is in clinical remission at 3 months.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Diarrhoea in adults',
        lead: 'Choose the SINGLE most likely diagnosis for each patient.',
        options: [
          'Crohn disease',
          'Ulcerative colitis',
          'Irritable bowel syndrome',
          'Microscopic colitis',
          'Clostridioides difficile infection',
          'Giardiasis',
          'Coeliac disease',
          'Colorectal cancer',
          'Viral gastroenteritis',
        ],
        items: [
          { stem: 'A 26-year-old with 2 months of bloody diarrhoea and urgency; rectum inflamed continuously to the sigmoid on colonoscopy.', answer: 1 },
          { stem: 'A 70-year-old woman on a PPI with 3 months of watery diarrhoea; normal-looking colonoscopy.', answer: 3 },
          { stem: 'A 45-year-old with profuse diarrhoea 5 days after finishing amoxicillin–clavulanate.', answer: 4 },
          { stem: 'A 19-year-old with weight loss, RIF pain, perianal fistula and raised calprotectin.', answer: 0 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Harriet has a new painful perineal lump',
        scenario:
          'Harriet, 27, has Crohn disease diagnosed 2 years ago and is maintained on azathioprine. She presents with 4 days of a painful, swollen lump beside her anus, worse on sitting, with fever 38.1 °C. She reports looser stools over the last month.',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the most likely diagnosis?',
            options: ['Thrombosed haemorrhoid', 'Perianal abscess related to Crohn disease', 'Anal fissure', 'Pilonidal sinus', 'Genital herpes'],
            answer: 1,
          },
          {
            kind: 'sba',
            stem: 'What is the most appropriate immediate management?',
            options: [
              'Oral antibiotics and review in 2 weeks',
              'Same-day surgical referral for examination under anaesthesia and drainage',
              'Topical steroid cream',
              'Increase azathioprine',
              'Sitz baths only',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            context: 'After drainage, MRI pelvis shows a complex perianal fistula. Her gastroenterologist plans to start infliximab.',
            stem: 'Which FOUR screening tests are needed before starting infliximab?',
            options: [
              'TB screening (IGRA ± chest X-ray)',
              'Hepatitis B serology (HBsAg, anti-HBc, anti-HBs)',
              'HIV and hepatitis C serology',
              'VZV serology',
              'HLA-B27',
              'Thyroid function',
            ],
            answers: [0, 1, 2, 3],
          },
          {
            kind: 'emq',
            theme: 'Monitoring IBD medicines',
            lead: 'Choose the SINGLE most important monitoring issue for each medicine.',
            options: [
              'Myelosuppression (FBC) and hepatotoxicity (LFT)',
              'Renal function (interstitial nephritis)',
              'Latent TB reactivation',
              'Teratogenicity – effective contraception',
              'Bone density and glucose',
              'QT prolongation',
            ],
            items: [
              { stem: 'Azathioprine', answer: 0 },
              { stem: 'Mesalazine', answer: 1 },
              { stem: 'Infliximab', answer: 2 },
              { stem: 'Methotrexate in a woman of childbearing age', answer: 3 },
            ],
          },
          {
            kind: 'multi',
            stem: 'Which TWO vaccines are CONTRAINDICATED once she is on infliximab plus azathioprine?',
            options: ['MMR', 'Live varicella vaccine', 'Inactivated influenza', 'Recombinant zoster (Shingrix)', 'Pneumococcal conjugate', 'HPV'],
            answers: [0, 1],
          },
        ],
      },
    ],
  },
}

export default extra
