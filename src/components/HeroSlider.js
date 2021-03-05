import React, {useState, useEffect} from 'react'
import LtnHomelessSign from '../assets/ltnHomelessPage.jpg'
import LtnSadSleepingFloor from '../assets/ltnSadSleepingFloor.jpg'
import LtnSocks from '../assets/ltnSocks.jpeg'
import Unsplash from '../assets/unsplash-homeless.jpg'

function HeroSlider() {
    const [current, setCurrent] = useState(0)
    const slides = new Array(LtnHomelessSign, LtnSadSleepingFloor, LtnSocks, Unsplash)
    
    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1 )
    }

    useEffect(()=> {
        setTimeout(nextSlide, 10000)
    }, [current])

    return (
        <div className='hero' >
            { slides.map( (slide, index) => {
                return(
                    <div className={current === index ? 'hero__slide--active' : 'hero__slide'} >
                        { current === index && <img src={slide} alt="Love Thy Neighbor Homeless" className="hero__image" />}
                    </div>
                )
            })}
        </div>
    )
}

export default HeroSlider
