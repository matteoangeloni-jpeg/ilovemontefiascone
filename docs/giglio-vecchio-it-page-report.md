# Giglio Vecchio IT Page — Report

## Esito

**READY (draft IT-only, fuori dal build pubblico in attesa di decisione esplicita)**

## Branch

`codex/giglio-vecchio-it-page` (da `main`)

## Pagina creata

* File: `giglio-vecchio-montefiascone.html`
* Slug: `giglio-vecchio-montefiascone`
* URL clean atteso (quando pubblicata): `/giglio-vecchio-montefiascone`
* Lingua: solo IT. Nessuna versione EN/DE/FR creata.

## Fonti usate (tutte fornite dall'utente, nessun dato inventato)

1. **Chiesa della Madonna del Giglio** — Zepponami, frazione di Montefiascone; edificio del XIX secolo, costruito intorno al 1854; sostituì una piccola chiesa nella contrada Giglio Vecchio; volontà dei frati cappuccini di Montefiascone e di residenti locali; ruolo di Padre Santi da Viterbo e di donatori; decorazioni interne di Cesare Viali (1867); inaugurazione 1° settembre 1867 con processione del vescovo Giuseppe Bovieri; nascita della confraternita poi detta di Santa Maria del Giglio; restauri del 1995.
2. **ASD Giglio Vecchio** — dati dal registro CONI: nome, sede Montefiascone (VT), iscrizione 17/09/2025, legale rappresentante Mirko La Corte, disciplina calcio. Tono neutro, non celebrativo.
3. **Nascita della società sportiva** — fonte giornalistica locale del 27/09/2025: nuova società, inaugurazione nuovo campo di calcio, dichiarazione della sindaca Giulia De Santis (progetto nato dalla passione di un gruppo di giovani, valore sociale per la comunità). Riportata in forma sintetica.
4. **Giglio Summer Festival 2026** — Zepponami, 19-20-21 giugno 2026; format Indie Power, MCA Showcase, Non C'è Band; Street Food & Drink Zone dalle 19:30; warm up 21:00; show 22:00; ingresso gratuito; organizzatori Genius Music & Events, A.S.D. Giglio Vecchio, MCA Production. Introdotta con formula prudente "secondo le informazioni pubbliche disponibili". Nessun dato meteo/operativo aggiunto.
5. **Resoconto post-evento** — Tuscia Times, 24/06/2026, seconda edizione: tre serate di musica, divertimento, enogastronomia; coinvolgimento di giovani tifosi, sostenitori e staff; ringraziamenti a Indie Power, MCA Production, Non C'è Duo. Usato esplicitamente come resoconto di un evento concluso, **non** come fonte per il programma futuro.

**Nota su una discrepanza tra le fonti:** la fonte pre-evento (punto 4) nomina il format "Non C'è **Band**", mentre il resoconto post-evento (punto 5) ringrazia "Non C'è **Duo**" e chiama l'evento "Giglio **Vecchio** Summer Festival" (mentre il punto 4 lo chiama solo "Giglio Summer Festival"). Ho riportato entrambe le formulazioni esattamente come fornite, attribuendole alla rispettiva fonte, senza unificarle né correggerle — per non introdurre un'informazione non verificata.

## Dati non usati

* Nessun orario, prezzo, contatto, servizio, parcheggio o programma dettagliato del festival oltre a quanto esplicitamente fornito.
* Nessuna informazione meteo o logistica operativa.
* Nessuna immagine reale di Zepponami / Madonna del Giglio / Giglio Summer Festival (non disponibile negli asset del repo).

## Immagini

* **Usata**: `media/hero-rocca-dei-papi-1600.jpg` (asset generico già esistente, medesimo fallback usato da `associazioni-volontariato-montefiascone.html` e da altre pagine di comunità/eventi locali). Alt text descrittivo aggiunto in italiano.
* **P1 — immagine da richiedere a Matteo**: uno scatto reale di Zepponami, della Chiesa della Madonna del Giglio, del campo ASD o del Giglio Summer Festival, per sostituire l'immagine generica attuale su hero e `og:image`.

## Struttura pagina

Hero (H1 + sottotitolo) → box "In breve" → "Dove si trova" → "La memoria della Madonna del Giglio" → "La nuova ASD Giglio Vecchio" → "Giglio Summer Festival" (programma + resoconto) → "Perché inserirlo in una visita" → "Da sapere" → link interni → sezione trasparenza editoriale.

Markup `data-ai-entity` / `data-ai-intent` / `data-ai-category` applicato secondo la convenzione già in uso nel sito (vedi `associazioni-volontariato-montefiascone.html`) per coerenza GEO/AEO.

## SEO

* Title: "Giglio Vecchio Montefiascone: Zepponami, ASD e Summer Festival" (come richiesto).
* Meta description: come richiesta testualmente.
* H1 unico: "Giglio Vecchio a Montefiascone: Zepponami, sport locale e festa d'estate".
* Canonical: `https://www.ilovemontefiascone.com/giglio-vecchio-montefiascone`, coerente con `og:url`.
* OG/Twitter metadata completi.
* **Hreflang**: solo `it` (self) + `x-default` (self). **Non** aggiunto `hreflang="en"`/`hreflang="de"` perché non esiste alcuna pagina EN/DE equivalente reale — inventare un alternate verso una pagina inesistente avrebbe rotto la reciprocità hreflang del sito. Decisione documentata qui, non nascosta.

## GEO

Entità esplicite in `about` (JSON-LD) e nel testo: Giglio Vecchio, Zepponami, Montefiascone, Chiesa della Madonna del Giglio, Santa Maria del Giglio (confraternita), A.S.D. Giglio Vecchio, Giglio Summer Festival, Lago di Bolsena (link contestuale), Tuscia, Lazio.

## JSON-LD

* Tipi usati: `WebPage` (principale), `BreadcrumbList`, `FAQPage`.
* **Nessuno schema `Event`** creato per il Giglio Summer Festival, come richiesto esplicitamente: i dati del festival sono descritti solo in prosa/testo visibile, non come entità Event strutturata separata (evitando di dover garantire completezza `startDate`/`location`/`organizer` con dati non abbastanza certi per uno schema machine-readable).
* FAQ visibile solo implicitamente tramite l'answer box AEO richiesto ("Che cos'è Giglio Vecchio a Montefiascone?"), riprodotto identico nel testo/JSON-LD.
* JSON-LD validato: 3 blocchi, tutti sintatticamente validi (vedi QA).

## Decisione sitemap / perimetro

* **La pagina NON è stata inserita nel build pubblico** (`dist-it`), né in `sitemap-it.xml`, né in `llms.txt`.
* Meccanismo usato: aggiunta di `giglio-vecchio-montefiascone.html` alla denylist `nonPublicRootHtml` già esistente in **entrambi** gli script di build (`build-soft-launch-it.ps1` e `scripts/build-cloudflare.mjs`), lo stesso meccanismo già usato per pagine esistenti-ma-non-pubbliche come `base.html`.
* Risultato verificato: build produce ancora **IT 97 / EN 97 / DE 97**, identico a prima. Il file sorgente esiste nel repo ma non viene copiato in `dist-it`.
* Questa è una decisione prudente in attesa di **decisione esplicita** del proprietario del sito su come/se integrarla nel perimetro pubblico (es. come pagina IT-only extra al di fuori della parità stretta, oppure rimandata a quando sarà disponibile un'immagine reale).

## QA eseguita

| Controllo | Esito |
| --- | --- |
| `npm run build:cloudflare` | ✅ success — "IT: 97, EN: 97, DE: 97" |
| Perimetro IT/EN/DE invariato | ✅ 97/97/97 in sitemap e in dist |
| Pagina assente da `dist-it` | ✅ confermato |
| Pagina presente nel repo sorgente | ✅ |
| JSON-LD valido | ✅ WebPage + BreadcrumbList + FAQPage, 0 errori |
| Link `.html` interni | ✅ 0 |
| Link interni risolvono a file esistenti | ✅ 14/14 verificati |
| Immagine hero esiste | ✅ |
| Mojibake | ✅ 0 |
| Canonical coerente con `og:url` | ✅ |
| H1 unico | ✅ |
| Nessun hreflang inventato verso pagine inesistenti | ✅ |
| `/fr/` invariato | ✅ non toccato |

## File modificati

* `giglio-vecchio-montefiascone.html` (nuovo)
* `build-soft-launch-it.ps1` (micro-fix: aggiunta a `$nonPublicRootHtml`)
* `scripts/build-cloudflare.mjs` (micro-fix: aggiunta a `nonPublicRootHtml`)
* `docs/giglio-vecchio-it-page-report.md` (nuovo, questo file)

## Blocker residui

Nessuno tecnico. Blocker editoriale: manca un'immagine reale (P1, vedi sopra) e manca la decisione esplicita se/quando inserire la pagina nel perimetro pubblico.

## Conferme

* Nessun deploy eseguito.
* Cloudflare config non modificata.
* Search Console non toccata.
* Progetto Next.js (`D:\ilovemontefiascone`) non toccato (fuori dallo scope di questo ambiente).
* Perimetro IT/EN/DE 97/97/97 non rotto.
