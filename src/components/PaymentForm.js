import React, { useState, useEffect } from 'react'
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
  
  useEffect(() => {
    window.fetch('firebasefunc', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ amount })
    })
      .then(response => response.json())
      .then(data => {
        setClientSecret(data.clientSecret)
      })

  },[])

  const handleInfoFormChange = (event) => {
    const { name, value } = event.target

    setPaymentDetails({
      ...paymentDetails,
      [name]: value
    })
  }

  return (
    <div className="payment-form">
      <label>Name:</label>
      <input name="name" value={paymentDetails.name} placeholder="Name" onChange={handleInfoFormChange}/>
      <label>Email:</label>
      <input name="email" value={paymentDetails.email} placeholder="loveThyNeighbor@helping.com" onChange={handleInfoFormChange}/>
      <label>Address:</label>
      <input name="address" value={paymentDetails.address} placeholder="1234 cadbury way #4" onChange={handleInfoFormChange}/>
      <label>City:</label>
      <input name="city" value={paymentDetails.city} placeholder="Denver" onChange={handleInfoFormChange}/>
      <label>State:</label>
      <input name="state" value={paymentDetails.state} placeholder="CO" onChange={handleInfoFormChange}/>
      <label>Zip:</label>
      <input name="zip" value={paymentDetails.zip} placeholder="80200" onChange={handleInfoFormChange}/>
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
    </div>
  )
}

export default PaymentForm
