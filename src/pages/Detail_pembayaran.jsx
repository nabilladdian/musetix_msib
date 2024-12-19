import React from 'react';
import '../assets/css/detailpembayaran.css';

function Detail_pembayaran () {
  return (
    <>
    <div>
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
        <li className="timeline-item">
            <div className="circle"></div>
            <span>Masukkan Data Diri</span>
        </li>
        <li className="timeline-item">
            <div className="circle"></div>
            <span>Pilih Pembayaran</span>
        </li>
        <li className="timeline-item">
            <div className="circle"></div>
            <span>Verifikasi Kode</span>
        </li>
        <li className="timeline-item">
            <div className="circle"></div>
            <span>Konfirmasi Pembayaran</span>
        </li>
        <li className="timeline-item">
            <div className="circle"></div>
            <span>Pembayaran Selesai</span>
        </li>
    </ul>

    <main>
      <div className="ticket-info">
          <img src="./assets/img/1.png" alt="Event Image" className="event-image"/>
          <div className="ticket-details">
              <h2>Fragmen</h2>
              <p className="event-category">Teater</p>
              <p className="event-date"><i className="fa fa-calendar"></i> Senin, 28 Oktober 2024</p>
              <p className="event-location"><i className="fa fa-map-marker"></i> Teater Jakarta, Jakarta, Indonesia</p>
              <p className="event-time"><i className="fa fa-clock-o"></i> 17.00</p>
              <a href="#" className="map-link">Lihat di peta lokasi</a>
              <div className="ticket-selection">
                  <span>1</span>
                  <div>
                      <p>1 Tiket</p>
                      <p>VIP CAT 1 Kursi 5</p>
                      <p>200.000</p>
                  </div>
                  <a href="#" className="details-link">Lihat Detail</a>
              </div>
          </div>
      </div>
  
      <button className="popularity-button">Paling Diminati 🔥</button>
    </main>
    <center><button type="submit" className="main-btn"><a href="/detail_pembayaran_data">Selanjutnya</a></button></center>

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
    </div>
    </>
  );
};

export default Detail_pembayaran;
