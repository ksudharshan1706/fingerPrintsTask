import React from 'react'
import  "./Header2.css"
function ColorfulText({children}) {
    return <span style={{color: '#FF4F17'}}>{children}</span>;
  }
const Header = () => {
  return (
    <div className='mainheader' >
      <div className="overlay"></div> 
        <div className='content'>
            <span className='para'>Safest investment on earth with</span>
             <span className='para para2'>guaranteed returns of 18% p.a.</span>
            <button className='headerbutton'>INVEST NOW</button>
        </div>
    </div>
    
  )
}

export default Header