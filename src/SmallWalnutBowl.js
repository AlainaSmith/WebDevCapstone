import React from 'react'
import { NavLink } from "react-router-dom";
import axios from 'axios';
import CartCounter from './cartCounter';
import {FaUserCircle} from 'react-icons/fa'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import './SmallWalnutBowl.css'
import Products from './Products';
import ProductCard from './ProductCard';

const SmallWalnutBowl = () => {
//    const [product_id, setProduct_id]

// const handleSubmit = (e) => {
//     e.preventDefault()
//     axios.get('http://localhost:3500/SmallWalnutBowl', {
//     })
// }

const userfirstName = window.localStorage.getItem('userfirstName')
 console.log(userfirstName)

return(
<div className = 'backgroundContainerWalnut' id='userContainer'> 
  <div className='backgroundPhoto'>
    <img id="back" height="740px" width="900px" src={require('./photos/back.jpeg')} />
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

{/* <NavLink id='userHeader' exact to='/Welcome'>
<p className='user'>Hi, {userfirstName}!</p>
</NavLink> */}

            <p id='walnutBowl'>Small Walnut Bowl</p>
            <img id="bowl1" height="200px" width="200px" src={require('./photos/IMG_7910.jpg')} /> *
            <img id="bowl1" height="200px" width="200px" src={require('./photos/IMG_7914.jpg')} />
            <img id="bowl1" height="200px" width="200px" src={require('./photos/IMG_7912.jpg')} />
        <form>
            <h3 id='des'>$20.00</h3>
        
        </form>
      
    <p id='directions'>Directions for care:</p>
    <p id='directions'>Finished with mineral oil and wax.</p>
    <p id='directions'>Hand washing is the best way to care for your woodenware. 
    <br></br>Never soak them in water for too long to prevent splitting or cracking. 
    <br></br>Use warm water and mild soap to wash the surface</p>
 
 </div>


<Products />

   


</div>
)
}

export default SmallWalnutBowl




