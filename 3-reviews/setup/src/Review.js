import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  // console.log(people)
  const [person, setPerson] = useState(people[0])
  console.log(person)
  const { id, name, job, image, text } = person
  return (
    <div key={id}>
      <h2>review component</h2>
      <FaChevronLeft />
      <FaChevronRight />
      <FaQuoteRight />
      <p>{name}</p>
      <img src={image} alt={name} />
      <p>{text}</p>
      <p>{job}</p>
    </div>
  )
}

export default Review
