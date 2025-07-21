/* ========================
  Import
======================== */
import React, { useState } from 'react'

// React-calendar
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// SCSS
import './CalendarSection.scss'

/* ========================
  Calendar Section
======================== */
const CalendarSection = ({ onDateSelect }) => {
  const [value, onChange] = useState(new Date());

  const handleDateChange = (date) => {
    onChange(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const getTileClassName = ({ date, view }) => {
    if (view === 'month') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const tileDate = new Date(date);
      tileDate.setHours(0, 0, 0, 0); 

      if (tileDate < today) {
        return 'is-past-date';
      }
    }
    return null;
  };

  /* ========================
    Return
  ======================== */
  return (
    <div className='Calendar'>
      <Calendar 
        onChange={handleDateChange}
        value={value}
        calendarType='gregory'
        formatDay={(locale, date) => date.getDate()}
        showNeighboringMonth={true}
        tileClassName={getTileClassName}
      />
      <div className="Calendar__announce">
        <ul className="Calendar__announce-list">
          <li className="Calendar__announce-item">
            <div className="Calendar__announce-block Calendar__announce-block--today"></div>
            <span className="Calendar__announce-text">오늘 날짜</span>
          </li>
          <li className="Calendar__announce-item">
            <div className="Calendar__announce-block Calendar__announce-block--active"></div>
            <span className="Calendar__announce-text">선택 날짜</span>
          </li>
          <li className="Calendar__announce-item">
            <div className="Calendar__announce-block Calendar__announce-block--holiday"></div>
            <span className="Calendar__announce-text">지난 날짜</span>
          </li>
          <li className="Calendar__announce-item">
            <div className="Calendar__announce-block Calendar__announce-block--holiday"></div>
            <span className="Calendar__announce-text">휴관일</span>
          </li>
          <li className="Calendar__announce-item">
            <div className="Calendar__announce-block Calendar__announce-block--holiday"></div>
            <span className="Calendar__announce-text">공휴일</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CalendarSection
