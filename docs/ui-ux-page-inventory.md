# UI / UX Page Inventory

## Perimetro

- Build analizzato: `dist-it`
- Copertura: **298 HTML pubblici**
- Conteggi:
  - `IT`: 102 HTML pubblici (`98` pagine contenuto + `4` tecniche)
  - `EN`: 98 HTML pubblici
  - `DE`: 98 HTML pubblici
- FR pubblica: assente

## Tabella per tipologia

| Tipo pagina | IT | EN | DE | Template prevalente | Stato medio | Issue dominante |
| --- | ---: | ---: | ---: | --- | --- | --- |
| homepage | 1 | 1 | 1 | hero / hub | `UX_READY_WITH_NOTES` | sovraccarico decisionale |
| hub eventi | 1 | 1 | 1 | detail hero + section grid | `UX_READY_WITH_NOTES` | gerarchia link/cluster |
| eventi stagionali | 2 | 2 | 1 | detail hero | `UX_READY_WITH_NOTES` | densità contenuti |
| evento singolo | 13 | 9 | 10 | detail hero / compatto | `UX_READY_WITH_NOTES` | immagini hero e coerenza template |
| vino e gastronomia | 8 | 6 | 6 | detail hero | `UX_NEEDS_IMPROVEMENT` nei hub | CTA troppo hub-centriche |
| lago / borghi / dintorni | 29 | 34 | 34 | detail hero / compatto | `UX_OK` con eccezioni | correlati non sempre specifici |
| Via Francigena / itinerari | 11 | 8 | 12 | detail hero / compatto | `UX_OK` | pochi blocker, buona chiarezza |
| mappa / orientamento / pratiche | 12 | 9 | 1 | detail hero / compatto | `UX_READY_WITH_NOTES` | percorsi di uscita poco mirati |
| monumenti e luoghi | 3 | 3 | 3 | detail hero | `UX_OK` | quasi nessuna criticità primaria |
| guide e cosa vedere | 3 | 3 | 2 | detail hero / compatto | `UX_READY_WITH_NOTES` | link di passaggio troppo larghi |
| pagine tecniche | 4 | 0 | 0 | page hero / minimal | `UX_OK` | solo essenzialità funzionale |

## Template / famiglie rilevate

| Famiglia | Pagine osservate | Nota |
| --- | --- | --- |
| `detail-hero` | famiglia dominante del corpus | è il pattern più robusto del sito |
| `page-hero` | homepage e pagine tecniche leggere | adatto a contenuti sintetici |
| compatto / minificato | sottocorpus soprattutto EN/DE | qui emergono le principali incoerenze |
| tecnico minimale | `offline.html` | corretto per scopo PWA |

## Pagine prioritarie

| URL/file | Lingua | Tipo | Template | Cluster | Score | Layout issue | Navigation issue | Mobile issue | Accessibility issue | Priorità |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | IT | homepage | hero hub | core hub | `UX_READY_WITH_NOTES` | home lunga e densa | CTA troppo generiche in alcuni blocchi | stack lungo | nessun blocker | `P1` |
| `/eventi` | IT | hub eventi | detail-hero | eventi | `UX_READY_WITH_NOTES` | blocchi ricchi ma non sempre gerarchizzati | hub vs schede da rendere più esplicito | media densità | nessun blocker | `P1` |
| `/vino` | IT | hub vino | detail-hero | vino | `UX_NEEDS_IMPROVEMENT` | layout valido ma ripetitivo | molte uscite tornano all'hub | medio | nessun blocker | `P1` |
| `/mappa` | IT | orientamento | detail-hero | orientamento pratico | `UX_NEEDS_IMPROVEMENT` | pagina utile ma con uscita poco precisa | “guide” troppo generico | medio | nessun blocker | `P1` |
| `/lago-di-bolsena` | IT | hub lago | detail-hero | lago e tuscia | `UX_NEEDS_IMPROVEMENT` | contenuto utile ma correlati ridondanti | CTA verso spoke poco specifiche | medio | nessun blocker | `P1` |
| `/cosa-vedere` | IT | guida / hub | detail-hero | guide | `UX_READY_WITH_NOTES` | buona struttura | alcuni link portano a hub larghi | basso | nessun blocker | `P2` |
| `/de/atb-festival-montefiascone` | DE | evento singolo | compatto | eventi | `UX_BLOCKER` | header/footer mancanti | nessuna continuità con hub | alta frizione | navigazione compromessa | `P0` |
| `/de/cronoscalata-lago-montefiascone` | DE | evento singolo | compatto | eventi | `UX_BLOCKER` | header/footer mancanti | nessuna continuità con hub | alta frizione | navigazione compromessa | `P0` |
| `/de/est-lake-festival-montefiascone` | DE | evento singolo | compatto | eventi | `UX_BLOCKER` | header/footer mancanti | nessuna continuità con hub | alta frizione | navigazione compromessa | `P0` |
| `/en/events-montefiascone` | EN | hub eventi | compatto | eventi | `UX_NEEDS_IMPROVEMENT` | meno ricco del corrispettivo IT | nav ridotta | medio | nessun blocker | `P1` |
| `/en/gallery-montefiascone` | EN | guida generale | compatto | patrimonio / visual | `UX_NEEDS_IMPROVEMENT` | articolo valido ma meno portale | menu ridotto | medio | nessun blocker | `P2` |
| `/en/giglio-vecchio-montefiascone` | EN | evento/territorio | compatto | eventi / comunità | `UX_NEEDS_IMPROVEMENT` | hero povera visivamente | nav ridotta | medio | nessun blocker | `P2` |
| `/en/how-to-get-to-montefiascone-from-viterbo` | EN | pratica | compatto | orientamento pratico | `UX_NEEDS_IMPROVEMENT` | pagina chiara ma molto asciutta | breadcrumb non uniforme | basso | leggero | `P2` |
| `/de/ausfluege-rund-um-montefiascone` | DE | guida generale | compatto | dintorni | `UX_NEEDS_IMPROVEMENT` | buona leggibilità ma struttura corta | breadcrumb debole | medio | nessun blocker | `P2` |
| `/de/bomarzo-ab-montefiascone` | DE | day trip | compatto | lago e tuscia | `UX_NEEDS_IMPROVEMENT` | buona pagina ma meno integrata nel portale | nav ridotta | medio | nessun blocker | `P2` |
| `/de/anreise-viterbo-montefiascone` | DE | pratica | compatto | orientamento pratico | `UX_NEEDS_IMPROVEMENT` | pagina lineare | breadcrumb debole | basso | nessun blocker | `P2` |

## Copertura cluster

### Core hub

- `/`
- `/en/`
- `/de/`
- `/guide`
- `/en/montefiascone-travel-guide`
- `/de/reisefuehrer-montefiascone`

### Eventi

- `/eventi`
- `/calendario-eventi-montefiascone`
- `/eventi-estate-montefiascone-2026`
- tutti gli spoke evento IT/EN/DE del build pubblico

### Vino / gastronomia

- `/vino`
- vino DOC
- cantine
- degustazioni
- cucina tipica
- prodotti tipici
- equivalenti EN/DE presenti nel build

### Lago / borghi / dintorni

- hub Lago di Bolsena
- borghi del lago
- day trip Tuscia
- percorsi auto, estate, autunno, bici, famiglie
- equivalenti EN/DE presenti nel build

### Via Francigena / itinerari

- Montefiascone–Viterbo
- Bolsena–Montefiascone
- cosa portare
- itinerari lenti
- pagine weekend e soggiorno correlate nel corpus pubblico

### Pagine tecniche

- `/404`
- `/cookie`
- `/privacy`
- `/offline`

## Lettura finale dell'inventario

L'intero corpus pubblico è stato considerato nell'audit. Le criticità non sono diffuse in modo omogeneo: il problema principale è concentrato in una combinazione di:

- hub con CTA troppo generiche;
- template compatti EN/DE non sempre riallineati al sistema principale;
- tre spoke DE eventi senza cornice globale di navigazione.
