import { useAuth } from '../context/AuthContext';
import { UserCard } from '../components/UserCard';
import style from '../css/Friend.module.css';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export function Friend() {
    const navigate = useNavigate();
    const { followedUsers, handleFollow } = useAuth();
    return (
        <div className={style.boxBody}>
            <div>
                <Navbar/>
            </div>
            <div className={style.boxMainContent}>
                <div  className={style.userStats}>
                    <p>Follow</p>
                    <span>{followedUsers.length}</span>
                </div>
                {followedUsers.length === 0?(<p>Kamu belum mengikuti siapapun</p>) : (
                    <div className={style.containerCard}>
                    {followedUsers.map(user => (
                        <UserCard
                        key={user.id}
                        user={user}
                        isFollowed={true}
                        onFollow={handleFollow}
                        />
                    ))}
                    </div>
                )}
                <button onClick={() => navigate('/home')} className={style.boxBtnBackHome}>Back to home</button>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}