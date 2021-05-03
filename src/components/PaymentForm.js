import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { 
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js'


const PaymentForm = ({ amount }) => {
  const [paymentDetails, setPaymentDetails] = useState({})
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState('')
  const [processing, setProcessing] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  console.log(amount, 'payment form amount')
  
  useEffect(() => {
    axios.create({
      baseURL: 'http://localhost:5000/lovethyneighbor-958d5/us-central1/createStripeCheckout'
    }).post('/payments/create', {
      amount: amount * 100
    }).then(({ data: clientSecret }) => {
      setClientSecret(clientSecret)
    }).catch(err => console.log(err))

    // fetch('http://localhost:5000/lovethyneighbor-958d5/us-central1/createStripeCheckout', {
    //   method: "POST",
    //   headers: {
    //     "Access-Control-Request-Method": "POST",
    //     "Content-type": "application/json"
    //   },
    //   body: JSON.stringify({ amount })
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     setClientSecret(data.clientSecret)
    //   })

  },[])

  const handleInfoFormChange = (event) => {
    const { name, value } = event.target

    setPaymentDetails({
      ...paymentDetails,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const payload = stripe.confirmCardPayment(clientSecret,{
      payment_method: {
        card: elements.getElement(CardElement)
      }
    })
  }

  return (
    <div className="payment-form">
      <form className="payment-form__form">
        <input name="name" value={paymentDetails.name} placeholder="Name" onChange={handleInfoFormChange}/>
        <input name="email" value={paymentDetails.email} placeholder="Email" onChange={handleInfoFormChange}/>
        <input name="address" value={paymentDetails.address} placeholder="Address" onChange={handleInfoFormChange}/>
        <input name="city" value={paymentDetails.city} placeholder="City" onChange={handleInfoFormChange}/>
        <input name="state" value={paymentDetails.state} placeholder="State" onChange={handleInfoFormChange}/>
        <input name="zip" value={paymentDetails.zip} placeholder="Postal Code" onChange={handleInfoFormChange}/>
      </form>
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
      <button className="payment-form__button"><span>{processing ? <span> processing </span> : 'Pay Now' }</span></button>
    </div>
  )
}

export default PaymentForm
