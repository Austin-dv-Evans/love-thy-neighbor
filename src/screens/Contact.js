import axios from "axios"
import React, { useState } from "react"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [info, setInfo] = useState("")
  const [subscribe, setSubscribe] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      `Thank you! ${name} Love Thy Neighbor will respond as soon as possible! Have a great day!`
    )
    console.log(name, email, info, subscribe)
    axios.post(
      "https://sheet.best/api/sheets/03bc00cd-7cc2-4425-ac2c-5d684f1fcc39",
      { name, email, info, subscribe }
    )
    setName("")
    setEmail("")
    setInfo("")
    setSubscribe("")
  }

  return (
    <div className="book__section">
      <div className="book__form">
        <h1 className="book__form--heading">Contact Love Thy Neighbor</h1>
        <form action="#" className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              id="name"
              className="form__input"
              required
              name="name"
            />
          </div>
          <div className="form__group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              id="email"
              className="form__input"
              required
              name="email"
            />
          </div>
          <div className="form__group">
            <textarea
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              cols="30"
              rows="10"
              placeholder="Your Message Here"
              id="message"
              className="form__input"
              name="message"
            ></textarea>
          </div>
          <div className="form__group--subscribe">
            <label className="form__checkbox--label">
              Subscribe to Newsletter
            </label>
            <input
              type="checkbox"
              value="subscribe"
              className="form__checkbox"
              onClick={() => setSubscribe("sign up for newsletter")}
            />
          </div>
          <div className="form__group">
            <input
              type="submit"
              value="Submit &rarr;"
              className="form__submit"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
