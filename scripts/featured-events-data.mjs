// Editorial content for the "evento in evidenza" spotlight on /eventi.
// Dates are NOT stored here: they are read at build time from each event's
// own JSON-LD (single source of truth, see select-featured-event.mjs).
// All copy below is reused verbatim (or lightly trimmed) from text already
// published on the linked event page - nothing here is invented.

export const FEATURED_EVENT_CANDIDATES = [
  {
    id: "concerto-banda-rb-revue",
    file: "concerto-banda-rb-revue-montefiascone.html",
    url: "/concerto-banda-rb-revue-montefiascone",
    name: "La Banda R&amp;B Revue in Piazzale Roma",
    dateLabel: "Venerd&igrave; 19 giugno 2026",
    teaser: [
      "Piazzale Roma ospita il concerto live de <strong>La Banda R&amp;B Revue</strong>: una serata dedicata a rhythm and blues, grandi successi e musica dal vivo nel cuore di Montefiascone.",
      "L'appuntamento &egrave; organizzato dall'<strong>IPU - Universit&agrave; Pontificia Salesiana, sede aggregata della Tuscia</strong> in collaborazione con il <strong>Comune di Montefiascone</strong>.",
    ],
    facts: [
      ["Dove", "Piazzale Roma, Montefiascone"],
      ["Quando", "Venerd&igrave; 19 giugno 2026"],
      ["Orario", "21:00"],
      ["Genere", "Rhythm and blues, live music"],
    ],
    image: {
      jpg: "/media/gallery/evento-banda-rb-revue-piazzale-roma-2026.jpg",
      webp: "/media/gallery/evento-banda-rb-revue-piazzale-roma-2026.webp",
      width: 900,
      height: 1600,
      alt: "Locandina del concerto La Banda R&amp;B Revue a Montefiascone, venerdi 19 giugno 2026 in Piazzale Roma",
    },
  },
  {
    id: "cronoscalata",
    file: "cronoscalata-montefiascone-coppa-citta.html",
    url: "/cronoscalata-montefiascone-coppa-citta",
    name: "Cronoscalata Lago-Montefiascone 2026",
    dateLabel: "19, 20 e 21 giugno 2026",
    teaser: [
      "Il cartellone ufficiale indica la <strong>29&#170; Lago-Montefiascone</strong>, valida per il Campionato Italiano della Montagna per auto storiche, sul percorso della S.P. Lago di Bolsena.",
      "Prove e gara sono indicate dal cartellone lungo il tracciato dal km 5+150 al km 0+400.",
    ],
    facts: [
      ["Date 2026", "19-21 giugno"],
      ["Tracciato", "S.P. Lago di Bolsena"],
      ["Formato", "prove e gara"],
    ],
    image: {
      jpg: "/media/gallery/cronoscalata-piloti-auto-storiche.jpg",
      webp: "/media/gallery/cronoscalata-piloti-auto-storiche.webp",
      width: 1024,
      height: 683,
      alt: "Piloti con auto storiche alla Cronoscalata Lago-Montefiascone",
    },
  },
  {
    id: "anno-domini-1074",
    file: "anno-domini-1074-montefiascone.html",
    url: "/anno-domini-1074-montefiascone",
    name: "A.D. 1074 a Montefiascone",
    dateLabel: "26, 27 e 28 giugno 2026",
    teaser: [
      "Montefiascone torna simbolicamente all'anno 1074: il borgo diventa uno scenario medievale tra rievocazione storica, corteo, accampamenti, spettacoli e cucina locale.",
      "L'evento &egrave; organizzato dall'associazione <strong>Amici del Colle</strong>, tra Rocca dei Papi, Giardini del Palazzo Vescovile e centro storico.",
    ],
    facts: [
      ["Date", "26, 27 e 28 giugno 2026"],
      ["Luoghi", "Rocca dei Papi, Giardini del Palazzo Vescovile e centro storico"],
      ["Organizzazione", "Amici del Colle"],
    ],
    image: {
      jpg: "/media/hero-rocca-dei-papi-1600.jpg",
      webp: "/media/hero-rocca-dei-papi-1600.webp",
      width: 1600,
      height: 900,
      alt: "Montefiascone e Rocca dei Papi, scenario di A.D. 1074",
    },
  },
  {
    id: "festival-ecologia-integrale",
    file: "festival-ecologia-integrale-montefiascone.html",
    url: "/festival-ecologia-integrale-montefiascone",
    name: "Festival dell'Ecologia Integrale 2026",
    dateLabel: "2, 3, 4 e 5 luglio 2026",
    teaser: [
      "Il cartellone indica la <strong>6&#170; edizione</strong>, intitolata <strong>Oltre i deserti</strong>, come esperienza culturale, scientifica e spirituale dedicata all'Ecologia Integrale.",
      "Il sito ufficiale conferma l'apertura del <strong>2 luglio alle 18:00</strong> in <strong>piazza Santa Lucia Filippini</strong>, con <strong>Mogol</strong> nella serata inaugurale.",
    ],
    facts: [
      ["Date 2026", "2-5 luglio"],
      ["Edizione", "6&#170;"],
      ["Tema", "Oltre i deserti"],
    ],
    image: {
      jpg: "/media/hero-rocca-dei-papi-1600.jpg",
      webp: "/media/hero-rocca-dei-papi-1600.webp",
      width: 1600,
      height: 900,
      alt: "Montefiascone e Lago di Bolsena dalla Rocca dei Papi",
    },
  },
  {
    id: "atb-festival",
    file: "atb-festival-montefiascone.html",
    url: "/atb-festival-montefiascone",
    name: "ATB Festival 2026 a Montefiascone",
    dateLabel: "9, 10, 11 e 12 luglio 2026",
    teaser: [
      "Il cartellone descrive ATB come festival musicale e fiera della birra artigianale nel centro storico di Montefiascone.",
      "Programma, orari e dettagli operativi possono essere aggiornati dagli organizzatori: verifica sempre i canali ufficiali prima della visita.",
    ],
    facts: [
      ["Date 2026", "9-12 luglio"],
      ["Format", "musica e birra artigianale"],
      ["Area", "centro storico"],
    ],
    image: {
      jpg: "/media/gallery/atbfestival-palco-notte.jpg",
      webp: "/media/gallery/atbfestival-palco-notte.webp",
      width: 1024,
      height: 681,
      alt: "Palco serale dell'ATB Festival a Montefiascone",
    },
  },
  {
    id: "panorami-festival",
    file: "panorami-festival-montefiascone.html",
    url: "/panorami-festival-montefiascone",
    name: "Panorami 2026: cultura e paesaggio a Montefiascone",
    dateLabel: "16, 17, 18 e 19 luglio 2026",
    teaser: [
      "Panorami 2026 accompagna Montefiascone dal <strong>16 al 19 luglio 2026</strong> con un festival culturale dedicato a grandi temi, incontri pubblici e dialogo tra paesaggio, idee e vita estiva del borgo.",
      "Le date sono confermate dal cartellone Estate 2026, mentre sedi puntuali, orari di dettaglio e ospiti vanno sempre verificati sui canali ufficiali prima della visita.",
    ],
    facts: [
      ["Date 2026", "16-19 luglio"],
      ["Tema", "grandi temi culturali"],
      ["Contesto", "centro storico e paesaggio di Montefiascone"],
    ],
    image: {
      jpg: "/media/hero-rocca-dei-papi-1600.jpg",
      webp: "/media/hero-rocca-dei-papi-1600.webp",
      width: 1600,
      height: 900,
      alt: "Montefiascone e Lago di Bolsena dalla Rocca dei Papi",
    },
  },
  {
    id: "festa-santa-margherita",
    file: "festa-santa-margherita-montefiascone.html",
    url: "/festa-santa-margherita-montefiascone",
    name: "Festa patrona Santa Margherita 2026",
    dateLabel: "16, 17, 18, 19 e 20 luglio 2026",
    teaser: [
      "La festa in onore di <strong>Santa Margherita</strong> accompagna Montefiascone dal <strong>16 al 20 luglio 2026</strong> con momenti liturgici, processione, visita guidata e appuntamenti serali tra la Concattedrale e il centro storico.",
      "La scheda evento riporta solo i passaggi confermati dal manifesto: prima della visita conviene controllare eventuali aggiornamenti operativi diffusi dagli organizzatori.",
    ],
    facts: [
      ["Date 2026", "16-20 luglio"],
      ["Ricorrenza", "patrona Santa Margherita"],
      ["Luoghi indicati", "Concattedrale, Piazza Vittorio Emanuele, P.le Mauri"],
    ],
    image: {
      jpg: "/media/events/festa-santa-margherita-2026-poster.png",
      webp: "/media/events/festa-santa-margherita-2026-poster.webp",
      width: 1127,
      height: 1600,
      alt: "Manifesto ufficiale della Festa in onore di Santa Margherita 2026 a Montefiascone",
    },
  },
  {
    id: "est-film-festival",
    file: "est-film-festival-montefiascone.html",
    url: "/est-film-festival-montefiascone",
    name: "20&#176; Est Film Festival 2026",
    dateLabel: "20-26 luglio 2026",
    teaser: [
      "Il cartellone indica la 20&#170; edizione, con sezione competitiva dedicata a lungometraggi italiani di nuovi autori e incontri con registi e cast.",
      "Il canale ufficiale presenta Montefiascone come settimana della 20&#170; edizione locale dentro il progetto EFF Lago di Bolsena.",
    ],
    facts: [
      ["Date 2026", "20-26 luglio"],
      ["Edizione", "20&#170;"],
      ["Focus", "cinema italiano e incontri"],
    ],
    image: {
      jpg: "/media/gallery/fieradelvino-rocca-notte.jpg",
      webp: "/media/gallery/fieradelvino-rocca-notte.webp",
      width: 1024,
      height: 681,
      alt: "Rocca dei Papi di sera durante gli eventi estivi",
    },
  },
  {
    id: "fiera-del-vino",
    file: "eventi-tradizioni-fiera-del-vino-montefiascone.html",
    url: "/eventi-tradizioni-fiera-del-vino-montefiascone",
    name: "66&#170; Fiera del Vino di Montefiascone 2026",
    dateLabel: "1-14 agosto 2026, in date selezionate",
    teaser: [
      "Il cartellone collega la Fiera del Vino al vino Est! Est!! Est!!!, alla rievocazione della tradizione di Giovanni Defuk e ad appuntamenti folcloristici e musicali.",
      "Programma, orari e dettagli operativi possono essere aggiornati dagli organizzatori: verifica sempre i canali ufficiali prima della visita.",
    ],
    facts: [
      ["Date 2026", "1-14 agosto, in date selezionate"],
      ["Edizione", "66&#170;"],
      ["Focus", "Est! Est!! Est!!! e folklore"],
    ],
    image: {
      jpg: "/media/gallery/fieradelvino-corteo-folla.jpg",
      webp: "/media/gallery/fieradelvino-corteo-folla.webp",
      width: 1024,
      height: 681,
      alt: "Corteo della Fiera del Vino tra la folla a Montefiascone",
    },
  },
  {
    id: "est-lake-festival",
    file: "est-lake-festival-montefiascone.html",
    url: "/est-lake-festival-montefiascone",
    name: "Est-Lake Festival 2026 sul Lago di Bolsena",
    dateLabel: "14-23 agosto 2026, in date selezionate",
    teaser: [
      "Il cartellone lo descrive come festival sulla riva del Lago di Bolsena con street food, musica, DJ set e intrattenimento per i pi&ugrave; piccoli.",
      "Programma, orari e dettagli operativi possono essere aggiornati dagli organizzatori: verifica sempre i canali ufficiali prima della visita.",
    ],
    facts: [
      ["Date 2026", "14-23 agosto, in date selezionate"],
      ["Luogo", "riva del Lago di Bolsena"],
      ["Focus", "street food, musica, bambini"],
    ],
    image: {
      jpg: "/media/hero-rocca-dei-papi-1600.jpg",
      webp: "/media/hero-rocca-dei-papi-1600.webp",
      width: 1600,
      height: 900,
      alt: "Montefiascone e Lago di Bolsena dalla Rocca dei Papi",
    },
  },
];
