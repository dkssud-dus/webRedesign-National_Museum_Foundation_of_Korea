/* ========================
  Import
======================== */
import React from 'react'

// Components
import Badge from '../../common/Badge/Badge'

// React-router-dom
import { Link } from 'react-router-dom'

// SCSS
import './EventsCard.scss'

/* ========================
  Events Card
======================== */
const EventsCard = ({ item }) => {

  /* ========================
    Return
  ======================== */
  return (
    <Link className='EventsCard' to="*">
      <div className="EventsCard__imageBox">
        <img src={item.Poster} alt={item.Title} />
      </div>
      <div className="EventsCard__textBox">
        <Badge>{item.Tag}</Badge>
        <strong className='EventsCard__title'>{item.Title}</strong>
      </div>
      <span className="EventsCard__date">
        {item.Date}
      </span>
    </Link>
  )
}

export default EventsCard
