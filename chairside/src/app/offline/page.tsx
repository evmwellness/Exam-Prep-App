export const metadata = { title: 'Offline' };

export default function Offline() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col justify-center px-6 text-center">
      <h1 className="text-3xl">You&apos;re offline</h1>
      <p className="mt-2 text-muted">Chairside needs a connection to transcribe notes and schedule texts. It&apos;ll pick up where you left off once you&apos;re back online.</p>
    </main>
  );
}
