import React from 'react';
import '../assets/css/detail_pembayaran_data.css';

const DetailPembayaranData = () => {
    return (
        <div className="container">
            <header className="header">
                <div className="logo"><img src="/assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} /></div>
                <div className="search-bar">
                    <input type="text" placeholder="cari event, komunitas, dan kategori" />
                    <button>🔍</button>
                </div>
                <nav className="nav">
                    <a href="#">Beranda</a>
                    <a href="#">Event</a>
                    <a href="#">Tiket</a>
                </nav>
            </header>

            <ul className="timeline">
            <li className="timeline-item active">
                    <div className="circle"></div>
                    <span>Pembayaran Tiket</span>
                </li>
                <li className="timeline-item active">
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
                <div className="row">
                    <div className="form-section">
                        <div className="form-header">
                            <h3>Keuntungan dan Peraturan:</h3>
                            <button className="dropdown-button">▼</button>
                        </div>
                        <p>Lihat urutan penonton di peta lokasi</p>
                        <label htmlFor="nama">Nama</label>
                        <input id="nama" type="text" placeholder="Ketik Nama kamu" />
                        
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="ketik email kamu yang masih aktif" />
                        
                        <label htmlFor="tel">No. Telepon</label>
                        <input id="tel" type="tel" placeholder="ketik no. telepon kamu yang masih aktif" />
                        
                        <button className="next-button"><a href="/verifikasi_pembayaran">Selanjutnya</a></button>
                    </div>

                    <div className="ticket-info">
                    <img src="./assets/img/1.png" alt="Event Image" className="event-image"/>
                        <div className="ticket-details">
                            <h2>Fragmen</h2>
                            <p className="event-category">Teater</p>
                            <p className="event-date">Senin, 28 Oktober 2024</p>
                            <p className="event-location">Teater Jakarta, Jakarta, Indonesia</p>
                            <p className="event-time">17.00</p>
                            <div className="ticket-selection">
                                <span>1</span>
                                <div>
                                    <p>1 Tiket</p>
                                    <p>VIP CAT 1 Kursi 5</p>
                                    <p>200.000</p>
                                </div>
                            </div>
                        </div>
                        <button className="popularity-button">Paling Diminati 🔥</button>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <p>Musetix</p>
                    </div>
                    <div className="footer-links">
                        <a href="#">Tentang kami</a>
                        <a href="#">Kebijakan Privasi</a>
                        <a href="#">Syarat dan Ketentuan</a>
                        <a href="#">Peraturan Komunitas</a>
                        <a href="#">Pusat Bantuan</a>

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
                </div>
            </footer>
        </div>
    );
};

export default DetailPembayaranData;