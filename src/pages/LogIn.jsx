import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import style from '../css/Login.module.css';
import { Footer } from '../components/Footer';
import logo from '../assets/logo.png';
import pictureMedsos from '../assets/picturemedsos.webp';
import { useState } from 'react';

export function LogIn() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () => {
        if (!email || !password) {
            alert('Email atau password tidak boleh kosong')
            return
        }
        if (!email.includes('@') || !email.includes('.com')) {
        alert('Format email tidak valid! nama@gmail.com');
        return;
    }
        login({nama: email, email: email});
        navigate('/home')
    }
    const NotifError = () => {
        alert('Maaf, ada kendala bagian ini')
    }
    return (
        <>
        <div className={style.bodyLogin}>
            <div className={style.boxLogin}>
                <div className={style.box}>
                    <div className={style.boxLogo}>
                        <img src={logo} alt="" className={style.logo}/>
                    </div>
                    <div className={style.boxContent}>
                        <div className={style.boxText}>
                            <h1>Jelajahi hal-hal yang anda suka dan</h1>
                            <h2>melihat momen orang lain</h2>
                        </div>
                        <div className={style.pictureMedsos}>
                            <img src={pictureMedsos} alt="" className={style.logoMedsos}/>
                        </div>
                    </div>
                </div>
                <div className={style.mainContent}>
                    <h2>Login Facebook</h2>
                    <input type="text" placeholder="Email Atau nomor ponsel" value={email} onChange={(e) => setEmail(e.target.value)} className={style.boxInput}/>
                    <input type="text" placeholder="Kata sandi" value={password} onChange={(e) => setPassword(e.target.value)} className={style.boxInput}/>
                    <button className={style.boxButtonLogin} onClick={handleLogin}>Login</button>
                    <button className={style.boxButtonLupaSandi} onClick={NotifError}>Lupa kata sandi</button>
                    <button className={style.boxButtonBuatAkun} onClick={() => navigate('/register')}>Buat akun baru</button>
                    <div>
                        <h4>Meta</h4>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
        </>
    )
}