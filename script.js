const MONTEFIASCONE_WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=42.53&longitude=12.03&current=temperature_2m,weather_code&timezone=auto";

const SUNNY_CODES = new Set([0, 1, 2]);
const RAIN_CODES = new Set([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 95, 96, 99]);

const DEFAULT_CONTENT = {
  title: "Consigli per iniziare la visita",
  body:
    "Se i dati meteo non sono disponibili, parti dal centro storico, dalla Rocca dei Papi e dalla Cattedrale di Santa Margherita. Poi scegli se proseguire verso il lago o verso le guide del portale.",
  ctaLabel: "Scopri cosa vedere",
  ctaHref: "/cosa-vedere"
};

const SUNNY_CONTENT = {
  title: "Scenario sole: spazio a trekking e panorami",
  body:
    "Con tempo stabile conviene privilegiare passeggiate, belvederi e percorsi all'aperto. Via Francigena, panorama sul Lago di Bolsena e centro alto offrono il percorso piu efficace della giornata.",
  ctaLabel: "Apri la mappa dei percorsi",
  ctaHref: "/mappa"
};

const RAIN_CONTENT = {
  title: "Scenario pioggia: meglio interni e visite culturali",
  body:
    "Con pioggia conviene orientarsi verso interni, chiese, spazi coperti e approfondimenti storici. La pagina sui luoghi aiuta a concentrare la visita su monumenti, musei diffusi e tappe culturali.",
  ctaLabel: "Vai ai luoghi al coperto",
  ctaHref: "/cosa-vedere"
};

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initDynamicWeatherContent();
});

function initNav() {
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!toggle.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

async function initDynamicWeatherContent() {
  const section = document.getElementById("dynamic-content");
  if (!section) return;

  const panel = section.querySelector(".dynamic-panel") || section;
  panel.setAttribute("aria-live", "polite");

  renderDynamicContent(panel, {
    title: "Aggiornamento meteo in corso",
    body: "Sto controllando le condizioni attuali su Montefiascone per suggerire l'esperienza piu adatta.",
    ctaLabel: DEFAULT_CONTENT.ctaLabel,
    ctaHref: DEFAULT_CONTENT.ctaHref
  });

  try {
    const weather = await fetchMontefiasconeWeather();
    const weatherCode = weather?.current?.weather_code;
    const content = chooseScenarioContent(weatherCode);
    renderDynamicContent(panel, content);
  } catch (_error) {
    renderDynamicContent(panel, DEFAULT_CONTENT);
  }
}

async function fetchMontefiasconeWeather() {
  const response = await fetch(MONTEFIASCONE_WEATHER_URL, { cache: "force-cache" });
  if (!response.ok) {
    throw new Error(`Weather request failed: ${response.status}`);
  }

  return response.json();
}

function chooseScenarioContent(weatherCode) {
  if (RAIN_CODES.has(weatherCode)) {
    return RAIN_CONTENT;
  }

  if (SUNNY_CODES.has(weatherCode)) {
    return SUNNY_CONTENT;
  }

  return DEFAULT_CONTENT;
}

function renderDynamicContent(panel, content) {
  panel.innerHTML = `
    <h3>${escapeHtml(content.title)}</h3>
    <p>${escapeHtml(content.body)}</p>
    <a class="button" href="${escapeAttribute(content.ctaHref)}">${escapeHtml(content.ctaLabel)}</a>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttribute(value) {
  return String(value).replace(/"/g, "&quot;");
}
