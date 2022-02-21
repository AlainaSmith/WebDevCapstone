import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import './cartCounter.css'
import axios from "axios";

const CartCounter = () => {
    const [itemCount, setItemCount] = React.useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3500/SmallWalnutBowl', {
    
        })
    }
    return(
    <div>
        <div className="cart">
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
            
            <button id='remove'>Remove from Cart</button>
            
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
           
            <button id='addCart' onClick={handleSubmit}>Add to Cart</button>
            
          </Button>
          </div>

        </div>
    )
}

export default CartCounter