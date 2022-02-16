import React from "react";
import './CustomWoodBowls.css'

const HerbalTinctures= () => {
    return(
      <div>
           
            <h2 id='herb'>Herbal Tinctures</h2>

            <div className="customBowls">
            Select Your Size:
                <form>
                <label><input type = "radio" name = "phone" value ="bowl"/>2oz</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>4oz</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>6oz</label>
                </form>

            Herb/Fungi:
            <form>
            <label><input type = "radio" name = "phone" value ="bowl"/>Dandelion</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Licorice</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Chammomile</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Lemon Balm</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Chaga</label>
            </form>
            <input type = "submit"/>
            </div>
    </div>
    )
}

export default HerbalTinctures