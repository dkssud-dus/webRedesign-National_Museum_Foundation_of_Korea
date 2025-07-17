/* ========================
  Import
======================== */
import React from 'react'

// Components
import Badge from '../Badge/Badge'

// SCSS
import './ExhibitionPerformanceCard.scss'

/* ========================
  Exhibition Performance Card
======================== */
const ExhibitionPerformanceCard = ({ item }) => {

  /* ========================
  Return
  ======================== */
  return (
    <div className='ExhibitionPerformanceCard'>
      <div className="ExhibitionPerformanceCard__imageBox">
        <img src={item.Poster} alt={item.Name} className="ExhibitionPerformanceCard__image"/>
      </div>
      <div className="ExhibitionPerformanceCard__titleBox">
        <strong className="ExhibitionPerformanceCard__title">
          {item.Name}
        </strong>
        <Badge>{item.Tag}</Badge>
      </div>
      <div className="ExhibitionPerformanceCard__dateBox">
        <span className="ExhibitionPerformanceCard__date">
          {item.StartDate} - {item.EndDate}
        </span>
      </div>
    </div>
  )
}

export default ExhibitionPerformanceCard