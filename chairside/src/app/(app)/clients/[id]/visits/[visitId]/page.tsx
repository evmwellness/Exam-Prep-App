import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { normalizeCard } from '@/lib/card';
import { fmtDate } from '@/lib/format';
import { smsTestMode } from '@/lib/sms';
import { requireSession } from '@/lib/session';
import { createClient } from '@/lib/supabase/server';
import type { Client, Followup, Visit } from '@/lib/types';
import { CardEditor } from './CardEditor';
import { FollowupsPanel } from './FollowupsPanel';

export const metadata: Metadata = { title: 'Client card' };

const ORDER = ['thank_you', 'check_in', 'rebook'];

export default async function VisitPage({ params }: { params: Promise<{ id: string; visitId: string }> }) {
  const { id, visitId } = await params;
  const { account } = await requireSession();
  const supabase = await createClient();
  const [{ data: visit }, { data: followups }] = await Promise.all([
    supabase.from('visits').select('*, clients(*)').eq('id', visitId).eq('client_id', id).maybeSingle(),
    supabase.from('followups').select('*').eq('visit_id', visitId),
  ]);
  if (!visit) notFound();
  const v = visit as Visit & { clients: Client };
  const client = v.clients;
  const card = normalizeCard(v.card_json, v.trade);
  const sorted = ((followups ?? []) as Followup[]).sort((a, b) => ORDER.indexOf(a.type) - ORDER.indexOf(b.type));

  const blockedReason = client.opted_out_at
    ? `${client.name} replied STOP, so no texts will be sent.`
    : !client.sms_consent
      ? `${client.name} hasn’t agreed to receive texts, so no follow-ups can be scheduled.`
      : !client.phone
        ? `Add a mobile number for ${client.name} to send follow-ups.`
        : null;

  return (
    <main className="mx-auto max-w-5xl px-4 pt-4 pb-10 sm:px-6 lg:px-8 lg:pt-8">
      <Link href={`/clients/${client.id}`} className="btn btn-ghost -ml-3">
        <Icon name="back" /> {client.name}
      </Link>
      <header className="mt-1">
        <h1 className="text-4xl">{client.name}</h1>
        <p className="text-muted">{fmtDate(v.date, account.timezone, 'EEEE d LLLL yyyy')}</p>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <CardEditor visitId={v.id} initial={card} />
          {v.transcript && (
            <details className="card mt-4 p-4">
              <summary className="min-h-11 cursor-pointer content-center font-semibold">Original transcript</summary>
              <p className="mt-2 text-sm leading-relaxed whitespace-pre-wrap text-muted">{v.transcript}</p>
            </details>
          )}
        </div>
        <div className="lg:col-span-2">
          <FollowupsPanel
            visitId={v.id}
            initial={sorted}
            timezone={account.timezone}
            blockedReason={blockedReason}
            testMode={smsTestMode()}
            hasBookingLink={Boolean(account.booking_link)}
          />
        </div>
      </div>
    </main>
  );
}
