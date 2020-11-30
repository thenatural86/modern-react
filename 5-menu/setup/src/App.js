import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [foods, setFoods] = useState(items)
  const [categories, setCategories] = useState([])

  const filterItems = (category) => {
    let newItems = foods.filter((food) => food.category === category)
    setFoods(newItems)
  }

  return (
    <main>
      <section className='menu-section'>
        <div className='title'>
          <h2>Goodies</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu foods={foods} />
      </section>
    </main>
  )
}

export default App
