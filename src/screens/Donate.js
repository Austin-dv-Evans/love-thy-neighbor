import React from 'react'
import PaymentForm from '../components/PaymentForm'

const Donate = () => {
  return (
    <div className="donate">
      <h1 className="donate__heading">Dontate Today</h1>
      <h3 className="donate__subheading">Your IMPACT:</h3>
      <p className="donate__text">
        Every donation made goes towards serving the homeless community with
        food, necessities and companionship.
      </p>
      <p className="donate__text">
        Every donation over $25 recieves an LtN Bracelet
      </p>
      <p className="donate__text">
        Every donation over $40 recieves a pair of LtN socks
      </p>
      <h3 className="donate__consider">Consider the Following Options</h3>
      <div className="donate__option">
        <figure className="donate__option-1">"Cup o' Sugar": $25</figure>
        <figure className="donate__option-1">"State Farm": $50</figure>
        <figure className="donate__option-1">"Mr. Rodgers": $100</figure>
        <figure className="donate__option-1">Custom Amount</figure>
      </div>

      <PaymentForm />
    </div>
  )
}

export default Donate
