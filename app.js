(function () {
  const { designs, groups, updated } = window.TRACKER;
  const groupById = Object.fromEntries(groups.map(g => [g.id, g]));

  const state = { group: "all", status: "all", query: "", view: "gallery" };
  let visible = [];   // items currently on screen, in order (used for prev/next in the dialog)
  let openIndex = -1;
  let variantIndex = 0;

  const $ = id => document.getElementById(id);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const isDone = d => d.status === "done";
  const label = d => (/^\d+$/.test(d.id) ? "#" + d.id : d.id);
  const pct = (n, total) => (total ? Math.round((n / total) * 100) : 0);

  // ── Overview ───────────────────────────────────────
  function renderOverview() {
    const done = designs.filter(isDone).length;
    const total = designs.length;
    const p = pct(done, total);

    $("updated").textContent = "Last updated " + new Date(updated + "T12:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    $("pct").textContent = p;
    $("doneCount").textContent = done;
    $("totalCount").textContent = total;
    $("legendDone").textContent = done;
    $("legendPending").textContent = total - done;
    $("mainBar").setAttribute("aria-valuenow", p);
    const withFile = designs.filter(d => isDone(d) && d.sourceFile).length;
    const ps = pct(withFile, done);
    $("srcCount").textContent = withFile;
    $("srcTotal").textContent = done;
    $("srcBar").setAttribute("aria-valuenow", ps);
    requestAnimationFrame(() => {
      $("mainFill").style.width = p + "%";
      $("srcFill").style.width = ps + "%";
    });

    $("groupStats").innerHTML = groups.map(g => {
      const items = designs.filter(d => d.group === g.id);
      const gd = items.filter(isDone).length;
      return `<button class="group-stat" data-group="${g.id}">
        <span class="name">${esc(g.name)}</span>
        <span class="count">${gd} / ${items.length}</span>
        <span class="bar"><span class="bar-fill" style="display:block;width:${pct(gd, items.length)}%"></span></span>
      </button>`;
    }).join("");
  }

  // ── Toolbar ────────────────────────────────────────
  function renderTabs() {
    const tabs = [{ id: "all", name: "All", n: designs.length }]
      .concat(groups.map(g => ({ id: g.id, name: g.name, n: designs.filter(d => d.group === g.id).length })));
    $("groupTabs").innerHTML = tabs.map(t =>
      `<button class="tab${state.group === t.id ? " active" : ""}" role="tab" data-group="${t.id}" aria-selected="${state.group === t.id}">
        ${esc(t.name)} <span class="n">${t.n}</span>
      </button>`).join("");
  }

  function setActive(container, attr, value) {
    container.querySelectorAll("button").forEach(b => b.classList.toggle("active", b.dataset[attr] === value));
  }

  // ── Cards ──────────────────────────────────────────
  function cardHTML(d) {
    const imgs = d.images || [];
    const refs = d.refs || [];
    let cover;
    if (imgs.length) {
      cover = `<div class="cover"><img src="designs/${esc(imgs[0])}" alt="${esc(d.name)}" loading="lazy">${imgs.length > 1 ? `<span class="variants">${imgs.length} variants</span>` : ""}${d.sourceFile ? `<span class="file-badge">Source file</span>` : ""}</div>`;
    } else if (refs.length) {
      cover = `<div class="cover ref"><img src="designs/${esc(refs[0].src)}" alt="Reference for ${esc(d.name)}" loading="lazy">
        <span class="ref-badge">Reference</span>${refs.length > 1 ? `<span class="variants">${refs.length} refs</span>` : ""}</div>`;
    } else {
      cover = `<div class="cover placeholder"><div class="placeholder-inner"><div class="pid">${esc(label(d))}</div><div class="ptxt">Not delivered yet</div></div></div>`;
    }
    return `<button class="card${isDone(d) ? "" : " card-pending"}" data-id="${esc(d.id)}">
      ${cover}
      <div class="card-body">
        <span class="card-id">${esc(label(d))}</span>
        <span class="card-name">${esc(d.name)}</span>
        <span class="card-meta">
          <span class="card-type">${esc(d.type)}</span>
          ${pill(d)}
        </span>
      </div>
    </button>`;
  }

  const pill = d => isDone(d)
    ? `<span class="pill pill-done">Done</span>`
    : `<span class="pill pill-pending">Pending</span>`;

  function filtered() {
    const q = state.query.trim().toLowerCase();
    return designs.filter(d =>
      (state.group === "all" || d.group === state.group) &&
      (state.status === "all" || d.status === state.status) &&
      (!q || [d.id, label(d), d.name, d.type, d.notes || ""].join(" ").toLowerCase().includes(q))
    );
  }

  // ── Content ────────────────────────────────────────
  function renderContent() {
    const items = filtered();
    const content = $("content");

    if (!items.length) {
      visible = [];
      content.innerHTML = `<p class="empty">No designs match these filters.</p>`;
      return;
    }

    if (state.view === "board") {
      const done = items.filter(isDone);
      const pending = items.filter(d => !isDone(d));
      visible = done.concat(pending);
      const col = (title, list, cls) => `<div class="column">
        <div class="column-head"><span class="pill ${cls}">${title}</span><span class="count">${list.length}</span></div>
        <div class="grid">${list.map(cardHTML).join("") || `<p class="empty" style="margin:12px 0">Nothing here</p>`}</div>
      </div>`;
      content.innerHTML = `<div class="board">${col("Done", done, "pill-done")}${col("Pending", pending, "pill-pending")}</div>`;
      return;
    }

    visible = [];
    content.innerHTML = groups.map(g => {
      const list = items.filter(d => d.group === g.id);
      if (!list.length) return "";
      visible = visible.concat(list);
      const all = designs.filter(d => d.group === g.id);
      const gd = all.filter(isDone).length;
      return `<section class="section">
        <div class="section-head">
          <div><h2>${esc(g.name)}</h2><p>${esc(g.blurb)}</p></div>
          <div class="section-progress">
            <span class="bar"><span class="bar-fill" style="display:block;width:${pct(gd, all.length)}%"></span></span>
            ${gd} / ${all.length} done
          </div>
        </div>
        <div class="grid">${list.map(cardHTML).join("")}</div>
      </section>`;
    }).join("");
  }

  // ── Detail dialog ──────────────────────────────────
  const dialog = $("detail");

  function openDetail(id) {
    openIndex = visible.findIndex(d => d.id === id);
    if (openIndex < 0) return;
    variantIndex = 0;
    fillDetail();
    if (!dialog.open) dialog.showModal();
  }

  function fillDetail() {
    const d = visible[openIndex];
    const isRef = !(d.images || []).length && (d.refs || []).length > 0;
    const imgs = isRef ? d.refs.map(r => r.src) : (d.images || []);
    $("detailId").textContent = label(d);
    $("detailTitle").textContent = d.name;
    $("detailStatus").innerHTML = pill(d);
    $("detailGroup").textContent = groupById[d.group].name;
    $("detailType").textContent = d.type;
    $("detailVariants").textContent = !isRef && imgs.length ? imgs.length : "—";
    $("detailSource").innerHTML = !isDone(d)
      ? `<span class="muted">Not yet (design pending)</span>`
      : d.sourceFile
        ? `<span class="file-ok">Figma / Adobe file delivered</span>`
        : `<span class="muted">Image only, file not delivered yet</span>`;
    $("detailNotes").innerHTML = d.notes ? `<h3>Design notes</h3><p>${esc(d.notes)}</p>` : "";
    $("detailNotes").hidden = !d.notes;

    const brief = groupById[d.group].brief;
    const rows = list => list.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("");
    $("detailSpec").innerHTML =
      (d.spec ? `<h3>What this slide needs</h3><dl class="props spec">${rows(d.spec)}</dl>` : "") +
      (brief ? `<details class="brief">
        <summary>Applies to every recap slide</summary>
        <p>${esc(brief.summary)}</p>
        <dl class="props spec">${rows(brief.rows)}</dl>
        <p class="brief-colors-label">${esc(brief.colorsNote)}</p>
        <ul class="swatches">${brief.colors.map(([name, hex]) =>
          `<li><span class="swatch" style="background:${esc(hex)}"></span>${esc(name)}</li>`).join("")}</ul>
      </details>` : "");
    $("detailSpec").hidden = !d.spec && !brief;

    const refBanner = isRef
      ? `<p class="ref-banner"><strong>Reference only</strong> · ${d.refs[variantIndex].kind === "wireframe" ? "not the final design, Regina can design her own version" : "not the delivered design"}<br><span>${esc(d.refs[variantIndex].caption)}</span></p>`
      : "";
    $("detailMedia").classList.toggle("is-ref", isRef);
    $("detailMedia").innerHTML = imgs.length
      ? `${refBanner}<div class="main-wrap"><div class="main"><img src="designs/${esc(imgs[variantIndex])}" alt="${esc(d.name)}${imgs.length > 1 ? ", image " + (variantIndex + 1) : ""}"></div>
         ${imgs.length > 1 ? `<button class="img-nav prev" data-step="-1" aria-label="Previous image">‹</button><button class="img-nav next" data-step="1" aria-label="Next image">›</button><span class="img-count">${variantIndex + 1} / ${imgs.length}</span>` : ""}</div>
         ${imgs.length > 1 ? `<div class="thumbs">${imgs.map((src, i) =>
            `<button data-variant="${i}" class="${i === variantIndex ? "active" : ""}" aria-label="Variant ${i + 1}"><img src="designs/${esc(src)}" alt=""></button>`).join("")}</div>` : ""}`
      : `<div class="main placeholder"><div class="placeholder-inner"><div class="pid">${esc(label(d))}</div><div class="ptxt">Not delivered yet</div></div></div>`;

    $("prevItem").disabled = openIndex === 0;
    $("nextItem").disabled = openIndex === visible.length - 1;
    $("prevItem").style.visibility = openIndex === 0 ? "hidden" : "";
    $("nextItem").style.visibility = openIndex === visible.length - 1 ? "hidden" : "";
  }

  function mediaCount() {
    const d = visible[openIndex];
    return (d.images || []).length || (d.refs || []).length || 1;
  }

  function step(delta) {
    const next = openIndex + delta;
    if (next < 0 || next >= visible.length) return;
    openIndex = next;
    variantIndex = 0;
    fillDetail();
  }

  // ── Events ─────────────────────────────────────────
  function selectGroup(id) {
    state.group = id;
    renderTabs();
    renderContent();
  }

  $("groupTabs").addEventListener("click", e => {
    const b = e.target.closest("[data-group]");
    if (b) selectGroup(b.dataset.group);
  });
  $("groupStats").addEventListener("click", e => {
    const b = e.target.closest("[data-group]");
    if (!b) return;
    selectGroup(b.dataset.group);
    document.querySelector(".toolbar").scrollIntoView({ behavior: "smooth" });
  });
  $("statusFilter").addEventListener("click", e => {
    const b = e.target.closest("[data-status]");
    if (!b) return;
    state.status = b.dataset.status;
    setActive($("statusFilter"), "status", state.status);
    renderContent();
  });
  $("viewToggle").addEventListener("click", e => {
    const b = e.target.closest("[data-view]");
    if (!b) return;
    state.view = b.dataset.view;
    setActive($("viewToggle"), "view", state.view);
    try { localStorage.setItem("tracker-view", state.view); } catch (_) {}
    renderContent();
  });
  $("search").addEventListener("input", e => {
    state.query = e.target.value;
    renderContent();
  });
  $("content").addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (card) openDetail(card.dataset.id);
  });
  $("detailMedia").addEventListener("click", e => {
    const nav = e.target.closest("[data-step]");
    const b = e.target.closest("[data-variant]");
    if (!nav && !b) return;
    if (nav) variantIndex = (variantIndex + Number(nav.dataset.step) + mediaCount()) % mediaCount();
    else variantIndex = Number(b.dataset.variant);
    fillDetail();
  });
  $("closeDetail").addEventListener("click", () => dialog.close());
  $("prevItem").addEventListener("click", () => step(-1));
  $("nextItem").addEventListener("click", () => step(1));
  dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
  document.addEventListener("keydown", e => {
    if (!dialog.open) return;
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  });

  // ── Init ───────────────────────────────────────────
  try {
    const saved = localStorage.getItem("tracker-view");
    if (saved === "board" || saved === "gallery") state.view = saved;
  } catch (_) {}
  setActive($("viewToggle"), "view", state.view);
  renderOverview();
  renderTabs();
  renderContent();
})();
