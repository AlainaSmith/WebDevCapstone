import './App.css';
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
const App = () => {
  return (
    <div className="App">
    
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/Homepage' element={<Homepage/>}/>
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
         </Routes>
         </BrowserRouter>
        
         {/* <Header /> */}
    </div>
  );
}

export default App;
