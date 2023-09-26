import React, { useState } from 'react'
import {
  Link
} from "react-router-dom";
// const theme12 = "dark";
// console.log(theme12)
export default function Navbar({theme1}) {
  const [mode,setMode] = useState('light');
  const [color,setColor] = useState('navbar navbar-expand-lg navbar-light bg-light');
  const [modeName,setModeName] = useState('Dark')
  const [icon,setIcon] = useState('fa-regular fa-moon');
  const [textColor,setTextColor] = useState('black')
  
  // Conditionally append the theme-specific class
  // let className = "navbar navbar-expand-lg  ";
  // if (theme1 === 'dark') {
  //   className += "navbar-dark bg-dark";
  // } else if (theme1 === 'light') {
  //   className += "navbar-light bg-light";
  // } else {
  //   // Handle other theme values or provide a default class
  //   className += "bg-default";
  // }


  const handleMode = ()=>{
    if(mode === 'light'){
      setTextColor('white')
      setColor('navbar navbar-expand-lg navbar-dark bg-dark')
      setMode('dark')
      setIcon('fa-regular fa-sun')
      setModeName('Day')
    }else{
      setTextColor('black')
      setColor('navbar navbar-expand-lg navbar-light bg-light')
      setMode('light')
      setIcon('fa-regular fa-moon')
      setModeName('Light')
    }
  }



  return (
        <nav className={color} style={{border : '1px solid rgba(0, 0, 0, 0.0)', boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.4)', backgroundColor:'black'}}>
  <div className="container-fluid" >
    <Link className="navbar-brand" to="/" style={{fontWeight:700}}>Let's Play</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{fontWeight:400}} >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About" style={{fontWeight:400}}>About</Link>
        </li>
        <li className="nav-item" onClick={handleMode}>
          <div className="nav-link"  style={{fontWeight:600, color:{textColor}, cursor:'pointer'}}>
            <i className={icon}></i> Turn {modeName}
            </div>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{border : '1px solid rgba(0, 0, 0, 0.4)'}}/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>
  )
}
