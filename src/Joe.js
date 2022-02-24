import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import {FaUserCircle} from 'react-icons/fa'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import './joe.css'
const Joe = () => {
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

<img id="logo" height="300px" width="300px" src={require('./photos/logo2.png')} />

<h1>Hi, I'm MycoJoe</h1>
<h2>let me tell you how you can repel your neighbor with a burp</h2>
<img id="joe" src={require('./photos/joe.jpg')} alt="Image 1"/>
        </div>
    )
}


export default Joe