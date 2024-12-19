import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React from 'react';
import Privacy_Policy from './pages/Privacy_Policy';
import About_us from './pages/About_us';
import Profile_Page_komunitas from './pages/Profile_Page_komunitas';
import Term_of_Condition_comunity from './pages/Term_of_Condition_comunity';
import Term_of_Condition from './pages/Term_of_Condition';
import Profil_User from './pages/Profil_User';
import Home from './pages/Home';
import Pusat_bantuan from './pages/pusat_bantuan';
import Tiket from './pages/Tiket';
import Event from './pages/Event';
import Verifikasi from './pages/Verifikasi';
import Sign_in from './pages/Sign_in';
import Sign_Up from './pages/Sign_Up';
import Pembayaran_akunvirtual from './pages/Pembayaran_akunvirtual';
import Pilih_metode_pembayaran from './pages/Pilih_metode_pembayaran';
import Verifikasi_pembayaran from './pages/Verifikasi_pembayaran';
import Tiket_page from './pages/Tiket_page';
import Deskripsi_eventku from './pages/Deskripsi_eventku';
import Detail_pembayaran from './pages/Detail_pembayaran';
import Event_ku from './pages/Event_ku';
import Favorit from './pages/Favorit';
import Notifikasi from './pages/Notifikasi';
import Event_Page from './pages/Event_Page';
import VerifikasiBerhasil from './pages/verifikasi_berhasil';
import Home_konser from './pages/Home_konser';
import Home_orkestra from './pages/Home_orkestra';
import Home_teater from './pages/Home_teater';
import Tiket_page_konser from './pages/Tiket_page_konser';
import Tiket_page_orkestra from './pages/Tiket_page_orkestra';
import Tiket_page_teater from './pages/Tiket_page_teater';
import Detail_tiket from './pages/Detail_tiket';
import Detail_seat from './pages/Detail_seat';
import Tiket_ku from './pages/Tiket_ku';
import Pengaturan from './pages/Pengaturan';
import Eventku_1 from './pages/Eventku_1';
import Eventku_1_bayar from './pages/Eventku_1_bayar';
import DetailPembayaranData from './pages/detail_pembayaran_data';
import TransaksiBerhasil from './pages/transaksi_berhasil';
import Eventku_berhasil from './pages/Eventku_berhasil';
import Event_page_1 from './pages/Event_page_1';
import Event_page_2 from './pages/Event_page_2';

// import Headerbaruu from './pages/Headerbaruu';
// import Footerbaruu from './pages/Footerbaruu';


function AppLayout() {
  const location = useLocation();

  // Semua path yang tidak memerlukan header/footer
  const noHeaderFooterRoutes = ['/sign_in', '/sign_up', '/verifikasi'];

  // Cek apakah rute saat ini termasuk dalam daftar rute tanpa header/footer
  const isExcludedRoute = noHeaderFooterRoutes.includes(location.pathname.toLowerCase());

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Tampilkan Header jika bukan rute yang dikecualikan */}
      {/* {!isExcludedRoute && <Headerbaruu />} */}
      <main style={{ flex: 1 }}>
        <Routes>
          {/* Definisi semua rute */}
          <Route path="/Home" element={<Home />} />
          <Route path="/About_us" element={<About_us />} />
          <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
          <Route path="/Profile_Page_komunitas" element={<Profile_Page_komunitas />} />
          <Route path="/Term_of_Condition_comunity" element={<Term_of_Condition_comunity />} />
          <Route path="/Term_of_Condition" element={<Term_of_Condition />} />
          <Route path="/Profil_user" element={<Profil_User />} />
          <Route path="/Pusat_bantuan" element={<Pusat_bantuan />} />
          <Route path="/Tiket" element={<Tiket />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/Sign_in" element={<Sign_in />} />
          <Route path="/Sign_up" element={<Sign_Up />} />
          <Route path="/Verifikasi" element={<Verifikasi />} />
          <Route path="/Pilih_metode_pembayaran" element={<Pilih_metode_pembayaran />} />
          <Route path="/Pembayaran_akunvirtual" element={<Pembayaran_akunvirtual />} />
          <Route path="/Verifikasi_pembayaran" element={<Verifikasi_pembayaran />} />
          <Route path="/Tiket_page" element={<Tiket_page />} />
          <Route path="/Deskripsi_eventku" element={<Deskripsi_eventku/>}/>
          <Route path="/Detail_pembayaran" element={<Detail_pembayaran/>}/>
          <Route path="/Event_ku" element={<Event_ku/>}/>
          <Route path="/Favorit" element={<Favorit/>}/>
          <Route path="/Notifikasi" element={<Notifikasi/>}/>
          <Route path="/Event_Page" element={<Event_Page/>}/>
          <Route path="/verifikasi_berhasil" element={<VerifikasiBerhasil/>}/>
          <Route path="/Home_konser" element={<Home_konser/>}/>
          <Route path="/Home_orkestra" element={<Home_orkestra/>}/>
          <Route path="/Home_teater" element={<Home_teater/>}/>
          <Route path="/Tiket_page_konser" element={<Tiket_page_konser/>}/>
          <Route path="/Tiket_page_orkestra" element={<Tiket_page_orkestra/>}/>
          <Route path="/Tiket_page_teater" element={<Tiket_page_teater/>}/>
          <Route path="/Detail_tiket" element={<Detail_tiket/>}/>
          <Route path="/Detail_seat" element={<Detail_seat/>}/>
          <Route path="/Tiket_ku" element={<Tiket_ku/>}/>
          <Route path="/Pengaturan" element={<Pengaturan/>}/>
          <Route path="/Eventku_1" element={<Eventku_1/>} />
          <Route path="/Eventku_1_bayar" element={<Eventku_1_bayar/>}/>
          <Route path="/detail_pembayaran_data" element={<DetailPembayaranData/>}/>
          <Route path="/transaksi_berhasil" element={<TransaksiBerhasil/>}/>
          <Route path="/Eventku_berhasil" element={<Eventku_berhasil/>}/>
          <Route path="/Event_page_1" element={<Event_page_1/>}/>
          <Route path="/Event_page_2" element={<Event_page_2/>}/>
          <Route path="/" element={<Home />} />
        
          {/* Fallback untuk halaman yang tidak ditemukan */}
          <Route
            path="*"
            element={
              <h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">
                NOT FOUND PAGE.
              </h1>
            }
          />
        </Routes>
      </main>
      {/* Tampilkan Footer jika bukan rute yang dikecualikan */}
      {/* {!isExcludedRoute && <Footerbaruu />} */}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;


// // COBA
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// import React from 'react';
// import Privacy_Policy from './pages/Privacy_Policy';
// import About_us from './pages/About_us';
// import Profile_Page_komunitas from './pages/Profile_Page_komunitas';
// import Term_of_Condition_comunity from './pages/Term_of_Condition_comunity';
// import Term_of_Condition from './pages/Term_of_Condition';
// import Profil_User from './pages/Profil_User';
// import Home from './pages/Home';
// import Pusat_bantuan from './pages/Pusat_bantuan';
// import Tiket from './pages/Tiket';
// import Event from './pages/Event';
// import Verifikasi from './pages/Verifikasi';
// import Sign_in from './pages/Sign_in';
// import Sign_Up from './pages/Sign_Up';
// import Pembayaran_akunvirtual from './pages/Pembayaran_akunvirtual';
// import Pilih_metode_pembayaran from './pages/Pilih_metode_pembayaran';
// import Verifikasi_pembayaran from './pages/Verifikasi_pembayaran';
// import Tiket_page from './pages/Tiket_page';
//import Masuk_akun_google from './pages/Masuk_akun_google'
//import verifikasi_berhasil from './pages/verifikasi_berhasil'
// // import Header from './components/Header';
// // import Footer from './components/Footer';
// // tambah page lain

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/About_us" element={<About_us />} />
//         <Route path="/Privacy_Policy" element={<Privacy_Policy />} />
//         <Route path="/Profile_Page_komunitas" element={<Profile_Page_komunitas />} />
//         <Route path="*" element={<h1 className="flex w-full h-full text-center items-center justify-center text-4xl text-pink-600">NOT FOUND PAGE.</h1>} />
//         <Route path="/Term_of_Condition_comunity" element={<Term_of_Condition_comunity />} />
//         <Route path="/Term_of_Condition" element={<Term_of_Condition />} />
//         <Route path="/Profil_User" element={<Profil_User />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/Pusat_bantuan" element={<Pusat_bantuan />} />
//         <Route path="/Tiket" element={<Tiket />} />
//         <Route path="/Event" element={<Event />} />
//         {/* <Route path="/" element={<Sign_in />} /> Rute default */}
//         <Route path="/Pilih_metode_pembayaran" element={<Pilih_metode_pembayaran />} />
//         <Route path="/Verifikasi" element={<Verifikasi />} />
//         <Route path="/Sign_in" element={<Sign_in />} />
//         <Route path="/Sign_Up" element={<Sign_Up />} />
//         <Route path="/Pusat_bantuan" element={<Pusat_bantuan />} />
//         <Route path="/Pembayaran_akunvirtual" element={<Pembayaran_akunvirtual />} />
//         <Route path="/Verifikasi_pembayaran" element={<Verifikasi_pembayaran />} />
//         <Route path="/Tiket_page" element={<Tiket_page />} />
//         <Route path="/Masuk_akun_google" element={<Masuk_akun_google />}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
