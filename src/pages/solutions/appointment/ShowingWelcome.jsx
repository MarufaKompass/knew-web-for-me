import React from 'react'
import './ShowingWelcome.css';
export default function ShowingWelcome({ faq, index, toggleFAQ,image }) {
  return (
    <div
    className={"vfaq " + (faq.open ? "open" : "")}
    key={index}
    onClick={() => toggleFAQ(index)}
  > 
    <div className='flex'>
    <div className="pr-[15px] pt-[-4px]">
        <img src={faq.image} alt="image"/>
    </div>
    <div className="vfaq-question">{faq.question}</div>
    </div>
    <div className="vfaq-answer">{faq.answer}</div>
  </div>
  )
}
