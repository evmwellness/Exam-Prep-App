import type { Section } from '../../types'

/** Short practice vignettes: read the scenario, decide, then check the answer */
const topup: Record<string, Section[]> = {
  '625': [
    {
      heading: 'Quick case',
      points: [
        'A 24-year-old with Crohn disease on azathioprine has a sore throat and fever. Check a full blood count the same day, because thiopurines can cause neutropenia. Do not assume it is a simple viral illness.',
      ],
    },
  ],
  '624': [
    {
      heading: 'Quick case',
      points: [
        'A woman attends with her partner for "headaches". The partner answers every question. Find a reason to see her alone, for example to be weighed or to give a urine sample, then ask about safety directly and privately.',
      ],
    },
  ],
  S4: [
    {
      heading: 'Quick case',
      points: [
        'An 84-year-old woman weighing 55 kg with creatinine 110 micromol/L has AF. She meets 2 of the 3 dose-reduction criteria (age 80 or over, weight 60 kg or less), so apixaban 2.5 mg twice daily is the correct dose.',
      ],
    },
  ],
  '623': [
    {
      heading: 'Quick case',
      points: [
        'A 30-year-old trans man on testosterone has a haematocrit of 0.56. Reduce the dose or lengthen the dosing interval, recheck, and look for smoking and sleep apnoea. Consider venesection if it stays high.',
      ],
    },
  ],
  '622': [
    {
      heading: 'Quick case',
      points: [
        'A 38-year-old self-collects and HPV (not 16/18) is detected. Self-collected samples cannot be used for cytology, so ask her to return for a clinician-collected sample for liquid-based cytology to guide the next step.',
      ],
    },
  ],
  '621': [
    {
      heading: 'Quick case',
      points: [
        'A 29-year-old recently discharged soldier has insomnia, anger and heavy drinking. Screen for PTSD, depression and suicide risk, ask about firearms, and help him get a DVA White Card for free mental health care.',
      ],
    },
  ],
  '620': [
    {
      heading: 'Quick case',
      points: [
        'A 78-year-old on sitagliptin has widespread itch, then tense blisters on the limbs. Suspect bullous pemphigoid, possibly drug-associated. Refer for biopsy, and discuss stopping the DPP-4 inhibitor.',
      ],
    },
  ],
  '619': [
    {
      heading: 'Quick case',
      points: [
        'An 82-year-old in residential care has itchy, cracked, "crazy-paving" skin on the shins in winter. This is asteatotic eczema. Stop soap, apply thick emollients twice daily, and use a moderate steroid ointment for 1–2 weeks.',
      ],
    },
  ],
  '618': [
    {
      heading: 'Quick case',
      points: [
        'A man on methadone is being released from prison next week. His opioid tolerance may be lower. Confirm his dosing point, give take-home naloxone, and arrange follow-up within days of release.',
      ],
    },
  ],
  '617': [
    {
      heading: 'Quick cases',
      points: [
        'A 50-year-old who drinks 10 standard drinks daily wants to stop. He had a withdrawal seizure last year. Home withdrawal is not safe. Arrange inpatient or supervised withdrawal, and give thiamine.',
        'A 16-year-old vapes daily and wakes at night to vape. Assess dependence, use behavioural support, and consider NRT for dependent adolescents. Involve parents with her consent.',
      ],
    },
  ],
  S2: [
    {
      heading: 'Quick cases',
      points: [
        'A man with a first gout flare asks if he needs lifelong tablets. With one flare and no tophi or kidney stones, urate-lowering therapy is not yet indicated. Give a flare plan and lifestyle advice, and review urate.',
        'A woman on allopurinol 300 mg has a urate of 0.42 mmol/L after 6 months. Check adherence, then increase the dose gradually to reach target.',
      ],
    },
  ],
  '616': [
    {
      heading: 'Quick case',
      points: [
        'A 60-year-old with type 2 diabetes and heart failure has HbA1c 7.1% on metformin. Add an SGLT2 inhibitor for heart failure benefit, regardless of HbA1c, and give sick day advice.',
      ],
    },
  ],
  '615': [
    {
      heading: 'Quick cases',
      points: [
        'A 32-year-old mother 3 months postpartum scores 14 on the EPDS. Ask about suicidal thoughts and thoughts of harm to the baby, arrange psychological therapy, consider sertraline, and involve her partner with consent.',
        'A GP colleague admits to drinking every night to sleep after difficult shifts. Encourage them to see their own GP and contact Drs4Drs.',
      ],
    },
  ],
  S1: [
    {
      heading: 'Quick cases',
      points: [
        'A child with eczema suddenly develops painful clustered punched-out erosions and fever. Suspect eczema herpeticum. Start oral or IV aciclovir urgently and refer the same day.',
        'Parents are afraid of steroid creams and use them only a day at a time. Explain the fingertip unit, reassure about safety, and give a written action plan to clear flares fully.',
      ],
    },
  ],
  '614': [
    {
      heading: 'Quick cases',
      points: [
        'A 17-year-old has lost 8 kg in 2 months and has a heart rate of 44. She needs urgent hospital admission for medical instability, regardless of her BMI.',
        'A 45-year-old with schizophrenia complains of chest pain. Assess it as for any patient, with an ECG and troponin. Avoid attributing it to anxiety (diagnostic overshadowing).',
        'A 60-year-old with no psychiatric history develops new visual hallucinations and confusion over days. Look for delirium and an organic cause first.',
      ],
    },
  ],
  '613': [
    {
      heading: 'Quick cases',
      points: [
        'A 58-year-old has a PSA of 5.2 ng/mL, and a repeat is 5.5. His DRE is normal. Refer to a urologist for MRI and consideration of biopsy.',
        'A 72-year-old on ADT for 2 years complains of fatigue and weight gain. Check bone density, glucose and lipids, and refer to an exercise physiologist for resistance training.',
        'A man with low-risk prostate cancer on active surveillance asks if he should "just have surgery". Explain that active surveillance is safe for low-risk disease and avoids treatment side effects.',
      ],
    },
  ],
  '612': [
    {
      heading: 'Quick cases',
      points: [
        'A 38-year-old has 3 months of rectal bleeding and looser stools. Examine, check a blood count and iron studies, and refer for colonoscopy. Early-onset bowel cancer is increasing.',
        'A 50-year-old whose brother had bowel cancer at 48 asks about screening. He is at increased risk and should have colonoscopy every 5 years, starting now.',
        'A man with a new stoma has a high output and is dizzy. Check for dehydration and kidney injury, and give oral rehydration and loperamide as advised by the stoma nurse.',
      ],
    },
  ],
  '611': [
    {
      heading: 'Quick cases',
      points: [
        'A 28-year-old has a smooth, mobile 1.5 cm breast lump. Arrange an ultrasound (the first imaging test under 35), then biopsy if needed. Complete the triple test even if it seems benign.',
        'A woman on letrozole has joint pain and wants to stop. Try analgesia and exercise, check vitamin D, and discuss switching to another aromatase inhibitor or tamoxifen with the oncologist.',
        'A woman whose mother and sister had breast cancer before 50 asks about screening. Estimate her risk using a validated tool and refer to a familial cancer service.',
      ],
    },
  ],
  '610': [
    {
      heading: 'Quick cases',
      points: [
        'A 55-year-old woman has breathlessness and jaw discomfort on exertion. Consider angina, which often presents atypically in women. Arrange an ECG and cardiology assessment.',
        'A 70-year-old with HFrEF is on an ACE inhibitor and beta-blocker. Add an SGLT2 inhibitor and a mineralocorticoid antagonist, and monitor potassium and kidney function.',
        'A 22-year-old faints during a football match. Exertional syncope is a red flag. Arrange an ECG and urgent cardiology review before any return to sport.',
      ],
    },
  ],
  '609': [
    {
      heading: 'Quick cases',
      points: [
        'A woman with dementia becomes agitated every evening. Check for pain, constipation, hunger and noise, and use a routine and calm activities before considering medicine.',
        'A man with dementia insists on driving. Assess fitness to drive, discuss with him and his family, and notify the licensing authority if he continues to drive unsafely.',
      ],
    },
  ],
  '608': [
    {
      heading: 'Quick cases',
      points: [
        'A 66-year-old has had epigastric pain radiating to the back for 6 weeks, weight loss and a normal gastroscopy. Arrange an urgent pancreatic-protocol CT.',
        'An incidental 12 mm pancreatic cyst is found on a CT for kidney stones. Refer for specialist review and plan surveillance, based on cyst type and features.',
        'A woman with a BRCA2 mutation and a sister with pancreatic cancer asks about testing. Refer to a high-risk pancreatic surveillance program.',
      ],
    },
  ],
  '607': [
    {
      heading: 'Quick cases',
      points: [
        'A 7-year-old has 8 café-au-lait spots and axillary freckling. Suspect neurofibromatosis type 1. Refer to a paediatrician and check blood pressure and vision.',
        'A 45-year-old man has fatigue, joint pain in the second and third knuckles, and ferritin of 900 with transferrin saturation of 70%. Order HFE gene testing for haemochromatosis.',
        'A couple planning pregnancy asks about carrier screening. Offer Medicare-funded screening for cystic fibrosis, spinal muscular atrophy and fragile X syndrome.',
        'A tall 17-year-old with long fingers and a family history of sudden death needs echocardiography and assessment for Marfan syndrome.',
      ],
    },
  ],
  '606': [
    {
      heading: 'Quick cases',
      points: [
        'A 45-year-old with fatigue and low libido wants testosterone. Check two early-morning fasting testosterone levels, LH and FSH, and look for causes such as obesity, sleep apnoea and depression.',
        'A 24-year-old gym user has acne, gynaecomastia and a haematocrit of 0.55. Ask non-judgementally about anabolic steroid use.',
        'A couple has not conceived after 12 months. Arrange semen analysis for the man at the same time as assessing the woman.',
        'A 30-year-old man has a painless hard lump in the testis. Arrange urgent scrotal ultrasound and tumour markers.',
      ],
    },
  ],
  '605': [
    {
      heading: 'Quick cases',
      points: [
        'A 35-year-old woman has symmetrical brown patches on her cheeks that worsened with the pill and in summer. This is melasma. Advise strict sun protection including tinted sunscreen, and consider hydroquinone or azelaic acid.',
        'A woman calls 20 minutes after lip filler with severe pain and a white, blotchy patch. Suspect vascular occlusion. She needs urgent hyaluronidase from the injector or an emergency department.',
        'A man with persistent facial flushing and papules is using a potent steroid cream. Stop the steroid (with a warning about a rebound flare) and treat as rosacea.',
        'A young woman requests her third rhinoplasty and believes her nose is deformed, but it looks normal. Screen for body dysmorphic disorder.',
      ],
    },
  ],
  '604': [
    {
      heading: 'Quick cases',
      points: [
        'A pregnant woman smoking 10 cigarettes a day has tried to quit without success. Offer behavioural support and intermittent NRT (gum, lozenges or spray), explaining that NRT is safer than smoking.',
        'A man with schizophrenia on clozapine stops smoking suddenly. His clozapine levels may rise sharply. Check levels and watch for sedation and seizures.',
        'A 55-year-old with a recent heart attack wants to quit. NRT and varenicline are both safe options. Combine with Quitline referral.',
        'A woman restarted smoking after 6 months of quitting when her mother died. Treat relapse as part of the process and offer another quit attempt with support.',
      ],
    },
  ],
  '603': [
    {
      heading: 'Quick cases',
      points: [
        'A traveller returns from Papua New Guinea with fever 10 days after arrival. Arrange same-day malaria testing, and if negative, repeat it. Consider dengue and typhoid.',
        'A 6-month-old will travel to India with her parents next month. Consider an early dose of MMR (from 6 months) because measles is common there.',
        'A 70-year-old on warfarin plans a trek in Nepal. Discuss altitude, interactions with antimalarials and antibiotics, INR monitoring, and travel insurance.',
      ],
    },
  ],
}

export default topup
