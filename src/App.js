import './App.css';
import Header from './Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './About';
import Homepage from './Homepage';
import Cart from './Cart';
import SmallWalnutBowl from './SmallWalnutBowl';
import CustomBowl from './CustomWoodBowls';


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
         
         </Routes>
         </BrowserRouter>
        
         {/* <Header /> */}
    </div>
  );
}

export default App;
