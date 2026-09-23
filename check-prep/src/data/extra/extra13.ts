import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  '606': {
    sections: [
      {
        heading: 'Engaging men in healthcare',
        points: [
          'Men visit GPs less often, present later, and have lower life expectancy (about 4 years less than women). About three-quarters of suicides are male.',
          'Barriers: stoicism, "she\'ll be right" attitudes, work hours, embarrassment, and preference for problem-focused visits.',
          'Strategies: opportunistic prevention during any visit, a direct and practical style, flexible and telehealth appointments, and men\'s health checks framed around performance and family.',
          'Useful "doorways": sexual health, erectile dysfunction, sports injuries, fatigue, work medicals and relationship problems can open broader conversations.',
          'Community programs: men\'s sheds, sporting club health programs, workplace health checks, and Aboriginal men\'s groups.',
        ],
      },
      {
        heading: 'Fatigue and low testosterone',
        points: [
          'Fatigue in men: consider depression, OSA, alcohol, diabetes, thyroid disease, anaemia, haemochromatosis, medicines (opioids, β-blockers), shift work and overwork before blaming low testosterone.',
          'Test testosterone only with suggestive symptoms (low libido, ED, reduced morning erections, gynaecomastia, small testes, loss of body hair, low-trauma fracture). Use a fasting morning sample (before 10 am). Repeat if low, and add LH and FSH.',
          'Obesity, T2D, acute illness, opioids and glucocorticoids lower testosterone (functional hypogonadism). Treat the cause first. Weight loss raises testosterone.',
          'PBS testosterone for men requires documented pathological hypogonadism (testicular or pituitary disease), with specialist involvement for some criteria, or confirmed low levels with LH or FSH criteria.',
          'Testosterone therapy risks: erythrocytosis, reduced fertility, acne, sleep apnoea worsening, prostate monitoring (PSA per age). Contraindications include prostate or breast cancer and untreated severe OSA.',
        ],
      },
      {
        heading: 'Klinefelter syndrome',
        points: [
          '47,XXY (or mosaic) affects about 1 in 600 males. It is under-diagnosed, and many are never diagnosed or are identified only through infertility.',
          'Features: small firm testes (<4 mL in adults), tall stature with long legs, gynaecomastia, reduced facial and body hair, learning and language difficulties, anxiety, and ADHD traits.',
          'Labs: low or normal testosterone with high LH and FSH (hypergonadotrophic hypogonadism). Karyotype confirms.',
          'Associated risks: osteoporosis, T2D and metabolic syndrome, VTE, autoimmune disease (SLE), breast cancer (increased relative risk), mediastinal germ cell tumours.',
          'Management: testosterone replacement at puberty or when diagnosed (after fertility planning), bone density monitoring, psychological and educational support, and fertility referral (micro-TESE with ICSI can achieve biological children).',
          'Offer genetic counselling. Klinefelter is usually a sporadic non-disjunction event, not inherited.',
        ],
      },
      {
        heading: 'Male infertility assessment',
        points: [
          'Assess the couple together. Male factors contribute to about 40–50% of infertility.',
          'History: duration of trying, sexual function and timing, previous paternity, childhood issues (undescended testes, mumps orchitis, testicular torsion), surgery (hernia, vasectomy), chemotherapy or radiotherapy, STIs, medicines (testosterone, anabolic steroids, SSRIs, 5-ARIs, sulfasalazine), heat exposure, smoking, alcohol and cannabis.',
          'Examination: BMI, virilisation, gynaecomastia, testicular volume (orchidometer), consistency, masses, varicocele (examine standing), and presence of both vasa.',
          'Semen analysis (WHO criteria): volume ≥1.4 mL, concentration ≥16 million/mL, progressive motility ≥30%, normal forms ≥4%. Repeat abnormal results after 6–12 weeks.',
          'Further tests for abnormal results: FSH, LH, testosterone, prolactin, karyotype and Y microdeletion (for severe oligospermia or azoospermia), CFTR (absent vas), and scrotal ultrasound.',
          'Lifestyle: stop smoking, reduce alcohol, avoid anabolic steroids and testosterone, lose weight, avoid heat (saunas, laptops on lap), and consider antioxidants (limited evidence).',
        ],
      },
      {
        heading: 'Anabolic steroid use and cessation',
        points: [
          'Anabolic–androgenic steroids (AAS) are used for muscle building, appearance and sport. Many users also take other "performance and image enhancing drugs" (PIEDs): hCG, clomiphene, aromatase inhibitors, growth hormone, insulin, SARMs, diuretics, stimulants.',
          'Harms: cardiovascular (hypertension, dyslipidaemia with very low HDL, cardiomyopathy, thrombosis), polycythaemia, liver (oral agents: cholestasis, adenomas), acne, gynaecomastia, testicular atrophy, infertility, mood changes (irritability, aggression, depression on cessation), dependence.',
          'Harm reduction: sterile injecting equipment (NSPs), BBV testing, BP, lipid, Hct and LFT monitoring, and avoiding stacking and high doses. A non-judgemental approach keeps users engaged.',
          'Cessation: HPG axis recovery may take months to over a year. Symptoms include fatigue, low libido, ED and depression (with suicide risk). Endocrinology may use clomiphene or hCG to aid recovery. Monitor mood closely.',
          'Explore motivations such as body image and muscle dysmorphia, sporting pressure and social media influences.',
        ],
      },
      {
        heading: 'Body dysmorphia in men',
        points: [
          'Body dysmorphic disorder: preoccupation with perceived flaws that are slight or not visible to others, with repetitive behaviours (mirror checking, grooming, comparing, seeking reassurance) and distress or impairment.',
          'Muscle dysmorphia: belief that one\'s body is too small or not muscular enough. Features include excessive training, rigid diets, AAS use, avoiding situations where the body is seen, and continuing despite injury.',
          'Screen with questions such as "Are you worried about how you look?" and "How much time do you spend thinking about it?" The BDDQ or MDDI are screening tools.',
          'Treatment: CBT for BDD (exposure and response prevention) and SSRIs (often higher doses). Address AAS use and eating disorders.',
          'Suicide risk in BDD is high. Assess it directly.',
        ],
      },
      {
        heading: 'Care for Aboriginal and Torres Strait Islander men',
        points: [
          'Aboriginal and Torres Strait Islander men have a life expectancy about 8–9 years lower than other Australian men, with high rates of CVD, diabetes, kidney disease and suicide.',
          'MBS 715 health assessment: annual comprehensive check. It enables follow-up allied health items (up to 10 services a year) and practice nurse or Aboriginal health worker follow-up items.',
          'Closing the Gap PBS co-payment program: reduced or no co-payments for eligible patients, registered through the practice.',
          'Culturally safe practice: male clinicians or Aboriginal health workers for men\'s business where preferred, yarning, involving family, flexible appointments and outreach.',
          'Link with ACCHOs, men\'s groups, and social and emotional wellbeing programs.',
        ],
      },
    ],
    keyNumbers: [
      'Klinefelter: 47,XXY; ~1 in 600 males',
      'Testosterone: fasting sample before 10 am, repeat if low',
      'Semen: ≥16 million/mL, progressive motility ≥30%, normal forms ≥4%',
      'Hct >0.54 on testosterone: stop or reduce',
      '715 health assessment: annual; up to 10 allied health follow-ups',
      'Male suicide: ~3 in 4 suicides',
      'HPG axis recovery after AAS: months to >1 year',
    ],
    workedCase: {
      title: 'Adam and Louise are seeking fertility assistance',
      paragraphs: [
        'Adam, 34, and Louise, 32, have been trying to conceive for 14 months. Louise\'s investigations so far are normal. Adam is a personal trainer who used "a couple of cycles" of injectable testosterone 2 years ago and still takes a "natural testosterone booster". He smokes cannabis on weekends.',
        'Examination shows small soft testes (about 10 mL each) and no varicocele. Both vasa are present. His semen analysis shows 2 million/mL with poor motility. Testosterone is low-normal, and LH and FSH are low-normal (suggesting suppression).',
        'You explain that past AAS use and some supplements (which may contain undeclared androgens) can suppress sperm production for a long time. You advise stopping the supplement and cannabis, and you repeat the semen analysis in 3 months.',
        'You refer the couple to a fertility specialist and andrologist. Adam is treated with hCG to stimulate spermatogenesis, and at 6 months his count has improved to 18 million/mL. You also screen his mood and body image concerns, and he is referred to a psychologist for muscle dysmorphia traits.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Male hypogonadism and infertility',
        lead: 'Choose the SINGLE most likely cause for each man.',
        options: [
          'Klinefelter syndrome',
          'Exogenous anabolic steroid use',
          'Prolactinoma',
          'Obesity-related functional hypogonadism',
          'Congenital bilateral absence of the vas deferens (CFTR)',
          'Varicocele',
          'Kallmann syndrome',
          'Haemochromatosis',
        ],
        items: [
          { stem: 'An 18-year-old with delayed puberty, anosmia and low LH/FSH.', answer: 6 },
          { stem: 'A 45-year-old with low testosterone, headaches, bitemporal visual field loss and galactorrhoea.', answer: 2 },
          { stem: 'A 50-year-old with low testosterone, bronze skin, diabetes, arthritis of the 2nd/3rd MCP joints and raised ferritin.', answer: 7 },
          { stem: 'A 30-year-old bodybuilder with azoospermia, testicular atrophy and suppressed LH/FSH.', answer: 1 },
        ],
      },
    ],
    kfp: [
      {
        title: 'James is persistently tired',
        scenario:
          'James, 52, is a truck driver with BMI 36, type 2 diabetes and hypertension. He reports tiredness, low libido and erectile dysfunction, and asks for testosterone after seeing an online advertisement. His wife says he snores loudly and stops breathing at night.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE initial investigations are most appropriate?',
            options: [
              'Fasting morning total testosterone (repeat if low) with LH/FSH',
              'HbA1c, lipids, FBC, ferritin, TSH',
              'Sleep study (OSA assessment)',
              'Testicular biopsy',
              'Karyotype',
              'Brain MRI',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            context: 'Testosterone is mildly low twice, LH is normal. A sleep study shows severe OSA.',
            stem: 'What is the most appropriate management?',
            options: [
              'Start testosterone injections',
              'Treat OSA (CPAP), weight loss and diabetes optimisation, then recheck testosterone',
              'Clomiphene',
              'No action',
              'Refer for bariatric surgery only',
            ],
            answer: 1,
          },
          {
            kind: 'sba',
            stem: 'What must you advise about driving?',
            options: [
              'No impact on driving',
              'He should not drive commercially until OSA is effectively treated and he meets Assessing Fitness to Drive standards; he must notify the licensing authority',
              'He can drive if he drinks coffee',
              'Only night driving is restricted',
              'He must surrender his licence permanently',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO treatments are appropriate for his erectile dysfunction?',
            options: ['PDE5 inhibitor if no nitrate use', 'Cardiovascular risk assessment and management', 'Testosterone gel as first line', 'Stop all antihypertensives', 'Yohimbine'],
            answers: [0, 1],
          },
          {
            kind: 'emq',
            theme: 'Ongoing men\'s health',
            lead: 'Choose the SINGLE best action for each issue at follow-up.',
            options: [
              'GLP-1 RA or SGLT2i for diabetes and weight',
              'Screen for depression (PHQ-9)',
              'PSA shared decision-making discussion',
              'Bowel screening (iFOBT)',
              'Testosterone injections',
            ],
            items: [
              { stem: 'He mentions feeling flat and withdrawn since losing his father', answer: 1 },
              { stem: 'He has not done his bowel screening kits', answer: 3 },
              { stem: 'HbA1c 64 mmol/mol on metformin with ongoing weight gain', answer: 0 },
            ],
          },
        ],
      },
    ],
  },
  '605': {
    sections: [
      {
        heading: 'Facial pigmentation: assessment',
        points: [
          'Common causes: melasma, solar lentigines, post-inflammatory hyperpigmentation (PIH), ephelides (freckles), seborrhoeic keratoses, drug-induced pigmentation (minocycline, amiodarone), and lentigo maligna.',
          'Melasma: symmetrical, blotchy brown or grey-brown patches on the cheeks, forehead, upper lip and chin. More common in women with darker skin types (Fitzpatrick III–V). Triggers: UV and visible light, heat, pregnancy, hormonal contraception, genetics.',
          'Dermoscopy and Wood\'s lamp help: epidermal pigment is enhanced under Wood\'s lamp. Dermal and mixed types respond less to topicals.',
          'Exclude lentigo maligna (an irregular, enlarging, variegated patch in sun-damaged older skin). Dermoscopy, and biopsy if uncertain.',
          'Discuss psychosocial impact. Pigmentation can significantly affect self-esteem.',
        ],
      },
      {
        heading: 'Melasma management in detail',
        points: [
          'Photoprotection is essential: broad-spectrum SPF 50+ daily, reapplied. Tinted sunscreens (iron oxides) block visible light. Hats and shade.',
          'Topical lightening agents: hydroquinone 2–4% (short courses of about 3–4 months, then breaks; watch for irritation and rare ochronosis with long-term use), azelaic acid 15–20%, tranexamic acid topical, niacinamide, and retinoids.',
          'Triple combination (hydroquinone + tretinoin + mild corticosteroid, Kligman formula): effective short-term under supervision.',
          'Oral tranexamic acid (off-label, for example 250 mg bd) is effective for resistant melasma. Screen for VTE risk (history, oestrogen use, smoking) before prescribing.',
          'Procedures (chemical peels, low-fluence lasers) can help but risk rebound and PIH, especially in darker skin. Refer to experienced dermatologists.',
          'Relapse is common after stopping treatment or with sun exposure. Plan maintenance.',
        ],
      },
      {
        heading: 'Rosacea: subtypes and management',
        points: [
          'Phenotype-based approach: persistent centrofacial erythema, phymatous changes (rhinophyma), flushing, papules and pustules, telangiectasia, ocular symptoms.',
          'Triggers: sun, heat, alcohol, hot drinks, spicy foods, exercise, stress, topical steroids, and irritant skin care.',
          'Erythema: brimonidine gel or oxymetazoline cream (temporary vasoconstriction; watch for rebound), and IPL or vascular laser for persistent erythema and telangiectasia.',
          'Papules and pustules: topical ivermectin 1% (most effective topical), azelaic acid 15%, metronidazole. Oral doxycycline 40–100 mg daily for moderate to severe or ocular disease. Isotretinoin (low dose, specialist) for refractory disease.',
          'Ocular rosacea: gritty, dry, red eyes and blepharitis. Lid hygiene, lubricants, and oral doxycycline. Refer if there is keratitis or visual symptoms.',
          'Rhinophyma: surgical or laser debulking.',
        ],
      },
      {
        heading: 'Cosmetic injectables: what GPs need to know',
        points: [
          'Botulinum toxin (S4) relaxes muscles for dynamic lines (glabellar, forehead, crow\'s feet). Onset 3–7 days, lasting about 3–4 months. Complications: ptosis (eyelid or brow), asymmetry, headache, bruising, rarely dysphagia.',
          'Dermal fillers (usually hyaluronic acid, regulated as medical devices) restore volume. Complications: bruising, swelling, nodules, infection or biofilm, migration, Tyndall effect (blue discolouration), and overfilled "pillow face".',
          'Vascular occlusion: immediate blanching, pain, then livedo or dusky discolouration. It is an emergency: stop injecting, give high-dose hyaluronidase repeatedly, massage and warm compresses, and seek urgent help.',
          'Visual loss (retinal artery occlusion): the most feared complication, especially with glabellar, nasal or forehead injections. Immediate ophthalmology or ED.',
          'Delayed-onset nodules or inflammatory reactions can occur weeks to months later (sometimes triggered by infection or vaccination). Treat per specialist protocols (hyaluronidase, antibiotics, steroids).',
          'Patients with filler or botulinum complications often present to GPs. Know local cosmetic complication pathways.',
        ],
      },
      {
        heading: 'Medical Board of Australia cosmetic standards (2023)',
        points: [
          'The 2023 guidelines strengthened rules for medical practitioners who perform or prescribe for cosmetic procedures.',
          'Cosmetic surgery (cutting beneath the skin): a GP referral is required before a consultation with the surgeon, BDD screening, a 7-day cooling-off period after the second consultation before consenting (adults), and stricter requirements for under-18s (3 months cooling off, psychological evaluation).',
          'Non-surgical cosmetic procedures (injectables): prescribers must do a real-time consultation (in person or video) before prescribing. There must be no remote "tick-box" prescribing. Screen for BDD and discuss realistic outcomes, risks and costs.',
          'Area of practice endorsement for cosmetic surgery was introduced to identify appropriately qualified practitioners.',
          'Advertising guidelines: no testimonials, no misleading before-and-after images, no targeting of under-18s, and no minimisation of risks.',
          'GPs asked for referrals should assess motivation and mental health, and refer only to appropriately qualified practitioners.',
        ],
      },
      {
        heading: 'Body dysmorphic disorder and cosmetic requests',
        points: [
          'BDD prevalence is about 2% in the general population, but 5–15% in cosmetic and dermatology settings.',
          'Clues: preoccupation with minor or imperceptible flaws, repeated procedures with dissatisfaction, camouflaging, social avoidance, mirror checking, and seeking reassurance.',
          'Screening tools: the BDDQ (Body Dysmorphic Disorder Questionnaire) and the Dysmorphic Concern Questionnaire.',
          'Cosmetic procedures rarely improve BDD and often worsen distress. Some patients become angry with practitioners or develop suicidality after procedures.',
          'Treatment: CBT (exposure and response prevention) and SSRIs, often at high doses (such as fluoxetine 60–80 mg). Screen for depression, suicidality, and eating disorders.',
          'Declining to refer for cosmetic procedures should be done compassionately, with a focus on distress and offering effective treatment.',
        ],
      },
    ],
    keyNumbers: [
      'Hydroquinone 2–4%: courses of ~3–4 months',
      'Oral tranexamic acid 250 mg bd (off-label): screen VTE risk',
      'Botulinum toxin: onset 3–7 days, lasts 3–4 months',
      'Filler occlusion: high-dose hyaluronidase urgently',
      'Cosmetic surgery: 7-day cooling off (adults)',
      'Under 18: 3-month cooling off + psychological evaluation',
      'BDD: ~2% general, 5–15% cosmetic settings',
      'Rosacea: ivermectin 1% most effective topical for papules',
    ],
    workedCase: {
      title: 'Kirsty looks overfilled',
      paragraphs: [
        'Kirsty, 29, has had dermal filler to her lips, cheeks and jawline six times in 2 years from different clinics. She now has lumpy lips and a swollen, "puffy" midface. She says she still "looks old and ugly" and wants a referral for a facelift. She spends 3 hours a day checking mirrors and taking selfies, and avoids going out without makeup.',
        'Examination shows overfilled lips with palpable nodules and midface fullness. There is no redness or tenderness to suggest infection. Her BDDQ screen is positive and the PHQ-9 is 16. She admits passive suicidal thoughts when she sees photos of herself.',
        'You explain that her distress is real, and that her preoccupation fits body dysmorphic disorder, which responds to treatment. You gently decline the surgical referral, explaining that procedures are unlikely to help and could worsen her distress. You complete a safety plan, arrange a Mental Health Treatment Plan for CBT with a clinician experienced in BDD, and start an SSRI.',
        'For the filler nodules you refer her to a dermatologist experienced in filler complications for hyaluronidase dissolution. At 4 months her checking has reduced and she is working on exposure tasks. She decides to pause cosmetic treatments.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Facial skin conditions',
        lead: 'Choose the SINGLE most appropriate first-line treatment for each patient.',
        options: [
          'Strict photoprotection with tinted sunscreen ± hydroquinone',
          'Topical ivermectin',
          'Brimonidine gel',
          'Excision biopsy',
          'Topical tretinoin + benzoyl peroxide',
          'Hyaluronidase',
          'CBT ± SSRI',
          'Oral doxycycline with lid hygiene',
        ],
        items: [
          { stem: 'A 36-year-old with symmetrical brown patches on the cheeks since pregnancy.', answer: 0 },
          { stem: 'A 50-year-old with papules and pustules on a background of central facial redness, no comedones.', answer: 1 },
          { stem: 'A 45-year-old with rosacea and gritty, red eyes and crusted eyelid margins.', answer: 7 },
          { stem: 'A 72-year-old with an enlarging, irregular, multicoloured pigmented patch on the cheek.', answer: 3 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Hiromi looks tired',
        scenario:
          'Hiromi, 42, had hyaluronic acid filler injected into her tear troughs at a beauty clinic 20 minutes ago. She calls your clinic (nearby) because the skin under her right eye has become white and very painful, and she now has blurred vision in that eye.',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the most likely complication?',
            options: ['Normal swelling', 'Vascular occlusion with possible retinal artery involvement', 'Allergic reaction', 'Bruising', 'Infection'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which THREE immediate actions are most appropriate?',
            options: [
              'Call 000 / arrange immediate transfer to ED or ophthalmology (visual symptoms)',
              'Contact the injecting clinic to give high-dose hyaluronidase immediately if available',
              'Warm compresses and massage of the area while arranging transfer',
              'Apply ice and review in a week',
              'Oral antihistamine and observe',
              'Start oral antibiotics',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'Which injection sites carry the highest risk of filler-related blindness?',
            options: ['Lips', 'Glabella, nose and forehead (and periorbital area)', 'Jawline', 'Hands', 'Earlobes'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO regulatory principles apply to prescribers of cosmetic injectables in Australia?',
            options: [
              'A real-time consultation (in person or video) is required before prescribing S4 cosmetic injectables',
              'Patients should be screened for body dysmorphic disorder',
              'Remote prescribing without consultation is acceptable',
              'Testimonials can be used in advertising',
              'Under-18s can have injectables without additional safeguards',
            ],
            answers: [0, 1],
          },
          {
            kind: 'emq',
            theme: 'Filler complications',
            lead: 'Choose the SINGLE most likely diagnosis for each presentation.',
            options: ['Vascular occlusion', 'Tyndall effect', 'Delayed inflammatory nodule', 'Bruising', 'Ptosis from botulinum toxin', 'Biofilm infection'],
            items: [
              { stem: 'Blue-grey discolouration under the eyes weeks after superficial filler', answer: 1 },
              { stem: 'Firm, tender, red lumps 3 months after lip filler, following a flu-like illness', answer: 2 },
              { stem: 'Drooping upper eyelid 5 days after forehead injections', answer: 4 },
            ],
          },
        ],
      },
    ],
  },
  '604': {
    sections: [
      {
        heading: 'Why smoking cessation matters',
        points: [
          'Smoking kills up to 2 in 3 long-term users and causes about 20,000 deaths a year in Australia (the leading preventable cause of death and disease).',
          'Benefits of quitting at any age: CVD risk halves within about a year. Lung cancer risk falls over time. Improved lung function, fertility, pregnancy outcomes, wound healing, mood and finances.',
          'Most smokers want to quit, but unassisted attempts succeed only about 3–5% of the time. Pharmacotherapy plus behavioural support raises this substantially.',
          'The RACGP "Supporting smoking cessation" guide recommends asking all patients, advising all smokers to quit, and offering help (pharmacotherapy plus referral to Quitline).',
          'Nicotine is the addictive component. Toxicity comes mainly from combustion products (tar, carbon monoxide, carcinogens).',
        ],
      },
      {
        heading: 'Pharmacotherapy in detail',
        points: [
          'Varenicline (a partial nicotinic agonist): 0.5 mg daily for 3 days, then 0.5 mg bd for 4 days, then 1 mg bd for 11 more weeks, with an optional further 12 weeks. Side effects: nausea (take with food), sleep disturbance, vivid dreams. Reduce the dose in severe renal impairment.',
          'Combination NRT: a patch (21 mg for 20+ cigarettes a day, 14 mg for 10–19) plus a fast-acting form (gum, lozenge, inhalator, spray, mouth spray) for cravings. Use for 8–12 weeks or longer. Safe with cardiovascular disease.',
          'Bupropion: 150 mg daily for 3 days, then bd, starting 1–2 weeks before quitting. Contraindicated with seizures, eating disorders, bipolar disorder and MAOIs.',
          'Pre-quit NRT or varenicline (starting before the quit date and cutting down gradually) helps people not ready to stop abruptly.',
          'Nicotine vaping products: prescription or pharmacist supply only. Consider as a second-line option for people who have not succeeded with first-line treatments, with a plan to eventually stop vaping.',
          'Relapse is common. Each attempt improves future success. Continue support and try different combinations.',
        ],
      },
      {
        heading: 'Pregnancy and smoking',
        points: [
          'Smoking in pregnancy increases miscarriage, ectopic pregnancy, placental abruption, preterm birth, growth restriction, stillbirth and SIDS.',
          'Ask at every antenatal visit. Carbon monoxide breath monitoring can motivate and verify.',
          'Counselling and Quitline (with pregnancy-specific programs) first. Offer NRT if counselling alone is unsuccessful. Intermittent oral forms are preferred, and patches can be used (remove at night).',
          'NRT delivers less nicotine than smoking and none of the toxins. It is safer than continuing to smoke.',
          'Varenicline and bupropion are not recommended in pregnancy (limited safety data).',
          'Partners and household members: quitting together improves success and protects the baby from second-hand smoke. Postpartum relapse prevention is important.',
        ],
      },
      {
        heading: 'Mental illness and smoking',
        points: [
          'People with mental illness smoke at 2–3 times the rate of the general population and die 10–20 years earlier, mostly from smoking-related disease.',
          'Myths to dispel: that smoking relieves stress (nicotine withdrawal causes the stress it relieves), that people with mental illness don\'t want to quit, and that quitting worsens mental illness (quitting improves depression, anxiety and stress).',
          'Varenicline and NRT are effective and safe in people with stable mental illness (EAGLES trial). Monitor mood.',
          'Drug interactions: tobacco smoke induces CYP1A2. When someone quits, levels of clozapine, olanzapine, fluvoxamine, duloxetine, some TCAs, caffeine and theophylline rise. Reduce the doses (clozapine often by 30–50%) and monitor levels and side effects.',
          'Restarting smoking reverses the interaction and can cause subtherapeutic levels and relapse.',
          'Coordinate with mental health teams. Smoke-free inpatient units need NRT provided at admission.',
        ],
      },
      {
        heading: 'Chronic liver disease and other medical conditions',
        points: [
          'Smoking accelerates liver fibrosis and increases HCC risk. It is also linked to worse outcomes after liver transplantation.',
          'NRT is safe in liver disease. Varenicline is mainly renally excreted and can be used. Bupropion needs dose reduction (maximum 150 mg every other day in severe hepatic impairment) or avoidance.',
          'Cardiovascular disease: NRT is safe, even soon after ACS (the benefit of quitting outweighs any risk). Varenicline is also safe in stable CVD.',
          'COPD: quitting slows lung function decline. Combine with pulmonary rehabilitation and vaccination.',
          'Surgery: quitting 4–8 weeks before surgery reduces wound and respiratory complications. Even 24 hours without smoking reduces carbon monoxide levels.',
          'Diabetes: smoking worsens glucose control and complications, and weight gain after quitting can be managed.',
        ],
      },
      {
        heading: 'Vaping in young people',
        points: [
          'Assessment: how often, how much (puffs, devices), nicotine strength, dependence features (vaping within 30 minutes of waking, cravings, irritability when unable to vape), reasons for use (stress, social), and co-use of tobacco and cannabis.',
          'Health effects: respiratory symptoms, worsening asthma, nicotine dependence, and possible effects on the developing brain (attention, mood). Illicit vapes may contain undeclared nicotine and harmful chemicals.',
          'Motivational interviewing works better than scare tactics with young people.',
          'Supports: Quitline (13 7848, with a youth focus), text-based programs, apps, and school-based programs.',
          'NRT (patch plus fast-acting) can be used from 12 years for significant dependence. Varenicline is not approved under 18.',
          'Asthma worsening: review the asthma action plan and inhaler technique. Vaping cessation often improves control.',
        ],
      },
    ],
    keyNumbers: [
      'Quitline: 13 7848',
      'Varenicline: 0.5 mg daily × 3 days → bd × 4 days → 1 mg bd (12 weeks)',
      'NRT patch 21 mg (≥20 cig/day), 14 mg (10–19)',
      'Bupropion: 150 mg daily × 3 days → bd',
      'Clozapine: reduce dose ~30–50% after quitting (monitor levels)',
      'Quit 4–8 weeks before surgery',
      'Smoking kills up to 2 in 3 long-term users',
      'Unassisted quit success ~3–5%',
    ],
    workedCase: {
      title: 'David has chronic liver disease',
      paragraphs: [
        'David, 58, has hepatitis C-related cirrhosis (Child-Pugh A, treated and cured 2 years ago). He smokes 25 cigarettes a day and has tried to quit "cold turkey" three times. He has a history of depression, which is stable on sertraline.',
        'You explain that smoking accelerates liver damage and raises liver cancer risk, and that support greatly improves quit success. He is ready to set a quit date in 2 weeks.',
        'Pharmacotherapy options: varenicline (renally excreted, suitable in liver disease, and not contraindicated with stable depression) or combination NRT. He chooses varenicline, starting 1 week before the quit date, plus Quitline callbacks. You arrange review at 2 weeks to monitor nausea, sleep and mood.',
        'At 12 weeks he is smoke-free, and you extend varenicline for another 12 weeks to prevent relapse. You continue 6-monthly HCC surveillance and note his improved energy and finances.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Choosing smoking cessation pharmacotherapy',
        lead: 'Choose the SINGLE most appropriate option for each patient.',
        options: [
          'Varenicline',
          'Combination NRT (patch + fast-acting)',
          'Intermittent oral NRT only',
          'Bupropion',
          'Nicotine vaping product (second-line)',
          'No pharmacotherapy – behavioural support only',
          'Reduce clozapine dose and monitor levels',
        ],
        items: [
          { stem: 'A 24-week pregnant woman who has been unable to quit with counselling.', answer: 2 },
          { stem: 'A 40-year-old with epilepsy and depression who wants the most effective medicine.', answer: 0 },
          { stem: 'A man on clozapine who quit smoking 5 days ago and is now drowsy and hypersalivating.', answer: 6 },
          { stem: 'A 60-year-old who has failed varenicline and combination NRT twice and wants to try another option.', answer: 4 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Hira really doesn\'t want to smoke while she is pregnant',
        scenario:
          'Hira, 26, is 10 weeks pregnant with her first child. She smokes 12 cigarettes a day and wants to quit. Her partner also smokes. She is anxious and has tried to quit before but "got too stressed".',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE are the most important first steps?',
            options: [
              'Congratulate her on wanting to quit and assess dependence and previous attempts',
              'Refer to Quitline (pregnancy-specific support) with a follow-up plan',
              'Encourage her partner to quit and keep the home and car smoke-free',
              'Prescribe varenicline',
              'Advise cutting down to 5 a day is enough',
              'Prescribe bupropion',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            context: 'Two weeks later she has reduced to 8 a day but cannot stop with counselling alone.',
            stem: 'What is the most appropriate pharmacotherapy?',
            options: ['Varenicline', 'Bupropion', 'NRT (preferably intermittent oral forms; patch removed at night if used)', 'Nicotine vape', 'None – pharmacotherapy is unsafe in pregnancy'],
            answer: 2,
          },
          {
            kind: 'sba',
            stem: 'How should you explain NRT safety in pregnancy?',
            options: [
              'NRT is as harmful as smoking',
              'NRT delivers nicotine without the toxins in cigarette smoke and is safer than continuing to smoke',
              'NRT causes birth defects',
              'NRT must be stopped at 20 weeks',
              'NRT is completely risk-free',
            ],
            answer: 1,
          },
          {
            kind: 'emq',
            theme: 'Managing challenges',
            lead: 'Choose the SINGLE best response to each situation.',
            options: [
              'Screen for perinatal anxiety/depression and offer psychological support',
              'Add a second fast-acting NRT form for cravings',
              'Relapse prevention planning for the postpartum period',
              'Stop all NRT',
              'Reassure that one cigarette a day is safe',
            ],
            items: [
              { stem: 'She says stress triggers her smoking and she feels constantly on edge', answer: 0 },
              { stem: 'She has strong cravings in the evenings despite the patch', answer: 1 },
              { stem: 'She is smoke-free at 36 weeks and asks what happens after the birth', answer: 2 },
            ],
          },
          {
            kind: 'multi',
            stem: 'Which TWO outcomes does quitting in pregnancy reduce?',
            options: ['Fetal growth restriction', 'SIDS risk', 'Gestational diabetes', 'Down syndrome', 'Neural tube defects'],
            answers: [0, 1],
          },
        ],
      },
    ],
  },
}

export default extra
