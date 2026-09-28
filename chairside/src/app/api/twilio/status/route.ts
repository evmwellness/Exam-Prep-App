import { NextResponse, type NextRequest } from 'next/server';
import { smsTestMode, validateTwilioSignature } from '@/lib/sms';
import { createAdminClient } from '@/lib/supabase/admin';

export const runtime = 'nodejs';

/** Delivery status callback: mark texts that the carrier couldn't deliver as failed. */
export async function POST(request: NextRequest) {
  const form = await request.formData();
  const params: Record<string, string> = {};
  form.forEach((value, key) => {
    if (typeof value === 'string') params[key] = value;
  });

  if (!smsTestMode()) {
    const url = `${process.env.APP_URL}/api/twilio/status`;
    if (!validateTwilioSignature(process.env.TWILIO_AUTH_TOKEN!, request.headers.get('x-twilio-signature'), url, params)) {
      return new NextResponse(null, { status: 403 });
    }
  }

  const sid = params.MessageSid;
  const status = params.MessageStatus;
  if (sid && (status === 'failed' || status === 'undelivered')) {
    const admin = createAdminClient();
    const { data } = await admin
      .from('followups')
      .update({ status: 'failed', error: `Carrier: ${status}${params.ErrorCode ? ` (${params.ErrorCode})` : ''}` })
      .eq('provider_message_id', sid)
      .select('id, account_id, client_id')
      .maybeSingle();
    if (data) {
      await admin.from('audit_log').insert({
        account_id: data.account_id,
        client_id: data.client_id,
        followup_id: data.id,
        event: 'message_undelivered',
        detail: { sid, status, error_code: params.ErrorCode ?? null },
      });
    }
  }
  return new NextResponse(null, { status: 204 });
}
