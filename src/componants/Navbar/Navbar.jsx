import React from 'react'
import "./Navbar.css"
import {logo1 } from '../../assets'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  return (
    
    <div className='navbar'>
        <img className='navimg' src={logo1} alt="logo" />
        <div className='hamburgerMenu'>
          <MenuIcon  style={{cursor:"pointer",width:"100px"}}/>
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