import React, {useState, useEffect} from 'react'

import convo1 from '../assets/convo1.jpg'
import supplies from '../assets/suppliesLTN.jpg'
import crewLTN from '../assets/crewLTN.jpg'
import walkingUp from '../assets/walkingUp.jpg'

const HeroSlider = () => {
    const [current, setCurrent] = useState(0)
    const slides = [supplies, convo1, crewLTN, walkingUp]
    
    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1 )
    }
    
    useEffect(()=> {
        let sliderTimer = setTimeout(nextSlide, 10000)
        return function cleanUp() {
          clearTimeout(sliderTimer)
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
        </div>
    )
}

export default HeroSlider
