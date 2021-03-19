import React from 'react'

import convo2 from '../assets/convo2.jpg'

import AboutImage from '../components/AboutImage'
import AboutTextBubble from '../components/AboutTextBubble'
import Social from '../components/Social'

const About = () => {
  return (

      <div id="about" className="aboutPage__contain">
        <div className="aboutPage__container--image">
          <AboutImage image={convo2} />
        </div>
        <div className="aboutPage__container--text">
          <AboutTextBubble
            heading="The Mission"
            text="Striving to always to do good to one another, to everyone, by serving our brothers and sisters in need."
          />
        </div>
      <Social />
      </div>
  )
}


export default About
