import axios from "axios"
import React, { useState } from "react"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [info, setInfo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(
      `Thank you! ${name} Love Thy Neighbor will respond as soon as possible! Have a great day!`
    )
    console.log(name, email, info)
    axios.post(
      "https://sheet.best/api/sheets/03bc00cd-7cc2-4425-ac2c-5d684f1fcc39",
      { name, email, info }
    )
    setName("")
    setEmail("")
    setInfo("")
  }

  return (
    <div className="book__section">
      <div className="book__form">
        <form action="#" className="form" onSubmit={handleSubmit}>
          <div>
            <h1 className="book__form--heading">
              Contact Love Thy Neighbor
            </h1>
          </div>
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
              placeholder="Any Additional Information You Would Like Us to Know (optional)"
              id="message"
              className="form__input"
              name="message"
            ></textarea>
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
