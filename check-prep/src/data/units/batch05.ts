import type { BaseUnit } from '../../types'

const units: BaseUnit[] = [
  {
    id: '620',
    label: 'Unit 620',
    date: 'Mar 2025',
    title: 'Medical dermatology',
    specialty: 'Dermatology',
    alsoRelevant: ["Women's Health", 'Infectious Diseases', 'Aged Care'],
    topics: [
      'Hidradenitis suppurativa',
      'Mycobacterium ulcerans (Buruli / Bairnsdale ulcer)',
      'Vulval pain and lichen sclerosus',
      'Polymorphic eruption of pregnancy',
      'Bullous pemphigoid',
      'Post-inflammatory pigmentation',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2025/medical-dermatology',
    overview:
      'Several important skin conditions are often missed or treated late in general practice. They include hidradenitis suppurativa (average diagnostic delay 7–10 years), Buruli ulcer in endemic areas, vulval dermatoses, pregnancy dermatoses and bullous pemphigoid in older adults. Recognising the pattern and starting the right first-line therapy makes a big difference.',
    sections: [
      {
        heading: 'Hidradenitis suppurativa (HS)',
        points: [
          'Recurrent painful nodules, abscesses, sinus tracts and scarring in flexures (axillae, groin, inframammary, buttocks). At least 2 episodes in 6 months.',
          'Hurley staging: I = abscesses without tracts; II = recurrent abscesses with tracts and scarring; III = diffuse interconnected tracts.',
          'Associations: smoking, obesity, metabolic syndrome, IBD, spondyloarthritis, depression. It is not an infection or a hygiene problem.',
          'Treatment: stop smoking, lose weight, antiseptic washes, topical clindamycin. Oral doxycycline for 12 weeks. Clindamycin + rifampicin for more severe disease. Intralesional triamcinolone for acute nodules. Refer for biologics (adalimumab, secukinumab) or surgery.',
        ],
      },
      {
        heading: 'Buruli ulcer (M. ulcerans)',
        points: [
          'Endemic in coastal Victoria (Mornington and Bellarine Peninsulas, expanding into Melbourne suburbs) and Far North Queensland. Possums and mosquitoes are implicated.',
          'Starts as a painless papule or nodule that becomes an ulcer with undermined edges, usually on exposed limbs. The incubation period is about 4–5 months.',
          'Diagnose with a PCR swab from under the undermined edge (or biopsy). It is notifiable in Victoria.',
          'Treat with rifampicin plus clarithromycin (or moxifloxacin) for 8 weeks, with an infectious diseases specialist. Paradoxical worsening can occur during treatment. Surgery is sometimes needed.',
        ],
      },
      {
        heading: 'Vulval and pregnancy dermatoses',
        points: [
          'Vulval pain differentials: vulvodynia (normal-looking skin), lichen sclerosus (white, atrophic, figure-of-eight, itch, loss of architecture), erosive lichen planus, candida, HSV, dermatitis, genitourinary syndrome of menopause.',
          'Lichen sclerosus: potent topical steroid (clobetasol 0.05%) daily until controlled, then maintenance. Needs lifelong follow-up because of the vulval SCC risk (about 3–5%).',
          'Polymorphic eruption of pregnancy: third trimester, often first pregnancy. Itchy urticarial papules start in the striae and spare the umbilicus. Benign for the fetus. Treat with emollients, topical steroids and antihistamines.',
          'Distinguish pemphigoid gestationis (periumbilical, blisters, fetal risk) and intrahepatic cholestasis of pregnancy (itchy palms and soles with no rash, raised bile acids, stillbirth risk).',
        ],
      },
      {
        heading: 'Bullous pemphigoid and pigmentation',
        points: [
          'Bullous pemphigoid: elderly, very itchy, tense blisters on an urticarial base. Mucosa is usually spared. There may be an itchy urticarial "pre-bullous" phase.',
          'Biopsy with direct immunofluorescence shows linear IgG/C3 at the basement membrane. Associations: neurological disease (dementia, Parkinson disease, stroke) and drugs, especially DPP-4 inhibitors (gliptins).',
          'Treatment: superpotent topical steroid over the whole body (as effective as oral prednisolone, with fewer deaths), ± doxycycline. Oral steroids for extensive disease. 1-year mortality is significant.',
          'Post-inflammatory hyperpigmentation (more common in skin of colour): strict sun protection, treat the underlying inflammation, and consider azelaic acid or hydroquinone. It fades over months.',
        ],
      },
    ],
    redFlags: [
      'Non-healing vulval lesion or ulcer in lichen sclerosus: biopsy for SCC.',
      'Mucosal erosions with flaccid blisters (pemphigus vulgaris): refer urgently.',
      'Generalised itch in pregnancy without rash: check bile acids for cholestasis.',
      'A rapidly enlarging ulcer in an endemic area: Buruli ulcer.',
    ],
    examTips: [
      'Stopping a gliptin in bullous pemphigoid is a classic AKT answer.',
      'Buruli ulcer: diagnose with PCR of the undermined edge, not a surface swab.',
      'In PEP, the rash starts in the striae and spares the umbilicus.',
    ],
    mcqs: [
      {
        stem: 'An 82-year-old man with Parkinson disease and type 2 diabetes on sitagliptin has intensely itchy tense blisters on his thighs and abdomen. What is the most likely diagnosis?',
        options: ['Pemphigus vulgaris', 'Bullous pemphigoid', 'Dermatitis herpetiformis', 'Bullous impetigo', 'Porphyria cutanea tarda'],
        answer: 1,
        explanation: 'Tense, itchy blisters in an older person with neurological disease is typical of pemphigoid. DPP-4 inhibitors can trigger it.',
      },
      {
        stem: 'A 45-year-old from the Mornington Peninsula has a painless ulcer on her calf with undermined edges, enlarging over 6 weeks. Which test is most appropriate?',
        options: ['Superficial wound swab MCS', 'PCR for Mycobacterium ulcerans from the undermined edge', 'Venous duplex', 'ANCA', 'Patch testing'],
        answer: 1,
        explanation: 'Buruli ulcer is diagnosed with M. ulcerans PCR from a swab under the undermined edge, or a biopsy.',
      },
      {
        stem: 'A 27-year-old smoker with BMI 34 has recurrent painful abscesses and sinus tracts in both axillae for 5 years. What is the most likely diagnosis?',
        options: ['Recurrent staphylococcal furunculosis', 'Hidradenitis suppurativa', 'Epidermoid cysts', 'Cat scratch disease', 'Actinomycosis'],
        answer: 1,
        explanation: 'Recurrent flexural nodules and tracts, with obesity and smoking, strongly suggest HS.',
      },
      {
        stem: 'A 60-year-old woman has vulval itch; examination shows white atrophic plaques around the vulva and anus. What is the first-line treatment?',
        options: ['Topical clotrimazole', 'Clobetasol propionate 0.05% ointment', 'Topical oestrogen only', 'Hydrocortisone 1% cream', 'Oral fluconazole'],
        answer: 1,
        explanation: 'Lichen sclerosus is treated with a superpotent topical steroid and needs long-term follow-up.',
      },
      {
        stem: 'A primigravida at 36 weeks has an itchy papular rash starting in abdominal striae that spares the umbilicus. What is the most appropriate management?',
        options: ['Urgent delivery', 'Emollients, topical corticosteroids and antihistamines', 'Oral prednisolone 60 mg', 'Ursodeoxycholic acid', 'Oral aciclovir'],
        answer: 1,
        explanation: 'This is polymorphic eruption of pregnancy, which is benign and managed symptomatically.',
      },
    ],
  },
  {
    id: '619',
    label: 'Unit 619',
    date: 'Feb 2025',
    title: 'Skin health: Managing the skin microbiome',
    specialty: 'Dermatology',
    alsoRelevant: ['Paediatrics & Child Health', 'Aged Care'],
    topics: [
      'Skin pH, barrier function and the microbiome',
      'Choosing moisturisers: occlusives, humectants, emollients',
      'Soap-free cleansers',
      'Acne-prone and sensitive skin',
      'Itchy dry skin (xerosis) in older adults',
      'Foot odour, pitted keratolysis and tinea',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2025/skin-health-managing-the-skin-microbiome',
    overview:
      'Healthy skin has a slightly acidic surface (pH about 4.5–5.5), an intact lipid barrier and a diverse microbiome. Alkaline soaps, over-washing, fragrances and preservatives disrupt this. That drives dryness, itch, dermatitis and dysbiosis, such as Staphylococcus aureus overgrowth in eczema. Choosing and prescribing non-medicated products well is a core GP skill.',
    sections: [
      {
        heading: 'Barrier and microbiome',
        points: [
          'The acid mantle supports barrier lipids (ceramides), antimicrobial peptides and commensals such as Staphylococcus epidermidis.',
          'Soap (pH 9–10) raises skin pH, strips lipids and increases transepidermal water loss. Use soap-free, pH-balanced (syndet) cleansers.',
          'Eczema flares are associated with S. aureus overgrowth. Dilute bleach baths (about 0.005%) twice weekly can reduce infections.',
          'Chronic wounds tend to be alkaline. An acidic, moist wound environment supports healing.',
        ],
      },
      {
        heading: 'Moisturisers',
        points: [
          'Occlusives (petrolatum, paraffin, dimethicone) reduce water loss. Humectants (glycerol, urea, lactic acid) draw water in. Emollients (ceramides, fatty acids) smooth and repair.',
          'Ointments are most occlusive and have fewest preservatives, which suits very dry or sensitive skin. Creams and lotions are more cosmetically acceptable but contain preservatives (a sensitisation risk).',
          'Apply generously (children with eczema may need 250–500 g a week) within 3 minutes of bathing ("soak and seal"), in the direction of hair growth.',
          'Urea 10% or lactic acid helps xerosis and keratosis pilaris but may sting inflamed skin. Avoid fragrance and common allergens such as methylisothiazolinone.',
        ],
      },
      {
        heading: 'Common presentations',
        points: [
          'Acne-prone skin: gentle cleanser twice a day, non-comedogenic moisturiser and sunscreen. Avoid scrubbing. Add evidence-based treatment (topical retinoid, benzoyl peroxide).',
          'Xerosis and asteatotic eczema in older adults: fewer and cooler showers, soap-free wash, thick emollient. Treat inflammation with a topical steroid, and look for other causes of itch.',
          'Seborrhoeic dermatitis (Malassezia): ketoconazole shampoo or cream plus a mild steroid for flares.',
          'Smelly feet with crater-like pits on the soles is pitted keratolysis (Kytococcus/corynebacteria). Treat with topical clindamycin or erythromycin, antiperspirant (aluminium chloride), and breathable socks and shoes.',
        ],
      },
      {
        heading: 'Prevention and ageing',
        points: [
          'Daily broad-spectrum sunscreen (SPF 50+), applied generously and reapplied. It is the most effective way to prevent photoageing and skin cancer.',
          'Topical retinoids have the best evidence for photoageing. Niacinamide 500 mg twice daily reduces new non-melanoma skin cancers in high-risk people.',
          'Hand dermatitis in health and hospitality workers: alcohol-based rubs are less irritating than frequent soap. Use emollients after work and cotton-lined gloves.',
          'Avoid "microbiome" products with unproven claims. Probiotics for skin disease have limited evidence.',
        ],
      },
    ],
    redFlags: [
      'Generalised itch without rash: check FBC, iron, LFT, renal function, TSH, glucose, and consider lymphoma.',
      'Infected eczema with punched-out erosions: eczema herpeticum. Needs urgent aciclovir.',
      'A spreading, painful, hot area: cellulitis.',
      'Non-healing lesions: consider skin cancer.',
    ],
    examTips: [
      'Know the three moisturiser classes and when to use ointment rather than cream.',
      'Soap-free cleansers are a basic step in any dermatitis KFP.',
      'Pitted keratolysis versus tinea is a good differential to know.',
    ],
    mcqs: [
      {
        stem: 'Which property of regular bar soap most contributes to skin barrier disruption?',
        options: ['Low pH (acidic)', 'Alkaline pH', 'Presence of ceramides', 'Occlusive properties', 'Humectant properties'],
        answer: 1,
        explanation: 'Alkaline soap raises surface pH and strips lipids, increasing water loss and irritation.',
      },
      {
        stem: 'A 15-year-old has smelly feet with small crater-like pits on the forefoot and heel. What is the most likely diagnosis?',
        options: ['Tinea pedis', 'Pitted keratolysis', 'Plantar warts', 'Palmoplantar psoriasis', 'Juvenile plantar dermatosis'],
        answer: 1,
        explanation: 'Pitted keratolysis is a bacterial infection of the stratum corneum causing pits and odour. It is linked to sweaty occluded feet.',
      },
      {
        stem: 'Which ingredient is a humectant?',
        options: ['Petrolatum', 'Dimethicone', 'Glycerol', 'Paraffin', 'Lanolin'],
        answer: 2,
        explanation: 'Glycerol, urea and lactic acid are humectants that attract water. Petrolatum and paraffin are occlusives.',
      },
      {
        stem: 'A child with moderate eczema has recurrent S. aureus skin infections despite good emollient use. Which additional measure has evidence?',
        options: ['Long-term oral antibiotics', 'Dilute bleach baths twice weekly', 'Daily antibacterial soap', 'Topical neomycin', 'Stopping all moisturisers'],
        answer: 1,
        explanation: 'Dilute sodium hypochlorite baths reduce S. aureus load and infection frequency.',
      },
      {
        stem: 'For secondary prevention of non-melanoma skin cancer in a high-risk patient, which oral supplement has evidence?',
        options: ['Vitamin C', 'Nicotinamide (niacinamide) 500 mg twice daily', 'Zinc', 'Fish oil', 'Vitamin E'],
        answer: 1,
        explanation: 'Nicotinamide reduced new non-melanoma skin cancers by about 23% in high-risk patients (ONTRAC trial).',
      },
    ],
  },
  {
    id: '618',
    label: 'Unit 618',
    date: 'Dec 2024',
    title: 'Alcohol and other drugs 2',
    specialty: 'Addiction Medicine',
    alsoRelevant: ['Gastroenterology & Hepatology', 'Infectious Diseases', 'Mental Health'],
    topics: [
      'Opioid dependence treatment (methadone, buprenorphine) and PBS arrangements',
      'Harm reduction for people not ready to change',
      'Injecting-related infections',
      'Alcohol-related liver disease',
      'Stimulant use (methamphetamine, cocaine)',
      'Polydrug use',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2024/alcohol-and-other-drugs-2',
    overview:
      'Many people who use drugs are not ready to stop, and GPs can still reduce harm significantly. Useful steps include take-home naloxone, safer injecting advice, hepatitis C cure, vaccination and treating complications. Opioid dependence treatment is now more accessible in general practice. Alcohol-related liver disease and stimulant harms need proactive screening and care.',
    sections: [
      {
        heading: 'Opioid dependence treatment (ODT)',
        points: [
          'Methadone and buprenorphine (sublingual, or long-acting injectable weekly or monthly) reduce overdose deaths, crime and BBV transmission.',
          'Since July 2023, ODT medicines are on the PBS Section 100 Community Access program, which lowers patient costs. Prescriber rules (training, permits) vary by state.',
          'Buprenorphine induction: wait until moderate withdrawal (COWS about ≥8–12) to avoid precipitated withdrawal, or use a low-dose ("micro-induction") approach.',
          'For chronic pain with opioid use disorder, buprenorphine (split doses) gives analgesia and treats dependence.',
        ],
      },
      {
        heading: 'Harm reduction',
        points: [
          'Take-home naloxone is free without prescription through the national program. Offer it to anyone who uses opioids and to their family.',
          'Safer use: never use alone, test doses, sterile equipment (needle and syringe programs), rotate sites, and avoid mixing depressants.',
          'Test for BBVs (HCV antibody + RNA, HIV, HBV). GPs can prescribe direct-acting antivirals for HCV (cure >95%). Vaccinate against hepatitis A and B.',
          'Injecting complications: abscess, cellulitis, thrombophlebitis, DVT, endocarditis (fever + murmur), septic arthritis, and arterial injection with ischaemia.',
        ],
      },
      {
        heading: 'Alcohol-related liver disease',
        points: [
          'Screen with AUDIT. LFT pattern: raised GGT and AST > ALT (ratio >2). Macrocytosis.',
          'Stage fibrosis with FIB-4 and transient elastography (FibroScan). Cirrhosis needs 6-monthly HCC ultrasound ± AFP and variceal screening.',
          'Abstinence is the single most important intervention. Relapse prevention: acamprosate (safe in liver disease; adjust for renal function), naltrexone (avoid in decompensated disease and with opioids), baclofen (off-label, used in cirrhosis). Avoid disulfiram in liver disease.',
          'Give thiamine to all heavy drinkers. Watch for decompensation: ascites, encephalopathy, jaundice, GI bleeding.',
        ],
      },
      {
        heading: 'Stimulants and polydrug use',
        points: [
          'Methamphetamine and cocaine: tachycardia, hypertension, arrhythmia, chest pain (vasospasm, MI), psychosis, agitation, dental disease, weight loss.',
          'There is no approved pharmacotherapy for stimulant dependence. Psychosocial treatment (CBT, contingency management) is best. Lisdexamfetamine is being trialled for methamphetamine dependence.',
          'Acute agitation: calm environment and benzodiazepines. Treat psychosis. Chest pain after cocaine needs emergency assessment.',
          'Polydrug risks: opioids + benzodiazepines or alcohol (respiratory depression), GHB (severe withdrawal, coma), cocaine + alcohol (cocaethylene, cardiotoxic). Check real-time prescription monitoring.',
        ],
      },
    ],
    redFlags: [
      'Fever plus a new murmur in a person who injects drugs: endocarditis.',
      'Cold, painful limb after injection: arterial injection or ischaemia.',
      'Chest pain after stimulant use.',
      'Jaundice, ascites or confusion: decompensated liver disease.',
    ],
    examTips: [
      'Offer take-home naloxone. It is a common "one thing you must do" answer.',
      'Know which relapse-prevention medicines are safe in liver disease.',
      'Buprenorphine induction timing and the risk of precipitated withdrawal.',
    ],
    mcqs: [
      {
        stem: 'A 34-year-old man who injects heroin is not ready to stop. Which intervention most directly reduces his risk of death?',
        options: ['Referral to rehab only', 'Supplying take-home naloxone with overdose education', 'Prescribing diazepam', 'Urine drug screening', 'Discharge from practice'],
        answer: 1,
        explanation: 'Naloxone reverses opioid overdose and saves lives. It is free without prescription through the national program.',
      },
      {
        stem: 'A patient using oxycodone is starting sublingual buprenorphine. When should the first dose be given?',
        options: [
          'Immediately after the last oxycodone dose',
          'When in moderate objective withdrawal (e.g. COWS ≥8–12), unless using a micro-induction approach',
          'After 7 days abstinence',
          'Combined with naloxone IV',
          'Only in hospital',
        ],
        answer: 1,
        explanation: 'Buprenorphine is a high-affinity partial agonist. Given too early, it displaces full agonists and precipitates withdrawal.',
      },
      {
        stem: 'A man with alcohol-related cirrhosis wants medicine to help remain abstinent. Which is most appropriate?',
        options: ['Disulfiram', 'Naltrexone in decompensated cirrhosis', 'Acamprosate', 'Diazepam long-term', 'Topiramate high dose'],
        answer: 2,
        explanation: 'Acamprosate is renally cleared and safe in liver disease. Disulfiram is hepatotoxic, and naltrexone is avoided in decompensated disease.',
      },
      {
        stem: 'A 28-year-old woman presents with palpitations, HR 140, BP 170/100, agitation and dilated pupils after a party. What is the most likely cause?',
        options: ['Opioid overdose', 'Stimulant toxicity (e.g. methamphetamine/cocaine)', 'Benzodiazepine withdrawal', 'Cannabis', 'Alcohol intoxication'],
        answer: 1,
        explanation: 'Sympathomimetic toxidrome: tachycardia, hypertension, mydriasis and agitation.',
      },
      {
        stem: 'Which test best screens for current hepatitis C infection after a positive HCV antibody?',
        options: ['Repeat antibody', 'HCV RNA (PCR)', 'LFT', 'Liver ultrasound', 'HCV genotype only'],
        answer: 1,
        explanation: 'About 25% of people clear HCV spontaneously. HCV RNA confirms current infection, which DAAs can then cure.',
      },
    ],
  },
  {
    id: '617',
    label: 'Unit 617',
    date: 'Nov 2024',
    title: 'Alcohol and other drugs 1',
    specialty: 'Addiction Medicine',
    alsoRelevant: ['Paediatrics & Child Health', 'Mental Health'],
    topics: [
      'Nicotine vaping in young people',
      'Managing alcohol withdrawal in general practice',
      'Supporting families affected by AOD use',
      'Chronic pain and opioid dependence',
      'Benzodiazepine dependence and withdrawal',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2024/alcohol-and-other-drugs-1',
    overview:
      'GPs manage a wide range of AOD issues. These include teenage vaping, planned home alcohol withdrawal, iatrogenic opioid and benzodiazepine dependence, and families worried about a loved one. Useful skills are structured withdrawal regimens, safe tapering, recognising when home withdrawal is unsafe, and family-focused support.',
    sections: [
      {
        heading: 'Vaping in young people',
        points: [
          'Nicotine vapes are regulated as therapeutic goods, available only from pharmacies (prescription needed under 18). Many young people use illicit, high-nicotine products.',
          'Assess dependence (time to first vape, cravings, withdrawal), mental health and other substance use, using HEEADSSS.',
          'Treatment: behavioural support (Quitline, text or app programs). Combination NRT can be used from age 12. Varenicline is not approved under 18.',
          'Support parents with non-confrontational communication, and address anxiety and stress as drivers.',
        ],
      },
      {
        heading: 'Alcohol withdrawal',
        points: [
          'Onset 6–24 hours after the last drink, peak 24–72 hours. Seizures at 12–48 hours. Delirium tremens at 48–96 hours.',
          'Home (ambulatory) withdrawal suits mild to moderate cases with no history of withdrawal seizures or DTs, no serious medical or psychiatric illness, a sober support person, and daily review.',
          'Diazepam regimen, for example 10–20 mg qid on day 1, tapering over about 5–7 days, guided by a withdrawal scale (AWS or CIWA-Ar). Supply limited quantities.',
          'Thiamine 100 mg orally tds (IM/IV if Wernicke risk: confusion, ataxia, ophthalmoplegia). Give before glucose. Follow with relapse prevention (acamprosate, naltrexone).',
        ],
      },
      {
        heading: 'Families',
        points: [
          'Family members have high rates of stress, depression and financial and violence-related harm. Their needs matter in their own right.',
          'CRAFT (Community Reinforcement and Family Training) helps families encourage treatment entry more effectively than confrontation.',
          'Resources: Family Drug Support, Al-Anon, state family AOD services, and a GP Mental Health Treatment Plan for the family member.',
          'Screen for family violence and child safety.',
        ],
      },
      {
        heading: 'Prescribed drug dependence',
        points: [
          'Opioid use disorder in chronic pain: look for loss of control, craving, early scripts, multiple prescribers, and use for mood. Check real-time prescription monitoring.',
          'Options: slow taper (5–10% every 2–4 weeks) if there is no OUD, or transition to buprenorphine or methadone if OUD is present. Use a multidisciplinary pain plan.',
          'Benzodiazepine withdrawal: convert to diazepam and taper by about 10–25% every 1–2 weeks, slowing at lower doses. Never stop abruptly (seizure risk).',
          'Approximate diazepam equivalents to 5 mg: alprazolam 0.25–0.5 mg, clonazepam 0.25–0.5 mg, oxazepam 15 mg, temazepam 10 mg. Pair the taper with CBT for anxiety and insomnia.',
        ],
      },
    ],
    redFlags: [
      'History of withdrawal seizures or DTs: inpatient withdrawal.',
      'Confusion, ataxia or eye signs: Wernicke encephalopathy. Give parenteral thiamine.',
      'Concurrent benzodiazepine and opioid use: overdose risk. Supply naloxone.',
      'Suicidal ideation during withdrawal.',
    ],
    examTips: [
      'Know the contraindications to home alcohol withdrawal. This is a frequent KFP.',
      'Give thiamine before glucose.',
      'Know the benzodiazepine taper principles and diazepam conversion.',
    ],
    mcqs: [
      {
        stem: 'Which patient is LEAST suitable for ambulatory (home) alcohol withdrawal?',
        options: [
          'Man with supportive partner and no prior complicated withdrawal',
          'Woman with previous withdrawal seizure',
          'Man drinking 8 standard drinks/day with mild tremor',
          'Woman who can attend daily reviews',
          'Man with well-controlled hypertension',
        ],
        answer: 1,
        explanation: 'A history of withdrawal seizures or DTs means inpatient withdrawal.',
      },
      {
        stem: 'A malnourished man who drinks heavily is confused and ataxic with nystagmus. What is the most urgent treatment?',
        options: ['IV glucose', 'Parenteral thiamine', 'Oral diazepam', 'Haloperidol', 'Oral multivitamin'],
        answer: 1,
        explanation: 'Wernicke encephalopathy needs high-dose parenteral thiamine, ideally before glucose.',
      },
      {
        stem: 'A woman taking alprazolam 2 mg daily for 5 years wants to stop. What is the best approach?',
        options: [
          'Stop immediately',
          'Convert to an equivalent diazepam dose and taper gradually over weeks to months',
          'Switch to zolpidem',
          'Halve the dose weekly',
          'Refer for inpatient detox in all cases',
        ],
        answer: 1,
        explanation: 'A long-acting benzodiazepine gives smoother withdrawal. Taper about 10–25% every 1–2 weeks with psychological support.',
      },
      {
        stem: 'A 16-year-old vapes daily and wants to quit. Which pharmacotherapy is appropriate if behavioural support is insufficient?',
        options: ['Varenicline', 'Bupropion', 'Nicotine replacement therapy', 'Naltrexone', 'Diazepam'],
        answer: 2,
        explanation: 'NRT is TGA-approved from age 12. Varenicline and bupropion are not approved under 18.',
      },
      {
        stem: 'A mother is distressed about her 22-year-old son\'s cannabis and methamphetamine use. He refuses help. Which approach has the best evidence for families?',
        options: ['Confrontational intervention', 'Community Reinforcement and Family Training (CRAFT)', 'Tough love – eviction', 'Ignore the problem', 'Involuntary admission'],
        answer: 1,
        explanation: 'CRAFT improves family wellbeing and increases treatment entry by the loved one.',
      },
    ],
  },
  {
    id: 'S2',
    label: 'Supplement 2',
    date: 'Nov 2024',
    title: 'Gout',
    specialty: 'Rheumatology',
    alsoRelevant: ['Musculoskeletal & Sports', 'Urology & Renal', 'Aboriginal & Torres Strait Islander Health'],
    topics: [
      'Risk factors and diagnosis of gout',
      'Differentiating gout from septic arthritis and CPPD',
      'Managing acute flares with comorbidities',
      'Urate-lowering therapy (ULT) and treat-to-target',
      'Flare prophylaxis and adherence',
      'Diet myths and stigma',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2024/gout',
    overview:
      'Gout is the most common inflammatory arthritis. It is curable with urate-lowering therapy, yet it is poorly managed: under-treated, and blamed on diet. Good care means confirming the diagnosis (and excluding septic arthritis) and treating flares safely around comorbidities. Allopurinol should be started low and titrated to a serum urate target, with prophylaxis and education to keep people on it.',
    sections: [
      {
        heading: 'Diagnosis',
        points: [
          'Classic presentation: sudden, severe pain, swelling and redness of the first MTP joint (podagra), peaking within 24 hours. Also affects the midfoot, ankle, knee, wrist and fingers.',
          'Risk factors: male, older age, CKD, diuretics, low-dose aspirin, obesity and metabolic syndrome, alcohol (especially beer), sugary drinks, genetics. Rates are higher in Māori and Pacific Islander peoples.',
          'The gold standard is joint aspiration showing needle-shaped, negatively birefringent crystals. Serum urate can be NORMAL during a flare, so recheck 2–4 weeks later.',
          'A hot, swollen knee must be aspirated to exclude septic arthritis (Gram stain and culture). CPPD (pseudogout) shows rhomboid, positively birefringent crystals, usually in older adults.',
        ],
      },
      {
        heading: 'Acute flare',
        points: [
          'Start early. Options: low-dose colchicine (1 mg, then 0.5 mg an hour later), NSAID, or oral prednisolone (for example 30–35 mg daily for 5 days). Intra-articular steroid for a single large joint.',
          'Colchicine: reduce dose in CKD. Serious interactions with CYP3A4/P-gp inhibitors (clarithromycin, verapamil, diltiazem, azoles). GI toxicity.',
          'NSAIDs: avoid in CKD, heart failure, anticoagulation or peptic ulcer disease. Prednisolone is often safest in complex patients (monitor glucose).',
          'Rest, ice and elevation. Continue ULT during a flare.',
        ],
      },
      {
        heading: 'Urate-lowering therapy',
        points: [
          'Indications: ≥2 flares a year, tophi, erosions, urate stones, CKD stage ≥3, very high urate, or young onset. Consider it after the first flare.',
          'Target serum urate <0.36 mmol/L (<0.30 if tophi). Treat to target for life.',
          'Allopurinol: start 50–100 mg daily (lower in CKD), increase by 50–100 mg every 2–4 weeks to reach target. Doses above creatinine-clearance-based limits are acceptable with monitoring.',
          'Test HLA-B*5801 before allopurinol in people of Han Chinese, Korean or Thai ancestry (risk of severe cutaneous reactions). Febuxostat is the alternative.',
          'Flare prophylaxis for 3–6 months when starting ULT: colchicine 0.5 mg daily or bd (or low-dose NSAID or prednisolone).',
        ],
      },
      {
        heading: 'Adherence, diet and comorbidities',
        points: [
          'Explain: "ULT dissolves crystals over time. Early flares on ULT mean it is working, not failing."',
          'Diet contributes only modestly. Reduce sugary drinks and beer, and aim for a healthy weight. Strict purine-free diets are not needed. Reduce stigma: gout is not caused by "overindulgence".',
          'Screen for and manage CVD risk, diabetes, CKD, hypertension and sleep apnoea.',
          'Helpful drug switches: losartan (uricosuric) instead of a thiazide, SGLT2 inhibitors, fenofibrate. Nurse- or pharmacist-led titration improves outcomes.',
        ],
      },
    ],
    redFlags: [
      'Fever with a hot, swollen joint: septic arthritis until proven otherwise. Aspirate.',
      'Rash, fever or eosinophilia after starting allopurinol: DRESS or SJS. Stop it immediately.',
      'Colchicine toxicity: diarrhoea, vomiting, cytopenias.',
      'Recurrent kidney stones.',
    ],
    examTips: [
      'Serum urate may be normal during a flare, a classic trap.',
      'Know the treat-to-target number (<0.36 mmol/L) and "start low, go slow".',
      'Watch for colchicine and clarithromycin interactions.',
    ],
    mcqs: [
      {
        stem: 'A 45-year-old man has an acutely painful, swollen first MTP joint. Serum urate is 0.32 mmol/L. What is the best interpretation?',
        options: [
          'Gout is excluded',
          'Urate may fall during a flare; gout remains likely – recheck after the flare',
          'This is pseudogout',
          'Start allopurinol 300 mg immediately',
          'Diagnose septic arthritis',
        ],
        answer: 1,
        explanation: 'Urate is often normal during an acute flare. Clinical diagnosis or aspiration confirms gout.',
      },
      {
        stem: 'What is the target serum urate for a patient with tophaceous gout?',
        options: ['<0.60 mmol/L', '<0.42 mmol/L', '<0.36 mmol/L', '<0.30 mmol/L', 'Any reduction is sufficient'],
        answer: 3,
        explanation: 'With tophi, a lower target (<0.30 mmol/L) speeds crystal dissolution. The general target is <0.36.',
      },
      {
        stem: 'A 70-year-old with CKD (eGFR 35), heart failure and on apixaban has an acute gout flare of the ankle. Which treatment is most appropriate?',
        options: ['Naproxen 500 mg bd', 'Colchicine 1 mg every hour until diarrhoea', 'Oral prednisolone short course', 'Indomethacin', 'Aspirin'],
        answer: 2,
        explanation: 'NSAIDs are contraindicated in CKD, heart failure and anticoagulation. High-dose colchicine is toxic. Short-course prednisolone is safest.',
      },
      {
        stem: 'Before starting allopurinol, HLA-B*5801 testing is recommended for which patient?',
        options: ['A 50-year-old Scottish man', 'A 45-year-old Han Chinese man', 'A 60-year-old Samoan man', 'A 55-year-old Greek woman', 'All patients'],
        answer: 1,
        explanation: 'HLA-B*5801 is common in Han Chinese, Korean and Thai people and strongly predicts severe allopurinol hypersensitivity.',
      },
      {
        stem: 'A man starting allopurinol asks why he also needs colchicine 0.5 mg daily. What is the best explanation?',
        options: [
          'Colchicine lowers urate',
          'Starting ULT can mobilise crystals and trigger flares; prophylaxis for 3–6 months reduces this',
          'Colchicine prevents allopurinol rash',
          'It protects the kidneys',
          'It is lifelong',
        ],
        answer: 1,
        explanation: 'Flare prophylaxis supports adherence during the early months of ULT.',
      },
    ],
  },
]

export default units
