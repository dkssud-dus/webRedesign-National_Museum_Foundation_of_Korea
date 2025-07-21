/* ========================
  Import
======================== */
import React from 'react'

// images
import symbol from '../../../assets/images/symbol/symbol--accent.png';
import footerMuds from '../../../assets/images/footer-muds.png';
import footerMcst from '../../../assets/images/footer-mcst.png';
import footerMuseum from '../../../assets/images/footer-museum.png';

// SCSS
import './Footer.scss'

/* ========================
  Footer
======================== */
const Footer = () => {

  /* ========================
  Return
  ======================== */
  return (
    <footer className="Footer">

      {/* Logos */}
      <div className="Footer__logos">
        <ul className='Footer__logo-list'>
          <li className='Footer__logo-item'>
            <img src={footerMuds} alt="뮷즈 로고" />
          </li>
          <li className='Footer__logo-item'>
            <img src={footerMcst} alt="문화체육관광부 로고" />
          </li>
          <li className='Footer__logo-item'>
            <img src={footerMuseum} alt="국립중앙박물관 로고" />
          </li>
        </ul>
      </div>

      {/* Text */}
      <div className="Footer__text">
        <strong className='Footer__title'>국립박물관문화재단</strong>
        <div className="Footer__information-group">
          <span className='Footer__information-item Footer__information--address'>서울시 용산구 서빙고로 137</span>
          <span className='Footer__information-item Footer__information--tel'>TEL. 1544-5955</span>
          <span className='Footer__information-item Footer__information--fax'>FAX. 02-2077-9749</span>
        </div>
        <p className='Footer__copyright'>Copyright ⓒ 2025 National Museum Foundation of Korea. All rights reserved.</p>
      </div>

      {/* Symbol */}
      <div className="Footer__symbol">
        <img src={symbol} alt="국립박물관문화재단 로고" className='Footer__symbol-image'/>
      </div>
    </footer>
  )
}

export default Footer