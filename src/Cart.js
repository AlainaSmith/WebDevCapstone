import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import './Homepage.css'
import {FaUserCircle} from 'react-icons/fa'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Welcome from "./Welcome";
import axios from 'axios'
import ProductLoop from './productLoop'
import './Cart.css'


// import ItemCard from './ItemCard'

const Cart = ({update}) => {
const userfirstName = window.localStorage.getItem('userfirstName')
console.log(userfirstName)
  const [data, setData] = useState([])

  let currentUser = 1

  const getData = () => {
      axios.get(`http://localhost:3500/api/userCart/${currentUser}`)
      .then((res) => {
          setData(res.data)
      })
  }

  const getFromCart = (id) => {
    let object = {
      user_ID: 1,
      product_ID: id
    }
    axios.get('http://localhost:3500/api/getFromCart', object)
    .then((res) => {
      console.log(res.data)
    })
  }

  const removeItem = (product_id) => {
      axios.delete(`http://localhost:3500/api/userCart/${product_id}`)
      .then((res) => {
          getData()
      })
  }

  useEffect(() => {
      getData()
  }, [update])


    useEffect(() => {
    getFromCart()
}, [update])

return(
   <div className = 'backgroundContainerCart'> 
        <div className='backgroundPhoto'>
            <img id="back" height="740px" width="900px" src={require('./photos/back.jpeg')} />
        </div>
        <div id='fixed'>
        <div className='greyHeader'>
        <div id='options'>
        <a id='woodbowl' href="#woodbowlLocator">Wood bowls</a>
        <a id='jewelry' href="#jewelryLocator">Jewelry</a>
        <a id='herbalTinctures' href="#tinctures">Herbal Tinctures</a>
        <a id='classesId' href="#classes">Classes</a>
        <NavLink id='userAccountIcon' exact to='/userAccount'>
        <FaUserCircle/>
        </NavLink>
        <NavLink id='cart' exact to='/cart'>
        <Badge color="secondary">
        <ShoppingCartIcon />{" "}
        </Badge>
        </NavLink>
</div>
</div>

<NavLink exact to='/Homepage2'>
  <img id="logoUser" height="200px" width="200px" src={require('./photos/logo.png')} />
</NavLink>
</div>

<div className='cartStuff'>
<h2 id='myCart'>{userfirstName}'s Cart</h2>
      {data.map((element, index) => {
        return <ProductLoop data={element} key={index} removeItem={removeItem}/>
      }) }
 
 </div>

       
        </div>
    )
}

export default Cart









// import ItemCard

// const Cart({udpate})
// const [data, setData] = useState([])
// let currentUser = 1

// const getData = () => {
//   axios.get(`http://localhost:3500/api/userCart/${currentUser}`)
//   .then((res) => {
//     // console.log(res.data)
//     setData(res.data)
//   })
// }

// const removeItem = (id) => {
// axios.delete(`http://localhost:3500/api/userCart/${id}`)
// // console.log(res.data)
// getData()
// )
// }

// useEffect(() => {
//   getData()
// }, [])

// return(
//   <div className='page-container'>
//     <h2>My Cart</h2>
//     {data.map((element, index) => {
//       return <ItemCard data={element} key={index} />
//     })}
//   </div>
// )




 {/* <aside className='block col-1'>
            <h2> cart items</h2>
            <div>{cartItems.length === 0 && <div>Cart is empty</div>}</div>
        {cartItems.map((item)=>(
            <div key={item.id} className='row'>
                <div>{item.name}</div>
                <div>
                    <button onClick={()=>onAdd(item)} className="add">+</button>
                    <button onClick={()=>onRemove(item)} className="remove">-</button>
                </div>
            <div>
            {item.qty} x ${item.price.toFixed(2)}
            </div>
            </div>
        ))}
        {cartItems.length !== 0 && (
            <>
            <hr></hr>
            <div>
                <div>Items Price</div>
                <div>{itemsPrice.toFixed(2)}</div>
            </div>
            </>
        )}
        </aside> */}
           