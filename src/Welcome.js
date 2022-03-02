import React, {useEffect} from "react";
import {FaUserCircle} from 'react-icons/fa'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";
import './Welcome.css'

const Welcome = () => {
// const [firstName, setFirstName] = useState(()=>{
//     const userName = localStorage.getItem('firstName')
// })

const userfirstName = window.localStorage.getItem('userfirstName')
 console.log(userfirstName)

 const infoRewards = window.localStorage.getItem('infoRewards')
 console.log(infoRewards) 

 const infoClasses = window.localStorage.getItem('infoClasses')
 console.log(infoClasses) 

 const infoPurchases = window.localStorage.getItem('infoPurchases')
 console.log(infoPurchases)



    return(
      <div className = 'backgroundContainer' id='userAccountContainer'> 
        
        <div className='backgroundPhoto'>
            <img id="back" height="740px" width="900px" src={require('./photos/back.jpeg')} />
         
        </div>
<div id='fixed'>
<div className='greyHeader'>
  <div id='options'>
    <a id='woodbowl' href="#woodbowlLocator">Wood bowls</a>
    <a id='jewelry' href="#jewelryLocator">Jewelry</a>
    <a id='herbalTinctures' href="#tinctures">Herbal Tinctures</a>
    <a id='classesId' href="#classes">Classes</a>
    <NavLink id='userAccountIcon' exact to='/userAccount'>
    <FaUserCircle/>
    </NavLink>
    <NavLink id='cart' exact to='/cart'>
    <Badge color="secondary">
        <ShoppingCartIcon />{" "}
    </Badge>
    </NavLink>

</div>
</div>

<NavLink exact to='/Homepage2'>
  <img id="logoUser" height="200px" width="200px" src={require('./photos/logo.png')} />
</NavLink>
</div>

<p id='welcome'> Welcome Back, {userfirstName}! </p>
          
<div className='rewards'>

  <div id='text'>

<h5>Reward Status:</h5>
<p id='infoRewards'>{infoRewards}</p>

<h5>Classes Signed up for:</h5>
<p id='infoClasses'>{infoClasses}</p>

<h5>Past Purchases</h5>
<p id='infoPurchases'>{infoPurchases}</p>

<h5>Where are my proceeds going?</h5>
<p>---------</p>

</div>


</div>
<div id='datesWelcome'>
<div id='points'>
<p className='underlinePoints'>25 pts</p>
<p> Free shipping</p>
<p className='underlinePoints'>
50 pts
</p>
<p>15% off</p>
<p className='underlinePoints'>
75 pts
</p>
<p>20% off</p>
<p className='underlinePoints'>
100 pts
</p>
<p>Wood spoon w/ purchase</p>
<p className='underlinePoints'>
250 pts
</p>
<p>Free class of choice or 40% off!</p>
</div>

<p id='redeem'>*Redeem Rewards at Checkout</p>
</div>

        </div>
    )
}

export default Welcome


//two headers, pull from localstorage
//