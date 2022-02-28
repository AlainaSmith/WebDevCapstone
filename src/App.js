import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './About';
import Homepage from './Homepage';
import Cart from './Cart';
import SmallWalnutBowl from './SmallWalnutBowl';
import CustomBowl from './CustomWoodBowls';
import UserAccount from './userAccount';
import Login from './Login';
import Welcome from './Welcome';
import Register from './Register';
import Classes from './Classes';
import WoodbowlTurning from './WoodbowlTurning';
import HerbalTinctures from './Herbal';
import Joe from './Joe';
import Homepage2 from './Homepage2';
import Products from './Products';



const App = () => {
  // const [update, setUpdate] = useState(0)

  return (
    <div className="App">
     
      {/* <BrowserRouter> */}
        <Routes>
        <Route path='/' element={<Homepage2/>}/>
        <Route path='/Homepage' element={<Homepage2/>}/>
         <Route path='/About' element={<About/>}/>
         <Route path='/Cart' element={<Cart/>}/>
         <Route path='/SmallWalnutBowl' element={<SmallWalnutBowl/>}/>
         <Route path='/CustomWoodBowls' element={<CustomBowl/>}/>
         <Route path='/userAccount' element={<UserAccount/>}/>
         <Route path='/Welcome' element={<Welcome/>}/>
         <Route path='/Login' element={<Login/>}/>
         <Route path='/Register' element={<Register/>}/>
         <Route path='/Classes' element={<Classes/>}/>
         <Route path='/WoodbowlTurning' element={<WoodbowlTurning/>}/>
         <Route path='/Herbal' element={<HerbalTinctures/>}/>
         <Route path='/Joe' element={<Joe/>}/>
         <Route path='/Homepage2' element={<Homepage2/>}/>
         
         </Routes>
         {/* </BrowserRouter> */}
         {/* <Products update={update} setUpdate={setUpdate}/>
          <Cart update={update}/> */}
        
         {/* <Header /> */}
    </div>
  );
}

export default App;


