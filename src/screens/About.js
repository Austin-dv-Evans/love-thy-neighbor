import React from 'react'

import Gallery from '../components/Gallery'
import OurPartners from '../components/OurPartners'

const About = () => {
  return (
    <>
      <div id="about" className="aboutPage__contain">
        <div className="aboutPage__missionContainer">
        </div>
        <div className="aboutPage__container">
          <p className="aboutPage__textBubble--heading grid-1">The Mission:</p>
          <li className="aboutPage__textBubble--text grid-2">
            Striving to always to do good to one another, to everyone, by
            serving our brothers and sisters in need.
          </li>

          <li className="aboutPage__textBubble--text grid-3">
            We are a movement, convincing others to help out and notice their
            unhoused neighbors. Everyone is a human. We provide meals,
            clothing, socks and AlWAYS a conversation.
          </li>
          <li className="aboutPage__textBubble--text grid-4">
            Generous local businesses have committed to donating food each week
            for our volunteers to hand out.
          </li>
          <li className="aboutPage__textBubble--text grid-5">
            Love thy Neighbor, Inc. is a registered 501(c)3 non-profit
            organization. To keep this status we follow strict guidelines and
            adhere to non-profit rules. This also means that your donation is
            tax deductible. We have redistributed over 3000 items and countless
            meals to those in need.
          </li>
        </div>
        <Gallery />
        <OurPartners/>
      </div>
    </>
  )
}


export default About
