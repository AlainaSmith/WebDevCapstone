import React from "react";
import { NavLink } from "react-router-dom";
import './Homepage.css'
import {FaUserCircle} from 'react-icons/fa'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Welcome from "./Welcome";

const Cart = (props) => {
    // const {cartItems, onAdd, onRemove} = props
    // const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    // const totalPrice = itemsPrice
    return(
        <div>
   
   <div className='pinkHeader'>
   <h2>Cart</h2>
  <div className='greyHeader'>
    <div id='options'>
      <a id='one' href="#woodBowl">Wood bowls / Jewelry</a>
      <a id='two' href="#tinctures">Herbal Tinctures</a>
      <a id='three' href="#classes">Classes</a>
      <NavLink exact to='/userAccount'>
      <FaUserCircle/>
      </NavLink>
      <NavLink exact to='/cart'>
        <Badge color="secondary">
          <ShoppingCartIcon />{" "}
        </Badge>
      </NavLink>
    </div>
   </div>
  </div> 

<NavLink exact to='/Homepage'>
<img id="logo" height="200px" width="200px" src={require('./photos/logo.png')} />
</NavLink>


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