import React, {useState} from "react"
import { NavLink } from "react-router-dom";
import axios from "axios"
import './Login.css'


const Login = () => {
const [emailAddress, setEmailAddress] = useState('')
const [password, setPassword] = useState('')
const [loginStatus, setLoginStatus] = useState('')
const [firstName, setFirstName] = useState('')

const handleLogin = (e) => {
  e.preventDefault()
    axios.post('http://localhost:3500/welcome', {
       firstName: firstName
    })
    .then((res)=>{console.log(res.data)})
  }

const handleSubmit = (e) => {
  e.preventDefault()
    axios.post('http://localhost:3500/login', {
        emailAddress: emailAddress,
        password: password
    })
    .then((res)=>{console.log(res.data)})
  }
console.log(emailAddress)
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
      <button type='button' onClick={handleLogin}>View Profile</button>
      <NavLink exact to='/Welcome'>
      <button type='button'>Alaina Profile</button>
      </NavLink>
      </div>
    </form>
   
    <h1>{loginStatus}</h1>
    </div>
    </>
    )
}

export default Login


