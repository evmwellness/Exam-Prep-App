export const CONSENT_METHODS: Record<string, string> = {
  in_person_verbal: 'In person, said yes',
  in_person_written: 'In person, signed / ticked a form',
  online_form: 'Online booking or intake form',
  sms_keyword: 'Texted START',
};

export function consentMethodLabel(method: string | null): string {
  return method ? (CONSENT_METHODS[method] ?? method) : '';
}
