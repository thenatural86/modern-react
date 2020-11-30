import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  const [foods, setFood] = useState(items)
  return (
    <main>
      <section>
        {foods.map((food) => {
          return (
            <div key={food.id}>
              <Menu {...food} />
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default App
