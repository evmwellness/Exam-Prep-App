import type { Metadata } from 'next';
import { LoginForm } from './LoginForm';

export const metadata: Metadata = { title: 'Sign in' };

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ next?: string; error?: string }> }) {
  const { next, error } = await searchParams;
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-center px-6 py-12">
      <p className="mb-2 text-sm font-semibold tracking-widest text-plum uppercase">Chairside</p>
      <h1 className="text-4xl leading-tight">Talk for 20 seconds. We&apos;ll write the card and the texts.</h1>
      <p className="mt-3 text-muted">Sign in with your email. We&apos;ll send you a magic link, no password needed.</p>
      <LoginForm next={next} initialError={error} />
    </main>
  );
}
