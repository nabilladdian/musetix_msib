import React from 'react';
import { useLocation } from 'react-router-dom'; // Impor hook useLocation

function Headerbaruu() {
    const location = useLocation(); // Ambil lokasi halaman saat ini

    // Jika path adalah '/Sign_in', '/Sign_Up', atau '/Verifikasi', kita tidak akan merender header
    if (location.pathname === '/Sign_in' || location.pathname === '/Sign_Up' || location.pathname === '/Verifikasi') {
        return null; // Tidak merender header
    }

    return (
        <nav className="navbar">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src="/assets/img/logomr.png" alt="MuseTix" />
                </a>
                <form className="search-container">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Cari event, komunitas, dan kategori"
                        aria-label="Search"
                    />
                    <button className="search-button">
                        <img src="/assets/img/search.png" alt="search" className="search-icon" />
                    </button>
                </form>
                <div className="navbar-links">
                    <a href="/Tiket_page"> Beranda </a>
                    <a href="/Event">  Event </a>
                    <a href="/Tiket_page"> Tiket </a>
                    <a href="/Profile">
                        <img src="/assets/img/profile.png" alt="Profile" style={{ width: '25px', height: '25px' }} />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Headerbaruu;