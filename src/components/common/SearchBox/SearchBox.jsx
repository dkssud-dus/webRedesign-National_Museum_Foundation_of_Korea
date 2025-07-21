/* ========================
  Import
======================== */
import React, { useState } from 'react';

// Bootstrap Icons
import { BsSearch, BsChevronCompactDown } from 'react-icons/bs';

// SCSS
import './SearchBox.scss'

/* ========================
  Search Box
======================== */
const SearchBox = ({ placeholder, onSearch, onDateFilterChange, currentActiveDateFilter, showDateFilters = true }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  const handleDateFilterClick = (filterType) => {
    if (onDateFilterChange) {
      onDateFilterChange(filterType);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <section className="SearchBox">
      <div className="SearchBox__inputBox">
        <label className="SearchBox__input-group">
          <input
            type="text"
            className="SearchBox__input"
            placeholder={placeholder}
            value={searchTerm}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </label>
        <button className="SearchBox__search-button" onClick={handleSearchClick}>
          <BsSearch />
        </button>
      </div>
      {showDateFilters && (
        <div className="SearchBox__dateFilter">
          <button
            className={`SearchBox__dateFilter-button ${currentActiveDateFilter === 'ongoing' ? 'SearchBox__dateFilter-button--active' : ''}`}
            onClick={() => handleDateFilterClick('ongoing')}
          >
            진행 중
          </button>
          <button
            className={`SearchBox__dateFilter-button ${currentActiveDateFilter === 'upcoming' ? 'SearchBox__dateFilter-button--active' : ''}`}
            onClick={() => handleDateFilterClick('upcoming')}
          >
            예정
          </button>
          <button
            className={`SearchBox__dateFilter-button ${currentActiveDateFilter === 'finished' ? 'SearchBox__dateFilter-button--active' : ''}`}
            onClick={() => handleDateFilterClick('finished')}
          >
            종료
          </button>
        </div>
      )}
    </section>
  );
};

export default SearchBox;