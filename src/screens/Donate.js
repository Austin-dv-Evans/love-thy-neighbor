import React, { useState } from 'react'
import PaymentForm from '../components/PaymentForm'
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const PUBLIC_KEY = process.env.REACT_APP_KEY

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const Donate = () => {

  const [paymentOpen, setPaymentOpen] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState(0)

  const options = [10, 25, 50, 75, 100]
  
  console.log(selectedAmount)
  return (
    <div className="donate">
      <h1 className="donate__heading">Donate Today</h1>
      <div className="donate__pageContainer">
        <div className="donate__donationSelections">
          <h3 className="donate__consider">Donation Amount:</h3>
          <div className="donate__option">
            <figure
              className={
                selectedAmount === 10
                  ? "donate__option-active"
                  : "donate__option-1"
              }
              onClick={() => setSelectedAmount(10)}
            >cc
              $10
            </figure>
            <figure
              className={
                selectedAmount === 25
                  ? "donate__option-active"
                  : "donate__option-1"
              }
              onClick={() => setSelectedAmount(25)}
            >
              $25
            </figure>
            <figure
              className={
                selectedAmount === 50
                  ? "donate__option-active"
                  : "donate__option-1"
              }
              onClick={() => setSelectedAmount(50)}
            >
              $50
            </figure>
            <figure
              className={
                selectedAmount === 75
                  ? "donate__option-active"
                  : "donate__option-1"
              }
              onClick={() => setSelectedAmount(75)}
            >
              $75
            </figure>
            <figure
              className={
                selectedAmount === 100
                  ? "donate__option-active"
                  : "donate__option-1"
              }
              onClick={() => setSelectedAmount(100)}
            >
              $100
            </figure>
            <figure
              className={

                selectedAmount === 0 
                || selectedAmount === 10 
                || selectedAmount === 25 
                || selectedAmount === 50 
                || selectedAmount === 75 
                || selectedAmount === 100

                  ? "donate__option-1"
                  : "donate__option-active"
              }
            >
              <label htmlFor="custom"></label>
              <input
                type="number"
                name="custom"
                id="custom"
                min="0"
                onChange={(e) => setSelectedAmount(e.target.value)}
                onClick={() => console.log(selectedAmount)}
              />
            </figure>
          </div>
          <div className="donate__option-2">
            <div className="coverFeesCheck">
              <label htmlFor="coverFees" id="coverFeesLabel">
                I would like to cover the 3% transaction fees so Love Thy Neighbor recieves my
                amount in full.
              </label>
              <input type="checkbox" name="coverFees" id="coverFees" />
            </div>
            <div className="leaveNote">
              <textarea
                rows="2"
                cols="40"
                placeholder="Leave A Note (Optional)"
                name="leaveNote"
                id="leaveNote"
              ></textarea>
            </div>
          </div>
          <button
            className="donate__button"
            onClick={() => setPaymentOpen(!paymentOpen)}
          >
            Donate
          </button>
        </div>

        <div className="donate__donationInfo">
          <h3 className="donate__subheading">Your IMPACT:</h3>
          <div className="donate__donationInfo-details">
            <p className="donate__text">
              Every donation made goes towards serving the homeless community
              with food, necessities and companionship.
            </p>
            <p className="donate__text">
              Every donation over $25 recieves an LtN Bracelet!
            </p>
            <p className="donate__text">
              Every donation over $40 recieves a pair of LtN socks!
            </p>
          </div>
        </div>

        {paymentOpen && (
          <Elements stripe={stripeTestPromise}>
            <div className="customModal">
              <div className="customModal__heading">
                <button
                  className="customModal__close"
                  onClick={() => setPaymentOpen(!paymentOpen)}
                >
                  X
                </button>
                <h1 className="customModal__heading--text">
                  Thank You For Donating Please Select Payment Method Below
                </h1>
              </div>
              <div className="customModal__body">
                <h2>Credit Card Info</h2>
                <PaymentForm amount={ selectedAmount } />
              </div>
            </div>
          </Elements>
        )}
      </div>
    </div>
  )
}

export default Donate
