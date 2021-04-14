import React, { useState } from 'react'
import fullName from "../assets/LTNWords.png"
import axios from 'axios'
import Social from './Social'
import { Facebook, Instagram } from "react-bootstrap-icons"

const Footer = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      `Thank you! ${name} Love Thy Neighbor will respond as soon as possible! Have a great day!`
    )
    console.log(name, email)
    axios.post(
      "https://sheet.best/api/sheets/03bc00cd-7cc2-4425-ac2c-5d684f1fcc39",
      { name, email}
    )
    setName("")
    setEmail("")
  }


  return (
    <div className="footer">
      <div className="footer__subscribe--container">
        <h4 className="footer__subscribe--header">
          Subscribe to the LTN Newsletter
        </h4>
        <form action="#" className="footer__form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            id="name"
            className="footer__form--input"
            required
            name="name"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            id="email"
            className="footer__form--input"
            required
            name="email"
          />
          <input
            type="submit"
            value="Subscribe"
            className="footer__form--submit"
          />
        </form>
      </div>
      <img
        src={fullName}
        alt="Love Thy Neighbor logo"
        className="footer__logo"
      />
      <h3 className="footer__text">
        Copyright<br></br> Love Thy Neighbor <br></br>2021
      </h3>
      <a
        href="https://www.facebook.com/ltn.socks/"
        target="_blank"
        rel="noreferrer"
      >
        <Facebook className="footer__icon--facebook" size={80} />
      </a>
      <a
        href="https://www.instagram.com/lovethyneighbor.socks/"
        target="_blank"
        rel="noreferrer"
      >
      <Instagram className="footer__icon--instagram" size={80} />
      </a>
    </div>
  )
}

export default Footer
