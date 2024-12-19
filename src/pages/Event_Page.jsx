import React from 'react';
import '../assets/css/event_page.css'

function Event_Page() {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Musetix - Event Detail</title>
        <link rel="stylesheet" href="src/assets/css/profil.css" />
        <link rel="stylesheet" href="src/assets/css/Footer.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"></link>
        <script src="https://cdn.tailwindcss.com"></script>
        
      </head>
      <body>
        {/* Header */}
        <section className="header">
          <div className="logo">
            <img src="./assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
          </div>

          {/* Search */}
          <div className="search-container">
            <input
              type="text"
              placeholder="cari event, komunitas, dan kategori"
              className="search-input"
            />
            <button className="search-button">
              <img src="./assets/img/search.png" alt="search" className="search-icon" />
            </button>
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

        {/* Event Detail Section */}
        <main>
          <section className="event-details">

            <div class="row gy-4">
                <div class="col-lg-3 col-md-4 col-sm-6 col-12">
                    <div class="feature-box">
                        <div class="img" style={{ textIndent: '20em',  fontSize: '6.6px' }}>
                            <img src="/assets/img/Fragmenbaru.png" alt="artwork" />
                        </div>
                        
                        <div class="content">
                          <p>
                          <div className="info"><br/>
                          <h1>Fragmen</h1>
                            <i class='bx bx-calendar-week'>  Senin, 28 Oktober 2024</i><p></p>
                            <i class='bx bx-time-five'>  18.00-20.00</i><p></p>
                            <i class='bx bx-map'>  Teater Jakarta, Jakarta, Indonesia</i>
                            </div>
    
                          </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detail di bawah gambar */}
            <div className="event-info">
            <button className="btn btn-warning">Teater</button>
            <i class='bx bx-bookmark' style={{ textIndent: '33em',  fontSize: '31px' }}></i>
              <h1><br/>Fragmen </h1>
              <p><a href="/Profile_Page_komunitas">Teater Koma </a></p>
  

              <i class='bx bx-calendar-week'> Senin, 28 Oktober 2024     <i class='bx bx-chair' style={{ textIndent: '13em' }}> 200 orang</i>  </i><br/>
              <i class='bx bx-time-five'> 18.00-20.00 &emsp;  <i class='bx bx-money' style={{ textIndent: '17em' }}></i> mulai dari Rp100.000</i><br/>
              <i class='bx bx-map'> Teater Jakarta, Jakarta, Indonesia    <button className="btn-small btn-warning">maps</button></i><br/>

              <p>
              "Fragmen Kehidupan" adalah sebuah perjalanan teater yang mengajak penonton untuk menyelami kedalaman jiwa manusia. 
              Lakon ini menyajikan sebuah metafora indah tentang hidup sebagai kumpulan potongan-potongan kecil yang saling terhubung. 
              Setiap fragmen, setiap peristiwa, adalah cerminan dari pilihan dan tindakan yang telah kita lakukan. 
              Pertunjukan ini menyuguhkan tarian antara masa lalu, sekarang, dan masa depan, di mana setiap langkah yang kita ambil 
              akan membentuk pola yang unik dalam kehidupan kita. Melalui kisah-kisah yang menyentuh, penonton diajak untuk merenungkan 
              makna kehidupan dan bagaimana setiap keputusan yang kita buat akan membentuk siapa kita saat ini dan di masa depan.
              </p>
              <button className="btn btn-warning"><a href="/Detail_tiket"> Pesan Sekarang</a></button><br/>
            </div><br/><br/> 


           <br/> <p><h2>Rekomendasi Untukmu</h2></p>
           <p></p> 
           
           <div class="row">
           <div class="row-1">
                    <div class="row-2">
                    <div class="rekomendasi-box">
                        <div class="img">
                            <img src="assets/img/fc9fa5ede1a28bad5fad74359c09bfaa 2.png" alt="artwork" /><br/>
                            <p></p><button className="btn-rekomendasi btn-warning">Teater</button>
                        </div>
                        <div class="content-rekomendasi">
                        <h1><p></p>Fragmen </h1>
                        <p>Teater Koma</p> 
                        <div className="info">
                            <i class='bx bx-calendar-week'>  Senin, 28 Oktober 2024    </i>
                            <i class='bx bx-map'> Teater Jakarta, Jakarta, Indonesia </i>
                            <i class='bx bx-chair'> 200 orang</i> 
                            <p style={{ color: 'green' }} >Tersedia <i class='bx bx-money' style={{ textIndent: '7em', color: 'black' }}> Rp 100.000</i></p>
                        </div>
                        </div>
                    </div>
                    </div>
                 
                    
                    {/* gambar 2 */}
                    
                    <div class="row-2">
                    <div class="rekomendasi-box"  >
                        <div class="img" >
                            <img src="assets/img/setengahhati.png" alt="artwork" /><br/>
                            <p></p><button className="btn-rekomendasi btn-warning">Teater</button>
                        </div>
                        <div class="content-rekomendasi">
                        <h1><p></p>Setengah Hati </h1>
                        <p>Teater Jakarta</p> 
                        <div className="info">
                            <i class='bx bx-calendar-week'>  Selasa, 29 Oktober 2024    </i>
                            <i class='bx bx-map'> Teater Jakarta, Jakarta, Indonesia </i>
                            <i class='bx bx-chair'> 200 orang</i> 
                            <p style={{ color: 'green' }} >Tersedia <i class='bx bx-money' style={{ textIndent: '8em', color: 'black' }}> &emsp; Free</i></p>
                        </div>
                        </div>
                        </div>
                    </div>


                  {/* gambar 3 */}
                  <div class="row-3">
                    <div class="rekomendasi-box">
                        <div class="img">
                            <img src="assets/img/revolusi.png" alt="artwork" /><br/>
                            <p></p><button className="btn-rekomendasi btn-warning">Teater</button>
                        </div>
                        <div class="content-rekomendasi">
                        <h1><p></p>Revolusi </h1>
                        <p>Teater Koma</p> 
                        <div className="info">
                            <i class='bx bx-calendar-week'>  Minggu, 27 Oktober 2024    </i>
                            <i class='bx bx-map'> Art Center, Denpasar, Indonesia </i>
                            <i class='bx bx-chair'> 200 orang</i> 
                            <p style={{ color: 'green' }} >Tersedia <i class='bx bx-money' style={{ textIndent: '7em', color: 'black' }}> Rp 100.000</i></p>
                        </div>
                        </div>
                    </div>
                    </div>


                    {/* gambar 4 */}
                    <div class="row-4">
                    <div class="rekomendasi-box">
                        <div class="img">
                            <img src="assets/img/aku.png" alt="artwork" /><br/>
                            <p></p><button className="btn-rekomendasi btn-warning">Teater</button>
                        </div>
                        <div class="content-rekomendasi">
                        <h1><p></p>Aku, Aku, Aku </h1>
                        <p>Teater Jakarta</p> 
                        <div className="info">
                            <i class='bx bx-calendar-week'>  Senin, 4 November 2024    </i>
                            <i class='bx bx-map'> Teater Jakarta, Jakarta, Indonesia </i>
                            <i class='bx bx-chair'> 200 orang</i> 
                            <p style={{ color: 'green' }} >Tersedia <i class='bx bx-money' style={{ textIndent: '7em', color: 'black' }}> Rp 150.000</i></p>
                        </div>
                        </div>
                    </div>
                    </div>


                     {/* gambar 5 */}
                    <div class="row-5">
                    <div class="rekomendasi-box">
                        <div class="img">
                            <img src="assets/img/thered.png" alt="artwork" /><br/>
                            <p></p><button className="btn-rekomendasi btn-warning">Teater</button>
                        </div>
                        <div class="content-rekomendasi">
                        <h1><p></p>The Red </h1>
                        <p>Teater Jakarta</p> 
                        <div className="info">
                            <i class='bx bx-calendar-week'>  Rabu, 30 Oktober 2024    </i>
                            <i class='bx bx-map'> Teater Jakarta, Jakarta, Indonesia </i>
                            <i class='bx bx-chair'> 200 orang</i> 
                            <p style={{ color: 'green' }} >Tersedia <i class='bx bx-money' style={{ textIndent: '7em', color: 'black' }}> Rp 150.000</i></p>
                        </div>
                        </div>
                    </div>
                    </div>


                     {/* gambar 6 */}
                     <div class="row-6">
                    <div class="rekomendasi-box">
                        <div class="img">
                            <img src="assets/img/bumimanusia.png" alt="artwork" /><br/>
                            <p></p><button className="btn-rekomendasi btn-warning">Teater</button>
                        </div>
                        <div class="content-rekomendasi">
                        <h1><p></p>Bumi Manusia </h1>
                        <p>Teater Koma</p> 
                        <div className="info">
                            <i class='bx bx-calendar-week'>  Minggu, 27 Oktober 2024    </i>
                            <i class='bx bx-map'> Indonesia Convention Exhibition </i>
                            <i class='bx bx-chair'> 200 orang</i> 
                            <p style={{ color: 'green' }} >Tersedia <i class='bx bx-money' style={{ textIndent: '7em', color: 'black' }}> Rp 100.000</i></p>
                        </div>
                        </div>
                    </div>
                    </div>


                    {/* gambar 7 */}
                    <div class="row-7">
                    <div class="rekomendasi-box">
                        <div class="img">
                            <img src="assets/img/manusia.png" alt="artwork" /><br/>
                            <p></p><button className="btn-rekomendasi btn-warning">Teater</button>
                        </div>
                        <div class="content-rekomendasi">
                        <h1><p></p>Manusia </h1>
                        <p>Teater Jakarta</p> 
                        <div className="info">
                            <i class='bx bx-calendar-week'>  Senin, 28 Oktoner 2024    </i>
                            <i class='bx bx-map'> Gedung Kesenian Jakarta </i>
                            <i class='bx bx-chair'> 200 orang</i> 
                            <p style={{ color: 'green' }} >Tersedia <i class='bx bx-money' style={{ textIndent: '7em', color: 'black' }}> Rp 100.000</i></p>
                        </div>
                        </div>
                    </div>
                    </div>


                    {/* gambar 8 */}
                    <div class="row-8">
                    <div class="rekomendasi-box">
                        <div class="img">
                            <img src="assets/img/spotlight.png" alt="artwork" /><br/>
                            <p></p><button className="btn-rekomendasi btn-warning">Teater</button>
                        </div>
                        <div class="content-rekomendasi">
                        <h1><p></p>Spotlight </h1>
                        <p>Teater Jakarta</p> 
                        <div className="info">
                            <i class='bx bx-calendar-week'>  Minggu, 27 Oktober 2024    </i>
                            <i class='bx bx-map'> Teater Garuda Yogyakarta </i>
                            <i class='bx bx-chair'> 200 orang</i> 
                            <p style={{ color: 'green' }} >Tersedia <i class='bx bx-money' style={{ textIndent: '7em', color: 'black' }}> Rp 100.000</i></p>
                        </div>
                        </div>
                    </div>
                    </div>


                </div>
            </div>
          </section>
        </main>

        

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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6KEpJ6zfQ38h8U2Bt6MQBxVf6BsuqUokzLMBTXPsEzCQB/lIFjk" crossorigin="anonymous"></script>

<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha384-OD6U8a5XrN3YTFR6GFEXB41USepF1BBqxO6XS6chc1NknWNefP8vdNTPIaflNJo3" crossorigin="anonymous"></script>
      </body>
    </div>
  );
}

export default Event_Page;