import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Clients' };

export default function ClientsIndex() {
  return (
    <div className="hidden h-full items-center justify-center p-10 text-center text-muted lg:flex">
      <div>
        <p className="font-display text-2xl text-ink">Pick a client</p>
        <p className="mt-1">Their latest card, visit history and follow-up texts will show here.</p>
      </div>
    </div>
  );
}
