import React from 'react'

const AboutTextBubble = (props) => {
  return (
    <>
      <h3 className="aboutPage__textBubble--heading">{props.heading}</h3>
      <p className="aboutPage__textBubble--text">{props.text}</p>
    </>
  )
}

export default AboutTextBubble
