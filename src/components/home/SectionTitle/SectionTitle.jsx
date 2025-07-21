/* ========================
  Import
======================== */
import React from 'react'

// SCSS
import './SectionTitle.scss'

/* ========================
  SectionTitle
======================== */
const SectionTitle = ({ mainTitle, subTitle, className, ...rest }) => {

  /* ========================
  Return
  ======================== */
  return (
    <div className={`SectionTitle ${className || ''}`} {...rest}>
      {mainTitle && <h2 className="SectionTitle__main">{mainTitle}</h2>}
      {subTitle && <p className="SectionTitle__sub">{subTitle}</p>}
    </div>
  )
}

export default SectionTitle
