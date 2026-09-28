import { rebooksDueThisWeek } from '@/lib/queries';
import { SendAllButton } from './SendAllButton';

export async function RebookBanner({ timezone }: { timezone: string }) {
  const due = await rebooksDueThisWeek(timezone);
  if (due.length === 0) return null;
  const names = due.slice(0, 3).map((d) => d.clients.name.split(' ')[0]);
  const more = due.length - names.length;
  return (
    <div className="card flex flex-wrap items-center justify-between gap-3 border-plum/30 bg-plum-soft px-4 py-3">
      <div className="min-w-0">
        <p className="font-semibold text-plum">
          {due.length} rebook {due.length === 1 ? 'text' : 'texts'} due this week
        </p>
        <p className="truncate text-sm text-plum/80">
          {names.join(', ')}
          {more > 0 ? ` and ${more} more` : ''}
        </p>
      </div>
      <SendAllButton count={due.length} />
    </div>
  );
}
