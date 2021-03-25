import React, { useState } from "react"
import { shopItems } from "../assets/data"
import SmallProductItem from "../components/SmallProductItem"
import { Link } from 'react-router-dom'
const Shop = () => {
  const [cart, setCart] = useState([])

  const handleAddToCartClick = (item) => {
    setCart([...cart, item])
  }
  const cartTotal  = () => {
        const cartTotal = cart.reduce((acc, curr) => {
          return acc + curr.price
      }, 0)
      return cartTotal
  }
  return (
    <div className="shop__page">
        <h1>Welcome to the Shop</h1>
        <h1>Your Item Count is {cart.length}</h1>
        <h1>Your Cart Total is ${cart.length > 0 ? cartTotal() : '$0.00'}</h1>
        {Object.values(shopItems).map((values) => {
          return (
            <Link key={values.id} to={`/shop/${values.id}`}>
              <SmallProductItem
                key={values.id}
                product={values}
                addToCart={handleAddToCartClick}
              />
            </Link>
          )
        })}
      </div>
  )
}

export default Shop
