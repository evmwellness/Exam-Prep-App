import type { Section } from '../../types'

const topup: Record<string, Section[]> = {
  '629': [
    {
      heading: 'Obesity in Aboriginal and Torres Strait Islander communities',
      points: [
        'Rates of obesity and type 2 diabetes are higher, driven by colonisation, food insecurity, poverty, and reduced access to traditional foods and lands.',
        'Community-led programs that include family, culture and traditional food and activity are more effective and acceptable than individual advice alone.',
      ],
    },
  ],
  '628': [
    {
      heading: 'Measuring progress',
      points: [
        'Track what matters to the person, not only weight: step counts, sleep quality, mood, energy, blood pressure, HbA1c, and ability to do valued activities.',
        'Celebrate small wins, and review and adjust goals together at each visit.',
      ],
    },
  ],
  '627': [
    {
      heading: 'Herbal medicines with liver or kidney risks',
      points: [
        'Liver injury has been linked to kava, black cohosh, green tea extract (concentrated), some bodybuilding supplements, and some traditional Chinese and Ayurvedic preparations.',
        'Some imported traditional remedies have been found to contain heavy metals (lead, mercury, arsenic) or undeclared prescription drugs. Check TGA safety alerts.',
        'Aristolochic acid (in some traditional herbal products) causes kidney failure and urothelial cancer.',
        'Ask about supplements in anyone with unexplained abnormal liver or kidney function.',
      ],
    },
  ],
  '626': [
    {
      heading: 'Syringe drivers in the community',
      points: [
        'A continuous subcutaneous infusion (syringe driver) delivers medicines over 24 hours when the oral route is no longer possible. Community palliative care nurses usually set it up and monitor it.',
        'Common combinations include an opioid, midazolam, haloperidol or metoclopramide, and an anticholinergic. Check compatibility with a palliative care pharmacist.',
        'Continue to prescribe breakthrough doses as separate subcutaneous injections.',
      ],
    },
  ],
  '625': [
    {
      heading: 'Microscopic colitis and other mimics',
      points: [
        'Microscopic colitis causes chronic watery diarrhoea, often in older women. The colon looks normal at colonoscopy, and the diagnosis needs random biopsies.',
        'It is linked with medicines such as NSAIDs, PPIs, SSRIs and statins, and with smoking and coeliac disease.',
        'Budesonide is the most effective treatment.',
        'Other mimics of IBD include infections (C. difficile, CMV, amoebiasis, TB), ischaemic colitis, radiation proctitis and diverticular colitis.',
      ],
    },
    {
      heading: 'Living well with IBD',
      points: [
        'Crohn\'s & Colitis Australia provides education and support. IBD nurses are a valuable contact for patients.',
        'Anxiety and depression are more common in IBD, and can make flares more likely. Screen regularly.',
        'Workplace and school adjustments (toilet access, flexible hours) help people stay in work and study. The "Can\'t Wait" card helps with toilet access.',
      ],
    },
  ],
  '624': [
    {
      heading: 'Culturally safe responses',
      points: [
        'Aboriginal and Torres Strait Islander women are many times more likely to be hospitalised for family violence than other women. Colonisation, intergenerational trauma and racism are drivers.',
        'Many First Nations women fear child removal if they disclose violence. Explain your role, and link with Aboriginal community controlled family violence services.',
        'Migrant and refugee women may face extra barriers: language, visa status, isolation, financial dependence and fear of authorities. Use professional interpreters, never family members.',
        'Women on temporary visas experiencing family violence may be eligible for the family violence provisions of the migration law. Refer to specialist legal services.',
        'People with disability face higher rates of abuse, including from carers. Watch for control over medicines, aids and finances.',
      ],
    },
    {
      heading: 'Quick recap: abuse and violence in families',
      points: [
        'Ask when you notice possible indicators, using direct but non-judgemental questions.',
        'Respond with LIVES: Listen, Inquire about needs, Validate, Enhance safety and Support.',
        'Assess risk, make a safety plan, document carefully, and know your mandatory reporting duties for children.',
      ],
    },
  ],
  S4: [
    {
      heading: 'Anticoagulation for VTE',
      points: [
        'DOACs are first-line treatment for most people with deep vein thrombosis and pulmonary embolism. Apixaban and rivaroxaban can be started without heparin, using higher initial doses.',
        'Treat provoked VTE (major surgery, trauma) for 3 months. Unprovoked VTE often needs longer or indefinite treatment, balancing recurrence and bleeding risk.',
        'After 6 months, reduced-dose apixaban (2.5 mg twice daily) or rivaroxaban (10 mg daily) can be used for extended prevention.',
        'Cancer-associated VTE can be treated with a DOAC or low molecular weight heparin. DOACs increase bleeding in some gastrointestinal and urological cancers.',
        'Do not routinely test for thrombophilia. It rarely changes management, and should be discussed with a haematologist first.',
      ],
    },
    {
      heading: 'Reversal and urgent bleeding',
      points: [
        'Major bleeding on warfarin: give vitamin K IV and prothrombin complex concentrate in hospital.',
        'Dabigatran can be reversed with idarucizumab. Andexanet alfa can reverse factor Xa inhibitors (apixaban, rivaroxaban) where available. Prothrombin complex concentrate is often used otherwise.',
        'For minor bleeding (nosebleeds, bruising), continue anticoagulation if possible, apply local measures, and review contributing factors.',
        'INR over 4.5 without bleeding: withhold warfarin and consider oral vitamin K depending on the INR level and bleeding risk (follow Therapeutic Guidelines).',
      ],
    },
  ],
  '623': [
    {
      heading: 'Non-binary people and individualised care',
      points: [
        'Non-binary people do not identify only as a man or a woman. Their goals for affirmation vary widely: some want no medical treatment, some want low-dose hormones, and some want surgery.',
        'Ask what the person wants rather than assuming a standard pathway. Lower hormone doses can give more subtle changes.',
        'Clinical systems often force a binary choice. Record the person\'s gender accurately where possible, and add notes about names and pronouns.',
        'Pathology reference ranges are based on sex. Interpret results such as haemoglobin and creatinine carefully, considering the hormone regimen.',
      ],
    },
    {
      heading: 'Legal and documentation changes',
      points: [
        'Most states and territories allow people to change the sex on their birth certificate without surgery. Requirements differ, and some need a statement from a doctor or psychologist.',
        'Medicare records and passports can be updated with a letter from a doctor or psychologist confirming appropriate clinical treatment.',
        'Discrimination on the basis of gender identity is unlawful under the federal Sex Discrimination Act.',
        'Medicare may reject items linked to a recorded sex, such as cervical screening for someone recorded as male. Use the Medicare process for gender-specific items.',
      ],
    },
    {
      heading: 'Long-term health monitoring',
      points: [
        'Monitor cardiovascular risk, blood pressure, lipids and weight regularly. Oestradiol increases VTE risk, especially oral forms and with smoking. Transdermal oestradiol is safer.',
        'Assess bone density in people with long periods of low sex hormones, such as after gonadectomy without hormone replacement.',
        'Testosterone can cause acne, male-pattern hair loss, raised haematocrit and sleep apnoea.',
      ],
    },
  ],
  '622': [
    {
      heading: 'Screening in pregnancy and after birth',
      points: [
        'Cervical screening is safe in pregnancy if due. Use a clinician-collected sample with a broom or spatula, not an endocervical brush.',
        'Colposcopy is safe in pregnancy. Biopsy is only done if cancer is suspected, and treatment of high-grade lesions is usually delayed until after birth.',
        'Postnatal is a good time to catch up on overdue screening. Wait until about 6 weeks after the birth.',
        'Breastfeeding can cause atrophic changes that affect cytology. Consider this when interpreting results.',
      ],
    },
    {
      heading: 'Screening people who are immunocompromised',
      points: [
        'People with HIV, organ transplants, or on significant immunosuppression have a higher risk of persistent HPV and cervical cancer.',
        'They are screened every 3 years instead of 5.',
        'Any oncogenic HPV type (including non-16/18) in these people is referred directly to colposcopy.',
        'Also consider anal cancer screening in some high-risk groups, such as people with HIV who are men who have sex with men, in line with current guidance.',
      ],
    },
    {
      heading: 'Screening after 70 and exit testing',
      points: [
        'People aged 70–74 should have an exit HPV test. If HPV is not detected, they can stop screening.',
        'People over 75 who have never screened or are overdue can request a test.',
        'Postmenopausal bleeding at any age needs investigation, even if screening has stopped.',
      ],
    },
  ],
  '621': [
    {
      heading: 'Chronic pain and musculoskeletal injury',
      points: [
        'Musculoskeletal problems (back, knee, shoulder and hearing loss) are among the most common accepted conditions for veterans, often from carrying heavy loads, parachuting and training injuries.',
        'Chronic pain often coexists with PTSD, depression and sleep problems, and each worsens the others. Treat them together.',
        'Use active approaches: physiotherapy, exercise physiology, graded activity and pain education. DVA funds many allied health services.',
        'Avoid long-term opioids where possible. Monitor carefully if they are used, and watch for use with alcohol and benzodiazepines.',
      ],
    },
    {
      heading: 'Alcohol and substance use in veterans',
      points: [
        'Heavy drinking is common in serving members and veterans, and is often used to cope with sleep problems, pain or trauma symptoms.',
        'Screen with AUDIT-C and ask about other drugs, including cannabis, stimulants and misuse of prescription medicines.',
        'Treat alcohol use and PTSD together where possible. Open Arms and specialist veteran services can help.',
        'Gambling problems are also more common in veterans. Ask about them.',
      ],
    },
    {
      heading: 'Quick recap: military medicine',
      points: [
        'Ask everyone if they have served in the ADF.',
        'Any veteran can access free mental health treatment through a DVA White Card, without needing to prove the cause.',
        'Trauma-focused CBT and EMDR are first-line treatments for PTSD. SSRIs such as sertraline and paroxetine can also help.',
        'Open Arms (1800 011 046) supports veterans and families 24/7.',
      ],
    },
  ],
}

export default topup
