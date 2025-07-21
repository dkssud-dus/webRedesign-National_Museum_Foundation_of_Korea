/* ========================
  Import
======================== */
import React, { useState } from 'react'

// SCSS
import './CategoryFilterGroup.scss'

/* ========================
  Category Filter Group
======================== */
const CategoryFilterGroup = ({ categories, onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleButtonClick = (category) => {
    setActiveCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  /* ========================
  Return
  ======================== */
  return (
    <div className='CategoryFilterGroup'>
      {categories.map((category) => (
        <button
          key={category}
          className={`CategoryFilterGroup__button ${activeCategory === category ? 'CategoryFilterGroup__button--active' : ''}`}
          onClick = {() => handleButtonClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilterGroup
