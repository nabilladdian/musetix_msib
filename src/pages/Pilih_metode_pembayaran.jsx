import React from 'react'
import '../assets/css/pilihmetode.css';

function Pilih_metode_pembayaran() {
  return (
    <div>

<head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Musetix - Profile</title>
        <link rel="stylesheet" href="src/assets/css/profil.css" />
        <link rel="stylesheet" href="src/assets/css/Footer.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      </head>
      <body>
        {/* <!-- Header --> */}
        <section className="header">
          <div className="logo">
            <img src="./assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
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
      <div className="container mt-5">
      <div className="progress-steps">
    <div className="progress-circle active"></div>
    <div className="progress-circle active"></div>
    <div className="progress-circle active"></div> 
    <div className="progress-circle"></div>  {/* Hapus kelas "active" dari langkah 4 */}
    <div className="progress-circle"></div>  {/* Hapus kelas "active" dari langkah 5 */}
    <div className="progress-circle"></div>  {/* Hapus kelas "active" dari langkah 6 */}
    <div className="progress-line"></div>
    {/* Sesuaikan panjang garis sesuai dengan langkah yang aktif */}
    <div className="progress-line-filled" style={{ width: '38%' }}></div> {/* Sesuaikan lebar garis */}
</div>
<div className="d-flex justify-content-between">
    <span className="progress-step-label">Pembayaran Tiket</span>
    <span className="progress-step-label">Masukkan Data Diri</span>
    <span className="progress-step-label">Pilih Pembayaran</span>
    <span className="progress-step-label">Verifikasi Kode</span>
    <span className="progress-step-label">Konfirmasi Pembayaran</span>
    <span className="progress-step-label">Pembayaran Selesai</span>
</div>

        <div className="d-flex justify-content-between mt-3">
            <div></div> 
            <div className="countdown-timer" id="countdown">10:00</div>
        </div>
    </div>

  
    <div className="container text-center mt-5">
        <h3>Pilih Metode Pembayaran</h3>
        <div className="row mt-4">
            <div className="col-md-4">
                <div className="card p-4 border-light shadow-sm">
                    <img src="/assets/img/krtdebit.png" alt="Debit/Credit Card" className="img-fluid mb-3"/>
                    <h5>Kartu Debit/Kredit</h5>
                </div>
            </div>
            <div className="col-md-4">
                <a href="Pembayaran_akunvirtual.html" className="no-link">
                <div className="card p-4 border-light shadow-sm">
                <img src="/assets/img/virtualakun.png" alt="Virtual Account" className="img-fluid mb-3"/>
                <a href="/pembayaran_akunvirtual"><h5>Akun Bank Virtual</h5></a>
                </div>
            </a>
            </div>
            <div className="col-md-4">
                <div className="card p-4 border-light shadow-sm">
                    <img src="/assets/img/qris.png" alt="QR Code" className="img-fluid mb-3"/>
                    <h5>Kode QR</h5>
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
            <a href="/About_us">Tentang kami</a>
            <a href="/Term_of_Condition">Syarat dan Ketentuan</a>
            <a href="/Privacy_Policy">Kebijakan Privasi</a>
            <a href="/Term_of_Condition_comunity">Peraturan Komunitas</a>
            <a href="/Pusat_bantuan">Pusat Bantuan</a>
          </div>
        </footer>
      </body>

    </div>
  )
}

export default Pilih_metode_pembayaran