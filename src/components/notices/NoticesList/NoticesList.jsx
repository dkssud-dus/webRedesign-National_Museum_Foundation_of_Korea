/* ========================
  Import
======================== */
import React from 'react'

// Components
import Badge from '../../common/Badge/Badge'

// React-router-dom
import { Link } from 'react-router-dom'

// SCSS
import './NoticesList.scss'

/* ========================
  Notices List
======================== */
const NoticesList = ({ item }) => {
  /* ========================
    Return
  ======================== */
  return (
    <Link to="*" className='NoticesList'>
      <Badge>{item.Tag}</Badge>
      <strong className='NoticesList__title'>{item.Title}</strong>
      <span className='NoticesList__author'>{item.Author}</span>
      <span className='NoticesList__date'>{item.Date}</span>
    </Link>
  )
}

export default NoticesList
