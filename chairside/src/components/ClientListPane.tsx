'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useState } from 'react';
import { fmtRelativeDay } from '@/lib/format';
import { TRADE_LABELS, TRADES, type Trade } from '@/lib/trades';
import type { ClientOverview } from '@/lib/types';
import { Icon } from './Icon';

type Filter = 'all' | Trade;

export function ClientListPane({
  clients,
  timezone,
  banner,
}: {
  clients: ClientOverview[];
  timezone: string;
  banner: React.ReactNode;
}) {
  const pathname = usePathname();
  const [q, setQ] = useState('');
  const [trade, setTrade] = useState<Filter>('all');
  const isIndex = pathname === '/clients';
  const selectedId = pathname.split('/')[2];

  const tradesInUse = useMemo(() => TRADES.filter((t) => clients.some((c) => c.trade === t)), [clients]);
  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return clients.filter(
      (c) =>
        (trade === 'all' || c.trade === trade) &&
        (!needle || c.name.toLowerCase().includes(needle) || (c.phone ?? '').includes(needle) || (c.last_service ?? '').toLowerCase().includes(needle)),
    );
  }, [clients, q, trade]);

  return (
    <aside
      className={`${isIndex ? 'flex' : 'hidden'} w-full flex-col border-line lg:flex lg:w-96 lg:shrink-0 lg:border-r lg:bg-surface/60`}
      aria-label="Clients"
    >
      <div className="space-y-3 px-4 pt-6 pb-3 sm:px-6 lg:px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl">Clients</h1>
          <Link href="/clients/new" className="btn btn-secondary btn-sm">
            <Icon name="plus" className="size-4" />
            New
          </Link>
        </div>
        <div className="lg:hidden">{banner}</div>
        <div className="relative">
          <Icon name="search" className="pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2 text-muted" />
          <input type="search" className="input pl-11" placeholder="Search name, phone, service" value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search clients" />
        </div>
        {tradesInUse.length > 1 && (
          <div className="flex gap-2 overflow-x-auto" role="group" aria-label="Filter by trade">
            {(['all', ...tradesInUse] as Filter[]).map((t) => (
              <button
                key={t}
                onClick={() => setTrade(t)}
                aria-pressed={trade === t}
                className="min-h-11 shrink-0 rounded-full border border-line bg-white px-4 text-sm font-semibold text-muted aria-pressed:border-plum aria-pressed:bg-plum aria-pressed:text-white"
              >
                {t === 'all' ? 'All' : TRADE_LABELS[t]}
              </button>
            ))}
          </div>
        )}
      </div>
      <ul className="flex-1 overflow-y-auto px-2 pb-6 sm:px-4 lg:px-2">
        {shown.map((c) => (
          <li key={c.id}>
            <Link
              href={`/clients/${c.id}`}
              aria-current={selectedId === c.id ? 'page' : undefined}
              className="flex min-h-16 items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-sunk aria-[current=page]:bg-plum-soft"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-sunk font-display text-lg text-plum">
                {c.name.charAt(0)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-semibold">{c.name}</span>
                <span className="block truncate text-sm text-muted">
                  {c.last_visit_at ? `${fmtRelativeDay(c.last_visit_at, timezone)} · ${c.last_service ?? TRADE_LABELS[c.trade]}` : 'No visits yet'}
                </span>
              </span>
              {c.opted_out_at ? (
                <span className="badge bg-rose-soft text-rose">Opted out</span>
              ) : !c.sms_consent ? (
                <span className="badge bg-sunk text-muted">No texts</span>
              ) : c.next_followup_type === 'rebook' ? (
                <span className="badge bg-sage-soft text-sage">Rebook {fmtRelativeDay(c.next_followup_at, timezone)}</span>
              ) : null}
            </Link>
          </li>
        ))}
        {shown.length === 0 && <li className="px-3 py-8 text-center text-muted">No clients match.</li>}
      </ul>
    </aside>
  );
}
