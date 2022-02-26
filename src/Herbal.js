import React from "react";
import './CustomWoodBowls.css'

import { NavLink } from "react-router-dom";
import './PremadeBowls.css'

const HerbalTinctures= () => {
    return(
      <div>
<div id='tinctures' className='woodBowl2'>
      <p id='herbal'>Herbal Tinctures</p>
        <div className='thinLineHerbal'></div>
  </div>

        
        <NavLink exact to='/Joe'>
    <img id="tincturesPhoto" src={require('./photos/IMG_0416.jpg')} />
    </NavLink>
    
    </div>
    )
}

export default HerbalTinctures