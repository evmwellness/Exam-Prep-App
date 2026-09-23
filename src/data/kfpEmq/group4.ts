import type { EmqTheme } from '../../types'

export const group4Themes: EmqTheme[] = [
  {
    id: 'kfpemq-g4-t1',
    exam: 'KFP',
    format: 'emq',
    specialty: 'Endocrine & Metabolic',
    topic: 'Choice of add-on glucose-lowering therapy in type 2 diabetes',
    title: 'What should I add after metformin?',
    instructions:
      'Each patient below has type 2 diabetes and is already on the maximum tolerated dose of metformin. For each scenario, select the single most appropriate next glucose-lowering agent from the list of options. Each option may be used once, more than once, or not at all.',
    options: [
      { key: 'A', text: 'Empagliflozin (SGLT2 inhibitor)' },
      { key: 'B', text: 'Semaglutide (GLP-1 receptor agonist)' },
      { key: 'C', text: 'Sitagliptin (DPP-4 inhibitor)' },
      { key: 'D', text: 'Gliclazide modified release (sulfonylurea)' },
      { key: 'E', text: 'Basal insulin (insulin glargine)' },
      { key: 'F', text: 'Pioglitazone (thiazolidinedione)' },
    ],
    stems: [
      {
        id: 'kfpemq-g4-t1-s1',
        vignette:
          'A 68-year-old man has type 2 diabetes and heart failure with reduced ejection fraction (LVEF 32%), with two hospital admissions for decompensation in the past year. He takes metformin 1 g twice daily, perindopril, bisoprolol and spironolactone. HbA1c is 8.1% (65 mmol/mol), eGFR 54 mL/min/1.73m2, BMI 29 kg/m2.',
        correctKey: 'A',
        explanation:
          'In type 2 diabetes with HFrEF, an SGLT2 inhibitor is the preferred add-on: it reduces heart failure hospitalisation and cardiovascular death independent of glycaemic effect, is PBS-listed for T2DM, and is appropriate at this eGFR.',
        optionExplanations: {
          A: 'Correct - empagliflozin gives proven reduction in heart failure hospitalisation and CV death in HFrEF, plus modest HbA1c and weight benefit; eGFR 54 is well above the threshold for initiation.',
          B: 'A GLP-1 agonist is a reasonable agent for atherosclerotic disease and obesity, but it has no established benefit in HFrEF and does not address this man’s dominant problem of recurrent decompensation.',
          C: 'Sitagliptin is weight- and cardiac-neutral at best; DPP-4 inhibitors offer no heart failure benefit and saxagliptin in particular signalled increased heart failure hospitalisation, so this class adds nothing here.',
          D: 'Gliclazide would lower HbA1c but carries hypoglycaemia and weight-gain risk with no cardiovascular or heart failure benefit – a missed opportunity in a patient with two recent admissions.',
          E: 'Insulin is not needed at HbA1c 8.1% on a single oral agent, causes fluid retention and weight gain, and would not improve his heart failure outcomes.',
          F: 'Pioglitazone causes sodium and fluid retention and is contraindicated in symptomatic heart failure – it would be expected to precipitate further decompensation.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g4-t1-s2',
        vignette:
          'A 44-year-old woman has had type 2 diabetes for 4 years. BMI is 38 kg/m2 and she has obstructive sleep apnoea and hypertension, but no cardiovascular or kidney disease. HbA1c is 8.9% (74 mmol/mol) on metformin 2 g daily; eGFR is 92 mL/min/1.73m2. She is motivated to lose weight and has already made sustained dietary and exercise changes.',
        correctKey: 'B',
        explanation:
          'Where obesity is the dominant driver and weight loss is a stated priority, a GLP-1 receptor agonist gives the greatest combined HbA1c and weight reduction of the available classes, and meets PBS criteria as dual therapy with metformin when HbA1c remains above 7% despite maximal tolerated metformin.',
        optionExplanations: {
          A: 'An SGLT2 inhibitor would help modestly with weight and blood pressure, but gives a smaller HbA1c reduction than a GLP-1 agonist and is less effective for the degree of weight loss she is seeking, with no compelling cardiorenal indication here.',
          B: 'Correct - semaglutide delivers the largest HbA1c fall of these options plus clinically meaningful weight loss, addressing her obesity, OSA and blood pressure simultaneously; she satisfies PBS dual-therapy criteria with metformin.',
          C: 'Sitagliptin is weight neutral and gives only about a 0.5–0.8% HbA1c reduction – insufficient for an HbA1c of 8.9% and of no help for her obesity.',
          D: 'Gliclazide typically causes 2–3 kg of weight gain and hypoglycaemia risk, working directly against her main treatment goal.',
          E: 'Insulin causes further weight gain and is not indicated in a well, asymptomatic patient who has other effective non-insulin options available.',
          F: 'Pioglitazone causes weight gain and fluid retention and would worsen both her obesity and her sleep apnoea.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g4-t1-s3',
        vignette:
          'A 79-year-old woman who lives alone has type 2 diabetes, moderate frailty and a previous fall. Gliclazide was ceased 3 months ago after two episodes of symptomatic hypoglycaemia, one requiring ambulance attendance. HbA1c has risen to 8.6% (70 mmol/mol) on metformin 500 mg twice daily; eGFR is 29 mL/min/1.73m2 and weight is 51 kg.',
        correctKey: 'C',
        explanation:
          'In a frail, underweight older patient with stage 4 CKD and documented hypoglycaemia, a DPP-4 inhibitor is the safest add-on: it is essentially hypoglycaemia-free as monotherapy add-on, weight neutral, and sitagliptin can be dose-reduced (25–50 mg daily) for the eGFR.',
        optionExplanations: {
          A: 'Empagliflozin has cardiorenal benefits but should not be started for glycaemic purposes at eGFR 29 (little glucose-lowering effect), and the volume depletion, hypotension and genital infection risks are poorly suited to a frail faller living alone.',
          B: 'A GLP-1 agonist causes nausea, anorexia and weight loss – undesirable in a frail 51 kg woman at risk of sarcopenia and malnutrition.',
          C: 'Correct - sitagliptin is weight neutral with negligible intrinsic hypoglycaemia risk and can be renally dose-adjusted, making it the safest way to improve glycaemia after her sulfonylurea-induced hypoglycaemia.',
          D: 'Re-challenging with gliclazide would repeat the exact harm already documented; sulfonylurea hypoglycaemia risk rises steeply with age, frailty and reduced eGFR.',
          E: 'Basal insulin brings the highest hypoglycaemia risk of all options and requires injection technique and monitoring that a frail woman living alone may not manage safely; it is not required at this HbA1c.',
          F: 'Pioglitazone increases fracture risk (particularly in older women), fluid retention and oedema – unacceptable in a patient with a previous fall.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g4-t1-s4',
        vignette:
          'A 53-year-old man is a self-employed carpenter with no private health cover and significant financial stress; he tells you he cannot afford medicines that are not subsidised. He has no cardiovascular, kidney or liver disease, BMI is 26 kg/m2 and eGFR is 96 mL/min/1.73m2. HbA1c is 9.2% (77 mmol/mol) on metformin 2 g daily and he has polyuria and nocturia. He does not hold a commercial driver licence.',
        correctKey: 'D',
        explanation:
          'Where cost is the decisive constraint and there is no cardiorenal indication, a sulfonylurea is a legitimate PBS-subsidised second-line choice: gliclazide MR is inexpensive, potent and acts quickly to relieve osmotic symptoms, with hypoglycaemia risk that can be managed by education and low starting dose.',
        optionExplanations: {
          A: 'Empagliflozin is PBS-listed with metformin, but is a more expensive brand-only option; with no heart failure, atherosclerotic disease or CKD there is no compelling indication that justifies the extra cost for this man.',
          B: 'Semaglutide is the most expensive option and, although PBS-subsidised as dual therapy, the injectable cost, supply constraints and lack of an obesity or CVD driver make it a poor fit for his priorities.',
          C: 'Sitagliptin is well tolerated but gives only a modest HbA1c fall, which is inadequate for an HbA1c of 9.2% with osmotic symptoms, and offers no cost advantage over gliclazide.',
          D: 'Correct - gliclazide MR is potent, rapidly effective for his osmotic symptoms, and by far the cheapest PBS-subsidised add-on; he is not a commercial driver, so hypoglycaemia risk can be addressed with education and dose titration.',
          E: 'Insulin is not first choice here: he is not catabolic or ketotic, and the cost of meters, strips and the monitoring burden would be a greater imposition than an oral agent.',
          F: 'Pioglitazone is cheap but acts slowly over 8–12 weeks, causes weight gain and oedema, and will not relieve his current osmotic symptoms.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfpemq-g4-t1-s5',
        vignette:
          'A 61-year-old man has lost 9 kg unintentionally over 8 weeks with thirst, polyuria and blurred vision. He takes metformin 2 g daily and gliclazide MR 120 mg daily. HbA1c is 12.4% (112 mmol/mol), random glucose 24 mmol/L, urinary ketones 1+, and he is clinically dry. C-peptide and autoantibody results are pending.',
        correctKey: 'E',
        explanation:
          'Marked hyperglycaemia with catabolic features – unintentional weight loss, osmotic symptoms and ketonuria – signals significant insulin deficiency and requires insulin, not another oral or injectable non-insulin agent.',
        optionExplanations: {
          A: 'An SGLT2 inhibitor is contraindicated in this setting: with ketonuria and insulin deficiency it markedly increases the risk of (including euglycaemic) diabetic ketoacidosis, and its osmotic diuresis would worsen his dehydration.',
          B: 'A GLP-1 agonist depends on residual beta-cell function, works too slowly for this degree of hyperglycaemia, and would aggravate ongoing catabolic weight loss.',
          C: 'Sitagliptin lowers HbA1c by well under 1% and is grossly insufficient for an HbA1c of 12.4% with ketonuria.',
          D: 'He is already on a near-maximal sulfonylurea dose and failing – further sulfonylurea will not overcome established insulin deficiency.',
          E: 'Correct - weight loss, osmotic symptoms, ketonuria and HbA1c 12.4% despite dual oral therapy indicate insulin deficiency; start basal insulin promptly (and consider latent autoimmune diabetes in adults while awaiting antibody and C-peptide results).',
          F: 'Pioglitazone takes months for full effect and does nothing for acute symptomatic, ketosis-prone hyperglycaemia.',
        },
        difficulty: 'moderate',
      },
    ],
  },
  {
    id: 'kfpemq-g4-t2',
    exam: 'KFP',
    format: 'emq',
    specialty: 'Gastroenterology & Nutrition',
    topic: 'Differential diagnosis of abdominal pain',
    title: 'Where is this abdominal pain coming from?',
    instructions:
      'For each scenario below, select the single most likely diagnosis from the list of options. Each option may be used once, more than once, or not at all.',
    options: [
      { key: 'A', text: 'Acute appendicitis' },
      { key: 'B', text: 'Acute diverticulitis' },
      { key: 'C', text: 'Biliary colic (uncomplicated symptomatic cholelithiasis)' },
      { key: 'D', text: 'Acute cholecystitis' },
      { key: 'E', text: 'Acute pancreatitis' },
      { key: 'F', text: 'Perforated peptic ulcer' },
    ],
    stems: [
      {
        id: 'kfpemq-g4-t2-s1',
        vignette:
          'A 34-year-old woman presents to the clinic the morning after an episode of severe constant right upper quadrant pain radiating to the right scapula, which began 2 hours after a takeaway meal, lasted about 3 hours with vomiting, then resolved completely. She has had two similar episodes over 6 months. She is afebrile, the abdomen is soft and non-tender, and LFTs and lipase are normal.',
        correctKey: 'C',
        explanation:
          'Self-limiting episodes of severe postprandial right upper quadrant pain that resolve within hours, with a normal examination and normal bloods between attacks, are characteristic of biliary colic from transient cystic duct obstruction by a stone.',
        optionExplanations: {
          A: 'Appendicitis produces progressive, unremitting right iliac fossa pain with anorexia and localised tenderness – not recurrent right upper quadrant pain that fully resolves.',
          B: 'Diverticulitis characteristically causes persistent left iliac fossa pain with fever and raised inflammatory markers, not fat-triggered right upper quadrant attacks.',
          C: 'Correct - stereotyped postprandial RUQ pain lasting a few hours with complete resolution, a normal abdomen and normal LFTs and lipase is classic biliary colic; arrange upper abdominal ultrasound and refer for elective cholecystectomy.',
          D: 'Cholecystitis implies sustained inflammation: pain lasting beyond 6 hours with fever, right upper quadrant tenderness, a positive Murphy sign and leucocytosis – all absent here.',
          E: 'Pancreatitis causes severe epigastric pain boring to the back that persists for days with marked lipase elevation; her lipase is normal and the pain has settled.',
          F: 'A perforated ulcer produces sudden severe pain with peritonism and a rigid abdomen; she would not be walking into the clinic well the next morning with a soft abdomen.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g4-t2-s2',
        vignette:
          'A 49-year-old woman with a BMI of 34 kg/m2 has had constant right upper quadrant pain for 20 hours, with anorexia, nausea and rigors. Temperature is 38.4 C, and palpation below the right costal margin during inspiration causes her to catch her breath. WCC is 15.2 x 10^9/L and CRP 88 mg/L; bilirubin, ALP and lipase are normal.',
        correctKey: 'D',
        explanation:
          'Pain lasting more than 6 hours with fever, systemic inflammatory response and a positive Murphy sign indicates progression from transient cystic duct obstruction to inflammation of the gallbladder wall.',
        optionExplanations: {
          A: 'Appendicitis is very unlikely with maximal tenderness under the right costal margin and a positive Murphy sign rather than right iliac fossa signs (a high retrocaecal appendix is a rare mimic but does not fit this picture).',
          B: 'Diverticulitis almost always presents with left-sided lower abdominal pain and tenderness in this age group.',
          C: 'Biliary colic is excluded by the duration beyond 6 hours plus fever, leucocytosis and raised CRP – uncomplicated colic has no inflammatory response.',
          D: 'Correct - prolonged RUQ pain, fever, rigors, positive Murphy sign and leucocytosis with normal bilirubin and ALP is acute cholecystitis; arrange ultrasound and urgent surgical referral for admission, analgesia, fluids and antibiotics.',
          E: 'Pancreatitis would give epigastric pain radiating to the back with a markedly elevated lipase; her lipase is normal.',
          F: 'Perforation causes abrupt generalised peritonitis with board-like rigidity, not localised RUQ tenderness evolving over most of a day.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g4-t2-s3',
        vignette:
          'A 21-year-old man has had 18 hours of abdominal pain that began around the umbilicus and has now settled in the right iliac fossa. He has no appetite, has vomited once and feels feverish. Temperature is 37.9 C; there is guarding and rebound tenderness maximal two-thirds of the way along a line from the umbilicus to the right anterior superior iliac spine. Urinalysis is clear.',
        correctKey: 'A',
        explanation:
          'Migration of periumbilical visceral pain to somatic right iliac fossa pain with anorexia, low-grade fever and localised peritonism at McBurney point is the classic sequence of acute appendicitis and mandates urgent surgical referral.',
        optionExplanations: {
          A: 'Correct - the migratory pain pattern, anorexia, low-grade fever and focal peritonism at McBurney point make appendicitis the clear diagnosis; refer urgently rather than delaying for imaging in the clinic.',
          B: 'Diverticulitis is rare at 21 and typically causes left iliac fossa pain; right-sided diverticulitis is uncommon and would not produce the classic migratory pattern.',
          C: 'Biliary colic causes short-lived upper abdominal pain without localised peritonism and is very unusual in a young man with no risk factors.',
          D: 'Cholecystitis localises to the right upper quadrant with a positive Murphy sign, not to the right iliac fossa.',
          E: 'Pancreatitis causes epigastric pain radiating to the back with no migration to the right iliac fossa, and he has no alcohol or gallstone risk factors described.',
          F: 'Perforated ulcer produces sudden severe generalised pain with rigidity, although leaked contents tracking down the right paracolic gutter is a recognised mimic; the 18-hour migratory onset here fits appendicitis far better.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g4-t2-s4',
        vignette:
          'A 66-year-old man has had 3 days of steadily worsening left iliac fossa pain with a change in bowel habit and low-grade fever. He had a similar, milder episode 2 years ago that settled with antibiotics. Temperature is 38.1 C, there is localised left iliac fossa tenderness with voluntary guarding but no generalised peritonism, and CRP is 96 mg/L with WCC 13.4 x 10^9/L.',
        correctKey: 'B',
        explanation:
          'Localised left iliac fossa pain and tenderness with fever, raised inflammatory markers and a prior similar episode in an older adult is acute diverticulitis; CT of the abdomen and pelvis confirms the diagnosis and excludes abscess or perforation.',
        optionExplanations: {
          A: 'Appendicitis is right-sided and would be unusual at 66 with these left-sided findings; the previous identical episode also points to recurrent diverticular disease.',
          B: 'Correct - subacute left iliac fossa pain with altered bowel habit, fever, localised tenderness and raised CRP, in a patient with a prior similar episode, is typical acute diverticulitis; also plan interval colonoscopy once settled to exclude malignancy.',
          C: 'Biliary colic is upper abdominal, short-lived and does not cause fever, leucocytosis or altered bowel habit.',
          D: 'Cholecystitis localises to the right upper quadrant with a positive Murphy sign, which is not described.',
          E: 'Pancreatitis causes epigastric pain radiating to the back rather than localised left iliac fossa tenderness, and lipase would be markedly elevated.',
          F: 'Perforation would present with sudden onset generalised peritonitis and a systemically unwell patient, not 3 days of localised tenderness without peritonism.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g4-t2-s5',
        vignette:
          'A 52-year-old man presents with 12 hours of severe constant epigastric pain boring through to the back, relieved slightly by sitting forward, with repeated vomiting. He drank heavily at a party 2 days ago. He is tachycardic at 108 beats/min, the epigastrium is tender without rigidity, and bowel sounds are reduced. Lipase is 1840 U/L (reference less than 60).',
        correctKey: 'E',
        explanation:
          'Severe epigastric pain radiating to the back, relieved by leaning forward, with vomiting and lipase more than three times the upper limit of normal establishes acute pancreatitis; the recent binge points to an alcohol aetiology, but ultrasound is still needed to exclude gallstones.',
        optionExplanations: {
          A: 'Appendicitis may begin centrally but migrates to the right iliac fossa and does not raise lipase to this degree.',
          B: 'Diverticulitis causes lower abdominal, usually left-sided pain with normal lipase.',
          C: 'Biliary colic is right upper quadrant, lasts a few hours and has a normal lipase – although gallstones remain a possible cause of this attack and warrant ultrasound.',
          D: 'Cholecystitis gives RUQ tenderness with a positive Murphy sign and only mild lipase elevation if any, not pain boring to the back with lipase over 30 times normal.',
          E: 'Correct - constant epigastric pain radiating to the back, eased by sitting forward, with vomiting and lipase greater than three times the upper limit of normal, is acute pancreatitis requiring admission for fluids, analgesia and severity assessment.',
          F: 'Perforated ulcer causes abrupt onset pain with board-like rigidity and free gas on erect chest x-ray; lipase can rise modestly but not to this level, and his abdomen is tender without rigidity.',
        },
        difficulty: 'moderate',
      },
    ],
  },
]
