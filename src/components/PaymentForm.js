import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'


const PaymentForm = () => {
  return (
    <div>
      <CardElement
        options={{
          style: {
            base: {
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
