import React from 'react';
import '../assets/css/transaksi_berhasil.css';

function TransaksiBerhasil() {
  return (
    <>
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
            />
            <button className="search-button">
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
            <span>Pembayaran Tiket</span>
          </li>
          <li className="timeline-item active"></li>
          <li className="timeline-item">
            <div className="circle"></div>
            <span>Masukkan Data Diri</span>
          </li>
          <li className="timeline-item active"></li>
          <li className="timeline-item active"></li>
          <li className="timeline-item">
            <div className="circle"></div>
            <span>Pilih Pembayaran</span>
          </li>
          <li className="timeline-item active"></li>
          <li className="timeline-item">
            <div className="circle"></div>
            <span>Verifikasi Kode</span>
          </li>
          <li className="timeline-item active"></li>
          <li className="timeline-item">
            <div className="circle"></div>
            <span>Konfirmasi Pembayaran</span>
          </li>
          <li className="timeline-item active"></li>
          <li className="timeline-item">
            <div className="circle"></div>
            <span>Pembayaran Selesai</span>
          </li>
        </ul>

        <div className="success-container text-center">
          <img src="/public/assets/img/smileface.jpeg" alt="transaksi Berhasil" />
          <h1>SELAMAT!!!</h1>
          <p>PEMBAYARAN BERHASIL</p>
          <button className="next-button">
            <a href="/Tiket_ku">Ke Tiketku</a>
          </button>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="logo">
            <img src="./assets/img/Logo.png" alt="logo" style={{ height: '24px' }} />
          </div>
          <div className="footer-links">
            <a href="/About_us">Tentang kami</a>
            <a href="/Term_of_Condition">Syarat dan Ketentuan</a>
            <a href="/Privacy_Policy">Kebijakan Privasi</a>
            <a href="/Term_of_Condition_comunity">Peraturan Komunitas</a>
            <a href="/Pusat_bantuan">Pusat Bantuan</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default TransaksiBerhasil;

