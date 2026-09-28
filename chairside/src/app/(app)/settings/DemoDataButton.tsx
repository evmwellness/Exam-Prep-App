'use client';

import { useState, useTransition } from 'react';
import { loadDemoDataAction } from '@/app/actions';

export function DemoDataButton() {
  const [msg, setMsg] = useState('');
  const [pending, start] = useTransition();
  return (
    <div className="mt-3 flex flex-wrap items-center gap-3">
      <button
        className="btn btn-secondary"
        disabled={pending}
        onClick={() =>
          start(async () => {
            const res = await loadDemoDataAction();
            setMsg(res.ok ? `Added ${res.data} demo clients.` : res.error);
          })
        }
      >
        {pending ? 'Adding…' : 'Load demo clients'}
      </button>
      {msg && <span className="text-sm text-muted">{msg}</span>}
    </div>
  );
}
