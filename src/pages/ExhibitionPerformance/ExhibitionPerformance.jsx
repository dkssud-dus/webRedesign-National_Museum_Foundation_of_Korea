/* ========================
  Import
======================== */
import React, { useState, useEffect } from 'react'

// Data
import { exhibitionPerformance } from '../../data/exhibitionPerformance'

// Components
import Subvisual from '../../components/common/Subvisual/Subvisual'
import SubContent from '../../components/common/SubContent/SubContent'
import SearchBox from '../../components/common/SearchBox/SearchBox'
import ExhibitionPerformanceSection from '../../components/exhibitionPerformance/ExhibitionPerformanceSection/ExhibitionPerformanceSection'

// SCSS
import './ExhibitioniPerformance.scss'

/* ========================
  Exhibition Performance Section
======================== */
const ExhibitionPerformance = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDateFilter, setActiveDateFilter] = useState('ongoing');
  const [filteredResults, setFilteredResults] = useState([]);

  const isEventOngoing = (event, today) => {
    const startDate = new Date(event.StartDate);
    const endDate = new Date(event.EndDate);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);
    return today >= startDate && today <= endDate;
  };

  const isEventUpcoming = (event, today) => {
    const startDate = new Date(event.StartDate);
    startDate.setHours(0, 0, 0, 0);
    return startDate > today;
  };

  const isEventFinished = (event, today) => {
    const endDate = new Date(event.EndDate);
    endDate.setHours(0, 0, 0, 0);
    return endDate < today;
  };

  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    let dateFilteredData = [];
    if (activeDateFilter === 'ongoing') {
      dateFilteredData = exhibitionPerformance.filter(event => isEventOngoing(event, today));
    } else if (activeDateFilter === 'upcoming') {
      dateFilteredData = exhibitionPerformance.filter(event => isEventUpcoming(event, today));
    } else if (activeDateFilter === 'finished') {
      dateFilteredData = exhibitionPerformance.filter(event => isEventFinished(event, today));
    } else {
      dateFilteredData = exhibitionPerformance;
    }

    let textFilteredData = dateFilteredData.filter(item => {
      if (!searchTerm) return true;
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        (item.Title && item.Title.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (item.Name && item.Name.toLowerCase().includes(lowerCaseSearchTerm))
      );
    });

    const finalSortedData = [...textFilteredData].sort((a, b) => {
      const dateA = new Date(a.StartDate);
      const dateB = new Date(b.StartDate);
      return dateB.getTime() - dateA.getTime();
    });

    setFilteredResults(finalSortedData)

  }, [searchTerm, activeDateFilter, exhibitionPerformance]);

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const handleDateFilterSelect = (filterType) => {
    setActiveDateFilter(filterType);
  };


  /* ========================
    Return
  ======================== */
  return (
    <div className='ExhibitionPerformancePage'>

      {/* Components */}
      <Subvisual to={"/exhibitionPerformance"} depth1={"공연·전시"} depth2={"공연·전시"} />
      <SubContent title={"공연·전시"} />

      {/* Content */}
      <div className="ExhibitionPerformance__container">
        <SearchBox
          placeholder={"궁금하신 공연이나 전시를 검색해 보세요!"}
          onSearch={handleSearchTermChange}
          onDateFilterChange={handleDateFilterSelect}
          currentActiveDateFilter={activeDateFilter}
        /> 
        <ExhibitionPerformanceSection exhibitionPerformanceData={filteredResults} />
      </div>

    </div>
  )
}

export default ExhibitionPerformance