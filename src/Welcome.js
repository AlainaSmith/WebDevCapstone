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
        <div>
            <div className='pinkHeader'>
            <p id='welcome'> Welcome Back, {userfirstName}! </p>

  <div className='greyHeader'>
    <div id='options'>
      <a id='one' href="#woodBowl">Wood bowls / Jewelry</a>
      <a id='two' href="#tinctures">Herbal Tinctures</a>
      <a id='three' href="#classes">Classes</a>
      <NavLink exact to='/userAccount'>
      <FaUserCircle/>
      </NavLink>
      <NavLink exact to='/cart'>
        <Badge color="secondary">
          <ShoppingCartIcon />{" "}
        </Badge>
      </NavLink>
    </div>
   </div>
  </div> 



  <NavLink exact to='/Homepage2'>
  <img id="logo" height="200px" width="200px" src={require('./photos/logo.png')} />
</NavLink>

            <div id='dates'>


<form className='rewards'>
  <div id='text'>
<h3>Reward Status</h3>
<p>{infoRewards}--</p>
<h3>Classes Signed up for</h3>
<p>{infoClasses}</p>
<h3>Past Purchases</h3>
<p>{infoPurchases}</p>

<h3>Where are my proceeds going?</h3>
<p>---------</p>
</div>
<div id='points'>
<p>25 pts:Free shipping</p>
<p>
50 pts:15% off
</p>
<p>
75 pts:20% off
</p>
<p>
100 pts:Wood spoon w/ purchase
</p>
<p>
250 pts:Free class of choice or40% off!
</p>
</div>
</form>
</div>

        </div>
    )
}

export default Welcome


//two headers, pull from localstorage
//