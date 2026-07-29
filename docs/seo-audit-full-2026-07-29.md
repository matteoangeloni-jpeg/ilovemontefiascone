# Full SEO audit — I Love Montefiascone

Data audit: 2026-07-29  
Sito: https://www.ilovemontefiascone.com/  
Tipo rilevato: guida editoriale turistica multilingua per Montefiascone, Lago di Bolsena e Tuscia

## Executive summary

SEO Health Score stimato: 93/100.

Il sito è in uno stato tecnico forte: build Cloudflare riuscita, pacchetto `dist-it` generato correttamente, sitemap multilingua coerenti, pagine indicizzabili con canonical self-referential, H1 unico, meta description presenti, JSON-LD diffuso, hreflang con `x-default` e immagini statiche con alt/dimensioni dopo il fix del 2026-07-29.

La leva principale non è più “riparare blocchi tecnici”, ma aumentare CTR e profondità editoriale sulle query che già hanno posizione buona ma pochi click: `montefiascone cosa vedere`, San Flaviano/Santa Margherita, eventi/feste e query tedesche/francesi a bassa penetrazione.

## Evidence checked

- Build locale: `npm run build:cloudflare` passato.
- Output build: 99 IT / 101 EN / 101 DE / 101 FR.
- Crawl statico `dist-it`: 406 pagine HTML.
- Sitemap figli: 99 IT, 99 EN, 99 DE, 101 FR; 398 URL totali nei sitemap figli.
- Live headers: homepage, sitemap e `llms.txt` rispondono 200 su dominio canonical `www`.
- Redirect sample:
  - `http://ilovemontefiascone.com/` -> canonical `https://www.../` con 2 redirect.
  - `https://ilovemontefiascone.com/` -> canonical `https://www.../` con 1 redirect.
  - URL `.html` campione -> clean URL con 1 redirect.
- Search Console window: 2026-06-29 → 2026-07-26.
- Search Console totals: 589 click, 12.759 impression, CTR 4,62%, posizione media 7,99.
- URL Inspection sample: homepage, `/cosa-vedere`, `/fr/week-end-a-montefiascone`, `/eventi`, `/basilica-san-flaviano-montefiascone` tutte `PASS`, `Inviata e indicizzata`, robots `ALLOWED`, indexing `INDEXING_ALLOWED`.
- PageSpeed Insights: non disponibile in questo run per HTTP 429; CWV non dichiarati.

## Category scores

| Area | Score | Notes |
|---|---:|---|
| Technical SEO | 96 | Crawl, canonical, hreflang, sitemap e headers solidi. Unico neo: naked-domain HTTP fa ancora 2 hop. |
| Content quality | 92 | Buona copertura editoriale e multilingua. Opportunità su CTR/snippet e freshness eventi. |
| On-page SEO | 96 | Title, description, H1 e canonical massivamente puliti dopo fix. |
| Schema | 96 | JSON-LD diffuso: WebPage, Article, BreadcrumbList, FAQPage, ItemList, TouristDestination e altri tipi. |
| Performance | 78 | Build leggero, immagini dimensionate; PageSpeed 429 impedisce verifica Lighthouse/field CWV. |
| AI search readiness | 90 | `robots.txt` apre crawler AI, `llms.txt` presente, pagine statiche citabili. |
| Images | 100 | Nessun alt/dimensione mancante sulle immagini statiche del build dopo fix. |

## Technical SEO

Pass:

- 406 pagine generate con lingua HTML corretta: 103 IT, 101 EN, 101 DE, 101 FR.
- 0 issue rilevate su canonical mancanti/duplicati.
- 0 issue rilevate su H1.
- 0 issue rilevate su meta description fuori soglia.
- 0 issue rilevate su title fuori soglia dopo il fix San Flaviano.
- 0 issue rilevate su hreflang senza `x-default`.
- Sitemap index e sitemap figli coerenti con il perimetro generato.
- `robots.txt` consente il sito pubblico e blocca path non pubblici/audit/scratch.

Remaining technical note:

- `http://ilovemontefiascone.com/` richiede 2 redirect prima del canonical. Non è critico, ma un redirect edge diretto HTTP naked -> HTTPS www sarebbe più pulito.

## Content and SXO

Le query GSC mostrano buone posizioni ma CTR migliorabile.

Opportunità principali:

- `montefiascone cosa vedere`: posizione media 3,39, 546 impression, CTR 0,37%.
- `cosa vedere a montefiascone`: posizione 4,45, 187 impression, CTR 0%.
- `basilica-san-flaviano-montefiascone`: pagina con 3.487 impression, posizione 4,18, CTR 1,18%.
- `cattedrale-santa-margherita-montefiascone`: 659 impression, posizione 3,58, CTR 2,28%.
- Eventi e feste birra/vino: molte query in posizione 7-10 con CTR basso.

Quick-win editoriale:

- Rafforzare titoli/snippet e prime 120 parole delle pagine con impression alte.
- Aggiungere blocchi answer-first più visibili per “cosa vedere”, “quanto tempo serve”, “come arrivare”, “cosa fare con bambini”, “eventi oggi/estate”.
- Per eventi stagionali, mantenere data e stato conferma molto chiari above-the-fold.

## Schema

Tipi JSON-LD rilevati nel build:

- `Article`: 202
- `WebPage`: 199
- `BreadcrumbList`: 356
- `FAQPage`: 280
- `ItemList`: 72
- `TouristDestination`: 33
- `TouristAttraction`: 12
- `Person`: 4
- altri: `Event`, `MusicEvent`, `Organization`, `Place`, `CollectionPage`, `ImageGallery`, `AboutPage`, `Church`, `WebSite`, `Map`, `Product`

Nota: `FAQPage` non va considerato una leva rich-result garantita per Google, ma resta utile come struttura semantica/AI citation se non viene abusato.

## Performance

Verificato:

- CSS totale nel build: circa 187 KB.
- JS totale nel build: circa 62 KB.
- Media nel build: circa 20 MB.
- Immagini statiche ora hanno `width`/`height`.
- Script terze parti pesanti non risultano diffusi; GTM non rilevato nel build statico.

Non verificato:

- PageSpeed/Lighthouse e Core Web Vitals, perché l’API PageSpeed ha restituito HTTP 429 su tutte le URL campione.

## AI / GEO readiness

Pass:

- `llms.txt` live presente.
- `robots.txt` live consente `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `ClaudeBot`, `PerplexityBot`.
- Pagine statiche HTML adatte a crawler che non eseguono JavaScript.
- Buona struttura di facts, pagine migliori e identity signals in `llms.txt`.

Opportunità:

- Brand/entity validation esterna ancora non verificata.
- Migliorare blocchi answer-ready sulle pagine con impression alte e CTR basso.

## Google Search Console

Periodo: 2026-06-29 → 2026-07-26.

Totale:

- Click: 589
- Impression: 12.759
- CTR: 4,62%
- Posizione media: 7,99

Top pages:

- `/festa-santa-margherita-montefiascone`: 154 click, CTR 32,49%, posizione 3,42.
- `/eventi`: 102 click, 2.600 impression, CTR 3,92%, posizione 7,72.
- `/atb-festival-montefiascone`: 80 click, 1.255 impression, CTR 6,37%, posizione 6,33.
- `/eventi-estate-montefiascone-2026`: 56 click, CTR 12,87%, posizione 5,38.
- `/basilica-san-flaviano-montefiascone`: 41 click, 3.487 impression, CTR 1,18%, posizione 4,18.

URL Inspection sample:

- `/`: PASS, inviata e indicizzata, ultimo crawl 2026-07-27.
- `/cosa-vedere`: PASS, inviata e indicizzata, ultimo crawl 2026-07-27.
- `/fr/week-end-a-montefiascone`: PASS, inviata e indicizzata, ultimo crawl 2026-07-29.
- `/eventi`: PASS, inviata e indicizzata, ultimo crawl 2026-07-27.
- `/basilica-san-flaviano-montefiascone`: PASS, inviata e indicizzata, ultimo crawl 2026-07-27.

## Limitations

- PageSpeed Insights non disponibile per 429: CWV non confermati.
- Backlink profile non analizzato in questo run.
- Non è stato fatto deploy/push in questo passaggio.
- Non è stato generato PDF.
