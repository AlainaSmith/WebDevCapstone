import React from "react";
import './Homepage2.css'
import {FaUserCircle} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";
import PremadeBowls from "./PremadeBowls";
import Jewelry from "./Jewelry"
import HerbalTinctures from "./Herbal"
import Video from "./Video"
import Top from './Top'


const Homepage2 = () => {
const userfirstName = window.localStorage.getItem('userfirstName')
console.log(userfirstName)

return(
<div>
 <div className = 'backgroundContainer'> 
  <div className='backgroundPhoto'>
                <img id="back" height="1300px" width="1080px" src={require('./photos/back.jpg')} />
                <img id="logo" height="290px" width="290px" src={require('./photos/logo.png')} />
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
        <a id='classesId' href="#contact">Contact</a>


        {/* <NavLink exact to='/Classes'>
                Classes Demo
        </NavLink> */}
    </div>
 </div>
</div> 
<div id = 'nowrap'>
            <p id='greet'>Aang-Waan
            <NavLink id='userHomepage' exact to='/Welcome'>,      
            <p id='greet2' className='userHome'>{userfirstName}!</p>
            </NavLink>
            </p> 
</div>
                    <p id='greetWelcome'>Welcome.</p>
            <div id='aboutContainer'>
            <p id='aboutText'>
            What started out as a break from reality, became my ultimate muse. 
            </p>
            <p id='aboutText'>
            It was through crafting and woodworking that brought me closer to my Indigenous roots. 
             </p>
             <p id='aboutText'>
I built Hopes & Trees for donating proceeds to preserve the historical signifance of my 
</p>
<p id='aboutText'>
ancestors from Alaska, and the future generations to come. 
            </p>
            </div>
            
<div>
    <p id='gradText'>
    <div className='wrapper'>
   <h4 id='sale' className='marquee'>Graduation Sale: 25% all bowls & classes!</h4>
   </div>
    </p>
</div>

<div className='gradientBars' id='one'></div>
<div className='gradientBars' id='two'></div>
<div className='gradientBars' id='three'></div>
<div id='woodbowlLocator' className='gradientBars'></div>
<div id='jewelryLocator' className='gradientBars'></div>

{/* <div className='gradientBars' id='four'></div> */}
</div>

<div className='whiteContainer'>
 <PremadeBowls />
<Jewelry />
<HerbalTinctures />
<Video />
<Top />
</div>

          
</div>
    )
}

export default Homepage2