import type { Section } from '../../types'

/** Final practice vignettes so every unit has a full 20 minutes of reading */
const topup: Record<string, Section[]> = {
  '614': [{ heading: 'One more case', points: ['A 19-year-old has become withdrawn, suspicious and is failing university after heavy cannabis use. Refer early to a youth early psychosis service, and discuss reducing cannabis.'] }],
  '613': [{ heading: 'One more case', points: ['A 45-year-old whose father and brother had prostate cancer in their 50s asks about testing. Discuss starting PSA testing now, and consider genetic counselling for BRCA2.'] }],
  '612': [{ heading: 'One more case', points: ['A 76-year-old with heart failure and limited life expectancy asks whether he should keep having surveillance colonoscopies. Discuss stopping, as the risks likely outweigh the benefits.', 'A woman aged 46 asks if she can start bowel screening. Yes: people aged 45–49 can request a free kit.'] }],
  '611': [{ heading: 'One more case', points: ['A 45-year-old breastfeeding woman has a red, tender breast that has not improved after 10 days of antibiotics. Arrange ultrasound to look for an abscess and to exclude inflammatory breast cancer.', 'A breast cancer survivor has arm swelling and tight rings. Refer early to a lymphoedema practitioner.'] }],
  '610': [{ heading: 'One more case', points: ['A 65-year-old has an irregular pulse at a flu vaccination visit. Confirm AF with a 12-lead ECG, check thyroid function and echocardiography, and assess stroke risk with CHA2DS2-VA.', 'A woman who had pre-eclampsia asks about her future health. Explain her higher cardiovascular risk, and check blood pressure yearly.'] }],
  '609': [{ heading: 'One more case', points: ['A 58-year-old has personality change, disinhibition and poor judgement over a year, with good memory. Consider frontotemporal dementia and refer to a memory specialist.'] }],
  '608': [{ heading: 'One more case', points: ['A 70-year-old with pancreatic cancer has severe abdominal pain despite high-dose opioids. Discuss a coeliac plexus block with the palliative care team.', 'A patient asks about a clinical trial. Encourage them to ask the oncology team early, and use the Australian Cancer Trials website.'] }],
  '607': [
    {
      heading: 'One more case',
      points: [
        'A 20-year-old with joint hypermobility, frequent subluxations and dizziness on standing. Consider hypermobile EDS and POTS. Do an active stand test, and refer to physiotherapy for strengthening.',
        'A family asks why their son\'s genetic test showed a "variant of uncertain significance". Explain that it cannot be used to make a diagnosis now, and may be reclassified later.',
      ],
    },
  ],
  '606': [{ heading: 'One more case', points: ['An Aboriginal man aged 42 has not had a health check. Offer an MBS 715 health check, including cardiovascular risk, diabetes, kidney function, mental health and immunisations.', 'A man with difficulty passing urine asks about PSA testing. Discuss benefits and harms, and assess his symptoms with the IPSS.'] }],
  '605': [{ heading: 'One more case', points: ['A 25-year-old with severe underarm sweating has tried antiperspirant. Try aluminium chloride at night, and refer for botulinum toxin if it does not work.'] }],
  '604': [
    {
      heading: 'One more case',
      points: [
        'A woman with bipolar disorder on lithium wants to quit smoking. Varenicline can be used with monitoring of mood. Smoking cessation does not affect lithium levels, but liaise with her psychiatrist.',
        'A mother smokes outside but her baby has frequent chest infections. Advise complete smoke-free homes and cars, and offer her quit support.',
      ],
    },
  ],
  '603': [
    {
      heading: 'One more case',
      points: [
        'A man with type 1 diabetes is flying from Sydney to London. Plan insulin timing across time zones with his diabetes educator, and carry insulin in hand luggage with a letter.',
        'A student is going to rural Kenya for 3 months. Discuss yellow fever vaccination, malaria prevention, rabies and typhoid vaccination, and safe food and water.',
      ],
    },
  ],
  '602': [
    {
      heading: 'One more case',
      points: [
        'A 26-year-old woman who left the Navy last year has panic attacks and is drinking heavily. Ask about military sexual trauma sensitively, screen for PTSD, and arrange a White Card and Open Arms support.',
        'A veteran with chronic back pain is on high-dose oxycodone. Review benefits and harms, check real-time prescription monitoring, and offer a slow taper with active pain management.',
        'A veteran recently transitioned from the ADF has not had a Veteran Health Check. Book the comprehensive assessment, which is DVA-funded each year for the first 5 years.',
      ],
    },
  ],
  '601': [{ heading: 'One more case', points: ['A vegan woman with heavy periods has ferritin 9. Treat with oral iron on alternate days, manage the heavy bleeding with a levonorgestrel IUD or tranexamic acid, and review her diet.', 'A man with heart failure has ferritin 80. He is iron deficient by heart failure criteria. Arrange IV iron.'] }],
  '600': [{ heading: 'One more case', points: ['A 2-year-old has refused to walk since a minor fall with a normal X-ray. Suspect a toddler\'s fracture. Immobilise, and repeat the X-ray in 7–10 days.'] }],
  '599': [{ heading: 'One more case', points: ['A carpenter has an eye injury from a nail gun and blurred vision. Place a rigid shield (no patch) and refer immediately for suspected penetrating injury.', 'A woman has recurrent painful discharging lumps near the top of her buttock crease. This is pilonidal disease. Drain an abscess and refer for definitive surgery.'] }],
  '598': [
    {
      heading: 'One more case',
      points: [
        'A 22-year-old man bets on sports apps daily and has maxed his credit cards. Screen for depression and suicide risk, suggest BetStop self-exclusion and bank gambling blocks, and refer to Gambling Help.',
        'A stressed manager has daily tension headaches. Review analgesic use, sleep and alcohol, and consider amitriptyline as prevention, plus stress management.',
        'A 45-year-old sits all day at work. Recommend breaking up sitting every 30 minutes and adding 150 minutes of moderate activity a week.',
      ],
    },
  ],
  '597': [{ heading: 'One more case', points: ['A 4-year-old wakes several times a night and comes to the parents\' bed. Use consistent bedtime routines and a gradual retreat approach. Screen for snoring and sleep apnoea.', 'A 3-year-old will eat only 5 foods but is growing well. Reassure, keep offering new foods alongside familiar ones, and avoid pressure or bribes.'] }],
  '596': [{ heading: 'One more case', points: ['A man returns from Cairns with fever, headache and aching joints. Consider dengue and Ross River virus. Test, and avoid NSAIDs until dengue is excluded.', 'A home dialysis patient lives in a flood-prone area. Make an emergency plan with the renal team, including backup power and a plan to reach a dialysis unit.'] }],
  '595': [
    {
      heading: 'One more case',
      points: [
        'A 2-year-old has a barking cough and stridor only when upset. Give oral dexamethasone and safety-netting advice. Return urgently for stridor at rest or breathing difficulty.',
        'A 55-year-old stonemason has breathlessness and dry cough. Ask about work with engineered stone, arrange a chest X-ray and CT, and refer for suspected silicosis.',
        'A 70-year-old with COPD has an exacerbation with more sputum and breathlessness. Start prednisolone and an antibiotic according to the action plan, and review within 48 hours.',
      ],
    },
  ],
  '594': [{ heading: 'One more case', points: ['A 32-year-old with painful periods, painful sex and 18 months of infertility. Suspect endometriosis and refer to a gynaecologist or fertility specialist.', 'A 34-year-old single woman asks about egg freezing. Explain success rates are better before 35, discuss costs, and refer to a fertility clinic.', 'A woman planning pregnancy is not immune to rubella. Give MMR and advise avoiding pregnancy for 28 days.'] }],
  '593': [{ heading: 'One more case', points: ['A 25-year-old woman starting isotretinoin asks about contraception. Recommend a long-acting reversible method, or two methods, with monthly pregnancy tests.', 'A child has a cluster of small pearly bumps with a central dimple. This is molluscum contagiosum. Reassure, as it resolves on its own.', 'A man has a red, scaly, spreading ring on his thigh that worsened with a steroid cream. Stop the steroid and treat as tinea.'] }],
  '592': [{ heading: 'One more case', points: ['An 8-year-old autistic boy has difficulty falling asleep every night. Start with a consistent routine and sensory adjustments, then consider prolonged-release melatonin.', 'A 30-year-old woman has lifelong disorganisation and anxiety, and her son has ADHD. Screen for adult ADHD and refer for assessment.'] }],
  '591': [{ heading: 'One more case', points: ['A pregnant woman has missed 3 antenatal visits and has bruises on her arms. Ask about violence when she is alone, and assess risk to her and the baby.', 'A 15-year-old girl says her boyfriend checks her phone and threatens to share photos. Recognise this as dating violence and image-based abuse, and involve eSafety and support services.', 'A child discloses abuse during a consultation. Listen, reassure, do not promise secrecy, and report to child protection.'] }],
  '590': [{ heading: 'One more case', points: ['A 70-year-old has left lower abdominal pain and mild fever, but is otherwise well and eating. This is likely uncomplicated diverticulitis. Consider managing without antibiotics, with close review.', 'A man born in Vietnam has never been tested for hepatitis B. Test HBsAg, anti-HBs and anti-HBc.'] }],
  '589': [{ heading: 'One more case', points: ['A runner has heel pain that is worst with the first steps each morning. This is plantar fasciitis. Advise stretches, supportive footwear and load management.', 'A 60-year-old man felt a kick in his calf while playing tennis and cannot stand on tiptoe. Do the calf squeeze test, and refer the same day for suspected Achilles rupture.'] }],
  '588': [
    {
      heading: 'One more case',
      points: [
        'A 65-year-old man had a heart attack 3 months ago and asks when he can have sex. If he can climb two flights of stairs without symptoms, it is usually safe. Check he is not taking nitrates before a PDE5 inhibitor.',
        'A woman with multiple sclerosis has reduced genital sensation and low desire. Discuss contributing factors and refer to specialist sexual health or occupational therapy services.',
        'A man is worried about his pornography use and its effect on his relationship. Explore without judgement, and consider CBT and couples counselling.',
      ],
    },
  ],
  '587': [{ heading: 'One more case', points: ['A 12-year-old footballer has pain below the knee cap and a tender bump. This is Osgood–Schlatter disease. Reassure, and advise activity modification and quadriceps stretching.', 'A 16-year-old has had 2 shoulder dislocations. Refer to an orthopaedic surgeon, as recurrence is common in young athletes.', 'A sprinter feels sudden pain in the back of the thigh. Treat as a hamstring strain with progressive loading.'] }],
  '586': [
    {
      heading: 'One more case',
      points: [
        'A 30-year-old about to start chemotherapy for lymphoma asks about having children later. Refer promptly for fertility preservation before treatment starts.',
        'A 5-year survivor of bowel cancer asks what checks she still needs. Follow the surveillance plan, encourage exercise and healthy weight, and manage long-term effects.',
        'A man with cancer has a new swollen leg. Arrange an ultrasound for DVT. Cancer-associated VTE is common and needs anticoagulation.',
      ],
    },
  ],
  '585': [{ heading: 'One more case', points: ['A 16-year-old drinks heavily at parties most weekends. Give non-judgemental harm reduction advice, and screen for mood and other drug use.', 'A 13-year-old is always tired and goes to bed at 1 am. Discuss sleep routines, screens in the bedroom, and caffeine.', 'A 17-year-old with asthma is moving to adult care. Help him book his own appointments and understand his medicines.'] }],
  '584': [{ heading: 'One more case', points: ['A 40-year-old Aboriginal woman with diabetes has not had a cardiovascular risk assessment. Assess now, as risk assessment starts from age 30 for First Nations people.', 'A 75-year-old with aortic stenosis faints while gardening. Refer urgently for valve assessment.', 'A man on atorvastatin 80 mg has LDL 2.4 mmol/L after a heart attack. Add ezetimibe to reach target.'] }],
  '583': [{ heading: 'One more case', points: ['A man had a vasectomy 3 weeks ago and wants to stop condoms. Advise continuing contraception until a semen test at about 3 months shows no sperm.', 'A 30-year-old with a first kidney stone asks how to prevent another. Advise drinking enough to pass 2–2.5 litres of urine daily, reducing salt, and keeping normal dietary calcium.', 'An older woman has urge incontinence. Start bladder training and pelvic floor exercises, and consider mirabegron rather than anticholinergics.'] }],
}

export default topup
