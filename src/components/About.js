import React from 'react'
import convo1 from '../assets/convo1.jpg'
import convo2 from '../assets/convo2.jpg'
import AboutImage from './AboutImage'
import AboutTextBubble from './AboutTextBubble'
import Navbar from './Navbar'
const About = () => {
  return (
    <div className="aboutPage">
      <Navbar />
      <div id="about" className="aboutPage__contain">
        <div className="aboutPage__container--1">
          <AboutImage image={convo1} />
        </div>
        <div className="aboutPage__container--2">
            <AboutTextBubble text="We are out on the street to help our brothers and sisters" />
            <AboutTextBubble text="we give out food, socks and having a conversation" />
        </div>
      </div>
    </div>
  )
}


export default About
