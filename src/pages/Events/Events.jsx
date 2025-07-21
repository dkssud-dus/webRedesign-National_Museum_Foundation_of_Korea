/* ========================
  Import
======================== */
import React, { useState, useEffect } from 'react'

// Data
import { event } from '../../data/event'

// Components
import Subvisual from '../../components/common/Subvisual/Subvisual'
import SubContent from '../../components/common/SubContent/SubContent'
import SearchBox from '../../components/common/SearchBox/SearchBox'
import CategoryFilterGroup from '../../components/common/FilteringButton/CategoryFilterGroup'
import EventsCard from '../../components/events/EventsCard/EventsCard'

// SCSS
import './Events.scss'

/* ========================
  Events
======================== */
const Events = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeDateFilter, setActiveDateFilter] = useState('all');
    const [currentCategoryFilter, setCurrentCategoryFilter] = useState('전체');
    const [filteredResults, setFilteredResults] = useState([]);
  
    const isEventOngoing = (eventItem, today) => {
    const eventDate = new Date(eventItem.Date);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate.getTime() === today.getTime();
  };

  const isEventUpcoming = (eventItem, today) => {
    const eventDate = new Date(eventItem.Date);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate > today;
  };

  const isEventFinished = (eventItem, today) => {
    const eventDate = new Date(eventItem.Date);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate < today;
  };
  
    useEffect(() => {
      const today = new Date();
      today.setHours(0, 0, 0, 0); 
  
      let dateFilteredData = [];
      if (activeDateFilter === 'ongoing') {
        dateFilteredData = event.filter(item => isEventOngoing(item, today));
      } else if (activeDateFilter === 'upcoming') {
        dateFilteredData = event.filter(item => isEventUpcoming(item, today));
      } else if (activeDateFilter === 'finished') {
        dateFilteredData = event.filter(item => isEventFinished(item, today));
      } else {
        dateFilteredData = event; // 'all'
      }
  
      let textFilteredData = dateFilteredData.filter(item => {
      if (!searchTerm) return true;
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        (item.Title && item.Title.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (item.Name && item.Name.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (item.Desc && item.Desc.toLowerCase().includes(lowerCaseSearchTerm))
      );
    });

    let categoryFilteredData = [];
    if (currentCategoryFilter === '전체') {
      categoryFilteredData = textFilteredData;
    } else {
      categoryFilteredData = textFilteredData.filter(
        (item) => item.Tag === currentCategoryFilter || item.Category === currentCategoryFilter
      );
    }

    const finalSortedData = [...categoryFilteredData].sort((a, b) => {
      const dateA = new Date(a.Date); 
      const dateB = new Date(b.Date); 
      return dateB.getTime() - dateA.getTime();
    });
  
    setFilteredResults(finalSortedData)
  
    }, [searchTerm, activeDateFilter, currentCategoryFilter, event]);
  
    const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  const handleDateFilterSelect = (filterType) => {
    setActiveDateFilter(filterType);
  };

  const handleCategoryFilterChange = (selectedCategory) => {
    setCurrentCategoryFilter(selectedCategory);
  };

  /* ========================
    Return
  ======================== */
  return (
    <div className='Events'>
      
    {/* Components */}
      <Subvisual to={"/events"} depth1={"소식"} depth2={"이벤트"} />
      <SubContent title={"이벤트"} />

      {/* Content */}
      <div className="Events__container">
        <div className="Events__searchBox">
          <SearchBox
            placeholder={"궁금하신 이벤트를 검색해 보세요!"}
            onSearch={handleSearchTermChange}
            onDateFilterChange={handleDateFilterSelect}
            currentActiveDateFilter={activeDateFilter}
            showDateFilters={false}
          /> 
          <div className="Events__filtering">
            전체
          </div>
        </div>
        <section className="Events__content">
          <CategoryFilterGroup
            categories={['전체', '문화재단', '일반', '공지사항', '공연', '문화상품', '전시 및 행사', '식음료', '기타']}
            onCategoryChange={handleCategoryFilterChange}
          />
          <div className='Events__list'>
            {filteredResults && filteredResults.length > 0 ? (
              filteredResults.map((item) =>
                <EventsCard item={item} key={item.Id}/>
              )
            ) : (
              <div className="Events__no-results">
                <p>해당하는 이벤트가 없습니다.</p>
              </div>
            )}
          </div>
        </section>
      </div>

    </div>
  )
}

export default Events
