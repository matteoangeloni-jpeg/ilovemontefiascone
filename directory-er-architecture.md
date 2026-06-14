## 1. Schema Entita-Relazione (ER)

Questa architettura e pensata per un portale turistico che deve fare tre cose bene:

- pubblicare directory filtrabili nel CMS;
- importare dati via JSON/CSV/API senza ambiguita;
- supportare query analitiche future su warehouse come BigQuery.

Il modello usa `places` come tabella centrale, con tassonomie e attributi relazionali collegati tramite tabelle ponte.

### Tabella `categories`

Contiene la tassonomia principale del portale:

- `accommodation`
- `bnb`
- `agriturismo`
- `restaurant`
- `winery`

Relazioni:

- `categories` ha una relazione 1-a-molti su se stessa tramite `parent_category_code`.
- `categories` ha una relazione 1-a-molti con `places` tramite `primary_category_code`.
- `categories` ha una relazione molti-a-molti con `places` tramite `place_categories`.

### Tabella `places`

E il cuore del modello. Contiene un record per ogni struttura:

- B&B
- agriturismo
- ristorante
- cantina

Campi chiave:

- anagrafica editoriale: `place_code`, `slug`, `name`, descrizioni;
- geografia: `latitude`, `longitude`, indirizzo, localita;
- contatti: telefono, email, sito, booking URL;
- segnali per il turismo locale: `distanza_dal_lago_km`, `distanza_dal_centro_km`, `distanza_dalla_francigena_km`, `vicinanza_francigena_boolean`, `offre_degustazione_est_est_est_boolean`;
- segnali di fruizione: pet friendly, parcheggio, accessibilita, vista lago, prenotazione richiesta;
- operativita: `status`, `created_at`, `updated_at`.

Relazioni:

- `places` ha una relazione molti-a-uno con `categories` tramite `primary_category_code`.
- `places` ha una relazione molti-a-molti con `categories` tramite `place_categories`.
- `places` ha una relazione molti-a-molti con `amenities` tramite `place_amenities`.
- `places` ha una relazione 1-a-molti con `place_opening_hours`.
- `places` ha una relazione 1-a-molti con `reviews`.

### Tabella `place_categories`

Gestisce le categorie secondarie.

Esempi:

- una cantina puo essere anche `shop`;
- un agriturismo puo essere sia `accommodation` sia `restaurant`;
- un B&B appartiene sia alla categoria specifica `bnb` sia alla macro-categoria `accommodation`.

Relazione:

- molti-a-molti tra `places` e `categories`.

### Tabella `amenities`

Catalogo normalizzato di servizi e caratteristiche filtrabili:

- `parking`
- `wifi`
- `pet-friendly`
- `lake-view`
- `breakfast-included`
- `wine-tasting`
- `outdoor-seating`
- `ev-charging`

Relazioni:

- `amenities` ha una relazione molti-a-molti con `places` tramite `place_amenities`.

### Tabella `place_amenities`

Tabella ponte per associare i servizi alle strutture.

Supporta anche un valore testuale opzionale (`amenity_value_text`) per note o dettagli, ad esempio:

- `parking` -> `private lot for 12 cars`
- `wine-tasting` -> `bookable every day at 17:00`

Relazione:

- molti-a-molti tra `places` e `amenities`.

### Tabella `place_opening_hours`

Gestisce orari settimanali e servizi.

Esempi:

- orari sala ristorante;
- orari degustazioni;
- check-in reception;
- giorni di chiusura.

Relazione:

- 1-a-molti tra `places` e `place_opening_hours`.

### Tabella `reviews`

Memorizza recensioni interne o importate da fonti esterne.

Campi tipici:

- `source_system`
- `external_review_id`
- `rating`
- `review_date`
- `review_text`

Relazione:

- 1-a-molti tra `places` e `reviews`.

## Vista logica del modello

```text
categories 1---N places
categories N---N places (via place_categories)
amenities  N---N places (via place_amenities)
places     1---N place_opening_hours
places     1---N reviews
categories 1---N categories (parent/child)
```

## Perche questo modello funziona bene

- E abbastanza normalizzato per evitare duplicazioni nel CMS.
- E stabile per import batch o sync API.
- E leggibile in SQL anche in ambienti analytics.
- Permette filtri semplici, ad esempio:
  - tutte le cantine con degustazione Est! Est!! Est!!!;
  - tutti i B&B entro 2 km dal lago;
  - ristoranti vicini alla Francigena con parcheggio.
