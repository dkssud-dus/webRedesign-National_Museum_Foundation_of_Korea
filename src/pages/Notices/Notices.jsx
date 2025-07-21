/* ========================
  Import
======================== */
import React, { useState, useEffect, useMemo  } from 'react'

// Data
import { notice } from '../../data/notice'

// Components
import Subvisual from '../../components/common/Subvisual/Subvisual'
import SubContent from '../../components/common/SubContent/SubContent'
import SearchBox from '../../components/common/SearchBox/SearchBox'
import CategoryFilterGroup from '../../components/common/FilteringButton/CategoryFilterGroup'
import NoticesList from '../../components/notices/NoticesList/NoticesList'
import Pagination from '../../components/notices/Pagination/Pagination'

// SCSS
import './Notices.scss'

/* ========================
  Notices
======================== */
const Notices = () => {
  const [searchTerm, setSearchTerm] = useState('');
      const [activeDateFilter, setActiveDateFilter] = useState('all');
      const [currentCategoryFilter, setCurrentCategoryFilter] = useState('전체');
      const [filteredResults, setFilteredResults] = useState([]);

      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 10; //
    
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
    
    const allFilteredAndSortedData = useMemo(() => {
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    let dateFilteredData = [];
    if (activeDateFilter === 'ongoing') {
      dateFilteredData = notice.filter(item => isEventOngoing(item, today));
    } else if (activeDateFilter === 'upcoming') {
      dateFilteredData = notice.filter(item => isEventUpcoming(item, today));
    } else if (activeDateFilter === 'finished') {
      dateFilteredData = notice.filter(item => isEventFinished(item, today));
    } else {
      dateFilteredData = notice;
    }

    let textFilteredData = dateFilteredData.filter(item => {
      if (!searchTerm) return true;
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        (item.Title && item.Title.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (item.Name && item.Name.toLowerCase().includes(lowerCaseSearchTerm)) 
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

    return finalSortedData; 
  }, [searchTerm, activeDateFilter, currentCategoryFilter, notice]);

  useEffect(() => {
    setFilteredResults(allFilteredAndSortedData);
    setCurrentPage(1); 
  }, [allFilteredAndSortedData]);


  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredResults.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
    <div className='Notices'>

      {/* Components */}
      <Subvisual to={"/notices"} depth1={"소식"} depth2={"공지사항"} />
      <SubContent title={"공지사항"} />

      {/* Content */}
      <div className="Notices__container">
        <div className="Notices__searchBox">
          <SearchBox
            placeholder={"궁금하신 공지사항을 검색해 보세요!"}
            onSearch={handleSearchTermChange}
            onDateFilterChange={handleDateFilterSelect}
            currentActiveDateFilter={activeDateFilter}
            showDateFilters={false}
          /> 
          <div className="Notices__filtering">
            전체
          </div>
        </div>
        <section className="Notices__content">
          <CategoryFilterGroup
            categories={['전체', '공지사항', '문화재단', '문화상품', '일반', '공연', '교육', '식음료', '전시 및 행사']}
            onCategoryChange={handleCategoryFilterChange}
          />
          <div className='Notices__list'>
            {currentItems && currentItems.length > 0 ? (
              currentItems.map((item) =>
                <NoticesList item={item} key={item.Id}/>
              )
            ) : (
              <div className="Notices__no-results">
                <p>해당하는 공지사항이 없습니다.</p>
              </div>
            )}
          </div>
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </section>
      </div>

    </div>
  )
}

export default Notices