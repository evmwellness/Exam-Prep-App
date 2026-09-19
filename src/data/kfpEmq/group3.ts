import type { EmqTheme } from '../../types'

export const group3Themes: EmqTheme[] = [
  {
    id: 'kfpemq-g3-t1',
    exam: 'KFP',
    format: 'emq',
    specialty: "Women's Health",
    topic: 'Causes of abnormal uterine bleeding',
    title: 'Working out the cause of abnormal uterine bleeding',
    instructions:
      'For each scenario below, select the single most likely cause of the abnormal uterine bleeding from the list of options. Each option may be used once, more than once, or not at all.',
    options: [
      { key: 'A', text: 'Endometrial carcinoma' },
      { key: 'B', text: 'Endometrial polyp' },
      { key: 'C', text: 'Uterine leiomyoma (fibroid)' },
      { key: 'D', text: 'Adenomyosis' },
      { key: 'E', text: 'Ovulatory dysfunction due to polycystic ovary syndrome' },
      { key: 'F', text: 'Progestogen-related breakthrough bleeding' },
    ],
    stems: [
      {
        id: 'kfpemq-g3-t1-s1',
        vignette:
          "A 58-year-old nulliparous woman presents with two episodes of painless vaginal bleeding, having had her last menstrual period seven years ago. Her BMI is 38 and she has type 2 diabetes managed with metformin. Transvaginal ultrasound shows a diffusely thickened endometrium of 12 mm with irregular endometrial-myometrial interface and no focal lesion.",
        correctKey: 'A',
        explanation:
          "Any postmenopausal bleeding is endometrial carcinoma until proven otherwise, and this woman carries the classic unopposed-oestrogen risk profile of obesity, type 2 diabetes and nulliparity. An endometrial thickness above 4 mm in a postmenopausal woman mandates endometrial sampling (pipelle, or hysteroscopy and curettage if sampling is inadequate or bleeding recurs) rather than reassurance or a trial of hormonal treatment.",
        optionExplanations: {
          A: 'Correct - postmenopausal bleeding with a diffusely thickened (12 mm) endometrium, an irregular endometrial-myometrial interface and strong unopposed-oestrogen risk factors (obesity, type 2 diabetes, nulliparity) makes endometrial carcinoma the single most likely cause and the one that must be excluded first.',
          B: 'A polyp is a genuine cause of postmenopausal bleeding, but it typically appears as a discrete focal echogenic lesion with a single feeding vessel, not the diffuse thickening with an irregular myometrial interface described here.',
          C: 'Fibroids are oestrogen-dependent and usually shrink after menopause; they cause heavy cyclical bleeding in premenopausal women rather than new bleeding seven years after the last period, and no myometrial masses were seen.',
          D: 'Adenomyosis causes heavy, painful periods in menstruating women and becomes quiescent after menopause; it does not explain new postmenopausal bleeding with a thickened endometrium.',
          E: 'PCOS-related anovulation causes irregular bleeding in women of reproductive age. It is relevant here only as the long-term mechanism of unopposed oestrogen exposure, not as the current cause of bleeding seven years post-menopause.',
          F: 'She is on metformin only, with no progestogen (no MHT, implant, injection or hormonal IUD), so breakthrough bleeding from exogenous progestogen cannot be the explanation.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g3-t1-s2',
        vignette:
          "A 42-year-old woman, para 3, describes progressively heavier periods over two years with increasingly severe dysmenorrhoea that now starts several days before bleeding and persists throughout. On examination the uterus is symmetrically bulky, globular and tender on bimanual palpation. Transvaginal ultrasound reports a globular uterus with asymmetric myometrial thickening, small myometrial cysts and an indistinct endometrial-myometrial junction.",
        correctKey: 'D',
        explanation:
          "Heavy menstrual bleeding with worsening dysmenorrhoea in a parous woman in her forties, combined with a diffusely enlarged, globular, tender uterus and ultrasound showing myometrial cysts with an indistinct junctional zone, is characteristic of adenomyosis. Pain that is prominent and progressive is the key discriminator from fibroids; first-line management is a levonorgestrel-releasing IUD with tranexamic acid or an NSAID for symptom control.",
        optionExplanations: {
          A: 'Endometrial carcinoma is unlikely at 42 with cyclical (not intermenstrual or postmenopausal) bleeding and no endometrial abnormality on ultrasound, though persistent heavy bleeding with risk factors would still warrant sampling if treatment fails.',
          B: 'Polyps characteristically cause intermenstrual or postcoital spotting with a focal intracavity lesion; they do not produce a globular tender uterus with myometrial cysts or this degree of dysmenorrhoea.',
          C: 'Fibroids are the main mimic, but they give a firm, irregular, usually non-tender uterus with discrete myometrial masses, and typically cause heavy bleeding with much less prominent progressive pain than described.',
          D: 'Correct - a symmetrically bulky, globular, tender uterus with myometrial cysts and an indistinct junctional zone, plus heavy bleeding and progressive severe dysmenorrhoea, is the classic picture of adenomyosis.',
          E: 'Anovulatory PCOS bleeding is irregular and unpredictable with little dysmenorrhoea; her bleeding is cyclical and painful, and her parity and uterine findings do not fit.',
          F: 'She is taking no progestogen, and breakthrough bleeding is light and irregular rather than heavy, cyclical and severely painful.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g3-t1-s3',
        vignette:
          "A 23-year-old woman reports unpredictable bleeding, with cycles ranging from 45 to 90 days since menarche and occasional prolonged heavy episodes after a long gap. She has troublesome facial acne, coarse hair on her chin and upper lip, and her BMI is 32. A urine pregnancy test is negative, and pelvic examination and transvaginal ultrasound show a normal uterus with a thin endometrium.",
        correctKey: 'E',
        explanation:
          "Oligomenorrhoea since menarche with clinical hyperandrogenism and obesity indicates chronic anovulation due to PCOS: without ovulation there is no progesterone withdrawal, so the endometrium sheds erratically and unpredictably. Diagnosis is by Rotterdam criteria after excluding thyroid disease, hyperprolactinaemia and non-classical congenital adrenal hyperplasia; cycle control with a combined oral contraceptive or cyclical progestogen also protects the endometrium from unopposed oestrogen.",
        optionExplanations: {
          A: 'Carcinoma would be very unusual at 23 and the endometrium is thin; her anovulation is nonetheless the long-term risk factor that makes endometrial protection important.',
          B: 'A polyp produces intermenstrual bleeding on a background of otherwise regular cycles and a focal cavity lesion, neither of which is present.',
          C: 'Fibroids cause heavy but regular, cyclical bleeding and a bulky irregular uterus; her uterus is normal on imaging and her problem is cycle irregularity.',
          D: 'Adenomyosis presents with heavy painful periods in parous women in their thirties and forties, with a bulky tender uterus - not a lifelong pattern of infrequent cycles with a normal uterus.',
          E: 'Correct - oligomenorrhoea from menarche, clinical hyperandrogenism (acne, hirsutism), obesity and a normal pelvis point to chronic anovulation due to PCOS as the mechanism of her abnormal bleeding.',
          F: 'No hormonal contraception or other progestogen is being used, so exogenous progestogen cannot explain the pattern.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g3-t1-s4',
        vignette:
          "A 27-year-old woman had an etonogestrel contraceptive implant inserted four months ago and now reports frequent, light, unpredictable bleeding lasting a few days at a time, with no pain. She is in a monogamous relationship, her cervical screening test six months ago was negative for HPV, and a recent chlamydia and gonorrhoea NAAT was negative. Speculum and bimanual examination and a urine pregnancy test are normal.",
        correctKey: 'F',
        explanation:
          "Unscheduled light bleeding is the commonest side effect and the leading reason for early removal of the etonogestrel implant, affecting around one in five users. Once pregnancy, infection and cervical pathology have been excluded, management is counselling about the expected pattern plus, if she wishes to continue, a trial of a combined oral contraceptive, a course of an NSAID such as mefenamic acid, or doxycycline for short-term control.",
        optionExplanations: {
          A: 'Endometrial carcinoma is extremely rare at 27 in the absence of prolonged anovulation, and progestogen exposure is protective rather than causative.',
          B: 'A polyp is possible at any age but would cause bleeding unrelated to the timing of implant insertion, and her examination and recent investigations are normal.',
          C: 'Fibroids cause heavy cyclical or prolonged bleeding with an enlarged irregular uterus, not light unpredictable spotting with a normal bimanual examination.',
          D: 'Adenomyosis is characterised by heavy, painful periods and a bulky tender uterus; her bleeding is light and painless and her uterus is normal.',
          E: 'PCOS causes long gaps between bleeds with hyperandrogenic features; she has no such history, and her bleeding pattern began specifically after implant insertion.',
          F: 'Correct - light, frequent, painless unscheduled bleeding beginning after insertion of an etonogestrel implant, with pregnancy, STI and cervical pathology excluded, is progestogen-related breakthrough bleeding.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g3-t1-s5',
        vignette:
          "A 46-year-old woman describes regular 28-day cycles but with bleeding that has become very heavy, with clots and flooding through clothing for the first three days. She also reports urinary frequency and a sensation of pelvic pressure. On examination the uterus is firm, irregularly enlarged to the level of the umbilicus and non-tender; her haemoglobin is 96 g/L with a ferritin of 8 micrograms/L.",
        correctKey: 'C',
        explanation:
          "Heavy but regular cyclical bleeding with bulk symptoms and a firm, irregularly enlarged, non-tender uterus is typical of uterine leiomyomas, and the iron deficiency anaemia quantifies the impact. Confirm with transvaginal ultrasound, treat the iron deficiency, and choose treatment by fibroid size and location and her fertility wishes - a levonorgestrel IUD or tranexamic acid for submucosal-free cavities, with referral for myomectomy, uterine artery embolisation or hysterectomy when bulk symptoms dominate.",
        optionExplanations: {
          A: 'Her bleeding is regular and cyclical without intermenstrual or postmenopausal bleeding, and the abnormality is myometrial bulk rather than endometrial; endometrial sampling would still be appropriate if bleeding persisted despite treatment.',
          B: 'Polyps typically cause intermenstrual or postcoital spotting from a small focal cavity lesion and do not enlarge the uterus to the umbilicus or cause pressure symptoms.',
          C: 'Correct - a firm, irregularly enlarged, non-tender uterus with bulk symptoms (urinary frequency, pelvic pressure) and heavy but regular cyclical bleeding causing iron deficiency anaemia is the classic presentation of uterine leiomyomas.',
          D: 'Adenomyosis gives a symmetrically globular, tender uterus with prominent progressive dysmenorrhoea; here the uterus is irregular and non-tender and pain is not a feature.',
          E: 'Anovulatory bleeding is irregular and unpredictable; her cycles remain regular at 28 days, which indicates preserved ovulation.',
          F: 'She is on no progestogen, and breakthrough bleeding is light and irregular, the opposite of the heavy cyclical flooding described.',
        },
        difficulty: 'moderate',
      },
    ],
  },
  {
    id: 'kfpemq-g3-t2',
    exam: 'KFP',
    format: 'emq',
    specialty: 'Musculoskeletal & Rheumatology',
    topic: 'Differential diagnosis of joint pain',
    title: 'Which arthritis is this?',
    instructions:
      'For each scenario below, select the single most likely diagnosis from the list of options. Each option may be used once, more than once, or not at all.',
    options: [
      { key: 'A', text: 'Gout' },
      { key: 'B', text: 'Septic arthritis' },
      { key: 'C', text: 'Rheumatoid arthritis' },
      { key: 'D', text: 'Osteoarthritis' },
      { key: 'E', text: 'Polymyalgia rheumatica' },
      { key: 'F', text: 'Reactive arthritis' },
    ],
    stems: [
      {
        id: 'kfpemq-g3-t2-s1',
        vignette:
          "A 54-year-old man wakes at 3 am with excruciating pain in his right first metatarsophalangeal joint, which is now red, hot, swollen and too tender to allow a bedsheet to rest on it. He started hydrochlorothiazide for hypertension six weeks ago and drinks four to six beers most evenings. He is afebrile and systemically well, and serum urate taken today is 0.52 mmol/L.",
        correctKey: 'A',
        explanation:
          "Abrupt nocturnal onset of an exquisitely painful, red first MTP joint (podagra) in a systemically well man with recent thiazide initiation and high alcohol intake is classic acute gout. Treat promptly with an NSAID, colchicine (low dose, 1 mg then 0.5 mg one hour later) or a short course of prednisolone, and note that a normal urate during an attack does not exclude gout - urate should be rechecked and urate-lowering therapy considered once the flare settles.",
        optionExplanations: {
          A: 'Correct - sudden nocturnal podagra with extreme tenderness, precipitated by a thiazide and alcohol, in an afebrile systemically well man with an elevated urate, is acute gout.',
          B: 'Septic arthritis must always be considered in an acutely hot joint, but it typically causes fever and systemic illness, more often involves a large joint such as the knee, and would not be triggered by starting a thiazide; his afebrile well state and classic podagra make gout far more likely.',
          C: 'Rheumatoid arthritis presents with insidious, symmetrical small-joint synovitis of the hands and feet with prolonged morning stiffness, not a single explosive overnight monoarthritis.',
          D: 'First MTP osteoarthritis (hallux rigidus) causes gradual activity-related pain and stiffness with restricted dorsiflexion, not an acutely red, hot, exquisitely tender joint.',
          E: 'Polymyalgia rheumatica causes proximal shoulder and hip girdle pain and stiffness in people over 50, not an isolated inflamed toe.',
          F: 'Reactive arthritis follows a gastrointestinal or genitourinary infection by one to four weeks and usually causes asymmetric lower-limb oligoarthritis with enthesitis; there is no preceding infection here.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g3-t2-s2',
        vignette:
          "A 68-year-old woman with seropositive rheumatoid arthritis on methotrexate and prednisolone 7.5 mg daily presents with two days of increasing pain and swelling in her left knee, which is hot, tense and so painful she cannot weight bear. Her other joints are at their usual baseline. Her temperature is 38.4 degrees Celsius and she feels generally unwell; CRP is 180 mg/L.",
        correctKey: 'B',
        explanation:
          "A single joint markedly out of proportion to the rest, with fever and a very high CRP in an immunosuppressed patient, is septic arthritis until proven otherwise - rheumatoid arthritis and corticosteroid and methotrexate use are major risk factors, and steroids can blunt the systemic response. This needs same-day referral for urgent joint aspiration for Gram stain, culture and crystals before antibiotics, not escalation of her arthritis treatment.",
        optionExplanations: {
          A: 'Gout can cause a hot swollen knee with fever and a raised CRP and is an important mimic, but it cannot be distinguished clinically here; in an immunosuppressed febrile patient, aspiration to exclude sepsis takes priority and septic arthritis is the diagnosis that must be assumed.',
          B: 'Correct - a single hot, tense, non-weight-bearing joint out of keeping with her other joints, with fever and CRP 180 mg/L on methotrexate and prednisolone, is septic arthritis until urgent aspiration proves otherwise.',
          C: 'A rheumatoid flare is the tempting anchor, but flares are usually polyarticular and mirror her other joints; a single dramatically inflamed joint with fever in an immunosuppressed patient should never be assumed to be a flare.',
          D: 'Osteoarthritis causes mechanical pain with activity and short-lived morning stiffness, without fever or a CRP of 180 mg/L.',
          E: 'Polymyalgia rheumatica causes bilateral girdle stiffness and is usually well controlled by the dose of prednisolone she is already taking; it does not cause a single hot swollen knee.',
          F: 'Reactive arthritis requires a preceding enteric or genitourinary infection and is a diagnosis of exclusion; sepsis must be ruled out first in this presentation.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfpemq-g3-t2-s3',
        vignette:
          "A 45-year-old woman describes three months of increasing pain and swelling affecting the metacarpophalangeal and proximal interphalangeal joints of both hands and the balls of both feet, with sparing of the distal interphalangeal joints. She has morning stiffness lasting about 90 minutes that eases as the day goes on, and feels fatigued. The MCP squeeze test is positive bilaterally, CRP is 28 mg/L and anti-CCP antibody is strongly positive.",
        correctKey: 'C',
        explanation:
          "Symmetrical small-joint synovitis of the MCPs, PIPs and MTPs with prolonged morning stiffness that improves with use, systemic fatigue, raised inflammatory markers and a strongly positive anti-CCP is rheumatoid arthritis. Symptom duration over six weeks makes this persistent rather than self-limiting, and early referral to a rheumatologist for disease-modifying therapy within the window of opportunity is the priority, with NSAIDs or short-course prednisolone for symptom relief meanwhile.",
        optionExplanations: {
          A: 'Gout causes intermittent acute attacks, most often in the lower limb, and polyarticular tophaceous gout in the hands typically follows years of untreated attacks rather than presenting de novo as symmetrical MCP synovitis with positive anti-CCP.',
          B: 'Septic arthritis is an acute monoarthritis with fever and severe systemic illness, not a three-month symmetrical polyarthritis.',
          C: 'Correct - symmetrical MCP, PIP and MTP synovitis with DIP sparing, 90 minutes of morning stiffness improving with use, a positive squeeze test, raised CRP and strongly positive anti-CCP is rheumatoid arthritis.',
          D: 'Hand osteoarthritis is the key mimic but preferentially affects the DIPs (Heberden nodes), the PIPs and the first carpometacarpal joint, produces morning stiffness under 30 minutes that worsens with use, and does not raise CRP or anti-CCP.',
          E: 'Polymyalgia rheumatica affects those over 50 with proximal girdle stiffness rather than peripheral small-joint synovitis, and anti-CCP is negative.',
          F: 'Reactive arthritis follows a recent infection and produces asymmetric large-joint lower-limb oligoarthritis, not a symmetrical seropositive small-joint polyarthritis.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g3-t2-s4',
        vignette:
          "A 72-year-old woman reports six weeks of aching and stiffness across both shoulders and both hips, worst on waking and lasting more than an hour. She struggles to lift her arms to brush her hair and needs to push up with her arms to rise from a chair, though formal muscle power testing is normal. There is no joint swelling; ESR is 68 mm/hr and CRP is 42 mg/L, with normal creatine kinase and negative rheumatoid factor.",
        correctKey: 'E',
        explanation:
          "Bilateral shoulder and pelvic girdle pain with inflammatory morning stiffness over 45 minutes in a patient over 50, with raised ESR and CRP, normal CK and no true weakness, is polymyalgia rheumatica. Exclude mimics before treating, then start prednisolone 15 mg daily - a brisk response within days supports the diagnosis - and specifically ask about headache, scalp tenderness, jaw claudication and visual symptoms, as up to 20% have coexisting giant cell arteritis.",
        optionExplanations: {
          A: 'Gout causes episodic acute peripheral joint inflammation, not six weeks of symmetrical girdle stiffness with normal-looking joints.',
          B: 'Septic arthritis produces a single acutely inflamed joint with fever and systemic toxicity, not bilateral symmetrical girdle symptoms over six weeks.',
          C: 'Rheumatoid arthritis can present with a polymyalgic picture in older people, but it usually produces peripheral synovitis of the hands and feet; she has no joint swelling, which favours PMR while warranting review if peripheral synovitis emerges.',
          D: 'Osteoarthritis of the shoulders and hips causes activity-related pain with brief morning stiffness and does not raise the ESR to 68 mm/hr.',
          E: 'Correct - bilateral shoulder and hip girdle pain with prolonged morning stiffness in a woman over 50, raised ESR and CRP, normal CK and no true weakness or synovitis, is polymyalgia rheumatica.',
          F: 'Reactive arthritis affects younger adults after a genitourinary or enteric infection and causes asymmetric peripheral oligoarthritis, not symmetrical girdle stiffness.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g3-t2-s5',
        vignette:
          "A 28-year-old man presents with a swollen painful left knee and right ankle that came on over the past week, three weeks after an episode of dysuria and urethral discharge treated by another clinic. He has bilateral gritty red eyes, a swollen sausage-shaped second toe and pain at both heels where the Achilles tendons insert. He is afebrile, and knee aspiration performed at the emergency department showed inflammatory fluid with no organisms on Gram stain or culture and no crystals.",
        correctKey: 'F',
        explanation:
          "Asymmetric lower-limb oligoarthritis with conjunctivitis, dactylitis and enthesitis appearing one to four weeks after a genitourinary infection, with a sterile inflammatory aspirate, is reactive arthritis - most often post-chlamydial in this age group. Management includes treating the index infection and contact tracing, NSAIDs first line with intra-articular corticosteroid for persistent single joints, and arranging sexual health screening including HIV.",
        optionExplanations: {
          A: 'Gout is rare in men under 30 without a strong family history or renal disease, typically causes monoarthritis of the first MTP, and would not explain conjunctivitis, enthesitis or the absence of crystals in the aspirate.',
          B: 'Septic arthritis (including disseminated gonococcal infection, a genuine consideration after urethritis) is excluded here by the sterile aspirate, the absence of fever and the multisite pattern with extra-articular features.',
          C: 'Rheumatoid arthritis causes symmetrical small-joint synovitis of the hands and feet with prolonged morning stiffness, not asymmetric large-joint lower-limb oligoarthritis with dactylitis and enthesitis.',
          D: 'Osteoarthritis is a degenerative condition of older adults or previously injured joints and does not produce acute inflammatory effusions, conjunctivitis or dactylitis in a 28-year-old.',
          E: 'Polymyalgia rheumatica is essentially confined to people over 50 and causes girdle stiffness, not peripheral oligoarthritis with eye and entheseal involvement.',
          F: 'Correct - asymmetric lower-limb oligoarthritis with conjunctivitis, dactylitis and Achilles enthesitis three weeks after urethritis, with a sterile inflammatory aspirate, is reactive arthritis.',
        },
        difficulty: 'moderate',
      },
    ],
  },
]
