## Il Cruscotto del Viaggiatore

Questo pacchetto contiene due implementazioni del widget:

- `cruscotto-del-viaggiatore-widget.html`
- `cruscotto-del-viaggiatore-backend.py`

### Opzione 1: Frontend puro

Usa il file `cruscotto-del-viaggiatore-widget.html` come snippet da incollare nel CMS.

Caratteristiche:

- calcola le finestre di `Golden Hour` e `Blue Hour` con `SunCalc`;
- legge il meteo da `Open-Meteo`;
- valuta automaticamente una condizione sintetica per scatto e passeggiata;
- non richiede build step.

#### Come testarlo

1. Crea una pagina di test HTML locale.
2. Incolla dentro il contenuto di `cruscotto-del-viaggiatore-widget.html`.
3. Apri la pagina nel browser oppure incorporala in una bozza del CMS.
4. Verifica:
   - caricamento degli orari di luce;
   - aggiornamento del badge meteo;
   - corretto funzionamento del bottone `Aggiorna`;
   - assenza di errori in console.

#### Come integrarlo nel CMS

- Metodo semplice: incolla l'intero contenuto del file dentro un blocco `HTML custom`.
- Metodo pulito: carica il file come partial/snippet e includilo nel template della pagina.
- Se il CMS blocca gli script esterni, scarica `suncalc.js` e servilo dallo stesso dominio al posto della CDN.

### Opzione 2: Automazione backend

Lo script `cruscotto-del-viaggiatore-backend.py` esegue una chiamata giornaliera a Open-Meteo e produce un payload come questo:

```json
{
  "widget": "il-cruscotto-del-viaggiatore",
  "date": "2026-06-09",
  "summary_text": "Oggi tramonto spettacolare alle 20:46 sul lago. Golden hour serale 19:46-20:46, blue hour serale 20:46-21:21. Ottime condizioni: luce pulita, vento gestibile per passeggiata e scatti.",
  "solar": {
    "sunrise": "05:36",
    "sunset": "20:46"
  }
}
```

#### Modalita supportate

- `--dry-run`: stampa JSON su stdout;
- `--webhook <url>`: invia il payload al CMS;
- `--sqlite <file.db>`: salva il payload in SQLite;
- combinabili tra loro.

#### Test rapido

```bash
python cruscotto-del-viaggiatore-backend.py --dry-run
```

#### Invio al CMS via webhook

```bash
python cruscotto-del-viaggiatore-backend.py --webhook "https://tuo-cms.example/webhooks/traveler-dashboard"
```

#### Salvataggio in SQLite

```bash
python cruscotto-del-viaggiatore-backend.py --sqlite ".\\data\\traveler-dashboard.db"
```

#### Scheduling

- Windows Task Scheduler: esecuzione giornaliera alle `05:00` Europe/Rome.
- Linux cron: `0 5 * * * /usr/bin/python3 /path/cruscotto-del-viaggiatore-backend.py --webhook ...`
- n8n: usa un nodo `Execute Command` o `Code` per eseguire lo script una volta al giorno.

### Fonti tecniche

- Open-Meteo Forecast API: `sunrise`, `sunset`, `weather_code`, `precipitation_probability_max`
- SunCalc: `getTimes()`, `goldenHourEnd`, `goldenHour`, `nauticalDawn`, `nauticalDusk`

### Nota implementativa

La versione frontend e la piu precisa per le fasi di luce, perche usa `SunCalc` direttamente sulle coordinate di Montefiascone. La versione backend tiene volutamente il setup leggero e senza dipendenze esterne: per questo usa `sunrise/sunset` di Open-Meteo e genera finestre di `Golden Hour` e `Blue Hour` con offset fotografici pratici.
