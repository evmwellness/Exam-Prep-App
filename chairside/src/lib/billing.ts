import 'server-only';
import Stripe from 'stripe';
import type { Account } from './types';

export const PLANS = {
  solo: { name: 'Solo', price: '$7.99', per: 'month', blurb: 'One pro, unlimited clients and texts.' },
  salon: { name: 'Salon', price: '$49', per: 'month per location', blurb: 'The whole team, desktop dashboard, owner view.' },
} as const;
export type PlanId = keyof typeof PLANS;

export const TRIAL_DAYS = 14;

let stripe: Stripe | null = null;

/** Billing is switched on once STRIPE_SECRET_KEY is set; until then every feature is unlocked. */
export function billingEnabled(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

export function getStripe(): Stripe {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error('STRIPE_SECRET_KEY is not set');
  if (!stripe) stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  return stripe;
}

export function priceIdFor(plan: PlanId): string {
  const id = plan === 'solo' ? process.env.STRIPE_PRICE_SOLO : process.env.STRIPE_PRICE_SALON;
  if (!id) throw new Error(`Stripe price for the ${plan} plan is not configured`);
  return id;
}

export function hasActiveSubscription(account: Pick<Account, 'subscription_status'>): boolean {
  return account.subscription_status === 'active' || account.subscription_status === 'trialing';
}

/** Whether recording and scheduling are available for this account. */
export function hasAccess(account: Pick<Account, 'subscription_status'>): boolean {
  return !billingEnabled() || hasActiveSubscription(account);
}
