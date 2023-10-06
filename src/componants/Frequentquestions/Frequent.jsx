import React from 'react'
import "./Frequent.css"
import ToggleQuestion from './ToggleQuestion'
const Frequent = () => {
    const data = [
        {
            question:"Who can invest on invest in properties",
            answer:"Any individual over the age of 18 years having a valid PAN and Aadhaar card can invest.Investment options provided on Invest In offer advantages like guaranteed returns of 18% P.A"
        },
        {
            question:"What is the investment period?",
            answer:"Any individual over the age of 18 years having a valid PAN and Aadhaar card can invest.Investment options provided on Invest In offer advantages like guaranteed returns of 18% P.A"
        },
        {
            question:"How do I get started as an investor with invest in properties",
            answer:"Any individual over the age of 18 years having a valid PAN and Aadhaar card can invest.Investment options provided on Invest In offer advantages like guaranteed returns of 18% P.A"
        },
        {
            question:"How do I get started as an investor with invest in properties",
            answer:"Any individual over the age of 18 years having a valid PAN and Aadhaar card can invest.Investment options provided on Invest In offer advantages like guaranteed returns of 18% P.A"
        },
        {
            question:"How do I get started as an investor with invest in properties",
            answer:"Any individual over the age of 18 years having a valid PAN and Aadhaar card can invest.Investment options provided on Invest In offer advantages like guaranteed returns of 18% P.A"
        },
    ]
  return (
    <div className='frequent'>
        <div className='frequenttop'>Frequently asked questions</div>
        <div className='frequentbottom'>
            {data.map((question,answer)=><ToggleQuestion question={question} answer={answer}/>)}
        </div>
    </div>
  )
}

export default Frequent