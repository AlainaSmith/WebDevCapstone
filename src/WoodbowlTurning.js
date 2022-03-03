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
            <img id="back" height="740px" width="900px" src={require('./photos/back.jpeg')} />
        </div>
        <div id='fixed'>
        <div className='greyHeader'>
        <div id='options'>
        <a id='woodbowl'>Wood bowls</a>
        <a id='jewelry'>Jewelry</a>
        <a id='herbalTinctures'>Herbal Tinctures</a>
        
        <div className='dropdown'>
          <span><div id='classesId'>Classes</div></span>
          
          <div className='dropdown-content'>
            <p className='itemchoice'>Tincture Making</p>
            <p className='itemchoice'>Spoon Carving</p>
            <p className='itemchoice'>Ferment & Forage</p>
            <p className='itemchoice'>Craft Earrings</p>
          </div>
          </div>

        <NavLink id='userAccountIcon' exact to='/userAccount'>
        <FaUserCircle/>
        </NavLink>
        <NavLink id='cart' exact to='/cart'>
        <Badge color="secondary">
        <ShoppingCartIcon />{" "}
        </Badge>
        </NavLink>
        <div id='userLink'>
    <NavLink id='userHeaderBowlPage' exact to='/Welcome'>
    <p className='userBowlPage'>Hi, {userfirstName}!</p>
    </NavLink>
    </div>
</div>
</div>

<NavLink exact to='/Homepage2'>
  <img id="logoUser" height="200px" width="200px" src={require('./photos/logo.png')} />
</NavLink>
</div>

{/* <NavLink id='userWood' exact to='/Welcome'>
<p className='userWoodBowl'>Hi, {userfirstName}!</p>
</NavLink> */}

<ProductClasses />

<p id='woodturnclass'>Wood Bowl Turning Class</p>
<div id='dates'>
<p id='datesandtimes'>Dates & Times</p>
<form className='classBooking'>
<p id='wooddates'>March 4, 2022<br></br>12:00pm-5:00pm</p><input className='radio'type = "radio" name = "phone" value ="bowl"/>
<p id='wooddates'>March 21, 2022<br></br>12:00pm-5:00pm</p><input className='radio' type = "radio" name = "phone" value ="bowl"/>
<p id='wooddates'>April 5, 2022<br></br>12:00pm-5:00pm</p><input className='radio' type = "radio" name = "phone" value ="bowl"/>
<p id='wooddates'>April 20, 2022<br></br>12:00pm-5:00pm</p><input className='radio' type = "radio" name = "phone" value ="bowl"/>
<p id='wooddates'>May 10, 2022<br></br>12:00pm-5:00pm</p><input className='radio' type = "radio" name = "phone" value ="bowl"/>

</form>
</div>

<div className='description'>
<p id='desc'>Description </p>
<p>
This is a great class to advance your skills to bowl turning. 
The course is designed for the beginner to intermediate turner who wants to get a good foundation in turning bowls. 
Proper tools, blank selection, chucking methods, and form will be covered. Students will leave with their own finished bowl.
</p>
<p id='tuition'>
Tuition: $80.00
</p>
</div>

<div className='woddpage'>
<p id='make1'>*For any questions regarding the class please call (888) - 888 - 8888</p>
          {/* <p id='make2'>Craft your own earrings</p>
          <p id='make3'>Carve a wood spoon</p> */}
</div>
{/* <Products /> */}

        </div>
    )
}

export default WoodbowlTurning

