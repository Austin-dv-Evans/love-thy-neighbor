import React, {useState, useEffect} from 'react'

import convo1 from '../assets/convo1.jpg'
import supplies from '../assets/suppliesLTN.jpg'
import crewLTN from '../assets/crewLTN.jpg'
import walkingUp from '../assets/walkingUp.jpg'

const HeroSlider = () => {
    const [current, setCurrent] = useState(0)
    const [currentCaption, setCurrentCaption] = useState(0)

    const slides = [supplies, convo1, crewLTN, walkingUp]

    const captions = [
      "We Provide Socks, Meals, Sanitary Products and More to Our Homeless Neighbors",
      "Consitantly Helping Those In Need",
      "Together, We Can Create Hope Where Hope Has Been Lost",
      "Through Donations and Our Partners We Are Able To Supply Our Community With Essential Items They Need to Survive",
    ]

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1 )
    }
    const nextCaption = () => {
        setCurrentCaption(currentCaption === captions.length - 1 ? 0 : currentCaption + 1 )
    }
    
    useEffect(()=> {
        let sliderTimer = setTimeout(nextSlide, 15000)
        let captionTimer = setTimeout(nextCaption, 15000)
        return function cleanUp() {
          clearTimeout(sliderTimer)
          clearTimeout(captionTimer)
        }
    })

    return (
        <div className='hero' >
            { slides.map( (slide, index) => {
                return(
                    <div
                      // yes we are using index as the key
                      // the list is static, not computed and never reorder or filtered 
                      key={index} 
                      className={current === index ? 'hero__slide--active' : 'hero__slide'} >
                        { current === index && <img src={slide} alt="Love Thy Neighbor Homeless" className="hero__image" />}
                    </div>
                )
            })}
            { captions.map( (caption, index) => {
              return (
                <div
                  key={index}
                  className={
                    currentCaption === index
                      ? "hero__caption--active"
                      : "hero__caption"
                  }
                >
                  {currentCaption === index && (
                    <h6 className="hero__caption--text">{caption}</h6>
                  )}
                </div>
              )
            })}
        </div>
    )
}

export default HeroSlider
