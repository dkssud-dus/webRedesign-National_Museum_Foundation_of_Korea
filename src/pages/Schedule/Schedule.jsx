/* ========================
  Import
======================== */
import React, { useState, useEffect } from 'react'

// Data
import { exhibitionPerformance } from '../../data/exhibitionPerformance'

// Components
import Subvisual from '../../components/common/Subvisual/Subvisual'
import SubContent from '../../components/common/SubContent/SubContent'
import Calendar from '../../components/schedule/CalendarSection/CalendarSection'
import ScheduleList from '../../components/schedule/ScheduleList/ScheduleList'

// SCSS
import './Schedule.scss'

/* ========================
  Schedule
======================== */
const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredSchedule, setFilteredSchedule] = useState([]);
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const currentSelectedDate = new Date(selectedDate);
    currentSelectedDate.setHours(0, 0, 0, 0);

    const newFilteredSchedule = exhibitionPerformance.filter(item => {
      const startDate = new Date(item.StartDate);
      const endDate = new Date(item.EndDate);
      startDate.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);

      return currentSelectedDate >= startDate && currentSelectedDate <= endDate;
    });

    const sortedSchedule = [...newFilteredSchedule].sort((a, b) => {
      const dateA = new Date(a.StartDate);
      const dateB = new Date(b.StartDate);
      return dateB.getTime() - dateA.getTime();
    });

    setFilteredSchedule(sortedSchedule);

  }, [selectedDate, exhibitionPerformance]);

  /* ========================
    Return
  ======================== */
  return (
    <div className='Schedule'>

      {/* Components */}
      <Subvisual to={"/schedule"} depth1={"소식"} depth2={"연간 일정"} />
      <SubContent title={"연간 일정"} />

      {/* Content */}
      <section className="Schedule__container">
        <Calendar onDateSelect={handleDateSelect} />
        <ScheduleList scheduleData={filteredSchedule} selectedDate={selectedDate} />
      </section>

    </div>
    
  )
}

export default Schedule