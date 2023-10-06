import React, { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import "./ToggleQuestion.css"
const ToggleQuestion = ({question}) => {
    const [toggle,setToggle] = useState(false)
    const Click = ()=>{
        setToggle(!toggle)
    }
  return (
    <div className='toggle'>
        <div className='togglequestion'>
            <div className='question'>{question.question}</div>
            <div>{toggle?<RemoveIcon onClick={Click}/>:<AddIcon onClick={Click}/>}</div>
        </div>
        <div className='toggleanswer'>
            {toggle?<div>{question.answer}</div>:null}
        </div>
        <hr/>
    </div>
  )
}

export default ToggleQuestion