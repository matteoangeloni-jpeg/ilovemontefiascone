# UI / UX Layout Audit

## Sintesi esecutiva

- **Stato generale:** `READY WITH NOTES`
- **Perimetro analizzato:** build pubblico `dist-it` con **298 HTML pubblici**.
- **Lingue pubbliche confermate:** `102 IT` (di cui `4` tecniche), `98 EN`, `98 DE`.
- **FR pubblica:** assente.
- **Esito build:** `npm run build:cloudflare` passato.

Il layout attuale ha una base solida: header, hero, card, summary list, FAQ e blocchi correlati sono già abbastanza coerenti da sostenere un portale editoriale-turistico multilingue. La struttura aiuta bene soprattutto nelle pagine monumento, nelle guide puntuali e in molte pagine pratiche.

Le criticità reali non sono di brand identity o di stile visivo puro, ma di **coerenza dell'architettura di pagina** e di **precisione dell'orientamento**. La piattaforma alterna almeno tre famiglie di template:

1. `page-hero` per homepage e pagine istituzionali leggere;
2. `detail-hero` per spoke, hub e pagine editoriali principali;
3. una famiglia più compatta e minificata, usata soprattutto in `EN/DE`, che in alcuni casi riduce menu, breadcrumb o componenti di contesto.

Il risultato è un sito che appare forte nel corpus IT principale, abbastanza coerente in EN, ma più disomogeneo in una porzione del corpus DE.

## Punti forti

- Hero quasi sempre leggibile e con H1 chiaro entro il primo viewport.
- Tassonomia editoriale già intuitiva: eventi, vino, lago, mappa, cosa vedere.
- Presenza frequente di summary box laterali utili nelle pagine spoke.
- FAQ visibili in molte pagine ad alta intenzione informativa.
- Presenza diffusa di breadcrumb, skip link e struttura semantica `header/main/footer`.
- Immagini generalmente pertinenti e con `alt` descrittivi.
- Coerenza cromatica e tipografica sufficiente a mantenere continuità tra i cluster.
- Footer indipendente e disclaimer editoriale chiaro, utile per fiducia e contesto.

## Criticità principali

### 1. Precisione dei percorsi interni

In diversi hub e pagine madri il testo promette un'azione specifica, ma il link porta a un hub troppo generico. Questo succede soprattutto in:

- homepage `index.html`;
- `eventi.html`;
- `vino.html`;
- `mappa.html`;
- `lago-di-bolsena.html`;
- `cosa-vedere.html`.

Il problema non è il link all'hub in sé, ma il fatto che **anchor text e destinazione non coincidono sempre con l'intento**.

### 2. Drift tra template principali e template compatti

Il corpus pubblico mostra un secondo sottosistema di pagine, soprattutto in `EN` e `DE`, con navigazione più corta o struttura più asciutta. In molte pagine questo non è un bug, ma una riduzione di orientamento percepibile.

Effetto UX:

- meno profondità di esplorazione;
- minore continuità tra homepage/hub e spoke;
- esperienza meno “portale” e più “articolo isolato”.

### 3. Blocker strutturali nel cluster DE eventi

Tre pagine DE pubbliche risultano senza header globale, menu, language switcher e footer:

- `de/atb-festival-montefiascone.html`
- `de/cronoscalata-lago-montefiascone.html`
- `de/est-lake-festival-montefiascone.html`

Questa è la criticità più seria emersa nell'audit perché interrompe:

- orientamento;
- ritorno agli hub;
- continuità multilingua;
- percezione di qualità del portale.

### 4. Breadcrumb non uniforme

Una parte del corpus EN/DE non espone breadcrumb visivo coerente. Non è un blocker quanto l'assenza di header, ma riduce l'orientamento soprattutto nelle pagine di gite, day trip e practical planning.

### 5. Rischio di sovraccarico nelle pagine hub

La homepage e alcuni hub principali sono informativamente ricchi, ma su mobile iniziano a essere lunghi e densi:

- molte card;
- molti blocchi “continua con…”;
- molte promesse di navigazione concorrenti;
- CTA non sempre gerarchizzate per priorità.

Il contenuto è valido. Va migliorata la sequenza decisionale.

## Valutazione per template

| Template / famiglia | Stato | Dove funziona | Dove si indebolisce | Valutazione |
| --- | --- | --- | --- | --- |
| `page-hero` | stabile | homepage, privacy, cookie, 404 | può essere troppo generico se riusato per spoke | `UX_READY_WITH_NOTES` |
| `detail-hero` | molto solido | hub principali, monumenti, spoke editoriali | in alcuni hub produce stack lunghi e correlati troppo simili | `UX_OK` |
| compatto/minificato | variabile | pagine pratiche snelle e day trip | riduce menu, breadcrumb o densità di orientamento | `UX_NEEDS_IMPROVEMENT` |
| tecnico minimale | corretto | `offline.html` | volutamente essenziale | `UX_OK` |

## Valutazione per cluster

| Cluster | Stato | Nota operativa |
| --- | --- | --- |
| Homepage | `UX_READY_WITH_NOTES` | ottimo hub, ma da alleggerire e rendere più gerarchico su mobile |
| Cosa vedere / guide | `UX_READY_WITH_NOTES` | buone basi, ma alcuni link rimandano a hub troppo larghi |
| Eventi | `UX_READY_WITH_NOTES` | bene la struttura generale; servono coerenza e normalizzazione nel corpus DE |
| Vino / gastronomia | `UX_NEEDS_IMPROVEMENT` | contenuto forte, ma architettura interna ancora troppo hub-centrica |
| Lago di Bolsena / dintorni | `UX_NEEDS_IMPROVEMENT` | cluster utile ma con CTA e correlati da rendere più specifici |
| Via Francigena / itinerari | `UX_OK` | taglio pratico convincente, buon match intento-layout |
| Mappa / orientamento | `UX_NEEDS_IMPROVEMENT` | pagina utile, ma le uscite verso guide e percorsi vanno rese più precise |
| Multilingua EN | `UX_READY_WITH_NOTES` | buona qualità generale, qualche template ridotto da allineare |
| Multilingua DE | `UX_NEEDS_IMPROVEMENT` | corpus ampio ma ancora eterogeneo; presenti 3 blocker strutturali |

## Criticità mobile

- Homepage e hub principali troppo densi nella seconda metà della pagina.
- Alcune sidebar utili su desktop diventano stack lunghi e percepiti come “post-scriptum”.
- Nei template compatti EN/DE il menu ridotto alleggerisce il top, ma peggiora l'orientamento.
- In DE le stringhe lunghe aumentano il rischio di wrap pesante in card e mini-list.

## Criticità accessibilità

- Base semantica generalmente buona.
- Skip link presente nelle pagine principali.
- Alt immagini generalmente presenti e descrittivi.
- I tre blocker DE senza header/nav/footer compromettono anche l'accessibilità di navigazione.
- Breadcrumb non uniforme: non blocca, ma riduce la prevedibilità del percorso.

## Criticità navigazione

- Troppi passaggi da spoke a hub generici anziché a spoke successivi pertinenti.
- “Guide”, “Vino”, “Mappa”, “Lago di Bolsena”, “Eventi” sono usati spesso come destinazioni universali.
- Questo rafforza il cluster SEO, ma indebolisce la progressione pratica dell'utente.

## Criticità layout / SEO

- Nessun conflitto forte tra layout e SEO.
- I problemi sono di **discoverability interna**, non di metadati.
- Le FAQ sono quasi sempre visibili quando presenti.
- I blocchi correlati sono utili, ma in alcuni hub vanno rifocalizzati per evitare ridondanza visiva.

## `UX_BLOCKER`

| Pagina | Motivo |
| --- | --- |
| `de/atb-festival-montefiascone.html` | assenza di header, nav, switcher lingua e footer |
| `de/cronoscalata-lago-montefiascone.html` | assenza di header, nav, switcher lingua e footer |
| `de/est-lake-festival-montefiascone.html` | assenza di header, nav, switcher lingua e footer |

## `UX_NEEDS_IMPROVEMENT`

### Pagine

- `index.html`
- `eventi.html`
- `vino.html`
- `mappa.html`
- `lago-di-bolsena.html`
- `en/events-montefiascone.html`
- `en/gallery-montefiascone.html`
- `en/giglio-vecchio-montefiascone.html`
- `en/how-to-get-to-montefiascone-from-viterbo.html`
- `de/ausfluege-rund-um-montefiascone.html`
- `de/bomarzo-ab-montefiascone.html`
- `de/anreise-viterbo-montefiascone.html`
- `de/anno-domini-1074-montefiascone.html`
- `de/fest-santa-margherita-montefiascone.html`

### Pattern

- cluster hub con CTA troppo generiche;
- template compatto EN/DE con navigazione ridotta;
- card correlate che non sempre rappresentano il “next best step”.

## `UX_OK`

Tutte le pagine monumento principali, gran parte delle pagine pratiche IT/EN, la maggioranza degli spoke Lago di Bolsena e il cluster Via Francigena risultano coerenti con il layout corrente e non richiedono redesign, ma solo rifinitura sistematica.

## Micro-fix applicati

Nessuno in questa fase.

Motivo: i problemi emersi non sono typo isolati ma pattern di architettura e template. Intervenire ora su singoli link o singole pagine rischierebbe di nascondere il problema strutturale invece di risolverlo.

## Conclusione operativa

Il sito **non richiede un redesign completo**. Richiede invece:

1. normalizzazione dei template secondari EN/DE;
2. riallineamento dei percorsi interni nei 5 hub principali;
3. riduzione del sovraccarico decisionale above-the-fold e mid-page nei cluster principali;
4. risoluzione prioritaria dei 3 blocker DE.
