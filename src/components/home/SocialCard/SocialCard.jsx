/* ========================
  Import
======================== */
import React from 'react'

// React-router-dom
import { Link } from 'react-router-dom'

// SCSS
import './SocialCard.scss'

/* ========================
  Social Card
======================== */
const SocialCard = ({ item }) => {
  /* ========================
  Return
  ======================== */
  return (
    <Link className='SocialCard' to={item.Url} target="_blank">
      <div className="SocialCard__imageBox">
        <img src={item.Image} alt={item.Name} className="SocialCard__image" />
      </div>
      <div className="SocialCard__textBox">
        <strong className='SocialCard__title'>
          {item.Title}
        </strong>
      </div>
    </Link>
  )
}

export default SocialCard