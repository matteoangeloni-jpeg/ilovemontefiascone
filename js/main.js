const APP_COPY = {
  it: {
    loading: "Aggiorno il meteo per suggerire il contenuto più rilevante.",
    weatherFallback: "Dati non disponibili",
    tempFallback: "--",
    summary: (weatherText) =>
      `Meteo attuale: ${weatherText}. La homepage riorganizza le priorità in base allo scenario attivo.`,
    scenarios: {
      walk: {
        label: "Scenario A",
        priority: "Via Francigena e camminatori",
        title: "Mattina soleggiata: priorità ai cammini",
        copy: "Con sole tra le 07:00 e le 11:00 conviene spingere la Tappa 40 e i contenuti per chi cammina."
      },
      sunset: {
        label: "Scenario B",
        priority: "Tramonto e aperitivo",
        title: "Fascia serale soleggiata: focus su Rocca e vino",
        copy: "Tra le 18:00 e le 21:00 la homepage privilegia panorami, spot fotografici e degustazioni serali."
      },
      indoor: {
        label: "Scenario C",
        priority: "Esperienze al coperto",
        title: "Pioggia in corso: meglio cultura e degustazioni indoor",
        copy: "Con meteo instabile salgono in evidenza Cupola, San Flaviano, interni e contenuti legati alle degustazioni."
      },
      weekend: {
        label: "Scenario D",
        priority: "Weekend allungato",
        title: "Weekend attivo: Montefiascone come hub della Tuscia",
        copy: "Tra venerdì e domenica la home rafforza le spoke utili a soggiorni di più notti e visite nei dintorni."
      },
      heritage: {
        label: "Scenario base",
        priority: "Hub culturale",
        title: "Percorso base: panorami, storia e navigazione spoke",
        copy: "In condizioni neutre la homepage mantiene in evidenza i cluster principali del portale."
      }
    },
    weatherMap: {
      0: "Sereno",
      1: "Poco nuvoloso",
      2: "Parzialmente nuvoloso",
      3: "Coperto",
      45: "Nebbia",
      48: "Brina e nebbia",
      51: "Pioviggine debole",
      53: "Pioviggine",
      55: "Pioviggine intensa",
      56: "Pioviggine gelata",
      57: "Pioviggine gelata intensa",
      61: "Pioggia debole",
      63: "Pioggia",
      65: "Pioggia intensa",
      66: "Pioggia gelata",
      67: "Pioggia gelata intensa",
      71: "Neve debole",
      73: "Neve",
      75: "Neve intensa",
      80: "Rovesci deboli",
      81: "Rovesci",
      82: "Rovesci intensi",
      95: "Temporale",
      96: "Temporale con grandine",
      99: "Temporale forte con grandine"
    }
  },
  en: {
    loading: "Updating the weather to suggest the most relevant content.",
    weatherFallback: "Data unavailable",
    tempFallback: "--",
    summary: (weatherText) =>
      `Current weather: ${weatherText}. The homepage reprioritises content according to the active scenario.`,
    scenarios: {
      walk: {
        label: "Scenario A",
        priority: "Via Francigena and walkers",
        title: "Sunny morning: walking routes take priority",
        copy: "With sun between 07:00 and 11:00, the homepage should highlight Stage 40 and content for walkers."
      },
      sunset: {
        label: "Scenario B",
        priority: "Sunset and aperitivo",
        title: "Sunny evening window: focus on Rocca and wine",
        copy: "Between 18:00 and 21:00, the homepage gives more space to viewpoints, photography spots and wine tasting."
      },
      indoor: {
        label: "Scenario C",
        priority: "Indoor experiences",
        title: "Rainy weather: culture and tastings indoors",
        copy: "With unstable weather, the page prioritises the dome, San Flaviano, indoor heritage and covered tastings."
      },
      weekend: {
        label: "Scenario D",
        priority: "Long weekend",
        title: "Weekend mode: Montefiascone as a Tuscia hub",
        copy: "From Friday to Sunday, the homepage reinforces pages useful for multi-night stays and nearby day trips."
      },
      heritage: {
        label: "Base scenario",
        priority: "Cultural hub",
        title: "Default path: views, heritage and spoke navigation",
        copy: "In neutral conditions, the homepage keeps the main portal clusters in evidence."
      }
    },
    weatherMap: {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      45: "Fog",
      48: "Rime fog",
      51: "Light drizzle",
      53: "Drizzle",
      55: "Heavy drizzle",
      56: "Freezing drizzle",
      57: "Heavy freezing drizzle",
      61: "Light rain",
      63: "Rain",
      65: "Heavy rain",
      66: "Freezing rain",
      67: "Heavy freezing rain",
      71: "Light snow",
      73: "Snow",
      75: "Heavy snow",
      80: "Light showers",
      81: "Showers",
      82: "Heavy showers",
      95: "Thunderstorm",
      96: "Thunderstorm with hail",
      99: "Severe thunderstorm with hail"
    }
  },
  de: {
    loading: "Das Wetter wird aktualisiert, um die relevantesten Inhalte zu empfehlen.",
    weatherFallback: "Keine Daten verfuegbar",
    tempFallback: "--",
    summary: (weatherText) =>
      `Aktuelles Wetter: ${weatherText}. Die Startseite priorisiert Inhalte nach dem aktiven Szenario neu.`,
    scenarios: {
      walk: {
        label: "Szenario A",
        priority: "Via Francigena und Wanderer",
        title: "Sonniger Morgen: Wege und Etappe 40 zuerst",
        copy: "Bei Sonne zwischen 07:00 und 11:00 werden Etappe 40 und Inhalte fuer Wanderer hervorgehoben."
      },
      sunset: {
        label: "Szenario B",
        priority: "Sonnenuntergang und Aperitivo",
        title: "Sonniger Abend: Fokus auf Rocca und Wein",
        copy: "Zwischen 18:00 und 21:00 rueckt die Startseite Aussichtspunkte, Fotospots und Verkostungen nach vorn."
      },
      indoor: {
        label: "Szenario C",
        priority: "Innenraeume",
        title: "Regenwetter: Kultur und Verkostungen im Innenraum",
        copy: "Bei instabilem Wetter priorisiert die Seite Kuppel, San Flaviano, Innenraeume und ueberdachte Degustationen."
      },
      weekend: {
        label: "Szenario D",
        priority: "Langes Wochenende",
        title: "Wochenendmodus: Montefiascone als Tuscia-Hub",
        copy: "Von Freitag bis Sonntag werden Inhalte fuer mehrtaegige Aufenthalte und Ausfluege in die Umgebung betont."
      },
      heritage: {
        label: "Basisszenario",
        priority: "Kultur-Hub",
        title: "Standardpfad: Aussicht, Geschichte und Spoke-Navigation",
        copy: "Unter neutralen Bedingungen bleiben die wichtigsten Content-Cluster des Portals im Vordergrund."
      }
    },
    weatherMap: {
      0: "Klar",
      1: "Ueberwiegend klar",
      2: "Teilweise bewoelkt",
      3: "Bedeckt",
      45: "Nebel",
      48: "Reifnebel",
      51: "Leichter Nieselregen",
      53: "Nieselregen",
      55: "Starker Nieselregen",
      56: "Gefrierender Nieselregen",
      57: "Starker gefrierender Nieselregen",
      61: "Leichter Regen",
      63: "Regen",
      65: "Starker Regen",
      66: "Gefrierender Regen",
      67: "Starker gefrierender Regen",
      71: "Leichter Schnee",
      73: "Schnee",
      75: "Starker Schnee",
      80: "Leichte Schauer",
      81: "Schauer",
      82: "Starke Schauer",
      95: "Gewitter",
      96: "Gewitter mit Hagel",
      99: "Starkes Gewitter mit Hagel"
    }
  }
};

const WEATHER_CACHE_KEY = "mf_weather_v2";
const WEATHER_ENDPOINT =
  "https://api.open-meteo.com/v1/forecast?latitude=42.53&longitude=12.03&current=temperature_2m,weather_code&timezone=auto";

const RAIN_CODES = new Set([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99]);
const SUNNY_CODES = new Set([0, 1, 2]);
const MOBILE_NAV_QUERY = "(max-width: 63.99rem)";

const NAV_CONFIG = {
  it: {
    homeLabel: "Home",
    clusters: [
      {
        key: "visit",
        label: "Visita",
        activePatterns: [
          "/cosa-vedere",
          "/rocca-dei-papi",
          "/cattedrale",
          "/basilica",
          "/mappa",
          "/via-francigena",
          "/itinerari",
          "/galleria",
          "/montefiascone-in-",
          "/monumenti-"
        ],
        items: [
          { href: "/cosa-vedere", label: "Cosa vedere", description: "Luoghi chiave nel borgo" },
          { href: "/cosa-vedere-montefiascone-guida-completa", label: "Guida completa", description: "Rocca, cattedrale, centro storico" },
          { href: "/mappa", label: "Mappa", description: "Parcheggi, punti chiave, dislivelli" },
          { href: "/itinerari-tematici-montefiascone", label: "Itinerari", description: "Percorsi per temi e tempo disponibile" },
          { href: "/via-francigena-bolsena-montefiascone", label: "Via Francigena", description: "Tappa e lettura del cammino" },
          { href: "/galleria", label: "Galleria", description: "Immagini e crediti fotografici" }
        ]
      },
      {
        key: "events",
        label: "Eventi",
        activePatterns: [
          "/eventi",
          "/atb-festival",
          "/est-film-festival",
          "/cronoscalata",
          "/festa-santa-margherita",
          "/concerto-banda",
          "/panorami-festival",
          "/festival-ecologia",
          "/est-lake-festival",
          "/anno-domini-1074"
        ],
        items: [
          { href: "/eventi", label: "Eventi a Montefiascone", description: "Hub eventi e orientamento" },
          { href: "/eventi-estate-montefiascone-2026", label: "Estate 2026", description: "Cartellone stagionale confermato" },
          { href: "/eventi-tradizioni-fiera-del-vino-montefiascone", label: "Fiera del Vino", description: "Tradizioni e contesto storico" },
          { href: "/atb-festival-montefiascone", label: "ATB Festival", description: "Musica live e estate falisca" },
          { href: "/est-film-festival-montefiascone", label: "Est Film Festival", description: "Cinema e incontri nel borgo" }
        ]
      },
      {
        key: "lake",
        label: "Lago e dintorni",
        activePatterns: [
          "/lago-di-bolsena",
          "/bolsena-",
          "/marta-",
          "/capodimonte-",
          "/gradoli-",
          "/grotte-di-castro",
          "/san-lorenzo-nuovo",
          "/valentano-",
          "/spiagge-",
          "/borghi-lago-",
          "/borghi-piu-belli-lago-",
          "/dove-vedere-il-tramonto-sul-lago",
          "/pesce-di-lago"
        ],
        items: [
          { href: "/lago-di-bolsena", label: "Lago di Bolsena", description: "Hub generale del lago" },
          { href: "/borghi-lago-di-bolsena", label: "Borghi del lago", description: "Paesi e soste attorno alla riva" },
          { href: "/montefiascone-in-2-giorni", label: "Montefiascone in 2 giorni", description: "Base per un weekend" },
          { href: "/cosa-vedere-dintorni-montefiascone-itinerario", label: "Itinerario dintorni", description: "Tuscia e gite in giornata" }
        ]
      },
      {
        key: "wine",
        label: "Vino e sapori",
        activePatterns: [
          "/vino",
          "/est-est-est",
          "/cantine-",
          "/degustazione-",
          "/cucina-tipica",
          "/prodotti-tipici",
          "/esperienze-enogastronomiche",
          "/dove-mangiare"
        ],
        items: [
          { href: "/est-est-est-montefiascone-vino-doc", label: "Est! Est!! Est!!!", description: "Il vino simbolo di Montefiascone" },
          { href: "/vino", label: "Hub vino", description: "Orientamento tra pagine e cantine" },
          { href: "/degustazione-vino-montefiascone-come-funziona", label: "Degustazioni", description: "Come funziona una visita" },
          { href: "/cantine-montefiascone-degustazione-est-est-est", label: "Cantine", description: "Dove iniziare con le visite" },
          { href: "/cucina-tipica-montefiascone", label: "Cucina tipica", description: "Piatti e abbinamenti locali" },
          { href: "/prodotti-tipici-montefiascone-tuscia", label: "Prodotti locali", description: "Sapori della Tuscia" }
        ]
      },
      {
        key: "practical",
        label: "Info pratiche",
        activePatterns: [
          "/come-arrivare",
          "/dove-mangiare",
          "/dove-dormire",
          "/dormire-",
          "/parcheggi",
          "/progetto-editoriale",
          "/privacy",
          "/cookie",
          "/informazioni-turistiche"
        ],
        items: [
          { href: "/come-arrivare-a-montefiascone", label: "Come arrivare", description: "Auto, treno e collegamenti" },
          { href: "/dove-mangiare-a-montefiascone", label: "Dove mangiare", description: "Orientamento tra centro e cucina" },
          { href: "/dove-dormire-a-montefiascone", label: "Dove dormire", description: "Scegliere la base giusta" },
          { href: "/progetto-editoriale", label: "Progetto editoriale", description: "Trasparenza e criteri di aggiornamento" }
        ]
      }
    ]
  },
  en: {
    homeLabel: "Home",
    clusters: [
      {
        key: "visit",
        label: "Visit",
        activePatterns: [
          "/things-to-see",
          "/what-to-see",
          "/travel-guide",
          "/map-",
          "/via-francigena",
          "/thematic-itineraries",
          "/gallery-",
          "/montefiascone-in-",
          "/rocca-",
          "/cathedral-",
          "/basilica-"
        ],
        items: [
          { href: "/en/things-to-see-montefiascone", label: "What to see", description: "Highlights in town" },
          { href: "/en/montefiascone-travel-guide", label: "Travel guide", description: "Old town, landmarks, planning" },
          { href: "/en/map-montefiascone", label: "Map", description: "Key points, parking, slopes" },
          { href: "/en/thematic-itineraries-montefiascone", label: "Itineraries", description: "Routes by theme and pace" },
          { href: "/en/via-francigena-bolsena-montefiascone", label: "Via Francigena", description: "Walking context and stage" },
          { href: "/en/gallery-montefiascone", label: "Gallery", description: "Photo credits and views" }
        ]
      },
      {
        key: "events",
        label: "Events",
        activePatterns: [
          "/events-",
          "/summer-events",
          "/wine-fair",
          "/atb-festival",
          "/est-film-festival",
          "/hill-climb",
          "/banda-rb-revue",
          "/panorami-festival",
          "/integral-ecology",
          "/est-lake-festival",
          "/santa-margherita-feast",
          "/anno-domini-1074"
        ],
        items: [
          { href: "/en/events-montefiascone", label: "Events in Montefiascone", description: "Main events hub" },
          { href: "/en/montefiascone-summer-events-2026", label: "Summer 2026", description: "Confirmed seasonal calendar" },
          { href: "/en/montefiascone-wine-fair-traditions", label: "Wine Fair", description: "Traditions and summer context" },
          { href: "/en/atb-festival-montefiascone", label: "ATB Festival", description: "Live music and summer nights" },
          { href: "/en/est-film-festival-montefiascone", label: "Est Film Festival", description: "Cinema and meetings" }
        ]
      },
      {
        key: "lake",
        label: "Lake and nearby",
        activePatterns: [
          "/lake-bolsena",
          "/bolsena-",
          "/marta-",
          "/capodimonte-",
          "/gradoli-",
          "/grotte-di-castro",
          "/san-lorenzo-nuovo",
          "/valentano-",
          "/best-villages",
          "/where-to-watch-sunset",
          "/lake-fish"
        ],
        items: [
          { href: "/en/lake-bolsena", label: "Lake Bolsena", description: "Main lake hub" },
          { href: "/en/lake-bolsena-villages", label: "Lake villages", description: "Towns around the shore" },
          { href: "/en/montefiascone-in-two-days", label: "Montefiascone in 2 days", description: "A practical weekend base" },
          { href: "/en/things-to-do-near-montefiascone", label: "Nearby day trips", description: "Tuscia and easy detours" }
        ]
      },
      {
        key: "wine",
        label: "Wine and food",
        activePatterns: [
          "/wine",
          "/est-est-est",
          "/tasting",
          "/wineries",
          "/typical-food",
          "/local-products",
          "/food-recipes",
          "/food-wine-experiences",
          "/where-to-eat"
        ],
        items: [
          { href: "/en/est-est-est-montefiascone-doc-wine", label: "Est! Est!! Est!!!", description: "The local DOC wine" },
          { href: "/en/montefiascone-wine-guide", label: "Wine guide", description: "Overview of wine pages" },
          { href: "/en/wine-tasting-montefiascone-est-est-est", label: "Tastings", description: "How wine visits work" },
          { href: "/en/how-wine-tasting-works-montefiascone", label: "How tastings work", description: "Planning before booking" },
          { href: "/en/typical-food-montefiascone", label: "Local food", description: "Typical dishes and pairings" },
          { href: "/en/local-products-montefiascone-tuscia", label: "Local products", description: "Tuscia flavours" }
        ]
      },
      {
        key: "practical",
        label: "Practical info",
        activePatterns: [
          "/how-to-get",
          "/where-to-eat",
          "/where-to-stay",
          "/staying-",
          "/parking-",
          "/editorial-project",
          "/privacy",
          "/cookie",
          "/tourist-information"
        ],
        items: [
          { href: "/en/how-to-get-to-montefiascone", label: "How to get there", description: "Travel basics and routes" },
          { href: "/en/where-to-eat-in-montefiascone", label: "Where to eat", description: "Food planning in town" },
          { href: "/en/where-to-stay-in-montefiascone", label: "Where to stay", description: "Choose the right base" },
          { href: "/en/editorial-project-montefiascone", label: "Editorial project", description: "Transparency and method" }
        ]
      }
    ]
  },
  de: {
    homeLabel: "Start",
    clusters: [
      {
        key: "visit",
        label: "Besuchen",
        activePatterns: [
          "/was-sehen",
          "/sehenswuerdigkeiten",
          "/reisefuehrer",
          "/karte-",
          "/via-francigena",
          "/thematische-routen",
          "/galerie-",
          "/montefiascone-in-",
          "/rocca-",
          "/kathedrale-",
          "/basilika-"
        ],
        items: [
          { href: "/de/was-sehen-montefiascone", label: "Sehenswürdigkeiten", description: "Die wichtigsten Orte im Borgo" },
          { href: "/de/reisefuehrer-montefiascone", label: "Reiseführer", description: "Altstadt, Orientierung, Planung" },
          { href: "/de/karte-montefiascone", label: "Karte", description: "Zugänge, Höhenlage, Übersicht" },
          { href: "/de/thematische-routen-montefiascone", label: "Itinerarien", description: "Routen nach Thema und Zeit" },
          { href: "/de/via-francigena-bolsena-montefiascone", label: "Via Francigena", description: "Etappe und Pilgerkontext" },
          { href: "/de/galerie-montefiascone", label: "Galerie", description: "Bilder und Fotocredits" }
        ]
      },
      {
        key: "events",
        label: "Events",
        activePatterns: [
          "/veranstaltungen-",
          "/sommerveranstaltungen",
          "/weinfest-",
          "/atb-festival",
          "/est-film-festival",
          "/cronoscalata",
          "/banda-rb-revue",
          "/panorami-festival",
          "/festival-integrale-oekologie",
          "/est-lake-festival",
          "/fest-santa-margherita",
          "/anno-domini-1074"
        ],
        items: [
          { href: "/de/veranstaltungen-montefiascone", label: "Events in Montefiascone", description: "Hauptübersicht für Termine" },
          { href: "/de/sommerveranstaltungen-montefiascone-2026", label: "Sommer 2026", description: "Bestätigte saisonale Termine" },
          { href: "/de/weinfest-montefiascone-traditionen", label: "Weinfest", description: "Tradition und Sommersaison" },
          { href: "/de/atb-festival-montefiascone", label: "ATB Festival", description: "Live-Musik und Sommerabende" },
          { href: "/de/est-film-festival-montefiascone", label: "Est Film Festival", description: "Kino und Begegnungen" }
        ]
      },
      {
        key: "lake",
        label: "See & Umgebung",
        activePatterns: [
          "/bolsenasee",
          "/bolsena-",
          "/marta-",
          "/capodimonte-",
          "/gradoli-",
          "/grotte-di-castro",
          "/san-lorenzo-nuovo",
          "/valentano-",
          "/schoenste-orte-am-bolsenasee",
          "/sonnenuntergang-bolsenasee",
          "/fisch-aus-dem-bolsenasee"
        ],
        items: [
          { href: "/de/bolsenasee", label: "Bolsenasee", description: "Hauptseite zum See" },
          { href: "/de/bolsenasee-doerfer", label: "Dörfer am See", description: "Orte und Uferstationen" },
          { href: "/de/montefiascone-in-zwei-tagen", label: "Montefiascone in 2 Tagen", description: "Praktische Wochenendbasis" },
          { href: "/de/ausfluege-rund-um-montefiascone", label: "Ausflüge", description: "Tuscia und Tagesziele" }
        ]
      },
      {
        key: "wine",
        label: "Wein & Küche",
        activePatterns: [
          "/wein",
          "/est-est-est",
          "/weinverkostung",
          "/weingueter",
          "/typische-kueche",
          "/typische-produkte",
          "/kulinarische-erlebnisse",
          "/essen-in-montefiascone"
        ],
        items: [
          { href: "/de/est-est-est-wein-montefiascone", label: "Est! Est!! Est!!!", description: "Der DOC-Wein des Ortes" },
          { href: "/de/montefiascone-wein-guide", label: "Weinführer", description: "Überblick zu Wein und Genuss" },
          { href: "/de/weinverkostung-montefiascone-ablauf", label: "Verkostungen", description: "Ablauf und Planung" },
          { href: "/de/weingueter-montefiascone-verkostung", label: "Weingüter", description: "Besuche und Orientierung" },
          { href: "/de/typische-kueche-montefiascone", label: "Typische Küche", description: "Gerichte und Kombinationen" },
          { href: "/de/typische-produkte-montefiascone-tuscia", label: "Lokale Produkte", description: "Aromen der Tuscia" }
        ]
      },
      {
        key: "practical",
        label: "Infos",
        activePatterns: [
          "/anreise-",
          "/anreise-nach-",
          "/essen-in-montefiascone",
          "/unterkunft-",
          "/uebernachten-",
          "/parken-",
          "/redaktionelles-projekt",
          "/privacy",
          "/cookie",
          "/touristeninformation"
        ],
        items: [
          { href: "/de/anreise-nach-montefiascone", label: "Anreise", description: "Wege und Grundlagen zur Fahrt" },
          { href: "/de/essen-in-montefiascone", label: "Essen", description: "Orientierung für Mahlzeiten" },
          { href: "/de/unterkunft-in-montefiascone", label: "Unterkunft", description: "Die passende Basis wählen" },
          { href: "/de/redaktionelles-projekt-montefiascone", label: "Redaktionelles Projekt", description: "Transparenz und Methode" }
        ]
      }
    ]
  },
  fr: {
    homeLabel: "Accueil",
    clusters: [
      {
        key: "visit",
        label: "Visiter",
        activePatterns: [
          "/que-voir",
          "/carte",
          "/guide",
          "/via-francigena",
          "/montefiascone-en-",
          "/lac-de-bolsena"
        ],
        items: [
          { href: "/fr/que-voir-montefiascone-guide-complet", label: "Que voir", description: "Guide complet du village" },
          { href: "/fr/guide", label: "Guides", description: "Parcours par intention de visite" },
          { href: "/fr/carte", label: "Carte", description: "Repères, dénivelés et points clés" },
          { href: "/fr/lac-de-bolsena-que-voir", label: "Lac de Bolsena", description: "Que voir autour du lac" },
          { href: "/fr/via-francigena-bolsena-montefiascone", label: "Via Francigena", description: "L'étape de Bolsena à Montefiascone" },
          { href: "/fr/montefiascone-en-2-jours", label: "En 2 jours", description: "Base pour un week-end" }
        ]
      },
      {
        key: "events",
        label: "Événements",
        activePatterns: [
          "/evenements",
          "/festival",
          "/fete-",
          "/anno-domini",
          "/giglio",
          "/calendrier",
          "/orchestre"
        ],
        items: [
          { href: "/fr/evenements", label: "Hub des événements", description: "Orientation et repères" },
          { href: "/fr/evenements-dete-a-montefiascone-2026", label: "Été 2026", description: "Programme saisonnier confirmé" },
          { href: "/fr/evenements-traditions-foire-aux-vins-de-montefiascone", label: "Foire aux Vins", description: "Traditions et contexte historique" },
          { href: "/fr/festival-atb-montefiascone", label: "ATB Festival", description: "Musique live au cœur de l'été" },
          { href: "/fr/est-festival-du-film-de-montefiascone", label: "Est Film Festival", description: "Cinéma et rencontres au village" },
          { href: "/fr/calendrier-des-evenements-de-montefiascone", label: "Calendrier", description: "Toutes les dates de l'année" }
        ]
      },
      {
        key: "wine",
        label: "Vin et saveurs",
        activePatterns: [
          "/vin",
          "/est-est-est",
          "/degustation",
          "/cuisine-typique",
          "/produits-typiques",
          "/strada-del-vino",
          "/experiences-gastronomiques"
        ],
        items: [
          { href: "/fr/est-est-est-montefiascone-vino-doc", label: "Est! Est!! Est!!!", description: "Le vin symbole de Montefiascone" },
          { href: "/fr/vin", label: "Hub vin", description: "Orientation entre pages et caves" },
          { href: "/fr/degustation-de-vin-de-montefiascone-comment-ca-marche", label: "Dégustations", description: "Comment fonctionne une visite" },
          { href: "/fr/degustation-de-vignobles-de-montefiascone-est-est-est", label: "Caves", description: "Par où commencer les visites" },
          { href: "/fr/cuisine-typique-de-montefiascone", label: "Cuisine typique", description: "Plats et accords locaux" },
          { href: "/fr/produits-typiques-de-montefiascone-tuscia", label: "Produits locaux", description: "Saveurs de la Tuscia" }
        ]
      }
    ]
  }
};

const CHROME_CONFIG = {
  it: {
    menuLabel: "Menu",
    navAriaLabel: "Navigazione principale",
    langAriaLabel: "Versione del sito",
    footer: {
      introTitle: "I Love Montefiascone",
      introCopy:
        "Guida turistica indipendente su Montefiascone, Lago di Bolsena e Tuscia.",
      introNote:
        "Questo portale non &egrave; collegato al Comune di Montefiascone.",
      sections: [
        {
          title: "Esplora",
          links: [
            { href: "/cosa-vedere-montefiascone-guida-completa", label: "Guida completa" },
            { href: "/eventi", label: "Eventi" },
            { href: "/lago-di-bolsena", label: "Lago di Bolsena" },
            { href: "/vino", label: "Vino e sapori" }
          ]
        },
        {
          title: "Info pratiche",
          links: [
            { href: "/mappa", label: "Mappa" },
            { href: "/come-arrivare-a-montefiascone", label: "Come arrivare" },
            { href: "/dove-dormire-a-montefiascone", label: "Dove dormire" },
            { href: "/progetto-editoriale", label: "Progetto editoriale" }
          ]
        }
      ],
      meta:
        "Verifica sempre programmi, accessi e orari sui canali ufficiali prima della visita."
    }
  },
  en: {
    menuLabel: "Menu",
    navAriaLabel: "Main navigation",
    langAriaLabel: "Site language",
    footer: {
      introTitle: "I Love Montefiascone",
      introCopy:
        "Independent travel guide to Montefiascone, Lake Bolsena and Tuscia.",
      introNote:
        "This portal is not connected to the Municipality of Montefiascone.",
      sections: [
        {
          title: "Explore",
          links: [
            { href: "/en/montefiascone-travel-guide", label: "Travel guide" },
            { href: "/en/events-montefiascone", label: "Events" },
            { href: "/en/lake-bolsena", label: "Lake Bolsena" },
            { href: "/en/montefiascone-wine-guide", label: "Wine and food" }
          ]
        },
        {
          title: "Practical info",
          links: [
            { href: "/en/map-montefiascone", label: "Map" },
            { href: "/en/how-to-get-to-montefiascone", label: "How to get there" },
            { href: "/en/where-to-stay-in-montefiascone", label: "Where to stay" },
            { href: "/en/editorial-project-montefiascone", label: "Editorial project" }
          ]
        }
      ],
      meta:
        "Always verify programmes, access conditions and opening hours on official channels before your visit."
    }
  },
  de: {
    menuLabel: "Men&uuml;",
    navAriaLabel: "Hauptnavigation",
    langAriaLabel: "Sprache der Website",
    footer: {
      introTitle: "I Love Montefiascone",
      introCopy:
        "Unabh&auml;ngiger Reisef&uuml;hrer f&uuml;r Montefiascone, den Bolsenasee und die Tuscia.",
      introNote:
        "Dieses Portal ist nicht mit der Gemeinde Montefiascone verbunden.",
      sections: [
        {
          title: "Entdecken",
          links: [
            { href: "/de/reisefuehrer-montefiascone", label: "Reisef&uuml;hrer" },
            { href: "/de/veranstaltungen-montefiascone", label: "Veranstaltungen" },
            { href: "/de/bolsenasee", label: "Bolsenasee" },
            { href: "/de/montefiascone-wein-guide", label: "Wein und K&uuml;che" }
          ]
        },
        {
          title: "Praktische Infos",
          links: [
            { href: "/de/karte-montefiascone", label: "Karte" },
            { href: "/de/anreise-nach-montefiascone", label: "Anreise" },
            { href: "/de/unterkunft-in-montefiascone", label: "Unterkunft" },
            { href: "/de/redaktionelles-projekt-montefiascone", label: "Redaktionelles Projekt" }
          ]
        }
      ],
      meta:
        "Programme, Zug&auml;nge und &Ouml;ffnungszeiten sollten vor der Reise immer &uuml;ber offizielle Kan&auml;le gepr&uuml;ft werden."
    }
  },
  fr: {
    menuLabel: "Menu",
    navAriaLabel: "Navigation principale",
    langAriaLabel: "Version du site",
    footer: {
      introTitle: "I Love Montefiascone",
      introCopy:
        "Guide de voyage ind&eacute;pendant sur Montefiascone, le lac de Bolsena et la Tuscia.",
      introNote:
        "Ce portail n'est pas affili&eacute; &agrave; la municipalit&eacute; de Montefiascone.",
      sections: [
        {
          title: "D&eacute;couvrir",
          links: [
            { href: "/fr/que-voir-montefiascone-guide-complet", label: "Que voir" },
            { href: "/fr/evenements", label: "&Eacute;v&eacute;nements" },
            { href: "/fr/lac-de-bolsena-que-voir", label: "Lac de Bolsena" },
            { href: "/fr/vin", label: "Vin et saveurs" }
          ]
        },
        {
          title: "Infos pratiques",
          links: [
            { href: "/fr/carte", label: "Carte" },
            { href: "/fr/guide", label: "Guides" },
            { href: "/fr/montefiascone-en-2-jours", label: "En 2 jours" },
            { href: "/fr/projet-editorial", label: "Projet &eacute;ditorial" }
          ]
        }
      ],
      meta:
        "V&eacute;rifiez toujours les programmes, les acc&egrave;s et les horaires sur les canaux officiels avant votre visite."
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  normalizeSiteChrome();
  initNav();
  scheduleContextualWeather();
});

function scheduleContextualWeather() {
  const run = () => {
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(() => initContextualWeather(), { timeout: 2500 });
    } else {
      window.setTimeout(() => initContextualWeather(), 900);
    }
  };

  if (document.readyState === "complete") {
    run();
  } else {
    window.addEventListener("load", run, { once: true });
  }
}

function normalizeSiteChrome() {
  const lang = getDocumentLanguage();
  const chrome = CHROME_CONFIG[lang];
  const navConfig = NAV_CONFIG[lang];
  if (!chrome || !navConfig) return;

  const header = document.querySelector(".site-header");
  const footer = document.querySelector(".site-footer");
  const localeLinks = getLocaleLinks(lang);
  const currentPath = window.location.pathname;

  if (header) {
    header.innerHTML = buildHeaderMarkup({
      chrome,
      navConfig,
      currentPath,
      localeLinks
    });
  }

  if (footer) {
    footer.innerHTML = buildFooterMarkup(chrome.footer);
  }

  setupLanguageSwitcherDropdown();
}

function initNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]") || document.querySelector(".site-nav");

  if (!toggle || !nav) return;

  const lang = getDocumentLanguage();
  const config = NAV_CONFIG[lang];
  if (config) {
    nav.innerHTML = buildNavMarkup(config, lang, window.location.pathname);
    nav.classList.add("site-nav--enhanced");
    setupClusterNavigation(nav);
  }

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    header?.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
  };

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!expanded);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.matchMedia(MOBILE_NAV_QUERY).matches) {
        setOpen(false);
      }
    });
  });

  window.addEventListener("resize", () => {
    if (!window.matchMedia(MOBILE_NAV_QUERY).matches) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setOpen(false);
    }
  });
}

function getDocumentLanguage() {
  const docLang = document.documentElement.lang.slice(0, 2).toLowerCase();
  return NAV_CONFIG[docLang] ? docLang : "it";
}

function buildNavMarkup(config, lang, currentPath) {
  const pathname = normalizePath(currentPath);
  const homeHref = lang === "it" ? "/" : `/${lang}/`;
  const homeCurrent = pathname === normalizePath(homeHref);

  const clusterMarkup = config.clusters
    .map((cluster) => buildClusterMarkup(cluster, pathname))
    .join("");

  return `
    <ul class="site-nav__clusters">
      <li class="site-nav__item site-nav__item--home${homeCurrent ? " is-current" : ""}">
        <a class="site-nav__home-link" href="${homeHref}"${homeCurrent ? ' aria-current="page"' : ""}>${config.homeLabel}</a>
      </li>
      ${clusterMarkup}
    </ul>
  `;
}

function buildHeaderMarkup({ chrome, navConfig, currentPath, localeLinks }) {
  return `
    <div class="container header__inner">
      <a class="brand" href="${getLocaleRoot(getDocumentLanguage())}">Montefiascone</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" data-nav-toggle>${chrome.menuLabel}</button>
      <nav class="site-nav" id="primary-navigation" aria-label="${chrome.navAriaLabel}" data-nav>
        ${buildNavMarkup(navConfig, getDocumentLanguage(), currentPath)}
      </nav>
      <div class="header__actions">
        <div class="lang-switcher" aria-label="${chrome.langAriaLabel}">
          ${buildLanguageSwitcherMarkup(localeLinks, getDocumentLanguage())}
        </div>
      </div>
    </div>
  `;
}

function buildFooterMarkup(footer) {
  const sectionsMarkup = footer.sections
    .map(
      (section) => `
        <section class="site-footer__section">
          <h2 class="site-footer__heading">${section.title}</h2>
          <ul class="site-footer__links">
            ${section.links
              .map(
                (link) => `
                  <li><a href="${link.href}">${link.label}</a></li>
                `,
              )
              .join("")}
          </ul>
        </section>
      `,
    )
    .join("");

  return `
    <div class="container site-footer__grid">
      <section class="site-footer__brand">
        <h2 class="site-footer__title">${footer.introTitle}</h2>
        <p>${footer.introCopy}</p>
        <p class="site-footer__disclaimer">${footer.introNote}</p>
      </section>
      ${sectionsMarkup}
    </div>
    <div class="container site-footer__meta">
      <p>${footer.meta}</p>
    </div>
  `;
}

function buildClusterMarkup(cluster, pathname) {
  const isCurrent = isClusterCurrent(cluster, pathname);
  const itemsMarkup = cluster.items
    .map((item) => {
      const current = pathname === normalizePath(item.href);
      return `
        <li>
          <a href="${item.href}"${current ? ' aria-current="page"' : ""}>
            <span class="site-nav__panel-label">${item.label}</span>
            <span class="site-nav__panel-note">${item.description}</span>
          </a>
        </li>
      `;
    })
    .join("");

  return `
    <li class="site-nav__item site-nav__item--cluster${isCurrent ? " is-current" : ""}" data-nav-cluster="${cluster.key}">
      <button class="site-nav__trigger" type="button" aria-expanded="false">
        <span>${cluster.label}</span>
      </button>
      <div class="site-nav__panel" hidden>
        <p class="site-nav__panel-title">${cluster.label}</p>
        <ul class="site-nav__panel-list">
          ${itemsMarkup}
        </ul>
      </div>
    </li>
  `;
}

function isClusterCurrent(cluster, pathname) {
  return cluster.activePatterns.some((pattern) => pathname.includes(pattern));
}

function normalizePath(path) {
  if (!path) return "/";
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

function getLocaleRoot(lang) {
  return lang === "it" ? "/" : `/${lang}/`;
}

function getLocaleLinks(currentLang) {
  const fallback = {
    it: "/",
    en: "/en/",
    de: "/de/",
    fr: "/fr/"
  };

  const links = { ...fallback };

  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => {
    const hreflang = (link.getAttribute("hreflang") || "").toLowerCase();
    if (!["it", "en", "de", "fr"].includes(hreflang)) return;
    links[hreflang] = toRelativeUrl(link.getAttribute("href")) || fallback[hreflang];
  });

  links[currentLang] = toRelativeUrl(window.location.href) || links[currentLang];
  return links;
}

function buildLanguageSwitcherMarkup(localeLinks, currentLang) {
  const langNames = {
    it: "Italiano",
    en: "English",
    de: "Deutsch",
    fr: "Français"
  };

  const listItems = ["it", "en", "de", "fr"]
    .map((lang) => {
      const label = langNames[lang];
      const href = localeLinks[lang] || getLocaleRoot(lang);
      const active = lang === currentLang ? ' class="is-current"' : "";
      return `<li><a${active} href="${href}" lang="${lang}">${label}</a></li>`;
    })
    .join("");

  return `
    <button class="lang-switcher__trigger" type="button" aria-expanded="false" aria-haspopup="true">
      ${currentLang.toUpperCase()} <span class="lang-switcher__arrow"></span>
    </button>
    <ul class="lang-switcher__list" hidden>
      ${listItems}
    </ul>
  `;
}

function setupLanguageSwitcherDropdown() {
  const switcher = document.querySelector(".lang-switcher");
  if (!switcher) return;

  const trigger = switcher.querySelector(".lang-switcher__trigger");
  const list = switcher.querySelector(".lang-switcher__list");
  if (!trigger || !list) return;

  const openMenu = () => {
    trigger.setAttribute("aria-expanded", "true");
    list.hidden = false;
  };
  const closeMenu = () => {
    trigger.setAttribute("aria-expanded", "false");
    list.hidden = true;
  };

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isExpanded = trigger.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  let hoverTimeout = null;
  switcher.addEventListener("mouseenter", () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    openMenu();
  });
  switcher.addEventListener("mouseleave", () => {
    hoverTimeout = setTimeout(() => {
      closeMenu();
    }, 250);
  });

  document.addEventListener("click", (e) => {
    if (!switcher.contains(e.target)) {
      closeMenu();
    }
  });

  trigger.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      openMenu();
      list.querySelector("a")?.focus();
    }
    if (e.key === "Escape") {
      closeMenu();
      trigger.focus();
    }
  });
}

function toRelativeUrl(url) {
  if (!url) return "";
  try {
    const parsed = new URL(url, window.location.origin);
    const allowedHosts = new Set([
      window.location.hostname,
      "www.ilovemontefiascone.com",
      "ilovemontefiascone.com"
    ]);
    if (!allowedHosts.has(parsed.hostname)) return "";

    let path = parsed.pathname || "/";
    if (path === "/") return "/";
    if (path === "/index.html") return "/";
    if (path.endsWith("/index.html")) return path.slice(0, -"index.html".length);
    if (path.endsWith(".html")) path = path.slice(0, -".html".length);
    return path.endsWith("/") ? path : path;
  } catch {
    return url;
  }
}

function setupClusterNavigation(nav) {
  const mq = window.matchMedia(MOBILE_NAV_QUERY);
  const clusterItems = [...nav.querySelectorAll(".site-nav__item--cluster")];
  if (!clusterItems.length) return;

  const closeAll = (except = null) => {
    clusterItems.forEach((item) => {
      if (item === except) return;
      const button = item.querySelector(".site-nav__trigger");
      const panel = item.querySelector(".site-nav__panel");
      if (!button || !panel) return;
      button.setAttribute("aria-expanded", "false");
      panel.hidden = true;
    });
  };

  clusterItems.forEach((item) => {
    const button = item.querySelector(".site-nav__trigger");
    const panel = item.querySelector(".site-nav__panel");
    const firstLink = panel?.querySelector("a");

    if (!button || !panel) return;

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      if (!expanded) {
        closeAll(item);
      }
      button.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
    });

    button.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        event.preventDefault();
        closeAll(item);
        button.setAttribute("aria-expanded", "true");
        panel.hidden = false;
        firstLink?.focus();
      }
      if (event.key === "Escape") {
        closeAll();
        button.focus();
      }
    });

    let closeTimeout = null;

    item.addEventListener("mouseenter", () => {
      if (mq.matches) return;
      if (closeTimeout) {
        clearTimeout(closeTimeout);
        closeTimeout = null;
      }
      closeAll(item);
      button.setAttribute("aria-expanded", "true");
      panel.hidden = false;
    });

    item.addEventListener("mouseleave", () => {
      if (mq.matches) return;
      closeTimeout = setTimeout(() => {
        button.setAttribute("aria-expanded", "false");
        panel.hidden = true;
      }, 250);
    });
  });

  nav.addEventListener("focusout", (event) => {
    const nextTarget = event.relatedTarget;
    if (nextTarget && nav.contains(nextTarget)) return;
    closeAll();
  });

  document.addEventListener("click", (event) => {
    if (nav.contains(event.target)) return;
    closeAll();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAll();
    }
  });
}

async function initContextualWeather() {
  const widget = document.querySelector("[data-weather-widget]");
  const scenarioCards = [...document.querySelectorAll("[data-scenario]")];
  const bannerTitle = document.querySelector("[data-context-title]");
  const bannerCopy = document.querySelector("[data-context-copy]");

  if (!widget && !scenarioCards.length && !bannerTitle && !bannerCopy) return;

  const docLang = document.documentElement.lang.slice(0, 2).toLowerCase();
  const lang = APP_COPY[docLang] ? docLang : "it";
  const copy = APP_COPY[lang];
  const summaryNode = document.querySelector("[data-weather-summary]");
  const weatherLabelNode = document.querySelector("[data-weather-label]");
  const tempNode = document.querySelector("[data-weather-temp]");
  const scenarioLabelNode = document.querySelector("[data-scenario-label]");
  const scenarioPriorityNode = document.querySelector("[data-scenario-priority]");

  if (summaryNode) summaryNode.textContent = copy.loading;

  let data = null;

  try {
    data = await getWeather();
  } catch (_error) {
    data = null;
  }

  const scenario = getScenario(data?.current?.weather_code ?? null, new Date(), lang);
  const weatherCode = data?.current?.weather_code;
  const weatherText = copy.weatherMap[weatherCode] || copy.weatherFallback;
  const temperature =
    typeof data?.current?.temperature_2m === "number"
      ? `${Math.round(data.current.temperature_2m)} C`
      : copy.tempFallback;

  if (summaryNode) {
    summaryNode.textContent = copy.summary(weatherText);
  }
  if (weatherLabelNode) weatherLabelNode.textContent = weatherText;
  if (tempNode) tempNode.textContent = temperature;
  if (scenarioLabelNode) scenarioLabelNode.textContent = scenario.label;
  if (scenarioPriorityNode) scenarioPriorityNode.textContent = scenario.priority;
  if (bannerTitle) bannerTitle.textContent = scenario.title;
  if (bannerCopy) bannerCopy.textContent = scenario.copy;

  applyScenarioPriority(scenario.key);
}

async function getWeather() {
  const cached = readWeatherCache();
  if (cached) return cached;

  const response = await fetch(WEATHER_ENDPOINT, { cache: "force-cache" });
  if (!response.ok) {
    throw new Error(`Weather request failed: ${response.status}`);
  }

  const payload = await response.json();
  writeWeatherCache(payload);
  return payload;
}

function readWeatherCache() {
  try {
    const raw = sessionStorage.getItem(WEATHER_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.timestamp > 30 * 60 * 1000) return null;
    return parsed.data;
  } catch {
    return null;
  }
}

function writeWeatherCache(data) {
  try {
    sessionStorage.setItem(
      WEATHER_CACHE_KEY,
      JSON.stringify({
        timestamp: Date.now(),
        data
      })
    );
  } catch {
    /* cache non disponibile */
  }
}

function getScenario(weatherCode, now, lang) {
  const hour = now.getHours();
  const day = now.getDay();
  const isWeekend = day === 5 || day === 6 || day === 0;

  if (RAIN_CODES.has(weatherCode)) {
    return withKey("indoor", lang);
  }

  if (SUNNY_CODES.has(weatherCode) && hour >= 7 && hour < 11) {
    return withKey("walk", lang);
  }

  if (SUNNY_CODES.has(weatherCode) && hour >= 18 && hour < 21) {
    return withKey("sunset", lang);
  }

  if (isWeekend) {
    return withKey("weekend", lang);
  }

  return withKey("heritage", lang);
}

function withKey(key, lang) {
  return {
    key,
    ...APP_COPY[lang].scenarios[key]
  };
}

function applyScenarioPriority(activeKey) {
  const cards = [...document.querySelectorAll("[data-scenario]")];
  const container = document.querySelector("[data-spoke-grid]");
  if (!cards.length || !container) return;

  const matches = [];
  const rest = [];

  cards.forEach((card) => {
    const tokens = (card.getAttribute("data-scenario") || "").split(/\s+/).filter(Boolean);
    const isMatch = tokens.includes(activeKey);
    card.classList.toggle("is-priority", isMatch);
    if (isMatch) {
      matches.push(card);
    } else {
      rest.push(card);
    }
  });

  [...matches, ...rest].forEach((card) => container.appendChild(card));
}
