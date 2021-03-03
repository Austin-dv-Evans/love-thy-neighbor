import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import socks from '../assets/ltnHomelessPage.jpg'
import Button from '../components/Button'


const LandingPage = () => {
    return (
        <div>
            <Jumbotron fluid className="landing__jumbotron" style={{ backgroundImage: `url(${socks})`, backgroundSize: 'cover'}}>
                <Container className="landing__container">
                    <h1 className='landing__jumbotron-heading1'>Love Thy Neighbor</h1>
                    <h6 className='landing__jumbotron-heading2'>
                    Helping Those In Need
                    </h6>
                    <h6 className='landing__jumbotron-heading2'>
                    Together we can create hope where hope has been lost
                    </h6>
                    <Button />
                </Container>
            </Jumbotron>
        </div>
    )
}

export default LandingPage
