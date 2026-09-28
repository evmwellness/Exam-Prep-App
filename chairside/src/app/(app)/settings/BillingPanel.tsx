'use client';

import { useState } from 'react';

interface Plan {
  name: string;
  price: string;
  per: string;
  blurb: string;
}

export function BillingPanel({
  plan,
  status,
  active,
  trialEnds,
  locations,
  hasCustomer,
  plans,
}: {
  plan: string;
  status: string | null;
  active: boolean;
  trialEnds: string | null;
  locations: number;
  hasCustomer: boolean;
  plans: Record<'solo' | 'salon', Plan>;
}) {
  const [busy, setBusy] = useState('');
  const [error, setError] = useState('');
  const [count, setCount] = useState(Math.max(1, locations));

  async function go(path: string, body?: unknown) {
    setBusy(path);
    setError('');
    const res = await fetch(path, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body ?? {}) });
    const json = await res.json().catch(() => ({}));
    if (res.ok && json.url) window.location.href = json.url;
    else {
      setError(json.error ?? 'Something went wrong');
      setBusy('');
    }
  }

  if (active) {
    return (
      <div className="mt-2">
        <p>
          <span className="font-semibold">{plan === 'salon' ? `Salon · ${locations} ${locations === 1 ? 'location' : 'locations'}` : 'Solo'}</span>
          <span className="text-muted"> · {status === 'trialing' ? `free trial until ${trialEnds}` : 'active'}</span>
        </p>
        <button className="btn btn-secondary mt-3" disabled={Boolean(busy)} onClick={() => go('/api/stripe/portal')}>
          Manage billing
        </button>
        {error && <p className="mt-2 text-sm text-rose">{error}</p>}
      </div>
    );
  }

  return (
    <div className="mt-2">
      <p className="text-sm text-muted">
        {status ? `Your subscription is ${status.replace('_', ' ')}.` : '14 days free, then billed monthly. Cancel any time.'}
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {(['solo', 'salon'] as const).map((id) => (
          <div key={id} className="rounded-xl border border-line p-4">
            <p className="font-display text-2xl">{plans[id].name}</p>
            <p className="mt-1">
              <span className="text-xl font-bold">{plans[id].price}</span> <span className="text-sm text-muted">/ {plans[id].per}</span>
            </p>
            <p className="mt-1 text-sm text-muted">{plans[id].blurb}</p>
            {id === 'salon' && (
              <label className="mt-3 flex items-center gap-2 text-sm">
                Locations
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={count}
                  onChange={(e) => setCount(Math.max(1, Math.min(50, Number(e.target.value) || 1)))}
                  className="input w-20"
                />
              </label>
            )}
            <button className="btn btn-primary mt-3 w-full" disabled={Boolean(busy)} onClick={() => go('/api/stripe/checkout', { plan: id, locations: count })}>
              {busy === '/api/stripe/checkout' ? 'Opening…' : 'Start 14-day free trial'}
            </button>
          </div>
        ))}
      </div>
      {hasCustomer && (
        <button className="btn btn-ghost mt-2 -ml-3" disabled={Boolean(busy)} onClick={() => go('/api/stripe/portal')}>
          Billing history
        </button>
      )}
      {error && <p className="mt-2 text-sm text-rose">{error}</p>}
    </div>
  );
}
