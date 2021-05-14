import React, {useState} from 'react'
import footerLogo from '../assets/blackWhiteCross.png'
import { Facebook, Instagram } from "react-bootstrap-icons"
import axios from 'axios'

const FooterNew = () => {

  const [toggle, setToggle] = useState(true)

  const openSubscribeForm = () => {
    setToggle((toggle) => !toggle)
  }

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      `God Bless ${name}, Be on the lookout for Love Thy Neighbor's occasional newsletter!`
    )
    console.log(name, email)
    axios.post(
      "https://sheet.best/api/sheets/03bc00cd-7cc2-4425-ac2c-5d684f1fcc39",
      { name, email }
    )
    setName("")
    setEmail("")

  }

  return (
    <>
      <div className={toggle ? "footerNew__formContainer--hidden" : "footerNew__formContainer"}>
        <form action="#" className="footerNew__form" onSubmit={handleSubmit}>
          <div className="footerNew__formGroup">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              id="name"
              className="footerNew__formInput"
              required
              name="name"
            />
          </div>
          <div className="footerNew__formGroup">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="email"
              className="footerNew__formInput"
              required
              name="email"
            />
          </div>
          <div className="footerNew__formGroup">
            <input
              type="submit"
              value="Submit &rarr;"
              className="footerNew__formSubmit"
            />
          </div>
        </form>
      </div>

      <div className="footerNew">
        <div className="footerNew__subscribe--container"></div>
        <button
          className="footerNew__subscribeBtn"
          onClick={() => openSubscribeForm()}
        >
          Subscribe
        </button>
        <a
          href="https://www.facebook.com/ltn.socks/"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook className="footerNew__icon--facebook" size={60} />
        </a>
        <img
          src={footerLogo}
          alt="Love Thy Neighbor Logo"
          className="footerNew__centerLogo"
        />
        <a
          href="https://www.instagram.com/lovethyneighbor.socks/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram className="footerNew__icon--instagram" size={60} />
        </a>
      </div>
    </>
  )
}

export default FooterNew
