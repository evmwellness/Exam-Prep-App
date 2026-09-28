/**
 * Deterministic clean-up of trade jargon in card field values.
 *
 * Claude does the real parsing, but spoken numbers occasionally survive
 * ("seven N plus eight point one"). This pass turns them into the notation a
 * pro would write ("7N + 8.1") and standardises units ("20 vol", "35 min",
 * "9-12 mm", "C curl"). It is only applied to short trade fields, never to
 * free-form notes.
 */

const UNITS: Record<string, number> = {
  zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
  ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16,
  seventeen: 17, eighteen: 18, nineteen: 19,
};
const TENS: Record<string, number> = {
  twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90,
};
const DIGIT_WORDS: Record<string, string> = {
  zero: '0', oh: '0', o: '0', one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9',
};
const UNIT_WORDS = /^(vol|vols|volume|volumes|min|mins|minute|minutes|mm|mil|mils|millimeters?|millimetres?|cm|weeks?|hours?|percent|%)$/i;

interface Token {
  word: string; // lowercased, punctuation stripped
  raw: string; // original token
  trail: string; // trailing punctuation
}

function tokenize(text: string): Token[] {
  return text
    .split(/\s+/)
    .filter(Boolean)
    .map((raw) => {
      const m = raw.match(/^(.*?)([,.;:!?)]*)$/);
      const core = m ? m[1] : raw;
      const trail = m ? m[2] : '';
      return { raw: core, word: core.toLowerCase(), trail };
    });
}

function parseInteger(tokens: Token[], i: number): { value: number; next: number } | null {
  const t = tokens[i];
  if (!t) return null;
  if (t.word in TENS) {
    let value = TENS[t.word];
    let next = i + 1;
    const u = tokens[next];
    if (u && !t.trail && u.word in UNITS && UNITS[u.word] > 0 && UNITS[u.word] < 10) {
      value += UNITS[u.word];
      next++;
    }
    return { value, next };
  }
  if (t.word in UNITS) return { value: UNITS[t.word], next: i + 1 };
  return null;
}

function parseDecimalDigits(tokens: Token[], i: number): { digits: string; next: number } | null {
  let digits = '';
  let j = i;
  while (j < tokens.length) {
    const t = tokens[j];
    if (t.word in DIGIT_WORDS) digits += DIGIT_WORDS[t.word];
    else if (/^\d+$/.test(t.word)) digits += t.word;
    else break;
    j++;
    if (t.trail) break;
  }
  return digits ? { digits, next: j } : null;
}

/** Convert spoken numbers to digits: "eight point one" → "8.1", "point oh seven" → "0.07". */
export function spokenNumbersToDigits(text: string): string {
  // "thirty-five" → "thirty five" so the tokenizer sees both words.
  const prepared = text.replace(
    /\b(twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety)-(one|two|three|four|five|six|seven|eight|nine)\b/gi,
    '$1 $2',
  );
  const tokens = tokenize(prepared);
  const out: string[] = [];
  let i = 0;
  while (i < tokens.length) {
    const t = tokens[i];

    // "point oh seven" with no leading integer → 0.07
    if (t.word === 'point' && !t.trail) {
      const dec = parseDecimalDigits(tokens, i + 1);
      if (dec) {
        out.push(`0.${dec.digits}${tokens[dec.next - 1].trail}`);
        i = dec.next;
        continue;
      }
    }

    const intPart = /^\d+$/.test(t.word) ? { value: Number(t.word), next: i + 1 } : parseInteger(tokens, i);
    if (intPart) {
      let text = String(intPart.value);
      let next = intPart.next;
      let trail = tokens[next - 1].trail;
      const p = tokens[next];
      if (!trail && p && p.word === 'point' && !p.trail) {
        const dec = parseDecimalDigits(tokens, next + 1);
        if (dec) {
          text += `.${dec.digits}`;
          next = dec.next;
          trail = tokens[next - 1].trail;
        }
      }
      const wasWord = !/^\d+$/.test(t.word);
      const isBareOne = wasWord && t.word === 'one' && next === i + 1;
      const following = tokens[next];
      const looksNumeric =
        !isBareOne ||
        (following && !trail && (UNIT_WORDS.test(following.word) || /^[A-Z]$/.test(following.raw))) ||
        (out.length > 0 && /^(\+|plus)$/i.test(out[out.length - 1]));
      out.push(looksNumeric ? text + trail : t.raw + t.trail);
      i = looksNumeric ? next : i + 1;
      continue;
    }

    out.push(t.raw + t.trail);
    i++;
  }
  return out.join(' ');
}

/** Normalise one trade field value. Safe to run repeatedly. */
export function normalizeFieldValue(value: string): string {
  if (!value.trim()) return value.trim();
  let s = spokenNumbersToDigits(value.trim());

  // "plus" → "+"
  s = s.replace(/\s+plus\s+/gi, ' + ');
  // Hair level + tone letter: "7 N" → "7N", "8 . 1" untouched. Not before "curl" (lash curls).
  s = s.replace(/\b(\d{1,2}(?:\.\d{1,2})?)\s+([A-HJ-Z])\b(?!\s*[- ]?curl)/g, '$1$2');
  // Developer: "20 volume", "20-vol", "20vol" → "20 vol"
  s = s.replace(/\b(\d{1,2})\s*-?\s*vol(?:ume)?s?\b\.?/gi, '$1 vol');
  // Time: "35 minutes" / "35mins" → "35 min"
  s = s.replace(/\b(\d{1,3})\s*-?\s*(?:minutes?|mins?)\b\.?/gi, '$1 min');
  // Length: millimetres → mm, ranges "9 to 12 mm" → "9-12 mm"
  s = s.replace(/\b(\d{1,2}(?:\.\d)?)\s*(?:millimet(?:er|re)s?|mils?|mm)\b/gi, '$1 mm');
  s = s.replace(/\b(\d{1,2})\s*(?:to|-|–|through)\s*(\d{1,2})\s*mm\b/gi, '$1-$2 mm');
  // Lash curls: "c curl", "cc-curl", "D-curl" → "C curl", "CC curl", "D curl"
  s = s.replace(/\b(c|cc|d|dd|b|j|l|lc|m|u)\s*-?\s*curl\b/gi, (_m, c: string) => `${c.toUpperCase()} curl`);
  // Tidy spacing around "+"
  s = s.replace(/\s*\+\s*/g, ' + ');
  return s.replace(/\s{2,}/g, ' ').trim();
}
