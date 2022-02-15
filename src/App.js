import './App.css';
import Homepage from './Homepage';
import Header from './Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './About';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
         <Route path='/About' element={<About/>}/>
         </Routes>
         </BrowserRouter>
      {/* <Header /> */}
      <Homepage />
  
    </div>
  );
}

export default App;
