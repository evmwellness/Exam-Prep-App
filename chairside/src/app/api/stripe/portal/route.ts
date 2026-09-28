import { NextResponse, type NextRequest } from 'next/server';
import { getStripe } from '@/lib/billing';
import { getSession } from '@/lib/session';

export const runtime = 'nodejs';

/** Open the Stripe customer portal to change plan, update card or cancel. */
export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: 'Not signed in' }, { status: 401 });
  if (session.user.role !== 'owner' || !session.account.stripe_customer_id) {
    return NextResponse.json({ error: 'No subscription to manage.' }, { status: 400 });
  }
  const portal = await getStripe().billingPortal.sessions.create({
    customer: session.account.stripe_customer_id,
    return_url: `${process.env.APP_URL ?? request.nextUrl.origin}/settings#billing`,
  });
  return NextResponse.json({ url: portal.url });
}
