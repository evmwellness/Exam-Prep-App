'use client';

import { useActionState } from 'react';
import { inviteStaffAction } from '@/app/actions';
import { TRADE_LABELS, TRADES, type Trade } from '@/lib/trades';

export function InviteForm({ defaultTrade }: { defaultTrade: Trade }) {
  const [state, action, pending] = useActionState(inviteStaffAction, null);
  return (
    <form action={action} className="mt-4 flex flex-col gap-2 sm:flex-row">
      <input name="email" type="email" required placeholder="Invite a team member by email" className="input" aria-label="Team member email" />
      <select name="trade" className="input sm:w-40" defaultValue={defaultTrade} aria-label="Their trade">
        {TRADES.map((t) => (
          <option key={t} value={t}>{TRADE_LABELS[t]}</option>
        ))}
      </select>
      <button className="btn btn-secondary shrink-0" disabled={pending}>
        {pending ? 'Inviting…' : 'Invite'}
      </button>
      {state && !state.ok && <p className="text-sm text-rose sm:hidden">{state.error}</p>}
      {state && !state.ok && <p className="hidden text-sm text-rose sm:block">{state.error}</p>}
    </form>
  );
}
