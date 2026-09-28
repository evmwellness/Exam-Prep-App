'use client';

import { useState, useTransition } from 'react';
import { setConsentAction } from '@/app/actions';
import { CONSENT_METHODS } from '@/lib/consent';

export function ConsentControl({
  clientId,
  consent,
  optedOut,
  hasPhone,
  detail,
}: {
  clientId: string;
  consent: boolean;
  optedOut: boolean;
  hasPhone: boolean;
  detail: string;
}) {
  const [editing, setEditing] = useState(false);
  const [method, setMethod] = useState('in_person_verbal');
  const [error, setError] = useState('');
  const [pending, start] = useTransition();
  const canText = consent && !optedOut && hasPhone;

  function save(value: boolean) {
    setError('');
    start(async () => {
      const res = await setConsentAction(clientId, value, method);
      if (!res.ok) setError(res.error);
      else setEditing(false);
    });
  }

  return (
    <div className={`card mt-4 flex flex-wrap items-center justify-between gap-3 px-4 py-3 ${canText ? '' : 'bg-sunk/60'}`}>
      <div>
        <p className="font-semibold">{canText ? 'Texts on' : optedOut ? 'Opted out of texts' : consent && !hasPhone ? 'No mobile number' : 'No texts'}</p>
        <p className="text-sm text-muted">{detail}</p>
      </div>
      {!editing ? (
        <button className="btn btn-ghost btn-sm" onClick={() => setEditing(true)}>
          Change
        </button>
      ) : (
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <select className="input sm:w-56" value={method} onChange={(e) => setMethod(e.target.value)} aria-label="How did they agree?">
            {Object.entries(CONSENT_METHODS).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          <button className="btn btn-primary btn-sm" disabled={pending} onClick={() => save(true)}>
            They said yes
          </button>
          <button className="btn btn-secondary btn-sm" disabled={pending} onClick={() => save(false)}>
            No texts
          </button>
        </div>
      )}
      {optedOut && editing && (
        <p className="w-full text-xs text-muted">This client replied STOP. Only record a new yes if they have clearly asked to receive texts again.</p>
      )}
      {error && <p className="w-full text-sm text-rose">{error}</p>}
    </div>
  );
}
