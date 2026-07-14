/*
 * Consent-gated Google Analytics 4 (GA4) loader — ilovemontefiascone.com
 *
 * GDPR / ePrivacy compliant:
 * - Google Consent Mode v2 defaults are set to "denied" in the page <head>
 *   (inline, before this script) so nothing is granted by default.
 * - This script does NOT load gtag.js and sends NOTHING to Google until the
 *   visitor explicitly accepts. No cookies, no network calls to Google
 *   before consent.
 * - The choice is stored in localStorage and reused on later visits.
 * - No third-party dependencies; served first-party from /js/ (CSP 'self').
 *
 * Public, site-wide controls (work on every page, no extra script needed):
 * - any element with [data-cookie-accept]  -> grants consent, loads GA4
 * - any element with [data-cookie-reject]  -> denies consent, keeps GA4 off
 * - any element with [data-cookie-prefs]   -> clears the stored choice and
 *   reloads the page so the banner (or an on-page choice) can be made again
 * These attributes are used by the cookie banner itself, by the real
 * Accept/Reject buttons on the cookie policy pages, and by the "Cookie
 * preferences" links in every footer.
 */
(function () {
  "use strict";

  var GA_ID = "G-8JYLVWD6P8";
  var STORAGE_KEY = "ilm-ga-consent"; // "granted" | "denied"

  function gtag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }

  var loaded = false;
  function loadGA() {
    if (loaded) return;
    loaded = true;
    gtag("consent", "update", { analytics_storage: "granted" });
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", GA_ID);
  }

  function store(value) {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* storage may be unavailable; consent then applies to this session only */
    }
  }

  function readChoice() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function clearChoice() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      /* nothing to clear */
    }
  }

  // --- Banner / on-page copy, language-aware (falls back to English) ---
  var LANG = (document.documentElement.getAttribute("lang") || "en").slice(0, 2).toLowerCase();
  var T = {
    it: {
      text: "Usiamo Google Analytics per statistiche di visita anonime. Puoi accettare o rifiutare. Senza consenso non viene installato alcun cookie di analisi.",
      accept: "Accetta",
      reject: "Rifiuta",
      more: "Cookie policy",
      moreHref: "/cookie",
      label: "Avviso sui cookie",
    },
    en: {
      text: "We use Google Analytics for anonymous visit statistics. You can accept or decline. No analytics cookie is set without your consent.",
      accept: "Accept",
      reject: "Decline",
      more: "Cookie policy",
      moreHref: "/en/cookie-policy",
      label: "Cookie notice",
    },
    de: {
      text: "Wir nutzen Google Analytics für anonyme Besuchsstatistiken. Sie können zustimmen oder ablehnen. Ohne Ihre Zustimmung wird kein Analyse-Cookie gesetzt.",
      accept: "Zustimmen",
      reject: "Ablehnen",
      more: "Cookie-Richtlinie",
      moreHref: "/de/cookie-richtlinie",
      label: "Cookie-Hinweis",
    },
    fr: {
      text: "Nous utilisons Google Analytics pour des statistiques de visite anonymes. Vous pouvez accepter ou refuser. Aucun cookie d'analyse n'est déposé sans votre consentement.",
      accept: "Accepter",
      reject: "Refuser",
      more: "Politique cookies",
      moreHref: "/fr/politique-cookies",
      label: "Avis sur les cookies",
    },
  };
  var t = T[LANG] || T.en;

  function injectStyles() {
    if (document.getElementById("ilm-cc-style")) return;
    var css =
      ".ilm-cc{position:fixed;left:0;right:0;bottom:0;z-index:2147483000;background:#1f2d33;color:#f4f1ea;" +
      "padding:14px 16px;box-shadow:0 -2px 16px rgba(0,0,0,.25);font:400 0.9rem/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}" +
      ".ilm-cc__in{max-width:1080px;margin:0 auto;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between}" +
      ".ilm-cc__txt{flex:1 1 320px;margin:0}" +
      ".ilm-cc__txt a{color:#e8b04b;text-decoration:underline}" +
      ".ilm-cc__btns{display:flex;gap:8px;flex:0 0 auto}" +
      ".ilm-cc__b{border:0;border-radius:8px;padding:9px 16px;font:inherit;font-weight:700;cursor:pointer}" +
      ".ilm-cc__b--a{background:#e8b04b;color:#1f2d33}" +
      ".ilm-cc__b--r{background:transparent;color:#f4f1ea;border:1px solid rgba(244,241,234,.5)}" +
      ".ilm-cc__b:focus-visible{outline:2px solid #fff;outline-offset:2px}";
    var st = document.createElement("style");
    st.id = "ilm-cc-style";
    st.textContent = css;
    document.head.appendChild(st);
  }

  var bannerEl = null;

  function removeBanner() {
    if (bannerEl && bannerEl.parentNode) bannerEl.parentNode.removeChild(bannerEl);
    bannerEl = null;
  }

  function showBanner() {
    if (bannerEl) return;
    injectStyles();
    var bar = document.createElement("div");
    bar.className = "ilm-cc";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", t.label);

    var inner = document.createElement("div");
    inner.className = "ilm-cc__in";

    var p = document.createElement("p");
    p.className = "ilm-cc__txt";
    p.appendChild(document.createTextNode(t.text + " "));
    var a = document.createElement("a");
    a.href = t.moreHref;
    a.textContent = t.more;
    p.appendChild(a);

    var btns = document.createElement("div");
    btns.className = "ilm-cc__btns";

    var reject = document.createElement("button");
    reject.type = "button";
    reject.className = "ilm-cc__b ilm-cc__b--r";
    reject.textContent = t.reject;
    reject.setAttribute("data-cookie-reject", "");

    var accept = document.createElement("button");
    accept.type = "button";
    accept.className = "ilm-cc__b ilm-cc__b--a";
    accept.textContent = t.accept;
    accept.setAttribute("data-cookie-accept", "");

    btns.appendChild(reject);
    btns.appendChild(accept);
    inner.appendChild(p);
    inner.appendChild(btns);
    bar.appendChild(inner);

    (document.body || document.documentElement).appendChild(bar);
    bannerEl = bar;
  }

  function accept() {
    store("granted");
    removeBanner();
    loadGA();
  }

  function reject() {
    store("denied");
    removeBanner();
  }

  function openPreferences() {
    // Reliable, simple revoke/change: clear the stored choice and reload.
    // GA4 (if it was granted) stops receiving new hits once consent_storage
    // reverts to its "denied" default on load, and the banner reappears so
    // the visitor can make a fresh choice.
    clearChoice();
    location.reload();
  }

  // Expose a small public API so cookie-policy pages can wire real buttons.
  window.ilmCookieConsent = { accept: accept, reject: reject, openPreferences: openPreferences };

  // Site-wide delegated handler: works for the banner buttons above, for any
  // real <button>/<a> with these data attributes on any page (policy pages,
  // footers), without needing a per-page script.
  document.addEventListener("click", function (event) {
    var el = event.target.closest && event.target.closest("[data-cookie-accept],[data-cookie-reject],[data-cookie-prefs]");
    if (!el) return;
    if (el.hasAttribute("data-cookie-prefs")) {
      event.preventDefault();
      openPreferences();
    } else if (el.hasAttribute("data-cookie-accept")) {
      event.preventDefault();
      accept();
    } else if (el.hasAttribute("data-cookie-reject")) {
      event.preventDefault();
      reject();
    }
  });

  var choice = readChoice();
  if (choice === "granted") {
    loadGA();
  } else if (choice === "denied") {
    /* respect refusal; do nothing */
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showBanner);
  } else {
    showBanner();
  }
})();
