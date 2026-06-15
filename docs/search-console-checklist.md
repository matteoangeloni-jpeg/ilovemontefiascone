# Search Console Checklist — ilovemontefiascone.com (IT)

Operational checklist for Google Search Console (GSC) after the IT go-live.
Scope: Italian portal only. EN/DE are **not** published (excluded from sitemap and build).

Property URL: `https://ilovemontefiascone.com/` · Sitemap: `https://ilovemontefiascone.com/sitemap.xml` (index → `sitemap-it.xml`, 48 URLs).

## 1. Initial setup
- [ ] Add a **Domain property** in GSC (DNS TXT verification) for `ilovemontefiascone.com` (covers http/https and www/non-www).
- [ ] Submit the sitemap **`/sitemap.xml`** (the sitemap index). Confirm GSC discovers the child **`/sitemap-it.xml`**.
- [ ] Confirm sitemap status = *Success* and "Discovered URLs" ≈ 48.
- [ ] URL-inspect the **homepage** and request indexing.
- [ ] URL-inspect the main **hubs** (cosa-vedere, guide, eventi, vino, mappa, lago-di-bolsena).
- [ ] Check **excluded pages**: privacy, cookie, 404, offline should be *Excluded by 'noindex'* — this is expected/correct.
- [ ] Confirm **Google-selected canonical** = user-declared canonical (self) on inspected pages.
- [ ] Check **Page experience / Core Web Vitals** and **Mobile usability** reports (data populates over days).

## 2. Priority URLs to inspect
- `/` (homepage)
- `/cosa-vedere.html`
- `/guide.html`
- `/lago-di-bolsena.html`
- `/lago-di-bolsena-cosa-vedere.html`
- `/come-arrivare-a-montefiascone.html`
- `/eventi.html`
- `/vino.html`
- `/dove-dormire-a-montefiascone.html`
- `/dove-mangiare-a-montefiascone.html`
- `/mappa.html`
- `/progetto-editoriale.html`

## 3. Checks at 24 hours
- [ ] Sitemap **read** (Success, no parse errors).
- [ ] Pages **discovered / crawled** (Pages report → growth in "Crawled").
- [ ] **404 errors** (Pages → Not found): expect none for internal URLs.
- [ ] **Excluded** pages limited to the intended noindex set (privacy/cookie/404/offline).
- [ ] No **unexpected canonical** ("Alternate page with proper canonical" / "Duplicate without canonical").
- [ ] No **Mobile usability** errors.
- [ ] No **robots.txt** blocking of indexable pages (only en/de/widgets/etc. blocked).

## 4. Checks at 7 days
- [ ] First **queries** appearing (Performance report).
- [ ] **Impressions** > 0 for brand and core terms (Montefiascone, Lago di Bolsena…).
- [ ] **Indexed pages** count rising toward the 48 sitemap URLs.
- [ ] **Sitemap coverage**: submitted vs indexed.
- [ ] Pages flagged with issues (Crawled - not indexed / Discovered - not indexed).
- [ ] **Low-CTR** pages with good impressions → review title/meta.

## 5. Checks at 30 days
- [ ] Top **pages by clicks/impressions**.
- [ ] **Emerging queries** → content opportunities.
- [ ] Pages to **expand** (high impressions, low position).
- [ ] Pages still **not indexed** → investigate (thin? duplicate? internal links?).
- [ ] **Internal-linking** opportunities (orphan-ish or low-link pages).
- [ ] **New-page** opportunities (from the editorial roadmap).

## Notes
- FAQ rich results are limited by Google to certain site types; `FAQPage` markup stays valid and useful for AI/GEO regardless.
- Do not submit `/en/` or `/de/` URLs to GSC until those locales are published.
