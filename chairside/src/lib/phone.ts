import { parsePhoneNumberFromString, type CountryCode } from 'libphonenumber-js';

/** Parse a phone number typed in the salon's country into E.164, or null if invalid. */
export function toE164(input: string, country: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  const parsed = parsePhoneNumberFromString(trimmed, country.toUpperCase() as CountryCode);
  if (!parsed || !parsed.isValid()) return null;
  return parsed.number;
}

export function formatPhone(e164: string | null): string {
  if (!e164) return '';
  const parsed = parsePhoneNumberFromString(e164);
  return parsed ? parsed.formatInternational() : e164;
}
