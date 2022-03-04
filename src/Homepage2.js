import React from "react";
import './Homepage2.css'
import {FaUserCircle} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
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
    
<div className='wholething'>
<link rel='icon' href='%PUBLIC_URL%/pinetreeicon.jpeg' />
 <div className = 'backgroundContainer'> 
  <div className='backgroundPhoto'>
                <img id="back" height="1300px" width="1080px" src="https://github.com/AlainaSmith/WebDevCapstone/blob/main/src/photos/back.jpeg?raw=true" />
                <img id="logo" height="290px" width="290px" src="https://github.com/AlainaSmith/WebDevCapstone/blob/main/src/photos/logo.png?raw=true" />
            </div>


<div id='fixed'>
  <div className='greyHeader'>
      <div id='options'>
    
        <a id='woodbowl' href="#woodbowlLocator">Wood bowls</a>
        <a id='jewelry' href="#jewelryLocator">Jewelry</a>
        <a id='herbalTinctures' href="#tinctureLocator">Herbal Tinctures</a>
        <a id='classesId' href="#classesLocator">Classes</a>
        <a id='classesId' href="#contact">Contact</a>
        <NavLink id='userAccountIcon' exact to='/userAccount'>
        <FaUserCircle/>
        </NavLink>
        <NavLink id='cart' exact to='/cart'>
        <Badge color="secondary">
            <ShoppingCartIcon />{" "}
        </Badge>
        </NavLink>
        


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
            It was through crafting and woodworking that brought me closer to my Alaska Native roots. 
             </p>
             <p id='aboutText'>
I built Hopes & Trees for donating partial proceeds generated from sales to help preserve 
<p id='aboutText'> the historical significance of Indigenous Peoples from Unangax̂/Aleut regions of Alaska, </p>
</p>
<p id='aboutText'>
and the future generations to come.
            </p>
            </div>
            
<div>
    <p id='gradText'>
    <div className='wrapper'>
   <h4 id='sale' className='marquee'>Graduation Sale: 25% all bowls & classes!</h4>
   </div>
    </p>
</div>

<div className='gradientBars' id='one'>
<p id='orgLink'>Organization-Link Organization-Link Organization-Link Organization-Link</p>
</div>

<div className='gradientBars' id='two'>
<div id='instagram'><AiOutlineInstagram /> <FaFacebook /></div>
</div>


<div className='gradientBars' id='three'></div>
<div id='woodbowlLocator' className='gradientBars'></div>
<div id='jewelryLocator' className='gradientBars'></div>
<div id='tinctureLocator' className='gradientBars'></div>
<div id='classesLocator' className='gradientBars'></div>
{/* <div className='gradientBars' id='four'></div> */}
</div>

<div className='whiteContainer'>
 <PremadeBowls />
<Jewelry />
<HerbalTinctures />
<Video />

<div className='bottomHeader' id='secondHeader'>
<p>Copyright © 2022, Hopes&Trees Collective</p>
<p>Address: 333 Hopes & Trees Avenue, Follow the yellow brick road 99654</p>
<p>Shop Hours: 9am-5pm | Monday-Friday</p>

</div>
</div>
<Top />


<p id='photoby'>Photo by <a href="https://unsplash.com/@filipz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Filip Zrnzević</a> on <a href="https://unsplash.com/s/photos/trees?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  </p>
          
</div>
    )
}

export default Homepage2