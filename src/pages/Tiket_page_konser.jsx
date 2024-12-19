import React from 'react';
import '../assets/css/Tiket_page_konser.css';

function Tiket_page_konser() {
  // Data untuk event
  const events = [
    {
      title: "Gema Gemilang",
      detail: "Symphony Festival.",
      price: "💳Rp 500.000",
      image: "/public/assets/img/gemagemilang.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠GBK, Jakarta, Indonesia",
      capacity: "👥2000 orang"
    },
    {
      title: "Lautan Jay",
      detail: "Jay Music Studio",
      price: "💳Rp 500.000",
      image: "/public/assets/img/lautanjay.png",
      date: "📅Selasa, 29 Oktober 2024",
      location: "🏠Jakarta Internasional Stadium",
      capacity: "👥1000 orang"
    },
    {
      title: "D2 Live in Concert",
      detail: "Z Label",
      price: "💳Rp 500.000",
      image: "/assets/img/image.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Indonesia Convention Exhibition",
      capacity: "👥1000 orang"
    },
    {
      title: "Blue Sky",
      detail: "Z Label",
      price: "💳Rp 100.000",
      image: "/assets/img/bluesky.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Jakarta Intenasional Stadium",
      capacity: "👥1500 orang"
    },
    {
      title: "Stary Night",
      detail: "Z Label",
      price: "💳Rp 300.000",
      image: "/assets/img/starynighttt.png",
      date: "📅Rabu, 30 Oktober 2024",
      location: "🏠Jakarta Internasional Stadium",
      capacity: "👥1000 orang"
    },
    {
      title: "Dari Luka Ke Bahagia",
      detail: "Jay Music Studio",
      price: "💳Rp 300.000",
      image: "/assets/img/darilukakebahagia.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Indonesia Convention Exhibition",
      capacity: "👥1000 orang"
    },
    {
      title: "Java Fest Festival",
      detail: "Java Festival Production",
      price: "💳Rp 150.000",
      image: "/assets/img/javafest.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠JIExpo Kemayoran,  Jakarta",
      capacity: "👥1000 orang"
    },
    {
      title: "Rock N' Roll Heartbreak",
      detail: "Symphony Festival",
      price: "💳Rp 150.000",
      image: "/assets/img/rocknrollhb.png",
      date: "📅Kamis, 31 Oktober 2024",
      location: "🏠Jakarta Internasional Stadium",
      capacity: "👥1000 orang"
    },
  ];

  return (
    <div>
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
          <a href="/Event_Page">Event</a>
          <a href="/Profile_Page_komunitas">Komunitas</a>
          <a href="/Tiket_page">Tiket</a>
          <a href="/Profil_User">
            <img src="./assets/img/profile.png" alt="profile" className="icon-profile" />
          </a>
        </nav>
      </header>

      {/* Banner */}
      <div className="banner" style={{ height: '200px', backgroundImage: "url('/assets/img/bgkonserr.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

      {/* Categories */}
      <div className="categories d-flex justify-content-center align-items-center gap-3">
        <button><a href="/Tiket_page_konser">Konser</a></button>
        <button><a href="/Tiket_page_orkestra">Orkestra</a></button>
        <button><a href="/Tiket_page_teater">Teater</a></button>
        <img src="/assets/img/lokasi.png" alt="Lokasi" className="icon" />
        <img src="/assets/img/kalender.png" alt="Kalender" className="icon" />
      </div>

      {/* Events Section */}
      <div className="events container">
        <section className="event-section">
          <div className="event-grid">
            {events.map((event, idx) => (
              <div key={idx} className="event-card">
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <p>{event.detail}</p>
                <p>{event.price}</p>
                <p>{event.date}</p>
                < p>{event.location}</p>
                <p>{event.capacity}</p>
                <button className="btn-available">Tersedia</button>
              </div>
            ))}
          </div>
        </section>
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
}

export default Tiket_page_konser;