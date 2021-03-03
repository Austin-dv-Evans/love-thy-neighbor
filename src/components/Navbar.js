import React from 'react'
import { Navbar, Nav  } from 'react-bootstrap'
import logo from '../assets/ltnLogo.jpg'

const NavbarMain = () => {
    return (
        <nav className="nav">
          <img src={logo} alt="ltnLogo" className="nav__navbar--brand"/>
          <div className="nav__navbar">
            <a href="#about" className="nav__navbar--link">About</a>
            <a href="#about" className="nav__navbar--link">Donate</a>
            <a href="#about" className="nav__navbar--link">Shop</a>
            <a href="#about" className="nav__navbar--link">Contact</a>
          </div>
        </nav>
    )
}

export default NavbarMain


{/* <Navbar >
            <Navbar.Brand href="#home" className='nav__navbar--brand'>
            <img
                alt="socks"
                src= {logo}
                width="100"
                height="100"
            />
            </Navbar.Brand>
            <Nav className="mr-auto nav__navbar--links">
                <Nav.Link className="nav__navbar--each-link" href="#Donate">Donate</Nav.Link>
                <Nav.Link className="nav__navbar--each-link" href="#home">Socks</Nav.Link>
                <Nav.Link className="nav__navbar--each-link" href="#about">About</Nav.Link>
                <Nav.Link className="nav__navbar--each-link" href="#store">Store</Nav.Link>
                <Nav.Link className="nav__navbar--each-link" href="#contact">Contact</Nav.Link>
            </Nav>
        </Navbar> */}