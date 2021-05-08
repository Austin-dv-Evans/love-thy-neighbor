import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'

const initialPaymentState = {
  name: '',
  email: '',
  address: {
    line1: '',
    city: '',
    state: '',
    country: '',
    postal_code: '',}
}

const PaymentForm = ({ amount }) => {
  const [nameOnCard, setNameOnCard] = useState('')
  const [paymentDetails, setPaymentDetails] = useState(initialPaymentState)
  const [shippingDetails, setShippingDetails] = useState({})  
  const [shippingDifferent, setShippingDifferent] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState('')
  const [processing, setProcessing] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()
  const cardElement = elements.getElement(CardElement)

  useEffect(() => {
    axios.create({
      baseURL: 'http://localhost:5000/lovethyneighbor-958d5/us-central1/createStripeCheckout/'
    })
      .post('/payments/create', {
        amount: amount * 100,
      })
      .then(({ data: clientSecret }) => {
        stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
          billing_details: {
            name: paymentDetails.name,
            address: {
              ...paymentDetails.address
            }
          } 
        })
      })
      .then(({ paymentMethod }) => {

      })
      .catch(err => setError(err))
  }, [])

  const handleInfoFormChange = (event) => {
    const { name, value } = event.target

    setPaymentDetails({
      ...paymentDetails,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true)

    // const paymentMethodRes = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardElement,
    //   billing_details: {
    //     name: paymentDetails.name
    //   },
    // });

    // console.log(paymentMethodRes)
    const payload = await stripe.confirmCardPayment(clientSecret, {
      receipt_email: paymentDetails.email,
      payment_method: {
        type: "card",
        card: cardElement,
        billing_details: {
          name: paymentDetails.name
      },}
    })

    console.log(payload)

    if (payload.error) {
      console.log(payload.error)
      setError(`Payment Failed ${payload.error.message}`)
      setProcessing(false)
    }else{
      setError(null)
      setProcessing(false)
      setSucceeded(true)
    }
  }

  return (
    <div className="payment-form">
      <form className="payment-form__form"  onSubmit={handleSubmit}>
        <input name="name" value={paymentDetails.name} placeholder="Name" onChange={handleInfoFormChange} />
        <input name="email" value={paymentDetails.email} placeholder="Email" onChange={handleInfoFormChange} />
        <input name="address" value={paymentDetails.address.line1} placeholder="Address" onChange={handleInfoFormChange} />
        <input name="city" value={paymentDetails.address.city} placeholder="City" onChange={handleInfoFormChange} />
        <input name="state" value={paymentDetails.address.state} placeholder="State" onChange={handleInfoFormChange} />
        <input name="country" value={paymentDetails.address.country} placeholder="State" onChange={handleInfoFormChange} />
        <input name="zip" value={paymentDetails.address.postal_code} placeholder="Postal Code" onChange={handleInfoFormChange} />
        <CardElement
          options={{
            style: {
              base: {
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }} />
        <button
          className="payment-form__button"
          disabled={processing || disabled || processing}
        >
          <span>{processing ? <span> processing </span> : 'Pay Now'}</span>
        </button>
      </form>
    </div>
  )
}

export default PaymentForm
