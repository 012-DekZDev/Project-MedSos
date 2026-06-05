import style from '../css/UserCard.module.css'
import { useState } from 'react';
import img from '../assets/post-lorem.png'

export function UserCard({ user, isFollowed, onFollow}) {
    const [likeCount, setLikeCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const handleLike = () => {
        if (isLiked) {
        setLikeCount(likeCount - 1);
        } else {
        setLikeCount(likeCount + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
    <div className={style.boxCard}>
        
        <p className={style.name}>{user.name}</p>
        <p className={style.username}>{user.username}</p>
        <img src={img}></img>
        <br />
        <p className={style.email}>{user.email}</p>
        <button onClick={handleLike} className={style.btnLike}>
        ❤️ {isLiked ? 'Unlike' : 'Like'} {likeCount}
        </button>
        <button onClick={() => onFollow(user)} className={style.btnFollow}>
        👤 {isFollowed ? 'Following' : 'Follow'}
        </button>
    </div>
    )
}