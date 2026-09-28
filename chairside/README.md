# Chairside

Voice notes → client cards → follow-up texts, for hair, nail and lash + brow pros.

After a client leaves, the pro taps **Add voice notes** and talks for 10–30 seconds. Chairside:

1. transcribes the memo (OpenAI Whisper, swappable for Deepgram),
2. turns it into a client card with trade-specific fields (Claude, structured output), where every field can be corrected with one tap,
3. drafts three follow-up texts (thank-you + aftercare today, a day-2 check-in, and a rebook nudge one week before the rebook date with the salon's booking link). Each can be switched off, and all are scheduled with one tap.
4. On desktop the owner gets all clients, visit history, follow-up status and a **"N rebook texts due this week — Send all"** banner.

Only the professional's own voice memo is ever recorded. The record screen says: *"Speak after your client leaves. Only your voice memo is recorded, never the client."*

## Stack

| Piece | What |
| --- | --- |
| App | Next.js 16 (App Router) + TypeScript + Tailwind v4, deployed on Vercel |
| Data | Supabase Postgres with row-level security, magic-link auth, private `audio` storage bucket |
| Speech to text | `src/lib/stt/` — `SpeechToText` interface; `whisper` (default) or `deepgram` via `STT_PROVIDER` |
| Extraction | `src/lib/extraction/` — Claude structured output (Zod schema per trade) + 3 worked examples per trade in the prompt + a deterministic jargon normaliser (`"seven N plus eight point one"` → `7N + 8.1`) |
| Texts | `src/lib/followups/` — drafting, compliance rules, timing; `src/lib/sms/` — Twilio Messaging Service or test mode |
| Sending | `/api/cron/send-followups`, run every 15 minutes by Vercel Cron (`vercel.json`) |
| Billing | Stripe Checkout + Customer Portal, Solo $7.99/mo and Salon $49/mo per location, 14-day trial |
| PWA | `src/app/manifest.ts`, `public/sw.js`, icons in `public/icons` |

## Compliance, built in

| Rule | Where it is enforced |
| --- | --- |
| Consent is a required yes/no when a client is created; `consent_at` + method stored | New client form, `createClientAction`, DB check constraint `consent_recorded` |
| No texts are ever scheduled without consent | `scheduleFollowupsAction`, and the `followups_guard` DB trigger (it rejects `status = 'scheduled'` for clients without consent, who have opted out, or who have no phone) |
| Every text starts with the salon name and ends with "Reply STOP to opt out" | `formatMessage()`, applied when drafting, when scheduling, and again right before sending |
| Inbound STOP / UNSUBSCRIBE etc. immediately opts out and cancels scheduled texts | `/api/twilio/inbound` sets `opted_out_at`, and the `clients_consent_audit` trigger skips every scheduled/draft text for that client |
| Only send 8am–8pm salon time, otherwise the next 8am | `nextAllowedSendTime()` at scheduling, and `decideSend()` in the sender reschedules anything due in quiet hours |
| Canada: no rebook texts to clients with no visit in 24 months | `canadaRebookBlocked()` at scheduling and at send time |
| Thank-you and check-in texts contain no offers or discounts | Drafting prompt, `findOfferLanguage()` in the editor (blocks Schedule), at scheduling, and at send time (the text fails rather than sends) |
| Audit log of consent changes and sent messages | `audit_log` table, written by DB triggers (consent / opt-out) and the sender (sent, test-mode, failed, skipped, undelivered); shown in Settings |

Texts are claimed (`scheduled → sent`) in the database *before* the provider call, so a text can't be sent twice even if two cron runs overlap. Only the service role can mark a text sent or failed.

## Local setup

Requirements: Node 20+, Docker (for the local Supabase stack) and the [Supabase CLI](https://supabase.com/docs/guides/cli).

```bash
cd chairside
npm install
supabase start              # starts Postgres, Auth, Storage, Studio and a local mail inbox
supabase db reset           # applies supabase/migrations and supabase/seed.sql
cp .env.example .env.local  # then paste the API URL, anon key and service_role key that `supabase start` printed
npm run dev                 # http://localhost:3000
```

Sign in as **demo@chairside.test**. The magic link lands in the local inbox at http://localhost:54324. The seed gives that account 3 demo clients per trade with cards, visit history and texts in every state. A new account can load the same demo clients from onboarding or **Settings → Demo clients**.

Only the Supabase variables are needed to run locally. Without the other keys:

- **No `OPENAI_API_KEY`**: the record screen offers typed notes instead of recording.
- **No `ANTHROPIC_API_KEY`**: cards start blank, and texts are drafted from templates.
- **No Twilio keys** (or `SMS_TEST_MODE=true`): **test mode**. Texts are logged to the server console and the audit log instead of being sent.
- **No `STRIPE_SECRET_KEY`**: billing is off and everything is unlocked.

To run the sender locally, call it the way Vercel Cron does:

```bash
curl -H "Authorization: Bearer $CRON_SECRET" http://localhost:3000/api/cron/send-followups
```

### Tests

```bash
npm test                  # compliance rules, quiet hours, Canada rule, offer filter, STOP keywords,
                          # message wrapper, send-time defaults, jargon normaliser, Twilio signatures
npm run test:extraction   # live eval: 10 sample transcripts per trade → Claude → card (needs ANTHROPIC_API_KEY)
```

The extraction eval (`tests/extraction.eval.test.ts`, fixtures in `tests/fixtures/transcripts.ts`) checks the notation as well as the facts, e.g. `7N + 8.1`, `20 vol`, `35 min`, `C curl`, `9-12 mm`, `0.07`, `short almond`. It prints a pass count per trade. The worked examples in the prompt (`src/lib/extraction/examples.ts`) are deliberately different memos from the eval fixtures.

## Environment variables

See `.env.example` for the full list with comments.

| Variable | Needed for |
| --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Always |
| `SUPABASE_SERVICE_ROLE_KEY` | Cron sender, Twilio + Stripe webhooks, staff invite emails (server only) |
| `APP_URL` | Twilio/Stripe callbacks, invite links, e.g. `https://chairside.example.com` |
| `OPENAI_API_KEY` (+ optional `OPENAI_TRANSCRIBE_MODEL`) | Whisper transcription |
| `STT_PROVIDER=deepgram` + `DEEPGRAM_API_KEY` | To use Deepgram instead |
| `ANTHROPIC_API_KEY` (+ optional `ANTHROPIC_MODEL`, default `claude-opus-5`) | Card extraction and text drafting |
| `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `TWILIO_MESSAGING_SERVICE_SID` | Real sending (otherwise test mode) |
| `SMS_TEST_MODE=true` | Force test mode even with Twilio keys set |
| `CRON_SECRET` | Protects `/api/cron/send-followups` |
| `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_SOLO`, `STRIPE_PRICE_SALON` | Billing |

## Deploy to Vercel

1. **Supabase project.** Create one at supabase.com, then link it and push the schema:
   ```bash
   supabase link --project-ref <your-ref>
   supabase db push
   ```
   Don't run `seed.sql` in production; it creates a demo login. Under **Authentication → URL Configuration**, set the Site URL to your domain and add `https://<your-domain>/auth/callback` to the redirect URLs. Set up custom SMTP under **Authentication → Emails** so magic links come from your domain.
2. **Vercel project.** Import the repo and set **Root Directory** to `chairside` (framework: Next.js).
3. **Environment variables.** Add everything from the table above to the Vercel project (Production and Preview).
4. **Cron.** `vercel.json` runs the sender every 15 minutes. Vercel's Hobby plan only allows daily crons, so use Pro, or call the endpoint from Supabase instead (enable `pg_cron` and `pg_net`):
   ```sql
   select cron.schedule('chairside-send', '*/15 * * * *', $$
     select net.http_get(
       url := 'https://<your-domain>/api/cron/send-followups',
       headers := jsonb_build_object('Authorization', 'Bearer <CRON_SECRET>')
     );
   $$);
   ```
5. **Twilio webhooks.** In the Messaging Service, set *Incoming messages* to `https://<your-domain>/api/twilio/inbound`. Delivery status goes to `/api/twilio/status` automatically when `APP_URL` is set.
6. **Stripe webhook.** Add an endpoint at `https://<your-domain>/api/stripe/webhook` for `checkout.session.completed` and `customer.subscription.created/updated/deleted/paused/resumed`, then copy its signing secret into `STRIPE_WEBHOOK_SECRET`.

## Things you need to do yourself

These need your identity or business details, so they can't be done in code.

- **Twilio US A2P 10DLC registration** (required before texting US numbers). In the Twilio Console → Messaging → Regulatory Compliance, register your **Brand** (business name, EIN, address) and then a **Campaign** (use case: "Customer care" / "Account notifications"; sample messages: copy a thank-you and a rebook text from the app; opt-in description: *"Clients agree in person at their appointment; the pro records their yes in the app"*). Attach a US 10DLC number to the Messaging Service. Approval usually takes a few days to a few weeks, and unregistered traffic is blocked or filtered. In the Messaging Service, keep **Advanced Opt-Out** on so Twilio sends the carrier-required STOP/HELP replies.
- **Canada.** Canadian numbers can send from the same Messaging Service. The app already applies the 24-month rule for rebook texts.
- **Australian sender ID.** To send as the salon's name (alphanumeric sender ID, e.g. "MaisonHair"), register it in the Twilio Console under Messaging → Sender IDs. Australia now requires sender IDs to be registered. Alphanumeric senders can't receive replies, so also add an Australian mobile number to the Messaging Service if you want STOP replies to reach `/api/twilio/inbound`. The app's "Reply STOP to opt out" footer assumes replies are possible.
- **Stripe account.** Create the account and finish business verification, then create two recurring monthly prices: **Solo $7.99** and **Salon $49** (the Salon price is charged per location using quantity). Put the price IDs in `STRIPE_PRICE_SOLO` / `STRIPE_PRICE_SALON`. Turn on the Customer Portal (Settings → Billing → Customer portal) with plan switching and cancellation allowed. The 14-day trial is set on each Checkout session.
- **App Store later (Capacitor).** The app is already an installable PWA (Add to Home Screen on iOS, Install on Android/desktop). For the stores, wrap it with Capacitor: `npm i @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android`, `npx cap init`, point `server.url` at your deployed domain, add `NSMicrophoneUsageDescription` ("Record your own voice notes after a client leaves") to the iOS Info.plist, then `npx cap add ios` / `android`. You'll need an Apple Developer account ($99/yr) and a Google Play developer account. Note that Apple may require in-app purchase for subscriptions bought inside the iOS app.

## Project layout

```
chairside/
  supabase/migrations/   schema, RLS, compliance triggers, demo-data function
  supabase/seed.sql      local demo login + demo clients
  src/app/(app)/         Today, Clients (desktop 3-column), Record, Card, Profile, Settings
  src/app/api/           transcribe, visits, drafts, send-rebooks, cron, twilio, stripe
  src/lib/               trades, card schema, extraction, stt, followups, sms, billing
  tests/                 unit tests + 30-transcript extraction eval
```

## Notes

- Staff: the owner invites team members by email in Settings. When an invited person first signs in, they join the salon as staff with their own trade. Everyone in an account sees all of its clients.
- Audio is stored privately per account (`audio/<account_id>/<client_id>/…`) and played back with short-lived signed URLs.
- Claude requests to `claude-opus-5` use server-side refusal fallbacks (`fallbacks: "default"`), so a declined request is retried on another model within the same call.
