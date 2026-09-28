'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Icon } from './Icon';

export function SendAllButton({ count }: { count: number }) {
  const router = useRouter();
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');
  const [note, setNote] = useState('');

  async function sendAll() {
    if (!confirm(`Send ${count} rebook ${count === 1 ? 'text' : 'texts'} now? Texts are held until 8am if it's quiet hours.`)) return;
    setState('sending');
    const res = await fetch('/api/followups/send-rebooks', { method: 'POST' });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      setNote(json.error ?? 'Something went wrong');
      setState('idle');
      return;
    }
    const s = json.summary as { sent: number; testMode: number; rescheduled: number; skipped: number; failed: number };
    const parts = [
      s.sent && `${s.sent} sent`,
      s.testMode && `${s.testMode} logged (test mode)`,
      s.rescheduled && `${s.rescheduled} held until 8am`,
      s.skipped && `${s.skipped} skipped`,
      s.failed && `${s.failed} failed`,
    ].filter(Boolean);
    setNote(parts.join(' · ') || 'Nothing to send');
    setState('done');
    router.refresh();
  }

  return (
    <div className="flex items-center gap-3">
      {note && <span className="text-sm text-plum">{note}</span>}
      <button className="btn btn-primary btn-sm" onClick={sendAll} disabled={state === 'sending'}>
        <Icon name="send" className="size-4" />
        {state === 'sending' ? 'Sending…' : 'Send all'}
      </button>
    </div>
  );
}
