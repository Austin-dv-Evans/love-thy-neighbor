import React from 'react'
import Navbar from '../components/Navbar'
import Social from '../components/Social'
import blacklogo from "../assets/BlackLogo.png"
import { Facebook, Instagram } from "react-bootstrap-icons"
import fullName from '../assets/LTNWords.png'

const LandingPage = () => {
    return (
      <div className="landing__jumbotron">
        <Navbar />
          <img src={fullName} alt="full name logo" className="landing__nameLogo"/>
        <div className="landing__container">
          {/* <h1 className="landing__jumbotron-heading1">Love  Thy <br/> Neighbor</h1> */}
          <h6 className="landing__jumbotron-heading2">Helping Those In Need</h6><br/>
          <h6 className="landing__jumbotron-heading2">
            Together we can create hope <br/> where hope has been lost.
          </h6>
        </div>
        <Instagram className="social__icon--instagram" size={50} />
        <img src={blacklogo} alt="ltnLogo" className="social__icon--logo" />
        <Facebook className="social__icon--facebook" size={50} />
      </div>
    )
}

export default LandingPage
