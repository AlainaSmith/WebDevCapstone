import React, {useState, useEffect} from "react";
import './CustomWoodBowls.css'
// import AddCart from "./AddCart";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const CustomBowl = () => {
//post request to an endpoint
//handlerfunction of the endpoint will add the items to the carts table
//
const [cart, setCart] = useState([])
const [itemCount, setItemCount] = React.useState(1);

// const handleAtCart = (item) => {
// setCart(item)
// }

// useEffect(()=>{ 
//    localStorage.setItem('item', cart)
// }, [cart])

    return(
      <div>
            
{/* <AddCart /> */}
            <h1 id='custom'>Custom Wood Bowls</h1>
            <div className="customBowls">
              
            <h2>Select Your Size:</h2>
                <form>
                <label><input type = "radio" name = "phone" value ="bowl"/>Small</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Medium</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Large</label>
                </form>

                <h2>Wood Species:</h2>
            <form>
            <label><input type = "radio" name = "phone" value ="bowl"/>Walnut</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Cherry</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Osage Orange</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Maple</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Red Cedar</label>
            </form>

            <h2>Special Notes - woodburn details/etc:</h2>
            <form>
             <label><textarea required name = "feedbackText" cols = "40" rows="3"></textarea></label>
             </form>

             <div>

        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <button>Remove from Cart</button>
            {/* <RemoveIcon fontSize="small" /> */}
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <button>Add to Cart</button>
            {/* <AddIcon fontSize="small">Add to Cartt</AddIcon> */}
          </Button>
        </ButtonGroup>
      </div>
             {/* <button>Add to cart</button> */}
        </div>

       
        </div>
    )
}

export default CustomBowl
