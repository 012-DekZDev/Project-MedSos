import { useAuth } from '../context/AuthContext';
import style from '../css/Profile.module.css';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function Profile() {
    const { user, logout, followedUsers } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');  // kembali ke login
    };

    return (
        <div className={style.boxBody}>
            <Navbar />
            <div className={style.boxMain}>
                <div className={style.profileCard}>
                <div className={style.avatar}>
                    {user?.email?.charAt(0).toUpperCase()}
                </div>
                <div className={style.userInfo}>
                    <h2 className={style.emailText}>{user?.email}</h2>
                    <p className={style.subText}>Member MedSosial</p>
                </div>
                <div className={style.statsBox}>
                    <div className={style.statItem}>
                    <span className={style.statNumber}>
                        {followedUsers?.length}
                    </span>
                    <span className={style.statLabel}>Following</span>
                    </div>
                </div>
                <button onClick={handleLogout} className={style.btnLogout}>
                    Logout
                </button>
                <button onClick={() => navigate('/home')} className={style.btnLogout}>
                    Back To Home
                </button>
                </div>
            </div>
            <Footer />
        </div>
    )   
}