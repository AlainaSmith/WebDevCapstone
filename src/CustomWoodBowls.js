import React from "react";
import './CustomWoodBowls.css'

const CustomBowl = () => {
    return(
      <div>
           
            <h1 id='custom'>Custom Wood Bowls</h1>

            <div className="customBowls">
            Select Your Size:
                <form>
                <label><input type = "radio" name = "phone" value ="bowl"/>Small</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Medium</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Large</label>
                </form>

            Wood Species:
            <form>
            <label><input type = "radio" name = "phone" value ="bowl"/>Walnut</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Cherry</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Osage Orange</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Maple</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Red Cedar</label>
            </form>

            Special Notes - woodburn details/etc:
            <form>
             <label><textarea required name = "feedbackText" cols = "20" rows="6"></textarea></label>
             </form>
             <input type = "submit"/>
        </div>

       
        </div>
    )
}

export default CustomBowl