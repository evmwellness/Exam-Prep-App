import type { Section } from '../../types'

const topup: Record<string, Section[]> = {
  '612': [
    {
      heading: 'Bowel cancer in Aboriginal and Torres Strait Islander people',
      points: [
        'Participation in the National Bowel Cancer Screening Program is lower among Aboriginal and Torres Strait Islander people, and cancers are often diagnosed later.',
        'The alternative access model lets health services hand out kits directly to eligible people, with support to complete them. This improves participation.',
        'Culturally safe information, Aboriginal Health Workers and community-led education help.',
      ],
    },
    {
      heading: 'Anal and rectal symptoms: do not assume haemorrhoids',
      points: [
        'Haemorrhoids are common, but rectal bleeding should not be attributed to them without examination, including digital rectal examination.',
        'Refer for colonoscopy if bleeding persists, the cause is unclear, or there are other red flags, even in younger adults.',
        'Anal fissures cause sharp pain on defecation with bright bleeding. Treat with stool softeners, and topical glyceryl trinitrate or diltiazem.',
      ],
    },
  ],
  '611': [
    {
      heading: 'Breast density and screening',
      points: [
        'Dense breast tissue makes mammograms harder to read and slightly increases breast cancer risk.',
        'BreastScreen programs in some states now report density. Supplementary imaging (ultrasound or MRI) is not routinely recommended but may be discussed based on overall risk.',
        'Encourage women to know how their breasts usually look and feel, and report changes promptly regardless of screening results.',
      ],
    },
    {
      heading: 'Pregnancy, fertility and breast cancer',
      points: [
        'Breast cancer in pregnancy is uncommon but may be missed because breast changes are expected. Investigate any persistent lump with ultrasound.',
        'Young women with breast cancer should be offered fertility preservation discussion before chemotherapy.',
        'Pregnancy after breast cancer does not appear to increase recurrence risk. Discuss timing with the oncology team.',
        'Hormonal contraception is generally avoided after breast cancer. The copper IUD is the preferred option.',
      ],
    },
  ],
  '610': [
    {
      heading: 'Cardiac rehabilitation',
      points: [
        'Cardiac rehabilitation after a heart attack, heart surgery or heart failure reduces death and readmission, and improves quality of life.',
        'Fewer than a third of eligible Australians attend. The GP\'s encouragement strongly increases uptake.',
        'Programs include supervised exercise, education, risk factor management and psychological support. Home-based and telehealth options are available.',
        'Screen for depression after a cardiac event, as it is common and worsens outcomes.',
      ],
    },
    {
      heading: 'Hypertension quick reminders',
      points: [
        'Confirm with out-of-clinic readings. Target below 130/80 mmHg for most people if tolerated.',
        'Start with an ACE inhibitor or ARB, a calcium channel blocker, or a thiazide-like diuretic, and consider combination therapy early.',
        'Resistant hypertension: check adherence, measurement technique, drugs (NSAIDs, decongestants) and secondary causes, including primary aldosteronism.',
      ],
    },
  ],
  '609': [
    {
      heading: 'Delirium versus dementia',
      points: [
        'Delirium has an acute onset, fluctuating course, and impaired attention. Dementia usually develops gradually over months to years.',
        'Delirium is common in people with dementia and is often caused by infection, medicines, constipation, urinary retention or dehydration.',
        'Use the 4AT screening tool to detect delirium, and treat the cause.',
      ],
    },
  ],
  '608': [
    {
      heading: 'Chronic pancreatitis and pancreatic cancer risk',
      points: [
        'Chronic pancreatitis increases pancreatic cancer risk several-fold over time, especially in hereditary pancreatitis.',
        'New weight loss, worsening pain, jaundice or new diabetes in chronic pancreatitis should prompt imaging.',
        'Stopping smoking and alcohol reduces both pancreatitis progression and cancer risk.',
      ],
    },
    {
      heading: 'Clinical trials and precision medicine',
      points: [
        'Clinical trials offer access to new treatments. Ask the treating team about eligibility early, because many trials have strict criteria.',
        'Tumour molecular profiling and germline genetic testing are recommended. BRCA mutations may make PARP inhibitors an option, and have implications for relatives.',
        'Australian Cancer Trials and ClinicalTrials.gov list current trials.',
      ],
    },
    {
      heading: 'GP role after diagnosis',
      points: [
        'Coordinate care between the multidisciplinary team, palliative care, allied health and the family.',
        'Manage symptoms promptly, and keep an eye on weight, nutrition, mood and pain.',
        'Watch for VTE, which is very common in pancreatic cancer. Many patients receive prophylactic anticoagulation during chemotherapy.',
        'Support carers, who often experience great stress and grief.',
        'Discuss and document goals of care and preferred place of death early.',
      ],
    },
  ],
  '607': [
    {
      heading: 'Genetic testing: ethics and practicalities',
      points: [
        'Genetic test results affect relatives. Encourage people to share information with family members who may be at risk. Genetic services can help with family letters.',
        'Under the life insurance moratorium, life insurers cannot use genetic results for policies up to certain limits. Legislation to ban genetic discrimination in life insurance has been announced. Check the current status.',
        'Consent should cover possible incidental findings, variants of uncertain significance, and implications for family.',
        'Direct-to-consumer genetic tests vary in reliability. Confirm significant results through an accredited laboratory with genetic counselling.',
        'Clinical geneticists and genetic counsellors are key partners. Refer when a diagnosis would change management, family planning or cascade testing.',
      ],
    },
    {
      heading: 'Metabolic and newborn conditions',
      points: [
        'The newborn bloodspot screening program tests for rare but treatable conditions, such as phenylketonuria, congenital hypothyroidism, cystic fibrosis, and spinal muscular atrophy.',
        'Early diagnosis allows treatment before symptoms begin, greatly improving outcomes.',
        'Children with metabolic conditions may need emergency plans for illness, such as early glucose or dietary changes.',
        'Parents can be anxious after a positive screening result. Arrange prompt follow-up with the specialist team.',
      ],
    },
  ],
  '606': [
    {
      heading: 'Prostate and bladder health in older men',
      points: [
        'Lower urinary tract symptoms become common with age. Assess them with the IPSS, and check for red flags such as haematuria or retention.',
        'Offer informed choice about PSA testing to men aged 50–69.',
        'Nocturia may be caused by nocturnal polyuria (heart failure, sleep apnoea, evening fluids) rather than prostate enlargement. Use a frequency–volume chart.',
      ],
    },
    {
      heading: 'Men\'s health checks',
      points: [
        'Many men attend a GP only when unwell. Use every visit to check blood pressure, weight, alcohol, smoking, mental health and cancer screening.',
        'The Aboriginal and Torres Strait Islander health check (MBS item 715) is a valuable opportunity for comprehensive care.',
        'Workplace health checks and community programs can reach men who do not usually attend.',
      ],
    },
  ],
  '605': [
    {
      heading: 'Common benign skin lesions',
      points: [
        'Seborrhoeic keratoses are "stuck-on", waxy, brown lesions. They are harmless but can look like melanoma. Use dermoscopy, and biopsy if unsure.',
        'Cherry angiomas (red papules) and skin tags are very common and harmless. Removal is cosmetic.',
        'Sebaceous hyperplasia causes small yellow papules with a central dip on the face, and can look like basal cell carcinoma.',
        'Dermatosis papulosa nigra is common in people with darker skin and is harmless.',
        'Cosmetic removal of benign lesions is not covered by Medicare.',
      ],
    },
    {
      heading: 'Hyperhidrosis',
      points: [
        'Primary focal hyperhidrosis causes excessive sweating of the underarms, palms, soles or face. It often starts in adolescence and has a big impact on quality of life.',
        'First-line treatment is aluminium chloride antiperspirant applied at night.',
        'Other options include iontophoresis (palms and soles), botulinum toxin injections (PBS-listed for severe axillary hyperhidrosis through specialists), and oral anticholinergics.',
        'Generalised sweating, or night sweats, may point to a secondary cause, such as infection, lymphoma, hyperthyroidism or medicines.',
      ],
    },
  ],
  '604': [
    {
      heading: 'Heated tobacco and other products',
      points: [
        'Heated tobacco products are not legal to sell in Australia. They still expose users to toxic chemicals.',
        'Nicotine pouches are regulated as medicines in Australia and are not legally sold without a prescription.',
        'Ask about all forms of nicotine and tobacco use, including chewing tobacco, shisha (waterpipe) and cigars.',
        'Waterpipe smoking is common in some communities. One session can involve smoke exposure similar to many cigarettes.',
      ],
    },
    {
      heading: 'Smoking and surgery',
      points: [
        'Smoking increases the risk of wound infection, poor healing, lung complications and anaesthetic problems.',
        'Quitting at least 4 weeks before surgery reduces complications. Even quitting shortly before is helpful.',
        'Surgery is a "teachable moment". Many people are motivated to quit at this time.',
        'NRT can be used safely around surgery.',
      ],
    },
  ],
}

export default topup
