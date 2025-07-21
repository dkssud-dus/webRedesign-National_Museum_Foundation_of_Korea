/* ========================
  Import
======================== */
import React from 'react'

// Image
import background from '../../../assets/images/snsbg.jpg'
import facebook from '../../../assets/images/snsicon08.png'
import instagram from '../../../assets/images/snsicon07.png'
import blog from '../../../assets/images/snsicon05.png'
import youtube from '../../../assets/images/snsicon06.png'

// Data
import { social } from '../../../data/social'

// Components
import SectionTitle from '../SectionTitle/SectionTitle'
import SocialSlide from '../SocialSlide/SocialSlide'

// React-router-dom
import { Link } from 'react-router-dom'

// SCSS
import './SocialSection.scss'

/* ========================
  Social Section
======================== */
const SocialSection = () => {

  return (
  /* ========================
  Return
  ======================== */
    <section className="Social">
      <div className="Social__background">
        <img src={background} alt="배경" />
      </div>
      <div className="Social__container">
        <div className="Social__leftBox">
          <SectionTitle
            mainTitle="우리들의 이야기"
            subTitle="전통을 품은 오늘의 순간들, 함께 나누는 이야기."
          />
          <div className="Social__link-list">
            {/* Facebook */}
            <Link to="*" target="_blank" className="Social__link-item">
              <div className="Social__link-icon">
                <img src={facebook} alt="페이스북" />
              </div>
              <div className="Social__link-name">
                <strong>페이스북</strong>
              </div>
            </Link>
            {/* Instagram */}
            <Link to="*" target="_blank" className="Social__link-item">
              <div className="Social__link-icon">
                <img src={instagram} alt="인스타그램" />
              </div>
              <div className="Social__link-name">
                <strong>인스타그램</strong>
              </div>
            </Link>
            {/* Blog */}
            <Link to="*" target="_blank" className="Social__link-item">
              <div className="Social__link-icon">
                <img src={blog} alt="네이버 블로그" />
              </div>
              <div className="Social__link-name">
                <strong>네이버 블로그</strong>
              </div>
            </Link>
            {/* Youtube */}
            <Link to="*" target="_blank" className="Social__link-item">
              <div className="Social__link-icon">
                <img src={youtube} alt="유튜브" />
              </div>
              <div className="Social__link-name">
                <strong>유튜브</strong>
              </div>
            </Link>
          </div>
        </div>
        <div className="Social__rightBox">
          <SocialSlide social={social}/>
        </div>
      </div>
    </section>
  )
}

export default SocialSection