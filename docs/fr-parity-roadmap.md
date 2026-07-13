# FR Parity Roadmap — portare /fr/ al pari di IT

Updated: 2026-07-12
Stato di partenza: perimetro pubblico FR = 26 pagine (vedi `scripts/fr-public-perimeter.mjs`),
72 pagine source-only. IT/EN/DE pubblicano 98 pagine ciascuna.
Questo documento aggiorna `docs/fr-publication-gate-roadmap.md` (il gate è stato parzialmente
aperto il 2026-07-07 con il rilancio a cluster) e usa `reports/fr-content-inventory.json`
come base dati (ratio parole FR/IT, flag author/faq per tutte le 98 pagine).

## P0 — Pagine pubbliche sotto parità (live oggi, impatto immediato)

- [ ] **fr/vin.html**: 586 vs 1.050 parole IT (ratio 0.56). Hub del cluster vino, già nel
      perimetro pubblico. Arricchire a ratio ≥ 0.9 usando vino.html come fonte.
- [ ] **fr/est-est-est-montefiascone-vino-doc.html**: 486 vs 613 (0.79) → ≥ 0.9.
- [ ] **Author schema su 21 pagine pubbliche**: 22/26 ne sono prive (inclusa index, che come
      homepage non ha Article e può restare senza). Aggiungere `author: Person → /fr/projet-editorial`
      allo schema Article delle altre 21, come già fatto su IT (54/107 pagine IT hanno author).
- [ ] **NAV_CONFIG `fr` in js/main.js**: it/en/de hanno la config della nav dinamica, fr no.
      Aggiungere il blocco fr con SOLO le voci del perimetro pubblico (niente link a pagine source-only).
- [x] **FAQ visibili — audit eseguito il 2026-07-12**: 13 pagine pubbliche hanno domande
      FAQPage nello schema senza testo visibile corrispondente (34 domande totali; casi peggiori:
      festival-decologie 6, festival-atb 5, foire-aux-vins 3, experiences-gastronomiques 3,
      via-francigena 2, montefiascone-en-2-jours 2, calendrier 2, est-film 2, anno-domini 2,
      fete-santa-margherita 2, guide 1, est-est-est-doc 1). Da sanare cluster per cluster
      portando le Q&A nel corpo pagina (non rimuovere lo schema: vale per le citazioni AI).

## P1 — Espansione del perimetro (72 pagine source-only → pubbliche)

Gate per ogni pagina (da `docs/fr-full-editorial-inventory.md`): QA linguistico francese
(artefatti noti: frammenti IT nel body, mojibake, token malformati tipo "voituremne") →
parità contenuti vs IT (ratio ≥ 0.9) → author + FAQ → aggiunta a `FR_PUBLIC_FILES` →
rigenerare sitemap-fr.xml + llms.txt → verificare hreflang reciproci.

Ordine cluster suggerito per valore di ricerca francofona:

- [ ] **5a. Lago di Bolsena** (~20 pagine: villages, plages, que-voir per paese, velo, randonnée…).
      È il tema che il pubblico FR cerca davvero ("lac de Bolsena" ≫ "Montefiascone").
- [ ] **5b. Logistica** (comment-se-rendre ×4, parking, ou-dormir, ou-manger,
      montefiascone-sans-voitures, informations-touristiques): pagine transazionali.
- [ ] **5c. Via Francigena** (3 pagine): segmento forte per il pubblico francese.
- [ ] **5d. Eventi minori e stagionali**: `panoramas-du-festival` e `orchestre-dharmonie-rb-revue`
      sono GIÀ state riportate in francese autentico e a parità il 2026-07-12 — pronte per il QA
      finale e l'ingresso nel perimetro al prossimo giro.
- [ ] **5e. Dintorni e gite** (civita-di-bagnoregio, bomarzo, viterbe, caprarola, villa-lante,
      tuscania, toscane, thermes…).
- [ ] A ogni espansione: aggiornare `FR_PUBLIC_FILES`, sitemap-fr.xml, llms.txt (oggi 26 voci /fr/),
      e la matrice `docs/fr-content-expansion-matrix.md`.

## P2 — Pagine IT senza controparte FR

- [ ] **privacy + cookie in francese**: obbligo di trasparenza verso utenti FR; oggi i footer FR
      non le linkano affatto (quello IT sì, con rel=nofollow).
- [ ] **about-matteo-angeloni in FR**: bio autore per E-E-A-T (projet-editorial esiste già,
      la pagina autore no).
- [ ] Decidere: widget (cruscotto viaggiatore, quiz Tuscia) e mappa Leaflet — dentro o fuori
      dal perimetro FR (opzionali, non bloccanti per la parità).

## P3 — Tecnico e follow-up

- [ ] Homepage FR: widget meteo dinamico come su IT (richiede supporto fr in main.js) — opzionale.
- [ ] GSC: submit di sitemap-fr.xml aggiornata + request indexing di /fr/ e delle pagine arricchite.
- [ ] Monitoraggio 6-8 settimane su query "visiter montefiascone", "lac de bolsena que voir" (geo FR);
      se /fr/ non entra in top 10 → lavorare sui backlink francofoni (candidato: viefrancigene.org).
- [ ] Fuori scope FR ma pendente nel working tree: commit del batch EN/DE parity + decidere il
      destino di css/de-premium.css (orfano, non referenziato da nessuna pagina).

## Definizione di "pari alla versione IT"

1. 98 pagine pubbliche in sitemap-fr.xml (oggi 26).
2. Ratio parole FR/IT ≥ 0.9 su ogni coppia (oggi: tutte le pubbliche tranne vin ed est-est-est).
3. Author schema ovunque l'IT ce l'abbia; FAQ visibili dove esiste FAQPage.
4. Nav dinamica, footer, privacy/cookie e pagina autore equivalenti.
5. hreflang e llms.txt coerenti con il perimetro.
