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
<h2>Wood Bowl Turning</h2>
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
<img id="logo" height="300px" width="300px" src={require('./photos/logo2.png')} />
</NavLink>


<div id='dates'>

<p>Dates & Times</p>
<form className='classBooking'>
March 4, 2022<input type = "radio" name = "phone" value ="bowl"/>
March 21, 2022<input type = "radio" name = "phone" value ="bowl"/>
March 4, 2022<input type = "radio" name = "phone" value ="bowl"/>
March 21, 2022<input type = "radio" name = "phone" value ="bowl"/>
<button>Add to Cart</button>
</form>
</div>



        </div>
    )
}

export default WoodbowlTurning

