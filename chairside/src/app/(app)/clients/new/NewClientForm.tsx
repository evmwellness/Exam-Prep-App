'use client';

import { useActionState, useState } from 'react';
import { createClientAction } from '@/app/actions';
import { TRADE_LABELS, TRADES, type Trade } from '@/lib/trades';
import { CONSENT_METHODS } from '@/lib/consent';

export function NewClientForm({ defaultTrade, country, then }: { defaultTrade: Trade; country: string; then: 'record' | 'profile' }) {
  const [state, action, pending] = useActionState(createClientAction, null);
  const [consent, setConsent] = useState<'' | 'yes' | 'no'>('');

  return (
    <form action={action} className="mt-6 space-y-5">
      <input type="hidden" name="then" value={then} />
      <div>
        <label className="field-label" htmlFor="name">Name</label>
        <input id="name" name="name" required className="input" autoComplete="off" autoCapitalize="words" />
      </div>
      <div>
        <label className="field-label" htmlFor="phone">Mobile</label>
        <input id="phone" name="phone" type="tel" inputMode="tel" className="input" autoComplete="off" placeholder={country === 'AU' ? '0412 345 678' : '(212) 555-0123'} />
      </div>
      <fieldset>
        <legend className="field-label">Trade</legend>
        <div className="grid grid-cols-3 gap-2">
          {TRADES.map((t) => (
            <label key={t} className="flex min-h-11 cursor-pointer items-center justify-center rounded-xl border border-line bg-white px-2 text-sm font-semibold has-checked:border-plum has-checked:bg-plum-soft has-checked:text-plum">
              <input type="radio" name="trade" value={t} defaultChecked={t === defaultTrade} className="sr-only" />
              {TRADE_LABELS[t]}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className="card p-4">
        <legend className="sr-only">Text message consent</legend>
        <p className="font-semibold">Happy to receive aftercare and rebooking texts?</p>
        <p className="mt-0.5 text-sm text-muted">Ask the client. Required. No texts are ever sent without a yes.</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {(['yes', 'no'] as const).map((v) => (
            <label key={v} className="flex min-h-12 cursor-pointer items-center justify-center rounded-xl border border-line bg-white font-semibold has-checked:border-plum has-checked:bg-plum has-checked:text-white">
              <input type="radio" name="consent" value={v} required className="sr-only" checked={consent === v} onChange={() => setConsent(v)} />
              {v === 'yes' ? 'Yes, happy to' : 'No texts'}
            </label>
          ))}
        </div>
        {consent === 'yes' && (
          <div className="mt-3">
            <label className="field-label" htmlFor="consent_method">How did they agree?</label>
            <select id="consent_method" name="consent_method" className="input" defaultValue="in_person_verbal">
              {Object.entries(CONSENT_METHODS).map(([value, label]) => (
                <option key={value} value={value}>{label}</option>
              ))}
            </select>
          </div>
        )}
      </fieldset>

      {state && !state.ok && <p className="text-sm text-rose" role="alert">{state.error}</p>}
      <button className="btn btn-primary w-full" disabled={pending}>
        {pending ? 'Saving…' : then === 'record' ? 'Save and add voice notes' : 'Save client'}
      </button>
    </form>
  );
}
