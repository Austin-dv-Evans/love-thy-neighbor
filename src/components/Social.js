import React from 'react'
import blacklogo from "../assets/BlackLogo.png"
import { Facebook, Instagram } from "react-bootstrap-icons"

const Social = () => {
  return (
    <>
      <a
        href="https://www.instagram.com/lovethyneighbor.socks/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram className="social__icon--instagram" size={50} />
      </a>
      <a href="/">
        <img src={blacklogo} alt="ltnLogo" className="social__icon--logo" />
      </a>
      <a
        href="https://www.facebook.com/ltn.socks/"
        target="_blank"
        rel="noreferrer"
      >
        <Facebook className="social__icon--facebook" size={50} />
      </a>
    </>
  )
}

export default Social
