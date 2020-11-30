import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'
function App() {
  const [items, setItems] = useState(data)

  return (
    <>
      <h2>Yolo</h2>
      <SingleQuestion items={items} />
    </>
  )
}

export default App
