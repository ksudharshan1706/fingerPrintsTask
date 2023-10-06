// import React from 'react'
// import {Chart as ChartJs,BarElement,CategoryScale,LinearScale,Tooltip,Legend}from "chart.js"
// import {Bar} from "react-chartjs-2"
// ChartJs.register(BarElement,CategoryScale,LinearScale,Tooltip,Legend)  
// const BarChart = () => {
//     const  data = {
//         labels:['Gold Appreciation','Government Bonds','Post Office Monthly Income Scheme','RBI Taxable Bonds'
//     ,'Mutual Funds','Fixed Deposits','MGP Investments'] ,
//     datasets :[
//         {
//             label:"*All returns are calculated per annum",
//             data:[1,2,3,4,5,6,7],
//             backgroundColor:"red",
//             borderColor:"black",
//             borderWidth:1
//         }
//     ]
//     }
//     const options = {
//         // scales: {
//         //     screenY: [{
//         //            display: false
//         //      }],
//         //      xAxes: [{
//         //         display: false
//         //   }]
//         //  }
//     }
//   return (
//     <div style={{
//         // width: "100%",
//         height: "400px"
//       }}>
//         <Bar
//             data={data} 
//             options={options} 
//         ></Bar>
//     </div>
//   )
// }

// export default BarChart
import React, { useEffect, useRef } from 'react'
import  Chart from "chart.js/auto"
// import "./Douhnut.css"
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