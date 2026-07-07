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

## Piano d'azione

### Fase 1 — Correzioni rapide (Settimana 1)

| # | Azione | Impatto | Effort |
|---|--------|---------|--------|
| 1.1 | Generare `lastmod` reali per ogni URL nello script di build (data ultima modifica del file sorgente `.md`/`.html`), non una data batch | Media | 2h dev (`scripts/build-cloudflare.mjs`) |
| 1.2 | Aggiungere file `_headers` per Cloudflare Pages con `Content-Security-Policy`, `X-Frame-Options: DENY`, `Strict-Transport-Security`, `X-Content-Type-Options: nosniff` | Alta (sicurezza) | 1h dev |
| 1.3 | Verificare con PageSpeed Insights/Lighthouse reale (non stimato) LCP/CLS/INP su homepage + 3 pagine chiave | Alta | 1h |

### Fase 2 — E-E-A-T e immagini (Settimane 2–3)

| # | Azione | Impatto | Effort |
|---|--------|---------|--------|
| 2.1 | Espandere `progetto-editoriale.html`: bio estesa di Matteo Angeloni, foto reale, anni di esperienza sul territorio, link a profili social/professionali | Alta | 1 giorno |
| 2.2 | Aggiungere schema `Person` (collegato a `Organization` via `author`/`founder`) sulla pagina editoriale e come `author` nell'`Article` schema delle guide principali | Alta | 2h dev |
| 2.3 | Sostituire i riferimenti `.jpg` con `.webp` (con fallback `<picture>`) su tutte le pagine, sfruttando le varianti già presenti in `/media/` | Media | 4h dev |
| 2.4 | Aggiungere `width`/`height` espliciti alle immagini rimaste senza per evitare CLS | Bassa | 2h dev |

### Fase 3 — Contenuto e autorevolezza (Mese 2)

| # | Azione | Impatto | Effort |
|---|--------|---------|--------|
| 3.1 | Arricchire `/dove-mangiare-a-montefiascone.html` con categorie/tipologie di locali (non serve una directory completa) | Media | 3h contenuto |
| 3.2 | Aggiungere link outbound a fonti autorevoli (Comune di Montefiascone, Rocca dei Papi ufficiale, musei) dove pertinente | Media | 2h contenuto |
| 3.3 | Verificare esternamente la situazione del dominio `ilovemontefiascone.it` (WHOIS, contenuto pubblicato, eventuale rischio di brand confusion) prima di decidere se agire | Da validare | 1h ricerca |

### Fase 4 — Monitoraggio continuo

| # | Azione |
|---|--------|
| 4.1 | Registrare/verificare Google Search Console per dati reali di indicizzazione, CTR, query — sostituendo le stime con dati reali |
| 4.2 | Rieseguire un audit tecnico **dopo** aver risolto i punti Fase 1–2, per avere un punteggio affidabile aggiornato |
| 4.3 | Monitorare il gate FR (`docs/fr-publication-gate-roadmap.md`) e riattivare lo sprint FR solo a condizioni soddisfatte |
| 4.4 | Tracciare ranking su keyword chiave: "cosa vedere montefiascone", "lago di bolsena cosa vedere", "est est est vino" |

---

## Raccomandazione

Prima di investire ulteriore tempo su "problemi" già risolti (meta tag, OG, schema, hreflang), la priorità reale è: **lastmod dinamici, security headers, schema Person/E-E-A-T, e conversione immagini a WebP**. Consiglio di rieseguire un audit tecnico a fine Fase 2 per avere un punteggio di baseline affidabile, dato che quello attuale (57/100) sottostima significativamente lo stato reale del sito.
