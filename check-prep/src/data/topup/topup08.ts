import type { Section } from '../../types'

const topup: Record<string, Section[]> = {
  '603': [
    {
      heading: 'Travellers visiting friends and relatives',
      points: [
        'People born overseas who return to visit friends and relatives (VFR travellers) have the highest rates of malaria, typhoid, hepatitis A and TB among travellers.',
        'They often stay longer, travel to rural areas, eat local food, and are less likely to seek pre-travel advice, believing they are immune. Immunity to malaria wanes within months of leaving an endemic area.',
        'Children born in Australia travelling with parents to their country of origin are at particular risk. Check routine vaccines (including early MMR from 6 months if travelling to a measles-affected area).',
        'Ask routinely about upcoming travel in migrant families, and offer advice even for last-minute travellers.',
        'Be culturally sensitive, and use interpreters and translated materials.',
      ],
    },
    {
      heading: 'Altitude, motion and jet lag',
      points: [
        'Acute mountain sickness (headache, nausea, fatigue, poor sleep) is common above 2500 m. Prevent it by ascending slowly (sleeping altitude up no more than 300–500 m a day above 3000 m, with a rest day every 3–4 days).',
        'Acetazolamide (125 mg twice daily, started the day before ascent) can prevent altitude sickness. It is a sulfonamide and causes tingling and altered taste of carbonated drinks.',
        'High-altitude cerebral oedema (confusion, ataxia) and pulmonary oedema (breathlessness at rest, cough) are emergencies. Immediate descent is the key treatment.',
        'Motion sickness: sit in the most stable part of the vehicle and look at the horizon. Hyoscine patches or sedating antihistamines help, but can cause drowsiness.',
        'Jet lag: adjust to local time quickly, get daylight exposure at the right time, and consider short-term melatonin.',
      ],
    },
    {
      heading: 'Travel medical kit and insurance',
      points: [
        'Carry enough regular medicines for the whole trip plus extra, in original packaging, with a letter from the doctor listing medicines and conditions. Check the destination country\'s rules for controlled drugs (for example, stimulants and opioids).',
        'Suggest a basic kit: oral rehydration salts, simple analgesics, antiseptic, dressings, insect repellent, sunscreen, and a thermometer. Consider standby antibiotics for travellers\' diarrhoea for remote travel.',
        'Travel insurance is essential. Check it covers pre-existing conditions, activities, and medical evacuation.',
        'Reciprocal health care agreements apply in only some countries and do not cover everything.',
        'Register travel plans with Smartraveller and check its health advice for each destination.',
      ],
    },
    {
      heading: 'Quick recap: travel health',
      points: [
        'Assess the traveller, the trip and the risks, and plan at least 6–8 weeks before departure.',
        'Match malaria chemoprophylaxis to destination and person, and stress mosquito bite avoidance.',
        'Fever in a returned traveller from a malaria area is malaria until proven otherwise. Arrange same-day blood films or rapid tests.',
      ],
    },
  ],
  '602': [
    {
      heading: 'Who counts as a veteran, and DVA cards',
      points: [
        'A veteran is anyone who has served at least one day in the Australian Defence Force, including reservists. Many do not see themselves as veterans.',
        'The DVA Veteran Card (Gold Card) covers all clinical conditions. The White Card covers accepted service-related conditions, plus mental health conditions and cancer under Non-Liability Health Care.',
        'Any veteran can get a White Card for free mental health care, without needing to prove it was caused by service. They can apply by calling DVA on 1800 VETERAN (1800 838 372).',
        'GPs bill DVA directly for card holders, at a higher rate than Medicare, and patients pay no gap.',
        'The Coordinated Veterans\' Care program supports Gold Card holders (and some White Card holders) with chronic conditions at risk of hospital admission. It is run by the GP and practice nurse.',
      ],
    },
    {
      heading: 'Hearing loss and tinnitus',
      points: [
        'Hearing loss and tinnitus are among the most common accepted conditions for veterans, from exposure to weapons, aircraft and machinery noise.',
        'Noise-induced hearing loss typically shows a "notch" around 4 kHz on audiometry.',
        'Veterans with accepted hearing conditions can access hearing aids and services through the Hearing Services Program.',
        'Tinnitus can cause insomnia, anxiety and depression. Sound therapy, CBT and hearing aids can help.',
        'Hearing loss is a major modifiable risk factor for dementia. Encourage the use of hearing aids.',
      ],
    },
    {
      heading: 'Sleep problems in veterans',
      points: [
        'Insomnia, nightmares and sleep apnoea are very common in veterans, often alongside PTSD, pain and alcohol use.',
        'Screen for obstructive sleep apnoea (STOP-BANG) and refer for sleep studies. Treating sleep apnoea can improve mood and concentration.',
        'CBT for insomnia (CBT-I) is the first-line treatment. It is available through psychologists and online programs.',
        'Avoid long-term benzodiazepines and sedating medicines, particularly with alcohol use or PTSD.',
        'Trauma-focused therapy for PTSD often reduces nightmares. Prazosin may help some people with trauma-related nightmares.',
      ],
    },
    {
      heading: 'Families of veterans',
      points: [
        'Partners and children of veterans experience higher rates of anxiety, depression and relationship stress, especially where the veteran has PTSD.',
        'Open Arms – Veterans & Families Counselling (1800 011 046) provides free counselling to veterans and their families.',
        'Children may be eligible for education support through DVA schemes if the veteran has an accepted condition or died because of service.',
        'Family violence can occur in veteran families, as in any family. Ask sensitively and provide support.',
        'Encourage families to connect with ex-service organisations such as Legacy and the RSL, which offer practical and social support.',
      ],
    },
    {
      heading: 'Occupational exposures',
      points: [
        'Veterans may have been exposed to herbicides (such as Agent Orange in Vietnam), burn pits, depleted uranium, asbestos (in ships and older buildings), jet fuel and ionising radiation.',
        'Ask where and when the person served, and what their role was.',
        'Some conditions are linked with specific exposures. DVA uses Statements of Principles to decide claims. The GP can help by documenting the history and diagnosis clearly.',
        'Mefloquine exposure (antimalarial used in some deployments) is a concern for some veterans. DVA has specific support pathways.',
      ],
    },
    {
      heading: 'Quick recap: veterans\' health',
      points: [
        'Ask all patients "Have you ever served in the ADF?"',
        'Use screening tools: K10 for distress, PCL-5 for PTSD, AUDIT-C for alcohol.',
        'Link veterans with DVA cards, Open Arms and the one-off Veteran Health Check.',
      ],
    },
  ],
  '601': [
    {
      heading: 'Iron deficiency in men and postmenopausal women',
      points: [
        'Iron deficiency in adult men and postmenopausal women is usually due to blood loss from the gut until proven otherwise.',
        'Refer for gastroscopy and colonoscopy, even if symptoms are absent. Bowel cancer and gastric cancer are important causes.',
        'Check coeliac serology (tTG-IgA with total IgA) in all adults with iron deficiency.',
        'Also consider NSAID use, anticoagulants, Helicobacter pylori, poor diet, and blood donation.',
        'Do not delay referral because of a positive response to iron. Improvement does not exclude a serious cause.',
      ],
    },
    {
      heading: 'Iron deficiency without anaemia',
      points: [
        'Low ferritin with a normal haemoglobin still causes symptoms such as fatigue, reduced exercise tolerance, restless legs, poor concentration and hair loss.',
        'In women, ferritin below 30 micrograms/L is a reasonable threshold for iron deficiency (many laboratories\' lower reference limits are too low).',
        'Treatment improves fatigue in women with low ferritin, even without anaemia.',
        'Ferritin is an acute phase reactant. It can be falsely normal or high in inflammation, infection, liver disease and obesity. Check CRP and transferrin saturation.',
      ],
    },
    {
      heading: 'Iron deficiency in athletes and specific diets',
      points: [
        'Endurance athletes, especially female athletes, have higher iron needs due to sweat, gut and foot-strike losses, and exercise-induced hepcidin rises.',
        'Vegetarians and vegans rely on non-haem iron, which is less well absorbed. Combine iron-rich plant foods with vitamin C, and avoid tea and coffee with meals.',
        'People who have had bariatric surgery have reduced iron absorption and often need IV iron.',
        'Low-energy diets, including in relative energy deficiency in sport (RED-S), reduce iron intake.',
      ],
    },
    {
      heading: 'Quick recap: iron deficiency',
      points: [
        'Diagnose with low ferritin. Use transferrin saturation and CRP when ferritin may be misleading.',
        'Treat with oral iron once daily or on alternate days. This is as effective as higher doses, with fewer side effects.',
        'Use IV iron for intolerance, malabsorption, severe deficiency in late pregnancy, or ongoing losses.',
        'Always find and treat the cause.',
      ],
    },
  ],
  '600': [
    {
      heading: 'Fractures in children',
      points: [
        'Children\'s bones are more flexible and have growth plates. Greenstick and buckle (torus) fractures are common.',
        'Buckle fractures of the distal radius are stable. They can be managed in a removable splint for about 3 weeks, without routine follow-up X-rays.',
        'Growth plate (physeal) injuries are described by the Salter–Harris classification. Types III–V risk growth disturbance and need orthopaedic review.',
        'Supracondylar fractures of the elbow can damage the brachial artery and nerves. Check the pulse, capillary refill and hand function, and refer urgently if displaced.',
        'Toddler\'s fracture: a spiral fracture of the tibia in a child aged 1–3 who refuses to walk. X-rays may initially be normal.',
      ],
    },
    {
      heading: 'Non-accidental injury',
      points: [
        'Consider abuse when the injury does not fit the history or the child\'s development, or when there is delay in seeking care.',
        'Fractures in infants who are not yet walking, rib fractures, metaphyseal corner fractures and multiple fractures at different stages of healing are suspicious.',
        'Bruises in infants who are not cruising, or on the ears, neck, torso, buttocks or genitals, are concerning (TEN-4-FACESp rule).',
        'Refer to a child protection unit for a skeletal survey and assessment. GPs are mandatory reporters.',
      ],
    },
    {
      heading: 'Quick recap: paediatric orthopaedics',
      points: [
        'Hip pain by age: DDH (infant), transient synovitis and septic arthritis (toddlers and young children), Perthes disease (4–10 years), and SUFE (adolescents, often overweight).',
        'A limping child with fever, inability to bear weight, and raised inflammatory markers needs urgent assessment for septic arthritis (Kocher criteria).',
        'Knee pain in an adolescent may be referred from the hip. Always examine the hip.',
      ],
    },
  ],
  '599': [
    {
      heading: 'Foreign bodies',
      points: [
        'Ear and nose foreign bodies are common in young children. Remove only if the object is visible, the child cooperates, and you have the right equipment. Otherwise refer to ENT.',
        'Nasal foreign bodies: try the "parent\'s kiss" technique (positive pressure by blowing into the child\'s mouth while blocking the clear nostril).',
        'Button batteries in the nose, ear or swallowed are an emergency. They cause severe burns within hours. Send immediately to the emergency department.',
        'Swallowed magnets (more than one) can cause bowel perforation. They need urgent assessment.',
        'Soft tissue foreign bodies (glass, wood) may not show on X-ray. Ultrasound can detect wood and plastic.',
      ],
    },
    {
      heading: 'Nail and fingertip injuries',
      points: [
        'Subungual haematoma: painful blood under the nail. If under 48 hours and painful, trephine (make a hole in the nail) to relieve pressure.',
        'Nail bed lacerations may need repair to prevent nail deformity. Refer if you are unsure.',
        'Fingertip amputations in children often heal well with conservative dressings.',
        'Mallet finger (inability to straighten the fingertip after an injury) needs a splint holding the DIP joint straight for 6–8 weeks continuously.',
      ],
    },
    {
      heading: 'Quick recap: minor injuries',
      points: [
        'Check tetanus status for every wound, and give tetanus immunoglobulin for tetanus-prone wounds in people who are not fully vaccinated.',
        'Cool burns with running water for 20 minutes, within 3 hours of injury.',
        'Give prophylactic antibiotics (amoxicillin–clavulanate) for high-risk bites, including cat bites, hand bites and human bites.',
      ],
    },
  ],
}

export default topup
