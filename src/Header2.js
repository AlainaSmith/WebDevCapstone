import React from "react";
import { NavLink } from "react-router-dom";
import './header2.css'
// import { BrowserRouter } from 'react-router-dom';
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {FaUserCircle} from 'react-icons/fa'
import PremadeBowls from "./PremadeBowls";
import HerbalTinctures from "./Herbal";
import Classes from "./Classes";
const Header2 = () => {

  
    const [itemCount, setItemCount] = React.useState();

    return(
        <>
        <div className='options'>
        
        
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
        
        </div>

        </>
    )
}

export default Header2