import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(name)
  }
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={submitHandler}>
        {alert.show ? <Alert /> : null}
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            className='grocery'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='e.g. bacy eggy cheesy'
          />
          <button className='submit-btn' type='submit'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      <div className='grocery-container'>
        <List />
        <button className='clear-btn'>clear items</button>
      </div>
    </section>
  )
}

export default App
