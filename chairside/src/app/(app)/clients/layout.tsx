import { ClientListPane } from '@/components/ClientListPane';
import { RebookBanner } from '@/components/RebookBanner';
import { listClients } from '@/lib/queries';
import { requireSession } from '@/lib/session';

/** Desktop: navigation | searchable client list | client detail. Mobile: list or detail. */
export default async function ClientsLayout({ children }: { children: React.ReactNode }) {
  const { account } = await requireSession();
  const clients = await listClients();
  const banner = <RebookBanner timezone={account.timezone} />;

  return (
    <div className="flex min-h-dvh flex-col lg:h-dvh">
      <div className="hidden px-6 pt-4 lg:block lg:empty:hidden">{banner}</div>
      <div className="flex min-h-0 flex-1">
        <ClientListPane clients={clients} timezone={account.timezone} banner={banner} />
        <section className="min-w-0 flex-1 lg:overflow-y-auto">{children}</section>
      </div>
    </div>
  );
}
