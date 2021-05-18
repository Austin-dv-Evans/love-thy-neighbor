import React, { useState, useEffect } from 'react'
import logo from '../assets/whiteLogoRedCross.png'
// import BlackLogo from "../assets/BlackLogo.png"


import { Link } from 'react-router-dom'
import FabDonate from './FabDonate'

const NavbarMain = () => {

  let [toggle, setToggle] = useState(false)
  const openMenu = () => {
    setToggle((toggle) => !toggle)
  }
  const closeMenu = () => {
    setToggle(false)
  }

  let path = window.location.pathname

  // useEffect(() => {
  //   console.log(window.location.pathname)
  // }, [path])

  return (
    <>
      <nav className="nav">
        {path !== '/donate' &&
          <FabDonate
            closeMenu={closeMenu}
          />
        }
          
        <a href="/">
          <img src={logo} alt="ltnLogo" className="nav__navbar--brand" />
        </a>
        <div className="nav__navbar">
          <div className="nav__menu--main">
            <Link to="/" className="nav__navbar--link">
              Home
            </Link>
            <Link to="/about" className="nav__navbar--link">
              About
            </Link>
            <Link to="/findus" className="nav__navbar--link">
              Find Us
            </Link>
            <Link to="/contact" className="nav__navbar--link">
              Contact
            </Link>
          </div>
          <button className="nav__menuButton" onClick={() => openMenu()}>
            lll
          </button>
        </div>
      </nav>
      <div className={toggle ? "nav__menu--mobile" : "nav__menu--hidden"}>
        <Link to="/" className="nav__navbar--link" onClick={() => openMenu()}>
          Home
        </Link>
        <Link
          to="/about"
          className="nav__navbar--link"
          onClick={() => openMenu()}
        >
          About
        </Link>
        <Link
          to="/findus"
          className="nav__navbar--link"
          onClick={() => openMenu()}
        >
          Find Us
        </Link>
        <Link
          to="/contact"
          className="nav__navbar--link"
          onClick={() => openMenu()}
        >
          Contact
        </Link>
      </div>
    </>
  )
}

export default NavbarMain

