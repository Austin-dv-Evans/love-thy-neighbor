import React from 'react'
import { Jumbotron, Container, Button } from 'react-bootstrap'
import socks from '../assets/ltnHomelessPage.jpg'


const LandingPage = () => {
    return (
        <div>
            <Jumbotron fluid className="landing__jumbotron" style={{ backgroundImage: `url(${socks})`, backgroundSize: 'cover'}}>
                <Container className="landing__container">
                    <h1 className='landing__jumbotron-heading1'>Love Thy Neighbor</h1>
                    <h6 className='landing__jumbotron-heading2'>
                    Together we can create hope where hope has been lost
                    </h6>
                    <Button className='landing__jumbotron-donateButton' variant="warning">Donate Today</Button>
                </Container>
                
                
            </Jumbotron>
        </div>
    )
}

export default LandingPage
