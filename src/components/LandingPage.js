import React from 'react'
import Social from '../components/Social'
import fullName from '../assets/LTNWords.png'

import HeroSlider from '../components/HeroSlider'

const LandingPage = () => {
    return (
      <>
        <div className="landing__jumbotron">
          <img
            src={fullName}
            alt="full name logo"
            className="landing__nameLogo"
          />
          <HeroSlider />
          {/* <div className="landing__container">
            <h6 className="landing__jumbotron-heading2">
              Helping Those In Need
            <br />
            Together we can create hope where hope has been lost.
            </h6>
          </div>
          <div className="landing__container">
            <h6 className="landing__jumbotron-heading2">
              Together we can create hope where hope has been lost.
            </h6>
          </div> */}
          <Social />
        </div>
      </>
    )
}

export default LandingPage
