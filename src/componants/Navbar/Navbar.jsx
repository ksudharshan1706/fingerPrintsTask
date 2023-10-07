import React, { useState } from 'react'
import "./Navbar.css"
import {logo1 } from '../../assets'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  const [display,setDisplay] = useState(false)
  const Toggle =()=>{
    setDisplay(!display)
  }
  return (
    
    <div className='navbar'>
        <img className='navimg' src={logo1} alt="logo" />
        <div className='hamburgerMenu'>
          <MenuIcon onClick={Toggle} style={{cursor:"pointer",width:"100px"}}/>
          {display?<div className='hamburgerItems'>
              <button className='hamburgerItem'>About us</button>
              <button className='hamburgerItem'>Projects</button>
              <button className='hamburgerItem'>How it works</button>
              <button className='hamburgerItem'>Why MGP</button>
              <button className='hamburgerItem'>Insights</button>
              <button className='hamburgerItem'>Support</button>
          </div>:null}
        </div>
        
        <div className='navlinks'>
            <button className='navbarbutton'>About us</button>
            <button className='navbarbutton'>Projects</button>
            <button className='navbarbutton'>How it works</button>
            <button className='navbarbutton'>Why MGP</button>
            <button className='navbarbutton'>Insights</button>
            <button className='navbarbutton'>Support</button>
            <button className='navLogin'>LOGIN</button>
        </div>
    </div>
  )
}

export default Navbar