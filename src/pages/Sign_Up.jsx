import React from 'react'

function Sign_Up() {
  return (
    <div>
        <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Musetix - Profile</title>
        <link rel="stylesheet" href="src/assets/css/styles.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
      </head>
      <div className="main-container">
    
        <div className="frame">
           
            <div className="form-container">
                 <img src="/assets/img/logomr.png" alt="MuseTix Logo" style={{height: '30px'}}/> 
                <p>Belum punya akun? Kenalan dulu yuk...</p>
                <form action="your_signup_endpoint" method="post">
                    <div className="input-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Masukkan email" required/>
                    </div>
                    <div className="input-group">
                        <label for="name">Nama</label>
                        <input type="text" id="name" placeholder="Masukkan nama" required/>
                    </div>
                    <div className="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Masukkan password" required/>
                    </div>
                    <button type="submit" className="main-btn"><a href="/Verifikasi">Daftar</a></button>
                </form>
                
                <div className="separator">
                    <hr className="line"/><span>atau</span><hr className="line"/>
                </div>
                
                <button className="google-btn">
                    <img src="/assets/img/google.png" alt="Google Icon" className="google-icon"/>
                    <a href="/Masuk_akun_google">Daftar dengan akun Google</a>
                </button>
                
            
            <p className="signup-text">Sudah punya akun? <a href="/Sign_in">Masuk</a></p>
            </div>
          
            <div className="image-container">
                <img src="/assets/img/wp.jpg" alt="Concert" className="side-image"/>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Sign_Up
