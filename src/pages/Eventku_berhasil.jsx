import React, { useState } from 'react';
import '../assets/css/Eventku_berhasil.css';

function Eventku_berhasil() {
return (
    <div>
      {/* Header */}
      <section className="header">
        <div className="logo">
          <img src="/assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
        </div>

        {/* Search */}
        <div className="search-container">
          <input
            type="text"
            placeholder="cari event, komunitas, dan kategori"
            className="search-input"
            aria-label="Search"
          />
          <button className="search-button" aria-label="Search button">
            <img src="./assets/img/search.png" alt="search" className="search-icon" />
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
      </section>

<ul className="timeline">
        <li className="timeline-item active">
          <div className="circle"></div>
          <span>Deskripsi</span>
        </li>
        <li className="timeline-item active">
          <div className="circle"></div>
          <span>Tiket</span>
        </li>
        <li className="timeline-item active">
          <div className="circle"></div>
          <span>Selesai</span>
        </li>
      </ul>

    <div className="success-container text-center">
    <h1>SELAMAT!!!</h1>
    <p>Event-mu berhasil diunggah!</p>
    <button className="next-button">
      <a href="/Event_ku">Event-ku</a>
    </button>
  </div>

 {/* Footer */}
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
};     

export default Eventku_berhasil;