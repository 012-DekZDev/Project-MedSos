import logo from '../assets/logo.png';
import style from '../css/Navbar.module.css';
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export function Navbar({ onSearch = () => {} }){
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const handleInput = () => {
        const keyword = inputRef.current.value;
        onSearch(keyword);
    }
    return(
        <>
        <nav className={style.navbar}>
            <div className={style.boxMedsos}>
                <img src={logo} alt="" className={style.logo}/>
                <h2>MedSosial</h2>
            </div>
            <div className={style.boxChoice}>
                <input type="text" ref={inputRef} onChange={handleInput} placeholder='Cari user (Nama/Username/Email)...'/>
                <button className={style.button} onClick={() => navigate('/friend')} >Friend</button>
                <button className={style.button} onClick={() => navigate('/profile')}>Profile</button>
            </div>
        </nav>
        </>
    )
}