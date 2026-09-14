/* =========================================================
   MAIN.JS
   -----------------------------------------------------------
   App logic only. All editable content lives in config.js.
   Sections:
   1. Small helpers
   2. Ambient petals/sparkles
   3. Page navigation (entrance -> birthday -> gift pages)
   4. Gift list rendering + pagination
   5. Gift modal + per-type renderers
   6. Background music toggle
   7. Init
   ========================================================= */

(function () {
  "use strict";

  /* ---------- 1. Small helpers ---------- */
  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  function el(tag, opts) {
    const node = document.createElement(tag);
    if (!opts) return node;
    if (opts.class) node.className = opts.class;
    if (opts.html !== undefined) node.innerHTML = opts.html;
    if (opts.text !== undefined) node.textContent = opts.text;
    if (opts.attrs) Object.entries(opts.attrs).forEach(([k, v]) => node.setAttribute(k, v));
    return node;
  }

  const ICONS = {
    note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
    letter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 6l9 7 9-7"/></svg>',
    drawing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M4 20l4-1 11-11-3-3L5 16l-1 4z"/><path d="M14 6l3 3"/></svg>',
    music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M9 18V5l10-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/></svg>',
    video: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="6" width="13" height="12" rx="1"/><path d="M16 10l5-3v10l-5-3z"/></svg>',
    flower: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="2.3"/><path d="M12 3c1.8 0 3 1.6 3 3.2 0 1.6-1.2 2.8-3 3.8-1.8-1-3-2.2-3-3.8C9 4.6 10.2 3 12 3zM12 21c1.8 0 3-1.6 3-3.2 0-1.6-1.2-2.8-3-3.8-1.8 1-3 2.2-3 3.8 0 1.6 1.2 3.2 3 3.2zM3 12c0-1.8 1.6-3 3.2-3 1.6 0 2.8 1.2 3.8 3-1 1.8-2.2 3-3.8 3C4.6 15 3 13.8 3 12zM21 12c0 1.8-1.6 3-3.2 3-1.6 0-2.8-1.2-3.8-3 1-1.8 2.2-3 3.8-3 1.8 0 3.2 1.2 3.2 3z"/></svg>',
    voice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/></svg>',
    album: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3" y="5" width="18" height="14" rx="1"/><circle cx="9" cy="11" r="2"/><path d="M4 18l5-5 4 4 3-3 4 4"/></svg>',
    tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 3l8 8-9 9-8-8V4h8z"/><circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none"/></svg>',
    manual: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M6 3h11a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z"/><path d="M8 8h7M8 12h7M8 16h4"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M12 20s-7-4.4-9.5-8.8C1 8 2.5 4.8 6 4.2c2-.3 3.6.7 6 3 2.4-2.3 4-3.3 6-3 3.5.6 5 3.8 3.5 7C19 15.6 12 20 12 20z"/></svg>'
  };

  /* ---------- 2. Ambient petals/sparkles ---------- */
  function startAmbient() {
    const layer = $("#ambient-layer");
    if (!layer) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    function spawnPetal() {
      const petal = el("div", { class: "petal" + (Math.random() > .5 ? " alt" : "") });
      const left = Math.random() * 100;
      const duration = 9 + Math.random() * 8;
      const drift = (Math.random() * 120 - 60) + "px";
      const size = 8 + Math.random() * 10;
      petal.style.left = left + "vw";
      petal.style.width = size + "px";
      petal.style.height = size + "px";
      petal.style.setProperty("--drift", drift);
      petal.style.animationDuration = duration + "s";
      layer.appendChild(petal);
      setTimeout(() => petal.remove(), duration * 1000 + 200);
    }

    function spawnSpark() {
      const spark = el("div", { class: "spark" });
      spark.style.left = Math.random() * 100 + "vw";
      spark.style.top = Math.random() * 100 + "vh";
      spark.style.animationDuration = (2.6 + Math.random() * 2.4) + "s";
      layer.appendChild(spark);
      setTimeout(() => spark.remove(), 6000);
    }

    for (let i = 0; i < 6; i++) setTimeout(spawnPetal, i * 900);
    for (let i = 0; i < 10; i++) setTimeout(spawnSpark, i * 400);
    setInterval(spawnPetal, 1600);
    setInterval(spawnSpark, 900);
  }

  /* ---------- 3. Page navigation ---------- */
  const pages = ["page-entrance", "page-birthday", "page-gifts", "page-credits"];

  function showPage(id) {
    pages.forEach(pid => {
      const p = document.getElementById(pid);
      if (!p) return;
      if (pid === id) {
        p.classList.add("is-active", "page-fade");
        p.setAttribute("tabindex", "-1");
        p.focus({ preventScroll: true });
      } else {
        p.classList.remove("is-active", "page-fade");
      }
    });
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  /* ---------- 4. Gift list rendering + pagination ---------- */
  const PAGE_SPLITS = [
    { label: "1 / 4", range: [1, 3] },
    { label: "2 / 4", range: [4, 8] },
    { label: "3 / 4", range: [9, 13] },
    { label: "4 / 4", range: [14, 18] }
  ];

  let currentGiftPage = 0;
  const openedGifts = new Set();

  function giftsForPage(pageIndex) {
    const [from, to] = PAGE_SPLITS[pageIndex].range;
    return CONFIG.gifts.filter(g => g.id >= from && g.id <= to);
  }

  function renderGiftGrid() {
    const grid = $("#gift-grid");
    grid.innerHTML = "";
    const gifts = giftsForPage(currentGiftPage);
    gifts.forEach(g => {
      const card = el("div", { class: "gift-card" + (openedGifts.has(g.id) ? " is-opened" : "") });
      card.dataset.giftId = g.id;

      const top = el("div", { class: "gift-card-top" });
      top.appendChild(el("span", { class: "gift-number", text: String(g.id).padStart(2, "0") }));
      top.appendChild(el("span", { class: "gift-icon", html: ICONS[g.icon] || ICONS.note }));
      card.appendChild(top);

      card.appendChild(el("h3", { text: g.title }));
      card.appendChild(el("p", { class: "gift-teaser", text: g.teaser }));

      const btn = el("button", {
        class: "btn btn-gift btn-small gift-open-btn",
        text: openedGifts.has(g.id) ? "Open again" : "Open"
      });
      btn.addEventListener("click", () => openGift(g.id));
      card.appendChild(btn);

      grid.appendChild(card);
    });

    $("#gifts-page-indicator").textContent = PAGE_SPLITS[currentGiftPage].label;
    $("#gifts-prev").disabled = currentGiftPage === 0;
    $("#gifts-next").disabled = currentGiftPage === PAGE_SPLITS.length - 1;
  }

  function goToGiftPage(delta) {
    const next = currentGiftPage + delta;
    if (next < 0 || next >= PAGE_SPLITS.length) return;
    currentGiftPage = next;
    renderGiftGrid();
    $("#page-gifts").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------- 5. Gift modal ---------- */
  const overlay = () => $("#gift-modal-overlay");

  function assetOrPlaceholder(path, kind, label) {
    // Returns a wrapper element: real media if it loads, otherwise
    // a tasteful placeholder. Works over file:// too (onerror fires
    // for missing local files).
    const wrap = el("div");

    if (kind === "img") {
      const img = el("img");
      img.alt = label || "";
      img.loading = "lazy";
      const ph = buildPlaceholder(path, "image");
      img.addEventListener("error", () => {
        img.replaceWith(ph);
      }, { once: true });
      img.src = path;
      wrap.appendChild(img);
      return wrap;
    }

    if (kind === "audio") {
      // preload="metadata" lets the browser check the file exists (so we
      // can swap in a placeholder immediately) without autoplaying it.
      const audio = el("audio", { attrs: { controls: "", preload: "metadata" } });
      const source = el("source", { attrs: { src: path } });
      audio.appendChild(source);
      const ph = buildPlaceholder(path, "audio");
      audio.addEventListener("error", () => {
        audio.replaceWith(ph);
      }, { once: true, capture: true });
      wrap.appendChild(audio);
      audio.load();
      return { wrap, audio };
    }

    if (kind === "video") {
      const video = el("video", { attrs: { controls: "", preload: "metadata", playsinline: "" } });
      const source = el("source", { attrs: { src: path } });
      video.appendChild(source);
      const ph = buildPlaceholder(path, "video");
      video.addEventListener("error", () => {
        video.replaceWith(ph);
      }, { once: true, capture: true });
      wrap.appendChild(video);
      video.load();
      return wrap;
    }

    return wrap;
  }

  function buildPlaceholder(path, kind) {
    const box = el("div", { class: "asset-placeholder" });
    const icons = { image: "\u25A6", audio: "\u266B", video: "\u25B8" };
    box.appendChild(el("div", { class: "ph-icon", text: icons[kind] || "\u2022" }));
    box.appendChild(el("div", { class: "ph-title", text: "Add the file to reveal this" }));
    box.appendChild(el("span", { class: "ph-path", text: path }));
    return box;
  }

  function openGift(id) {
    const gift = CONFIG.gifts.find(g => g.id === id);
    if (!gift) return;
    openedGifts.add(id);
    renderGiftGrid();

    const isFinal = gift.type === "final";
    const ov = overlay();
    ov.classList.toggle("finale-overlay", isFinal);
    ov.innerHTML = "";

    const card = el("div", { class: "modal-card" });
    const closeBtn = el("button", { class: "modal-close-x", html: "&times;", attrs: { "aria-label": "Close" } });
    closeBtn.addEventListener("click", closeGift);
    card.appendChild(closeBtn);

    if (isFinal) {
      renderFinalGift(card, gift);
    } else {
      card.appendChild(el("span", { class: "gift-modal-eyebrow", text: "Gift " + String(gift.id).padStart(2, "0") }));
      card.appendChild(el("h3", { class: "gift-modal-title", text: gift.modalTitle }));
      const body = el("div", { class: "gift-modal-body" });
      renderGiftBody(body, gift);
      card.appendChild(body);

      const back = el("button", { class: "btn btn-outline btn-small modal-back", text: "\u2190 Back to gifts" });
      back.addEventListener("click", closeGift);
      card.appendChild(back);
    }

    ov.appendChild(card);
    requestAnimationFrame(() => ov.classList.add("is-open"));
    document.body.style.overflow = "hidden";
  }

  function closeGift() {
    const ov = overlay();
    ov.classList.remove("is-open");
    document.body.style.overflow = "";
    // stop any playing media
    $$("audio, video", ov).forEach(m => m.pause && m.pause());
    setTimeout(() => { ov.innerHTML = ""; }, 400);
  }

  // Closes the gift modal, resets gift pagination to page 1, and
  // returns to the entrance page. Used by Gift 18's "Back to the
  // beginning" button, and by the Credits page's own back button.
  function resetToEntrance() {
    closeGift();
    currentGiftPage = 0;
    renderGiftGrid();
    showPage("page-entrance");
  }

  // Closes the gift modal and shows the Credits / About the
  // Project page. Reached only from Gift 18's "story behind
  // this" link — a quiet epilogue after the birthday content.
  function goToCredits() {
    closeGift();
    renderCredits();
    showPage("page-credits");
  }

  function renderGiftBody(body, gift) {
    switch (gift.type) {
      case "image": {
        const frame = el("div", { class: "paper-frame" + (gift.id % 2 === 0 ? " tilt-right" : "") });
        frame.appendChild(assetOrPlaceholder(gift.image, "img", gift.modalTitle).firstChild);
        body.appendChild(frame);
        break;
      }
      case "audio": {
        if (gift.leadNote) {
          const asideWrap = el("div");
          gift.leadNote.split("\n").forEach(line => {
            asideWrap.appendChild(el("p", { class: "aside-note", text: line }));
          });
          body.appendChild(asideWrap);
        }
        const block = el("div", { class: "audio-block" });
        if (gift.showWave) {
          const wave = el("div", { class: "voice-wave" });
          for (let i = 0; i < 7; i++) wave.appendChild(el("span"));
          block.appendChild(wave);
          const result = assetOrPlaceholder(gift.audio, "audio", gift.modalTitle);
          if (result.audio) {
            result.audio.addEventListener("play", () => wave.classList.add("is-playing"));
            result.audio.addEventListener("pause", () => wave.classList.remove("is-playing"));
            result.audio.addEventListener("ended", () => wave.classList.remove("is-playing"));
          }
          block.appendChild(result.wrap || result);
        } else {
          const result = assetOrPlaceholder(gift.audio, "audio", gift.modalTitle);
          block.appendChild(result.wrap || result);
        }
        body.appendChild(block);
        break;
      }
      case "video": {
        body.appendChild(assetOrPlaceholder(gift.video, "video", gift.modalTitle));
        if (gift.caption) body.appendChild(el("p", { class: "media-caption", text: gift.caption }));
        break;
      }
      case "flowerNote": {
        const grid = el("div", { class: "two-up" });
        const frame1 = el("div", { class: "paper-frame" });
        frame1.appendChild(assetOrPlaceholder(gift.flowerImage, "img", "Pressed flower").firstChild);
        const frame2 = el("div", { class: "paper-frame tilt-right" });
        frame2.appendChild(assetOrPlaceholder(gift.noteImage, "img", "Note").firstChild);
        grid.appendChild(frame1);
        grid.appendChild(frame2);
        body.appendChild(grid);
        break;
      }
      case "album": {
        renderAlbum(body);
        break;
      }
      case "nicknames": {
        renderNicknames(body);
        break;
      }
      case "promises": {
        gift.intro.forEach(line => body.appendChild(el("p", { text: line })));
        const frame = el("div", { class: "paper-frame", attrs: { style: "margin-top:18px" } });
        frame.appendChild(assetOrPlaceholder(gift.image, "img", "Promises").firstChild);
        body.appendChild(frame);
        break;
      }
      case "manual": {
        renderManual(body);
        break;
      }
      default:
        break;
    }
  }

  function renderAlbum(body) {
    // ---- Group 1: curated picks ----
    const picksHeading = el("div", { class: "album-group-heading" });
    picksHeading.appendChild(el("span", { class: "album-group-label", text: "My picks" }));
    body.appendChild(picksHeading);

    const gallery = el("div", { class: "picks-gallery" });
    CONFIG.album.curatedPicks.forEach((pick, i) => {
      const card = el("div", { class: "pick-card" + (i % 2 === 1 ? " pick-card--alt" : "") });
      const frame = el("div", { class: "pick-frame" });
      const img = el("img");
      img.alt = pick.label;
      img.loading = "lazy";
      const ph = buildPlaceholder(pick.file, "image");
      img.addEventListener("error", () => { img.replaceWith(ph); }, { once: true });
      img.src = pick.file;
      frame.appendChild(img);
      card.appendChild(frame);
      card.appendChild(el("span", { class: "pick-label", text: pick.label }));
      gallery.appendChild(card);
    });
    body.appendChild(gallery);

    body.appendChild(el("div", { class: "album-divider" }));

    // ---- Group 2: timeline ----
    const timelineHeading = el("div", { class: "album-group-heading" });
    timelineHeading.appendChild(el("span", { class: "album-group-label", text: "A little timeline" }));
    body.appendChild(timelineHeading);

    const timeline = el("div", { class: "photo-timeline" });
    CONFIG.album.timeline.forEach(entry => {
      const item = el("div", { class: "timeline-item" });
      item.appendChild(el("div", { class: "timeline-marker" }));

      const content = el("div", { class: "timeline-content" });
      content.appendChild(el("span", { class: "timeline-date", text: entry.date }));

      const frame = el("div", { class: "timeline-frame" });
      const img = el("img");
      img.alt = entry.date;
      img.loading = "lazy";
      const ph = buildPlaceholder(entry.file, "image");
      img.addEventListener("error", () => { img.replaceWith(ph); }, { once: true });
      img.src = entry.file;
      frame.appendChild(img);
      content.appendChild(frame);

      if (entry.caption) {
        content.appendChild(el("p", { class: "timeline-caption", text: entry.caption }));
      }

      item.appendChild(content);
      timeline.appendChild(item);
    });
    body.appendChild(timeline);

    if (CONFIG.album.timelineDisclaimer) {
      body.appendChild(el("p", { class: "timeline-disclaimer", text: CONFIG.album.timelineDisclaimer }));
    }
  }

  function renderNicknames(body) {
    const heading = el("div", { class: "nickname-heading" });
    (CONFIG.nicknamesHeading || []).forEach(word => {
      heading.appendChild(el("span", { class: "nickname-heading-word", text: word }));
    });
    body.appendChild(heading);

    const scatter = el("div", { class: "nickname-scatter" });
    const sizeClasses = ["sz-sm", "sz-md", "sz-lg"];
    CONFIG.nicknames.forEach((name, i) => {
      const chip = el("span", { class: "nickname-chip scatter-chip " + sizeClasses[i % sizeClasses.length], text: name });
      const rotation = ((i * 37) % 13) - 6; // deterministic gentle scatter, -6..6deg
      chip.style.setProperty("--rot", rotation + "deg");
      chip.style.animationDelay = (i * 0.05) + "s";
      scatter.appendChild(chip);
    });
    body.appendChild(scatter);
  }

  function renderManual(body) {
    if (CONFIG.userManual.subtitle) {
      body.appendChild(el("p", { class: "manual-subtitle", text: CONFIG.userManual.subtitle }));
    }

    const doc = el("div", { class: "manual-doc" });
    CONFIG.userManual.sections.forEach((sectionData, idx) => {
      const section = el("div", { class: "manual-section" + (idx === 0 ? " is-open" : "") });
      const btn = el("button", { class: "manual-section-btn" });
      btn.appendChild(el("span", { text: sectionData.title }));
      btn.appendChild(el("span", { class: "chev", text: "\u203A" }));
      btn.addEventListener("click", () => section.classList.toggle("is-open"));
      section.appendChild(btn);

      const bodyEl = el("div", { class: "manual-section-body" });

      if (sectionData.type === "troubleshooting") {
        const wrap = el("div", { class: "manual-troubleshooting" });
        sectionData.entries.forEach(entry => {
          const card = el("div", { class: "trouble-card" });
          [
            ["Problem:", entry.problem],
            ["Possible cause:", entry.cause],
            ["Incorrect response:", entry.incorrectResponse],
            ["Recommended response:", entry.recommendedResponse]
          ].forEach(([label, value]) => {
            // Not every entry has an "incorrect response" — skip blank fields
            // instead of rendering an empty row.
            if (!value) return;
            const row = el("div", { class: "trouble-row" });
            row.appendChild(el("span", { class: "trouble-label", text: label }));
            row.appendChild(el("span", { class: "trouble-value", text: value }));
            card.appendChild(row);
          });
          wrap.appendChild(card);
        });
        bodyEl.appendChild(wrap);
      } else if (sectionData.type === "text") {
        bodyEl.appendChild(el("p", { class: "manual-disclaimer-text", text: sectionData.text }));
        if (sectionData.versionNote) {
          bodyEl.appendChild(el("p", { class: "manual-version-note", text: sectionData.versionNote }));
        }
      } else {
        const ul = el("ul");
        sectionData.items.forEach(item => ul.appendChild(el("li", { text: item })));
        bodyEl.appendChild(ul);
      }

      section.appendChild(bodyEl);
      doc.appendChild(section);
    });
    body.appendChild(doc);
  }

  function renderFinalGift(card, gift) {
    card.appendChild(el("span", { class: "gift-modal-eyebrow finale-eyebrow", text: "Gift 18" }));
    card.appendChild(el("h3", { class: "gift-modal-title visually-hidden", text: "18" }));

    const lead = el("div", { class: "finale-lead" });
    lead.appendChild(el("span", { class: "big", text: "18." }));
    lead.appendChild(el("span", { class: "small", text: "The last one." }));
    card.appendChild(lead);

    const frame = el("div", { class: "paper-frame" });
    const imgWrap = assetOrPlaceholder(gift.image, "img", "The final letter");
    frame.appendChild(imgWrap.firstChild);
    frame.addEventListener("click", () => frame.classList.toggle("is-zoomed"));
    card.appendChild(frame);

    const outro = el("div", { class: "finale-outro" });
    outro.appendChild(el("p", { text: "That's all." }));
    outro.appendChild(el("p", { text: "At least for this birthday." }));
    outro.appendChild(el("div", { class: "heart", text: "\u2661" }));
    card.appendChild(outro);

    const story = el("button", { class: "btn btn-ghost btn-small finale-story-btn", text: "The story behind this \u2192" });
    story.addEventListener("click", goToCredits);
    card.appendChild(story);

    const back = el("button", { class: "btn btn-ghost btn-small modal-back", text: "Back to the beginning \u21ba" });
    back.addEventListener("click", resetToEntrance);
    card.appendChild(back);
  }

  /* ---------- Credits / About the Project page ---------- */
  function renderCredits() {
    const c = CONFIG.credits;
    if (!c) return;

    $("#credits-eyebrow").textContent = c.eyebrow || "";
    $("#credits-title").textContent = c.title || "";

    const storyWrap = $("#credits-story");
    storyWrap.innerHTML = "";
    (c.storyParagraphs || []).forEach(text => {
      storyWrap.appendChild(el("p", { text }));
    });

    const listWrap = $("#credits-list");
    listWrap.innerHTML = "";
    (c.creditsList || []).forEach(entry => {
      const row = el("div", { class: "credits-row" });
      row.appendChild(el("span", { class: "credits-label", text: entry.label }));
      row.appendChild(el("span", { class: "credits-value", text: entry.value }));
      listWrap.appendChild(row);
    });

    $("#credits-closing").textContent = c.closingLine || "";

    const backBtn = $("#credits-back-btn");
    backBtn.textContent = c.backLabel || "Back to the beginning";
    // avoid stacking duplicate listeners if renderCredits ever runs twice
    backBtn.onclick = resetToEntrance;
  }

  /* ---------- 6. Background music toggle ---------- */
  function setupMusic() {
    const toggle = $("#music-toggle");
    if (!toggle) return;
    if (!CONFIG.backgroundMusic || !CONFIG.backgroundMusic.file) {
      toggle.style.display = "none";
      return;
    }
    const audio = new Audio(CONFIG.backgroundMusic.file);
    audio.loop = true;
    audio.volume = 0.35;
    let playing = false;
    toggle.addEventListener("click", () => {
      playing = !playing;
      if (playing) audio.play().catch(() => {}); else audio.pause();
      toggle.dataset.playing = String(playing);
      toggle.textContent = playing ? "\u266A" : "\u266B";
    });
  }

  /* ---------- 7. Init ---------- */
  function applyRecipientName() {
    $$("[data-name]").forEach(node => {
      node.textContent = node.textContent.replace(/Mira/g, CONFIG.recipientName);
    });
  }

  function buildEntrance() {
    $("#entrance-eyebrow").textContent = CONFIG.entrance.eyebrow;
    $("#entrance-title").textContent = CONFIG.entrance.title;
    $("#entrance-sub").textContent = CONFIG.entrance.sub;
    $("#entrance-btn").textContent = CONFIG.entrance.button;
  }

  function buildBirthday() {
    const img = $("#birthday-photo");
    img.alt = CONFIG.recipientName;
    img.addEventListener("error", () => {
      const ph = buildPlaceholder(CONFIG.birthday.mainPhoto, "image");
      img.replaceWith(ph);
    }, { once: true });
    img.src = CONFIG.birthday.mainPhoto;

    $("#birthday-heading").textContent = CONFIG.birthday.heading;

    const textWrap = $("#birthday-text");
    textWrap.innerHTML = "";
    CONFIG.birthday.paragraphs.forEach(chunk => {
      const isWhisper = /^(so\.\.\.|and yes\.\.\.|actually\.\.\.)$/i.test(chunk.trim());
      chunk.split("\n").forEach(line => {
        const p = el("p", { text: line });
        if (isWhisper) p.classList.add("whisper");
        textWrap.appendChild(p);
      });
    });

    $("#birthday-continue-label").textContent = CONFIG.birthday.continueLabel;
  }

  function bindNav() {
    $("#entrance-btn").addEventListener("click", () => showPage("page-birthday"));
    $("#birthday-continue-btn").addEventListener("click", () => showPage("page-gifts"));
    $("#gifts-prev").addEventListener("click", () => goToGiftPage(-1));
    $("#gifts-next").addEventListener("click", () => goToGiftPage(1));
    overlay().addEventListener("click", (e) => {
      if (e.target === overlay()) closeGift();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay().classList.contains("is-open")) closeGift();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyRecipientName();
    buildEntrance();
    buildBirthday();
    renderGiftGrid();
    bindNav();
    setupMusic();
    startAmbient();
    showPage("page-entrance");
  });
})();
