import type { Section } from '../../types'

const topup: Record<string, Section[]> = {
  '620': [
    {
      heading: 'Referral and shared care in dermatology',
      points: [
        'Wait times for public dermatology can be long. Teledermatology (sending good-quality photos with a clear history) can speed up advice.',
        'Include in referrals: duration, distribution, treatments tried (with strength and duration), response, impact on life, and relevant medical history.',
        'Many dermatology biologics (for psoriasis, eczema and hidradenitis suppurativa) need specialist initiation, but GPs can support monitoring, vaccinations and infection screening.',
        'Photograph lesions at each visit to track change over time.',
      ],
    },
  ],
  '619': [
    {
      heading: 'Nappy rash and infant skin care',
      points: [
        'Irritant nappy rash affects the convex skin surfaces and spares the skin folds. Frequent nappy changes, nappy-free time and a barrier cream (zinc or petrolatum) are the mainstays.',
        'Candida infection involves the skin folds, with bright red skin and satellite papules. Treat with a topical antifungal, and add a mild steroid if inflamed.',
        'Bathe infants in plain water or with a soap-free wash. Avoid bubble baths and fragranced products.',
        'Infant seborrhoeic dermatitis (cradle cap) is harmless. Soften scale with oil and gently brush it off.',
      ],
    },
    {
      heading: 'Pressure injuries and moisture-associated skin damage',
      points: [
        'Older people and those with limited mobility are at risk of pressure injuries over bony areas such as the sacrum, heels and hips.',
        'Prevent them with regular repositioning, pressure-relieving mattresses, good nutrition and hydration, and keeping skin clean and dry.',
        'Incontinence-associated dermatitis is caused by urine and faeces on the skin. Use gentle pH-balanced cleansers and barrier products, and treat the incontinence.',
        'Stage pressure injuries (1 to 4, unstageable, and deep tissue injury) and refer to wound care nurses for complex wounds.',
      ],
    },
  ],
  '618': [
    {
      heading: 'Drug use in pregnancy',
      points: [
        'Opioid agonist treatment is safe and recommended in pregnancy. It reduces the risks of relapse, overdose, and poor fetal outcomes compared with withdrawal.',
        'Both methadone and buprenorphine can be used. Babies may develop neonatal abstinence syndrome, which is managed by the neonatal team.',
        'Breastfeeding is generally encouraged for people stable on methadone or buprenorphine.',
        'Stimulant use in pregnancy increases the risk of placental abruption, preterm birth and growth restriction. Link with specialist drug and alcohol antenatal services.',
        'Work with child protection agencies with honesty and support, focusing on the safety of the baby and the parent\'s recovery.',
      ],
    },
    {
      heading: 'Drug checking and emerging drugs',
      points: [
        'The illicit drug supply includes contaminated and unexpected substances, such as nitazenes (very potent synthetic opioids) found in pills and powders.',
        'Pill testing (drug checking) services operate in some states. They give harm-reduction advice and alerts about dangerous substances.',
        'Stay up to date with local drug alerts from health departments.',
      ],
    },
  ],
  '617': [
    {
      heading: 'Alcohol and older people',
      points: [
        'Older people are more sensitive to alcohol, because of changes in body composition and metabolism.',
        'Alcohol increases the risk of falls, confusion, interactions with medicines (sedatives, anticoagulants, antihypertensives), and worsens chronic conditions.',
        'Late-onset heavy drinking may follow loss, loneliness, retirement or pain.',
        'Screen routinely, and offer the same brief intervention and treatment as for younger people.',
      ],
    },
    {
      heading: 'Methamphetamine use',
      points: [
        'Methamphetamine ("ice") can cause agitation, paranoia, psychosis, aggression, heart problems, stroke and dental disease.',
        'There is no approved medicine for methamphetamine dependence. Psychological treatment (CBT, contingency management) is the main approach.',
        'Acute agitation or psychosis may need emergency care. Keep the environment calm, and prioritise safety.',
        'Withdrawal causes low mood, fatigue, and increased sleep and appetite. Suicide risk may be raised in the early weeks.',
        'Support families through services such as Family Drug Support and local alcohol and other drug services.',
      ],
    },
  ],
  S2: [
    {
      heading: 'Gout and cardiovascular risk',
      points: [
        'People with gout have higher rates of hypertension, diabetes, CKD, heart disease and early death.',
        'Check blood pressure, lipids, HbA1c and kidney function, and calculate cardiovascular risk.',
        'Treat gout as a chronic disease with regular reviews, not just an acute problem.',
      ],
    },
    {
      heading: 'Monitoring urate-lowering therapy',
      points: [
        'Check serum urate every 4 weeks while titrating, then every 6–12 months once at target.',
        'Also check renal function and LFTs when starting and after dose changes.',
        'Tophi slowly shrink once urate is below target, often over 1–2 years.',
        'Treatment is usually lifelong. Stopping allopurinol usually leads to flares returning.',
      ],
    },
  ],
  '616': [
    {
      heading: 'Diabetes and driving, work and travel',
      points: [
        'Commercial drivers on insulin need a specialist review for a conditional licence.',
        'People on insulin should carry glucose, a meter and fast-acting carbohydrate when driving.',
        'For travel, carry medicines in hand luggage with a doctor\'s letter, and plan dose timing across time zones.',
        'Night-shift workers may need adjusted insulin regimens. Discuss with a diabetes educator.',
      ],
    },
    {
      heading: 'Continuous glucose monitoring',
      points: [
        'CGM is subsidised through the NDSS for all people with type 1 diabetes and some others.',
        'Time in range (3.9–10.0 mmol/L) above 70% is the usual goal. It links well with HbA1c and complications.',
        'CGM reduces hypoglycaemia and improves quality of life.',
      ],
    },
  ],
  '615': [
    {
      heading: 'Mental health care plans and funding',
      points: [
        'A GP Mental Health Treatment Plan gives access to Medicare-subsidised sessions with a psychologist, social worker or occupational therapist under Better Access.',
        'Review the plan after the first set of sessions to decide on further sessions.',
        'Other options include Medicare Mental Health Centres, headspace, digital mental health services (Head to Health), and Primary Health Network-funded services for people who cannot afford gap fees.',
        'Eating disorder plans give extended psychology and dietetic sessions.',
      ],
    },
    {
      heading: 'Chronic disease and mental health',
      points: [
        'Depression is common in heart disease, diabetes, chronic pain, cancer and COPD, and worsens outcomes.',
        'Screen regularly (for example, PHQ-9) in chronic disease reviews.',
        'Treating depression improves quality of life and self-care. Collaborative care models work well.',
        'Watch for drug interactions and side effects when prescribing antidepressants in older or medically complex patients.',
      ],
    },
    {
      heading: 'Men and help-seeking',
      points: [
        'Men often present with physical symptoms, irritability, anger, alcohol use or relationship problems rather than low mood.',
        'Normalise mental health care and frame it around practical problem-solving.',
        'Ask directly about suicide and firearms.',
      ],
    },
  ],
  S1: [
    {
      heading: 'Sleep and itch',
      points: [
        'Itch disrupts sleep for the whole family. Poor sleep affects mood, school and work.',
        'Controlling inflammation with adequate topical treatment is the best way to reduce itch.',
        'Sedating antihistamines are not recommended for eczema itch. They may affect sleep quality and learning in children.',
        'Keep nails short, use cotton clothing, and keep the bedroom cool.',
      ],
    },
    {
      heading: 'Eczema and mental health',
      points: [
        'Eczema is linked with anxiety, depression, and poor self-esteem in children and adults.',
        'Bullying and social isolation can occur in children with visible eczema.',
        'Ask about mental health and quality of life, for example using the Children\'s Dermatology Life Quality Index.',
        'Parents and carers often feel exhausted and blamed. Acknowledge the burden and offer support.',
      ],
    },
    {
      heading: 'Treatments for severe eczema',
      points: [
        'Dupilumab and JAK inhibitors (upadacitinib, abrocitinib) are PBS-subsidised for severe eczema through dermatologists.',
        'Phototherapy (narrowband UVB) is an option for adults and older children.',
        'Oral steroids are not recommended for eczema, except as a short bridge, because of rebound flares.',
      ],
    },
  ],
  '614': [
    {
      heading: 'Bipolar disorder in general practice',
      points: [
        'Bipolar disorder often starts in young adulthood and is frequently first diagnosed as depression. Ask about past periods of elevated mood, reduced need for sleep, and impulsive behaviour.',
        'Antidepressants alone can trigger mania or rapid cycling in bipolar disorder.',
        'Lithium is effective for mood stabilisation and reduces suicide. It needs regular monitoring of levels, renal and thyroid function, and calcium.',
        'Sodium valproate is highly teratogenic. Avoid it in women who could become pregnant.',
        'Refer suspected bipolar disorder to a psychiatrist to confirm the diagnosis and plan treatment.',
      ],
    },
    {
      heading: 'Personality difficulties and the therapeutic relationship',
      points: [
        'People with borderline personality disorder often have trauma histories, emotional instability, self-harm and relationship difficulties.',
        'Consistent, predictable and compassionate care, with clear boundaries, helps.',
        'Dialectical behaviour therapy (DBT) and other structured therapies are effective.',
        'Avoid polypharmacy. No medicine is approved specifically for personality disorder.',
        'Look after yourself and your team. These consultations can be emotionally demanding, so use peer support and supervision.',
      ],
    },
    {
      heading: 'Somatic symptoms',
      points: [
        'Medically unexplained or persistent physical symptoms are common in general practice.',
        'Acknowledge that the symptoms are real, avoid repeated unnecessary tests, and schedule regular reviews rather than symptom-driven visits.',
        'Explain how stress and the nervous system can amplify symptoms, and offer CBT and graded activity.',
      ],
    },
  ],
  '613': [
    {
      heading: 'Prostatitis and pelvic pain',
      points: [
        'Acute bacterial prostatitis causes fever, perineal pain, urinary symptoms and a tender prostate. Treat with antibiotics for 2–4 weeks, and admit if unwell.',
        'Chronic prostatitis or chronic pelvic pain syndrome is common. It causes pelvic, perineal or genital pain for 3 months or more, often with urinary and sexual symptoms.',
        'Management is multimodal: pelvic floor physiotherapy, alpha-blockers, pain management and psychological support.',
        'PSA is often raised in prostatitis. Repeat the PSA after treatment before referring.',
      ],
    },
    {
      heading: 'Supporting men and partners',
      points: [
        'Prostate cancer treatment affects urinary, bowel and sexual function, and relationships.',
        'Prostate Cancer Foundation of Australia offers support groups and specialist prostate cancer nurses.',
        'Early pelvic floor exercises (starting before surgery) improve continence after radical prostatectomy.',
        'Penile rehabilitation (PDE5 inhibitors, vacuum devices, injections) can help erectile function after treatment.',
      ],
    },
  ],
}

export default topup
