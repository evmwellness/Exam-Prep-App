import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { requireSession } from '@/lib/session';
import { NewClientForm } from './NewClientForm';

export const metadata: Metadata = { title: 'New client' };

export default async function NewClientPage({ searchParams }: { searchParams: Promise<{ then?: string }> }) {
  const { user, account } = await requireSession();
  const { then } = await searchParams;
  return (
    <main className="mx-auto max-w-xl px-4 pt-4 pb-10 sm:px-6 lg:pt-8">
      <Link href="/clients" className="btn btn-ghost -ml-3 lg:hidden">
        <Icon name="back" /> Clients
      </Link>
      <h1 className="mt-2 text-4xl">New client</h1>
      <NewClientForm defaultTrade={user.trade} country={account.country} then={then === 'record' ? 'record' : 'profile'} />
    </main>
  );
}
