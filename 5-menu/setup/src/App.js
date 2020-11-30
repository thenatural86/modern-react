import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [foods, setFood] = useState(items)

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Goodies</h2>
          <div className='underline'></div>
        </div>
        <div className='section-center'>
          {/* <Categories /> */}
          {foods.map((food) => {
            return (
              <article className='menu-item' key={food.id}>
                <Menu {...food} />
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App
