'use client';

import { useEffect, useRef, useState } from 'react';
import { saveCardAction } from '@/app/actions';
import { Icon } from '@/components/Icon';
import type { ClientCard } from '@/lib/card';
import { TRADE_FIELDS, TRADE_LABELS } from '@/lib/trades';

type SaveState = 'saved' | 'dirty' | 'saving' | 'error';

/** Every field is plain editable text; changes save automatically. */
export function CardEditor({ visitId, initial }: { visitId: string; initial: ClientCard }) {
  const [card, setCard] = useState<ClientCard>(initial);
  const [save, setSave] = useState<SaveState>('saved');
  const [error, setError] = useState('');
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setSave('dirty');
    const t = setTimeout(async () => {
      setSave('saving');
      const res = await saveCardAction(visitId, card);
      if (res.ok) {
        setSave('saved');
        setError('');
        window.dispatchEvent(new CustomEvent('card-saved', { detail: { rebookWeeks: card.rebook_weeks } }));
      } else {
        setSave('error');
        setError(res.error);
      }
    }, 700);
    return () => clearTimeout(t);
  }, [card, visitId]);

  const update = (patch: Partial<ClientCard>) => setCard((c) => ({ ...c, ...patch }));
  const setField = (key: string, value: string) => setCard((c) => ({ ...c, fields: { ...c.fields, [key]: value } }));

  return (
    <section className="card p-5" aria-labelledby="card-heading">
      <div className="flex items-center justify-between gap-3">
        <h2 id="card-heading" className="text-2xl">
          Client card
        </h2>
        <span className="text-xs font-semibold text-muted" aria-live="polite">
          {save === 'saving' ? 'Saving…' : save === 'dirty' ? 'Editing…' : save === 'error' ? <span className="text-rose">Not saved</span> : '✓ Saved'}
        </span>
      </div>
      <p className="text-sm text-muted">{TRADE_LABELS[card.trade]} · tap any field to correct it</p>

      <div className="mt-4">
        <label className="field-label" htmlFor="service">Service</label>
        <input id="service" className="input" value={card.service} onChange={(e) => update({ service: e.target.value })} />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {TRADE_FIELDS[card.trade].map((f) => (
          <div key={f.key} className={f.key.includes('formula') || f.key === 'lash_map' || f.key === 'cut_notes' ? 'sm:col-span-2' : ''}>
            <label className="field-label" htmlFor={`f-${f.key}`}>{f.label}</label>
            <input
              id={`f-${f.key}`}
              className="input font-semibold"
              value={card.fields[f.key] ?? ''}
              placeholder={f.placeholder}
              onChange={(e) => setField(f.key, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <span className="field-label" id="rebook-label">Rebook interval</span>
          <div className="flex items-center gap-2" role="group" aria-labelledby="rebook-label">
            <button
              type="button"
              className="btn btn-secondary size-11 px-0 text-xl"
              aria-label="Fewer weeks"
              onClick={() => update({ rebook_weeks: Math.max(1, (card.rebook_weeks ?? 6) - 1) })}
            >
              −
            </button>
            <input
              className="input w-20 text-center font-semibold"
              inputMode="numeric"
              aria-label="Rebook interval in weeks"
              value={card.rebook_weeks ?? ''}
              placeholder="—"
              onChange={(e) => {
                const n = parseInt(e.target.value, 10);
                update({ rebook_weeks: Number.isFinite(n) ? Math.min(104, Math.max(1, n)) : null });
              }}
            />
            <button
              type="button"
              className="btn btn-secondary size-11 px-0 text-xl"
              aria-label="More weeks"
              onClick={() => update({ rebook_weeks: Math.min(104, (card.rebook_weeks ?? 5) + 1) })}
            >
              +
            </button>
            <span className="text-sm text-muted">weeks</span>
          </div>
        </div>
        <div>
          <label className="field-label" htmlFor="sensitivities">Sensitivities</label>
          <input
            id="sensitivities"
            className="input"
            value={card.sensitivities}
            placeholder="Allergies, reactions, comfort notes"
            onChange={(e) => update({ sensitivities: e.target.value })}
          />
        </div>
      </div>

      <ListEditor
        label="Next time"
        items={card.next_time}
        placeholder="Add something to do next time"
        onChange={(next_time) => update({ next_time })}
        variant="list"
      />
      <ListEditor
        label="Remember"
        items={card.remember}
        placeholder="Add a personal detail"
        onChange={(remember) => update({ remember })}
        variant="chips"
      />

      {error && <p className="mt-3 text-sm text-rose">{error}</p>}
    </section>
  );
}

function ListEditor({
  label,
  items,
  placeholder,
  onChange,
  variant,
}: {
  label: string;
  items: string[];
  placeholder: string;
  onChange: (items: string[]) => void;
  variant: 'list' | 'chips';
}) {
  const [draft, setDraft] = useState('');
  const add = () => {
    const v = draft.trim();
    if (v && !items.includes(v)) onChange([...items, v]);
    setDraft('');
  };
  const remove = (i: number) => onChange(items.filter((_, j) => j !== i));

  return (
    <div className="mt-5">
      <p className="field-label">{label}</p>
      {variant === 'chips' ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item, i) => (
            <span key={item} className="chip pr-1">
              {item}
              <button type="button" onClick={() => remove(i)} aria-label={`Remove ${item}`} className="grid size-7 place-items-center rounded-full hover:bg-plum/10">
                <Icon name="close" className="size-4" />
              </button>
            </span>
          ))}
        </div>
      ) : (
        <ul className="space-y-1.5">
          {items.map((item, i) => (
            <li key={`${item}-${i}`} className="flex items-center gap-2">
              <input
                className="input"
                value={item}
                aria-label={`${label} item ${i + 1}`}
                onChange={(e) => onChange(items.map((x, j) => (j === i ? e.target.value : x)))}
              />
              <button type="button" onClick={() => remove(i)} aria-label={`Remove ${item}`} className="btn btn-ghost size-11 shrink-0 px-0">
                <Icon name="close" />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-2 flex gap-2">
        <input
          className="input"
          value={draft}
          placeholder={placeholder}
          aria-label={placeholder}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              add();
            }
          }}
        />
        <button type="button" className="btn btn-secondary size-11 shrink-0 px-0" onClick={add} aria-label={`Add to ${label}`}>
          <Icon name="plus" />
        </button>
      </div>
    </div>
  );
}
