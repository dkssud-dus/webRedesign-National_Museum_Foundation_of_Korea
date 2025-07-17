/* ========================
  Import
======================== */
import React from 'react'

// Data
import { exhibitionPerformance } from '../../../data/exhibitionPerformance'

// Components
import SectionTitle from '../SectionTitle/SectionTitle'
import CustomLinkButton from '../../common/CustomLinkButton/CustomLinkButton'
import ExhibitionPerformanceSlide from '../../common/ExhibitionPerformanceSlide/ExhibitionPerformanceSlide'

// SCSS
import './ExhibitionPerformanceSection.scss'

/* ========================
  Exhibition Performance Section
======================== */
const ExhibitionPerformanceSection = () => {

  /* ========================
  Return
  ======================== */
  return (
    <section className='ExhibitionPerformance'>
      <div className="ExhibitionPerformance__container">
        <div className="ExhibitionPerformance__leftBox">
          <div className="ExhibitionPerformance__category-group">
            <button className="ExhibitionPerformance__category-button">전체</button>
            <button className="ExhibitionPerformance__category-button">공연</button>
            <button className="ExhibitionPerformance__category-button">전시</button>
          </div>
          <SectionTitle
            mainTitle="공연·전시"
            subTitle="전통과 현재가 만나는 예술의 장, 지금 함께 하세요."
          />
          <CustomLinkButton to="/exhibitionPerformance">더보기</CustomLinkButton>
        </div>
        <div className="ExhibitionPerformance__rightBox">
          <ExhibitionPerformanceSlide exhibitionPerformance={exhibitionPerformance}/>
        </div>
      </div>
      <div className="ExhibitionPerformance__DateLine">
        <div className="ExhibitionPerformance__container">
          
        </div>
      </div>
    </section>
  )
}

export default ExhibitionPerformanceSection
