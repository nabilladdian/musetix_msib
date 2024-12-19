import React from 'react';
import { useLocation } from 'react-router-dom'; // Impor hook useLocation

function Footerbaruu() {
    const location = useLocation(); // Ambil lokasi halaman saat ini

    // Jika path adalah '/Sign_in', '/Sign_Up', atau '/Verifikasi', kita tidak akan merender footer
    if (location.pathname === '/Sign_in' || location.pathname === '/Sign_Up' || location.pathname === '/Verifikasi') {
        return null; // Tidak merender footer
    }

    return (
        <footer className="text-center mt-5 custom-footer">
            <div className="container">
                <div className="row">
                    {/* Kolom Logo */}
                    <div className="col-md-3 text-start">
                        <img src="/assets/img/logowt.png" alt="MuseTix Logo" />
                    </div>
                    {/* Kolom Link */}
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-6 text-start">
                                <a href="#">Tentang kami</a><br />
                                <a href="#">Kebijakan Privasi</a>
                            </div>
                            <div className="col-md-6 text-start">
                                <a href="#">Syarat dan Ketentuan</a><br />
                                <a href="/Pusat_bantuan">Pusat Bantuan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footerbaruu;