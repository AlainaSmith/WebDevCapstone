import React, {useState} from 'react'
import './Homepage.css' 
import Header from './Header'
import { NavLink } from "react-router-dom";
import {AiOutlineHeart} from 'react-icons/ai'
import CustomBowl from './CustomWoodBowls';
import HerbalTinctures from './Herbal';
import Flowers from './Flowers';
// import Aleut from './Aleut';
// import Main from './Main';
// import Cart from './Cart';
// import data from './data';
import AddCart from './AddCart';
import PremadeBowls from './PremadeBowls';
import Register from './Register';
import Login from './Login';


const Homepage = () => {
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


    return(
    <div>
  
        {/* <heading className="headerLinks">
            <h2>About | Contact | Cart</h2>
        </heading> */}

        <Header />
        
        <h1>Hopes & Trees Crafts</h1>

       <div id="options">
        <div className='option1'>
        <h3>Custom Woodwork</h3>
        </div>
        <div className='option2'>
        <h3>Herbal Tinctures</h3>
        </div>
        <div className='option3'>
        <h3>Classes</h3></div>
        </div>
        {/* <img className="pic" src="https://images.unsplash.com/photo-1567080586917-e6ab6aa0df85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bHVtYmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
         */}
{/* <Aleut /> */}
        
        
        {/* <div className="columnBar"></div> */}


<PremadeBowls />

<div className="register">
<Register />
<Login />
</div>



    {/* <CustomBowl />
    <HerbalTinctures />
    <Flowers /> */}
        
    {/* <Main products={products}></Main>
        <Cart onAdd={onAdd} cartItems={cartItems}></Cart> */}
    
    <img id="sidebar" height="1200px" width="150px" src={require('./photos/sidebar.png')} />
    <img id="sidebar2" height="1200px" width="150px" src={require('./photos/sidebar.png')} />
    <img id="sidebar3" height="1200px" width="150px" src={require('./photos/sidebar.png')} />
    <img id="sidebar4" height="1200px" width="150px" src={require('./photos/sidebar.png')} />

    </div>
    )
}

export default Homepage




