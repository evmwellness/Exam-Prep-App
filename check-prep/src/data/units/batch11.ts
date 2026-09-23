import type { Unit } from '../../types'

const units: Unit[] = [
  {
    id: '592',
    label: 'Unit 592',
    date: 'Apr 2022',
    title: 'Neurodiversity',
    specialty: 'Paediatrics & Child Health',
    alsoRelevant: ['Mental Health', 'Neurology'],
    topics: [
      'Autism presentations in children and adults',
      'Tourette syndrome and tic disorders',
      'ADHD and stimulant medicines',
      'Anxiety and low self-esteem in neurodivergent children',
      'Speech delay and tantrums',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2022/neurodiversity',
    overview:
      'Neurodivergent people (autism, ADHD, tic disorders, learning differences) often present to GPs with secondary problems: anxiety, school refusal, burnout or behaviour. A neurodiversity-affirming approach recognises strengths and focuses on support rather than "fixing". Timely assessment, safe prescribing and advocacy (school, NDIS) are key.',
    sections: [
      {
        heading: 'Autism',
        points: [
          'DSM-5: persistent differences in social communication and interaction plus restricted or repetitive behaviours, interests or sensory differences, present from early development.',
          'Children: speech delay, limited joint attention or pointing, lining up objects, intense tantrums (often sensory or routine-related), feeding issues.',
          'Adults (especially women): masking or camouflaging, exhaustion or "autistic burnout", anxiety, depression, eating disorders, social difficulties, sensory overload.',
          'Refer for multidisciplinary or specialist assessment per the National Guideline. Start speech therapy or OT without waiting for a diagnosis. NDIS early childhood approach under 9.',
        ],
      },
      {
        heading: 'Tourette syndrome',
        points: [
          'Diagnosis: ≥2 motor tics AND ≥1 vocal tic (not necessarily at the same time), present for >1 year since the first tic, onset before 18, not due to a substance or medical condition.',
          'Tics wax and wane, are preceded by a premonitory urge, can be briefly suppressed, and are worse with stress or fatigue.',
          'Common comorbidities: ADHD, OCD, anxiety, learning difficulties. These often cause more impairment than the tics.',
          'Management: education and school support. Behavioural therapy (CBIT) is first line. Medicines (clonidine, aripiprazole) through a specialist if tics are impairing.',
        ],
      },
      {
        heading: 'ADHD and stimulants',
        points: [
          'Inattention and/or hyperactivity–impulsivity across settings, with onset in childhood. Adults may present with chronic disorganisation, job loss, or "failing again".',
          'Stimulants (methylphenidate, dexamfetamine, lisdexamfetamine) are the most effective treatment. Prescribing rules (S8, specialist diagnosis and GP continuation) vary by state.',
          'Monitor appetite, weight and height (children), sleep, HR and BP, mood, and tics. Check cardiac history before starting (syncope, family history of sudden death).',
          'Non-stimulants: atomoxetine, guanfacine, clonidine. Watch for misuse or diversion. Treat coexisting anxiety and learning disorders.',
        ],
      },
      {
        heading: 'Anxiety and self-esteem',
        points: [
          'CBT-based programs (including parent-led CBT and online programs such as the BRAVE program) with graded exposure.',
          'Parents: reduce accommodation of avoidance, praise effort rather than outcome, build on strengths and interests.',
          'School collaboration: reasonable adjustments, learning support plans, and addressing bullying.',
          'Use neurodiversity-affirming language, and ask the person how they prefer to be described.',
        ],
      },
    ],
    redFlags: [
      'Loss of language or social skills at any age: urgent paediatric review.',
      'No words by 16–18 months or no 2-word phrases by 24 months.',
      'Suicidal ideation in autistic adolescents or adults (higher risk).',
      'Chest pain, syncope or palpitations on stimulants.',
    ],
    examTips: [
      'Know the Tourette criteria (motor + vocal tics, >1 year, onset <18).',
      'Stimulant monitoring (growth, BP/HR) is a KFP favourite.',
      'Speech referral should not wait for autism diagnosis.',
    ],
    mcqs: [
      {
        stem: 'A 10-year-old has had eye blinking, neck jerking and repetitive throat clearing for 18 months, waxing and waning. What is the most likely diagnosis?',
        options: ['Transient tic disorder', 'Tourette syndrome', 'Sydenham chorea', 'Focal seizures', 'OCD'],
        answer: 1,
        explanation: 'Multiple motor tics plus at least one vocal tic for >1 year with childhood onset is Tourette syndrome.',
      },
      {
        stem: 'A child starting methylphenidate should have which parameters monitored regularly?',
        options: ['LFT monthly', 'Height, weight, BP and heart rate', 'Serum drug levels', 'EEG', 'Thyroid function'],
        answer: 1,
        explanation: 'Stimulants can reduce appetite and growth and raise HR and BP.',
      },
      {
        stem: 'What is the first-line treatment for impairing tics in a child with Tourette syndrome?',
        options: ['Haloperidol', 'Comprehensive Behavioural Intervention for Tics (CBIT)', 'Methylphenidate', 'Benzodiazepine', 'Botulinum toxin'],
        answer: 1,
        explanation: 'Behavioural therapy (habit reversal, CBIT) is first line. Medicines are for severe or refractory tics.',
      },
      {
        stem: 'A 30-year-old woman describes lifelong difficulty with social interactions she "learnt to copy", exhaustion after social events and sensory overload. What is the most likely diagnosis to consider?',
        options: ['Social anxiety only', 'Autism (with masking)', 'Borderline personality disorder', 'Schizophrenia', 'Hypothyroidism'],
        answer: 1,
        explanation: 'Many autistic women mask traits, which delays diagnosis and causes burnout.',
      },
      {
        stem: 'A 2-year-old says no words and does not point. Hearing is normal. What is the most appropriate step?',
        options: [
          'Wait until 3 years',
          'Refer for developmental/autism assessment and speech pathology now',
          'Start melatonin',
          'Order brain MRI',
          'Reassure – boys talk later',
        ],
        answer: 1,
        explanation: 'Red-flag language delay needs prompt assessment. Early intervention improves outcomes.',
      },
    ],
    kfp: [
      {
        title: 'Antonio feels he has failed again',
        scenario:
          'Antonio, 32, has lost his third job in 2 years because of missed deadlines and disorganisation. He says he has always been "the daydreamer", struggled at school and feels like a failure. His son was recently diagnosed with ADHD.',
        questions: [
          {
            prompt: 'List the key elements of your assessment.',
            limit: 'Up to 5',
            answers: [
              'Screen for adult ADHD (e.g. ASRS) and childhood history/school reports',
              'Collateral history from partner/family',
              'Screen for depression, anxiety, substance use (common comorbidities/mimics)',
              'Suicide risk assessment',
              'Cardiovascular history and BP/HR (before possible stimulant)',
            ],
          },
          {
            prompt: 'List your management plan.',
            limit: 'Up to 4',
            answers: [
              'Refer to psychiatrist for diagnosis and stimulant initiation (per state rules)',
              'Psychoeducation and ADHD coaching/CBT (organisational strategies)',
              'Treat comorbid depression/anxiety',
              'Workplace adjustments and follow-up/shared care of stimulant prescribing',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '591',
    label: 'Unit 591',
    date: 'Mar 2022',
    title: 'Abuse and violence',
    specialty: 'Abuse & Violence',
    alsoRelevant: ['Paediatrics & Child Health', 'Aged Care', 'Professional & Ethical Practice'],
    topics: [
      'Intimate partner violence risk assessment',
      'Impact of domestic violence on children',
      'Abuse in same-sex and LGBTQ relationships',
      'Serious Incident Response Scheme (SIRS) in aged care',
      'Sibling rivalry vs sibling bullying',
      'Recognising physical child abuse',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2022/abuse-and-violence',
    overview:
      'Abuse and violence occur across the lifespan and in every kind of relationship: intimate partners, children, siblings, and older people in aged care. GPs need to assess risk, recognise the patterns specific to different groups, and know their reporting obligations, including the Serious Incident Response Scheme in residential aged care.',
    sections: [
      {
        heading: 'IPV risk assessment',
        points: [
          'Use a structured risk tool (for example your state\'s common risk assessment framework). High-risk factors: strangulation, weapons, threats to kill, escalation, separation, pregnancy, stalking, perpetrator substance use or suicidality.',
          'Indirect presentations: chronic headaches, pain, anxiety, insomnia, frequent visits, injuries at different stages.',
          'Safety planning, referral (1800RESPECT, specialist FDV services, police) and documentation.',
          'Children in the home are always part of the risk assessment.',
        ],
      },
      {
        heading: 'Children and siblings',
        points: [
          'Children exposed to DV have increased rates of anxiety, depression, PTSD, aggression, school problems and developmental delay. They may present with behaviour problems such as aggression at school.',
          'Physical abuse red flags: bruises in a non-mobile infant, bruising on the torso, ears or neck (TEN-4), patterned injuries, fractures inconsistent with the history, delayed presentation. GPs are mandatory reporters.',
          'Sibling rivalry is mutual, occasional and balanced in power. Sibling bullying is repeated, intentional, one-directional and involves a power imbalance.',
          'Sibling bullying increases the risk of depression and self-harm. Parents should intervene, not dismiss it as "normal".',
        ],
      },
      {
        heading: 'LGBTQ relationships',
        points: [
          'IPV occurs at similar or higher rates in same-sex relationships.',
          'Specific tactics: threatening to "out" someone, controlling or withholding hormones or gender-affirming care, threats about HIV status, isolation from LGBTQ community, undermining identity.',
          'Barriers to disclosure: fear of homophobia or transphobia from services, and myths that violence doesn\'t occur between women or men.',
          'Refer to LGBTQ-inclusive services (for example Rainbow Door, state-based inclusive DV services).',
        ],
      },
      {
        heading: 'Elder abuse and SIRS',
        points: [
          'Elder abuse can be financial, psychological, physical, sexual or neglect. It is often by family members. Consider it in unexplained injuries, weight loss or changed finances.',
          'The Serious Incident Response Scheme requires approved aged care providers to report incidents to the Aged Care Quality and Safety Commission.',
          'Reportable incidents include unreasonable use of force, unlawful sexual contact, psychological or emotional abuse, neglect, inappropriate restrictive practices, unexpected death, stealing or financial coercion, and unexplained absence.',
          'Priority 1 incidents (causing or risking physical or psychological harm, or sexual in nature) must be reported within 24 hours, and to police if a crime is suspected. Priority 2 incidents within 30 days.',
        ],
      },
    ],
    redFlags: [
      'Any bruise in a non-mobile infant.',
      'Sexual contact allegation in a resident with dementia: SIRS Priority 1.',
      'Strangulation or threats to kill in IPV.',
      'Child with aggression, self-harm and a DV history.',
    ],
    examTips: [
      'Know the SIRS Priority 1 timeframe (24 hours).',
      'TEN-4 bruising: Torso, Ears, Neck in under-4s, or any bruise under 4 months.',
      'Know the identity-based abuse tactics in LGBTQ relationships.',
    ],
    mcqs: [
      {
        stem: 'A nurse in a residential aged care home reports that a resident with dementia was found with a male visitor in her room at night with her clothing disturbed. Under SIRS, how quickly must this be reported?',
        options: ['Within 7 days', 'Within 30 days', 'Within 24 hours (Priority 1)', 'Only if the resident complains', 'No reporting required'],
        answer: 2,
        explanation: 'Unlawful sexual contact is a Priority 1 incident. Report to the Commission within 24 hours and to police.',
      },
      {
        stem: 'Which finding in a 3-month-old is most concerning for physical abuse?',
        options: ['Mongolian blue spot', 'Bruise on the cheek', 'Nappy rash', 'Cradle cap', 'Umbilical granuloma'],
        answer: 1,
        explanation: 'Any bruise in a non-mobile infant is a red flag for non-accidental injury.',
      },
      {
        stem: 'What best distinguishes sibling bullying from sibling rivalry?',
        options: [
          'Occurs at any age',
          'Repeated, intentional harm with a power imbalance',
          'Arguments about toys',
          'Occasional mutual fighting',
          'Competition for parental attention',
        ],
        answer: 1,
        explanation: 'Bullying involves repetition, intent and power imbalance. Rivalry is mutual and balanced.',
      },
      {
        stem: 'A trans woman says her partner hides her oestradiol and threatens to tell her employer she is trans. This is best described as:',
        options: ['Normal conflict', 'Identity-based intimate partner abuse', 'Medication non-adherence', 'Workplace harassment', 'Elder abuse'],
        answer: 1,
        explanation: 'Controlling gender-affirming care and threatening to "out" someone are recognised forms of IPV.',
      },
      {
        stem: 'A 9-year-old has become aggressive at school. Her mother discloses ongoing DV at home. What is the most important GP action?',
        options: [
          'Refer to behaviour specialist only',
          'Assess child safety, consider mandatory reporting obligations, and support mother with safety planning',
          'Start stimulant medication',
          'Advise school suspension',
          'No action unless physical injury',
        ],
        answer: 1,
        explanation: 'Behaviour change may reflect trauma from DV exposure. Child safety comes first.',
      },
    ],
    kfp: [
      {
        title: 'Sean has a sore wrist',
        scenario:
          'Sean, 3, is brought by his mother\'s new partner with a swollen, painful left wrist. The partner says Sean "fell off the couch" yesterday. Examination also shows bruises on his upper arm and ear of different colours.',
        questions: [
          {
            prompt: 'List the features raising concern for non-accidental injury.',
            limit: 'Up to 4',
            answers: [
              'Delayed presentation',
              'Injury mechanism inconsistent with injury/developmental stage',
              'Bruises at multiple sites of different ages',
              'Bruising in protected areas (ear/upper arm – TEN-4 pattern)',
            ],
          },
          {
            prompt: 'List your management steps.',
            limit: 'Up to 4',
            answers: [
              'Ensure immediate safety of child; refer to ED/child protection unit for assessment incl. skeletal survey',
              'Mandatory report to child protection',
              'Document history (verbatim), injuries (body map/photos)',
              'Arrange X-ray/treatment of wrist and follow-up; avoid confronting carer in a way that compromises safety',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '590',
    label: 'Unit 590',
    date: 'Jan 2022',
    title: 'Digestive conditions',
    specialty: 'Gastroenterology & Hepatology',
    alsoRelevant: ['Endocrinology & Metabolic'],
    topics: [
      'Irritable bowel syndrome: diagnosis and must-not-miss conditions',
      'Metabolic dysfunction-associated fatty liver disease (MASLD)',
      'Fibrosis assessment (FIB-4, elastography)',
      'Crohn disease long-term complications',
    ],
    url: 'https://www.racgp.org.au/check/check-issues/2022/digestive-conditions',
    overview:
      'IBS is a positive diagnosis based on symptom criteria, but only after reasonable exclusion of mimics such as coeliac disease, IBD, bowel cancer and ovarian cancer. Fatty liver disease affects about 1 in 3 Australian adults. The GP\'s job is to stage fibrosis and support weight loss. Crohn disease causes long-term complications that GPs need to anticipate.',
    sections: [
      {
        heading: 'IBS',
        points: [
          'Rome IV: recurrent abdominal pain ≥1 day a week for 3 months, with ≥2 of: related to defecation, change in stool frequency, change in stool form. Onset ≥6 months ago.',
          'Exclude: coeliac disease (tTG-IgA), IBD (calprotectin, CRP), colorectal cancer (red flags, age), microscopic colitis (older women, watery diarrhoea, NSAIDs/PPIs/SSRIs; needs colonoscopy with biopsies), bile acid diarrhoea, giardiasis, thyroid disease.',
          'Women over 50 with new persistent bloating: consider ovarian cancer (CA-125 and pelvic ultrasound).',
          'Management: explanation (gut–brain axis), soluble fibre (psyllium), low FODMAP with a dietitian, peppermint oil, antispasmodics, low-dose TCA for pain, gut-directed hypnotherapy or CBT.',
        ],
      },
      {
        heading: 'Fatty liver (MASLD)',
        points: [
          'Hepatic steatosis plus a cardiometabolic risk factor (obesity, T2DM, hypertension, dyslipidaemia), without significant alcohol use.',
          'Stage fibrosis first with FIB-4 (age, AST, ALT, platelets). <1.3 is low risk (repeat in 2–3 years). ≥1.3 needs transient elastography. High values need hepatology referral.',
          'Diet: Mediterranean pattern, less added sugar, fructose and sugary drinks, less ultra-processed food. Coffee may be protective. Keep alcohol low.',
          'Weight loss of 7–10% improves steatosis and inflammation, and ≥10% can regress fibrosis. Regular exercise (including resistance). GLP-1 RAs and bariatric surgery when indicated. Manage CVD risk, the leading cause of death.',
        ],
      },
      {
        heading: 'Crohn disease complications',
        points: [
          'Intestinal: strictures and obstruction, fistulae (enteroenteric, enterovesical, perianal), abscesses, perianal disease.',
          'Malabsorption after terminal ileal disease or resection: B12 deficiency, bile acid diarrhoea, gallstones, oxalate kidney stones. Short bowel syndrome.',
          'Cancer: colorectal (with colitis), small bowel adenocarcinoma, lymphoma and skin cancer with immunosuppression.',
          'Other: osteoporosis, anaemia, VTE, growth failure in children, psychological burden. Smoking cessation reduces flares and surgery.',
        ],
      },
      {
        heading: 'Approach to abnormal LFTs',
        points: [
          'Pattern: hepatitic (ALT/AST) vs cholestatic (ALP/GGT).',
          'Common causes of raised ALT: MASLD, alcohol, medicines, viral hepatitis (HBV, HCV), haemochromatosis (ferritin, transferrin saturation), autoimmune hepatitis, coeliac disease, Wilson disease in young people.',
          'Liver screen: hepatitis serology, iron studies, autoantibodies, coeliac serology, ultrasound.',
          'An isolated raised GGT is often due to alcohol or enzyme induction.',
        ],
      },
    ],
    redFlags: [
      'Rectal bleeding, weight loss, nocturnal symptoms, anaemia or family history of CRC: not IBS until investigated.',
      'Signs of cirrhosis: low platelets, ascites, varices, encephalopathy.',
      'Crohn disease with obstructive symptoms (colicky pain, vomiting, distension).',
      'Age over 50 with new bowel symptoms.',
    ],
    examTips: [
      'Know the FIB-4 cut-offs (1.3 and 2.67).',
      'Know the Rome IV criteria.',
      'Terminal ileal Crohn disease causes B12, bile acid and gallstone problems.',
    ],
    mcqs: [
      {
        stem: 'A 45-year-old man with T2DM and BMI 33 has ALT 65 and steatosis on ultrasound; alcohol is minimal. FIB-4 is 1.8. What is the next step?',
        options: ['Liver biopsy', 'Transient elastography (FibroScan)', 'Reassure and repeat in 5 years', 'Start ursodeoxycholic acid', 'Hepatitis A vaccine only'],
        answer: 1,
        explanation: 'An indeterminate FIB-4 (1.3–2.67) needs elastography to stage fibrosis.',
      },
      {
        stem: 'A 68-year-old woman has 3 months of watery, non-bloody diarrhoea. She takes a PPI and sertraline. Colonoscopy looks normal. What is the most likely diagnosis?',
        options: ['IBS', 'Microscopic colitis (needs biopsies)', 'Crohn disease', 'Ischaemic colitis', 'Diverticulitis'],
        answer: 1,
        explanation: 'Microscopic colitis has a normal-looking mucosa, so random biopsies are needed. PPIs, SSRIs and NSAIDs are triggers.',
      },
      {
        stem: 'A man with previous terminal ileal resection for Crohn disease is most at risk of which deficiency?',
        options: ['Iron', 'Vitamin B12', 'Folate', 'Vitamin C', 'Zinc'],
        answer: 1,
        explanation: 'B12 is absorbed in the terminal ileum. Monitor levels and replace (IM) as needed.',
      },
      {
        stem: 'What amount of weight loss is associated with fibrosis regression in fatty liver disease?',
        options: ['2%', '5%', '≥10%', 'Any amount', 'Weight loss has no effect'],
        answer: 2,
        explanation: '≥10% weight loss is associated with improvement in fibrosis. 5–7% improves steatosis.',
      },
      {
        stem: 'A 52-year-old woman has new persistent bloating and early satiety for 2 months. Which test is most important?',
        options: ['Hydrogen breath test', 'CA-125 and pelvic ultrasound', 'Stool culture', 'Low FODMAP trial', 'H. pylori breath test'],
        answer: 1,
        explanation: 'New persistent bloating in a woman over 50 should prompt evaluation for ovarian cancer.',
      },
    ],
    kfp: [
      {
        title: 'Aarti has abdominal pain',
        scenario:
          'Aarti, 29, has had 8 months of crampy lower abdominal pain relieved by defecation, alternating loose and hard stools, and bloating. No weight loss or bleeding. Her examination is normal.',
        questions: [
          {
            prompt: 'List the investigations to exclude important differentials.',
            limit: 'Up to 4',
            answers: [
              'FBC, CRP',
              'Coeliac serology (tTG-IgA + total IgA)',
              'Faecal calprotectin',
              'Stool microscopy/PCR (e.g. Giardia) ± TSH',
            ],
          },
          {
            prompt: 'Results are normal. List your management plan.',
            limit: 'Up to 5',
            answers: [
              'Positive diagnosis of IBS with explanation (gut–brain interaction)',
              'Dietary advice – regular meals, soluble fibre (psyllium); low FODMAP with dietitian',
              'Peppermint oil / antispasmodic for pain',
              'Low-dose TCA or gut-directed psychological therapy if persistent',
              'Safety-net for red flags and review',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '589',
    label: 'Unit 589',
    date: 'Dec 2021',
    title: 'Orthopaedics',
    specialty: 'Musculoskeletal & Sports',
    alsoRelevant: ['Aged Care', 'Rheumatology'],
    topics: [
      'Shoulder pain: rotator cuff and frozen shoulder',
      'Knee osteoarthritis and degenerative meniscal tears',
      'Hip pain: OA and greater trochanteric pain syndrome',
      'Low back pain: red flags and imaging',
      'Osteoporosis and fragility fractures',
      'Carpal tunnel syndrome',
    ],
    overview:
      'RACGP has not published learning outcomes for the 2021 units online. This summary covers core adult orthopaedic topics that are high-yield for the AKT and KFP. Most musculoskeletal presentations are managed conservatively, and the evidence favours exercise over imaging and surgery. The GP adds value by spotting red flags, avoiding low-value care and preventing fragility fractures.',
    sections: [
      {
        heading: 'Shoulder',
        points: [
          'Rotator cuff tendinopathy: pain on overhead activity, painful arc, preserved passive range. First-line is progressive loading exercise ± a subacromial corticosteroid injection for short-term relief.',
          'Acute traumatic weakness (inability to lift the arm after a fall, especially in people over 40): suspect a full-thickness tear. Ultrasound and early orthopaedic referral.',
          'Adhesive capsulitis (frozen shoulder): loss of ACTIVE and PASSIVE external rotation. Associated with diabetes and thyroid disease. Self-limiting over 1–3 years. Intra-articular steroid helps early pain.',
          'Plain X-ray before ultrasound if frozen shoulder is suspected (excludes OA or posterior dislocation).',
        ],
      },
      {
        heading: 'Knee and hip',
        points: [
          'Knee OA: clinical diagnosis (age ≥45, activity-related pain, morning stiffness <30 minutes). X-ray only if atypical or before a surgical referral.',
          'OA treatment: exercise and strengthening (GLA:D program), weight loss, topical NSAIDs, then oral NSAIDs. Avoid opioids. Arthroscopy for degenerative knee disease or degenerative meniscal tears is NOT recommended.',
          'Greater trochanteric pain syndrome: lateral hip pain, tender over the greater trochanter, worse lying on that side. Education, load management, exercise. Injection gives short-term relief only.',
          'Hip OA: groin pain, reduced internal rotation. Refer for joint replacement when conservative care fails and function is significantly impaired.',
        ],
      },
      {
        heading: 'Low back pain',
        points: [
          'Over 90% is non-specific. Reassure, stay active, use simple analgesia or NSAIDs, and heat. Avoid bed rest and routine imaging.',
          'Red flags: cauda equina (saddle anaesthesia, urinary retention, faecal incontinence, bilateral leg symptoms), cancer history, fever or IV drug use (infection), significant trauma or osteoporosis (fracture), progressive neurological deficit.',
          'Sciatica: most improves within 6–12 weeks. Gabapentinoids are not effective for sciatica. Refer if there is a progressive deficit or intractable pain.',
          'Address yellow flags (fear-avoidance, catastrophising, work issues) early to prevent chronic pain.',
        ],
      },
      {
        heading: 'Osteoporosis and hands',
        points: [
          'A minimal-trauma fracture after age 50 means osteoporosis until proven otherwise. Treat (PBS subsidy after a minimal-trauma fracture) even before DXA.',
          'Treatment: bisphosphonate (alendronate, risedronate, zoledronic acid) or denosumab. Denosumab must NOT be stopped without follow-on therapy (rebound vertebral fractures). Give calcium, vitamin D, and exercise including balance and resistance training.',
          'DXA for women ≥65 and men ≥70 (Medicare-eligible from 70), or earlier with risk factors (steroids, early menopause, low weight, secondary causes).',
          'Carpal tunnel syndrome: numbness in the thumb to radial ring finger, worse at night. Positive Phalen and Tinel signs. Nerve conduction studies confirm. Splinting, steroid injection, then surgical release (urgent if there is thenar wasting).',
        ],
      },
    ],
    redFlags: [
      'Saddle anaesthesia or urinary retention: cauda equina syndrome. Needs an emergency MRI.',
      'Back pain with a cancer history, weight loss or night pain.',
      'Hot, swollen joint with fever: septic arthritis.',
      'Thenar muscle wasting in carpal tunnel syndrome.',
    ],
    examTips: [
      'Frozen shoulder vs rotator cuff: loss of passive external rotation means frozen shoulder.',
      'Arthroscopy for degenerative knee disease is low-value care.',
      'Warn about the danger of stopping denosumab without follow-on therapy.',
    ],
    mcqs: [
      {
        stem: 'A 55-year-old woman with diabetes has 3 months of shoulder pain and marked loss of both active and passive external rotation. X-ray is normal. What is the most likely diagnosis?',
        options: ['Rotator cuff tendinopathy', 'Adhesive capsulitis', 'Glenohumeral OA', 'Calcific tendinitis', 'Cervical radiculopathy'],
        answer: 1,
        explanation: 'Global loss of passive range, especially external rotation, with a normal X-ray suggests frozen shoulder.',
      },
      {
        stem: 'A 60-year-old with knee OA and MRI showing a degenerative meniscal tear asks about arthroscopy. What is the best advice?',
        options: [
          'Arthroscopic meniscectomy is recommended',
          'Arthroscopy is not recommended; exercise therapy and weight management are first line',
          'Total knee replacement now',
          'Hyaluronic acid injections are first line',
          'Long-term opioids',
        ],
        answer: 1,
        explanation: 'High-quality trials show no benefit of arthroscopy over exercise for degenerative knee disease.',
      },
      {
        stem: 'A 45-year-old has acute low back pain and new urinary retention with perianal numbness. What is the most appropriate action?',
        options: ['NSAIDs and review in 1 week', 'Emergency MRI and surgical referral', 'Physiotherapy referral', 'Plain X-ray', 'Oral prednisolone'],
        answer: 1,
        explanation: 'Suspected cauda equina syndrome needs emergency imaging and decompression.',
      },
      {
        stem: 'A woman on denosumab for 5 years wants to stop. What is the key risk?',
        options: [
          'Osteonecrosis of the jaw increases after stopping',
          'Rapid bone loss and multiple vertebral fractures unless followed by a bisphosphonate',
          'Hypercalcaemia',
          'No risk',
          'Renal failure',
        ],
        answer: 1,
        explanation: 'Denosumab withdrawal causes rebound bone turnover. Transition to a bisphosphonate.',
      },
      {
        stem: 'A 72-year-old woman has a wrist fracture after tripping from standing height. What is the most appropriate additional management?',
        options: [
          'None – trauma explains it',
          'Treat as osteoporosis: DXA, anti-osteoporosis medicine, calcium/vitamin D, falls assessment',
          'Calcium alone',
          'Repeat DXA in 5 years',
          'Hormone therapy',
        ],
        answer: 1,
        explanation: 'A minimal-trauma fracture indicates osteoporosis and qualifies for PBS-subsidised treatment.',
      },
    ],
    kfp: [
      {
        title: 'Chronic knee pain',
        scenario:
          'Joan, 64, has 2 years of bilateral knee pain worse with walking and stairs, morning stiffness 15 minutes, BMI 34. She takes paracetamol and asks for "a scan and a clean-out operation" like her friend had.',
        questions: [
          {
            prompt: 'List the key elements of your management plan.',
            limit: 'Up to 5',
            answers: [
              'Clinical diagnosis of knee OA; explain imaging and arthroscopy are not needed/beneficial',
              'Structured exercise/strengthening program (physiotherapy, e.g. GLA:D)',
              'Weight loss support (dietitian, consider pharmacotherapy)',
              'Topical NSAID, then oral NSAID if appropriate (check renal/CV/GI risk); avoid opioids',
              'Refer for joint replacement if severe pain/function loss despite conservative care',
            ],
          },
        ],
      },
    ],
  },
  {
    id: '588',
    label: 'Unit 588',
    date: 'Nov 2021',
    title: 'Sexology',
    specialty: 'Sexual & Reproductive Health',
    alsoRelevant: ["Men's Health", "Women's Health", 'Mental Health'],
    topics: [
      'Taking a sexual history (PLISSIT model)',
      'Erectile dysfunction',
      'Premature ejaculation',
      'Low sexual desire in women',
      'Genito-pelvic pain / vaginismus',
      'Medicine-induced sexual dysfunction',
    ],
    overview:
      'RACGP has not published learning outcomes for the 2021 units online. This summary covers core sexual medicine topics for GPs. Sexual problems are common, but patients rarely raise them unprompted, so invite the conversation. A biopsychosocial approach using the PLISSIT model helps. Erectile dysfunction is a vascular warning sign.',
    sections: [
      {
        heading: 'Approach',
        points: [
          'Normalise the conversation: "Many people with diabetes notice changes in sexual function. Is that something you\'d like to talk about?"',
          'PLISSIT: Permission, Limited Information, Specific Suggestions, Intensive Therapy (refer to a sex therapist or psychologist).',
          'Consider biological factors (vascular, hormonal, neurological, medicines), psychological factors (anxiety, depression, trauma), relationship factors and cultural factors.',
          'Include the partner where appropriate, and screen for past sexual abuse and current relationship violence.',
        ],
      },
      {
        heading: 'Male sexual problems',
        points: [
          'Erectile dysfunction: a marker of CVD, often 2–5 years before cardiac events. Check BP, lipids, glucose/HbA1c, and morning testosterone if libido is low.',
          'PDE5 inhibitors (sildenafil, tadalafil) are first line. Contraindicated with nitrates, including recreational amyl nitrite ("poppers"). Caution with α-blockers.',
          'Premature ejaculation: behavioural techniques (stop–start, squeeze), topical anaesthetic sprays, SSRIs (dapoxetine on demand, daily paroxetine or sertraline off-label).',
          'Refer for penile injections, vacuum devices or prosthesis when oral therapy fails. Post-prostatectomy penile rehabilitation.',
        ],
      },
      {
        heading: 'Female sexual problems',
        points: [
          'Low desire: very common. Assess relationship, fatigue, mood, medicines, menopause and pain. Responsive desire is normal.',
          'Postmenopausal women with hypoactive sexual desire dysfunction may benefit from transdermal testosterone (female-specific 1% cream), with levels kept in the female physiological range.',
          'Genito-pelvic pain or penetration disorder (vaginismus, vestibulodynia): gentle examination with consent, pelvic floor physiotherapy, dilators, lubricants, psychosexual therapy. Treat GSM with vaginal oestrogen.',
          'Always exclude organic causes of dyspareunia: infection, dermatoses (lichen sclerosus), endometriosis, atrophy.',
        ],
      },
      {
        heading: 'Medicines and special groups',
        points: [
          'SSRIs and SNRIs commonly cause reduced libido, anorgasmia and delayed ejaculation. Options include dose reduction, switching (mirtazapine, vortioxetine, agomelatine), or adding a PDE5 inhibitor.',
          'Other culprits: antipsychotics (hyperprolactinaemia), β-blockers, thiazides, 5-ARIs, spironolactone, hormonal contraceptives (variable), opioids.',
          'Older adults, people with disability and people in residential care have sexual rights. Balance these with capacity and consent assessment.',
          'Culturally and religiously sensitive care. Use interpreters and offer a same-gender clinician if preferred.',
        ],
      },
    ],
    redFlags: [
      'Chest pain in a man with ED: cardiac assessment before any sexual activity advice.',
      'Priapism (erection >4 hours): urological emergency.',
      'New dyspareunia with postcoital bleeding: examine and screen the cervix.',
      'Sexual dysfunction as a sign of coercion or abuse.',
    ],
    examTips: [
      'The PDE5 inhibitor and nitrate interaction (including poppers) is always examined.',
      'ED means assess CVD risk.',
      'Know PLISSIT.',
    ],
    mcqs: [
      {
        stem: 'A 52-year-old man with ED asks for sildenafil. He takes isosorbide mononitrate for angina. What is the correct advice?',
        options: [
          'Safe to use together',
          'Contraindicated – risk of severe hypotension',
          'Use half dose',
          'Separate doses by 2 hours',
          'Switch to tadalafil which is safe with nitrates',
        ],
        answer: 1,
        explanation: 'All PDE5 inhibitors are contraindicated with nitrates, including amyl nitrite.',
      },
      {
        stem: 'A 48-year-old man with new ED and no other symptoms. Which assessment is most important?',
        options: ['Penile ultrasound', 'Cardiovascular risk assessment (BP, lipids, glucose)', 'Psychosexual therapy only', 'Testicular ultrasound', 'Semen analysis'],
        answer: 1,
        explanation: 'ED shares risk factors with CVD and often comes before cardiac events.',
      },
      {
        stem: 'A woman on sertraline reports anorgasmia that is affecting her relationship; her depression is well controlled. Which option is reasonable?',
        options: [
          'Stop sertraline abruptly',
          'Discuss dose reduction or switching to an antidepressant with lower sexual side effects (e.g. mirtazapine, vortioxetine)',
          'Add a benzodiazepine',
          'Add testosterone gel (male)',
          'Nothing can be done',
        ],
        answer: 1,
        explanation: 'Antidepressant-induced sexual dysfunction can be managed by adjusting or switching treatment.',
      },
      {
        stem: 'What does the "LI" in PLISSIT stand for?',
        options: ['Lifestyle Interventions', 'Limited Information', 'Libido Investigation', 'Long-term Intervention', 'Licensed Instruction'],
        answer: 1,
        explanation: 'Permission, Limited Information, Specific Suggestions, Intensive Therapy.',
      },
      {
        stem: 'A 26-year-old woman has been unable to have penetrative intercourse or use tampons because of involuntary pelvic floor tightening and fear of pain. What is the most appropriate management?',
        options: [
          'Surgical hymenectomy',
          'Pelvic floor physiotherapy, graded dilators and psychosexual therapy',
          'Long-term benzodiazepine',
          'Reassure it will resolve spontaneously',
          'Oral contraceptive pill',
        ],
        answer: 1,
        explanation: 'Genito-pelvic pain or penetration disorder responds to a multimodal approach.',
      },
    ],
    kfp: [
      {
        title: 'Erectile difficulties',
        scenario:
          'Rob, 56, reluctantly mentions 6 months of difficulty maintaining erections. He has hypertension (on hydrochlorothiazide and atenolol), smokes and has a waist of 108 cm. Morning erections are reduced.',
        questions: [
          {
            prompt: 'List the investigations you would arrange.',
            limit: 'Up to 4',
            answers: [
              'Fasting glucose / HbA1c',
              'Fasting lipids and CVD risk calculation',
              'Morning total testosterone (± LH/FSH, prolactin if low)',
              'UEC, TSH ± ECG / cardiac assessment if exertional symptoms',
            ],
          },
          {
            prompt: 'List your management.',
            limit: 'Up to 5',
            answers: [
              'PDE5 inhibitor (e.g. sildenafil or tadalafil) after checking no nitrate use',
              'Review antihypertensives (thiazide/β-blocker) – consider switching (e.g. ACEi/ARB)',
              'Smoking cessation, weight loss, exercise',
              'Manage CVD risk factors',
              'Involve partner/psychosexual counselling if needed',
            ],
          },
        ],
      },
    ],
  },
]

export default units
