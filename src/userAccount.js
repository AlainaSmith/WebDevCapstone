import React from "react";
import Login from "./Login";
import Register from "./Register";
import Welcome from "./Welcome";
import {FaUserCircle} from 'react-icons/fa'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";
import './userAccount.css'

const UserAccount = () => {

    return(
        <div>
             <div className='pinkHeader'>
   <h2>Sign up or Login</h2>
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

<div className='infoForm'>
  <h3>Login or Create an account to sign up for classes, redeem rewards, keep track of purchases and where your proceeds will go!</h3>
  </div>

<div id='placement' className="register">
<Register />
<Login />
</div>
        </div>
        
    )
}

export default UserAccount