// ---------- İkonlar ----------
// 24'lük arayüz ikonları
const UI = {
  megaphone: "M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z M15 9a4 4 0 0 1 0 6 M18 6a8 8 0 0 1 0 12",
  video: "M3 7h12v10H3z M15 10l6-3v10l-6-3z",
  camera: "M4 8h3l2-3h6l2 3h3v11H4z M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  sparkle: "M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z M19 3v4 M17 5h4",
  browser: "M3 5h18v14H3z M3 9h18 M6 7h.01 M9 7h.01",
  billboard: "M3 4h18v10H3z M8 14v6 M16 14v6 M6 20h12",
  cube: "M12 3l8 4.5v9L12 21l-8-4.5v-9z M12 12l8-4.5 M12 12v9 M12 12L4 7.5",
  box: "M3 8l9-5 9 5v8l-9 5-9-5z M3 8l9 5 9-5 M12 13v8",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M12 12h.01",
  heart: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z",
  mail: "M3 6h18v12H3z M3 7l9 6 9-6",
  ai: "M9 3v3 M15 3v3 M9 18v3 M15 18v3 M3 9h3 M3 15h3 M18 9h3 M18 15h3 M6 6h12v12H6z M10 10h4v4h-4z",
  diamond: "M6 3h12l3 6-9 12L3 9z M3 9h18 M12 21L9 9l3-6 3 6z",
  slides: "M3 4h18v12H3z M12 16v4 M8 20h8 M7 12l3-3 2 2 4-4",
  ticket: "M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z M14 7v10",
  pen: "M4 20l4-1 11-11-3-3L5 16z M14 6l3 3",
  chart: "M4 20V4 M4 20h16 M8 16v-4 M12 16V8 M16 16v-6",
  idea: "M9 18h6 M10 21h4 M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z",
  cut: "M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M8.5 7.5L20 18 M8.5 16.5L20 6",
  send: "M21 3L3 10l7 3 3 7z M10 13l11-10",
};
// 64'lük marka motifleri
const MOTIF = {
  coffee: "M14 24h30v14a12 12 0 0 1-12 12h-6a12 12 0 0 1-12-12z M44 28h4a6 6 0 0 1 0 12h-4 M22 8c-3 4 3 6 0 10 M30 8c-3 4 3 6 0 10 M38 8c-3 4 3 6 0 10 M10 56h40",
  burger: "M10 30a22 15 0 0 1 44 0z M10 37c4 3 8-3 11 0s8 3 11 0 8-3 11 0 7 3 11 0 M10 44h44 M12 50h40a4 4 0 0 1-4 6H16a4 4 0 0 1-4-6z M24 22h.01 M32 19h.01 M40 22h.01",
  plane: "M6 30L58 8 44 56 30 38z M30 38L58 8 M30 38v14l8-8",
  bottle: "M26 4h12v8H26z M24 12h16v6a6 6 0 0 1 4 6v28a6 6 0 0 1-6 6H26a6 6 0 0 1-6-6V24a6 6 0 0 1 4-6z M20 34h24 M20 44h24",
  leaf: "M12 52C12 24 32 10 54 10c0 24-14 42-40 42z M12 52L38 26 M24 40h10 M30 34v-8",
  building: "M14 56V12h22v44 M36 56V26h14v30 M8 56h48 M20 18h4 M28 18h4 M20 26h4 M28 26h4 M20 34h4 M28 34h4 M20 42h4 M28 42h4 M42 32h4 M42 40h4 M42 48h4",
  shirt: "M22 8l-14 8 6 12 6-3v31h24V25l6 3 6-12-14-8c-2 5-6 8-10 8s-8-3-10-8z",
  sneaker: "M6 42c0-6 2-14 6-18l10 6c6 4 12 6 20 6h8c6 0 8 4 8 8v4H6z M6 48h52 M20 30l4-4 M26 33l4-4 M32 35l3-4",
  cake: "M12 54V34h40v20z M12 42c5 3 10-3 13 0s9 3 13 0 9-3 14 0 M24 34v-8 M32 34v-8 M40 34v-8 M24 18c-2 2-2 4 0 6 2-2 2-4 0-6 M32 18c-2 2-2 4 0 6 2-2 2-4 0-6 M40 18c-2 2-2 4 0 6 2-2 2-4 0-6",
  code: "M22 18L8 32l14 14 M42 18l14 14-14 14 M36 12L28 52",
  olive: "M8 56C24 40 40 24 56 8 M20 44c-7-1-12-7-11-12 7 0 12 6 11 12z M36 28c7 1 12 7 11 12-7 0-12-6-11-12z M30 32c-2-7 1-14 6-16 2 7-1 14-6 16z M44 22a5 7 30 1 0 .1 0z",
  car: "M8 42v-8l6-12h28l10 12h4v8z M14 34h42 M30 22v12 M20 49a5 5 0 1 0 0-10 5 5 0 0 0 0 10z M46 49a5 5 0 1 0 0-10 5 5 0 0 0 0 10z",
};
function ic(name, cls = "") {
  const big = name in MOTIF, d = big ? MOTIF[name] : UI[name];
  return `<svg class="ic ${cls}" viewBox="0 0 ${big ? 64 : 24} ${big ? 64 : 24}" fill="none" stroke="currentColor" stroke-width="${big ? 3 : 1.8}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
}

// ---------- Demo markalar (kurgusal) ----------
const B = [
  { n: "Kahve Durağı", h: "kahveduragi", i: "coffee", a: "#5c3a21", b: "#e9c46a", t: "Güne iyi bir yudumla başla", f: "serif" },
  { n: "Burger Atölyesi", h: "burgeratolyesi", i: "burger", a: "#9d0208", b: "#ffb703", t: "Elde yapılır, tadı belli olur", f: "heavy" },
  { n: "Rota Turizm", h: "rotaturizm", i: "plane", a: "#023e8a", b: "#48cae4", t: "Bu yaz rotan belli", f: "grotesk" },
  { n: "Nova Kozmetik", h: "novakozmetik", i: "bottle", a: "#5e3c58", b: "#f4acb7", t: "Cildin için bilimsel bakım", f: "serif" },
  { n: "Yeşil Çiftlik", h: "yesilciftlik", i: "leaf", a: "#1b4332", b: "#95d5b2", t: "Tarladan sofraya", f: "heavy" },
  { n: "Atlas Yapı", h: "atlasyapi", i: "building", a: "#22333b", b: "#c6ac8f", t: "Sağlam temeller, yeni yaşamlar", f: "grotesk" },
  { n: "Pera Moda", h: "peramoda", i: "shirt", a: "#14213d", b: "#fca311", t: "Sezonun yeni hikâyesi", f: "serif" },
  { n: "Kuzey Spor", h: "kuzeyspor", i: "sneaker", a: "#3a0ca3", b: "#4cc9f0", t: "Sınırlarını yeniden çiz", f: "heavy" },
  { n: "Lale Pastanesi", h: "lalepastanesi", i: "cake", a: "#7b2cbf", b: "#ffc8dd", t: "Her kutlamanın tatlı hali", f: "serif" },
  { n: "Mavi Yazılım", h: "maviyazilim", i: "code", a: "#03045e", b: "#00b4d8", t: "İşinizi buluta taşıyın", f: "grotesk" },
  { n: "Ege Zeytin", h: "egezeytin", i: "olive", a: "#3d405b", b: "#a3b18a", t: "Ege'nin altın damlası", f: "serif" },
  { n: "Vega Otomotiv", h: "vegaotomotiv", i: "car", a: "#161616", b: "#e63946", t: "Yola yeni bir bakış", f: "heavy" },
];
const sty = b => `--a:${b.a};--b:${b.b}`;
const logo = b => `<span class="lg f-${b.f}">${ic(b.i)}${b.n}</span>`;

// ---------- Kreatif kartlar (vitrin) ----------
const TILE = {
  poster: b => `<div class="t t-poster" style="${sty(b)}"><span class="t-tag">Afiş</span>${ic(b.i, "t-motif")}<b class="f-${b.f}">${b.t}</b><small>${b.n}</small></div>`,
  social: b => `<div class="t t-social"><div class="t-head"><i style="background:${b.a}">${b.n[0]}</i><span>@${b.h}</span></div><div class="t-img" style="${sty(b)}">${ic(b.i)}</div><div class="t-foot">♥ ${String((b.n.length * 7 % 40 + 12) / 10).replace(".", ",")}B beğeni</div></div>`,
  video: b => `<div class="t t-video" style="${sty(b)}"><span class="rec">● REC</span>${ic(b.i, "t-motif")}<span class="t-time">0:30</span><div class="t-bar"><i></i></div></div>`,
  brand: b => `<div class="t t-brand" style="${sty(b)}"><span class="t-tag dark">Kurumsal kimlik</span>${logo(b)}<div class="sw"><i style="background:${b.a}"></i><i style="background:${b.b}"></i><i style="background:#fff"></i><i style="background:#1a1a1a"></i></div></div>`,
  pack: b => `<div class="t t-pack" style="${sty(b)}"><span class="t-tag dark">Ambalaj</span><div class="pk">${ic(b.i)}<span class="f-${b.f}">${b.n}</span></div></div>`,
};
const TYPES = Object.keys(TILE);

// Hero vitrin duvarı: 5 sütun, birbirine ters yönde kayar
const wall = document.getElementById("wall");
for (let c = 0; c < 5; c++) {
  let html = "";
  for (let k = 0; k < 6; k++) html += TILE[TYPES[(c * 2 + k) % TYPES.length]](B[(c * 5 + k * 7) % B.length]);
  wall.insertAdjacentHTML("beforeend", `<div class="col ${c % 2 ? "rev" : ""}" style="--d:${46 + c * 7}s"><div class="col-in">${html}${html}</div></div>`);
}

// Logo şeritleri: üstteki sola, alttaki sağa kayar
document.getElementById("logoTrack").innerHTML = B.map(logo).join("").repeat(2);
document.getElementById("logoTrack2").innerHTML = [...B.slice(6), ...B.slice(0, 6)].map(logo).join("").repeat(2);

// Üretim panosundaki teslimatlar
document.getElementById("deliv").innerHTML =
  TILE.poster(B[2]) + TILE.social(B[2]) + TILE.video(B[2]);

// ---------- Animasyonlu reklam spotu (oynatıcı) ----------
function player(b, title) {
  return `<div class="player" style="${sty(b)}">
    <div class="sc s1">${ic(b.i, "pm")}</div>
    <div class="sc s2"><h3 class="f-${b.f}">${b.t}</h3></div>
    <div class="sc s3">${logo(b)}<span class="cta">Şimdi keşfet →</span></div>
    <span class="rec">● ${title}</span>
    <div class="pb"><i></i></div><span class="tc">0:00 / 0:12</span>
  </div>`;
}
const lb = document.getElementById("lb"), lbIn = document.getElementById("lbIn");
let tick;
function openLb(b, title, caption) {
  lbIn.innerHTML = player(b, title) + `<p class="lb-cap">${caption}</p>`;
  lb.classList.add("on");
  // 12 saniyelik döngü: her sahne 4 sn
  const tc = lbIn.querySelector(".tc"), bar = lbIn.querySelector(".pb i"), scenes = lbIn.querySelectorAll(".sc"), t0 = Date.now();
  const step = () => {
    const s = (Date.now() - t0) / 1000 % 12;
    scenes.forEach((el, k) => el.classList.toggle("on", Math.floor(s / 4) === k));
    bar.style.width = `${s / 12 * 100}%`;
    tc.textContent = `0:${String(Math.floor(s)).padStart(2, "0")} / 0:12`;
  };
  clearInterval(tick);
  step();
  tick = setInterval(step, 250);
}
function closeLb() { clearInterval(tick); lb.classList.remove("on"); lbIn.innerHTML = ""; }
lb.addEventListener("click", e => (e.target === lb || e.target.closest(".lb-x")) && closeLb());
document.addEventListener("keydown", e => e.key === "Escape" && closeLb());

// Öne çıkan filmler
const FILMS = [[2, "Reklam filmi · 0:30", "Rota Turizm · “Bu yaz rotan belli”"], [4, "Kamu spotu · 0:45", "Yeşil Çiftlik · “Tarladan sofraya”"]];
document.getElementById("films").innerHTML = FILMS.map(([i, tag, title], k) => {
  const b = B[i];
  return `<figure class="film" data-k="${k}"><div class="frame" style="${sty(b)}">${ic(b.i, "t-motif")}<h3 class="f-${b.f}">${b.t}</h3><span class="play-btn"></span><span class="t-time">${tag.split("· ")[1]}</span></div><figcaption><b>${title}</b><span>${tag}</span></figcaption></figure>`;
}).join("");
document.querySelectorAll(".film").forEach(f => f.addEventListener("click", () => {
  const [i, tag, title] = FILMS[f.dataset.k];
  openLb(B[i], tag, title);
}));

// İşlerimiz
const WORKS = [
  [2, "Reklam filmi", "Bu yaz rotan belli", "0:30 · TV + dijital"],
  [1, "Reklam filmi", "Ateşte pişen lezzet", "0:20 · Sosyal medya"],
  [4, "Sosyal medya", "Hasat günlüğü", "12 reels"],
  [3, "Kurumsal kimlik", "Nova yeniden markalama", "Kimlik + ambalaj"],
  [7, "Reklam filmi", "Sınırlarını yeniden çiz", "0:45 · Kampanya"],
  [0, "Sosyal medya", "Sabah ritüeli", "24 gönderi"],
  [9, "Kurumsal kimlik", "Mavi marka sistemi", "Logo + web"],
  [8, "Sosyal medya", "Bayram koleksiyonu", "8 story"],
  [11, "Reklam filmi", "Yola yeni bir bakış", "0:30 · Lansman"],
];
const VISUAL = {
  "Reklam filmi": b => `<div class="cv cv-film" style="${sty(b)}">${ic(b.i, "t-motif")}<span class="play-btn sm"></span></div>`,
  "Sosyal medya": b => `<div class="cv cv-social" style="${sty(b)}"><div class="phone"><div class="ph-head"><i style="background:${b.a}">${b.n[0]}</i>@${b.h}</div><div class="ph-grid">${Array.from({ length: 9 }, (_, j) => `<span class="${j % 3 === 1 ? "alt" : ""}">${j % 2 ? "" : ic(b.i)}</span>`).join("")}</div></div></div>`,
  "Kurumsal kimlik": b => `<div class="cv cv-id" style="${sty(b)}">${logo(b)}<div class="sw"><i style="background:${b.a}"></i><i style="background:${b.b}"></i><i style="background:#fff"></i><i style="background:#1a1a1a"></i></div><div class="cards"><span>${ic(b.i)}</span><span class="f-${b.f}">${b.n}</span></div></div>`,
};
const grid = document.getElementById("workGrid");
WORKS.forEach(([i, type, title, meta]) => {
  const b = B[i];
  const el = document.createElement("article");
  el.className = "card";
  el.dataset.type = type;
  el.innerHTML = `${VISUAL[type](b)}<div class="ov"><small>${type}</small><h3>${b.n} · ${title}</h3><span class="play">▶ ${type === "Reklam filmi" ? "Filmi izle" : "Projeyi gör"} · ${meta}</span></div>`;
  el.addEventListener("click", () => openLb(b, type, `${b.n} · ${title} · ${meta}`));
  grid.appendChild(el);
});
document.getElementById("filters").addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn) return;
  document.querySelectorAll("#filters button").forEach(x => x.classList.toggle("on", x === btn));
  grid.querySelectorAll(".card").forEach(c => c.hidden = !!btn.dataset.f && c.dataset.type !== btn.dataset.f);
});

// İkonları yerleştir
document.querySelectorAll("[data-icon]").forEach(s => s.innerHTML = ic(s.dataset.icon));
document.querySelectorAll(".tags [data-i]").forEach(s => s.insertAdjacentHTML("afterbegin", ic(s.dataset.i)));

// Mobil menü linke tıklanınca kapansın
document.querySelectorAll(".menu a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("open")));

// İletişim formu (demo: gönderim servisi bağlanınca gerçek talep iletir)
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  e.target.classList.add("sent");
  e.target.reset();
});

// Rakam sayacı
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const b = e.target, end = +b.dataset.count, t0 = performance.now();
  const step = t => { const p = Math.min((t - t0) / 1200, 1); b.textContent = Math.round(end * p); if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step); io.unobserve(b);
}), { threshold: .5 });
document.querySelectorAll("[data-count]").forEach(b => io.observe(b));

document.getElementById("yr").textContent = new Date().getFullYear();
