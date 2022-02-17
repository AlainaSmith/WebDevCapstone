import React from "react";
import './CustomWoodBowls.css'

const CustomBowl = () => {
    return(
      <div>
           
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
             <button>Add to cart</button>
        </div>

       
        </div>
    )
}

export default CustomBowl






