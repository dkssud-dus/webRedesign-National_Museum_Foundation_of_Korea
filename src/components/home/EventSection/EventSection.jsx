/* ========================
  Import
======================== */
import React, { useState, useEffect } from 'react'

// Data
import { event } from '../../../data/event'

// Components
import SectionTitle from '../SectionTitle/SectionTitle'
import CustomLinkButton from '../../common/CustomLinkButton/CustomLinkButton'
import Badge from '../../common/Badge/Badge'
import EventSlide from '../EventSlide/EventSlide'

// SCSS
import './EventSection.scss'

/* ========================
  Event Section
======================== */
const EventSection = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  const handleActiveEventSlideChange = (eventData) => {
    setActiveEvent(eventData);
  };

  useEffect(() => {
    if (event && event.length > 0) {
      setActiveEvent(event[0]);
    }
  }, []);

  /* ========================
  Return
  ======================== */
  return (
    <section className="Event">
      <div className="Event__background">
        <div className="Event__container">
          <div className="Event__leftBox">
            <SectionTitle
              mainTitle="이벤트·소식"
              subTitle="재단의 오늘, 여러분과 함께하는 내일로."
            />
            {activeEvent && (
              <div className='Event__active-info'>
                <div className="Event__active-titleBox">
                  <strong className='Event__active-title'>
                    {activeEvent.Title}
                  </strong>
                  <Badge>이벤트</Badge>
                </div>
                <p className='Event__active-desc'>
                  {activeEvent.Desc}
                </p>
              </div>
            )}
            <CustomLinkButton to="/events">더보기</CustomLinkButton>
          </div>
          <div className="Event__rightBox">
            <EventSlide events={event} onActiveSlideChange={handleActiveEventSlideChange}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventSection
