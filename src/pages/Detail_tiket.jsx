import React from "react";
import '../assets/css/Detail_tiket.css';

function Detail_tiket () {
  const boxes = [
    {
      date: '28 Oktober 2024',
      day: 'Senin',
      time: '18:00-20.00',
      location: 'Teater Jakarta, Jakarta, Indonesia',
      event: 'Symphony Festival',
    },
    {
      date: '27 Oktober 2024',
      day: 'Senin',
      time: '18:00-20.00',
      location: 'Teater Jakarta, Jakarta, Indonesia',
      event: 'Symphony Festival',
    },
    {
      date: '27 Oktober 2024',
      day: 'Senin',
      time: '18:00-20.00',
      location: 'Teater Jakarta, Jakarta, Indonesia',
      event: 'Symphony Festival',
    },
    {
      date: '27 Oktober 2024',
      day: 'Senin',
      time: '18:00-20.00',
      location: 'Teater Jakarta, Jakarta, Indonesia',
      event: 'Symphony Festival',
    },
    {
      date: '27 Oktober 2024',
      day: 'Senin',
      time: '18:00-20.00',
      location: 'Teater Jakarta, Jakarta, Indonesia',
      event: 'Symphony Festival',
    },
  ];

  return (
    <>
      <div>
        {/* Image */}
        <img src="./assets/img/deskripsieventfragment.png" alt="banner" style={{ borderRadius: '21px' }}/>

        {/* Header */}
        <section className="header">
          <div className="logo">
            <img src="/assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
          </div>

          {/* Search */}
          <div className="search-container">
            <input type="text" placeholder="cari event, komunitas, dan kategori" className="search-input" />
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

        <div className="yellow-box-container">
          {boxes.map((box, index) => (
            <div key={index} className="yellow-box">
              <div className="box-content">
                <div className="left-content">
                  <p className="date">{box.date}</p>
                  <p className="day">{box.day}</p>
                  <p className="time">{box.time}</p>
                </div>
                <div className="center-content">
                  <p className="location">{box.location}</p>
                  <p className="event">{box.event}</p>
                </div>
                <div className="right-content">
                  <button className="buy-ticket"><a href="/Detail_seat">Lihat Tiket</a></button>
                </div>
              </div>
            </div>
          ))}
        </div>

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

export default Detail_tiket;