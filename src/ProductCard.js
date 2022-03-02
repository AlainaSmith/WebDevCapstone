import axios from 'axios'
import React from 'react'
import './CartCss.css'
const ProductCard = ({data, addToCart}) => {

  return (
    <div className='product-card'>
      
    
      <button id='addToCart' onClick={() => addToCart(data.product_id)}>Add To Cart</button>


    </div>
  )
}

export default ProductCard