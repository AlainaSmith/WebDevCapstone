import React from "react";
import './CustomWoodBowls.css'

const Flowers = () => {
    return(
      <div>
           
            

            <div className="customBowls">
            <h2>Fresh Cut Flowers - Local Pickup/Delivery Only</h2>
            <h2>Select Your Size:</h2>
                <form>
                <label><input type = "radio" name = "phone" value ="bowl"/>Small(3-5 Flowers)</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Medium(5-7 Flowers)</label>
                <label><input type = "radio" name = "phone" value ="bowl"/>Large(7-12 Flowers)</label>
                </form>

            <h2>Flowers:</h2>
            <form>
            <label><input type = "checkbox" name = "phone" value ="bowl"/>Zinnia</label>
                <label><input type = "checkbox" name = "phone" value ="bowl"/>Baby's Breathe</label>
                <label><input type = "checkbox" name = "phone" value ="bowl"/>Delphinium</label>
                <label><input type = "checkbox" name = "phone" value ="bowl"/>Gladiolus</label>
                <label><input type = "checkbox" name = "phone" value ="bowl"/>Lily</label>
                <label><input type = "checkbox" name = "phone" value ="bowl"/>Tulip</label>
                <label><input type = "checkbox" name = "phone" value ="bowl"/>Sunflower</label>
                <label><input type = "checkbox" name = "phone" value ="bowl"/>Euculyptus</label>
            </form>
            <button>Add to cart</button>
            </div>
    </div>
    )
}

export default Flowers