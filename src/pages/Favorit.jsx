import React from 'react';
import '../assets/css/Favorit.css'

function Favorit () {
  return (
    <>
    <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Musetix - Favorit</title>
      </head>
      <body>
        {/* Header */}
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
        <aside> <div className='name-links'>
            <ul className="side">
              <li>
                <a href="/profil_User">Profil</a>
              </li>
              <li>
                <a href="/Event_ku">Event-ku</a>
              </li>
              <li>
                <a href="/Tiket_ku">Tiket-ku</a>
              </li>
              <li>
                <a href="/Notifikasi">Notifikasi</a>
              </li>
              <li className="active">
                <a href="/Favorit">Favorit</a>
              </li>
              <li>
                <a href="/pengaturan">Pengaturan</a>
              </li>
              <li>
                <a href="sign_in">Keluar Akun</a>
              </li>
            </ul>
            </div>
        </aside>

            <section className="favorit-section">
            <h1>Favorit</h1>
            <p className="subtitle">cuman dijadiin favorit, nih?</p>
            <div className="event-cards">
                {/* Event Card 1 */}
                <div className="event-card">
                <img src="./assets/img/1.png" alt="Fragmen" className="event-image" />
                <div className="event-details">
                    <span className="event-category">Teater</span>
                    <h2>Fragmen</h2>
                    <p>Teater Koma</p>
                    <br />
                    <p className="event-date">📅Senin, 28 Oktober 2024</p>
                    <p className="event-location">🏠Teater Jakarta, Jakarta, Indonesia</p>
                    <p className="event-capacity">👥200 orang</p> <br />
                    <p className="event-price">
                    <span className="availability">Tersedia</span>
                    <span className="price">💳100.000</span>
                    </p>
                </div>
                </div>

                {/* Event Card 2 */}
                <div className="event-card">
                <img src="./assets/img/bumimanusia.jpg" alt="Bumi Manusia" className="event-image" />
                <div className="event-details">
                    <span className="event-category">Teater</span>
                    <h2>Bumi Manusia</h2>
                    <p>Teater Koma</p>
                    <br />
                    <p className="event-date">📅Selasa, 29 Oktober 2024</p>
                    <p className="event-location">🏠Teater Jakarta, Jakarta, Indonesia</p>
                    <p className="event-capacity">👥200 orang</p> <br />
                    <p className="event-price">
                    <span className="availability">Tersedia</span>
                    <span className="price">💳100.000</span>
                    </p>
                </div>
                </div>

                {/* Event Card 3 */}
                <div className="event-card">
                <img src="./assets/img/revolusi.jpg" alt="Revolusi" className="event-image" />
                <div className="event-details">
                    <span className="event-category">Teater</span>
                    <h2>Revolusi</h2>
                    <p>Teater Koma</p>
                    <br />
                    <p className="event-date">📅Minggu, 27 Oktober 2024</p>
                    <p className="event-location">🏠Art Center, Denpasar, Indonesia</p>
                    <p className="event-capacity">👥200 orang</p> <br />
                    <p className="event-price">
                    <span className="availability">Tersedia</span>
                    <span className="price">💳100.000</span>
                    </p>
                </div>
                </div>
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
};

export default Favorit;
