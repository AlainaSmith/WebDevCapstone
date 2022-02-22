import React from "react";
import './CustomWoodBowls.css'
import './header2.css'
import { NavLink } from "react-router-dom";
import './PremadeBowls.css'

const HerbalTinctures= () => {
    return(
      <div>
<div id='tinctures' className='woodBowl2'>
      <p>Herbal Tinctures</p>
        <div className='thinLine'></div>
  </div>

        <a href="#tinctures" id='option2'>Herbal Tinctures</a>
        <NavLink exact to='/SmallWalnutBowl'>
    <img id="woodBowl" src={require('./photos/IMG_0416.jpg')} class="gallery__img" alt="Image 1"/>
    </NavLink>
    
    </div>
    )
}

export default HerbalTinctures