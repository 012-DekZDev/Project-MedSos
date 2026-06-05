import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { LogIn } from './pages/LogIn';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { Friend } from './pages/Friend';
import { Profile } from './pages/Profile';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<LogIn/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/friend" element={<Friend/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App

