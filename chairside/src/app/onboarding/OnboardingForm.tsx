'use client';

import { useActionState, useState } from 'react';
import { createAccountAction } from '@/app/actions';
import { COUNTRIES, DEFAULT_TZ_BY_COUNTRY, TIMEZONES } from '@/lib/timezones';
import { TRADE_LABELS, TRADES } from '@/lib/trades';

export function OnboardingForm({ invited }: { invited: boolean }) {
  const [state, action, pending] = useActionState(createAccountAction, null);
  const [country, setCountry] = useState('US');
  const [timezone, setTimezone] = useState(() => {
    const guess = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return TIMEZONES.some((t) => t.value === guess) ? guess : 'America/New_York';
  });

  return (
    <form action={action} className="mt-8 space-y-5">
      <div>
        <label className="field-label" htmlFor="full_name">Your name</label>
        <input id="full_name" name="full_name" className="input" autoComplete="name" />
      </div>
      <fieldset>
        <legend className="field-label">Your trade</legend>
        <div className="grid grid-cols-3 gap-2">
          {TRADES.map((t, i) => (
            <label key={t} className="flex min-h-12 cursor-pointer items-center justify-center rounded-xl border border-line bg-white px-2 text-center text-sm font-semibold has-checked:border-plum has-checked:bg-plum-soft has-checked:text-plum">
              <input type="radio" name="trade" value={t} defaultChecked={i === 0} className="sr-only" />
              {TRADE_LABELS[t]}
            </label>
          ))}
        </div>
      </fieldset>

      {!invited && (
        <>
          <div>
            <label className="field-label" htmlFor="salon_name">Salon or business name</label>
            <input id="salon_name" name="salon_name" required className="input" placeholder="e.g. Maison Hair" />
            <p className="mt-1 text-xs text-muted">Every text starts with this name.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="field-label" htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                className="input"
                value={country}
                onChange={(e) => {
                  setCountry(e.target.value);
                  setTimezone(DEFAULT_TZ_BY_COUNTRY[e.target.value] ?? timezone);
                }}
              >
                {COUNTRIES.map((c) => (
                  <option key={c.code} value={c.code}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="field-label" htmlFor="timezone">Timezone</label>
              <select id="timezone" name="timezone" className="input" value={timezone} onChange={(e) => setTimezone(e.target.value)}>
                {TIMEZONES.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="field-label" htmlFor="booking_link">Online booking link</label>
            <input id="booking_link" name="booking_link" type="url" className="input" placeholder="https://" />
            <p className="mt-1 text-xs text-muted">Added to rebook texts. You can add it later.</p>
          </div>
          <label className="flex min-h-11 items-center gap-3 text-sm">
            <input type="checkbox" name="demo" className="size-5 accent-plum" />
            Add 9 demo clients so I can look around
          </label>
        </>
      )}
      {invited && <input type="hidden" name="salon_name" value="(invited)" />}

      {state && !state.ok && <p className="text-sm text-rose">{state.error}</p>}
      <button className="btn btn-primary w-full" disabled={pending}>
        {pending ? 'Setting up…' : 'Continue'}
      </button>
    </form>
  );
}
