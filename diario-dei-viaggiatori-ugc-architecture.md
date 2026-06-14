# Il Diario dei Viaggiatori

## Premessa SEO importante

Google supporta i review snippet solo per alcuni tipi di entita` e non mostra le stelline per recensioni "self-serving" su pagine che parlano di se stesse. In pratica:

- `Montefiascone` come destinazione turistica non e` un target supportato da Google per le stelline review snippet.
- `LocalBusiness` e `Organization` sono supportati solo quando il sito raccoglie recensioni su **altre** attivita`, non sulla propria.
- Quindi il Diario dei Viaggiatori e` ottimo per `E-E-A-T`, contenuto UGC e knowledge graph locale, ma le stelline in SERP vanno usate solo su pagine eleggibili, per esempio la scheda di una cantina o di un B&B recensito dal portale.

## 1. Schema Dati Backend

### Architettura logica

Usa tre livelli:

1. `review_targets`
   contiene l'entita` recensibile: Montefiascone, Rocca dei Papi, una cantina, un B&B.
2. `traveler_testimonials`
   contiene la testimonianza pubblica e i dati editoriali.
3. `testimonial_verifications`
   contiene la prova tecnica della visita, separata dai dati mostrati al pubblico.

### DDL SQL

```sql
CREATE TABLE review_targets (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug VARCHAR(160) NOT NULL UNIQUE,
  target_name VARCHAR(180) NOT NULL,
  schema_type VARCHAR(50) NOT NULL,
  target_category VARCHAR(50) NOT NULL,
  canonical_url VARCHAR(255) NOT NULL,
  place_id_external VARCHAR(120),
  latitude DECIMAL(9,6),
  longitude DECIMAL(9,6),
  is_self_serving BOOLEAN NOT NULL DEFAULT FALSE,
  is_review_snippet_eligible BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT chk_schema_type
    CHECK (schema_type IN (
      'TouristDestination',
      'TouristAttraction',
      'LandmarksOrHistoricalBuildings',
      'Church',
      'LocalBusiness',
      'LodgingBusiness',
      'Restaurant',
      'Winery',
      'Organization'
    )),
  CONSTRAINT chk_target_category
    CHECK (target_category IN (
      'destination',
      'attraction',
      'winery',
      'restaurant',
      'lodging',
      'route-stop'
    ))
);

CREATE TABLE traveler_testimonials (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  review_target_id BIGINT NOT NULL REFERENCES review_targets(id),
  public_name VARCHAR(80) NOT NULL,
  display_name VARCHAR(80),
  visit_date DATE NOT NULL,
  traveler_type VARCHAR(30) NOT NULL,
  title VARCHAR(110),
  review_body TEXT NOT NULL,
  rating_value DECIMAL(2,1),
  language_code VARCHAR(10) NOT NULL DEFAULT 'it',
  is_verified BOOLEAN NOT NULL DEFAULT FALSE,
  verified_badge_label VARCHAR(40),
  verification_method VARCHAR(40),
  verification_confidence DECIMAL(5,2),
  moderation_status VARCHAR(20) NOT NULL DEFAULT 'pending',
  source_channel VARCHAR(30) NOT NULL DEFAULT 'web_mobile',
  consent_publication BOOLEAN NOT NULL DEFAULT FALSE,
  consent_schema_markup BOOLEAN NOT NULL DEFAULT FALSE,
  consent_privacy_version VARCHAR(20),
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  published_at TIMESTAMP,
  deleted_at TIMESTAMP,
  CONSTRAINT chk_traveler_type
    CHECK (traveler_type IN ('pellegrino', 'enogastronomo', 'famiglia')),
  CONSTRAINT chk_rating_value
    CHECK (rating_value IS NULL OR (rating_value >= 1.0 AND rating_value <= 5.0)),
  CONSTRAINT chk_moderation_status
    CHECK (moderation_status IN ('pending', 'approved', 'rejected', 'hidden'))
);

CREATE TABLE testimonial_verifications (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  testimonial_id BIGINT NOT NULL REFERENCES traveler_testimonials(id) ON DELETE CASCADE,
  verification_status VARCHAR(20) NOT NULL,
  verification_method VARCHAR(40) NOT NULL,
  captured_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  geofence_radius_m INTEGER,
  distance_from_target_m DECIMAL(8,2),
  device_accuracy_m DECIMAL(8,2),
  captured_latitude DECIMAL(9,6),
  captured_longitude DECIMAL(9,6),
  ip_country_code CHAR(2),
  user_agent_hash CHAR(64),
  evidence_hash CHAR(64),
  notes VARCHAR(255),
  CONSTRAINT chk_verification_status
    CHECK (verification_status IN ('verified', 'not_verified', 'manual_review')),
  CONSTRAINT chk_verification_method
    CHECK (verification_method IN ('gps_geofence', 'photo_exif', 'qr_checkpoint', 'manual'))
);

CREATE INDEX idx_testimonials_target_status
  ON traveler_testimonials (review_target_id, moderation_status, published_at);

CREATE INDEX idx_testimonials_verified
  ON traveler_testimonials (is_verified, traveler_type, visit_date);

CREATE INDEX idx_verifications_testimonial
  ON testimonial_verifications (testimonial_id, verification_status);
```

### Campi minimi da non togliere

- `public_name`
- `visit_date`
- `traveler_type`
- `is_verified`
- `review_body`
- `rating_value`
- `moderation_status`
- `consent_publication`
- `consent_schema_markup`

### Logica di verifica consigliata

- Se l'utente accetta la geolocalizzazione, salva una sola lettura posizione al submit.
- Imposta `is_verified = true` se:
  - il punto cade dentro una geofence utile, per esempio `<= 300 m` dal POI o `<= 800 m` dal centro storico;
  - `device_accuracy_m <= 100`;
  - la testimonianza viene inviata entro `72 ore` dalla `visit_date`.
- Salva coordinate e accuracy solo in `testimonial_verifications`.
- Nel frontend pubblico mostra solo il badge: `Visita verificata`.
- Se l'utente nega la geolocalizzazione, accetta comunque il contenuto ma lascia `is_verified = false`.

## 2. JSON-LD per Recensioni

### Strategia corretta

Usa due modalita`:

1. **Semantic mode**
   genera `Review` per arricchire il knowledge layer del portale.
2. **Google rich result mode**
   genera anche `AggregateRating` solo per target supportati e non self-serving.

### Esempio dati in input

```js
const target = {
  name: "Cantina Leonardi",
  url: "https://www.ilovemontefiascone.com/cantine/cantina-leonardi",
  schemaType: "LocalBusiness",
  isSelfServing: false
};

const testimonials = [
  {
    id: 101,
    public_name: "Paolo R.",
    visit_date: "2026-05-18",
    traveler_type: "pellegrino",
    review_body: "Sosta utile dopo la tappa. Degustazione semplice e personale disponibile.",
    rating_value: 4.0,
    is_verified: true,
    moderation_status: "approved",
    published_at: "2026-05-19T09:22:00+02:00",
    consent_schema_markup: true
  }
];
```

### Template JavaScript

```js
const GOOGLE_REVIEW_TYPES = new Set([
  "Book",
  "Course",
  "CreativeWorkSeason",
  "CreativeWorkSeries",
  "Episode",
  "Event",
  "Game",
  "LocalBusiness",
  "MediaObject",
  "Movie",
  "MusicPlaylist",
  "MusicRecording",
  "Organization",
  "Product",
  "Recipe",
  "SoftwareApplication"
]);

function isGoogleReviewEligible(target) {
  if (!GOOGLE_REVIEW_TYPES.has(target.schemaType)) {
    return false;
  }

  if (
    (target.schemaType === "LocalBusiness" || target.schemaType === "Organization") &&
    target.isSelfServing
  ) {
    return false;
  }

  return true;
}

function normalizeReviews(testimonials) {
  return testimonials
    .filter((item) => (
      item.moderation_status === "approved" &&
      item.consent_schema_markup === true &&
      item.review_body &&
      typeof item.rating_value === "number"
    ))
    .map((item) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": item.public_name
      },
      "datePublished": item.published_at ? item.published_at.slice(0, 10) : item.visit_date,
      "reviewBody": item.review_body,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": Number(item.rating_value.toFixed(1)),
        "bestRating": 5,
        "worstRating": 1
      },
      "positiveNotes": item.is_verified ? "Visita verificata tramite geolocalizzazione." : undefined
    }));
}

function buildReviewStructuredData(target, testimonials) {
  const reviews = normalizeReviews(testimonials);

  if (reviews.length === 0) {
    return null;
  }

  const base = {
    "@context": "https://schema.org",
    "@type": target.schemaType,
    "name": target.name,
    "url": target.url,
    "review": reviews
  };

  if (!isGoogleReviewEligible(target)) {
    return base;
  }

  const ratingValues = reviews.map((review) => review.reviewRating.ratingValue);
  const sum = ratingValues.reduce((acc, value) => acc + value, 0);
  const average = sum / ratingValues.length;

  return {
    ...base,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": Number(average.toFixed(1)),
      "bestRating": 5,
      "worstRating": 1,
      "ratingCount": ratingValues.length,
      "reviewCount": ratingValues.length
    }
  };
}

function injectJsonLd(data, scriptId = "traveler-reviews-jsonld") {
  if (!data) return;

  const existing = document.getElementById(scriptId);
  if (existing) existing.remove();

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = scriptId;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

const jsonLd = buildReviewStructuredData(target, testimonials);
injectJsonLd(jsonLd);
```

### Regole SEO operative

- Il contenuto marcato in JSON-LD deve essere visibile nella pagina.
- Non marcare recensioni non approvate.
- Non inventare rating mancanti.
- Non usare `AggregateRating` sulla home del portale o sulla pagina "Chi siamo".
- Se la pagina e` una scheda di `Cantina`, `Ristorante` o `B&B` recensito dal portale, il markup puo` essere sensato.
- Se la pagina e` "Montefiascone" o "Il Diario dei Viaggiatori", usa il markup soprattutto come layer semantico, non come promessa di stelline.

## 3. UX Copywriting per il Form

### Hero del form

**Titolo**

Timbra il tuo passaporto del viaggiatore digitale

**Sottotitolo**

Hai camminato, assaggiato, visitato. Lascia una traccia utile per chi arriva dopo di te.

### Microcopy per utenti in cammino

**Blocco fiducia**

Compilazione in meno di 60 secondi. Da telefono. Anche a fine tappa.

**Blocco geolocalizzazione**

Attiva la posizione per ottenere il badge `Visita verificata`. Salviamo l'esito del controllo, non il tuo percorso completo.

**Blocco motivazionale per pellegrini**

Sei arrivato fin qui. Timbra anche il tuo passaggio digitale sulla Via Francigena.

### Campi del form

**Nome**

Come vuoi comparire pubblicamente?

Placeholder:

Mario, Anna B., Camminatore di Siena

**Data visita**

Quando sei passato da Montefiascone?

Helper:

Se sei in cammino, scegli la data della tua tappa.

**Tipo di viaggiatore**

Chi sei oggi?

Opzioni:

- Pellegrino
- Enogastronomo
- Famiglia

**Valutazione**

Quanto e` stata utile o memorabile la tua esperienza?

Helper:

Da 1 a 5. Inserisci il voto solo se vuoi lasciare una recensione con stelle.

**Testimonianza**

Racconta un dettaglio reale della tua visita.

Placeholder:

Dove ti sei fermato? Cosa ti e` rimasto impresso? Cosa consiglieresti a chi arriva domani?

**Consenso pubblicazione**

Autorizzo la pubblicazione della mia testimonianza sul portale.

**Consenso markup**

Autorizzo l'uso anonimo dei miei dati recensione per markup strutturato e statistiche aggregate.

### CTA

**CTA primaria**

Timbra la mia visita

**CTA alternativa se geolocalizzazione non concessa**

Invia senza verifica posizione

### Stati del form

**Loading**

Stiamo registrando il tuo timbro digitale...

**Successo verificato**

Timbro registrato. La tua visita risulta verificata.

**Successo non verificato**

Timbro registrato. Pubblicheremo la tua testimonianza dopo controllo editoriale.

**Errore leggero**

La rete e` instabile. Riprova tra pochi secondi senza perdere il testo scritto.

## Pattern UX consigliato

- Mobile first, una colonna, campi grandi.
- Progress bar in 3 step: `Chi sei`, `Quando sei passato`, `Racconta`.
- Autofill della data di oggi.
- Traveler type con pulsanti grandi, non select.
- Geolocalizzazione richiesta solo dopo che l'utente ha gia` scritto il testo.
- Salvataggio bozza locale se cade la connessione.

## Raccomandazione finale

Per `E-E-A-T`, il Diario dei Viaggiatori funziona meglio se unisci:

- badge `Visita verificata`
- data visita visibile
- tipo di viaggiatore visibile
- testimonianza testuale reale
- moderazione umana
- pagina profilo o archivio autore leggero per chi invia piu` testimonianze

Per le stelline Google, concentra il markup review su pagine di singole strutture o POI recensiti dal portale, non sulla destinazione Montefiascone in generale.
