import React, { useState, useEffect } from 'react';
import '../assets/css/verifikasi.css'; // Pastikan file CSS Anda ada

function Verifikasi() {
  const [code, setCode] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(60); // Mulai dari 60 detik
  const [errorMessage, setErrorMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false); // Status verifikasi

  // Menangani perubahan input
  const handleInputChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Pindah ke input berikutnya jika ada input
      if (value && index < 5) {
        document.getElementById(`code${index + 2}`).focus();
      }
    }
  };

  // Kirim ulang kode verifikasi
  const resendCode = () => {
    setTimer(60); // Reset timer ke 60 detik
    setCode(Array(6).fill("")); // Kosongkan input kode
    setErrorMessage(""); // Kosongkan pesan kesalahan
    console.log("Kode verifikasi telah dikirim ulang."); // Log untuk pengujian
  };

  // Verifikasi kode
  const verifyCode = () => {
    const enteredCode = code.join("");
    const correctCode = "123456"; // Kode verifikasi yang benar

    // Periksa apakah semua input terisi
    if (enteredCode.includes("")) {
      setErrorMessage("Harap masukkan kode verifikasi lengkap.");
    } else if (enteredCode === correctCode) {
      setIsVerified(true); // Ubah status verifikasi jika kode benar
    } else {
      setErrorMessage("Kode yang dimasukkan salah. Silakan coba lagi.");
    }
  };

  // Timer menggunakan useEffect
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1); // Kurangi timer setiap detik
      }, 1000);

      return () => clearInterval(interval); // Hapus interval jika komponen tidak lagi digunakan
    }
  }, [timer]);

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
      <img src="./public/assets/img/logomr.png" alt="Logo MuseTix" className="mb-4" style={{ width: '300px', height: 'auto' }} />
      <h1 className="text-center" style={{ fontSize: '2rem', marginTop: '50px', marginBottom: '10px' }}>Masukkan Kode Verifikasi</h1>
      <h2 className="text-center" style={{ fontSize: '2rem', marginTop: '10px', marginBottom: '30px' }}>Kode verifikasi telah dikirim ke email Anda</h2>
      <div className="d-flex justify-content-center mb-4">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            id={`code${index + 1}`}
            className="code-input"
            maxLength="1"
            value={digit}
            onChange={(e) => handleInputChange(e.target.value, index)}
            style={{ margin: '0 5px', textAlign: 'center' }} // Add spacing between inputs
          />
        ))}
      </div>
      <div className="d-flex justify-content-center w-100 mb-3">
        <p className="text-center" style={{ fontSize: '0.9rem', marginTop: '30px', marginBottom: '30px' }}>
          Kirim ulang kode?
          <span className="resend-link" onClick={resendCode}> kirim kode</span>
          <span className="resend-timer">{timer}s</span>
        </p>
      </div>
      <p className="error-message text-center">{errorMessage}</p>
      <button className="btn verify-button" onClick={verifyCode}><a href="/verifikasi_berhasil">Verifikasi Kode</a></button>

      {isVerified && (
        <div className="success-container text-center">
          <img src="ceklis.png" alt="Verifikasi Berhasil" />
          <h1>Verifikasi Berhasil</h1>
          <p>Selamat datang di <strong>MuseTix</strong>,<br /> temukan pertunjukan impian Anda bersama kami</p>
          <button className="btn home-button" onClick={() => console.log("Navigasi ke Beranda")}>Beranda</button>
        </div>
      )}
    </div>
  );
}

export default Verifikasi;
