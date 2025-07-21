/* ========================
  Import
======================== */
import React from 'react'

// Import
import SocialCard from '../SocialCard/SocialCard'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';

// SCSS
import './SocialSlide.scss'

/* ========================
  Social Slide
======================== */
const SocialSlide = ({ social }) => {
  /* ========================
  Return
  ======================== */
  return (
    <Swiper
      className="SocialSlide"
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={2}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {social.slice(0, 5).map((item) =>
        <SwiperSlide key={item.Id}>
          <SocialCard item={item} />
        </SwiperSlide>
      )}
    </Swiper>
  )
}

export default SocialSlide