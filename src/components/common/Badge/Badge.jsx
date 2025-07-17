/* ========================
  Import
======================== */
import React from 'react'

// SCSS
import './Badge.scss'

/* ========================
  Badge
======================== */
const Badge = ({ children, className, ...rest }) => {

  /* ========================
  Return
  ======================== */
  return (
    <div className={`Badge ${className || ''}`} {...rest}>
      {children}
    </div>
  )
}

export default Badge
