'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/Icon';

const MAX_SECONDS = 120;
export const RECORD_NOTICE = 'Speak after your client leaves. Only your voice memo is recorded, never the client.';

type Phase = 'idle' | 'recording' | 'transcribing' | 'review' | 'making';

function pickMimeType(): string {
  const candidates = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus'];
  if (typeof MediaRecorder === 'undefined') return '';
  return candidates.find((t) => MediaRecorder.isTypeSupported(t)) ?? '';
}

function fmt(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

export function Recorder({
  clientId,
  clientName,
  sttAvailable,
  extractionAvailable,
  locked,
}: {
  clientId: string;
  clientName: string;
  sttAvailable: boolean;
  extractionAvailable: boolean;
  locked: boolean;
}) {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>(sttAvailable ? 'idle' : 'review');
  const [seconds, setSeconds] = useState(0);
  const [transcript, setTranscript] = useState('');
  const [audioPath, setAudioPath] = useState<string | null>(null);
  const [error, setError] = useState('');
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) clearInterval(timerRef.current);
      streamRef.current?.getTracks().forEach((t) => t.stop());
    },
    [],
  );

  async function start() {
    setError('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
      streamRef.current = stream;
      const mimeType = pickMimeType();
      const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
      chunksRef.current = [];
      recorder.ondataavailable = (e) => e.data.size > 0 && chunksRef.current.push(e.data);
      recorder.onstop = () => {
        stream.getTracks().forEach((t) => t.stop());
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || 'audio/webm' });
        void upload(blob);
      };
      recorderRef.current = recorder;
      recorder.start(1000);
      setSeconds(0);
      setPhase('recording');
      const started = Date.now();
      timerRef.current = setInterval(() => {
        const s = Math.floor((Date.now() - started) / 1000);
        setSeconds(s);
        if (s >= MAX_SECONDS) stop();
      }, 250);
    } catch {
      setError('Microphone access was blocked. Allow the mic in your browser settings, or type your notes instead.');
    }
  }

  function stop() {
    if (timerRef.current) clearInterval(timerRef.current);
    if (recorderRef.current?.state === 'recording') recorderRef.current.stop();
    setPhase('transcribing');
  }

  async function upload(blob: Blob) {
    const form = new FormData();
    const ext = blob.type.includes('mp4') ? 'm4a' : blob.type.includes('ogg') ? 'ogg' : 'webm';
    form.append('audio', blob, `memo.${ext}`);
    form.append('clientId', clientId);
    try {
      const res = await fetch('/api/transcribe', { method: 'POST', body: form });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Transcription failed');
      setTranscript(json.transcript);
      setAudioPath(json.audioPath);
      setPhase('review');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Transcription failed');
      setPhase('review');
    }
  }

  async function makeCard() {
    setError('');
    setPhase('making');
    try {
      const res = await fetch('/api/visits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientId, transcript, audioPath }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Could not make the card');
      router.push(`/clients/${clientId}/visits/${json.visitId}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not make the card');
      setPhase('review');
    }
  }

  if (locked) {
    return (
      <main className="mx-auto max-w-md px-6 py-16 text-center">
        <h1 className="text-3xl">Start your free trial</h1>
        <p className="mt-2 text-muted">Recording voice notes needs an active plan. The first 14 days are free.</p>
        <Link href="/settings#billing" className="btn btn-primary mt-6">Choose a plan</Link>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-dvh max-w-xl flex-col px-4 pt-4 pb-8 sm:px-6 lg:min-h-0 lg:pt-8">
      <div className="flex items-center justify-between">
        <Link href={`/clients/${clientId}`} className="btn btn-ghost -ml-3">
          <Icon name="back" /> {clientName}
        </Link>
      </div>
      <h1 className="mt-2 text-3xl">Voice notes for {clientName.split(' ')[0]}</h1>
      <p className="mt-2 rounded-xl bg-plum-soft px-4 py-3 text-sm font-medium text-plum">{RECORD_NOTICE}</p>

      {(phase === 'idle' || phase === 'recording' || phase === 'transcribing') && (
        <div className="flex flex-1 flex-col items-center justify-center py-10">
          <p className="font-display text-6xl tabular-nums" aria-live="polite">
            {fmt(seconds)}
          </p>
          <p className="mt-2 h-6 text-muted">
            {phase === 'idle' && 'Tap the mic and talk for 10–30 seconds'}
            {phase === 'recording' && 'Recording… tap to stop'}
            {phase === 'transcribing' && 'Transcribing…'}
          </p>
          <button
            onClick={phase === 'recording' ? stop : start}
            disabled={phase === 'transcribing'}
            aria-label={phase === 'recording' ? 'Stop recording' : 'Start recording'}
            className={`mt-8 grid size-40 place-items-center rounded-full text-white shadow-lg transition-transform active:scale-95 disabled:opacity-60 ${
              phase === 'recording' ? 'bg-rose ring-8 ring-rose/20 motion-safe:animate-pulse' : 'bg-plum ring-8 ring-plum/15'
            }`}
          >
            <Icon name={phase === 'recording' ? 'stop' : 'mic'} className="size-16" />
          </button>
          {phase === 'idle' && (
            <button className="btn btn-ghost mt-8" onClick={() => setPhase('review')}>
              Type notes instead
            </button>
          )}
          {error && <p className="mt-4 text-center text-sm text-rose" role="alert">{error}</p>}
        </div>
      )}

      {(phase === 'review' || phase === 'making') && (
        <div className="mt-6 flex flex-1 flex-col">
          <label className="field-label" htmlFor="transcript">
            {audioPath ? 'Transcript: fix anything misheard' : 'Your notes'}
          </label>
          <textarea
            id="transcript"
            className="input min-h-48 flex-1 leading-relaxed"
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            placeholder="e.g. Roots 7N + 8.1, 20 vol, 35 min. Gloss 9V with clear, 10 min. Wants it warmer next time. Getting married in June. Rebook 6 weeks."
          />
          {!sttAvailable && <p className="mt-2 text-xs text-muted">Speech-to-text isn’t set up yet (add OPENAI_API_KEY), so type your notes for now.</p>}
          {!extractionAvailable && <p className="mt-2 text-xs text-muted">Card extraction isn’t set up yet (add ANTHROPIC_API_KEY): you’ll get a blank card to fill in.</p>}
          {error && <p className="mt-3 text-sm text-rose" role="alert">{error}</p>}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {sttAvailable ? (
              <button
                className="btn btn-secondary"
                disabled={phase === 'making'}
                onClick={() => {
                  setTranscript('');
                  setAudioPath(null);
                  setSeconds(0);
                  setPhase('idle');
                }}
              >
                Re-record
              </button>
            ) : (
              <span />
            )}
            <button className="btn btn-primary" disabled={phase === 'making' || !transcript.trim()} onClick={makeCard}>
              <Icon name="sparkle" className="size-4" />
              {phase === 'making' ? 'Making card…' : 'Make card'}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
