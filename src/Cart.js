import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import Subscribe from "./Subscribe";

const Cart = (props) => {
    // const {cartItems, onAdd, onRemove} = props
    // const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0)
    // const totalPrice = itemsPrice
    return(
        <div>
       <Header />
     
      
        <Subscribe />

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

