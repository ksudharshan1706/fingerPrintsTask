import { Paper, Button } from '@mui/material'
import "./Corosal.css"
import { returnsvg,rupee, calender } from '../../assets'
function Item({item})
{
    const {corosal,siteArea,returnpercent,mgpLayout,investment,period,priceTag,pricepercent} = item;
    return (
        <div className='middleContainer'>
            <div className='middleImgContainer'>
                <img className='middleImg' src={corosal} />
            </div>
            <div className='imgContent'>
                <div className='siteArea'><h4>{siteArea}</h4></div>
                <div className='mgpLayout'><>{mgpLayout}</></div>
                <div>
                    <div className='items'>
                        <div >
                            <img src={returnsvg} style={{width: "20px",height: "20px"}}/>
                        </div>
                        <div className='types'>
                            <div>Returns</div>
                            <div>{returnpercent}</div>
                        </div>
                    </div>
                    <div className='items'>
                        <div >
                            <img src={rupee} style={{width: "20px",height: "20px"}}/>
                        </div>
                        <div className='types'>
                            <div>Minimum Investment</div>
                            <div>{investment}</div>
                        </div>
                    </div>
                    <div className='items'>
                        <div >
                            <img src={calender} style={{width: "20px",height: "20px"}}/>
                        </div>
                        <div className='types'>
                            <div>Investment Period</div>
                            <div>{period}</div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className='pricepercent'>
                    <div>{priceTag}</div>
                    <div>{pricepercent}</div>
                </div>
                <div className="skill">
                    <div className="bar-container">
                        <div className="bar" style={{width: pricepercent}}></div>
                    </div>
                </div>
                <button className='corosalbutton'>VIEW PROJECT</button>
            </div>
        </div>
    )
}

export default Item