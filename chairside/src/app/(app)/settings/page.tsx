import type { Metadata } from 'next';
import { billingEnabled, hasActiveSubscription, PLANS } from '@/lib/billing';
import { fmtDate, fmtDateTime } from '@/lib/format';
import { smsTestMode } from '@/lib/sms';
import { requireSession } from '@/lib/session';
import { sttConfigured } from '@/lib/stt';
import { hasAnthropic } from '@/lib/anthropic';
import { createClient } from '@/lib/supabase/server';
import { TRADE_LABELS } from '@/lib/trades';
import { BillingPanel } from './BillingPanel';
import { DemoDataButton } from './DemoDataButton';
import { InviteForm } from './InviteForm';
import { SettingsForm } from './SettingsForm';

export const metadata: Metadata = { title: 'Settings' };

const AUDIT_LABELS: Record<string, string> = {
  consent_granted: 'Consent given',
  consent_declined: 'Declined texts',
  consent_withdrawn: 'Consent withdrawn',
  opted_out: 'Opted out',
  opted_back_in: 'Opted back in',
  inbound_stop: 'Replied STOP',
  message_sent: 'Text sent',
  message_logged_test_mode: 'Text logged (test mode)',
  message_failed: 'Text failed',
  message_skipped: 'Text skipped',
  message_undelivered: 'Text undelivered',
};

export default async function SettingsPage() {
  const { account, user, email } = await requireSession();
  const supabase = await createClient();
  const isOwner = user.role === 'owner';
  const [{ data: audit }, { data: team }, { data: invites }] = await Promise.all([
    supabase.from('audit_log').select('id, event, created_at, detail, clients(name)').order('created_at', { ascending: false }).limit(25),
    supabase.from('users').select('id, full_name, email, role, trade').order('created_at'),
    isOwner ? supabase.from('invites').select('id, email, trade, accepted_at').is('accepted_at', null) : Promise.resolve({ data: [] }),
  ]);

  return (
    <main className="mx-auto max-w-3xl space-y-6 px-4 pt-6 pb-10 sm:px-6 lg:pt-10">
      <h1 className="text-4xl">Settings</h1>

      <SettingsForm
        isOwner={isOwner}
        initial={{
          full_name: user.full_name ?? '',
          trade: user.trade,
          salon_name: account.name,
          booking_link: account.booking_link ?? '',
          timezone: account.timezone,
          country: account.country,
        }}
      />

      <section className="card p-5">
        <h2 className="text-2xl">Connections</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <Status ok={sttConfigured()} label="Speech-to-text" off="Add OPENAI_API_KEY to transcribe voice notes." />
          <Status ok={hasAnthropic()} label="Card extraction and text drafting (Claude)" off="Add ANTHROPIC_API_KEY. Until then cards start blank and texts use templates." />
          <Status
            ok={!smsTestMode()}
            label="Text messages (Twilio)"
            off="Test mode: texts are logged in the audit log below, not sent. Add your Twilio keys to go live."
          />
        </ul>
      </section>

      {isOwner && (
        <section id="billing" className="card scroll-mt-6 p-5">
          <h2 className="text-2xl">Plan</h2>
          {billingEnabled() ? (
            <BillingPanel
              plan={account.plan}
              status={account.subscription_status}
              active={hasActiveSubscription(account)}
              trialEnds={account.trial_ends_at ? fmtDate(account.trial_ends_at, account.timezone) : null}
              locations={account.locations}
              hasCustomer={Boolean(account.stripe_customer_id)}
              plans={PLANS}
            />
          ) : (
            <p className="mt-2 text-sm text-muted">Billing isn’t configured (no STRIPE_SECRET_KEY), so every feature is unlocked.</p>
          )}
        </section>
      )}

      <section className="card p-5">
        <h2 className="text-2xl">Team</h2>
        <ul className="mt-3 divide-y divide-line">
          {(team ?? []).map((m) => (
            <li key={m.id} className="flex min-h-12 items-center justify-between gap-3 py-2 text-sm">
              <span className="min-w-0 truncate">
                <span className="font-semibold">{m.full_name || m.email}</span>
                {m.id === user.id && <span className="text-muted"> (you)</span>}
              </span>
              <span className="text-muted">
                {TRADE_LABELS[m.trade as keyof typeof TRADE_LABELS]} · {m.role === 'owner' ? 'Owner' : 'Staff'}
              </span>
            </li>
          ))}
          {(invites ?? []).map((i) => (
            <li key={i.id} className="flex min-h-12 items-center justify-between gap-3 py-2 text-sm text-muted">
              <span className="truncate">{i.email}</span>
              <span>Invited</span>
            </li>
          ))}
        </ul>
        {isOwner && <InviteForm defaultTrade={user.trade} />}
      </section>

      {isOwner && (
        <section id="demo" className="card scroll-mt-6 p-5">
          <h2 className="text-2xl">Demo clients</h2>
          <p className="mt-1 text-sm text-muted">Add 3 made-up clients per trade with cards, history and texts, to try things out.</p>
          <DemoDataButton />
        </section>
      )}

      <section className="card p-5">
        <h2 className="text-2xl">Audit log</h2>
        <p className="mt-1 text-sm text-muted">Consent changes and every text sent, most recent first.</p>
        <ul className="mt-3 divide-y divide-line text-sm">
          {(audit ?? []).map((a) => {
            const clientName = (a.clients as unknown as { name: string } | null)?.name;
            const body = (a.detail as { body?: string; reason?: string } | null) ?? {};
            return (
              <li key={a.id} className="py-2.5">
                <div className="flex justify-between gap-3">
                  <span className="font-semibold">
                    {AUDIT_LABELS[a.event] ?? a.event}
                    {clientName ? ` · ${clientName}` : ''}
                  </span>
                  <span className="shrink-0 text-muted">{fmtDateTime(a.created_at, account.timezone)}</span>
                </div>
                {(body.body || body.reason) && <p className="mt-0.5 line-clamp-2 text-muted">{body.body ?? body.reason}</p>}
              </li>
            );
          })}
          {(audit ?? []).length === 0 && <li className="py-3 text-muted">Nothing yet.</li>}
        </ul>
      </section>

      <section className="card flex items-center justify-between gap-3 p-5">
        <p className="min-w-0 truncate text-sm text-muted">Signed in as {email}</p>
        <form action="/auth/signout" method="post">
          <button className="btn btn-secondary btn-sm">Sign out</button>
        </form>
      </section>
    </main>
  );
}

function Status({ ok, label, off }: { ok: boolean; label: string; off: string }) {
  return (
    <li className="flex gap-3">
      <span className={`mt-1.5 size-2.5 shrink-0 rounded-full ${ok ? 'bg-sage' : 'bg-amber'}`} aria-hidden="true" />
      <span>
        <span className="font-semibold">{label}</span>: {ok ? 'connected' : <span className="text-muted">{off}</span>}
      </span>
    </li>
  );
}
