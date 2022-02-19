import React from "react";

const Product = (props) => {
    const { product, onAdd} = props;
    return(
        <div>
            <img className="bowl1" src={product.image}></img>
            <h3> {product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={onAdd}>Add to Cart</button>
               
            
            </div>
        </div>
    )
}

export default Product