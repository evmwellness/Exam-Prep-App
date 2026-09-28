-- Demo data: 3 clients per trade (hair, nails, lash + brow), each with visit
-- history, a client card and follow-up texts in various states. Used by
-- supabase/seed.sql locally and by the "Load demo clients" button in Settings.

create or replace function public.seed_demo_data(p_account uuid, p_user uuid)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_salon text;
  v_link text;
  v_tz text;
  v_client uuid;
  v_visit uuid;
  v_count integer := 0;
  r record;
  v_today_10 timestamptz;
begin
  select name, coalesce(booking_link, 'https://book.example.com'), timezone
    into v_salon, v_link, v_tz
    from public.accounts where id = p_account;
  if v_salon is null then
    raise exception 'Unknown account';
  end if;

  if exists (select 1 from public.clients where account_id = p_account and phone = '+12125550101') then
    raise exception 'Demo clients are already loaded' using errcode = 'P0001';
  end if;

  -- Lets the follow-up guard accept demo rows that are already 'sent'.
  perform set_config('chairside.seeding', 'on', true);

  -- 10am today in the salon's timezone, used to place follow-ups at sensible hours.
  v_today_10 := (date_trunc('day', now() at time zone v_tz) + interval '10 hours') at time zone v_tz;

  for r in
    select * from (values
      -- name, phone, trade, consent, opted_out, service, card, rebook_weeks, weeks_since_visit, older_service
      ('Sarah Mitchell', '+12125550101', 'hair', true, false, 'Roots + gloss',
       '{"fields":{"roots_formula":"7N + 8.1","lengths_formula":"Gloss 9V + clear, 10 min","developer_volume":"20 vol","processing_time":"Roots 35 min; gloss 10 min","cut_notes":""},"next_time":["A touch warmer"],"remember":["Getting married in June"],"sensitivities":"Sensitive around the hairline"}',
       6, 0, 'Roots + gloss'),
      ('Priya Patel', '+12125550102', 'hair', true, false, 'Balayage + toner + cut',
       '{"fields":{"roots_formula":"","lengths_formula":"Lightener + 20 vol hand-painted; toner 9.1 + 9.2, 20 min","developer_volume":"20 vol (lightener); 6 vol (toner)","processing_time":"Lightener 45 min; toner 20 min","cut_notes":"Long layers, face-framing from chin, 2 cm off"},"next_time":["Keep the face frame brighter","Olaplex add-on"],"remember":["Training for a half marathon","Daughter starting school"],"sensitivities":""}',
       10, 5, 'Toner refresh'),
      ('Jess Nguyen', '+12125550103', 'hair', true, false, 'All-over colour + cut',
       '{"fields":{"roots_formula":"6N + 6.3","lengths_formula":"6N + 6.3 pulled through last 10 min","developer_volume":"20 vol","processing_time":"35 min","cut_notes":"Blunt bob, 1 cm off, no layers"},"next_time":["Try a copper gloss"],"remember":["New puppy called Biscuit"],"sensitivities":"Itchy scalp with high-lift colour"}',
       5, 4, 'All-over colour'),
      ('Emma Wilson', '+12125550104', 'nails', true, false, 'Gel-X full set',
       '{"fields":{"service_shape":"Gel-X full set, short almond","colour":"OPI Bubble Bath","products_system":"Gel-X tips + builder gel apex","length":"Short"},"next_time":["Add a chrome finish"],"remember":["Holiday to Bali next month"],"sensitivities":""}',
       3, 0, 'Gel-X infill'),
      ('Olivia Brown', '+12125550105', 'nails', true, false, 'BIAB infill',
       '{"fields":{"service_shape":"BIAB infill, squoval","colour":"The GelBottle Blush","products_system":"BIAB builder gel","length":"Medium"},"next_time":["Shorten one length"],"remember":["Works nights as a nurse"],"sensitivities":"Reacts to HEMA - HEMA-free products only"}',
       4, 2, 'BIAB overlay'),
      ('Mia Chen', '+12125550106', 'nails', false, false, 'Acrylic full set',
       '{"fields":{"service_shape":"Acrylic full set, coffin","colour":"DND Black Cherry","products_system":"Acrylic + gel top coat","length":"Long"},"next_time":["Try French ombre"],"remember":["Birthday in October"],"sensitivities":""}',
       3, 1, 'Acrylic infill'),
      ('Chloe Davis', '+12125550107', 'lash_brow', true, false, 'Classic lash set + brow lamination',
       '{"fields":{"lash_map":"Classic, cat eye, C curl, 9-12 mm, 0.15","adhesive":"Sensitive (low fume) adhesive","brow_treatment":"Lamination 8 min; tint dark brown 5 min","patch_test_date":""},"next_time":["Go 1 mm longer on the outer corners"],"remember":["Starting a new job at the bank"],"sensitivities":"Watery eyes - keep fans on low"}',
       3, 0, 'Classic infill'),
      ('Grace Kim', '+12125550108', 'lash_brow', true, true, 'Hybrid lash set',
       '{"fields":{"lash_map":"Hybrid, doll eye, D curl, 8-11 mm, 0.07","adhesive":"Standard 1-2 sec adhesive","brow_treatment":"","patch_test_date":""},"next_time":["Fuller in the centre"],"remember":["Loves hiking"],"sensitivities":""}',
       3, 3, 'Hybrid infill'),
      ('Amelia Scott', '+12125550109', 'lash_brow', true, false, 'Volume lash set',
       '{"fields":{"lash_map":"Volume 3D, open eye, CC curl, 10-13 mm, 0.05","adhesive":"Fast 0.5 sec adhesive","brow_treatment":"Brow tint medium brown 4 min","patch_test_date":""},"next_time":["Try 4D on the top layer"],"remember":["Getting engaged photos done"],"sensitivities":""}',
       2, 1, 'Volume infill')
    ) as t(name, phone, trade, consent, opted_out, service, card, rebook_weeks, weeks_since, older_service)
  loop
    insert into public.clients (account_id, name, phone, trade, sms_consent, consent_at, consent_method, created_by)
    values (p_account, r.name, r.phone, r.trade::public.trade, r.consent,
            case when r.consent then now() - interval '6 months' end,
            case when r.consent then 'in_person_verbal' end,
            p_user)
    returning id into v_client;

    -- An older visit for history.
    insert into public.visits (account_id, client_id, user_id, date, service, trade, transcript, card_json, rebook_weeks)
    values (p_account, v_client, p_user,
            now() - make_interval(weeks => r.weeks_since + r.rebook_weeks, hours => 3),
            r.older_service, r.trade::public.trade,
            'Earlier visit (demo data).',
            jsonb_build_object('trade', r.trade, 'service', r.older_service) || r.card::jsonb,
            r.rebook_weeks);

    -- The most recent visit.
    insert into public.visits (account_id, client_id, user_id, date, service, trade, transcript, card_json, rebook_weeks)
    values (p_account, v_client, p_user,
            now() - make_interval(weeks => r.weeks_since, hours => 2),
            r.service, r.trade::public.trade,
            'Demo transcript for ' || r.name || ': ' || r.service || '.',
            jsonb_build_object('trade', r.trade, 'service', r.service, 'client_name', r.name, 'rebook_weeks', r.rebook_weeks) || r.card::jsonb,
            r.rebook_weeks)
    returning id into v_visit;

    insert into public.followups (account_id, visit_id, client_id, type, body, enabled, send_at, status, sent_at)
    values
      (p_account, v_visit, v_client, 'thank_you',
       v_salon || ': Thanks for coming in today, ' || split_part(r.name, ' ', 1) || '! Aftercare tip: be gentle for the first 48 hours. Reply STOP to opt out',
       true,
       now() - make_interval(weeks => r.weeks_since, hours => 1),
       case when r.consent then 'sent'::public.followup_status else 'draft' end,
       case when r.consent then now() - make_interval(weeks => r.weeks_since, hours => 1) end),
      (p_account, v_visit, v_client, 'check_in',
       v_salon || ': Hi ' || split_part(r.name, ' ', 1) || ', just checking in - how is everything settling in? Reply STOP to opt out',
       true,
       greatest(v_today_10 - make_interval(weeks => r.weeks_since) + interval '2 days', v_today_10 + interval '1 day'),
       case when not r.consent then 'draft'::public.followup_status
            when r.weeks_since = 0 then 'scheduled' else 'sent' end,
       case when r.consent and r.weeks_since > 0 then v_today_10 - make_interval(weeks => r.weeks_since) + interval '2 days' end),
      (p_account, v_visit, v_client, 'rebook',
       v_salon || ': Hi ' || split_part(r.name, ' ', 1) || ', you''re due back soon. Book your next appointment here: ' || v_link || ' Reply STOP to opt out',
       true,
       -- Due one week before the rebook date, but never in the past.
       greatest(v_today_10 - make_interval(weeks => r.weeks_since) + make_interval(weeks => r.rebook_weeks - 1),
                v_today_10 + interval '1 day'),
       case when r.consent then 'scheduled'::public.followup_status else 'draft' end,
       null);

    if r.opted_out then
      -- Opting out cancels the scheduled texts (see clients_consent_audit).
      update public.clients set opted_out_at = now() - interval '2 days' where id = v_client;
    end if;

    v_count := v_count + 1;
  end loop;

  perform set_config('chairside.seeding', 'off', true);
  return v_count;
end;
$$;

revoke all on function public.seed_demo_data(uuid, uuid) from public, anon, authenticated;

-- Callable from the app (Settings → Load demo clients) by an account owner.
create or replace function public.load_demo_data()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_account uuid := public.current_account_id();
begin
  if v_account is null or not exists (select 1 from public.users where id = auth.uid() and role = 'owner') then
    raise exception 'Only the account owner can load demo data' using errcode = '42501';
  end if;
  return public.seed_demo_data(v_account, auth.uid());
end;
$$;

revoke all on function public.load_demo_data() from public, anon;
grant execute on function public.load_demo_data() to authenticated;
