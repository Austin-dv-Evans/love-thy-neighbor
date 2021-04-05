import React from 'react'

function SmallProductItem({ product, addToCart }) {

    const handleClick = () => {
        addToCart(product)
    }

    return (
      <div className="product__item-container">
        <img
          className="product__item-image"
          alt={product.name}
          src="https://i0.wp.com/ltnsocks.com/wp-content/uploads/2020/04/mockup-c9c61486.jpg?fit=1000%2C1000&amp;ssl=1"
        />
        <h3 className="product__item-name">{product.name}</h3>
        <h3 className="product__item-price">${product.price}.00</h3>
        <button className="view-options" onClick={handleClick}>
          View Options
        </button>
      </div>
    )
}

export default SmallProductItem
