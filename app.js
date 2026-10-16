/* Shared behaviour for every page. Content comes from content.js (window.SITE).
   Pages contain empty containers like <div data-render="portfolio"></div>. */
(function () {
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const icon = (n, color = "f4ede1") => `https://cdn.simpleicons.org/${n}/${color}`;
  const wa = (msg) => `https://wa.me/${S.contact.whatsappNumber}?text=${encodeURIComponent(msg || S.contact.whatsappMessage)}`;
  const page = location.pathname.split("/").pop() || "index.html";

  const socials = () => [
    ["instagram", "Instagram", S.social.instagram],
    ["facebook", "Facebook", S.social.facebook],
    ["telegram", "Telegram", S.social.telegram],
    ["whatsapp", "WhatsApp", wa()],
  ].map(([n, l, h]) => `<a href="${esc(h)}" target="_blank" rel="noopener" aria-label="${l}"><img src="${icon(n)}" alt="" width="20" height="20" loading="lazy"></a>`).join("");

  const logo = () => S.brand.logoImage
    ? `<a class="logo" href="index.html" aria-label="${esc(S.brand.name)} home"><img src="${esc(S.brand.logoImage)}" alt="${esc(S.brand.name)}"></a>`
    : `<a class="logo" href="index.html" aria-label="${esc(S.brand.name)} home"><span class="mono">${esc(S.brand.monogram)}</span><span>${esc(S.brand.name)}</span></a>`;

  /* ---- Header / footer / WhatsApp ---- */
  function chrome() {
    document.body.insertAdjacentHTML("afterbegin", `<a class="skip" href="#main">Skip to content</a>
      <header class="top"><div class="wrap">${logo()}
        <button class="burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
        <nav class="main" aria-label="Main"><ul>${S.nav.map((n) => `<li><a href="${n.href}" class="${n.href === page ? "active" : ""}">${n.label}</a></li>`).join("")}</ul></nav>
      </div></header>`);
    document.body.insertAdjacentHTML("beforeend", `<footer><div class="wrap">
      <div class="fgrid">
        <div>${logo()}<p class="lead" style="margin:1rem 0 1.4rem">${esc(S.brand.tagline)}. Timeless imagery for life's most meaningful moments.</p><div class="social">${socials()}</div></div>
        <div><h4>Explore</h4><ul>${S.nav.map((n) => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}</ul></div>
        <div><h4>Contact</h4><ul>
          <li><a href="tel:${S.contact.phoneLink}">${esc(S.contact.phoneDisplay)}</a></li>
          <li><a href="mailto:${esc(S.contact.email)}">${esc(S.contact.email)}</a></li>
          <li>${esc(S.contact.address)}</li><li>${esc(S.contact.hours)}</li></ul></div>
      </div>
      <p class="copy">© ${new Date().getFullYear()} ${esc(S.brand.name)}. All rights reserved.</p></div></footer>
      <a class="wa" href="${wa()}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp"><img src="${icon("whatsapp", "ffffff")}" alt="" width="32" height="32"></a>`);
    const burger = $(".burger"), nav = $("nav.main");
    burger.onclick = () => {
      const o = nav.classList.toggle("open");
      burger.classList.toggle("open", o);
      burger.setAttribute("aria-expanded", o);
      document.body.style.overflow = o ? "hidden" : "";
    };
    $$("nav.main a").forEach((a) => a.addEventListener("click", () => { nav.classList.remove("open"); burger.classList.remove("open"); document.body.style.overflow = ""; }));
    const h = $("header.top");
    const f = () => h.classList.toggle("solid", scrollY > 60);
    f(); addEventListener("scroll", f, { passive: true });
  }

  /* ---- Renderers ---- */
  const R = {};
  const serviceCard = (s) => `<article class="card rv"><div class="img"><img src="${esc(s.img)}" alt="${esc(s.alt)}" loading="lazy" width="900" height="675"></div><div class="body"><div class="price-from">Starting ${esc(s.from)}</div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p><a class="btn sm" href="contact.html?service=${encodeURIComponent(s.title)}">Enquire</a></div></article>`;
  const planCard = (p) => `<article class="plan rv ${p.recommended ? "rec" : ""}">${p.recommended ? '<span class="tag">Recommended</span>' : ""}<h3>${esc(p.name)}</h3><div class="amt">${esc(p.price)}</div><ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul><a class="btn ${p.recommended ? "solid" : ""}" href="contact.html?service=${encodeURIComponent(p.name + " package")}">Choose ${esc(p.name)}</a></article>`;
  const vidCard = (v, i) => `<div class="card rv"><button class="vid" data-vid="${i}" aria-label="Play ${esc(v.title)}"><div class="img"><img src="${esc(v.thumb)}" alt="Thumbnail for ${esc(v.title)}" loading="lazy" width="1000" height="750"><span class="play"><i></i></span></div><div class="body"><div class="price-from">${esc(v.cat)}</div><h3>${esc(v.title)}</h3></div></button></div>`;

  R.portfolioFeatured = (el) => { el.className = "masonry"; el.innerHTML = S.portfolio.filter((p) => p.featured).map(figure).join(""); };
  const figure = (p) => `<figure class="rv" data-cat="${esc(p.cat)}"><button aria-label="View larger: ${esc(p.alt)}"><img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy"></button><figcaption>${esc(p.cat)}</figcaption></figure>`;
  R.portfolio = (el) => {
    el.insertAdjacentHTML("beforebegin", `<div class="filters" role="group" aria-label="Filter gallery"><button class="on" data-f="All">All</button>${S.categories.map((c) => `<button data-f="${esc(c)}">${esc(c)}</button>`).join("")}</div>`);
    el.className = "masonry"; el.innerHTML = S.portfolio.map(figure).join("");
    $$(".filters button").forEach((b) => b.onclick = () => {
      $$(".filters button").forEach((x) => x.classList.toggle("on", x === b));
      $$("figure", el).forEach((f) => f.classList.toggle("hide", b.dataset.f !== "All" && f.dataset.cat !== b.dataset.f));
    });
  };
  R.servicesPreview = (el) => { el.className = "grid g4"; el.innerHTML = S.services.slice(0, 4).map(serviceCard).join(""); };
  R.services = (el) => { el.className = "grid g4"; el.innerHTML = S.services.map(serviceCard).join(""); };
  R.packages = (el) => { el.className = "grid g3 pricing"; el.innerHTML = S.packages.map(planCard).join(""); el.insertAdjacentHTML("afterend", `<p class="note">${esc(S.packagesNote)}</p>`); };
  R.addons = (el) => { el.className = "addons"; el.innerHTML = S.addons.map((a) => `<div><span>${esc(a.name)}</span><span>${esc(a.price)}</span></div>`).join(""); };
  R.videos = (el) => { el.className = "grid g3"; el.innerHTML = S.videos.map(vidCard).join(""); };
  R.videosPreview = (el) => { el.className = "grid g3"; el.innerHTML = S.videos.slice(0, 3).map(vidCard).join(""); };
  R.testimonials = (el) => { el.className = "grid g3"; el.innerHTML = S.testimonials.map((t) => `<blockquote class="quote rv"><p>“${esc(t.text)}”</p><cite>${esc(t.name)} · ${esc(t.event)}</cite></blockquote>`).join(""); };
  R.instagram = (el) => { el.className = "insta"; el.innerHTML = S.instagramImages.map((s, i) => `<a href="${esc(S.social.instagram)}" target="_blank" rel="noopener" aria-label="Open Instagram"><img src="${esc(s)}" alt="Instagram post ${i + 1}" loading="lazy"></a>`).join(""); };
  R.team = (el) => { el.className = "grid g3 team"; el.innerHTML = S.about.team.map((t) => `<article class="card rv"><div class="img"><img src="${esc(t.img)}" alt="${esc(t.name)}" loading="lazy"></div><div class="body"><h3>${esc(t.name)}</h3><p>${esc(t.role)}</p></div></article>`).join(""); };
  R.stats = (el) => { el.className = "stats"; el.innerHTML = S.about.stats.map((s) => `<div><b>${esc(s.n)}</b><span>${esc(s.l)}</span></div>`).join(""); };
  R.socials = (el) => { el.className = "social"; el.innerHTML = socials(); };

  /* ---- Simple text bindings: <span data-bind="about.name"> ---- */
  function bind() {
    $$("[data-bind]").forEach((el) => {
      const v = el.dataset.bind.split(".").reduce((o, k) => o && o[k], S);
      if (v == null) return;
      if (el.tagName === "IMG") el.src = v; else if (el.tagName === "A") { el.href = v; } else el.textContent = v;
    });
    $$("[data-chips]").forEach((el) => { el.innerHTML = S.about.specialities.map((s) => `<span>${esc(s)}</span>`).join(""); });
    $$("[data-wa]").forEach((a) => { a.href = wa(); a.target = "_blank"; a.rel = "noopener"; });
    $$("[data-tel]").forEach((a) => { a.href = "tel:" + S.contact.phoneLink; a.textContent = S.contact.phoneDisplay; });
    $$("[data-mail]").forEach((a) => { a.href = "mailto:" + S.contact.email; a.textContent = S.contact.email; });
    $$("[data-address]").forEach((a) => { a.textContent = S.contact.address; });
    $$("[data-map]").forEach((f) => { f.src = S.contact.mapEmbedUrl; });
  }

  /* ---- Hero video ---- */
  function hero() {
    const v = $("#heroVideo"); if (!v) return;
    v.poster = S.hero.poster;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saver = navigator.connection && navigator.connection.saveData;
    if (!reduce && !saver) { v.src = S.hero.videoUrl; v.play().catch(() => {}); }
  }

  /* ---- Lightbox & video modal ---- */
  function overlays() {
    document.body.insertAdjacentHTML("beforeend", `<div class="lb" id="lb" role="dialog" aria-modal="true" aria-label="Image viewer"><button class="x" aria-label="Close">×</button><button class="pv" aria-label="Previous">‹</button><img alt=""><button class="nx" aria-label="Next">›</button><p></p></div>
    <div class="lb vmodal" id="vm" role="dialog" aria-modal="true" aria-label="Video player"><button class="x" aria-label="Close video">×</button><div id="vbox"></div></div>`);
    const lb = $("#lb"), im = $("img", lb), cap = $("p", lb);
    let list = [], idx = 0;
    const show = () => { const f = list[idx]; const i = $("img", f); im.src = i.src.replace(/w=\d+/, "w=1800"); im.alt = i.alt; cap.textContent = i.alt; };
    const open = (fig) => { list = $$("figure:not(.hide)", fig.parentElement); idx = list.indexOf(fig); show(); lb.classList.add("open"); $(".x", lb).focus(); };
    const close = () => { lb.classList.remove("open"); $("#vm").classList.remove("open"); $("#vbox").innerHTML = ""; };
    document.addEventListener("click", (e) => {
      const fig = e.target.closest(".masonry figure"); if (fig) return open(fig);
      const vb = e.target.closest("[data-vid]"); if (vb) return playVideo(S.videos[vb.dataset.vid]);
      if (e.target.closest("#lb .x, #vm .x") || e.target === lb || e.target === $("#vm")) close();
      if (e.target.closest("#lb .pv")) { idx = (idx - 1 + list.length) % list.length; show(); }
      if (e.target.closest("#lb .nx")) { idx = (idx + 1) % list.length; show(); }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
      if (lb.classList.contains("open")) { if (e.key === "ArrowLeft") { idx = (idx - 1 + list.length) % list.length; show(); } if (e.key === "ArrowRight") { idx = (idx + 1) % list.length; show(); } }
    });
    function playVideo(v) {
      $("#vbox").innerHTML = v.youtube
        ? `<iframe src="https://www.youtube-nocookie.com/embed/${esc(v.youtube)}?autoplay=1" title="${esc(v.title)}" allow="autoplay; fullscreen" allowfullscreen></iframe>`
        : `<video src="${esc(v.file)}" poster="${esc(v.thumb)}" controls autoplay playsinline></video>`;
      $("#vm").classList.add("open"); $("#vm .x").focus();
    }
  }

  /* ---- Booking form ---- */
  function form() {
    const f = $("#bookForm"); if (!f) return;
    const q = new URLSearchParams(location.search).get("service");
    if (q) f.message.value = `I would like to enquire about: ${q}.`;
    f.date.min = new Date().toISOString().slice(0, 10);
    const box = $("#formMsg");
    const rules = {
      name: (v) => v.trim().length > 1 || "Please enter your name.",
      phone: (v) => /^[+\d][\d\s-]{7,14}$/.test(v.trim()) || "Enter a valid phone number.",
      email: (v) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v) || "Enter a valid email address.",
      type: (v) => !!v || "Please choose an event type.",
    };
    f.addEventListener("submit", async (e) => {
      e.preventDefault(); box.className = "msg"; let ok = true;
      Object.keys(rules).forEach((k) => { const r = rules[k](f[k].value); const er = $(`[data-err="${k}"]`); er.textContent = r === true ? "" : r; if (r !== true) ok = false; });
      if (!ok) { box.className = "msg bad"; box.textContent = "Please fix the highlighted fields."; return; }
      const d = Object.fromEntries(new FormData(f));
      if (S.form.endpoint) {
        try {
          const r = await fetch(S.form.endpoint, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(f) });
          if (!r.ok) throw 0;
          box.className = "msg ok"; box.textContent = "Thank you! Your enquiry has been sent. We will contact you shortly."; f.reset();
        } catch (_) { box.className = "msg bad"; box.textContent = "Sorry, we could not send your enquiry. Please try WhatsApp or call us."; }
      } else {
        /* No submission service configured: hand off to WhatsApp honestly. */
        const m = `New enquiry\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email}\nEvent: ${d.type}\nDate: ${d.date || "-"}\nLocation: ${d.location || "-"}\nMessage: ${d.message || "-"}`;
        box.className = "msg ok"; box.textContent = "Opening WhatsApp so you can send your enquiry. It is only sent once you press Send there.";
        window.open(wa(m), "_blank", "noopener");
      }
    });
  }

  /* ---- Reveal on scroll ---- */
  function reveal() {
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
    $$(".rv").forEach((el) => io.observe(el));
  }

  chrome();
  $$("[data-render]").forEach((el) => R[el.dataset.render] && R[el.dataset.render](el));
  bind(); hero(); overlays(); form(); reveal();
})();
