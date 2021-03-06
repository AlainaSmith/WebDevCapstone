import React, {useEffect, useState} from "react"
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios"
import './Login.css'


const Login = () => {
const [emailAddress, setEmailAddress] = useState('')
const [password, setPassword] = useState('')
const [loginStatus, setLoginStatus] = useState('')
const [firstName, setFirstName] = useState('')
const [rewards, setRewards] = useState('')
const [classes, setClasses] = useState('')
const [purchases, setPurchases] = useState('')
let navigate = useNavigate();
const [errorMessage, setErrorMessage] = useState('');

// const handleLogin = (e) => {
//   e.preventDefault()
//     axios.post('http://localhost:3500/welcome', {
//        firstName: firstName
//     })
//     .then((res)=>{console.log(res.data)})
//   }

const handleSubmit = (e) => {
  e.preventDefault()
    axios.post('http://localhost:3500/login', {
        emailAddress: emailAddress,
        password: password
    })
    .then((res)=>{
      // setErrorMessage('Example error message!');
      window.localStorage.setItem('userfirstName', res.data.firstName)
      window.localStorage.setItem('infoRewards', res.data.rewards)
      window.localStorage.setItem('infoClasses', res.data.classes)
      window.localStorage.setItem('infoPurchases', res.data.purchases)
      navigate(`/Welcome`);
    })
 
  } 
console.log(emailAddress)

// useEffect(() => {
//  localStorage.setItem('firstName') //how to get firstName from USERS table to display
// })





return(
    <>

<div class="container">
      
      <span className="circle1"></span>
      <span className="circle2"></span>
    
<form className="loginForm">
<div className='inputs'>
<h2>Login</h2>
      <input
        type="text"
        name="emailAddress"
        placeholder="Email Address"
        onChange={(e)=>{setEmailAddress(e.target.value)}}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={(e)=>{setPassword(e.target.value)}}
      />
      <button type="button" onClick={handleSubmit}>Login</button>
      {/* {errorMessage && (
  <p className="error"> {errorMessage} </p>
)} */}
      {/* <button type='button' onClick={handleLogin}>View Profile</button> */}
      
      </div>
    </form>
   
    <h1>{loginStatus}</h1>
    </div>
    </>
    )
}

export default Login

//saving user information to local storage so when they login,
//it will show up with their first name
//Grab user information from local storage and display on pink header


// localStorage.setItem(firstName)

// const user = localStorage.getItem('firstName')

// for(let i = 0; i < localStorage.length; i++){
//   const userName = localStorage.firstName(i)
//   const userValue = localStorage.getItem(userName)
// }