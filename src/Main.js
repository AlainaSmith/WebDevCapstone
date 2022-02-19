import React from "react";
import Product from "./Products";

const Main = (props) => {
    const { products } = props;
    return(
        <>
        <main ClassName="block col-2"></main>
        <h2>products</h2>
        <div className="row">
            {products.map((product) => {
                <Product Key={product.id} product={product}></Product>
            })}
        </div>
        </>
    )
}

export default Main