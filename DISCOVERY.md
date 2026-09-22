# DMDroid SEO Discovery — Hypothesis Backed With Data

> Handoff doc. Everything below was measured, not assumed: SERP teardowns
> from saved Google result pages, Kit API responses, DNS lookups, and the
> live codebase at `dmdroid.app` (Next.js 16 App Router, repo `ayu-xd/landingpage`).
> Date: 2026-09-20.

## 1. The hypothesis

**AI citations (not blue links) are the winnable surface for a zero-authority
domain, and they are earned with exact-match tutorial videos + consensus-matching
copy on borrowed-authority platforms — not with homepage perfection.**

Evidence chain:

1. Query `instagram cold dm automation` (saved SERP, Sep 2026): Google shows
   **AI Mode answers (2x), ads, a video pack, and 7 organics**. A YouTube video
   with ~1.1k views from a 5-month-old channel ("Johnny") is cited repeatedly
   alongside ColdDMs and Manychat.
2. Why the nobody-video wins: exact-match title (`How To Automate Cold
   Instagram DM Outreach In 2026`), auto-transcript giving timestamped quotable
   chunks (9:12, 10:37 in the answer), recency marker, and full consensus match
   with the synthesized answer. Channel authority plays no role — views never
   enter the citation equation.
3. The AI answer's safety section states consensus as fact: *"Keep Volume Low:
   fewer than 50 outbound DMs per day."* Pages contradicting the synthesized
   consensus don't get cited (Floate: corroboration is how models construct
   reality). Our `500/day` claim only survives because we qualify it as
   ~50/account × 10+ accounts — diverse phrasing of the same consensus.
4. ColdDMs embeds its YouTube demo on its root page, and the same AI answer
   cites both the domain and the videos. The embed is an entity bridge
   (video ↔ domain), not decoration.
5. Branded query `dmdroid` currently returns our stale homepage (#1, old
   title/meta) plus an AI Overview describing a *different* DMDroid (Android
   malware research framework). Zero entity signals = name collision wins.

## 2. SERP teardown: `instagram cold dm automation` (measured)

- Features: 2× AI Mode, Sponsored (instaoutreach, Reachlee), Videos pack,
  5× People Also Ask, no map pack.
- PAA (verbatim, free brief): `How to cold DM on Instagram?` /
  `Can Instagram DMs be automated?` / `Is there an Instagram DM automation
  bot available?` / `How do I send 100 messages at once on Instagram?`
- Top 7: colddms.com (tool home, hard) · reddit r/developers thread
  (parasite target) · instaoutreach.com (tool home, mid) · socioverse.io guide
  (template to mirror/beat) · webveda.com 2025 listicle (pitch inclusion +
  build our own) · instadm.ai (tool home, mid) · scribd PDF (outclassable).
- dmdroid mentions: 0. Missing format: dedicated comparison page.

## 3. Competitor intel (measured)

| Competitor | Price | Notes |
|---|---|---|
| ColdDMs | $99/mo (1 acct), Scale $174+, Enterprise $999 | Guarantee (client in 30d or refund), Chrome-store ratings as hero proof, YT channel ~43 subs biweekly, demo embedded on homepage |
| LinkDM | premium | Meta-certified, comment-to-DM (inbound) — different job from our outbound; `linkdm` = 2,900 vol alternative-page target |
| Manychat | from $15 | Multi-channel giant; cited in AI answers; cannot out-authority, out-specify |
| IGdm Pro | $8.99–19.99 | Ranks #6 for `linkdm` via alternatives post (136 visits/mo from it) |
| Johnny / Instaworm | $29/mo (per AI answer) | Founder-led video parasite engine, 2 citation slots held with ~1k views |
| instaoutreach.com | unknown | H1 formula worth copying: "Turn Cold DMs Into Clients" |

## 4. Keyword gaps (measured, from competitor gap CSVs)

- `how to dm on instagram` 3,600 vol (competitor ranks #62) · `instagram
  auto reply / autoresponder` 1,900–2,400 vol ~$14 CPC · `instagram dm
  automation` 320 vol **$19.04 CPC** · `instagram automation tool` 390 vol
  $14.11 · `linkdm` 2,900 vol $14.20 · `instagram 20 messages` 2,400 vol ·
  `what/how Instagram DMs` informational 590 vol each.
- Highest CPC terms had zero exact-phrase coverage on our homepage until the
  `automates` restore (subhead + meta now carry it).

## 5. What's already built (repo state @ `6ea0d2e` + later)

- Technical: robots.ts, sitemap.ts (auto-includes blog), per-page canonicals,
  title.template, JSON-LD @graph (Organization/WebSite/SoftwareApplication/
  FAQPage, 15/15 mapped), OG 1200×630 44KB, `overflow-x: clip`,
  `images.unoptimized` removed, `/vsl` + `/sandbox` + orphan API routes
  deleted, `www → apex` 308 (Vercel), IndexNow key live + 4 URLs submitted
  (HTTP 202).
- Copy truth-passed: PC/VPS/DFY hosting, 500+/day across 10+ accounts
  (~50/account, matches AI consensus), min 5 variants/step (anti-ban reason
  stated once), zero em dashes in user copy, H1 `Cold DM outreach, automated`.
- Blog: MDX scaffold (`content/blog/*.mdx`, `/blog`, `/blog/[slug]` with
  BlogPosting schema + trial CTA), Outstatic CMS at `/outstatic` (GitHub OAuth
  live), Kit newsletter (`/api/subscribe` two-step create→attach, Pine form
  ID `9939062`, honeypot, brand-matched component on post template).
- Strategy docs in repo root: `SEO-STRATEGY.md`, `CONTENT-STRATEGY.md`,
  `LEAD-MAGNET-STRATEGY.md`, `BRAND-COLORS.txt`.

## 6. Open items (ordered)

1. GSC: confirm sitemap Success, request indexing on `/` + `/blog` (host
   consolidation apex vs www still propagating).
2. Kit: verify sender address, confirmation-email copy, `blog-lead` tag +
   3-email welcome automation; set `KIT_API_KEY` + `KIT_FORM_ID` in Vercel.
3. Outstatic: replace `my-content` collection with `posts` on `content/blog`
   (fields: title/description/date) or posts never surface.
4. Record video #1 (exact-match tutorial), embed on homepage with VideoObject
   schema; video #2 (best-tool framing); video #3 (PAA limits question).
5. Ship `/compare/dmdroid-vs-colddms` + `/compare/linkdm-alternative`.
6. Entity stacking: Chrome Web Store, G2, Capterra, AlternativeTo, LinkedIn
   company, X — same definition everywhere, target 10+ sources/30 days.
7. Parasite cadence: every post ships with a Reddit answer + LinkedIn post.
8. Fonts (`display: swap`, drop 2 families), GSC verification token, sitemap
   `lastModified`, AI-crawler allows in robots.ts, Org logo ≥112px.
9. Testimonials: placeholders live — replace with real quotes or empty the
   array (section auto-hides) before any paid traffic.

## 7. SEMrush data (2026-09-22, source: SEO OPTIMIZATION/)

### ColdDMs organic: a paper tiger

83 ranking keywords, ~153 visits/mo, **93% branded** (`colddms` 112 visits /
73%, plus `cold dms`, `cold dm`). One non-brand #1:
`automated instagram outreach` (50 vol, KD 0%, uncontested). Everything else
ranks pos 15–77 with zero traffic. Conclusion: no working non-brand SEO to
beat — only a homepage with a logo.

### Keyword gap: dmdroid ranks for nothing (all zeros — expected, 1 wk indexed)

Money terms (ColdDMs pos = our target):

| Keyword | Vol | Their pos | KD | CPC | Play |
|---|---|---|---|---|---|
| `cold outreach tool` | 30 | 41 | 36% | $38.80 | Comparison page |
| `cold outreach automation` | 260 | 45 | 36% | $34.19 | Dedicated section (FAQ covers intent only) |
| `cold outreach tools` | 30 | 47 | 29% | $22.41 | `best cold outreach tools` listicle |
| `instagram crm` | 260 | 57 | 7% | $13.96 | **Unowned category — claim "Instagram DM CRM"** |
| `instagram dm crm` | 70 | 42 | 2% | $12.22 | Same cluster |
| `cold dms` | 170 | 1 | 12% | $7.10 | Attackable generic win |
| `mass dm instagram` | 50 | 29 | 7% | $5.46 | Safety-angle post (<50/account truth) |
| `linktodm` | 390 | 38 | 31% | $7.90 | Feature/comparison check |

### Three derived plays

1. **Instagram CRM flank.** `instagram crm` / `instagram dm crm` / `crm
   instagram` (260+70+30 vol, KD 2–9%) owned by nobody; ColdDMs ranks by
   accident in the 40s–60s. We have pipeline + unibox + per-account
   tracking. First to name the category wins it: new H2/FAQ + `/for/agencies`
   angle ("your Instagram CRM").
2. **Template trojan.** `instagram dm outreach tracking google sheets
   template smma` (260 vol, KD 0%): a free Sheet template ranks #1 by
   existing and doubles as an email-gated lead magnet (`magnet-template`).
3. **Brand parasites by volume:** `pilotdm` (1.6K) → `linktodm` (390) →
   `autoigdm` / `coldmath` (210) → `igdm pro` / `reachowl` (50–140). One
   reusable `X-alternative` comparison template covers the cluster.

### Attack order

CRM cluster (easiest) → cold-outreach money terms (highest CPC) →
templates (free traffic + emails) → brand parasites (volume).
