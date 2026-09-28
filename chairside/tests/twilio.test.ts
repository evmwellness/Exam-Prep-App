import crypto from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { validateTwilioSignature } from '@/lib/sms';

describe('Twilio webhook signature', () => {
  const token = 'test-auth-token';
  const url = 'https://app.example.com/api/twilio/inbound';
  const params = { From: '+12125550101', Body: 'STOP', To: '+15005550006', MessageSid: 'SM123' };
  const sign = (p: Record<string, string>) =>
    crypto
      .createHmac('sha1', token)
      .update(url + Object.keys(p).sort().map((k) => k + p[k]).join(''))
      .digest('base64');

  it('accepts a correctly signed request', () => {
    expect(validateTwilioSignature(token, sign(params), url, params)).toBe(true);
  });
  it('rejects tampered or unsigned requests', () => {
    expect(validateTwilioSignature(token, sign(params), url, { ...params, From: '+12125550199' })).toBe(false);
    expect(validateTwilioSignature(token, null, url, params)).toBe(false);
  });
});
