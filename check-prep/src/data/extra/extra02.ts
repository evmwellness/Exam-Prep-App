import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  S6: {
    sections: [
      {
        heading: 'Symptoms beyond hot flushes',
        points: [
          'Vasomotor symptoms (hot flushes, night sweats) affect about 75% of women and last a median of about 7 years. A quarter still have them 10 years after the final period.',
          'Other common symptoms: sleep disturbance, low mood and anxiety, irritability, "brain fog" and memory lapses, joint and muscle aches, palpitations, reduced libido, and genitourinary symptoms (dryness, dyspareunia, urgency, recurrent UTI).',
          'The Menopause Society / Australasian Menopause Society symptom scores (such as the Greene Climacteric Scale) help track severity and response to treatment.',
          'Consider other causes of similar symptoms: thyroid disease, anaemia, depression, diabetes, medicines (SSRIs, tamoxifen, GnRH analogues), and rarely phaeochromocytoma or carcinoid for flushing.',
          'Menopause can unmask or worsen migraine, depression and ADHD symptoms. Ask about them specifically.',
        ],
      },
      {
        heading: 'Choosing and adjusting an MHT regimen',
        points: [
          'Perimenopause (still bleeding): cyclical (sequential) regimen, with oestrogen daily and progestogen for 12–14 days a month, giving a regular withdrawal bleed. Alternatively a 52 mg LNG-IUD plus oestrogen, which also provides contraception.',
          'Postmenopause (more than 12 months since the last period): continuous combined regimen, with oestrogen and progestogen daily and no bleed expected. Irregular bleeding is common in the first 3–6 months.',
          'Oestrogen routes: transdermal gel, spray or patch (preferred with VTE risk, migraine, obesity, smoking, hypertriglyceridaemia, gallbladder disease), or oral tablets. Start low and titrate to symptoms every 6–12 weeks.',
          'Progestogen options: micronised progesterone 100 mg nightly continuous or 200 mg for 12–14 days cyclical (sedating, so take at night), dydrogesterone, norethisterone, medroxyprogesterone, or LNG-IUD.',
          'Hysterectomy: oestrogen alone, unless there is a history of endometriosis (add progestogen to protect residual deposits).',
          'Persistent unscheduled bleeding beyond 6 months of starting, or new bleeding after amenorrhoea on MHT, needs a transvaginal ultrasound and gynaecology review.',
        ],
      },
      {
        heading: 'Risks and benefits in numbers',
        points: [
          'For most women under 60 or within 10 years of menopause without contraindications, the benefit–risk balance favours MHT for bothersome symptoms.',
          'Breast cancer: combined MHT adds roughly a few extra cases per 1000 women over 5 years of use, with risk rising with duration and falling after stopping. Oestrogen-only therapy has little or no increase. Alcohol and obesity carry comparable or greater risk.',
          'VTE: oral oestrogen roughly doubles the risk. Transdermal oestrogen at standard doses does not appear to increase it.',
          'Stroke: small increase with oral oestrogen, mainly in women over 60. Coronary heart disease: neutral or possibly reduced when started early ("timing hypothesis"); increased when started late in older women.',
          'Benefits: symptom relief, prevention of osteoporotic fracture, reduced colorectal cancer risk, and improved genitourinary symptoms and quality of life.',
          'There is no arbitrary stopping age. Review annually, and consider a trial of reduction if symptoms may have settled. Symptoms recur in about half of women on stopping, whether stopped abruptly or gradually.',
        ],
      },
      {
        heading: 'Special groups',
        points: [
          'Women with a history of VTE: transdermal oestrogen with micronised progesterone or dydrogesterone, ideally with haematology input. Active VTE is a contraindication.',
          'Migraine with aura: transdermal oestrogen at the lowest effective dose is acceptable, unlike the combined oral contraceptive pill.',
          'Breast cancer survivors: avoid systemic MHT. Use non-hormonal options and low-dose vaginal oestrogen for genitourinary symptoms after discussion with oncology (avoid if on aromatase inhibitors unless symptoms are severe).',
          'BRCA carriers after risk-reducing salpingo-oophorectomy (without breast cancer): MHT until about 51 is recommended to reduce long-term cardiovascular and bone risk.',
          'Endometriosis: continuous combined MHT or tibolone after surgical menopause to reduce the risk of reactivation.',
          'Women with cardiovascular risk factors: control them first. Transdermal routes and lower doses are preferred.',
        ],
      },
      {
        heading: 'Premature ovarian insufficiency and early menopause',
        points: [
          'POI affects about 1–4% of women. Causes: idiopathic (most), genetic (Turner mosaicism, FMR1 premutation), autoimmune (thyroid, adrenal), iatrogenic (chemotherapy, pelvic radiotherapy, surgery).',
          'Investigations: FSH (two raised levels 4–6 weeks apart, or a single raised level per updated guidance), oestradiol, TSH, prolactin, karyotype, FMR1 premutation, adrenal and thyroid antibodies, and baseline DXA.',
          'Hormone therapy (MHT, or COC if contraception is needed) is recommended until the average age of menopause to protect bone, heart and cognition. Doses are typically higher than in older women.',
          'About 5–10% of women with POI conceive spontaneously, so they need contraception if pregnancy is not wanted. Fertility options include donor oocytes.',
          'Psychological impact is significant (loss of fertility, identity). Offer counselling and peer support organisations.',
        ],
      },
      {
        heading: 'Contraception in the menopause transition',
        points: [
          'Fertility falls but does not stop until menopause is confirmed. Unintended pregnancies in the 40s have high rates of termination and complications.',
          'Stop contraception after 12 months of amenorrhoea if over 50, or 24 months if under 50 (in women not on hormonal contraception).',
          'Hormonal contraception masks the menopause. Options: continue a progestogen-only method until 55 (when natural fertility is negligible), or check FSH on a progestogen-only method (two levels ≥30 IU/L 6 weeks apart over 50 suggest one more year of contraception).',
          'Combined hormonal contraception can continue to 50 in healthy, non-smoking women without other VTE or cardiovascular risk. Switch to a non-oestrogen method after 50.',
          'MHT is not contraceptive, except when a 52 mg LNG-IUD is part of the regimen.',
        ],
      },
      {
        heading: 'Genitourinary syndrome and pelvic health',
        points: [
          'GSM (vulvovaginal atrophy) affects about half of postmenopausal women and is progressive without treatment, unlike hot flushes.',
          'Symptoms: dryness, burning, itch, dyspareunia, postcoital bleeding, urgency, frequency, recurrent UTIs. Examination shows pale, thin, dry mucosa with loss of rugae.',
          'First line: regular vaginal moisturisers (not only at intercourse) and lubricants for sex. Avoid soaps and irritants.',
          'Low-dose vaginal oestrogen (oestriol cream or pessary, oestradiol tablet or ring) daily for 2 weeks, then twice weekly. Systemic absorption is minimal. No progestogen is needed, and it can be used long term.',
          'Vaginal oestrogen reduces recurrent UTIs in postmenopausal women. Combine with pelvic floor physiotherapy for urinary symptoms and prolapse.',
        ],
      },
      {
        heading: 'Non-hormonal treatments in more detail',
        points: [
          'Fezolinetant 45 mg daily is a neurokinin-3 receptor antagonist that acts on the hypothalamic thermoregulatory centre. It reduces hot flush frequency by about 60%. Check LFTs at baseline and monthly for the first 3 months (rare liver injury). It is not PBS-subsidised for this indication, so cost is a barrier.',
          'SSRIs and SNRIs: escitalopram 10–20 mg, citalopram, venlafaxine 37.5–75 mg or desvenlafaxine 50–100 mg reduce flushes by about 40–60% within 2 weeks. They also help mood. Side effects include nausea and sexual dysfunction. Avoid paroxetine and fluoxetine with tamoxifen.',
          'Gabapentin 300–900 mg at night helps night sweats and sleep. Sedation and dizziness are common. Pregabalin has similar effects.',
          'Clonidine 50–75 microgram bd has modest benefit, and hypotension and dry mouth limit its use. Oxybutynin (off-label) reduces flushes but is anticholinergic, so avoid it in older women because of cognitive risk.',
          'Behavioural: CBT and clinical hypnosis have good evidence for reducing bother from flushes. Weight loss can help. Evidence for paced breathing, yoga and acupuncture is limited.',
          'Complementary products: evidence is weak for soy isoflavones, red clover, evening primrose oil and black cohosh (which has hepatotoxicity reports). Compounded "bioidentical" hormones are not recommended because dosing is unregulated and endometrial safety is unproven.',
        ],
      },
      {
        heading: 'Long-term health after menopause',
        points: [
          'Bone: bone loss accelerates for 5–10 years after menopause. Assess fracture risk (FRAX or Garvan calculators). DXA is Medicare-funded from 70, or earlier with risk factors or a minimal-trauma fracture. MHT, bisphosphonates and denosumab prevent fractures.',
          'Cardiovascular: LDL cholesterol rises and central adiposity increases. Use the Australian CVD risk calculator and ask about pregnancy complications and early menopause, which add risk.',
          'Weight and metabolism: many women gain weight, particularly around the waist. Resistance training preserves muscle and bone, and protein intake of about 1–1.2 g/kg a day helps.',
          'Mental health: the perimenopause carries a higher risk of new or recurrent depression. MHT can improve mood symptoms in perimenopause, but antidepressants remain first line for major depression.',
          'Cognition: short-term "brain fog" is common and usually improves. MHT is not recommended to prevent dementia.',
          'Pelvic floor: urinary incontinence and prolapse increase. Pelvic floor muscle training is first line, and vaginal oestrogen supports tissue health.',
        ],
      },
      {
        heading: 'Culturally safe and inclusive care',
        points: [
          'Beliefs about menopause, and the words used for it, vary across cultures. Some women do not see it as a medical issue, and symptoms may be reported differently (for example more musculoskeletal pain than flushes).',
          'Use professional interpreters, not family members, especially for sexual and genitourinary symptoms. Offer a female clinician if preferred.',
          'For First Nations women: yarning-style consultations, involving Aboriginal health workers, and recognising the higher burden of diabetes, CVD and kidney disease that affects MHT decisions.',
          'Trans and gender-diverse people may experience menopause-like symptoms (for example after gonadectomy or when stopping hormones), and need individualised hormone plans.',
          'Women with disability or intellectual disability may express symptoms through behaviour change. Involve carers appropriately and use easy-read materials.',
          'Workplace: flexible work, temperature control and understanding managers help. Consider a medical certificate or workplace letter if symptoms affect function.',
        ],
      },
    ],
    keyNumbers: [
      'Menopause: 12 months amenorrhoea; average age 51',
      'Early menopause 40–45; POI <40',
      'POI: FSH >25 IU/L with ≥4 months oligo/amenorrhoea',
      'Contraception: 12 months amenorrhoea >50, 24 months <50',
      'Micronised progesterone: 100 mg continuous / 200 mg × 12–14 days cyclical',
      'Transdermal oestrogen: no increase in VTE',
      'Postmenopausal bleeding: TVUS, endometrium >4 mm → refer',
      'Unscheduled bleeding on MHT beyond 6 months → investigate',
      'Vaginal oestrogen: daily × 2 weeks, then twice weekly',
      'Tibolone: avoid in women >60 with stroke risk',
    ],
    workedCase: {
      title: 'Calli – a new patient in perimenopause',
      paragraphs: [
        'Calli, 47, has irregular periods every 5–8 weeks, night sweats that wake her three times a night, and new anxiety at work. She smokes 5 cigarettes a day, her BMI is 31 and her BP is 132/84. Her mother had a DVT after surgery. She uses condoms.',
        'You diagnose perimenopause clinically (FSH is not needed at 47). You screen her mood, finding moderate anxiety with no suicidal ideation, and check TSH and FBC, which are normal. You discuss her options. Because she is still cycling and needs contraception, a 52 mg LNG-IUD plus transdermal oestradiol gel is ideal: it provides endometrial protection and contraception, and transdermal oestrogen avoids the extra VTE risk from her smoking, BMI and family history.',
        'You encourage smoking cessation and offer support, and you arrange CBT for anxiety and sleep. At 3 months her night sweats have almost resolved and her mood is better. You increase the gel dose slightly for residual flushes.',
        'Five years later Calli, now 52, has had no bleeding for 2 years (masked by the LNG-IUD). You replace the IUD for ongoing endometrial protection and continue MHT after an annual risk–benefit review, including her mammogram and CVD risk assessment.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Menopause management choices',
        lead: 'Choose the SINGLE most appropriate treatment for each woman.',
        options: [
          'Oral oestradiol alone',
          'Transdermal oestradiol alone',
          'Transdermal oestradiol + micronised progesterone (continuous)',
          'Oral oestradiol + cyclical progestogen',
          'Low-dose vaginal oestrogen',
          'Venlafaxine',
          'Paroxetine',
          'Fezolinetant',
          'COC pill',
          'Tibolone',
        ],
        items: [
          {
            stem: 'A 53-year-old, 2 years postmenopausal, intact uterus, BMI 35, severe hot flushes, no contraindications.',
            answer: 2,
          },
          {
            stem: 'A 49-year-old woman on tamoxifen after breast cancer with troublesome hot flushes.',
            answer: 5,
          },
          {
            stem: 'A 67-year-old with dyspareunia and recurrent UTIs; no vasomotor symptoms.',
            answer: 4,
          },
          {
            stem: 'A 52-year-old with a hysterectomy for fibroids (no endometriosis) and no VTE risk factors who prefers tablets.',
            answer: 0,
          },
        ],
      },
    ],
    kfp: [
      {
        title: 'Amelia is struggling with sleep',
        scenario:
          'Amelia, 51, has not had a period for 14 months. She wakes drenched in sweat most nights, is exhausted, and has had 12 hot flushes a day for 6 months. She has an intact uterus, BP 124/78, BMI 26 and is a non-smoker. Her sister had breast cancer at 48. Her last mammogram (8 months ago) was normal.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE issues are most important to clarify before recommending MHT?',
            options: [
              'Personal history of VTE, stroke or liver disease',
              'Details of her sister\'s breast cancer (age, genetic testing) and her own breast cancer risk',
              'Any abnormal or postmenopausal bleeding',
              'Serum FSH level',
              'Serum oestradiol level',
              'Bone density result',
            ],
            answers: [0, 1, 2],
            explanation: 'Contraindications and bleeding history matter. FSH and oestradiol do not help at 51 with 14 months of amenorrhoea.',
          },
          {
            kind: 'sba',
            context: 'Her sister tested negative for BRCA variants. Amelia has no contraindications and chooses MHT.',
            stem: 'Which regimen is most appropriate?',
            options: [
              'Oestradiol alone',
              'Continuous combined MHT (e.g. transdermal oestradiol + micronised progesterone 100 mg nightly)',
              'Cyclical combined MHT with monthly bleeds',
              'Combined oral contraceptive',
              'Testosterone cream',
            ],
            answer: 1,
            explanation: 'More than 12 months postmenopausal with a uterus: continuous combined therapy avoids monthly bleeds.',
          },
          {
            kind: 'sba',
            stem: 'Amelia asks about breast cancer risk with MHT. Which statement is most accurate?',
            options: [
              'MHT doubles breast cancer risk in all women',
              'Combined MHT causes a small increase in risk related to duration; oestrogen-only has little or no increase',
              'MHT has no effect on breast cancer risk',
              'Transdermal MHT removes all breast cancer risk',
              'MHT is contraindicated because of her family history',
            ],
            answer: 1,
          },
          {
            kind: 'sba',
            context: 'Seven months later she reports ongoing irregular spotting on MHT.',
            stem: 'What is the most appropriate next step?',
            options: [
              'Reassure – common in first year',
              'Transvaginal ultrasound and gynaecology referral for endometrial assessment',
              'Stop progesterone',
              'Double the oestrogen dose',
              'Cervical screening only',
            ],
            answer: 1,
            explanation: 'Bleeding persisting more than 6 months on continuous combined MHT needs endometrial assessment.',
          },
          {
            kind: 'emq',
            theme: 'Ongoing menopause care',
            lead: 'Choose the SINGLE best option for each issue at her annual review.',
            options: ['DXA scan', 'Mammogram every 2 years', 'Cervical screening HPV test every 5 years', 'CVD risk assessment', 'Stop MHT at age 55 regardless', 'Annual FSH level', 'Endometrial biopsy yearly'],
            items: [
              { stem: 'Breast cancer screening while on MHT', answer: 1 },
              { stem: 'She had a wrist fracture after tripping at 50', answer: 0 },
              { stem: 'Deciding how long to continue MHT', answer: 3, explanation: 'No arbitrary stop age. Review risks (including CVD) and benefits each year.' },
            ],
          },
        ],
      },
    ],
  },
  '634': {
    sections: [
      {
        heading: 'History and examination in detail',
        points: [
          'Ask about onset and triggers (puberty, pregnancy, menopause, hormonal contraception), family history (often maternal), and the disproportion between upper and lower body despite dieting.',
          'Symptoms: heaviness, aching, spontaneous pain or pain on pressure, easy bruising, swelling worse at the end of the day and in heat, fatigue, and difficulty with clothing or seating.',
          'Examine: symmetrical fat distribution, cuff sign at the ankles and wrists, nodular or "beanbag" texture of the subcutaneous tissue, tenderness, cool skin, knee fat pads, gait, and joint hypermobility (Beighton score).',
          'Pitting is minimal in pure lipoedema. Oedema that pits, and a positive Stemmer sign, suggest lymphatic involvement (lipolymphoedema) or another cause.',
          'Measure and record weight, BMI, waist-to-height ratio, and limb circumferences or photographs to monitor progression. BMI overestimates adiposity-related metabolic risk in lipoedema.',
        ],
      },
      {
        heading: 'Distinguishing lipoedema from its mimics',
        points: [
          'Obesity: fat is generally more even, feet are involved, it is not usually tender, and it responds to calorie deficit. It often coexists with lipoedema.',
          'Primary or secondary lymphoedema: often unilateral or asymmetric, involves the dorsum of the foot, positive Stemmer sign, pitting early, skin thickening later. Secondary causes include cancer treatment, lymph node surgery, infection and filariasis.',
          'Chronic venous insufficiency: varicose veins, haemosiderin staining, lipodermatosclerosis, venous ulcers. Venous duplex confirms it. It may coexist with lipoedema.',
          'Other causes of leg swelling: heart failure, renal or hepatic disease (hypoalbuminaemia), hypothyroidism (myxoedema), and medicines (calcium channel blockers, pioglitazone, NSAIDs, gabapentinoids, steroids).',
          'Rare mimics: Dercum disease (painful lipomas), multiple symmetric lipomatosis (Madelung disease, often in men with alcohol use), and Cushing syndrome (central fat, striae, proximal weakness).',
        ],
      },
      {
        heading: 'Compression and physical therapies',
        points: [
          'Compression reduces pain, heaviness and bruising, and helps any lymphatic component. It does not reduce lipoedema fat.',
          'Garment choice: circular-knit (off-the-shelf) for early stages with regular limb shape; flat-knit custom garments for larger, irregular limbs or lipolymphoedema, where they avoid cutting into skin folds.',
          'Check the arterial supply (ABI) before prescribing high compression, particularly with diabetes or risk factors for peripheral arterial disease.',
          'Refer to a lymphoedema practitioner for fitting and complete decongestive therapy when there is lymphoedema. Some states have garment subsidy schemes.',
          'Exercise that suits lipoedema: water-based exercise (hydrostatic pressure acts as compression), cycling, walking, and strength training. Tailor for joint pain and hypermobility.',
          'Pneumatic compression devices and manual lymphatic drainage give symptomatic relief in some patients.',
        ],
      },
      {
        heading: 'Nutrition and weight management',
        points: [
          'The goal is to treat any coexisting obesity and metabolic disease and to prevent progression, not to "diet away" lipoedema tissue. Framing it this way reduces shame and yo-yo dieting.',
          'Anti-inflammatory, whole-food eating patterns (Mediterranean-style, lower in refined carbohydrate) have limited but reasonable support. Refer to a dietitian experienced in lipoedema where available.',
          'Screen for disordered eating (SCOFF) and binge eating before prescribing restrictive diets. Many women have a long history of failed diets.',
          'Obesity pharmacotherapy (GLP-1 RA, tirzepatide) and bariatric surgery reduce overall adiposity and improve mobility in women with coexisting obesity, though disproportionate leg tissue persists.',
          'Monitor for insulin resistance, dyslipidaemia, fatty liver and sleep apnoea when obesity coexists.',
        ],
      },
      {
        heading: 'Surgery',
        points: [
          'Lymph-sparing liposuction (tumescent local anaesthesia or water-assisted liposuction) can reduce volume, pain and bruising and improve mobility in selected patients, usually in several staged procedures.',
          'It is considered when conservative therapy has been optimised for at least 6–12 months, symptoms significantly impair function, and the patient has realistic expectations and a stable weight.',
          'Risks: bleeding, infection, lymphatic injury, contour irregularity, anaesthesia risks, and fat embolism (rare). Ongoing compression is needed afterwards.',
          'Medicare funding is restricted and costs can be high. Advise patients to seek surgeons with specific lipoedema expertise and appropriate endorsement.',
          'Excess skin removal (dermolipectomy) and knee joint surgery may follow for advanced disease.',
        ],
      },
      {
        heading: 'Psychosocial and socioeconomic impact',
        points: [
          'Women with lipoedema report high rates of depression, anxiety, body image distress and eating disorders, often after years of being told they simply need to lose weight.',
          'Weight stigma from clinicians is common and harmful. Use neutral language, validate symptoms and focus on function and wellbeing.',
          'Impacts on work (standing jobs, pain), clothing, seating, travel and intimacy are common. Ask about them directly.',
          'Support: psychology via a Mental Health Treatment Plan, peer support groups (for example Lipoedema Australia), and occupational therapy for aids. NDIS may apply in severe disability.',
          'Costs of garments, allied health and surgery are significant. A Chronic Condition Management Plan helps with allied health access.',
        ],
      },
      {
        heading: 'Pathophysiology and natural history',
        points: [
          'The cause is not fully understood. Proposed mechanisms include genetic susceptibility (often maternal inheritance), oestrogen-driven adipocyte hypertrophy and hyperplasia, microvascular fragility (hence bruising), low-grade inflammation, and lymphatic dysfunction that becomes more significant as the disease advances.',
          'Lipoedema adipose tissue resists caloric restriction and bariatric surgery more than ordinary subcutaneous fat, which explains the disproportion that persists after weight loss.',
          'It usually progresses slowly, often in steps at hormonal transitions. Stages do not always follow in sequence, and early intervention may slow progression.',
          'Estimated prevalence varies widely (from about 1 in 1000 to 1 in 10 women) because of under-recognition and inconsistent criteria. It is recognised in the WHO ICD-11 classification.',
          'Men are only rarely affected, usually with hormonal disturbance (for example hypogonadism or liver disease).',
        ],
      },
      {
        heading: 'Pain and medicines',
        points: [
          'Pain has nociceptive, inflammatory and sometimes neuropathic features. It is often worse with heat, standing and the menstrual cycle.',
          'Simple analgesia first (paracetamol, short courses of NSAIDs if safe). Avoid long-term opioids, which carry dependence risk without clear benefit.',
          'Neuropathic-type pain: low-dose amitriptyline or duloxetine may help, and duloxetine also treats coexisting depression.',
          'No medicine is proven to reduce lipoedema tissue. Some clinicians trial metformin (insulin resistance), selenium or anti-inflammatory diets, but the evidence is limited, so discuss this honestly.',
          'Review medicines that promote weight gain or oedema (such as some antidepressants, antipsychotics, pioglitazone, calcium channel blockers, pregabalin and steroids) and swap where possible.',
          'Hormonal contraception: some women notice worsening with oestrogen-containing methods. Consider progestogen-only or non-hormonal options if symptoms flare.',
        ],
      },
      {
        heading: 'Joint, mobility and skin care',
        points: [
          'Knee valgus and medial knee fat pads alter gait and load, which causes knee pain and early osteoarthritis. Refer to physiotherapy for strengthening and gait retraining, and to podiatry for footwear.',
          'Joint hypermobility (for example hypermobile Ehlers-Danlos syndrome) is overrepresented. Tailor exercise to protect joints.',
          'Skin care: daily moisturiser, careful drying between the toes, prompt treatment of tinea, and protection from cuts and insect bites to prevent cellulitis.',
          'Falls risk increases with advanced stages and reduced proprioception. An OT assessment can provide aids (shower chairs, wider seating).',
          'Keep up with vaccinations and manage diabetes well if present, as both reduce skin infection risk.',
        ],
      },
      {
        heading: 'Ongoing care plan in general practice',
        points: [
          'Document the diagnosis, stage and type, with photographs and circumference measurements at baseline to track change over time.',
          'Review every 6–12 months: symptoms, pain, function, mood, weight and metabolic health, skin integrity and cellulitis episodes, compression fit (garments usually need replacing every 6 months), and progress with exercise.',
          'Coordinate the team: lymphoedema practitioner, physiotherapist or exercise physiologist, dietitian, psychologist, podiatrist, and surgical opinion when appropriate.',
          'Before pregnancy, discuss the possibility of progression and plan compression and activity during and after pregnancy.',
          'Around menopause, symptoms may worsen. Weight-bearing exercise and bone health become priorities. MHT is not contraindicated by lipoedema, and transdermal oestrogen is a reasonable choice.',
          'Advocate for the patient\'s needs, for example letters for workplace adjustments, garment funding applications, and insurance or surgical referrals.',
        ],
      },
    ],
    keyNumbers: [
      'Almost exclusively affects women',
      'Stemmer sign: negative in lipoedema, positive in lymphoedema',
      'Feet spared: "cuff sign" at ankles',
      'Stages 1–4 (4 = lipolymphoedema); types I–V by location',
      'Cellulitis prophylaxis after ≥2 episodes/year',
      'Check ABI before high compression',
      'Diuretics do not help lipoedema',
      'Liposuction: after 6–12 months optimised conservative care',
    ],
    workedCase: {
      title: 'Abby cannot work because of heavy, painful legs',
      paragraphs: [
        'Abby, 38, is a hairdresser who stands all day. She has had disproportionately large, tender legs since her first pregnancy, and they have worsened over 5 years. She bruises easily and now leaves work early because of pain. Her BMI is 36, but her upper body is slim. Examination shows symmetrical nodular fat from hips to ankles with a cuff sign, and a negative Stemmer sign.',
        'You explain that this is lipoedema, a recognised condition that is not caused by overeating. Abby cries with relief. You screen for depression (PHQ-9 is 14, moderate) and binge eating (negative). Bloods show normal TSH, renal and liver function, and an HbA1c of 41 mmol/mol.',
        'Your plan: a Chronic Condition Management Plan with referral to a lymphoedema therapist for flat-knit compression, an exercise physiologist for an aqua program, and a dietitian. You also make a Mental Health Treatment Plan for psychology. You discuss workplace adjustments such as a saddle stool and breaks.',
        'At 6 months her pain has improved and she is back at full-time work. Her mood is better. She asks about surgery, and you refer her to a surgeon experienced in lymph-sparing liposuction, with realistic expectations discussed.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Causes of leg swelling',
        lead: 'Choose the SINGLE most likely diagnosis for each patient.',
        options: [
          'Lipoedema',
          'Primary lymphoedema',
          'Secondary lymphoedema',
          'Chronic venous insufficiency',
          'Deep vein thrombosis',
          'Heart failure',
          'Drug-induced oedema',
          'Hypothyroidism',
          'Simple obesity',
        ],
        items: [
          { stem: 'A 60-year-old woman with swelling of the right arm 2 years after axillary node dissection for breast cancer.', answer: 2 },
          { stem: 'A 70-year-old man who started amlodipine 10 mg 2 months ago has bilateral ankle oedema.', answer: 6 },
          { stem: 'A 25-year-old woman with painful, symmetrical fat on both legs since puberty, sparing the feet.', answer: 0 },
          { stem: 'A 55-year-old with varicose veins, brown skin staining around the ankles and a shallow medial malleolar ulcer.', answer: 3 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Sandra has recurrent cellulitis',
        scenario:
          'Sandra, 56, has stage 3 lipoedema. Over the last few years her feet have also started to swell. She presents with her third episode of left leg cellulitis this year: fever 38.4 °C, spreading erythema from the ankle to mid-calf, and maceration between her toes.',
        questions: [
          {
            kind: 'sba',
            stem: 'Her feet now swell and the Stemmer sign is positive. What does this indicate?',
            options: ['Deep vein thrombosis', 'Progression to lipolymphoedema', 'Heart failure', 'Resolution of lipoedema', 'Drug-induced oedema'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which THREE are most important in managing today\'s episode?',
            options: [
              'Oral antibiotic such as cephalexin or flucloxacillin (IV if systemically unwell)',
              'Treat interdigital tinea',
              'Mark the erythema border and review in 24–48 hours',
              'Diuretics to reduce swelling',
              'Stop compression permanently',
              'Topical steroid to the leg',
            ],
            answers: [0, 1, 2],
            explanation: 'Treat the infection, remove the portal of entry (tinea) and monitor. Compression is usually paused only while acute pain limits it, then resumed.',
          },
          {
            kind: 'sba',
            context: 'The cellulitis resolves.',
            stem: 'What is the most appropriate step to prevent further episodes?',
            options: [
              'Long-term prophylactic phenoxymethylpenicillin plus skin care and lymphoedema management',
              'Monthly IV ceftriaxone',
              'No action – cellulitis is random',
              'Oral fluconazole weekly for life',
              'Liposuction immediately',
            ],
            answer: 0,
            explanation: 'With 2 or more episodes a year, antibiotic prophylaxis reduces recurrence. Also address lymphoedema and skin integrity.',
          },
          {
            kind: 'multi',
            stem: 'Which TWO referrals are most appropriate for her lipolymphoedema?',
            options: [
              'Lymphoedema therapist for complete decongestive therapy and flat-knit compression',
              'Vascular or lymphatic specialist review (venous duplex and lymphatic assessment as indicated)',
              'Cardiothoracic surgery',
              'Psychiatric admission',
              'Rheumatology for gout',
            ],
            answers: [0, 1],
          },
          {
            kind: 'sba',
            stem: 'Sandra asks for "water tablets" to reduce her leg size. What is the best response?',
            options: [
              'Prescribe furosemide 40 mg daily',
              'Explain diuretics do not reduce lipoedema tissue and can cause harm; focus on compression, exercise and skin care',
              'Prescribe spironolactone',
              'Prescribe hydrochlorothiazide',
              'Refer for dialysis',
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
  '633': {
    sections: [
      {
        heading: 'Options counselling and decision-making',
        points: [
          'Begin with open questions about how the person feels about the pregnancy. Avoid assumptions based on age, relationship or culture.',
          'Provide balanced information on continuing the pregnancy (parenting, kinship care, adoption), medical abortion, and surgical abortion (suction aspiration, usually up to 12–14 weeks in day surgery).',
          'Screen privately for reproductive coercion and family violence: partner or family pressure to continue or end a pregnancy, contraceptive sabotage.',
          'Decision-making capacity: adults and mature minors can consent. Parental involvement is encouraged but not required for a competent minor. Document the assessment.',
          'Offer referral for pregnancy options counselling (for example through 1800 My Options in Victoria, or state services) if the person is undecided. Counselling is not mandatory.',
          'If you conscientiously object, you must tell the patient promptly and refer them to a provider who does not object (a legal requirement in most jurisdictions), without delay that could harm them.',
        ],
      },
      {
        heading: 'Confirming gestation and excluding ectopic pregnancy',
        points: [
          'Gestation is calculated from the first day of the LMP when cycles are regular and dates are certain. Otherwise use ultrasound (crown–rump length).',
          'Ectopic risk factors: previous ectopic, tubal surgery or sterilisation, PID, IUD in situ, assisted reproduction, smoking. Symptoms of pain or bleeding also increase suspicion.',
          'If no ultrasound is available (common in rural and telehealth models), a "no-test" pathway may be used when dates are certain and there are no risk factors or symptoms, with a baseline β-hCG and a planned follow-up hCG.',
          'Pregnancy of unknown location (positive hCG, no intrauterine pregnancy seen): do not assume a failed intrauterine pregnancy. Follow serial hCG and seek early pregnancy unit advice. Mifepristone does not treat ectopic pregnancy.',
          'The MS-2Step limit is 63 days (9 weeks). Beyond this, refer for surgical or later medical abortion through a specialist service.',
        ],
      },
      {
        heading: 'Practical prescribing and patient information',
        points: [
          'MS-2Step can be prescribed by appropriately qualified medical practitioners and nurse practitioners and dispensed by community pharmacists. Registration requirements were removed in 2023.',
          'Mifepristone 200 mg is taken orally in the clinic or at home. Misoprostol 800 microgram (4 × 200 microgram) is placed buccally 24–48 hours later, held for 30 minutes, and the remnants swallowed.',
          'Analgesia: ibuprofen 400–800 mg taken 30–60 minutes before misoprostol and 6–8 hourly, with paracetamol. Stronger analgesia (for example paracetamol–codeine) may be offered for some.',
          'Common effects: cramping, bleeding heavier than a period with clots for several hours, then lighter bleeding for up to 2–4 weeks. Nausea, vomiting, diarrhoea, chills and fever lasting up to 24 hours from misoprostol are expected.',
          'Give written information including when to seek urgent help, a 24-hour support number, and advice not to travel far from medical care on misoprostol day.',
          'Anti-D: recent Australian and international guidance no longer routinely recommends Rh D immunoglobulin for medical abortion under 10 weeks. Check local protocol.',
        ],
      },
      {
        heading: 'Follow-up and confirming completion',
        points: [
          'Options: serum β-hCG at baseline and 7–14 days (a fall of ≥80% indicates success), a low-sensitivity urine pregnancy test at 3–4 weeks, or ultrasound. Telehealth follow-up is appropriate.',
          'A standard high-sensitivity urine test can stay positive for several weeks after a successful abortion, so do not use it alone early.',
          'Ongoing pregnancy (about 1–2%): arrange surgical abortion or a repeat regimen. If the person decides to continue the pregnancy, discuss the teratogenic risk of misoprostol (Möbius syndrome, limb defects).',
          'Incomplete abortion (heavy or prolonged bleeding, retained tissue on ultrasound with symptoms): repeat misoprostol, expectant management, or aspiration.',
          'Emotional support: most people feel relief, but some experience grief or distress. Offer follow-up and counselling if needed.',
        ],
      },
      {
        heading: 'Complications and when to escalate',
        points: [
          'Haemorrhage: soaking ≥2 thick pads an hour for 2 consecutive hours, dizziness or syncope. Needs urgent assessment and possible uterine aspiration or transfusion. Rates are low (<1%).',
          'Infection: fever or chills more than 24 hours after misoprostol, offensive discharge, pelvic pain, uterine tenderness. Treat as endometritis (for example amoxicillin–clavulanate, or per Therapeutic Guidelines), with evacuation if retained products are present.',
          'Rare toxic shock (Clostridium sordellii): severe malaise, tachycardia, hypotension and abdominal pain, often WITHOUT fever. This is an emergency.',
          'Ectopic pregnancy missed at baseline: persistent unilateral pain, shoulder tip pain, hCG plateau. Needs urgent ultrasound and gynaecology.',
          'Serious complications requiring hospital care occur in under 1% of early medical abortions. EMA is safer than continuing a pregnancy to term.',
        ],
      },
      {
        heading: 'Contraception after medical abortion',
        points: [
          'Fertility returns quickly. Ovulation can occur within 8–14 days, so discuss contraception at the first consultation and start it early.',
          'Implant: insert on the day of mifepristone. This does not reduce EMA efficacy and has the highest continuation rates.',
          'DMPA: can be given on the day of mifepristone, but may slightly increase the ongoing pregnancy rate. Some services give it on misoprostol day or after confirming success.',
          'Combined pill, patch, ring and progestogen-only pill: start on the day of misoprostol or within the next 5 days (no back-up needed if started within 5 days).',
          'IUD (copper or LNG): insert once the abortion is confirmed complete, for example at the follow-up visit or within about 1–2 weeks. Arrange this proactively to avoid a gap.',
          'Offer an STI screen and cervical screening if due. Discuss emergency contraception access for the future.',
        ],
      },
      {
        heading: 'Legal framework and access',
        points: [
          'Abortion is lawful in every Australian state and territory. Gestational limits for abortion on request (without additional approvals) vary, from about 16 weeks to 24 weeks depending on jurisdiction, with later abortion requiring additional medical approval.',
          'Safe access zones around abortion providers exist in all jurisdictions to protect patients and staff from harassment.',
          'Access barriers include cost (medicines are PBS-listed, but consultations and ultrasound may incur fees), distance, the few rural prescribers, and stigma. Telehealth EMA services (for example national telehealth providers) improve access.',
          'GPs can provide EMA with training (for example free online modules from sexual health organisations). Pharmacist dispensing no longer requires registration.',
          'Know your local referral pathways for surgical abortion, later-gestation care and public hospital services before a patient needs them.',
        ],
      },
      {
        heading: 'Surgical abortion and later gestation',
        points: [
          'Suction (vacuum) aspiration is usually performed up to about 12–14 weeks, often under light sedation or local anaesthesia as a day procedure. Success is over 99%.',
          'Cervical priming with misoprostol (or mifepristone) before the procedure reduces cervical injury in some cases.',
          'Surgical abortion is preferred by some for its speed, predictability and completion in one visit. It may be chosen when EMA is contraindicated or unsuccessful.',
          'Later abortions (second trimester) use dilation and evacuation or medical induction (mifepristone followed by repeated misoprostol) in hospital or specialist services.',
          'Complications of surgical abortion (rare): infection, haemorrhage, retained tissue, uterine perforation, cervical injury. Antibiotic prophylaxis is routine.',
        ],
      },
      {
        heading: 'Special situations',
        points: [
          'Breastfeeding: mifepristone and misoprostol are compatible with breastfeeding. Brief interruption is not required, though some guidance suggests timing feeds.',
          'Previous caesarean section is not a contraindication to EMA in the first trimester.',
          'Multiple pregnancy and obesity: MS-2Step can be used. Follow-up with β-hCG or ultrasound as usual.',
          'Anaemia: check Hb if clinically anaemic. Severe anaemia (for example Hb <95 g/L) may favour surgical abortion or careful planning, given bleeding.',
          'People living remotely: a plan for emergency access, with consideration of distance from a hospital on misoprostol day.',
          'Young people: involve a trusted adult where possible, but a competent minor\'s consent is valid. Check for exploitation or abuse, with mandatory reporting where indicated.',
        ],
      },
    ],
    keyNumbers: [
      'MS-2Step up to 63 days (9 weeks) gestation',
      'Mifepristone 200 mg PO → misoprostol 800 µg buccal 24–48 h later',
      'Success: β-hCG fall ≥80% at 7–14 days',
      'Low-sensitivity urine test at 3–4 weeks',
      'Ongoing pregnancy ≈ 1–2%',
      'Haemorrhage: ≥2 pads/hour for 2 hours',
      'Fever >24 h after misoprostol = possible infection',
      'Ovulation may return within 2 weeks',
      'Implant: same day as mifepristone',
      'Anti-D not routinely needed <10 weeks (check local protocol)',
    ],
    workedCase: {
      title: 'Joyce wants privacy',
      paragraphs: [
        'Joyce, 16, attends alone, 6 weeks after her LMP, with a positive home pregnancy test. She is certain she does not want to continue the pregnancy and does not want her parents to know. Her boyfriend is 17 and the relationship is consensual. She uses her own Medicare card.',
        'You assess her as a mature minor. She understands the options, the procedure, the risks and the alternatives, and she has considered the implications. You explore support, and she names her older sister. You screen for coercion and abuse, and there is none. The partner\'s age raises no reporting concerns. You explain confidentiality and its limits.',
        'Her dates are certain and she has no pain, bleeding or ectopic risk factors. You arrange a dating ultrasound (6+2 weeks, intrauterine) and baseline β-hCG, and prescribe MS-2Step with ibuprofen and an antiemetic. She chooses an implant inserted on the day of mifepristone. You give written information, a 24-hour number, and advice to have her sister with her on misoprostol day.',
        'At the 2-week telehealth follow-up her β-hCG has fallen by 92%. Bleeding is settling, and she feels relieved. You arrange an STI screen and remind her she can contact you any time.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Timing of contraception after early medical abortion',
        lead: 'For each method, choose the SINGLE earliest recommended starting time.',
        options: [
          'Day of mifepristone',
          'Day of misoprostol (or within 5 days)',
          'Once abortion is confirmed complete',
          'After the next period',
          'Six weeks after the abortion',
          'Contraindicated after abortion',
        ],
        items: [
          { stem: 'Etonogestrel implant', answer: 0 },
          { stem: 'Combined oral contraceptive pill', answer: 1 },
          { stem: 'Copper IUD', answer: 2 },
          { stem: 'Vaginal ring', answer: 1 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Kahira is considering her options',
        scenario:
          'Kahira, 29, has a positive pregnancy test. Her LMP was 7 weeks ago but her cycles are irregular. She has had one previous episode of pelvic inflammatory disease. She is unsure whether to continue the pregnancy. She attends with her partner, who does most of the talking.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE actions are most important at this first consultation?',
            options: [
              'See Kahira alone for part of the consultation and screen for coercion or violence',
              'Provide non-directive information on all pregnancy options',
              'Arrange ultrasound to confirm location and gestation',
              'Prescribe MS-2Step today before ultrasound',
              'Advise that counselling is mandatory before abortion',
              'Ask her partner to make the decision',
            ],
            answers: [0, 1, 2],
            explanation: 'Irregular cycles and prior PID mean ultrasound is needed. Counselling is offered, not mandated.',
          },
          {
            kind: 'sba',
            context: 'Ultrasound shows an empty uterus with no adnexal mass. Serum β-hCG is 1,800 IU/L. She has mild left-sided pain.',
            stem: 'What is the most appropriate next step?',
            options: [
              'Prescribe MS-2Step',
              'Manage as a pregnancy of unknown location – repeat β-hCG in 48 hours with early pregnancy unit/gynaecology advice and strict safety-netting',
              'Reassure – too early to see',
              'Diagnose complete miscarriage',
              'Start methotrexate in general practice',
            ],
            answer: 1,
            explanation: 'Ectopic pregnancy must be excluded. Mifepristone does not treat ectopic pregnancy.',
          },
          {
            kind: 'sba',
            context: 'Repeat β-hCG rises appropriately, and a repeat ultrasound confirms a 6-week intrauterine pregnancy. Kahira decides on medical abortion.',
            stem: 'Which regimen is correct?',
            options: [
              'Misoprostol 800 µg alone',
              'Mifepristone 200 mg orally, then misoprostol 800 µg buccally 24–48 hours later',
              'Mifepristone 600 mg and misoprostol same day vaginal 400 µg',
              'Methotrexate IM',
              'Misoprostol first, then mifepristone',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which THREE symptoms after misoprostol should prompt urgent review?',
            options: [
              'Soaking ≥2 thick pads an hour for 2 consecutive hours',
              'Fever persisting more than 24 hours after misoprostol',
              'Severe malaise, tachycardia or fainting',
              'Cramping and clots in the first 4–6 hours',
              'Chills on the day of misoprostol',
              'Light bleeding for 2 weeks',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'Kahira wants an LNG-IUD. When should it be inserted?',
            options: [
              'On the day of mifepristone',
              'Once the abortion is confirmed complete',
              'After 3 months',
              'Only after a normal period',
              'IUDs are contraindicated after abortion',
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
}

export default extra
