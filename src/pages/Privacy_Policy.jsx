import React from 'react';
// import './assets/css/Footer.css';
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />;

function Privacy_Policy() {
  return (
    <div>
      <div>
        {/* <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <title>Kebijakan Privasi - Musetix</title>
        <link rel="stylesheet" href="src/assets/css/Footer.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
      </div>

      <div>
        {/* <!-- Header --> */}
        <section className="header">
          <div className="logo">
            {/* <img src="img/Logo (1).png" alt="logo" style={{ height: '30px' }} /> */}
            <img src="/assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
          </div>

          {/* <!-- search --> */}
          <div className="search-container">
            <input type="text" placeholder="cari event, komunitas, dan kategori" className="search-input" />
            <button className="search-button">
              <img src="/assets/img/search.png" alt="search" className="search-icon" />
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
        </section>

        {/* <!-- Main Content --> */}
        <section className="content">
          <h1>Kebijakan Privasi</h1>

          <section>
            <h2>Pendahuluan</h2>
            <p>Musetix berkomitmen untuk melindungi privasi pengguna. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat Anda menggunakan layanan Musetix.</p>
          </section>

          <section>
            <h2>Data yang Kami Kumpulkan</h2>
            <ul>
              <li>Data Pribadi: Nama lengkap, alamat email, nomor telepon, alamat pengiriman, informasi pembayaran, dan informasi lainnya.</li>
              <li>Data Penggunaan: Informasi tentang bagaimana Anda menggunakan layanan kami.</li>
              <li>Data Perangkat: Informasi tentang perangkat yang Anda gunakan untuk mengakses layanan kami.</li>
            </ul>
          </section>

          <section>
            <h2>Penggunaan Data</h2>
            <ul>
              <li>Penyediaan Layanan: Kami menggunakan data Anda untuk memproses transaksi, dll.</li>
              <li>Personalisasi: Kami menggunakan data untuk memberikan rekomendasi.</li>
              <li>Pemasaran: Kami dapat mengirimkan email pemasaran kepada Anda.</li>
            </ul>
          </section>

          <section>
            <h2>Pembagian Data</h2>
            <ul>
              <li>Pihak Ketiga Terpercaya: Kami dapat membagikan data Anda dengan pihak ketiga terpercaya.</li>
              <li>Penyedia Layanan: Kami dapat membagikan data Anda dengan penyedia layanan.</li>
              <li>Penegakan Hukum: Kami dapat mengungkapkan data Anda jika diwajibkan oleh hukum.</li>
            </ul>
          </section>

          <section>
            <h2>Keamanan Data</h2>
            <p>Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data pribadi Anda.</p>
          </section>

          <section>
            <h2>Hak Anda</h2>
            <ul>
              <li>Akses: Anda berhak untuk meminta akses ke data pribadi Anda yang kami simpan.</li>
              <li>Perbaikan: Anda berhak untuk meminta kami memperbaiki data pribadi Anda.</li>
              <li>Penghapusan: Anda berhak untuk meminta kami menghapus data pribadi Anda.</li>
              <li>Pembatasan Pengolahan: Anda berhak untuk membatasi pengolahan data pribadi Anda.</li>
              <li>Portabilitas Data: Anda berhak untuk memindahkan data pribadi Anda ke penyedia lain.</li>
              <li>Penolakan: Anda berhak untuk menolak pengolahan data pribadi Anda.</li>
            </ul>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>Kami menggunakan cookies untuk meningkatkan pengalaman pengguna Anda.</p>
          </section>

          <section>
            <h2>Perubahan Kebijakan Privasi</h2>
            <p>Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu.</p>
          </section>

          <section>
            <h2>Hubungi Kami</h2>
            <p>Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami di [alamat email] atau [nomor telepon].</p>
          </section>
        </section>
      </div>

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
          <a href="Pusat_bantuan">Pusat Bantuan</a>
        </div>
      </footer>
    </div>
  );
}

export default Privacy_Policy;
