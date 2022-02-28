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
            <div className = 'backgroundContainer' id='userAccountContainer'> 
        
        <div className='backgroundPhoto'>
            <img id="back" height="740px" width="900px" src={require('./photos/back.jpg')} />
         
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
    {/* <NavLink exact to='/Classes'>
            Classes Demo
    </NavLink> */}
</div>
</div>

<NavLink exact to='/Homepage2'>
  <img id="logoUser" height="200px" width="200px" src={require('./photos/logo.png')} />
</NavLink>
</div>


<div className='infoForm'>
  <h3>Login or Create an Account to:</h3>
    <p>Acquire rewards</p>
    <p>Sign up for classes</p>
    <p>Keep track of purchases</p>
    <p>See where your proceeds go!</p> 
    
  </div>

<div id='placement' className="register">
<Register />
<Login />
<p id='copyright'>Copyright © 2022, Hopes&Trees Collective</p>
</div>

</div>


{/* <div className='greenBar'></div> */}


</div> 

        
    )
}

export default UserAccount