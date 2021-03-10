import React from 'react'
import convo1 from '../assets/convo1.jpg'
import convo2 from '../assets/convo2.jpg'
import AboutImage from './AboutImage'
import AboutTextBubble from './AboutTextBubble'

const About = () => {
  return (
    <div id="about" className="aboutPage__contain">
      <h1 className="aboutPage__heading">About Us</h1>
      <div className="aboutPage__container--1">
        <div>
          <AboutTextBubble text="Together we can make a difference." />
          <AboutTextBubble text="Positivley impacting just one person can last a life time." />
        </div>
        <AboutImage image={convo1} />
      </div>
      <div className="aboutPage__container--2">
        <AboutImage image={convo2} />
        <div>
          <AboutTextBubble text="We are out on the street to help our brothers and sisters" />
          <AboutTextBubble text="we give out food, socks and having a conversation" />
        </div>
      </div>
    </div>
  )
}


export default About
