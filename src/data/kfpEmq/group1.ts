import type { EmqTheme } from '../../types'

export const group1Themes: EmqTheme[] = [
  {
    id: 'kfpemq-g1-t1',
    exam: 'KFP',
    format: 'emq',
    specialty: 'Cardiovascular',
    topic: 'Differential diagnosis of chest pain',
    title: 'Sorting out chest pain in general practice',
    instructions:
      'For each scenario below, select the single most likely diagnosis from the list of options. Each option may be used once, more than once, or not at all.',
    options: [
      { key: 'A', text: 'Acute coronary syndrome (unstable angina or NSTEMI)' },
      { key: 'B', text: 'Stable angina pectoris' },
      { key: 'C', text: 'Acute pericarditis' },
      { key: 'D', text: 'Gastro-oesophageal reflux disease' },
      { key: 'E', text: 'Musculoskeletal (costochondral) chest pain' },
      { key: 'F', text: 'Acute aortic dissection' },
    ],
    stems: [
      {
        id: 'kfpemq-g1-t1-s1',
        vignette:
          'A 58-year-old man with type 2 diabetes and hypertension describes three months of central chest tightness that comes on reliably after walking up the same hill, radiates to his left jaw, and settles within three to five minutes of stopping. He has had no pain at rest and the pattern has not changed. Examination and a resting ECG in the clinic are normal.',
        correctKey: 'B',
        explanation:
          'A reproducible, exertion-triggered, rest-relieved pain with a stable threshold over months in a patient with cardiovascular risk factors is typical stable angina. A normal resting ECG does not exclude it, and the appropriate next step is risk stratification with functional or anatomical testing plus antianginal and secondary prevention therapy.',
        optionExplanations: {
          A: 'ACS requires an accelerating or rest pattern; this pain has an unchanged threshold over three months with no rest episodes, so it does not meet the definition of unstable angina.',
          B: 'Correct - predictable exertional retrosternal tightness with jaw radiation, relieved by rest within minutes and stable over months, is classic stable angina.',
          C: 'Pericarditis causes pleuritic, positional pain that is not brought on by a fixed exertional threshold, and there is no rub or ECG change.',
          D: 'Reflux pain is typically postprandial or nocturnal and related to posture and meals rather than reliably triggered by the same degree of exertion.',
          E: 'Costochondral pain is reproduced by palpation and movement, not by a consistent walking threshold, and would not radiate to the jaw.',
          F: 'Dissection is an abrupt, severe, maximal-at-onset event, not a three-month pattern of predictable exertional discomfort.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g1-t1-s2',
        vignette:
          'A 34-year-old man presents with two days of sharp central chest pain that is worse when he lies flat and eases when he sits forward. He had a coryzal illness the week before. He is afebrile, and a scratchy sound is audible at the left sternal edge; the ECG shows widespread concave ST elevation with PR segment depression.',
        correctKey: 'C',
        explanation:
          'Positional pleuritic chest pain relieved by sitting forward, a friction rub and widespread concave ST elevation with PR depression after a viral prodrome is acute pericarditis. First-line management in Australian practice is high-dose NSAIDs with colchicine and exercise restriction, with echocardiography to exclude effusion.',
        optionExplanations: {
          A: 'The ST elevation here is widespread and concave with PR depression rather than confined to a coronary territory with reciprocal change, and the pain is positional rather than exertional.',
          B: 'Stable angina is exertional and relieved by rest; it does not vary with posture and does not produce a friction rub or these ECG findings.',
          C: 'Correct - pleuritic pain relieved by sitting forward, a pericardial rub and widespread concave ST elevation with PR depression after a viral illness are diagnostic of acute pericarditis.',
          D: 'Reflux can be worse lying flat, but it does not cause a pericardial rub or diffuse ST elevation with PR depression.',
          E: 'Costochondritis is reproduced by chest wall palpation and does not produce a friction rub or any ECG abnormality.',
          F: 'Dissection presents with sudden severe tearing pain and haemodynamic signs, not two days of postural pleuritic pain with these ECG changes.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g1-t1-s3',
        vignette:
          'A 62-year-old smoker with poorly controlled hypertension develops abrupt, severe tearing chest pain radiating through to between his shoulder blades while gardening; it was maximal within seconds. His blood pressure is 195/105 mmHg in the right arm and 160/90 mmHg in the left, and the left radial pulse feels weaker than the right.',
        correctKey: 'F',
        explanation:
          'Instantaneous maximal tearing pain radiating interscapularly with an inter-arm blood pressure differential and pulse asymmetry in an uncontrolled hypertensive smoker is acute aortic dissection until proven otherwise. This is a time-critical emergency transfer for CT aortography, and antiplatelet or anticoagulant therapy must not be given empirically.',
        optionExplanations: {
          A: 'ACS pain typically builds over minutes as pressure or heaviness and does not produce an inter-arm pressure differential or pulse deficit; treating this as ACS with antithrombotics could be catastrophic.',
          B: 'Stable angina is a predictable exertional symptom that resolves with rest, not a sudden maximal tearing event with vascular asymmetry.',
          C: 'Pericarditis is positional and pleuritic over days, and does not cause a 35 mmHg inter-arm gradient or an asymmetric radial pulse.',
          D: 'Reflux never produces pulse deficits or inter-arm blood pressure differences and is not abruptly maximal at onset.',
          E: 'Musculoskeletal pain would be reproduced by movement or palpation and would not be associated with these vascular findings.',
          F: 'Correct - abrupt tearing interscapular pain with an inter-arm blood pressure differential and pulse deficit in an uncontrolled hypertensive is acute aortic dissection.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g1-t1-s4',
        vignette:
          'A 66-year-old woman with type 2 diabetes describes 40 minutes of central chest heaviness at rest that morning, with nausea and profuse sweating; the discomfort has now largely settled. Her ECG in the practice shows new deep T wave inversion in V2 to V4, and the point-of-care troponin is elevated.',
        correctKey: 'A',
        explanation:
          'Prolonged rest chest heaviness with autonomic features, new anterior T wave inversion and a raised troponin is a non-ST-elevation acute coronary syndrome. She needs urgent ambulance transfer, aspirin and continuous monitoring, and the fact the pain has settled does not reduce the urgency.',
        optionExplanations: {
          A: 'Correct - rest pain with diaphoresis and nausea, new dynamic anterior T wave inversion and a positive troponin define an NSTEMI.',
          B: 'Stable angina occurs on exertion, lasts only minutes and is not associated with troponin release or new dynamic ECG changes.',
          C: 'Pericarditis gives widespread concave ST elevation with PR depression, not localised anterior T wave inversion, and the pain would be positional and pleuritic.',
          D: 'Reflux can mimic cardiac pain and cause nausea, but it does not cause troponin elevation or new regional ECG changes.',
          E: 'Chest wall pain does not produce diaphoresis, troponin rise or dynamic ECG change, and nothing here suggests a reproducible tender focus.',
          F: 'Dissection is abrupt and tearing with vascular signs; this pain built over time at rest with a territorial ECG abnormality and troponin leak.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g1-t1-s5',
        vignette:
          'A 71-year-old woman with known coronary disease has for two years had chest tightness only after walking 800 metres. Over the past five days the tightness has come on after 100 metres, twice woke her at rest, and each episode now needs two or three doses of glyceryl trinitrate to settle. She is pain free in the room; her ECG and high-sensitivity troponin are both normal.',
        correctKey: 'A',
        explanation:
          'A crescendo change in a previously stable anginal pattern, with new rest pain and reduced GTN responsiveness, is unstable angina - an acute coronary syndrome - even when the ECG and troponin are normal. Normal biomarkers exclude infarction but not unstable angina, so she requires urgent same-day cardiology assessment rather than outpatient follow-up.',
        optionExplanations: {
          A: 'Correct - the accelerating threshold, new rest episodes and increasing GTN requirement make this unstable angina, which is an ACS regardless of a normal ECG and troponin.',
          B: 'Her angina was stable for two years, but a pattern that has clearly accelerated over five days with rest pain no longer meets the definition of stable angina.',
          C: 'There is no pleuritic or positional component, no rub and no ECG change to suggest pericarditis.',
          D: 'Reflux would not be relieved by glyceryl trinitrate in this exertion-linked pattern, and does not explain a changing exertional threshold in known coronary disease.',
          E: 'Costochondral pain is reproducible on palpation and unrelated to walking distance or nitrate use.',
          F: 'Dissection is a sudden single catastrophic event, not five days of recurrent, nitrate-responsive, exertion-related episodes.',
        },
        difficulty: 'hard',
      },
    ],
  },
  {
    id: 'kfpemq-g1-t2',
    exam: 'KFP',
    format: 'emq',
    specialty: 'Respiratory',
    topic: 'Differential diagnosis of breathlessness',
    title: 'Breathlessness: which respiratory diagnosis fits?',
    instructions:
      'For each scenario below, select the single most likely diagnosis from the list of options. Each option may be used once, more than once, or not at all.',
    options: [
      { key: 'A', text: 'Acute exacerbation of COPD' },
      { key: 'B', text: 'Community-acquired pneumonia' },
      { key: 'C', text: 'Acute pulmonary embolism' },
      { key: 'D', text: 'Idiopathic pulmonary fibrosis' },
      { key: 'E', text: 'Primary spontaneous pneumothorax' },
      { key: 'F', text: 'Inducible laryngeal obstruction (vocal cord dysfunction)' },
    ],
    stems: [
      {
        id: 'kfpemq-g1-t2-s1',
        vignette:
          'A 72-year-old retired carpenter reports 14 months of gradually worsening exertional breathlessness and a persistent dry cough, now unable to walk to the letterbox without stopping. He has never smoked. Examination reveals fine bibasal end-inspiratory crackles that sound like velcro, and finger clubbing; his chest is otherwise clear with no wheeze and he is afebrile.',
        correctKey: 'D',
        explanation:
          'Insidious breathlessness over more than a year with a dry cough, fine velcro-like basal crackles and clubbing in an older non-smoker is the classic presentation of idiopathic pulmonary fibrosis. The next steps are spirometry looking for a restrictive pattern with reduced DLCO, a high-resolution CT chest, and referral to an interstitial lung disease service.',
        optionExplanations: {
          A: 'COPD is unlikely in a lifelong non-smoker and would cause wheeze with an obstructive pattern and hyperinflation, not velcro crackles with clubbing.',
          B: 'Pneumonia develops over days with fever and focal signs, not 14 months of progressive breathlessness with clubbing.',
          C: 'PE presents acutely or subacutely over hours to days; it does not cause bibasal velcro crackles and clubbing over more than a year.',
          D: 'Correct - progressive exertional dyspnoea and dry cough with fine bibasal end-inspiratory velcro crackles and clubbing is the classic idiopathic pulmonary fibrosis picture.',
          E: 'Pneumothorax is sudden and unilateral with reduced breath sounds on one side, not a slowly progressive bilateral process.',
          F: 'Inducible laryngeal obstruction causes episodic inspiratory stridor and throat tightness that resolves completely between attacks, not fixed progressive dyspnoea with crackles and clubbing.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g1-t2-s2',
        vignette:
          'A 68-year-old woman with a 50 pack-year history and known COPD presents with three days of increasing breathlessness, a change in her usual sputum from clear to thick and green, and an increase in cough. She is afebrile with oxygen saturation 91% on room air; her chest is hyperinflated with diffuse expiratory wheeze and no focal consolidation, and a chest X-ray shows no new infiltrate.',
        correctKey: 'A',
        explanation:
          'An increase over baseline in the cardinal symptoms of breathlessness, sputum volume and sputum purulence with diffuse wheeze and no new radiographic infiltrate defines an acute exacerbation of COPD. Management is short-acting bronchodilators, a short oral corticosteroid course, antibiotics given the sputum purulence, and controlled oxygen targeting 88-92%.',
        optionExplanations: {
          A: 'Correct - worsening dyspnoea with increased sputum volume and purulence on a background of COPD, with diffuse wheeze and a clear film, is an acute exacerbation.',
          B: 'Pneumonia would be expected to produce fever, focal crackles or bronchial breathing and a new infiltrate on the chest X-ray, all of which are absent.',
          C: 'PE typically causes abrupt dyspnoea with a clear chest rather than increased purulent sputum and diffuse wheeze; the sputum change here points to an airway rather than vascular cause.',
          D: 'Pulmonary fibrosis causes slowly progressive dyspnoea with dry cough and fine crackles, not a three-day purulent sputum change with wheeze.',
          E: 'Pneumothorax gives sudden unilateral pleuritic pain with reduced breath sounds and would be visible on the chest X-ray.',
          F: 'Laryngeal obstruction produces inspiratory stridor over the throat with normal oxygen saturation, not purulent sputum and hypoxaemia.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g1-t2-s3',
        vignette:
          'A 41-year-old woman presents with two days of breathlessness and right-sided pleuritic chest pain that began abruptly. She returned from a long-haul flight eight days ago and takes the combined oral contraceptive pill. Her heart rate is 112, respiratory rate 24, oxygen saturation 93%, she is afebrile, and her chest is clear on auscultation with a normal chest X-ray.',
        correctKey: 'C',
        explanation:
          'Abrupt pleuritic chest pain and breathlessness with tachycardia and hypoxaemia but a clear chest and normal film, in the setting of recent long-haul travel and oestrogen-containing contraception, points strongly to pulmonary embolism. In a high-probability patient a normal D-dimer should not be used to exclude it - proceed to CT pulmonary angiography.',
        optionExplanations: {
          A: 'She has no COPD history and no wheeze or sputum change; an exacerbation does not explain pleuritic pain with a clear chest.',
          B: 'Pneumonia causes fever with focal crackles and a visible infiltrate; she is afebrile with a clear chest and a normal chest X-ray.',
          C: 'Correct - sudden pleuritic pain and dyspnoea with tachycardia and hypoxaemia but a normal examination and film, plus recent flight and oestrogen use, is classic for pulmonary embolism.',
          D: 'Fibrosis evolves over many months with bibasal crackles and clubbing, not abruptly over two days.',
          E: 'Pneumothorax would give unilateral reduced breath sounds and hyperresonance and would be apparent on the chest X-ray.',
          F: 'Inducible laryngeal obstruction does not cause hypoxaemia or pleuritic pain, and symptoms are typically triggered by exercise or irritants with audible inspiratory stridor.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g1-t2-s4',
        vignette:
          'A 19-year-old competitive rower describes episodes of sudden throat tightness and noisy breathing that start at peak exertion and resolve within five minutes of stopping. She points to her larynx when asked where the difficulty is. Two trials of inhaled salbutamol have made no difference, her spirometry between episodes is entirely normal, and an observed episode showed noisy inspiration loudest over the neck with oxygen saturation of 98%.',
        correctKey: 'F',
        explanation:
          'Inspiratory noise localised to the larynx, throat tightness at peak exertion, rapid resolution on stopping, preserved oxygen saturation and no response to bronchodilator distinguish inducible laryngeal obstruction from exercise-induced bronchoconstriction. Diagnosis is confirmed with continuous laryngoscopy during exercise and treatment is speech pathology breathing retraining, not escalating asthma therapy.',
        optionExplanations: {
          A: 'COPD does not occur in a healthy 19-year-old and would show fixed airflow obstruction on spirometry rather than normal values between episodes.',
          B: 'Pneumonia produces fever, cough and focal findings that persist, not brief exertional episodes with a normal baseline.',
          C: 'PE causes sustained dyspnoea, tachycardia and hypoxaemia rather than repeated identical episodes resolving in five minutes with normal saturations.',
          D: 'Fibrosis causes progressive fixed exertional limitation with crackles and abnormal spirometry, not intermittent laryngeal symptoms.',
          E: 'Pneumothorax is a single acute event with unilateral chest signs, not recurrent short-lived throat tightness.',
          F: 'Correct - exertional throat tightness with inspiratory noise over the larynx, rapid recovery, normal saturations, normal interval spirometry and no salbutamol response indicates inducible laryngeal obstruction.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfpemq-g1-t2-s5',
        vignette:
          'A 75-year-old man with moderate COPD is brought in with four days of fever to 38.8 degrees, breathlessness and a productive cough with rusty sputum, and pain in the right lower chest on deep inspiration. He is confused, respiratory rate is 32 and blood pressure 95/60; there is bronchial breathing with dullness and focal crackles at the right base, and the chest X-ray shows right lower lobe consolidation.',
        correctKey: 'B',
        explanation:
          'Fever, focal bronchial breathing with dullness and lobar consolidation on chest X-ray indicate community-acquired pneumonia rather than a simple COPD exacerbation. Confusion, respiratory rate 32 and systolic blood pressure below 100 give a high CORB or CURB-65 score, making this severe pneumonia requiring urgent hospital transfer and intravenous antibiotics.',
        optionExplanations: {
          A: 'His COPD is a risk factor, but an exacerbation should not cause fever with focal bronchial breathing and lobar consolidation on the film - that combination defines pneumonia.',
          B: 'Correct - fever, purulent sputum, focal bronchial breathing with dullness and right lower lobe consolidation on chest X-ray is community-acquired pneumonia, and the confusion, tachypnoea and hypotension mark it as severe.',
          C: 'PE can cause pleuritic pain and tachypnoea but would not produce high fever with lobar consolidation and bronchial breathing.',
          D: 'Fibrosis is a slow bilateral process with fine crackles and no fever or lobar consolidation.',
          E: 'Pneumothorax gives hyperresonance with absent breath sounds, the opposite of the dullness and bronchial breathing found here, and the film shows consolidation rather than a pleural line.',
          F: 'Laryngeal obstruction produces brief episodic inspiratory stridor and would not explain fever, consolidation or hypotension.',
        },
        difficulty: 'moderate',
      },
    ],
  },
]
