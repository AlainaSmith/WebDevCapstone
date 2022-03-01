import React, {useEffect} from "react";
import Cart from "./Cart";
// import ItemCard from "./ItemCard";


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
            <h2>{data.product_name}</h2>
            <h2>{data.product_description}</h2>
            <button onClick={() => removeItem(data.cart_id)}>Remove</button>
        </div>
    )
}

export default ProductLoop



{/* <h2>Products Available</h2>
      {data.map((element, index) => {
        return <Cart data={element} key={index} getFromCart={getFromCart}/>
      }) } */}
