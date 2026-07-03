# UI / UX Layout Backlog

## Priorità operative

| Intervento proposto | Pagine / template coinvolti | Problema risolto | Impatto atteso | Rischio | Effort | Priorità | Implementare ora |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ripristinare header, nav, language switcher e footer nei 3 spoke DE eventi | `de/atb-festival-montefiascone`, `de/cronoscalata-lago-montefiascone`, `de/est-lake-festival-montefiascone` | elimina pagine isolate e incoerenti | altissimo | basso | S | `P0` | sì |
| Normalizzare la famiglia di template compatti EN/DE sul sistema principale | sottocorpus EN/DE con nav ridotta | riallinea orientamento, profondità e coerenza cross-language | alto | medio | M | `P1` | sì |
| Rendere i breadcrumb uniformi nei cluster pratici e gite | subset EN/DE privo di breadcrumb chiaro | migliora “dove mi trovo / dove torno” | medio | basso | S | `P1` | sì |
| Riassegnare CTA troppo generiche verso spoke più precisi | `index`, `eventi`, `vino`, `mappa`, `lago-di-bolsena`, `cosa-vedere` | riduce attrito cognitivo e clic “di appoggio” | alto | basso | M | `P1` | sì |
| Ridurre la densità decisionale della homepage su mobile | homepage IT/EN/DE | migliora lettura e ordine delle scelte | alto | medio | M | `P1` | no |
| Distinguere meglio hub di raccolta e spoke di approfondimento | tutti i cluster principali | chiarisce il passo successivo dell’utente | alto | medio | M | `P1` | no |
| Dare più specificità alle hero degli eventi singoli | spoke evento con immagini troppo generiche | rafforza riconoscibilità e memoria visiva | medio | basso | M | `P2` | no |
| Standardizzare sidebar e blocchi “dove andare dopo” | cluster Lago, Vino, Guide, Eventi | riduce ridondanza e rende le uscite più utili | medio | basso | M | `P2` | sì |
| Rivedere le pagine compatte con menu a 4-5 voci | corpus EN/DE compatto | migliora consistenza con il portale principale | medio | basso | M | `P2` | sì |
| Riorganizzare footer differenziando utilità e orientamento | footer multilingua | riduce sovraccarico e migliora scansione | medio | basso | S | `P2` | no |
| Rendere più esplicito il collegamento mappa ↔ pagine pratiche ↔ itinerari | `mappa` e pagine di orientamento | migliora l’uso della mappa come strumento e non solo come pagina | medio | medio | M | `P2` | no |
| Introdurre una gerarchia CTA fissa nei cluster principali | homepage, Eventi, Vino, Lago | crea una grammatica ricorrente per l’utente | medio | medio | M | `P2` | no |

## Backlog per cluster

### Homepage

- ridurre il numero di decisioni concorrenti nella parte centrale;
- consolidare in 3 macro-azioni: vedere, pianificare, approfondire;
- evitare CTA che mandano a hub generici quando il contesto promette uno spoke.

### Eventi

- mantenere l'hub come entry point;
- far emergere meglio `calendario`, `estate 2026`, `schede evento`;
- normalizzare il sistema DE prima di ulteriori ottimizzazioni.

### Vino / gastronomia

- separare meglio “hub vino” da “guide specifiche”;
- evitare che Fiera del Vino, cantine, degustazioni e prodotti tipici ricadano sempre sullo stesso hub.

### Lago di Bolsena

- rendere più leggibili i percorsi “famiglie / tramonto / borghi / bici / estate”;
- ridurre i rimandi autoreferenziali al solo hub Lago.

### Mappa / orientamento

- chiarire la funzione primaria della pagina: orientare e distribuire;
- trasformare i blocchi correlati in percorsi pratici espliciti.

### Multilingua

- riallineare EN e DE ai pattern IT dove il portale funziona meglio;
- evitare pagine “articolo puro” se il resto del cluster è pensato come portale navigabile.

## Cosa non va fatto ora

- redesign completo di hero, palette o brand;
- inserimento di nuove dipendenze UI;
- nuove pagine;
- refactor indiscriminato dei cluster;
- correzioni puntuali scollegate da una logica di template.

## Sequenza consigliata

1. chiudere i `P0`;
2. uniformare header/nav/breadcrumb dei template compatti;
3. rivedere CTA e correlati nei 5 hub principali;
4. solo dopo valutare una rifinitura visiva mobile-first.
