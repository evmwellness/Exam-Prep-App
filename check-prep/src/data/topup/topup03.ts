import type { Section } from '../../types'

const topup: Record<string, Section[]> = {
  '625': [
    {
      heading: 'Monitoring immunomodulators and biologics',
      points: [
        'Thiopurines (azathioprine, mercaptopurine): check TPMT (and NUDT15 where available) before starting. Monitor full blood count and LFTs weekly for the first month, then every 3 months. Watch for leucopenia, hepatotoxicity, pancreatitis, skin cancer and lymphoma.',
        'Methotrexate: weekly dosing with folic acid. Monitor FBC, LFTs and renal function. It is contraindicated in pregnancy and needs contraception for both men and women.',
        'Anti-TNF agents (infliximab, adalimumab): screen for latent TB (IGRA and chest X-ray), hepatitis B and C, HIV and varicella before starting. Report any fever or infection promptly.',
        'Vedolizumab (gut-selective) and ustekinumab or risankizumab have fewer systemic infection concerns but still need infection screening.',
        'JAK inhibitors (tofacitinib, upadacitinib): increased risk of herpes zoster, VTE and major cardiovascular events, particularly in older people and smokers. Recombinant zoster vaccine is recommended.',
      ],
    },
    {
      heading: 'Vaccination and infection prevention in IBD',
      points: [
        'Check immunity to measles, varicella, hepatitis A and B at diagnosis, before immunosuppression starts.',
        'Give live vaccines (MMR, varicella, yellow fever) at least 4 weeks before starting immunosuppression. They are contraindicated while on significant immunosuppression.',
        'Recommend inactivated vaccines: influenza every year, pneumococcal, COVID-19, recombinant zoster (Shingrix) and HPV as eligible.',
        'Infants exposed to biologics in utero (especially infliximab and adalimumab) should not receive rotavirus vaccine. Discuss with the treating team before any live vaccine in the first 12 months.',
        'Encourage annual skin checks, and cervical screening every 3 years for people on immunosuppression.',
      ],
    },
    {
      heading: 'IBD in pregnancy',
      points: [
        'Conception during remission gives the best outcomes. Active disease increases the risk of miscarriage, preterm birth and low birth weight.',
        'Most IBD medicines are safe to continue in pregnancy, including 5-ASAs, thiopurines and most biologics. Stopping them risks a flare that harms the pregnancy more than the medicine.',
        'Methotrexate must be stopped at least 3 months before conception. Some small-molecule drugs (such as JAK inhibitors) are not recommended in pregnancy.',
        'Use folic acid, higher dose (5 mg) for people on sulfasalazine.',
        'People with active perianal disease or an ileal pouch may need caesarean section. Otherwise, vaginal birth is usually appropriate.',
      ],
    },
    {
      heading: 'Quick recap: IBD',
      points: [
        'Faecal calprotectin helps separate IBD from IBS in people under about 50 with diarrhoea.',
        'Red flags for acute severe colitis: 6 or more bloody stools a day with tachycardia, fever, anaemia or raised CRP. This needs same-day hospital assessment.',
        'Avoid NSAIDs where possible, stop smoking in Crohn disease, and check bone health in people with steroid exposure.',
        'Colonoscopic surveillance usually starts about 8 years after the onset of extensive colitis.',
      ],
    },
  ],
  '624': [
    {
      heading: 'Documentation and evidence',
      points: [
        'Clear clinical notes can be used later in protection orders, family law and criminal proceedings. Record the patient\'s words in quotation marks, the date, time and who was present.',
        'Describe injuries objectively: site, size (measured), shape, colour and pattern. Use body maps. Take photos only with consent, following practice policy.',
        'Avoid judgemental language and speculation in notes. Write "patient states partner pushed her" rather than "alleged".',
        'Keep records secure. Consider flagging a safety alert so staff do not disclose information to the partner, for example by phone or through shared SMS reminders.',
        'In My Health Record, the patient can restrict access to documents. Check whether the person using violence may have access to the patient\'s online accounts.',
      ],
    },
    {
      heading: 'Technology-facilitated abuse',
      points: [
        'Abuse through technology is common: tracking by phone or car GPS, monitoring messages and social media, controlling bank accounts, and threats to share intimate images.',
        'Ask about it: "Does your partner check your phone or know where you are all the time?"',
        'eSafety Commissioner resources help people secure devices and accounts. Changing passwords or removing trackers can alert the abuser, so plan safely with a specialist service first.',
        'Image-based abuse (sharing or threatening to share intimate images) is a crime. The eSafety Commissioner can help with removal.',
      ],
    },
    {
      heading: 'Coercive control',
      points: [
        'Coercive control is a pattern of behaviours that isolate, degrade, monitor, and control a person over time. It is a strong predictor of intimate partner homicide, even without physical violence.',
        'Examples include restricting money, contact with friends and family, or access to healthcare, as well as constant criticism, threats and monitoring.',
        'Coercive control is now a criminal offence in New South Wales and Queensland, and other states are moving to legislate.',
        'Patients may not recognise their experience as abuse. Naming the behaviour gently ("That sounds very controlling. How does it make you feel?") can help.',
      ],
    },
    {
      heading: 'Looking after yourself and your team',
      points: [
        'Hearing about violence repeatedly can cause vicarious trauma. Debrief with colleagues, use supervision, and access the practice\'s Employee Assistance Program or Drs4Drs.',
        'Practices should have a family violence policy, staff training, safe rooms for disclosure, and a list of local services.',
        'Doctors may also be experiencing family violence themselves. Support is available through 1800RESPECT and confidential doctors\' health services.',
      ],
    },
  ],
  S4: [
    {
      heading: 'DOAC practicalities',
      points: [
        'Apixaban 5 mg twice daily. Reduce to 2.5 mg twice daily if at least 2 of: age 80 or over, weight 60 kg or less, serum creatinine 133 micromol/L or higher.',
        'Rivaroxaban 20 mg once daily with the evening meal (it must be taken with food at this dose). Reduce to 15 mg once daily if creatinine clearance is 15–49 mL/min.',
        'Dabigatran 150 mg twice daily. Use 110 mg twice daily if aged 75 or over or at higher bleeding risk. Avoid if creatinine clearance is under 30 mL/min. Capsules must not be opened.',
        'Calculate creatinine clearance with the Cockcroft–Gault formula using actual body weight, not eGFR, when adjusting DOAC doses.',
        'Missed doses: for twice-daily DOACs, take within 6 hours of the missed dose, otherwise skip it. For once-daily DOACs, take within 12 hours, otherwise skip it. Never double up.',
      ],
    },
    {
      heading: 'Interactions and contraindications',
      points: [
        'DOACs are contraindicated with mechanical heart valves and moderate to severe mitral stenosis. Use warfarin.',
        'Avoid DOACs with strong inducers of CYP3A4 and P-gp (such as rifampicin, carbamazepine, phenytoin and St John\'s wort), which lower DOAC levels.',
        'Strong inhibitors (such as some azole antifungals and HIV protease inhibitors) increase DOAC levels and bleeding risk.',
        'Adding antiplatelets or NSAIDs increases bleeding risk. Review whether aspirin is still needed in people with stable coronary disease who are on anticoagulation, with the cardiologist.',
        'DOACs are not recommended in pregnancy or breastfeeding, or in antiphospholipid syndrome with previous thrombosis. Use low molecular weight heparin or warfarin.',
      ],
    },
    {
      heading: 'Anticoagulation in older and frail people',
      points: [
        'Age alone is not a reason to withhold anticoagulation. Older people have the greatest absolute benefit from stroke prevention.',
        'Falls risk is often overestimated. A person would need to fall about 300 times a year for the bleeding risk to outweigh the stroke benefit.',
        'Address modifiable bleeding risks: uncontrolled blood pressure, alcohol, NSAIDs, antiplatelets and anaemia.',
        'Review renal function at least yearly, and every 3–6 months if creatinine clearance is below 60 mL/min or the patient is frail.',
        'Use dose administration aids and involve carers to support adherence.',
      ],
    },
    {
      heading: 'Quick recap: oral anticoagulants',
      points: [
        'Assess stroke risk with CHA2DS2-VA (Australian guidelines) and treat reversible bleeding risk factors.',
        'Choose a DOAC in most non-valvular AF, dosed correctly for age, weight and renal function.',
        'Plan procedures with a clear stop and restart date, and use bridging rarely.',
      ],
    },
  ],
  '623': [
    {
      heading: 'Mental health and gender affirmation',
      points: [
        'Trans and gender-diverse people have high rates of depression, anxiety, self-harm and suicide. These are largely driven by minority stress: discrimination, rejection, violence and barriers to care.',
        'Gender-affirming care, family acceptance and social support are strongly associated with better mental health.',
        'Being trans or gender diverse is not a mental illness. Mental health assessment is needed only where there are symptoms, not as a barrier to affirming care.',
        'Screen for depression, anxiety, eating disorders, substance use and suicidality, as for any patient, and refer to affirming mental health services.',
        'Useful supports include QLife (1800 184 527) and local trans-led peer organisations.',
      ],
    },
    {
      heading: 'Children and adolescents',
      points: [
        'Gender diversity in children is part of normal human variation. Many children explore gender. Support the child and family, and avoid pushing towards any particular outcome.',
        'Puberty blockers and gender-affirming hormones for adolescents are prescribed by specialist multidisciplinary gender services, not in routine general practice. Policies differ by state and have been under review.',
        'The GP role includes supporting the family, managing mental health, coordinating care and referral, and checking school and social supports.',
        'Consent for adolescent treatment involves assessing the young person\'s capacity and, in many cases, parental involvement. Follow current state guidance and service criteria.',
      ],
    },
    {
      heading: 'Fertility and sexual health',
      points: [
        'Gender-affirming hormones can reduce fertility, possibly permanently. Discuss fertility preservation (sperm or egg freezing) before starting.',
        'Testosterone is not a contraceptive. People with a uterus and ovaries who have sex that could lead to pregnancy need contraception. Non-oestrogen options (such as an IUD, implant or progestogen-only pill) are usually preferred.',
        'Offer STI testing and PrEP based on anatomy and sexual practices, not gender identity.',
        'Feminising hormones reduce erectile function and ejaculate. Discuss sexual function and consider options if distressing.',
      ],
    },
    {
      heading: 'Quick recap: gender and gender diversity',
      points: [
        'Use the person\'s name and pronouns, and record them in the clinical system.',
        'The informed consent model allows GPs to start hormones in adults with capacity, with appropriate monitoring.',
        'Screen organs that are present: cervical screening for people with a cervix, breast screening per guidance, prostate is still present after feminisation.',
        'Monitor haematocrit on testosterone, and potassium on spironolactone.',
      ],
    },
  ],
  '622': [
    {
      heading: 'Cervical screening in Aboriginal and Torres Strait Islander women',
      points: [
        'Aboriginal and Torres Strait Islander women have about twice the incidence of cervical cancer, and more than three times the death rate of other Australian women.',
        'Self-collection has been welcomed by many First Nations women because it is private and can be done in the clinic, at home, or during another visit.',
        'Aboriginal Health Workers and Practitioners, female clinicians, and flexible locations help increase participation.',
        'Provide culturally safe information, and involve community in planning screening programs.',
        'Follow up results promptly and use active recall. Travel and cost barriers often delay colposcopy, so help arrange transport and appointments.',
      ],
    },
    {
      heading: 'HPV vaccination and elimination',
      points: [
        'Australia aims to eliminate cervical cancer as a public health problem (fewer than 4 cases per 100 000 women) by 2035, through vaccination, screening and treatment.',
        'Since 2023, a single dose of Gardasil 9 is used for adolescents aged 12–13 through the school program, with free catch-up to age 25.',
        'People who are immunocompromised still need 3 doses.',
        'Vaccinated people still need cervical screening, because the vaccine does not cover every high-risk HPV type and some were infected before vaccination.',
      ],
    },
    {
      heading: 'Common questions from patients',
      points: [
        '"Does HPV mean my partner cheated?" HPV can stay dormant for years, so a positive result does not mean recent infection or infidelity.',
        '"Should my partner be tested?" There is no routine HPV test for men. Most HPV infections clear by themselves.',
        '"I\'ve had a hysterectomy. Do I still need tests?" Depends on the reason. After total hysterectomy for benign disease with no history of high-grade lesions, screening usually stops. Otherwise vaginal vault tests may be needed.',
        '"I\'m not sexually active now." Anyone who has ever been sexually active should continue screening.',
        '"Is self-collection as good?" Yes, for HPV detection it is as accurate as a clinician-collected sample.',
      ],
    },
    {
      heading: 'Quick recap: cervical screening',
      points: [
        'Screen people with a cervix aged 25–74 every 5 years if HPV is not detected. Self-collection is an option for everyone.',
        'HPV 16/18 always needs referral to colposcopy. Other oncogenic types need liquid-based cytology to guide the next step.',
        'Symptoms such as postcoital or intermenstrual bleeding need diagnostic investigation, not screening.',
      ],
    },
  ],
}

export default topup
