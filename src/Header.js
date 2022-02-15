import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
// import { BrowserRouter } from 'react-router-dom';


const Header = () => {
    const activeStyle = {color:'green'};
    return(
        <>
        <nav className='headerLinks'>
        <NavLink activeStyle={activeStyle} exact to='/About'>About</NavLink>
        {" | "}
        <a href="#contact">Contact</a>
        {" | "}
        <NavLink activeStyle={activeStyle} exact to='/Cart'>Cart</NavLink>
        </nav>

        </>
    )
}

export default Header