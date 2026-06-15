# Rich Results / Structured Data Checklist — IT

Tools:
- **Rich Results Test** — https://search.google.com/test/rich-results (live URL after go-live, or paste code).
- **Schema Markup Validator** — https://validator.schema.org/ (syntax + types).
- GSC **Enhancements** reports (Breadcrumbs, FAQ, Merchant/Recipe) once data populates.

What to check on every page:
- JSON-LD parses with no errors; `inLanguage` = `it-IT`.
- `@type` matches the page intent (see table).
- `BreadcrumbList` items match the visible breadcrumb.
- `FAQPage.mainEntity` matches the **visible** FAQ (same questions/answers).
- No invented data (dates/prices/hours): none should appear in structured data.

On error: fix the JSON-LD, re-validate, then in GSC use **Validate fix**. Re-run after deploy on the live URL.

## Pages to test and expected schema

| Page | Expected `@type` | Rich-result eligibility | Notes |
|---|---|---|---|
| `index.html` | WebSite, TouristDestination, WebPage, FAQPage | Sitelinks searchbox (WebSite), FAQ* | TouristDestination has geo |
| `cosa-vedere.html` | CollectionPage, BreadcrumbList, TouristAttraction | Breadcrumb | hub |
| `cosa-vedere-montefiascone-guida-completa.html` | Organization, Place, TouristAttraction, BlogPosting, WebPage | Breadcrumb/Article | long-form |
| `lago-di-bolsena.html` | TouristDestination, ItemList, BreadcrumbList, FAQPage | Breadcrumb, FAQ* | |
| `lago-di-bolsena-cosa-vedere.html` | TouristDestination, ItemList, BreadcrumbList, FAQPage | Breadcrumb, FAQ* | |
| `montefiascone-in-un-giorno.html` | WebPage, ItemList, BreadcrumbList, FAQPage | Breadcrumb, FAQ* | itinerary |
| `weekend-a-montefiascone.html` | WebPage, ItemList, BreadcrumbList, FAQPage | Breadcrumb, FAQ* | itinerary |
| `eventi.html` | CollectionPage, BreadcrumbList, ItemList, FAQPage | Breadcrumb, FAQ* | hub |
| `eventi-tradizioni-fiera-del-vino-montefiascone.html` | **Article**, BreadcrumbList | Breadcrumb/Article | **No Event** (dates not verified) |
| `cronoscalata-montefiascone-coppa-citta.html` | **Article**, BreadcrumbList | Breadcrumb/Article | **No SportsEvent** (dates not verified) |
| `vino.html` | CollectionPage, BreadcrumbList, Product, ItemList, FAQPage | Breadcrumb, FAQ* | Product has no offers (no price invented) |
| `est-est-est-montefiascone-vino-doc.html` | Article, BreadcrumbList, FAQPage | Breadcrumb, FAQ* | |
| `enogastronomia-ricette-tipiche-montefiascone.html` | Recipe, HowToStep | **Recipe rich result** | verify Recipe required fields |
| `dove-dormire-a-montefiascone.html` | Article, BreadcrumbList, FAQPage | Breadcrumb, FAQ* | editorial; **no LodgingBusiness** |
| `dove-mangiare-a-montefiascone.html` | Article, BreadcrumbList, FAQPage | Breadcrumb, FAQ* | editorial; **no Restaurant** |

\* FAQ rich results are currently shown by Google only for a limited set of authoritative sites; the `FAQPage` markup remains valid and benefits AI/GEO and validation, even if the visual FAQ rich result is not displayed.

## Deliberate decisions to keep
- **No `Event`/`Festival`/`SportsEvent`** with unverified `startDate`: event pages use `Article` + `BreadcrumbList`. Re-introduce `Event` only with dates confirmed from official sources.
- **No `LocalBusiness`/`Restaurant`/`LodgingBusiness`** without real, verified venues (dove dormire/mangiare are editorial).
- **No `Product` offers/price** invented on the wine page.
