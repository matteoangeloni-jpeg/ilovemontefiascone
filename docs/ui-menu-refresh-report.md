# UI Menu Refresh Report

## Problema iniziale

- Il menu pubblico era coerente solo a livello di classi base, ma non di gerarchia informativa.
- Desktop e mobile esponevano liste piatte di link, senza cluster tematici.
- Alcune pagine DE evento e la galleria usavano ancora varianti non agganciate alla navigazione condivisa.

## Struttura finale del menu

### IT

- `Home`
- `Visita`
  - `Cosa vedere`
  - `Guida completa`
  - `Mappa`
  - `Itinerari`
  - `Via Francigena`
  - `Galleria`
- `Eventi`
  - `Eventi a Montefiascone`
  - `Estate 2026`
  - `Fiera del Vino`
  - `ATB Festival`
  - `Est Film Festival`
- `Lago e dintorni`
  - `Lago di Bolsena`
  - `Borghi del lago`
  - `Montefiascone in 2 giorni`
  - `Tramonto sul lago`
  - `Dintorni della Tuscia`
- `Vino e sapori`
  - `Est! Est!! Est!!!`
  - `Vino`
  - `Degustazioni`
  - `Cantine`
  - `Cucina tipica`
- `Info pratiche`
  - `Come arrivare`
  - `Dove mangiare`
  - `Dove dormire`
  - `Progetto editoriale`

### EN

- `Home`
- `Visit`
- `Events`
- `Lake and nearby`
- `Wine and food`
- `Practical info`

### DE

- `Startseite`
- `Besuchen`
- `Veranstaltungen`
- `See und Umgebung`
- `Wein und Küche`
- `Praktische Infos`

## Modifiche grafiche applicate

- Dropdown desktop trasformato in pannello leggibile con titolo cluster, card-link e microdescrizione.
- Top-level item resi più chiari con pill button, hover/focus visibili e stato corrente leggibile.
- Struttura progressiva: la navigazione base resta valida anche senza JavaScript, mentre con JavaScript si attiva il menu clusterizzato.
- Galleria riallineata allo stesso linguaggio UI del resto del sito senza introdurre nuove librerie.

## Modifiche mobile

- Menu mobile riorganizzato come accordion, non più come lista piatta lunga.
- Trigger a tutta larghezza con target touch più generosi.
- Pannelli cluster collassabili con separazione visiva pulita.
- Chiusura menu su resize desktop preservata.

## Accessibilità

- `aria-expanded` gestito sui trigger cluster e sul toggle mobile.
- Apertura tastiera con `ArrowDown` e chiusura con `Escape` nei dropdown desktop.
- Focus state esplicito sui top-level item e sui link interni del pannello.
- Fallback statico disponibile se JavaScript non gira.

## File e componenti coinvolti

- [`js/main.js`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\js\main.js)
- [`css/style.css`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\css\style.css)
- [`css/style.min.css`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\css\style.min.css)
- [`assets/site.css`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\assets\site.css)
- [`assets/site.js`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\assets\site.js)
- [`galleria.html`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\galleria.html)
- [`de/atb-festival-montefiascone.html`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\de\atb-festival-montefiascone.html)
- [`de/cronoscalata-lago-montefiascone.html`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\de\cronoscalata-lago-montefiascone.html)
- [`de/est-film-festival-montefiascone.html`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\de\est-film-festival-montefiascone.html)
- [`de/est-lake-festival-montefiascone.html`](C:\Users\Matteo Angeloni\Documents\ilovemontefiascone.com\de\est-lake-festival-montefiascone.html)

## Rischi residui

- Il menu clusterizzato è un layer di progressive enhancement: nel sorgente HTML resta una nav base minima, poi `main.js` inietta la struttura finale.
- La verifica visuale finale è stata fatta tramite controlli di build, copertura file e campioni HTML; un test live browser-side resta utile prima di un eventuale deploy.
