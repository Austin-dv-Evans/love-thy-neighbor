import React, { useState } from 'react'
import logo from '../assets/ltnLogo.jpg'

const NavbarMain = () => {

  let [toggle, setToggle] = useState(true)

  const openMenu = () => {
    setToggle(!toggle)
    console.log(toggle)
  }

  return (
    <nav className="nav">
      <a href="#home">
        <img src={logo} alt="ltnLogo" className="nav__navbar--brand" />
      </a>
      <div className="nav__navbar">
        {/* {!toggle && ( */}
        <div className={toggle ? "nav__menu--true-hidden" : "nav__menu--false-displayed"}>
          <a
            href="#about"
            className="nav__navbar--link"
            onClick={() => openMenu()}
          >
            About
          </a>
          <a
            href="#about"
            className="nav__navbar--link"
            onClick={() => openMenu()}
          >
            Donate
          </a>
          <a
            href="#about"
            className="nav__navbar--link"
            onClick={() => openMenu()}
          >
            Shop
          </a>
          <a
            href="#about"
            className="nav__navbar--link"
            onClick={() => openMenu()}
          >
            Contact
          </a>
        </div>
        {/* // )} */}
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

