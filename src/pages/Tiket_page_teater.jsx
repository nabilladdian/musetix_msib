import React from 'react';
import '../assets/css/Tiket_page_teater.css';

function Tiket_page_teater() {
  // Data untuk event
  const events = [
    {
      title: "Fragment",
      detail: <a href="/Event_page">Teater Koma</a>,
      price: " 💳 Rp 150.000",
      image: "/public/assets/img/fragmenbaru.png",
      date: " 📅 Senin, 28 Oktober 2024",
      location: " 🏠 Teater Jakarta, Indonesia",
      capacity: " 👥 200 orang"
    },
    {
      title: "Aku, Aku, Aku",
      detail: "Teater Jakarta",
      price: "💳Rp 150.000",
      image: "/assets/img/akuakuakuuu.png",
      date: "📅Senin, 4 November 2024",
      location: "🏠Teater Jakarta, Jakarta, Indonesia",
      capacity: "👥200 orang"
    },
    {
      title: "Manusia",
      detail: "Teater Jakarta",
      price: "💳Rp 100.000",
      image: "/assets/img/manusiaaa.png",
      date: "📅Senin, 28 Oktober 2024",
      location: "🏠Gedung Kesenian Jakarta",
      capacity: "👥200 orang"
    },
    {
      title: "Spotlight",
      detail: "Teater Jakarta",
      price: "💳Rp 100.000",
      image: "/assets/img/spotlightt.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Teater Garuda Yogyakarta",
      capacity: "👥200 orang"
    },
    {
      title: "The Red",
      detail: "teater Jakarta",
      price: "💳Rp 150.000",
      image: "/assets/img/the redd.png",
      date: "📅Rabu, 30 Oktober 2024",
      location: "🏠Teater Jakarta, Jakarta, Indonesia",
      capacity: "👥200 orang"
    },
    {
      title: "Setengah Hati",
      detail:  <a href="/Event_page_1">Teater Jakarta</a>,
      price: "💳Free",
      image: "/assets/img/setengahhati.png",
      date: "📅Kamis, 31 Oktober 2024",
      location: "🏠Teater Jakarta, Jakarta, Indonesia",
      capacity: "👥200 orang"
    },
    {
      title: "Bumi Manusia",
      detail: "Teater Koma",
      price: "💳Rp 100.000",
      image: "/assets/img/bumiimanusiaa.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Indonesia Convention Exhibition",
      capacity: "👥200 orang"
    },
    {
      title: "Revolusi",
      detail: "Nusantara Orchestra",
      price: "💳Rp 100.000",
      image: "/assets/img/revolusi.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Art Center, Denpasar, Indonesia",
      capacity: "👥200 orang"
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
      <div className="banner" style={{ height: '200px', backgroundImage: "url('/assets/img/bgteaterr.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

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

export default Tiket_page_teater;