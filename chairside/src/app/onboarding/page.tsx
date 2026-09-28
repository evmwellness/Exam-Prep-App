import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/session';
import { createClient } from '@/lib/supabase/server';
import { OnboardingForm } from './OnboardingForm';

export const metadata: Metadata = { title: 'Set up' };

export default async function OnboardingPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect('/login');
  if (await getSession()) redirect('/today');

  const { data: invite } = await supabase.rpc('pending_invite');

  return (
    <main className="mx-auto max-w-lg px-6 py-12">
      <p className="mb-2 text-sm font-semibold tracking-widest text-plum uppercase">Welcome</p>
      <h1 className="text-4xl">{invite ? `Join ${invite}` : 'Set up your chair'}</h1>
      <p className="mt-2 text-muted">
        {invite
          ? 'You’ve been invited to a salon. Add your name and trade to get started.'
          : 'A few details so your client cards and texts sound like you.'}
      </p>
      <OnboardingForm invited={Boolean(invite)} />
    </main>
  );
}
