import React, { useState } from 'react'
import logo from '../assets/ltnLogo.jpg'
// import Button from './Button'

import { Link } from 'react-router-dom'

const NavbarMain = () => {

  let [toggle, setToggle] = useState(false)
  const openMenu = () => {
    setToggle((toggle) => !toggle)
  }

  return (
    <nav className="nav">
      <a href="/">
        <img src={logo} alt="ltnLogo" className="nav__navbar--brand" />
      </a>
      <div className="nav__navbar">
        <div
          className={
            toggle ? "nav__menu--true-hidden" : "nav__menu--false-displayed"
          }
        >
          <Link to="/" className="nav__navbar--link" >
            Home
          </Link>
          <Link
            to="/about"
            className="nav__navbar--link"
            
          >
            About
          </Link>
          <Link
            to="/findus"
            className="nav__navbar--link"
            
          >
            Find Us
          </Link>
          <Link
            to="/contact"
            className="nav__navbar--link"
            
          >
            Contact
          </Link>
          <Link to="/donate">
            <button className="button__donate menu-donate">Donate Today</button>
          </Link>
        </div>
      
        <button className="nav__menuButton" onClick={() => openMenu()}>
          lll
        </button>
      
      </div>
    </nav>
  )
}

export default NavbarMain

