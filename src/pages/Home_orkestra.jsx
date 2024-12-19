import React from 'react';
import '../assets/css/Home_orkestra.css';
import '../assets/css/Footer.css';

function Home_orkestra() {
  // Data untuk event
  const events = [
      {
        title: "Symphony of Nusantara",
        detail: "Symphony",
        price: "💳Rp 150.000",
        image: "/assets/img/symphonyofnusantara.png",
        date: "📅Minggu, 27 Oktober 2024",
        location: "🏠Teater Jakarta, Jakarta, Indonesia",
        capacity: "👥200 orang"
      },
      {
        title: "Melody",
        detail: "Nusantara Orchestra",
        price: "💳Rp 100.000",
        image: "/assets/img/melody.png",
        date: "📅Minggu, 27 Oktober 2024",
        location: "🏠Ciputra Artpreneur",
        capacity: "👥200 orang"
      },
      {
        title: "Semarak Bunga Harmoni",
        detail: "Harmoni",
        price: "💳Rp 150.000",
        image: "/assets/img/semarakbungaharmoniii.png",
        date: "📅Sabtu, 26 Oktober 2024",
        location: "🏠Jakarta Concert Hall",
        capacity: "👥200 orang"
      },
      {
        title: "Melodies of Indonesia",
        detail: "Muse Orchestra",
        price: "💳Rp 150.000",
        image: "/assets/img/melodiesofindoo.png",
        date: "📅Minggu, 27 Oktober 2024",
        location: "🏠Jakarta Concert Hall",
        capacity: "👥200 orang"
      },
      {
        title: "The Symphony",
        detail: "Symphony",
        price: "💳Rp 150.000",
        image: "/assets/img/thesymphonyy.png",
        date: "📅Rabu, 30 Oktober 2024",
        location: "🏠Ciputra Artpreneur",
        capacity: "👥200 orang"
      },
      {
        title: "Melody Nusantara",
        detail: "Nusantara Orchestra",
        price: "💳Rp 150.000",
        image: "/assets/img/melodynusantaraa.png",
        date: "📅Kamis, 31 Oktober 2024",
        location: "🏠Jakarta Concert Hall",
        capacity: "👥200 orang"
      },
      {
        title: "Suara Kota",
        detail: "Symphony",
        price: "💳Rp 150.000",
        image: "/assets/img/suarakotaa.png",
        date: "📅Selasa, 29 Oktober 2024",
        location: "🏠Jakarta Internasional Stadium",
        capacity: "👥200 orang"
      },
      {
        title: "Harmoni Batavia",
        detail: "Nusantara Orchestra",
        price: "💳Rp 150.000",
        image: "/assets/img/Harmonibataviaa.png",
        date: "📅Minggu, 27 Oktober 2024",
        location: "🏠Jakarta Concert Hall",
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

export default Home_orkestra;
