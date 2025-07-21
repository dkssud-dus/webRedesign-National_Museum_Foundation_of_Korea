/* ========================
  Import
======================== */
import React, { useState } from 'react'

// bootstrap icon
import { BsSearch, BsClockFill, BsCalendarXFill, BsTicketFill } from 'react-icons/bs';

// images
import mainvisualBG from '../../../assets/images/mainvisual.jpg';

// components
import CustomLinkButton from '../../common/CustomLinkButton/CustomLinkButton';

// SCSS
import './MainVisualSection.scss'

/* ========================
  MainVisualSection
======================== */
const MainVisualSection = () => {
  // Tag click → Input
  const [searchTerm, setSearchTerm] = useState('');
  const handleTagClick = (event) => {
    const clickedTagText = event.target.textContent;
    const newSearchTerm = clickedTagText.replace('#', '');
    setSearchTerm(newSearchTerm);
  };
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  /* ========================
  Return
  ======================== */
  return (
    <section className="Mainvisual">

      {/* background */}
      <div className="Mainvisual__background">
        <img src={mainvisualBG} alt="메인 비주얼" className="Mainvisual__background-image" />
      </div>

      <div className="Mainvisual__container">
        {/* search */}
        <div className="Mainvisual__searchBox">
          <div className="Mainvisual__search-group">
            <label className="Mainvisual__input-group">
              <input
                type="text"
                placeholder='무엇을 찾고 계신가요?' className='Mainvisual__input'
                value={searchTerm}
                onChange={handleInputChange}
              />
            </label>
            <button className="Mainvisual__search-button">
              <BsSearch />
            </button>
          </div>
          <div className="Mainvisual__search-tag-group">
            <ul className="Mainvisual__search-tag-list">
              <li className="Mainvisual__search-tag-item">
                <button className="Mainvisual__search-tag-button" onClick={handleTagClick}>
                  #전시
                </button>
              </li>
              <li className="Mainvisual__search-tag-item">
                <button className="Mainvisual__search-tag-button" onClick={handleTagClick}>
                  #공연
                </button>
              </li>
              <li className="Mainvisual__search-tag-item">
                <button className="Mainvisual__search-tag-button" onClick={handleTagClick}>
                  #뮷즈
                </button>
              </li>
              <li className="Mainvisual__search-tag-item">
                <button className="Mainvisual__search-tag-button" onClick={handleTagClick}>
                  #공연장 대관
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* catchphrase */}
        <div className="Mainvisual__catchphraseBox">
          <h1 className='Mainvisual__catchphrase-main'>잇다, 지키다, 나누다</h1>
          <h2 className='Mainvisual__catchphrase-sub'>전통을 품고, 일상으로</h2>
        </div>
        
      </div>

      {/* notice */}
      <div className="Mainvisual__noticeBox">
        <div className="Mainvisual__container">
          <div className="Mainvisual__notice Mainvisual__notice--time">
            <strong className='Mainvisual__notice-title'>
              <BsClockFill />
              관람 시간
            </strong>
            <p className='Mainvisual__notice-text'>10:00 - 18:00</p>
            <span className='Mainvisual__notice-text-sub'>수·토요일은 21시까지 관람 가능합니다.</span>
          </div>
          <div className="Mainvisual__notice Mainvisual__notice--ticket">
            <strong className='Mainvisual__notice-title'>
              <BsTicketFill />
              관람료
            </strong>
            <span className='Mainvisual__notice-text-sub'>공연과 전시마다 다르므로 홈페이지 참고 바랍니다.</span>
          </div>
          <div className="Mainvisual__notice Mainvisual__notice--holiday">
            <strong className='Mainvisual__notice-title'>
              <BsCalendarXFill />
              휴관일
            </strong>
            <p className='Mainvisual__notice-text'>1월 1일, 설날 및 추석</p>
          </div>
          <CustomLinkButton to="/directions">오시는 길</CustomLinkButton>
        </div>
      </div>
    </section>
  )
}

export default MainVisualSection