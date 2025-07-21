/* ========================
  Import
======================== */
import React, { useState, useEffect } from 'react'

// Data
import { goods } from '../../../data/goods'

// Components
import SectionTitle from '../SectionTitle/SectionTitle'
import CustomLinkButton from '../../common/CustomLinkButton/CustomLinkButton'

// React-router-dom
import { Link } from 'react-router-dom'

// SCSS
import './GoodsSection.scss'

/* ========================
  Goods Section
======================== */
const GoodsSection = () => {

  /* ========================
  Return
  ======================== */
  return (
    <section className="Goods">
      <div className="Goods__container">
        <div className="Goods__titleBox">
          <SectionTitle
            mainTitle="뮤지엄 굿즈, 일상에 스며들다"
            subTitle="문화의 감성을 담은 아이템, 당신의 일상 속으로."
          />
          <CustomLinkButton target='_blank' to="*">온라인 스토어 이동</CustomLinkButton>
        </div>
        <div className="Goods__contentBox">
          {goods.map((item) => 
          <Link to="*" target='_blank' className='Goods__item' key={item.Id}>
            <div className="Goods__item-imageBox">
              <img src={item.Image} alt={item.Name} className="Goods__item-image" />
            </div>
            <div className="Goods__item-textBox">
              <strong className="Goods__item-name">
                {item.Name}
              </strong>
              <span className="Goods__item-price">
                {item.Price}
              </span>
            </div>
          </Link>
          )}
        </div>
      </div>
    </section>
  )
}

export default GoodsSection
