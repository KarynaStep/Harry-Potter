import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoomPage from './pages/RoomPage';
import AddCard from './pages/AddCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/add_card" element={<AddCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
