import React from 'react'
import { Link } from 'react-router-dom'

const FabDonate = ({ closeMenu }) => {
  return (
    <div className="nav__donateTab">
      <Link to="/donate">
        <button
          className="button__donate menu-donate"
          onClick={() => closeMenu()}
        >
          Donate Now
        </button>
      </Link>
    </div>
    
  )
}

export default FabDonate
