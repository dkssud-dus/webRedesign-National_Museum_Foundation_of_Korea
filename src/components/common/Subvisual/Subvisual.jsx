/* ========================
  Import
======================== */
import React from 'react'

// Image
// 이 경로는 common 폴더가 아닌, src/assets/images에 있어야 합니다.
import background from '../../../assets/images/subvisual.jpg';
import symbol from '../../../assets/images/symbol/mark--background.png';

// React-router-dom
import { Link } from 'react-router-dom';

// Bootstrap Icons
import { BsHouseFill, BsChevronRight } from 'react-icons/bs';

// SCSS
import './Subvisual.scss'

/* ========================
  Sub Visual
======================== */
const Subvisual = ({ to, depth1, depth2 }) => {

  /* ========================
    Return
  ======================== */
  return (
    <div className='Subvisual'>
      <div className="Subvisual__background">
        <img src={background} alt="배경" className='Subvisual__background-image'/>
      </div>
      <div className="Subvisual__symbol">
        <img src={symbol} alt="국립박물관문화재단 로고" className="Subvisual__symbol-image" />
      </div>
      <div className="Subvisual__breadCrumb">
        <ul className="Subvisual__breadCrumb-list">
          {/* 홈 아이콘 */}
          <li className="Subvisual__breadCrumb-item">
            <Link className='Subvisual__breadCrumb-link' to="/">
              <BsHouseFill />
            </Link>
          </li>
          {/* 구분자 */}
          <li className="Subvisual__breadCrumb-item">
            <BsChevronRight />
          </li>
          {/* 1단계 브레드크럼 */}
          <li className="Subvisual__breadCrumb-item">
            <Link className='Subvisual__breadCrumb-link' to={to}>{depth1}</Link>
          </li>
          {/* 구분자 */}
          <li className="Subvisual__breadCrumb-item">
            <BsChevronRight />
          </li>
          {/* 2단계 브레드크럼 */}
          <li className="Subvisual__breadCrumb-item">
            <Link className='Subvisual__breadCrumb-link' to={to}>{depth2}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Subvisual;