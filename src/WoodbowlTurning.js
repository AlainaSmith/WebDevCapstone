import React, {useEffect} from "react";
import {FaUserCircle} from 'react-icons/fa'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";
import './WoodbowlTurning.css'

const WoodbowlTurning = () => {
const userfirstName = window.localStorage.getItem('userfirstName')
 console.log(userfirstName)

return(
<div>
<div className='pinkHeader'>

<NavLink id='userHeader' exact to='/Welcome'>

<p className='user'>Hi, {userfirstName}!</p>

</NavLink>

<div className='wrapper'>
<h4 id='sale' className='marquee'>Graduation Sale: 25% all bowls & classes!</h4>
</div>
<div className='greyHeader'>
<div id='options'>
<a id='one' href="#woodBowl">Wood bowls / Jewelry</a>
<a id='two' href="#tinctures">Herbal Tinctures</a>
<a id='three' href="#classes">Classes</a>
<NavLink id='userAccountIcon' exact to='/userAccount'>
<FaUserCircle/>
</NavLink>
<NavLink id='cart' exact to='/cart'>
<Badge color="secondary">
<ShoppingCartIcon />{" "}
</Badge>
</NavLink>
<NavLink exact to='/Classes'>
Classes Demo
</NavLink>
</div>
</div>
</div> 

<NavLink exact to='/Homepage'>
<img id="logo" height="300px" width="300px" src={require('./photos/logo2.png')} />
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


        </div>
    )
}

export default WoodbowlTurning

