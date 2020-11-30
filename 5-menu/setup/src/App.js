import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

// get unique categories from list
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [foods, setFoods] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    if (category === 'all') {
      setFoods(items)
      return
    }
    const newItems = items.filter((food) => food.category === category)
    setFoods(newItems)
  }

  return (
    <main>
      <section className='menu-section'>
        <div className='title'>
          <h2>Goodies</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu foods={foods} />
      </section>
    </main>
  )
}

export default App
