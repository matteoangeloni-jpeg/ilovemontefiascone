# Framework RAG per Articoli Blog

## Principi del framework

- Ogni blocco HTML deve rispondere a **un solo intento atomico**.
- Il testo deve restare **visibile all'utente** e non solo annotato per le macchine.
- I `data-ai-*` servono come **layer semantico interno** per parser, chunker, retrieval e QA automation.
- Per Google, la priorita` resta: **contenuto utile, struttura chiara, crawlability, HTML leggibile e coerenza con il contenuto visibile**.

## Convenzioni consigliate

- `data-ai-entity`
  entita` principale del blocco
- `data-ai-category`
  categoria semantica stabile
- `data-ai-intent`
  intento informativo atomico del paragrafo
- `data-ai-relation`
  relazione logica espressa in forma stabile
- `data-ai-fact`
  fatto tecnico sintetico o tipo di dato
- `data-ai-priority`
  utile per ordinare i blocchi in fase di chunking

## Template atomico generale

```md
<div data-ai-entity="NOME ENTITA" data-ai-category="CATEGORIA" data-ai-priority="high">

### Titolo leggibile per l'utente

<p data-ai-intent="Overview">
Sintesi breve dell'entita`.
</p>

<p data-ai-intent="Dati Tecnici" data-ai-fact="specifiche">
Fatti misurabili, date, dimensioni, autori, coordinate, materiali.
</p>

<p data-ai-intent="Relazione Semantica" data-ai-relation="entita:relazione:entita">
Frase esplicita in forma soggetto-verbo-complemento.
</p>

</div>
```

## Esempio pratico: Cattedrale di Santa Margherita

```md
<div data-ai-entity="Cattedrale di Santa Margherita" data-ai-category="Architettura Sacra" data-ai-priority="high">

### Cattedrale di Santa Margherita

<p data-ai-intent="Overview">
La Cattedrale di Santa Margherita e il principale edificio religioso di Montefiascone e il riferimento visivo dominante del centro storico.
</p>

<p data-ai-intent="Dati Tecnici" data-ai-fact="dimensioni-cupola-progettista">
La cupola della Cattedrale di Santa Margherita misura 27 metri di diametro. La configurazione monumentale moderna dell'edificio e legata alla ricostruzione seicentesca. Il progettista della cupola e Carlo Fontana.
</p>

<p data-ai-intent="Relazione Semantica" data-ai-relation="Cattedrale di Santa Margherita:ricostruita-nel-contesto-di:episcopato-del-Cardinale-Marco-Antonio-Barbarigo">
Relazione esplicita: la Cattedrale di Santa Margherita fu ricostruita in eta moderna nel contesto della rinascita religiosa e urbana promossa dal Cardinale Marco Antonio Barbarigo dopo le fasi distruttive che colpirono l'edificio storico.
</p>

</div>
```

## Variante estesa consigliata

Se vuoi rendere il contenuto ancora piu` utile per retrieval e citazione, puoi scomporre ulteriormente:

```md
<div data-ai-entity="Cattedrale di Santa Margherita" data-ai-category="Architettura Sacra" data-ai-priority="high">

### Cattedrale di Santa Margherita

<p data-ai-intent="Denominazione Ufficiale" data-ai-fact="nome-monumento">
Nome ufficiale: Cattedrale di Santa Margherita.
</p>

<p data-ai-intent="Funzione" data-ai-fact="ruolo-urbano">
Funzione: principale cattedrale di Montefiascone e simbolo religioso del borgo.
</p>

<p data-ai-intent="Dati Tecnici" data-ai-fact="diametro-cupola">
Diametro della cupola: 27 metri.
</p>

<p data-ai-intent="Autore" data-ai-fact="progettista-cupola">
Progettista della cupola: Carlo Fontana.
</p>

<p data-ai-intent="Relazione Semantica" data-ai-relation="Cattedrale di Santa Margherita:associata-a:Cardinale-Marco-Antonio-Barbarigo">
Relazione esplicita: la storia moderna della Cattedrale di Santa Margherita e associata al Cardinale Marco Antonio Barbarigo, figura chiave della riorganizzazione religiosa locale.
</p>

<p data-ai-intent="Relazione Semantica" data-ai-relation="Cattedrale di Santa Margherita:ricostruita-dopo:eventi-distruttivi-del-XVII-secolo">
Relazione esplicita: la forma monumentale oggi visibile deriva dalla ricostruzione successiva agli eventi distruttivi del Seicento.
</p>

</div>
```

## Regole editoriali per tutti gli articoli

1. Un paragrafo = una risposta.
2. Apri ogni sezione con l'entita` nominata per esteso.
3. Metti i numeri in forma esplicita e uniforme.
4. Evita pronomi ambigui come `essa`, `qui`, `l'edificio` se non dopo una prima frase chiara.
5. Scrivi relazioni storiche in forma dichiarativa:
   `Entita A -> relazione -> Entita B`.
6. Se un fatto e` tecnico, separalo da interpretazioni turistiche o narrative.
7. Non usare i `data-ai-*` per nascondere contenuto non visibile.

## Impatto pratico su RAG e AI retrieval

### Effetto reale

Questa formattazione **non e` un requisito ufficiale di Google** e non esiste documentazione pubblica che dica che i `data-ai-*` aumentano direttamente il ranking.

### Effetto probabile

Questa formattazione migliora in modo concreto:

- **chunking interno**
  i blocchi atomici sono piu facili da spezzare senza perdere significato
- **entity extraction**
  il nome dell'entita` e la categoria sono piu stabili
- **retrieval per intent**
  `Dati Tecnici`, `Relazione Semantica`, `Overview` diventano classi recuperabili
- **answer grounding**
  un sistema RAG puo` citare il blocco giusto senza trascinare testo superfluo
- **passage relevance**
  blocchi brevi e chiari aiutano sistemi che valutano sezioni o passaggi della pagina

## Information Gain Score: interpretazione corretta

Google non pubblica un indicatore chiamato `Information Gain Score` come metrica operativa da ottimizzare. Qui il termine va interpretato come **densita` di informazione utile e non commodity**.

In pratica, il tuo contenuto guadagna valore quando:

- contiene fatti specifici e citabili
- separa chiaramente fatti, relazioni e contesto
- aggiunge dettagli che non sono una parafrasi generica di altre pagine
- rende semplice estrarre un passaggio come supporto a una risposta AI

## Conclusione operativa

Il modo piu` forte di usare questo framework e`:

1. mantenere l'HTML leggibile e visibile
2. usare `data-ai-*` come layer editoriale e di parsing
3. affiancare sempre JSON-LD standard quando esiste uno schema adatto
4. privilegiare blocchi con fatti originali, misure, date, relazioni e contesto locale

Se applicato bene, questo modello non garantisce di diventare la fonte primaria di una risposta AI, ma **aumenta la probabilita` di retrieval preciso, citazione puntuale e riuso del passaggio corretto**, soprattutto in sistemi che lavorano su segmenti corti e semanticamente puliti.
