/* ========================
  Import
======================== */
import React from 'react'

// Components
import MainVisualSection from '../../components/home/MainVisualSection/MainVisualSection'
import ExhibitionPerformanceSection from '../../components/home/ExhibitionPerformanceSection/ExhibitionPerformanceSection'
import NoticeSection from '../../components/home/NoticeSection/NoticeSection'
import EventSection from '../../components/home/EventSection/EventSection'
import GoodsSection from '../../components/home/GoodsSection/GoodsSection'
import SocialSection from '../../components/home/SocialSection/SocialSection'

// SCSS
import './Home.scss'

/* ========================
  Home
======================== */
const Home = () => {

  /* ========================
  Return
  ======================== */
  return (
    <div className='Home'>
      <MainVisualSection />
      <ExhibitionPerformanceSection />
      <NoticeSection />
      <EventSection />
      <GoodsSection />
      <SocialSection />
    </div>
  )
}

export default Home
