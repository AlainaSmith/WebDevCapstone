import React from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'
import './PremadeBowls.css'

const PremadeBowls = () => {
    
    return(
       <div>
        <div id='woodBowls' className='woodBowl2'>
            <p>Wood bowls</p>
            <div className='thinLine'></div>
        </div>
            <div className='gallery' id='bowls'>
  <figure class='gallery__item gallery__item--1'>
  <img id="woodBowl" src={require('./photos/IMG_7910.PNG')} class="gallery__img" alt="Image 1"/>
  </figure>
  <figure class="gallery__item gallery__item--2">
    <img id="woodBowl"  src={require('./photos/IMG_7903.jpg')} class="gallery__img" alt="Image 2"/>
  </figure>
  <figure class="gallery__item gallery__item--3">
  <img id="woodBowl"  src={require('./photos/IMG_7907.PNG')} class="gallery__img" alt="Image 3"/>
  </figure>
  <figure class="gallery__item gallery__item--4">
  <img id="woodBowl"  src={require('./photos/FE7E9916-D897-4E65-8022-2001AFA3B22F (1).JPG')}class="gallery__img" alt="Image 4"/>
  </figure>
  <figure class="gallery__item gallery__item--5">
  <img id="woodBowl"src={require('./photos/IMG_7898.PNG')} class="gallery__img" alt="Image 5"/>
  </figure>
  <figure class="gallery__item gallery__item--6">
  <img id="woodBowl"src={require('./photos/IMG_7909.jpg')} class="gallery__img" alt="Image 6"/>
  </figure>
</div>
        </div>
    )
}


export default PremadeBowls





{/* <div id='forsale'><h2>Premade bowls & platters</h2></div> */}
{/* <div className="bowlsFlex">

<form className="bowls"id="bowl1">
    <div className="cardBackground">
    <NavLink exact to='/SmallWalnutBowl'>
    <img id="bowl1" height="150px" width="150px" src={require('./photos/IMG_7910.PNG')} />
    </NavLink>
        <h4 id='bowlOne'>
            Small Walnut Bowl
        </h4>
    </div>
</form>



<form className="bowls"id="bowl2">
<div className="cardBackground2">
    <NavLink exact to='/SmallPadaukBowl'>
    <img id="bowl2" height="150px" width="150px" src={require('./photos/IMG_7903.jpg')} />
    </NavLink>
        <h4 id='bowlTwo'>
            Small Padauk Bowl
        </h4>
        <div id='icon'>
            <AiOutlineHeart /></div>
    </div>
</form>

<form className="bowls"id="bowl3">
    <div>
    <NavLink exact to='/SmallWalnutBowl2'>
    <img id="bowl3" height="150px" width="150px" src={require('./photos/IMG_7907.PNG')} />
    </NavLink>
        <h4>
            Small Walnut Bowl
        </h4>
        <div id='icon'>
            <AiOutlineHeart /></div>
    </div>
</form>

<form className="bowls"id="bowl4">
    <div>
    <NavLink exact to='/SmallWalnutBowl2'>
    <img id="bowl4" height="150px" width="150px" src={require('./photos/FE7E9916-D897-4E65-8022-2001AFA3B22F (1).JPG')} />
    </NavLink>
        <h4>
            Small Padauk Bowl
        </h4>
        <div id='icon'>
            <AiOutlineHeart /></div>
    </div>
</form>





<div className='bowlsFlexTwo'>
<form className="bowlsTwo"id="bowl6">
    <div>
    <NavLink exact to='/OsageOrangeBowl'>
    <img id="bowl6" height="150px" width="150px" src={require('./photos/IMG_7898.PNG')} />
    </NavLink>
        <h4>
            Osage Orange Bowl
        </h4>
        <div id='icon'>
            <AiOutlineHeart /></div>
    </div>
</form>


<form className="bowlsTwo"id="bowl5">
    <div>
    <NavLink exact to='/WalnutPlatter'>
    <img id="bowl5" height="150px" width="150px" src={require('./photos/IMG_7909.jpg')} />
    </NavLink>
        <h4>
            Walnut Platter
        </h4>
        <div id='icon'>
            <AiOutlineHeart /></div>
    </div>
</form>
</div> */}