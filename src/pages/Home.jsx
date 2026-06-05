import { useEffect } from "react";
import { useState } from "react";
import { UserCard } from '../components/UserCard';
import style from '../css/Home.module.css';
import { Navbar } from '../components/Navbar'
import{ Footer } from '../components/Footer'
import { useAuth } from '../context/AuthContext';

export function Home(params) {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { followedUsers, handleFollow } = useAuth();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setUsers(data);
            setFilteredUsers(data)
            setLoading(false);
        })
    },[])
    const handleSearch = (keyword) => {
        const hasil = users.filter(user =>
            user.name.toLowerCase().includes(keyword.toLowerCase()) ||
            user.username.toLowerCase().includes(keyword.toLowerCase()) ||
            user.email.toLowerCase().includes(keyword.toLowerCase())
        )
        setFilteredUsers(hasil)
    }
    
    return (
        <>
        <div className={style.boxBody}>
            <div><Navbar onSearch={handleSearch}/></div>
            <div className={style.boxMainContent}>
                <div className={style.userStats}>
                    <p>User Terdaftar</p>
                    <span>{filteredUsers.length}</span>
                </div>
                <div className={style.containerCard}>
                    {filteredUsers.map(user => (
                    <UserCard 
                        key={user.id} 
                        user={user} 
                        isFollowed={followedUsers.some(u => u.id === user.id)}
                        onFollow={handleFollow} 
                    />
                    ))}
                </div>
            </div>
            <div><Footer/></div>
        </div>
        </>
    )
}