import React from 'react'

const AboutTextBubble = (props) => {
  return (
    <div className="aboutPage__textBubble">
      <h3 className="aboutPage__textBubble--heading">{props.text}</h3>
    </div>
  )
}

export default AboutTextBubble
