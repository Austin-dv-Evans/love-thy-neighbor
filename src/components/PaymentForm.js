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
}

const initialAddress = {
  line1: '',
  city: '',
  state: '',
  country: '',
  postal_code: '',
}

const PaymentForm = ({ amount }) => {
  const [paymentDetails, setPaymentDetails] = useState(initialPaymentState)
  const [address, setAddress] = useState(initialAddress)
  const [succeeded, setSucceeded] = useState(false)
  const [error, setError] = useState('')
  const [processing, setProcessing] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  // useEffect(() => {
  //   axios.create({
  //     baseURL: 'http://localhost:5000/lovethyneighbor-958d5/us-central1/createStripeCheckout/'
  //   })
  //     .post('/payments/create', {
  //       amount: amount * 100,
  //     })
  //     .then(({ data: clientSecret }) => {
  //       stripe.createPaymentMethod({
  //         type: 'card',
  //         card: cardElement,
  //         billing_details: {
  //           name: paymentDetails.name,
  //           address: {
  //             ...paymentDetails.address
  //           }
  //         } 
  //       })
  //     })
  //     .then(({ paymentMethod }) => {

  //     })
  //     .catch(err => setError(err))
  // }, [])

  const handleInfoFormChange = (event) => {
    const { name, value } = event.target

    setPaymentDetails({
      ...paymentDetails,
      [name]: value
    })
  }

  const handleAddressFormChange = (event) => {
    const { name, value } = event.target

    setAddress({
      ...address,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true)
    const cardElement = elements.getElement(CardElement)
    let secret = ''

    axios.create({
      baseURL: 'http://localhost:5000/lovethyneighbor-958d5/us-central1/createStripeCheckout/'
    })
      .post('/payments/create', {
        amount: amount * 100,
      })
      .then(({ data: clientSecret }) => {
        setClientSecret(clientSecret)
        secret = clientSecret
        const createPayMethod = stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
          billing_details: {
            name: paymentDetails.name,
            address: {
              ...address
            }
          }
        })
        console.log(typeof clientSecret)
        return createPayMethod
      })
      .then(({ paymentMethod }) => {
        console.log('p method', paymentMethod)
        
        return stripe.confirmCardPayment(secret, {
          receipt_email: paymentDetails.email,
          payment_method: paymentMethod.id
        }).then( payload  => {
          console.log(payload)
          if (error) {
            console.log(error)
            setError(`Payment Failed ${error.message}`)
            setProcessing(false)
          } else {
            setError(null)
            setProcessing(false)
            setSucceeded(true)
          }
          }).catch(error => console.log(error))
        })
        .catch(err => setError(err))
        
        // const paymentMethodRes = await stripe.createPaymentMethod({
    //   type: "card",
    //   card: cardElement,
    //   billing_details: {
      //     name: paymentDetails.name
      //   },
      // });
      
    // console.log(paymentMethodRes)
    // const payload = await stripe.confirmCardPayment(clientSecret, {
    //   receipt_email: paymentDetails.email,
    //   payment_method: {
      //     type: "card",
    //     card: cardElement,
    //     billing_details: {
    //       name: paymentDetails.name
    //   },}
    // })
    
    // console.log(payl
  }
  
  console.log(clientSecret)
  return (
    <div className="payment-form">
      <form className="payment-form__form" onSubmit={handleSubmit}>
        <input name="name" value={paymentDetails.name} placeholder="Name" onChange={handleInfoFormChange} />
        <input name="email" value={paymentDetails.email} placeholder="Email" onChange={handleInfoFormChange} />
        <input name="line1" value={address.line1} placeholder="Address" onChange={handleAddressFormChange} />
        <input name="city" value={address.city} placeholder="City" onChange={handleAddressFormChange} />
        <input name="state" value={address.state} placeholder="State" onChange={handleAddressFormChange} />
        <input name="country" value={address.country} placeholder="Country" onChange={handleAddressFormChange} />
        <input name="postal_code" value={address.postal_code} placeholder="Postal Code" onChange={handleAddressFormChange} />
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
        <h3>{error ? `Error ${error}` : ''}</h3>
      </form>
    </div>
  )
}

export default PaymentForm
