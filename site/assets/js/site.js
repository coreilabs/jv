const PHONE_NUMBER = "5562992320237";

const img = (base, names) => names.map((name) => `${base}/${name}.jpg`);

const units = [
  {
    id: "abadia-masculina",
    title: "Abadia de Goiás",
    audience: "Masculina",
    state: "GO",
    filters: ["masculina", "go"],
    tone: "Rotina terapêutica, convivência e áreas de apoio para tratamento masculino.",
    images: img("unidades/abadia-de-goias/masculina/1", [
      "IMG-20260611-WA0040",
      "IMG-20260611-WA0041",
      "IMG-20260611-WA0042",
      "IMG-20260611-WA0043",
      "IMG-20260611-WA0044",
      "IMG-20260611-WA0045",
      "IMG-20260611-WA0046",
      "IMG-20260611-WA0047",
      "IMG-20260611-WA0048",
      "IMG-20260611-WA0049"
    ])
  },
  {
    id: "abadia-feminina",
    title: "Abadia de Goiás",
    audience: "Feminina",
    state: "GO",
    filters: ["feminina", "go"],
    tone: "Acolhimento feminino com espaços de convivência e acompanhamento terapêutico.",
    images: img("unidades/abadia-de-goias/feminina/1", [
      "IMG-20260611-WA0026",
      "IMG-20260611-WA0027",
      "IMG-20260611-WA0028",
      "IMG-20260611-WA0029",
      "IMG-20260611-WA0030",
      "IMG-20260611-WA0031",
      "IMG-20260611-WA0032",
      "IMG-20260611-WA0033",
      "IMG-20260611-WA0034",
      "IMG-20260611-WA0035",
      "IMG-20260611-WA0037"
    ])
  },
  {
    id: "goias-masculina",
    title: "Goiás",
    audience: "Masculina",
    state: "GO",
    filters: ["masculina", "go"],
    tone: "Estrutura ampla para tratamento, lazer assistido e rotina de centro terapêutico.",
    images: img("unidades/goias/masculina/1", [
      "IMG-20260604-WA0064",
      "IMG-20260604-WA0065",
      "IMG-20260604-WA0066",
      "IMG-20260604-WA0067",
      "IMG-20260604-WA0068",
      "IMG-20260604-WA0069",
      "IMG-20260604-WA0070",
      "IMG-20260604-WA0071",
      "IMG-20260604-WA0072"
    ])
  },
  {
    id: "df-masculina",
    title: "Distrito Federal",
    audience: "Masculina",
    state: "DF",
    filters: ["masculina", "df"],
    tone: "Unidade masculina com áreas externas, quartos e ambientes de convivência.",
    images: img("unidades/distrito-federal/masculina/1", [
      "IMG-20260608-WA0090",
      "IMG-20260608-WA0091",
      "IMG-20260608-WA0092",
      "IMG-20260608-WA0093",
      "IMG-20260608-WA0094",
      "IMG-20260608-WA0095",
      "IMG-20260608-WA0096",
      "IMG-20260608-WA0098",
      "IMG-20260608-WA0099",
      "IMG-20260608-WA0100",
      "IMG-20260608-WA0101",
      "IMG-20260608-WA0102",
      "IMG-20260608-WA0103",
      "IMG-20260608-WA0104",
      "IMG-20260608-WA0106"
    ])
  },
  {
    id: "sp-masculina",
    title: "São Paulo",
    audience: "Masculina",
    state: "SP",
    filters: ["masculina", "sp"],
    tone: "Opção masculina em São Paulo para encaminhamento terapêutico com estrutura dedicada.",
    images: img("unidades/sao-paulo/masculina/1", [
      "IMG-20260605-WA0000",
      "IMG-20260605-WA0001",
      "IMG-20260605-WA0002",
      "IMG-20260605-WA0003",
      "IMG-20260605-WA0004",
      "IMG-20260605-WA0005",
      "IMG-20260605-WA0006",
      "IMG-20260605-WA0007"
    ])
  },
  {
    id: "sp-feminina",
    title: "São Paulo",
    audience: "Feminina",
    state: "SP",
    filters: ["feminina", "sp"],
    tone: "Unidade feminina com espaços claros, áreas externas e rotina de acompanhamento.",
    images: img("unidades/sao-paulo/feminina/1", [
      "IMG-20260610-WA0074",
      "IMG-20260610-WA0075",
      "IMG-20260610-WA0076",
      "IMG-20260610-WA0078",
      "IMG-20260610-WA0079",
      "IMG-20260610-WA0080",
      "IMG-20260610-WA0081",
      "IMG-20260610-WA0082",
      "IMG-20260610-WA0083"
    ])
  }
];

const unitPortfolio = document.querySelector("#unitPortfolio");
const modal = document.querySelector("[data-modal]");
const modalImage = document.querySelector("[data-modal-image]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalKicker = document.querySelector("[data-modal-kicker]");
const modalThumbs = document.querySelector("[data-modal-thumbs]");
const modalWa = document.querySelector("[data-modal-wa]");

let activeUnit = null;
let activeIndex = 0;

function whatsappLink(unit, details = "") {
  const base = unit
    ? `Olá, Grupo Vitória. Vi o site e gostaria de orientação sobre a unidade ${unit.title} ${unit.audience} (${unit.state}).`
    : "Olá, Grupo Vitória. Vi o site e gostaria de receber orientação sobre encaminhamento para uma clínica de recuperação.";

  const text = details ? `${base} ${details}` : base;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
}

function renderUnits() {
  const totalPhotos = units.reduce((sum, unit) => sum + unit.images.length, 0);
  document.querySelector("#unitCount").textContent = units.length;
  document.querySelector("#photoCount").textContent = totalPhotos;

  unitPortfolio.innerHTML = units.map((unit) => {
    const slides = unit.images.map((src, index) => `
      <button class="unit-photo" type="button" data-unit="${unit.id}" data-index="${index}" aria-label="Abrir foto ${index + 1} da unidade ${unit.title} ${unit.audience}">
        <img src="${src}" loading="lazy" alt="${unit.title} ${unit.audience} - foto ${index + 1}">
      </button>
    `).join("");

    const dots = unit.images.map((_, index) => `
      <button type="button" data-dot="${index}" aria-label="Ir para foto ${index + 1}" ${index === 0 ? 'class="is-active"' : ""}></button>
    `).join("");

    return `
      <article class="unit-block" data-unit-card="${unit.id}" data-filters="${unit.filters.join(" ")}">
        <div class="unit-copy">
          <div class="unit-meta">
            <span>${unit.state}</span>
            <span>Unidade ${unit.audience}</span>
            <span>${unit.images.length} fotos</span>
          </div>
          <h3>${unit.title}</h3>
          <p>${unit.tone}</p>
          <a class="button unit-wa" href="${whatsappLink(unit)}" target="_blank" rel="noopener">
            <svg aria-hidden="true"><use href="#icon-phone"></use></svg>
            Chamar sobre esta unidade
          </a>
        </div>
        <div class="unit-carousel" data-carousel="${unit.id}">
          <div class="carousel-top">
            <span class="carousel-count">Galeria ${unit.audience.toLowerCase()}</span>
            <div class="carousel-controls">
              <button class="carousel-btn" type="button" data-carousel-prev aria-label="Fotos anteriores">
                <svg aria-hidden="true"><use href="#icon-arrow-left"></use></svg>
              </button>
              <button class="carousel-btn" type="button" data-carousel-next aria-label="Próximas fotos">
                <svg aria-hidden="true"><use href="#icon-arrow-right"></use></svg>
              </button>
            </div>
          </div>
          <div class="carousel-viewport">
            ${slides}
          </div>
          <div class="carousel-dots" aria-label="Navegação de fotos">
            ${dots}
          </div>
        </div>
      </article>
    `;
  }).join("");

  hydrateCarousels();
  hydratePhotoButtons();
  hydrateContactOptions();
}

function hydrateCarousels() {
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const viewport = carousel.querySelector(".carousel-viewport");
    const slides = [...carousel.querySelectorAll(".unit-photo")];
    const dots = [...carousel.querySelectorAll("[data-dot]")];
    const prev = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    let activeSlide = 0;

    const goTo = (index) => {
      const safeIndex = (index + slides.length) % slides.length;
      viewport.scrollTo({
        left: slides[safeIndex].offsetLeft - viewport.offsetLeft,
        behavior: "smooth"
      });
      setActive(safeIndex);
    };

    const setActive = (index) => {
      activeSlide = index;
      dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
    };

    prev.addEventListener("click", () => goTo(activeSlide - 1));
    next.addEventListener("click", () => goTo(activeSlide + 1));
    dots.forEach((dot, index) => dot.addEventListener("click", () => goTo(index)));

    viewport.addEventListener("scroll", () => {
      const viewportLeft = viewport.getBoundingClientRect().left;
      const closest = slides.reduce((best, slide, index) => {
        const distance = Math.abs(slide.getBoundingClientRect().left - viewportLeft);
        return distance < best.distance ? { index, distance } : best;
      }, { index: 0, distance: Number.POSITIVE_INFINITY });
      setActive(closest.index);
    }, { passive: true });
  });
}

function hydratePhotoButtons() {
  document.querySelectorAll(".unit-photo").forEach((button) => {
    button.addEventListener("click", () => {
      const unit = units.find((item) => item.id === button.dataset.unit);
      openModal(unit, Number(button.dataset.index));
    });
  });
}

function hydrateContactOptions() {
  const select = document.querySelector("[data-contact-unit]");
  if (!select) return;

  const currentOptions = units.map((unit) => (
    `<option value="${unit.id}">${unit.title} - ${unit.audience} (${unit.state})</option>`
  )).join("");

  select.insertAdjacentHTML("beforeend", currentOptions);
}

function openModal(unit, index = 0) {
  activeUnit = unit;
  activeIndex = index;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  renderModalImage();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function renderModalImage() {
  if (!activeUnit) return;
  const src = activeUnit.images[activeIndex];
  modalImage.src = src;
  modalImage.alt = `${activeUnit.title} ${activeUnit.audience} - foto ampliada ${activeIndex + 1}`;
  modalTitle.textContent = `${activeUnit.title} - ${activeUnit.audience}`;
  modalKicker.textContent = `${activeUnit.state} | Foto ${activeIndex + 1} de ${activeUnit.images.length}`;
  modalWa.href = whatsappLink(activeUnit, "Pode me passar mais informações sobre disponibilidade e encaminhamento?");

  modalThumbs.innerHTML = activeUnit.images.map((thumb, index) => `
    <button type="button" data-modal-thumb="${index}" class="${index === activeIndex ? "is-active" : ""}" aria-label="Abrir foto ${index + 1}">
      <img src="${thumb}" loading="lazy" alt="">
    </button>
  `).join("");

  modalThumbs.querySelectorAll("[data-modal-thumb]").forEach((button) => {
    button.addEventListener("click", () => {
      activeIndex = Number(button.dataset.modalThumb);
      renderModalImage();
    });
  });
}

function moveModal(step) {
  if (!activeUnit) return;
  activeIndex = (activeIndex + step + activeUnit.images.length) % activeUnit.images.length;
  renderModalImage();
}

function hydrateFilters() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
      document.querySelectorAll("[data-unit-card]").forEach((card) => {
        const filters = card.dataset.filters.split(" ");
        card.hidden = filter !== "all" && !filters.includes(filter);
      });
    });
  });
}

function hydrateContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const unitId = data.get("unit");
    const unit = units.find((item) => item.id === unitId);
    const name = String(data.get("name") || "").trim();
    const profile = data.get("profile");
    const message = String(data.get("message") || "").trim();
    const details = [
      name ? `Meu nome é ${name}.` : "",
      `Procuro ${profile}.`,
      message ? `Mensagem: ${message}` : ""
    ].filter(Boolean).join(" ");

    window.open(whatsappLink(unit, details), "_blank", "noopener");
  });
}

function hydrateNavigation() {
  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const toggle = document.querySelector("[data-nav-toggle]");

  const syncHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 18);
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function hydrateModal() {
  document.querySelectorAll("[data-modal-close]").forEach((button) => button.addEventListener("click", closeModal));
  document.querySelector("[data-modal-prev]").addEventListener("click", () => moveModal(-1));
  document.querySelector("[data-modal-next]").addEventListener("click", () => moveModal(1));

  window.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("is-open")) return;
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowLeft") moveModal(-1);
    if (event.key === "ArrowRight") moveModal(1);
  });
}

function init() {
  document.querySelectorAll("[data-wa-default]").forEach((link) => {
    link.href = whatsappLink(null);
  });

  renderUnits();
  hydrateFilters();
  hydrateContactForm();
  hydrateNavigation();
  hydrateModal();
}

document.addEventListener("DOMContentLoaded", init);
