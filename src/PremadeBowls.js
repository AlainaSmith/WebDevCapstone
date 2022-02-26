import React from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'
import './PremadeBowls.css'

const PremadeBowls = () => {
    
return(
<div>
  <div id='woodBowls' className='woodBowl2'>
      <p id='woodText'>Wood bowls</p>
        <div className='thinLine'></div>
  </div>
  <div className='gallery' id='bowls'>

<div className='backPhoto'><p id='Walnut'>Walnut</p></div>
    <figure class='gallery__item gallery__item--1'>
  <NavLink exact to='/SmallWalnutBowl'>
    <img id="woodBowl" src={require('./photos/IMG_7910.PNG')} class="gallery__img" alt="Image 1"/>
    </NavLink>
    </figure>

<div className='backPhoto2'><p id='Walnut'>Padauk</p></div>
    <figure class="gallery__item gallery__item--2">
        <img id="woodBowl"  src={require('./photos/IMG_7903.jpg')} class="gallery__img" alt="Image 2"/>
    </figure>

<div className='backPhoto3'><p id='Walnut'>Walnut</p></div> 
    <figure class="gallery__item gallery__item--3">
    <img id="woodBowl"  src={require('./photos/IMG_7907.PNG')} class="gallery__img" alt="Image 3"/>
    </figure>

<div className='backPhoto4'><p id='Walnut'>Red Cedar</p></div>
    <figure class="gallery__item gallery__item--4">
    <img id="woodBowl4"  src={require('./photos/IMG_7902.jpg')}class="gallery__img" alt="Image 4"/>
    </figure>

<div className='backPhoto5'><p id='Walnut'>Maple</p></div>
    <figure class="gallery__item gallery__item--5">
    <img id="woodBowl5"src={require('./photos/IMG_7898.PNG')} class="gallery__img" alt="Image 5"/>
    </figure>

{/* <div className='backPhoto6'><p id='Walnut'>Osage Orange</p></div>
    <figure class="gallery__item gallery__item--6">
    <img id="woodBowl"src={require('./photos/IMG_7909.jpg')} class="gallery__img" alt="Image 6"/>
    </figure> */}

{/* <div className='backPhoto7'><p id='Walnut'>Padauk</p></div>
    <figure class="gallery__item gallery__item--7">
    <img id="woodBowl"src={require('./photos/IMG_7905.PNG')} class="gallery__img" alt="Image 7"/>
    </figure> */}

<div className='backPhoto6'><p id='Walnut'>Osage Orange</p></div>
    <figure class="gallery__item gallery__item--6">
    <img id="woodBowl6"src={require('./photos/first.JPG')} class="gallery__img" alt="Image 6"/>
    </figure>

<div className='backPhoto7'><p id='Walnut'>Red Cedar</p></div>
    <figure class="gallery__item gallery__item--7">
    <img id="woodBowl7"src={require('./photos/FE7E9916-D897-4E65-8022-2001AFA3B22F (1).JPG')} class="gallery__img" alt="Image 7"/>
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



{/* <div className='gallery' id='bowls'>
  <NavLink exact to='/SmallWalnutBowl'>
    <figure class='gallery__item gallery__item--1'>
    <img id="woodBowl" src={require('./photos/IMG_7910.PNG')} class="gallery__img" alt="Image 1"/>
    </figure>
    </NavLink> */}