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

        
        {/* <NavLink exact to='/Joe'>
    <img id="tincturesPhoto" src={require('./photos/IMG_0416.jpg')} />
    </NavLink> */}

    {/* <NavLink exact to='/Joe'>
    <img id="reishiPhoto" src={require('./photos/reishi.png')} />
    </NavLink> */}

<div className='centerTinctures'>

{/* <div id='backPhotoTinc1'></div> */}
    <NavLink exact to='/DandelionRoot'>
    <img id="pinkTinc1" src={require('./photos/pinkTinc.JPG')} />
    </NavLink>
{/* <div className='backPhotoTinc2'></div> */}
    <NavLink exact to='/Chaga'>
    <img id="pinkTinc2" src={require('./photos/pinkTinc.JPG')} />
    </NavLink>

{/* <div className='backPhotoTinc3'></div> */}
    <NavLink exact to='/lemonBalm'>
    <img id="pinkTinc3" src={require('./photos/pinkTinc.JPG')} />
    </NavLink>

{/* <div className='backPhotoTinc4'></div> */}
    <NavLink exact to='/lemonBalm'>
    <img id="pinkTinc4" src={require('./photos/pinkTinc.JPG')} />
    </NavLink>

    </div>

    {/* <NavLink exact to='/DandelionRoot'>
    <img id="bigTinc" src={require('./photos/bigTincture.JPG')} />
    </NavLink> */}
    
    </div>
    )
}

export default HerbalTinctures