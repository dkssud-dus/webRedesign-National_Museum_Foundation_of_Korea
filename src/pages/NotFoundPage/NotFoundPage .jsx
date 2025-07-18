/* ========================
  Import
======================== */
import React from 'react'

// Image
import errorImage from '../../assets/images/errorPage.png'

// Components
import CustomLinkButton from '../../components/common/CustomLinkButton/CustomLinkButton'

// SCSS
import './NotFoundPage.scss'


/* ========================
  Not Found Page
======================== */
const NotFoundPage  = () => {
  /* ========================
  Return
  ======================== */
  return (
    <section className="NotFoundPage">
      <div className="NotFoundPage__notice">
        <span className="NotFoundPage__notice-text">4</span>
        <img src={errorImage} alt="0" className="NotFoundPage__notice-image" />
        <span className="NotFoundPage__notice-text">4</span>
      </div>
      <h2 className="NotFoundPage__title">
        이 페이지는 찾을 수 없는 유물 같습니다...
      </h2>
      <p className="NotFoundPage__desc">
        앗, 길을 잃으셨나요? <br/>
        아래 버튼을 누르시면 안전하게 시작 페이지로 모셔다드릴게요. <br/>
        혹시 다른 곳으로 가고 싶으시다면, 위에 있는 내비게이션 메뉴를 이용해 보세요! <br/>
      </p>
      <CustomLinkButton to="/">홈으로 돌아가기</CustomLinkButton>
    </section>
  )
}

export default NotFoundPage 