import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  // console.log(people)
  const [index, setIndex] = useState(0)
  const { id, name, job, image, text } = people[index]
  return (
    <article className='review'>
      <div key={id}>
        <h2>review component</h2>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn'>Yolo Button</button>
    </article>
  )
}
{
  // <FaChevronLeft />
  {
  }
}

export default Review
