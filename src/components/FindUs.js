import React from 'react'

import instaPost1 from '../assets/instpost1.png'
import Social from './Social'

const FindUs = () => {
  return (
    <div className="findUs__container">
      <div className="findUs__instaScroll">
        <img src={instaPost1} alt="an instagram post from LTN" className="findUs__instaScroll--image"/>
        <img src={instaPost1} alt="an instagram post from LTN" className="findUs__instaScroll--image"/>
        <img src={instaPost1} alt="an instagram post from LTN" className="findUs__instaScroll--image"/>
      </div>
      <Social/>
    </div>
  )
}

export default FindUs
