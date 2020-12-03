import React, { useState } from 'react'
import data from './data'
function App() {
  const [texts, setTexts] = useState([])
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('yolo world')
  }

  return (
    <section className='section-center'>
      <h3>Tired of the same ol Lorem Ipsum?</h3>
      <form className='lorem-form' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor='amount'>paragraphs:</label>
        <input type='number' name='amount' id='amount' />
      </form>
      <article>
        {texts.map((text) => {
          return (
            <div>
              <p>{text}</p>
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default App
