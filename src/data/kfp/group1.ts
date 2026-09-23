import type { KfpCase } from '../../types'

export const group1Cases: KfpCase[] = [
  {
    id: 'kfp-g1-c1',
    exam: 'KFP',
    specialty: 'Cardiovascular',
    topic: 'Acute coronary syndrome / ST-elevation myocardial infarction',
    title: 'Crushing chest pain on the farm',
    vignette:
      "Ian, a 58-year-old farmer, arrives unannounced at your rural general practice with 45 minutes of central crushing chest pain radiating to his jaw. He is diaphoretic and nauseated. He smokes 20 cigarettes a day and takes no regular medications. On arrival his heart rate is 52/min, blood pressure 108/70 mmHg, respiratory rate 20/min and oxygen saturation 96% on room air. Heart sounds are dual, chest is clear. The nearest percutaneous coronary intervention (PCI) centre is a three-hour road transfer away.",
    items: [
      {
        id: 'kfp-g1-c1-i1',
        question:
          'What is the single most important immediate action in the first 10 minutes of this presentation?',
        options: [
          { key: 'A', text: 'Record and interpret a 12-lead ECG' },
          { key: 'B', text: 'Take blood for a high-sensitivity troponin and await the result' },
          { key: 'C', text: 'Arrange an urgent chest X-ray at the local hospital' },
          { key: 'D', text: 'Give sublingual glyceryl trinitrate and review the response in 20 minutes' },
        ],
        correctKey: 'A',
        explanation:
          'In any patient with suspected acute coronary syndrome, a 12-lead ECG must be obtained and interpreted by a clinician experienced in ECG interpretation within 10 minutes of first medical contact. It is the only test that identifies ST-elevation myocardial infarction, which is a time-critical reperfusion diagnosis.',
        optionExplanations: {
          A: 'Correct - a 12-lead ECG within 10 minutes of first medical contact is the pivotal triage step and determines whether time-critical reperfusion is required.',
          B: 'Troponin results take time and a normal early troponin does not exclude STEMI; waiting for it delays reperfusion.',
          C: 'Chest X-ray does not diagnose STEMI and transferring him for imaging delays definitive assessment.',
          D: 'Response to nitrates neither confirms nor excludes ischaemia, and a 20-minute observation period wastes reperfusion time.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfp-g1-c1-i2',
        stemAddendum:
          'The ECG shows 3 mm ST elevation in leads II, III and aVF with reciprocal ST depression in I and aVL. Aspirin 300 mg has been chewed, he is on continuous cardiac monitoring, and you have activated the retrieval service.',
        question:
          'Given his bradycardia and borderline blood pressure, which additional ECG recording is most important to obtain now?',
        options: [
          { key: 'A', text: 'Right-sided chest leads, particularly V4R' },
          { key: 'B', text: 'A repeat standard 12-lead ECG in one hour' },
          { key: 'C', text: 'A 24-hour ambulatory ECG monitor' },
          { key: 'D', text: 'An exercise ECG once the pain settles' },
        ],
        correctKey: 'A',
        explanation:
          'Inferior ST elevation with hypotension and bradycardia raises the possibility of right ventricular infarction from proximal right coronary artery occlusion. Right-sided leads (especially V4R) identify this, and it directly changes management because these patients are preload dependent and deteriorate with nitrates.',
        optionExplanations: {
          A: 'Correct - ST elevation in V4R confirms right ventricular involvement, which alters fluid and nitrate management immediately.',
          B: 'Serial ECGs are useful when the diagnosis is uncertain, but the STEMI is already diagnosed and a one-hour delay is unacceptable.',
          C: 'Ambulatory monitoring has no role in an evolving STEMI.',
          D: 'Exercise testing is absolutely contraindicated in acute ST-elevation myocardial infarction.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g1-c1-i3',
        stemAddendum:
          'V4R shows 2 mm of ST elevation. His blood pressure now reads 86/58 mmHg, his jugular venous pressure is elevated and his lungs remain clear. He is still in significant pain.',
        question: 'Which is the most appropriate immediate management of his hypotension?',
        options: [
          { key: 'A', text: 'Cautious intravenous normal saline boluses while withholding nitrates' },
          { key: 'B', text: 'Repeat sublingual glyceryl trinitrate to relieve his ongoing pain' },
          { key: 'C', text: 'Intravenous frusemide 40 mg' },
          { key: 'D', text: 'Intravenous metoprolol to control ischaemia' },
        ],
        correctKey: 'A',
        explanation:
          'Right ventricular infarction causes hypotension with a raised JVP and clear lung fields because the failing right ventricle cannot maintain left ventricular preload. Treatment is volume loading with careful fluid boluses, and avoidance of preload-reducing drugs such as nitrates, diuretics and morphine in large doses.',
        optionExplanations: {
          A: 'Correct - these patients are preload dependent; cautious fluid loading supports cardiac output while nitrates are withheld.',
          B: 'Nitrates reduce preload and can precipitate profound hypotension or cardiac arrest in right ventricular infarction.',
          C: 'Diuresis further reduces preload and worsens hypotension; his lungs are clear, so there is no pulmonary congestion to treat.',
          D: 'Beta blockade is contraindicated in a bradycardic, hypotensive patient with evolving right ventricular infarction.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g1-c1-i4',
        stemAddendum:
          'After 500 mL of saline his blood pressure improves to 104/68 mmHg. Retrieval confirms that the earliest possible arrival at the PCI centre would be 3 hours from now. Total symptom duration is presently 70 minutes. He has no history of stroke, bleeding, recent surgery or anticoagulant use.',
        question: 'What is the most appropriate reperfusion strategy?',
        options: [
          { key: 'A', text: 'Administer fibrinolytic therapy now and transfer for angiography' },
          { key: 'B', text: 'Transfer for primary PCI without fibrinolysis, accepting the 3-hour delay' },
          { key: 'C', text: 'Withhold reperfusion until a troponin result confirms myocardial infarction' },
          { key: 'D', text: 'Treat with aspirin, clopidogrel and heparin alone, with no reperfusion therapy' },
        ],
        correctKey: 'A',
        explanation:
          'Primary PCI is preferred only when it can be delivered within 90-120 minutes of first medical contact. When that is not achievable, as in this remote setting, fibrinolysis should be given as soon as possible (ideally within 30 minutes of first medical contact) in a patient without contraindications, followed by transfer for angiography - the pharmacoinvasive strategy.',
        optionExplanations: {
          A: 'Correct - PCI cannot be delivered within 120 minutes, so immediate fibrinolysis followed by transfer for angiography is the guideline-endorsed pharmacoinvasive approach.',
          B: 'A 3-hour delay to PCI markedly increases infarct size and mortality compared with immediate fibrinolysis in an eligible patient presenting within 12 hours.',
          C: 'Troponin results do not change the management of a diagnostic ST-elevation ECG and waiting causes avoidable myocardial loss.',
          D: 'Antiplatelet and anticoagulant therapy alone is inadequate; he is an ideal candidate for reperfusion.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g1-c1-i5',
        stemAddendum:
          'Ian is reperfused, undergoes angiography with a stent to the right coronary artery, and is discharged on aspirin, ticagrelor, atorvastatin 80 mg, perindopril and metoprolol. He sees you 10 days later. He feels well, has stopped smoking, and asks what happens next. His LDL cholesterol is 2.1 mmol/L.',
        question: 'Which is the single most appropriate action at this review?',
        options: [
          { key: 'A', text: 'Refer to cardiac rehabilitation and continue dual antiplatelet therapy for 12 months' },
          { key: 'B', text: 'Cease ticagrelor now and continue aspirin alone' },
          { key: 'C', text: 'Halve the atorvastatin dose because the LDL cholesterol is below 2.6 mmol/L' },
          { key: 'D', text: 'Advise avoiding all physical exertion for six months' },
        ],
        correctKey: 'A',
        explanation:
          'After an acute coronary syndrome with stenting, dual antiplatelet therapy is generally continued for 12 months unless bleeding risk dictates otherwise, and referral to cardiac rehabilitation is a class I recommendation that reduces mortality and readmission. The LDL target after ACS is below 1.8 mmol/L, so high-intensity statin therapy should continue.',
        optionExplanations: {
          A: 'Correct - cardiac rehabilitation plus 12 months of dual antiplatelet therapy are core secondary prevention measures after stented ACS.',
          B: 'Stopping the P2Y12 inhibitor 10 days after stenting substantially increases stent thrombosis risk.',
          C: 'The post-ACS LDL target is below 1.8 mmol/L, so the high-intensity statin should be maintained, not reduced.',
          D: 'Graded, supervised exercise through cardiac rehabilitation is beneficial; prolonged inactivity is harmful.',
        },
        difficulty: 'moderate',
      },
    ],
  },
  {
    id: 'kfp-g1-c2',
    exam: 'KFP',
    specialty: 'Respiratory',
    topic: 'Acute exacerbation of COPD',
    title: 'Three bad days with the chest',
    vignette:
      "Bruce, a 68-year-old retired boilermaker with known COPD (FEV1 48% predicted) and a 45 pack-year smoking history, presents with three days of worsening breathlessness. He reports increased sputum volume that has turned green. He uses tiotropium daily and salbutamol as needed. On examination he is alert and speaking in short phrases, respiratory rate 24/min, heart rate 96/min, temperature 37.4 degrees C, blood pressure 138/82 mmHg and oxygen saturation 89% on room air. There is widespread expiratory wheeze with a prolonged expiratory phase and no focal crackles.",
    items: [
      {
        id: 'kfp-g1-c2-i1',
        question: 'What is the most appropriate approach to oxygen therapy while you begin treatment?',
        options: [
          { key: 'A', text: 'Controlled oxygen via nasal prongs at 1-2 L/min, targeting SpO2 88-92%' },
          { key: 'B', text: 'High-flow oxygen 15 L/min via a non-rebreather mask' },
          { key: 'C', text: 'Oxygen via Hudson mask at 8 L/min, targeting SpO2 94-98%' },
          { key: 'D', text: 'Withhold oxygen entirely as his saturation is above 85%' },
        ],
        correctKey: 'A',
        explanation:
          'Patients at risk of hypercapnic respiratory failure, including those with moderate to severe COPD, should receive controlled low-flow oxygen titrated to a target SpO2 of 88-92%. Uncontrolled high-flow oxygen can worsen hypercapnia and cause CO2 narcosis and acidosis.',
        optionExplanations: {
          A: 'Correct - controlled oxygen titrated to SpO2 88-92% corrects dangerous hypoxaemia while minimising the risk of worsening hypercapnia.',
          B: 'High-flow oxygen in COPD risks precipitating hypercapnic respiratory failure and acidosis.',
          C: 'A target of 94-98% applies to patients not at risk of hypercapnia; it is too high for this patient.',
          D: 'A saturation of 89% is below target for this patient and hypoxaemia should be corrected, just cautiously.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g1-c2-i2',
        stemAddendum:
          'You commence salbutamol and ipratropium via a spacer. He has no allergies and normal renal function.',
        question: 'Which additional pharmacological treatment is most appropriate?',
        options: [
          {
            key: 'A',
            text: 'Prednisolone 30-50 mg orally daily for 5 days plus an oral antibiotic such as amoxicillin or doxycycline for 5 days',
          },
          { key: 'B', text: 'Prednisolone 50 mg daily for 14 days with a slow taper, without antibiotics' },
          { key: 'C', text: 'An oral antibiotic alone, with no systemic corticosteroid' },
          { key: 'D', text: 'Doubling his inhaled corticosteroid dose for four weeks' },
        ],
        correctKey: 'A',
        explanation:
          'He has all three cardinal (Anthonisen) features of an exacerbation - increased dyspnoea, increased sputum volume and increased sputum purulence - so antibiotics are indicated alongside a short course of systemic corticosteroid. Australian guidelines recommend prednisolone 30-50 mg daily for 5 days, which does not require tapering.',
        optionExplanations: {
          A: 'Correct - a 5-day corticosteroid course plus antibiotics is indicated when all three cardinal exacerbation features are present.',
          B: 'Courses longer than 5-7 days offer no additional benefit and increase adverse effects; a taper is unnecessary after a short course, and antibiotics are indicated here.',
          C: 'Omitting systemic corticosteroid forgoes a proven reduction in treatment failure and recovery time.',
          D: 'Increasing inhaled corticosteroid is not a substitute for systemic corticosteroid in an acute exacerbation.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g1-c2-i3',
        stemAddendum:
          'After an hour of treatment he remains breathless with a respiratory rate of 24/min and SpO2 of 90% on 1 L/min via nasal prongs.',
        question: 'Which investigation is most useful at this point?',
        options: [
          { key: 'A', text: 'Chest X-ray' },
          { key: 'B', text: 'Spirometry with bronchodilator reversibility testing' },
          { key: 'C', text: 'D-dimer' },
          { key: 'D', text: 'Routine sputum culture' },
        ],
        correctKey: 'A',
        explanation:
          'A chest X-ray is the key investigation in a COPD exacerbation that is not responding as expected, because it identifies alternative or coexisting diagnoses such as pneumonia, pneumothorax, heart failure or a lung mass, each of which changes management.',
        optionExplanations: {
          A: 'Correct - imaging excludes pneumonia, pneumothorax and pulmonary oedema, which commonly mimic or complicate an exacerbation.',
          B: 'Spirometry is unreliable and unhelpful during an acute exacerbation; it is used for diagnosis and staging when stable.',
          C: 'D-dimer is likely to be non-specifically raised and is only useful when pulmonary embolism is genuinely suspected in a low-risk patient; his presentation is typical of an exacerbation.',
          D: 'Routine sputum culture rarely alters initial empirical therapy and results are not available in time to guide it.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g1-c2-i4',
        stemAddendum:
          'The chest X-ray shows hyperinflation without consolidation or pneumothorax. Thirty minutes later he is drowsy and mildly confused, with a respiratory rate of 30/min, a flapping tremor and SpO2 of 86% on 2 L/min via nasal prongs.',
        question: 'What is the most appropriate next step?',
        options: [
          {
            key: 'A',
            text: 'Arrange immediate transfer to hospital by ambulance, continuing controlled oxygen titrated to SpO2 88-92%',
          },
          { key: 'B', text: 'Increase oxygen to 10 L/min via a Hudson mask and continue observing in the practice' },
          { key: 'C', text: 'Give continuous nebulised salbutamol and review again in one hour' },
          { key: 'D', text: 'Administer intravenous aminophylline in the practice' },
        ],
        correctKey: 'A',
        explanation:
          'Drowsiness, confusion, asterixis and rising respiratory rate indicate impending hypercapnic respiratory failure. This requires urgent hospital assessment for blood gas analysis and non-invasive ventilation, with controlled oxygen maintained during transfer.',
        optionExplanations: {
          A: 'Correct - these are features of decompensated hypercapnic respiratory failure requiring urgent hospital care and likely non-invasive ventilation.',
          B: 'Uncontrolled high-flow oxygen risks worsening CO2 retention, and continued observation in the practice delays definitive care.',
          C: 'Further bronchodilator alone will not reverse hypercapnic failure, and another hour of delay is dangerous.',
          D: 'Aminophylline has a narrow therapeutic index, significant toxicity and no role in routine exacerbation management, particularly in general practice.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g1-c2-i5',
        stemAddendum:
          'Bruce is admitted for two nights, treated with non-invasive ventilation and discharged. He sees you four weeks later. He remains an ex-smoker of 8 years, his inhaler technique is good, and he is up to date with influenza and pneumococcal vaccination.',
        question:
          'Which single intervention is most likely to reduce his risk of future exacerbations and hospital readmission?',
        options: [
          { key: 'A', text: 'Referral to a pulmonary rehabilitation program' },
          { key: 'B', text: 'Long-term low-dose oral prednisolone' },
          { key: 'C', text: 'Standing home nebulised salbutamol four times daily' },
          { key: 'D', text: 'A repeat course of antibiotics at the first sign of any cough' },
        ],
        correctKey: 'A',
        explanation:
          'Pulmonary rehabilitation after a COPD exacerbation improves exercise capacity and quality of life and reduces subsequent hospital admissions. It is one of the highest-value interventions available, alongside smoking cessation, vaccination and optimised inhaled therapy with a written COPD action plan.',
        optionExplanations: {
          A: 'Correct - post-exacerbation pulmonary rehabilitation reduces readmission and improves symptoms and function.',
          B: 'Maintenance oral corticosteroid causes substantial harm (osteoporosis, diabetes, myopathy) without reducing exacerbations.',
          C: 'Regular nebulised reliever offers no advantage over spacer-delivered therapy and does not prevent exacerbations.',
          D: 'Reflex antibiotics for any cough drives resistance and adverse effects; a written action plan defining when antibiotics are appropriate is the better approach.',
        },
        difficulty: 'easy',
      },
    ],
  },
  {
    id: 'kfp-g1-c3',
    exam: 'KFP',
    specialty: 'Endocrine & Metabolic',
    topic: 'New type 2 diabetes and SGLT2 inhibitor-associated euglycaemic ketoacidosis',
    title: 'Thirsty, tired and taking new tablets',
    vignette:
      "Priya, a 52-year-old accountant, presents with three months of fatigue, thirst and nocturia. Her BMI is 33 kg/m2 and her father has type 2 diabetes. She takes no regular medications. Examination is unremarkable apart from a blood pressure of 148/88 mmHg. A point-of-care capillary glucose taken in your treatment room, four hours after lunch, reads 13.8 mmol/L. She is systemically well and not dehydrated.",
    items: [
      {
        id: 'kfp-g1-c3-i1',
        question: 'What is the most appropriate next step to establish the diagnosis?',
        options: [
          { key: 'A', text: 'Arrange a laboratory venous HbA1c and fasting plasma glucose' },
          { key: 'B', text: 'Diagnose type 2 diabetes on the point-of-care result and commence metformin today' },
          { key: 'C', text: 'Repeat the point-of-care capillary glucose in three months' },
          { key: 'D', text: 'Arrange a 75 g oral glucose tolerance test as the only acceptable confirmatory test' },
        ],
        correctKey: 'A',
        explanation:
          'Point-of-care capillary glucose meters are screening and monitoring tools, not diagnostic tests. A diagnosis of diabetes requires a laboratory venous sample - HbA1c 6.5% (48 mmol/mol) or higher, fasting plasma glucose 7.0 mmol/L or higher, or random plasma glucose 11.1 mmol/L or higher with classic symptoms.',
        optionExplanations: {
          A: 'Correct - laboratory venous testing is required to confirm the diagnosis; with classic symptoms a single diagnostic laboratory result is sufficient.',
          B: 'A capillary meter reading is not diagnostic; labelling her diabetic on this basis risks a lifelong misdiagnosis.',
          C: 'Delaying three months in a symptomatic patient with a markedly elevated glucose is unsafe and unnecessary.',
          D: 'An OGTT is one option but is not required when HbA1c or fasting glucose will confirm the diagnosis in a symptomatic patient.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfp-g1-c3-i2',
        stemAddendum:
          'Laboratory results: HbA1c 9.4% (79 mmol/mol), fasting plasma glucose 12.1 mmol/L, eGFR 58 mL/min/1.73m2, urine albumin:creatinine ratio 28 mg/mmol, LDL cholesterol 3.4 mmol/L. She remains well with no ketosis, weight loss or intercurrent illness.',
        question: 'Which is the most appropriate initial pharmacotherapy?',
        options: [
          { key: 'A', text: 'Metformin (started low and titrated) together with an SGLT2 inhibitor' },
          { key: 'B', text: 'Metformin alone, with review of glycaemic control in six months' },
          { key: 'C', text: 'Basal insulin as first-line therapy' },
          { key: 'D', text: 'A sulfonylurea as sole initial therapy' },
        ],
        correctKey: 'A',
        explanation:
          'Metformin remains first-line in type 2 diabetes. With an HbA1c well above target at diagnosis, early combination therapy is appropriate, and the presence of albuminuric chronic kidney disease is an independent indication for an SGLT2 inhibitor for kidney and cardiovascular protection irrespective of glycaemic need.',
        optionExplanations: {
          A: 'Correct - metformin plus an SGLT2 inhibitor addresses both the large HbA1c gap and her albuminuric chronic kidney disease.',
          B: 'Monotherapy is unlikely to reach target from 9.4%, and a six-month review misses the kidney-protective indication for an SGLT2 inhibitor.',
          C: 'She has no features of insulin deficiency (no ketosis, no marked weight loss); insulin is not first-line here.',
          D: 'A sulfonylurea causes hypoglycaemia and weight gain and offers no kidney or cardiovascular protection.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g1-c3-i3',
        stemAddendum:
          'Six weeks later Priya presents with two days of vomiting and diarrhoea after a family gathering. She has eaten almost nothing but has continued all her medications. She feels weak and nauseated, breathing seems deep, respiratory rate is 24/min, heart rate 104/min and blood pressure 104/66 mmHg. Capillary glucose is 9.6 mmol/L.',
        question: 'Which investigation is most important now?',
        options: [
          { key: 'A', text: 'Blood ketones (beta-hydroxybutyrate)' },
          { key: 'B', text: 'HbA1c' },
          { key: 'C', text: 'Serum lipase' },
          { key: 'D', text: 'Urine microscopy and culture' },
        ],
        correctKey: 'A',
        explanation:
          'SGLT2 inhibitors can cause euglycaemic diabetic ketoacidosis, in which ketoacidosis occurs with a glucose that is normal or only mildly elevated. Acute illness, vomiting, dehydration, fasting and reduced carbohydrate intake are classic precipitants. Blood ketone measurement is therefore essential in any unwell patient taking an SGLT2 inhibitor, whatever the glucose reading.',
        optionExplanations: {
          A: 'Correct - a near-normal glucose does not exclude ketoacidosis on an SGLT2 inhibitor; blood beta-hydroxybutyrate is the key test.',
          B: 'HbA1c reflects the last three months and has no role in assessing an acute deterioration.',
          C: 'Pancreatitis is a differential for vomiting but does not explain deep (Kussmaul) breathing in a patient on an SGLT2 inhibitor; ketones must be checked first.',
          D: 'Urinary tract infection is worth considering as a precipitant, but it does not take priority over identifying ketoacidosis.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfp-g1-c3-i4',
        stemAddendum:
          'Her blood ketone level is 4.2 mmol/L. She is drowsy but rousable, with dry mucous membranes and ongoing Kussmaul respiration.',
        question: 'What is the most appropriate management?',
        options: [
          {
            key: 'A',
            text: 'Cease the SGLT2 inhibitor and arrange emergency ambulance transfer to hospital for intravenous fluids and insulin',
          },
          { key: 'B', text: 'Withhold metformin only and review her in the practice tomorrow morning' },
          { key: 'C', text: 'Advise oral rehydration at home and self-administered subcutaneous rapid-acting insulin' },
          { key: 'D', text: 'Increase the SGLT2 inhibitor dose because her glucose is not at target' },
        ],
        correctKey: 'A',
        explanation:
          'A blood ketone level above 3.0 mmol/L with an unwell, drowsy, dehydrated patient indicates ketoacidosis requiring emergency hospital management with intravenous fluids, insulin and glucose infusion, plus electrolyte monitoring. The SGLT2 inhibitor must be stopped immediately; its effect on ketogenesis persists for days.',
        optionExplanations: {
          A: 'Correct - established ketoacidosis is a medical emergency; stop the SGLT2 inhibitor and transfer urgently.',
          B: 'Metformin should also be withheld, but a next-day review in a drowsy patient with ketoacidosis risks a fatal outcome.',
          C: 'Home management is unsafe; she needs intravenous fluids, insulin with dextrose and biochemical monitoring.',
          D: 'The SGLT2 inhibitor is driving the ketoacidosis; increasing it would be dangerous.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfp-g1-c3-i5',
        stemAddendum:
          'Priya recovers fully after 48 hours in hospital and returns to see you. She is keen to understand how to avoid a repeat episode and asks whether she can ever take these tablets again.',
        question: 'Which is the most important element of her ongoing management plan?',
        options: [
          {
            key: 'A',
            text: 'A written sick day action plan to withhold the SGLT2 inhibitor and metformin during acute illness, vomiting, dehydration, prolonged fasting or before surgery, and to seek early review',
          },
          { key: 'B', text: 'Continuing both medications through any illness while simply drinking more fluid' },
          { key: 'C', text: 'Permanent avoidance of all oral diabetes medication and lifelong insulin' },
          { key: 'D', text: 'Switching to a sulfonylurea as the sole long-term agent' },
        ],
        correctKey: 'A',
        explanation:
          'Every patient prescribed an SGLT2 inhibitor needs a written sick day plan: withhold the drug during acute illness, vomiting, diarrhoea, dehydration, very low carbohydrate intake or prolonged fasting, and withhold it at least 2-3 days before elective surgery or procedures requiring fasting. Metformin is also withheld when dehydrated. Patients should be told that ketoacidosis can occur with a normal glucose reading and to seek urgent review if unwell.',
        optionExplanations: {
          A: 'Correct - sick day rules with written instructions are the core preventive measure against recurrent euglycaemic ketoacidosis.',
          B: 'Continuing an SGLT2 inhibitor through vomiting and fasting is precisely what precipitated this episode.',
          C: 'Insulin is not required; she has type 2 diabetes and can be managed safely with appropriate agents and sick day rules.',
          D: 'A sulfonylurea alone causes hypoglycaemia and weight gain and abandons the kidney protection she needs for albuminuric chronic kidney disease.',
        },
        difficulty: 'moderate',
      },
    ],
  },
]
