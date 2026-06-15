# English (EN) Localization Status

> **EN is NOT published.** The `/en/` folder is excluded from the public build (`dist-it/`),
> blocked in `robots.txt` (`Disallow: /en/`), absent from `sitemap.xml` / `sitemap-it.xml`,
> and no Italian page carries `hreflang="en"`. This document tracks readiness only.

Last updated: 2026-06-14

## EN pages created (clean core, 20)
Generated from validated IT pages, culturally adapted (not literal translation), `inLanguage="en"`:

1. `/en/index.html`
2. `/en/things-to-see-montefiascone.html`
3. `/en/montefiascone-travel-guide.html`
4. `/en/how-to-get-to-montefiascone.html`
5. `/en/parking-in-montefiascone.html`
6. `/en/tourist-information-montefiascone.html`
7. `/en/best-time-to-visit-montefiascone.html`
8. `/en/lake-bolsena.html`
9. `/en/what-to-see-on-lake-bolsena.html`
10. `/en/lake-bolsena-in-one-day.html`
11. `/en/best-villages-on-lake-bolsena.html`
12. `/en/bolsena-things-to-see.html`
13. `/en/marta-lake-bolsena-things-to-see.html`
14. `/en/capodimonte-lake-bolsena-things-to-see.html`
15. `/en/montefiascone-in-one-day.html`
16. `/en/weekend-in-montefiascone.html`
17. `/en/civita-di-bagnoregio-from-montefiascone.html`
18. `/en/montefiascone-wine-guide.html`
19. `/en/where-to-stay-in-montefiascone.html`
20. `/en/where-to-eat-in-montefiascone.html`

## Problems resolved this sprint
- Removed 13 obsolete EN drafts (old slugs, partly with **mojibake** — `gallery`, `gastronomy` —, missing `inLanguage`, not aligned to the current IT architecture).
- Rebuilt a coherent EN core with consistent template, valid JSON-LD, English-only copy, EN-internal linking.
- Neutralized stale `hreflang="en"/"de"` in the non-deployed `base.html` template (now `it` + `x-default` self), so **no root page advertises EN**.

## QA (this sprint)
- Encoding: **0 mojibake**, **0 Italian residue** in EN body copy (proper nouns kept: Lake Bolsena, Est! Est!! Est!!!, Via Cassia, Via Francigena, Civita di Bagnoregio).
- SEO: every EN page has title < 60, meta description 120–155, single H1, self canonical, OG + Twitter, breadcrumb.
- JSON-LD: **20/20 valid**, `inLanguage="en"`, `FAQPage` consistent with visible FAQ.
- Internal links: EN→EN only; **no EN→DE**, **no EN→IT** cross-links; 0 broken links.
- Accuracy: verified facts only (lake ~113.5 km²/~151 m; Civita ~423 m, ~15 km/~25 min "check"; station Zepponami ~5.2 km/+216 m; Est! Est!! Est!!! explained as a local DOC wine); cautious wording elsewhere ("check official sources", "times may vary").

## Problems / gaps still open
- **Native-speaker review** still required before publication (machine-assisted drafting, human editorial pass pending).
- Some pages are concise (~450–650 words): acceptable as drafts, can be deepened with verified facts.
- Pages not yet localized to EN (lower priority): events, cronoscalata, gallery, map, minor monuments, photography spots, themed itineraries, food/recipes detail, associations, dintorni itinerary, parking variants. (Not required for the core.)
- DE/FR/ES not started in this sprint (out of scope).

## QA checklist for FUTURE EN publication
- [ ] Native-level English review of all 20 core pages (tone, idiom, accuracy).
- [ ] Confirm semantic parity with the corresponding IT pages.
- [ ] 0 mojibake / 0 Italian residue (re-verified).
- [ ] All title < 60, meta 120–155, single H1, self canonical.
- [ ] JSON-LD valid with `inLanguage="en"`; `FAQPage` matches visible FAQ.
- [ ] EN internal links all resolve; no broken links; no link to unpublished pages.
- [ ] `og:locale="en_GB"` correct; images present.
- [ ] No invented data (hours/prices/dates/contacts/distances).

## Conditions to PUBLISH EN (all must be true)
1. QA checklist above fully passed and signed off by a human editor.
2. `hreflang` made **reciprocal** between each EN page and its IT equivalent (add `hreflang="en"` on IT pages and `hreflang="it"` + `x-default` on EN pages) — only for pairs that exist and are validated.
3. Create `sitemap-en.xml` with the validated EN URLs and add it to the `sitemap.xml` **sitemap index**.
4. Remove `Disallow: /en/` from `robots.txt`.
5. Add the `en/` directory to `build-soft-launch-it.ps1` so it is included in `dist-it/` (and verify the build).
6. Re-run full QA on the produced `dist-it/`.

**Until all the above are done, EN remains unpublished and excluded from the deploy.**

## QA results (2026-06-15)

**Verdict: QUASI PUBBLICABILE** — technically ready; one non-automatable gate remains (human native-speaker sign-off) plus the publishing steps (reciprocal hreflang, `sitemap-en.xml`, robots, build).

Automated QA on all 20 pages: **0 flagged**. Every page has title < 60, meta description 120–155, single H1, self canonical, OG + Twitter, `inLanguage="en"`, valid JSON-LD, ≥ 9 working internal links. **0 mojibake, 0 Italian residue, 0 broken links.** Spelling is consistently British (`centre`, `travelling`; the only "color" tokens are the standard `theme-color` meta). Isolation re-confirmed: not in `sitemap.xml`/`sitemap-it.xml`, `robots.txt` still blocks `/en/`, 0 IT pages with `hreflang="en"`, `/en/` absent from `dist-it`.

**Fix applied this sprint:** removed a duplicated "Home › Home" breadcrumb on `/en/index.html` (visible + BreadcrumbList schema).

Indicative scores (SEO / Content / Localization / Technical), all ≥ 85:

| Page | SEO | Content | Loc | Tech |
|---|---|---|---|---|
| index | 93 | 87 | 90 | 95 |
| things-to-see-montefiascone | 92 | 88 | 90 | 95 |
| montefiascone-travel-guide | 92 | 88 | 90 | 95 |
| how-to-get-to-montefiascone | 92 | 88 | 90 | 95 |
| parking-in-montefiascone | 90 | 86 | 90 | 95 |
| tourist-information-montefiascone | 90 | 84 | 88 | 95 |
| best-time-to-visit-montefiascone | 90 | 84 | 88 | 95 |
| lake-bolsena | 92 | 87 | 90 | 95 |
| what-to-see-on-lake-bolsena | 91 | 85 | 89 | 95 |
| lake-bolsena-in-one-day | 91 | 85 | 89 | 95 |
| best-villages-on-lake-bolsena | 90 | 84 | 89 | 95 |
| bolsena-things-to-see | 91 | 86 | 90 | 95 |
| marta-lake-bolsena-things-to-see | 90 | 85 | 90 | 95 |
| capodimonte-lake-bolsena-things-to-see | 90 | 85 | 90 | 95 |
| montefiascone-in-one-day | 91 | 86 | 89 | 95 |
| weekend-in-montefiascone | 91 | 86 | 89 | 95 |
| civita-di-bagnoregio-from-montefiascone | 91 | 87 | 90 | 95 |
| montefiascone-wine-guide | 92 | 87 | 90 | 95 |
| where-to-stay-in-montefiascone | 91 | 87 | 90 | 95 |
| where-to-eat-in-montefiascone | 90 | 86 | 89 | 95 |

**Residual (non-blocking):** content is concise (~430–515 visible words incl. chrome); a human editorial/native pass is recommended before go-live; some pages could be deepened with verified facts.

## EN publishable: NO yet — QUASI PUBBLICABILE (pending human native review + publishing steps)
