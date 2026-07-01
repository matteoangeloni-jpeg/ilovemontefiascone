# English Publication Readiness

Updated: 2026-06-19  
Scope: English content under `/en/` only.  
Publication status: not published for indexing.

## Executive Status

The English version is **almost ready** from a content and technical-readiness perspective, but it should remain unpublished until the Italian version has stabilised in Google indexing.

The Italian site remains the primary version. This sprint did not create a public English sitemap, did not add reciprocal hreflang, did not remove robots blocking for `/en/`, and did not add visible links from the Italian site to the English version.

## Pages Checked

| Page | Status | SEO | Content | Localization | Technical | Notes |
|---|---:|---:|---:|---:|---:|---|
| `/en/index.html` | Ready | 94 | 90 | 90 | 95 | Strong hub page; useful context for Lake Bolsena, Tuscia and northern Lazio. |
| `/en/things-to-see-montefiascone.html` | Ready | 95 | 92 | 91 | 96 | Strong core page for attractions and first-time visitors. |
| `/en/montefiascone-travel-guide.html` | Ready | 95 | 92 | 92 | 96 | Good pillar-style guide and internal linking. |
| `/en/rocca-dei-papi-montefiascone.html` | Ready | 95 | 90 | 91 | 96 | Dedicated attraction page with panoramic, historical and planning context. |
| `/en/cathedral-santa-margherita-montefiascone.html` | Ready | 95 | 90 | 91 | 96 | Dedicated architecture page explaining the dome and visitor context. |
| `/en/basilica-san-flaviano-montefiascone.html` | Ready | 95 | 90 | 91 | 96 | Dedicated page for San Flaviano, the Via Francigena and the Est legend. |
| `/en/lake-bolsena.html` | Almost ready | 94 | 86 | 88 | 96 | Accurate and useful, but can later support more sensory/travel detail. |
| `/en/montefiascone-wine-guide.html` | Ready | 94 | 90 | 92 | 96 | Good explanation of Est! Est!! Est!!! and wine context. |
| `/en/est-est-est-montefiascone-doc-wine.html` | Ready | 95 | 91 | 92 | 96 | Focused wine entity page for the DOC, legend, terroir and cautious tasting advice. |
| `/en/via-francigena-montefiascone-viterbo.html` | Ready | 95 | 90 | 91 | 96 | Dedicated pilgrimage page with practical caution and route context. |
| `/en/how-to-get-to-montefiascone.html` | Ready | 95 | 90 | 90 | 96 | Practical and cautious about transport details. |
| `/en/where-to-stay-in-montefiascone.html` | Ready | 94 | 88 | 90 | 96 | Good intent match without inventing hotels. |
| `/en/where-to-eat-in-montefiascone.html` | Almost ready | 94 | 84 | 88 | 96 | Useful but intentionally generic; can be enriched later with verified categories only. |
| `/en/best-time-to-visit-montefiascone.html` | Ready | 94 | 89 | 90 | 96 | Strengthened with a season-planning section. |
| `/en/weekend-in-montefiascone.html` | Ready | 94 | 90 | 90 | 96 | Strengthened with base-selection context. |
| `/en/montefiascone-in-one-day.html` | Almost ready | 94 | 85 | 89 | 96 | Good structure; could later add a clearer morning/afternoon flow. |
| `/en/parking-in-montefiascone.html` | Ready | 94 | 88 | 89 | 96 | Correctly avoids volatile parking claims. |
| `/en/tourist-information-montefiascone.html` | Almost ready | 94 | 84 | 88 | 96 | Technically sound; can be expanded only with verified official information. |
| `/en/best-villages-on-lake-bolsena.html` | Ready | 94 | 89 | 90 | 96 | Strengthened with Montefiascone as lake viewpoint. |
| `/en/what-to-see-on-lake-bolsena.html` | Almost ready | 94 | 85 | 89 | 96 | Good hub; can later gain more route-planning nuance. |
| `/en/lake-bolsena-in-one-day.html` | Almost ready | 94 | 85 | 89 | 96 | Useful but concise. |
| `/en/bolsena-things-to-see.html` | Almost ready | 94 | 85 | 89 | 96 | Good factual framing; could later add more visitor flow. |
| `/en/marta-lake-bolsena-things-to-see.html` | Almost ready | 94 | 85 | 89 | 96 | Useful concise guide. |
| `/en/capodimonte-lake-bolsena-things-to-see.html` | Almost ready | 94 | 85 | 89 | 96 | Useful concise guide. |
| `/en/civita-di-bagnoregio-from-montefiascone.html` | Ready | 95 | 90 | 90 | 96 | Strong practical caution on tickets/accessibility. |

## Current QA Results

Automated checks over 25 English HTML pages:

- Title length: all under 60 characters.
- Meta description length: all between 120 and 155 characters.
- H1: exactly one H1 per page.
- JSON-LD: valid JSON on all pages.
- OG/Twitter: present and complete on all pages.
- Internal linking: no missing `/en/` page links found.
- EN to DE links: none found.
- EN to Italian root content links: none found.
- Mojibake: no real `più`, `è`, `Sì`, `Â`, or replacement-character issues found after cleanup.
- GitHub Pages/pages.dev references: none found.
- Public staging phrase: removed `English version in preparation` from visitor-facing footer copy.

## Pages Still Weaker

These pages are not broken, but remain concise and should be strengthened before a major international launch if time allows:

- `/en/tourist-information-montefiascone.html`
- `/en/where-to-eat-in-montefiascone.html`
- `/en/lake-bolsena-in-one-day.html`
- `/en/what-to-see-on-lake-bolsena.html`
- `/en/bolsena-things-to-see.html`
- `/en/marta-lake-bolsena-things-to-see.html`
- `/en/capodimonte-lake-bolsena-things-to-see.html`
- `/en/montefiascone-in-one-day.html`

## Newly Added EN Spoke Pages

The second English-readiness pass added five publication-grade spoke pages:

- `/en/rocca-dei-papi-montefiascone.html`
- `/en/cathedral-santa-margherita-montefiascone.html`
- `/en/basilica-san-flaviano-montefiascone.html`
- `/en/est-est-est-montefiascone-doc-wine.html`
- `/en/via-francigena-montefiascone-viterbo.html`

These pages are intentionally not linked from the Italian public site and are not included in any public sitemap. They strengthen the future English hub-and-spoke graph without changing current publication status.

Do not expand these with invented opening hours, restaurant names, hotel names, event dates, transport guarantees, ticket prices, or exact access conditions. Add only verified or evergreen planning context.

## Publication Conditions

Publish EN only when all conditions below are true:

1. The Italian homepage and main IT hubs have been crawled and at least partially indexed.
2. Search Console shows no blocking technical issue for the canonical `www` host.
3. The IT sitemap is read correctly and reports discovered pages.
4. The EN pages have received one manual editorial pass in browser view on mobile and desktop.
5. Any volatile visitor information has been checked against official/local sources or phrased cautiously.
6. Language switcher and reciprocal hreflang are implemented together, not in separate partial releases.

## When to Create `sitemap-en.xml`

Create `sitemap-en.xml` only during the EN go-live sprint, after:

- final page list is frozen;
- all EN canonical URLs are confirmed;
- robots blocking for `/en/` is ready to be removed;
- reciprocal hreflang pairs are ready for IT and EN.

Do not create a public EN sitemap while `/en/` is intentionally blocked.

## When to Add Reciprocal Hreflang

Add IT/EN reciprocal hreflang only when EN is ready to be indexed.

Minimum pairs:

- IT homepage ↔ EN homepage
- IT `cosa-vedere` hub ↔ EN `things-to-see` hub
- IT travel guide/pillar ↔ EN travel guide
- IT Lake Bolsena hub ↔ EN Lake Bolsena hub
- IT wine hub ↔ EN wine guide
- IT logistics pages ↔ EN logistics equivalents

Every hreflang URL must be canonical, indexable and return 200.

## When to Remove Robots Blocking

Remove `Disallow: /en/` only after:

- `sitemap-en.xml` is ready;
- hreflang is live and reciprocal;
- EN internal links are final;
- Search Console property can monitor the language rollout;
- a crawl test confirms no EN links to `/de/`, staging files, missing pages or volatile draft content.

## When to Add a Visible Language Switcher

Add visible IT↔EN language switching only at EN publication time.

Before that, do not expose EN from the IT navigation, footer, homepage, sitemap, or visible CTAs. Keeping EN hidden avoids Google discovering and evaluating a blocked or incomplete language layer too early.

## Risks If EN Goes Live Too Early

- Google may crawl a thin or partially localised English layer before the Italian site has trust signals.
- Hreflang can create confusion if reciprocal tags are incomplete.
- EN pages may compete with IT pages if canonical and language signals are introduced inconsistently.
- A public EN sitemap while robots still blocks `/en/` can create mixed crawl signals.
- International users may find concise pages before local details have been verified.
- AI systems may cite cautious draft text instead of mature Italian hub content.

## Final Recommendation

Keep EN ready in the repository but unpublished for indexing.

Recommended status: **QUASI PRONTA / ALMOST READY**.

Next EN sprint should focus on final manual copy polish and browser QA, then a controlled publication package that includes `sitemap-en.xml`, reciprocal hreflang, robots update and visible language switcher in the same release.
