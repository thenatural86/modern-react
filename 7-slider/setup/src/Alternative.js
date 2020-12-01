import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)
  const [value, setValue] = useState(0)

  const nextSlide = () => {
    setValue((oldValue) => {
      let value = oldValue + 1
      if (value > people.length - 1) {
        value = 0
      }
      return value
    })
  }
  const prevSlide = () => {
    setValue((oldValue) => {
      let value = oldValue - 1
      if (value < 0) {
        value = people.length - 1
      }
      return value
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setValue((oldValue) => {
        let value = oldValue + 1
        if (value > people.length - 1) {
          value = 0
        }
        return value
      })
    }, 3000)
    return () => clearInterval(slider)
  }, [value])

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
        <button className='prev' onClick={prevSlide}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
