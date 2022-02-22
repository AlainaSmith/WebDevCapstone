import React from "react";
import { NavLink } from "react-router-dom";

import './PremadeBowls.css'

const Jewelry = () => {
    
return(
<div>
  <div id='woodBowls' className='woodBowl2'>
      <p>Jewelry</p>
        <div className='thinLine'></div>
  </div>
  <div className='gallery' id='bowls'>

    <figure class='gallery__item gallery__item--1'>
  <NavLink exact to='/SmallWalnutBowl'>
    <img id="woodBowl" src={require('./photos/IMG_0533.jpg')} class="gallery__img" alt="Image 1"/>
    </NavLink>
    </figure>
    <figure class="gallery__item gallery__item--2">
        <img id="woodBowl"  src={require('./photos/IMG_0532.jpg')} class="gallery__img" alt="Image 2"/>
    </figure>
    <figure class="gallery__item gallery__item--3">
    <img id="woodBowl"  src={require('./photos/IMG_5897.jpg')} class="gallery__img" alt="Image 3"/>
    </figure>
    <figure class="gallery__item gallery__item--4">
    <img id="woodBowl"  src={require('./photos/IMG_0530.jpg')}class="gallery__img" alt="Image 4"/>
    </figure>
    <figure class="gallery__item gallery__item--5">
    <img id="woodBowl"src={require('./photos/IMG_3183.jpg')} class="gallery__img" alt="Image 5"/>
    </figure>
    <figure class="gallery__item gallery__item--6">
    <img id="woodBowl"src={require('./photos/IMG123.JPG')} class="gallery__img" alt="Image 6"/>
    </figure>
</div>
        </div>
    )
}

export default Jewelry