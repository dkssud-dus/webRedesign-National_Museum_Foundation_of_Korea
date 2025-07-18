/* ========================
  Import
======================== */
import React from 'react'

// React-router-dom
import { Link } from 'react-router-dom'

// SCSS
import './EventCard.scss'

/* ========================
  Event Card
======================== */
const EventCard = ({ item }) => {

  /* ========================
  Return
  ======================== */
  return (
    <Link to="/events" className='EventCard'>
      <img src={item.Poster} alt={item.Title} />
    </Link>
  )
}

export default EventCard