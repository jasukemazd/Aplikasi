// ==== SPLASH SCREEN ====
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  setTimeout(() => {
    splash.style.display = "none";
    document.querySelector(".app").classList.remove("hidden");
  }, 2500);
});

// ==== DATA RESEP ====
const resepList = [
  {
    nama: "Nasi Goreng",
    kategori: "Makanan Utama",
    img: "https://img.kurio.network/LlPo3UJ_cL1g2iIC9lOip2Jb00Q=/1200x900/filters:quality(80)/https://kurio-img.kurioapps.com/21/07/26/46b7c1d7-d33b-4789-bda0-1e84f7c89aa2.jpe",
    wiki: "https://id.wikipedia.org/wiki/Nasi_goreng",
    bahan: [
      "2 piring nasi putih dingin",
      "2 butir telur",
      "3 siung bawang putih",
      "Kecap manis, garam, merica",
      "Minyak goreng secukupnya"
    ],
    langkah: [
      "Tumis bawang putih hingga harum.",
      "Masukkan telur, orak-arik hingga matang.",
      "Tambahkan nasi, kecap, garam, dan merica.",
      "Aduk rata hingga matang, sajikan hangat."
    ],
    youtube: "https://www.youtube.com/embed/5bhSUQc5zPo"
  },
  {
    nama: "Sate Ayam",
    kategori: "Makanan Utama",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Sate_ayam_madura_2.jpg",
    wiki: "https://id.wikipedia.org/wiki/Sate",
    bahan: [
      "500g daging ayam potong dadu",
      "Tusuk sate secukupnya",
      "Kecap manis, bawang putih, ketumbar"
    ],
    langkah: [
      "Rendam ayam dalam bumbu 30 menit.",
      "Tusuk ayam ke tusuk sate.",
      "Bakar hingga matang sambil oles bumbu."
    ],
    youtube: "https://www.youtube.com/embed/a2NzpJp7cUI"
  },
  {
    nama: "Rendang",
    kategori: "Makanan Utama",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Rendang_daging_sapi.JPG",
    wiki: "https://id.wikipedia.org/wiki/Rendang",
    bahan: [
      "1 kg daging sapi",
      "Santan kental",
      "Bumbu rendang lengkap"
    ],
    langkah: [
      "Tumis bumbu hingga harum.",
      "Masukkan daging dan santan.",
      "Masak perlahan hingga kering dan bumbu meresap."
    ],
    youtube: "https://www.youtube.com/embed/uaQeQv15rQQ"
  },
  {
    nama: "Gado-Gado",
    kategori: "Salad",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Gado-gado_Seribu_Rasa.jpg",
    wiki: "https://id.wikipedia.org/wiki/Gado-gado",
    bahan: ["Sayuran rebus", "Tahu, tempe", "Saus kacang"],
    langkah: [
      "Siapkan semua bahan rebusan.",
      "Tata di piring, siram saus kacang.",
      "Tambahkan kerupuk dan telur rebus."
    ],
    youtube: "https://www.youtube.com/embed/tL_2h4mQfSY"
  },
  {
    nama: "Bakso",
    kategori: "Makanan Utama",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Bakso_mi_ayam.jpg",
    wiki: "https://id.wikipedia.org/wiki/Bakso",
    bahan: ["500g daging sapi giling", "Tepung tapioka", "Bawang putih"],
    langkah: [
      "Haluskan bahan dan bentuk bulat.",
      "Rebus hingga mengapung.",
      "Sajikan dengan kuah hangat."
    ],
    youtube: "https://www.youtube.com/embed/G3VNPlU88z0"
  },
  {
    nama: "Soto Ayam",
    kategori: "Sup",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Soto_ayam_1.jpg",
    wiki: "https://id.wikipedia.org/wiki/Soto",
    bahan: ["Ayam, bihun, telur rebus", "Bumbu soto", "Santan sedikit"],
    langkah: [
      "Rebus ayam dan bumbu hingga matang.",
      "Tambahkan bihun dan topping.",
      "Sajikan hangat dengan sambal."
    ],
    youtube: "https://www.youtube.com/embed/pEfcdO1ESeI"
  },
  {
    nama: "Pempek",
    kategori: "Camilan",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Pempek_Palembang.jpg",
    wiki: "https://id.wikipedia.org/wiki/Pempek",
    bahan: ["Ikan giling, tepung sagu", "Air, garam"],
    langkah: [
      "Campur bahan jadi adonan.",
      "Bentuk pempek, rebus dan goreng.",
      "Sajikan dengan kuah cuko."
    ],
    youtube: "https://www.youtube.com/embed/3Dvvb-J7Oj8"
  },
  {
    nama: "Martabak Manis",
    kategori: "Dessert",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Martabak_manis_%28Indonesian_thick_pancake%29.jpg",
    wiki: "https://id.wikipedia.org/wiki/Martabak",
    bahan: ["Tepung, telur, gula", "Susu kental manis, topping"],
    langkah: [
      "Buat adonan dan diamkan.",
      "Masak di teflon, beri topping.",
      "Lipat dan potong."
    ],
    youtube: "https://www.youtube.com/embed/pEjvZyW0xRU"
  },
  {
    nama: "Es Campur",
    kategori: "Minuman",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Es_campur_Bandung.jpg",
    wiki: "https://id.wikipedia.org/wiki/Es_campur",
    bahan: ["Agar, buah, susu kental, es serut"],
    langkah: [
      "Campur bahan ke mangkuk.",
      "Tuang susu dan es.",
      "Aduk rata dan sajikan dingin."
    ],
    youtube: "https://www.youtube.com/embed/GdfvLEjv6Ug"
  },
  {
    nama: "Klepon",
    kategori: "Camilan",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Klepon_1.jpg",
    wiki: "https://id.wikipedia.org/wiki/Klepon",
    bahan: ["Tepung ketan, gula merah, kelapa parut"],
    langkah: [
      "Bentuk bulat isi gula merah.",
      "Rebus hingga matang.",
      "Gulingkan di kelapa parut."
    ],
    youtube: "https://www.youtube.com/embed/QSGY1Yv5RgE"
  }
];

// ==== TAMPILKAN RESEP ====
const listContainer = document.getElementById("recipe-list");
function tampilResep(data) {
  listContainer.innerHTML = "";
  data.forEach(r => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${r.img}" alt="${r.nama}">
      <div class="recipe-info">
        <h2>${r.nama}</h2>
        <p>${r.kategori}</p>
      </div>
    `;
    card.addEventListener("click", () => bukaDetail(r));
    listContainer.appendChild(card);
  });
}
tampilResep(resepList);

// ==== PENCARIAN ====
document.getElementById("search").addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  const hasil = resepList.filter(r => r.nama.toLowerCase().includes(val));
  tampilResep(hasil);
});

// ==== DETAIL HALAMAN ====
function bukaDetail(r) {
  const app = document.querySelector(".app");
  app.classList.add("hidden");

  const detail = document.createElement("div");
  detail.id = "detail-page";
  detail.innerHTML = `
    <button class="back-btn">← Kembali</button>
    <div id="detail-content">
      <img src="${r.img}" alt="${r.nama}">
      <div class="detail-title">${r.nama}</div>
      <p><a href="${r.wiki}" target="_blank">Baca di Wikipedia</a></p>
      <div class="section-title">Bahan:</div>
      <ul>${r.bahan.map(b => `<li>${b}</li>`).join("")}</ul>
      <div class="section-title">Langkah:</div>
      <ol>${r.langkah.map(l => `<li>${l}</li>`).join("")}</ol>
      <div class="section-title">Video Tutorial:</div>
      <div class="video-container">
        <iframe src="${r.youtube}" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  `;
  document.body.appendChild(detail);

  detail.querySelector(".back-btn").addEventListener("click", () => {
    detail.remove();
    app.classList.remove("hidden");
  });
}
