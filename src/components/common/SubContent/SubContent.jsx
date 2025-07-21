/* ========================
  Import
======================== */
import React from 'react';

// SCSS
import './SubContent.scss'

const SubContent = ({ title }) => {
  return (
    <div className='SubContent'>
      <h2 className='SubContent__title'>{title}</h2>
    </div>
  )
}

export default SubContent
