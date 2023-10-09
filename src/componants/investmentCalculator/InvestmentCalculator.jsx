import React, { useEffect, useState } from 'react'
import "./InvestmentCalculator.css"
import Slider from '@mui/material/Slider';
import Douhnut from './Douhnut';
import Douhnut2 from './Douhnut2';

const InvestmentCalculator = () => {

  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])    
  return (
    <div className='investmentCalculator'>
      <div >
          <div className='investmenttopCalculator'>Investment Calculator</div>
          
          <div className='invermentmiddlecontainer'>
            <div className='invermentmiddlecontainerbelow'> 
              <div className='calleftContainer'>
                <div className='grapcontent'>
                  <div className='slidercontent'>
                    <div>How much money can you invest?</div>
                    <div className='sliderpricetag'>₹500,000</div>
                  </div>
                  <div className='slidercontent'> 
                    <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    color="primary"
                  />
              </div>
                </div>
                <div className='grapcontent'>
                  <div className='slidercontent'>
                    <div>Whats the tenure period?</div>
                    <div className='sliderpricetag'>6 months</div>
                  </div>
                  <div className='slidercontent'> 
                    <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    color="primary"
                  />
              </div>
                </div>
              </div>
              <div className='calleftContainerbellow'>
                  <div className='pricebelow1'>You will get</div>
                  <div className='pricebelow2'>₹900,000</div>
                  <div className='pricebelow3'>in 6 months</div>
              </div>
            </div >
              {screenSize.dynamicWidth<500?<Douhnut2 className = 'order2'/>: <Douhnut className = 'order2'/>        }
                  
          </div>
      </div>
    </div>
  )
}

export default InvestmentCalculator