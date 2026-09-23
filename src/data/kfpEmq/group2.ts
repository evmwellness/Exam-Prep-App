import type { EmqTheme } from '../../types'

export const group2Themes: EmqTheme[] = [
  {
    id: 'kfpemq-g2-t1',
    exam: 'KFP',
    format: 'emq',
    specialty: 'Mental Health',
    topic: 'Differential diagnosis of mood and anxiety presentations',
    title: 'Sorting out low mood and anxiety in general practice',
    instructions:
      'For each scenario below, select the single most likely diagnosis from the list of options. Each option may be used once, more than once, or not at all.',
    options: [
      { key: 'A', text: 'Major depressive disorder' },
      { key: 'B', text: 'Generalised anxiety disorder' },
      { key: 'C', text: 'Panic disorder' },
      { key: 'D', text: 'Adjustment disorder with depressed mood' },
      { key: 'E', text: 'Bipolar II disorder' },
      { key: 'F', text: 'Hypothyroidism presenting with depressive symptoms' },
    ],
    stems: [
      {
        id: 'kfpemq-g2-t1-s1',
        vignette:
          "A 34-year-old woman describes six months of persistently low mood with loss of interest in activities she previously enjoyed, waking at 4am unable to return to sleep, and a 6kg unintentional weight loss. She feels worthless and describes poor concentration at work, but denies any specific precipitant. Thyroid function, full blood count and iron studies performed last week were all normal.",
        correctKey: 'A',
        explanation:
          'Six months of pervasive low mood with anhedonia, early morning wakening, appetite and weight loss, worthlessness and impaired concentration meets criteria for a major depressive episode, with melancholic features and no identified precipitant. Normal thyroid function excludes the common medical mimic.',
        optionExplanations: {
          A: 'Correct - at least two weeks (here six months) of low mood plus anhedonia, with biological features (early morning wakening, weight loss), worthlessness and cognitive impairment, is major depressive disorder.',
          B: 'Generalised anxiety disorder requires excessive, difficult-to-control worry across multiple domains as the dominant feature; this woman describes anhedonia and worthlessness, not pervasive worry.',
          C: 'There are no discrete, abrupt surges of fear with autonomic symptoms peaking within minutes, so panic disorder is not supported.',
          D: 'Adjustment disorder requires an identifiable psychosocial stressor within the preceding three months and symptoms that do not meet full criteria for another disorder; she reports no precipitant and does meet full depressive criteria.',
          E: 'Bipolar II requires at least one past hypomanic episode. Always screen for this before starting an antidepressant, but nothing in this history suggests elevated mood or reduced need for sleep.',
          F: 'Hypothyroidism can mimic depression closely, but thyroid function testing last week was normal, excluding it here.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g2-t1-s2',
        vignette:
          "A 28-year-old man presents after three episodes in the past month of sudden palpitations, chest tightness, sweating and derealisation that peaked within about five minutes and settled over half an hour. Between episodes he is well, but he now worries constantly about the next attack and has stopped driving on the motorway. ECG, examination and thyroid function are normal.",
        correctKey: 'C',
        explanation:
          'Recurrent unexpected panic attacks peaking within minutes, followed by at least a month of persistent worry about further attacks and behavioural change (avoiding motorway driving), define panic disorder. The normal ECG and TFTs exclude the main organic mimics.',
        optionExplanations: {
          A: 'Low mood and anhedonia are absent; he is well between attacks, so a depressive disorder does not explain this episodic pattern.',
          B: 'Generalised anxiety disorder is characterised by chronic free-floating worry about everyday matters over at least six months, not discrete autonomic surges peaking in minutes.',
          C: 'Correct - recurrent unexpected panic attacks plus a month or more of anticipatory worry and avoidance behaviour is panic disorder.',
          D: 'No identifiable stressor is described, and the presentation is a defined anxiety disorder rather than a subthreshold reaction to adversity.',
          E: 'There is no history of elevated or expansive mood, reduced need for sleep or increased goal-directed activity to suggest hypomania.',
          F: 'Thyroid dysfunction (typically hyperthyroidism rather than hypothyroidism) can mimic panic, but his thyroid function is normal and hypothyroidism causes lethargy rather than paroxysmal autonomic arousal.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g2-t1-s3',
        vignette:
          "A 45-year-old woman reports two years of near-daily worry about her finances, her children's health and her job security, which she cannot switch off. She describes muscle tension in her neck and shoulders, restlessness, irritability and difficulty falling asleep. Her mood is reactive and she still enjoys her weekend netball, with no discrete attacks of terror.",
        correctKey: 'B',
        explanation:
          'Two years of excessive, uncontrollable worry spanning multiple life domains with physical arousal symptoms (muscle tension, restlessness, sleep-onset insomnia, irritability) is generalised anxiety disorder. Retained enjoyment and reactive mood argue against a depressive episode.',
        optionExplanations: {
          A: 'Her mood is reactive and she retains enjoyment of netball, so the core features of anhedonia and pervasive low mood required for major depression are absent.',
          B: "Correct - at least six months of excessive worry that is difficult to control, across several domains, with tension, restlessness, irritability and insomnia, is generalised anxiety disorder.",
          C: 'Panic disorder requires discrete abrupt attacks peaking within minutes; she explicitly has no such episodes, only continuous worry.',
          D: 'Adjustment disorder follows an identifiable stressor and resolves within about six months of it ending; her worry is chronic, generalised and not stressor-bound.',
          E: 'There is no history of distinct periods of elevated mood, overactivity or reduced need for sleep.',
          F: 'Hypothyroidism typically causes fatigue, cold intolerance, weight gain and slowing rather than restless, tense hyperarousal, and is worth excluding but not the best fit.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g2-t1-s4',
        vignette:
          "A 26-year-old woman has had three episodes of depression since age 19 and has responded poorly to two antidepressants. On careful review she describes several distinct four-to-five day periods of unusually elevated, confident mood with markedly reduced need for sleep, rapid speech and uncharacteristic online spending, which her partner and colleagues clearly noticed. She was never psychotic and never required hospitalisation.",
        correctKey: 'E',
        explanation:
          'Recurrent depressive episodes with poor antidepressant response, plus observable discrete episodes of elevated mood lasting at least four days with reduced need for sleep and increased activity that never reached mania or required hospitalisation, indicate bipolar II disorder. Antidepressant monotherapy risks destabilisation, so specialist input is appropriate.',
        optionExplanations: {
          A: 'The depressive episodes are real, but a diagnosis of unipolar major depression is excluded once a clear past hypomanic episode is identified.',
          B: 'Excessive persistent worry is not described; the key feature here is episodic mood elevation between depressive episodes.',
          C: 'There are no discrete panic attacks with autonomic symptoms peaking within minutes.',
          D: 'No precipitating stressor is identified, and the recurrent, episodic mood pattern over seven years is not a stress-related adjustment reaction.',
          E: 'Correct - recurrent major depressive episodes plus at least one hypomanic episode (4 or more days of elevated mood, reduced need for sleep, overactivity, observable by others, without psychosis or hospitalisation) is bipolar II disorder.',
          F: 'Hypothyroidism does not produce discrete episodes of elevated mood with reduced need for sleep; it should be excluded on bloods but does not explain this pattern.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfpemq-g2-t1-s5',
        vignette:
          "A 68-year-old man is brought in by his daughter four months after his wife died. He has stopped attending his bowls club, is not eating, has lost 8kg, moves and speaks slowly, and says he is a burden and that his family would be better off without him. He feels no pleasure in anything, including his grandchildren, and his distress is constant rather than coming in waves of grief. TSH and B12 are normal.",
        correctKey: 'A',
        explanation:
          'Bereavement is the trigger, but pervasive anhedonia, psychomotor retardation, marked weight loss, worthlessness and passive suicidal ideation four months on indicate a major depressive episode rather than uncomplicated grief or an adjustment reaction. This is a high-risk presentation requiring same-visit suicide risk assessment and a safety plan.',
        optionExplanations: {
          A: 'Correct - constant (rather than wave-like) distress with global anhedonia, psychomotor retardation, weight loss, worthlessness and passive suicidal ideation is a major depressive episode, even when loss is the trigger.',
          B: 'Worry about everyday matters is not the presenting problem; this is pervasive low mood with biological features.',
          C: 'No discrete panic attacks are described.',
          D: 'Adjustment disorder is the tempting answer given the clear stressor, but by definition it is diagnosed only when criteria for another disorder such as major depression are not met; the severity, anhedonia, retardation and suicidal ideation here exceed that threshold.',
          E: 'No past or present hypomanic features are described.',
          F: 'Hypothyroidism and B12 deficiency can both mimic depression in older adults and were appropriately checked, but both are normal.',
        },
        difficulty: 'hard',
      },
    ],
  },
  {
    id: 'kfpemq-g2-t2',
    exam: 'KFP',
    format: 'emq',
    specialty: 'Neurology',
    topic: 'Differential diagnosis of headache',
    title: 'What is causing this headache?',
    instructions:
      'For each scenario below, select the single most likely diagnosis from the list of options. Each option may be used once, more than once, or not at all.',
    options: [
      { key: 'A', text: 'Migraine without aura' },
      { key: 'B', text: 'Tension-type headache' },
      { key: 'C', text: 'Cluster headache' },
      { key: 'D', text: 'Medication overuse headache' },
      { key: 'E', text: 'Subarachnoid haemorrhage' },
      { key: 'F', text: 'Giant cell (temporal) arteritis' },
    ],
    stems: [
      {
        id: 'kfpemq-g2-t2-s1',
        vignette:
          "A 32-year-old woman describes headaches two to three times a month lasting most of a day. The pain is unilateral, throbbing and moderate to severe, worse when she climbs stairs, and accompanied by nausea and marked sensitivity to light and sound. She lies down in a dark room until it passes, and neurological examination between attacks is normal.",
        correctKey: 'A',
        explanation:
          'Recurrent attacks lasting 4 to 72 hours that are unilateral, pulsating, aggravated by routine physical activity and accompanied by nausea and photophobia or phonophobia, with normal examination, meet criteria for migraine without aura.',
        optionExplanations: {
          A: 'Correct - unilateral pulsating headache of moderate to severe intensity, worsened by activity, with nausea, photophobia and phonophobia, is migraine without aura.',
          B: 'Tension-type headache is bilateral, pressing or tightening, mild to moderate, not aggravated by routine activity and without significant nausea.',
          C: 'Cluster headache attacks last 15 to 180 minutes, occur in daily bouts, are strictly orbital or temporal with cranial autonomic features and restlessness, not a day-long attack relieved by lying still.',
          D: 'Medication overuse headache requires headache on 15 or more days per month with regular acute medication overuse; her headaches occur only two to three times per month.',
          E: 'Subarachnoid haemorrhage presents as a single sudden thunderclap headache, not a stereotyped recurrent pattern over months with normal examination.',
          F: 'Giant cell arteritis occurs in patients over 50 with new headache, scalp tenderness or jaw claudication and raised inflammatory markers, none of which apply to a 32-year-old with a longstanding recurrent pattern.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g2-t2-s2',
        vignette:
          "A 41-year-old male smoker has been woken at about 1am every night for the past five weeks by excruciating pain behind the left eye lasting around an hour. During attacks his left eye waters and reddens, the lid droops and his nose runs on that side. He cannot keep still, pacing the house until it subsides, and is completely well between attacks.",
        correctKey: 'C',
        explanation:
          'Strictly unilateral severe orbital pain lasting 15 to 180 minutes, occurring in a daily bout with ipsilateral cranial autonomic features (lacrimation, conjunctival injection, ptosis, rhinorrhoea) and agitation rather than a wish to lie still, is classic cluster headache.',
        optionExplanations: {
          A: 'Migraine sufferers typically seek stillness in a dark room, attacks last 4 to 72 hours, and prominent unilateral lacrimation with ptosis and rhinorrhoea is not typical.',
          B: 'Tension-type headache is bilateral, mild to moderate and never accompanied by cranial autonomic features or this degree of agitation.',
          C: 'Correct - the circadian nocturnal bout, short severe strictly unilateral orbital pain, ipsilateral autonomic features and restlessness define cluster headache.',
          D: 'No regular acute analgesic or triptan overuse is described, and medication overuse headache is a dull daily background headache without autonomic features.',
          E: 'Subarachnoid haemorrhage is a single abrupt catastrophic event, not stereotyped self-limiting attacks recurring nightly for five weeks with full recovery between.',
          F: 'Giant cell arteritis causes persistent temporal headache with scalp tenderness in older patients, not brief nocturnal attacks with autonomic features in a 41-year-old.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g2-t2-s3',
        vignette:
          "A 38-year-old woman with a ten-year history of episodic migraine now reports headache on most days, present when she wakes and dull and bilateral rather than throbbing. Over the past eight months she has been taking combination paracetamol-codeine tablets on around 20 days per month, and finds they help for a few hours before the pain returns. Neurological examination is normal.",
        correctKey: 'D',
        explanation:
          'Transformation from episodic migraine to headache on 15 or more days per month in the setting of regular acute analgesic use (10 or more days per month for opioid or combination analgesics, over more than three months) indicates medication overuse headache. Management centres on withdrawal of the overused agent plus a migraine preventer.',
        optionExplanations: {
          A: 'Her underlying diagnosis is migraine, but the current daily, dull, bilateral, on-waking pattern is a transformed headache driven by analgesic overuse rather than untreated episodic migraine.',
          B: 'The phenotype resembles tension-type headache, which is the trap here, but the key driver is the 20 days per month of combination analgesic use in a known migraineur.',
          C: 'There are no short severe unilateral orbital attacks with cranial autonomic features or restlessness.',
          D: 'Correct - headache on 15 or more days per month with combination analgesic use on 10 or more days per month for over three months, in a patient with pre-existing migraine, is medication overuse headache.',
          E: 'The onset is gradual over months with a normal examination, not a sudden thunderclap event.',
          F: 'She is well under 50, has no scalp tenderness, jaw claudication or visual symptoms, and the pattern is chronic rather than new.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g2-t2-s4',
        vignette:
          "A 72-year-old woman presents with three weeks of a new right-sided temporal headache that is worse when she brushes her hair. She has noticed aching in her jaw after a few minutes of chewing, general malaise and shoulder girdle stiffness, and yesterday had a brief episode of blurred vision in the right eye. ESR is 88 mm/hr and CRP is elevated.",
        correctKey: 'F',
        explanation:
          'New temporal headache over age 50 with scalp tenderness, jaw claudication, polymyalgic symptoms, transient visual loss and markedly raised inflammatory markers is giant cell arteritis. High-dose corticosteroids must be started immediately, without waiting for temporal artery biopsy or specialist review, to prevent irreversible blindness.',
        optionExplanations: {
          A: 'A first migraine presenting de novo at 72 would be very unusual, and migraine does not cause scalp tenderness, jaw claudication or an ESR of 88.',
          B: 'Tension-type headache is bilateral and bandlike with normal inflammatory markers and no visual or jaw symptoms.',
          C: 'Cluster headache produces short, severe, strictly unilateral orbital attacks with autonomic features, not a persistent three-week headache with systemic inflammation.',
          D: 'No analgesic overuse is described, and medication overuse headache does not raise the ESR or cause visual loss.',
          E: 'Subarachnoid haemorrhage is abrupt and maximal within seconds; this headache has been building over three weeks with systemic features.',
          F: 'Correct - new headache over 50 with scalp tenderness, jaw claudication, polymyalgia rheumatica symptoms, amaurosis fugax and ESR of 88 mm/hr is giant cell arteritis until proven otherwise.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g2-t2-s5',
        vignette:
          "A 45-year-old man describes an occipital headache that came on while lifting a heavy box and reached maximum severity within seconds, which he calls the worst headache of his life. He vomited twice and has photophobia and neck stiffness. Four hours later the pain has eased somewhat and he is afebrile, alert and neurologically intact.",
        correctKey: 'E',
        explanation:
          'A thunderclap headache reaching peak intensity within a minute, with vomiting and meningism, requires urgent exclusion of subarachnoid haemorrhage by non-contrast CT brain (followed by lumbar puncture if CT is negative and presentation is beyond six hours). Partial improvement and a normal neurological examination do not reduce the urgency.',
        optionExplanations: {
          A: 'Migraine builds over minutes to hours, and although it causes vomiting and photophobia it does not reach peak intensity within seconds; assuming migraine here would be a fatal error.',
          B: 'Tension-type headache is mild to moderate, gradual and never associated with vomiting, meningism or thunderclap onset.',
          C: 'Cluster headache is strictly unilateral and orbital with autonomic features, not occipital with neck stiffness and vomiting.',
          D: 'No history of frequent acute medication use is given, and medication overuse headache is a chronic daily pattern rather than an abrupt single event.',
          E: 'Correct - abrupt onset peaking within seconds during exertion, with vomiting, photophobia and neck stiffness, is subarachnoid haemorrhage until excluded by urgent CT with or without lumbar puncture.',
          F: 'He is under 50, has no scalp tenderness or jaw claudication, and the onset is instantaneous rather than the subacute course of giant cell arteritis.',
        },
        difficulty: 'moderate',
      },
    ],
  },
]
