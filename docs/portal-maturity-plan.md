# Portal Maturity Plan — ilovemontefiascone.com

Da "pubblicabile" a "portale maturo". Monetizzazione **fuori perimetro** (vedi §15). Documento operativo, non eseguito automaticamente: gli sprint D–G richiedono conferma.

> **Aggiornamento — Sprint C + D eseguiti.**
> - **Sprint C** (commit `02e3edd`): 10 pagine ad alto impatto — 3 arrivi (Viterbo/Orvieto/Firenze), 2 Via Francigena (tappa Bolsena→Montefiascone + cosa portare), 2 borghi (San Lorenzo Nuovo, Valentano), 3 Tuscia (Tuscania, Caprarola/Palazzo Farnese, Villa Lante).
> - **Sprint D**: 10 pagine stagionali/esperienziali — 4 stagionali (primavera, autunno/vendemmia, inverno, lago in autunno), 6 esperienziali (weekend romantico, quando piove, tramonto sul lago, esperienze enogastronomiche, la sera, viaggio lento).
> - **Sprint E**: espanse 9 pagine concise esistenti (+19 sezioni, da ~261–286 a ~371–478 parole), senza nuove pagine, senza filler, senza dati inventati — `bomarzo`, `viterbo`, `tuscia-in-3-giorni`, `estate-sul-lago`, `montefiascone-con-bambini`, `lago-di-bolsena-con-bambini`, `lago-di-bolsena-in-bici`, `gradoli`, `grotte-di-castro`.
> - Cluster **Via Francigena** 3 spoke; **arrivi** completati; **Tuscia** rafforzata; **stagionali** da "solo estate" a 5 pagine; **esperienziali** nuovo blocco; **pagine concie** rinforzate. Totali aggiornati sotto. Prossimo sprint esecutivo proposto: **F** (UI/UX polish).

## 1. Stato attuale (snapshot verificato)
- Branch `claude/eager-albattani-shs17k`.
- **88 pagine IT indicizzabili** (era 68; +10 Sprint C +10 Sprint D); 92 HTML in `dist-it` (88 + privacy/cookie/404/offline noindex).
- `sitemap.xml` = indice → `sitemap-it.xml` (**88 URL**, hreflang `it`+`x-default` self), **0 disallineamenti**.
- **JSON-LD: 67/67 blocchi validi**; **0 flag** metadata (title<60, meta 120–155, H1 unico, canonical, OG/Twitter su tutte); **0 immagini senza alt**.
- SW `mf-pwa-v10`; robots blocca en/de/widget/leaflet/offline/base/data/server.py/.md; noindex su privacy/cookie/404/offline.
- EN (20 pagine) e DE (legacy) **preparate ma escluse** da deploy/sitemap/robots; **0 link IT→EN/DE**.
- 0 residui accenti, 0 mojibake nelle pagine IT.

### Tabella problemi
| Area | Stato attuale | Problema | Priorità | Azione consigliata |
|---|---|---|---|---|
| SEO tecnica | Pulita (0 flag) | nessuno | — | mantenere |
| JSON-LD | 67/67 validi | nessuno | — | re-test Rich Results post-deploy |
| Sitemap/robots/build | Coerenti | nessuno | — | — |
| Internal linking | Buono | hub con **3–4 sezioni "correlate" impilate** (index/guide=4) | P2 | consolidare in un solo blocco (Sprint F) |
| Internal linking | Buono | pagine a basso inbound: `monumenti-minori` (in=1), `cronoscalata` (in=2) | P2 | +link contestuali da hub pertinenti |
| Profondità | Solida | ~9 pagine concise (~460–476 parole incl. chrome) | P2 | espandere con dati verificati (Sprint E) |
| Cluster | Coperti | ~~Via Francigena (1 spoke)~~ → **3 spoke (Sprint C)**; **Outdoor** (2 pagine) ancora debole | P2 | Outdoor: nuove spoke (Sprint D) |
| Info pratiche | Forte | ~~mancano arrivi da Viterbo/Orvieto~~ → **completati in Sprint C** (Roma/Viterbo/Orvieto/Firenze) | — | — |
| Stagionali | ~~Debole~~ → **coperto (Sprint D)** | 5 pagine (estate + primavera/autunno/inverno + lago autunno) | — | — |
| Esperienziali | **Nuovo blocco (Sprint D)** | weekend romantico, sera, tramonto, quando piove, enogastronomia, viaggio lento | — | mantenere |
| E-E-A-T | Medio | responsabile editoriale = TODO | P1 (editoriale) | nominare soggetto reale |
| Eventi | Medio | date affidate a verifica esterna | P1 (editoriale) | confermare/aggiornare; no `Event` non confermato |
| Config deploy | Da confermare | Pages source = "GitHub Actions" non verificabile da repo | P1 (ops) | confermare in Settings prima del go-live |
| Performance img | Buona | gallery JPG 250–450 KB | P2/P3 | ricompressione + estendere `<picture>` |
| UX hub | Buona | sezioni correlate ridondanti (vedi sopra) | P2 | Sprint F |
| Schema GEO | 67/67 validi | `galleria.html` (indicizzabile, hub forte) priva di JSON-LD | P3 | aggiungere `ImageGallery`/`CollectionPage` (Sprint F) — opzionale, non difetto |

**Nessun P0 aperto.** P1 sono editoriali/ops (responsabile, date, config Pages), non difetti tecnici di codice.

## 2. Definizione di "portale maturo"
Il portale è maturo quando soddisfa **tutti** i criteri SEO + GEO + UX qui sotto e i cluster territoriali principali hanno hub forte + ≥3 spoke ben collegate, senza pagine thin né dati inventati.

## 3. Criteri SEO (stato)
title<60 ✅ · meta 120–155 ✅ · H1 unico ✅ · canonical self ✅ · OG/Twitter ✅ · sitemap coerente ✅ · robots coerente ✅ · noindex solo dove serve ✅ · 0 link rotti ✅ · 0 file sporchi nel deploy ✅ · JSON-LD valido ✅ · schema coerente ✅ · alt immagini ✅ · layout mobile stabile ✅ · console: **non verificabile in questo ambiente** (test post-deploy).

## 4. Criteri GEO / AI readiness (stato)
Intro AI-ready ✅ · box "In breve"/"Dati essenziali" ✅ · sezioni chiare ✅ · FAQ reali coerenti con `FAQPage` ✅ · entità territoriali esplicite (Montefiascone, Lago di Bolsena, Tuscia, Viterbo, Via Francigena, Est! Est!! Est!!!) ✅ · dati prudenti / no falsa precisione ✅ · info pratiche estraibili ✅ · heading descrittivi ✅ · internal linking contestuale ✅ · **E-E-A-T parziale** (manca autore nominato) ⚠️.

## 5. Criteri UX/UI (stato)
Homepage chiara ✅ · hub navigabili ✅ · card coerenti ✅ · menu leggibile ✅ · mobile responsive (9 media query, 9 `clamp`, viewport ovunque) ✅ · footer utile ✅ · CTA non invasive ✅ · gerarchia visiva ✅ · **sezioni correlate ridondanti su alcuni hub** ⚠️ (P2).

## 6. Cluster attuali e punteggi (SEO / GEO / Depth / Linking / UX)
| Cluster | SEO | GEO | Depth | Link | UX | Note |
|---|---|---|---|---|---|---|
| Montefiascone | 93 | 90 | 88 | 90 | 86 | forte |
| Lago di Bolsena | 92 | 90 | 86 | 92 | 85 | forte |
| Borghi del lago | 90 | 86 | 80 | 88 | 85 | borghi minori concisi |
| Tuscia/dintorni | 91 | 87 | 82 | 86 | 85 | day trip ok |
| Itinerari | 92 | 88 | 84 | 90 | 86 | forte |
| Via Francigena | 88 | 82 | 78 | 80 | 84 | **debole (1 spoke)** |
| Vino | 92 | 90 | 86 | 90 | 86 | forte |
| Enogastronomia | 90 | 86 | 82 | 88 | 85 | ok |
| Outdoor | 88 | 82 | 78 | 84 | 84 | **debole (2 pagine, prudenti)** |
| Famiglie | 89 | 84 | 80 | 84 | 85 | ok |
| Fotografia | 90 | 84 | 82 | 86 | 85 | ok |
| Eventi | 90 | 86 | 84 | 84 | 85 | rischio date |
| Info pratiche | 92 | 88 | 84 | 88 | 86 | forte |
| Dormire | 89 | 84 | 82 | 86 | 85 | editoriale |
| Mangiare | 89 | 84 | 82 | 86 | 85 | editoriale |
**Media portale ≈ SEO 90 / GEO 86 / Depth 83 / Linking 87 / UX 85.**

## 7. Content gap
| Cluster | Stato | Gap | Pagina consigliata | Priorità | Rischio dati | Note |
|---|---|---|---|---|---|---|
| Via Francigena | debole | 1 spoke | `via-francigena-bolsena-montefiascone`, `via-francigena-cosa-portare` | P1 | medio | km da fonti ufficiali |
| Info pratiche | forte | manca da Viterbo/Orvieto | `come-arrivare-a-montefiascone-da-viterbo/-orvieto` | P1 | alto | programmatic, tempi "verifica" |
| Borghi del lago | medio | mancano | `san-lorenzo-nuovo-...`, `valentano-...` | P2 | medio | prudenza monumenti |
| Stagionali | ✅ coperto (Sprint D) | — | (primavera/autunno/inverno/lago-autunno create) | — | basso | Outdoor/famiglie specifici restano P2/P3 |
| Outdoor | debole | solo trekking/bici | `birdwatching-lago`, `kayak-sup-lago` | P3 | alto | operatori da verificare |
| Famiglie | medio | | `spiagge-famiglie-lago`, `bambini-montefiascone-pioggia` | P2 | medio | |
| Fotografia | medio | | `dove-vedere-tramonto-lago`, `riprese-drone-regole` | P3 | medio | normativa droni |
| Tuscia | medio | | `tuscania-da-montefiascone`, `caprarola-palazzo-farnese` | P2 | alto | biglietti/orari da verificare |

## 8. Pagine forti
Hub con inbound massimo: `cosa-vedere`, `vino`, `mappa`, `galleria`, `eventi`, `guide`, `lago-di-bolsena` (in≈69–70). Long-form solide: `cosa-vedere-montefiascone-guida-completa` (949), `index` (1089), `cronoscalata` (1094), `mappa`/`vino` (~950).

## 9. Pagine deboli (per profondità) — molte rinforzate in Sprint E ✅
> Le 9 pagine sotto elencate come concise sono state **espanse in Sprint E** (ora ~371–478 parole di contenuto). L'elenco resta come riferimento storico dell'audit.
`progetto-editoriale` 369 (about, ok) · `montefiascone-con-bambini-famiglie` 461 · `estate-sul-lago-di-bolsena` 467 · `lago-di-bolsena-con-bambini` 468 · `tuscia-in-3-giorni` 471 · `lago-di-bolsena-in-bici` 475 · `bomarzo` 475 · `viterbo` 476 · borghi minori (`gradoli`, `grotte-di-castro`).

## 10. Pagine da espandere (Sprint E)
Tutte le "deboli" sopra + `marta`, `capodimonte`, `prodotti-tipici`, `cucina-tipica` — **solo con fatti verificati**, evitando riempimento.

## 11. Prossimi sprint C / D / E / F / G
### Sprint C — 10 pagine IT ad alto impatto (cluster deboli) — ✅ ESEGUITO
- Obiettivo: rafforzare Via Francigena, Info pratiche (arrivi), Borghi, Tuscia.
- Pagine create: `come-arrivare-a-montefiascone-da-viterbo`, `-da-orvieto`, `-da-firenze`, `via-francigena-bolsena-montefiascone`, `via-francigena-cosa-portare`, `san-lorenzo-nuovo-cosa-vedere-lago-di-bolsena`, `valentano-cosa-vedere-lago-di-bolsena`, `tuscania-da-montefiascone`, `caprarola-palazzo-farnese-da-montefiascone`, `villa-lante-bagnaia-da-montefiascone`.
- Inbound aggiunti (senza nuove sezioni "correlate"): hub arrivi, Via Francigena, borghi-in-auto, dintorni, Tuscia-3-giorni.
- Impatto SEO/GEO alto. Dati prudenti: nessun km/orario/biglietto inventato; fatti enciclopedici verificabili (basiliche di Tuscania, Palazzo Farnese, Villa Lante, Tappa 39 AEVF, San Lorenzo Nuovo settecentesco, Valentano/Farnese).
- (`gradoli`-espansione e `quando-visitare`-cross spostati a Sprint E/linking.)

### Sprint D — 10 pagine IT stagionali/esperienziali — ✅ ESEGUITO
- Obiettivo: query stagionali e di esperienza.
- Pagine create: `montefiascone-in-primavera`, `montefiascone-in-autunno-vendemmia`, `montefiascone-in-inverno`, `lago-di-bolsena-in-autunno`, `weekend-romantico-lago-di-bolsena`, `cosa-fare-a-montefiascone-quando-piove`, `dove-vedere-il-tramonto-sul-lago-di-bolsena`, `esperienze-enogastronomiche-montefiascone`, `cosa-fare-la-sera-a-montefiascone`, `viaggio-lento-lago-di-bolsena`.
- Inbound da hub esistenti (senza nuove sezioni): `quando-visitare`, `estate-sul-lago`, `weekend`, `itinerario-fotografico`, `vino`, `lago-di-bolsena`.
- Dati prudenti: nessuna data evento, nessun operatore/prezzo; vendemmia indicata come "fine estate–autunno". (Famiglie/Outdoor specifici rinviati: rischio dati alto → fonti verificabili.)

### Sprint E — espansione pagine concise — ✅ ESEGUITO
- Obiettivo: portare le pagine concise a maggiore profondità con sezioni utili (no filler).
- Eseguito: 9 pagine, +19 sezioni (tipi: "cosa sapere prima", "come inserirla in un itinerario", "quando ha più senso", "errori da evitare"), inserite prima della FAQ con marker `data-depth` (idempotente). Title/meta/H1/canonical/FAQ/JSON-LD **non toccati** → validità e parità FAQ preservate.
- Fatti verificabili (Sacro Bosco di Bomarzo/Orsini, Viterbo città dei papi/San Pellegrino) e formule prudenti; nessun dato inventato. Migliorato anche l'internal linking verso le pagine Sprint C/D.
- Restano concise per natura (prudenza, no invenzione) alcune pagine borgo minori e gli hub a card (`index`/`cosa-vedere`/`eventi`/`mappa`: navigazione, non thin).

### Sprint F — UI/UX polish
- Obiettivo: **consolidare le 3–4 sezioni "correlate" impilate** in un unico blocco "Guide correlate" (es. card grid), migliorare spacing/leggibilità, rafforzare inbound delle pagine deboli (`monumenti-minori`), ricomprimere gallery JPG ed estendere `<picture>`, aggiungere schema `ImageGallery`/`CollectionPage` a `galleria.html`.
- File: componenti condivisi + hub principali + CSS. SEO/GEO basso, UX/performance alto. Rischio: basso. NON: redesign totale.

### Sprint G — final SEO/GEO audit + go-live
- Obiettivo: audit finale, Rich Results Test, PageSpeed/CWV, conferma Pages=Actions, merge→main.
- Usa `docs/post-deploy-seo-checklist.md`, `release-go-live.md`, `search-console-checklist.md`, `rich-results-checklist.md`. NON: monetizzazione, EN.

## 12. Rischi editoriali
Dati operativi (orari/prezzi/date/distanze/trasporti) non verificabili → sempre formule prudenti; date eventi → no `Event` non confermato; pagine attrazioni esterne (Bomarzo/Caprarola/Villa Lante) → biglietti/orari da fonti ufficiali; traduzioni non revisionate → non pubblicare.

## 13. Regole anti-dati inventati
Mai inventare: orari, prezzi, contatti, indirizzi, distanze precise, tempi certi, date eventi, nomi di parcheggi/attività/strutture/ristoranti, specie ittiche, percorsi/sentieri/piste ufficiali, fonti non presenti. Dove non verificabile: "verificare prima della partenza", "i tempi possono variare", "consultare i canali ufficiali", "la disponibilità può cambiare con la stagione".

## 14. Regole multilingua
IT primaria. EN prima lingua estera (pronta, **non pubblicata**), DE seconda, FR/ES successive. Nessuna lingua in sitemap/hreflang/deploy senza QA + sign-off madrelingua; canonical self; hreflang reciproco solo tra pagine validate; `sitemap-<lang>.xml` solo a pubblicazione. Vedi `docs/en-localization-status.md` e `content-translation-plan.md`.

## 15. Perché AdSense è rimandato
La monetizzazione si attiva solo su un portale **maturo**: contenuti ricchi e non thin, traffico e copertura SEO consolidati, CWV verificati, e una base legale pronta (CMP/Consent Mode v2 + privacy/cookie estese). Attivare ads prima abbasserebbe qualità/CWV e rischierebbe il rifiuto AdSense o policy violation. Priorità ora: maturità editoriale e tecnica. La monetizzazione sarà una fase dedicata e successiva.

## 16. Checklist finale prima del go-live IT
- [ ] GitHub Pages source = **GitHub Actions** (Settings → Pages).
- [ ] `dist-it` rigenerato e pulito (no en/de/docs/.md/.py).
- [ ] Sitemap = 68+ URL coerenti; robots ok; canonical self ovunque.
- [ ] JSON-LD valido; Rich Results Test sulle pagine chiave.
- [ ] Responsabile editoriale inserito; date eventi verificate.
- [ ] PageSpeed/CWV misurati su homepage, guida lunga, itinerario, mappa, evento, lago.
- [ ] merge → `main` + verifica workflow success + smoke test live (`docs/post-deploy-seo-checklist.md`).
- [ ] EN/DE confermati esclusi.

## Verdetto
Il portale IT è **pubblicabile e tecnicamente maturo**. Per la piena maturità editoriale consiglio gli sprint **C → D → E → F → G** (cluster deboli, stagionali, profondità, UI polish, audit finale) e la chiusura dei TODO P1 editoriali/ops (responsabile editoriale, date eventi, config Pages). AdSense resta rimandato a dopo la maturità.
