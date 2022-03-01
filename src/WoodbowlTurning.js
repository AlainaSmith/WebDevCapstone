import React, {useEffect} from "react";
import {FaUserCircle} from 'react-icons/fa'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";
import './WoodbowlTurning.css'
import Products from "./Products";
import Booking from "./Booking";
import ProductClasses from "./ProductClasses";

const WoodbowlTurning = () => {
const userfirstName = window.localStorage.getItem('userfirstName')
 console.log(userfirstName)


return(

<div className = 'backgroundContainerWoodTurn'> 
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
</div>
</div>

<NavLink exact to='/Homepage2'>
  <img id="logoUser" height="200px" width="200px" src={require('./photos/logo.png')} />
</NavLink>
</div>

<NavLink id='userWood' exact to='/Welcome'>
<p className='userWoodBowl'>Hi, {userfirstName}!</p>

</NavLink>

<div id='dates'>
<p>Dates & Times</p>
<form className='classBooking'>
March 4, 2022<input className='radio'type = "radio" name = "phone" value ="bowl"/>
March 21, 2022<input className='radio' type = "radio" name = "phone" value ="bowl"/>
March 4, 2022<input className='radio' type = "radio" name = "phone" value ="bowl"/>
March 21, 2022<input className='radio' type = "radio" name = "phone" value ="bowl"/>
<button>Add to Cart</button>
</form>
</div>

<div className='description'>
<p>
Description: This is a great class to advance your skills to bowl turning. 
The course is designed for the beginner to intermediate turner who wants to get a good foundation in turning bowls. 
Proper tools, blank selection, chucking methods, and form will be covered. Students will leave with their own finished bowl.
</p>
Tuition: $80.00
<p>
What to bring:
</p>

<p>
Additional Notes:
</p>
</div>

{/* <Products /> */}
<ProductClasses />
        </div>
    )
}

export default WoodbowlTurning

