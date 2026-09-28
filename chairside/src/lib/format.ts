import { DateTime } from 'luxon';

export function fmtDate(iso: string | null | undefined, timezone: string, format = 'd LLL yyyy'): string {
  if (!iso) return '';
  return DateTime.fromISO(iso, { zone: timezone }).toFormat(format);
}

export function fmtDateTime(iso: string | null | undefined, timezone: string): string {
  if (!iso) return '';
  return DateTime.fromISO(iso, { zone: timezone }).toFormat("EEE d LLL, h:mma").replace('AM', 'am').replace('PM', 'pm');
}

/** "Today", "Yesterday", "3 days ago", "12 Aug". */
export function fmtRelativeDay(iso: string | null | undefined, timezone: string): string {
  if (!iso) return '';
  const d = DateTime.fromISO(iso, { zone: timezone }).startOf('day');
  const today = DateTime.now().setZone(timezone).startOf('day');
  const diff = Math.round(today.diff(d, 'days').days);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Yesterday';
  if (diff > 1 && diff < 7) return `${diff} days ago`;
  if (diff < 0 && diff > -7) return d.toFormat('EEEE');
  return d.toFormat(d.year === today.year ? 'd LLL' : 'd LLL yyyy');
}

/** Value for <input type="datetime-local"> in the salon's timezone. */
export function toLocalInput(iso: string | null | undefined, timezone: string): string {
  if (!iso) return '';
  return DateTime.fromISO(iso, { zone: timezone }).toFormat("yyyy-LL-dd'T'HH:mm");
}

export function fromLocalInput(value: string, timezone: string): string | null {
  if (!value) return null;
  const dt = DateTime.fromISO(value, { zone: timezone });
  return dt.isValid ? dt.toUTC().toISO() : null;
}

export function firstName(name: string): string {
  return name.trim().split(/\s+/)[0] ?? name;
}
