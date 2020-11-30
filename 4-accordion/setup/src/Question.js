import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return <h4>{item.title}</h4>
      })}
    </div>
  )
}

export default Question
