import React from 'react'
import "./Footer.css"
import {hrline,footerlogo, youtube, linkedin, facebook, instagram } from '../../assets'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footertop'>Share the Joy of Smart Investments </div>
        <div className='footerbelowtop'> Invite your friends and family and earn up to 2% of their investments!</div>
        <button className='footerbutton'>CONTACT US</button>
        <div className='footertopbottom'>© 2023 MGP INVESTMENTS</div>
        <br/>
        <img className = 'hrline' src={hrline}/>
        <br/>
        <div className='smallerview'>
            <button className='footerbutton2'>About us</button>
            <button className='footerbutton2'>Projects</button>
            <button className='footerbutton2'>How it works</button>
            <button className='footerbutton2'>Why MGP</button>
            <button className='footerbutton2'>Insights</button>
            <button className='footerbutton2'>Support</button>
        </div>
        <div>
          <div className='footerlinks'>
              <img className='footerimg' src={footerlogo} alt="logo" />
                <button className='footerbutton1'>About us</button>
                <button className='footerbutton1'>Projects</button>
                <button className='footerbutton1'>How it works</button>
                <button className='footerbutton1'>Why MGP</button>
                <button className='footerbutton1'>Insights</button>
                <button className='footerbutton1'>Support</button>
              
              <img src={linkedin}/>
              <img src={facebook}/>
              <img src={instagram}/>
              <img src={youtube}/>
          </div>
        </div>
    </div>
  )
}

export default Footer