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

document.addEventListener("DOMContentLoaded", () => {
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

function initNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
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
