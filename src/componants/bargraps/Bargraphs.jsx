import React from 'react'
import  "./Bargraphs.css"
import BarChart from './BarChart'
const Bargraphs = () => {
  return (
    <div className='barContainer'>
      <div>
        <div className='bargraph1'>Why you should choose</div>
        <div className='bargraph2'> real estate investment?</div>
        <div className='bargraph3'>Unlock your financial potential with real estate investment - a steady income stream.</div>
      </div>
      <div className = "bargraph"style={{maxWidth:"800px",height:"300px"}}>
        <BarChart />
      </div>
    </div>
  )
}

export default Bargraphs