import React from "react";
import './video.css'
import './PremadeBowls'
import { NavLink } from "react-router-dom";

const Video = () => {
  return (
    <div>
<div id='classes' className='woodBowl2'>
      <p>Classes</p>
        <div className='thinLine'></div>
  </div>

  <NavLink exact to='/WoodbowlTurning'>
<p>Wood Bowl Turning</p>
</NavLink>
<p>Herbal Tincture Making</p>
      
        <div class="tech-slideshow">
        <div>
            
        <iframe id='one' src="https://player.vimeo.com/video/679806687?h=6d0493bf10&autoplay=1&loop=1&title=0&byline=0&portrait=0" width="250" height="322" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        

        <iframe id='two'src="https://player.vimeo.com/video/679809121?h=5a66e03f37&autoplay=1&loop=1&title=0&byline=0&portrait=0" width="250" height="444" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

    </div>
    </div>
    </div>
  
  );
}
export default Video