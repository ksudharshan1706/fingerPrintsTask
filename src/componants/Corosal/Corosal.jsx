import React from 'react'
import { returnsvg,corosal2, leftarrow, rightarrow } from '../../assets'
import "./Corosal.css"
import Corosal2 from "./Corosal2";
function ColorfulText({children}) {
    return <span style={{color: '#FF4F17'}}>{children}</span>;
  }
const Corosal = () => {
  return (
    <div className='corosalMain'>
        <div className='topContainer'>
            <div className='top1container'><h4>OUR INVESTMENT PROPERTIES</h4></div>
            <div className='top2container'>Your path to <ColorfulText>profitable</ColorfulText> ventures</div>
            <div className='top3container'>
                <div style={{cursor:"pointer"}} className='blurClass'>ONGOING PROJECTS</div>
                <div style={{cursor:"pointer"}}>FULFILLED PROJECTS</div>
            </div>
        </div>
        <Corosal2 />
        <div className='bottomContainer'>
                
                <div style={{cursor:"pointer"}} className='blurClass'><img  src={leftarrow}/>PREVIOUS PROJECT</div>    
                <div style={{cursor:"pointer"}} >NEXT PROJECT<img src={rightarrow} /></div>
                
        </div>
    </div>
  )
}

export default Corosal