import React from 'react'

import Gallery from '../components/Gallery'

const About = () => {
  return (
    <>
      <Gallery />
      <div id="about" className="aboutPage__contain">
        <div className="aboutPage__container--left">
          <p className="aboutPage__textBubble--heading">The Mission</p>
          <p className="aboutPage__textBubble--text">
            Striving to always to do good to one another, to everyone, by
            serving our brothers and sisters in need.
          </p>
        </div>
        <div className="aboutPage__container--text">
          <p className="aboutPage__textBubble--text">
            With the help of volunteers, we’ve been serving our homeless
            community weekly.
          </p>
          <p className="aboutPage__textBubble--text">
            Generous local businesses have committed to donating food each week
            for our volunteers to hand out.
          </p>
          <p className="aboutPage__textBubble--text">
            Love thy Neighbor, Inc. is a registered 501(c)3 non-profit
            organization. To keep this status we follow strict guidelines and
            adhere to non-profit rules. This also means that your donation is
            tax deductible.
          </p>
        </div>
      </div>
    </>
  )
}


export default About
