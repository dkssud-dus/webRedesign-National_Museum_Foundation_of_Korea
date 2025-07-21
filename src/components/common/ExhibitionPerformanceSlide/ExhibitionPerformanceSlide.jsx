/* ========================
  Import
======================== */
import React, { useEffect, useRef } from 'react'

// Components
import ExhibitionPerformanceCard from '../ExhibitionPerformanceCard/ExhibitionPerformanceCard';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// SCSS
import './ExhibitionPerformanceSlide.scss'

/* ========================
  Exhibition Performance Section
======================== */
const ExhibitionPerformanceSlide = ({ exhibitionPerformance }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
      swiperRef.current.swiper.slideTo(0, 0);
    }
  }, [exhibitionPerformance]);

  /* ========================
  Return
  ======================== */
  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={30}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {exhibitionPerformance.length > 0 ? (
        exhibitionPerformance.map((item) => (
          <SwiperSlide key={item.Id}>
            <ExhibitionPerformanceCard item={item} />
          </SwiperSlide>
        ))
      ) : (
        <div className="ExhibitionPerformanceSlide__no-data">
          <p>전시 및 공연 정보가 없습니다.</p>
        </div>
      )}
    </Swiper>
  )
}

export default ExhibitionPerformanceSlide