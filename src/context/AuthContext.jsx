import {createContext, useContext, useState} from 'react'

export const AuthContext = createContext();

export function AuthProvider({children}){
     // ← ambil dari localStorage kalau ada
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('user');
        return saved ? JSON.parse(saved) : null;
    });

    const [followedUsers, setFollowedUsers] = useState(() => {
        const saved = localStorage.getItem('followedUsers');
        return saved ? JSON.parse(saved) : [];
    });

    const login = (dataUser) => {
        setUser(dataUser);
        localStorage.setItem('user', JSON.stringify(dataUser)); // ← simpan
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');          // ← hapus saat logout
        localStorage.removeItem('followedUsers'); // ← hapus saat logout
    };

    const handleFollow = (targetUser) => {
        const sudahFollow = followedUsers.find(u => u.id === targetUser.id);
        let newFollowed;
        if (sudahFollow) {
        newFollowed = followedUsers.filter(u => u.id !== targetUser.id);
        } else {
        newFollowed = [...followedUsers, targetUser];
        }
        setFollowedUsers(newFollowed);
        localStorage.setItem('followedUsers', JSON.stringify(newFollowed)); // ← simpan
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, followedUsers, handleFollow }}>
        {children}
        </AuthContext.Provider>
    );
    }

    export function useAuth() {
    return useContext(AuthContext);
}