import React from 'react'
import esters from '../assets/esters2.png'
import allStars from '../assets/AllStarsAFE.png'
import bandits from '../assets/DenverBandits.png'
import LaMuerte from '../assets/LaMuerteFootball.jpeg'
import saucyChops from '../assets/saucyChops.webp'
import threeAm from '../assets/3am.jpg'

const OurPartners = () => {
  return (
    <div className="ourPartners">
      <div className="ourPartners__container">
      <h1 className="ourPartners__heading">
        Our Partners
      </h1>
      <img src={esters} alt="" className="ourPartners__logo logo--1"/>
      <img src={allStars} alt="" className="ourPartners__logo logo--2"/>
      <img src={saucyChops} alt="" className="ourPartners__logo logo--3"/>
      <img src={LaMuerte} alt="" className="ourPartners__logo logo--4"/>
      <img src={bandits} alt="" className="ourPartners__logo logo--5"/>
      <img src={threeAm} alt="" className="ourPartners__logo logo--6"/>
    </div>
    </div>
    
  )
}

export default OurPartners
