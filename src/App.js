/* ========================
  Import
======================== */
import React, { useState } from 'react';

// component
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import LoginModal from './components/common/LoginModal/LoginModal';
import SitemapModal from './components/common/SitemapModal/SitemapModal';

// pages
import Home from './pages/Home/Home';
import Directions from './pages/Directions/Directions';
import ExhibitionPerformance from './pages/ExhibitionPerformance/ExhibitionPerformance';
import Schedule from './pages/Schedule/Schedule';
import Events from './pages/Events/Events';
import Notices from './pages/Notices/Notices';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage ';

// react-router-dom
import { Routes, Route } from 'react-router-dom'

// SCSS
import './styles/style.scss';

/* ========================
  App
======================== */
function App() {
  // Modal control
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSitemapModalOpen, setIsSitemapModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openSitemapModal = () => setIsSitemapModalOpen(true);
  const closeSitemapModal = () => setIsSitemapModalOpen(false);

  /* ========================
  Return
  ======================== */
  return (
    <div className='App'>
      <Header 
        openLoginModal={openLoginModal}
        openSitemapModal={openSitemapModal}
      />

      {/* content */}
      <main className='App__content'>
        <Routes>

          <Route path='/' element={<Home />}></Route>

          <Route path='/directions' element={<Directions />}></Route>

          <Route path='/exhibitionPerformance' element={<ExhibitionPerformance />}></Route>

          <Route path='/schedule' element={<Schedule />}></Route>

          <Route path='/events' element={<Events />}></Route>

          <Route path='/notices' element={<Notices />}></Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </main>

      {/* Modal Rendering */}
      {isLoginModalOpen && <LoginModal onClose={closeLoginModal}/>}
      {isSitemapModalOpen && <SitemapModal onClose={closeSitemapModal}/>}

      <Footer />
    </div>
  );
}

export default App;
