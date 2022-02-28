import React from "react";
import { NavLink } from "react-router-dom";
import './PremadeBowls.css'
import './Jewelry.css'

const Jewelry = () => {
    
return(
<div>
  <div id='woodBowls' className='woodBowl2'>
      <p id='jewl'>Jewelry</p>
        <div className='thinLineJewl'></div>
  </div>
  <div className='gallery' id='bowls'>


<div id='backPhotoJewl'></div>
    <figure class='gallery__item gallery__item--jewl1'>
  <NavLink exact to='/SmallWalnutBowl'>
    <img id="jewl1" src={require('./photos/IMG_0533.jpg')} class="gallery__imgJewl" alt="Image 1"/>
    </NavLink>
    </figure>

<div id='backPhotoJewl2'></div>
    <figure class="gallery__item gallery__item--jewl2">
        <img id="jewl2"  src={require('./photos/IMG_0532.jpg')} class="gallery__imgJewl" alt="Image 2"/>
    </figure>

<div id='backPhotoJewl3'></div>
    <figure class="gallery__item gallery__item--jewl3">
    <img id="jewl3"  src={require('./photos/IMG_5897.jpg')} class="gallery__imgJewl" alt="Image 3"/>
    </figure>

<div id='backPhotoJewl4'></div>
    <figure class="gallery__item gallery__item--jewl4">
    <img id="jewl4"  src={require('./photos/IMG_0530.jpg')}class="gallery__imgJewl" alt="Image 4"/>
    </figure>

<div id='backPhotoJewl5'></div>
    <figure class="gallery__item gallery__item--jewl5">
    <img id="jewl5"src={require('./photos/IMG_3183.jpg')} class="gallery__imgJewl" alt="Image 5"/>
    </figure>

<div id='backPhotoJewl6'></div>
    <figure class="gallery__item gallery__item--jewl6">
    <img id="jewl6"src={require('./photos/IMG123.JPG')} class="gallery__imgJewl" alt="Image 6"/>
    </figure>
</div>
        </div>
    )
}

export default Jewelry