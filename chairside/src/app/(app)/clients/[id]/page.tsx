import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FollowupStatusBadge } from '@/components/FollowupStatusBadge';
import { Icon } from '@/components/Icon';
import { normalizeCard } from '@/lib/card';
import { consentMethodLabel } from '@/lib/consent';
import { FOLLOWUP_LABELS } from '@/lib/followups/compliance';
import { fmtDate, fmtDateTime } from '@/lib/format';
import { formatPhone } from '@/lib/phone';
import { requireSession } from '@/lib/session';
import { createClient } from '@/lib/supabase/server';
import { TRADE_FIELDS, TRADE_LABELS } from '@/lib/trades';
import type { Client, Followup, Visit } from '@/lib/types';
import { ConsentControl } from './ConsentControl';

export const metadata: Metadata = { title: 'Client' };

export default async function ClientPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { account } = await requireSession();
  const supabase = await createClient();

  const [{ data: client }, { data: visits }, { data: followups }] = await Promise.all([
    supabase.from('clients').select('*').eq('id', id).maybeSingle(),
    supabase.from('visits').select('*, users(full_name)').eq('client_id', id).order('date', { ascending: false }),
    supabase.from('followups').select('*').eq('client_id', id).order('send_at', { ascending: false, nullsFirst: false }).limit(12),
  ]);
  if (!client) notFound();
  const c = client as Client;
  const history = (visits ?? []) as (Visit & { users: { full_name: string | null } | null })[];
  const latest = history[0];
  const card = latest ? normalizeCard(latest.card_json, latest.trade) : null;
  const tz = account.timezone;

  let audioUrl: string | null = null;
  if (latest?.audio_path) {
    const { data } = await supabase.storage.from('audio').createSignedUrl(latest.audio_path, 60 * 30);
    audioUrl = data?.signedUrl ?? null;
  }

  return (
    <main className="mx-auto max-w-4xl px-4 pt-4 pb-10 sm:px-6 lg:px-8 lg:pt-8">
      <Link href="/clients" className="btn btn-ghost -ml-3 lg:hidden">
        <Icon name="back" /> Clients
      </Link>

      <header className="mt-2 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl">{c.name}</h1>
          <p className="mt-1 text-muted">
            {TRADE_LABELS[c.trade]}
            {c.phone ? ` · ${formatPhone(c.phone)}` : ' · No mobile'}
            {history.length ? ` · ${history.length} ${history.length === 1 ? 'visit' : 'visits'}` : ''}
          </p>
        </div>
        <Link href={`/clients/${c.id}/record`} className="btn btn-primary">
          <Icon name="mic" /> Add voice notes
        </Link>
      </header>

      <ConsentControl
        clientId={c.id}
        consent={c.sms_consent}
        optedOut={Boolean(c.opted_out_at)}
        hasPhone={Boolean(c.phone)}
        detail={
          c.opted_out_at
            ? `Replied STOP on ${fmtDate(c.opted_out_at, tz)}`
            : c.sms_consent
              ? `Agreed ${fmtDate(c.consent_at, tz)} · ${consentMethodLabel(c.consent_method)}`
              : 'Said no to texts'
        }
      />

      <div className="mt-6 grid gap-6 xl:grid-cols-5">
        <div className="space-y-6 xl:col-span-3">
          {latest && card ? (
            <section className="card p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-2xl">Latest record</h2>
                <Link href={`/clients/${c.id}/visits/${latest.id}`} className="btn btn-ghost btn-sm -mr-3">
                  Open card
                </Link>
              </div>
              <p className="text-sm text-muted">
                {fmtDate(latest.date, tz, 'EEE d LLL yyyy')}
                {card.service ? ` · ${card.service}` : ''}
              </p>
              <dl className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {TRADE_FIELDS[latest.trade].map((f) => (
                  <div key={f.key}>
                    <dt className="field-label">{f.label}</dt>
                    <dd className={card.fields[f.key] ? 'font-semibold' : 'text-muted'}>{card.fields[f.key] || '—'}</dd>
                  </div>
                ))}
                <div>
                  <dt className="field-label">Rebook</dt>
                  <dd className="font-semibold">{card.rebook_weeks ? `${card.rebook_weeks} weeks` : '—'}</dd>
                </div>
                {card.sensitivities && (
                  <div className="sm:col-span-2">
                    <dt className="field-label">Sensitivities</dt>
                    <dd className="font-semibold text-rose">{card.sensitivities}</dd>
                  </div>
                )}
              </dl>
              {card.next_time.length > 0 && (
                <div className="mt-4">
                  <p className="field-label">Next time</p>
                  <ul className="list-disc space-y-0.5 pl-5">
                    {card.next_time.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </div>
              )}
              {card.remember.length > 0 && (
                <div className="mt-4">
                  <p className="field-label">Remember</p>
                  <div className="flex flex-wrap gap-2">
                    {card.remember.map((r) => (
                      <span key={r} className="chip">{r}</span>
                    ))}
                  </div>
                </div>
              )}
            </section>
          ) : (
            <section className="card p-6 text-center">
              <p className="font-display text-2xl">No visits yet</p>
              <p className="mt-1 text-muted">After their appointment, tap Add voice notes and talk for 10–30 seconds.</p>
            </section>
          )}

          {history.length > 0 && (
            <section className="card overflow-hidden">
              <h2 className="px-5 pt-5 text-2xl">Visit history</h2>
              <div className="overflow-x-auto">
                <table className="mt-3 w-full text-left text-sm">
                  <thead className="border-b border-line text-xs tracking-wide text-muted uppercase">
                    <tr>
                      <th className="px-5 py-2 font-semibold">Date</th>
                      <th className="px-3 py-2 font-semibold">Service</th>
                      <th className="hidden px-3 py-2 font-semibold sm:table-cell">Rebook</th>
                      <th className="hidden px-3 py-2 font-semibold md:table-cell">By</th>
                      <th className="px-5 py-2" />
                    </tr>
                  </thead>
                  <tbody>
                    {history.map((v) => (
                      <tr key={v.id} className="border-b border-line last:border-0">
                        <td className="px-5 py-3 whitespace-nowrap">{fmtDate(v.date, tz)}</td>
                        <td className="px-3 py-3">{v.service || '—'}</td>
                        <td className="hidden px-3 py-3 sm:table-cell">{v.rebook_weeks ? `${v.rebook_weeks} wk` : '—'}</td>
                        <td className="hidden px-3 py-3 md:table-cell">{v.users?.full_name ?? '—'}</td>
                        <td className="px-5 py-1 text-right">
                          <Link href={`/clients/${c.id}/visits/${v.id}`} className="inline-flex min-h-11 items-center font-semibold text-plum">
                            Card
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>

        <div className="space-y-6 xl:col-span-2">
          <section className="card p-5">
            <h2 className="text-2xl">Follow-ups</h2>
            {(followups ?? []).length === 0 ? (
              <p className="mt-2 text-sm text-muted">No texts yet.</p>
            ) : (
              <ul className="mt-3 space-y-3">
                {(followups as Followup[]).map((f) => (
                  <li key={f.id} className="rounded-xl bg-sunk/60 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold">{FOLLOWUP_LABELS[f.type]}</span>
                      <FollowupStatusBadge status={f.status} />
                    </div>
                    <p className="mt-0.5 text-xs text-muted">
                      {f.status === 'sent' ? `Sent ${fmtDateTime(f.sent_at, tz)}` : f.send_at ? fmtDateTime(f.send_at, tz) : 'Not scheduled'}
                      {f.error && f.status !== 'sent' ? ` · ${f.error}` : ''}
                    </p>
                    <p className="mt-1.5 line-clamp-3 text-sm">{f.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {latest?.transcript && (
            <section className="card p-5">
              <h2 className="text-2xl">Original transcript</h2>
              <p className="text-xs text-muted">{fmtDate(latest.date, tz)}</p>
              <p className="mt-2 text-sm leading-relaxed whitespace-pre-wrap">{latest.transcript}</p>
              {audioUrl && <audio controls preload="none" src={audioUrl} className="mt-3 w-full" />}
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
