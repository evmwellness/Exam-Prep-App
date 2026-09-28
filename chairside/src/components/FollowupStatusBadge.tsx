import type { FollowupStatus } from '@/lib/types';

const STYLES: Record<FollowupStatus, string> = {
  draft: 'bg-sunk text-muted',
  scheduled: 'bg-amber-soft text-amber',
  sent: 'bg-sage-soft text-sage',
  skipped: 'bg-sunk text-muted',
  failed: 'bg-rose-soft text-rose',
};

const LABELS: Record<FollowupStatus, string> = {
  draft: 'Draft',
  scheduled: 'Scheduled',
  sent: 'Sent',
  skipped: 'Off',
  failed: 'Failed',
};

export function FollowupStatusBadge({ status }: { status: FollowupStatus }) {
  return <span className={`badge ${STYLES[status]}`}>{LABELS[status]}</span>;
}
