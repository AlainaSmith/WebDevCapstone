import React, {useEffect} from "react";
import Cart from "./Cart";
// import ItemCard from "./ItemCard";
import './productLoop.css'

const ProductLoop = ({data, removeItem}) => {

  // useEffect(() => {
  //   axios.get('http://localhost:3500/api/getFromCart')
  //   .then((res) => {
  //     console.log(res.data)
  //     setData(res.data)
  //   })
  // }, [])


    return(
        <div>
            <div id='productName'><p>{data.product_name}</p></div>
            <div id='productDescription'><p>{data.product_description}</p></div>
            <div id='productPrice'><p>{data.product_price}</p></div>
            <div id='productTotal'><p>{data.product_total}</p></div>
            <button id='removeButton' onClick={() => removeItem(data.cart_id)}>X</button>
        </div>
    )
}

export default ProductLoop



{/* <h2>Products Available</h2>
      {data.map((element, index) => {
        return <Cart data={element} key={index} getFromCart={getFromCart}/>
      }) } */}
