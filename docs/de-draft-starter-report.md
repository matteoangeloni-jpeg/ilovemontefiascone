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

---

# German Draft Consolidation — Clean URL & Language QA

Sprint successivo sullo stesso branch `feature/de-draft-starter` (commit di partenza `dba970c`). Obiettivo: uniformare tutta la sezione DE draft agli **URL clean**, senza pubblicare la DE.

**Cloudflare AI Search:** nessun fix codice necessario. Gli errori AI Search (2× "Unable to convert to markdown" sulle homepage, 4× "network connection lost") risultano transitori: le 6 pagine sono tecnicamente sane (HTML valido, `<main>`, H1 unico, JSON-LD valido, canonical clean, nessun `noindex`). Procedere con **retry manuale Sync dal pannello Cloudflare**.

## Sintesi
- **Pagine DE auditate:** 30 (`de/*.html`).
- **Pagine legacy con `.html` nei segnali/link:** 25.
- **Pagine già clean (sprint precedente):** 5 (le 5 nuove).
- **Pagine corrette in questo sprint:** 25.
- **Occorrenze `/de/...html` residue dopo il fix:** 0.

## Intervento applicato
Strip di `.html` da **tutti gli URL `/de/...`** (e solo quelli — asset `.jpg/.webp/.css/.js` non toccati), in:
- canonical, `og:url`, `twitter` (meta) della pagina;
- URL assoluti nel JSON-LD (incl. `BreadcrumbList`, `WebPage`/`Article` `url`/`@id`);
- link interni DE (`href="/de/..."`).

Mappatura: `/de/index.html` → `/de/` (home); `/de/<slug>.html` → `/de/<slug>`. Diff: 25 file, 220/220 righe (solo URL).

## Verifica per-pagina (30/30)
| Controllo | Esito |
| --------- | ----- |
| canonical clean (no `.html`) | ✅ 30/30 |
| `og:url` clean | ✅ 30/30 |
| JSON-LD URL clean (incl. BreadcrumbList) | ✅ 30/30 |
| link interni DE clean + risolvibili | ✅ 30/30 |
| `index.html` canonical = `https://www.ilovemontefiascone.com/de/` | ✅ |
| JSON-LD valido | ✅ 30/30 |
| schema `Event`/`MusicEvent` improprio | ✅ assente ovunque |
| FAQPage solo con FAQ visibili | ✅ |

## Duplicati
- Nessun duplicato: 0 title duplicati, 0 meta description duplicate, 0 H1 duplicati, 0 corpi testo identici.
- Coppia di nomi simili ma **temi distinti** (nessuna azione, solo nota): `bolsena-sehenswuerdigkeiten` (città di Bolsena) vs `bolsenasee-sehenswuerdigkeiten` (Bolsenasee).

## Revisione linguistica (pass approfondito)
- **Verifica su tutte le 30 pagine DE** (testo `<main>`); campione riletto integralmente: `index`, `sehenswuerdigkeiten-montefiascone`, `bolsenasee`, `montefiascone-wein-guide`, `anreise-nach-montefiascone`, `essen-in-montefiascone`, `montefiascone-mit-kindern` + le 5 nuove.
- **Esito:** tedesco turistico-editoriale naturale, frasi brevi, nessuna traduzione letteralmente italiana, nessun keyword stuffing, nomi propri invariati. La struttura ricorrente ("Kurz gesagt / Warum…? / Was…? / Praktische Hinweise") è un pattern editoriale coerente, non un difetto.
- **Nessuna modifica sostanziale necessaria/sicura**: gli interventi possibili coincidono con cleanup vietati in questo sprint. **Nessun dato inventato.**
- Lessico coerente con il glossario richiesto (eccezione voluta: si usa **`Bolsenasee`**, grafia tedesca standard in una parola, anziché `Bolsena-See`).
- **Difetti rilevati ma NON corretti per regola (no mojibake/CSS cleanup):**
  - `Weinf?hrer` → "Weinführer": mojibake in **14** pagine DE legacy (titolo/H1/link). → P3.
  - Ortografia `ss` al posto di `ß` (es. "grosser Kuppel"): variante coerente in tutte le legacy; normalizzazione a `ß` rimandata. → P3.
- Da far rivedere a madrelingua prima del go-live: tutte (rilettura finale), priorità sui titoli/H1 con `Weinf?hrer`.

## QA tecnico (build)
| Controllo | Esito |
| --------- | ----- |
| `npm run build:cloudflare` | ✅ success |
| DE fuori da `dist-it` (non pubblicata) | ✅ |
| sitemap IT | ✅ 97 |
| sitemap EN | ✅ 77 |
| sitemap index | ✅ solo IT+EN (2) |
| `sitemap-de.xml` | ✅ assente |
| `hreflang de` (in dist) | ✅ assente |
| link pubblici IT/EN → `/de/` | ✅ nessuno (IT/EN non modificate) |
| `.html` nei segnali/link DE | ✅ 0 |
| path locale / `pages.dev` / `github.io` | ✅ assenti |

## Conferme esplicite
- DE **non pubblicata** (solo branch). ✅
- sitemap IT **97** / EN **77**. ✅
- nessun `sitemap-de.xml`. ✅
- nessun `hreflang de`. ✅
- nessun link pubblico IT/EN verso DE. ✅

## Problemi P0/P1
**Zero.**

## Problemi P2/P3 (backlog)
- ✅ **RISOLTO** (sprint Language Polish) — mojibake `Weinf?hrer` → `Weinführer`.
- ✅ **RISOLTO** (sprint Language Polish) — ortografia `ß`: `grosser` → `großer`.
- **P3** — nomi simili `bolsena-sehenswuerdigkeiten` vs `bolsenasee-sehenswuerdigkeiten`: valutare disambiguazione prima del go-live.
- **P3** — reciprocità hreflang IT/EN/DE e inclusione `de` nel build: sprint di pubblicazione.

## Commit
`Consolidate German draft pages` su `feature/de-draft-starter`. Nessun merge su `main`.

---

# German Draft Language Polish — Mojibake and ß QA

Sprint sullo stesso branch `feature/de-draft-starter` (commit di partenza `1998646`). Obiettivo: correzione mojibake e ortografia `ß`, micro-revisione leggera. Nessuna pubblicazione DE.

## Verdetto
**PRONTO PER REVIEW** — 0 problemi P0/P1.

## Correzioni applicate
| Tipo | Occorrenze | File coinvolti | Esito |
| ---- | ---------: | -------------- | ----- |
| Mojibake `Weinf?hrer` → `Weinführer` | 24 | 14 pagine DE (titolo/H1/breadcrumb/anchor/description) | ✅ corretto |
| Ortografia `grosser` → `großer` | 1 | `sehenswuerdigkeiten-montefiascone` | ✅ corretto |
| Micro-revisione linguistica | 0 | — | nessuna modifica necessaria (tedesco già naturale) |

**Falso positivo NON toccato:** la sequenza `s?v` rilevata in tutte le pagine è il cache-buster legittimo `css/style.css?v=2026-06-14-itlaunch`, **non** un mojibake — lasciato invariato.

## Pagine DE revisionate
- Totale: **30**.
- Modificate: **14** (quelle con `Weinf?hrer` e/o `grosser`).
- Non modificate perché già corrette: **16**.

## Lingua tedesca
- Valutazione: buona, tono turistico-editoriale naturale, frasi brevi, nessuna traduzione letterale.
- Termini uniformati/confermati: `Weinführer`, `Bolsenasee`, `Altstadt`, `Sehenswürdigkeiten`, `Tuscia`, `Lazio`, `Via Francigena`, `Rocca dei Papi`, `Est! Est!! Est!!!`, `Montefiascone`. (Nota: si mantiene `Bolsenasee` in una parola, grafia tedesca standard, anziché `Bolsena-See`.)
- ATB DE: formule prudenti invariate (`vom 9. bis 12. Juli 2026`, `Musik, Craft Beer, Food und Festivalatmosphäre`, `Eintritt frei`, `Loc. Porticella`).
- Consigliata comunque una rilettura madrelingua finale prima del go-live (nessun blocco).

## SEO e tecnica
- canonical clean ✅ · og:url clean ✅ · JSON-LD valido ✅ (0 invalidi/178) · BreadcrumbList clean ✅
- nessun `.html` nei segnali/link DE ✅ · nessun `Event`/`MusicEvent` improprio ✅
- nessun `Weinf?hrer` residuo ✅ · cache-buster `css?v=` intatto ✅
- DE non pubblicata ✅

## QA
| Controllo | Esito | Note |
| --------- | ----- | ---- |
| build `npm run build:cloudflare` | ✅ | success |
| scope modifiche | ✅ | solo `de/*.html` (14 file) |
| DE source 0 issues (30 pagine) | ✅ | |
| sitemap IT / EN / index | ✅ | 97 / 77 / 2 |
| `sitemap-de.xml` / `hreflang de` / `/de/` in dist | ✅ | assenti |
| mojibake `Weinf?hrer` residuo | ✅ | 0 |
| stray `?` in parole tedesche (escluso `css?v=`) | ✅ | 0 |
| pages.dev / github.io / path locale | ✅ | assenti |
| modifiche IT/EN/ATB/homepage | ✅ | nessuna |

## Problemi P0/P1
**Zero.**

## Problemi P2/P3
- **P3** — disambiguazione `bolsena-sehenswuerdigkeiten` vs `bolsenasee-sehenswuerdigkeiten` (go-live).
- **P3** — reciprocità hreflang IT/EN/DE + `de` nel build (sprint di pubblicazione).
- **P3** — rilettura madrelingua finale consigliata.

## Cosa NON è stato fatto
- Nessun merge su `main`; nessuna pubblicazione DE; nessun `sitemap-de.xml`/`hreflang de`/link pubblico DE.
- Nessuna modifica IT/EN/ATB/homepage; nessuna modifica infrastrutturale; nessun CSS cleanup; nessun refactor; nessun dato inventato; nessuna pagina creata/cancellata.

## Commit
`Polish German draft language` su `feature/de-draft-starter`. Nessun merge su `main`.

---

# German Go-Live Readiness — Final QA

Sprint sullo stesso branch `feature/de-draft-starter` (commit di partenza `21c6c38`). Obiettivo: preparare il go-live tecnico DE (build, sitemap-de, hreflang IT/EN/DE, switcher). **Nessun merge su `main`.**

## Verdetto
**PRONTO PER MERGE E PUBBLICAZIONE** — 0 P0/P1. La pubblicazione effettiva avviene solo al merge controllato su `main`.

## Pagine DE (mappatura trilingue)
Tutte e 30 le pagine DE risultano **triple IT+EN+DE** complete (mapping validato contro la reciprocità IT↔EN già esistente sul sito; 2 mapping corretti rispetto alla prima ipotesi: `reisefuehrer→/guide`, `sehenswuerdigkeiten→/cosa-vedere-montefiascone-guida-completa`). Hreflang `it/en/de/x-default` su tutte; in sitemap-de; canonical self DE clean; esito OK su tutte.

## Hreflang
- Triple IT+EN+DE: **30** · coppie IT+DE: 0 · coppie EN+DE: 0 · DE only: 0 · uncertain: 0.
- Reciprocità completa: ogni DE punta IT/EN/DE; ogni IT e EN mappata ora include `hreflang="de"`.
- `x-default` → URL IT (coerente con convenzione del sito).
- Nessun hreflang rotto, nessun `.html` (verificato sul crawl di `dist-it`).

## Sitemap
- IT: **97** (invariata) · EN: **77** (invariata) · DE: **30** (`sitemap-de.xml` nuovo).
- `sitemap.xml` index ora elenca IT + EN + DE.
- Nessun duplicato, nessun `.html`, solo dominio `www`.

## Build
- `de` aggiunto a `directories` del manifest; `sitemap-de.xml` aggiunto a `rootFiles`.
- `dist-it/de/` presente con tutte le 30 pagine; `dist-it/sitemap-de.xml` presente.
- File interni esclusi (`docs`, `server.py`, `README.md` assenti da `dist-it`); immagini OK; link OK.

## SEO DE
canonical self clean ✅ · og:url clean ✅ · JSON-LD valido (0 invalidi su 208 file) ✅ · BreadcrumbList clean ✅ · FAQPage solo con FAQ visibili ✅ · ATB DE senza `Event`/`MusicEvent` ✅.

## Language switcher
- Strategia: esteso lo switcher esistente IT/EN aggiungendo un link **DE clean** sulle 30 pagine IT e 30 EN mappate; aggiunto uno switcher IT/EN/DE alle 30 pagine DE.
- Dove compare: header (`lang-switcher`) delle 90 pagine delle triple.
- Pagine escluse: nessuna (tutte e 30 le triple complete).
- Link rotti: **zero** (tutti i target esistono nel build).

## robots.txt / llms.txt
- **robots.txt:** rimosso `Disallow: /de/` — **necessario** per il go-live (altrimenti `/de/` resterebbe non scansionabile nonostante sitemap-de e hreflang). Modifica attiva solo al merge.
- **llms.txt:** **non** modificato in questo sprint (decisione prudente). Da aggiornare al momento del merge aggiungendo le 30 URL DE clean e la data. → backlog.

## QA
| Controllo | Esito | Note |
| --------- | ----- | ---- |
| build `npm run build:cloudflare` | ✅ | success |
| `dist-it/de/` + 30 pagine | ✅ | |
| sitemap IT/EN/DE | ✅ | 97 / 77 / 30 |
| sitemap index IT+EN+DE | ✅ | |
| hreflang reciproci, 0 rotti | ✅ | crawl dist-it |
| canonical/og:url clean, 0 `.html` | ✅ | |
| link interni risolvibili | ✅ | incl. switcher DE/IT/EN |
| immagini esistenti | ✅ | |
| JSON-LD valido | ✅ | 0 invalidi / 208 |
| `Event`/`MusicEvent` improprio | ✅ | assente (ATB DE incluso) |
| robots consente `/de/` | ✅ | `Disallow: /de/` rimosso |
| file interni / pages.dev / github.io / path locale | ✅ | assenti |
| merge su `main` | ✅ | NON eseguito |

## Problemi P0/P1
**Zero.**

## Problemi P2/P3
- **P2** — `llms.txt` da aggiornare con le URL DE al merge/go-live.
- **P3** — annotazioni hreflang a livello di sitemap (`xhtml:link`) non aggiunte per DE/IT/EN: l'hreflang in `<head>` è completo e sufficiente; opzionale in futuro.
- **P3** — switcher IT con link interni IT/EN legacy in `.html` su alcune pagine: il link DE aggiunto è clean; uniformazione `.html`→clean degli IT switcher in sprint separato.
- **P3** — rilettura madrelingua DE finale prima del go-live.
- **P3** — disambiguazione `bolsena-sehenswuerdigkeiten` vs `bolsenasee-sehenswuerdigkeiten`.

## Cosa NON è stato fatto
- Nessun merge su `main`; nessun push su `main`; nessun deploy manuale.
- Nessuna modifica a Cloudflare/DNS/Search Console/Analytics/AdSense.
- Nessun dato inventato; nessun CSS cleanup; nessuna nuova pagina editoriale; nessuna pagina cancellata.
- Nessuna modifica a pagine IT/EN non mappate; nessun cambio URL IT/EN; nessun `.html` reintrodotto nei segnali.

## Commit
`Prepare German version for go-live` su `feature/de-draft-starter`. Nessun merge su `main`.

## Prossimo passo
`Eseguire merge controllato su main, attendere deploy Cloudflare, testare /de/, sitemap-de.xml, hreflang, Search Console e Cloudflare AI Search.` Al merge: aggiornare `llms.txt` con le URL DE.
