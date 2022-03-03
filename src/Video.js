import React from "react";
import './video.css'
import './PremadeBowls'
import { NavLink } from "react-router-dom";

const Video = () => {
  return (
<div className='allclassstuff'>

<p id='missionstatement'>As part of this collective, my mission is to promote those who  </p>
<p id='missionstatement'>express their passion for the environment and human connection through </p>
<p id="missionstatement"> personal art forms such as woodworking, jewelry making, food science, music, and more. </p>
  <div id='classes'>
      <p>Classes</p>
       <div className='thinLineClasses'></div>
</div>

<div id='classesOff'>
  <NavLink exact to='/WoodbowlTurning'>
  <p id='inline1'>Wood Bowl Turning</p>
  </NavLink>
         
          <p id='inline2'>Tincture making</p>
          <p id='inline3'>Craft your own earrings</p>
          <p id='inline4'>Carve a wood spoon</p>
          </div>
          
<div id='secondClasses'>
          <p id='inline7'>Thai cooking with Kat</p>
          <p id='inline5'>Forage & Ferment w/ MycoJoe</p>
          <p id='inline6'>Learn guitar with Emil</p>
</div>
      
 <div className='wrapper2'>
{/* <div className='oneVideos'> */}

  <div id = 'uno'>
  <iframe id='oneVideo' className='marquee2' src="https://player.vimeo.com/video/683080017?h=e90834e3d3&autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>   
</div>
  <div id = 'dos'>
        <iframe id='twoVideo'className='marquee2' src="https://player.vimeo.com/video/679809121?h=5a66e03f37&autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div id='tres'>
        <iframe id='threeVideo' className='marquee2'src="https://player.vimeo.com/video/682395412?h=5d471e2813&autoplay=1&loop=1&title=0&byline=0&portrait=0"  frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </div>


  {/* <div className='twoVideos'> */}
  <div id="quatre">
       <iframe id='four' className='marquee2'  src="https://player.vimeo.com/video/682658632?h=dddaf16026&autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </div>
 
  <div id='sis'>
      <iframe id='six'className='marquee2' src="https://player.vimeo.com/video/682650204?h=4b20468ba1&autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  </div>

  <div id='cinc'>
<iframe id='five' className='marquee2' src="https://player.vimeo.com/video/683071831?h=04993356a4&autoplay=1&loop=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</div>

  

  </div>

 </div>



  
  );
}
export default Video