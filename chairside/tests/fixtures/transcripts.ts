import type { ClientCard } from '@/lib/card';
import type { Trade } from '@/lib/trades';

/**
 * 10 sample voice memos per trade with the facts the extracted card must
 * contain. Expectations are loose substring checks (case/space-insensitive)
 * so wording can vary, but notation must be right ("7N + 8.1", "20 vol").
 */
export interface TranscriptFixture {
  id: string;
  transcript: string;
  expect: {
    fields?: Record<string, string[]>; // each substring must appear in that field
    emptyFields?: string[]; // fields that must be empty
    rebook_weeks?: number | null;
    remember?: string[]; // each substring must appear in some chip
    next_time?: string[]; // each substring must appear in some item
    sensitivities?: string[]; // substrings, or [] meaning must be empty
  };
}

export const FIXTURES: Record<Trade, TranscriptFixture[]> = {
  hair: [
    {
      id: 'hair-01',
      transcript: 'Sarah. Roots seven N plus eight point one, twenty volume, thirty-five minutes. Gloss nine V with clear, ten minutes. Wants it a touch warmer next time. Sensitive around the hairline. Getting married in June. Rebook six weeks.',
      expect: {
        fields: { roots_formula: ['7N + 8.1'], lengths_formula: ['9V', 'clear'], developer_volume: ['20 vol'], processing_time: ['35 min', '10 min'] },
        emptyFields: ['cut_notes'],
        rebook_weeks: 6,
        remember: ['June'],
        next_time: ['warmer'],
        sensitivities: ['hairline'],
      },
    },
    {
      id: 'hair-02',
      transcript: 'Kate, roots six N plus six point three, thirty volume because she is resistant grey, forty minutes. Lengths just a gloss, eight point three plus clear, fifteen minutes. Took two centimetres off, long layers. Her mum is not well at the moment. Rebook five weeks.',
      expect: {
        fields: { roots_formula: ['6N + 6.3'], lengths_formula: ['8.3', 'clear'], developer_volume: ['30 vol'], processing_time: ['40 min', '15 min'], cut_notes: ['layers'] },
        rebook_weeks: 5,
        remember: ['mum'],
      },
    },
    {
      id: 'hair-03',
      transcript: 'Tom, clipper cut, number three on the sides tapered into scissor on top, about an inch off. No colour today. Getting a new tattoo next week. Rebook four weeks.',
      expect: {
        fields: { cut_notes: ['3', 'scissor'] },
        emptyFields: ['roots_formula', 'developer_volume'],
        rebook_weeks: 4,
        remember: ['tattoo'],
      },
    },
    {
      id: 'hair-04',
      transcript: 'Lucy. Toner only today, nine point one plus nine point two, equal parts, with six vol, twenty minutes at the basin. Wants less yellow next time so maybe add some ten point one. Just started uni. Eight weeks.',
      expect: {
        fields: { lengths_formula: ['9.1', '9.2'], developer_volume: ['6 vol'], processing_time: ['20 min'] },
        emptyFields: ['roots_formula'],
        rebook_weeks: 8,
        remember: ['uni'],
        next_time: ['yellow'],
      },
    },
    {
      id: 'hair-05',
      transcript: 'Rachel, balayage, lightener with twenty volume, painted and left forty-five minutes, then toned with ten point two and ten point one, ten minutes. Face frame kept brighter. Cut was a trim, half an inch, curtain bangs. She has eczema on her neck, so be careful with the lightener. Rebook ten weeks. Moving house next month.',
      expect: {
        fields: { lengths_formula: ['lightener', '10.2', '10.1'], developer_volume: ['20 vol'], processing_time: ['45 min', '10 min'], cut_notes: ['curtain'] },
        rebook_weeks: 10,
        remember: ['moving'],
        sensitivities: ['eczema'],
      },
    },
    {
      id: 'hair-06',
      transcript: 'Angela, roots five N plus five point one, twenty vol, thirty minutes, pulled through the ends for the last five minutes. Blow-dry. Her daughter is getting married in October. Six weeks.',
      expect: {
        fields: { roots_formula: ['5N + 5.1'], developer_volume: ['20 vol'], processing_time: ['30 min'] },
        rebook_weeks: 6,
        remember: ['daughter', 'october'],
      },
    },
    {
      id: 'hair-07',
      transcript: "Mei. Root smudge four N, ten vol, fifteen minutes, then gloss seven point one plus clear, twenty minutes. Dry trim on the ends. She said the last colour was too ashy, so next time warmer. Her scalp gets itchy with ammonia, use the ammonia-free line. She's training for a marathon. Rebook seven weeks.",
      expect: {
        fields: { roots_formula: ['4N'], lengths_formula: ['7.1', 'clear'], developer_volume: ['10 vol'], processing_time: ['15 min', '20 min'] },
        rebook_weeks: 7,
        remember: ['marathon'],
        next_time: ['warm'],
        sensitivities: ['ammonia'],
      },
    },
    {
      id: 'hair-08',
      transcript: 'Hannah, full head highlights with lightener and nine volume, fifty minutes, toned nine point oh three plus nine point one, fifteen minutes. Long layers kept. Brand new baby boy, called Leo. Twelve weeks.',
      expect: {
        fields: { lengths_formula: ['lightener', '9.03', '9.1'], developer_volume: ['9 vol'], processing_time: ['50 min', '15 min'] },
        rebook_weeks: 12,
        remember: ['baby'],
      },
    },
    {
      id: 'hair-09',
      transcript: 'Jo, just a cut today, bob, chin length, blunt, took off three inches. Wants to go shorter next time maybe a pixie. Off to Italy on Friday. Rebook in six weeks.',
      expect: {
        fields: { cut_notes: ['bob', 'blunt'] },
        emptyFields: ['roots_formula', 'lengths_formula', 'developer_volume'],
        rebook_weeks: 6,
        remember: ['italy'],
        next_time: ['pixie'],
      },
    },
    {
      id: 'hair-10',
      transcript: 'Priya. Roots three N plus four point six, twenty volume, thirty five minutes. Ends refreshed with a gloss, five point six plus clear, ten minutes. Small trim. She mentioned her promotion at work. Rebook five to six weeks, let us say six.',
      expect: {
        fields: { roots_formula: ['3N + 4.6'], lengths_formula: ['5.6', 'clear'], developer_volume: ['20 vol'], processing_time: ['35 min', '10 min'] },
        rebook_weeks: 6,
        remember: ['promotion'],
      },
    },
  ],
  nails: [
    {
      id: 'nails-01',
      transcript: 'Emma. Gel-X full set, short almond. OPI Bubble Bath. Builder gel apex. Wants chrome next time. Going to Bali. Three weeks.',
      expect: {
        fields: { service_shape: ['gel-x', 'almond'], colour: ['bubble bath'], length: ['short'] },
        rebook_weeks: 3,
        remember: ['bali'],
        next_time: ['chrome'],
      },
    },
    {
      id: 'nails-02',
      transcript: 'Olivia, BIAB infill, squoval, medium. Colour The GelBottle Blush. She is allergic to HEMA so HEMA-free only. Works nights as a nurse. Rebook four weeks.',
      expect: {
        fields: { service_shape: ['biab', 'squoval'], colour: ['blush'], length: ['medium'] },
        rebook_weeks: 4,
        remember: ['nurse'],
        sensitivities: ['hema'],
      },
    },
    {
      id: 'nails-03',
      transcript: 'Mia, acrylic full set, long coffin, DND Black Cherry, glossy top coat. Try French ombre next time. Birthday in October. Three weeks.',
      expect: {
        fields: { service_shape: ['acrylic', 'coffin'], colour: ['black cherry'], products_system: ['acrylic'], length: ['long'] },
        rebook_weeks: 3,
        remember: ['birthday'],
        next_time: ['ombre'],
      },
    },
    {
      id: 'nails-04',
      transcript: 'Sophie, gel manicure on natural nails, short round, colour is Essie Ballet Slippers. Cuticles were dry, told her to use oil. New job at the council. Rebook two weeks.',
      expect: {
        fields: { service_shape: ['gel', 'round'], colour: ['ballet slippers'], length: ['short'] },
        rebook_weeks: 2,
        remember: ['job'],
      },
    },
    {
      id: 'nails-05',
      transcript: 'Isla, soak off and a new set of hard gel extensions, medium stiletto, Kokoist shade number twenty-two with gold foil on the ring fingers. Her wedding is in three weeks so rebook in two weeks for a refresh.',
      expect: {
        fields: { service_shape: ['stiletto'], colour: ['kokoist', '22', 'gold'], products_system: ['hard gel'], length: ['medium'] },
        rebook_weeks: 2,
        remember: ['wedding'],
      },
    },
    {
      id: 'nails-06',
      transcript: 'Ruby, pedicure with gel polish, OPI Big Apple Red. Mentioned a fungal thing on the left big toe so skipped that nail, suggested she sees a GP. Going to Mexico next month. Six weeks.',
      expect: {
        fields: { service_shape: ['pedicure'], colour: ['big apple red'] },
        rebook_weeks: 6,
        remember: ['mexico'],
        sensitivities: ['toe'],
      },
    },
    {
      id: 'nails-07',
      transcript: 'Zara, dip powder full set, short square, nude with white French tips. Wants them a bit longer next time. Twins turning five this weekend. Three weeks.',
      expect: {
        fields: { service_shape: ['square'], colour: ['french'], products_system: ['dip'], length: ['short'] },
        rebook_weeks: 3,
        remember: ['twins'],
        next_time: ['longer'],
      },
    },
    {
      id: 'nails-08',
      transcript: 'Ava, infill on her acrylics, oval, medium length, colour CND Shellac Romantique. One nail lifted, the right index, so check the prep there next time. Loves her cat Mochi. Rebook three weeks.',
      expect: {
        fields: { service_shape: ['infill', 'oval'], colour: ['romantique'], products_system: ['acrylic'], length: ['medium'] },
        rebook_weeks: 3,
        remember: ['mochi'],
        next_time: ['index'],
      },
    },
    {
      id: 'nails-09',
      transcript: 'Freya, Russian manicure and structured gel overlay, short natural shape, chrome powder in pearl over a sheer pink. Sensitive skin around the cuticles, used the low-heat lamp. Just bought her first house. Four weeks.',
      expect: {
        fields: { colour: ['chrome', 'pearl'], products_system: ['gel'], length: ['short'] },
        rebook_weeks: 4,
        remember: ['house'],
        sensitivities: ['cuticle'],
      },
    },
    {
      id: 'nails-10',
      transcript: 'Chloe, Gel-X extra short almond, colour DND six ten, small star art on the thumbs. Next time she wants to try a cat eye. Going to Taylor Swift in Melbourne. Rebook three weeks.',
      expect: {
        fields: { service_shape: ['gel-x', 'almond'], colour: ['dnd', '610'] },
        rebook_weeks: 3,
        remember: ['taylor swift'],
        next_time: ['cat eye'],
      },
    },
  ],
  lash_brow: [
    {
      id: 'lash-01',
      transcript: 'Chloe. Classic set, cat eye, C curl, nine to twelve mil, point one five. Sensitive adhesive. Brow lamination eight minutes, tint dark brown five minutes. New job. Three weeks.',
      expect: {
        fields: { lash_map: ['classic', 'C curl', '9-12 mm', '0.15'], adhesive: ['sensitive'], brow_treatment: ['8 min', 'dark brown', '5 min'] },
        rebook_weeks: 3,
        remember: ['job'],
      },
    },
    {
      id: 'lash-02',
      transcript: 'Grace, hybrid infill, doll eye, D curl, eight to eleven, point oh seven, one second glue. Eyes watered, fan on low. Loves hiking. Two weeks.',
      expect: {
        fields: { lash_map: ['hybrid', 'D curl', '8-11 mm', '0.07'], adhesive: ['1'] },
        emptyFields: ['brow_treatment'],
        rebook_weeks: 2,
        remember: ['hiking'],
        sensitivities: ['water'],
      },
    },
    {
      id: 'lash-03',
      transcript: 'Amelia, volume full set, three D, open eye, CC curl, ten to thirteen mil, point oh five. Fast adhesive. Brow tint medium brown four minutes. Engagement photos Saturday. Three weeks.',
      expect: {
        fields: { lash_map: ['volume', 'CC curl', '10-13 mm', '0.05'], adhesive: ['fast'], brow_treatment: ['medium brown', '4 min'] },
        rebook_weeks: 3,
        remember: ['engagement'],
      },
    },
    {
      id: 'lash-04',
      transcript: 'Jade, lash lift and tint, no extensions. Lift was the medium shield, eight minutes perming, six minutes setting. Tint black three minutes. Brow lamination ten minutes and brow tint dark brown. Patch test done today. Graduation next week. Rebook six weeks.',
      expect: {
        fields: { lash_map: ['lift'], brow_treatment: ['lamination', '10 min', 'dark brown'], patch_test_date: ['2026-09-28'] },
        rebook_weeks: 6,
        remember: ['graduation'],
      },
    },
    {
      id: 'lash-05',
      transcript: 'Nina, classic infill, natural map, B curl, eight to ten, point one two. Low fume adhesive because she has asthma. Moving to Perth in January. Three weeks.',
      expect: {
        fields: { lash_map: ['classic', 'B curl', '8-10 mm', '0.12'], adhesive: ['low fume'] },
        rebook_weeks: 3,
        remember: ['perth'],
        sensitivities: ['asthma'],
      },
    },
    {
      id: 'lash-06',
      transcript: 'Bella, wet look set, squirrel map, C curl, nine to thirteen millimetres, point oh seven, closed fans. Two second adhesive. Next time add a few twelves in the middle. Her dog Rocky had surgery. Rebook two to three weeks, say three.',
      expect: {
        fields: { lash_map: ['C curl', '9-13 mm', '0.07'], adhesive: ['2'] },
        rebook_weeks: 3,
        remember: ['rocky'],
        next_time: ['12'],
      },
    },
    {
      id: 'lash-07',
      transcript: 'Maya, brows only. Wax and tint, tint was soft black, three minutes. Lamination skipped because she had a reaction to the lotion last time. Patch test next visit. Wedding anniversary on Sunday. Rebook five weeks.',
      expect: {
        fields: { brow_treatment: ['wax', 'soft black', '3 min'] },
        emptyFields: ['lash_map', 'adhesive'],
        rebook_weeks: 5,
        remember: ['anniversary'],
        sensitivities: ['reaction'],
      },
    },
    {
      id: 'lash-08',
      transcript: 'Tara, mega volume, six D fans, dramatic cat eye, D curl, eleven to fifteen mil, point oh three. Fast adhesive, humidity was high. Wants fewer lashes on the inner corner next time. Starting nursing school. Two weeks.',
      expect: {
        fields: { lash_map: ['volume', 'D curl', '11-15 mm', '0.03'], adhesive: ['fast'] },
        rebook_weeks: 2,
        remember: ['nursing'],
        next_time: ['inner'],
      },
    },
    {
      id: 'lash-09',
      transcript: 'Ellie, hybrid set, open eye, L curl because she has hooded eyes, nine to twelve, point oh seven. Sensitive adhesive. Brow lamination seven minutes, no tint. Patch tested on the twentieth of September. Having a baby shower next month. Three weeks.',
      expect: {
        fields: { lash_map: ['hybrid', 'L curl', '9-12 mm', '0.07'], adhesive: ['sensitive'], brow_treatment: ['lamination', '7 min'], patch_test_date: ['09-20'] },
        rebook_weeks: 3,
        remember: ['baby shower'],
      },
    },
    {
      id: 'lash-10',
      transcript: 'Lily, classic infill, doll eye, C curl, eight to eleven, point one five. One to two second adhesive. Brow tint light brown three minutes and a tidy. Loves Pilates. Three weeks.',
      expect: {
        fields: { lash_map: ['classic', 'C curl', '8-11 mm', '0.15'], brow_treatment: ['light brown', '3 min'] },
        rebook_weeks: 3,
        remember: ['pilates'],
      },
    },
  ],
};

/** Visit date used for every fixture (so "patch test today" is checkable). */
export const FIXTURE_VISIT_DATE = '2026-09-28';

const squash = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim();
const squashNoSpace = (s: string) => s.toLowerCase().replace(/\s+/g, '');

export function contains(haystack: string, needle: string): boolean {
  return squash(haystack).includes(squash(needle)) || squashNoSpace(haystack).includes(squashNoSpace(needle));
}

/** Returns a list of problems (empty = pass). */
export function checkCard(card: ClientCard, fx: TranscriptFixture): string[] {
  const problems: string[] = [];
  const e = fx.expect;
  for (const [key, needles] of Object.entries(e.fields ?? {})) {
    for (const n of needles) {
      if (!contains(card.fields[key] ?? '', n)) problems.push(`fields.${key} missing "${n}" (got "${card.fields[key]}")`);
    }
  }
  for (const key of e.emptyFields ?? []) {
    if ((card.fields[key] ?? '').trim()) problems.push(`fields.${key} should be empty (got "${card.fields[key]}")`);
  }
  if (e.rebook_weeks !== undefined && card.rebook_weeks !== e.rebook_weeks) {
    problems.push(`rebook_weeks ${card.rebook_weeks} ≠ ${e.rebook_weeks}`);
  }
  for (const n of e.remember ?? []) {
    if (!card.remember.some((c) => contains(c, n))) problems.push(`remember missing "${n}" (got ${JSON.stringify(card.remember)})`);
  }
  for (const n of e.next_time ?? []) {
    if (!card.next_time.some((c) => contains(c, n))) problems.push(`next_time missing "${n}" (got ${JSON.stringify(card.next_time)})`);
  }
  if (e.sensitivities) {
    if (e.sensitivities.length === 0 && card.sensitivities) problems.push(`sensitivities should be empty`);
    for (const n of e.sensitivities) {
      if (!contains(card.sensitivities, n)) problems.push(`sensitivities missing "${n}" (got "${card.sensitivities}")`);
    }
  }
  return problems;
}
