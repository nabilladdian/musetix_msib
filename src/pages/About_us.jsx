import React from 'react';

function About_us() {
  return (
    <div>
      <div>
        {/* <meta charset="UTF-8" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Header Design</title>
        <link rel="stylesheet" href="src/assets/css/About_us.css" />
      </div>
      <body>
        <header className="header">
          <div className="logo">
            <img src="/assets/img/Logo (1).png" alt="Muselix Logo" className="logo-image"style={{ height: '24px' }}  />
            {/* <!-- Replace with your logo image file --> */}
          </div>

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
            <a href="/Profil_User" className="link">
              <img src="/assets/img/profile.png" alt="User Icon" style={{ width: '30px' }} />
            </a>
          </nav>
        </header>

        {/* <!-- banner --> */}
        <section className="banner">
          <div className="banner-text">
            <h1>Tentang Kami</h1>
            <p>Jelajahi beragam pertunjukan, temukan inspirasi.</p>
          </div>
        </section>

        {/* <!-- main --> */}
        <main>
          {/* <section className="content" style={{text-align: "center"}}> */}
          <section className="content" style={{ textAlign: 'center' }}>
            <p>
              <b style={{ color: '#9b111e' }}>MuseTix </b>
              lebih dari sekadar platform penjualan tiket, kami adalah komunitas bagi para pencinta seni. Di sini, Anda dapat menemukan beragam pertunjukan seni, mulai dari teater, musik, hingga orkestra. Kami percaya bahwa seni adalah
              bahasa universal yang dapat menyatukan kita semua.
            </p>
            <br />
            <p>
              Musetix memberikan Anda kemudahan dalam mengelola penjualan tiket, mempromosikan pertunjukan, dan menjangkau audiens yang lebih luas. Musetix adalah tempat yang tepat untuk menemukan inspirasi dan pengalaman baru. Jelajahi
              beragam pertunjukan seni dan temukan karya-karya terbaik dari para seniman Indonesia.
            </p>
          </section>
        </main>

        {/* <!-- Code injected by live-server --> */}
      </body>

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
    </div>
  );
}

export default About_us;
