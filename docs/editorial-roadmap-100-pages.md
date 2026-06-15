# Editorial Roadmap — 100+ pages (ilovemontefiascone.com)

Operational production plan to grow the portal across Montefiascone, Lake Bolsena, Tuscia and (later) multilingual. **This is a plan, not new pages.** No HTML/sitemap/robots/dist-it changes in this sprint.

Legend — **Pri**: P0 (next) → P3 (later). **Lang**: initial language. **Type**: hub / guide / itinerary / place / event / practical / editorial-directory / seasonal. **Risk**: risk of unverified data (basso/medio/alto). **[ESISTE]** = already published IT page.

---

## 1. Obiettivo editoriale
Far evolvere il sito **da portale locale su Montefiascone → a portale territoriale su Lago di Bolsena e Tuscia → a portale multilingua** per viaggiatori italiani e internazionali, predisposto (ma non ancora attivo) alla monetizzazione futura.
- **No contenuti sottili**: ogni pagina deve rispondere a un intento reale; meglio poche pagine solide che molte deboli (le pagine thin non si indicizzano e diluiscono l'autorità del dominio).
- **No lingue non validate**: EN/DE restano fuori da sitemap/robots/deploy finché non superano QA + revisione madrelingua.
- **Costruzione per cluster**: hub → spoke, così l'autorità si concentra e l'utente trova percorsi coerenti.
- **Funzione architetturale**: ogni pagina deve avere un ruolo (hub, spoke, pratica, conversione informativa) e link in entrata/uscita; niente pagine orfane.

## 2. Stato attuale (dal repository)
- **52 HTML IT** in `dist-it` (48 indicizzabili in `sitemap-it.xml` + privacy/cookie/404/offline noindex).
- Cluster **presenti**: Montefiascone/Cosa vedere (hub + guida completa + 3 luoghi + monumenti minori + spot foto), Guide/Itinerari (in-un-giorno, weekend, famiglie, fotografico, dintorni, itinerari-tematici, via-francigena), Eventi (hub + tradizioni + cronoscalata), Vino (hub + Est!Est!!Est!!! + cantine + enogastronomia), Lago di Bolsena (hub + cosa-vedere + in-un-giorno + borghi + borghi-piu-belli + spiagge + Bolsena/Marta/Capodimonte + itinerario-auto + con-bambini), Tuscia (Civita), Info pratiche (come-arrivare, parcheggi, info-turistiche, quando-visitare, mappa), Dove dormire/mangiare (editoriali).
- **EN**: 20 pagine core preparate e QA → **QUASI PUBBLICABILE, non pubblicata** (vedi `docs/en-localization-status.md`).
- **DE**: solo bozze legacy, non pronte; **FR/ES**: non avviate.
- **Sitemap/deploy: solo IT.**
- **Limiti residui**: responsabile editoriale da nominare; date eventi da confermare (schema event → Article); alcune pagine concise da approfondire.

## 3. Cluster editoriali

| # | Cluster | Obiettivo SEO | Target | Intent | Già presenti | Mancanti (esempi) | Priorità |
|---|---|---|---|---|---|---|---|
|1|Montefiascone|Autorità sul brand-luogo|Tutti|info/nav|index, guida completa|in-2-giorni, senza-auto, quando-piove, storia|P0–P1|
|2|Cosa vedere|Top sights + luoghi|Prima visita|info|cosa-vedere, rocca, cattedrale, san-flaviano, monumenti-minori|torre-pellegrino, palazzo-vescovile, mura|P1–P2|
|3|Lago di Bolsena|Intercettare ricerche lago|Turisti area|info/nav|lago hub, cosa-vedere, in-un-giorno|in-2-giorni, in-barca, balneazione, geologia|P0–P1|
|4|Borghi del lago|Long-tail borghi|Slow travel|info/place|Bolsena, Marta, Capodimonte, borghi-piu-belli|Gradoli, Grotte di Castro, San Lorenzo Nuovo, Valentano|P1–P2|
|5|Tuscia e dintorni|Day trip da base|Day-tripper|planning|Civita|Bomarzo, Viterbo, Tuscania, Caprarola, Bagnaia, Vitorchiano, Orvieto|P1–P2|
|6|Itinerari|Planning intent|Pianificatori|planning|in-un-giorno, weekend, famiglie, fotografico, dintorni|2 giorni, 3 giorni Tuscia, coppie, on-the-road|P1|
|7|Via Francigena|Cammini/pellegrini|Camminatori|info/outdoor|montefiascone-viterbo|tappa nord (Bolsena→Montefiascone), cosa portare, dormire pellegrini|P2|
|8|Enogastronomia|Food intent|Foodie|info|prodotti-tipici, cucina-tipica, ricette|olio Tuscia, pesce di lago, sagre gastronomiche|P2|
|9|Vino e cantine|Enoturismo|Enoturista|commercial/info|vino, Est!Est!!Est!!!, cantine|strada del vino, abbinamenti, vendemmia, degustazione come funziona|P1–P2|
|10|Eventi|Stagionale/news|Tutti|seasonal|eventi, fiera-del-vino, cronoscalata|calendario, feste religiose, sagre estate, presepe vivente|P1–P2|
|11|Famiglie|Family travel|Famiglie|planning|montefiascone-con-bambini, lago-con-bambini|spiagge famiglie, bimbi quando piove, natura|P2|
|12|Fotografia/panorami|Niche visual|Fotografi|niche|spot-fotografici, itinerario-fotografico|migliori panorami lago, tramonti dove, regole droni|P2–P3|
|13|Outdoor/slow|Outdoor intent|Attivi|outdoor|—|trekking lago, ciclovia, sentieri, kayak/SUP, birdwatching|P2–P3|
|14|Info pratiche|Logistica|Tutti|practical|come-arrivare, parcheggi, info, quando-visitare, mappa|da Roma, da Viterbo, meteo/clima, accessibilità, numeri utili|P0–P1|
|15|Dove dormire|Conversione soft|Pianificatori|commercial|dove-dormire|centro storico, lago, agriturismi, Francigena, famiglie|P1–P2|
|16|Dove mangiare|Conversione soft|Pianificatori|commercial|dove-mangiare|ristoranti centro, sul lago, trattorie, enoteche|P2|
|17|Guide stagionali|Freschezza/stagione|Tutti|seasonal|—|primavera, estate lago, autunno vendemmia, inverno/Natale|P2–P3|
|18|Guide internazionali EN|Mercato estero|EN travellers|info/planning|20 core (non pubbl.)|day trip from Rome, Tuscia itinerary, 2 days lake|P1 (post-QA)|
|19|Guide internazionali DE|Mercato DACH|DE travellers|info/planning|—|10 core (anreise, sehenswuerdigkeiten, bolsensee…)|P2–P3|
|20|FR/ES|Espansione|FR/ES|info|—|core minimo|P3|

---

## 4. Roadmap 100+ pagine

> Colonne: **#** · **Titolo provvisorio** · `slug` · Intent · KW primaria · Pri · Lang · Tipo · Schema · Link interni chiave · Rischio dati · Note. KW secondarie e dati necessari nelle Note quando rilevanti.

### Cluster 1 — Montefiascone
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|1|Montefiascone in 2 giorni · `montefiascone-in-due-giorni` |planning|montefiascone 2 giorni|P1|IT|itinerary|WebPage+ItemList+FAQ+Breadcrumb|in-un-giorno, weekend, lago|basso|estende in-un-giorno; no tempi rigidi|
|2|Montefiascone senza auto · `montefiascone-senza-auto` |planning|montefiascone senza auto|P1|IT|guide|WebPage+FAQ+Breadcrumb|come-arrivare, mappa, centro|medio|verificare collegamenti bus/treno con formule prudenti|
|3|Cosa fare a Montefiascone quando piove · `cosa-fare-montefiascone-pioggia` |info|montefiascone pioggia|P2|IT|guide|WebPage+FAQ|cattedrale, cantine, musei|basso|indoor: chiese, degustazioni|
|4|Storia di Montefiascone · `storia-di-montefiascone` |info|storia Montefiascone|P2|IT|guide|Article+FAQ+Breadcrumb|rocca, san-flaviano, est-est-est|medio|usare date storiche del knowledge-box (1111/1262/1369/1483/1674), citare|
|5|Il centro storico di Montefiascone · `centro-storico-montefiascone` |info|centro storico Montefiascone|P2|IT|guide|TouristAttraction+FAQ|cosa-vedere, rocca, mappa|basso| |
|6|Weekend romantico a Montefiascone · `weekend-romantico-montefiascone` |planning|weekend romantico Bolsena|P3|IT|itinerary|WebPage+ItemList+FAQ|weekend, tramonti, dove-dormire|basso|coppie; tramonto lago|
|7|Montefiascone low cost / gratis · `montefiascone-cosa-vedere-gratis` |info|montefiascone gratis|P3|IT|guide|WebPage+FAQ|panorami, centro, francigena|basso|panorami, passeggiate|

### Cluster 2 — Cosa vedere / luoghi
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|8|Torre del Pellegrino · `torre-del-pellegrino-montefiascone` |info|torre del pellegrino|P2|IT|place|TouristAttraction+Place+FAQ|rocca, cosa-vedere|medio|legata alla Rocca; verificare accessi|
|9|Palazzo Vescovile e giardini · `palazzo-vescovile-montefiascone` |info|palazzo vescovile Montefiascone|P3|IT|place|TouristAttraction+FAQ|cattedrale, eventi|alto|verificare visitabilità; prudenza|
|10|Le mura e le porte storiche · `mura-porte-montefiascone` |info|mura Montefiascone|P3|IT|guide|Article+FAQ|centro-storico, mappa|medio| |
|11|Belvedere e punti panoramici in paese · `belvedere-montefiascone` |info|belvedere Montefiascone|P2|IT|guide|WebPage+ItemList+FAQ|rocca, panorami-lago, foto|basso| |

### Cluster 3 — Lago di Bolsena
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|12|Lago di Bolsena in 2 giorni · `lago-di-bolsena-in-due-giorni` |planning|lago di bolsena 2 giorni|P1|IT|itinerary|WebPage+ItemList+FAQ|lago, in-un-giorno, borghi|basso| |
|13|Lago di Bolsena in barca / battello · `lago-di-bolsena-in-barca` |info|battello lago di bolsena|P2|IT|guide|WebPage+FAQ|capodimonte, isole, cosa-vedere|alto|orari/operatori → "verificare"|
|14|Balneazione al Lago di Bolsena · `balneazione-lago-di-bolsena` |info|fare il bagno lago di bolsena|P2|IT|guide|WebPage+FAQ|spiagge, con-bambini|medio|stagionale|
|15|Isola Bisentina · `isola-bisentina-lago-di-bolsena` |info|isola bisentina|P2|IT|place|TouristAttraction+FAQ|capodimonte, lago, in-barca|alto|visite a disponibilità → prudenza|
|16|Geologia e origine vulcanica del lago · `lago-di-bolsena-origine-vulcanica` |info|lago di bolsena vulcanico|P3|IT|guide|Article+FAQ|lago, cosa-vedere|basso|113,5 km²/151 m dal knowledge-box|
|17|Tramonti sul Lago di Bolsena · `tramonti-lago-di-bolsena` |info/visual|tramonto lago di bolsena|P3|IT|guide|WebPage+FAQ|foto, panorami, weekend|basso| |
|18|Pesca e tradizione lacustre · `pesca-lago-di-bolsena` |info|pesce lago di bolsena|P3|IT|guide|Article+FAQ|cucina-tipica, marta|medio| |

### Cluster 4 — Borghi del lago
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|19|Gradoli e la Cantina · `gradoli-lago-di-bolsena-cosa-vedere` |info|Gradoli cosa vedere|P2|IT|place|TouristDestination+FAQ|borghi, lago, itinerario-auto|medio|Palazzo Farnese di Gradoli; verificare dettagli|
|20|Grotte di Castro · `grotte-di-castro-cosa-vedere` |info|Grotte di Castro|P2|IT|place|TouristDestination+FAQ|borghi, lago|medio| |
|21|San Lorenzo Nuovo · `san-lorenzo-nuovo-cosa-vedere` |info|San Lorenzo Nuovo|P2|IT|place|TouristDestination+FAQ|borghi, lago|medio|impianto urbano settecentesco|
|22|Valentano · `valentano-cosa-vedere` |info|Valentano cosa vedere|P3|IT|place|TouristDestination+FAQ|borghi, lago|medio| |
|23|Borghi del lago in auto (anello) · `borghi-lago-di-bolsena-in-auto` |planning|giro lago di bolsena auto|P1|IT|itinerary|WebPage+ItemList+FAQ|itinerario-auto, borghi-piu-belli|basso|anello; tempi "variabili"|

### Cluster 5 — Tuscia e dintorni
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|24|Parco dei Mostri di Bomarzo da Montefiascone · `bomarzo-parco-dei-mostri-da-montefiascone` |planning|Bomarzo da Montefiascone|P1|IT|guide|Article+FAQ+Breadcrumb|civita, dintorni, tuscia|alto|biglietti/orari → "verificare"|
|25|Viterbo da Montefiascone · `viterbo-da-montefiascone` |planning|Viterbo da Montefiascone|P1|IT|guide|Article+FAQ|come-arrivare, francigena, terme|medio|quartiere San Pellegrino|
|26|Tuscania da Montefiascone · `tuscania-da-montefiascone` |planning|Tuscania cosa vedere|P2|IT|guide|Article+FAQ|dintorni, tuscia|medio|San Pietro e Santa Maria Maggiore|
|27|Caprarola e Palazzo Farnese · `caprarola-palazzo-farnese-da-montefiascone` |planning|Palazzo Farnese Caprarola|P2|IT|guide|Article+FAQ|tuscia, dintorni|alto|orari/biglietti → "verificare"|
|28|Bagnaia e Villa Lante · `bagnaia-villa-lante-da-montefiascone` |planning|Villa Lante Bagnaia|P2|IT|guide|Article+FAQ|tuscia, viterbo|alto|verificare|
|29|Vitorchiano · `vitorchiano-da-montefiascone` |info|Vitorchiano cosa vedere|P3|IT|guide|Article+FAQ|dintorni, tuscia|medio| |
|30|Celleno, il borgo fantasma · `celleno-borgo-fantasma-da-montefiascone` |info|Celleno borgo fantasma|P3|IT|guide|Article+FAQ|civita, dintorni|medio| |
|31|Orvieto da Montefiascone · `orvieto-da-montefiascone` |planning|Orvieto da Montefiascone|P2|IT|guide|Article+FAQ|come-arrivare, dintorni|medio|Umbria, vicina|
|32|Terme di Viterbo da Montefiascone · `terme-viterbo-da-montefiascone` [pianificata nel cluster, già creata IT] |info|terme Viterbo|P1|IT|guide|Article+FAQ|weekend, dintorni| n/d |**già creata**; mantenere prudenza|

### Cluster 6 — Itinerari
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|33|Tuscia in 3 giorni (base Montefiascone) · `tuscia-in-tre-giorni-montefiascone` |planning|Tuscia 3 giorni|P1|IT|itinerary|WebPage+ItemList+FAQ|weekend, lago, civita, bomarzo|basso| |
|34|On the road tra i laghi (Bolsena e Vico) · `laghi-tuscia-on-the-road` |planning|laghi Tuscia itinerario|P3|IT|itinerary|WebPage+ItemList+FAQ|lago, dintorni|medio| |
|35|Itinerario slow / turismo lento · `montefiascone-turismo-lento` |info|turismo lento Tuscia|P2|IT|guide|Article+FAQ|francigena, borghi, outdoor|basso| |
|36|Itinerario enogastronomico · `itinerario-enogastronomico-montefiascone` |planning|itinerario vino Tuscia|P2|IT|itinerary|WebPage+ItemList+FAQ|vino, cantine, cucina-tipica|basso| |

### Cluster 7 — Via Francigena
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|37|Via Francigena: Bolsena → Montefiascone · `via-francigena-bolsena-montefiascone` |info|Francigena Bolsena Montefiascone|P2|IT|itinerary|WebPage+ItemList+FAQ|via-francigena-viterbo, bolsena|medio|tappa nord; km "da verificare"|
|38|Cosa portare sulla Via Francigena · `via-francigena-cosa-portare` |info|cosa portare Francigena|P3|IT|guide|Article+FAQ|via-francigena-viterbo|basso| |
|39|Dormire da pellegrini a Montefiascone · `dormire-pellegrini-montefiascone` |commercial|ostello pellegrini Montefiascone|P3|IT|editorial-directory|Article+FAQ|dove-dormire, francigena|alto|no nomi struttura; criteri|

### Cluster 8 — Enogastronomia
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|40|Olio e prodotti dell'orto della Tuscia · `olio-prodotti-tuscia` |info|olio Tuscia|P3|IT|guide|Article+FAQ|prodotti-tipici, cucina-tipica|medio| |
|41|Pesce di lago: piatti e tradizione · `pesce-di-lago-bolsena-cucina` |info|coregone lago di bolsena|P2|IT|guide|Article+FAQ|cucina-tipica, marta, pesca|medio| |
|42|Sagre e feste gastronomiche · `sagre-gastronomiche-tuscia` |seasonal|sagre Tuscia|P3|IT|guide|Article+ItemList+FAQ|eventi, calendario|alto|date → "verificare"|
|43|Prodotti tipici da acquistare · `prodotti-tipici-da-acquistare-montefiascone` |commercial|cosa comprare Montefiascone|P3|IT|guide|Article+FAQ|prodotti-tipici, vino|medio| |

### Cluster 9 — Vino e cantine
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|44|Come funziona una degustazione · `degustazione-vino-montefiascone-come-funziona` |info|degustazione vino come funziona|P2|IT|guide|Article+FAQ|cantine, est-est-est|basso| |
|45|Strada del vino Est! Est!! Est!!! · `strada-del-vino-est-est-est` |planning|strada del vino Montefiascone|P2|IT|itinerary|WebPage+ItemList+FAQ|cantine, vino, dintorni|medio| |
|46|Abbinamenti cibo-vino locali · `abbinamenti-vino-est-est-est` |info|abbinamenti Est Est Est|P3|IT|guide|Article+FAQ|cucina-tipica, est-est-est|basso| |
|47|La vendemmia e l'autunno del vino · `vendemmia-montefiascone` |seasonal|vendemmia Montefiascone|P3|IT|guide|Article+FAQ|vino, eventi, autunno|medio| |

### Cluster 10 — Eventi
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|48|Calendario eventi Montefiascone · `calendario-eventi-montefiascone` |seasonal|eventi Montefiascone 2026|P1|IT|hub|ItemList+FAQ (no Event senza date)|eventi, fiera, cronoscalata|alto|date → fonti ufficiali; no Event non confermato|
|49|Feste religiose e Santa Margherita · `festa-santa-margherita-montefiascone` |info|festa Santa Margherita|P2|IT|event|Article+FAQ (Event solo se data confermata)|eventi-tradizioni|alto|20 luglio (patronale) verificabile; resto prudente|
|50|Sagre ed eventi estivi · `eventi-estate-montefiascone` |seasonal|eventi estate Montefiascone|P2|IT|guide|Article+ItemList+FAQ|eventi, estate|alto| |
|51|Presepe Vivente e Natale · `presepe-vivente-montefiascone` |seasonal|presepe vivente Montefiascone|P3|IT|event|Article+FAQ|eventi-tradizioni, inverno|alto|date → "verificare"|

### Cluster 11 — Famiglie
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|52|Spiagge per famiglie sul Lago di Bolsena · `spiagge-famiglie-lago-di-bolsena` |info|spiagge bambini lago di bolsena|P2|IT|guide|WebPage+FAQ|spiagge, lago-con-bambini, capodimonte|medio|stagionale|
|53|Cosa fare con bambini quando piove · `bambini-montefiascone-pioggia` |info|bambini Montefiascone pioggia|P3|IT|guide|WebPage+FAQ|con-bambini, cattedrale|basso| |
|54|Natura e aria aperta per bambini · `natura-bambini-lago-di-bolsena` |info|natura bambini Bolsena|P3|IT|guide|Article+FAQ|lago-con-bambini, outdoor|basso| |

### Cluster 12 — Fotografia e panorami
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|55|I migliori panorami sul Lago di Bolsena · `migliori-panorami-lago-di-bolsena` |info|panorami lago di bolsena|P2|IT|guide|WebPage+ItemList+FAQ|spot-fotografici, rocca, belvedere|basso| |
|56|Dove vedere il tramonto · `dove-vedere-tramonto-lago-di-bolsena` |info|tramonto lago di bolsena dove|P3|IT|guide|WebPage+FAQ|tramonti, foto|basso| |
|57|Regole per droni e riprese aeree · `riprese-drone-montefiascone-regole` |info|drone lago di bolsena regole|P3|IT|guide|Article+FAQ|spot-fotografici|medio|rimandare a normativa ufficiale|

### Cluster 13 — Outdoor e turismo lento
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|58|Trekking intorno al Lago di Bolsena · `trekking-lago-di-bolsena` |outdoor|trekking lago di bolsena|P2|IT|guide|WebPage+FAQ|francigena, outdoor, mappa|medio|sentieri → "verificare percorsi"|
|59|In bici intorno al lago · `lago-di-bolsena-in-bici` |outdoor|giro lago di bolsena bici|P2|IT|itinerary|WebPage+ItemList+FAQ|itinerario-auto, outdoor|medio| |
|60|Kayak e SUP sul lago · `kayak-sup-lago-di-bolsena` |outdoor|kayak lago di bolsena|P3|IT|guide|Article+FAQ|balneazione, spiagge|alto|operatori → "verificare"|
|61|Birdwatching e natura · `birdwatching-lago-di-bolsena` |niche|birdwatching lago di bolsena|P3|IT|guide|Article+FAQ|natura, outdoor|medio| |

### Cluster 14 — Info pratiche
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|62|Come arrivare a Montefiascone da Roma · `come-arrivare-a-montefiascone-da-roma` |info|Montefiascone da Roma|P0|IT|practical|FAQ+Breadcrumb|come-arrivare, parcheggi|alto|programmatic; km/tempi "da verificare"|
|63|Da Viterbo a Montefiascone · `come-arrivare-a-montefiascone-da-viterbo` |info|Montefiascone da Viterbo|P1|IT|practical|FAQ+Breadcrumb|come-arrivare, francigena|alto|programmatic|
|64|Da Orvieto a Montefiascone · `come-arrivare-a-montefiascone-da-orvieto` |info|Montefiascone da Orvieto|P2|IT|practical|FAQ+Breadcrumb|come-arrivare|alto|programmatic|
|65|Meteo e clima di Montefiascone · `meteo-clima-montefiascone` |info|clima Montefiascone|P2|IT|practical|WebPage+FAQ|quando-visitare|basso|usare medie del knowledge-box|
|66|Accessibilità a Montefiascone · `montefiascone-accessibilita` |practical|Montefiascone accessibilità|P2|IT|practical|WebPage+FAQ|parcheggi, mappa|medio|prudenza su percorsi|
|67|Numeri utili ed emergenze · `numeri-utili-montefiascone` |practical|numeri utili Montefiascone|P3|IT|practical|WebPage+FAQ|info-turistiche|alto|solo riferimenti istituzionali verificabili|

### Cluster 15 — Dove dormire (editoriali, no nomi)
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|68|Dormire nel centro storico · `dormire-centro-storico-montefiascone` |commercial|dormire centro Montefiascone|P2|IT|editorial-directory|Article+FAQ|dove-dormire, parcheggi|medio|criteri, no strutture|
|69|Dormire sul Lago di Bolsena · `dormire-lago-di-bolsena` |commercial|dormire lago di bolsena|P2|IT|editorial-directory|Article+FAQ|dove-dormire, lago|medio| |
|70|Agriturismi nella Tuscia · `agriturismi-tuscia-montefiascone` |commercial|agriturismo Tuscia Montefiascone|P2|IT|editorial-directory|Article+FAQ|dove-dormire, enogastronomia|medio| |
|71|Dormire in famiglia · `dormire-famiglie-montefiascone` |commercial|dormire famiglie Bolsena|P3|IT|editorial-directory|Article+FAQ|dove-dormire, con-bambini|medio| |

### Cluster 16 — Dove mangiare (editoriali, no nomi)
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|72|Mangiare nel centro storico · `mangiare-centro-storico-montefiascone` |commercial|ristoranti centro Montefiascone|P2|IT|editorial-directory|Article+FAQ|dove-mangiare, cucina-tipica|medio|criteri, no nomi|
|73|Mangiare sul lago · `mangiare-sul-lago-di-bolsena` |commercial|ristoranti lago di bolsena|P2|IT|editorial-directory|Article+FAQ|dove-mangiare, pesce-di-lago|medio| |
|74|Trattorie e cucina tipica · `trattorie-tipiche-montefiascone` |commercial|trattoria tipica Montefiascone|P3|IT|editorial-directory|Article+FAQ|cucina-tipica, dove-mangiare|medio| |
|75|Enoteche e aperitivo · `enoteche-aperitivo-montefiascone` |commercial|enoteca Montefiascone|P3|IT|editorial-directory|Article+FAQ|vino, dove-mangiare|medio| |

### Cluster 17 — Guide stagionali
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|76|Montefiascone in primavera · `montefiascone-primavera` |seasonal|Montefiascone primavera|P2|IT|seasonal|Article+FAQ|quando-visitare, francigena|basso| |
|77|Estate sul Lago di Bolsena · `estate-lago-di-bolsena` |seasonal|lago di bolsena estate|P1|IT|seasonal|Article+FAQ|spiagge, eventi-estate|medio| |
|78|Autunno e vendemmia · `autunno-montefiascone-vendemmia` |seasonal|Montefiascone autunno|P2|IT|seasonal|Article+FAQ|vendemmia, vino|medio| |
|79|Inverno e Natale a Montefiascone · `inverno-natale-montefiascone` |seasonal|Montefiascone Natale|P3|IT|seasonal|Article+FAQ|presepe-vivente, quando-visitare|medio| |

### Cluster 18 — Guide internazionali EN (post-QA; non pubblicare prima del sign-off)
| # | Titolo / `slug` | Intent | KW primaria | Pri | Lang | Tipo | Schema | Link | Rischio | Note |
|---|---|---|---|---|---|---|---|---|---|---|
|80|Montefiascone day trip from Rome · `/en/montefiascone-day-trip-from-rome` |planning|Montefiascone from Rome|P1|EN|guide|Article+FAQ|en/how-to-get, en/travel-guide|alto|tempi "check"; nuova EN (non solo traduzione)|
|81|Tuscia itinerary (EN) · `/en/tuscia-itinerary-from-montefiascone` |planning|Tuscia itinerary|P2|EN|itinerary|WebPage+ItemList+FAQ|en/lake-bolsena, en/civita|basso| |
|82|Lake Bolsena in 2 days (EN) · `/en/lake-bolsena-in-two-days` |planning|Lake Bolsena 2 days|P2|EN|itinerary|WebPage+ItemList+FAQ|en/lake-bolsena, en/villages|basso| |
|83|Where to swim on Lake Bolsena (EN) · `/en/lake-bolsena-beaches-swimming` |info|Lake Bolsena swimming|P2|EN|guide|WebPage+FAQ|en/lake-bolsena|medio| |
|84|Via Francigena pilgrim guide (EN) · `/en/via-francigena-montefiascone-viterbo` |info|Via Francigena Montefiascone|P2|EN|itinerary|WebPage+ItemList+FAQ|en/travel-guide|medio| |
|85–99|**EN core già preparate (15/20 mappate alle IT)** vedi `docs/en-localization-status.md` |—|—|P1|EN|—|—|—|—|pubblicare solo dopo sign-off + hreflang/sitemap-en/robots/build|

### Cluster 19/20 — DE / FR / ES (futuri)
| # | Titolo / `slug` | Pri | Lang | Note |
|---|---|---|---|---|
|100|DE core: `/de/anreise-nach-montefiascone` + 9 pagine (sehenswuerdigkeiten, reisefuehrer, bolsensee, an-einem-tag, wochenende, wein, unterkunft, essen, bolsena) |P2|DE|dopo EN; bonifica mojibake legacy; non pubblicare senza QA|
|101|FR core (≥8) · `/fr/...` |P3|FR|dopo DE|
|102|ES core (≥8) · `/es/...` |P3|ES|dopo FR|
|103|Montefiascone in 2 days (EN) · `/en/montefiascone-in-two-days` |P2|EN|traduzione di #1 dopo creazione IT|
|104|Best villages Lake Bolsena by car (EN) · `/en/lake-bolsena-villages-by-car` |P3|EN|traduzione di #23|
|105|Bomarzo from Montefiascone (EN) · `/en/bomarzo-monster-park-from-montefiascone` |P2|EN|traduzione di #24|

**Totale pagine proposte: 105** (≈83 IT nuove + EN nuove/da-tradurre + set DE/FR/ES pianificati). Le 48 IT già pubblicate non sono contate qui.

---

## 5. Prime 20 pagine da produrre (IT)

**Sprint A (10)** — colmano gap ad alto intento e rinforzano i cluster lago/Tuscia/pratiche:
| # roadmap | Pagina | Perché prioritaria | Dipendenze | Link | Dati da verificare | Traducibile EN ora? |
|---|---|---|---|---|---|---|
|62|come-arrivare da Roma|alto intento, gap noto; template programmatic esiste|`programmatic-seo-come-arrivare-*`|come-arrivare, parcheggi|km/tempi/mezzi|no: prima verifica dati|
|23|borghi del lago in auto (anello)|completa cluster lago|lago, borghi|itinerario-auto|nessuno critico|sì (#104)|
|12|Lago di Bolsena in 2 giorni|planning alto volume|lago hub|in-un-giorno, borghi|nessuno|sì (#82)|
|33|Tuscia in 3 giorni|planning, lega Tuscia|weekend, civita|lago, bomarzo|nessuno|sì (#81)|
|24|Bomarzo da Montefiascone|day-trip popolare|civita|dintorni|biglietti/orari→prudenza|sì (#105)|
|25|Viterbo da Montefiascone|day-trip + francigena|come-arrivare|terme, francigena|prudenza|sì|
|48|Calendario eventi|stagionale, hub|eventi|fiera, cronoscalata|date→ufficiali, no Event|no: dipende da date|
|1|Montefiascone in 2 giorni|estende core|in-un-giorno|weekend, lago|nessuno|sì (#103)|
|77|Estate sul Lago di Bolsena|stagionale P1|spiagge|eventi-estate|stagionale prudente|sì (#83 affine)|
|55|Migliori panorami sul lago|visual, link foto|spot-fotografici|rocca, belvedere|nessuno|sì|

**Sprint B (10)**:
| # roadmap | Pagina | Perché | Traducibile EN ora? |
|---|---|---|---|
|2|Montefiascone senza auto|accessibilità/intento pratico|sì|
|19|Gradoli cosa vedere|long-tail borgo|attendere (espandere prima)|
|20|Grotte di Castro|long-tail borgo|attendere|
|44|Degustazione come funziona|enoturismo informativo|sì|
|45|Strada del vino Est!Est!!Est!!!|enoturismo planning|sì|
|58|Trekking lago di Bolsena|outdoor|sì|
|59|Lago in bici|outdoor|sì|
|41|Pesce di lago e cucina|food long-tail|sì|
|68|Dormire nel centro storico|conversione soft|sì|
|72|Mangiare nel centro storico|conversione soft|sì|

## 6. Prime 30 pagine da tradurre/adattare in EN
Le 20 EN core esistono già come bozza (vedi `docs/en-localization-status.md`); vanno **prima validate (sign-off madrelingua) e pubblicate** con hreflang reciproco. Ordine di estensione EN (oltre alle 20 core):

| # | URL IT | URL EN consigliato | Pri | Ragione | Adattamento | Rischio loc. | EN core esiste? | Espandere prima? |
|---|---|---|---|---|---|---|---|---|
|1|/ (home)|/en/index.html|P0|ingresso|forte (Rome/Tuscia context)|basso|sì|no|
|2|cosa-vedere-…-guida-completa|/en/montefiascone-complete-guide|P1|long-form chiave|medio|basso|no (solo travel-guide breve)|sì|
|3|lago-di-bolsena|/en/lake-bolsena|P0|cluster lago|medio|basso|sì|no|
|4|lago-di-bolsena-cosa-vedere|/en/what-to-see-on-lake-bolsena|P1|cluster lago|medio|basso|sì|no|
|5|come-arrivare|/en/how-to-get-to-montefiascone|P0|pratica|forte (from Rome)|medio|sì|no|
|6|montefiascone-in-un-giorno|/en/montefiascone-in-one-day|P1|itinerario|medio|basso|sì|no|
|7|weekend-a-montefiascone|/en/weekend-in-montefiascone|P1|itinerario|medio|basso|sì|no|
|8|vino + est-est-est|/en/montefiascone-wine-guide|P1|enoturismo|forte (spiegare DOC)|basso|sì|no|
|9|bolsena-cosa-vedere|/en/bolsena-things-to-see|P1|borgo|medio|basso|sì|consigliato approfondire|
|10|marta-…|/en/marta-lake-bolsena-things-to-see|P2|borgo|medio|basso|sì|consigliato approfondire|
|11|capodimonte-…|/en/capodimonte-lake-bolsena-things-to-see|P2|borgo|medio|basso|sì|consigliato approfondire|
|12|civita-…-da-montefiascone|/en/civita-di-bagnoregio-from-montefiascone|P1|day-trip|medio|medio|sì|no|
|13|dove-dormire|/en/where-to-stay-in-montefiascone|P1|conversione|forte (no auto, areas)|basso|sì|no|
|14|dove-mangiare|/en/where-to-eat-in-montefiascone|P1|conversione|forte|basso|sì|no|
|15|parcheggi|/en/parking-in-montefiascone|P2|pratica|medio|medio|sì|no|
|16|quando-visitare|/en/best-time-to-visit-montefiascone|P2|pratica|medio|basso|sì|no|
|17|informazioni-turistiche|/en/tourist-information-montefiascone|P2|pratica|medio|medio|sì|no|
|18|borghi-piu-belli-lago|/en/best-villages-on-lake-bolsena|P2|cluster|medio|basso|sì|no|
|19|lago-di-bolsena-in-un-giorno|/en/lake-bolsena-in-one-day|P2|itinerario|medio|basso|sì|no|
|20|cosa-vedere|/en/things-to-see-montefiascone|P1|hub sights|medio|basso|sì|no|
|21|montefiascone (brand)|/en/montefiascone-travel-guide|P1|guida|forte|basso|sì|no|
|22|montefiascone-in-due-giorni (#1)|/en/montefiascone-in-two-days|P2|itinerario|medio|basso|no|crea IT prima|
|23|tuscia-in-tre-giorni (#33)|/en/tuscia-itinerary|P2|itinerario|medio|basso|no|crea IT prima|
|24|bomarzo (#24)|/en/bomarzo-monster-park-from-montefiascone|P2|day-trip|medio|medio|no|crea IT prima|
|25|viterbo (#25)|/en/viterbo-from-montefiascone|P2|day-trip|medio|medio|no|crea IT prima|
|26|borghi-in-auto (#23)|/en/lake-bolsena-villages-by-car|P3|itinerario|medio|basso|no|crea IT prima|
|27|spiagge|/en/lake-bolsena-beaches|P2|stagionale|medio|medio|no|affine a EN swimming|
|28|trekking (#58)|/en/lake-bolsena-hiking|P3|outdoor|medio|medio|no|crea IT prima|
|29|in bici (#59)|/en/lake-bolsena-by-bike|P3|outdoor|medio|medio|no|crea IT prima|
|30|degustazione (#44)|/en/wine-tasting-montefiascone|P3|enoturismo|medio|basso|no|crea IT prima|

## 7. Strategia DE
- **Perché dopo EN**: EN ha bacino più ampio e ROI più rapido; consente di rodare il processo (hreflang, sitemap per lingua, QA) prima di aggiungere DACH.
- **Prime pagine DE**: home, sehenswuerdigkeiten (cosa vedere), reisefuehrer (guida), anreise (come arrivare), bolsensee (lago), an-einem-tag (in un giorno), wochenende, wein, unterkunft, essen.
- **Slug**: tedeschi, umlaut traslitterati solo nello slug (`ü→ue`), mai nel testo visibile.
- **Lingua**: tono travel-guide professionale; attenzione a falsi amici e a composti; spiegare Tuscia/Lazio e "Lake Bolsena" → "Bolsenasee".
- **Rilevanza DACH**: enoturismo (Est!Est!!Est!!!), borghi, lago balneabile, Via Francigena, day trip da Roma; il turista tedesco apprezza outdoor e informazioni pratiche dettagliate.
- **Errori da evitare**: mojibake (la bozza legacy ne ha), traduzione automatica grezza, dati inventati, slug incoerenti.
- **Non pubblicare** finché non passa QA come per EN.

## 8. Linee guida editoriali (per ogni nuova pagina)
title <60 · meta 120–155 · H1 unico · intro AI-ready 40–60 parole · box "In breve"/"Dati essenziali" · H2/H3 ordinati · FAQ reali (3+) coerenti con `FAQPage` · ≥5 link interni · "Ultimo aggiornamento" · schema.org coerente · `<picture>`+WebP per le immagini · **nessun dato inventato** · **nessun placeholder**.
Accuratezza: niente orari/prezzi/contatti/distanze/date/nomi-attività inventati; se non verificabile → "verificare prima della partenza", "i tempi possono variare", "la disponibilità può cambiare in base alla stagione".

## 9. Regole internal linking
- Ogni nuova pagina: **≥2 link in ingresso** (da hub/pagine pertinenti) e **≥5 in uscita**.
- Ogni hub linka le spoke del cluster; ogni spoke torna all'hub.
- Anchor text **naturali e variati**; no keyword stuffing.
- Mai link a pagine inesistenti o a EN/DE non pubblicate.

## 10. Regole multilingua
- IT primaria; EN prima lingua estera; DE seconda; FR/ES successive.
- Nessuna lingua in sitemap senza QA; nessun hreflang senza equivalenti validati; canonical self; **hreflang reciproco**; `sitemap-<lang>.xml` dedicata aggiunta all'indice **solo a pubblicazione**; EN/DE non validate restano fuori da `dist-it`.

## 11. Calendario 30/60/90
- **0–30 gg**: go-live IT; GSC + Rich Results + PageSpeed (docs già pronti); **Sprint A (10 pagine)**; QA; internal linking.
- **31–60 gg**: **Sprint B (10 pagine)**; espansione cluster Lago/Tuscia; **pubblicazione EN** se sign-off; preparazione DE (non pubblicata).
- **61–90 gg**: nuove long-form (#33–#61); QA multilingua; eventuale **pubblicazione DE**; primi contenuti stagionali; preparazione FR/ES.

## 12. Backlog tecnico
- Template generator + partial per `<head>`/meta/hreflang (riduce errori a scala).
- Sitemap generator multi-lingua (indice + per-lingua).
- CI: **link checker** + **JSON-LD validator** su ogni push.
- Pipeline immagini **WebP**/responsive + compressione gallery.
- Gestione lingua/redirect/noindex; valutare **migrazione a generatore statico** (11ty/Astro) se le pagine superano ~80–100, mantenendo output statico per GitHub Pages.

## 13. Backlog editoriale
- Verifica fonti (date eventi, distanze, orari) prima di ogni pagina ad alto rischio.
- **Nominare il responsabile editoriale** (TODO in `progetto-editoriale.html`).
- **Revisione madrelingua EN**; piano DE; calendario contenuti stagionali; revisione pagine concise (luoghi/borghi); aggiornamento periodico.

## 14. Output dello sprint
- **File creato:** `docs/editorial-roadmap-100-pages.md`.
- **Pagine proposte:** **105**.
- **Prime 20 IT:** Sprint A + Sprint B (sopra).
- **Prime 30 EN:** tabella §6.
- **Cluster prioritari:** Lago di Bolsena, Tuscia/dintorni, Info pratiche (come-arrivare da città), Itinerari, Eventi (con cautela date).
- **Rischi editoriali:** dati non verificati (orari/prezzi/date/distanze) → formule prudenti; date eventi → no `Event` non confermato; traduzioni non revisionate → non pubblicare.
