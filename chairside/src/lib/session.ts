import 'server-only';
import { redirect } from 'next/navigation';
import { cache } from 'react';
import { createClient } from './supabase/server';
import type { Account, AppUser } from './types';

export interface Session {
  userId: string;
  email: string | null;
  user: AppUser;
  account: Account;
}

/** The signed-in user with their account, or null if not signed in / not onboarded. */
export const getSession = cache(async (): Promise<Session | null> => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;
  const { data: appUser } = await supabase.from('users').select('*').eq('id', user.id).maybeSingle();
  if (!appUser) return null;
  const { data: account } = await supabase.from('accounts').select('*').eq('id', appUser.account_id).single();
  if (!account) return null;
  return { userId: user.id, email: user.email ?? null, user: appUser as AppUser, account: account as Account };
});

/** For app pages: redirect to login or onboarding when needed. */
export async function requireSession(): Promise<Session> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect('/login');
  const session = await getSession();
  if (!session) redirect('/onboarding');
  return session;
}
