/* ========================
  Import
======================== */
import React, { useState, useEffect } from 'react'

// Data
import { exhibitionPerformance } from '../../../data/exhibitionPerformance'

// Components
import SectionTitle from '../SectionTitle/SectionTitle'
import CustomLinkButton from '../../common/CustomLinkButton/CustomLinkButton'
import CategoryFilterGroup from '../../common/FilteringButton/CategoryFilterGroup'
import ExhibitionPerformanceSlide from '../../common/ExhibitionPerformanceSlide/ExhibitionPerformanceSlide'

// SCSS
import './ExhibitionPerformanceSection.scss'

// Date Data
const museumOperatingHours = {
  defaultOpen: true,
  specialClosures: ['2025-01-01', '2026-01-01', '2027-01-01'],
};

/* ========================
  Exhibition Performance Section
======================== */
const ExhibitionPerformanceSection = () => {
  const [currentFilterCategory, setCurrentFilterCategory] = useState('전체');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [calendarDates, setCalendarDates] = useState([]);

  const [isMuseumOpenToday, setIsMuseumOpenToday] = useState(true);

  // Date
  const isEventCurrent = (event) => {
    const today = new Date();
    const startDate = new Date (event.StartDate);
    const endDate = new Date (event.EndDate);

    today.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    return today >= startDate && today <= endDate;
  }

  // Date → isOpen?
  const isSameDay = (date1, date2) => {
    return date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();
  };

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Date → isOpen?
    let openStatus = museumOperatingHours.defaultOpen;
    if (museumOperatingHours.specialClosures && museumOperatingHours.specialClosures.some(dateStr => isSameDay(new Date(dateStr), today))) {
      openStatus = false;
    }
    
    setIsMuseumOpenToday(openStatus);

    // Sort
    const sortedExhibitionPerformance = [...exhibitionPerformance].sort((a, b) => {
      const dateA = new Date(a.StartDate);
      const dateB = new Date(b.StartDate);
      return dateB.getTime() - dateA.getTime();
    });

    // Filtering
    const currentEvent = sortedExhibitionPerformance.filter(isEventCurrent);
    
    let newFilteredEvent = [];
    if (currentFilterCategory === '전체') {
      newFilteredEvent = currentEvent;
    } else {
      newFilteredEvent = currentEvent.filter(
        (item) => item.Category === currentFilterCategory
      );
    }
    setFilteredEvents(newFilteredEvent);

    // Calendar
    const dates = [];
    const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        date: date.getDate(),
        day: weekdays[date.getDay()],
        isToday: isSameDay(today, date)
      });
    }
    setCalendarDates(dates);

  }, [currentFilterCategory]);

  const handleCategoryFilterChange = (selectedCategory) => {
    setCurrentFilterCategory(selectedCategory);
  };

  /* ========================
  Return
  ======================== */
  return (
    <section className='ExhibitionPerformance'>
      <div className="ExhibitionPerformance__container">
        <div className="ExhibitionPerformance__leftBox">
          <CategoryFilterGroup
            categories={['전체', '공연', '전시']}
            onCategoryChange={handleCategoryFilterChange}
          />
          <SectionTitle
            mainTitle="공연·전시"
            subTitle="전통과 현재가 만나는 예술의 장, 지금 함께 하세요."
          />
          <CustomLinkButton to="/exhibitionPerformance">더보기</CustomLinkButton>
        </div>
        <div className="ExhibitionPerformance__rightBox">
          <ExhibitionPerformanceSlide exhibitionPerformance={filteredEvents}/>
        </div>
      </div>
      <div className="ExhibitionPerformance__DateLine">
        <div className="ExhibitionPerformance__container">
          <div className="ExhibitionPerformance__status">
            <span className="ExhibitionPerformance__current-date">
              {new Date().getDate()}
            </span>
            <strong className={`ExhibitionPerformance__status-text ${isMuseumOpenToday ? 'is-open' : 'is-closed'}`}>
              {isMuseumOpenToday ? '오늘은  개관일' : '오늘은 휴관일'}
            </strong>
          </div>
          <div className="ExhibitionPerformance__calendar-strip">
            {calendarDates.map((calDate, index) => (
              <div
                key={index}
                className={`ExhibitionPerformance__calendar-day ${calDate.isToday ? 'ExhibitionPerformance__calendar-day--today' : ''}`}
              >
                <span className="ExhibitionPerformance__calendar-date">{calDate.date}</span>
                <span className="ExhibitionPerformance__calendar-weekday">{calDate.day}</span>
              </div>
            ))}
            <CustomLinkButton to="/schedule">연간 일정 보기</CustomLinkButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExhibitionPerformanceSection
