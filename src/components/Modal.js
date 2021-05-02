import React from 'react'
import PaymentForm from './PaymentForm'

const Modal = ({ amount }) => {
  return (
    <div className="modal">
      <div className="modal__heading">
        <h1 className="modal__heading--text">
          Thank You For Donating Selet Options Below.
        </h1>
      </div>
      <div className="modal__body">
        <PaymentForm amount={amount} />
      </div>
    </div>
  )
}

export default Modal
