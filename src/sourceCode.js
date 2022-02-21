<div className="collapsible3">
        <div className="header3" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content3">
                Now you can see the hidden content. <br/><br/>
                Click again to hide...
            </div>
        </div>
    </div>




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





//     const { products } = data;
// const [cartItems, setCartItems] = useState([])
// const onAdd = (product) =>{
//     const exist = cartItems.find((x)=>x.id === product.id)
//     if(exist){
//         setCartItems(
//             cartItems.map((x)=> 
//             x.id === product.id ? { ...exist, qty: exist.qty +1} : x
//         )
//     )
//   } else {
//       setCartItems([...cartItems, { ...product, qty: 1 }])
//   }


//   const onRemove = (product) => {
//     const exist = Cart.items.find((x)=> x.id === product.id)
//     if(exist.qty === 1) {
//         setCartItems(cartItems.filter((x)=> x.id !== product.id))
//     } else {
//         setCartItems(
//             cartItems.map((x) => 
//             x.id === product.id ? { ...exist, qty: exist.qty - 1} : x)
//         )
//     }

