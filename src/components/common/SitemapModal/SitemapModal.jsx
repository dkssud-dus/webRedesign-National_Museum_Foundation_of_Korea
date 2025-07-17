/* ========================
  Import
======================== */
import React from 'react'

// react-router-dom
import { NavLink } from 'react-router-dom';

// react bootstrap icon
import { BsXLg } from 'react-icons/bs';

// SCSS
import './SitemapModal.scss'

/* ========================
  SitemapModal
  ======================== */
const SitemapModal = ({ onClose }) => {
  /* ========================
  Return
  ======================== */
  return (
    <div className="SitemapModal__overlay" onClick={onClose}>
      <div className="SitemapModal" onClick={(e) => e.stopPropagation()}>

        {/* Title */}
        <div className="SitemapModal__titleBox">
          <h2 className="SitemapModal__title">
            전체 메뉴
          </h2>
          <button className="SitemapModal__closeButton" onClick={onClose}>
            <BsXLg />
          </button>
        </div>

        {/* Content */}
        <div className="SitemapModal__content">
          <ul className='SitemapModal__nav'>
            {/* 재단소개 */}
            <li className='SitemapModal__nav-item'>
              <b className='SitemapModal__nav-title'>재단소개</b>
              <ul className='SitemapModal__subnav'>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="*" className='SitemapModal__nav-link'>재단 개요</NavLink>
                </li>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="*" className='SitemapModal__nav-link'>조직·운영</NavLink>
                </li>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="*" className='SitemapModal__nav-link'>상징·브랜딩</NavLink>
                </li>
              </ul>
            </li>
            {/* 문화상품 */}
            <li className='SitemapModal__nav-item'>
              <b className='SitemapModal__nav-title'>문화상품</b>
              <ul className='SitemapModal__subnav'>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="*" className='SitemapModal__nav-link'>발간 서적 보기</NavLink>
                </li>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="*" className='SitemapModal__nav-link'>온라인 상품관</NavLink>
                </li>
              </ul>
            </li>
            {/* 공연·전시 */}
            <li className='SitemapModal__nav-item'>
              <b className='SitemapModal__nav-title'>공연·전시</b>
              <ul className='SitemapModal__subnav'>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="*" className='SitemapModal__nav-link'>공연장 소개</NavLink>
                </li>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="/exhibitionPerformance" className='SitemapModal__nav-link'>공연·전시</NavLink>
                </li>
              </ul>
            </li>
            {/* 이용안내 */}
            <li className='SitemapModal__nav-item'>
              <b className='SitemapModal__nav-title'>이용안내</b>
              <ul className='SitemapModal__subnav'>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="*" className='SitemapModal__nav-link'>회원 안내</NavLink>
                </li>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="/directions" className='SitemapModal__nav-link'>오시는 길</NavLink>
                </li>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="*" className='SitemapModal__nav-link'>시설 안내</NavLink>
                </li>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="*" className='SitemapModal__nav-link'>대관 안내</NavLink>
                </li>
              </ul>
            </li>
            {/* 소식 */}
            <li className='SitemapModal__nav-item'>
              <b className='SitemapModal__nav-title'>소식</b>
              <ul className='SitemapModal__subnav'>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="/notices" className='SitemapModal__nav-link'>공지사항</NavLink>
                </li>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="*" className='SitemapModal__nav-link'>일반 공고</NavLink>
                </li>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="*" className='SitemapModal__nav-link'>채용 공고</NavLink>
                </li>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="*" className='SitemapModal__nav-link'>보도 자료</NavLink>
                </li>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="*" className='SitemapModal__nav-link'>소식지</NavLink>
                </li>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="/events" className='SitemapModal__nav-link'>이벤트</NavLink>
                </li>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="/schedule" className='SitemapModal__nav-link'>연간 일정</NavLink>
                </li>
              </ul>
            </li>
            {/* 열린경영 */}
            <li className='SitemapModal__nav-item'>
              <b className='SitemapModal__nav-title'>열린경영</b>
              <ul className='SitemapModal__subnav'>
                <li className='SitemapModal__subnav-item'>
                  <NavLink to="*" className='SitemapModal__nav-link'>열린 경영</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SitemapModal
