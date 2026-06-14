(() => {
  const cards = Array.from(document.querySelectorAll("[data-gallery-card]"));
  const lightbox = document.querySelector("[data-lightbox]");

  if (!cards.length || !lightbox || !window.EXIF) return;

  const exifCache = new Map();
  const triggerSelector = "[data-gallery-trigger]";

  const dom = {
    image: lightbox.querySelector("[data-lightbox-image]"),
    title: lightbox.querySelector("[data-lightbox-title]"),
    caption: lightbox.querySelector("[data-lightbox-caption]"),
    specs: lightbox.querySelector("[data-lightbox-specs]"),
    counter: lightbox.querySelector("[data-lightbox-counter]"),
    status: lightbox.querySelector("[data-lightbox-status]"),
    close: lightbox.querySelector("[data-lightbox-close]"),
    prev: lightbox.querySelector("[data-lightbox-prev]"),
    next: lightbox.querySelector("[data-lightbox-next]")
  };

  let activeIndex = -1;
  let lastTrigger = null;

  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            hydrateCard(entry.target);
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: "220px 0px" })
    : null;

  cards.forEach((card, index) => {
    card.dataset.index = String(index);
    const trigger = card.querySelector(triggerSelector);

    if (io) {
      io.observe(card);
    } else {
      hydrateCard(card);
    }

    trigger.addEventListener("click", async () => {
      lastTrigger = trigger;
      openLightbox(index);
    });
  });

  dom.close.addEventListener("click", closeLightbox);
  dom.prev.addEventListener("click", () => stepLightbox(-1));
  dom.next.addEventListener("click", () => stepLightbox(1));
  lightbox.querySelector("[data-lightbox-dismiss]").addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeLightbox();
    } else if (event.key === "ArrowRight") {
      stepLightbox(1);
    } else if (event.key === "ArrowLeft") {
      stepLightbox(-1);
    }
  });

  function hydrateCard(card) {
    if (card.dataset.exifState === "loaded" || card.dataset.exifState === "loading") return;

    card.dataset.exifState = "loading";
    updateStatus(card, "Lettura EXIF");

    readExif(card)
      .then((specs) => {
        renderCardSpecs(card, specs);
        card.dataset.exifState = "loaded";
        card.classList.add("is-ready");
        updateStatus(card, "EXIF pronto");
      })
      .catch(() => {
        renderCardSpecs(card, emptySpecs());
        card.dataset.exifState = "error";
        updateStatus(card, "Dati non disponibili");
      });
  }

  async function openLightbox(index) {
    activeIndex = normalizeIndex(index);
    const card = cards[activeIndex];
    const trigger = card.querySelector(triggerSelector);
    const previewImg = trigger.querySelector("img");

    document.body.classList.add("has-lightbox");
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    lightbox.dataset.state = "loading";

    dom.title.textContent = trigger.dataset.title;
    dom.caption.textContent = trigger.dataset.caption;
    dom.counter.textContent = `${activeIndex + 1} / ${cards.length}`;
    dom.status.textContent = "Caricamento alta risoluzione";
    dom.image.alt = previewImg.alt;
    dom.image.removeAttribute("src");
    dom.image.removeAttribute("srcset");

    const fullSrc = trigger.dataset.fullSrc;
    const exifPromise = readExif(card);
    const imagePromise = loadImage(fullSrc);

    const [specs] = await Promise.all([exifPromise, imagePromise]);

    dom.image.src = fullSrc;
    renderLightboxSpecs(specs);
    lightbox.dataset.state = "loaded";
    dom.status.textContent = "JPEG ad alta risoluzione";
  }

  function closeLightbox() {
    if (!lightbox.classList.contains("is-open")) return;

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("has-lightbox");
    activeIndex = -1;

    if (lastTrigger) lastTrigger.focus();
  }

  function stepLightbox(delta) {
    if (activeIndex < 0) return;
    openLightbox(activeIndex + delta);
  }

  function normalizeIndex(index) {
    return (index + cards.length) % cards.length;
  }

  function readExif(card) {
    const trigger = card.querySelector(triggerSelector);
    const exifSrc = trigger.dataset.exifSrc;

    if (exifCache.has(exifSrc)) {
      return Promise.resolve(exifCache.get(exifSrc));
    }

    return new Promise((resolve, reject) => {
      const exifImage = new Image();
      exifImage.decoding = "async";
      exifImage.onload = () => {
        EXIF.getData(exifImage, function () {
          const specs = {
            camera: compactJoin(EXIF.getTag(this, "Make"), EXIF.getTag(this, "Model")),
            lens: sanitizeText(EXIF.getTag(this, "LensModel")) || "Obiettivo non dichiarato",
            focal: formatFocal(EXIF.getTag(this, "FocalLength")),
            aperture: formatAperture(EXIF.getTag(this, "FNumber")),
            exposure: formatExposure(EXIF.getTag(this, "ExposureTime")),
            iso: formatIso(EXIF.getTag(this, "ISOSpeedRatings"))
          };

          exifCache.set(exifSrc, specs);
          resolve(specs);
        });
      };
      exifImage.onerror = reject;
      exifImage.src = exifSrc;
    });
  }

  function renderCardSpecs(card, specs) {
    const grid = card.querySelector("[data-gallery-specs]");
    grid.innerHTML = specTemplate(specs, true);
  }

  function renderLightboxSpecs(specs) {
    dom.specs.innerHTML = specTemplate(specs, false);
  }

  function specTemplate(specs, compact) {
    const items = [
      ["Camera", specs.camera],
      ["Obiettivo", specs.lens],
      ["Focale", specs.focal],
      ["Apertura", specs.aperture],
      ["Tempo", specs.exposure],
      ["ISO", specs.iso]
    ];

    const labelClass = compact ? "gallery-spec__label" : "lightbox__spec-label";
    const valueClass = compact ? "gallery-spec__value" : "lightbox__spec-value";
    const wrapClass = compact ? "gallery-spec" : "lightbox__spec";

    return items.map(([label, value]) => `
      <div class="${wrapClass}">
        <span class="${labelClass}">${label}</span>
        <span class="${valueClass}">${value}</span>
      </div>
    `).join("");
  }

  function emptySpecs() {
    return {
      camera: "Metadati assenti",
      lens: "Metadati assenti",
      focal: "--",
      aperture: "--",
      exposure: "--",
      iso: "--"
    };
  }

  function updateStatus(card, text) {
    const status = card.querySelector("[data-gallery-status]");
    status.textContent = text;
  }

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = src;
    });
  }

  function compactJoin(first, second) {
    const make = sanitizeText(first);
    const model = sanitizeText(second);

    if (make && model) {
      const modelLower = model.toLowerCase();
      const makeLower = make.toLowerCase();
      return modelLower.startsWith(makeLower) ? model : `${make} ${model}`;
    }

    return make || model || "Camera non dichiarata";
  }

  function sanitizeText(value) {
    return typeof value === "string" ? value.trim() : "";
  }

  function toNumber(value) {
    if (typeof value === "number") return value;
    if (!value) return null;
    if (typeof value === "object") {
      if (typeof value.numerator === "number" && typeof value.denominator === "number" && value.denominator) {
        return value.numerator / value.denominator;
      }
      if (Array.isArray(value) && value.length === 2 && value[1]) {
        return Number(value[0]) / Number(value[1]);
      }
    }
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  function formatFocal(value) {
    const numeric = toNumber(value);
    return numeric ? `${Math.round(numeric)} mm` : "--";
  }

  function formatAperture(value) {
    const numeric = toNumber(value);
    return numeric ? `f/${numeric.toFixed(1).replace(".0", "")}` : "--";
  }

  function formatExposure(value) {
    const numeric = toNumber(value);
    if (!numeric) return "--";
    if (numeric >= 1) return `${numeric.toFixed(1).replace(".0", "")} s`;
    return `1/${Math.round(1 / numeric)} s`;
  }

  function formatIso(value) {
    const numeric = toNumber(value);
    return numeric ? `ISO ${Math.round(numeric)}` : "--";
  }
})();
