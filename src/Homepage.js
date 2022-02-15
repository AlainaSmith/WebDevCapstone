import React from 'react'
import './Homepage.css' 
import Header from './Header'
const Homepage = () => {
    return(
    <div>
  
        {/* <heading className="headerLinks">
            <h2>About | Contact | Cart</h2>
        </heading> */}
        <Header />
        <h3>Hopes & Trees Apothecary</h3>
       
        <div className='options'>
        <p>Custom Woodwork</p>
        </div>
        <div className='options'>
        <p>Herbal Tinctures</p>
        </div>
        <div className='options'><p>Fresh cut flower orders (local)</p></div>
       
        {/* <img className="pic"></img> */}


        <div className="columnBar"></div>
        
    </div>
    )
}

export default Homepage

