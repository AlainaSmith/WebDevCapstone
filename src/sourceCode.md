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



//First Draft of capstone homepage

// import React, {useState} from 'react'
// import './Homepage.css' 

// import { NavLink } from "react-router-dom";
// import Video from './Video';
// import HerbalTinctures from './Herbal';
// import AddCart from './AddCart';
// import PremadeBowls from './PremadeBowls';
// import Register from './Register';
// import Login from './Login';
// import Top from './Top';
// import useCollapse from 'react-collapsed';
// import Classes from './Classes';
// import {FaUserCircle} from 'react-icons/fa'
// import {AiOutlineInstagram} from 'react-icons/ai'
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Jewelry from './Jewelry';
// const Homepage = () => {
// const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
// const userfirstName = window.localStorage.getItem('userfirstName')
//  console.log(userfirstName)

// return(
//  <div>
//   <div className='pinkHeader'>

//      <NavLink id='userHeader' exact to='/Welcome'>
                  
//     <p className='user'>Hi, {userfirstName}!</p>
               
//    </NavLink>
//    <AiOutlineInstagram/>      
//    <div className='wrapper'>
//    <h4 id='sale' className='marquee'>Graduation Sale: 25% all bowls & classes!</h4>
//    </div>
//   <div className='greyHeader'>
  
//     <div id='options'>
//       <a id='one' href="#woodBowl">Wood bowls / Jewelry</a>
//       <a id='two' href="#tinctures">Herbal Tinctures</a>
//       <a id='three' href="#classes">Classes</a>
//       <NavLink id='userAccountIcon' exact to='/userAccount'>
//       <FaUserCircle/>
//       </NavLink>
//       <NavLink id='cart' exact to='/cart'>
//         <Badge color="secondary">
//           <ShoppingCartIcon />{" "}
//         </Badge>
//       </NavLink>
      {/* <NavLink exact to='/Classes'>
              Classes Demo
      </NavLink> */}
    {/* </div>
//    </div>
//   </div> 

// <img id="logo" height="290px" width="290px" src={require('./photos/logo2.png')} />

// <p id='about' className='greeting'>
// Aang-Waan! Welcome.
// </p>
// <div className='aboutContainer'>
// <p id='about'>
// What started out as a break from reality, became my ultimate muse.
// </p>
// <p id='about'> 
It was through crafting and woodworking that brought me closer to my Indigenous roots.  */}
{/* </p>
<p id='about'> */}
{/* I built Hopes & Trees for donating proceeds to preserve the historical signifance of my ancestors from Alaska, 
and the future generations to come, thanks for visiting!  */}
{/* </p>
</div> */}


{/* <PremadeBowls />
<Jewelry />
<HerbalTinctures />
<Video />
 */}


        {/* <img className="pic" src="https://images.unsplash.com/photo-1567080586917-e6ab6aa0df85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bHVtYmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
         */}

        



{/* <div className="register">
</div> */}
{/* <Top />




    <img id="sidebar" height="900px" width="120px" src={require('./photos/trees.jpeg')} />
   
    <img id="sidebar3" height="900px" width="120px" src={require('./photos/trees.jpeg')} /> */}
    
    {/* <img id="mapalaska"  src={require('./photos/mapalaska.png')}/>
    <div className='aleut'>
    
            <p id='text'>
            Partial proceeds 
            </p>
            <p id='text'>
            donated to preserving 
            </p>
            <p id='text'>
            the history of Indigenous 
            </p>
            <p id='text'>
            peoples from Unangax/Aleut regions of Alaska
            </p> 
            <p id='text'>
            Link below for specificities:
            </p>
</div> */}
    {/* </div>
    )
}

export default Homepage */}



 {/* <heading className="headerLinks">
            <h2>About | Contact | Cart</h2>
        </heading> */}

        {/* <Header /> */}
        
        {/* <Aleut /> */}
        {/* <h1>Hopes & Trees Crafts</h1> */}










        //Header2 stuff
        import React from "react";
// import { NavLink } from "react-router-dom";

// // import { BrowserRouter } from 'react-router-dom';
// import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import Button from "@material-ui/core/Button";
// import axios from "axios";
// import {FaUserCircle} from 'react-icons/fa'
// import PremadeBowls from "./PremadeBowls";
// import HerbalTinctures from "./Herbal";
// import Classes from "./Classes";
// const Header2 = () => {

  
//     const [itemCount, setItemCount] = React.useState();

//     return(
//         <>
//         <div className='options'>
        
        
//         <div className="cartHome">
//         <Badge color="secondary" badgeContent={itemCount}>
//           <ShoppingCartIcon />{" "}
//         </Badge>
//         </div>
        
//         <div className="buttons">
//           <Button 
//             onClick={() => {
//               setItemCount(Math.max(itemCount - 1, 0));
//             }}
//           >
//             {/* <button id='remove'>Remove from Cart</button> */}
//           </Button>
//           <Button
//             onClick={() => {setItemCount(itemCount + 1)}}>
//               {/* <button id='addCart' onClick={handleSubmit}>Add to Cart</button> */}
            
//         </Button>
//           </div>
        
//         </div>

//         </>
//     )
// }

// export default Header2


// .options{
//     display: flex;
//     justify-content: space-evenly;
//     flex-direction: row;
//     width: 550px;
//     margin:auto;
// }

// #option1{
//   background-color: rgb(114, 170, 163);  
//   position: relative;
//   top: -140px;
//   right:100px;
//   /* border-radius: 20px; */
//   color:white;
//   box-shadow: 2px 2px 2px 2px rgb(128, 117, 117);
//   padding:10px;
  
    
//   }
// .collapsible1 {
//   cursor: pointer;
//   padding: 18px;
//   width: 100%;
//   border: none;
//   text-align: left;
//   outline: none;
//   font-size: 15px;
//   z-index:100
// }
//   .option1 .content1 {
//     padding: 6px;
//     background-color: #eeeeee;
// }
// .option1 .header1 {
//     background-color: #dddddd;
//     padding: 6px;
//     cursor: pointer;
// }



// #option1:hover{
//     background-color: teal;
// }

// /* #option2{
// background-color: rgb(114, 170, 163);
// position: relative;
// top: -140px;
//   right:70px;

// color:white;
// box-shadow: 2px 2px 2px 2px rgb(128, 117, 117);
// padding:10px;
// } */

// .collapsible3 {
//     cursor: pointer;
//     padding: 18px;
//     width: 100%;
//     border: none;
//     text-align: left;
//     outline: none;
//     font-size: 15px;
//   }
//     .option3 .content3 {
//       padding: 6px;
//       background-color: #eeeeee;
//   }
//   .option3 .header3 {
//       background-color: #dddddd;
//       padding: 6px;
//       cursor: pointer;
//   }
// #option2:hover{
//     background-color: teal;
// }
// #option3{
//     background-color: rgb(114, 170, 163);
//     position: relative;
//     top: -140px;
//   right:40px;
//     /* border-radius: 20px; */
//     color:white;
//     box-shadow: 2px 2px 2px 2px rgb(128, 117, 117);
//     padding:10px;
//     text-align: center;
//     z-index:3
// }
// #option3:hover{
//     background-color: teal;
  
// }




// CREATE TABLE forsale_bowls(
//     forsale_id SERIAL PRIMARY KEY,
//     cart_id INTEGER REFERENCES user_cart(cart_id)
// ), 

// CREATE TABLE custom_wood_bowls(
//     custom_id SERIAL PRIMARY KEY,
//     cart_id INTEGER REFERENCES user_cart(cart_id),
//     size VARCHAR(100) NOT NULL,
//     species VARCHAR(100) NOT NULL,
//     notes VARCHAR(1000) NULL
//     );

// INSERT INTO custom_wood_bowls(size, species),
// VALUES 
// (small, cherry), 
// (small, Walnut),
// (small, Cherry),
// (small, Osage Orange),
// (small, Red Cedar, 20),
// (small, Maple, 20),
// (medium, Walnut, 35),
// (medium, Cherry, 35),
// (medium, Osage Orange, 35),
// (medium, Red Cedar, 35),
// (medium, Maple, 35)
// (large, Walnut, 50),
// (large, Cherry, 50),
// (large, Osage Orange, 50),
// (large, Red Cedar, 50),
// (large, Maple, 50);

// CREATE TABLE herbal_tinctures(
//     herbal_id SERIAL PRIMARY KEY,
//     cart_id INTEGER REFERENCES user_cart(cart_id),
//     size VARCHAR(100) NOT NULL,
//     tincture_choice VARCHAR(100) NOT NULL,
//     price VARCHAR(100) NOT NULL
//     );

//     INSERT INTO herbal_tinctures(size, tincture_choice, price),
//     VALUES 
//     (2oz, Dandelion, 12), 
//     (2oz, Licorice, 12),
//     (2oz, Chammomile, 12),
//     (2oz, Chaga, 15),
//     (4oz, Dandelion, 20),
//     (4oz, Licorice, 20),
//     (4oz, Chammomile, 20),
//     (4oz, Chaga, 25),
//     (6oz, Dandelion, 33),
//     (60,z Licorice, 33),
//     (6oz, Chammomile, 33),
//     (6oz, Chaga, 45);


//     CREATE TABLE flowers(
//     flower_id SERIAL PRIMARY KEY,
//     cart_id INTEGER REFERENCES user_cart(cart_id),
//     size VARCHAR(100) NOT NULL,
//     species VARCHAR(100) NOT NULL,
//     price VARCHAR(100) NOT NULL,
//     notes VARCHAR(1000) NULL,
//     appointments VARCHAR(1000) NULL
//     );

//     INSERT INTO flowers(size, flower, price)
//     VALUES
//     (small, zinnia, 10),
//     (small, baby's breath, 10);


Animation Stuff

HTML CSSResult Skip Results Iframe
EDIT ON
.tech-slideshow {
  height: 200px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

}

.tech-slideshow {
  height: 200px;
  width: 3026px;
  /* background: url(https://player.vimeo.com/video/679806687?h=6d0493bf10&autoplay=1&loop=1&title=0&byline=0&portrait=0); */
  /* position: absolute;
  top: 0;
  left: 0; */
  height: 100%;
  transform: translate3d(0, 0, 0);
  position: relative;
  
  top:900px;


}

  .tech-slideshow #one {
    animation: moveSlideshow 10s linear infinite;
    /* position:relative;
    right:200px; */
      background-color: rgba(148, 120, 120, 0.43);
      position: relative;
  right:500px;
  }

  .tech-slideshow #two {
    animation: moveSlideshow 15s linear infinite;
    /* position:relative;
    top:300px;
    right:400px; */
    height:300px;
    background-color: rgba(148, 120, 120, 0.43);
    border-radius: 4px;
    width:180px
  }


  .tech-slideshow #three {
    animation: moveSlideshow 40s linear infinite;
    border-radius: 4px;
    width:180px;
    height:300px;
    background-color: rgba(148, 120, 120, 0.43);
  }
  .tech-slideshow #four {
    animation: moveSlideshow 45s linear infinite;
    position:relative;
    bottom:450px;
    height:300px;
    left:250px;
    background-color: rgba(148, 120, 120, 0.43);
  }
  .tech-slideshow #five {
    animation: moveSlideshow 50s linear infinite;

    height:300px;
    background-color: rgba(148, 120, 120, 0.43);
    position:relative;
    bottom:450px;
    left:200px;
  }

  .tech-slideshow #six {
    animation: moveSlideshow 45s linear infinite;
    position:relative;
    bottom:450px;
    left:100px;
    height:300px;
    background-color: rgba(148, 120, 120, 0.43);
  }

 