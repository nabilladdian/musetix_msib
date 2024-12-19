import React, { useState } from 'react';
import '../assets/css/Pengaturan.css';

function Pengaturan() {
  const [images, setImages] = useState([]);
  const [imageInput, setImageInput] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    if (imageInput) {
      setImages(prevImages => [...prevImages, imageInput]);
      setImageInput('');
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <header>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Musetix - Favorit</title>
      </header>
      <body>
        {/* Header */}
        <section className="header">
          <div className="logo">
            <img src="/assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
          </div>

          {/* <!-- search --> */}
          <div className="search-container">
            <input
              type="text"
              placeholder="cari event, komunitas, dan kategori"
              className="search-input"
              value={searchQuery}
              onChange={handleSearch}
            />
            <button className="search-button">
              <img src="./assets/img/search.png" alt="search" className="search-icon" />
            </button>
            {/* <!-- Search icon as button --> */}
          </div>

          <nav className="nav">
          <a href="/Home">Beranda</a>
            <a href="/Event">Event</a>
            <a href="/Tiket_page">Tiket</a>
            <a href="/Profil_User">
              <img src="./assets/img/profile.png" alt="profile" className="icon-profile" />
            </a>
          </nav>
        </section>

        <main>
          <aside>
            <div className='name-links'>
              <ul className="side">
                <li>
                  <a href="/profil_User">Profil</a>
                </li>
                <li>
                  <a href="">Event-ku</a>
                </li>
                <li>
                  <a href="">Tiket-ku</a>
                </li>
                <li>
                  <a href="/Notifikasi">Notifikasi</a>
                </li>
                <li>
                  <a href="/Favorit">Favorit</a>
                </li>
                <li className="active">
                  <a href="">Pengaturan</a>
                </li>
                <li>
                  <a href="sign_in">Keluar Akun</a>
                </li>
              </ul>
            </div>
          </aside>

          <div className="account-settings">
            <h1>PENGATURAN</h1>
            <h3>Mau edit apa nih?</h3>
            <form onSubmit={handleAddImage}>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
              <button type="submit">Upload gambar profil</button>
            </form>
            <div className="image-preview">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`Uploaded ${index}`} className="uploaded-image" />
              ))}
            </div>
          </div>

         
          <div className="input-name">
  <label htmlFor="nama">Nama</label>
  <input type="text" id="nama" placeholder="Masukkan Nama Depan dan nama Belakang" required />
</div>
<div className="input-Username">
  <label htmlFor="username">Username</label>
  <input type="text" id="username" placeholder="Masukkan Username" required />
</div>
<div className="input-link-komunitas">
  <label htmlFor="link">Link Komunitas Facebook</label>
  <input type="text" id="link" placeholder="Masukkan Link Komunitas Facebook" required />
</div>
<div className="input-link-komunitas">
  <label htmlFor="linkDiscord">Link Komunitas Discord</label>
  <input type="text" id="linkDiscord" placeholder="Masukkan Link Komunitas Discord" required />
</div>
<div className="input-Biography">
  <label htmlFor="biography">Biografi</label>
  <textarea
    id="biography"
    placeholder="Masukkan Biografi MU"
    required
    rows="4" // You can adjust the number of rows as needed
    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: 'white', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}
  />
</div>
                    <button type="submit" className="main-btn"><a href="/Profil_User">Simpan Perubahan</a></button>
            

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
        </main>
      </body>
    </>
  );
};

export default Pengaturan;

