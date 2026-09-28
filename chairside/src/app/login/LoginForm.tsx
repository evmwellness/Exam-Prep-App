'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/browser';

export function LoginForm({ next, initialError }: { next?: string; initialError?: string }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [error, setError] = useState(initialError ? 'That sign-in link has expired. Please request a new one.' : '');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('sending');
    setError('');
    const redirect = new URL('/auth/callback', window.location.origin);
    if (next && next.startsWith('/')) redirect.searchParams.set('next', next);
    const { error } = await createClient().auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: redirect.toString() },
    });
    if (error) {
      setError(error.message);
      setState('idle');
    } else {
      setState('sent');
    }
  }

  if (state === 'sent') {
    return (
      <div className="card mt-8 p-5">
        <p className="font-semibold">Check your email</p>
        <p className="mt-1 text-muted">
          We sent a sign-in link to <span className="font-semibold text-ink">{email}</span>. Open it on this device.
        </p>
        <button className="btn btn-ghost mt-3 -ml-3" onClick={() => setState('idle')}>
          Use a different email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-3">
      <label className="field-label" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email"
        required
        autoComplete="email"
        inputMode="email"
        className="input"
        placeholder="you@salon.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <p className="text-sm text-rose">{error}</p>}
      <button type="submit" className="btn btn-primary w-full" disabled={state === 'sending'}>
        {state === 'sending' ? 'Sending…' : 'Email me a sign-in link'}
      </button>
    </form>
  );
}
