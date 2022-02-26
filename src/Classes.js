import React from "react";

import { NavLink } from "react-router-dom";
import {FaUserCircle} from 'react-icons/fa'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Classes = () => {
    return(
        <div>
            <div className='pinkHeader'>
   <div className='wrapper'>
   <h4 id='sale' className='marquee'>Graduation Sale: 25% all bowls & classes!</h4>
   </div>
  <div className='greyHeader'>
    <div id='options'>
      <a id='one' href="#woodBowl">Wood bowls / Jewelry</a>
      <a id='two' href="#tinctures">Herbal Tinctures</a>
      <a id='three' href="#classes">Classes</a>
      <NavLink exact to='/userAccount'>
      <FaUserCircle/>
      </NavLink>
      <NavLink exact to='/cart'>
        <Badge color="secondary">
          <ShoppingCartIcon />{" "}
        </Badge>
      </NavLink>
      <NavLink exact to='/Classes'>
              Classes Demo
      </NavLink>
    </div>
   </div>
  </div> 


  <NavLink exact to='/Homepage'>
<img id="logo" height="300px" width="300px" src={require('./photos/logo2.png')} />
</NavLink>
            <h3>Classes Offered</h3>
            -Wood bowl turning
            -Tincture making
            -Craft your own earrings
            -Carve a wood spoon


            <div className="customBowls">
            
                <form>
                <label><input type = "radio" name = "phone" value ="bowl"/>2oz</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>4oz</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>6oz</label>
                </form>

<h2>Herb/Fungi:</h2>
            <form>
            <label><input type = "radio" name = "phone" value ="bowl"/>Dandelion</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Licorice</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Chammomile</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Lemon Balm</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Chaga</label>
            </form>
            <button>Add to cart</button>
            </div>

</div>

    )
}

export default Classes