import Link from 'next/link';
import { BottomNav, SideNav } from '@/components/AppNav';
import { billingEnabled, hasAccess } from '@/lib/billing';
import { requireSession } from '@/lib/session';

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const session = await requireSession();
  const locked = !hasAccess(session.account);

  return (
    <div className="flex min-h-dvh">
      <SideNav salonName={session.account.name} userName={session.user.full_name || session.email || ''} />
      <div className="min-w-0 flex-1 pb-24 lg:pb-0">
        {locked && billingEnabled() && (
          <div className="bg-plum px-4 py-3 text-sm text-white">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2">
              <span>Start your 14-day free trial to record voice notes and schedule texts.</span>
              <Link href="/settings#billing" className="btn btn-sm bg-white text-plum">Choose a plan</Link>
            </div>
          </div>
        )}
        {children}
      </div>
      <BottomNav />
    </div>
  );
}
