import React from 'react'
import { Navbar, Nav  } from 'react-bootstrap'
import logo from '../assets/ltnLogo.jpg'

const NavbarMain = () => {
    return (
        <Navbar bg="transparent" variant="dark" fixed="top" className="">
            <Navbar.Brand href="#home" className='nav__navbar--brand'>
            <img
                alt="socks"
                src= {logo}
                width="80"
                height="60"
                className="d-inline-block align-top"
            />
            </Navbar.Brand>
            <Nav className="ml-auto nav__navbar--links">
                <Nav.Link className="nav__navbar--each-link" href="#home">Socks</Nav.Link>
                <Nav.Link className="nav__navbar--each-link" href="#about">About</Nav.Link>
                <Nav.Link className="nav__navbar--each-link" href="#contact">Contact</Nav.Link>
                <Nav.Link className="nav__navbar--each-link" href="#Donate">Donate</Nav.Link>
                <Nav.Link className="nav__navbar--each-link" href="#store">Store</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavbarMain
