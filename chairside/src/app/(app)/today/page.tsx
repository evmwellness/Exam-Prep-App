import type { Metadata } from 'next';
import Link from 'next/link';
import { DateTime } from 'luxon';
import { ClientRow } from '@/components/ClientRow';
import { Icon } from '@/components/Icon';
import { RebookBanner } from '@/components/RebookBanner';
import { TodaySearch } from '@/components/TodaySearch';
import { listClients } from '@/lib/queries';
import { requireSession } from '@/lib/session';

export const metadata: Metadata = { title: 'Today' };

export default async function TodayPage() {
  const { account, user } = await requireSession();
  const clients = await listClients();
  const today = DateTime.now().setZone(account.timezone);
  const isToday = (iso: string | null) => Boolean(iso) && DateTime.fromISO(iso!, { zone: account.timezone }).hasSame(today, 'day');

  const seenToday = clients.filter((c) => isToday(c.last_visit_at));
  const others = clients.filter((c) => !isToday(c.last_visit_at));
  const hello = today.hour < 12 ? 'Good morning' : today.hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <main className="mx-auto max-w-3xl px-4 pt-6 pb-8 sm:px-6 lg:pt-10">
      <header className="flex items-end justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-muted">{today.toFormat('EEEE d LLLL')}</p>
          <h1 className="text-4xl">
            {hello}
            {user.full_name ? `, ${user.full_name.split(' ')[0]}` : ''}
          </h1>
        </div>
        <Link href="/clients/new?then=record" className="btn btn-secondary btn-sm shrink-0">
          <Icon name="plus" className="size-4" />
          New client
        </Link>
      </header>

      <div className="mt-6">
        <RebookBanner timezone={account.timezone} />
      </div>

      {clients.length === 0 ? (
        <div className="card mt-6 p-6 text-center">
          <p className="font-display text-2xl">No clients yet</p>
          <p className="mt-1 text-muted">Add your first client, then tap the mic after they leave.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <Link href="/clients/new?then=record" className="btn btn-primary">Add a client</Link>
            <Link href="/settings#demo" className="btn btn-secondary">Load demo clients</Link>
          </div>
        </div>
      ) : (
        <TodaySearch>
          {seenToday.length > 0 && (
            <section className="mt-6">
              <h2 className="mb-3 text-xl">Seen today</h2>
              <ul className="space-y-3">
                {seenToday.map((c) => (
                  <ClientRow key={c.id} client={c} timezone={account.timezone} />
                ))}
              </ul>
            </section>
          )}
          <section className="mt-6">
            <h2 className="mb-3 text-xl">{seenToday.length ? 'Everyone else' : 'Your clients'}</h2>
            <ul className="space-y-3">
              {others.map((c) => (
                <ClientRow key={c.id} client={c} timezone={account.timezone} />
              ))}
            </ul>
          </section>
        </TodaySearch>
      )}
    </main>
  );
}
