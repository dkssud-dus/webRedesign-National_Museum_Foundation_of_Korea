/* ========================
  Import
======================== */
import React, { useState } from 'react';

// images
import logo from '../../../assets/images/symbol/mark--primary.png';

// react-router-dom
import { Link, NavLink } from 'react-router-dom';

// react bootstrap icon
import { BsGlobe, BsList } from 'react-icons/bs';

// SCSS
import './Header.scss'

/* ========================
  Header
======================== */
const Header = ({ openLoginModal, openSitemapModal}) => {
  // Nav depth1 → depth2 control
  const [activeMenu, setActiveMenu] = useState(null);
  const handleMouseEnter = (menuName) => {
    setActiveMenu(menuName);
  };
  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  /* ========================
  Return
  ======================== */
  return (
    <header className='Header'>
      <div className="Header__container">

        {/* brand */}
        <div className="Header__brand">
          <Link to="/" className='Header__logo-link'>
            <img src={logo} alt="국립박물관문화재단 로고" className='Header__logo-image'/>
          </Link>
        </div>

        {/* nav */}
        <nav className="Header__nav">
          <ul className='Header__nav-depth1'>
            {/* 재단소개 */}
            <li
              className={`Header__nav-item ${activeMenu === 'foundation' ? 'Header__nav-item--active' : ''}`}
              onMouseEnter={() => handleMouseEnter('foundation')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="*" className='Header__nav-link'>재단소개</NavLink>
              <ul className='Header__nav-depth2' >
                <li className='Header__nav-item'>
                  <NavLink to="*" className='Header__nav-link'>재단 개요</NavLink>
                </li>
                <li className='Header__nav-item'>
                  <NavLink to="*" className='Header__nav-link'>조직·운영</NavLink>
                </li>
                <li className='Header__nav-item'>
                  <NavLink to="*" className='Header__nav-link'>상징·브랜딩</NavLink>
                </li>
              </ul>
            </li>
            {/* 문화상품 */}
            <li
              className={`Header__nav-item ${activeMenu === 'product' ? 'Header__nav-item--active' : ''}`}
              onMouseEnter={() => handleMouseEnter('product')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="*" className='Header__nav-link'>문화상품</NavLink>
              <ul className='Header__nav-depth2'>
                <li className='Header__nav-item'>
                  <NavLink to="*" className='Header__nav-link'>발간 서적 보기</NavLink>
                </li>
                <li className='Header__nav-item'>
                  <NavLink to="*" className='Header__nav-link'>온라인 상품관</NavLink>
                </li>
              </ul>
            </li>
            {/* 공연·전시 */}
            <li
              className={`Header__nav-item ${activeMenu === 'exhibitionPerformance' ? 'Header__nav-item--active' : ''}`}
              onMouseEnter={() => handleMouseEnter('exhibitionPerformance')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/exhibitionPerformance" className='Header__nav-link'>공연·전시</NavLink>
              <ul className='Header__nav-depth2'>
                <li className='Header__nav-item'>
                  <NavLink to="*" className='Header__nav-link'>공연장 소개</NavLink>
                </li>
                <li className='Header__nav-item'>
                  <NavLink to="/exhibitionPerformance" className='Header__nav-link'>공연·전시</NavLink>
                </li>
              </ul>
            </li>
            {/* 이용안내 */}
            <li 
              className={`Header__nav-item ${activeMenu === 'guide' ? 'Header__nav-item--active' : ''}`}
              onMouseEnter={() => handleMouseEnter('guide')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/directions" className='Header__nav-link'>이용안내</NavLink>
              <ul className='Header__nav-depth2'>
                <li className='Header__nav-item'>
                  <NavLink to="*" className='Header__nav-link'>회원 안내</NavLink>
                </li>
                <li className='Header__nav-item'>
                  <NavLink to="/directions" className='Header__nav-link'>오시는 길</NavLink>
                </li>
                <li className='Header__nav-item'>
                  <NavLink to="*" className='Header__nav-link'>시설 안내</NavLink>
                </li>
                <li className='Header__nav-item'>
                  <NavLink to="*" className='Header__nav-link'>대관 안내</NavLink>
                </li>
              </ul>
            </li>
            {/* 소식 */}
            <li 
              className={`Header__nav-item ${activeMenu === 'notice' ? 'Header__nav-item--active' : ''}`}
              onMouseEnter={() => handleMouseEnter('notice')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="/schedule" className='Header__nav-link'>소식</NavLink>
              <ul className='Header__nav-depth2'>
                <li className='Header__nav-item'>
                  <NavLink to="/notices" className='Header__nav-link'>공지사항</NavLink>
                </li>
                <li className='Header__nav-item'>
                  <NavLink to="*" className='Header__nav-link'>일반 공고</NavLink>
                </li>
                <li className='Header__nav-item'>
                  <NavLink to="*" className='Header__nav-link'>채용 공고</NavLink>
                </li>
                <li className='Header__nav-item'>
                  <NavLink to="*" className='Header__nav-link'>보도 자료</NavLink>
                </li>
                <li className='Header__nav-item'>
                  <NavLink to="*" className='Header__nav-link'>소식지</NavLink>
                </li>
                <li className='Header__nav-item'>
                  <NavLink to="/events" className='Header__nav-link'>이벤트</NavLink>
                </li>
                <li className='Header__nav-item'>
                  <NavLink to="/schedule" className='Header__nav-link'>연간일정</NavLink>
                </li>
              </ul>
            </li>
            {/* 열린경영 */}
            <li
              className={`Header__nav-item ${activeMenu === 'management' ? 'Header__nav-item--active' : ''}`}
              onMouseEnter={() => handleMouseEnter('management')}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink to="*" className='Header__nav-link'>열린경영</NavLink>
              <ul className='Header__nav-depth2'>
                <li className='Header__nav-item'>
                  <NavLink to="*" className='Header__nav-link'>열린 경영</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* buttons */}
        <div className="Header__actions">
          <button 
            className="Header__action-button Header__action-button--login"
            onClick={openLoginModal}
          >
            로그인
          </button>
          <button className="Header__action-button Header__action-button--globe"><BsGlobe /></button>
          <button 
            className="Header__action-button Header__action-button--menu"
            onClick={openSitemapModal}
          >
            <BsList />
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header