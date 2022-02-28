import React from "react";
import './video.css'
import './PremadeBowls'
import { NavLink } from "react-router-dom";

const Video = () => {
  return (
<div>
  <div id='classes' className='woodBowl2'>
      <p>Classes</p>
        <div className='thinLineClasses'></div>
</div>

<div id='classesOff'>
  <NavLink exact to='/WoodbowlTurning'>
  <p id='inline0'>Wood Bowl Turning</p>
  </NavLink>
        
          <p id='inline1'>Tincture making</p>
          <p id='inline2'>Craft your own earrings</p>
          <p id='inline3'>Carve a wood spoon</p>
</div>

      
<div class="tech-slideshow">        
  <div id = 'uno'>
        <iframe id='one' src="https://player.vimeo.com/video/679806687?h=6d0493bf10&autoplay=1&loop=1&title=0&byline=0&portrait=0" width="250" height="322" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </div>   
  <div id = 'dos'>
        <iframe id='two' src="https://player.vimeo.com/video/679809121?h=5a66e03f37&autoplay=1&loop=1&title=0&byline=0&portrait=0" width="250" height="444" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div id='tres'>
        <iframe id='three' src="https://player.vimeo.com/video/682395412?h=5d471e2813&autoplay=1&loop=1&title=0&byline=0&portrait=0" width="250" height="444" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </div>
  <div id="quatre">
  
       <iframe id='four' src="https://player.vimeo.com/video/682658632?h=dddaf16026&autoplay=1&loop=1&title=0&byline=0&portrait=0" width="250" height="444" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div id='cinc'>
      <iframe id='five' src="https://player.vimeo.com/video/682650204?h=4b20468ba1&autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>
  </div>


       
</div>
  
  );
}
export default Video