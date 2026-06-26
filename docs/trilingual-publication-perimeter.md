# Trilingual Publication Perimeter - IT / EN / DE

Updated: 2026-06-26
Branch: `feature/de-articles-expansion`

## Strategy

Chosen strategy: **A - strict symmetric trilingual sitemap perimeter**.

The first publication perimeter contains only pages with an existing IT, EN and DE version that pass basic publication checks. IT and EN still have additional source pages in the repository, but the crawl-facing trilingual perimeter is intentionally limited to the validated equivalent set. This avoids publishing incomplete German pages and avoids adding hreflang DE to pages without a real DE equivalent.

## Final Proposed Public Perimeter

| Language | URL count | Notes |
| --- | ---: | --- |
| IT | 32 | Included in `sitemap-it.xml` with reciprocal IT/EN/DE hreflang. |
| EN | 32 | Included in `sitemap-en.xml` with reciprocal IT/EN/DE hreflang. |
| DE | 32 | Included in `sitemap-de.xml` and copied by the Cloudflare build. |

Recommendation: **publish the minimum trilingual perimeter now**, then continue P0/P1 gap closure in separate sprints.

## Included Pages

| # | Priority | Type | IT URL | EN URL | DE URL |
| ---: | --- | --- | --- | --- | --- |
| 1 | P0 | guida | https://www.ilovemontefiascone.com/associazioni-volontariato-montefiascone | https://www.ilovemontefiascone.com/en/associations-volunteering-montefiascone | https://www.ilovemontefiascone.com/de/vereine-ehrenamt-montefiascone |
| 2 | P0 | guida | https://www.ilovemontefiascone.com/basilica-san-flaviano-montefiascone | https://www.ilovemontefiascone.com/en/basilica-san-flaviano-montefiascone | https://www.ilovemontefiascone.com/de/basilika-san-flaviano-montefiascone |
| 3 | P0 | guida | https://www.ilovemontefiascone.com/cantine-montefiascone-degustazione-est-est-est | https://www.ilovemontefiascone.com/en/wine-tasting-montefiascone-est-est-est | https://www.ilovemontefiascone.com/de/weingueter-montefiascone-verkostung |
| 4 | P0 | guida | https://www.ilovemontefiascone.com/cattedrale-santa-margherita-montefiascone | https://www.ilovemontefiascone.com/en/cathedral-santa-margherita-montefiascone | https://www.ilovemontefiascone.com/de/kathedrale-santa-margherita-montefiascone |
| 5 | P0 | guida | https://www.ilovemontefiascone.com/cosa-vedere-montefiascone-guida-completa | https://www.ilovemontefiascone.com/en/things-to-see-montefiascone | https://www.ilovemontefiascone.com/de/sehenswuerdigkeiten-montefiascone |
| 6 | P0 | guida | https://www.ilovemontefiascone.com/rocca-dei-papi-montefiascone | https://www.ilovemontefiascone.com/en/rocca-dei-papi-montefiascone | https://www.ilovemontefiascone.com/de/rocca-dei-papi-montefiascone |
| 7 | P0 | homepage | https://www.ilovemontefiascone.com/ | https://www.ilovemontefiascone.com/en/ | https://www.ilovemontefiascone.com/de/ |
| 8 | P0 | hub | https://www.ilovemontefiascone.com/guide | https://www.ilovemontefiascone.com/en/montefiascone-travel-guide | https://www.ilovemontefiascone.com/de/reisefuehrer-montefiascone |
| 9 | P0 | hub | https://www.ilovemontefiascone.com/lago-di-bolsena | https://www.ilovemontefiascone.com/en/lake-bolsena | https://www.ilovemontefiascone.com/de/bolsenasee |
| 10 | P0 | hub | https://www.ilovemontefiascone.com/mappa | https://www.ilovemontefiascone.com/en/map-montefiascone | https://www.ilovemontefiascone.com/de/karte-montefiascone |
| 11 | P0 | hub | https://www.ilovemontefiascone.com/vino | https://www.ilovemontefiascone.com/en/montefiascone-wine-guide | https://www.ilovemontefiascone.com/de/montefiascone-wein-guide |
| 12 | P1 | evento | https://www.ilovemontefiascone.com/anno-domini-1074-montefiascone | https://www.ilovemontefiascone.com/en/anno-domini-1074-montefiascone | https://www.ilovemontefiascone.com/de/anno-domini-1074-montefiascone |
| 13 | P1 | guida | https://www.ilovemontefiascone.com/borghi-piu-belli-lago-di-bolsena | https://www.ilovemontefiascone.com/en/best-villages-on-lake-bolsena | https://www.ilovemontefiascone.com/de/schoenste-orte-am-bolsenasee |
| 14 | P1 | guida | https://www.ilovemontefiascone.com/capodimonte-lago-di-bolsena-cosa-vedere | https://www.ilovemontefiascone.com/en/capodimonte-lake-bolsena-things-to-see | https://www.ilovemontefiascone.com/de/capodimonte-bolsenasee-sehenswuerdigkeiten |
| 15 | P1 | guida | https://www.ilovemontefiascone.com/civita-di-bagnoregio-da-montefiascone | https://www.ilovemontefiascone.com/en/civita-di-bagnoregio-from-montefiascone | https://www.ilovemontefiascone.com/de/civita-di-bagnoregio-ab-montefiascone |
| 16 | P1 | guida | https://www.ilovemontefiascone.com/est-est-est-montefiascone-vino-doc | https://www.ilovemontefiascone.com/en/est-est-est-montefiascone-doc-wine | https://www.ilovemontefiascone.com/de/est-est-est-wein-montefiascone |
| 17 | P1 | guida | https://www.ilovemontefiascone.com/lago-di-bolsena-cosa-vedere | https://www.ilovemontefiascone.com/en/what-to-see-on-lake-bolsena | https://www.ilovemontefiascone.com/de/bolsenasee-sehenswuerdigkeiten |
| 18 | P1 | guida | https://www.ilovemontefiascone.com/lago-di-bolsena-in-un-giorno | https://www.ilovemontefiascone.com/en/lake-bolsena-in-one-day | https://www.ilovemontefiascone.com/de/bolsenasee-an-einem-tag |
| 19 | P1 | guida | https://www.ilovemontefiascone.com/marta-lago-di-bolsena-cosa-vedere | https://www.ilovemontefiascone.com/en/marta-lake-bolsena-things-to-see | https://www.ilovemontefiascone.com/de/marta-bolsenasee-sehenswuerdigkeiten |
| 20 | P1 | guida | https://www.ilovemontefiascone.com/viterbo-da-montefiascone | https://www.ilovemontefiascone.com/en/viterbo-from-montefiascone | https://www.ilovemontefiascone.com/de/viterbo-ab-montefiascone |
| 21 | P1 | pagina stagionale | https://www.ilovemontefiascone.com/lago-di-bolsena-in-2-giorni | https://www.ilovemontefiascone.com/en/lake-bolsena-in-two-days | https://www.ilovemontefiascone.com/de/bolsenasee-in-zwei-tagen |
| 22 | P2 | guida | https://www.ilovemontefiascone.com/bolsena-cosa-vedere | https://www.ilovemontefiascone.com/en/bolsena-things-to-see | https://www.ilovemontefiascone.com/de/bolsena-sehenswuerdigkeiten |
| 23 | P2 | guida | https://www.ilovemontefiascone.com/montefiascone-con-bambini-famiglie | https://www.ilovemontefiascone.com/en/montefiascone-with-kids | https://www.ilovemontefiascone.com/de/montefiascone-mit-kindern |
| 24 | P2 | guida | https://www.ilovemontefiascone.com/montefiascone-in-un-giorno | https://www.ilovemontefiascone.com/en/montefiascone-in-one-day | https://www.ilovemontefiascone.com/de/montefiascone-an-einem-tag |
| 25 | P2 | guida | https://www.ilovemontefiascone.com/quando-visitare-montefiascone | https://www.ilovemontefiascone.com/en/best-time-to-visit-montefiascone | https://www.ilovemontefiascone.com/de/beste-reisezeit-montefiascone |
| 26 | P2 | pagina servizio | https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone | https://www.ilovemontefiascone.com/en/how-to-get-to-montefiascone | https://www.ilovemontefiascone.com/de/anreise-nach-montefiascone |
| 27 | P2 | pagina servizio | https://www.ilovemontefiascone.com/dove-dormire-a-montefiascone | https://www.ilovemontefiascone.com/en/where-to-stay-in-montefiascone | https://www.ilovemontefiascone.com/de/unterkunft-in-montefiascone |
| 28 | P2 | pagina servizio | https://www.ilovemontefiascone.com/dove-mangiare-a-montefiascone | https://www.ilovemontefiascone.com/en/where-to-eat-in-montefiascone | https://www.ilovemontefiascone.com/de/essen-in-montefiascone |
| 29 | P2 | pagina servizio | https://www.ilovemontefiascone.com/informazioni-turistiche-montefiascone | https://www.ilovemontefiascone.com/en/tourist-information-montefiascone | https://www.ilovemontefiascone.com/de/touristeninformation-montefiascone |
| 30 | P2 | pagina servizio | https://www.ilovemontefiascone.com/parcheggi-montefiascone | https://www.ilovemontefiascone.com/en/parking-in-montefiascone | https://www.ilovemontefiascone.com/de/parken-in-montefiascone |
| 31 | P2 | pagina stagionale | https://www.ilovemontefiascone.com/montefiascone-in-2-giorni | https://www.ilovemontefiascone.com/en/montefiascone-in-two-days | https://www.ilovemontefiascone.com/de/montefiascone-in-zwei-tagen |
| 32 | P2 | pagina stagionale | https://www.ilovemontefiascone.com/weekend-a-montefiascone | https://www.ilovemontefiascone.com/en/weekend-in-montefiascone | https://www.ilovemontefiascone.com/de/wochenende-in-montefiascone |

## Temporarily Excluded Pages

| Priority | Type | IT URL | EN URL | DE URL | Reason |
| --- | --- | --- | --- | --- | --- |
| P0 | hub | https://www.ilovemontefiascone.com/cosa-vedere | - | https://www.ilovemontefiascone.com/de/sehenswuerdigkeiten-montefiascone | manca equivalente EN pubblicabile |
| P0 | hub | https://www.ilovemontefiascone.com/eventi | - | https://www.ilovemontefiascone.com/de/veranstaltungen-montefiascone | manca equivalente EN pubblicabile |
| P0 | hub | https://www.ilovemontefiascone.com/galleria | - | - | manca equivalente EN e/o DE pubblicabile |
| P1 | evento | https://www.ilovemontefiascone.com/atb-festival-montefiascone | https://www.ilovemontefiascone.com/en/atb-festival-montefiascone | - | manca equivalente DE pubblicabile; richiede revisione editoriale/encoding |
| P1 | evento | https://www.ilovemontefiascone.com/calendario-eventi-montefiascone | - | - | manca equivalente EN e/o DE pubblicabile |
| P1 | evento | https://www.ilovemontefiascone.com/concerto-banda-rb-revue-montefiascone | - | - | manca equivalente EN e/o DE pubblicabile |
| P1 | evento | https://www.ilovemontefiascone.com/cronoscalata-montefiascone-coppa-citta | https://www.ilovemontefiascone.com/en/montefiascone-hill-climb | - | manca equivalente DE pubblicabile; richiede revisione editoriale/encoding |
| P1 | evento | https://www.ilovemontefiascone.com/est-film-festival-montefiascone | https://www.ilovemontefiascone.com/en/est-film-festival-montefiascone | - | manca equivalente DE pubblicabile; richiede revisione editoriale/encoding |
| P1 | evento | https://www.ilovemontefiascone.com/est-lake-festival-montefiascone | https://www.ilovemontefiascone.com/en/est-lake-festival-montefiascone | - | manca equivalente DE pubblicabile; richiede revisione editoriale/encoding |
| P1 | evento | https://www.ilovemontefiascone.com/eventi-estate-montefiascone-2026 | https://www.ilovemontefiascone.com/en/montefiascone-summer-events-2026 | - | manca equivalente DE pubblicabile; richiede revisione editoriale/encoding |
| P1 | evento | https://www.ilovemontefiascone.com/eventi-tradizioni-fiera-del-vino-montefiascone | https://www.ilovemontefiascone.com/en/montefiascone-wine-fair-traditions | - | manca equivalente DE pubblicabile; richiede revisione editoriale/encoding |
| P1 | evento | https://www.ilovemontefiascone.com/festa-santa-margherita-montefiascone | https://www.ilovemontefiascone.com/en/santa-margherita-feast-montefiascone | - | manca equivalente DE pubblicabile; richiede revisione editoriale/encoding |
| P1 | evento | https://www.ilovemontefiascone.com/festival-ecologia-integrale-montefiascone | https://www.ilovemontefiascone.com/en/integral-ecology-festival-montefiascone | - | manca equivalente DE pubblicabile; richiede revisione editoriale/encoding |
| P1 | evento | https://www.ilovemontefiascone.com/migliori-panorami-lago-di-bolsena | https://www.ilovemontefiascone.com/en/best-viewpoints-lake-bolsena | - | manca equivalente DE pubblicabile |
| P1 | evento | https://www.ilovemontefiascone.com/panorami-festival-montefiascone | https://www.ilovemontefiascone.com/en/panorami-festival-montefiascone | - | manca equivalente DE pubblicabile; richiede revisione editoriale/encoding |
| P1 | guida | https://www.ilovemontefiascone.com/borghi-del-lago-di-bolsena-in-auto | https://www.ilovemontefiascone.com/en/lake-bolsena-villages-by-car | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/borghi-lago-di-bolsena | https://www.ilovemontefiascone.com/en/lake-bolsena-villages | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/degustazione-vino-montefiascone-come-funziona | https://www.ilovemontefiascone.com/en/how-wine-tasting-works-montefiascone | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/gradoli-cosa-vedere-lago-di-bolsena | - | - | manca equivalente EN e/o DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/grotte-di-castro-cosa-vedere-lago-di-bolsena | - | - | manca equivalente EN e/o DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/itinerario-auto-lago-di-bolsena | https://www.ilovemontefiascone.com/en/lake-bolsena-by-car | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/lago-di-bolsena-con-bambini | https://www.ilovemontefiascone.com/en/lake-bolsena-with-kids | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/lago-di-bolsena-in-bici | https://www.ilovemontefiascone.com/en/cycling-lake-bolsena | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/pesce-di-lago-lago-di-bolsena | https://www.ilovemontefiascone.com/en/lake-fish-lake-bolsena | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/prodotti-tipici-montefiascone-tuscia | https://www.ilovemontefiascone.com/en/local-products-montefiascone-tuscia | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/san-lorenzo-nuovo-cosa-vedere-lago-di-bolsena | - | - | manca equivalente EN e/o DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/spiagge-lago-di-bolsena | https://www.ilovemontefiascone.com/en/lake-bolsena-beaches | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/strada-del-vino-est-est-est-montefiascone | https://www.ilovemontefiascone.com/en/est-est-est-wine-route-montefiascone | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/terme-viterbo-da-montefiascone | https://www.ilovemontefiascone.com/en/thermal-baths-near-montefiascone | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/trekking-lago-di-bolsena | https://www.ilovemontefiascone.com/en/trekking-lake-bolsena | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/valentano-cosa-vedere-lago-di-bolsena | - | - | manca equivalente EN e/o DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/via-francigena-bolsena-montefiascone | https://www.ilovemontefiascone.com/en/via-francigena-bolsena-montefiascone | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/via-francigena-cosa-portare | https://www.ilovemontefiascone.com/en/via-francigena-packing-list-montefiascone | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/via-francigena-montefiascone-viterbo | https://www.ilovemontefiascone.com/en/via-francigena-montefiascone-viterbo | - | manca equivalente DE pubblicabile |
| P1 | guida | https://www.ilovemontefiascone.com/viaggio-lento-lago-di-bolsena | https://www.ilovemontefiascone.com/en/slow-travel-lake-bolsena | - | manca equivalente DE pubblicabile |
| P1 | pagina servizio | https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone-da-viterbo | - | - | manca equivalente EN e/o DE pubblicabile |
| P1 | pagina servizio | https://www.ilovemontefiascone.com/dove-vedere-il-tramonto-sul-lago-di-bolsena | https://www.ilovemontefiascone.com/en/where-to-watch-sunset-lake-bolsena | - | manca equivalente DE pubblicabile |
| P1 | pagina servizio | - | https://www.ilovemontefiascone.com/en/where-to-stay-around-lake-bolsena | - | manca equivalente DE pubblicabile |
| P1 | pagina servizio | - | https://www.ilovemontefiascone.com/en/where-to-stay-montefiascone-vs-bolsena-viterbo | - | manca equivalente DE pubblicabile |
| P1 | pagina stagionale | https://www.ilovemontefiascone.com/estate-sul-lago-di-bolsena | https://www.ilovemontefiascone.com/en/summer-on-lake-bolsena | - | manca equivalente DE pubblicabile |
| P1 | pagina stagionale | https://www.ilovemontefiascone.com/lago-di-bolsena-in-autunno | https://www.ilovemontefiascone.com/en/lake-bolsena-in-autumn | - | manca equivalente DE pubblicabile |
| P1 | pagina stagionale | https://www.ilovemontefiascone.com/tuscia-in-3-giorni-da-montefiascone | https://www.ilovemontefiascone.com/en/tuscia-in-three-days-from-montefiascone | - | manca equivalente DE pubblicabile |
| P1 | pagina stagionale | https://www.ilovemontefiascone.com/weekend-romantico-lago-di-bolsena | https://www.ilovemontefiascone.com/en/romantic-weekend-lake-bolsena | - | manca equivalente DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/bomarzo-da-montefiascone | https://www.ilovemontefiascone.com/en/bomarzo-from-montefiascone | - | manca equivalente DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/caprarola-palazzo-farnese-da-montefiascone | https://www.ilovemontefiascone.com/en/caprarola-palazzo-farnese-from-montefiascone | - | manca equivalente DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/cosa-fare-a-montefiascone-quando-piove | https://www.ilovemontefiascone.com/en/rainy-day-montefiascone | - | manca equivalente DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/cosa-fare-la-sera-a-montefiascone | - | - | manca equivalente EN e/o DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/cosa-vedere-dintorni-montefiascone-itinerario | https://www.ilovemontefiascone.com/en/things-to-do-near-montefiascone | - | manca equivalente DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/cucina-tipica-montefiascone | https://www.ilovemontefiascone.com/en/typical-food-montefiascone | - | manca equivalente DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/dormire-centro-storico-montefiascone | - | - | manca equivalente EN e/o DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/enogastronomia-ricette-tipiche-montefiascone | - | - | manca equivalente EN e/o DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/esperienze-enogastronomiche-montefiascone | - | - | manca equivalente EN e/o DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/itinerari-tematici-montefiascone | - | - | manca equivalente EN e/o DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/itinerario-fotografico-montefiascone | https://www.ilovemontefiascone.com/en/montefiascone-photography-itinerary | - | manca equivalente DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/mangiare-centro-storico-montefiascone | - | - | manca equivalente EN e/o DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/montefiascone-lago-bolsena-spot-fotografici-aerei | https://www.ilovemontefiascone.com/en/photo-spots-montefiascone-lake-bolsena | - | manca equivalente DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/montefiascone-senza-auto | https://www.ilovemontefiascone.com/en/montefiascone-without-car | - | manca equivalente DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/monumenti-minori-chiese-storiche-montefiascone | https://www.ilovemontefiascone.com/en/minor-churches-historic-monuments-montefiascone | - | manca equivalente DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/tuscania-da-montefiascone | https://www.ilovemontefiascone.com/en/tuscania-from-montefiascone | - | manca equivalente DE pubblicabile |
| P2 | guida | https://www.ilovemontefiascone.com/villa-lante-bagnaia-da-montefiascone | https://www.ilovemontefiascone.com/en/villa-lante-from-montefiascone | - | manca equivalente DE pubblicabile |
| P2 | pagina servizio | https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone-da-firenze | - | - | manca equivalente EN e/o DE pubblicabile |
| P2 | pagina servizio | https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone-da-orvieto | - | - | manca equivalente EN e/o DE pubblicabile |
| P2 | pagina servizio | https://www.ilovemontefiascone.com/come-arrivare-a-montefiascone-da-roma | - | - | manca equivalente EN e/o DE pubblicabile |
| P2 | pagina stagionale | - | https://www.ilovemontefiascone.com/en/how-many-days-in-montefiascone | - | manca equivalente DE pubblicabile |
| P2 | pagina stagionale | https://www.ilovemontefiascone.com/montefiascone-in-autunno-vendemmia | https://www.ilovemontefiascone.com/en/autumn-in-montefiascone-lake-bolsena | - | manca equivalente DE pubblicabile |
| P2 | pagina stagionale | https://www.ilovemontefiascone.com/montefiascone-in-inverno | - | - | manca equivalente EN e/o DE pubblicabile |
| P2 | pagina stagionale | https://www.ilovemontefiascone.com/montefiascone-in-primavera | https://www.ilovemontefiascone.com/en/spring-in-montefiascone-lake-bolsena | - | manca equivalente DE pubblicabile |
| P2 | pagina tecnica | https://www.ilovemontefiascone.com/progetto-editoriale | - | - | pagina tecnica esclusa |

## Publication Rules Applied

- FR is not created and is not referenced.
- DE is included only for the validated perimeter.
- Hreflang `it`, `en`, `de` and `x-default` are applied only to included equivalent pages.
- `llms.txt` includes only validated DE URLs.
- `sitemap-de.xml` is generated only for the 32 validated DE URLs.
- No new `.html` URLs are introduced in sitemap entries.

## Remaining Work After This Perimeter

- Full inventory IT pages still needing EN: 20.
- Full inventory IT pages still needing DE: 62.
- P0 residual gaps: 3.
- P1 residual gaps: 38.
- P2 residual gaps: 24.
