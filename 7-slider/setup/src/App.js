import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)
  const [value, setValue] = useState(0)

  console.log(people)

  // const checkNum = (num) => {
  //   if (num > people.length - 1) {
  //     return 0
  //   }
  //   if (num < 0) {
  //     return people.length - 1
  //   }
  //   return num
  // }

  // const prevPeople = () => {
  //   setValue((value) => {
  //     let newValue = value - 1
  //     return checkNum(newValue)
  //   })
  // }

  // const nextPeople = () => {
  //   setValue((value) => {
  //     let newValue = value + 1
  //     return checkNum(newValue)
  //   })
  // }

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person, index) => {
          const { id, image, name, quote, title } = person
          let position = 'nextSlide'
          if (index === value) {
            position = 'activeSlide'
          }
          if (
            index === value - 1 ||
            (value === 0 && index === people.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev'>
          <FiChevronLeft />
        </button>
        <button className='next'>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App

{
  /* <h4>{name}</h4>
<img src={image} alt={name} />
<h4>{quote}</h4>
<h4>{title}</h4>
<FiChevronLeft onClick={prevPeople} />
<FiChevronRight onClick={nextPeople} /> */
}
