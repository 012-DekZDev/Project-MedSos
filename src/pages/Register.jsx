import { } from "react";
import { useNavigate } from 'react-router-dom';
import style from '../css/Login.module.css';
import {Footer} from '../components/Footer';
import logo from '../assets/logo.png';
import pictureMedsos from '../assets/picturemedsos.webp';

export function Register() {
    const navigate = useNavigate();
    const tahunSekarang = new Date().getFullYear();
    const daftarTahun = [];
    for (let i = tahunSekarang; i >= 1900; i--) {
        daftarTahun.push(i)
    }
    const daftarBulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    const daftarHari = []
    for (let i = 1; i <= 31; i++) {
        daftarHari.push(i)
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
                    <h2>Register Facebook</h2>
                    <label>Email atau nomor ponsel</label>
                    <input type="text" placeholder="Email Atau nomor ponsel" className={style.boxInput}/>
                    <label>Kata sandi</label>
                    <input type="text" placeholder="Kata sandi" className={style.boxInput}/>
                    <label>Nama</label>
                    <input type="text" placeholder="Nama panjang" className={style.boxInput}/>
                    <label>Nama panggilan</label>
                    <input type="text" placeholder="Nama panggilan" className={style.boxInput}/>
                    <label>Hari ulang tahun</label>
                    <div className={style.date}>
                        <select name="" id="">
                            <option value="" disabled selected>Bulan</option>
                            {daftarBulan.map(bulan => (
                                <option>{bulan}</option>
                            ))}
                        </select>
                        <select name="" id="">
                            <option value="" disabled selected>Hari</option>
                            {daftarHari.map(hari => (
                                <option>{hari}</option>
                            ))}
                        </select>
                        <select name="" id="">
                            <option value="" disabled selected>Tahun</option>
                            {daftarTahun.map(tahun => (
                                <option>Tahun {tahun}</option>
                            ))}
                        </select>
                    </div>
                    <button className={style.boxButtonLogin} onClick={NotifError}>Kirim</button>
                    <button className={style.boxButtonBuatAkun} onClick={() => navigate('/LogIn')}>Saya sudah memiliki akun</button>
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