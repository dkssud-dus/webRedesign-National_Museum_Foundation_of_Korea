/* ========================
  Import
======================== */
import React, { useEffect, useRef } from 'react'

// Components
import EventCard from '../EventCard/EventCard';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// SCSS
import './EventSlide.scss'

/* ========================
  Event Slide
======================== */
const EventSlide = ({ events, onActiveSlideChange  }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (events && events.length > 0 && swiperRef.current && swiperRef.current.swiper) {
      setTimeout(() => {
        onActiveSlideChange(events[swiperRef.current.swiper.realIndex]);
      }, 0);
    }
  }, [events, onActiveSlideChange]);

  /* ========================
  Return
  ======================== */
  return (
    <Swiper
      className='EventSlide'
      spaceBetween={0}
      slidesPerView={2}
      loop={true}
      onSlideChange={(swiper) => {
        const activeIndex = swiper.realIndex;
        const activeEventData = events[activeIndex];
        if (activeEventData && onActiveSlideChange) {
          onActiveSlideChange(activeEventData);
        }
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        if (events && events.length > 0 && onActiveSlideChange) {
          onActiveSlideChange(events[swiper.realIndex]);
        }
      }}
    >
      {events.slice(0, 3).map((item) => (
        <SwiperSlide key={item.Id}>
            <EventCard item={item} />
        </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default EventSlide