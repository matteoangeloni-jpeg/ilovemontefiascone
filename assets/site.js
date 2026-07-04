(() => {
  document.documentElement.classList.add("js");
  const mobileQuery = window.matchMedia("(max-width: 1023px)");
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.getElementById("primary-navigation");
  const enhancedNav = document.querySelector("[data-nav]");

  function setMenu(open) {
    if (!header || !toggle) return;
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  if (toggle && nav && !enhancedNav) {
    toggle.addEventListener("click", () => {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (mobileQuery.matches) setMenu(false);
      });
    });

    mobileQuery.addEventListener("change", (event) => {
      if (!event.matches) setMenu(false);
    });
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch((error) => {
        console.error("Registrazione del service worker non riuscita:", error);
      });
    });
  }

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -30px 0px" });

    nodes.forEach((node) => observer.observe(node));
  } else {
    document.querySelectorAll("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
  }
})();
