// İşlerimiz kartları
const works = [
  ["sadettin-saran", "Reklam filmi", "Sadettin Saran"],
  ["kadinlar-tarih-yazacak", "Kampanya filmi", "Kadınlar Tarih Yazacak"],
  ["gencler-tarih-yazacak", "Kampanya filmi", "Gençler Tarih Yazacak"],
  ["emekliler-tarih-yazacak", "Kampanya filmi", "Emekliler Tarih Yazacak"],
  ["esnaflar-tarih-yazacak", "Kampanya filmi", "Esnaflar Tarih Yazacak"],
  ["saygili-turkiye", "Kampanya filmi", "Saygılı Türkiye"],
  ["collaquin-2", "Reklam filmi", "CollaQuin"],
  ["cansu-canan", "Tanıtım filmi", "Cansu Canan"],
  ["gizem-unal-burgerdinho", "Reklam filmi", "Gizem Ünal · Burgerdinho"],
];
const grid = document.getElementById("workGrid");
works.forEach(([file, tag, title]) => {
  const src = `videos/${file}.mp4?v=2`;
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML = `<video src="${src}" muted loop playsinline preload="metadata"></video>
    <div class="ov"><small>${tag}</small><h3>${title}</h3><span class="play">▶ Videoyu oynat</span></div>`;
  const v = el.querySelector("video");
  el.addEventListener("mouseenter", () => v.play().catch(() => {}));
  el.addEventListener("mouseleave", () => v.pause());
  el.addEventListener("click", () => openLb(src));
  grid.appendChild(el);
});

const lb = document.getElementById("lb"), lbv = document.getElementById("lbv");
function openLb(src) { lbv.src = src; lb.classList.add("on"); lbv.play().catch(() => {}); }
function closeLb() { lbv.pause(); lbv.removeAttribute("src"); lb.classList.remove("on"); }
document.addEventListener("keydown", e => e.key === "Escape" && closeLb());

// Logo şeridini kesintisiz döngü için çoğalt
const track = document.getElementById("logoTrack");
track.innerHTML += track.innerHTML;

// Yüklenemeyen görselleri gizle
document.querySelectorAll("img").forEach(i => i.addEventListener("error", () => i.style.visibility = "hidden"));

// Mobil menü linke tıklanınca kapansın
document.querySelectorAll(".menu a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("open")));

// Rakam sayacı
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const b = e.target, end = +b.dataset.count, t0 = performance.now();
  const step = t => { const p = Math.min((t - t0) / 1200, 1); b.textContent = Math.round(end * p); if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step); io.unobserve(b);
}), { threshold: .5 });
document.querySelectorAll("[data-count]").forEach(b => io.observe(b));

document.getElementById("yr").textContent = new Date().getFullYear();
