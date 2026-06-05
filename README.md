# MedSosial - Website Media Sosial Sederhana

Project ini dibuat untuk memenuhi tugas Penilaian Akhir Semester (PAS) kelas XI
Program Studi Rekayasa Perangkat Lunak dan Gim.

---

## Deskripsi Project

MedSosial adalah website media sosial sederhana yang menampilkan data user dari API publik.
Pengguna dapat login, mencari user, memberikan like, follow/unfollow user, melihat daftar following, dan melihat profile.

---

## Teknologi yang Digunakan

- React JS (Vite)
- React Router DOM
- CSS Modules
- JSONPlaceholder API

---

## Struktur Project

```
src/
├── context/
│   └── AuthContext.jsx       # Menyimpan state login global
├── pages/
│   ├── Login.jsx             # Halaman login
│   ├── Register.jsx          # Halaman register
│   ├── Home.jsx              # Halaman utama
│   ├── Profile.jsx           # Halaman profile
│   └── Friend.jsx            # Halaman following
├── components/
│   ├── Navbar.jsx            # Komponen navigasi
│   ├── UserCard.jsx          # Komponen kartu user
│   └── Footer.jsx            # Komponen footer
├── css/
│   ├── Login.module.css
│   ├── Home.module.css
│   ├── Profile.module.css
│   ├── Friend.module.css
│   ├── Navbar.module.css
│   ├── UserCard.module.css
│   └── Footer.module.css
├── App.jsx
├── main.jsx
└── index.css
```

---

## Penjelasan Component

### `Navbar.jsx`
Komponen navigasi yang tampil di semua halaman setelah login.
Berisi logo, input search user, tombol Friend, dan tombol Profile.

### `UserCard.jsx`
Komponen kartu yang menampilkan informasi satu user:
nama, username, email, tombol Like, dan tombol Follow.
Digunakan di halaman Home dan Friend.

### `Footer.jsx`
Komponen footer yang tampil di semua halaman.
Berisi daftar link dan copyright.

---

## Fetch API

Data user diambil dari API publik JSONPlaceholder menggunakan `fetch` di dalam `useEffect`.

```jsx
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      setFilteredUsers(data);
      setLoading(false);
    });
}, []);
```

API ini mengembalikan 10 data user yang ditampilkan sebagai UserCard di halaman Home.

---

## Implementasi React Hook

### 1. useState
Digunakan untuk menyimpan state yang bisa berubah.

```jsx
// Menyimpan data user dari API
const [users, setUsers] = useState([]);

// Menyimpan status like per UserCard
const [isLiked, setIsLiked] = useState(false);
const [likeCount, setLikeCount] = useState(0);

// Menyimpan nilai input login
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
```

### 2. useEffect
Digunakan untuk menjalankan fetch API saat halaman Home pertama kali dibuka.

```jsx
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      setFilteredUsers(data);
      setLoading(false);
    });
}, []); // [] = hanya jalan sekali saat halaman dibuka
```

### 3. useContext
Digunakan untuk menyimpan dan mengakses state login dari komponen manapun tanpa oper props.

```jsx
// AuthContext.jsx - membuat context
export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [followedUsers, setFollowedUsers] = useState([]);

  const login = (dataUser) => {
    setUser(dataUser);
    localStorage.setItem('user', JSON.stringify(dataUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, followedUsers, handleFollow }}>
      {children}
    </AuthContext.Provider>
  );
}

// Cara menggunakan di komponen lain
const { user, login, logout } = useAuth();
```

### 4. useRef
Digunakan di Navbar untuk mengambil nilai input search tanpa re-render.

```jsx
const inputRef = useRef(null);

const handleInput = () => {
  const keyword = inputRef.current.value; // ambil nilai input
  onSearch(keyword);
};

// Di JSX
<input ref={inputRef} onChange={handleInput} />
```

---

## Fitur Website

| Fitur | Keterangan |
|---|---|
| Login | Validasi email format @.com |
| Register | Form dengan input tanggal lahir dinamis |
| Tampil User | 10 user dari API JSONPlaceholder |
| Search | Filter user berdasarkan nama, username, email |
| Like | Toggle like/unlike dengan counter |
| Follow | Toggle follow/unfollow, data tersimpan di localStorage |
| Friend | Halaman daftar user yang di-follow |
| Profile | Menampilkan email login dan jumlah following |
| Logout | Hapus session dan kembali ke halaman login |

---

## Link

- Deploy:  [Klik Link Website](https://project-med-sos.vercel.app/)
