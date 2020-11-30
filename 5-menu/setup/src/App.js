import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [foods, setFoods] = useState(items)
  const [categories, setCategories] = useState([])

  return (
    <main>
      <section className='menu-section'>
        <div className='title'>
          <h2>Goodies</h2>
          <div className='underline'></div>
        </div>
        <Categories />
        <Menu foods={foods} />
      </section>
    </main>
  )
}

export default App
