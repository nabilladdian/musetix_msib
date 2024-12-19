import React from 'react';
import '../assets/css/buat_eventku.css';

function BuatEventku() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="/assets/img/Logo (1).png" alt="Muselix Logo" className="logo-image" style={{ height: '24px' }} />
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
          <a href="/Profil_User" className="link">
            <img src="/assets/img/profile.png" alt="User  Icon" style={{ width: '30px' }} />
          </a>
        </nav>
      </header>

      <section className="banner">
        <div className="banner-text">
          <h1>Event-ku</h1>
          <p>buat eventmu dan jangkau jutaan pengunjung.</p>
          <p>#SolusiPertunjukkanmu</p>
        </div>
      </section>

      <main>
        <section className="content" style={{ textAlign: 'center' }}>
          <p>
            Hemat waktu dan tenaga Anda. Biarkan kami membantu Anda menjual tiket pertunjukan Anda. Fokuslah pada pertunjukan yang berkualitas, kami akan urus sisanya.
          </p>
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

export default BuatEventku;