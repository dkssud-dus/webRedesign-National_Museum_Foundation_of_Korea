/* ========================
  Import
======================== */
import React from 'react'

// SCSS
import './LocationSection.scss'

/* ========================
  Location Section
======================== */
const LocationSection = () => {
  const LocationData = [
    {
      Id: "1",
      Name: "국립중앙박물관",
      Desc: "거울못 지나 직진",
    },
    {
      Id: "2",
      Name: "국립박물관문화재단",
      Desc: "전시관 앞마당 (열린마당)에서 전면 하향계단 이용 후 왼편 교육관 2층",
    },
    {
      Id: "3",
      Name: "극장 용",
      Desc: "박물관 앞마당 (열린마당)에서 전면 상향계단 이용 후 왼편 도서관 방향 계단 이용",
    },
  ]

  /* ========================
    Return
  ======================== */
  return (
    <section className='Location'>
      {LocationData.map((item) => 
      <div className='Location__card' key={item.Id}>
        <strong className="Location__name">
          {item.Name}
        </strong>
        <p className="Location__desc">
          {item.Desc}
        </p>
      </div>
      )}
    </section>
  )
}

export default LocationSection
