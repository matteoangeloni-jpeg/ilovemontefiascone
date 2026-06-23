# German Draft Starter — Report

## Verdetto
**PRONTO PER REVIEW** (review linguistica madrelingua consigliata prima della pubblicazione). 0 problemi P0/P1.

## Branch
`feature/de-draft-starter` (da `main` @ `7dbd3ff`). **Nessun merge su `main`.**

## Nota di scope (decisione utente)
Su `main` esisteva già una bozza DE di **25 pagine** in `de/`. Di fronte all'overlap con gli slug richiesti, decisione approvata: **creare solo le 5 pagine realmente mancanti** e riusare le 7 già esistenti (2 con lo slug esatto: `index`, `wochenende-in-montefiascone`; 5 sotto slug diversi). Nessuna pagina DE esistente è stata modificata, nessun duplicato creato.

## Pagine DE create
| Pagina DE | Fonte IT | Fonte EN | Status | Note |
| --------- | -------- | -------- | ------ | ---- |
| `de/sommerveranstaltungen-montefiascone-2026.html` | `eventi-estate-montefiascone-2026` | `en/montefiascone-summer-events-2026` | creata | hub WebPage, niente Event |
| `de/atb-festival-montefiascone.html` | `atb-festival-montefiascone` | `en/atb-festival-montefiascone` | creata | Article/WebPage, **niente Event/MusicEvent** |
| `de/fiera-del-vino-montefiascone.html` | `eventi-tradizioni-fiera-del-vino-montefiascone` | `en/montefiascone-wine-fair-traditions` | creata | nessuna data inventata |
| `de/via-francigena-montefiascone.html` | `via-francigena-*` | `en/via-francigena-*` | creata | etappe Bolsena–Montefiascone–Viterbo |
| `de/tagesausfluege-montefiascone.html` | `cosa-vedere-dintorni-montefiascone-itinerario` | `en/things-to-do-near-montefiascone` | creata | linka a DE esistenti (Civita, Viterbo, Capodimonte) |

### Pagine riusate (non modificate)
`de/index`, `de/sehenswuerdigkeiten-montefiascone`, `de/bolsenasee`, `de/montefiascone-wein-guide`, `de/anreise-nach-montefiascone`, `de/unterkunft-in-montefiascone`, `de/wochenende-in-montefiascone`.

## SEO DE
| Pagina | Title | Meta description | H1 | Canonical | Esito |
| ------ | ----- | ---------------- | -- | --------- | ----- |
| sommerveranstaltungen-…-2026 | ✅ | ✅ | 1 | `/de/sommerveranstaltungen-montefiascone-2026` clean | OK |
| atb-festival-montefiascone | ✅ | ✅ | 1 | `/de/atb-festival-montefiascone` clean | OK |
| fiera-del-vino-montefiascone | ✅ | ✅ | 1 | `/de/fiera-del-vino-montefiascone` clean | OK |
| via-francigena-montefiascone | ✅ | ✅ | 1 | `/de/via-francigena-montefiascone` clean | OK |
| tagesausfluege-montefiascone | ✅ | ✅ | 1 | `/de/tagesausfluege-montefiascone` clean | OK |

Tutte con `og:title/description/url/image`, `twitter:*`, `og:url` clean (nessun `.html`).

## Structured data
| Pagina | Tipi JSON-LD | FAQPage | Event assente | Valido |
| ------ | ------------ | ------- | ------------- | ------ |
| sommerveranstaltungen-…-2026 | WebPage, BreadcrumbList, FAQPage | 3 Q | ✅ | ✅ |
| atb-festival-montefiascone | Article, WebPage, BreadcrumbList, FAQPage | 5 Q | ✅ | ✅ |
| fiera-del-vino-montefiascone | Article, WebPage, BreadcrumbList, FAQPage | 3 Q | ✅ | ✅ |
| via-francigena-montefiascone | Article, WebPage, BreadcrumbList, FAQPage | 3 Q | ✅ | ✅ |
| tagesausfluege-montefiascone | Article, WebPage, BreadcrumbList, FAQPage | 3 Q | ✅ | ✅ |

FAQ visibili in HTML su tutte le pagine; nessuno stub `Event` in `about`.

## Internal linking DE
- Solo link interni DE, **clean URL, nessun `.html`**.
- Target verificati esistenti (mix di 5 nuove + pagine DE esistenti: bolsenasee, montefiascone-wein-guide, anreise, unterkunft, parken, viterbo-ab, civita-…, capodimonte-…, est-est-est-wein, essen-in, sehenswuerdigkeiten, reisefuehrer, wochenende).
- **Nessun link da pagine IT/EN verso `/de/`** (nessuna pagina IT/EN modificata).

## Lingua tedesca
- Tedesco turistico-editoriale, frasi brevi, lessico naturale (Sehenswürdigkeiten, Aussichtspunkte, Altstadt, Anreise, Unterkünfte, Ausflugsziele, Weintradition).
- Nomi propri invariati: Montefiascone, Bolsenasee, Tuscia, Rocca dei Papi, Est! Est!! Est!!!, Via Francigena, Loc. Porticella, Civita di Bagnoregio.
- ATB: formule richieste usate ("vom 9. bis 12. Juli 2026", "Musik, Craft Beer, Food und Festivalatmosphäre", "Eintritt frei").
- **Da far revisionare a madrelingua** prima della pubblicazione: microcopy sci-fi ATB e alcune transizioni — qualità buona, ma una rilettura madrelingua è raccomandata.

## QA tecnico
| Controllo | Esito | Note |
| --------- | ----- | ---- |
| `npm run build:cloudflare` | ✅ | success |
| 5 pagine DE nel branch | ✅ | create |
| DE assente da `dist-it` | ✅ | `de` non è nei `directories` del build |
| sitemap IT | ✅ | 97 invariata |
| sitemap EN | ✅ | 77 invariata |
| sitemap index | ✅ | solo IT+EN (2) |
| `sitemap-de.xml` | ✅ | assente |
| hreflang `de` su IT/EN | ✅ | assente |
| `/de/` nelle sitemap pubbliche | ✅ | 0 |
| link pubblici IT/EN → DE | ✅ | nessuno (IT/EN non toccate) |
| `.html` nei link interni DE nuovi | ✅ | nessuno |
| canonical / og:url DE clean | ✅ | tutte |
| JSON-LD valido | ✅ | 5/5 |
| FAQPage valido + FAQ visibili | ✅ | 5/5 |
| `Event` incompleto | ✅ | assente |
| file interni in dist-it | ✅ | assenti |
| path locale / pages.dev / github.io | ✅ | assenti |

## Sitemap e pubblicazione (conferma esplicita)
- `sitemap-it.xml`: **97** ✅
- `sitemap-en.xml`: **77** ✅
- `sitemap.xml`: **solo IT+EN** ✅
- nessun `sitemap-de.xml` ✅
- nessun hreflang `de` ✅
- nessun link pubblico alla DE ✅
- **DE non pubblicata su `main`** ✅ (lavoro su branch separato)

## Problemi P0/P1
**Zero.**

## Problemi P2/P3 (backlog non bloccante)
- **P3** — Le pagine DE *esistenti* (24) usano `.html` in canonical/og:url/link interni (formato legacy). Le 5 nuove usano URL clean. Prima della pubblicazione DE: uniformare tutto a URL clean.
- **P3** — Lunghezze pagine 553–810 parole: in linea con le guide pratiche/evento; gli hub potrebbero essere ampliati (700–1.000) in un secondo momento.
- **P3** — `atb-festival-2026-social.jpg` servito solo come `.jpg` (nessun `.webp`); rapporto ~2.63:1 (possibile crop nelle anteprime social).
- **P3** — Revisione linguistica madrelingua DE consigliata prima del go-live.
- **P3** — Reciprocità hreflang IT/EN/DE non attivata (come da richiesta): sprint successivo alla pubblicazione.

## Cosa NON è stato fatto
- Nessun merge su `main`; nessuna pubblicazione DE.
- Nessuna modifica a Cloudflare/DNS/Search Console/Analytics/AdSense.
- Nessun `sitemap-de.xml`, nessun hreflang `de`, nessun link pubblico DE.
- Nessuna modifica a menu/header/footer pubblici IT/EN.
- Nessuna modifica alle pagine ATB IT/EN, né a sitemap pubbliche, né a `llms.txt`.
- Nessun CSS cleanup, nessun mojibake cleanup, nessun refactor.
- Nessun dato inventato (orari, artisti, programma, prezzi, sponsor).

## Prossimo passo consigliato
1. **Revisione linguistica tedesca** madrelingua delle 5 nuove pagine (+ check coerenza con le 24 esistenti).
2. **Ampliamento DE** ad altre pagine strategiche e uniformazione degli slug/URL clean su tutta la sezione DE.
3. **Preparazione pubblicazione tecnica DE**: `sitemap-de.xml`, hreflang reciproci IT/EN/DE, voce lingua nel selettore, inclusione `de` nel build.
4. **Solo dopo**: merge su `main` e go-live controllato.
