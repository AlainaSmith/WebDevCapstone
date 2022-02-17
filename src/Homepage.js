import React from 'react'
import './Homepage.css' 
import Header from './Header'
import { NavLink } from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'
import CustomBowl from './CustomWoodBowls';
import HerbalTinctures from './Herbal';
import Flowers from './Flowers';
import Aleut from './Aleut';


const Homepage = () => {
    return(
    <div>
  
        {/* <heading className="headerLinks">
            <h2>About | Contact | Cart</h2>
        </heading> */}

        <Header />
        
        <h1>Hopes & Trees Crafts</h1>
        
       <div id="options">
        <div className='option1'>
        <p>Custom Woodwork</p>
        </div>
        <div className='option2'>
        <p>Herbal Tinctures</p>
        </div>
        <div className='option3'><p>Fresh cut flower orders (local)</p></div>
        </div>
        {/* <img className="pic" src="https://images.unsplash.com/photo-1567080586917-e6ab6aa0df85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bHVtYmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
         */}
{/* <Aleut /> */}
        <div id='forsale'><h2>Premade bowls & platters</h2></div>
        <img id="sidebar" height="1200px" width="150px" src={require('./photos/sidebar.png')} />
        {/* <div className="columnBar"></div> */}



        <div class="bowls">
        <form className="bowls"id="bowl1">
            <div>
            <NavLink exact to='/SmallWalnutBowl'>
            <img id="bowl1" height="150px" width="150px" src={require('./photos/IMG_7910.PNG')} />
            </NavLink>
                <h4 id='bowlOne'>
                    Small Walnut Bowl
                </h4>
                <div id='icon'>
                    <AiOutlineHeart /></div>
            </div>
        </form>
        
        <form className="bowls"id="bowl2">
            <div>
            <NavLink exact to='/SmallPadaukBowl'>
            <img id="bowl2" height="150px" width="150px" src={require('./photos/IMG_7903.jpg')} />
            </NavLink>
                <h4>
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

        
      </div>


<div className='bowlsTwo'>
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
        </div>




    <CustomBowl />
    <HerbalTinctures />
    <Flowers />



    </div>
    )
}

export default Homepage

