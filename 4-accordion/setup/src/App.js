import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  const [items, setItems] = useState(data)

  return (
    <main>
      <div className='container'>
        {items.map((item) => {
          return <SingleQuestion {...item} />
        })}
      </div>
    </main>
  )
}

export default App
