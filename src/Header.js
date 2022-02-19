import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'
// import { BrowserRouter } from 'react-router-dom';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";

const Header = () => {
    const [itemCount, setItemCount] = React.useState();
    return(
        <>
        <nav className='headerLinks'>
        <NavLink  exact to='/Homepage' id="nav1">Home</NavLink>
       
        <NavLink  exact to='/About' id="nav2">About</NavLink>
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
        </Button>
          </div>
         
        </NavLink>
        </nav>

        </>
    )
}

export default Header