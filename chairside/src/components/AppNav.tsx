'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon, type IconName } from './Icon';

const ITEMS: { href: string; label: string; icon: IconName }[] = [
  { href: '/today', label: 'Today', icon: 'today' },
  { href: '/clients', label: 'Clients', icon: 'clients' },
  { href: '/settings', label: 'Settings', icon: 'settings' },
];

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SideNav({ salonName, userName }: { salonName: string; userName: string }) {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 hidden h-dvh w-60 shrink-0 flex-col border-r border-line bg-surface px-4 py-6 lg:flex" aria-label="Main">
      <Link href="/today" className="px-3">
        <span className="block font-display text-2xl text-plum">Chairside</span>
        <span className="mt-0.5 block truncate text-sm text-muted">{salonName}</span>
      </Link>
      <ul className="mt-8 space-y-1">
        {ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
              className="flex min-h-11 items-center gap-3 rounded-xl px-3 font-semibold text-muted hover:bg-sunk aria-[current=page]:bg-plum-soft aria-[current=page]:text-plum"
            >
              <Icon name={item.icon} />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-auto px-3 text-sm text-muted">
        <p className="truncate">{userName}</p>
        <form action="/auth/signout" method="post">
          <button className="mt-1 min-h-11 font-semibold text-plum">Sign out</button>
        </form>
      </div>
    </nav>
  );
}

export function BottomNav() {
  const pathname = usePathname();
  // Hide on the record screen so the mic button owns the bottom of the screen.
  if (pathname.endsWith('/record')) return null;
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden"
      aria-label="Main"
    >
      <ul className="grid grid-cols-3">
        {ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive(pathname, item.href) ? 'page' : undefined}
              className="flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-semibold text-muted aria-[current=page]:text-plum"
            >
              <Icon name={item.icon} className="size-6" />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
