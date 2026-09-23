import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  '603': {
    sections: [
      {
        heading: 'Structured pre-travel risk assessment',
        points: [
          'Traveller: age, pregnancy or plans, chronic conditions, immunosuppression, medicines, allergies, vaccination history, previous travel illnesses, and mental health.',
          'Trip: destinations (country and region, urban or rural), dates and duration, accommodation (hotel vs camping), activities (trekking, diving, animal contact, medical work, sex), and access to healthcare.',
          'VFR travellers (visiting friends and relatives) have the highest risk of malaria and typhoid. They often skip pre-travel advice, eat local food and stay longer.',
          'Resources: Australian Immunisation Handbook, CDC Yellow Book, Smartraveller, and WHO country updates. A travel medicine clinic for complex itineraries and yellow fever vaccination.',
          'Timing: ideally 6–8 weeks before departure. Last-minute travellers still benefit, since most vaccines give partial protection and malaria prevention can start close to departure.',
        ],
      },
      {
        heading: 'Vaccines in detail',
        points: [
          'Hepatitis A: most developing regions. A single dose protects for about a year, and a booster at 6–12 months gives long-term protection. Combined hepatitis A/B and hepatitis A/typhoid vaccines are available.',
          'Typhoid: South Asia especially (drug-resistant strains). Injectable Vi polysaccharide (3-yearly) or oral live vaccine. About 50–80% effective, so food and water precautions still matter.',
          'Rabies pre-exposure prophylaxis: 2 doses (days 0 and 7) for long stays, remote travel, animal work, children, or cave exploring. It simplifies post-exposure treatment (no immunoglobulin needed).',
          'Japanese encephalitis: rural Asia and parts of PNG and northern Australia, especially the wet season and rice or pig farming areas. Imojev (live, single dose; not in pregnancy or immunosuppression) or JEspect (inactivated, 2 doses).',
          'Yellow fever: required or recommended for parts of Africa and South America. Only at accredited centres, at least 10 days before arrival. Live vaccine. Certificate valid for life. Exemption letters if contraindicated.',
          'Others: meningococcal ACWY (Hajj/Umrah requirement, sub-Saharan meningitis belt), cholera (Dukoral oral; also some protection against ETEC diarrhoea), polio booster for certain countries, influenza and COVID-19, and MMR (measles outbreaks).',
        ],
      },
      {
        heading: 'Malaria prevention',
        points: [
          'ABCD: Awareness of risk, Bite avoidance, Chemoprophylaxis, and prompt Diagnosis of fever.',
          'Bite avoidance: DEET 20–50% or picaridin, permethrin-treated clothing and nets, and covering up at dusk and dawn (Anopheles). Aedes (dengue, Zika, chikungunya) bite during the day.',
          'Atovaquone–proguanil (Malarone): 1 tablet daily, starting 1–2 days before, during, and 7 days after. Good tolerability. Suitable for short trips.',
          'Doxycycline 100 mg daily: 1–2 days before, during, and 4 weeks after. Cheap. Photosensitivity (sunscreen), oesophagitis (take with water, upright), vaginal thrush. Not in pregnancy or under 8 years.',
          'Mefloquine weekly: start 2–3 weeks before (to test tolerance), during, and 4 weeks after. Neuropsychiatric side effects (avoid with psychiatric or seizure history). Can be used in pregnancy.',
          'Standby emergency treatment is sometimes provided for remote travel. Any fever within a year of travel to a malarious area needs urgent malaria testing.',
        ],
      },
      {
        heading: 'Travellers with existing conditions',
        points: [
          'Diabetes: carry insulin and supplies in hand luggage with a letter, plan dose adjustments across time zones (for example basal insulin timing), have a sick-day plan, snacks, and foot care.',
          'Cardiorespiratory disease: fitness to fly. Hypoxia at cabin altitude (equivalent to 1,800–2,400 m) can affect people with COPD or heart failure, so assess the need for in-flight oxygen (an airline medical form).',
          'Anticoagulation: INR monitoring abroad is challenging, so DOACs are easier. Check interactions with malaria prophylaxis.',
          'Immunosuppressed travellers: avoid live vaccines, and responses to inactivated vaccines may be reduced. Higher risk of severe travellers\' diarrhoea and other infections. Specialist travel advice.',
          'Pregnancy: avoid malaria, Zika and high-altitude areas where possible. Airline limits (often 28–36 weeks). VTE prevention and travel insurance covering pregnancy.',
          'Mental health: travel stress, jet lag and disrupted routines can trigger relapse. Plan medicine supplies and local support.',
        ],
      },
      {
        heading: 'Common travel problems',
        points: [
          'Travellers\' diarrhoea (ETEC, Campylobacter, Shigella, norovirus): "boil it, cook it, peel it or forget it". Oral rehydration first. Loperamide for mild non-bloody diarrhoea. Azithromycin 1 g single dose for severe or dysenteric illness (fluoroquinolone resistance is common in Asia).',
          'Altitude illness (above 2,500 m): acute mountain sickness (headache, nausea, fatigue). Ascend slowly (sleeping altitude up by no more than 300–500 m a day above 3,000 m). Acetazolamide prevention. Descend for HACE or HAPE.',
          'DVT on long flights: mobilise and hydrate. Graduated compression stockings for moderate risk. LMWH for high risk (recent surgery, previous VTE, active cancer).',
          'Jet lag: light exposure at the destination\'s daytime, short-term melatonin, adjust sleep before departure.',
          'Sexual health: condoms, PrEP for HIV where relevant, hepatitis B vaccination, and STI testing on return.',
          'Injuries (road traffic and water) are the leading cause of death in travellers. Advise helmets, seatbelts, avoiding alcohol and water safety.',
        ],
      },
      {
        heading: 'The unwell returned traveller',
        points: [
          'History: countries, dates, activities, exposures (freshwater swimming, animal bites, sex, food, insects), vaccinations, prophylaxis, and the incubation period.',
          'Incubation guide: under 10 days suggests dengue, chikungunya, influenza, rickettsia, travellers\' diarrhoea. 10–21 days suggests malaria (falciparum usually within 1–3 months), typhoid, leptospirosis, acute HIV. Over 21 days suggests malaria (vivax, ovale), hepatitis, TB, schistosomiasis, amoebic liver abscess.',
          'Fever: malaria films or RDT on the day, repeated at 12–24 hours ×3. FBC (thrombocytopenia in malaria and dengue), LFT, blood cultures, dengue NS1 and serology, urinalysis, CXR.',
          'Fever with rash: dengue, chikungunya, Zika, rickettsia (eschar), measles, meningococcus, acute HIV, syphilis.',
          'Persistent diarrhoea: giardia, amoebiasis, post-infectious IBS, C. difficile (after antibiotics), and unmasked IBD or coeliac disease.',
          'Eosinophilia: helminths (strongyloides, schistosomiasis). Test serology and treat. Strongyloides can cause fatal hyperinfection if steroids are given.',
          'Notify notifiable diseases and isolate suspected measles.',
        ],
      },
    ],
    keyNumbers: [
      'Pre-travel visit: 6–8 weeks before departure',
      'Yellow fever vaccine: ≥10 days before arrival; certificate valid for life',
      'Atovaquone–proguanil: 1–2 days before → 7 days after',
      'Doxycycline/mefloquine: continue 4 weeks after',
      'Rabies PEP (unvaccinated): RIG + vaccine days 0, 3, 7, 14',
      'Rabies PEP (vaccinated): vaccine days 0, 3 only',
      'Malaria films ×3 over 24–48 h if first negative',
      'Altitude: sleeping altitude ≤300–500 m/day above 3,000 m',
      'Azithromycin 1 g single dose for severe travellers\' diarrhoea',
    ],
    workedCase: {
      title: 'Amy is pregnant and would like to travel to Kenya and Uganda',
      paragraphs: [
        'Amy, 31, is 14 weeks pregnant and plans a 3-week trip to visit her husband\'s family in rural Kenya and Uganda in 6 weeks. She asks what vaccines and tablets she needs.',
        'You explain that malaria in pregnancy is more severe for mother and baby (with risk of miscarriage, stillbirth and maternal death), and both countries have high falciparum transmission. The safest option is to postpone travel. If travel is unavoidable, the risks can be reduced but not removed.',
        'Amy decides she must go. You discuss mefloquine prophylaxis (usable in pregnancy; start 2–3 weeks before) with strict bite avoidance (DEET is safe in pregnancy, plus permethrin-treated nets). Doxycycline is contraindicated. Uganda may require a yellow fever certificate. Yellow fever vaccine is live and generally avoided in pregnancy, so the accredited centre weighs her risk and issues an exemption letter if appropriate.',
        'You give inactivated vaccines as needed (hepatitis A, influenza, and pertussis at 20–32 weeks), advise on food and water safety, check her insurance covers pregnancy, and plan antenatal care. You advise that any fever during or after the trip needs same-day malaria testing.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Fever in the returned traveller',
        lead: 'Choose the SINGLE most likely diagnosis for each traveller.',
        options: [
          'Plasmodium falciparum malaria',
          'Plasmodium vivax malaria',
          'Dengue fever',
          'Typhoid (enteric) fever',
          'African tick bite fever (rickettsia)',
          'Leptospirosis',
          'Acute schistosomiasis (Katayama)',
          'Hepatitis A',
        ],
        items: [
          { stem: 'Fever 5 days after return from Bali, severe myalgia, retro-orbital pain, platelets 60.', answer: 2 },
          { stem: 'Fever with an eschar on the ankle after a South African safari.', answer: 4 },
          { stem: 'Fever, urticaria and eosinophilia 4 weeks after swimming in Lake Malawi.', answer: 6 },
          { stem: 'Fever 8 months after a PNG trip where he took doxycycline; films show Schüffner dots.', answer: 1 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Lily has been bitten by a dog while on holiday abroad',
        scenario:
          'Lily, 25, returned yesterday from 2 weeks in Bali. Five days ago a street dog bit her on the calf, breaking the skin. She washed it with water only. She has never had rabies vaccine. She is otherwise well and the wound looks clean.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE actions are needed today?',
            options: [
              'Wash the wound thoroughly with soap and water for 15 minutes',
              'Contact the public health unit to arrange rabies immunoglobulin and vaccine',
              'Check tetanus immunisation status',
              'Wait to see if the dog develops symptoms',
              'Advise that it is too late after 5 days',
              'Suture the wound tightly',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'What is the correct post-exposure prophylaxis schedule for Lily?',
            options: [
              'Vaccine days 0 and 3 only',
              'Rabies immunoglobulin (infiltrated around the wound) plus vaccine on days 0, 3, 7 and 14',
              'Immunoglobulin alone',
              'Vaccine on day 0 only',
              'No PEP needed for dog bites in Bali',
            ],
            answer: 1,
          },
          {
            kind: 'sba',
            stem: 'Which antibiotic prophylaxis is appropriate for the dog bite?',
            options: ['None ever needed', 'Amoxicillin–clavulanate', 'Ciprofloxacin', 'Metronidazole alone', 'Doxycycline for malaria'],
            answer: 1,
            explanation: 'A calf bite may not need prophylaxis if clean, but amoxicillin–clavulanate is the agent of choice when indicated (deep, contaminated or delayed wounds).',
          },
          {
            kind: 'emq',
            theme: 'Travel health follow-up',
            lead: 'Choose the SINGLE best action for each situation.',
            options: [
              'Same-day malaria test',
              'Dengue NS1 and serology, avoid NSAIDs',
              'Complete the remaining rabies vaccine doses on schedule',
              'Pre-exposure rabies vaccination before future trips',
              'Stool microscopy and giardia PCR',
            ],
            items: [
              { stem: 'She asks about rabies protection for a planned 6-month trip to rural India next year', answer: 3 },
              { stem: 'Day 10: she develops fever, rash and aches (Bali has no malaria risk in tourist areas)', answer: 1 },
              { stem: 'She is tempted to skip the day 14 vaccine because she feels well', answer: 2 },
            ],
          },
          {
            kind: 'multi',
            stem: 'Which TWO statements about rabies are correct?',
            options: [
              'Once symptoms develop, rabies is almost always fatal',
              'Post-exposure prophylaxis is still recommended even if presentation is delayed',
              'Rabies is only transmitted by bats',
              'Previous vaccination means no PEP is ever needed',
              'Australia has endemic dog rabies',
            ],
            answers: [0, 1],
          },
        ],
      },
    ],
  },
  '602': {
    sections: [
      {
        heading: 'Re-engaging veterans after discharge',
        points: [
          'In the ADF, healthcare is provided by Defence (Garrison Health), so many veterans leave without a civilian GP or accessible medical records.',
          'Encourage veterans to request their Defence health records and to register with a GP soon after transition. ADF members can get a comprehensive medical before discharge.',
          'Trust and understanding matter. Veterans may test whether a GP "gets it". Acknowledge service, learn basic military terms, and be practical.',
          'Help them navigate DVA: card types, Non-Liability Health Care, MyService claims, and advocates from ex-service organisations.',
          'Ask about the transition experience: employment, housing, finances, relationships, identity and purpose. These are major drivers of distress.',
        ],
      },
      {
        heading: 'The structured veteran health check',
        points: [
          'The MBS Veteran Health Check can be claimed annually for 5 years after leaving the ADF, with longer consultation items.',
          'Physical: BP, weight and waist, CVD risk, hearing (noise-induced loss and tinnitus are very common), musculoskeletal injuries, skin checks, sleep, sexual health, dental health.',
          'Mental health screening: K10, PCL-5, AUDIT, and specific questions about suicidal thoughts, firearms, anger, gambling and drug use.',
          'Social: employment, finances, housing, relationships and social connection. Refer to Open Arms, employment support and financial counselling as needed.',
          'Preventive: vaccinations, cancer screening, and exposures (for example asbestos, chemicals, radiation, mefloquine, burn pits).',
          'Create a care plan and follow-up schedule. Continuity with the same GP is valuable.',
        ],
      },
      {
        heading: 'Screening tools and what they measure',
        points: [
          'K10: psychological distress over the past 4 weeks. 10–15 low, 16–21 moderate, 22–29 high, 30–50 very high.',
          'DASS-21: separate depression, anxiety and stress scores. Useful for tracking change.',
          'PCL-5: 20 items on PTSD symptoms over the past month. A score of 31–33 or more suggests probable PTSD. The PC-PTSD-5 is a brief 5-item screen.',
          'AUDIT: 10 items on alcohol. 8 or more means hazardous, 16 or more harmful, 20 or more possible dependence. AUDIT-C (3 items) is quicker.',
          'Screening is the start of a conversation, not a diagnosis. Follow positive screens with a clinical assessment.',
        ],
      },
      {
        heading: 'Alcohol and panic in veterans',
        points: [
          'Alcohol is often used to manage sleep, hyperarousal and intrusive memories, and is embedded in military culture. It worsens depression, PTSD and anger and increases suicide risk.',
          'Management: brief intervention, withdrawal planning if dependent, naltrexone or acamprosate, and integrated treatment of PTSD and alcohol use (not sequentially).',
          'Panic disorder: recurrent unexpected panic attacks plus ongoing worry or avoidance. Exclude cardiac, thyroid, respiratory and substance causes (caffeine, stimulants, alcohol withdrawal).',
          'Treatment: CBT with interoceptive exposure and breathing retraining, and SSRIs (start low because of initial activation). Avoid benzodiazepines, particularly with alcohol use or PTSD.',
          'Open Arms offers group programs (for example on sleep, anger and alcohol) and individual counselling for veterans and families.',
        ],
      },
      {
        heading: 'Musculoskeletal and chronic pain',
        points: [
          'Common problems: knee OA and injuries (including after parachuting and load carriage), lower back pain, shoulder injuries, ankle instability, and hearing loss.',
          'Knee pain: assess for OA and meniscal or ligament injury. First-line management is exercise, weight management and physiotherapy. Imaging if it will change management.',
          'DVA funds allied health (physiotherapy, exercise physiology, podiatry) for accepted conditions, and for all conditions with a Gold Card.',
          'Chronic pain: multidisciplinary approach, pain education, activity pacing and psychological therapies. Avoid long-term opioids.',
          'Claims: GP documentation of the diagnosis, onset and relation to service supports DVA claims. Veterans can get help from advocates.',
        ],
      },
      {
        heading: 'Older veterans and families',
        points: [
          'Older veterans (for example Vietnam-era) have high rates of chronic disease, PTSD, hearing loss and cancers. Many hold Gold Cards.',
          'Coordinated Veterans\' Care: GP-led care coordination with a practice nurse for Gold Card holders with chronic conditions at risk of hospitalisation.',
          'Aged care: Veterans\' Home Care, community nursing, respite and residential aged care. DVA Rehabilitation Appliances Program for aids (walkers, rails, beds).',
          'War widows and widowers, and children of veterans (including intergenerational effects of trauma), may be eligible for support and counselling through Open Arms.',
          'Palliative care and advance care planning: DVA funds palliative care services for eligible veterans.',
        ],
      },
    ],
    keyNumbers: [
      'Open Arms: 1800 011 046',
      'Veteran Health Check: yearly for 5 years after discharge',
      'K10: 30–50 very high distress',
      'PCL-5 ≥31–33: probable PTSD',
      'AUDIT ≥8 hazardous; ≥20 possible dependence',
      'Gold Card: all conditions; White Card: specific + NLHC',
      'DVA allied health referral: D904',
    ],
    workedCase: {
      title: 'Sandy is feeling tired and short of breath',
      paragraphs: [
        'Sandy, 47, served 15 years in the Navy as an engineer, including time on older vessels. She presents with fatigue and breathlessness on exertion for 6 months. She has smoked 20 pack-years and drinks 3–4 wines a night. She holds a Veteran White Card for PTSD.',
        'You take an exposure history: likely asbestos exposure in engine rooms. Examination shows fine bibasal crackles. You arrange FBC, iron studies, TSH, LFT, spirometry with gas transfer, CXR and HRCT. The PHQ-9 is 14 and AUDIT is 15.',
        'HRCT shows pleural plaques and early interstitial changes consistent with asbestosis. Spirometry shows a mild restrictive pattern with reduced DLCO. You refer her to a respiratory physician and help her lodge a DVA claim (asbestos exposure during service). You support smoking cessation (varenicline and Quitline) and alcohol reduction.',
        'You coordinate her PTSD and depression care through Open Arms and her psychologist, and arrange pulmonary rehabilitation and vaccinations. Her claim is accepted, and she receives treatment for asbestosis under her White Card.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Screening tools in veterans\' health',
        lead: 'Choose the SINGLE most appropriate tool for each purpose.',
        options: ['K10', 'PCL-5', 'AUDIT', 'DASS-21', 'PHQ-9', 'GAD-7', 'MoCA', 'Epworth Sleepiness Scale'],
        items: [
          { stem: 'Screening for probable PTSD.', answer: 1 },
          { stem: 'Assessing hazardous alcohol use.', answer: 2 },
          { stem: 'Assessing cognitive complaints after a blast injury.', answer: 6 },
          { stem: 'Assessing daytime sleepiness in a veteran with suspected OSA.', answer: 7 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Nikola is having panic attacks',
        scenario:
          'Nikola, 29, left the Army 1 year ago after a deployment. He has had sudden episodes of chest tightness, palpitations, sweating and fear of dying, occurring several times a week, including once while driving. He now avoids shopping centres. He drinks 4–5 energy drinks a day and uses alcohol to sleep.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE investigations or assessments are most appropriate?',
            options: ['ECG', 'Thyroid function', 'Screen for PTSD, depression and alcohol use', 'Coronary angiogram', 'Brain MRI', 'Urine catecholamines as first line'],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            context: 'ECG and TFTs are normal. He meets criteria for panic disorder with agoraphobic avoidance, without PTSD.',
            stem: 'What is the most appropriate first-line treatment?',
            options: ['Alprazolam as needed', 'CBT including interoceptive exposure, ± an SSRI', 'Propranolol long term', 'Quetiapine', 'Hospital admission'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which TWO lifestyle contributors should be addressed?',
            options: ['High caffeine intake from energy drinks', 'Alcohol use for sleep', 'Excessive fruit intake', 'Low salt diet', 'Too much exercise'],
            answers: [0, 1],
          },
          {
            kind: 'sba',
            stem: 'How can his treatment be funded?',
            options: [
              'He must first have a service-related claim accepted',
              'Non-Liability Health Care (Veteran White Card) covers treatment of any mental health condition',
              'Only private health insurance can fund it',
              'NDIS',
              'He is not eligible because he served under 5 years',
            ],
            answer: 1,
          },
          {
            kind: 'emq',
            theme: 'Safety and follow-up',
            lead: 'Choose the SINGLE most appropriate action for each issue.',
            options: [
              'Advise against driving until panic attacks are controlled if they impair safe driving',
              'Suicide risk assessment',
              'Open Arms group program',
              'Start benzodiazepine',
              'No action',
            ],
            items: [
              { stem: 'He had a panic attack while driving on the freeway', answer: 0 },
              { stem: 'He mentions feeling hopeless since losing his army mates\' company', answer: 1 },
              { stem: 'He wants to connect with other veterans learning to manage anxiety', answer: 2 },
            ],
          },
        ],
      },
    ],
  },
  '601': {
    sections: [
      {
        heading: 'Iron physiology in brief',
        points: [
          'Total body iron is about 3–4 g, mostly in haemoglobin, with stores as ferritin and haemosiderin (liver, marrow, macrophages).',
          'Daily absorption is only 1–2 mg, mainly in the duodenum. Haem iron (meat, fish) is absorbed better than non-haem (plant) iron. Vitamin C enhances absorption. Tea, coffee, calcium, phytates and PPIs reduce it.',
          'Hepcidin (from the liver) controls absorption and release. It rises with inflammation and iron doses, which blocks absorption. This explains anaemia of inflammation and the benefit of alternate-day dosing.',
          'There is no active excretion. Losses come through bleeding, menstruation (about 0.5–1 mg a day averaged), pregnancy and cell shedding.',
          'Stages: iron depletion (low ferritin, normal Hb), then iron-deficient erythropoiesis (low TSAT), then iron deficiency anaemia (low Hb, microcytic, hypochromic).',
        ],
      },
      {
        heading: 'Interpreting iron studies',
        points: [
          'Ferritin reflects stores. Below 15 µg/L is diagnostic of iron deficiency. Below 30 is highly suggestive in adults. In inflammation, infection, liver disease, malignancy or CKD, ferritin up to about 100 (or higher) can still mean deficiency.',
          'Transferrin saturation (TSAT) below 16–20% suggests reduced iron availability. It is useful when ferritin is equivocal.',
          'Iron deficiency: low ferritin, low TSAT, high transferrin. Anaemia of inflammation: normal or high ferritin, low TSAT, low or normal transferrin. Mixed pictures are common.',
          'Other microcytic anaemias: thalassaemia trait (disproportionately low MCV with normal ferritin, high RBC count; check Hb electrophoresis), sideroblastic anaemia, lead poisoning.',
          'CRP with iron studies helps interpretation. Repeat after an acute illness has resolved.',
        ],
      },
      {
        heading: 'Infants and children',
        points: [
          'Risk factors in infancy: prematurity and low birth weight (low stores), maternal iron deficiency or diabetes, early cord clamping, exclusive breastfeeding beyond 6 months without iron-rich solids, cow\'s milk before 12 months, and vegetarian or vegan diets without planning.',
          'Toddlers: cow\'s milk over 500 mL a day, "grazers" and picky eaters, and prolonged bottle use.',
          'Consequences: fatigue, irritability, poor appetite, pica, and impaired neurodevelopment (attention, learning), which may not fully reverse.',
          'Prevention: delayed cord clamping, iron-rich first foods (meat, fortified cereals, legumes) from about 6 months, cow\'s milk as a main drink only from 12 months (and under 500 mL a day), and iron-fortified formula if not breastfed.',
          'Treatment: oral iron 3–6 mg/kg/day elemental (as a single dose or divided). Check the Hb response in 4 weeks and continue 3 months after normalisation. Address diet and milk intake.',
          'Adolescents: growth spurt, menarche and heavy periods, sport, vegetarian diets, and eating disorders. Symptoms include fatigue, poor concentration and falling school performance.',
        ],
      },
      {
        heading: 'Abnormal uterine bleeding in premenopausal women',
        points: [
          'Heavy menstrual bleeding (HMB) is excessive blood loss that interferes with quality of life (flooding, clots over 2–3 cm, changing pads hourly, night-time changes, bleeding over 7 days). It is the most common cause of iron deficiency in premenopausal women.',
          'PALM-COEIN: Polyp, Adenomyosis, Leiomyoma (fibroids), Malignancy and hyperplasia, Coagulopathy (von Willebrand), Ovulatory dysfunction (PCOS, thyroid, perimenopause), Endometrial, Iatrogenic (anticoagulants, IUD), Not yet classified.',
          'Assessment: history (pattern, symptoms of anaemia, bleeding history, contraception, pregnancy possibility), examination, FBC, ferritin, TSH, pregnancy test, STI and cervical screening as due, and pelvic ultrasound.',
          'Refer for endometrial sampling if over 45 with persistent intermenstrual or heavy bleeding, or with risk factors for hyperplasia (obesity, PCOS, tamoxifen, unopposed oestrogen, Lynch syndrome), or with failed treatment.',
          'Treatment: LNG-IUD (first line), tranexamic acid, NSAIDs (mefenamic acid), COC, cyclical or continuous progestogens. Surgical options include endometrial ablation, myomectomy and hysterectomy. Always treat iron deficiency too.',
        ],
      },
      {
        heading: 'Pregnancy',
        points: [
          'Iron requirements rise about threefold, especially in the second and third trimesters (fetal and placental growth, expanding red cell mass, blood loss at delivery).',
          'Screen with FBC and ferritin at the first antenatal visit and at about 28 weeks.',
          'Iron deficiency in pregnancy is associated with preterm birth, low birth weight, postpartum haemorrhage complications, postnatal depression and infant iron deficiency.',
          'Treatment: oral iron (for example 60–100 mg elemental daily or alternate days) for ferritin under 30. IV iron (ferric carboxymaltose or derisomaltose) from the second trimester if oral iron is not tolerated or ineffective, or Hb is low late in pregnancy.',
          'Postpartum anaemia: IV iron speeds recovery when Hb is significantly low.',
        ],
      },
      {
        heading: 'Iron deficiency in IBD and other GI conditions',
        points: [
          'Iron deficiency affects up to 50% of people with IBD, through blood loss, reduced absorption (duodenal disease, inflammation raising hepcidin) and diet.',
          'In active IBD, ferritin up to 100 µg/L may indicate iron deficiency. Also use TSAT and CRP.',
          'Oral iron can worsen GI symptoms and is poorly absorbed during inflammation. IV iron is preferred with active disease, Hb under 100, intolerance or poor response.',
          'Recheck iron studies every 3–6 months in active disease and 6–12 months in remission. Recurrence is common.',
          'Other GI causes: coeliac disease (always test), atrophic gastritis and H. pylori, bariatric surgery, NSAID gastropathy, angiodysplasia, and GI cancers.',
        ],
      },
      {
        heading: 'Oral vs intravenous iron in practice',
        points: [
          'Oral: ferrous sulfate, fumarate or gluconate (check elemental content). Take on an empty stomach if tolerated, or with food to reduce GI upset. Alternate-day dosing is equally effective with fewer side effects.',
          'Side effects: constipation, nausea, abdominal pain, black stools (normal). Switch formulation or dose before abandoning oral iron.',
          'IV iron indications: intolerance or failure of oral iron, malabsorption, ongoing losses exceeding absorption, the need for rapid repletion (for example late pregnancy or before surgery), CKD, heart failure, active IBD.',
          'Ferric carboxymaltose (FCM) can cause significant hypophosphataemia (fatigue, osteomalacia with repeat doses). Check phosphate if symptomatic or with repeated dosing. Ferric derisomaltose has less effect on phosphate.',
          'Other IV iron risks: hypersensitivity (rare, so give where resuscitation is available), and permanent brown skin staining from extravasation (use a secure cannula and stop if there is pain or swelling).',
          'Recheck Hb and ferritin 4–8 weeks after IV iron (ferritin rises sharply right after an infusion).',
        ],
      },
    ],
    keyNumbers: [
      'Ferritin <15 diagnostic; <30 highly suggestive (adults)',
      'Inflammation: ferritin <100 + TSAT <20% suggests deficiency',
      'Oral iron: 60–100 mg elemental daily or alternate days',
      'Children: 3–6 mg/kg/day elemental iron',
      'Toddler cow\'s milk: <500 mL/day',
      'Expected Hb rise: ~20 g/L in 3–4 weeks',
      'Continue oral iron 3 months after Hb normalises',
      'Pregnancy screening: booking and ~28 weeks',
      'FCM: risk of hypophosphataemia',
    ],
    workedCase: {
      title: 'Jeongyeon is struggling in school',
      paragraphs: [
        'Jeongyeon, 15, has become tired, irritable and is falling behind at school. She plays netball 4 times a week, became vegetarian a year ago, and has had heavy periods (7 days, changing pads 2-hourly) since menarche at 12. Her mother had "heavy periods too" and bleeds a lot after dental extractions.',
        'Bloods: Hb 108 g/L, MCV 73, ferritin 6 µg/L, TSH normal, coeliac serology negative. You screen for disordered eating (SCOFF negative) and low mood (mild).',
        'Given HMB since menarche and a family bleeding history, you check von Willebrand studies (with FBC and coagulation), which show mild type 1 von Willebrand disease. You refer her to haematology and adolescent gynaecology. Tranexamic acid during periods and the COC reduce her bleeding.',
        'You start oral iron on alternate days with vitamin C, and a dietitian helps with vegetarian iron sources. At 6 weeks Hb is 125 g/L. She is more energetic, and her school results are improving. You provide a bleeding disorder card and advise her dentist.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Interpreting blood results',
        lead: 'Choose the SINGLE most likely diagnosis for each set of results.',
        options: [
          'Iron deficiency anaemia',
          'Anaemia of chronic inflammation',
          'Beta-thalassaemia trait',
          'Iron deficiency with inflammation',
          'Vitamin B12 deficiency',
          'Haemochromatosis',
          'Normal results',
        ],
        items: [
          { stem: 'Hb 118, MCV 63, RBC 6.1 ×10¹²/L, ferritin 85, TSAT 28%, CRP normal.', answer: 2 },
          { stem: 'Hb 102, MCV 70, ferritin 5, TSAT 6%, CRP normal.', answer: 0 },
          { stem: 'Active rheumatoid arthritis: Hb 105, MCV 80, ferritin 450, TSAT 14%, CRP 60.', answer: 1 },
          { stem: 'Active Crohn disease: Hb 98, MCV 72, ferritin 70, TSAT 9%, CRP 45.', answer: 3 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Olivia feels exhausted during her pregnancy',
        scenario:
          'Olivia, 30, is 26 weeks pregnant with her second child, 18 months after her first. She feels exhausted and breathless on stairs. She took iron tablets for 2 weeks but stopped because of constipation and nausea. Hb 96 g/L, MCV 74, ferritin 8 µg/L.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which TWO factors most likely contributed to her iron deficiency?',
            options: ['Short interval between pregnancies', 'Increased iron demands in the second and third trimesters', 'Excess vitamin C intake', 'Taking prenatal folic acid', 'Normal pregnancy weight gain'],
            answers: [0, 1],
          },
          {
            kind: 'sba',
            stem: 'What is the most appropriate management now?',
            options: [
              'Stop iron and recheck in 3 months',
              'Try an alternate-day or different oral iron formulation, and consider IV iron if not tolerated or inadequate response',
              'Blood transfusion',
              'Double the oral iron dose',
              'Wait until after delivery',
            ],
            answer: 1,
          },
          {
            kind: 'sba',
            context: 'Four weeks later, on alternate-day iron, her Hb is 98 and she is still symptomatic.',
            stem: 'What is the most appropriate next step?',
            options: ['IV iron (e.g. ferric carboxymaltose or derisomaltose)', 'Continue and recheck after delivery', 'Iron injections IM', 'Erythropoietin', 'Transfusion'],
            answer: 0,
          },
          {
            kind: 'multi',
            stem: 'Which THREE precautions apply to IV iron administration?',
            options: [
              'Administer where hypersensitivity reactions can be managed',
              'Warn about permanent skin staining if extravasation occurs; stop if pain at the cannula site',
              'Consider hypophosphataemia with ferric carboxymaltose',
              'Give with oral iron at the same time',
              'Only give in the first trimester',
              'Check ferritin the next day',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'emq',
            theme: 'After delivery',
            lead: 'Choose the SINGLE best action for each situation.',
            options: [
              'Check Hb and ferritin 4–8 weeks after IV iron',
              'Screen for postnatal depression (EPDS)',
              'Discuss contraception and pregnancy spacing (ideally ≥18 months)',
              'Stop breastfeeding to conserve iron',
              'Infant iron drops routinely from birth',
            ],
            items: [
              { stem: 'Timing of repeat bloods', answer: 0 },
              { stem: 'She reports low mood and tearfulness at 6 weeks postpartum', answer: 1 },
              { stem: 'She asks when it would be ideal to have another baby', answer: 2 },
            ],
          },
        ],
      },
    ],
  },
}

export default extra
