import React from 'react'
import { returnsvg,corosal2, leftarrow, rightarrow } from '../../assets'
import "./Corosal.css"

const Corosal = () => {
  return (
    <div className='corosalMain'>
        <div className='topContainer'>
            <div className='top1container'><h4>OUR INVESTMENT PROPERTIES</h4></div>
            <div className='top2container'>Your path to <>profitable</> ventures</div>
            <div className='top3container'>
                <div style={{cursor:"pointer"}}>ONGOING PROJECTS</div>
                <div style={{cursor:"pointer"}}>FULFILLED PROJECTS</div>
            </div>
        </div>
        <div className='middleContainer'>
            <div className='middleImgContainer'>
                <img className='middleImg' src={corosal2} 
                // style={{width: "870px",height: "584px" ,borderRadius:"10px"}}
                />
            </div>
            <div className='imgContent'>
                <div className='siteArea'><h4>PERUNGUDI</h4></div>
                <div className='mgpLayout'><>MGP Joyous</></div>
                <div>
                    <div className='items'>
                        <div >
                            <img src={returnsvg} style={{width: "20px",height: "20px"}}/>
                        </div>
                        <div className='types'>
                            <div>Returns</div>
                            <div>9%</div>
                        </div>
                    </div>
                    <div className='items'>
                        <div >
                            <img src={returnsvg} style={{width: "20px",height: "20px"}}/>
                        </div>
                        <div className='types'>
                            <div>Minimum Investment</div>
                            <div>INR 5,00,000</div>
                        </div>
                    </div>
                    <div className='items'>
                        <div >
                            <img src={returnsvg} style={{width: "20px",height: "20px"}}/>
                        </div>
                        <div className='types'>
                            <div>Investment Period</div>
                            <div>6 months</div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className='pricepercent'>
                    <div>$7,00,00,000 / $7,00,00,000</div>
                    <div>100%</div>
                </div>
                <div className="skill">
                    <div className="bar-container">
                        <div className="bar" style={{width: "100%"}}></div>
                    </div>
                </div>
                <button className='corosalbutton'>VIEW PROJECT</button>
            </div>
        </div>
        <div className='bottomContainer'>
                
                <div style={{cursor:"pointer"}} ><img  src={leftarrow}/>PREVIOUS PROJECT</div>    
                <div style={{cursor:"pointer"}} >NEXT PROJECT<img src={rightarrow} /></div>
                
        </div>
    </div>
  )
}

export default Corosal