---
name: affiliate-researcher
description: Research which affiliate funnels are working organically right now and which products give the best return, then write a dated daily report with a summary table and a verdict on the best organic model. Use when asked for the affiliate research report, the daily affiliate report, or to find the best organic affiliate funnels/products.
---

# Affiliate Researcher

Produce a daily report on organic (non-paid) affiliate funnels that are working
now, the products they promote, and which model gives the best return on time.
Follow the rules in `affiliate-100k/CLAUDE.md`, especially "Model with evidence",
"Work back from the number" and "Verify before delivering".

## Steps

1. **Read the last report** in `affiliate-100k/research/reports/` (newest file),
   so today's report can say what changed.
2. **Search the web** (WebSearch; use `extended` for recency-sensitive queries).
   Cover at least these organic channels, one or more queries each, restricted
   to the current year:
   - Short-form video (TikTok, Instagram Reels, YouTube Shorts) + comment-keyword
     DM automation
   - YouTube long-form reviews and tutorials (search intent)
   - Pinterest → blog or lead magnet → email
   - Newsletter / email list (lead magnet → nurture → recommendations)
   - SEO blog and comparison pages
   - TikTok Shop affiliate
   - Communities (Skool, Whop, Reddit, Facebook groups)
   Also search for the highest recurring and high-ticket affiliate programs this
   year (SaaS, funnel builders, email tools, AI tools, the wellness niche).
3. **Check primary sources.** For every commission rate you report, try to open
   the program's own affiliate page (WebFetch). If you can't reach it, mark the
   figure as "unverified, per <source>". Never invent income figures,
   conversion rates or testimonials. Treat course sellers' and tool vendors'
   claims as claims.
4. **Score each funnel model** from 1 to 5 on:
   - **Commission economics:** rate × price × recurring months
   - **Time to first sale:** how fast it can work organically
   - **Compounding:** owned audience, evergreen content
   - **Effort/cost:** hours per week and tool cost
   - **Evidence quality:** verified, mixed or claims only
   ROI signal = (economics + compounding + speed) − effort, adjusted down when
   the evidence is weak. Show the inputs, not just the score.
5. **Write the report** to `affiliate-100k/research/reports/YYYY-MM-DD.md` using
   the template below. Keep it short enough to read in 3 minutes.
6. **Deliver:** commit the report on the current branch and push it. Then reply
   with the summary table and the verdict, and list every source as a markdown
   link.

## Report template

```markdown
# Affiliate Research Report: YYYY-MM-DD

## Summary table
| # | Funnel model (organic) | Traffic → capture → offer | Best products right now | Commission (source, verified?) | Time to 1st sale | Effort | Evidence | ROI signal (1–5) |
|---|---|---|---|---|---|---|---|---|

## Top recurring / high-ticket programs today
| Program | Category | Commission | Duration | Cookie | Verified? |
|---|---|---|---|---|---|

## What changed since the last report
- ...

## Verdict
**Best organic model to implement:** ...
Why (with the maths: traffic × capture % × conversion % × commission = monthly):
State which inputs are assumptions.
**Next action for Veronica:** one concrete step + the metric that proves it worked.

## Caveats
- Unverified figures, conflicting sources, compliance notes (FTC disclosure,
  platform rules, email opt-in).

## Sources
- [title](url)
```

## Rules

- Organic only. Paid-ads funnels may be mentioned only as a later scale-up.
- Prefer recurring commissions and owned audiences (email) over one-off sales.
- Don't change the verdict day to day without new evidence. Say what new
  evidence caused a change.
- Ask before any outward-facing action: posting, emailing, joining programs or
  spending money.
