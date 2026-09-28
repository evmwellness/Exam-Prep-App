import type { Trade } from '../trades';

export interface WorkedExample {
  transcript: string;
  card: {
    client_name: string | null;
    service: string;
    fields: Record<string, string>;
    next_time: string[];
    remember: string[];
    rebook_weeks: number | null;
    sensitivities: string;
  };
}

/**
 * Three worked examples per trade, included in the extraction prompt so the
 * model learns each trade's spoken jargon and our written notation.
 * Keep these distinct from tests/fixtures so the eval isn't just memorised.
 */
export const WORKED_EXAMPLES: Record<Trade, WorkedExample[]> = {
  hair: [
    {
      transcript:
        'Sarah. Roots seven N plus eight point one, twenty volume, thirty-five minutes. Gloss nine V with clear, ten minutes. Wants it a touch warmer next time. Sensitive around the hairline. Getting married in June. Rebook six weeks.',
      card: {
        client_name: 'Sarah',
        service: 'Roots + gloss',
        fields: {
          roots_formula: '7N + 8.1',
          lengths_formula: 'Gloss 9V + clear',
          developer_volume: '20 vol',
          processing_time: 'Roots 35 min; gloss 10 min',
          cut_notes: '',
        },
        next_time: ['A touch warmer'],
        remember: ['Getting married in June'],
        rebook_weeks: 6,
        sensitivities: 'Sensitive around the hairline',
      },
    },
    {
      transcript:
        "Okay Dani, full head of foils with lightener and nine vol on the top section, twenty vol underneath, forty-five minutes. Toned at the basin with nine point one and nine point two equal parts, ten vol, fifteen minutes. Trimmed an inch, kept the curtain fringe. Next time go a bit brighter around the face. She's off to Japan in March. Back in eight weeks.",
      card: {
        client_name: 'Dani',
        service: 'Full head foils + toner + trim',
        fields: {
          roots_formula: '',
          lengths_formula: 'Foils: lightener (9 vol top section, 20 vol underneath); toner 9.1 + 9.2 equal parts',
          developer_volume: 'Lightener 9 vol top / 20 vol underneath; toner 10 vol',
          processing_time: 'Foils 45 min; toner 15 min',
          cut_notes: 'Trimmed 1 inch, kept curtain fringe',
        },
        next_time: ['Brighter around the face'],
        remember: ['Trip to Japan in March'],
        rebook_weeks: 8,
        sensitivities: '',
      },
    },
    {
      transcript:
        "Marcus, men's cut, number two on the sides, scissor over comb on top, left about two inches. Grey blending with five N and six N mixed with six vol, eight minutes only. Scalp was a bit tender so went gentle. Mentioned his new baby girl. Four weeks.",
      card: {
        client_name: 'Marcus',
        service: "Men's cut + grey blending",
        fields: {
          roots_formula: 'Grey blending 5N + 6N',
          lengths_formula: '',
          developer_volume: '6 vol',
          processing_time: '8 min',
          cut_notes: 'No. 2 on the sides, scissor over comb on top, about 2 inches left',
        },
        next_time: [],
        remember: ['New baby girl'],
        rebook_weeks: 4,
        sensitivities: 'Tender scalp - be gentle',
      },
    },
  ],
  nails: [
    {
      transcript:
        "Emma. Gel-X full set, short almond. OPI Bubble Bath with a builder gel apex. Wants to try chrome next time. Going to Bali next month. Three weeks.",
      card: {
        client_name: 'Emma',
        service: 'Gel-X full set',
        fields: {
          service_shape: 'Gel-X full set, short almond',
          colour: 'OPI Bubble Bath',
          products_system: 'Gel-X + builder gel apex',
          length: 'Short',
        },
        next_time: ['Try chrome'],
        remember: ['Going to Bali next month'],
        rebook_weeks: 3,
        sensitivities: '',
      },
    },
    {
      transcript:
        "Right, Leah, BIAB infill, kept them squoval, medium length. Colour was The GelBottle shade Milky Pink with a tiny gold heart on both ring fingers. She reacted to HEMA before so HEMA-free only. Keep them a touch shorter next time, she's typing all day. Her son's graduation is next week. Rebook in four weeks.",
      card: {
        client_name: 'Leah',
        service: 'BIAB infill',
        fields: {
          service_shape: 'BIAB infill, squoval',
          colour: 'The GelBottle Milky Pink; gold heart on ring fingers',
          products_system: 'BIAB (HEMA-free)',
          length: 'Medium',
        },
        next_time: ['A touch shorter'],
        remember: ["Son's graduation next week", 'Types all day'],
        rebook_weeks: 4,
        sensitivities: 'HEMA reaction - HEMA-free products only',
      },
    },
    {
      transcript:
        "Nat, soak off and new acrylic full set, long coffin, DND five seven two, glossy gel top coat. Wants French ombre next time. Just got a new puppy. Rebook two to three weeks, say three.",
      card: {
        client_name: 'Nat',
        service: 'Soak off + acrylic full set',
        fields: {
          service_shape: 'Acrylic full set, long coffin (after soak off)',
          colour: 'DND 572',
          products_system: 'Acrylic + glossy gel top coat',
          length: 'Long',
        },
        next_time: ['French ombre'],
        remember: ['New puppy'],
        rebook_weeks: 3,
        sensitivities: '',
      },
    },
  ],
  lash_brow: [
    {
      transcript:
        "Chloe. Classic set, cat eye, C curl, nine to twelve mil, point one five. Used the sensitive adhesive. Brow lamination eight minutes, tint dark brown five minutes. Patch test done today. Go longer on the outer corners next time. Starting a new job. Three weeks.",
      card: {
        client_name: 'Chloe',
        service: 'Classic lash set + brow lamination + tint',
        fields: {
          lash_map: 'Classic, cat eye, C curl, 9-12 mm, 0.15',
          adhesive: 'Sensitive adhesive',
          brow_treatment: 'Lamination 8 min; tint dark brown 5 min',
          patch_test_date: '{{VISIT_DATE}}',
        },
        next_time: ['Longer on the outer corners'],
        remember: ['Starting a new job'],
        rebook_weeks: 3,
        sensitivities: '',
      },
    },
    {
      transcript:
        "Grace, hybrid infill, doll eye, D curl, eight to eleven, point oh seven. One second adhesive. Her eyes watered a bit so keep the fan on low. She loves hiking, going to Yosemite. Fuller in the middle next time. Two weeks.",
      card: {
        client_name: 'Grace',
        service: 'Hybrid infill',
        fields: {
          lash_map: 'Hybrid, doll eye, D curl, 8-11 mm, 0.07',
          adhesive: '1 second adhesive',
          brow_treatment: '',
          patch_test_date: '',
        },
        next_time: ['Fuller in the middle'],
        remember: ['Loves hiking', 'Going to Yosemite'],
        rebook_weeks: 2,
        sensitivities: 'Watery eyes - keep fan on low',
      },
    },
    {
      transcript:
        "Amelia, full volume set, four D fans, open eye, CC curl, ten to thirteen mil, point oh five, fast adhesive half a second. Brow tint medium brown four minutes and a wax. Patch tested last Tuesday, the fifteenth. Engagement photos on Saturday. Rebook three weeks.",
      card: {
        client_name: 'Amelia',
        service: 'Volume lash set + brow tint + wax',
        fields: {
          lash_map: 'Volume 4D fans, open eye, CC curl, 10-13 mm, 0.05',
          adhesive: 'Fast adhesive, 0.5 sec',
          brow_treatment: 'Tint medium brown 4 min; wax',
          patch_test_date: 'Tuesday the 15th (before this visit)',
        },
        next_time: [],
        remember: ['Engagement photos on Saturday'],
        rebook_weeks: 3,
        sensitivities: '',
      },
    },
  ],
};
