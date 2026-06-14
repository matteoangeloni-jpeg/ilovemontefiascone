CREATE TABLE categories (
    category_code VARCHAR(50) PRIMARY KEY,
    category_name VARCHAR(120) NOT NULL,
    parent_category_code VARCHAR(50),
    description VARCHAR(500),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    CONSTRAINT fk_categories_parent
        FOREIGN KEY (parent_category_code)
        REFERENCES categories (category_code)
);

CREATE TABLE places (
    place_code VARCHAR(64) PRIMARY KEY,
    slug VARCHAR(160) NOT NULL UNIQUE,
    name VARCHAR(200) NOT NULL,
    primary_category_code VARCHAR(50) NOT NULL,
    short_description VARCHAR(320),
    long_description VARCHAR(4000),
    street_address VARCHAR(255),
    postal_code VARCHAR(20),
    locality VARCHAR(120) NOT NULL DEFAULT 'Montefiascone',
    province_code VARCHAR(10) NOT NULL DEFAULT 'VT',
    region_name VARCHAR(120) NOT NULL DEFAULT 'Lazio',
    country_code CHAR(2) NOT NULL DEFAULT 'IT',
    latitude DECIMAL(9,6) NOT NULL,
    longitude DECIMAL(9,6) NOT NULL,
    phone VARCHAR(40),
    email VARCHAR(160),
    website_url VARCHAR(500),
    booking_url VARCHAR(500),
    price_tier VARCHAR(20),
    average_price_min_eur DECIMAL(8,2),
    average_price_max_eur DECIMAL(8,2),
    rooms_count INTEGER,
    seats_count INTEGER,
    checkin_time TIME,
    checkout_time TIME,
    offers_breakfast_boolean BOOLEAN NOT NULL DEFAULT FALSE,
    offers_lunch_boolean BOOLEAN NOT NULL DEFAULT FALSE,
    offers_dinner_boolean BOOLEAN NOT NULL DEFAULT FALSE,
    distanza_dal_lago_km DECIMAL(6,2),
    distanza_dal_centro_km DECIMAL(6,2),
    distanza_dalla_francigena_km DECIMAL(6,2),
    vicinanza_francigena_boolean BOOLEAN NOT NULL DEFAULT FALSE,
    offre_degustazione_est_est_est_boolean BOOLEAN NOT NULL DEFAULT FALSE,
    vende_prodotti_locali_boolean BOOLEAN NOT NULL DEFAULT FALSE,
    reservation_required_boolean BOOLEAN NOT NULL DEFAULT FALSE,
    pet_friendly_boolean BOOLEAN NOT NULL DEFAULT FALSE,
    parking_available_boolean BOOLEAN NOT NULL DEFAULT FALSE,
    accessible_mobility_boolean BOOLEAN NOT NULL DEFAULT FALSE,
    lake_view_boolean BOOLEAN NOT NULL DEFAULT FALSE,
    family_friendly_boolean BOOLEAN NOT NULL DEFAULT FALSE,
    status VARCHAR(20) NOT NULL DEFAULT 'active',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_places_primary_category
        FOREIGN KEY (primary_category_code)
        REFERENCES categories (category_code),
    CONSTRAINT chk_places_latitude
        CHECK (latitude BETWEEN -90 AND 90),
    CONSTRAINT chk_places_longitude
        CHECK (longitude BETWEEN -180 AND 180),
    CONSTRAINT chk_places_price_range
        CHECK (
            average_price_min_eur IS NULL
            OR average_price_max_eur IS NULL
            OR average_price_min_eur <= average_price_max_eur
        ),
    CONSTRAINT chk_places_distanza_lago
        CHECK (distanza_dal_lago_km IS NULL OR distanza_dal_lago_km >= 0),
    CONSTRAINT chk_places_distanza_centro
        CHECK (distanza_dal_centro_km IS NULL OR distanza_dal_centro_km >= 0),
    CONSTRAINT chk_places_distanza_francigena
        CHECK (
            distanza_dalla_francigena_km IS NULL
            OR distanza_dalla_francigena_km >= 0
        ),
    CONSTRAINT chk_places_status
        CHECK (status IN ('active', 'inactive', 'seasonal', 'draft'))
);

CREATE TABLE place_categories (
    place_code VARCHAR(64) NOT NULL,
    category_code VARCHAR(50) NOT NULL,
    is_primary BOOLEAN NOT NULL DEFAULT FALSE,
    notes VARCHAR(250),
    PRIMARY KEY (place_code, category_code),
    CONSTRAINT fk_place_categories_place
        FOREIGN KEY (place_code)
        REFERENCES places (place_code),
    CONSTRAINT fk_place_categories_category
        FOREIGN KEY (category_code)
        REFERENCES categories (category_code)
);

CREATE TABLE amenities (
    amenity_code VARCHAR(50) PRIMARY KEY,
    amenity_name VARCHAR(120) NOT NULL,
    amenity_group VARCHAR(80),
    description VARCHAR(500),
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE place_amenities (
    place_code VARCHAR(64) NOT NULL,
    amenity_code VARCHAR(50) NOT NULL,
    amenity_value_text VARCHAR(250),
    PRIMARY KEY (place_code, amenity_code),
    CONSTRAINT fk_place_amenities_place
        FOREIGN KEY (place_code)
        REFERENCES places (place_code),
    CONSTRAINT fk_place_amenities_amenity
        FOREIGN KEY (amenity_code)
        REFERENCES amenities (amenity_code)
);

CREATE TABLE place_opening_hours (
    place_code VARCHAR(64) NOT NULL,
    service_label VARCHAR(50) NOT NULL DEFAULT 'general',
    day_of_week SMALLINT NOT NULL,
    opens_at TIME,
    closes_at TIME,
    is_closed BOOLEAN NOT NULL DEFAULT FALSE,
    notes VARCHAR(250),
    PRIMARY KEY (place_code, service_label, day_of_week),
    CONSTRAINT fk_place_opening_hours_place
        FOREIGN KEY (place_code)
        REFERENCES places (place_code),
    CONSTRAINT chk_place_opening_hours_day
        CHECK (day_of_week BETWEEN 1 AND 7),
    CONSTRAINT chk_place_opening_hours_times
        CHECK (
            is_closed = TRUE
            OR opens_at IS NOT NULL
            OR closes_at IS NOT NULL
        )
);

CREATE TABLE reviews (
    review_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    place_code VARCHAR(64) NOT NULL,
    source_system VARCHAR(50) NOT NULL,
    external_review_id VARCHAR(120),
    reviewer_name VARCHAR(160),
    rating DECIMAL(2,1) NOT NULL,
    review_title VARCHAR(200),
    review_text VARCHAR(4000),
    review_date DATE,
    language_code VARCHAR(10) DEFAULT 'it',
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_reviews_place
        FOREIGN KEY (place_code)
        REFERENCES places (place_code),
    CONSTRAINT chk_reviews_rating
        CHECK (rating BETWEEN 0 AND 5)
);

CREATE INDEX idx_places_primary_category
    ON places (primary_category_code);

CREATE INDEX idx_places_locality
    ON places (locality);

CREATE INDEX idx_places_vicinanza_francigena
    ON places (vicinanza_francigena_boolean);

CREATE INDEX idx_places_offre_degustazione
    ON places (offre_degustazione_est_est_est_boolean);

CREATE INDEX idx_places_geo
    ON places (latitude, longitude);

CREATE INDEX idx_place_categories_category
    ON place_categories (category_code);

CREATE INDEX idx_place_amenities_amenity
    ON place_amenities (amenity_code);

CREATE INDEX idx_reviews_place
    ON reviews (place_code);

INSERT INTO categories (category_code, category_name, parent_category_code, description)
VALUES
    ('accommodation', 'Accommodation', NULL, 'Macro-categoria delle strutture ricettive'),
    ('bnb', 'B&B', 'accommodation', 'Bed and breakfast'),
    ('agriturismo', 'Agriturismo', 'accommodation', 'Struttura ricettiva rurale'),
    ('restaurant', 'Restaurant', NULL, 'Ristorante o trattoria'),
    ('winery', 'Winery', NULL, 'Cantina o produttore vinicolo');

INSERT INTO amenities (amenity_code, amenity_name, amenity_group, description)
VALUES
    ('parking', 'Parcheggio', 'mobility', 'Parcheggio disponibile'),
    ('wifi', 'Wi-Fi', 'connectivity', 'Connessione internet per ospiti'),
    ('pet-friendly', 'Pet Friendly', 'hospitality', 'Animali ammessi'),
    ('lake-view', 'Vista lago', 'view', 'Vista sul Lago di Bolsena'),
    ('breakfast-included', 'Colazione inclusa', 'food', 'Colazione compresa'),
    ('wine-tasting', 'Degustazione vini', 'wine', 'Degustazioni prenotabili'),
    ('outdoor-seating', 'Tavoli esterni', 'food', 'Spazio esterno per mangiare o bere'),
    ('ev-charging', 'Ricarica EV', 'mobility', 'Colonnina o presa per auto elettrica');
