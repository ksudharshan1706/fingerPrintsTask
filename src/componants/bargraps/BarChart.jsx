import React, { useEffect, useRef } from 'react'
import  Chart from "chart.js/auto"
const BarChart = () => {
    const Chartref = useRef(null)
    const ChartInstance = useRef(null)
    useEffect(()=>{
        if(ChartInstance.current){
            ChartInstance.current.destroy();
        }
        const myChartRef  = Chartref.current.getContext("2d")
        ChartInstance.current = new Chart   (myChartRef,{
            type: 'bar',
            data: {
                labels:['Gold Appreciation','Government Bonds','Post Office Monthly Income Scheme','RBI Taxable Bonds'
    ,'Mutual Funds','Fixed Deposits','MGP Investments'] ,
                datasets:[{
                    label:"*All returns are calculated per annum",
                    data:[0.57,6.6,7.1,7.75,8,9,18],
                    backgroundColor: ["red","red","red","red","red","red","#00D146"] }
                ]
            },
        });
        return()=>{
            if(ChartInstance.current){
                ChartInstance.current.destroy()
            }
        }
    },[])
  return (
    <div>
        <canvas ref={Chartref} style={{width:"700px"}}/>
    </div>
  )
}

export default BarChart