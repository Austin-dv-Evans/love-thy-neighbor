import React from 'react'
import blacklogo from "../assets/BlackLogo.png"
import { Facebook, Instagram } from "react-bootstrap-icons"

const Social = () => {
  return (
    <div className="social">
      <Instagram className="social__icon--instagram" size={50} />
      <img src={blacklogo} alt="ltnLogo" className="social__icon--logo" />
      <Facebook className="social__icon--facebook" size={50} />
    </div>
  )
}

export default Social
