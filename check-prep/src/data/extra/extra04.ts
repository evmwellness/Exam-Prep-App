import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  '630': {
    sections: [
      {
        heading: 'The rural generalist role',
        points: [
          'Rural generalists combine comprehensive general practice with hospital and emergency care, and often an additional skill: anaesthetics, obstetrics, emergency medicine, mental health, Aboriginal health, surgery or palliative care.',
          'Training pathways include the RACGP Rural Generalist Fellowship and ACRRM Fellowship. The National Rural Generalist Pathway supports recognition.',
          'The rural GP is often the first and only doctor on scene. Core skills: resuscitation, trauma, obstetric emergencies, paediatric emergencies, retrieval coordination and telehealth-supported care.',
          'Continuity is a strength. The same GP may care for a patient in clinic, the hospital ward, the ED and at home, and knows the family and community context.',
          'Professional isolation and fatigue are real risks. Peer networks, locum relief, continuing education and debriefing after critical incidents protect wellbeing.',
        ],
      },
      {
        heading: 'Social and cultural factors in rural care',
        points: [
          'Distance and cost: travel for specialist care may take a whole day or longer, with accommodation costs and lost income. Patient Assisted Travel Schemes (state-based) subsidise some of this.',
          'Stoicism and self-reliance: farmers and rural men often delay presenting. Ask directly and use opportunities such as injury visits or health checks.',
          'Privacy concerns: patients may worry about being seen at the clinic or pharmacy. Offer telehealth or discreet appointment times, and remind staff about confidentiality.',
          'Dual relationships: the GP may treat friends, neighbours or colleagues. Keep professional boundaries, and arrange alternative care for close relationships when possible.',
          'Economic and environmental stressors: drought, floods, bushfires, commodity prices and mine closures affect mental health and whole communities.',
          'Aboriginal and Torres Strait Islander people make up a larger share of remote populations. Partner with ACCHOs, Aboriginal health workers and community leaders.',
        ],
      },
      {
        heading: 'Telehealth, retrieval and specialist access',
        points: [
          'Telehealth: video consults with specialists (MBS items support GP participation), and specialist-to-GP advice lines. Useful for dermatology, psychiatry, paediatrics and follow-up.',
          'Retrieval: the RFDS and state retrieval services coordinate aeromedical transfer. Know your local number and what information they need (ISBAR handover, vital signs, treatment given).',
          'Stabilise before transfer: airway, IV access, fluids and blood products (if available), analgesia, antibiotics for sepsis, splinting. Prepare documentation and imaging.',
          'Outreach specialist clinics and visiting allied health (through programs such as the Rural Health Outreach Fund) reduce travel.',
          'Point-of-care testing (troponin, INR, HbA1c, blood gases, STI NAAT) improves decision-making in remote clinics.',
        ],
      },
      {
        heading: 'Farm and outdoor injuries and envenomation',
        points: [
          'Common farm injuries: quad bike rollovers (helmets, crush protection devices), machinery entanglement, falls from height, livestock kicks and crush injuries, chainsaw lacerations.',
          'Snakebite: pressure immobilisation bandage over the whole limb, splint, keep the person still, and do not wash the bite site (for venom detection). Transfer to a hospital with antivenom. Watch for coagulopathy, neurotoxicity and rhabdomyolysis.',
          'Funnel-web spider bite (NSW, southern QLD): pressure immobilisation and urgent antivenom. Redback bite: local pain. Do not apply pressure. Give analgesia and consider antivenom for severe systemic effects.',
          'Heat illness in outdoor workers: plan hydration, rest breaks and shade. Heat stroke is an emergency requiring rapid cooling.',
          'Chemical and pesticide exposure: organophosphate poisoning (SLUDGE: salivation, lacrimation, urination, diarrhoea, GI upset, emesis; plus miosis and bradycardia) needs decontamination, atropine and urgent transfer.',
          'Noise-induced hearing loss and skin cancer are common chronic occupational problems. Screen and protect.',
        ],
      },
      {
        heading: 'Rural mental health in practice',
        points: [
          'Farmers and rural men have a higher suicide risk. Contributors include isolation, financial and drought stress, access to lethal means, alcohol, and reluctance to seek help.',
          'Suicide risk assessment always includes firearms: ask directly, and with consent involve family or police to store or remove them. Temporary storage with a gun dealer or police is an option.',
          'Access: telehealth psychology, Better Access, rural mental health services (for example state rural adversity programs), Lifeline, MensLine, and farmer-specific services.',
          'Young people in rural areas: limited services and privacy concerns. Consider headspace (including telehealth), school counsellors and online programs.',
          'Community-level resilience after disasters: psychological first aid, recognising PTSD and depression, supporting responders (volunteers, emergency workers).',
        ],
      },
      {
        heading: 'Infections by region and season',
        points: [
          'Tropical north (wet season): melioidosis, dengue (Far North Queensland), scrub typhus, leptospirosis, strongyloides (eosinophilia), rheumatic fever and rheumatic heart disease in Aboriginal communities.',
          'Temperate farming areas: Q fever (livestock), leptospirosis, Ross River and Barmah Forest virus (joint pain, rash), Murray Valley encephalitis and Japanese encephalitis (in outbreak years), brucellosis (feral pig hunters).',
          'Skin: Buruli ulcer (coastal Victoria and far north Queensland), cutaneous leishmaniasis (rare), impetigo and scabies in remote communities (treat household contacts).',
          'Acute rheumatic fever: sore throat or skin sores followed by fever, joint pain, carditis or chorea. Prevent with prompt treatment of GAS infections in high-risk groups. Secondary prophylaxis is benzathine benzylpenicillin every 28 days (or 21 days in some cases).',
          'Rural pharmacies and clinics may have limited stock. Know alternatives and emergency supply arrangements.',
        ],
      },
      {
        heading: 'Cognitive decline and ageing in rural places',
        points: [
          'Rural older people often want to remain on the farm or in town, but distance from services, driving dependence and fewer residential aged care places complicate care.',
          'Assess reversible causes (thyroid, B12, depression, medicines, alcohol, sleep apnoea, hearing and vision) and consider occupational exposures (solvents, pesticides) and head injuries.',
          'Driving: rural people depend heavily on driving. Assess fitness to drive carefully, involve an OT driving assessment where available, and plan alternative transport before restricting.',
          'Firearms: safe storage or removal for people with cognitive impairment.',
          'Use My Aged Care (including remote assessments), the Commonwealth Home Support Program, multipurpose services in small towns, and Dementia Australia telehealth support.',
        ],
      },
    ],
    keyNumbers: [
      'Modified Monash Model: MM1 (metro) to MM7 (very remote)',
      'Q fever: doxycycline 100 mg bd × 14 days',
      'Melioidosis: IV meropenem or ceftazidime',
      'Snakebite: pressure immobilisation, no washing',
      'Redback bite: no pressure bandage',
      'Rheumatic fever prophylaxis: benzathine penicillin every 28 days',
      'Q-VAX: pre-vaccination serology + skin test',
      'Suicide risk assessment: always ask about firearms',
    ],
    workedCase: {
      title: 'Larry has not been his usual self',
      paragraphs: [
        'Larry, 58, a sheep and wheat farmer, comes in with his wife, who has booked the appointment. There has been drought for 3 years and they have sold half their flock. He is sleeping poorly, drinking 6 beers a night, has lost interest in everything and snapped at his son. He says he is "just tired".',
        'You see Larry alone for part of the consultation. PHQ-9 is 19 and AUDIT is 18. When asked directly, he admits thinking the family "would be better off with the insurance". He has thought about using his rifle but has no immediate plan. He has several guns in a locked cabinet.',
        'You treat this as high risk. With his consent, you involve his wife in a safety plan, and they agree to have his brother hold the guns and ammunition off the property. You arrange telehealth psychology within the week, give crisis numbers, and review him in 3 days. You discuss starting sertraline and reducing alcohol, with thiamine.',
        'You connect him with a rural financial counsellor and a drought support program, and encourage attendance at a local men\'s group. At 6 weeks his PHQ-9 is 10, he has cut down to 2 beers most nights, and he and his wife have a plan for the property. The guns remain off site until he and you agree it is safe.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Rural and tropical infections',
        lead: 'Choose the SINGLE most likely diagnosis for each patient.',
        options: [
          'Q fever',
          'Leptospirosis',
          'Melioidosis',
          'Ross River virus infection',
          'Dengue fever',
          'Scrub typhus',
          'Acute rheumatic fever',
          'Brucellosis',
          'Buruli ulcer',
        ],
        items: [
          { stem: 'A 35-year-old woman in the Riverina with painful swollen wrists and fingers and a maculopapular rash after a mosquito-heavy summer.', answer: 3 },
          { stem: 'A 12-year-old Aboriginal boy from a remote community with fever, migratory large-joint arthritis and a new murmur 3 weeks after a sore throat.', answer: 6 },
          { stem: 'A feral pig hunter with undulating fevers, sweats and back pain.', answer: 7 },
          { stem: 'A traveller to Cairns with fever, retro-orbital headache, myalgia and thrombocytopenia.', answer: 4 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Snakebite on a rural property',
        scenario:
          'Tom, 34, calls from a farm 90 minutes from your rural hospital. He was bitten on the left ankle by a brown snake while moving hay 10 minutes ago. He feels well. His partner is with him.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE first aid instructions should you give by phone?',
            options: [
              'Apply a broad pressure immobilisation bandage over the bite and then the whole limb, and splint it',
              'Keep him still and lying down; bring transport to him',
              'Call 000 for ambulance or retrieval',
              'Wash the bite thoroughly to remove venom',
              'Apply an arterial tourniquet',
              'Cut and suck the wound',
            ],
            answers: [0, 1, 2],
            explanation: 'Do not wash the bite: residual venom helps identify the snake. Tourniquets and cutting are harmful.',
          },
          {
            kind: 'sba',
            context: 'He arrives at your rural hospital 2 hours later. He is mildly nauseated. There is no ptosis. You have a small lab with INR and full blood count.',
            stem: 'Which investigation is most important to detect significant envenomation from a brown snake?',
            options: ['Chest X-ray', 'Coagulation studies (INR/APTT, fibrinogen) ± 20-minute whole blood clotting test', 'ECG only', 'Serum amylase', 'Blood cultures'],
            answer: 1,
            explanation: 'Brown snake venom causes venom-induced consumption coagulopathy.',
          },
          {
            kind: 'sba',
            context: 'INR is >12 and fibrinogen is undetectable.',
            stem: 'What is the most appropriate next step?',
            options: [
              'Remove the bandage and discharge',
              'Give brown snake antivenom (one vial) with adrenaline available, and arrange retrieval',
              'Give fresh frozen plasma only',
              'Give vitamin K and observe',
              'Wait for venom detection kit result before any treatment',
            ],
            answer: 1,
          },
          {
            kind: 'emq',
            theme: 'Rural emergency resources',
            lead: 'Choose the SINGLE best resource for each need.',
            options: [
              'Royal Flying Doctor Service / state retrieval service',
              'Poisons Information Centre (13 11 26)',
              'Patient Assisted Travel Scheme',
              'Telehealth specialist review',
              'Local pharmacy',
              'My Aged Care',
            ],
            items: [
              { stem: 'Advice on antivenom dosing and monitoring', answer: 1 },
              { stem: 'Transfer to a tertiary hospital by air', answer: 0 },
              { stem: 'Help with his travel costs for follow-up specialist appointments', answer: 2 },
            ],
          },
          {
            kind: 'multi',
            stem: 'Which TWO complications must you monitor for after brown snake envenomation?',
            options: ['Bleeding from coagulopathy', 'Thrombotic microangiopathy with acute kidney injury', 'Hypoglycaemia', 'Hyperthyroidism', 'Anaphylaxis to the bite itself'],
            answers: [0, 1],
          },
        ],
      },
    ],
  },
  '629': {
    sections: [
      {
        heading: 'Causes and drivers of obesity',
        points: [
          'Obesity reflects complex interactions: genetic predisposition (heritability 40–70%), the obesogenic environment (ultra-processed food, marketing, sedentary work, car dependence), social disadvantage, sleep deprivation, stress, and medicines.',
          'Weight regulation is actively defended: after weight loss, appetite hormones (increased ghrelin, reduced leptin and GLP-1) and reduced energy expenditure drive regain. This explains why diets alone often fail long term.',
          'Secondary causes are uncommon but worth considering: hypothyroidism, Cushing syndrome, hypothalamic lesions, monogenic obesity in severe childhood-onset cases (such as MC4R), and PCOS.',
          'Weight-promoting medicines: antipsychotics (olanzapine, clozapine), some antidepressants (mirtazapine, TCAs), valproate, gabapentinoids, insulin, sulfonylureas, pioglitazone, corticosteroids, beta-blockers.',
          'Weight stigma is widespread in healthcare. It reduces attendance and increases disordered eating and depression. Using neutral language and asking permission improves outcomes.',
        ],
      },
      {
        heading: 'Complications to screen for',
        points: [
          'Metabolic: prediabetes and T2DM, dyslipidaemia (high TG, low HDL), MASLD (fatty liver disease), gout.',
          'Cardiovascular: hypertension, coronary disease, heart failure (including HFpEF), AF, VTE.',
          'Respiratory: OSA, obesity hypoventilation syndrome (daytime hypercapnia), asthma.',
          'Musculoskeletal: knee and hip osteoarthritis, back pain, reduced mobility.',
          'Reproductive: PCOS, subfertility, pregnancy complications (GDM, pre-eclampsia, caesarean, stillbirth), male hypogonadism.',
          'Cancer: endometrial, oesophageal adenocarcinoma, colorectal, postmenopausal breast, kidney, liver, pancreatic. Mental health: depression, anxiety, binge eating disorder.',
        ],
      },
      {
        heading: 'Lifestyle interventions that work',
        points: [
          'Aim for a sustainable energy deficit of about 500–750 kcal a day. The macronutrient mix matters less than adherence. Choose a pattern the person can maintain (Mediterranean, lower carbohydrate, time-restricted eating).',
          'Very low energy diets using meal replacements (800–1200 kcal a day for 8–12 weeks) produce 10–15% loss and can put early T2DM into remission. Supervise medicines (insulin, sulfonylureas, SGLT2i, antihypertensives) and watch for gallstones.',
          'Physical activity: 150–300 minutes a week for health. More (about 250–300 minutes) helps maintain weight loss. Resistance training preserves muscle during weight loss.',
          'Behavioural strategies: self-monitoring (food, weight), goal setting, stimulus control, problem-solving, and regular contact (monthly or more in the first year).',
          'Sleep and stress: short sleep increases appetite. Treat OSA and address shift work and stress.',
        ],
      },
      {
        heading: 'Pharmacotherapy details',
        points: [
          'Semaglutide 2.4 mg weekly (Wegovy): titrate over 16 weeks from 0.25 mg. Mean loss about 15%. Side effects: nausea, vomiting, constipation or diarrhoea, gallstones, and rarely pancreatitis. It reduced cardiovascular events in people with established CVD (SELECT).',
          'Tirzepatide (GIP/GLP-1): titrate from 2.5 mg weekly up to 15 mg. Mean loss about 20%. Same class side effects. Reduces oral contraceptive exposure after starting and after dose increases.',
          'Liraglutide 3 mg daily: about 8% loss. Approved from age 12.',
          'Phentermine: a short-term sympathomimetic. Avoid with CVD, uncontrolled hypertension, hyperthyroidism, glaucoma or agitation, and with MAOIs.',
          'Naltrexone/bupropion: avoid with seizures, uncontrolled hypertension, opioid use and eating disorders (bulimia).',
          'Orlistat reduces fat absorption. Oily stools and faecal urgency limit use. Supplement fat-soluble vitamins.',
          'Stopping pharmacotherapy usually leads to regain of most of the weight within a year. Discuss long-term use and cost (limited PBS subsidy for obesity indications).',
        ],
      },
      {
        heading: 'Bariatric surgery',
        points: [
          'Procedures: sleeve gastrectomy (most common in Australia), Roux-en-Y gastric bypass (better for reflux and diabetes), one-anastomosis gastric bypass. Gastric banding is now rarely done.',
          'Outcomes: 20–30% sustained weight loss, remission of T2DM in many, reduced mortality and cancer risk, improved OSA and fertility.',
          'Lifelong follow-up: multivitamin, calcium and vitamin D, B12 (IM or high-dose oral), iron. Check FBC, iron studies, B12, folate, vitamin D, calcium, PTH, and zinc and copper periodically.',
          'Complications: dumping syndrome, hypoglycaemia (post-bypass), gallstones, marginal ulcers (avoid NSAIDs and smoking after bypass), strictures, nutrient deficiencies (anaemia, neuropathy), alcohol use disorder (faster absorption), and reflux after sleeve.',
          'Medicines after surgery: absorption may change. Avoid extended-release preparations early, and review oral contraception (use LARC). Delay pregnancy for 12–18 months.',
        ],
      },
      {
        heading: 'Children and adolescents',
        points: [
          'Assess BMI centile (overweight ≥85th, obesity ≥95th). Measure BP and check for acanthosis nigricans. Screen for complications if obese: fasting lipids, ALT, HbA1c or glucose, and sleep apnoea symptoms.',
          'Family-based treatment is most effective: the whole family changes behaviours (healthy food at home, less screen time, active play, regular sleep). Avoid weight-focused talk and blame.',
          'Refer to paediatric weight management services for severe obesity or complications. Pharmacotherapy (such as semaglutide from 12) and surgery are possible in adolescents under specialist care.',
          'Screen for bullying, depression and disordered eating, which are common in children with obesity.',
          'Avoid restrictive diets in growing children. The goal is often weight maintenance while height increases.',
        ],
      },
      {
        heading: 'Older adults and weight-neutral care',
        points: [
          'In older adults, higher BMI is less strongly linked to mortality, and unintentional weight loss predicts poor outcomes. Focus on function, strength and metabolic control.',
          'Sarcopenic obesity combines low muscle mass and strength (reduced grip, slow gait, difficulty rising from a chair) with high fat mass. Resistance and balance training and adequate protein are key.',
          'If weight loss is indicated (such as knee OA or diabetes), aim for modest loss (5–10%) with exercise to preserve muscle and bone.',
          'Weight-neutral approaches (such as Health at Every Size) focus on behaviours: eating well, activity, sleep and self-care without weight targets. They are useful where weight focus has caused harm or eating disorder risk is high.',
          'Honest shared decision-making lets patients choose between weight-focused and weight-neutral goals.',
        ],
      },
    ],
    keyNumbers: [
      'BMI ≥30 obesity (≥27.5 Asian); ≥25 overweight (≥23 Asian)',
      'Waist ≥80 cm women, ≥94 cm men (≥90 cm Asian men)',
      'Pharmacotherapy: BMI ≥30, or ≥27 with comorbidity',
      'Surgery: BMI ≥40, or ≥35 with comorbidity',
      'Semaglutide 2.4 mg weekly ≈ 15% loss; tirzepatide ≈ 20%',
      '5–10% weight loss improves BP, glucose, OSA and OA',
      'Folic acid 5 mg preconception if BMI ≥30',
      'Delay pregnancy 12–18 months after bariatric surgery',
      'Children: obesity ≥95th BMI centile',
      'Energy deficit ~500–750 kcal/day',
    ],
    workedCase: {
      title: 'Mark is tired and short of breath',
      paragraphs: [
        'Mark, 49, a truck driver with a BMI of 42, has increasing breathlessness, daytime sleepiness (he nearly fell asleep at the wheel last week), morning headaches and ankle swelling. BP is 158/96 and SpO2 is 93% at rest.',
        'You are concerned about OSA and possible obesity hypoventilation syndrome, both with driving implications. You advise him not to drive until he has been assessed, and you explain his responsibility to notify the licensing authority if a sleep disorder is confirmed. You arrange an urgent sleep study, venous blood gas (bicarbonate for hypercapnia), echocardiogram, HbA1c, lipids, LFT, UEC and TSH.',
        'The sleep study shows severe OSA (AHI 58), and bicarbonate is raised. He starts CPAP, which transforms his energy. HbA1c is 52 mmol/mol, meaning new diabetes. The echo shows mild pulmonary hypertension.',
        'Together you plan metformin, an SGLT2 inhibitor or GLP-1 RA with weight benefit, dietitian and exercise physiologist referral, and a discussion about bariatric surgery (BMI over 40 with comorbidities). He returns to driving once he is CPAP-adherent and specialist-cleared under the fitness-to-drive standards.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Obesity pharmacotherapy',
        lead: 'Choose the SINGLE most appropriate option for each patient.',
        options: [
          'Semaglutide 2.4 mg weekly',
          'Tirzepatide',
          'Phentermine',
          'Naltrexone/bupropion',
          'Orlistat',
          'Metformin alone',
          'Bariatric surgery referral',
          'No pharmacotherapy – address eating disorder first',
        ],
        items: [
          { stem: 'A 58-year-old man with BMI 34 and a previous myocardial infarction wanting medicine with cardiovascular benefit.', answer: 0 },
          { stem: 'A 45-year-old woman with BMI 36, epilepsy and a history of bulimia nervosa.', answer: 7 },
          { stem: 'A 50-year-old woman with BMI 44, poorly controlled T2DM and severe knee OA despite medicines and lifestyle change.', answer: 6 },
          { stem: 'A 40-year-old with BMI 32, uncontrolled hypertension and angina who could not tolerate a GLP-1 receptor agonist and wants medicine to help with weight.', answer: 4 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Susan is considering a third child',
        scenario:
          'Susan, 34, has a BMI of 38. She had gestational diabetes and pre-eclampsia in her second pregnancy. She wants to conceive in the next year and asks about starting "the weight loss injection" her friend uses. She takes the combined oral contraceptive pill.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE preconception measures are most important?',
            options: [
              'Folic acid 5 mg daily',
              'Screen for diabetes (HbA1c or OGTT) before conception',
              'Iodine 150 microgram daily',
              'Vitamin A supplements',
              'Stop all exercise',
              'Low-dose aspirin now, before conception',
            ],
            answers: [0, 1, 2],
            explanation: 'Aspirin for pre-eclampsia prevention starts from 12–16 weeks of pregnancy, not before conception.',
          },
          {
            kind: 'sba',
            stem: 'She wants semaglutide before trying to conceive. What is the most accurate advice?',
            options: [
              'It is safe to continue throughout pregnancy',
              'It can help with preconception weight loss but must be stopped at least 2 months before trying to conceive, with effective contraception while taking it',
              'It is contraindicated for anyone of reproductive age',
              'It improves fertility so she can stop contraception immediately',
              'It should be started once pregnant',
            ],
            answer: 1,
          },
          {
            kind: 'sba',
            context: 'She later chooses tirzepatide instead.',
            stem: 'What contraception advice is required?',
            options: [
              'No change needed',
              'Switch to a non-oral method or add barrier contraception for 4 weeks after starting and after each dose increase',
              'Double the pill dose',
              'Stop contraception – tirzepatide prevents ovulation',
              'Take the pill every 12 hours',
            ],
            answer: 1,
          },
          {
            kind: 'emq',
            theme: 'Pregnancy risks with obesity',
            lead: 'She conceives a year later at BMI 33. Choose the SINGLE most appropriate intervention for each risk.',
            options: [
              'Aspirin 150 mg nightly from 12–16 weeks',
              'Early OGTT or HbA1c in the first trimester',
              'Folic acid 5 mg',
              'Growth ultrasound in third trimester',
              'Calcium supplementation if low dietary intake',
              'Routine caesarean at 37 weeks',
            ],
            items: [
              { stem: 'Risk of recurrent pre-eclampsia', answer: 0 },
              { stem: 'Risk of pre-existing or early gestational diabetes', answer: 1 },
              { stem: 'Risk of fetal growth abnormality (macrosomia or growth restriction)', answer: 3 },
            ],
          },
          {
            kind: 'multi',
            stem: 'Which TWO communication approaches are most appropriate when discussing her weight?',
            options: [
              'Ask permission before discussing weight and use person-first language',
              'Focus on health goals and what matters to her, not only kilograms',
              'Tell her the pregnancy risks are her fault',
              'Avoid mentioning weight at all',
              'Use the word "obese" repeatedly to motivate her',
            ],
            answers: [0, 1],
          },
        ],
      },
    ],
  },
  '628': {
    sections: [
      {
        heading: 'Nutrition in lifestyle medicine',
        points: [
          'The Australian Dietary Guidelines recommend plenty of vegetables and legumes, fruit, wholegrains, lean proteins, dairy or alternatives, and limiting discretionary foods high in saturated fat, added sugar, salt and alcohol.',
          'The Mediterranean diet has the strongest evidence for reducing cardiovascular events (PREDIMED), diabetes, cognitive decline and depression (SMILES trial).',
          'Ultra-processed foods are associated with obesity, T2DM, CVD and mortality. Encourage cooking from basic ingredients where feasible.',
          'Food insecurity affects about 1 in 8 Australian households. Ask about affordability, and link to food relief and dietitians, with culturally appropriate advice.',
          'Brief dietary interventions by GPs work best with specific, achievable goals, such as "two serves of vegetables at dinner" or "water instead of soft drink".',
        ],
      },
      {
        heading: 'Exercise prescription',
        points: [
          'Use FITT: Frequency, Intensity (talk test or RPE; moderate means you can talk but not sing), Time, Type. Progress gradually and include enjoyable activities.',
          'Strength training twice a week reduces falls, sarcopenia, diabetes risk and all-cause mortality. Include balance work for older adults (tai chi, Otago program).',
          'Pre-exercise screening (ESSA APSS) identifies people who need medical review before vigorous activity: known cardiovascular, metabolic or renal disease, or symptoms such as chest pain, syncope or palpitations.',
          'Sitting less matters on its own: break up prolonged sitting every 30–60 minutes.',
          'Exercise physiologists can be accessed through Chronic Condition Management Plans (5 allied health sessions a year), and DVA or private health funds for eligible people.',
          'Newer social sports such as pickleball suit older adults but carry injury risk (falls, Achilles and calf strains, wrist fractures). Advise a warm-up, appropriate footwear and gradual build-up.',
        ],
      },
      {
        heading: 'Sleep and stress',
        points: [
          'Poor sleep is associated with obesity, diabetes, hypertension, depression and accidents. Screen with simple questions and the Epworth Sleepiness Scale.',
          'CBT-i components: sleep restriction, stimulus control, sleep hygiene, cognitive therapy, relaxation. Deliver via a psychologist or online programs (for example THIS WAY UP).',
          'Stress management: mindfulness-based programs, relaxation, exercise, nature exposure, social support, problem-solving, and addressing work and financial stressors.',
          'Burnout is an occupational phenomenon of exhaustion, cynicism and reduced efficacy. Management focuses on workload, boundaries, leave, supervision and meaningful work, plus screening for depression.',
          'Avoid long-term hypnotics and benzodiazepines, which carry dependence, falls and cognitive risks.',
        ],
      },
      {
        heading: 'Social connection and loneliness',
        points: [
          'Loneliness (subjective) and social isolation (objective) are distinct but both harmful. Prolonged loneliness is linked to cardiovascular disease, stroke, dementia, depression and premature death.',
          'Risk groups: older adults living alone, carers, new parents, migrants, people with disability or mental illness, rural residents, young adults.',
          'Ask routinely, for example "How often do you feel lonely?" (UCLA 3-item loneliness scale). Explore the causes: bereavement, hearing loss, transport, mobility, anxiety.',
          'Interventions: social prescribing, group activities with a shared purpose, volunteering, intergenerational programs, hearing aids, transport solutions, and psychological therapy for social anxiety.',
          'For Aboriginal and Torres Strait Islander peoples, connection to family, kin, community and Country is central to wellbeing. Culture-based programs and ACCHOs are key partners.',
        ],
      },
      {
        heading: 'Social and nature prescriptions',
        points: [
          'A social prescription names a specific community activity (such as a community garden on Tuesdays), explains how to access it, and plans follow-up. Link workers improve uptake.',
          'Nature prescriptions: time in green or blue spaces (about 120 minutes a week is associated with better health and wellbeing), gardening, walking groups, park programs.',
          'Evidence: improved wellbeing, mood and physical activity. Effects on healthcare use are promising but mixed.',
          'Barriers: cost, transport, disability, safety and confidence. Address them in planning, for example a first visit with a volunteer "buddy".',
          'Record social prescriptions in the care plan and review them like any other treatment.',
        ],
      },
      {
        heading: 'Behaviour change techniques',
        points: [
          'Motivational interviewing uses OARS: Open questions, Affirmations, Reflections, Summaries. Elicit change talk ("What would be different if you were more active?").',
          'Importance and confidence rulers (0–10) help you understand readiness and barriers.',
          'Stages of change: precontemplation (raise awareness), contemplation (explore ambivalence), preparation (plan), action (support), maintenance (prevent relapse).',
          'Habit formation: attach new behaviours to existing routines ("after I brush my teeth, I do 10 squats"), start small and track progress.',
          'Health literacy: use teach-back, plain language and visual aids. Tailor to culture and language.',
        ],
      },
      {
        heading: 'Shared medical appointments and group care',
        points: [
          'In a shared medical appointment, a group of patients with a common condition (such as diabetes, obesity or chronic pain) meets together. Each has an individual medical review within the group, and a facilitator leads education and discussion.',
          'Benefits: more time with the clinician, peer support and learning, efficiency, and improved outcomes in some conditions (such as HbA1c and patient satisfaction).',
          'Requirements: informed consent, confidentiality agreements, a suitable space, clear documentation for each patient, and appropriate billing for each patient\'s individual care component.',
          'Other group models include group exercise classes run by allied health (MBS group allied health items for diabetes), cardiac and pulmonary rehabilitation, and peer-led self-management programs.',
          'Group models can be culturally powerful, for example yarning circles or men\'s groups.',
        ],
      },
    ],
    keyNumbers: [
      'Adults: 150–300 min moderate or 75–150 min vigorous activity/week',
      'Muscle strengthening ≥2 days/week',
      'Over 65: ≥30 min most days + strength and balance',
      'Nature: ~120 min/week linked to wellbeing',
      'Alcohol: ≤10 standard drinks/week, ≤4/day',
      'Sleep: 7–9 hours for adults',
      'Chronic Condition Management Plan: 5 allied health sessions/year',
      'Break up sitting every 30–60 min',
    ],
    workedCase: {
      title: 'Nina is concerned about her future health',
      paragraphs: [
        'Nina, 46, a busy office manager, attends for a health check after her father\'s stroke. She sits most of the day, sleeps 5–6 hours, eats takeaway 4 nights a week and drinks 2–3 glasses of wine most nights. BMI is 29, BP 138/86, and her calculated 5-year CVD risk is low to intermediate.',
        'You use motivational interviewing. She rates importance 9/10 but confidence 4/10. Her main barrier is time. Together you choose two initial goals: walking 30 minutes at lunch 3 days a week with a colleague, and alcohol-free weeknights. You write them down as a prescription.',
        'You address sleep with a CBT-i-based plan (fixed wake time, no screens in bed) and suggest a cooking program with simple meal prep. You arrange fasting lipids and HbA1c, and book review in 6 weeks.',
        'At review she has walked 3 days most weeks, drinks only at weekends and sleeps better. BP is 128/80. She now wants to add strength training, so you refer her to an exercise physiologist. You record her progress in her care plan.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Lifestyle prescriptions',
        lead: 'Choose the SINGLE most appropriate prescription for each patient.',
        options: [
          'Social prescription via link worker (community group)',
          'Nature prescription (green space time)',
          'CBT for insomnia',
          'Structured resistance and balance program',
          'Mediterranean-style dietary pattern',
          'Brief alcohol intervention',
          'Shared medical appointment program',
          'Benzodiazepine for sleep',
        ],
        items: [
          { stem: 'A 78-year-old woman with two falls this year and slow gait.', answer: 3 },
          { stem: 'A 55-year-old man with chronic insomnia for 2 years who wants to stop zolpidem.', answer: 2 },
          { stem: 'A 70-year-old widower who rarely leaves home and says he has "no one to talk to".', answer: 0 },
          { stem: 'A 60-year-old with high CVD risk and a diet high in processed meat and refined grains.', answer: 4 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Sally feels burnt out',
        scenario:
          'Sally, 39, is a nurse working rotating night shifts and caring for two children. She feels exhausted, cynical about work and "not good at anything anymore". She sleeps 4–5 hours, relies on energy drinks and has stopped exercising.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE assessments are most important?',
            options: [
              'Screen for depression and suicide risk (e.g. PHQ-9)',
              'Medical causes of fatigue (FBC, ferritin, TSH, glucose)',
              'Sleep pattern, caffeine and alcohol use',
              'Brain MRI',
              'Serum cortisol at 4 pm',
              'Chest X-ray',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            context: 'PHQ-9 is 11 with no suicidal ideation. Bloods are normal.',
            stem: 'Her presentation is most consistent with:',
            options: ['Chronic fatigue syndrome', 'Burnout with mild depressive symptoms', 'Hypothyroidism', 'Narcolepsy', 'Bipolar disorder'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which THREE lifestyle interventions are most appropriate?',
            options: [
              'Sleep strategies for shift work (anchor sleep, dark quiet room, limit caffeine after mid-shift)',
              'Gradual reintroduction of enjoyable physical activity',
              'Discuss workplace changes (roster, leave) and supports such as the Nurse and Midwife Support line',
              'Nightly benzodiazepine',
              'Increase energy drinks to maintain alertness',
              'Stop all social activity to conserve energy',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'Which technique would best help Sally identify and commit to changes?',
            options: ['Giving a detailed lecture', 'Motivational interviewing with a SMART goal', 'Referral to psychiatry', 'Prescribing modafinil', 'A pamphlet only'],
            answer: 1,
          },
          {
            kind: 'emq',
            theme: 'Follow-up plan',
            lead: 'Choose the SINGLE best action for each situation at review.',
            options: [
              'Mental Health Treatment Plan with psychology',
              'Continue current plan and review in 6 weeks',
              'Urgent crisis assessment',
              'Medical certificate for a period of leave',
              'Refer to sleep physician',
            ],
            items: [
              { stem: 'Improving, sleeping 6–7 hours, walking twice a week', answer: 1 },
              { stem: 'PHQ-9 rises to 18 with persistent low mood', answer: 0 },
              { stem: 'Loud snoring and witnessed apnoeas reported by her partner', answer: 4 },
            ],
          },
        ],
      },
    ],
  },
}

export default extra
