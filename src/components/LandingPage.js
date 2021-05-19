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
        {/* <h1 className="landing__caption">
          Here <br /> For The
          <br /> Homeless
        </h1> */}
      </div>
    )
}

export default LandingPage
