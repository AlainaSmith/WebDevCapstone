import React from 'react'
import { NavLink } from "react-router-dom";
import Header from './Header';
import axios from 'axios';
import CartCounter from './cartCounter';
import {FaUserCircle} from 'react-icons/fa'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


const SmallWalnutBowl = () => {
//    const [product_id, setProduct_id]

// const handleSubmit = (e) => {
//     e.preventDefault()
//     axios.post('http://localhost:3500/SmallWalnutBowl', {

//     })
// }

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
<img id="logo" height="200px" width="200px" src={require('./photos/logo.png')} />
</NavLink>
            <h1>Walnut Bowl</h1>
            <img id="bowl1" height="300px" width="300px" src={require('./photos/IMG_7910.PNG')} />
            <img id="bowl1" height="300px" width="300px" src={require('./photos/IMG_7914.PNG')} />
            <img id="bowl1" height="300px" width="300px" src={require('./photos/IMG_7912.PNG')} />
        <form>
            <h3>$20</h3>
            <button>Add To Cart</button>
        </form>
        </div>
    )
}

export default SmallWalnutBowl