(function () {
  "use strict";

  const WORKS = [
    {
      id: "starry-night",
      title: "The Starry Night",
      artist: "Vincent van Gogh",
      year: "1889",
      movement: "Post-Impressionism",
      category: "impressionism",
      medium: "Oil on canvas · MoMA, New York",
      img: "assets/starry-night.jpg",
      desc: "Painted from an asylum window in Saint-Rémy, the swirling sky is less a night scene than a nervous system — cypress flame, sleeping village, and eleven suns of starlight."
    },
    {
      id: "the-kiss",
      title: "The Kiss",
      artist: "Gustav Klimt",
      year: "c. 1907–08",
      movement: "Vienna Secession",
      category: "modern",
      medium: "Oil, gold and silver leaf · Belvedere, Vienna",
      img: "assets/the-kiss.jpg",
      desc: "The crown of Klimt's Golden Phase: two lovers fused into one mosaic-clad figure, suspended in a meadow of Byzantine ornament and pure desire."
    },
    {
      id: "pearl-girl",
      title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      year: "c. 1665",
      movement: "Dutch Golden Age",
      category: "old-masters",
      medium: "Oil on canvas · Mauritshuis, The Hague",
      img: "assets/pearl-girl.jpg",
      desc: "Not a portrait but a tronie — an exercise in character. The light on her lips and the tear-drop pearl have made her the most looked-at girl in art history."
    },
    {
      id: "great-wave",
      title: "The Great Wave off Kanagawa",
      artist: "Katsushika Hokusai",
      year: "c. 1831",
      movement: "Ukiyo-e",
      category: "asian",
      medium: "Woodblock print · holdings worldwide",
      img: "assets/great-wave.jpg",
      desc: "A claw of foam dwarfs Mount Fuji in Hokusai's print series — the moment Japanese art taught the Western world that a wave could outstage a mountain."
    },
    {
      id: "wanderer",
      title: "Wanderer above the Sea of Fog",
      artist: "Caspar David Friedrich",
      year: "c. 1818",
      movement: "Romanticism",
      category: "old-masters",
      medium: "Oil on canvas · Hamburger Kunsthalle",
      img: "assets/wanderer.jpg",
      desc: "A man stands with his back to us, surveying a sea of fog — the Romantic formula for the sublime: nature vast, the self small, and the view impossible to forget."
    },
    {
      id: "scream",
      title: "The Scream",
      artist: "Edvard Munch",
      year: "1893",
      movement: "Expressionism",
      category: "modern",
      medium: "Tempera & pastel on board · National Museum, Oslo",
      img: "assets/scream.jpg",
      desc: "Munch painted not a figure but a sensation: a sky bleeding orange over a fjord, and an androgynous shape screaming — or is it the world screaming through it?"
    },
    {
      id: "water-lilies",
      title: "Water Lilies",
      artist: "Claude Monet",
      year: "1906",
      movement: "Impressionism",
      category: "impressionism",
      medium: "Oil on canvas · Art Institute of Chicago",
      img: "assets/water-lilies.jpg",
      desc: "One of some 250 panels Monet painted at Giverny, where the pond became a mirror and the mirror became the whole subject — sky, trees and blossom afloat."
    },
    {
      id: "grande-jatte",
      title: "A Sunday on La Grande Jatte",
      artist: "Georges Seurat",
      year: "1884–86",
      movement: "Pointillism",
      category: "impressionism",
      medium: "Oil on canvas · The Art Institute of Chicago",
      img: "assets/grande-jatte.jpg",
      desc: "Two years of science: millions of pigment dots that fuse in the eye into a Parisian afternoon. Seurat painted stillness as if it were an optical theorem."
    },
    {
      id: "composition-viii",
      title: "Composition VIII",
      artist: "Wassily Kandinsky",
      year: "1923",
      movement: "Abstraction",
      category: "modern",
      medium: "Oil on canvas · Solomon R. Guggenheim Museum",
      img: "assets/composition-viii.jpg",
      desc: "Circles, arrows and grids in orchestral counterpoint — Kandinsky's Bauhaus-era argument that form is colour's music and painting need look at nothing."
    },
    {
      id: "composition-ii",
      title: "Composition with Red, Yellow and Blue",
      artist: "Piet Mondrian",
      year: "1921",
      movement: "De Stijl",
      category: "modern",
      medium: "Oil on canvas",
      img: "assets/composition-red-blue-yellow.jpg",
      desc: "The world reduced to primaries and black lines — yet the uneven rectangles shimmer with rhythm. Mondrian's grid is not a formula; it is a balancing act."
    }
  ];

  const ARTISTS = [
    { name: "Vincent van Gogh", dates: "1853–1890", work: "starry-night" },
    { name: "Gustav Klimt", dates: "1862–1918", work: "the-kiss" },
    { name: "Johannes Vermeer", dates: "1632–1675", work: "pearl-girl" },
    { name: "Katsushika Hokusai", dates: "1760–1849", work: "great-wave" },
    { name: "Claude Monet", dates: "1840–1926", work: "water-lilies" },
    { name: "Edvard Munch", dates: "1863–1944", work: "scream" },
    { name: "Georges Seurat", dates: "1859–1891", work: "grande-jatte" },
    { name: "Wassily Kandinsky", dates: "1866–1944", work: "composition-viii" },
    { name: "Piet Mondrian", dates: "1872–1944", work: "composition-ii" },
    { name: "Caspar D. Friedrich", dates: "1774–1840", work: "wanderer" }
  ];

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------- Header ---------- */
  const header = $("#siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const menuToggle = $("#menuToggle");
  const mainNav = $("#mainNav");
  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  $$(".nav-link", mainNav).forEach(link =>
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    })
  );

  /* ---------- Reveal on scroll ---------- */
  const revealObserver = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); revealObserver.unobserve(e.target); }
    }),
    { threshold: 0.12 }
  );
  $$(".reveal").forEach(el => revealObserver.observe(el));

  /* ---------- Counters ---------- */
  const animateCount = el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    const dur = 1400;
    const t0 = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const statsObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        $$(".stat-num", e.target).forEach(animateCount);
        statsObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  statsObserver.observe($("#heroStats"));

  /* ---------- Art grid ---------- */
  const grid = $("#artGrid");
  const emptyState = $("#emptyState");

  WORKS.forEach((w, i) => {
    const card = document.createElement("button");
    card.className = "art-card reveal";
    card.type = "button";
    card.dataset.id = w.id;
    card.dataset.category = w.category;
    card.dataset.search = `${w.title} ${w.artist} ${w.year} ${w.movement}`.toLowerCase();
    card.style.setProperty("--i", String(i % 3));
    card.innerHTML = `
      <div class="art-thumb">
        <img src="${w.img}" alt="${w.title} by ${w.artist}" loading="lazy" />
        <span class="art-year">${w.year.replace(/^c\.\s*/, "c. ")}</span>
      </div>
      <div class="art-info">
        <p class="art-movement">${w.movement}</p>
        <h3 class="art-title">${w.title}</h3>
        <p class="art-artist">${w.artist}</p>
      </div>`;
    card.addEventListener("click", () => openLightbox(w.id));
    grid.appendChild(card);
    revealObserver.observe(card);
  });

  /* ---------- Filter + search ---------- */
  const chips = $$(".chip", $("#filterChips"));
  const searchInput = $("#searchInput");
  let activeFilter = "all";

  function applyQuery() {
    const q = searchInput.value.trim().toLowerCase();
    let visible = 0;
    $$(".art-card").forEach(card => {
      const show = (activeFilter === "all" || card.dataset.category === activeFilter) &&
        (!q || card.dataset.search.includes(q));
      card.classList.toggle("hidden", !show);
      if (show) visible++;
    });
    emptyState.hidden = visible > 0;
  }

  chips.forEach(chip =>
    chip.addEventListener("click", () => {
      chips.forEach(c => { c.classList.remove("is-active"); c.setAttribute("aria-selected", "false"); });
      chip.classList.add("is-active");
      chip.setAttribute("aria-selected", "true");
      activeFilter = chip.dataset.filter;
      applyQuery();
    })
  );

  searchInput.addEventListener("input", applyQuery);
  $("#resetSearch").addEventListener("click", () => {
    searchInput.value = "";
    activeFilter = "all";
    chips.forEach(c => {
      const isAll = c.dataset.filter === "all";
      c.classList.toggle("is-active", isAll);
      c.setAttribute("aria-selected", String(isAll));
    });
    applyQuery();
  });

  /* ---------- Artist rail ---------- */
  const artistRail = $("#artistRail");
  ARTISTS.forEach(a => {
    const initials = a.name.split(/\s+/).map(p => p[0]).join("").slice(0, 2);
    const card = document.createElement("div");
    card.className = "artist-card";
    card.innerHTML = `
      <div class="artist-avatar" aria-hidden="true">${initials}</div>
      <h3>${a.name}</h3>
      <p>${a.dates}</p>
      <span class="artist-works">
        <button class="artist-work-btn" type="button" data-work="${a.work}">view work</button>
      </span>`;
    artistRail.appendChild(card);
  });
  artistRail.addEventListener("click", e => {
    const btn = e.target.closest(".artist-work-btn");
    if (btn) openLightbox(btn.dataset.work);
  });

  /* ---------- Lightbox ---------- */
  const lightbox = $("#lightbox");
  const lbImage = $("#lbImage");
  const lbTitle = $("#lbTitle");
  const lbArtist = $("#lbArtist");
  const lbMeta = $("#lbMeta");
  const lbDesc = $("#lbDesc");
  const lbMovement = $("#lbMovement");
  const lbCount = $("#lbCount");
  let currentIndex = -1;
  let lastFocused = null;

  function visibleIds() {
    return $$(".art-card").filter(c => !c.classList.contains("hidden")).map(c => c.dataset.id);
  }

  function renderLightbox(id) {
    const w = WORKS.find(x => x.id === id);
    if (!w) return;
    currentIndex = WORKS.indexOf(w);
    lbImage.src = w.img;
    lbImage.alt = `${w.title} by ${w.artist}`;
    lbTitle.textContent = w.title;
    lbArtist.textContent = w.artist;
    lbMeta.textContent = `${w.year} · ${w.medium}`;
    lbDesc.textContent = w.desc;
    lbMovement.textContent = w.movement;
    lbCount.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(WORKS.length).padStart(2, "0")}`;
  }

  function openLightbox(id) {
    renderLightbox(id);
    lastFocused = document.activeElement;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  function step(dir) {
    const ids = visibleIds();
    if (!ids.length) return;
    const w = WORKS[currentIndex];
    let pos = ids.indexOf(w ? w.id : ids[0]);
    if (pos === -1) pos = dir > 0 ? 0 : ids.length - 1;
    const next = ids[(pos + dir + ids.length) % ids.length];
    renderLightbox(next);
  }

  $("#lbClose").addEventListener("click", closeLightbox);
  $("#lbPrev").addEventListener("click", () => step(-1));
  $("#lbNext").addEventListener("click", () => step(1));
  lightbox.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener("keydown", e => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });

  /* ---------- Exhibition links open anchor work ---------- */
  $$("[data-open-work]").forEach(link =>
    link.addEventListener("click", e => {
      e.preventDefault();
      document.getElementById("collection").scrollIntoView();
      openLightbox(link.dataset.openWork);
    })
  );

  /* ---------- Newsletter ---------- */
  const form = $("#newsletterForm");
  const emailInput = $("#emailInput");
  const note = $("#formNote");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const value = emailInput.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
    emailInput.classList.toggle("invalid", !valid);
    note.className = "form-note " + (valid ? "ok" : "err");
    if (valid) {
      note.textContent = "Welcome to the patron list — first letter arrives with the December acquisition notes.";
      emailInput.value = "";
    } else {
      note.textContent = value ? "That address doesn't look quite right." : "Please enter your email address.";
    }
  });
  emailInput.addEventListener("input", () => {
    emailInput.classList.remove("invalid");
    note.textContent = "";
    note.className = "form-note";
  });
})();
