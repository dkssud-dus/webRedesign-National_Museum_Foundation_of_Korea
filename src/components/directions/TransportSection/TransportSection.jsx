/* ========================
  Import
======================== */
import React, { useState } from 'react'

// SCSS
import './TransportSection.scss'

/* ========================
  Transport Section
======================== */
const TransportSection = () => {
  // Button → Content
  const [activeTransport, setActiveTransport] = useState('subway');
  const handleCategoryClick = (category) => {
    setActiveTransport(category);
  };

  return (

  /* ========================
    Return
  ======================== */
    <section className='Transport'>

      {/* buttons */}
      <div className="Transport__category">
        <ul className="Transport__category-list">
          <li className="Transport__category-item">
            <button
              className={`Transport__category-button Transport__category-subway ${activeTransport === 'subway' ? 'Transport__category-button--active' : ''}`}
              onClick={() => handleCategoryClick('subway')}
            >
              지하철
            </button>
          </li>
          <li className="Transport__category-item">
            <button
            className={`Transport__category-button Transport__category-bus ${activeTransport === 'bus' ? 'Transport__category-button--active' : ''}`}
              onClick={() => handleCategoryClick('bus')}
            >
              버스
            </button>
          </li>
          <li className="Transport__category-item">
            <button
              className={`Transport__category-button Transport__category-car ${activeTransport === 'car' ? 'Transport__category-button--active' : ''}`}
              onClick={() => handleCategoryClick('car')}
            >
              자가용
            </button>
          </li>
        </ul>
      </div>
      
      {/* announce */}
      <div className="Transport__announce">
        <ul className="Transport__announce-list">
          {/* 지하철 */}
          {activeTransport === 'subway' && (
            <li className="Transport__announce-item Transport__announce-subway">
              <ul className="Transport__announce-way-list">
                <li className='Transport__announce-way-item'>
                  지하철 4호선 또는 경의중앙성 이촌 (국립중앙박물관) 역 하차
                </li>
                <li className='Transport__announce-way-item'>
                  이촌역 2번출구 박물관 나들길 (지하보도 이용)
                </li>
              </ul>
              <strong className="Transport__announce-openTime-title">
                박물관 나들길 개방시간
              </strong>
              <ul className='Transport__anounce-openTime-list'>
                <li className="Transport__announce-openTime-item">
                  월 / 화 / 목 / 금 (평일) <b>07:00 - 19:00</b>
                </li>
                <li className="Transport__announce-openTime-item">
                  수 / 토 (야간 개장일) <b>07:00 - 22:00</b>
                </li>
                <li className="Transport__announce-openTime-item">
                  일 <b>07:00 - 20:00</b>
                </li>
              </ul>
            </li>
          )}
          {/* 버스 */}
          {activeTransport === 'bus' && (
            <li className="Transport__announce-item Transport__announce-bus">
              <ul className="Transport__announce-way-list">
                <li className='Transport__announce-way-item'>
                  400번 또는 502번
                </li>
                <li className='Transport__announce-way-item'>
                  ‘국립중앙박물관·용산가족공원’ 정류장 하차
                </li>
              </ul>
            </li>
          )}
          {/* 자가용 */}
          {activeTransport === 'car' && (
            <li className="Transport__announce-item Transport__announce-car">
              <ul className="Transport__announce-way-list">
                <li className='Transport__announce-way-item'>
                  <b className='Transport__announce-way-title'>시청 방면</b>
                  <p className='Trnasport__announce-way-desc'>이태원 방면 → 반표대교 진입 전 용산가족공원 방면 우회전 → 용산가족공원 입구에서 300M 가량 직진</p>
                </li>
                <li className='Transport__announce-way-item'>
                  <b className='Transport__announce-way-title'>강남 방면</b>
                  <p className='Trnasport__announce-way-desc'>반포대교 → 첫 삼거리(한강중교앞 교차로) 용산가족공원 방면 좌회전 → 용산가족공원 입구에서 300M 가량 직진</p>
                </li>
                <li className='Transport__announce-way-item'>
                  <b className='Transport__announce-way-title'>삼각지 방면</b>
                  <p className='Trnasport__announce-way-desc'>1호선 용산역방향 우회전 → 이촌역에서 용산가족공원 방향 150M 좌회전</p>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
}

export default TransportSection
