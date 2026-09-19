# DMDroid SaaS SEO Plan

> Generated with `seo-plan` (claude-seo v2.3.1, SaaS template), tailored to
> dmdroid.app. Last updated: 2026-09-19.

## 1. Discovery

- **Business:** Cold DM outreach automation for Instagram (Chrome extension +
  dashboard). Runs on the user's PC or VPS, or fully hosted via Done-For-You.
- **ICP:** SMMA owners, agency owners, coaches doing client acquisition via
  Instagram DMs.
- **Offers:** Solo Operator $69/mo (1 account) · Agency from $106/mo (2–30
  accounts) · Done-For-You custom. Every plan starts with a 3-day free trial
  (card required).
- **Goal:** Organic trial signups. KPIs = trials from organic, comparison-page
  rankings, AI citations.
- **Constraints:** 4 indexed pages (`/`, `/support`, `/privacy-policy`,
  `/terms`), no blog, no real reviews yet, new domain.

## 2. Competitive snapshot

| Competitor | Price | Their SEO edge | Our opening |
|---|---|---|---|
| ColdDMs | $99/mo | Guarantee, Chrome-store ratings, blog | Undercut ($69), DFY they lack, takeout page |
| LinkDM | ~premium | Meta-certified, comment-to-DM | Different job (inbound vs our outbound); alternative page |
| ManyChat | from $15 | Multi-channel giant, huge authority | Instagram-specialist angle; out-specify, not out-authority |
| IGdm Pro | $9–20 | Cheap + "alternatives" posts ranking | Agency-grade pick above them |

## 3. Architecture

```
/ (live)
/support (live — expand to 400+ words)
/compare/dmdroid-vs-colddms (phase 2)
/compare/linkdm-alternative (phase 2)
/blog/how-to-dm-on-instagram-for-business (phase 2)
/blog/instagram-auto-reply-vs-outreach (phase 3)
/customers (phase 3, once 3 real quotes exist)
```

Internal-linking rule: every new page links to `/#pricing` + one matching FAQ
entry; every FAQ answer links to its matching page once it exists.

## 4. Content strategy (mapped to keyword-gap files)

1. **`/compare/dmdroid-vs-colddms`** — targets ColdDMs brand + "cold DM
   tool" intent. Comparison pages convert at 4–7% in SaaS vs 0.5–1.8% for
   blog content. Table draft already approved.
2. **`/compare/linkdm-alternative`** — targets `linkdm` (2,900 vol) the way
   igdm.me's alternatives post does for them.
3. **`/blog/how-to-dm-on-instagram-for-business`** — targets
   `how to dm on instagram` (3,600 vol; competitor ranks #62, wide open).
4. **`/blog/instagram-auto-reply-vs-outreach`** — targets the autoresponder
   cluster (~$14 CPC) with honest outbound-vs-inbound framing.
5. **Reviews engine** — Chrome Web Store listing + G2 profile; every
   trial-to-paid email asks once. Unblocks testimonials, `AggregateRating`
   schema, and the `/customers` page.

## 5. Technical foundation (status 2026-09-19)

Done: robots.ts, sitemap.ts, per-page canonicals, title.template, JSON-LD
`@graph` (Organization/WebSite/SoftwareApplication/FAQPage), OG card
(1200×630, 44 KB), `overflow-x: clip`, `images.unoptimized` removed,
`/vsl` + `/sandbox` + orphan API routes deleted, IndexNow key live, all 4
URLs submitted (HTTP 202).

Remaining: font loading (`display: swap`, drop unused families), GSC
verification token, per-page OG `url`, sitemap `lastModified`, explicit
AI-crawler allows in robots.ts, Organization logo ≥112px.

## 6. Roadmap

### Phase 1 — Foundation (weeks 1–4, in progress)

- Deploy current code; verify GSC + IndexNow live.
- Chrome Web Store listing; G2/Capterra profiles.
- SEO drift baseline (snapshot titles, metas, schema, copy).

### Phase 2 — Expansion (weeks 5–12)

- Ship both `/compare/` pages.
- First 2 blog posts; expand `/support` to 400+ words.
- Review flywheel starts (ask every new paid user once).

### Phase 3 — Scale (months 4–6)

- Autoresponder post; `/customers` with real numbers.
- Product Hunt launch; internal-link pass.
- GEO check: are we cited for `instagram dm automation` in ChatGPT/Perplexity?

### Phase 4 — Authority (months 7–12)

- Benchmark post (real send/reply-rate data).
- Affiliate program; scraper-integration content.
- Continuous optimization driven by drift diffs.

## 7. KPI targets

| Metric | Now | 3 mo | 6 mo | 12 mo |
|---|---|---|---|---|
| Indexed pages | 4 | 8 | 12 | 20+ |
| Keywords top 20 | 0 | 5 | 15 | 30 |
| Organic trials/mo | 0 | 10 | 40 | 150 |
| Avg. LCP mobile | unmeasured | <2.5s | <2.5s | <2.0s |
| Reviews (CWS+G2) | 0 | 15 | 50 | 150+ |

## 8. Risks

- Comparison pages must keep numbers frozen: min 5 variants/step,
  500+/day across accounts, PC/VPS/DFY hosting truth.
- Nominative fair use covers competitor brand mentions for honest comparison.
  No false claims, no implied endorsement.
