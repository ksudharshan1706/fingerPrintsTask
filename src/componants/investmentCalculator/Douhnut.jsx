import React, { useEffect, useRef } from 'react'
import  Chart from "chart.js/auto"
import "./Douhnut.css"
const Douhnut = () => {
    const Chartref = useRef(null)
    const ChartInstance = useRef(null)
    useEffect(()=>{
        if(ChartInstance.current){
            ChartInstance.current.destroy();
        }
        const myChartRef  = Chartref.current.getContext("2d")
        ChartInstance.current = new Chart   (myChartRef,{
            type: 'doughnut',
            data: {
                labels:["MGP Investments","Other investments","Invested amount"],
                datasets:[{
                    data:[900000,100000,500000],
                    backgroundColor: ["#686BBF","#76FFFF","#F4F5F6"] }
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
        <canvas ref={Chartref} style={{width:"400px"}}/>
    </div>
  )
}

export default Douhnut