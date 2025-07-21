/* ========================
  Import
======================== */
import React from 'react'

// Components
import Subvisual from '../../components/common/Subvisual/Subvisual'
import SubContent from '../../components/common/SubContent/SubContent'
import MapSection from '../../components/directions/MapSection/MapSection'
import TransportSection from '../../components/directions/TransportSection/TransportSection'
import LocationSection from '../../components/directions/LocationSection/LocationSection'

// SCSS
import './Directions.scss'

/* ========================
  Directions
======================== */
const Directions = () => {

  /* ========================
  Return
  ======================== */ 
  return (
    <div className='Directions'>
      
      {/* Components */}
      <Subvisual to={"/directions"} depth1={"이용안내"} depth2={"오시는길"} />
      <SubContent title={"오시는 길"} />
      
      {/* Content */}
      <div className="Directions__container">
        <MapSection />
        <TransportSection />
        <LocationSection />
      </div>
    </div>
  )
}

export default Directions
