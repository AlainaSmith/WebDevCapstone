import React, {useEffect} from "react";
import {FaUserCircle} from 'react-icons/fa'
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";


const Welcome = () => {
// const [firstName, setFirstName] = useState(()=>{
//     const userName = localStorage.getItem('firstName')
// })

const userfirstName = window.localStorage.getItem('userfirstName')
 console.log(userfirstName)

    return(
        <div>
            <div className='pinkHeader'>

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

<NavLink exact to='/Homepage'>
<img id="logo" height="300px" width="300px" src={require('./photos/logo2.png')} />
</NavLink>
<h1> Welcome Back, {userfirstName} </h1>
            <h2>Rewards</h2>
        </div>
    )
}

export default Welcome


//two headers, pull from localstorage
//