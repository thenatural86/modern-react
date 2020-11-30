import React, { useState } from 'react'
import people from './data'
import {
  FaChevronLeft,
  FaChevronRight,
  FaPeopleCarry,
  FaQuoteRight,
} from 'react-icons/fa'

const Review = () => {
  // console.log(people)
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const checkNum = (num) => {
    if (num > people.length - 1) {
      return 0
    }
    if (num < 0) {
      return people.length - 1
    }
    return num
  }

  const prevClick = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNum(newIndex)
    })
  }

  const nextClick = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNum(newIndex)
    })
  }

  const yoloClick = (index) => {
    index = Math.floor(Math.random() * people.length)
    setIndex(index)
  }

  return (
    <article className='review'>
      <h2>review component</h2>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>

      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button onClick={prevClick} className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button onClick={nextClick} className='next-btn'>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={yoloClick} className='random-btn'>
        Yolo Button
      </button>
    </article>
  )
}

export default Review
