import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'

function App() {
  const [person, setPerson] = useState(data)
  const [value, setValue] = useState(0)
  console.log(person)

  const { id, image, name, quote, title } = person[value]

  const checkNum = (num) => {
    if (num > person.length - 1) {
      return 0
    }
    if (num < 0) {
      return person.length - 1
    }
    return num
  }

  const prevPerson = () => {
    setValue((value) => {
      let newValue = value - 1
      return checkNum(newValue)
    })
  }

  const nextPerson = () => {
    setValue((value) => {
      let newValue = value + 1
      return checkNum(newValue)
    })
  }

  return (
    <main>
      <h4>{name}</h4>
      <img src={image} alt={name} />
      <h4>{quote}</h4>
      <h4>{title}</h4>
      <FiChevronLeft onClick={prevPerson} />
      <FiChevronRight onClick={nextPerson} />
    </main>
  )
}

export default App
