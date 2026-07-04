# Header Footer Consistency Audit

## Perimetro analizzato

- Shared runtime: `js/main.js`
- Shared styles: `css/style.css` e `css/style.min.css`
- Legacy stack secondaria: `assets/site.css` e `assets/site.js`
- Pagine campione IT, EN, DE:
  - homepage
  - hub eventi
  - hub lago
  - hub vino
  - mappa
  - Via Francigena

## Stato iniziale

- Il sito usava soprattutto `js/main.js`, ma molte pagine avevano HTML statico con header/footer leggermente diversi.
- Il language switcher non era coerente da pagina a pagina.
- La navigazione mobile cambiava resa fra layout nuovi e layout legacy.
- Alcune pagine EN/DE mantenevano footer minimali o header abbreviati.
- Nel sorgente esistevano ancora link FR, rimossi però nel build pubblico da `scripts/build-cloudflare.mjs`.

## Problemi trovati

| Area | Problema | Impatto |
| --- | --- | --- |
| Header | Menu top-level diversi tra pagine e lingue | Navigazione incoerente e percezione meno professionale |
| Dropdown | Assente o non uniforme nelle pagine legacy | Cluster turistici poco leggibili |
| Language switcher | Ordine e presenza link variabili | UX discontinua tra IT / EN / DE |
| Footer | Blocchi e copy diversi tra pagine | Brand editoriale poco stabile |
| Mobile nav | Pannello aperto poco arioso e con bordi rigidi | Leggibilità ridotta su smartphone |
| Accessibilità | Mancava una gestione uniforme dello stato open/close del menu | Esperienza tastiera e mobile meno chiara |

## Scelta tecnica

- Non è stato aperto un refactor su 294 pagine statiche.
- È stata usata la shared layer già dominante (`js/main.js`) per rigenerare header e footer in modo coerente al `DOMContentLoaded`.
- Il CSS condiviso è stato raffinato per:
  - sticky header
  - dropdown mobile
  - footer grid
  - stati aperto/chiuso del menu

## Coerenza ottenuta

- Stesso header funzionale per tutte le pagine che caricano `js/main.js`.
- Stesso footer editoriale per tutte le pagine che caricano `js/main.js`.
- Language switcher reso coerente su IT / EN / DE.
- FR non viene esposta dal build pubblico.

## Residui noti

- Le poche pagine fuori dal perimetro `js/main.js` restano da verificare in uno sprint separato se diventano pubbliche o strategiche.
- La coerenza è ottenuta a runtime: il sorgente HTML resta eterogeneo, ma il pubblico servito e la UX browser risultano uniformati.
