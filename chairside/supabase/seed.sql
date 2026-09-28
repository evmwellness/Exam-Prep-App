-- Local development seed (runs on `supabase db reset`).
-- Creates a demo owner you can sign in as with a magic link:
--   demo@chairside.test  → open http://localhost:54324 to click the link.
-- Then loads 3 demo clients per trade.

do $$
declare
  v_user uuid := '00000000-0000-4000-8000-000000000001';
  v_account uuid;
begin
  insert into auth.users (
    instance_id, id, aud, role, email, encrypted_password, email_confirmed_at,
    raw_app_meta_data, raw_user_meta_data, created_at, updated_at,
    confirmation_token, recovery_token, email_change_token_new, email_change
  ) values (
    '00000000-0000-0000-0000-000000000000', v_user, 'authenticated', 'authenticated',
    'demo@chairside.test', crypt('demo-password', gen_salt('bf')), now(),
    '{"provider":"email","providers":["email"]}', '{}', now(), now(),
    '', '', '', ''
  ) on conflict (id) do nothing;

  insert into auth.identities (id, user_id, provider_id, identity_data, provider, last_sign_in_at, created_at, updated_at)
  values (gen_random_uuid(), v_user, v_user::text,
          jsonb_build_object('sub', v_user::text, 'email', 'demo@chairside.test', 'email_verified', true),
          'email', now(), now(), now())
  on conflict do nothing;

  insert into public.accounts (name, country, timezone, booking_link)
  values ('Maison Demo', 'US', 'America/New_York', 'https://book.example.com/maison-demo')
  returning id into v_account;

  insert into public.users (id, account_id, email, full_name, role, trade)
  values (v_user, v_account, 'demo@chairside.test', 'Demo Owner', 'owner', 'hair');

  perform public.seed_demo_data(v_account, v_user);
end $$;
