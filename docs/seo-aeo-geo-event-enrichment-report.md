# SEO / AEO / GEO Event Enrichment Report

## Scope

Sprint executed on branch `codex/event-content-enrichment-final` without changing:

- public perimeter `97 / 97 / 97`
- slugs or canonical paths
- `/fr/`
- Cloudflare configuration
- Search Console
- the separate Next.js project in `D:\ilovemontefiascone`

## Strategic Pages Audited

Primary clusters reviewed in source:

- `index.html`, `en/index.html`, `de/index.html`
- `eventi.html`, `en/events-montefiascone.html`, `de/veranstaltungen-montefiascone.html`
- `calendario-eventi-montefiascone.html`, `de/veranstaltungskalender-montefiascone.html`
- `eventi-estate-montefiascone-2026.html`, `en/montefiascone-summer-events-2026.html`, `de/sommerveranstaltungen-montefiascone-2026.html`
- `est-film-festival-montefiascone.html`, `en/est-film-festival-montefiascone.html`, `de/est-film-festival-montefiascone.html`
- `festival-ecologia-integrale-montefiascone.html`, `en/integral-ecology-festival-montefiascone.html`, `de/festival-integrale-oekologie-montefiascone.html`
- `cronoscalata-montefiascone-coppa-citta.html`, `en/montefiascone-hill-climb.html`, `de/cronoscalata-lago-montefiascone.html`
- `anno-domini-1074-montefiascone.html`
- `come-arrivare-a-montefiascone.html`, `en/how-to-get-to-montefiascone.html`, `de/anreise-nach-montefiascone.html`
- `dove-dormire-a-montefiascone.html`, `en/where-to-stay-in-montefiascone.html`, `de/unterkunft-in-montefiascone.html`
- `progetto-editoriale.html`, `en/editorial-project-montefiascone.html`, `de/redaktionelles-projekt-montefiascone.html`

## Public Sources Used

- Montefiascone Summer 2026 municipal poster:
  - [Comune di Montefiascone - Estate 2026](https://www.comune.montefiascone.vt.it/novita/notizie/novita_1851.html)
- Est Film Festival official sources:
  - [EFF Lago di Bolsena](https://www.estfilmfestival.it/)
  - [EFF locations](https://www.estfilmfestival.it/effluoghi.php)
- Festival dell'Ecologia Integrale official source:
  - [Festival dell'Ecologia Integrale](https://www.festivalecologiaintegrale.it/)
- Additional public signals used as secondary corroboration only:
  - public press material already archived in project attachments for the hill climb
  - public Facebook pages/events only when needed to confirm existence, not to import long copy

## Confirmed Data Used

- Summer 2026 calendar dates from the official municipal poster
- Est Film Festival in Montefiascone:
  - `20-26 July 2026`
  - `20th local edition`
  - placement inside `EFF Lago di Bolsena`
  - `Piazzale Frigo` as evening screening / meeting venue from the official locations page
- Festival dell'Ecologia Integrale:
  - `2-5 July 2026`
  - theme `Oltre i deserti`
  - opening `2 July 2026, 18:00`
  - `Piazza Santa Lucia Filippini`
  - `Mogol` announced on the official site
- Lago-Montefiascone hill climb:
  - `19-21 June 2026`
  - official public wording `29a/29th/29. Lago-Montefiascone`
  - route on `S.P. Lago di Bolsena` from `km 5+150` to `km 0+400`

## Data Not Confirmed Or Intentionally Not Used

- final day-by-day programmes where no stable public source was available
- ticket prices or access policies not shown on official sources
- guest lists beyond officially published names
- operational traffic plans, spectator zones and parking instructions not yet formally published
- speculative venue details for events that still rely mainly on the municipal poster

## Changes Applied

### Event pages

- Strengthened IT/EN/DE Est Film Festival pages with the official venue signal for evening screenings at `Piazzale Frigo`.
- Clarified source language and public-verification logic on the already updated event pages.
- Kept event copy evergreen where only poster-level certainty exists.

### Internal linking and trust signals

- Fixed recurring Italian navigation bugs where `Eventi` pointed to `/guide` and `Galleria` pointed to `/mappa`.
- Replaced misleading footer email references that made the portal look institutionally connected to the Municipality, while preserving the editorial independence framing.

### Editorial / AEO logic

- Preserved existing concise summary blocks instead of inflating pages with ornamental FAQs.
- Improved practical clarity where a page could answer a real planning question more directly, especially on summer-event and Est Film content.

## Answer Blocks Improved

- `eventi-estate-montefiascone-2026.html`
  - existing `In breve` and source-method block retained as primary AEO surface
- `en/montefiascone-summer-events-2026.html`
  - existing `At a glance` and method block retained and supported by stronger event-level pages
- `est-film-festival-montefiascone.html`
  - existing quick-summary logic strengthened with a concrete venue detail useful for travel planning
- `en/est-film-festival-montefiascone.html`
  - same improvement, localized for international visitors
- `de/est-film-festival-montefiascone.html`
  - same improvement, localized for German readers

## Images Matteo Should Provide

### P1 - highly recommended

- Est Film Festival:
  - evening screening in `Piazzale Frigo`
  - audience or stage setup in the historic centre
  - one horizontal hero with recognisable festival atmosphere
- Festival dell'Ecologia Integrale:
  - opening moment in `Piazza Santa Lucia Filippini`
  - official poster or stage visual with legible event identity
- Lago-Montefiascone hill climb:
  - start / route image on `S.P. Lago di Bolsena`
  - historic cars on the ascent with Montefiascone context
- Summer events hub:
  - one broad seasonal image showing the town activated by events, not just a generic landscape

### P2 - editorial upgrades

- ATB Festival crowd / stage
- Est-Lake Festival atmosphere on the lakeshore
- Panorami cultural setting
- Fiera del Vino evening scene with identifiable Montefiascone context

## Competitive Gaps Still Open

- some event pages still depend mainly on poster-level certainty and need stronger official secondary sources
- several pages still use older footer structures and will benefit from a broader design-system cleanup later
- German content quality is usable but should continue to prefer clean transliteration or fully correct umlaut handling consistently
- image coverage is still stronger on evergreen heritage pages than on live-event storytelling

## Pages Still Worth Improving Later

- `panorami-festival-montefiascone.html` and equivalents when stronger public programme sources appear
- `atb-festival-montefiascone.html` and equivalents once official 2026 materials are stable outside poster / public social layers
- `est-lake-festival-montefiascone.html` and equivalents when the 2026 official schedule becomes easier to cite from a stable source
- broader footer / trust-signals sweep on legacy pages that still deserve standardisation beyond this sprint

## Recommendations For The Next Micro Sprint

1. run a dedicated trust-footer sweep across all remaining legacy layouts
2. add image-credit-complete hero assets for the top event pages
3. review German pages for any remaining character-encoding inconsistencies in legacy sections
4. re-check time-sensitive event pages one more time closer to each event date, using only stable public sources
