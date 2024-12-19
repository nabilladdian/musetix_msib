import React from 'react';
import '../assets/css/Home_teater.css';
import '../assets/css/Footer.css';

function Home_teater() {
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
      detail: <a href="/Event_page_1">Teater Jakarta</a>,
      price: "💳free",
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
      detail: "Teater Koma",
      price: "💳Rp 100.000",
      image: "/assets/img/revolusi.png",
      date: "📅Minggu, 27 Oktober 2024",
      location: "🏠Art Center, Denpasar, Indonesia",
      capacity: "👥200 orang"
    },
  ];

  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Musetix - Home</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      </div>
      <header className="header">
        <div className="logo">
          <img src="/assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
        </div>
        <div className="search-container">
          <input type="text" placeholder="cari event, komunitas, dan kategori" className="search-input" />
          <button className="search-button">
            <img src="/assets/img/search.png" alt="search" className="search-icon" />
          </button>
        </div>
        <nav className="nav">
          <a href="/Home">Beranda</a>
          <a href="#">Event</a>
          <a href="/Tiket_page">Tiket</a>
          <a href="/Profil_User">
            <img src="./assets/img/profile.png" alt="profile" className="icon-profile" />
          </a>
        </nav>
      </header>

      <main>
        <section className="ban">
          <div className="ban-content">
            <img src="/assets/img/slidegemagemilang.png" alt="search" className="slide" />
          </div>
        </section>

        <section className="category-buttons">
            <button className="btn-category"><a href="/Home_konser">Konser</a></button>
          <button className="btn-category"><a href="/Home_orkestra">Orkestra</a></button>
          <button className="btn-category"><a href="/Home_teater">Teater</a></button>
        </section>

        <section className="event-section">
        {/* Add headings here */}
          <div className="event-grid">
            {events.map((event, idx) => (
              <div key={idx} className="event-card">
                <img src={event.image} alt={event.title} />
                <h3>{event.title}</h3>
                <p>{event.detail}</p>
                <p>{event.price}</p>
                <p>{event.date}</p>
                <p>{event.location}</p>
                <p>{event.capacity}</p>
                <button className="btn-available">Tersedia</button>
              </div>
            ))}
          </div>
          <button className="btn-more"><a href="/Event">Lihat lainnya</a></button>
        </section>

          <section className="cta">
          <h2>Buat Eventmu Sekarang!!</h2>
          <p>Manfaatkan fitur event-ku untuk menjangkau jutaan pengunjung.</p>
          <button className="btn-cta"><a href="/event_ku">Coba Sekarang</a></button>
          </section>
          </main>

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

export default Home_teater;
