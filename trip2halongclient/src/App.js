import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryTourPage from './pages/GalleryTourPage';
import ArtistVnPage from './pages/ArtistVnPage';
import HuyTqPage from './pages/HuyTqPage';
import PaintingPage from './pages/PaintingPage';
import DungTestPage from './pages/DungTestPage';
import LacquerArtworkPage from './pages/LacquerArtwork';
import PaintingDetailPage from './pages/PaintingDetailPage';
import { useEffect } from 'react';
import { LanguageProvider } from './LanguageContext'; // Import LanguageProvider
import AboutBody from './components/about-duc/AboutBody';

function App() {
  // useEffect(() => {
  //   // Set default language in localStorage if not already set
  //   if (!localStorage.getItem('language')) {
  //     localStorage.setItem('language', 'vi'); // Default to Vietnamese
  //   }
  // }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/hai-long" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutBody />} />
          <Route path="/gallery-tour" element={<GalleryTourPage />} />
          <Route path="/artist-vn" element={<ArtistVnPage />} />
          <Route path="/artist-vn/nguyen-van-huy" element={<HuyTqPage />} />
          <Route path="/artwork/landscape-paintings" element={<PaintingPage />} />
          <Route path="/chat-with-our-art-collector" element={<DungTestPage />} />
          <Route path="/artist-vn/artist-lacquer-artwork" element={<LacquerArtworkPage />} />
          <Route path="/paiting-detail" element={<PaintingDetailPage />} />

          {/* Uncomment or modify other routes as needed */}
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
