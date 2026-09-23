import type { ParentSettings, ScreenSessionState, SessionMinutes } from '../types';

const SETTINGS_KEY = 'mathquest_parent_settings_v1';
const SESSION_KEY = 'mathquest_screen_session_v1';

const DEFAULT_SETTINGS: ParentSettings = { sessionMinutes: 10 };

export function loadParentSettings(): ParentSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw) as ParentSettings;
    if (parsed.sessionMinutes !== 5 && parsed.sessionMinutes !== 10) return DEFAULT_SETTINGS;
    return parsed;
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveParentSettings(settings: ParentSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // ignore
  }
}

export function loadSessionState(): ScreenSessionState | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ScreenSessionState;
  } catch {
    return null;
  }
}

function saveSessionState(state: ScreenSessionState): ScreenSessionState {
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(state));
  } catch {
    // ignore
  }
  return state;
}

export function startNewSession(sessionMinutes: SessionMinutes): ScreenSessionState {
  return saveSessionState({ startedAt: Date.now(), sessionMinutes, locked: false });
}

export function lockSession(state: ScreenSessionState): ScreenSessionState {
  return saveSessionState({ ...state, locked: true });
}

/** Loads the current session, starting a fresh one if none exists or the stored one has already expired. */
export function resumeOrStartSession(defaultMinutes: SessionMinutes): ScreenSessionState {
  const existing = loadSessionState();
  if (!existing) return startNewSession(defaultMinutes);
  if (existing.locked) return existing;
  const elapsed = Date.now() - existing.startedAt;
  if (elapsed >= existing.sessionMinutes * 60 * 1000) {
    return lockSession(existing);
  }
  return existing;
}

export function remainingMs(state: ScreenSessionState): number {
  if (state.locked) return 0;
  const elapsed = Date.now() - state.startedAt;
  return Math.max(0, state.sessionMinutes * 60 * 1000 - elapsed);
}
