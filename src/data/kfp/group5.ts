import type { KfpCase } from '../../types'

export const group5Cases: KfpCase[] = [
  {
    id: 'kfp-g5-c1',
    exam: 'KFP',
    specialty: 'Aged Care & Geriatrics',
    topic: 'Falls, polypharmacy and cognitive decline in an older adult',
    title: 'Two falls in a fortnight',
    vignette:
      "Nell, an 82-year-old woman who lives alone in her own home, is brought to your general practice by her daughter after two falls in the past fortnight. Both falls occurred in the morning when getting out of bed or standing from a chair, with no loss of consciousness and no warning palpitations or chest pain. Her regular medications are perindopril 5 mg daily, amitriptyline 25 mg nocte (prescribed years ago for sleep), temazepam 10 mg nocte, and a recently commenced course of oxybutynin for urinary urgency. She uses reading glasses only, has bilateral knee osteoarthritis, and her daughter reports Nell has become 'a bit vague' with appointments over the past six months. Her weight is 52 kg, down from 57 kg a year ago.",
    items: [
      {
        id: 'kfp-g5-c1-i1',
        question:
          'Which single element of the initial assessment is most likely to identify a reversible contributor to her falls?',
        options: [
          { key: 'A', text: 'A structured medication review including lying and standing blood pressure' },
          { key: 'B', text: 'A CT brain to exclude an intracranial cause' },
          { key: 'C', text: 'Carotid duplex ultrasound to exclude carotid stenosis' },
          { key: 'D', text: 'A serum B12 and folate level' },
        ],
        correctKey: 'A',
        explanation:
          'Her falls are postural in timing, and she is taking four agents that independently increase falls risk (an ACE inhibitor, a tricyclic, a benzodiazepine and an anticholinergic). Multifactorial falls assessment in the RACGP aged care context begins with medication review plus lying and standing blood pressure, as orthostatic hypotension and drug burden are the most common, most readily reversible contributors.',
        optionExplanations: {
          A: 'Correct - postural falls with a high anticholinergic and sedative burden make drug-induced orthostatic hypotension the highest-yield reversible target, and lying/standing BP is the bedside test that confirms it.',
          B: 'CT brain is not indicated for unwitnessed mechanical/postural falls with no head strike, no focal neurology and no anticoagulation; it would not explain the pattern.',
          C: 'Carotid stenosis does not cause falls or non-focal syncope; imaging it is a common distractor with no yield here.',
          D: 'B12 and folate are reasonable within a broader falls screen, but deficiency rarely explains falls of this timing and would not be the single highest-yield element.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g5-c1-i2',
        stemAddendum:
          'Her lying blood pressure is 138/78 mmHg, falling to 104/62 mmHg at 3 minutes standing, with mild light-headedness reproduced. She has a dry mouth and reports constipation.',
        question:
          'Which single medication change is the highest priority at this visit?',
        options: [
          { key: 'A', text: 'Halve the perindopril dose and review in one week' },
          { key: 'B', text: 'Cease the oxybutynin and plan staged withdrawal of amitriptyline and temazepam' },
          { key: 'C', text: 'Add fludrocortisone to treat the orthostatic hypotension' },
          { key: 'D', text: 'Cease all four medications today' },
        ],
        correctKey: 'B',
        explanation:
          'Deprescribing targets the drugs with the worst benefit-to-harm ratio first. Oxybutynin is a potent anticholinergic recently started, with no clear benefit and clear harm (dry mouth, constipation, cognitive impairment, falls) and can be stopped outright. Amitriptyline and temazepam also carry high falls and cognitive risk, but both require gradual tapering to avoid withdrawal and rebound insomnia.',
        optionExplanations: {
          A: 'Reducing antihypertensive burden may eventually be needed, but perindopril is treating a real indication and is a lower-harm agent than the anticholinergic and sedative combination.',
          B: 'Correct - stop the recently started, clearly harmful oxybutynin immediately, then taper the tricyclic and benzodiazepine in a planned, monitored way.',
          C: 'Adding a drug to treat a drug side effect is a prescribing cascade; fludrocortisone risks fluid overload and hypokalaemia and is not first-line here.',
          D: 'Abrupt cessation of amitriptyline and temazepam together risks withdrawal, agitation and rebound insomnia; staged withdrawal is required.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g5-c1-i3',
        stemAddendum:
          'You arrange a home medicines review. Her daughter raises the vagueness again: Nell has missed two appointments, repeats questions, and recently left a pot boiling dry. Nell herself is unconcerned.',
        question:
          'What is the most appropriate next step to assess the reported cognitive change?',
        options: [
          { key: 'A', text: 'Reassure the daughter that this is normal ageing and review in 12 months' },
          { key: 'B', text: 'Refer directly to a memory clinic without further workup' },
          { key: 'C', text: 'Perform a validated cognitive assessment with an informant history, plus dementia screening bloods and consider CT brain' },
          { key: 'D', text: 'Order an amyloid PET scan' },
        ],
        correctKey: 'C',
        explanation:
          'Functional change (missed appointments, an unsafe cooking incident) plus repetitive questioning is not normal ageing and warrants structured evaluation: a validated instrument such as the RUDAS or MoCA, corroborative informant history, and reversible-cause bloods (FBC, UEC, LFT, TSH, calcium, B12, folate, glucose). Structural imaging is considered, particularly with recent onset or focal features. Note that cognitive testing should be deferred or repeated once the anticholinergic and sedative burden is reduced, since these drugs themselves impair cognition.',
        optionExplanations: {
          A: 'Leaving a stove unattended and missing appointments represent functional decline with a safety risk; labelling this normal ageing misses reversible causes and delays planning.',
          B: 'Primary care workup should precede specialist referral so reversible contributors (drugs, thyroid, B12, depression, delirium) are identified first.',
          C: 'Correct - validated cognitive testing with informant history plus reversible-cause screening bloods, with imaging considered, is the appropriate primary care pathway.',
          D: 'Amyloid PET is not part of routine Australian general practice dementia assessment and would not change management here.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g5-c1-i4',
        stemAddendum:
          "Screening bloods are normal apart from vitamin D of 38 nmol/L. Her RUDAS score is borderline. She has lost 5 kg over the year, her gait is slow with a widened base, and she cannot rise from a chair without using her arms. She is adamant she wants to stay at home.",
        question:
          'Which single intervention is most likely to reduce her risk of further falls?',
        options: [
          { key: 'A', text: 'Supervised progressive strength and balance exercise, with occupational therapy home hazard assessment' },
          { key: 'B', text: 'Prescribing a four-wheeled walker and advising her to move less' },
          { key: 'C', text: 'Hip protectors alone' },
          { key: 'D', text: 'Commencing a bisphosphonate' },
        ],
        correctKey: 'A',
        explanation:
          'The strongest evidence for falls prevention in community-dwelling older people is progressive, challenging strength and balance training, combined with occupational therapy home hazard modification for those at high risk. Her inability to rise without using her arms indicates proximal weakness that is modifiable. Vitamin D replacement and bone protection are important for fracture risk but do not by themselves prevent falls.',
        optionExplanations: {
          A: 'Correct - progressive strength and balance exercise plus OT home hazard assessment is the best-evidenced falls prevention combination for a high-risk community dweller.',
          B: 'A walker may be part of the plan, but advising reduced activity accelerates deconditioning and increases falls risk; gait aids should be prescribed after assessment, not instead of exercise.',
          C: 'Hip protectors may reduce hip fracture in residential care but do not prevent falls and have poor adherence at home.',
          D: 'Bone protection is appropriate for fracture risk (and should be assessed), but a bisphosphonate does not reduce the frequency of falls.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g5-c1-i5',
        stemAddendum:
          'Six weeks later the oxybutynin has stopped, temazepam is being tapered, her postural drop has resolved, and she has started a community strength and balance program. Her daughter asks what happens next and who decides if Nell can no longer manage.',
        question:
          'Which single action best supports her longer-term care while respecting her autonomy?',
        options: [
          { key: 'A', text: 'Ask the daughter to apply for guardianship now so decisions can be made later' },
          { key: 'B', text: 'Initiate a GP Management Plan with Team Care Arrangements, an aged care assessment for home supports, and an advance care planning discussion while Nell retains capacity' },
          { key: 'C', text: 'Defer all planning until a formal dementia diagnosis is confirmed' },
          { key: 'D', text: 'Arrange immediate permanent residential aged care placement' },
        ],
        correctKey: 'B',
        explanation:
          'Capacity is decision-specific and presumed until shown otherwise. With borderline cognition, weight loss and falls, the priority is to coordinate care now (chronic disease management planning, allied health input, aged care assessment for home support services) and to document her values, preferences and substitute decision-maker while she can still participate. Waiting for a definitive diagnosis wastes the window in which she can direct her own future care.',
        optionExplanations: {
          A: 'Guardianship is a last resort applied only when capacity is lost and no less restrictive option exists; it is premature and undermines her autonomy.',
          B: 'Correct - coordinated care planning, aged care assessment for home supports, and advance care planning while capacity is retained respects her wish to stay home and prepares for decline.',
          C: 'Deferring planning until a label is applied delays supports she needs now and risks losing the opportunity for her own input.',
          D: 'She has reversible contributors that are improving and an explicit preference to remain home; residential placement is not indicated and would not be least-restrictive.',
        },
        difficulty: 'moderate',
      },
    ],
  },
  {
    id: 'kfp-g5-c2',
    exam: 'KFP',
    specialty: 'Preventive Care & Population Health',
    topic: 'Opportunistic preventive health check and absolute cardiovascular risk',
    title: 'Just here for the work medical',
    vignette:
      "Danijel, a 52-year-old truck driver, attends your practice asking for a form to be signed for his commercial driving medical. He has not seen a GP for four years. He smokes 15 cigarettes a day, drinks 4 standard drinks most evenings, and describes his job as sedentary with irregular meals. His father had a myocardial infarction at 58. On examination his blood pressure is 152/94 mmHg repeated on two readings, BMI is 32 kg/m2 and waist circumference is 112 cm. He says he feels fine and has no chest pain, breathlessness or claudication.",
    items: [
      {
        id: 'kfp-g5-c2-i1',
        question:
          'Which single approach best uses this opportunistic consultation?',
        options: [
          { key: 'A', text: 'Sign the form now and tell him to book a separate long appointment for a health check' },
          { key: 'B', text: 'Address the driving medical and, with his agreement, begin an age-appropriate preventive health check including absolute cardiovascular risk assessment and smoking cessation discussion' },
          { key: 'C', text: 'Decline to sign the form until all screening is complete' },
          { key: 'D', text: 'Screen for prostate cancer with a PSA as the priority, given his age' },
        ],
        correctKey: 'B',
        explanation:
          'The RACGP Red Book emphasises opportunistic preventive activity, particularly in men who attend infrequently. A 52-year-old smoker with untreated hypertension, central obesity and a family history of premature coronary disease is an ideal candidate for absolute cardiovascular risk assessment and smoking cessation, and the attendance itself may not be repeated soon. Consent and shared agenda-setting keep the consultation patient-centred.',
        optionExplanations: {
          A: 'Deferring loses the opportunity in a patient who attends rarely; infrequent attenders often do not return for a separate appointment.',
          B: 'Correct - use the attendance to address both the stated agenda and high-yield preventive care, with his agreement.',
          C: 'Withholding the form is coercive and not a legitimate way to obtain screening consent; his fitness to drive is assessed on its own merits.',
          D: 'PSA screening in an asymptomatic man requires an individualised informed-choice discussion and is not the priority over modifiable cardiovascular risk here.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfp-g5-c2-i2',
        stemAddendum:
          'He agrees to the check. He has never had a lipid profile or blood glucose measured. He asks whether his blood pressure alone means he needs tablets.',
        question:
          'What is the most appropriate next step before deciding on pharmacotherapy?',
        options: [
          { key: 'A', text: 'Start an antihypertensive immediately based on the blood pressure reading alone' },
          { key: 'B', text: 'Calculate his absolute cardiovascular disease risk using the Australian CVD risk calculator, after obtaining lipids, glucose/HbA1c, UEC and urine ACR' },
          { key: 'C', text: 'Order a coronary CT calcium score as the first-line risk assessment' },
          { key: 'D', text: 'Rely on his family history alone to classify him as high risk' },
        ],
        correctKey: 'B',
        explanation:
          'Australian practice bases primary prevention decisions on absolute cardiovascular risk rather than single risk factors. The Australian CVD risk calculator requires age, sex, smoking status, systolic blood pressure, total and HDL cholesterol, diabetes status (and where relevant HbA1c, eGFR and urine ACR). Collecting these inputs first allows a risk-based, shared decision about blood pressure and lipid-lowering therapy.',
        optionExplanations: {
          A: 'Treatment decisions for primary prevention follow absolute risk assessment and confirmation of sustained elevation, not one office reading in isolation.',
          B: 'Correct - obtain the calculator inputs and compute absolute CVD risk before recommending pharmacotherapy.',
          C: 'Calcium scoring may reclassify selected intermediate-risk patients but is not the first-line assessment and is not routinely funded for this purpose.',
          D: 'Family history is a risk modifier considered alongside the calculated risk, not a substitute for calculating it.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g5-c2-i3',
        stemAddendum:
          'Results: total cholesterol 6.6 mmol/L, HDL 0.9 mmol/L, fasting glucose 5.9 mmol/L, HbA1c 5.9%, eGFR >90, urine ACR normal. Home blood pressure readings average 150/92 mmHg. His calculated absolute five-year cardiovascular risk is high.',
        question:
          'Which single intervention will deliver the greatest reduction in his cardiovascular risk?',
        options: [
          { key: 'A', text: 'Smoking cessation, supported with pharmacotherapy and behavioural counselling' },
          { key: 'B', text: 'Commencing a fish oil supplement' },
          { key: 'C', text: 'Advising a low-salt diet as the sole intervention' },
          { key: 'D', text: 'Annual review without any specific intervention' },
        ],
        correctKey: 'A',
        explanation:
          'In a current smoker at high absolute risk, cessation produces the single largest reduction in cardiovascular risk, exceeding the benefit of any individual drug. Combining behavioural support with pharmacotherapy (nicotine replacement combination therapy, varenicline or bupropion) substantially increases quit rates compared with advice alone. Blood pressure and lipid-lowering therapy are also indicated but follow alongside, not instead of, cessation.',
        optionExplanations: {
          A: 'Correct - cessation combined with behavioural support and pharmacotherapy gives the largest single risk reduction in a high-risk smoker.',
          B: 'Fish oil has not been shown to reduce cardiovascular events in primary prevention and is not recommended for this purpose.',
          C: 'Sodium reduction contributes modestly to blood pressure control but is far less impactful than cessation and is inadequate as sole management at high absolute risk.',
          D: 'High absolute risk mandates active management of modifiable risk factors, including pharmacotherapy; watchful waiting is not appropriate.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g5-c2-i4',
        stemAddendum:
          'He agrees to a quit attempt and to start blood pressure and lipid-lowering therapy. He mentions his older brother was recently diagnosed with bowel cancer at age 59. Danijel has no bowel symptoms.',
        question:
          'What is the most appropriate bowel cancer screening recommendation for him?',
        options: [
          { key: 'A', text: 'Wait for his National Bowel Cancer Screening Program kit at age 55 and use immunochemical faecal occult blood testing then' },
          { key: 'B', text: 'Recommend colonoscopy now and thereafter at intervals guided by the family history category, as one first-degree relative diagnosed under 60 places him above average risk' },
          { key: 'C', text: 'No screening is required as he is asymptomatic' },
          { key: 'D', text: 'Order a CT colonography as the preferred screening test' },
        ],
        correctKey: 'B',
        explanation:
          'Average-risk Australians are screened with immunochemical faecal occult blood testing every two years from age 45 (with kits mailed from 50 and available on request from 45). A single first-degree relative diagnosed with colorectal cancer before age 60 moves a patient into a moderately increased risk category, for which colonoscopy commencing at 50 years, or 10 years younger than the relative at diagnosis, is recommended rather than faecal occult blood testing alone.',
        optionExplanations: {
          A: 'This applies the average-risk pathway and also misstates the eligible age; his family history places him in a higher risk category requiring colonoscopy.',
          B: 'Correct - a first-degree relative diagnosed under 60 warrants colonoscopic surveillance rather than faecal occult blood testing alone.',
          C: 'Screening is by definition for asymptomatic people; being symptom-free is the reason to screen, not to omit it.',
          D: 'CT colonography is reserved for those unable to complete or tolerate colonoscopy, not as a preferred screening modality.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g5-c2-i5',
        stemAddendum:
          'He starts nicotine replacement therapy, an antihypertensive and a statin, and is referred for colonoscopy. He asks what else he should be doing and when to come back.',
        question:
          'Which single plan best reflects appropriate ongoing preventive care and safety-netting?',
        options: [
          { key: 'A', text: 'Review in 4-6 weeks for medication tolerance, blood pressure and quit progress, then recall for annual absolute CVD risk recalculation, diabetes risk screening, alcohol reduction support and immunisation review' },
          { key: 'B', text: 'Review only if symptoms develop' },
          { key: 'C', text: 'Repeat the full lipid and risk assessment in five years' },
          { key: 'D', text: 'Refer to a cardiologist for all ongoing risk factor management' },
        ],
        correctKey: 'A',
        explanation:
          'Early review after starting therapy checks tolerance, adherence and quit progress, when relapse risk is highest. Structured recall then drives ongoing preventive care: periodic absolute CVD risk recalculation, diabetes screening given his impaired-range glucose and central obesity, brief intervention for alcohol above recommended limits, and age-appropriate immunisations. Safety-netting should include advice to present urgently with chest pain, or with rectal bleeding or bowel habit change before his colonoscopy.',
        optionExplanations: {
          A: 'Correct - early post-initiation review plus structured recall for ongoing risk factor and screening management is the appropriate preventive framework.',
          B: 'Symptom-triggered review abandons primary prevention and misses relapse to smoking and medication non-adherence.',
          C: 'A five-year interval is far too long for a high-risk patient starting new therapy and requiring ongoing cessation and metabolic monitoring.',
          D: 'Cardiovascular risk factor management in primary prevention is core general practice work; routine specialist referral is unnecessary and fragments care.',
        },
        difficulty: 'moderate',
      },
    ],
  },
]
