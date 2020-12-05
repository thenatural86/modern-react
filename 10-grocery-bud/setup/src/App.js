import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(name)
  }
  return (
    <section className='container'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='grocery item'
        />
        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
      <List />
      <Alert />
    </section>
  )
}

export default App
