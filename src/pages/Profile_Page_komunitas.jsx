import React, { useState } from 'react';

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
        <link rel="stylesheet" href="src/assets/css/Profile_page.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
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
          <a href="/Home">Beranda</a>
            <a href="/Event">Event</a>
            <a href="/Tiket_page">Tiket</a>
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
              <div className="social-icons">
                <a href="#">
                  <img src="./assets/img/Vector.png" alt="Discord" />
                </a>
                <a href="#">
                  <img src="./assets/img/Vector (1).png" alt="Facebook" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Bagian Event */}
<div className="events" style={{ width: '50%' }}>
  {/* Tombol Tab */}
  <div className="tab">
    <above justify>
      <button className={`tablinks ${activeTab === 'aktif' ? 'active' : ''}`} onClick={() => handleTabClick('aktif')}>
        Event Aktif
      </button>
    </above>
    <above>
      <button className={`tablinks ${activeTab === 'lalu' ? 'active' : ''}`} onClick={() => handleTabClick('lalu')}>
        Event Lalu
      </button>
    </above>
  </div>

{/* Past Events Section */}
<div id="lalu" className="tabcontent" style={{ display: activeTab === 'lalu' ? 'block' : 'none' }}>
              <h2>Event Lalu</h2> {/* Heading for Past Events */}
              <div className="row justify-content-center">
                <p>Event lalu akan ditampilkan di sini.</p>
                {/* You can add past event cards here in a similar manner */}
              </div>
            </div>
          </div>


  {/* Bagian Event Saat Ini */}
  <span>
  <below>
    <div className="event-card">
      <img src="/assets/img/fragmen.png" alt="Event 1" />
      <div className="event-details">
        <span className="category">Teater</span>
        <h3>Fragmen</h3>
        <p className="organizer">Teater Koma</p>
        <p><span>&#128197;</span> Senin, 28 Oktober 2024</p>
        <p><span>&#127968;</span> Teater Jakarta, Jakarta, Indonesia</p>
        <p><span>&#128101;</span> 200 orang</p>
        <p className="status">Tersedia</p>
        <p className="price"><span>&#128179;</span> Rp100.000</p>    
      </div>
    </div>
  </below>
  </span>

  <span>
  <below>
    <div className="event-card">
      <img src="/assets/img/gemagemilang.png" alt="Event 2" />
      <div className="event-details">
        <span className="category">Teater</span>
        <h3>Bumi Manusia</h3>
        <p className="organizer">Teater Koma</p>
        <p><span>&#128197;</span> Selasa, 29 Oktober 2024</p>
        <p><span>&#127968;</span> Teater Jakarta, Jakarta, Indonesia</p>
        <p><span>&#128101;</span> 2000 orang</p>
        <p className="status">Tersedia</p>
        <p className="price"><span>&#128179;</span> Rp100.000</p>
      </div>
    </div>
  </below>
 </span>

 <span>
  <below>
    <div className="event-card">
      <img src="/assets/img/lautanjay.png" alt="Event 3" />
      <div className="event-details">
        <span className="category">Teater</span>
        <h3>Revolusi</h3>
        <p className="organizer">Teater Koma</p>
        <p><span>&#128197;</span> Minggu, 27 Oktober 2024</p>
        <p><span>&#127968;</span> Art Center, Denpasar, Indonesia</p>
        <p><span>&#128101;</span> 1000 orang</p>
        <p className="status">Tersedia</p>
        <p className="price"><span>&#128179;</span> Rp100.000</p>
      </div>
    </div>
  </below>
  </span>

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
        </section>
      </body>
    </div>
  );
}

export default Profile_Page_komunitas;
