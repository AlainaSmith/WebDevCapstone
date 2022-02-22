import React, {useState} from 'react'
import './Homepage.css' 
import Header2 from './Header2'
import { NavLink } from "react-router-dom";
import Video from './Video';

import HerbalTinctures from './Herbal';

// import Aleut from './Aleut';
// import Main from './Main';
// import Cart from './Cart';
// import data from './data';
import AddCart from './AddCart';
import PremadeBowls from './PremadeBowls';
import Register from './Register';
import Login from './Login';
import Top from './Top';
import useCollapse from 'react-collapsed';
import Classes from './Classes';
import {FaUserCircle} from 'react-icons/fa'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Homepage = () => {
const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

return(
 <div>
  <div className='pinkHeader'>
   <div className='wrapper'>
   <h4 id='sale' className='marquee'>Graduation Sale: 25% all bowls & classes!</h4>
   </div>
  <div className='greyHeader'>
    <div id='options'>
      <a id='one' href="#woodBowl">Wood bowls / Jewelry</a>
      <a id='two' href="#tinctures">Herbal Tinctures</a>
      <a id='three' href="#classes">Classes</a>
      <div id='user'><FaUserCircle/></div>
    </div>
    <div className="cart">
        <Badge color="secondary">
                <a href='/cart'></a>
          <ShoppingCartIcon />{" "}
        </Badge>
    </div>
   </div>
  </div> 
<img id="logo" height="300px" width="300px" src={require('./photos/logo2.png')} />

<div className='aboutContainer'>
<p id='about'>
Aang-Waan! Welcome.
</p>
<p id='about'>
What started out as a break from reality, became my ultimate muse.
</p>
<p id='about'> 
It was through crafting and woodworking that brought me closer to my Indigenous roots. 
</p>
<p id='about'>
I built Hopes & Trees for donating proceeds to preserve the historical signifance of my ancestors from Alaska, 
</p>
<p id='about'>
and the future generations to come, thanks for visiting! 
</p>
</div>


<PremadeBowls />
    

{/* <PremadeBowls /> */}
{/* <div id="options">
  <div className='option1'>
        <h3>Custom Woodwork</h3>
        

</div>

<div className='option2'>
        <h3>Herbal Tinctures</h3>
        
 </div>


<div className='option3'>
        <h3>Classes</h3></div>
</div> */}
        {/* <img className="pic" src="https://images.unsplash.com/photo-1567080586917-e6ab6aa0df85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bHVtYmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
         */}

        
        
        {/* <div className="columnBar"></div> */}
        



{/* <div className="register" id='woodBowl'>
<Register />
<Login />
<Top />
</div>


<Video /> */}

    <img id="sidebar" height="1200px" width="150px" src={require('./photos/sidebar.png')} />
   
    <img id="sidebar3" height="1200px" width="150px" src={require('./photos/sidebar.png')} />
    
    <div className='aleut'>
            <p id='text'>
            Partial proceeds 
            </p>
            <p id='text'>
            donated to preserving 
            </p>
            <p id='text'>
            the history of Indigenous 
            </p>
            <p id='text'>
            peoples from Unangax/Aleut regions of
            </p> 
            <p id='text'>
            Alaska. 
            </p>
            <p id='text'>
            Link below for specificities:
            </p>
</div>
    </div>
    )
}

export default Homepage



 {/* <heading className="headerLinks">
            <h2>About | Contact | Cart</h2>
        </heading> */}

        {/* <Header /> */}
        
        {/* <Aleut /> */}
        {/* <h1>Hopes & Trees Crafts</h1> */}
