import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SmallWalnutBowl from './SmallWalnutBowl'
import ProductCard from './ProductCard'
import './SmallWalnutBowl'

const Products = ({update, setUpdate}) => {
  const [data, setData] = useState([])

  const addToCart = (id) => {
    let object = {
      user_ID: 1,
      product_ID: id
    }

    axios.post('http://localhost:3500/api/addToCart', object)
    .then((res) => {
      console.log(res.data)
      // setUpdate(++update)
      alert("Bowl Added To Cart")
    })
  }

  useEffect(() => {
    axios.get('http://localhost:3500/api/SmallWalnutBowl')   //I change this endpoint to reflect what item I want displayed on the products page.
    .then((res) => {
      console.log(res.data)
      setData(res.data)
    })
  }, [])
  
  return (
    <div className='page-container'>
    
      {data.map((element, index) => {
        return <ProductCard data={element} key={index} addToCart={addToCart}/>
      }) }

    </div>

  )
}

export default Products