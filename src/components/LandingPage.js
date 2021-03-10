import React from 'react'
import Navbar from '../components/Navbar'

const LandingPage = () => {
    return (
        <div> 
            <div className="landing__jumbotron">
            <Navbar/>
                <div className="landing__container">
                    <h1 className='landing__jumbotron-heading1'>Love Thy Neighbor</h1>
                    <h6 className='landing__jumbotron-heading2'>
                    Helping Those In Need
                    </h6>
                    <h6 className='landing__jumbotron-heading2'>
                    Together we can create hope where hope has been lost
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
