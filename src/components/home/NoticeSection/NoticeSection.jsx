/* ========================
  Import
======================== */
import React, { useState, useEffect } from 'react'

// Data
import { notice } from '../../../data/notice'

// Components
import SectionTitle from '../SectionTitle/SectionTitle'
import CategoryFilterGroup from '../../common/FilteringButton/CategoryFilterGroup'
import CustomLinkButton from '../../common/CustomLinkButton/CustomLinkButton'
import NoticeList from '../../common/NoticeList/NoticeList'

// SCSS
import './NoticeSection.scss'

/* ========================
  Notice Section
======================== */
const NoticeSection = () => {
  const [currentFilterCategory, setCurrentFilterCategory] = useState('전체');
  const [filterNotices, setFilterNotices] = useState([]);

  useEffect(() => {
    // Sort
    const sortedNotice = [...notice].sort((a, b) => {
      const dateA = new Date(a.Date);
      const dateB = new Date(b.Date);
      return dateB.getTime() - dateA.getTime();
    })

    // Filtering
    let newFilteredNotice = [];
    if (currentFilterCategory === '전체') {
      newFilteredNotice = sortedNotice;
    } else {
      newFilteredNotice = sortedNotice.filter(
        (item) => item.Category === currentFilterCategory
      );
    }
    setFilterNotices(newFilteredNotice);
  }, [currentFilterCategory]);

  const handleCategoryFilterChange = (selectedCategory) => {
    setCurrentFilterCategory(selectedCategory); // 받아온 카테고리로 상태 업데이트
  };

  /* ========================
  Return
  ======================== */
  return (
    <section className="Notice">
      <div className="Notice__container">
        <div className="Notice__topBox">
          <SectionTitle
            mainTitle="공지사항"
            subTitle="알아두면 좋은, 꼭 알아야 할 소식."
          />
          <CategoryFilterGroup
            categories={['전체', '공지', '공고', '보도', '채용']}
            onCategoryChange={handleCategoryFilterChange}
          />
          <CustomLinkButton to="/notices">더보기</CustomLinkButton>
        </div>
        <NoticeList notices={filterNotices.slice(0, 6)}/>
      </div>
    </section>
  )
}

export default NoticeSection
