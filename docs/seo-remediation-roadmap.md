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
| 1.3 | Verifica reale LCP/CLS/INP (PageSpeed/Lighthouse) su homepage + 3 pagine chiave | ⚠️ Parziale | Quota API PageSpeed Insights esaurita (429, nessuna chiave configurata) → **analisi statica** con skill `seo-technical`: hero image preloaded/fetchpriority/dimensioni esplicite su homepage (basso rischio LCP/CLS); font loading reso asincrono a build-time; CSS unico da 97KB minificato (rischio FCP moderato, non urgente); `mappa.html` carica Leaflet CSS da unpkg.com in modo bloccante (unico punto debole). **Da rifare con dati reali** appena la quota PSI si libera o con una API key dedicata |

### Fase 2 — E-E-A-T e immagini

| # | Azione | Stato | Note |
|---|--------|-------|------|
| 2.1 | Bio estesa autore + foto + link social/professionali | ⏸️ Rimandato | Nessun dato reale disponibile; **non fabbricato** per non creare falsi segnali E-E-A-T. Task aperto, in attesa di input dell'utente |
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
| 4.1 | Google Search Console per dati reali di indicizzazione/CTR | ⏳ Da fare — richiede accesso/credenziali dell'utente |
| 4.2 | Riesecuzione audit tecnico completo a fine Fase 1-2 | ⏳ Da fare |
| 4.3 | Monitorare il gate FR (`docs/fr-publication-gate-roadmap.md`) | ⏳ Ricorrente |
| 4.4 | Tracciare ranking su keyword chiave | ⏳ Da fare |

---

## Cosa resta aperto, in ordine di priorità

1. **Bio autore reale** (2.1) — bloccato in attesa di dati da Matteo Angeloni (bio, foto, profili social/professionali verificabili).
2. **Verifica CWV reale** (1.3) — ripetuta oggi, quota PSI ancora esaurita (limite giornaliero condiviso); ripetere quando disponibile una API key dedicata o la quota si libera.
3. **Google Search Console** (4.1) — richiede accesso con credenziali dell'utente, non eseguibile autonomamente.
4. **`width`/`height` sistematici** (2.4) e **riesecuzione audit finale** (4.2) — non ancora affrontati in modo sistematico.

Il dominio `.it` (3.3) resta volutamente fuori scope su indicazione dell'utente.

## Raccomandazione

I fix a rischio più alto (CSP che rompeva Leaflet, bug di rilevazione nello script webp) sono stati trovati **durante** l'esecuzione, non prima — a conferma che ogni modifica tecnica va verificata con una build reale prima del deploy, non solo per ispezione del codice. Consiglio di eseguire un giro di QA manuale su `/mappa` (verifica visiva che Leaflet si carichi) prima del prossimo deploy in produzione, poi procedere con i punti aperti sopra (a partire dalla bio autore, quando avrai i dati reali).
