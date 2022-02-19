import React from 'react'
import { NavLink } from "react-router-dom";
import Header from './Header';
import axios from 'axios';

const SmallWalnutBowl = () => {
//    const [product_id, setProduct_id]

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3500/SmallWalnutBowl', {

    })
}
    return(
        <div>
        <Header />
        
        <h2>Hopes & Trees</h2>
            <h1>Walnut Bowl</h1>
            <img id="bowl1" height="300px" width="300px" src={require('./photos/IMG_7910.PNG')} />
            <img id="bowl1" height="300px" width="300px" src={require('./photos/IMG_7914.PNG')} />
            <img id="bowl1" height="300px" width="300px" src={require('./photos/IMG_7912.PNG')} />
        <form>
            <h3>$20</h3>
            <button onClick={handleSubmit}>Add To Cart</button>
        </form>
        </div>
    )
}

export default SmallWalnutBowl