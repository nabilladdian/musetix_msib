import React, { useState } from 'react';
import '../assets/css/Eventku_1.css';

function Eventku_1() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    dateTime: '',
    location: '',
    additionalInfo: '',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setFormData({ ...formData, images: [...formData.images, ...imageUrls] });
  };

  return (
    <div>
      {/* Header */}
      <section className="header">
        <div className="logo">
          <img src="/assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
        </div>

        {/* Search */}
        <div className="search-container">
          <input
            type="text"
            placeholder="cari event, komunitas, dan kategori"
            className="search-input"
            aria-label="Search"
          />
          <button className="search-button" aria-label="Search button">
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

      <ul className="timeline">
        <li className="timeline-item active">
          <div className="circle"></div>
          <span>Deskripsi</span>
        </li>
        <li className="timeline-item">
          <div className="circle"></div>
          <span>Tiket</span>
        </li>
        <li className="timeline-item">
          <div className="circle"></div>
          <span>Selesai</span>
        </li>
      </ul>

      <section className="category-buttons">
          <button className="btn-category"><a href="/Eventku_1_bayar">Bayar</a></button>
          <button className="btn-category"><a href="/Eventku_1_gratis">Gratis</a></button>
          <button className="btn-category"><a href="/Eventku_1_donasi">Donasi</a></button>
        </section>


      <div>
        <div className="upload" style={{ backgroundColor: '#FFFACD', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M22.65 34H25.65V25.7H34V22.7H25.65V14H22.65V22.7H14V25.7H22.65V34ZM24.0135 44C21.2555 44 18.6638 43.475 16.2385 42.425C13.8128 41.375 11.6917 39.9417 9.875 38.125C8.05833 36.3083 6.625 34.186 5.575 31.758C4.525 29.33 4 26.7357 4 23.975C4 21.2143 4.525 18.62 5.575 16.192C6.625 13.764 8.05833 11.65 9.875 9.85C11.6917 8.05 13.814 6.625 16.242 5.575C18.67 4.525 21.2643 4 24.025 4C26.7857 4 29.38 4.525 31.808 5.575C34.236 6.625  36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2288 44 23.9865C44 26.7445 43.475 29.3362 42.425 31.7615C41.375 34.1872 39.95 36.3053 38.15 38.116C36.35 39.9263 34.2333 41.3597 31.8 42.416C29.3667 43.472 26.7712 44 24.0135 44ZM24.025 41C28.7417 41 32.75 39.3417 36.05 36.025C39.35 32.7083 41 28.6917 41 23.975C41 19.2583 39.3532 15.25 36.0595 11.95C32.7658 8.65 28.746 7 24 7C19.3 7 15.2917 8.64683 11.975 11.9405C8.65833 15.2342 7 19.254 7 24C7 28.7 8.65833 32.7083 11.975 36.025C15.2917 39.3417 19.3083 41 24.025 41Z" fill="#121212" />
          </svg>
          <p>Tambahkan flayer pertunjukkanmu</p>
          <input type="file" className="form-control" accept="image/*" multiple onChange={handleImageUpload} />
        </div>

        <div className="container mt-4">
          <div className="form-container mx-auto" style={{ maxWidth: '500px' }}>
            <div className="form-group mb-3">
              <label>Judul</label>
              <small>Biarkan mereka mengingat pertunjukkanmu</small>
              <input type="text" name="title" className="form-control" placeholder="Masukkan judul pertunjukkanmu" required onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
              <label>Deskripsi</label>
              <small>Buatlah pengunjung semakin tertarik</small>
              <input type="text" name="description" className="form-control" placeholder="Masukkan deskripsi pertunjukkanmu" required onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
              <label>Kategori Pertunjukkan</label>
              <input type="text" name="category" className="form-control" placeholder="Kategori pertunjukkan" required onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
              <label>Tanggal dan Waktu</label>
              <input type="datetime-local" name="dateTime" className="form-control" required onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
              <label>Lokasi</label>
              <input type="text" name="location" className="form-control" placeholder="Masukkan lokasi pertunjukkanmu" required onChange={handleChange} />
            </div>
            <div className="form-group mb-3">
              <label>Upload Gambar Lokasi</label>
              <input type="file" className="form-control" accept="image/*" multiple onChange={handleImageUpload} />
              <div className="image-preview">
                {formData.images.map((image, index) => (
                  <img key={index} src={image} alt={`Uploaded ${index}`} className="uploaded-image" />
                ))}
              </div>
            </div>
            <div className="form-group mb-3">
              <label>Apakah pakai seat atau tidak?</label>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" id="seatToggle" />
                <label className="form-check-label" htmlFor="seatToggle">Ya/Tidak</label>
              </div>
            </div>
            <div className="form-group mb-3">
              <label>Informasi Tambahan</label>
              <input type="text" name="additionalInfo" className="form -control" placeholder="Masukkan informasi tambahan seperti tempat parkir atau benefit lainnya" onChange={handleChange} />
            </div>
            <div className="parent-container">
              <button className="btn btn-primary"><a href="/Eventku_1_bayar">Selanjutnya</a></button>
            </div>
          </div>
        </div>
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
};

export default Eventku_1;