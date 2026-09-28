'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState, useTransition } from 'react';
import { scheduleFollowupsAction, unscheduleFollowupAction } from '@/app/actions';
import { FollowupStatusBadge } from '@/components/FollowupStatusBadge';
import { Icon } from '@/components/Icon';
import { FOLLOWUP_LABELS, findOfferLanguage, mustBeOfferFree } from '@/lib/followups/compliance';
import { fmtDateTime, fromLocalInput, toLocalInput } from '@/lib/format';
import type { Followup } from '@/lib/types';

const WHEN_HINT = {
  thank_you: 'Today',
  check_in: 'Day 2–3',
  rebook: '1 week before rebook date',
} as const;

function segments(text: string) {
  // GSM-7 texts are 160 chars (153 per segment when split); anything else is UCS-2.
  const gsm = /^[\x20-\x7E\n\r£¥èéùìòÇØøÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ¡ÄÖÑÜ§¿äöñüà€]*$/.test(text);
  const single = gsm ? 160 : 70;
  const multi = gsm ? 153 : 67;
  return text.length <= single ? 1 : Math.ceil(text.length / multi);
}

export function FollowupsPanel({
  visitId,
  initial,
  timezone,
  blockedReason,
  testMode,
  hasBookingLink,
}: {
  visitId: string;
  initial: Followup[];
  timezone: string;
  blockedReason: string | null;
  testMode: boolean;
  hasBookingLink: boolean;
}) {
  const router = useRouter();
  const [items, setItems] = useState<Followup[]>(initial);
  const [drafting, setDrafting] = useState(false);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [pending, start] = useTransition();
  const [cardChanged, setCardChanged] = useState(false);
  const autoDrafted = useRef(false);

  const draft = useCallback(async () => {
    setDrafting(true);
    setError('');
    const res = await fetch(`/api/visits/${visitId}/drafts`, { method: 'POST' });
    const json = await res.json().catch(() => ({}));
    setDrafting(false);
    if (!res.ok) {
      setError(json.error ?? 'Couldn’t draft the texts');
      return;
    }
    setItems(json.followups);
    setCardChanged(false);
    if (json.source === 'template') setNotice('Drafted from templates (add ANTHROPIC_API_KEY for personalised texts).');
  }, [visitId]);

  // Draft the three texts automatically the first time the card is opened.
  useEffect(() => {
    if (!blockedReason && initial.length === 0 && !autoDrafted.current) {
      autoDrafted.current = true;
      void draft();
    }
  }, [blockedReason, initial.length, draft]);

  useEffect(() => {
    const onSaved = () => setCardChanged(true);
    window.addEventListener('card-saved', onSaved);
    return () => window.removeEventListener('card-saved', onSaved);
  }, []);

  const editable = (f: Followup) => f.status === 'draft' || f.status === 'skipped' || f.status === 'failed';
  const patch = (id: string, p: Partial<Followup>) => setItems((xs) => xs.map((x) => (x.id === id ? { ...x, ...p } : x)));

  const toSchedule = items.filter(editable);
  const enabledCount = toSchedule.filter((f) => f.enabled).length;
  const offerProblem = toSchedule.find((f) => f.enabled && mustBeOfferFree(f.type) && findOfferLanguage(f.body));

  function schedule() {
    setError('');
    setNotice('');
    start(async () => {
      const res = await scheduleFollowupsAction(
        visitId,
        toSchedule.map((f) => ({ id: f.id, type: f.type, body: f.body, enabled: f.enabled, send_at: f.send_at })),
      );
      if (!res.ok) {
        setError(res.error);
        return;
      }
      const updated = new Map((res.data ?? []).map((f) => [f.id, f]));
      setItems((xs) => xs.map((x) => updated.get(x.id) ?? x));
      setNotice(testMode ? 'Scheduled. Test mode is on, so texts are logged, not sent.' : 'Scheduled.');
      router.refresh();
    });
  }

  function unschedule(id: string) {
    start(async () => {
      const res = await unscheduleFollowupAction(id);
      if (!res.ok) setError(res.error);
      else patch(id, { status: 'draft' });
    });
  }

  return (
    <section className="card p-5 lg:sticky lg:top-6" aria-labelledby="followups-heading">
      <div className="flex items-center justify-between gap-2">
        <h2 id="followups-heading" className="text-2xl">
          Follow-up texts
        </h2>
        {!blockedReason && items.length > 0 && (
          <button className="btn btn-ghost btn-sm -mr-3" onClick={draft} disabled={drafting || pending}>
            <Icon name="sparkle" className="size-4" />
            {drafting ? 'Drafting…' : 'Redraft'}
          </button>
        )}
      </div>
      {testMode && !blockedReason && (
        <p className="mt-1 text-xs font-semibold text-amber">Test mode: texts are logged instead of sent until Twilio is connected.</p>
      )}

      {blockedReason ? (
        <p className="mt-3 rounded-xl bg-sunk p-3 text-sm">{blockedReason}</p>
      ) : drafting && items.length === 0 ? (
        <div className="mt-4 space-y-3" aria-busy="true">
          <p className="text-sm text-muted">Writing three texts from your notes…</p>
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-28 animate-pulse rounded-xl bg-sunk" />
          ))}
        </div>
      ) : (
        <>
          {cardChanged && toSchedule.length > 0 && (
            <p className="mt-3 rounded-xl bg-amber-soft p-3 text-sm text-amber">
              You changed the card. <button className="font-semibold underline" onClick={draft}>Redraft texts</button> to match?
            </p>
          )}
          <ul className="mt-4 space-y-4">
            {items.map((f) => {
              const canEdit = editable(f);
              const offer = mustBeOfferFree(f.type) ? findOfferLanguage(f.body) : null;
              return (
                <li key={f.id} className={`rounded-xl border p-3 ${f.enabled || !canEdit ? 'border-line bg-white' : 'border-dashed border-line bg-sunk/40'}`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-semibold">{FOLLOWUP_LABELS[f.type]}</p>
                      <p className="text-xs text-muted">
                        {f.status === 'sent'
                          ? `Sent ${fmtDateTime(f.sent_at, timezone)}`
                          : f.status === 'scheduled'
                            ? `Scheduled ${fmtDateTime(f.send_at, timezone)}`
                            : WHEN_HINT[f.type]}
                      </p>
                    </div>
                    {canEdit ? (
                      <Switch
                        checked={f.enabled}
                        label={`Send ${FOLLOWUP_LABELS[f.type]}`}
                        onChange={(enabled) => patch(f.id, { enabled })}
                      />
                    ) : (
                      <FollowupStatusBadge status={f.status} />
                    )}
                  </div>
                  {(f.enabled || !canEdit) && (
                    <>
                      <textarea
                        className="input mt-2 min-h-28 text-sm leading-relaxed"
                        value={f.body}
                        readOnly={!canEdit}
                        aria-label={`${FOLLOWUP_LABELS[f.type]} text`}
                        onChange={(e) => patch(f.id, { body: e.target.value })}
                      />
                      <div className="mt-1 flex items-center justify-between text-xs text-muted">
                        <span>
                          {f.body.length} chars · {segments(f.body)} {segments(f.body) === 1 ? 'SMS' : 'SMS segments'}
                        </span>
                        {f.status === 'scheduled' && (
                          <button className="min-h-11 font-semibold text-plum" onClick={() => unschedule(f.id)} disabled={pending}>
                            Unschedule
                          </button>
                        )}
                      </div>
                      {offer && canEdit && (
                        <p className="mt-1 text-xs font-semibold text-rose">
                          Thank-you and check-in texts can’t include offers (“{offer}”).
                        </p>
                      )}
                      {f.type === 'rebook' && !hasBookingLink && canEdit && (
                        <p className="mt-1 text-xs text-amber">Add your booking link in Settings so it’s included.</p>
                      )}
                      {canEdit && (
                        <label className="mt-2 block">
                          <span className="field-label">Send at (salon time)</span>
                          <input
                            type="datetime-local"
                            className="input text-sm"
                            value={toLocalInput(f.send_at, timezone)}
                            onChange={(e) => patch(f.id, { send_at: fromLocalInput(e.target.value, timezone) })}
                          />
                        </label>
                      )}
                      {f.status === 'failed' && f.error && <p className="mt-1 text-xs text-rose">Last attempt failed: {f.error}</p>}
                    </>
                  )}
                </li>
              );
            })}
          </ul>

          {toSchedule.length > 0 && (
            <button className="btn btn-primary mt-4 w-full" onClick={schedule} disabled={pending || drafting || Boolean(offerProblem)}>
              <Icon name="send" className="size-4" />
              {pending ? 'Scheduling…' : enabledCount === 0 ? 'Save (no texts)' : `Schedule ${enabledCount} ${enabledCount === 1 ? 'text' : 'texts'}`}
            </button>
          )}
          <p className="mt-2 text-xs text-muted">Texts only go out 8am–8pm salon time and always end with “Reply STOP to opt out”.</p>
        </>
      )}
      {notice && <p className="mt-3 text-sm font-semibold text-sage">{notice}</p>}
      {error && <p className="mt-3 text-sm text-rose" role="alert">{error}</p>}
    </section>
  );
}

function Switch({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className="relative inline-flex h-11 w-16 shrink-0 items-center rounded-full"
    >
      <span className={`absolute inset-x-1 inset-y-2 rounded-full transition-colors ${checked ? 'bg-plum' : 'bg-line'}`} />
      <span className={`relative size-6 rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-8' : 'translate-x-2'}`} />
    </button>
  );
}
