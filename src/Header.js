import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
// import { BrowserRouter } from 'react-router-dom';


const Header = () => {
   
    return(
        <>
        <nav className='headerLinks'>
        <NavLink  exact to='/Homepage' id="nav1">Home</NavLink>
       
        <NavLink  exact to='/About' id="nav2">About</NavLink>
    
        <NavLink  exact to='/Cart' id='nav3'>Cart</NavLink>
        </nav>

        </>
    )
}

export default Header