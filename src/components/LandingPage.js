import React from 'react'
import fullName from '../assets/LTNWords.png'

import HeroSlider from '../components/HeroSlider'

const LandingPage = () => {
    return (
        <div className="landing__jumbotron">
          <img
            src={fullName}
            alt="full name logo"
            className="landing__nameLogo"
          />
          <HeroSlider />
        </div>
    )
}

export default LandingPage
