import type { Section } from '../../types'

const topup: Record<string, Section[]> = {
  S2: [
    {
      heading: 'Starting allopurinol safely',
      points: [
        'Start low: 100 mg daily (50 mg daily if eGFR is below about 60 mL/min), and increase by 50–100 mg every 2–4 weeks until serum urate is below 0.36 mmol/L (below 0.30 mmol/L with tophi).',
        'Doses above those once suggested by creatinine clearance are safe when increased gradually, and are often needed to reach target. Many people need 300–600 mg a day, and some more.',
        'Give flare prophylaxis for at least 3–6 months when starting: colchicine 0.5 mg once or twice daily (reduce in renal impairment), or a low-dose NSAID or prednisolone if colchicine is unsuitable.',
        'Starting during a flare is acceptable if prophylaxis is in place. Do not stop allopurinol during a flare in someone already taking it.',
        'Allopurinol hypersensitivity syndrome is rare but serious. The risk is higher with a high starting dose, renal impairment and HLA-B*5801 (more common in Han Chinese, Thai and Korean people). Consider testing in these groups.',
        'Warn patients to stop and seek help if a rash develops, especially in the first months.',
      ],
    },
    {
      heading: 'Febuxostat and other options',
      points: [
        'Febuxostat is an alternative if allopurinol is not tolerated or the target is not reached. Start 40 mg daily and increase to 80 mg if needed.',
        'Use febuxostat with caution in people with established cardiovascular disease, because of a signal of higher cardiovascular death in one trial.',
        'Probenecid (a uricosuric) can be added or used alone. It is less effective with reduced kidney function and increases kidney stone risk. Encourage fluids.',
        'Azathioprine and mercaptopurine interact seriously with allopurinol and febuxostat (risk of bone marrow suppression). Avoid the combination or reduce the thiopurine dose greatly with specialist advice.',
      ],
    },
    {
      heading: 'Gout in Aboriginal, Torres Strait Islander, Māori and Pacific peoples',
      points: [
        'Gout is more common, starts younger, and is more severe in Māori and Pacific peoples. Genetic variation in kidney urate handling plays a large role.',
        'Stigma (the belief that gout is caused by overindulgence) prevents people from seeking care. Explain that gout is mostly genetic and treatable.',
        'Community-based, nurse-led and pharmacist-supported treat-to-target programs improve outcomes.',
        'Screen for and manage associated conditions: diabetes, kidney disease, hypertension and cardiovascular disease.',
      ],
    },
    {
      heading: 'Gout and the kidney',
      points: [
        'Chronic kidney disease reduces urate excretion and increases gout risk. Gout, in turn, is linked to kidney stones and progression of kidney disease.',
        'In CKD, NSAIDs are best avoided. Colchicine needs dose reduction (and should be avoided in severe CKD or with strong CYP3A4 or P-gp inhibitors such as clarithromycin). Prednisolone is often the safest flare treatment.',
        'Allopurinol can still be used in CKD. Start at a lower dose and titrate slowly.',
        'Diuretics raise urate. Losartan and SGLT2 inhibitors modestly lower urate, which may be useful when choosing antihypertensive or diabetes treatment.',
      ],
    },
    {
      heading: 'Quick recap: gout',
      points: [
        'Confirm the diagnosis with joint aspiration where possible (negatively birefringent needle-shaped crystals), and exclude septic arthritis.',
        'Treat flares early with colchicine (low dose), an NSAID or a corticosteroid, depending on comorbidities.',
        'Offer urate-lowering therapy to people with 2 or more flares a year, tophi, erosions, or kidney stones, and treat to target.',
      ],
    },
  ],
  '616': [
    {
      heading: 'Hypoglycaemia',
      points: [
        'Hypoglycaemia is a blood glucose below 4.0 mmol/L. It is mostly a risk with insulin and sulfonylureas.',
        'Treat with the "rule of 15": 15 g of fast-acting carbohydrate (such as 150 mL of regular soft drink or 6–7 jelly beans), recheck in 15 minutes, and repeat if still below 4. Then eat a longer-acting carbohydrate.',
        'If the person cannot swallow safely, give glucagon 1 mg IM or subcutaneously (or intranasal glucagon where available), and call an ambulance.',
        'Sulfonylurea-induced hypoglycaemia can recur for many hours. The person may need hospital observation.',
        'Impaired awareness of hypoglycaemia increases the risk of severe episodes. Consider continuous glucose monitoring, and relax glucose targets.',
        'Driving: people on insulin or sulfonylureas should check glucose before driving and every 2 hours. The glucose should be above 5.0 mmol/L ("above 5 to drive").',
      ],
    },
    {
      heading: 'Sick day rules',
      points: [
        'When unwell with vomiting, diarrhoea, fever or dehydration, temporarily stop medicines that can cause harm: SGLT2 inhibitors (risk of ketoacidosis), metformin (risk of lactic acidosis), and consider diuretics, ACE inhibitors and ARBs (risk of acute kidney injury).',
        'Keep taking insulin (people may need more when unwell). Check glucose every 2–4 hours, and ketones if glucose is high or on an SGLT2 inhibitor.',
        'Euglycaemic ketoacidosis can occur on SGLT2 inhibitors even with near-normal glucose. Stop them 3 days before major surgery or a very low-calorie or ketogenic diet, and during acute illness.',
        'Seek urgent care if vomiting persists, ketones are moderate or high, the person cannot keep fluids down, or is drowsy or confused.',
        'Give written sick day plans at every review.',
      ],
    },
    {
      heading: 'Quick recap: diabetes',
      points: [
        'Diagnose with HbA1c 6.5% or higher, fasting glucose 7.0 mmol/L or higher, or 2-hour OGTT glucose 11.1 mmol/L or higher (repeat if asymptomatic).',
        'Set individual HbA1c targets: 7% or less for most, higher in older or frail people.',
        'Use SGLT2 inhibitors or GLP-1 receptor agonists for people with cardiovascular disease, heart failure or CKD, regardless of HbA1c.',
        'Check feet, eyes, kidneys (eGFR and urine ACR), lipids and blood pressure every year.',
      ],
    },
  ],
  '615': [
    {
      heading: 'Grief and loss',
      points: [
        'Grief is a normal response to loss. It often comes in waves and can include sadness, anger, guilt, poor sleep and loss of appetite.',
        'The GP\'s role is to acknowledge the loss, listen, normalise grief, and check on physical and mental health, including alcohol and medicines use.',
        'Prolonged grief disorder is intense grief (longing or preoccupation with the deceased) causing significant impairment at least 12 months after the loss (6 months in children).',
        'Risk factors for complicated grief include sudden or violent death, the death of a child, suicide, poor support, and pre-existing mental illness.',
        'Grief-focused psychological therapy is effective. Antidepressants help if major depression coexists.',
      ],
    },
    {
      heading: 'Managing anxiety in general practice',
      points: [
        'Generalised anxiety disorder: excessive worry most days for 6 months or more, with restlessness, fatigue, poor concentration, irritability, muscle tension or poor sleep.',
        'Screen with the GAD-7. A score of 10 or more suggests moderate anxiety.',
        'First-line treatment is CBT (face-to-face or digital programs such as MindSpot and THIS WAY UP). SSRIs or SNRIs are effective for moderate to severe anxiety.',
        'Avoid benzodiazepines for ongoing anxiety because of dependence, falls and cognitive effects. Pregabalin also has misuse potential.',
        'Rule out physical causes: hyperthyroidism, arrhythmias, caffeine, stimulants, alcohol withdrawal and medicines.',
      ],
    },
    {
      heading: 'Working with interpreters and cultural differences',
      points: [
        'Use a professional interpreter (the Translating and Interpreting Service, TIS National, is free for GPs on 131 450). Avoid using family members, especially children, for sensitive topics.',
        'Mental distress is described differently across cultures. Somatic symptoms (headaches, pain, fatigue) may be the main presentation of depression or trauma.',
        'Refugees and asylum seekers may have experienced torture and trauma. State-based torture and trauma services (such as the Forum of Australian Services for Survivors of Torture and Trauma, FASSTT) provide specialist support.',
        'Ask about the person\'s explanation of their illness and what help they hope for.',
      ],
    },
    {
      heading: 'Quick recap: generalist mental health skills 2',
      points: [
        'Continuity of care lets the GP see the whole family over time and notice changes early.',
        'Adverse childhood experiences increase the risk of mental and physical illness in adulthood. Use trauma-informed care.',
        'Screen for perinatal depression with the EPDS in pregnancy and after birth.',
        'Doctors need their own GP and should use the same wellbeing strategies they teach patients.',
      ],
    },
  ],
  S1: [
    {
      heading: 'Eczema in infants and preschoolers',
      points: [
        'Infant eczema usually starts on the cheeks, scalp and outer limbs, and spares the nappy area. In older children it moves to skin creases (elbows, knees, neck).',
        'Early and effective eczema treatment may reduce the risk of food allergy, because allergens can sensitise through inflamed skin.',
        'Introduce common allergenic foods (including peanut and egg) in the first year of life, from around 6 months but not before 4 months, as recommended by ASCIA. This applies to babies with eczema too.',
        'Babies with severe eczema despite treatment, or with a reaction to a food, should be assessed for food allergy by a specialist before introducing allergens, according to local guidance.',
        'Teach parents "wet wraps" for flares: apply topical steroid and moisturiser, then a damp layer of clothing or bandage, then a dry layer. This improves absorption and reduces itch.',
      ],
    },
    {
      heading: 'Topical steroid myths and fears',
      points: [
        'Steroid phobia is common and leads to under-treatment. Ask parents and patients about their concerns directly.',
        'Used correctly, topical corticosteroids rarely cause skin thinning. Mild steroids can be used on the face and in folds for short periods.',
        'Use the fingertip unit to guide amounts: one fingertip unit (about 0.5 g) covers an area of two adult palms.',
        'Topical steroid withdrawal (red skin syndrome) is uncommon and mostly occurs after long-term continuous use of potent steroids on the face or genitals.',
        'A written eczema action plan helps families know when to step up and step down treatment.',
      ],
    },
    {
      heading: 'Eczema in adults and occupational dermatitis',
      points: [
        'New or worsening hand dermatitis in adults is often irritant or allergic contact dermatitis. Ask about work (hairdressers, health workers, cleaners, food handlers, construction).',
        'Patch testing (by a dermatologist) identifies allergens such as nickel, fragrances, preservatives, hair dyes and rubber accelerators.',
        'Protect hands: wear cotton-lined gloves for wet work, use soap substitutes, and moisturise often.',
        'Workers\' compensation may apply if dermatitis is work-related. Document exposures carefully.',
      ],
    },
    {
      heading: 'Quick recap: eczema',
      points: [
        'Moisturise generously every day, even when the skin looks clear.',
        'Use enough topical steroid, of the right strength, for long enough to clear flares, then step down.',
        'Infected eczema: think of Staph aureus (crusting, weeping) and eczema herpeticum (punched-out erosions), which needs urgent antiviral treatment.',
      ],
    },
  ],
  '614': [
    {
      heading: 'Suicide risk assessment and response',
      points: [
        'Risk prediction tools do not accurately predict who will die by suicide. Focus on a thorough conversation, understanding the person\'s situation, and a shared safety plan.',
        'Ask directly: "Have you had thoughts of ending your life?" Then explore frequency, intent, plans, preparations, access to means, and previous attempts.',
        'Identify protective factors: reasons for living, connections, children, pets, faith, future plans and engagement with care.',
        'Develop a safety plan together, restrict access to means, involve trusted people with consent, and arrange early follow-up.',
        'Arrange urgent assessment by a mental health crisis team or emergency department if the person cannot keep themselves safe.',
      ],
    },
    {
      heading: 'Psychosis in general practice',
      points: [
        'Early warning signs of psychosis include social withdrawal, declining function at school or work, suspiciousness, unusual beliefs, and perceptual changes.',
        'Ask about cannabis, methamphetamine and other drug use, which can trigger or worsen psychosis.',
        'Refer early to youth early psychosis services (for example, through headspace) or adult community mental health teams. Early treatment improves outcomes.',
        'People with serious mental illness die 10–20 years earlier than others, mostly from cardiovascular disease, diabetes and cancer. Monitor weight, glucose, lipids and blood pressure on antipsychotics.',
        'Clozapine needs regular FBC monitoring for neutropenia, and watch for constipation, which can be life-threatening.',
      ],
    },
    {
      heading: 'Physical causes that mimic mental illness',
      points: [
        'Endocrine: hypothyroidism and hyperthyroidism, Cushing syndrome, hypercalcaemia and hypoglycaemia.',
        'Neurological: dementia, brain tumours, epilepsy (particularly temporal lobe), MS and Parkinson disease.',
        'Medicines and substances: corticosteroids, beta-blockers, isotretinoin, levetiracetam, alcohol and stimulant withdrawal.',
        'Other: anaemia, B12 deficiency, sleep apnoea, infection (HIV, syphilis) and autoimmune encephalitis.',
        'Red flags for an organic cause: onset after age 40 with no previous history, sudden onset, abnormal neurology, confusion or fluctuating consciousness, and visual hallucinations.',
      ],
    },
    {
      heading: 'Quick recap: generalist mental health skills 1',
      points: [
        'Use a biopsychosocial and strengths-based assessment, and think about the whole person.',
        'Trauma-informed care means safety, trust, choice, collaboration and empowerment.',
        'Watch for cognitive biases such as anchoring and diagnostic overshadowing, especially in people with a known mental illness.',
        'In eating disorders, check vital signs, electrolytes and ECG, and admit if medically unstable.',
      ],
    },
  ],
}

export default topup
