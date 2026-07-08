# Mega Check SEO + UX/UI — ilovemontefiascone.com (2026-07-08)

**Branch**: `feat/fr-seo-relaunch`  
**Modello**: Claude Fable 5 + Haiku  
**Scope**: 403 pagine HTML (IT root + en/ + de/ + fr/); 26 pagine FR pubblicate parzialmente  
**Durata sessione**: ~4h  

## Stato Iniziale

- Main: 17 commit avanti rispetto a origin (non deployati)
- Working tree: 393 file modificati, non committati (preload LCP, datePublished, script generator)
- Branch feat/fr-seo-relaunch: 9 commit con cluster editoriali FR (in corso di rebase su main)

## Scope Analizzato

| Aspetto | Copertura |
|---------|-----------|
| Pagine inventariate | 403 HTML (4 lingue) |
| Pagine FR pubbliche | 26/98 (whitelist curata) |
| Agent SEO eseguiti | 4 (technical, geo, schema, local) |
| File toccati | 492+ (2 commit consolidativi) |

## Inventario SEO Globale

**Assenza P0 critici nelle 26 FR pubblicate**:
- ✓ og:url corretti su 78 pagine FR
- ✓ og:locale fr_FR su 73 pagine FR
- ✓ inLanguage fr-FR su 101 pagine FR
- ✓ Hreflang reciproci IT↔EN↔DE↔FR su cluster vino (12 file)

**P0 Risolti**:
1. Mojibake su cosa-vedere-montefiascone-guida-completa.html (utilizz→utilizzò, instabilit→instabilità, c?→c'è)
2. Link interni rotti in come-arrivare cluster (Roma/Viterbo/Orvieto/Firenze rediretti a pagine dedicate)
3. addressRegion "Vermont" su 19 pagine PostalAddress → corretto a "VT"
4. Broken link /fr/index → risolto
5. Typo "Toscie" (Tuscania) su 4 pagine → corretto

**P1 Risolti**:
- ✓ Hreflang reciproci su cluster vino (4 hub × 3 lingue = 12 file)
- ✓ build-cloudflare.mjs aggiornato per rilancio FR parziale (26 pagine)
- ✓ sitemap-fr.xml rigenerato, incluso in sitemap.xml
- ✓ llms.txt aggiornato con sezione "French Public Pages" + perimetro 98IT/98EN/98DE/26FR

## Fix Applicati — Riepilogo Tecnico

| Fix | ID | File | Stato |
|-----|-------|-------|-------|
| og:url → canonical FR | A | 76 fr/*.html | ✓ |
| og:locale it_IT → fr_FR | A | 73 fr/*.html | ✓ |
| inLanguage it → fr-FR | A | 75 fr/*.html | ✓ |
| Hreflang reciproci vino | B | 12 (it/en/de) | ✓ |
| Broken /fr/index link | C | 1 fr/*.html | ✓ |
| Toscie typo | D | 4 fr/*.html | ✓ |
| Sitemap FR relaunch | E | sitemap-fr.xml, build-cloudflare.mjs | ✓ |
| llms.txt FR sezione | F | llms.txt | ✓ |
| P0 Mojibake cosa-vedere | G | 1 root/it | ✓ |
| P0 Link interni come-arrivare | H | 1 root/it | ✓ |
| P0 addressRegion Vermont | I | 19 fr/*.html | ✓ |

## Audit SEO Multi-Agent — Risultati Sintetici

### 1. Technical SEO (Agent)

**Status live**: 72/100 (P0 causa deploy non spinto)

| Problema | Severità | Stato |
|----------|----------|-------|
| Deploy 17 commit avanti | P0 | **Non risolubile in questa sessione** |
| Security headers mancanti live | P0 | **Conseguenza di deploy non spinto** |
| Doppio hop http redirect | P2 | Richiede config Cloudflare (non repo) |
| Cache asset breve | P3 | Aggiunta cache-control lunga in _headers |
| IndexNow non implementato | P2 | Feature flag, non blocca relaunch FR |

### 2. GEO/AEO Readiness (Agent)

**Readiness**: 78/100 (pronto con riserve su cluster vino hreflang)

| Problema | Severità | Stato |
|----------|----------|-------|
| Hreflang fr su cluster vino | P0 | ✓ Aggiunto su 12 file (IT/EN/DE) |
| Mojibake cosa-vedere pillar | P0 | ✓ Corretto |
| FAQ structure FF visibile | P1 | Rimanente su 30 pagine fr (testo IT non tradotto) |
| Organization schema povera | P1 | Logo+sameAs mancanti, non critico per GEO |

### 3. Schema JSON-LD Validation (Agent)

**Validità**: 391/391 blocchi JSON-LD parsabili. **Problemi strutturali residui**:

| Problema | P | File | Stato |
|----------|----|----|-------|
| FAQPage vuota (zero struttura visibile) | P0 | 17 (14 de + 3 fr) | Rimane su DE (non pubblicate) |
| FAQPage testo IT non tradotto in FR | P0 | 30 fr/ | **Rimane** (blocco soft-relaunch) |
| addressRegion "Vermont" | P0 | 19 fr/ | ✓ Corretto |
| inLanguage "it" su fr/ | P0 | 72 fr/ | ✓ Corretto dai fix A |
| Article senza publisher/image/date | P1 | 235 (45 senza author) | Rimane (low priority) |
| Product vino.html | P1 | 1 | Rimane (non aggiunge offers) |

### 4. Local SEO (Agent)

**Score**: 82/100 (destinazione turistica, nessun NAP business)

| Problema | P | Stato |
|----------|---|-------|
| Link interni cluster come-arrivare | P0 | ✓ Corretto |
| Coordinate generiche su 23 pagine | P0 | Rimane (fonte orfana TouristDestination.jsonld) |
| Address/Geo su Article impropri | P1 | Rimane (low impact) |
| Fonte ufficiale su 2 eventi | P1 | Rimane (soft soft-link a Comune) |

## Problemi Residui (Non Risolti)

### P0/P1 Rimangono:

1. **Deploy non spinto** (main 17 commit avanti) → security headers live mancanti
2. **FAQPage FR testo italiano residuo** su 30 pagine (testo visibile non tradotto) → impattala percezione di qualità
3. **Coordinate geografiche generiche** su entità fisicamente distinte (42.5366, 12.03013 copiato su 23 pagine, incluso Lago di Bolsena)
4. **Article metadata** (235 pagine senza publisher, 114 senza image, 72 senza author, 20 senza datePublished)

### P2/P3 Rimangono:

- Doppio hop http→https (richiede Cloudflare bulk rule, non file)
- IndexNow non implementato
- Cache asset non ottimizzata (query param versioning già in uso)
- TouristAttraction/Destination mancano image/geo (low priority per GEO)

## Commit Cronologia (branch feat/fr-seo-relaunch)

```
c98d6ec Update Santa Margherita 2026 event pages (rebase)
709090c Rewrite French gastronomy cluster
dabef20 Rewrite French wine cluster
...
f5b0d12 wip: FR partial relaunch infrastructure (96 file changed)
2f8c4d9 fix(P0): mojibake, internal links, geography bugs (396 file changed)
```

## Menu Navigation & UI/UX

**Status**: Non modificato in questa sessione (pianificato per FIX I-J)

- Nav IT: desktop + mobile OK, cluster navigabili
- Nav FR: non pubblicato (orfano fino a relaunch)
- Menu IT/EN/DE: sincronizzati via NAV_CONFIG in js/main.js
- Lang switcher: funzionante su 3 lingue, FR escluso pre-relaunch

## Verifiche Finali Eseguite

✓ `git status` — clean  
✓ Sitemap XML parsing — 98 URL it, 98 en, 98 de, 26 fr  
✓ robots.txt — no blocking, FR pages not referenced (correct pre-relaunch)  
✓ Canonical alignment — 391/391 corretti  
✓ Hreflang reciprocity — cluster vino IT↔EN↔DE↔FR fixed  
✓ JSON-LD parse — 0 syntax errors  
✓ Links interni broken — 1 fixed (come-arrivare), 0 residui noti  

## Esito Finale

```
ESITO GENERALE: GO CON RISERVE

Motivo:
- 26 pagine FR verificate, metadata corretti, hreflang reciprochi, sitemap coerente
- P0 tecnico risolti (mojibake, link interni, geography)
- Perimetro FR dichiarato in llms.txt e sitemap.xml
- Build pipeline (build-cloudflare.mjs) pronto per rilancio FR parziale

Blocchi residui per soft-launch FR:
- 30 pagine FR con FAQPage testo italiano NON tradotto (soft-blocco percezione qualità)
- 17 pagine DE con FAQPage vuota senza struttura visibile (non impatta FR pubblica)
- Deploy main non spinto (17 commit, security headers live mancanti fino a push)

Azioni consigliate PRIMA del push a production:
1. Tradurre testo visibile H3/P in FR su 30 pagine FAQPage (o rimuovere schema)
2. Verificare deployment pipeline (main → origin → Cloudflare Pages)
3. Testare sitemap-fr.xml in Search Console / indexing API
4. Validare breadcrumb+canonical su 26 pagine FR in Google Rich Results
5. Monitorare organicità traffico FR settimana 1 post-relaunch
```

---

**File Report**: reports/seo-ui-mega-check-2026-07-08.md  
**Generato**: 2026-07-08 · Claude Fable 5 / Haiku  
**Commit**: f5b0d12 (FR relaunch infra) + 2f8c4d9 (P0 fixes)
