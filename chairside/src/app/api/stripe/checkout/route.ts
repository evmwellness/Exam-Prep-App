import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';
import { billingEnabled, getStripe, priceIdFor, TRIAL_DAYS } from '@/lib/billing';
import { getSession } from '@/lib/session';
import { createAdminClient } from '@/lib/supabase/admin';

export const runtime = 'nodejs';

const Body = z.object({ plan: z.enum(['solo', 'salon']), locations: z.number().int().min(1).max(50).default(1) });

/** Start a Stripe Checkout session for Solo ($7.99/mo) or Salon ($49/mo per location), 14-day trial. */
export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
  if (session.user.role !== 'owner') return NextResponse.json({ error: 'Only the owner can manage billing.' }, { status: 403 });
  if (!billingEnabled()) return NextResponse.json({ error: 'Billing is not configured yet.' }, { status: 503 });

  const parsed = Body.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: 'Choose a plan.' }, { status: 400 });
  const { plan, locations } = parsed.data;

  const stripe = getStripe();
  const { account } = session;
  let customerId = account.stripe_customer_id;
  if (!customerId) {
    const customer = await stripe.customers.create({
      name: account.name,
      email: session.email ?? undefined,
      metadata: { account_id: account.id },
    });
    customerId = customer.id;
    await createAdminClient().from('accounts').update({ stripe_customer_id: customerId }).eq('id', account.id);
  }

  const origin = process.env.APP_URL ?? request.nextUrl.origin;
  const checkout = await stripe.checkout.sessions.create({
    mode: 'subscription',
    customer: customerId,
    client_reference_id: account.id,
    line_items: [{ price: priceIdFor(plan), quantity: plan === 'salon' ? locations : 1 }],
    subscription_data: {
      // One free trial per account.
      ...(account.stripe_subscription_id ? {} : { trial_period_days: TRIAL_DAYS }),
      metadata: { account_id: account.id, plan },
    },
    allow_promotion_codes: true,
    success_url: `${origin}/settings?billing=success#billing`,
    cancel_url: `${origin}/settings#billing`,
  });

  return NextResponse.json({ url: checkout.url });
}
