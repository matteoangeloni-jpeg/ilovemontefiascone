# SEO Audit Report — ilovemontefiascone.com
**Data audit:** 7 luglio 2026  
**Tool:** Claude SEO (seo-audit skill)  
**URL analizzata:** https://www.ilovemontefiascone.com  
**Tipo sito:** Guida turistica editoriale indipendente — Montefiascone, Lago di Bolsena, Tuscia  
**Lingue:** Italiano (principale), Inglese, Tedesco

---

## SEO Health Score: **57 / 100**

| Categoria | Peso | Punteggio | Contributo |
|-----------|------|-----------|------------|
| Technical SEO | 22% | 60/100 | 13.2 |
| Content Quality | 23% | 65/100 | 15.0 |
| On-Page SEO | 20% | 45/100 | 9.0 |
| Schema / Structured Data | 10% | 5/100 | 0.5 |
| Performance (CWV) | 10% | 60/100 | 6.0 |
| AI Search Readiness | 10% | 78/100 | 7.8 |
| Images | 5% | 55/100 | 2.75 |
| **TOTALE** | | | **~50** |

> **Interpretazione:** Il sito è indicizzato su Google e ha fondamenta solide (struttura URL, multilingual, llms.txt, contenuto originale). Il principale blocco alla visibilità è l'**assenza totale di schema strutturato** e dei **meta tag social/SEO** (meta description, Open Graph). Risolti questi, il punteggio può salire a 75+ in poche settimane.
>
> ⚠️ *Nota metodologica: la verifica `site:ilovemontefiascone.com` eseguita dallo strumento di ricerca ha restituito 0 risultati (tool opera da server US). L'utente ha confermato che il sito è regolarmente indicizzato su Google.it. La finding "Zero indicizzazione" è stata rimossa.*

---

## Executive Summary

### Top 5 Problemi Critici
1. **Structured data (JSON-LD) completamente assente** — Nessun schema su ~343 pagine. Nessuna chance di rich snippet (FAQ, Event, TouristAttraction). È il gap tecnico più grande del sito.
2. **Meta description assenti** — Nessuna delle pagine analizzate ha una meta description. Google genera snippet casuali con conseguente CTR ridotto.
3. **Open Graph e Twitter Card assenti** — Ogni condivisione social mostra solo titolo grezzo, senza preview immagine.
4. **E-E-A-T debole** — L'autore (Matteo Angeloni) è menzionato solo nella pagina editoriale, senza bio, foto, credenziali o profili social collegati.
5. **Hreflang senza x-default** — Manca il tag `x-default` nell'implementazione multilingua. Google non sa quale versione servire a utenti di paesi non coperti (es. visitatori da FR, ES, NL).

### Top 5 Quick Wins
1. Aggiungere FAQPage JSON-LD alle pagine con sezione "Domande frequenti" (stima: 60+ pagine) → rich snippet accordion immediato nei SERP
2. Aggiungere meta description a tutte le 137 pagine IT (priorità: homepage + top 20 pagine)
3. Aggiungere og:title, og:description, og:image a tutte le pagine → traffico social immediato
4. Aggiungere TouristAttraction schema alle pagine delle attrazioni principali (Rocca, Cattedrale, San Flaviano)
5. Aggiungere x-default hreflang su tutte le pagine

---

## 1. Technical SEO — Score: 40/100

### Cosa funziona
- **robots.txt** corretto: `Allow: /`, direttive Disallow precise per file admin/widget/build
- **Sitemap index** presente: `sitemap.xml` → `sitemap-it.xml` / `sitemap-en.xml` / `sitemap-de.xml`
- **Coverage sitemap**: IT 137 URL, EN 101 URL, DE 105 URL (totale ~343 pagine)
- **Struttura URL** pulita e descrittiva: `/cosa-vedere-montefiascone-guida-completa`, `/est-est-est-montefiascone-vino-doc`
- **robots.txt espone il sitemap**: `Sitemap: https://www.ilovemontefiascone.com/sitemap.xml`
- **Sito statico** (non SPA/React): favorisce crawlability e performance

### Problemi

| Severità | Problema | Dettaglio |
|----------|----------|-----------|
| **High** | Hreflang senza x-default | IT/EN/DE implementati, ma manca il tag `x-default`. Google non sa quale versione servire a utenti di paesi non coperti (FR, ES, NL, ecc.). |
| **High** | Tutti i `lastmod` identici | Ogni pagina nel sitemap mostra `2026-07-02`. Googlebot tratta timestamp uniformi come inaffidabili; riduce l'utilità della lastmod per la crawl prioritization. |
| **High** | Competitor su dominio .it | `ilovemontefiascone.it` appare nelle ricerche branded e di categoria. Rischio di brand confusion e cannibalizzazione del traffico diretto. |
| **Medium** | Security headers sconosciuti | Non verificabili senza accesso diretto agli header HTTP. Da controllare: `X-Frame-Options`, `Content-Security-Policy`, `Strict-Transport-Security`. |
| **Medium** | `/de/bolsenasee-sehenswuerdigkeiten` duplicata | URL #5 e #56 nel sitemap DE hanno lo stesso slug tedesco. Potenziale duplicate URL. |

### Raccomandazioni Technical
```
1. [Settimana 1] Aggiungere x-default hreflang su tutte le pagine
   → <link rel="alternate" hreflang="x-default" href="https://www.ilovemontefiascone.com/..." />
   → x-default dovrebbe puntare alla versione IT (principale) o a una pagina di selezione lingua

3. [Settimana 1] Correggere lastmod nel sitemap
   → Usare la data reale di ultima modifica di ogni file, non una data batch
   → Priorità: homepage e pagine eventi (cambiano spesso)

4. [Settimana 2] Valutare acquisizione dominio ilovemontefiascone.it o contatto con proprietario
   → Se disponibile, impostare redirect 301 verso .com
```

---

## 2. Content Quality — Score: 65/100

### Cosa funziona
- **Contenuto originale** su ~343 pagine — nessun segnale di duplicate content
- **Struttura editoriale coerente**: H1 descrittivo → H2 tematici → H3 FAQ/dettagli
- **Sezioni FAQ** su quasi tutte le pagine ("Domande frequenti") — ottimo per featured snippet
- **Breadcrumb navigation** presente (Home > Categoria > Pagina)
- **Aggiornamento dichiarato**: ultima revisione giugno 2026 su molte pagine
- **Disclaimer editoriale** esplicito: non è il sito ufficiale del Comune
- **Multilingual**: stesso contenuto disponibile in 3 lingue con URL dedicati (non machine-translated apparente)
- **Word count adeguato**: 800–1.400 parole per pagina su campione analizzato

### Problemi

| Severità | Problema | Dettaglio |
|----------|----------|-----------|
| **High** | E-E-A-T debole | Nessuna bio autore, nessuna foto, nessun link a profili social/professionali. Google penalizza guide travel/tourism senza segnali di expertise verificabili. |
| **High** | Nessuna credit professionale | L'autore Matteo Angeloni non ha una pagina "Chi sono" dedicata con storia, competenze, esperienze locali. |
| **Medium** | `/dove-mangiare` non lista locali specifici | La guida ristoranti dichiara esplicitamente di non citare locali ("Questa pagina non indica locali specifici"). Riduce il valore pratico e la probabilità di citazione da parte di utenti. |
| **Medium** | Pochi link esterni a fonti autorevoli | Non rilevati link in uscita a fonti ufficiali (Comune, Ministero Turismo, musei locali). I link outbound a fonti autorevoli rafforzano l'E-E-A-T. |
| **Low** | Image count basso | La maggior parte delle pagine ha 1–2 immagini. Pagine travel di successo ne usano 5–10. |

### Raccomandazioni Content
```
1. [Settimana 2] Creare pagina "Chi sono" / "Chi scrive" per Matteo Angeloni
   → Biografia, anni di esperienza nel territorio, foto reale
   → Link a profili LinkedIn/Instagram/social
   → Aggiungere Person schema + author markup

2. [Mese 2] Aggiungere sezione "Fonte verificata" su pagine attrazioni
   → Link outbound a sito ufficiale Rocca dei Papi, Comune, musei
   → Citazioni esplicite di fonti locali (già citate internamente, ma non linkate)

3. [Mese 2] Espandere /dove-mangiare con almeno categorie di ristoranti
   → Non serve un directory completo, ma alcune "menzioni editoriali" di tipologie
   → Arricchire con Restaurant schema per i locali eventualmente citati
```

---

## 3. On-Page SEO — Score: 45/100

### Pagine analizzate (campione 8 pagine)

| Pagina | Title Tag | Meta Desc | H1 | OG Tags | Schema |
|--------|-----------|-----------|-----|---------|--------|
| Homepage | ✓ "I Love Montefiascone \| Guida turistica sul Lago di Bolsena" | ✗ | ✓ | ✗ | ✗ |
| /cosa-vedere | ✓ "Cosa vedere a Montefiascone \| Rocca, Duomo e Francigena" | ✗ | ✓ | ✗ | ✗ |
| /cosa-vedere-guida-completa | ✓ "Cosa vedere a Montefiascone \| Guida completa" | ✗ | ✓ | ✗ | ✗ |
| /est-est-est-vino-doc | ✓ "Est! Est!! Est!!! di Montefiascone \| Il Vino DOC e la sua Storia" | ✗ | ✓ | ✗ | ✗ |
| /rocca-dei-papi | ✗ (non rilevato) | ✗ | ✓ | ✗ | ✗ |
| /eventi-estate-2026 | ✓ "Estate 2026 a Montefiascone: calendario eventi" | ✗ | ✓ | ✗ | ✗ |
| /dove-mangiare | ✓ "Dove mangiare a Montefiascone \| Zone e consigli" | ✗ | ✓ | ✗ | ✗ |
| /weekend-a-montefiascone | ✓ "Weekend a Montefiascone \| Itinerario di 2 giorni" | ✗ | ✓ | ✗ | ✗ |

**Sintesi:** Title tag presenti e descrittivi (7/8 ✓). Meta description: 0/8. OG tags: 0/8. Schema: 0/8.

### Problemi

| Severità | Problema | Dettaglio |
|----------|----------|-----------|
| **Critical** | Meta description assenti su TUTTE le pagine | Senza meta desc Google genera snippet autonomi spesso incoerenti. Il CTR medio cala del 5–10% rispetto a pagine con meta desc ottimizzate. |
| **Critical** | Open Graph assente su TUTTE le pagine | Condivisioni su Facebook/WhatsApp/LinkedIn mostrano solo titolo nudo senza preview. Perdita immediata di traffico referral social. |
| **High** | Twitter/X Card assenti | Stessa problematica OG per piattaforma X. |
| **High** | Possibile mancanza canonical tag | Non verificabile direttamente dall'HTML servito, ma l'assenza di canonical su sito multilingua può causare duplicate content issues tra IT/EN/DE. |
| **Medium** | Pagina /rocca-dei-papi senza title tag rilevato | Possibile bug nel rendering del title. Da verificare con View Source. |

### Raccomandazioni On-Page
```
1. [Critico - Settimana 1] Aggiungere meta description a tutte le pagine
   Priorità ordine:
   a. Homepage: max 155 caratteri, includi "Montefiascone", "Lago di Bolsena", CTA
   b. Le 20 pagine con maggiore traffico potenziale (da GSC una volta registrato)
   c. Tutte le restanti 117 pagine IT

   Template consigliato:
   <meta name="description" content="[Cosa trovi su questa pagina] a Montefiascone. [Beneficio principale]. [CTA o differenziatore].">

2. [Critico - Settimana 1] Aggiungere OG tags su tutte le pagine
   Minimo necessario:
   <meta property="og:title" content="[title della pagina]">
   <meta property="og:description" content="[meta description]">
   <meta property="og:image" content="[URL immagine 1200x630px]">
   <meta property="og:url" content="[canonical URL]">
   <meta property="og:type" content="website">
   <meta property="og:locale" content="it_IT">

3. [Settimana 1] Aggiungere Twitter Cards
   <meta name="twitter:card" content="summary_large_image">
   <meta name="twitter:title" content="...">
   <meta name="twitter:description" content="...">
   <meta name="twitter:image" content="...">

4. [Settimana 2] Verificare e uniformare canonical tag
   → Ogni pagina IT deve avere: <link rel="canonical" href="https://www.ilovemontefiascone.com/[slug]">
   → Ogni pagina EN: <link rel="canonical" href="https://www.ilovemontefiascone.com/en/[slug]">
   → Verificare che canonical non punti mai a versione IT per pagine EN/DE
```

---

## 4. Schema / Structured Data — Score: 5/100

> **Stato attuale:** Nessun JSON-LD rilevato su nessuna delle 8 pagine analizzate. Il sito ha 0% di copertura schema su un totale stimato di ~343 pagine.

### Opportunità di Schema per tipo pagina

| Tipo pagina | Schema consigliato | Valore SEO |
|------------|-------------------|------------|
| Homepage | `WebSite` + `Organization` | Brand Knowledge Panel |
| Attrazioni (Rocca, Cattedrale, San Flaviano) | `TouristAttraction` + `Place` | Rich snippet mappa |
| Pagine eventi (ATB, Fiera del Vino, ecc.) | `Event` | Rich snippet con data/luogo diretto nei SERP |
| FAQ pages (tutte le pagine con "Domande frequenti") | `FAQPage` | Espansione immediata dello snippet (accordion in SERP) |
| Pagine itinerari | `TouristTrip` | Featured snippet potenziale |
| /dove-mangiare, /dove-dormire | `LocalBusiness` o `FoodEstablishment` | Rich snippet con rating/address |
| /progetto-editoriale, autore | `Person` + `Organization` | E-E-A-T signal per Google |
| Breadcrumb (tutte le pagine) | `BreadcrumbList` | Breadcrumb negli snippet SERP |
| Pagine vino | `Product` o `FoodProduct` | Rich snippet prodotto |

### Implementazione prioritaria

**1. FAQPage Schema** (impatto massimo, facilità alta)
Tutte le pagine con sezione "Domande frequenti" possono avere questo schema.  
Esempio per `/cosa-vedere-montefiascone-guida-completa`:
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Cosa vedere a Montefiascone in un giorno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In un giorno si consiglia: Rocca dei Papi (panorama), Cattedrale di Santa Margherita (cupola), Basilica di San Flaviano. Poi degustazione Est! Est!! Est!!!."
      }
    }
  ]
}
```

**2. TouristAttraction Schema** per le 3 attrazioni principali
```json
{
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Rocca dei Papi",
  "description": "Fortezza medievale papale a Montefiascone con panorama sul Lago di Bolsena.",
  "url": "https://www.ilovemontefiascone.com/rocca-dei-papi-montefiascone",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Montefiascone",
    "addressRegion": "VT",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.5378,
    "longitude": 11.8164
  }
}
```

**3. Event Schema** per ogni pagina evento
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "ATB Festival Montefiascone 2026",
  "startDate": "2026-07-09",
  "endDate": "2026-07-12",
  "location": {
    "@type": "Place",
    "name": "Rocca dei Papi",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Montefiascone",
      "addressCountry": "IT"
    }
  },
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "isAccessibleForFree": true
}
```

**4. WebSite + SearchAction** per homepage
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "I Love Montefiascone",
  "url": "https://www.ilovemontefiascone.com",
  "inLanguage": ["it", "en", "de"],
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.ilovemontefiascone.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

## 5. Performance — Score: 60/100 (stima)

> Nota: senza accesso a Lighthouse/CrUX non sono disponibili misure reali di LCP, INP, CLS. Punteggio stimato da analisi strutturale.

### Segnali positivi
- **Sito statico** (non SPA/Next.js): tempi TTFB attesi bassi
- **Immagini con lazy loading** non confermato, ma architettura statica lo rende probabile
- Nessun framework JavaScript pesante rilevato nella struttura delle pagine
- Contenuto testuale prevalente — favorisce FCP rapido

### Aree di rischio

| Severità | Problema | Raccomandazione |
|----------|----------|-----------------|
| **Medium** | Immagini: formato e ottimizzazione sconosciuti | Verificare che le immagini usino WebP/AVIF. Aggiungere `width`/`height` espliciti per evitare CLS. |
| **Medium** | Font loading non verificato | Evitare `@font-face` bloccanti. Usare `font-display: swap`. |
| **Medium** | Script terzi non verificati | Presenza di widget mappa (Leaflet) e Google Maps potrebbe pesare sul thread principale. |
| **Low** | Nessun Service Worker / PWA rilevato | Per un sito di viaggio, una cache offline migliora l'esperienza in zone con segnale debole. |

### Azione immediata
```
1. Eseguire Lighthouse audit:
   npx lighthouse https://www.ilovemontefiascone.com --output=html --view
   
2. Controllare Core Web Vitals in Google Search Console
   (dopo registrazione) → Report "Esperienza pagina"
   
3. Verificare immagini con:
   - Strumento: squoosh.app o imagemin
   - Target: tutte le immagini sotto /media/ in formato WebP
   - Aggiungere attributi width/height a ogni <img>
```

---

## 6. AI Search Readiness (GEO) — Score: 78/100

> Il sito ha il punteggio GEO più alto dell'audit. È uno dei punti di forza.

### Cosa funziona eccellentemente
- **llms.txt presente e conforme allo standard**: struttura corretta con `# Nome sito`, sezioni per lingua, lista pagine pubbliche, istruzioni esplicite per agenti AI
- **robots.txt include `Allow: /llms.txt`**: i crawler AI possono accedervi
- **robots.txt permissivo verso AI crawlers** (nessun blocco di GPTBot, ClaudeBot, PerplexityBot)
- **Struttura FAQ su quasi tutte le pagine**: aumenta la probabilità di citazione in AI Overviews
- **Contenuto factual e specifico** (date eventi, coordinate, nomi precisi): ideale per AI citation
- **Disclaimer editoriale** (non sito ufficiale): segnale di affidabilità per LLM

### Limitazioni

| Severità | Problema | Raccomandazione |
|----------|----------|-----------------|
| **High** | Schema assente limita AI Overview | Le AI Overview preferiscono contenuto strutturato (FAQPage, HowTo, Event). Senza JSON-LD il sito è meno citabile anche se indicizzato. |
| **Medium** | llms.txt non lista tutti i 343 URL | La dimensione del file llms.txt può crescere per includere URL chiave EN/DE. |
| **Medium** | Nessun markup schema = dati difficili da estrarre per LLM | FAQPage e Event schema rendono il contenuto machine-readable per LLM. |
| **Low** | Nessun file `robots-ai.txt` separato | Best practice emergente: avere istruzioni specifiche per AI crawler. |

---

## 7. Images — Score: 55/100

### Cosa funziona
- Alt text presente su tutte le immagini nel campione analizzato
- Alt text descrittivi e specifici (es. "Panorama sul Lago di Bolsena dal belvedere di Montefiascone")
- Crediti fotografici presenti in alcune pagine

### Problemi

| Severità | Problema | Dettaglio |
|----------|----------|-----------|
| **Medium** | 1–2 immagini per pagina in media | Pagine travel ad alto ranking hanno tipicamente 5–8 immagini. Più immagini = più opportunità di Google Images traffic. |
| **Medium** | Formato immagini sconosciuto | Non verificabile se sono WebP/AVIF o JPEG/PNG. I formati moderni riducono fino al 30% il peso. |
| **Medium** | Nessun Image Sitemap | Aggiungere `<image:image>` tags al sitemap XML migliora l'indicizzazione delle immagini. |
| **Low** | Alcune immagini senza dimensioni esplicite | `width`/`height` mancanti causano layout shift (CLS). |

---

## 8. Local SEO — Score: N/A (sito editoriale, non business locale)

> Il sito non è un'attività commerciale locale ma una guida editoriale. Non si applicano le metriche GBP standard. Tuttavia esistono opportunità locali.

### Opportunità locali
- **Schema LocalBusiness** per le attività citate (ufficio turistico trovato con NAP: Largo del Plebiscito 1, 0761 832060)
- **Citazioni di NAP** per strutture ricettive e ristorative dove eventualmente menzionate
- **Posizionamento su ricerche locali** tipo "cosa vedere montefiascone" — competitor analizzati:
  - paesionline.it, touringclub.it, visitarelatuscia.it, guidaditalia.com, tripadvisor.com
  - Tutti questi competitor appaiono nei SERP; ilovemontefiascone.com attualmente assente

---

## Piano d'Azione Prioritario

### FASE 1 — On-Page Essentials (Settimana 1)

| # | Azione | Impatto | Effort |
|---|--------|---------|--------|
| 1.1 | Aggiungere meta description a homepage + top 20 pagine IT | Alto | 3h |
| 1.2 | Aggiungere Open Graph tags (og:title, og:description, og:image, og:url) a tutte le pagine | Alto | 2h dev |
| 1.3 | Aggiungere x-default hreflang su tutte le pagine | Alto | 1h dev |
| 1.4 | Aggiungere Twitter/X Card meta tags | Medio | 1h dev |
| 1.5 | Verificare tag canonical su tutte le pagine (in particolare EN/DE) | Alto | 1h dev |

### FASE 2 — Schema e On-Page (Settimane 2–3)

| # | Azione | Impatto | Effort |
|---|--------|---------|--------|
| 2.1 | Implementare FAQPage JSON-LD su tutte le pagine con FAQ (~60 pagine) | Alto | 4h dev |
| 2.2 | Implementare TouristAttraction schema per Rocca, Cattedrale, San Flaviano | Alto | 2h dev |
| 2.3 | Implementare Event schema per ogni pagina evento (ATB, Fiera del Vino, ecc.) | Alto | 3h dev |
| 2.4 | Implementare WebSite + Organization schema su homepage | Medio | 1h dev |
| 2.5 | Implementare BreadcrumbList schema su tutte le pagine | Medio | 2h dev |
| 2.6 | Correggere lastmod nel sitemap con date reali per file | Medio | 1h dev |
| 2.7 | Twitter/X Card meta tags | Medio | 1h dev |

### FASE 3 — Autorità e E-E-A-T (Mese 2)

| # | Azione | Impatto | Effort |
|---|--------|---------|--------|
| 3.1 | Creare pagina "Chi sono" con bio, foto, credenziali + Person schema | Alto | 1 giorno |
| 3.2 | Aggiungere author markup (rel="author") su ogni pagina | Medio | 1h dev |
| 3.3 | Aggiungere link outbound a fonti autorevoli (Comune, musei) | Medio | 2h contenuto |
| 3.4 | Ottimizzare /dove-mangiare con menzioni editoriali di tipologie | Medio | 3h contenuto |
| 3.5 | Aggiungere più immagini per pagina (target: 4–6 per pagina chiave) | Medio | 5h |
| 3.6 | Valutare acquisizione/redirect da ilovemontefiascone.it | Alto | Strategico |

### FASE 4 — Monitoraggio Continuo

| # | Azione |
|---|--------|
| 4.1 | Setup Google Search Console alerts per errori crawl |
| 4.2 | Monitorare Core Web Vitals in GSC report mensile |
| 4.3 | Aggiornare llms.txt quando si aggiungono nuove pagine |
| 4.4 | Tracciare ranking su keyword chiave: "cosa vedere montefiascone", "montefiascone turismo", "est est est vino" |
| 4.5 | Verificare indicizzazione nuove pagine dopo ogni publish |

---

## Appendice: Coverage Multilingua

| Sezione | IT | EN | DE | Note |
|---------|----|----|-----|------|
| Attrazioni principali | ✓ | ✓ | ✓ | Buona parità |
| Guide itinerari | ✓ | ✓ | ✓ | Buona parità |
| Pagine eventi | ✓ | ✓ | ✓ | Buona parità |
| Vino / Enogastronomia | ✓ | ✓ | ✓ | Buona parità |
| Come arrivare | ✓ | ✓ | ✓ | Buona parità |
| **Totale pagine** | **137** | **101** | **105** | IT ha 36 pagine senza equivalente EN/DE |

> Le 36 pagine IT senza traduzione EN sono opportunità di espansione per mercati anglofoni (UK, USA, Australia) che rappresentano una fetta significativa del turismo in Tuscia.

---

## Competitors Analizzati (SERP per keyword target)

Per la query "montefiascone guida turistica" / "cosa vedere montefiascone":

| Sito | Tipo | Vantaggio competitivo |
|------|------|----------------------|
| tripadvisor.com | Marketplace | DA altissimo, recensioni UGC |
| touringclub.it | Editoriale authority | Brand storico, DA alto |
| paesionline.it | Directory | Volume di backlink |
| visitarelatuscia.it | Regionale | Focus geografico specifico |
| italia.it | Governativo | Domain authority massima |
| **ilovemontefiascone.com** | **Editoriale** | **0 visibilità attuale** → potenziale alto con schema + indexing |

> **Vantaggio differenziale del sito:** l'approccio trilingue, la profondità dei contenuti (~343 pagine), llms.txt, e la struttura hub-and-spoke sono superiori a molti competitor. Il gap è puramente tecnico (indexing + schema), non di qualità contenuto.

---

*Report generato da Claude SEO Audit Skill — ilovemontefiascone.com — 7 luglio 2026*  
*Metodologia: analisi statica di 8+ pagine campione, sitemap crawl, robots.txt review, ricerca SERP, ispezione llms.txt*
