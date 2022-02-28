import axios from 'axios'
import React from 'react'
import './CartCss.css'
const ProductCard = ({data, addToCart}) => {

  return (
    <div className='product-card'>
      <h3>{data.product_name}</h3>
      <p>{data.product_description}</p>
      <button id='addToCart' onClick={() => addToCart(data.product_id)}>{data.product_name}</button>


    </div>
  )
}

export default ProductCard