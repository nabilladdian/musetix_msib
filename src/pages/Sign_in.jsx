import React from 'react'


function Sign_in() {
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
                <p>Sudah punya akun? Masuk dulu gih...</p>
                <form action="your_login_endpoint" method="post">
                    <div className="input-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Masukkan email" required/>
                    </div>
                    <div className="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Masukkan password" required/>
                    </div>
                    <button type="submit" className="main-btn"><a href="/Verifikasi">Masuk</a></button>
                </form>
                
                <div className="separator">
                    <hr className="line"/><span>atau</span><hr className="line"/>
                </div>
                
                <button className="google-btn">
                    <img src="/assets/img/google.png" alt="Google Icon" className="google-icon"/>
                    Masuk dengan akun Google
                </button>
                
                <p className="signup-text">Belum punya akun? <a href="/Sign_Up">daftar</a></p>
            </div>

            
            <div className="image-container">
                <img src="/assets/img/wp.jpg" alt="Concert" className="side-image"/>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Sign_in
