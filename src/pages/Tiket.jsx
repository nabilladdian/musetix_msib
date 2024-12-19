import React from 'react';
import '../assets/css/Home.css';
import '../assets/css/Footer.css';
{
  /* <link rel="stylesheet" href="src/assets/css/Home.css" />; */
}

function Tiket() {
  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Musetix - Home</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      </div>
      <header className="header">
        <div className="logo">
          <img src="/assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
        </div>
        <div className="search-container">
          <input type="text" placeholder="cari event, komunitas, dan kategori" className="search-input" />
          <button className="search-button">
            <img src="/assets/img/search.png" alt="search" className="search-icon" />
          </button>
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

      <main>
        <section className="ban">
          <div className="ban-content">
            <h1>Gema Gemilang</h1>
            <p>Let's join the party</p>
            <p>Sabtu, 26 Oktober 2024 - GBK, Jakarta, Indonesia</p>
          </div>
        </section>

        <section className="category-buttons">
          <button className="btn-category">Konser</button>
          <button className="btn-category">Orkestra</button>
          <button className="btn-category">Teater</button>
        </section>

        <section className="event-section">
          <h2>Mau cari apa hari ini?</h2>
          <div className="event-grid ">
            {Array.from({ length: 12 }).map((_, idx) => (
              <div key={idx} className="event-card">
                <img src="/assets/img/fc9fa5ede1a28bad5fad74359c09bfaa 2.png" alt="Event" />
                <h3>Fragmen {idx + 1}</h3>
                <p>Detail event goes here.</p>
                <p>Rp 150.000</p>
                <button className="btn-available">Tersedia</button>
              </div>
            ))}
          </div>
          <button className="btn-more">Lihat lainnya</button>
        </section>

        <section className="cta">
          <h2>Buat Eventmu Sekarang!!</h2>
          <p>Manfaatkan fitur event-ku untuk menjangkau jutaan pengunjung.</p>
          <button className="btn-cta">Coba Sekarang</button>
        </section>
      </main>

      <footer className="footer">
        <div className="logo">
          <img src="./assets/img/Logo.png" alt="logo" style={{ height: '24px' }} />
        </div>
        <div className="footer-links">
          <a href="/About_us">Tentang Kami</a>
          <a href="/Term_of_Condition">Syarat dan Ketentuan</a>
          <a href="/Privacy_Policy">Kebijakan Privasi</a>
          <a href="/Term_of_Condition_comunity">Peraturan Komunitas</a>
          <a href="/Pusat_bantuan">Pusat Bantuan</a>
        </div>
      </footer>
    </div>
  );
}

export default Tiket;
