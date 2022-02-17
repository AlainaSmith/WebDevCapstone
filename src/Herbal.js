import React from "react";
import './CustomWoodBowls.css'

const HerbalTinctures= () => {
    return(
      <div>
           
            

            <div className="customBowls">
            <h2>Herbal Tinctures</h2>
            <h2>Select Your Size:</h2>
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

export default HerbalTinctures