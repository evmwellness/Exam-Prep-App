import type { UnitExtension } from '../../types'

const extra: Record<string, UnitExtension> = {
  '591': {
    sections: [
      {
        heading: 'Structured IPV risk assessment',
        points: [
          'Risk assessment identifies the likelihood of serious harm or death and guides the urgency of the response. Use your state\'s framework (for example MARAM in Victoria, DVSAT in NSW, CRAF in other states).',
          'Evidence-based high-risk factors: strangulation or choking, threats to kill, use or access to weapons, escalation in frequency or severity, recent or pending separation, stalking, sexual assault, pregnancy or a new baby, controlling or jealous behaviour, the perpetrator\'s suicidal threats, substance use or unemployment, and harm to pets.',
          'The victim-survivor\'s own sense of fear ("Do you think he could kill you?") is a strong predictor. Take it seriously.',
          'Children\'s safety is part of every assessment. Consider mandatory reporting.',
          'High-risk situations: refer urgently to specialist FDV services and police. Many regions have multi-agency risk assessment meetings (such as Safety Action Meetings).',
          'Document the risk assessment and actions taken. Review risk at every contact, because it changes over time.',
        ],
      },
      {
        heading: 'Impact of domestic violence on children',
        points: [
          'Children are affected whether or not they are physically harmed. They may see, hear or be drawn into violence, or live with its aftermath.',
          'Infants and toddlers: sleep problems, feeding difficulties, excessive crying, developmental delay, and disrupted attachment.',
          'Preschoolers: regression (toileting, speech), aggression, separation anxiety, and fearfulness.',
          'School-age children: anxiety, depression, aggression, poor concentration, school problems, somatic complaints, and taking on a protective role.',
          'Adolescents: substance use, self-harm, risk-taking, dating violence, leaving home early, and school refusal.',
          'Long-term: exposure to DV is an adverse childhood experience linked to later mental and physical illness and to intergenerational patterns of violence. Supporting the non-offending parent and trauma-informed therapy for children help recovery.',
        ],
      },
      {
        heading: 'Abuse in same-sex and gender-diverse relationships',
        points: [
          'IPV occurs at similar or higher rates in LGBTQA+ relationships compared with heterosexual relationships. Bisexual women and trans people report particularly high rates.',
          'Unique tactics: threatening to "out" someone to family, employers or communities, controlling access to gender-affirming care or medicines, undermining identity ("You\'re not a real woman or man"), isolating from LGBTQA+ community, and using HIV status as control.',
          'Barriers to help-seeking: fear of discrimination, mainstream services seen as heterosexual or women-only, not recognising the abuse as DV, small community networks (confidentiality), and fear of reinforcing negative stereotypes.',
          'Ask inclusive questions ("partner" rather than assumptions) and screen everyone.',
          'Refer to inclusive services (for example Rainbow Door, ACON, state LGBTQA+ family violence services) and QLife peer support.',
        ],
      },
      {
        heading: 'Elder abuse and the Serious Incident Response Scheme',
        points: [
          'Elder abuse affects about 1 in 6 older Australians living in the community. The most common forms are psychological and financial abuse, often by adult children.',
          'Warning signs: unexplained injuries, weight loss, fear or anxiety around certain people, sudden financial changes (withdrawals, changed wills, unpaid bills), social isolation, poor hygiene, and missed medications.',
          'SIRS applies to Commonwealth-funded residential aged care (and home care since 2022). Providers must report serious incidents to the Aged Care Quality and Safety Commission.',
          'Reportable incident types: unreasonable use of force, unlawful sexual contact or inappropriate sexual conduct, psychological or emotional abuse, unexpected death, stealing or financial coercion by a staff member, neglect, inappropriate use of restrictive practices, and unexplained absence from care.',
          'Priority 1 (causing or could cause physical or psychological injury requiring treatment, unlawful sexual contact, unexplained absence, unexpected death, or police notification): report within 24 hours. Priority 2 (other reportable incidents): within 30 days.',
          'The GP\'s role: recognise and document concerns, ensure the provider has reported (or report to the Commission yourself), involve police if a crime is suspected, and support the resident (medical assessment, forensic examination for sexual assault).',
        ],
      },
      {
        heading: 'Sibling bullying vs rivalry',
        points: [
          'Sibling rivalry is normal conflict: competition for parental attention and resources, occasional arguments and physical fights between relatively equal siblings, and reciprocal behaviour that resolves.',
          'Sibling bullying: repeated, intentional aggression (physical, verbal, psychological, relational) with a power imbalance (age, size, gender, ability). It is one-directional and causes distress.',
          'Sibling bullying is often dismissed but has effects similar to peer bullying: depression, anxiety, self-harm and psychotic-like experiences in adolescence and early adulthood.',
          'Risk factors: family stress, harsh parenting, family violence, parental favouritism, and a sibling with behavioural difficulties.',
          'Management: validate the child\'s experience, advise parents to intervene consistently, supervise, set clear rules, teach conflict resolution and model respectful behaviour, and refer for family therapy. Screen for broader family violence.',
          'Severe or sexual sibling abuse requires child protection involvement.',
        ],
      },
      {
        heading: 'Physical child abuse: recognition',
        points: [
          'Sentinel injuries: minor injuries in pre-mobile infants (bruises, frenulum tears, intraoral injuries) may precede severe abuse. "Those who don\'t cruise rarely bruise."',
          'TEN-4-FACESp: bruising on the Torso, Ears or Neck in children under 4, any bruise under 4 months, or bruising on the Frenulum, Angle of jaw, Cheeks, Eyelids, Subconjunctivae, or patterned bruising, suggests abuse.',
          'Patterned injuries: slap marks, belt or cord loops, bite marks, grab marks, cigarette or immersion burns (glove or stocking distribution, sharp margins).',
          'Fractures concerning for abuse: any fracture in a non-ambulant child, rib fractures (especially posterior), metaphyseal corner fractures, multiple fractures of different ages, skull fractures with an inadequate history.',
          'Head injury (abusive head trauma): vomiting, lethargy, irritability, seizures, apnoea, and retinal haemorrhages. It is a medical emergency.',
          'Response: treat injuries, ensure immediate safety, document precisely, report to child protection (mandatory), and refer to a child protection unit for a skeletal survey and forensic assessment. Consider siblings.',
        ],
      },
    ],
    keyNumbers: [
      'SIRS Priority 1: report within 24 hours; Priority 2: within 30 days',
      'Elder abuse: ~1 in 6 older Australians',
      'TEN-4: Torso, Ears, Neck (<4 years); any bruise <4 months',
      'Posterior rib and metaphyseal fractures: highly suggestive of abuse',
      'Strangulation: major homicide risk factor',
      '1800RESPECT: 1800 737 732; QLife: 1800 184 527',
    ],
    workedCase: {
      title: 'Mavis has a visitor at night',
      paragraphs: [
        'Mavis, 86, has moderate dementia and lives in residential aged care. A night nurse found a male resident in her room with her nightdress disarranged. Mavis is distressed and repeatedly says "he hurt me". The nurse calls you the next morning.',
        'You recognise that this is a potential sexual assault and a SIRS Priority 1 incident. You confirm the facility has notified police and the Aged Care Quality and Safety Commission within 24 hours. You advise preserving evidence (not washing bedding or clothing) and arranging a forensic medical examination through a sexual assault service.',
        'You review Mavis urgently: examine her with consent (or best interests if she lacks capacity), look for injuries, consider STI testing and prophylaxis, and assess her distress and pain. You document her words and your findings carefully.',
        'You contact her substitute decision-maker (her daughter), provide trauma-informed follow-up, and work with the facility on safety measures (supervision, room changes, behaviour management for the other resident, who also has dementia). You monitor Mavis for behaviour change, sleep disturbance and anxiety over the following weeks.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Abuse across the lifespan',
        lead: 'Choose the SINGLE most appropriate action for each situation.',
        options: [
          'Mandatory report to child protection and refer to child protection unit',
          'Ensure SIRS Priority 1 report within 24 hours and notify police',
          'SIRS Priority 2 report within 30 days',
          'Refer to elder abuse helpline and consider guardianship application',
          'Parenting advice about sibling rivalry',
          'Refer to LGBTQA+ inclusive family violence service',
          'No action required',
        ],
        items: [
          { stem: 'A 4-month-old with bruising to the ear and cheek; parents say "he rolled into the cot".', answer: 0 },
          { stem: 'A resident in aged care is slapped by a staff member, leaving a red mark requiring assessment.', answer: 1 },
          { stem: 'An 82-year-old at home whose son controls her bank account and has sold her car; she has fluctuating capacity.', answer: 3 },
          { stem: 'Two brothers aged 8 and 9 argue over toys and occasionally wrestle; both instigate.', answer: 4 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Carmelita presents with her children',
        scenario:
          'Carmelita, 34, attends with her children (5 and 8) for the 5-year-old\'s ear infection. She looks anxious and has a healing bruise on her cheek. Her 8-year-old, Donna, has been in fights at school. When the children are with the nurse, Carmelita says her husband "gets angry when he drinks".',
        questions: [
          {
            kind: 'multi',
            stem: 'Which THREE steps are most important in responding to this disclosure?',
            options: [
              'Listen and validate using the LIVES approach',
              'Ask directly about violence, fear and safety at home, including strangulation, weapons and threats',
              'Ask about the children\'s exposure and safety',
              'Invite her husband to the next appointment to discuss it',
              'Suggest couples counselling',
              'Tell her she must leave today',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            context: 'She says he hits her when drunk, once choked her, and the children hear it. She is afraid but does not want to leave.',
            stem: 'What is the most appropriate response regarding the children?',
            options: [
              'No action unless the children are physically hurt',
              'Consider your mandatory reporting obligations to child protection, ideally informing her and supporting her, while prioritising safety',
              'Report the mother for neglect',
              'Remove the children yourself',
              'Wait until she decides to leave',
            ],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which THREE components should her safety plan include?',
            options: [
              'Safe contacts and emergency numbers (000, 1800RESPECT)',
              'An escape bag with ID, money, medicines and documents',
              'A plan for the children in an emergency (safe place, code word)',
              'Confronting her husband when he is drunk',
              'Removing all phone passwords',
              'Staying home to avoid provoking him',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'Donna has become aggressive at school. What is the most likely explanation?',
            options: ['Oppositional defiant disorder only', 'A trauma response to exposure to family violence', 'ADHD only', 'Normal behaviour', 'Autism'],
            answer: 1,
          },
          {
            kind: 'emq',
            theme: 'Referral options',
            lead: 'Choose the SINGLE best service for each need.',
            options: ['Specialist family violence service', 'Child trauma counselling', 'Police (intervention order)', 'Men\'s behaviour change program', 'Legal Aid'],
            items: [
              { stem: 'Carmelita wants help to understand her options and plan for safety', answer: 0 },
              { stem: 'Donna needs support for her distress and behaviour', answer: 1 },
              { stem: 'Carmelita decides she wants legal protection from her husband', answer: 2 },
            ],
          },
        ],
      },
    ],
  },
  '590': {
    sections: [
      {
        heading: 'Irritable bowel syndrome: positive diagnosis',
        points: [
          'IBS is a disorder of gut–brain interaction. Contributors are visceral hypersensitivity, altered motility, microbiome changes and psychological factors. It affects about 10% of adults.',
          'Subtypes: IBS-C (constipation), IBS-D (diarrhoea), IBS-M (mixed), guided by the Bristol stool chart.',
          'Make a positive diagnosis using Rome IV criteria plus limited testing, rather than extensive exclusion testing, when there are no alarm features.',
          'Baseline tests: FBC, CRP, coeliac serology (on gluten), and faecal calprotectin for diarrhoea-predominant symptoms (age under 50). Consider TSH, iron studies and stool tests for infection as indicated.',
          'Alarm features needing colonoscopy or further workup: age over 50 with new symptoms, rectal bleeding, weight loss, nocturnal symptoms, iron deficiency anaemia, family history of CRC, IBD or coeliac disease, a palpable mass, and fever.',
          'Microscopic colitis (older women, watery diarrhoea, NSAIDs, PPIs, SSRIs, statins, autoimmune disease) needs colonoscopy with random biopsies. It is treated with budesonide.',
        ],
      },
      {
        heading: 'IBS management',
        points: [
          'Explanation and reassurance build the therapeutic relationship: symptoms are real, not dangerous, and manageable.',
          'Diet: regular meals, adequate fluids, and reducing caffeine, alcohol, fatty and spicy foods if these trigger symptoms. Soluble fibre (psyllium) helps. Insoluble fibre (bran) can worsen bloating.',
          'Low FODMAP diet with a dietitian: restriction for 2–6 weeks, then structured reintroduction, then long-term personalised diet. About 50–75% improve.',
          'Medicines by symptom: antispasmodics (mebeverine, hyoscine butylbromide) and peppermint oil for pain. Loperamide for diarrhoea. Osmotic laxatives (macrogol) for constipation. Low-dose TCA (amitriptyline 10–30 mg) for pain and diarrhoea. SSRIs for pain with anxiety. Prucalopride or linaclotide for refractory IBS-C (specialist or PBS criteria).',
          'Psychological: gut-directed hypnotherapy, CBT (including online programs such as Mindspot or the Monash app resources). These are as effective as medicines.',
          'Exercise and stress management help. Avoid repeated investigations once the diagnosis is secure.',
        ],
      },
      {
        heading: 'Metabolic dysfunction-associated steatotic liver disease (MASLD)',
        points: [
          'MASLD (formerly NAFLD) is hepatic steatosis with at least one cardiometabolic risk factor and no other cause. It affects about 30% of adults, and up to 70% of people with T2D.',
          'The spectrum runs from steatosis to steatohepatitis (MASH) to fibrosis, cirrhosis and HCC. Fibrosis stage is the main predictor of liver outcomes, but CVD is the leading cause of death.',
          'Detection: raised ALT (often mild; may be normal), or steatosis on ultrasound. Exclude alcohol excess (MetALD if drinking is moderate), viral hepatitis, haemochromatosis, autoimmune liver disease, Wilson disease (under 40) and drugs (methotrexate, amiodarone, steroids).',
          'Fibrosis risk stratification: FIB-4 (age, AST, ALT, platelets). Under 1.3 is low risk (repeat in 2–3 years). 1.3–2.67 needs transient elastography (FibroScan) or ELF test. Over 2.67 needs referral. Use a cut-off of 2.0 in people over 65.',
          'Elastography: liver stiffness under 8 kPa is low risk. 8–12 kPa is indeterminate. Over 12 kPa suggests advanced fibrosis, so refer to hepatology.',
          'Advanced fibrosis or cirrhosis: HCC surveillance every 6 months, variceal screening, vaccination (hepatitis A and B), and avoid alcohol.',
        ],
      },
      {
        heading: 'Dietary and lifestyle management of fatty liver',
        points: [
          'Weight loss is the cornerstone: 3–5% improves steatosis, 7–10% improves MASH, and 10% or more can regress fibrosis.',
          'Dietary pattern: Mediterranean diet (vegetables, legumes, wholegrains, olive oil, fish, nuts) improves liver fat even without weight loss.',
          'Reduce added sugars, especially fructose and sugar-sweetened beverages, refined carbohydrates, ultra-processed foods and saturated fat.',
          'Coffee (2–3 cups a day) is associated with less fibrosis. Alcohol: minimise, and abstain if there is significant fibrosis.',
          'Exercise: 150–300 minutes of aerobic plus resistance training reduces liver fat independent of weight loss.',
          'Medicines: GLP-1 RAs (semaglutide improves MASH), SGLT2 inhibitors and pioglitazone in T2D (specialist). Resmetirom and other MASH-specific agents are emerging. Bariatric surgery for eligible patients. Manage CVD risk with statins (safe in MASLD).',
        ],
      },
      {
        heading: 'Crohn disease: long-term complications and monitoring',
        points: [
          'Stricturing disease: fibrotic or inflammatory narrowing causes obstructive symptoms (colicky pain, bloating, vomiting). Needs a low-residue diet, endoscopic dilation or surgery.',
          'Penetrating disease: fistulae (perianal, enterovesical with pneumaturia and recurrent UTIs, enterovaginal, enterocutaneous) and abscesses. Needs a combined medical and surgical approach.',
          'Nutritional: B12 deficiency (terminal ileal disease or resection, so check yearly), iron deficiency, vitamin D, zinc and magnesium deficiency, and short bowel syndrome after multiple resections.',
          'Bile acid malabsorption (after ileal resection): watery diarrhoea responding to bile acid sequestrants (cholestyramine). Gallstones (disrupted bile salt circulation) and oxalate kidney stones (from fat malabsorption).',
          'Cancer risks: colorectal (Crohn colitis, so surveillance colonoscopy), small bowel adenocarcinoma, lymphoma and skin cancers (thiopurines), and cervical dysplasia (immunosuppression).',
          'Other: osteoporosis (steroids, malabsorption), VTE, growth and pubertal delay in children, anxiety and depression, and fatigue.',
        ],
      },
      {
        heading: 'Approach to abnormal liver function tests',
        points: [
          'Pattern recognition: hepatocellular (ALT and AST predominantly raised), cholestatic (ALP and GGT predominantly raised), or isolated bilirubin (for example Gilbert syndrome, an unconjugated rise with fasting or illness, benign).',
          'Mild ALT rise (under 3 times the upper limit): MASLD, alcohol, medicines (statins usually benign, amiodarone, methotrexate, antiepileptics, antibiotics such as amoxicillin–clavulanate, herbal products), hepatitis B and C, haemochromatosis, coeliac disease, autoimmune hepatitis, thyroid disease, muscle injury (check CK).',
          'Marked ALT rise (over 10 times the upper limit): acute viral hepatitis, drug-induced liver injury (paracetamol), ischaemic hepatitis, autoimmune hepatitis, or acute biliary obstruction (early).',
          'Cholestatic: bile duct obstruction (stones, tumours; use ultrasound), PBC (AMA-positive, middle-aged women, itch), PSC (associated with UC), drug-induced (amoxicillin–clavulanate, flucloxacillin), infiltrative disease.',
          'Liver screen: hepatitis B and C serology, iron studies (ferritin and transferrin saturation over 45%), autoantibodies (ANA, ASMA, AMA), immunoglobulins, coeliac serology, caeruloplasmin (under 40), alpha-1 antitrypsin, and ultrasound.',
          'Refer: persistent unexplained abnormalities, signs of chronic liver disease, suspected autoimmune liver disease, and fibrosis on non-invasive tests.',
        ],
      },
    ],
    keyNumbers: [
      'IBS: Rome IV – pain ≥1 day/week for 3 months',
      'Low FODMAP: 2–6 weeks restriction → reintroduce → personalise',
      'FIB-4: <1.3 low; 1.3–2.67 elastography; >2.67 refer (cut-off 2.0 if >65)',
      'Liver stiffness: <8 kPa low; >12 kPa advanced fibrosis',
      'Weight loss: 7–10% improves MASH; ≥10% can regress fibrosis',
      'Transferrin saturation >45%: consider haemochromatosis',
      'Check B12 yearly after ileal disease/resection',
      'MASLD affects ~30% of adults',
    ],
    workedCase: {
      title: 'Niamh presents with abnormal blood tests',
      paragraphs: [
        'Niamh, 52, has an ALT of 78 U/L (upper limit 35) on routine bloods. She has T2D (HbA1c 60 on metformin), BMI 34, hypertension and dyslipidaemia. She drinks about 7 standard drinks a week. There are no signs of chronic liver disease.',
        'You complete a liver screen: hepatitis B and C serology negative, ferritin 320 with transferrin saturation 30% (the ferritin is likely metabolic and inflammatory), autoantibodies negative, coeliac serology negative, TSH normal. Ultrasound shows a fatty liver. Platelets are 210.',
        'FIB-4 is 1.6 (indeterminate), so you arrange elastography. Liver stiffness is 9.5 kPa (indeterminate to possible significant fibrosis), and you refer her to a hepatology clinic.',
        'Management: dietitian referral for a Mediterranean-style diet, reduced sugary drinks and alcohol, exercise, and switching her diabetes regimen to add semaglutide (weight, glucose, and liver benefit). You continue her statin and treat BP. At 12 months she has lost 9% of her weight, her ALT is 32 and liver stiffness has improved to 7.2 kPa.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Abnormal liver tests',
        lead: 'Choose the SINGLE most likely diagnosis for each patient.',
        options: [
          'MASLD (fatty liver)',
          'Haemochromatosis',
          'Primary biliary cholangitis',
          'Gilbert syndrome',
          'Drug-induced liver injury',
          'Alcohol-related liver disease',
          'Autoimmune hepatitis',
          'Choledocholithiasis',
        ],
        items: [
          { stem: 'A 22-year-old with mild jaundice during a viral illness; isolated raised unconjugated bilirubin, normal LFTs otherwise.', answer: 3 },
          { stem: 'A 55-year-old woman with itch, fatigue, raised ALP and GGT, and positive antimitochondrial antibodies.', answer: 2 },
          { stem: 'A 48-year-old man with fatigue, arthralgia, diabetes, ferritin 1,200 and transferrin saturation 78%.', answer: 1 },
          { stem: 'A 70-year-old with cholestatic LFTs 3 weeks after a course of amoxicillin–clavulanate.', answer: 4 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Ben has bowel problems',
        scenario:
          'Ben, 23, has had 3 months of abdominal pain, loose stools 4–5 times a day (including at night), 6 kg weight loss and recurrent mouth ulcers. His aunt has Crohn disease. He is a smoker. Examination shows right iliac fossa tenderness and a perianal skin tag.',
        questions: [
          {
            kind: 'multi',
            stem: 'Which FOUR investigations are most appropriate initially?',
            options: [
              'FBC, CRP, iron studies, albumin',
              'Faecal calprotectin',
              'Stool MCS and C. difficile',
              'Coeliac serology',
              'Serum amylase',
              'Abdominal X-ray',
            ],
            answers: [0, 1, 2, 3],
          },
          {
            kind: 'sba',
            context: 'Calprotectin is 950 µg/g, CRP 42, Hb 112, albumin 31.',
            stem: 'What is the most appropriate next step?',
            options: [
              'Low FODMAP diet',
              'Urgent gastroenterology referral for colonoscopy (± small bowel imaging)',
              'Repeat calprotectin in 6 months',
              'Start oral prednisolone before referral',
              'Reassure – IBS',
            ],
            answer: 1,
          },
          {
            kind: 'sba',
            context: 'Colonoscopy and MRI enterography confirm terminal ileal Crohn disease.',
            stem: 'Which lifestyle change most improves his disease course?',
            options: ['Gluten-free diet', 'Smoking cessation', 'High-fibre diet', 'Probiotics', 'Stopping all dairy'],
            answer: 1,
          },
          {
            kind: 'multi',
            stem: 'Which THREE long-term issues should you monitor in his GP care?',
            options: [
              'Vitamin B12, iron and vitamin D levels',
              'Bone health if steroids are used',
              'Vaccination status and pre-immunosuppression screening',
              'Annual gastroscopy',
              'Annual brain MRI',
              'Routine CA19-9',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'emq',
            theme: 'Crohn disease complications',
            lead: 'Choose the SINGLE most likely complication for each presentation.',
            options: [
              'Stricture with small bowel obstruction',
              'Enterovesical fistula',
              'Perianal abscess',
              'Bile acid malabsorption',
              'Oxalate kidney stones',
              'Gallstones',
            ],
            items: [
              { stem: 'Recurrent UTIs and air bubbles in the urine', answer: 1 },
              { stem: 'Watery diarrhoea after ileal resection, improving with cholestyramine', answer: 3 },
              { stem: 'Colicky pain, distension and vomiting after eating corn', answer: 0 },
            ],
          },
        ],
      },
    ],
  },
  '589': {
    sections: [
      {
        heading: 'Shoulder pain: examination and diagnosis',
        points: [
          'Age helps: under 40 suggests instability, labral injury or rotator cuff tendinopathy in athletes. Over 40 suggests rotator cuff disease, adhesive capsulitis, OA, or referred pain (neck, cardiac, diaphragmatic).',
          'Examination: inspect for wasting (supraspinatus and infraspinatus), palpate the AC joint, and compare active and passive range. Test strength (supraspinatus: empty can; infraspinatus: external rotation; subscapularis: lift-off or belly press). Impingement signs (Hawkins–Kennedy, Neer).',
          'Loss of passive external rotation means adhesive capsulitis or glenohumeral OA (X-ray distinguishes them). Painful arc (60–120°) suggests subacromial pain. Weakness suggests a cuff tear.',
          'Imaging: X-ray (OA, calcific tendinopathy, fractures, dislocation) first. Ultrasound for rotator cuff tears and bursitis. MRI for labral injury or pre-surgical planning.',
          'Red flags: trauma with deformity or loss of function (dislocation, fracture), fever (septic arthritis), a mass (tumour), neurological deficit, or chest pain radiating to the shoulder (cardiac).',
          'Management of rotator cuff tendinopathy: activity modification, a progressive exercise program (physiotherapy for 6–12 weeks), NSAIDs, and a subacromial steroid injection for short-term relief (limit repeat injections). Surgery (subacromial decompression) has limited benefit over exercise.',
        ],
      },
      {
        heading: 'Frozen shoulder (adhesive capsulitis)',
        points: [
          'Frozen shoulder is idiopathic capsular inflammation and fibrosis. It is more common in women aged 40–60, and with diabetes (up to 20%), thyroid disease, and after immobilisation.',
          'Phases: painful (freezing, 2–9 months), stiff (frozen, 4–12 months), and recovery (thawing, 12–42 months). Most recover function, though some have residual stiffness.',
          'Clinical: gradual onset of pain (worse at night) and global loss of active and passive movement, especially external rotation. X-ray is normal (it excludes OA).',
          'Treatment: education and reassurance, analgesia, intra-articular corticosteroid injection (most effective in the early painful phase), physiotherapy (gentle range of motion), and hydrodilatation. Surgery (manipulation or release) for refractory cases.',
          'Check glucose/HbA1c and TSH.',
        ],
      },
      {
        heading: 'Knee pain in adults',
        points: [
          'Osteoarthritis: activity-related pain, brief morning stiffness, crepitus, bony enlargement, and reduced range. Diagnosis is clinical over 45. X-ray (weight-bearing) only for atypical cases or surgical referral. MRI is not needed.',
          'OA management: education, exercise (strengthening and aerobic, for example GLA:D), weight loss (5–10% reduces pain), walking aids, topical NSAIDs, and oral NSAIDs if safe. Paracetamol has limited benefit. Avoid opioids. Intra-articular steroid gives short-term relief. Joint replacement for severe symptoms.',
          'Arthroscopic debridement or meniscectomy for degenerative knee disease is not recommended (no benefit over exercise, with surgical risk). MBS restrictions apply.',
          'Acute knee injuries: Ottawa knee rules for X-ray. An ACL tear (pop, rapid swelling, instability) or meniscal tear (twisting, delayed swelling, locking) needs physiotherapy ± orthopaedic referral. A truly locked knee needs urgent referral.',
          'Other: patellofemoral pain (younger, anterior pain with stairs and squatting), pes anserine bursitis (medial below the joint line), gout or pseudogout (acute hot joint, so aspirate), and referred hip pain.',
        ],
      },
      {
        heading: 'Hip and lateral hip pain',
        points: [
          'Hip OA: groin pain (sometimes thigh or knee), stiffness, reduced internal rotation, and a limp. Management is similar to knee OA. Joint replacement has excellent outcomes for severe disease.',
          'Greater trochanteric pain syndrome (gluteal tendinopathy ± bursitis): lateral hip pain, tenderness over the greater trochanter, pain lying on the side, pain on stairs and single-leg stance. Common in women over 40.',
          'GTPS management: education and load management (avoid crossing legs, standing hip-hung, and lying on the affected side), progressive gluteal strengthening (physiotherapy), weight loss, and corticosteroid injection for short-term relief (exercise gives better long-term outcomes).',
          'Red flags in hip pain: an older person unable to weight-bear after a fall (occult fracture, so image), avascular necrosis (steroids, alcohol), septic arthritis, malignancy, and referred pain from the lumbar spine.',
          'Femoroacetabular impingement in younger active adults: groin pain with flexion and rotation. Refer if persistent.',
        ],
      },
      {
        heading: 'Low back pain: evidence-based care',
        points: [
          'Acute non-specific low back pain usually improves substantially within 6 weeks. Advise staying active and continuing usual activities (including work, with modifications), and use heat.',
          'Medicines: NSAIDs for short courses (if safe) have modest benefit. Paracetamol is not effective for acute low back pain. Opioids have limited benefit and carry harms. Muscle relaxants are not recommended. Gabapentinoids do not work for sciatica.',
          'Imaging is not needed for non-specific low back pain without red flags. It does not improve outcomes, and incidental findings (disc bulges, degeneration) are common in people without pain.',
          'Red flags: cauda equina (saddle anaesthesia, bladder or bowel dysfunction), cancer (history, weight loss, age over 50, night pain), infection (fever, IV drug use, immunosuppression), fracture (trauma, osteoporosis, steroids), inflammatory back pain (under 40, morning stiffness, improves with exercise: axial spondyloarthritis), and progressive neurological deficit.',
          'Chronic low back pain (over 12 weeks): exercise therapy, psychological approaches (CBT), multidisciplinary rehabilitation, and addressing yellow flags (fear-avoidance, catastrophising, low mood, work dissatisfaction).',
          'Sciatica: most improves within 6–12 weeks. Consider epidural steroid injection for short-term relief. Refer for surgery with progressive deficit, cauda equina, or severe persistent radicular pain after 6–12 weeks.',
        ],
      },
      {
        heading: 'Osteoporosis and fragility fractures',
        points: [
          'Osteoporosis: T-score −2.5 or lower (DXA), or a minimal-trauma fracture (a fall from standing height or less) at the hip, spine, wrist, humerus or pelvis in people over 50.',
          'Risk factors: age, female sex, early menopause, low BMI, previous fracture, family history of hip fracture, smoking, alcohol, corticosteroids (7.5 mg prednisolone or more for over 3 months), aromatase inhibitors, ADT, rheumatoid arthritis, coeliac disease, hyperthyroidism, hyperparathyroidism, and low vitamin D.',
          'Fracture risk calculators: FRAX and the Garvan calculator (both used in Australia).',
          'Investigations: DXA, calcium, phosphate, vitamin D, UEC, LFT, TSH, testosterone (men), serum protein electrophoresis (myeloma, if vertebral fractures), and coeliac serology.',
          'Treatment: bisphosphonates (oral alendronate or risedronate weekly, or IV zoledronic acid yearly; drug holiday after 3–5 years of IV or 5–10 years of oral in lower-risk patients), denosumab 6-monthly (never stop without follow-on bisphosphonate), romosozumab or teriparatide for very high risk (specialist).',
          'Rare side effects: osteonecrosis of the jaw (dental review before starting if possible) and atypical femoral fractures (thigh pain on long-term therapy, so X-ray).',
          'Falls prevention: strength and balance exercise, home safety, vision check, medicine review (sedatives, antihypertensives), vitamin D and calcium, and hip protectors in residential care.',
        ],
      },
      {
        heading: 'Hand and wrist problems',
        points: [
          'Carpal tunnel syndrome: numbness and tingling in the thumb, index, middle and radial half of the ring finger, worse at night and with gripping. Risk factors: pregnancy, diabetes, hypothyroidism, obesity, RA, repetitive work. Tests: Phalen, Tinel, Durkan compression. Nerve conduction studies confirm and grade. Treatment: night splint, steroid injection, surgical release (thenar wasting or severe NCS findings means early surgery).',
          'De Quervain tenosynovitis: radial wrist pain, positive Finkelstein test, common in new parents. Splint, steroid injection.',
          'Trigger finger: catching or locking of a finger. Steroid injection (effective), surgical release if recurrent.',
          'Dupuytren disease: palmar nodules and cords causing flexion contracture. Refer when the tabletop test is positive (cannot lay the hand flat).',
          'Ganglion cysts: often resolve spontaneously. Aspiration or excision if symptomatic.',
          'Scaphoid fracture: anatomical snuffbox tenderness after a fall. Immobilise even if the X-ray is normal. Repeat X-ray at 10–14 days, or arrange early MRI or CT.',
        ],
      },
    ],
    keyNumbers: [
      'Frozen shoulder: up to 20% in diabetes; recovery 1–3 years',
      'Knee OA: 5–10% weight loss reduces pain',
      'Acute low back pain: most improve within 6 weeks',
      'Osteoporosis: T-score ≤−2.5 or minimal-trauma fracture',
      'Steroids ≥7.5 mg prednisolone >3 months: bone risk',
      'Denosumab: never stop without follow-on bisphosphonate',
      'Bisphosphonate holiday after 3–5 years (IV) / 5–10 years (oral) in lower risk',
      'Scaphoid: immobilise; repeat X-ray 10–14 days or MRI',
    ],
    workedCase: {
      title: 'Low back pain with a twist',
      paragraphs: [
        'Graham, 58, presents with 3 weeks of low back pain that wakes him at night and is not eased by rest. He has lost 5 kg and feels tired. He had a "kidney operation" 4 years ago for what he calls "a growth". He has no bladder or bowel symptoms and no leg weakness.',
        'Red flags: age over 50, night pain, weight loss and a cancer history (renal cell carcinoma). This is not non-specific low back pain. Examination shows tenderness over L2 with a normal neurological exam.',
        'You arrange urgent bloods (FBC, ESR/CRP, calcium, ALP, UEC, LFT, PSA, serum protein electrophoresis) and imaging. MRI of the whole spine shows an L2 metastasis without cord compression. You contact his oncology team for urgent review.',
        'You provide analgesia (regular paracetamol, an NSAID if renal function allows, and an opioid), give safety-netting advice about cord compression (new leg weakness, numbness or sphincter symptoms mean an emergency), and support Graham and his family through the diagnosis. He receives targeted radiotherapy and systemic therapy.',
      ],
    },
    questions: [
      {
        kind: 'emq',
        theme: 'Musculoskeletal diagnoses',
        lead: 'Choose the SINGLE most likely diagnosis for each patient.',
        options: [
          'Rotator cuff tendinopathy',
          'Full-thickness rotator cuff tear',
          'Adhesive capsulitis',
          'Greater trochanteric pain syndrome',
          'Carpal tunnel syndrome',
          'De Quervain tenosynovitis',
          'Axial spondyloarthritis',
          'Knee osteoarthritis',
        ],
        items: [
          { stem: 'A 64-year-old who fell on his outstretched arm and now cannot raise the arm; passive range is full.', answer: 1 },
          { stem: 'A 30-year-old new mother with radial wrist pain worse lifting her baby; pain on ulnar deviation with thumb flexed.', answer: 5 },
          { stem: 'A 28-year-old man with 6 months of low back pain, morning stiffness over an hour, better with exercise.', answer: 6 },
          { stem: 'A 55-year-old woman with lateral hip pain lying on that side at night and tenderness over the greater trochanter.', answer: 3 },
        ],
      },
    ],
    kfp: [
      {
        title: 'Shoulder pain in a woman with diabetes',
        scenario:
          'Robyn, 54, has type 2 diabetes. She has 4 months of worsening left shoulder pain, worse at night, and now cannot reach behind her back or brush her hair. There was no injury. Active and passive external rotation are both markedly reduced.',
        questions: [
          {
            kind: 'sba',
            stem: 'What is the most likely diagnosis?',
            options: ['Rotator cuff tear', 'Adhesive capsulitis', 'Cervical radiculopathy', 'Subacromial bursitis', 'Glenohumeral dislocation'],
            answer: 1,
          },
          {
            kind: 'sba',
            stem: 'Which initial imaging is most appropriate?',
            options: ['Shoulder X-ray (to exclude OA and other bony causes)', 'MRI shoulder', 'CT shoulder', 'Bone scan', 'No imaging ever'],
            answer: 0,
          },
          {
            kind: 'multi',
            stem: 'Which THREE treatments are appropriate in the painful phase?',
            options: [
              'Analgesia (NSAID if suitable) and education about the natural history',
              'Intra-articular corticosteroid injection',
              'Gentle physiotherapy for range of motion within pain limits',
              'Immediate surgical release',
              'Complete immobilisation in a sling for 6 weeks',
              'Long-term opioids',
            ],
            answers: [0, 1, 2],
          },
          {
            kind: 'sba',
            stem: 'What additional test is relevant given her risk factors?',
            options: ['HbA1c (and TSH)', 'Rheumatoid factor', 'HLA-B27', 'Serum urate', 'Vitamin B12'],
            answer: 0,
          },
          {
            kind: 'emq',
            theme: 'Prognosis and follow-up',
            lead: 'Choose the SINGLE best statement for each question from Robyn.',
            options: [
              'Most people recover function over 1–3 years',
              'It will never improve',
              'Hydrodilatation or specialist referral if not improving',
              'The other shoulder may be affected later',
              'Surgery is always needed',
            ],
            items: [
              { stem: '"Will my shoulder get better?"', answer: 0 },
              { stem: '"What if it\'s not improving after 6 months of treatment?"', answer: 2 },
              { stem: '"Could this happen in my other shoulder?"', answer: 3 },
            ],
          },
        ],
      },
    ],
  },
}

export default extra
