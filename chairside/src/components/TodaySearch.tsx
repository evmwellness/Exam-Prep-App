'use client';

import { useRef, useState } from 'react';
import { Icon } from './Icon';

/** Filters the client rows rendered inside it by name, without a round trip. */
export function TodaySearch({ children }: { children: React.ReactNode }) {
  const [q, setQ] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  function filter(value: string) {
    setQ(value);
    const needle = value.trim().toLowerCase();
    ref.current?.querySelectorAll('li').forEach((li) => {
      li.hidden = Boolean(needle) && !li.textContent?.toLowerCase().includes(needle);
    });
    ref.current?.querySelectorAll('section').forEach((s) => {
      s.hidden = Boolean(needle) && !s.querySelector('li:not([hidden])');
    });
  }

  return (
    <>
      <div className="relative mt-6">
        <Icon name="search" className="pointer-events-none absolute top-1/2 left-3.5 size-5 -translate-y-1/2 text-muted" />
        <input type="search" className="input pl-11" placeholder="Find a client" value={q} onChange={(e) => filter(e.target.value)} aria-label="Find a client" />
      </div>
      <div ref={ref}>{children}</div>
    </>
  );
}
