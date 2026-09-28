import crypto from 'node:crypto';

export interface SendResult {
  providerMessageId: string;
  testMode: boolean;
}

export interface SmsSender {
  send(to: string, body: string): Promise<SendResult>;
}

/** Test mode logs texts instead of sending. On until Twilio keys are added (or SMS_TEST_MODE=true). */
export function smsTestMode(): boolean {
  if (process.env.SMS_TEST_MODE === 'true') return true;
  return !(process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_MESSAGING_SERVICE_SID);
}

class TestModeSender implements SmsSender {
  async send(to: string, body: string): Promise<SendResult> {
    console.log(`[sms:test-mode] to=${to}\n${body}`);
    return { providerMessageId: `test_${crypto.randomUUID()}`, testMode: true };
  }
}

class TwilioSender implements SmsSender {
  constructor(
    private accountSid: string,
    private authToken: string,
    private messagingServiceSid: string,
  ) {}

  async send(to: string, body: string): Promise<SendResult> {
    const params = new URLSearchParams({ To: to, Body: body, MessagingServiceSid: this.messagingServiceSid });
    if (process.env.APP_URL) params.set('StatusCallback', `${process.env.APP_URL}/api/twilio/status`);
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${this.accountSid}/Messages.json`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${this.accountSid}:${this.authToken}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });
    const json = (await res.json()) as { sid?: string; message?: string; code?: number };
    if (!res.ok || !json.sid) throw new Error(`Twilio ${res.status}: ${json.message ?? 'unknown error'} (${json.code ?? ''})`);
    return { providerMessageId: json.sid, testMode: false };
  }
}

export function getSmsSender(): SmsSender {
  if (smsTestMode()) return new TestModeSender();
  return new TwilioSender(
    process.env.TWILIO_ACCOUNT_SID!,
    process.env.TWILIO_AUTH_TOKEN!,
    process.env.TWILIO_MESSAGING_SERVICE_SID!,
  );
}

/**
 * Validate the X-Twilio-Signature header: base64(HMAC-SHA1(authToken, url + sorted key/value pairs)).
 * https://www.twilio.com/docs/usage/security#validating-requests
 */
export function validateTwilioSignature(
  authToken: string,
  signature: string | null,
  url: string,
  params: Record<string, string>,
): boolean {
  if (!signature) return false;
  const data = Object.keys(params)
    .sort()
    .reduce((acc, key) => acc + key + params[key], url);
  const expected = crypto.createHmac('sha1', authToken).update(Buffer.from(data, 'utf-8')).digest('base64');
  const a = Buffer.from(expected);
  const b = Buffer.from(signature);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
