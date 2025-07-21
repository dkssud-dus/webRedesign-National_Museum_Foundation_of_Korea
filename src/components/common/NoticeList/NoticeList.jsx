/* ========================
  Import
======================== */
import React from 'react'

// React-router-dom
import { Link } from 'react-router-dom'

// SCSS
import './NoticeList.scss'

/* ========================
  Notice List
======================== */
const NoticeList = ({ notices }) => {

  /* ========================
  Return
  ======================== */
  return (
    <div className='NoticeList'>
      {notices.map((notice) => 
      <Link to="/notices" className='NoticeList__item' key={notice.Id}>
        <strong className='NoticeList__item-title'>{notice.Title}</strong>
        <span className='NoticeList__item-date'>{notice.Date}</span>
      </Link>
      )}
    </div>
  )
}

export default NoticeList
