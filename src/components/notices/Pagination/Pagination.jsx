/* ========================
  Import
======================== */
import React from 'react';

// Bootstrap Icons
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

// SCSS
import './Pagination.scss';

/* ========================
  Pagination
======================== */

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const goToPrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  /* ========================
    Return
  ======================== */
  return (
    <div className="Pagination">
      <ul className="Pagination__list">
        <li className={`Pagination__item ${currentPage === 1 ? 'Pagination__item--disabled' : ''}`}>
          <button
            className="Pagination__button"
            onClick={goToPrevPage}
            disabled={currentPage === 1} 
          >
            <BsChevronCompactLeft />
          </button>
        </li>

        {pageNumbers.map(number => (
          <li
            key={number}
            className={`Pagination__item ${currentPage === number ? 'Pagination__item--active' : ''}`}
          >
            <button
              className="Pagination__button"
              onClick={() => onPageChange(number)} 
            >
              {number}
            </button>
          </li>
        ))}

        <li className={`Pagination__item ${currentPage === totalPages ? 'Pagination__item--disabled' : ''}`}>
          <button
            className="Pagination__button"
            onClick={goToNextPage}
            disabled={currentPage === totalPages} 
          >
            <BsChevronCompactRight />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;