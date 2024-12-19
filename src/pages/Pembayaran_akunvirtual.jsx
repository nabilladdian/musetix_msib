import React from 'react'
import '../assets/css/pembayaranakun.css';

function Pembayaran_akunvirtual() {
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
                <div className="progress-circle active"></div>
                <div className="progress-circle active"></div>
                <div className="progress-circle"></div> {/* Additional progress circle */}
                <div className="progress-line "></div>
                <div className="progress-line-filled"></div>
                <div className="progress-line-filled" style={{ width: '75%' }}></div>
            </div>
            <div className="d-flex justify-content-between">
                <span className="progress-step-label">Pembayaran Tiket</span>
                <span className="progress-step-label">Masukkan Data Diri</span>
                <span className="progress-step-label">Pilih Pembayaran</span>
                <span className="progress-step-label">Verifikasi Kode</span>
                <span className="progress-step-label">Konfirmasi Pembayaran</span>
                <span className="progress-step-label">Pembayaran Selesai</span> {/* Added label */}
            </div>

            <div className="d-flex align-items-center justify-content-between mt-4">
                <h3 className="akun-bank-title">AKUN BANK VIRTUAL</h3>
                <div className="countdown-timer" id="countdown">10:00</div>
            </div>
        </div>

        <div className="container mt-4">
            <div className="form-container mx-auto" style={{maxWidth: '500px'}}>
                <div className="form-group mb-3">
                    <label>Nama Depan</label>
                    <input type="text" className="form-control" placeholder="Ketik Nama depan kamu"/>
                </div>
                <div className="form-group mb-3">
                    <label>Nama Belakang</label>
                    <input type="text" className="form-control" placeholder="Ketik Nama belakang kamu"/>
                </div>
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Ketik email kamu"/>
                </div>
                <div className="form-group mb-3">
                    <label>No. Telepon</label>
                    <input type="tel" className="form-control" placeholder="Ketik No. telepon kamu"/>
                </div>
                <div className="form-group mb-3">
                    <label>Bank Tujuan</label>
                    <input type="text" className="form-control" placeholder="Ketik bank tujuan yang kamu mau"/>
                </div>
                <div className="form-group mb-3">
                    <label>No. Akun Virtual</label>
                    <input type="text" className="form-control" placeholder="Ini no akun virtual kamu"/>
                </div>
            </div>
        </div>

      <div className="parent-container">
      <button className="btn-small-center"><a href="/transaksi_berhasil">Selanjutnya</a></button>
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

export default Pembayaran_akunvirtual;