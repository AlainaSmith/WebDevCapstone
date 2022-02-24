import React, {useState} from 'react'
import './Homepage.css' 
import Header2 from './Header2'
import { NavLink } from "react-router-dom";
import Video from './Video';
import HerbalTinctures from './Herbal';
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
import Jewelry from './Jewelry';
const Homepage = () => {
const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
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

<p id='about' className='greeting'>
Aang-Waan! Welcome.
</p>
<div className='aboutContainer'>
<p id='about'>
What started out as a break from reality, became my ultimate muse.
</p>
<p id='about'> 
It was through crafting and woodworking that brought me closer to my Indigenous roots. 
</p>
<p id='about'>
I built Hopes & Trees for donating proceeds to preserve the historical signifance of my ancestors from Alaska, 
and the future generations to come, thanks for visiting! 
</p>
</div>


<PremadeBowls />
<Jewelry />
<HerbalTinctures />
<Video />



        {/* <img className="pic" src="https://images.unsplash.com/photo-1567080586917-e6ab6aa0df85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bHVtYmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
         */}

        



{/* <div className="register">
</div> */}
<Top />




    <img id="sidebar" height="1200px" width="150px" src={require('./photos/sidebar.png')} />
   
    <img id="sidebar3" height="1200px" width="150px" src={require('./photos/sidebar.png')} />
    
    <img id="mapalaska"  src={require('./photos/mapalaska.png')}/>
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
            peoples from Unangax/Aleut regions of Alaska
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
