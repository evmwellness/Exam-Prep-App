import type { FollowupType } from './followups/compliance';
import type { Trade } from './trades';

export type FollowupStatus = 'draft' | 'scheduled' | 'sent' | 'skipped' | 'failed';

export interface Account {
  id: string;
  name: string;
  country: string;
  timezone: string;
  booking_link: string | null;
  plan: 'none' | 'solo' | 'salon';
  locations: number;
  subscription_status: string | null;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  trial_ends_at: string | null;
  created_at: string;
}

export interface AppUser {
  id: string;
  account_id: string;
  email: string | null;
  full_name: string | null;
  role: 'owner' | 'staff';
  trade: Trade;
}

export interface Client {
  id: string;
  account_id: string;
  name: string;
  phone: string | null;
  trade: Trade;
  sms_consent: boolean;
  consent_at: string | null;
  consent_method: string | null;
  opted_out_at: string | null;
  created_at: string;
}

export interface ClientOverview extends Client {
  last_visit_id: string | null;
  last_visit_at: string | null;
  last_service: string | null;
  last_card: unknown;
  last_rebook_weeks: number | null;
  visit_count: number;
  next_followup_at: string | null;
  next_followup_type: FollowupType | null;
}

export interface Visit {
  id: string;
  account_id: string;
  client_id: string;
  user_id: string | null;
  date: string;
  service: string | null;
  trade: Trade;
  transcript: string | null;
  audio_path: string | null;
  card_json: unknown;
  rebook_weeks: number | null;
  created_at: string;
}

export interface Followup {
  id: string;
  account_id: string;
  visit_id: string;
  client_id: string;
  type: FollowupType;
  body: string;
  enabled: boolean;
  send_at: string | null;
  status: FollowupStatus;
  sent_at: string | null;
  provider_message_id: string | null;
  error: string | null;
}
