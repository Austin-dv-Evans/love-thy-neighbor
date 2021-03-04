import React, {useState, useEffect} from 'react'

function HeroSlider() {
    const [current, setCurrent] = useState(0)
    

    useEffect(()=> {

    }, [current])

    return (
        <div className='hero' >
            {}
        </div>
    )
}

export default HeroSlider
