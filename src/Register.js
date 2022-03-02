import React, {useState} from "react"
import axios from "axios"
import './Register.css'

const Register = () => {

// const mySubmit = data => console.log(data);
const [firstName, setFirstName] = useState('')
const [lastName, setLastName] = useState('')
const [email_address, setEmailAddress] = useState('')
const [password, setPassword] = useState('')


const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
    axios.post('http://localhost:3500/register', {
    firstName: firstName, 
    lastName: lastName,
    email_address: email_address,
    password: password
})
.then((res) =>{
  window.location.reload();
  alert("Registered")
    console.log(res)

})

 }


// const validate = (values) => {
//     const errors = {}
//         if(!values.firstName) {
//             errors.firstName = "First Name Required"
//         }
//         if(!values.lastName) {
//             errors.lastName = "Last Name Required"
//         }
//         if(!values.email_address) {
//             errors.email_address = "Email Address Required"
//         }
//         if(!values.confirmPassword) {
//             errors.confirmPassword = "Confirm Password"
//         } else if(values.password !== values.confirmPassword) {
//             errors.confirmPassword = "Passwords Must Match"
//         }
//         return errors
// }


return(
    <>
    
    <div class="container">
      
    <span className="circle1"></span>
    <span className="circle2"></span>
    
    <form>
    <div className='inputs'>
    <h3>Create An Account</h3>
    <input 
        type="text"
        name="First Name"
        placeholder="First Name"
        onChange={(e)=>{setFirstName(e.target.value)}}
      />
      <input
        type="text"
        name="Last Name"
        placeholder="Last Name"
        onChange={(e)=>{setLastName(e.target.value)}}
      />
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
      <button type="button" onClick={handleSubmit}>Register</button>
      </div>
    </form>
    </div>
    
    </>
    )
}

export default Register
