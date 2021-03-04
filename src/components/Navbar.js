import React, { useState } from 'react'
import logo from '../assets/ltnLogo.jpg'

const NavbarMain = () => {

  let [toggle, setToggle] = useState(true)

  const openMenu = () => {
    setToggle(!toggle)
  }

  return (
    <nav className="nav">
      <a href="#home">
        <img src={logo} alt="ltnLogo" className="nav__navbar--brand" />
      </a>
      <div className="nav__navbar">
        {toggle && <button onClick={() => openMenu()} className="nav__menuButton">Menu</button>}
        {!toggle && (
          <div className="nav__menu">
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
        )}
      </div>
    </nav>
  )
}

export default NavbarMain

