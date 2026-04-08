let data = JSON.parse(localStorage.getItem("blog")) || [
  {
    judul: "Cara Coding di HP",
    isi: "Gunakan aplikasi Acode untuk mulai coding langsung dari HP."
  }
];

function tampilkan(list) {
  const el = document.getElementById("list");
  el.innerHTML = "";

  list.forEach((a, i) => {
    el.innerHTML += `
      <div class="card">
        <h3>${a.judul}</h3>
        <p>${a.isi}</p>
      </div>
    `;
  });
}

function tambah() {
  const judul = document.getElementById("judul").value;
  const isi = document.getElementById("isi").value;

  if(judul && isi) {
    data.push({ judul, isi });
    localStorage.setItem("blog", JSON.stringify(data));
    tampilkan(data);
  }
}

function cari() {
  const k = document.getElementById("search").value.toLowerCase();
  const hasil = data.filter(a => a.judul.toLowerCase().includes(k));
  tampilkan(hasil);
}

// load awal
tampilkan(data);