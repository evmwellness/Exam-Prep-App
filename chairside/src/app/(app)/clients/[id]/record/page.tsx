import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasAnthropic } from '@/lib/anthropic';
import { hasAccess } from '@/lib/billing';
import { requireSession } from '@/lib/session';
import { sttConfigured } from '@/lib/stt';
import { createClient } from '@/lib/supabase/server';
import { Recorder } from './Recorder';

export const metadata: Metadata = { title: 'Record' };

export default async function RecordPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { account } = await requireSession();
  const supabase = await createClient();
  const { data: client } = await supabase.from('clients').select('id, name, trade').eq('id', id).maybeSingle();
  if (!client) notFound();

  return (
    <Recorder
      clientId={client.id}
      clientName={client.name}
      sttAvailable={sttConfigured()}
      extractionAvailable={hasAnthropic()}
      locked={!hasAccess(account)}
    />
  );
}
