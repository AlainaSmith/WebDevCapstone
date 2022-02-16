import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
// import { BrowserRouter } from 'react-router-dom';


const Header = () => {
   
    return(
        <>
        <nav className='headerLinks'>
        <NavLink  exact to='/Homepage'>Home</NavLink>
        {" | "}
        <NavLink  exact to='/About'>About</NavLink>
        {" | "}
        <NavLink  exact to='/Cart'>Cart</NavLink>
        </nav>

        </>
    )
}

export default Header