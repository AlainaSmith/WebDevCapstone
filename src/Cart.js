import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Header from "./Header";
import Subscribe from "./Subscribe";

const Cart = () => {

    return(
        <div>
       <Header />
        <Login />
        <Register />
        <Subscribe />
           
        </div>
    )
}

export default Cart