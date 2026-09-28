-- Chairside: initial schema.
-- Accounts (a salon or a solo pro) own everything. Every table carries account_id
-- so row-level security can scope each query to the signed-in user's account.

create extension if not exists pgcrypto;

-- ---------------------------------------------------------------------------
-- Types
-- ---------------------------------------------------------------------------

create type public.trade as enum ('hair', 'nails', 'lash_brow');
create type public.user_role as enum ('owner', 'staff');
create type public.followup_type as enum ('thank_you', 'check_in', 'rebook');
create type public.followup_status as enum ('draft', 'scheduled', 'sent', 'skipped', 'failed');

-- ---------------------------------------------------------------------------
-- Tables
-- ---------------------------------------------------------------------------

create table public.accounts (
  id uuid primary key default gen_random_uuid(),
  name text not null check (length(trim(name)) > 0),
  country text not null default 'US' check (country ~ '^[A-Z]{2}$'),
  timezone text not null default 'America/New_York',
  booking_link text,
  -- Billing. Only the service role (Stripe webhook) may change these columns.
  plan text not null default 'none' check (plan in ('none', 'solo', 'salon')),
  locations integer not null default 1 check (locations >= 1),
  subscription_status text,
  stripe_customer_id text unique,
  stripe_subscription_id text unique,
  trial_ends_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.users (
  id uuid primary key references auth.users (id) on delete cascade,
  account_id uuid not null references public.accounts (id) on delete cascade,
  email text,
  full_name text,
  role public.user_role not null default 'staff',
  trade public.trade not null default 'hair',
  created_at timestamptz not null default now()
);
create index users_account_idx on public.users (account_id);

create table public.clients (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references public.accounts (id) on delete cascade,
  name text not null check (length(trim(name)) > 0),
  phone text check (phone is null or phone ~ '^\+[1-9][0-9]{6,14}$'), -- E.164
  trade public.trade not null default 'hair',
  sms_consent boolean not null,
  consent_at timestamptz,
  consent_method text,
  opted_out_at timestamptz,
  created_by uuid references public.users (id) on delete set null,
  created_at timestamptz not null default now(),
  -- A "yes" must always be recorded with when and how it was given.
  constraint consent_recorded check (not sms_consent or (consent_at is not null and consent_method is not null))
);
create index clients_account_idx on public.clients (account_id);
create unique index clients_account_phone_idx on public.clients (account_id, phone) where phone is not null;
create index clients_phone_idx on public.clients (phone);

create table public.visits (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references public.accounts (id) on delete cascade,
  client_id uuid not null references public.clients (id) on delete cascade,
  user_id uuid references public.users (id) on delete set null,
  date timestamptz not null default now(),
  service text,
  trade public.trade not null,
  transcript text,
  audio_path text,
  card_json jsonb not null default '{}'::jsonb,
  rebook_weeks integer check (rebook_weeks is null or rebook_weeks between 1 and 104),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index visits_client_date_idx on public.visits (client_id, date desc);
create index visits_account_idx on public.visits (account_id);

create table public.followups (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references public.accounts (id) on delete cascade,
  visit_id uuid not null references public.visits (id) on delete cascade,
  client_id uuid not null references public.clients (id) on delete cascade,
  type public.followup_type not null,
  body text not null default '',
  enabled boolean not null default true,
  send_at timestamptz,
  status public.followup_status not null default 'draft',
  sent_at timestamptz,
  provider_message_id text,
  error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (visit_id, type)
);
create index followups_due_idx on public.followups (status, send_at);
create index followups_client_idx on public.followups (client_id);

-- Staff invitations: when an invited email signs in for the first time they
-- join the inviting account instead of creating a new one.
create table public.invites (
  id uuid primary key default gen_random_uuid(),
  account_id uuid not null references public.accounts (id) on delete cascade,
  email text not null,
  trade public.trade not null default 'hair',
  invited_by uuid references public.users (id) on delete set null,
  accepted_at timestamptz,
  created_at timestamptz not null default now()
);
create unique index invites_open_email_idx on public.invites (lower(email)) where accepted_at is null;

-- Simple, append-only audit trail of consent changes and sent messages.
create table public.audit_log (
  id bigint generated always as identity primary key,
  account_id uuid not null references public.accounts (id) on delete cascade,
  client_id uuid references public.clients (id) on delete set null,
  followup_id uuid references public.followups (id) on delete set null,
  event text not null,
  detail jsonb not null default '{}'::jsonb,
  actor uuid,
  created_at timestamptz not null default now()
);
create index audit_log_account_idx on public.audit_log (account_id, created_at desc);

-- ---------------------------------------------------------------------------
-- Helpers
-- ---------------------------------------------------------------------------

create or replace function public.current_account_id()
returns uuid
language sql
stable
security definer
set search_path = public
as $$
  select account_id from public.users where id = auth.uid()
$$;

-- The role of the API caller ('authenticated', 'service_role', 'anon'), read
-- from the request JWT. Unlike current_user, this is unaffected by
-- SECURITY DEFINER functions. Direct database connections (migrations, seed,
-- psql) have no JWT and report 'none'.
create or replace function public.request_role()
returns text
language sql
stable
as $$
  select coalesce(
    nullif(current_setting('request.jwt.claims', true), '')::jsonb ->> 'role',
    nullif(current_setting('request.jwt.claim.role', true), ''),
    'none'
  )
$$;

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

create trigger visits_touch before update on public.visits
  for each row execute function public.touch_updated_at();
create trigger followups_touch before update on public.followups
  for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------------
-- Compliance triggers
-- ---------------------------------------------------------------------------

-- Consent: record changes in the audit log, and cancel any scheduled texts the
-- moment a client opts out or consent is withdrawn.
create or replace function public.clients_consent_audit()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if tg_op = 'INSERT' then
    insert into public.audit_log (account_id, client_id, event, detail, actor)
    values (new.account_id, new.id,
            case when new.sms_consent then 'consent_granted' else 'consent_declined' end,
            jsonb_build_object('method', new.consent_method, 'consent_at', new.consent_at),
            auth.uid());
    return new;
  end if;

  if new.sms_consent is distinct from old.sms_consent then
    insert into public.audit_log (account_id, client_id, event, detail, actor)
    values (new.account_id, new.id,
            case when new.sms_consent then 'consent_granted' else 'consent_withdrawn' end,
            jsonb_build_object('method', new.consent_method, 'consent_at', new.consent_at),
            auth.uid());
  end if;

  if new.opted_out_at is distinct from old.opted_out_at then
    insert into public.audit_log (account_id, client_id, event, detail, actor)
    values (new.account_id, new.id,
            case when new.opted_out_at is null then 'opted_back_in' else 'opted_out' end,
            jsonb_build_object('at', coalesce(new.opted_out_at, now())),
            auth.uid());
  end if;

  if (new.opted_out_at is not null and old.opted_out_at is null)
     or (not new.sms_consent and old.sms_consent)
     or (new.phone is null and old.phone is not null) then
    update public.followups
       set status = 'skipped', error = 'Client opted out or withdrew consent'
     where client_id = new.id and status in ('scheduled', 'draft');
  end if;

  return new;
end;
$$;

create trigger clients_consent_audit_ins after insert on public.clients
  for each row execute function public.clients_consent_audit();
create trigger clients_consent_audit_upd after update on public.clients
  for each row execute function public.clients_consent_audit();

-- Guard: a text can never be scheduled for a client without consent, who has
-- opted out, or has no phone number. Only the service role may mark sent/failed.
create or replace function public.followups_guard()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  c record;
begin
  if new.status = 'scheduled' and (tg_op = 'INSERT' or old.status is distinct from 'scheduled') then
    select sms_consent, opted_out_at, phone into c from public.clients where id = new.client_id;
    if not coalesce(c.sms_consent, false) then
      raise exception 'Client has not agreed to receive texts' using errcode = 'P0001';
    end if;
    if c.opted_out_at is not null then
      raise exception 'Client has opted out of texts' using errcode = 'P0001';
    end if;
    if c.phone is null then
      raise exception 'Client has no mobile number' using errcode = 'P0001';
    end if;
    if not new.enabled then
      raise exception 'This text is switched off' using errcode = 'P0001';
    end if;
    if new.send_at is null then
      raise exception 'A scheduled text needs a send time' using errcode = 'P0001';
    end if;
  end if;

  if public.request_role() = 'authenticated'
     and coalesce(current_setting('chairside.seeding', true), '') <> 'on'
     and new.status in ('sent', 'failed')
     and (tg_op = 'INSERT' or old.status is distinct from new.status) then
    raise exception 'Only the sending job can mark texts as sent or failed' using errcode = '42501';
  end if;

  if tg_op = 'UPDATE' and public.request_role() = 'authenticated' and old.status = 'sent' then
    raise exception 'Sent texts cannot be changed' using errcode = '42501';
  end if;

  return new;
end;
$$;

create trigger followups_guard before insert or update on public.followups
  for each row execute function public.followups_guard();

-- Keep account_id consistent with the parent row so RLS can't be sidestepped
-- by pointing a row at another account's client.
create or replace function public.visits_account_check()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (select 1 from public.clients where id = new.client_id and account_id = new.account_id) then
    raise exception 'Client does not belong to this account' using errcode = '42501';
  end if;
  return new;
end;
$$;
create trigger visits_account_check before insert or update of client_id, account_id on public.visits
  for each row execute function public.visits_account_check();

create or replace function public.followups_account_check()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if not exists (
    select 1 from public.visits
     where id = new.visit_id and client_id = new.client_id and account_id = new.account_id
  ) then
    raise exception 'Visit does not belong to this client/account' using errcode = '42501';
  end if;
  return new;
end;
$$;
create trigger followups_account_check before insert or update of visit_id, client_id, account_id on public.followups
  for each row execute function public.followups_account_check();

-- ---------------------------------------------------------------------------
-- Row-level security
-- ---------------------------------------------------------------------------

alter table public.accounts enable row level security;
alter table public.users enable row level security;
alter table public.clients enable row level security;
alter table public.visits enable row level security;
alter table public.followups enable row level security;
alter table public.audit_log enable row level security;
alter table public.invites enable row level security;

create policy accounts_select on public.accounts for select to authenticated
  using (id = public.current_account_id());
create policy accounts_update on public.accounts for update to authenticated
  using (id = public.current_account_id()
         and exists (select 1 from public.users where id = auth.uid() and role = 'owner'))
  with check (id = public.current_account_id());

create policy users_select on public.users for select to authenticated
  using (account_id = public.current_account_id());
create policy users_update_self on public.users for update to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

create policy clients_all on public.clients for all to authenticated
  using (account_id = public.current_account_id())
  with check (account_id = public.current_account_id());

create policy visits_all on public.visits for all to authenticated
  using (account_id = public.current_account_id())
  with check (account_id = public.current_account_id());

create policy followups_all on public.followups for all to authenticated
  using (account_id = public.current_account_id())
  with check (account_id = public.current_account_id());

create policy invites_owner on public.invites for all to authenticated
  using (account_id = public.current_account_id()
         and exists (select 1 from public.users where id = auth.uid() and role = 'owner'))
  with check (account_id = public.current_account_id()
         and exists (select 1 from public.users where id = auth.uid() and role = 'owner'));

create policy audit_select on public.audit_log for select to authenticated
  using (account_id = public.current_account_id());

-- Column-level grants: billing columns and roles can't be changed from the browser.
revoke update on public.accounts from authenticated, anon;
grant update (name, country, timezone, booking_link) on public.accounts to authenticated;
revoke insert, delete on public.accounts from authenticated, anon;

revoke update on public.users from authenticated, anon;
grant update (full_name, trade) on public.users to authenticated;
revoke insert, delete on public.users from authenticated, anon;

revoke insert, update, delete on public.audit_log from authenticated, anon;

-- ---------------------------------------------------------------------------
-- Views
-- ---------------------------------------------------------------------------

-- One row per client with their latest visit and follow-up summary. Runs with
-- the caller's permissions, so RLS applies.
create view public.client_overview with (security_invoker = true) as
select
  c.*,
  lv.id as last_visit_id,
  lv.date as last_visit_at,
  lv.service as last_service,
  lv.card_json as last_card,
  lv.rebook_weeks as last_rebook_weeks,
  (select count(*) from public.visits v where v.client_id = c.id) as visit_count,
  nf.send_at as next_followup_at,
  nf.type as next_followup_type
from public.clients c
left join lateral (
  select v.id, v.date, v.service, v.card_json, v.rebook_weeks
    from public.visits v
   where v.client_id = c.id
   order by v.date desc
   limit 1
) lv on true
left join lateral (
  select f.send_at, f.type
    from public.followups f
   where f.client_id = c.id and f.status = 'scheduled'
   order by f.send_at asc
   limit 1
) nf on true;

-- ---------------------------------------------------------------------------
-- Onboarding
-- ---------------------------------------------------------------------------

-- Called once after a user's first magic-link sign-in to create their account.
create or replace function public.create_account(
  p_name text,
  p_country text,
  p_timezone text,
  p_trade public.trade,
  p_booking_link text default null,
  p_full_name text default null
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_account uuid;
  v_email text;
  v_invite record;
begin
  if auth.uid() is null then
    raise exception 'Not signed in' using errcode = '42501';
  end if;
  if exists (select 1 from public.users where id = auth.uid()) then
    return (select account_id from public.users where id = auth.uid());
  end if;

  select email into v_email from auth.users where id = auth.uid();

  -- Invited staff join the inviting account.
  select account_id, trade into v_invite from public.invites
   where lower(email) = lower(v_email) and accepted_at is null
   order by created_at desc limit 1;
  if v_invite.account_id is not null then
    insert into public.users (id, account_id, email, full_name, role, trade)
    values (auth.uid(), v_invite.account_id, v_email, p_full_name, 'staff', v_invite.trade);
    update public.invites set accepted_at = now()
     where lower(email) = lower(v_email) and accepted_at is null;
    return v_invite.account_id;
  end if;

  insert into public.accounts (name, country, timezone, booking_link)
  values (trim(p_name), upper(p_country), p_timezone, nullif(trim(coalesce(p_booking_link, '')), ''))
  returning id into v_account;

  insert into public.users (id, account_id, email, full_name, role, trade)
  values (auth.uid(), v_account, v_email, p_full_name, 'owner', p_trade);

  return v_account;
end;
$$;

revoke all on function public.create_account(text, text, text, public.trade, text, text) from public, anon;
grant execute on function public.create_account(text, text, text, public.trade, text, text) to authenticated;

-- The name of the salon that has invited the signed-in user, if any.
create or replace function public.pending_invite()
returns text
language sql
stable
security definer
set search_path = public
as $$
  select a.name
    from public.invites i
    join public.accounts a on a.id = i.account_id
    join auth.users u on lower(u.email) = lower(i.email)
   where u.id = auth.uid() and i.accepted_at is null
   order by i.created_at desc
   limit 1
$$;

revoke all on function public.pending_invite() from public, anon;
grant execute on function public.pending_invite() to authenticated;

-- ---------------------------------------------------------------------------
-- Storage: private bucket for voice memos, one folder per account.
-- ---------------------------------------------------------------------------

insert into storage.buckets (id, name, public)
values ('audio', 'audio', false)
on conflict (id) do nothing;

create policy audio_select on storage.objects for select to authenticated
  using (bucket_id = 'audio' and (storage.foldername(name))[1] = public.current_account_id()::text);
create policy audio_insert on storage.objects for insert to authenticated
  with check (bucket_id = 'audio' and (storage.foldername(name))[1] = public.current_account_id()::text);
create policy audio_delete on storage.objects for delete to authenticated
  using (bucket_id = 'audio' and (storage.foldername(name))[1] = public.current_account_id()::text);
