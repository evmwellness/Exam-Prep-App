'use client';

import { useActionState } from 'react';
import { updateSettingsAction } from '@/app/actions';
import { COUNTRIES, TIMEZONES } from '@/lib/timezones';
import { TRADE_LABELS, TRADES, type Trade } from '@/lib/trades';

export function SettingsForm({
  isOwner,
  initial,
}: {
  isOwner: boolean;
  initial: { full_name: string; trade: Trade; salon_name: string; booking_link: string; timezone: string; country: string };
}) {
  const [state, action, pending] = useActionState(updateSettingsAction, null);
  const timezones = TIMEZONES.some((t) => t.value === initial.timezone)
    ? TIMEZONES
    : [{ value: initial.timezone, label: initial.timezone }, ...TIMEZONES];

  return (
    <form action={action} className="card space-y-5 p-5">
      <h2 className="text-2xl">You and your salon</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="full_name">Your name</label>
          <input id="full_name" name="full_name" className="input" defaultValue={initial.full_name} />
        </div>
        <div>
          <label className="field-label" htmlFor="trade">Your trade</label>
          <select id="trade" name="trade" className="input" defaultValue={initial.trade}>
            {TRADES.map((t) => (
              <option key={t} value={t}>{TRADE_LABELS[t]}</option>
            ))}
          </select>
          <p className="mt-1 text-xs text-muted">Sets the card fields for new clients you add.</p>
        </div>
      </div>

      <fieldset disabled={!isOwner} className="grid gap-4 disabled:opacity-60 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="salon_name">Salon name</label>
          <input id="salon_name" name="salon_name" className="input" defaultValue={initial.salon_name} required />
          <p className="mt-1 text-xs text-muted">Every text starts with this name.</p>
        </div>
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="booking_link">Booking link</label>
          <input id="booking_link" name="booking_link" type="url" className="input" defaultValue={initial.booking_link} placeholder="https://" />
          <p className="mt-1 text-xs text-muted">Included in rebook texts.</p>
        </div>
        <div>
          <label className="field-label" htmlFor="country">Country</label>
          <select id="country" name="country" className="input" defaultValue={initial.country}>
            {COUNTRIES.map((c) => (
              <option key={c.code} value={c.code}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="timezone">Timezone</label>
          <select id="timezone" name="timezone" className="input" defaultValue={initial.timezone}>
            {timezones.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
          <p className="mt-1 text-xs text-muted">Texts only go out 8am–8pm in this timezone.</p>
        </div>
      </fieldset>
      {!isOwner && <p className="text-xs text-muted">Only the salon owner can change salon details.</p>}

      <div className="flex items-center gap-3">
        <button className="btn btn-primary" disabled={pending}>
          {pending ? 'Saving…' : 'Save'}
        </button>
        {state?.ok && <span className="text-sm font-semibold text-sage">Saved</span>}
        {state && !state.ok && <span className="text-sm text-rose">{state.error}</span>}
      </div>
    </form>
  );
}
