// ===== DATA SISWA =====
const dataSiswa = [
  { no:1,  nama:"Dika",    jabatan:"Anggota",          aktif:false, foto:"" },
  { no:2,  nama:"Eulis",   jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:3,  nama:"Farhan",  jabatan:"Wakil Ketua",      aktif:true,  foto:"" },
  { no:4,  nama:"Fitri",   jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:5,  nama:"Hafiz",   jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:6,  nama:"Halimah", jabatan:"Bendahara",        aktif:true,  foto:"" },
  { no:7,  nama:"Habil",   jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:8,  nama:"Ibrahim", jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:9,  nama:"Kanifa",  jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:10, nama:"Kayla",   jabatan:"Sekretaris",       aktif:true,  foto:"" },
  { no:11, nama:"Arkhan",  jabatan:"Ketua Kelas",      aktif:true,  foto:"" },
  { no:12, nama:"Sandi",   jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:13, nama:"Daekha",  jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:14, nama:"Malika",  jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:15, nama:"Kenzi",   jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:16, nama:"Zabar",   jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:17, nama:"Abil",    jabatan:"Seksi Keamanan",   aktif:true,  foto:"" },
  { no:18, nama:"Faiz",    jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:19, nama:"Kelvin",  jabatan:"Seksi Kebersihan", aktif:true,  foto:"" },
  { no:20, nama:"Naifah",  jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:21, nama:"Naura",   jabatan:"Bendahara",        aktif:true,  foto:"" },
  { no:22, nama:"Nazifa",  jabatan:"Seksi Keamanan",   aktif:true,  foto:"" },
  { no:23, nama:"Nazuwa",  jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:24, nama:"Nenden",  jabatan:"Seksi Kebersihan", aktif:true,  foto:"" },
  { no:25, nama:"Saepul",  jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:26, nama:"Siti",    jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:27, nama:"Nanda",   jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:28, nama:"Nia",     jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:29, nama:"Riad",    jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:30, nama:"Aldo",    jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:31, nama:"Raisha",  jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:32, nama:"Meisya",  jabatan:"Anggota",          aktif:false, foto:"" },
  { no:33, nama:"Sierra",  jabatan:"Sekretaris",       aktif:true,  foto:"" },
  { no:34, nama:"Nada",    jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:35, nama:"Rafka",   jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:36, nama:"Fayyadh", jabatan:"Anggota",          aktif:true,  foto:"" },
  { no:37, nama:"Fitria",  jabatan:"Anggota",          aktif:true,  foto:"" },
];

// ===== ABSEN =====
// H=Hadir  S=Sakit  I=Izin  A=Alpha  ""=Belum ada data
const HARI = {
  jan:["Sen 6","Sel 7","Rab 8","Kam 9","Jum 10","Sen 13","Sel 14","Rab 15","Kam 16","Jum 17","Sen 20","Sel 21","Rab 22","Kam 23","Jum 24","Sen 27","Sel 28","Rab 29","Kam 30","Jum 31"],
  feb:["Sen 3","Sel 4","Rab 5","Kam 6","Jum 7","Sen 10","Sel 11","Rab 12","Kam 13","Jum 14","Sen 17","Sel 18","Rab 19","Kam 20","Jum 21","Sen 24","Sel 25","Rab 26","Kam 27","Jum 28"],
  mar:["Sen 3","Sel 4","Rab 5","Kam 6","Jum 7","Sen 10","Sel 11","Rab 12","Kam 13","Jum 14","Sen 17","Sel 18","Rab 19","Kam 20","Jum 21"],
  apr:["Sen 1","Sel 2","Rab 3","Kam 4","Jum 5","Sen 8","Sel 9","Rab 10","Kam 11","Jum 12","Sen 22","Sel 23","Rab 24","Kam 25","Jum 26","Sen 29","Sel 30"],
  mei:["Sen 1","Sel 2","Rab 3","Kam 4","Jum 5","Sen 8","Sel 9","Rab 10","Kam 11","Jum 12","Sen 15","Sel 16","Rab 17","Kam 18","Jum 19","Sen 22","Sel 23","Rab 24","Sen 29","Sel 30"],
  jun:["Sen 2","Sel 3","Rab 4","Kam 5","Jum 6","Sen 9","Sel 10","Rab 11","Kam 12","Jum 13","Sen 16","Sel 17","Rab 18","Kam 19","Jum 20"],
};

const dataAbsen = dataSiswa.map(s => ({
  nama: s.nama, aktif: s.aktif,
  data: {
    jan: Array(20).fill("H"),
    feb: Array(20).fill("H"),
    mar: Array(15).fill("H"),
    apr: Array(17).fill(""),
    mei: Array(20).fill(""),
    jun: Array(15).fill(""),
  }
}));

// Dika & Meisya tidak aktif
dataAbsen[0].data.jan  = Array(20).fill("A");
dataAbsen[0].data.feb  = Array(20).fill("A");
dataAbsen[0].data.mar  = Array(15).fill("A");
dataAbsen[31].data.jan = Array(20).fill("A");
dataAbsen[31].data.feb = Array(20).fill("A");
dataAbsen[31].data.mar = Array(15).fill("A");
// Contoh ketidakhadiran lain — ganti sesuai data asli
dataAbsen[2].data.jan[4]  = "S";
dataAbsen[5].data.jan[2]  = "I";
dataAbsen[9].data.feb[0]  = "S";
dataAbsen[10].data.mar[3] = "I";

// ===== AVATAR COLORS =====
const COLORS = [
  ["#3b82f6","#1e40af"],["#8b5cf6","#5b21b6"],["#ec4899","#be185d"],
  ["#f59e0b","#b45309"],["#10b981","#065f46"],["#ef4444","#b91c1c"],
  ["#06b6d4","#0e7490"],["#f97316","#c2410c"],
];

// ===== SISWA =====
function renderSiswa(list) {
  const grid = document.getElementById("siswaGrid");
  if (!grid) return;
  grid.innerHTML = "";
  if (!list || !list.length) {
    grid.innerHTML = '<p style="color:var(--text2);padding:2rem;grid-column:1/-1">Tidak ditemukan</p>';
    return;
  }
  list.forEach(s => {
    const [bg, fg] = COLORS[(s.no - 1) % COLORS.length];
    const style = s.foto ? "" : `background:linear-gradient(135deg,${bg},${fg});color:#fff;`;
    const inner = s.foto
      ? `<img src="${s.foto}" alt="${s.nama}">`
      : `<span style="font-size:2.4rem;font-weight:900;font-family:'Baloo 2',cursive;">${s.nama.charAt(0)}</span>`;
    grid.innerHTML += `
      <div class="siswa-card${s.aktif ? "" : " tidak-aktif"}">
        <div class="siswa-avatar" style="${style}">${inner}</div>
        <div class="siswa-info">
          <div class="siswa-no">No. ${s.no}</div>
          <div class="siswa-nama">${s.nama}${s.aktif ? "" : '<span class="siswa-badge-nonaktif">Tidak Aktif</span>'}</div>
          <span class="siswa-jabatan">${s.jabatan}</span>
        </div>
      </div>`;
  });
}

function filterSiswa() {
  const q = (document.getElementById("searchSiswa")?.value || "").toLowerCase();
  const j = (document.getElementById("filterJabatan")?.value || "").toLowerCase();
  renderSiswa(dataSiswa.filter(s =>
    s.nama.toLowerCase().includes(q) && (!j || s.jabatan.toLowerCase().includes(j))
  ));
}

// ===== ABSEN =====
function renderAbsen(bulan) {
  const hari = HARI[bulan] || [];
  const head = document.getElementById("absenHead");
  const body = document.getElementById("absenBody");
  const sumEl = document.getElementById("absenSummary");
  if (!head || !body) return;

  head.innerHTML = `<tr>
    <th>No</th><th class="nama-col">Nama</th>
    ${hari.map(h => `<th class="day-th">${h}</th>`).join("")}
    <th style="color:#22c55e">H</th>
    <th style="color:#f59e0b">S</th>
    <th style="color:#60a5fa">I</th>
    <th style="color:#ef4444">A</th>
  </tr>`;

  let tH=0,tS=0,tI=0,tA=0;
  body.innerHTML = dataAbsen.map((s,i) => {
    const row = s.data[bulan] || [];
    let h=0,si=0,iz=0,al=0;
    const cells = hari.map((_,di) => {
      const v = row[di] || "";
      if(v==="H")h++; else if(v==="S")si++; else if(v==="I")iz++; else if(v==="A")al++;
      const cls = {H:"cell-H",S:"cell-S",I:"cell-I",A:"cell-A"}[v]||"";
      return `<td class="${cls}">${v||"—"}</td>`;
    }).join("");
    tH+=h; tS+=si; tI+=iz; tA+=al;
    return `<tr>
      <td>${i+1}</td>
      <td class="nama-col">${s.nama}${s.aktif?"":'<small style="color:#f87171"> (NA)</small>'}</td>
      ${cells}
      <td class="cell-H">${h}</td><td class="cell-S">${si}</td>
      <td class="cell-I">${iz}</td><td class="cell-A">${al}</td>
    </tr>`;
  }).join("");

  if (sumEl) sumEl.innerHTML = `
    <div class="summary-card"><div class="sum-num" style="color:#22c55e">${tH}</div><div class="sum-label">Total Hadir</div></div>
    <div class="summary-card"><div class="sum-num" style="color:#f59e0b">${tS}</div><div class="sum-label">Total Sakit</div></div>
    <div class="summary-card"><div class="sum-num" style="color:#60a5fa">${tI}</div><div class="sum-label">Total Izin</div></div>
    <div class="summary-card"><div class="sum-num" style="color:#ef4444">${tA}</div><div class="sum-label">Total Alpha</div></div>
    <div class="summary-card"><div class="sum-num">${hari.length}</div><div class="sum-label">Hari Sekolah</div></div>`;
}

function switchAbsen(btn, bulan) {
  document.querySelectorAll(".absen-tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderAbsen(bulan);
}

// ===== GALERI =====
function filterGaleri(btn, cat) {
  document.querySelectorAll(".gal-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".gal-item").forEach(item =>
    item.classList.toggle("hidden", cat !== "semua" && item.dataset.category !== cat)
  );
}

function openLightbox(src, cap) {
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  document.getElementById("lbImg").src = src;
  document.getElementById("lbCaption").textContent = cap;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox")?.classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

// ===== PARTICLES =====
function createParticles() {
  const c = document.getElementById("particles");
  if (!c) return;
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const s = Math.random() * 40 + 10;
    p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;animation-duration:${Math.random()*15+8}s;animation-delay:${Math.random()*10}s;`;
    c.appendChild(p);
  }
}

// ===== THEME =====
function applyTheme(t) {
  document.body.setAttribute("data-theme", t);
  localStorage.setItem("6b-theme", t);
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("6b-theme") || "bluey";
  document.body.setAttribute("data-theme", saved);

  document.querySelectorAll(".theme-btn").forEach(btn =>
    btn.addEventListener("click", () => applyTheme(btn.dataset.theme))
  );

  document.getElementById("hamburger")?.addEventListener("click", () =>
    document.getElementById("navLinks")?.classList.toggle("open")
  );

  document.querySelectorAll(".nav-link").forEach(l =>
    l.addEventListener("click", () =>
      document.getElementById("navLinks")?.classList.remove("open")
    )
  );
});
