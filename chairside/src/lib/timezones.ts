export const COUNTRIES = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'AU', name: 'Australia' },
  { code: 'NZ', name: 'New Zealand' },
  { code: 'GB', name: 'United Kingdom' },
  { code: 'IE', name: 'Ireland' },
] as const;

export const TIMEZONES: { value: string; label: string }[] = [
  { value: 'America/New_York', label: 'US Eastern (New York)' },
  { value: 'America/Chicago', label: 'US Central (Chicago)' },
  { value: 'America/Denver', label: 'US Mountain (Denver)' },
  { value: 'America/Phoenix', label: 'US Arizona (Phoenix)' },
  { value: 'America/Los_Angeles', label: 'US Pacific (Los Angeles)' },
  { value: 'America/Anchorage', label: 'US Alaska' },
  { value: 'Pacific/Honolulu', label: 'US Hawaii' },
  { value: 'America/Toronto', label: 'Canada Eastern (Toronto)' },
  { value: 'America/Winnipeg', label: 'Canada Central (Winnipeg)' },
  { value: 'America/Edmonton', label: 'Canada Mountain (Edmonton)' },
  { value: 'America/Vancouver', label: 'Canada Pacific (Vancouver)' },
  { value: 'America/Halifax', label: 'Canada Atlantic (Halifax)' },
  { value: 'Australia/Sydney', label: 'Australia Sydney / Melbourne' },
  { value: 'Australia/Brisbane', label: 'Australia Brisbane' },
  { value: 'Australia/Adelaide', label: 'Australia Adelaide' },
  { value: 'Australia/Perth', label: 'Australia Perth' },
  { value: 'Australia/Hobart', label: 'Australia Hobart' },
  { value: 'Australia/Darwin', label: 'Australia Darwin' },
  { value: 'Pacific/Auckland', label: 'New Zealand' },
  { value: 'Europe/London', label: 'UK (London)' },
  { value: 'Europe/Dublin', label: 'Ireland (Dublin)' },
];

export const DEFAULT_TZ_BY_COUNTRY: Record<string, string> = {
  US: 'America/New_York',
  CA: 'America/Toronto',
  AU: 'Australia/Sydney',
  NZ: 'Pacific/Auckland',
  GB: 'Europe/London',
  IE: 'Europe/Dublin',
};
