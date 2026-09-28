import Link from 'next/link';
import { fmtRelativeDay } from '@/lib/format';
import { TRADE_LABELS } from '@/lib/trades';
import type { ClientOverview } from '@/lib/types';
import { Icon } from './Icon';

export function ClientRow({ client, timezone }: { client: ClientOverview; timezone: string }) {
  return (
    <li className="card flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
      <Link href={`/clients/${client.id}`} className="min-w-0 flex-1">
        <p className="truncate text-lg font-semibold">{client.name}</p>
        <p className="truncate text-sm text-muted">
          {client.last_visit_at ? (
            <>
              {fmtRelativeDay(client.last_visit_at, timezone)}
              {client.last_service ? ` · ${client.last_service}` : ''}
            </>
          ) : (
            <>New client · {TRADE_LABELS[client.trade]}</>
          )}
        </p>
      </Link>
      <div className="flex gap-2">
        <Link href={`/clients/${client.id}/record`} className="btn btn-primary btn-sm flex-1 sm:flex-none">
          <Icon name="mic" className="size-4" />
          Add voice notes
        </Link>
        {client.last_visit_id && (
          <Link href={`/clients/${client.id}/visits/${client.last_visit_id}`} className="btn btn-secondary btn-sm flex-1 sm:flex-none">
            View card
          </Link>
        )}
      </div>
    </li>
  );
}
