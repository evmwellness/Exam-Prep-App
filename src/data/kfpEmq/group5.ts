import type { EmqTheme } from '../../types'

export const group5Themes: EmqTheme[] = [
  {
    id: 'kfpemq-g5-t1',
    exam: 'KFP',
    format: 'emq',
    specialty: 'Dermatology',
    topic: 'Differential diagnosis of a scaly rash or skin lesion',
    title: 'Scaly rashes: what am I looking at?',
    instructions:
      'For each scenario below, select the single most likely diagnosis from the list of options. Each option may be used once, more than once, or not at all.',
    options: [
      { key: 'A', text: 'Tinea corporis' },
      { key: 'B', text: 'Nummular (discoid) eczema' },
      { key: 'C', text: 'Pityriasis rosea' },
      { key: 'D', text: 'Guttate psoriasis' },
      { key: 'E', text: 'Chronic plaque psoriasis' },
      { key: 'F', text: 'Pityriasis versicolor' },
    ],
    stems: [
      {
        id: 'kfpemq-g5-t1-s1',
        vignette:
          "A 24-year-old woman presents with a single itchy lesion on her forearm that has slowly enlarged over 3 weeks. It is a 4 cm annular patch with a raised, scaly, advancing edge and relative central clearing. The family recently acquired a kitten, and she has treated the area with a topical steroid cream from her mother with initial improvement then worsening and less obvious scale.",
        correctKey: 'A',
        explanation:
          'A slowly enlarging annular plaque with an active scaly advancing border and central clearing, in the context of new animal contact, is classic tinea corporis. Prior topical steroid use blunts inflammation and scale (tinea incognito), which is a common reason the diagnosis is missed - skin scrapings for microscopy and culture should be taken before starting treatment.',
        optionExplanations: {
          A: 'Correct - the annular plaque with a raised scaly leading edge, central clearing, new kitten contact and paradoxical worsening after topical steroid (tinea incognito) all point to dermatophyte infection; confirm with skin scrapings for microscopy and culture and treat with a topical antifungal (or oral terbinafine if extensive).',
          B: 'Discoid eczema forms coin-shaped plaques that are scaly or crusted right across the lesion without central clearing or an active advancing edge, and it would not be made worse by a topical steroid.',
          C: 'Pityriasis rosea begins with a herald patch but is rapidly followed within a week or two by a widespread truncal eruption; a single lesion enlarging steadily over 3 weeks with animal contact is not the pattern.',
          D: 'Guttate psoriasis is a sudden shower of numerous small droplet-like papules over the trunk and limbs, typically post-streptococcal, not a solitary expanding annular plaque.',
          E: 'Chronic plaque psoriasis produces persistent, symmetrical, thick silvery-scaled plaques at extensor sites and would improve, not worsen, with topical corticosteroid.',
          F: 'Pityriasis versicolor causes multiple small confluent hypo- or hyperpigmented macules with fine scale on the upper trunk, not a solitary annular plaque with central clearing on the forearm.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g5-t1-s2',
        vignette:
          'A 16-year-old boy develops a sudden widespread eruption over 5 days. He had a sore throat treated as tonsillitis about 2 weeks earlier. Examination shows hundreds of 2-8 mm salmon-pink papules with fine scale scattered over the trunk and proximal limbs, sparing the palms and soles; there is mild pitting of two fingernails and no lesions in the mouth.',
        correctKey: 'D',
        explanation:
          'An abrupt, widespread shower of small droplet-shaped scaly papules on the trunk and proximal limbs, 1-3 weeks after a streptococcal pharyngitis, is guttate psoriasis. Nail pitting supports a psoriatic diathesis. Most episodes settle over weeks to months, though a proportion later develop chronic plaque disease.',
        optionExplanations: {
          A: 'Tinea corporis presents with a few annular plaques with an advancing scaly edge, not hundreds of small monomorphic papules erupting simultaneously.',
          B: 'Discoid eczema lesions are larger coin-shaped, intensely itchy, often weeping or crusted plaques, usually on the limbs of adults, and are not triggered by streptococcal throat infection.',
          C: 'Pityriasis rosea can look similar but classically starts with a herald patch, has oval lesions with a trailing collarette of scale aligned along skin lines, and is not preceded by streptococcal pharyngitis or associated with nail pitting.',
          D: 'Correct - the explosive crop of small droplet-like scaly papules on trunk and proximal limbs 2 weeks after streptococcal pharyngitis, with nail pitting, is guttate psoriasis; check a throat swab or ASOT and treat supportively with emollients and topical corticosteroid, considering phototherapy if extensive.',
          E: 'Chronic plaque psoriasis evolves slowly with a few large, well-demarcated thick plaques at elbows, knees and scalp rather than a sudden generalised small-papule eruption.',
          F: 'Pityriasis versicolor produces pigmentary change with fine branny scale confined mainly to the upper trunk and shoulders, is asymptomatic, and has no link to preceding pharyngitis.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g5-t1-s3',
        vignette:
          "A 22-year-old woman noticed a single 3 cm oval scaly patch on her flank 10 days ago. Over the past week multiple smaller oval pink patches have appeared across her trunk, each with a fine collarette of scale just inside the border, with the long axes running along the rib lines. She is otherwise well and the rash is only mildly itchy.",
        correctKey: 'C',
        explanation:
          'A herald patch followed 1-2 weeks later by multiple oval salmon-pink patches with an inner collarette of scale, aligned along skin cleavage lines in a "Christmas tree" pattern, is pityriasis rosea. It is self-limiting over 6-12 weeks and needs only reassurance and symptomatic care; syphilis serology is worth considering if the palms and soles are involved or there are sexual risk factors.',
        optionExplanations: {
          A: 'A single herald patch can mimic tinea, but tinea does not go on to produce a symmetrical truncal eruption aligned along skin cleavage lines over a week.',
          B: 'Discoid eczema is markedly itchy with crusted, sometimes exudative coin-shaped plaques on the limbs, not oval patches with a delicate inner collarette following rib lines.',
          C: 'Correct - the herald patch, the subsequent oval salmon-pink patches with a trailing collarette of scale and the distribution along skin cleavage lines are diagnostic of pityriasis rosea; reassure, and consider syphilis serology if palms or soles are involved.',
          D: 'Guttate psoriasis appears as many small droplet papules without a preceding herald patch, without a collarette and without the cleavage-line orientation.',
          E: 'Chronic plaque psoriasis has thick adherent silvery scale on persistent extensor plaques, not thin oval patches that erupted over a week on the trunk.',
          F: 'Pityriasis versicolor causes pigmentary macules with fine scale on the upper back and chest, without a herald patch or collarette, and tends to persist rather than erupt over days.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g5-t1-s4',
        vignette:
          'A 19-year-old man who works outdoors presents at the end of summer with patches on his upper back, chest and shoulders that he says became obvious once the surrounding skin tanned. Examination shows multiple coalescing, slightly hypopigmented macules with a fine branny scale that becomes more obvious when the surface is lightly scratched. They are asymptomatic.',
        correctKey: 'F',
        explanation:
          'Confluent hypopigmented macules with fine powdery scale on the upper trunk and shoulders of a young adult, most visible after sun exposure, are pityriasis versicolor caused by Malassezia. Diagnosis is clinical (scrapings show the "spaghetti and meatballs" pattern), treatment is topical azole or selenium sulfide shampoo, and patients must be warned that repigmentation takes months and relapse is common.',
        optionExplanations: {
          A: 'Tinea corporis gives inflamed annular plaques with a raised advancing scaly edge and itch, rather than asymptomatic confluent pigmentary macules over the upper trunk.',
          B: 'Discoid eczema is itchy, inflamed and crusted, typically on the limbs, and does not cause pigment loss with fine branny scale.',
          C: 'Pityriasis rosea is an acute, self-limiting eruption with a herald patch and collarette scale, not a chronic asymptomatic pigmentary change unmasked by tanning.',
          D: 'Guttate psoriasis papules are salmon-pink and raised with adherent scale and appear abruptly after streptococcal infection; they do not present as hypopigmented macules on the shoulders.',
          E: 'Chronic plaque psoriasis produces thick, well-demarcated plaques with silvery scale at extensor surfaces, not fine scaly pigmentary macules.',
          F: 'Correct - asymptomatic coalescing hypopigmented macules with fine branny scale on the upper trunk of a young adult, more visible after tanning, are typical pityriasis versicolor; treat with topical antifungal or selenium sulfide and explain that pigment takes months to return.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g5-t1-s5',
        vignette:
          'A 62-year-old man presents in winter with several intensely itchy, well-circumscribed round plaques 2-4 cm across on his shins and forearms. The plaques are uniformly scaly with crusting and small weeping points across the whole surface, with no central clearing, and the surrounding skin is dry and rough. He has a history of childhood asthma and has been taking long hot showers.',
        correctKey: 'B',
        explanation:
          'Intensely itchy, coin-shaped plaques that are scaly and exudative across the entire lesion (no central clearing), on the limbs of an older adult with a background of dry skin, an atopic history and hot showers, are discoid (nummular) eczema. Management is generous emollients, avoidance of hot water and soap, and an adequately potent topical corticosteroid, with a swab if secondary bacterial infection is suspected.',
        optionExplanations: {
          A: 'Tinea would be expected to show an active raised scaly border with central clearing and is usually fewer, asymmetric lesions; scrapings are worth taking if the diagnosis is uncertain, but the uniform crusted weeping surface argues against it.',
          B: 'Correct - uniformly scaly, crusted and weeping coin-shaped plaques without central clearing, severe itch, xerosis, an atopic background and hot-shower aggravation are classic discoid eczema; treat with emollients, soap avoidance and a potent topical corticosteroid.',
          C: 'Pityriasis rosea is a self-limiting truncal eruption of young adults with a herald patch and collarette scale, not crusted exudative plaques on the shins of an older man.',
          D: 'Guttate psoriasis presents as numerous small droplet papules after streptococcal infection, not a few large weeping coin-shaped plaques.',
          E: 'Plaque psoriasis can appear on the shins but gives dry, thick, silvery-scaled, sharply demarcated plaques that are typically more symmetrical and far less exudative or itchy than described.',
          F: 'Pityriasis versicolor is asymptomatic, confined largely to the upper trunk, and causes fine scaly pigmentary macules rather than inflamed crusted plaques.',
        },
        difficulty: 'moderate',
      },
    ],
  },
  {
    id: 'kfpemq-g5-t2',
    exam: 'KFP',
    format: 'emq',
    specialty: 'Child & Adolescent Health',
    topic: 'Differential diagnosis of fever in a child',
    title: 'The febrile child with a rash',
    instructions:
      'For each scenario below, select the single most likely diagnosis from the list of options. Each option may be used once, more than once, or not at all.',
    options: [
      { key: 'A', text: 'Kawasaki disease' },
      { key: 'B', text: 'Scarlet fever (group A streptococcal infection)' },
      { key: 'C', text: 'Measles' },
      { key: 'D', text: 'Roseola infantum (human herpesvirus 6)' },
      { key: 'E', text: 'Hand, foot and mouth disease (enteroviral)' },
      { key: 'F', text: 'Meningococcal sepsis' },
    ],
    stems: [
      {
        id: 'kfpemq-g5-t2-s1',
        vignette:
          'A 14-month-old girl has had a temperature to 39.5 C for 3 days with no localising features; she remained alert and feeding reasonably well throughout. This morning the fever settled and a blanching rosy-pink macular and maculopapular rash appeared over her trunk and neck. She is now afebrile, playful, with no conjunctivitis, mucosal change or lymphadenopathy of note.',
        correctKey: 'D',
        explanation:
          'High fever for 3-5 days in a well-appearing infant, followed by defervescence and the appearance of a blanching rosy maculopapular rash on the trunk, is roseola infantum (HHV-6). It is self-limiting and needs only reassurance, antipyretics for comfort and safety-netting; the characteristic sequence (rash appears as the fever breaks) is the key discriminator.',
        optionExplanations: {
          A: 'Kawasaki disease requires fever persisting 5 days or more plus features such as conjunctival injection, mucosal change, extremity change or cervical adenopathy - here the fever has resolved by day 3 and the child is well with none of those features.',
          B: 'Scarlet fever causes a rough sandpaper-textured rash with flexural accentuation, strawberry tongue and pharyngitis, and the rash appears while the child is still febrile, not as the fever breaks.',
          C: 'Measles children look unwell with a prominent prodrome of cough, coryza and conjunctivitis, and the rash appears at the height of the fever starting behind the ears, not after defervescence.',
          D: 'Correct - 3 days of high fever in a well infant followed by a blanching rosy maculopapular truncal rash appearing exactly as the fever settles is the classic sequence of roseola infantum; reassure and safety-net.',
          E: 'Hand, foot and mouth disease produces oral ulcers with vesicles on the palms, soles and buttocks, not a blanching truncal macular rash after defervescence.',
          F: 'Meningococcal sepsis presents with a toxic, unwell child, often with a non-blanching petechial or purpuric rash and shock; this child is afebrile, playful and has a blanching rash.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g5-t2-s2',
        vignette:
          "A 6-year-old boy has had fever and a sore throat for 2 days. Examination shows exudative tonsillitis, tender anterior cervical nodes, a red tongue with prominent papillae, flushed cheeks with pallor around the mouth, and a widespread fine erythematous rash with a rough sandpaper texture that is accentuated in the axillae and groin.",
        correctKey: 'B',
        explanation:
          'Fever with exudative pharyngitis, tender anterior cervical nodes, strawberry tongue, circumoral pallor and a sandpaper-textured erythematous rash with flexural accentuation is scarlet fever. Treat with oral penicillin V (or amoxicillin) for 10 days to reduce suppurative complications and acute rheumatic fever risk, which is especially important in Aboriginal and Torres Strait Islander children and in high-prevalence rural and remote settings.',
        optionExplanations: {
          A: 'Kawasaki disease shares strawberry tongue and cervical adenopathy but needs fever for at least 5 days with non-purulent bulbar conjunctivitis and extremity changes; exudative tonsillitis with a sandpaper rash at day 2 fits streptococcal disease far better.',
          B: 'Correct - sandpaper rash with flexural accentuation, strawberry tongue, circumoral pallor and exudative pharyngitis with tender anterior nodes is scarlet fever; swab the throat and give a full 10-day course of penicillin.',
          C: 'Measles rash is blotchy and maculopapular, starts behind the ears and is preceded by cough, coryza and conjunctivitis - none of which are present here.',
          D: 'Roseola affects infants and toddlers, the rash appears only after 3-5 days of fever has broken, and there is no exudative tonsillitis or sandpaper texture.',
          E: 'Hand, foot and mouth disease causes painful oral ulcers with peripheral vesicles rather than exudative tonsillitis with a confluent sandpaper rash.',
          F: 'Meningococcal sepsis causes a non-blanching purpuric rash in a toxic, poorly perfused child; this boy has a blanching erythematous rash and a clear streptococcal focus.',
        },
        difficulty: 'easy',
      },
      {
        id: 'kfpemq-g5-t2-s3',
        vignette:
          'A 2-year-old boy has had a fever above 39 C for 6 days despite regular paracetamol, and is markedly irritable. Examination shows bilateral non-purulent bulbar conjunctival injection, dry cracked red lips with a strawberry tongue, a polymorphous truncal rash, red swollen palms and soles, and a single 2 cm right cervical lymph node. Blood tests show a raised CRP, platelets of 620 and a sterile pyuria on urinalysis.',
        correctKey: 'A',
        explanation:
          'Fever lasting 5 days or more with bilateral non-exudative conjunctivitis, mucous membrane changes, polymorphous rash, extremity changes and cervical lymphadenopathy is Kawasaki disease. Sterile pyuria, marked irritability and thrombocytosis are supportive. This requires urgent paediatric referral for echocardiography and IVIG plus aspirin within 10 days of fever onset to reduce the risk of coronary artery aneurysms.',
        optionExplanations: {
          A: 'Correct - fever 5 or more days plus non-purulent bulbar conjunctivitis, cracked lips and strawberry tongue, polymorphous rash, erythematous swollen extremities and unilateral cervical adenopathy meets Kawasaki criteria; arrange urgent paediatric referral for echocardiography and IVIG with aspirin.',
          B: 'Scarlet fever would give a sandpaper rash with pharyngitis and responds to penicillin; it does not cause bilateral bulbar conjunctival injection, swollen erythematous palms and soles or sterile pyuria, and fever rarely persists 6 days on treatment.',
          C: 'Measles causes conjunctivitis but with prominent cough and coryza, Koplik spots and a descending blotchy rash, and does not produce cracked lips with swollen palms and soles or thrombocytosis.',
          D: 'Roseola is an illness of well infants in whom the rash appears only once the fever has broken; it does not cause 6 days of fever with mucocutaneous and extremity changes.',
          E: 'Hand, foot and mouth disease can produce oral changes and acral lesions but the lesions are discrete vesicles, the child is usually much less unwell, and fever is short-lived.',
          F: 'Meningococcal sepsis evolves over hours with a non-blanching rash and shock, not a 6-day febrile illness with conjunctivitis and extremity desquamative change.',
        },
        difficulty: 'hard',
      },
      {
        id: 'kfpemq-g5-t2-s4',
        vignette:
          "A 4-year-old girl who has received no routine immunisations returned from Bali 10 days ago. She has had 4 days of high fever with a harsh cough, runny nose and red watery eyes, and looks miserable. Small white spots on an erythematous base were noted on the buccal mucosa yesterday, and today a blotchy erythematous maculopapular rash has begun behind her ears and is spreading down over her face and trunk.",
        correctKey: 'C',
        explanation:
          'An unimmunised child with recent overseas travel, a 3-4 day prodrome of cough, coryza and conjunctivitis, Koplik spots and then a descending blotchy maculopapular rash starting behind the ears has measles until proven otherwise. Notify the public health unit immediately, isolate the child, arrange a nasopharyngeal swab for PCR plus serology, and manage contacts - do not leave her sitting in the waiting room.',
        optionExplanations: {
          A: 'Kawasaki disease causes non-purulent conjunctivitis and rash but not cough, coryza or Koplik spots, and the rash is polymorphous rather than a descending blotchy eruption from behind the ears.',
          B: 'Scarlet fever produces a sandpaper rash with pharyngitis and strawberry tongue; cough, coryza, conjunctivitis and Koplik spots are not features.',
          C: 'Correct - unimmunised, recently returned from an endemic area, with the classic cough, coryza and conjunctivitis prodrome, Koplik spots and a rash descending from behind the ears, this is measles; isolate her immediately, notify public health and confirm with PCR and serology.',
          D: 'Roseola affects younger infants, the child stays relatively well, and the rash appears only once the fever has defervesced rather than at the peak of illness.',
          E: 'Hand, foot and mouth disease causes oral ulcers with acral vesicles in a generally well child, not Koplik spots with a descending morbilliform rash and a severe respiratory prodrome.',
          F: 'Meningococcal sepsis causes rapid deterioration with a non-blanching rash and shock; this rash is blanching, morbilliform and follows a typical viral prodrome.',
        },
        difficulty: 'moderate',
      },
      {
        id: 'kfpemq-g5-t2-s5',
        vignette:
          'A 3-year-old boy is brought in by his mother with 8 hours of fever, vomiting and leg pain. He is drowsy and difficult to rouse, with cold mottled hands and feet, a capillary refill of 4 seconds, heart rate 170 and a few dusky non-blanching spots appearing over his abdomen and ankles that were not there an hour ago.',
        correctKey: 'F',
        explanation:
          'Rapid-onset fever with limb pain, cold peripheries, prolonged capillary refill, altered conscious state and an evolving non-blanching rash is meningococcal sepsis. This is a time-critical emergency: give parenteral benzylpenicillin or ceftriaxone immediately in the practice without waiting for investigations, call an emergency ambulance, give fluid resuscitation, and arrange clearance antibiotics for close contacts through the public health unit.',
        optionExplanations: {
          A: 'Kawasaki disease requires several days of fever with mucocutaneous signs and does not cause shock with a non-blanching rash over hours (though rare Kawasaki shock syndrome exists, the acute purpuric picture here demands treatment for sepsis).',
          B: 'Scarlet fever causes a blanching sandpaper rash in a child who is systemically much better than this; it does not cause a purpuric rash with delayed capillary refill and drowsiness.',
          C: 'Measles produces a blanching morbilliform rash after a several-day cough, coryza and conjunctivitis prodrome, not purpura with shock 8 hours into the illness.',
          D: 'Roseola occurs in well infants whose blanching rash appears once the fever settles; it never causes shock or a non-blanching rash.',
          E: 'Hand, foot and mouth disease causes oral ulcers and acral vesicles in a child who is systemically well, not purpura with poor perfusion and altered consciousness.',
          F: 'Correct - fever, limb pain, cold mottled peripheries, capillary refill of 4 seconds, drowsiness and a rapidly evolving non-blanching rash are meningococcal sepsis; give IM or IV benzylpenicillin or ceftriaxone immediately and arrange emergency transfer.',
        },
        difficulty: 'moderate',
      },
    ],
  },
]
