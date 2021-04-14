import React from 'react'

import Gallery from '../components/Gallery'

const About = () => {
  return (
    <>
      <div id="about" className="aboutPage__contain">
        <div className="aboutPage__missionContainer">
        </div>
        <div className="aboutPage__container">
          <p className="aboutPage__textBubble--heading grid-1">The Mission</p>
          <p className="aboutPage__textBubble--text grid-2">
            Striving to always to do good to one another, to everyone, by
            serving our brothers and sisters in need.
          </p>

          <p className="aboutPage__textBubble--text grid-3">
            It’s a movement convincing others to help out and notice their
            unhoused neighbors. Everyone is a human. Donations go so far. Meals,
            clothing, SOCKS.
          </p>
          <p className="aboutPage__textBubble--text grid-4">
            Generous local businesses have committed to donating food each week
            for our volunteers to hand out.
          </p>
          <p className="aboutPage__textBubble--text grid-5">
            Love thy Neighbor, Inc. is a registered 501(c)3 non-profit
            organization. To keep this status we follow strict guidelines and
            adhere to non-profit rules. This also means that your donation is
            tax deductible. We have redistributed over 3000 items and countless
            meals to those in need.
          </p>
        </div>
      <Gallery />
      </div>
    </>
  )
}


export default About
