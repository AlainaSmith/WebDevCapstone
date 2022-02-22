import React, {useState} from "react";
import axios from "axios";


const Subscribe = () => {
   
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email_address, setEmailAddress] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log('submitted')
//         axios.post('http://localstorage:3500', {
//         firstName: firstName, 
//         lastName: lastName,
//         email_address: email_address
//     })
//     .then((res) =>{ console.log(res) })
// }

    return(
        <div>
            <h3>Subscribe to stay updated!</h3>    
    <form>
    <input className="hubermaninput"
        type="text"
        name="First Name"
        placeholder="First Name"
        onChange={(e)=>{setFirstName(e.target.value)}}
      />
      <input className="hubermaninput"
        type="text"
        name="Last Name"
        placeholder="Last Name"
        onChange={(e)=>{setLastName(e.target.value)}}
      />
      <input className="hubermaninput"
      type="text"
      name="emailAddress"
      placeholder="Email Address"
      onChange={(e)=>{setEmailAddress(e.target.value)}}
      />
    
    <button className="subscribeButton" type="submit" onSubmit={handleSubmit}>Subscribe</button>
    </form>
        </div>
    )
}

export default Subscribe