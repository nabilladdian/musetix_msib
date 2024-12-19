import React from 'react';

function Term_of_Condition_comunity() {
  return (
    <div>
      <div>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Peraturan Komunitas - Musetix</title>
        <link rel="stylesheet" href="src/assets/css/Footer.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
      </div>
      <body>
        {/* <!-- Header --> */}
        <header className="header">
          <div className="logo">
            <img src="./assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
          </div>

          {/* <!-- search --> */}
          <div className="search-container">
            <input type="text" placeholder="cari event, komunitas, dan kategori" className="search-input" />
            <button className="search-button">
              <img src="./assets/img/search.png" alt="search" className="search-icon" />
            </button>
            {/* <!-- Search icon as button --> */}
          </div>

          <nav className="nav">
          <a href="/Home">Beranda</a>
            <a href="/Event_Page">Event</a>
            <a href="/Tiket_page">Tiket</a>
            <a href="/Profil_User">
              <img src="./assets/img/profile.png" alt="profile" className="icon-profile" />
            </a>
          </nav>
        </header>

        {/* <!-- Main Content --> */}
        <main className="content">
          <h1>Peraturan Komunitas</h1>

          <section>
            <h2>Pendahuluan</h2>
            <p>Peraturan Komunitas ini dibuat untuk menciptakan lingkungan yang aman, nyaman, dan menghormati bagi semua pengguna Musetix. Dengan menggunakan layanan Musetix, Anda setuju untuk mematuhi peraturan ini.</p>
          </section>

          <section>
            <h2>Ketentuan Umum</h2>
            <ul>
              <li>Tujuan: Musetix adalah platform yang menghubungkan seniman dengan penonton melalui penjualan tiket pertunjukan seni.</li>
              <li>Penggunaan: Layanan Musetix hanya boleh digunakan untuk tujuan yang sah dan tidak melanggar hukum.</li>
              <li>Hormat: Semua pengguna wajib saling menghormati, baik sesama pengguna maupun terhadap tim Musetix.</li>
            </ul>
          </section>

          <section>
            <h2>Konten Pengguna</h2>
            <ul>
              <li>Tanggung Jawab: Pengguna bertanggung jawab penuh atas konten yang mereka unggah atau bagikan di Musetix.</li>
              <li>Larangan: Dilarang mengunggah konten yang :</li>
            </ul>
            <ul style={{ marginLeft: '20px' }}>
              <li>Menyinggung, menghina, atau membenci ras, suku, agama, atau kelompok sosial tertentu.</li>
              <li>Pornografi, kekerasan, atau konten dewasa lainnya.</li>
              <li>Mengandung unsur SARA atau provokasi</li>
              <li>Merupakan plagiarisme atau melanggar hak cipta orang lain.</li>
              <li>Bersifat spam atau promosi yang berlebihan.</li>
              <li>Mengandung virus, malware, atau kode berbahaya lainnya.</li>
            </ul>
          </section>

          <section>
            <h2>Transaksi</h2>
            <ul>
              <li>Pembayaran: Pembayaran tiket harus dilakukan sesuai dengan metode yang telah ditentukan oleh Musetix</li>
              <li>Pembatalan: Kebijakan pembatalan tiket akan mengikuti ketentuan yang ditetapkan oleh masing-masing seniman</li>
              <li>Sengketa: Segala sengketa yang timbul dari transaksi akan diselesaikan sesuai dengan ketentuan yang berlaku dan mekanisme penyelesaian sengketa yang telah ditetapkan</li>
            </ul>
          </section>

          <section>
            <h2>Konten Pengguna</h2>
            <ul>
              <li>Sanksi: Pengguna yang melanggar Peraturan Komunitas dapat dikenai sanksi, termasuk:</li>
            </ul>
            <ul style={{ marginLeft: '20px' }}>
              <li>Peringatan</li>
              <li>Pembatasan akses sementara atau permanen.</li>
              <li>Penghapusan akun.</li>
            </ul>
            <ul>
              <li>Laporan: Pengguna dapat melaporkan pelanggaran kepada tim Musetix melalui saluran yang telah disediakan</li>
            </ul>

            <section>
              <h2>Perubahan Peraturan</h2>
              <p>Pembaruan: Musetix berhak mengubah Peraturan Komunitas ini kapan saja. Perubahan akan diumumkan melalui situs web atau saluran komunikasi lainnya</p>
            </section>

            <section>
              <h2>Hukum yang Berlaku</h2>
              <p>Yurisdiksi: Peraturan Komunitas ini tunduk pada hukum Republik Indonesia.</p>
            </section>
          </section>
        </main>

        {/* <!-- Footer --> */}
        <footer className="footer">
          {/* <!-- Logo Musetix --> */}
          <div className="logo">
            <img src="./assets/img/Logo.png" alt="logo" style={{ height: '24px' }} />
          </div>

          {/* <!-- Tautan di bagian kanan --> */}
          <div className="footer-links">
            <a href="/About_us">Tentang Kami</a>
            <a href="/Term_of_Condition">Syarat dan Ketentuan</a>
            <a href="/Privacy_Policy">Kebijakan Privasi</a>
            <a href="/Term_of_Condition_comunity">Peraturan Komunitas</a>
            <a href="/Pusat_bantuan">Pusat Bantuan</a>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default Term_of_Condition_comunity;
