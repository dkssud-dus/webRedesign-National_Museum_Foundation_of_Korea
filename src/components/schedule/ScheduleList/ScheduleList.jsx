/* ========================
  Import
======================== */
import React from 'react'

// Components
import Badge from '../../common/Badge/Badge'

// React-router-dom
import { Link } from 'react-router-dom'

// SCSS
import './ScheduleList.scss'

/* ========================
  Schedule List
======================== */
const ScheduleList = ({ scheduleData, selectedDate }) => {
  const formattedDate = selectedDate ?
    `${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월 ${selectedDate.getDate()}일` :
    '날짜를 선택해주세요';

  /* ========================
    Return
  ======================== */
  return (
    <div className='ScheduleList'>
      <div className="ScheduleList__titleBox">
        <strong className="ScheduleList__title">{formattedDate}</strong>
      </div>
      <div className="ScheduleList__itemList">
        {scheduleData && scheduleData.length > 0 ? (
          scheduleData.map((item) =>
            <Link to="/exhibitionPerformance" className='ScheduleList__itemList-item' key={item.Id}>
              <Badge>{item.Category}</Badge>
              <strong className="ScheduleList__itemList-title">
                {item.Name}
              </strong>
              <span className="ScheduleList__itemList-date">
                {item.StartDate.slice(5, 10)} - {item.EndDate.slice(5, 10)}
              </span>
            </Link>
          )
        ) : (
          <div className="ScheduleList__no-data">
            <p>{formattedDate}에는 공연 및 전시가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ScheduleList
