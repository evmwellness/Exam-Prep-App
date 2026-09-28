import { NextResponse, type NextRequest } from 'next/server';
import type Stripe from 'stripe';
import { getStripe } from '@/lib/billing';
import { createAdminClient } from '@/lib/supabase/admin';

export const runtime = 'nodejs';

function planFromPrice(priceId: string | undefined): 'solo' | 'salon' | 'none' {
  if (priceId && priceId === process.env.STRIPE_PRICE_SOLO) return 'solo';
  if (priceId && priceId === process.env.STRIPE_PRICE_SALON) return 'salon';
  return 'none';
}

async function syncSubscription(sub: Stripe.Subscription) {
  const admin = createAdminClient();
  const item = sub.items.data[0];
  const ended = sub.status === 'canceled' || sub.status === 'incomplete_expired';
  const update = {
    stripe_subscription_id: sub.id,
    subscription_status: sub.status,
    plan: ended ? ('none' as const) : planFromPrice(item?.price.id),
    locations: item?.quantity ?? 1,
    trial_ends_at: sub.trial_end ? new Date(sub.trial_end * 1000).toISOString() : null,
  };
  const customerId = typeof sub.customer === 'string' ? sub.customer : sub.customer.id;
  const accountId = sub.metadata?.account_id;
  const query = admin.from('accounts').update(update);
  const { error } = accountId ? await query.eq('id', accountId) : await query.eq('stripe_customer_id', customerId);
  if (error) throw error;
}

/** Stripe → keep each account's plan and subscription status in sync. */
export async function POST(request: NextRequest) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) return NextResponse.json({ error: 'Webhook secret not configured' }, { status: 503 });

  const body = await request.text();
  let event: Stripe.Event;
  try {
    event = getStripe().webhooks.constructEvent(body, request.headers.get('stripe-signature') ?? '', secret);
  } catch (err) {
    return NextResponse.json({ error: `Invalid signature: ${(err as Error).message}` }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      if (session.mode === 'subscription' && session.subscription) {
        const subId = typeof session.subscription === 'string' ? session.subscription : session.subscription.id;
        const sub = await getStripe().subscriptions.retrieve(subId);
        await syncSubscription(sub);
      }
      break;
    }
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
    case 'customer.subscription.paused':
    case 'customer.subscription.resumed':
      await syncSubscription(event.data.object);
      break;
  }
  return NextResponse.json({ received: true });
}
