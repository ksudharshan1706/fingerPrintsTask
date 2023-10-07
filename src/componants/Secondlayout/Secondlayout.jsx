import React from 'react'
import "./Secondlayout.css"
import { livingroom,easyexit, stock, investment, transperancy, safeincome, shortterminvestment} from '../../assets'
import Videoplayer from './Videoplayer'
const Secondlayout = () => {
  return (
        <div className='Secondlayoutcontent'>
            <div className='secondtopcontainer'>
              <div className='topleftcontainer'>
                <img src={livingroom}  style={{marginTop:"100px",width: "100%", height: "10%"}}/>
                {/* <div 
                className='whiteRound'
                // style={{width:"100px",height:"100px",borderRadius:"50%",backgroundColor:"white",position:"absolute",
                // top:"20%",left:"90%"}}
              >
                <div>18%</div>
                <div>Returns</div>
              </div> */}
              </div>
              <div className='toprightcontainer'>
                <div className='toprightcontainer1'>WHY MGP</div>
                <div className='toprightcontainer2'>Easy real estate investments within reach</div>
                <div className='toprightcontainer3'>Discover the ease of real estate investments within reach - steady income, long-term appreciation, and tax advantages await.</div>
                <button className='secondLayoutLogin'>KNOW MORE</button>
              </div>
            </div>
            <div className='secondfooter'>
              <div className='footeritems'>
                <img src={stock}/>
                <div>High returns</div>
              </div>
              <div className='footeritems'>
                <img src={shortterminvestment} color='white'/>
                <div>Short Term</div>
              </div>
              <div className='footeritems'>
                <img src={transperancy}/>
                <div>Transparency</div>
              </div>
              <div className='footeritems'>
                <img src={safeincome}/>
                <div>Safe income</div>
              </div>
              <div className='footeritems'>
                <img src={easyexit}/>
                <div>Easy exit</div>
              </div>
            </div>
            <div className='videoplayer'>
              <Videoplayer />
            </div>
        </div>
  )
}

export default Secondlayout