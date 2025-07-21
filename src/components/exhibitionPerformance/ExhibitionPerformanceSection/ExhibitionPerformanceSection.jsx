/* ========================
  Import
======================== */
import React, { useState, useEffect, useMemo  } from 'react'

// Components
import CategoryFilterGroup from '../../common/FilteringButton/CategoryFilterGroup'
import ExhibitionPerformanceSlide from '../../common/ExhibitionPerformanceSlide/ExhibitionPerformanceSlide'

// SCSS
import './ExhibitionPerformanceSection.scss'

/* ========================
  Exhibition Performance Section
======================== */
const ExhibitionPerformanceSection = ({ exhibitionPerformanceData  }) => {
  const allPerformances = useMemo(() => {
    return exhibitionPerformanceData ? exhibitionPerformanceData.filter(item => item.Category === '공연') : [];
  }, [exhibitionPerformanceData]);

  const allExhibitions = useMemo(() => {
    return exhibitionPerformanceData ? exhibitionPerformanceData.filter(item => item.Category === '전시') : [];
  }, [exhibitionPerformanceData]);


  const [currentPerformanceTag, setCurrentPerformanceTag] = useState('전체');
  const [filteredPerformances, setFilteredPerformances] = useState([]);

  const [currentExhibitionTag, setCurrentExhibitionTag] = useState('전체');
  const [filteredExhibitions, setFilteredExhibitions] = useState([]);

  useEffect(() => {
    const sortedPerformances = [...allPerformances].sort((a, b) => {
      const dateA = new Date(a.StartDate);
      const dateB = new Date(b.StartDate);
      return dateB.getTime() - dateA.getTime();
    });

    let newFilteredPerformances = [];
    if (currentPerformanceTag === '전체') {
      newFilteredPerformances = sortedPerformances;
    } else {
      newFilteredPerformances = sortedPerformances.filter(
        (item) => item.Tag === currentPerformanceTag
      );
    }
    setFilteredPerformances(newFilteredPerformances);
  }, [currentPerformanceTag, allPerformances]);

  useEffect(() => {
    const sortedExhibitions = [...allExhibitions].sort((a, b) => {
      const dateA = new Date(a.StartDate);
      const dateB = new Date(b.StartDate);
      return dateB.getTime() - dateA.getTime();
    });

    let newFilteredExhibitions = [];
    if (currentExhibitionTag === '전체') {
      newFilteredExhibitions = sortedExhibitions;
    } else {
      newFilteredExhibitions = sortedExhibitions.filter(
        (item) => item.Tag === currentExhibitionTag
      );
    }
    setFilteredExhibitions(newFilteredExhibitions);
  }, [currentExhibitionTag, allExhibitions]);

  const handlePerformanceTagChange = (selectedTag) => {
    setCurrentPerformanceTag(selectedTag);
  };

  const handleExhibitionTagChange = (selectedTag) => {
    setCurrentExhibitionTag(selectedTag);
  };

  /* ========================
    Return
  ======================== */
  return (
    <section className='PerformanceExhibitionSection'>
      <div className="PerformanceExhibition__performance">
        <div className="PerformanceExhibition__category">
          <strong className='PerformanceExhibition__title'>공연</strong>
          <CategoryFilterGroup
            categories={['전체', '기획공연', '문화행사', '대관공연']}
            onCategoryChange={handlePerformanceTagChange}
          />
        </div>
        <ExhibitionPerformanceSlide exhibitionPerformance={filteredPerformances} />
      </div>
      <div className="PerformanceExhibition__exhibition">
        <div className="PerformanceExhibition__category">
          <strong className='PerformanceExhibition__title'>전시</strong>
          <CategoryFilterGroup
            categories={['전체', '특별전']}
            onCategoryChange={handleExhibitionTagChange}
          />
        </div>
        <ExhibitionPerformanceSlide exhibitionPerformance={filteredExhibitions} />
      </div>
    </section>
  )
}

export default ExhibitionPerformanceSection