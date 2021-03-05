import React from 'react'
import crew from '../assets/crewLTN.jpg'
import AboutImage from './AboutImage'
import AboutTextBubble from './AboutTextBubble'

const About = () => {
  return (
    <div className="aboutPage__container">
      <AboutTextBubble text="bubble number 1" />
      <AboutTextBubble text="bubble number 1" />
      <AboutImage image={crew} />
      <AboutImage image={crew} />
      <AboutTextBubble text="bubble number 1" />
      <AboutTextBubble text="bubble number 1" />
    </div>
  )
}

export default About
