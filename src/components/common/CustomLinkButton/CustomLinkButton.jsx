/* ========================
  Import
======================== */
import React from 'react'

// react-router-dom
import { Link } from 'react-router-dom';

// scss
import './CustomLinkButton.scss';

/* ========================
  Custom Link Button
======================== */
const CustomLinkButton = ({ to, children, className, ...rest }) => {

  /* ========================
  Return
  ======================== */
  return (
    <Link to={to} className={`CustomLinkButton ${className || ''}`} {...rest}>
      {children}
    </Link>
  )
}

export default CustomLinkButton