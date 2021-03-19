import React from 'react'
import Social from '../components/Social'
import fullName from '../assets/LTNWords.png'

import HeroSlider from '../components/HeroSlider'

const LandingPage = () => {
    return (
      <>
      <HeroSlider/>
      <div className="landing__jumbotron">
          <img src={fullName} alt="full name logo" className="landing__nameLogo"/>
        <div className="landing__container">
          <h6 className="landing__jumbotron-heading2">Helping Those In Need</h6><br/>
          <h6 className="landing__jumbotron-heading2">
            Together we can create hope <br/> where hope has been lost.
          </h6>
        </div>
      </div>
      <Social/>
      </>
    )
}

export default LandingPage
