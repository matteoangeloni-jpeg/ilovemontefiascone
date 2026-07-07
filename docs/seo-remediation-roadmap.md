# Roadmap di correzione SEO — ilovemontefiascone.com
**Data:** 7 luglio 2026
**Base:** verifica diretta del codice sorgente (root `*.html`, `/en`, `/de`, `/fr`, `base.html`, sitemap, robots.txt, `scripts/build-cloudflare.mjs`, `docs/fr-publication-gate-roadmap.md`) — non solo `seo-report.md`

---

## ⚠️ Nota preliminare: il report esistente (`seo-report.md`) è in parte obsoleto

`seo-report.md` (generato lo stesso giorno) elenca come "critici" alcuni problemi che **non esistono più nel codice sorgente**. Verifica diretta:

| Finding di `seo-report.md` | Stato reale verificato |
|---|---|
| "Meta description assenti su TUTTE le pagine" | **Falso** — presenti su homepage e pagine campione (es. `index.html`, `cosa-vedere-montefiascone-guida-completa.html`) |
| "Open Graph e Twitter Card assenti" | **Falso** — og:title/description/image/url/locale + twitter:card completi |
| "Schema JSON-LD assente (0/343 pagine)" | **Falso** — 86/106 pagine IT hanno `FAQPage`, 89 hanno `BreadcrumbList`, 46 `Article`, 11 `TouristAttraction`, 9 `Event`, 19 `WebSite`, 10 `Organization` |
| "Hreflang senza x-default" | **Falso** — x-default presente e corretto su tutte le pagine campionate |
| "Canonical assente/dubbio" | **Falso** — canonical assoluto e self-referential presente |
| "Duplicate URL in sitemap-de.xml" | **Falso** — nessun `<loc>` duplicato trovato |

Probabile causa: lo strumento usato per l'audit ha analizzato una versione cache/renderizzata non aggiornata (il sito ha già ricevuto interventi SEO importanti, documentati in `docs/` — es. `seo-aeo-geo-event-enrichment-report.md`, `rich-results-checklist.md`). Il punteggio 57/100 di quel report **non riflette lo stato attuale del codice** ed è quindi troppo pessimista sugli aspetti tecnici on-page.

Questa roadmap si basa sui **problemi reali confermati** con `grep` sul codice sorgente, non sulle assunzioni del report precedente.

---

## Stato reale verificato

### ✅ Cosa funziona già (non richiede intervento)
- Meta description, Open Graph, Twitter Card su tutte le pagine campionate
- Hreflang reciproco IT/EN/DE/FR + x-default corretto
- Canonical assoluto self-referential
- Schema ricco: FAQPage (86 pagine), BreadcrumbList (89), Article (46), TouristAttraction (11), Event (9), WebSite, Organization
- robots.txt corretto, sitemap index valido, ~98 URL per lingua pubblicata (IT/EN/DE)
- Sito statico, nessun framework JS pesante

### 🔴 Problemi reali confermati

| # | Problema | Evidenza | Severità |
|---|---|---|---|
| 1 | **`lastmod` identico su tutte le 98 URL** di `sitemap-it.xml` (`2026-07-02`) | `grep -c "<lastmod>2026-07-02" sitemap-it.xml` → 98/98 | Media — riduce l'utilità del segnale per il crawl budget |
| 2 | **Nessuno schema `Person`** per l'autore Matteo Angeloni | `progetto-editoriale.html` ha solo `Organization` + `AboutPage`; bio ridotta a una riga, nessuna foto/credenziali/link social | Alta — E-E-A-T debole, confermato |
| 3 | **Immagini prevalentemente JPG nei riferimenti HTML** nonostante esistano varianti WebP in `/media/` | 204 riferimenti `.jpg` vs 5 `.webp` nei file HTML sorgente; `media/gallery` ha 34 webp disponibili ma sotto-utilizzati | Media — occasione persa per LCP/peso pagina |
| 4 | **Nessun file `_headers`** per Cloudflare Pages | Non trovato in root né `dist-it/` | Media — security header (CSP, HSTS, X-Frame-Options) probabilmente ai default, da verificare e irrobustire |
| 5 | **`/dove-mangiare` non cita locali specifici** (confermato anche nel report precedente) | Contenuto dichiara esplicitamente di non nominare esercizi | Media — riduce valore pratico e citabilità |
| 6 | **Dominio `.it` concorrente non verificato direttamente** | Nessuna verifica diretta in questa sessione (richiede check esterno/WHOIS) | Da validare, non confermato tecnicamente |

### 🟡 FR: non è un bug, è una scelta di prodotto
`docs/fr-publication-gate-roadmap.md` documenta esplicitamente che `/fr/` resta **fuori da build pubblica, sitemap, hreflang e llms.txt finché IT/EN/DE non sono a parità di pagine e QA**. Confermato: `scripts/build-cloudflare.mjs` rimuove attivamente riferimenti `/fr/` dal build, e `sitemap.xml` (index) include solo IT/EN/DE. **Nessuna azione richiesta finché il gate non viene sciolto.**

---

## Piano d'azione — stato di avanzamento (aggiornato 7 luglio 2026)

### Fase 1 — Correzioni rapide

| # | Azione | Stato | Note |
|---|--------|-------|------|
| 1.1 | `lastmod` reali per ogni URL (data dalla cronologia git del file, non batch) | ✅ Fatto | `scripts/update-sitemap-lastmod.mjs`, integrato in `npm run build:cloudflare` (commit `bf3f907`) |
| 1.2 | File `_headers` per Cloudflare Pages (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy) | ✅ Fatto | `_headers` in root, copiato in `dist-it/` (commit `bf3f907`); **bug CSP trovato e corretto** (mancava `unpkg.com` in `style-src`, avrebbe rotto il CSS di Leaflet su `/mappa` — commit `70788dc`) |
| 1.3 | Verifica reale LCP/CLS/INP (PageSpeed/Lighthouse) su homepage + 3 pagine chiave | ✅ Fatto (dati reali) | API key personale PageSpeed Insights configurata (`~/.config/claude-seo/google-api.json`, fuori dal repo). Risultati mobile lab reali — vedi tabella sotto. **LCP risulta peggiore di quanto stimato dall'analisi statica**: 5.3–7.1s su tutte e 3 le pagine testate (soglia "good" Google: <2.5s). CLS ottimo (0.001–0.037). TBT quasi nullo. |

#### Dati reali PageSpeed Insights (mobile, lab data — 7 luglio 2026)

| Pagina | Performance | LCP | CLS | TBT | Nota |
|---|---|---|---|---|---|
| Homepage | 57–77/100 (variabile tra run) | 5.3–6.9s | 0.037 | 0–640ms | Punteggio instabile tra due run consecutivi |
| `/cosa-vedere-montefiascone-guida-completa` | 73/100 | 6.6s | 0.003 | 0ms | |
| `/mappa` | 72/100 | 7.1s | 0.001 | 0ms | |

> Nessun dato CrUX di campo (real-user) disponibile: traffico insufficiente per questa origine. I numeri sopra sono **lab data** (Lighthouse simulato, mobile con throttling), non dati di utenti reali.

**Nota tecnica sull'audit "redirects":** ogni test segnala un risparmio potenziale enorme (3.6–9.8s) sull'audit "Avoid multiple page redirects". Ho verificato che **non è un vero redirect da correggere**: il trace di rete mostra `requestedUrl` e `finalUrl` identici, un solo request con status 200 diretto, nessun HTTP 3xx nella catena. Confermato anche con `curl` diretto (0 redirect, 200-270ms) e verificato il file `_redirects` (nessuna regola che possa causare un loop sullo stesso URL). È quasi certamente un artefatto di misurazione di Lighthouse legato a latenza di connessione/TLS variabile sotto throttling mobile simulato — ma la variabilità stessa (7.7s vs 3.6s tra due run identici) indica una risposta iniziale del server non sempre stabile, da tenere d'occhio.

**Raccomandazione:** l'LCP reale è il problema più serio emerso da questa roadmap finora — va sopra soglia "good" su tutte le pagine testate. Prossimi passi consigliati (fuori dal perimetro eseguibile in questo ambiente, richiedono accesso alla dashboard Cloudflare Pages dell'utente): verificare cache-hit ratio ed eventuali cold-start delle funzioni edge, controllare le impostazioni Cache Rules/Always Online, e ripetere il test da PageSpeed Insights UI per conferma indipendente.

### Fase 2 — E-E-A-T e immagini

| # | Azione | Stato | Note |
|---|--------|-------|------|
| 2.1 | Bio estesa autore + link social/professionali | ✅ Fatto (IT/EN/DE) | Dati reali forniti da Matteo Angeloni: comunicatore digitale, autore del libro "Il fenomeno Civita", Instagram/TikTok verificati raggiungibili. Sezione "Chi sono" + schema Person con `jobTitle`/`description`/`sameAs` (commit `761c0b8`). **Foto reale ancora mancante** — nessuna fornita finora |
| 2.2 | Schema `Person` collegato a `Organization`, come `author` nell'`Article` schema | ✅ Fatto | Person minimo su `progetto-editoriale.html` + equivalenti EN/DE/FR; `author` aggiunto a **tutti i 202 blocchi `Article`** del sito (commit `67fd978`, `scripts/add-author-schema.mjs`). 391 blocchi JSON-LD validati, 0 errori |
| 2.3 | `.jpg` → `<picture>+webp` dove il file webp esiste già | ✅ Fatto | 57 immagini avvolte (54 + 3 corrette dopo un bug di rilevazione nello script — vedi `scripts/wrap-images-webp.mjs`, commit `bf3f907`/`70788dc`). 16 immagini restano solo jpg perché **non esiste ancora un file .webp corrispondente** (servirebbe generarlo con un tool di conversione immagini, non disponibile in questo ambiente) |
| 2.4 | `width`/`height` espliciti dove mancanti | ⏳ Non verificato a fondo | Il campione controllato aveva già dimensioni esplicite; non è stata fatta una scansione sistematica di tutto il sito |

### Fase 3 — Contenuto e autorevolezza

| # | Azione | Stato | Note |
|---|--------|-------|------|
| 3.1 | Arricchire `/dove-mangiare-a-montefiascone.html` con categorie di locali | ✅ Fatto (IT/EN/DE) | Sezione "Tipologie di locali da cercare" (trattorie, enoteche, ristoranti sul lago, agriturismi, locali informali) senza nominare esercizi specifici, coerente con l'impostazione editoriale della pagina (commit `6a3910d`) |
| 3.2 | Link outbound a fonti autorevoli (Comune, musei) | ✅ Fatto (IT/EN/DE) | Link verificato (HTTP 200) alla scheda ufficiale del Comune di Montefiascone su Rocca dei Papi, Cattedrale, Basilica San Flaviano, in tutte e tre le lingue pubblicate (commit `cb2dc1b`, `778397b`). **FR escluso**: contenuto ancora placeholder in italiano non tradotto, non incluso nel build pubblico |
| 3.3 | Verificare dominio `.it` concorrente (WHOIS, brand confusion) | ⏹️ Fuori scope | Il dominio `.it` **non è di proprietà dell'utente** (conferma diretta di Matteo Angeloni: "non ho il sito .it ma solo .com") — è un dominio di terzi, quindi non azionabile con redirect o interventi tecnici lato proprietario. Verifica tecnica avviata (DNS risolve, nginx risponde 503) ma **interrotta su richiesta dell'utente** per concentrare gli sforzi sul `.com`. La 3.6 originale del report ("valutare acquisizione/redirect da ilovemontefiascone.it") va quindi considerata non perseguibile a meno di un'eventuale trattativa con l'attuale proprietario |

### Fase 4 — Monitoraggio continuo

| # | Azione | Stato |
|---|--------|-------|
| 4.1 | Google Search Console per dati reali di indicizzazione/CTR | ✅ Fatto | Service account configurato e autorizzato (`siteFullUser` su `sc-domain:ilovemontefiascone.com`). Script riutilizzabili in `~/.config/claude-seo/gsc_*.mjs` (fuori dal repo). Vedi dati reali sotto |
| 4.2 | Riesecuzione audit tecnico completo a fine Fase 1-2 | ✅ Parte CWV+indicizzazione fatta (vedi 1.3 e sotto) — resto dell'audit tecnico (crawlability/sicurezza) ancora da rifare |
| 4.3 | Monitorare il gate FR (`docs/fr-publication-gate-roadmap.md`) | ⏳ Ricorrente |
| 4.4 | Tracciare ranking su keyword chiave | ✅ Baseline reale disponibile (vedi sotto) |

#### Dati reali Google Search Console (ultimi 28 giorni disponibili, 6 giu – 4 lug 2026)

- **156 click, 4.710 impressioni, CTR 3.3%, posizione media 7,98** — il sito è confermato indicizzato e riceve traffico reale organico. Contraddice ulteriormente `seo-report.md` (che ipotizzava zero indicizzazione).
- Query principali: eventi/festival (`fiera del vino montefiascone 2026`, `san flaviano montefiascone`, `atb montefiascone`, `1074 montefiascone`) — le pagine evento performano meglio dei contenuti evergreen.
- **Anomalia CTR da investigare**: `/basilica-san-flaviano-montefiascone` ha 2.002 impressioni ma solo 16 click (CTR 0,80%, posizione 4.2) — posizione buona ma CTR molto sotto media, probabile snippet poco invitante da rivedere.
- **Homepage in posizione 26,6** su query pertinenti (solo 4 click/34 impressioni) — da approfondire, è insolitamente basso per una homepage.
- Le vecchie URL con `.html` (`eventi.html`, `come-arrivare-a-montefiascone.html`, `parcheggi-montefiascone.html`) ricevono ancora impressioni/click significativi nonostante il redirect 301 alle versioni pulite — non un problema (il redirect passa comunque il segnale), ma conferma che Google le ha ancora in cache.

#### Sitemap: 1 problema reale trovato

- `sitemap-en.xml` ha **50 warning su 98 URL** (le sitemap IT hanno 0 warning). Diagnosticato con l'API di ispezione URL su 2 pagine campione: sono **warning Rich Results su schema `Event`** — campi opzionali mancanti (`organizer`, `performer`, `offers`, in un caso `url` probabilmente per cache non aggiornata da Google). Sono `WARNING`, non `ERROR`: non bloccano l'indicizzazione ma riducono la completezza del rich result. **Corretto in Fase 5** dove il testo lo supportava — vedi sotto.
- Trovate sitemap duplicate sottomesse sia su `https://ilovemontefiascone.com/...` che su `https://www.ilovemontefiascone.com/...` per lo stesso dominio proprietà — ridondante (l'apex fa comunque redirect 301 a www) ma non dannoso. Pulizia consigliata ma non urgente: rimuovere le sitemap sottomesse su apex da Search Console.

---

## Fase 5 — Audit multi-agent (7 luglio 2026, secondo giro)

Lanciati 6 audit paralleli mirati sulle aree non ancora coperte (content/E-E-A-T a scala, GEO/citabilità AI, SXO sulle anomalie GSC, tecnico a scala su 301 pagine, mappatura Event schema, visivo). L'audit visivo non ha prodotto risultati (probabile assenza di browser/Playwright in questo ambiente) — non bloccante, gli altri 5 hanno dato esiti concreti.

### Trovato e corretto

| Problema | Fonte | Fix applicato | Commit |
|---|---|---|---|
| 14 pagine con solo `TouristAttraction`/`CollectionPage`/`WebPage` (mai `Article`) senza alcun autore — il fix Fase 2.2 copriva solo i 202 blocchi `Article`, non queste | Audit content | `author` Person aggiunto (`scripts/add-author-first-node.mjs`) | `6052b04` |
| Pagina pillar `cosa-vedere-montefiascone-guida-completa.html` con autore `Organization: Redazione` invece di `Person`, unica pagina cornerstone incoerente col resto del sito | Audit GEO | Sostituito con Person Matteo Angeloni | `6052b04` |
| Pagina pillar senza FAQPage schema né FAQ visibili, a differenza delle altre guide | Audit GEO | 5 domande radicate nei fatti già in pagina (cupola 27m, leggenda Est Est Est, tappa Francigena 17,8km, eventi) | `f512c69` |
| 50 warning Event schema: campi opzionali mancanti | Audit schema (mappatura completa) | `isAccessibleForFree` su Fiera del Vino (ingresso gratuito citato nel testo), `performer` su Festa Santa Margherita (Banda Musicale Grotte Santo Stefano) e Festival Ecologia Integrale (Mogol) — **non aggiunto** `organizer` su Panorami Festival: il testo cita il Comune solo come fonte del calendario, non come organizzatore dichiarato, e la pagina ha una policy editoriale esplicita di cautela | `6052b04` |
| CTR 0,80% su `/basilica-san-flaviano-montefiascone` (2.002 impr., pos. 4.2) | Audit SXO | Title/meta riformulati in forma più distintiva rispetto ai risultati enciclopedici (Wikipedia/Comune/FAI) che dominano la SERP per quella query, stessi fatti già in pagina | `638e07b` |
| 3 URL EN legacy con doppio hop di redirect + status 302 invece di 301 su fusioni permanenti | Audit tecnico (301 pagine) | Regole `.html` esplicite aggiunte prima della regola generica in `_redirects`, status corretto a 301 | `1e5d77c` |
| Title identici IT/EN/DE (mai tradotti) su Est-Lake Festival, Est Film Festival, Cronoscalata (DE) | Audit tecnico | Struttura del title localizzata per mercato, nome proprio dell'evento mantenuto, coerente con le description già tradotte correttamente | `1e5d77c` |

391 blocchi JSON-LD validati dopo ogni modifica, 0 errori.

### Trovato ma non ancora corretto (richiede più contesto o dati che il sito non ha)

- **Homepage in posizione 26,6**: causa probabile doppia, secondo l'audit SXO — (a) query generiche tipo "Montefiascone" sono dominate da Wikipedia/Tripadvisor/Italia.it con anni di autorità; (b) possibile cannibalizzazione interna tra homepage (che include nel suo FAQ "Cosa vedere a Montefiascone in un giorno?") e la pagina dedicata `cosa-vedere-montefiascone-guida-completa.html` con lo stesso intento. Non risolto: richiederebbe una decisione editoriale (es. restringere il FAQ della homepage e rimandare esplicitamente alla guida completa) più che un fix tecnico.
- **Contenuto sottile e triplicazione** (audit content): 5 pagine campione sotto le 600 parole (soglia service-page: 800); le 3 varianti "borghi del lago" e il cluster "cosa vedere" (Rocca/Cattedrale/San Flaviano) sono trattati in triplice copia con frasi quasi identiche tra loro — pattern doorway-page da valutare (consolidare o differenziare realmente i contenuti).
- **Freshness delle date "ultimo aggiornamento"**: la maggior parte delle pagine campionate riporta la data di rilascio del sito (13-15 giugno 2026), non una revisione editoriale reale verificabile in `dateModified`.
- **Passaggi troppo frammentati per citazione AI** sulla pagina pillar (audit GEO): micro-paragrafi da 25-40 parole, sotto il range ottimale 134-167 parole per l'estrazione diretta da parte di motori AI — richiederebbe un lavoro di riscrittura, non un fix strutturale.
- **Nessun `sameAs` verso Wikipedia/Wikidata** per l'entità Place "Montefiascone" — quick win a basso effort segnalato dall'audit GEO, non ancora fatto.
- **File orfani con canonical self-referenziale** (`en/how-many-days-in-montefiascone.html` e le altre 2 pagine EN escluse dalla build) — nessun danno oggi, ma debito tecnico se lo script di build cambiasse.

---

## Cosa resta aperto, in ordine di priorità

1. **LCP reale sopra soglia su tutte le pagine testate** — 5.3–7.1s contro una soglia "good" di 2.5s. Priorità più alta, richiede accesso alla dashboard Cloudflare Pages che non ho in questo ambiente.
2. **Homepage in posizione 26,6** — richiede una decisione editoriale su come differenziare homepage e guida "cosa vedere" (vedi Fase 5).
3. **Foto reale dell'autore** (2.1) — bio e link social fatti; manca ancora una foto reale di Matteo Angeloni.
4. **Contenuto sottile/triplicato** su varianti "borghi lago" e cluster "cosa vedere" — da consolidare o differenziare.
5. **`sameAs` Wikipedia/Wikidata** per l'entità Place, **`width`/`height` sistematici** (2.4), **freshness date reali** — quick win a basso effort non ancora fatti.
6. **Pulizia sitemap duplicate** in Search Console (apex vs www) — cosmetica, non urgente.

Il dominio `.it` (3.3) resta volutamente fuori scope su indicazione dell'utente.

## Raccomandazione

I fix a rischio più alto (CSP che rompeva Leaflet, bug di rilevazione nello script webp) sono stati trovati **durante** l'esecuzione, non prima — a conferma che ogni modifica tecnica va verificata con una build reale prima del deploy, non solo per ispezione del codice. Consiglio di eseguire un giro di QA manuale su `/mappa` prima del prossimo deploy.

Con Search Console ora collegato, il quadro è cambiato: il sito **è indicizzato e riceve traffico reale** (156 click/28gg), quindi la priorità si sposta da "essere trovati" a "convertire meglio chi già vede il sito nei risultati" — da qui l'importanza dell'LCP e delle anomalie di CTR sopra.

Con i dati reali PageSpeed Insights ora disponibili, la priorità è cambiata: **l'LCP mobile (5.3–7.1s) è il problema più concreto e ad alto impatto** trovato finora in questa roadmap, più urgente della bio autore o dei link outbound già sistemati. Non è però risolvibile da qui: serve accesso alla dashboard Cloudflare Pages per capire se dipende da cache miss, cold-start delle funzioni edge o configurazione TLS. Completa il setup del service account Search Console (passi 4-5) così posso incrociare questi dati con l'indicizzazione reale, e valuta di controllare la dashboard Cloudflare Pages per i tempi di risposta edge.
