import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
// import { BrowserRouter } from 'react-router-dom';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {FaUserCircle} from 'react-icons/fa'
const Header = () => {

  
    const [itemCount, setItemCount] = React.useState();

  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     axios.post('http://localhost:3500/SmallWalnutBowl', {
  
  //     })
  // }
    return(
        <>
        <nav className='headerLinks'>
        <NavLink  exact to='/Homepage' id="nav1">Home</NavLink>
       
        <NavLink  exact to='/About' id="nav2">About</NavLink>
        <div><FaUserCircle/>New User/Login</div>
        <NavLink  exact to='/Cart' id='nav3'>
        
        <div className="cartHome">
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        </div>
        
        <div className="buttons">
          <Button 
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {/* <button id='remove'>Remove from Cart</button> */}
          </Button>
          <Button
            onClick={() => {setItemCount(itemCount + 1)}}>
              {/* <button id='addCart' onClick={handleSubmit}>Add to Cart</button> */}
            
        </Button>
          </div>
          
        </NavLink>

        
        </nav>

        </>
    )
}

export default Header