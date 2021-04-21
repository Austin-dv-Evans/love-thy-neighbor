import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'


const PaymentForm = () => {
  return (
    <div className="payment-form">
      <form>
        <label>Name</label>
        <input/>
        <label>Email</label>
        <input/>
        <label>Address</label>
        <input/>
        <label>City</label>
        <input/>
        <label>State</label>
        <input/>
        <label>Zip</label>
        <input/>
      </form>
      <CardElement
        options={{
          hidePostalCode: true,
          style: {
            base: {
              width: '100%',
              fontSize: '40px',
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
