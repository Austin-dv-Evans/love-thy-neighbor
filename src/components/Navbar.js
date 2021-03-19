import React, { useState } from 'react'
import logo from '../assets/ltnLogo.jpg'
import Button from './Button'

import { Link } from 'react-router-dom'

const NavbarMain = () => {

  let [toggle, setToggle] = useState(true)
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
          <Link to="/donate">
            <Button />
          </Link>
          <Link
            to="/"
            className="nav__navbar--link"
            onClick={() => openMenu()}
          >
            Home
          </Link>
          <Link
            to="/findus"
            className="nav__navbar--link"
            onClick={() => openMenu()}
          >
            Find Us
          </Link>
          <Link to="shop" className="nav__navbar--link"
              onClick={() => openMenu()}>
              Shop
          </Link>
          <Link
            to="/about"
            className="nav__navbar--link"
            onClick={() => openMenu()}
          >
            About
          </Link>
        </div>
        {toggle && (
          <button className="nav__menuButton" onClick={() => openMenu()}>
            lll
          </button>
        )}
      </div>
    </nav>
  )
}

export default NavbarMain

