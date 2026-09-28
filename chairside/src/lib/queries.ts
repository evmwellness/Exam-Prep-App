import 'server-only';
import { DateTime } from 'luxon';
import { createClient } from './supabase/server';
import type { ClientOverview } from './types';

export async function listClients(): Promise<ClientOverview[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('client_overview')
    .select('*')
    .order('last_visit_at', { ascending: false, nullsFirst: false })
    .order('name');
  if (error) throw error;
  return (data ?? []) as ClientOverview[];
}

/** Rebook texts scheduled to go out within the next 7 days (including any overdue). */
export async function rebooksDueThisWeek(timezone: string) {
  const supabase = await createClient();
  const until = DateTime.now().setZone(timezone).plus({ days: 7 }).endOf('day').toUTC().toISO()!;
  const { data, error } = await supabase
    .from('followups')
    .select('id, send_at, client_id, clients(name)')
    .eq('type', 'rebook')
    .eq('status', 'scheduled')
    .lte('send_at', until)
    .order('send_at');
  if (error) throw error;
  return (data ?? []) as unknown as { id: string; send_at: string; client_id: string; clients: { name: string } }[];
}
