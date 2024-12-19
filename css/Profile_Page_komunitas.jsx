import React, { useState } from 'react';
import '../assets/css/Profile_page.css';
import '../assets/js/Profile_page.js';

function Profile_Page_komunitas() {
  const [activeTab, setActiveTab] = useState('aktif'); // Mengelola tab yang aktif

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Mengubah tab aktif
  };

  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Profil Musetix</title>
        {/* <link rel="stylesheet" href="src/assets/css/Profile_page.css" /> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        {/* <script src="src/assets/js/Profile_page.js"></script> */}
      </head>

      <body>
        {/* Header */}
        <header className="header">
          <div className="logo">
            <img src="./assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
          </div>
          <div className="search-container">
            <input type="text" placeholder="cari event, komunitas, dan kategori" className="search-input" />
            <button className="search-button">
              <img src="./assets/img/search.png" alt="search" className="search-icon" />
            </button>
          </div>
          <nav className="nav">
            <a href="/">Beranda</a>
            <a href="/Event">Event</a>
            {/* <a href="/Profile_Page_komunitas">PPK</a> */}
            <a href="/Tiket">Tiket</a>
            <a href="/Profil_User">
              <img src="./assets/img/profile.png" alt="profile" className="icon-profile" />
            </a>
          </nav>
        </header>

        {/* Profile Header Section */}
        <section style={{ height: '4cm' }}>
          <div className="section" id="one"></div>
        </section>
        <section style={{ display: 'flex' }}>
          <div className="profile-header" style={{ width: '20%' }}>
            <div className="profile-image">
              <img className="logo" src="./assets/img/fc9fa5ede1a28bad5fad74359c09bfaa 4.png" alt="Profile Picture" />
            </div>
            <div className="profile-info">
              <h1 className="serif">Teater Koma</h1>
              <p>@teater_komaid</p>
              <p>❤️ 50 orang</p>
              <h3>Biografi</h3>
              <p>Bereksplorasi lewat cerita. Teater Koma sudah berdiri sejak tahun 2000, sudah banyak emosi yang kita sampaikan lewat cerita.</p>
              <h3>Komunitas</h3>
              <div className="social-icons" style={{ display: 'flex' }}>
                <a href="#">
                  <img src="./assets/img/Vector.png" alt="Discord" />
                </a>
                <a href="#">
                  <img src="./assets/img/Vector (1).png" alt="Facebook" />
                </a>
              </div>
            </div>
          </div>

          {/* Event Section */}
          <div className="events" style={{ width: '80%', display: 'flex' }}>
            <div className="tab">
              <button className={`tablinks ${activeTab === 'aktif' ? 'active' : ''}`} onClick={() => handleTabClick('aktif')}>
                Event Aktif
              </button>
              <button className={`tablinks ${activeTab === 'lalu' ? 'active' : ''}`} onClick={() => handleTabClick('lalu')}>
                Event Lalu
              </button>
            </div>

            <div id="aktif" className="tabcontent" style={{ display: activeTab === 'aktif' ? 'block' : 'none' }}>
              <div className="row justify-content-center">
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div className="event-card col-md-auto mb-3" key={index}>
                    <div className="card" style={{ width: '20rem' }}>
                      <img src="./assets/img/fc9fa5ede1a28bad5fad74359c09bfaa 2.png" className="card-img-top" alt="..." />
                      <button type="button" className="btn btn-outline-warning" style={{ marginTop: '5px' }}>
                        Warning
                      </button>
                      <div className="card-body">
                        <h4>
                          <b>Fragmen</b>
                        </h4>
                        <p>Teater Koma</p>
                        <p>Senin, 28 Oktober 2024</p>
                        <p>📍 Teater Jakarta, Jakarta, Indonesia</p>
                        <p>👥 200 orang</p>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <p className="available">Tersedia</p>
                          <p className="price">100.000</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="lalu" className="tabcontent" style={{ display: activeTab === 'lalu' ? 'block' : 'none' }}>
              <p>Event lalu akan ditampilkan di sini.</p>
            </div>
          </div>
        </section>

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
      </body>
    </div>
  );
}

export default Profile_Page_komunitas;
