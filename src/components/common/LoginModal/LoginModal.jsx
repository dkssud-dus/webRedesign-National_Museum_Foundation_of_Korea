/* ========================
  Import
======================== */
import React from 'react'

// images
import snsicon01 from '../../../assets/images/snsicon01.png'
import snsicon02 from '../../../assets/images/snsicon02.png'
import snsicon03 from '../../../assets/images/snsicon03.png'
import snsicon04 from '../../../assets/images/snsicon04.png'

// react bootstrap icon
import { BsXLg, BsQuestionCircle } from 'react-icons/bs';

// SCSS
import './LoginModal.scss'

/* ========================
  LoginModal
======================== */
const LoginModal = ({ onClose }) => {
  /* ========================
  Return
  ======================== */
  return (
    <div className="LoginModal__overlay" onClick={onClose}>
      <div className="LoginModal" onClick={(e) => e.stopPropagation()}>

        {/* Login Title */}
        <div className="LoginModal__titleBox">
          <h2 className="LoginModal__title">
            로그인
          </h2>
          <button className="LoginModal__closeButton" onClick={onClose}>
            <BsXLg />
          </button>
        </div>

        {/* Login Form */}
        <form className="LoginModal__form">
          <label className='LoginModal__input-group'>
            <input type="text" placeholder='아이디 입력' className='LoginModal__input LoginModal__input--id'/>
          </label>
          <label className='LoginModal__input-group'>
            <input type="password" placeholder='비밀번호 입력' className='LoginModal__input LoginModal__input--password'/>
          </label>
          <a href="#none" className='LoginModal__help-link'>
            <BsQuestionCircle />
            계정을 잊으셨나요?
          </a>
          <button className='LoginModal__loginButton'>
            로그인
          </button>
          <label className='LoginModal__remember-me'>
            <input type="checkbox" className='LoginModal__remember-me-checkbox' /> 로그인 유지
          </label>
        </form>

        {/* Login Sign Up */}
        <div className="LoginModal__signup">
          <p className='LoginModal__signup-text'>아직 회원이 아니신가요?</p>
          <a href="#none" className='LoginModal__signup-link'>회원가입</a>
        </div>

        <div className="LoginModal__social-login">
          <strong className='LoginModal__social-login-title'>다른 서비스로 로그인</strong>
          <ul className='LoginModal__social-list'>
            <li className='LoginModal__social-item'>
              <div className="LoginModal__social-icon">
                <img src={snsicon01} alt="facebook icon" className='LoginModal__social-icon-image' />
              </div>
              <span className='LoginModal__social-text'>페이스북</span>
            </li>
            <li className='LoginModal__social-item'>
              <div className="LoginModal__social-icon">
                <img src={snsicon02} alt="facebook icon" className='LoginModal__social-icon-image' />
              </div>
              <span className='LoginModal__social-text'>트위터</span>
            </li>
            <li className='LoginModal__social-item'>
              <div className="LoginModal__social-icon">
                <img src={snsicon03} alt="facebook icon" className='LoginModal__social-icon-image' />
              </div>
              <span className='LoginModal__social-text'>카카오톡</span>
            </li>
            <li className='LoginModal__social-item'>
              <div className="LoginModal__social-icon">
                <img src={snsicon04} alt="facebook icon" className='LoginModal__social-icon-image' />
              </div>
              <span className='LoginModal__social-text'>네이버</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LoginModal