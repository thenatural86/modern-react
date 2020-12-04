import React, { useState } from 'react'
import data from './data'
function App() {
  const [texts, setTexts] = useState([])
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    setTexts(data.slice(0, amount))
  }
  return (
    <section className='section-center'>
      <h3>Tired of the same ol Lorem Ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {texts.map((text, index) => {
          return <p key={index}> {text}</p>
        })}
      </article>
    </section>
  )
}

export default App
