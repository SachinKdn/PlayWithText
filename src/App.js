import React, {Fragment} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
// import About from './Components/About';
import Home from './Components/Home';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,Routes
// } from "react-router-dom";
function App() {
  
  // const theme1 = ()=>{
 
  // }
  
  
  return (
    // <Router>
    <>
    <Navbar theme1 ="light"/>
    <Alert/>
    {/* <Fragment> */}
    {/* <Routes> */}
          {/* <Route exact path="/About" element={<About />}/> */}
          
         {/* exact -> for matchin path properly without any mistake */}
          {/* <Route exact path="/" element={<Home />}/> */}
           
        {/* </Routes> */}
        {/* </Fragment> */}
    <Home/>
      {/* <About/> */}
    </>
      // </Router>
  );
}

export default App;
