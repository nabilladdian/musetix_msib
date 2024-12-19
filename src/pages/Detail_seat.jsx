import React from "react";
import '../assets/css/Detail_seat.css';

function Detail_seat({ ticketCount, setTicketCount, category, setCategory, price, setPrice, seatNumber, setSeatNumber }) {
    const boxes = [
        {
            Title1: 'Judul',
            Title2: 'Fragment',
            Seat1: 'VIP',
            Seat2: 'CATEGORY 1',
            Price1: 'Harga Tiket',
            Price2: 'Rp200.000',
        },
        {
            Title1: 'Judul',
            Title2: 'Fragment',
            Seat1: 'VIP',
            Seat2: 'CATEGORY 2',
            Price1: 'Harga Tiket',
            Price2: 'Rp200.000',
        },
        {
            Title1: 'Judul',
            Title2: 'Fragment',
            Seat1: 'PREMIUM',
            Seat2: 'CATEGORY 3',
            Price1: 'Harga Tiket',
            Price2: 'Rp150.000',
        },
        {
            Title1: 'Judul',
            Title2: 'Fragment',
            Seat1: 'PREMIUM',
            Seat2: 'CATEGORY 4',
            Price1: 'Harga Tiket',
            Price2: 'Rp150.000',
        },
        {
            Title1: 'Judul',
            Title2: 'Fragment',
            Seat1: 'REGULAR',
            Seat2: 'CATEGORY 5',
            Price1: 'Harga Tiket',
            Price2: 'Rp100.000',
        },
    ];

    const handleTicketCountChange = (e) => {
        setTicketCount(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setPrice(e.target.value === 'VIP CAT 1' ? '200.000' : '150.000'); // Example price change
    };

    const handleSeatSelection = (seat) => {
        setSeatNumber(seat);
    };

    return (
        <>
            <div>
                {/* Image */}
                <img src="./public/assets/img/seatteater.png" alt="banner" style={{ borderRadius: '21px' }} />
                
                {/* Header */}
                <section className="header">
                    <div className="logo">
                        <img src="/assets/img/Logo (1).png" alt="logo" style={{ height: '30px' }} />
                    </div>

                    {/* Search */}
                    <div className="search-container">
                        <input type="text" placeholder="cari event, komunitas, dan kategori" className="search-input" />
                        <button className="search-button">
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

                {/* Confirmation Box */}
                <div className="confirmation-box">
                    <p>Mohon konfirmasi berapa banyak Tiket yang Ingin Anda bayar.</p>
                    <input 
                        type="number" 
                        value={ticketCount} 
                        onChange={handleTicketCountChange} 
                        min="1" 
                        style={{ width: '50px', marginRight: '10px' }} 
                    />
                </div>

                <div className="yellow-box-container">
                    {boxes.map((box, index) => (
                        <div key={index} className="yellow-box">
                            <div className="box-content">
                                <div className="left-content">
                                    <p className="Title1">{box.Title1}</p>
                                    <p className="Title2">{box.Title2}</p>
                                </div>
                                <div className="center-content">
                                    <p className="Seat1">{box.Seat1}</p>
                                    <p className="Seat2">{box.Seat2}</p>
                                </div>
                                <div className="center-content">
                                    <p className="Price1">{box.Price1}</p>
                                    <p className="Price2">{box.Price2}</p>
                                </div>
                                <div className="right-content">
                                    <button className="buy-ticket" onClick={() => handleSeatSelection(box.Seat2)}>
                                        <a href="/Detail_pembayaran">Beli Tiket</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
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
        </>
    );
};

export default Detail_seat;