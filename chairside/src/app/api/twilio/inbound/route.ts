import { NextResponse, type NextRequest } from 'next/server';
import { parseInboundKeyword } from '@/lib/followups/compliance';
import { smsTestMode, validateTwilioSignature } from '@/lib/sms';
import { createAdminClient } from '@/lib/supabase/admin';

export const runtime = 'nodejs';

const EMPTY_TWIML = '<?xml version="1.0" encoding="UTF-8"?><Response></Response>';

function twiml(status = 200) {
  return new NextResponse(EMPTY_TWIML, { status, headers: { 'Content-Type': 'text/xml' } });
}

/**
 * Incoming SMS webhook (Twilio Messaging Service → "A message comes in").
 * STOP / UNSUBSCRIBE etc. immediately opt the number out and cancel every
 * scheduled text for it (a database trigger cancels them and writes the audit
 * log). START opts back in. Twilio's Advanced Opt-Out sends the carrier-required
 * confirmation reply, so we respond with empty TwiML.
 */
export async function POST(request: NextRequest) {
  const form = await request.formData();
  const params: Record<string, string> = {};
  form.forEach((value, key) => {
    if (typeof value === 'string') params[key] = value;
  });

  if (!smsTestMode()) {
    const url = process.env.TWILIO_WEBHOOK_URL || `${process.env.APP_URL}/api/twilio/inbound`;
    const ok = validateTwilioSignature(process.env.TWILIO_AUTH_TOKEN!, request.headers.get('x-twilio-signature'), url, params);
    if (!ok) return twiml(403);
  }

  const from = params.From;
  const keyword = parseInboundKeyword(params.Body ?? '');
  if (!from || !keyword || keyword === 'help') return twiml();

  const admin = createAdminClient();
  const { data: clients } = await admin.from('clients').select('id, account_id, opted_out_at').eq('phone', from);

  for (const client of clients ?? []) {
    if (keyword === 'stop' && !client.opted_out_at) {
      await admin.from('clients').update({ opted_out_at: new Date().toISOString() }).eq('id', client.id);
      await admin.from('audit_log').insert({
        account_id: client.account_id,
        client_id: client.id,
        event: 'inbound_stop',
        detail: { from, body: params.Body, message_sid: params.MessageSid },
      });
    }
    if (keyword === 'start' && client.opted_out_at) {
      await admin
        .from('clients')
        .update({ opted_out_at: null, sms_consent: true, consent_at: new Date().toISOString(), consent_method: 'sms_keyword' })
        .eq('id', client.id);
    }
  }

  return twiml();
}
