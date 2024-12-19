import React from "react";
import '../assets/css/notifikasi.css';

function Notifikasi() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Musetix - Notifikasi</title>
      </head>
      <body>
        {/* <!-- Header --> */}
        <section className="header">
          <div className="logo">
          <img src="/assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
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
            <a href="/Event">Event</a>
            <a href="/Tiket_page">Tiket</a>
            <a href="/Profil_User">
              <img src="./assets/img/profile.png" alt="profile" className="icon-profile" />
            </a>
          </nav>
        </section>

        <main>
          <aside>
            <div className='name-links'>
              <ul className="side">
                <li>
                <a href="/profil_User">Profil</a>
                </li>
                <li>
                <a href="Event_ku">Event-ku</a>
                </li>
                <li>
                <a href="">Tiket-ku</a>
                </li>
                <li>
                <li className="active">
                <a href="/Notifikasi">Notifikasi</a>
                </li>
                <a href="/Favorit">Favorit</a>
                </li>
                <li>
                <a href="Pengaturan">Pengaturan</a>
                </li>
                <li>
                <a href="Sign_in">Keluar Akun</a>
                </li>
              </ul>
            </div>
          </aside>

          <section className="notification-section">
            <h2>Notifikasi</h2>
            <p>ada pesan untuk kamu, jangan lupa di cek, ya!</p>
            <div className="notification-card">
              <h3>Pembayaranmu Berhasil, nih!</h3>
              <p>Pembayaran Fragmen berhasil. jangan lupa catat tanggalnya dan siapkan versi terbaikmu!</p>
            </div>
            <div className="notification-card">
              <h3>Pembayaranmu Berhasil, nih!</h3>
              <p>Pembayaran Lautan Jay berhasil. jangan lupa catat tanggalnya dan siapkan versi terbaikmu!</p>
            </div>
            <div className="notification-card">
              <h3>Pembayaranmu Berhasil, nih!</h3>
              <p>Pembayaran Fragmen berhasil. jangan lupa catat tanggalnya dan siapkan versi terbaikmu!</p>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="logo">
            <img src="./assets/img/Logo.png" alt="logo" style={{ height: '24px' }} />
          </div>
          <div className="footer-links">
            <div className="footer-links">
            <a href="/About_us">Tentang Kami</a>
            <a href="/Term_of_Condition">Syarat dan Ketentuan</a>
            <a href="/Privacy_Policy">Kebijakan Privasi</a>
            <a href="/Term_of_Condition_comunity">Peraturan Komunitas</a>
            <a href="/Pusat_bantuan">Pusat Bantuan</a>
          </div>
          </div>
        </footer>
      </body>
    </>
  );
}

export default Notifikasi;
