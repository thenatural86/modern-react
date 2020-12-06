import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  const submitHandler = (e) => {
    e.preventDefault()
    if (!name) {
      // display alert
      showAlert(true, 'danger', 'please enter value')
    } else if (name & isEditing) {
      // deal with edit
    } else {
      // show alert
      showAlert(true, 'success', 'item has been added')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, msg, type })
  }

  const clearList = () => {
    showAlert(true, 'danger', 'empty list')
    setList([])
  }

  const editItem = (id) => {
    console.log('yolo', id)
  }

  const deleteItem = (id) => {
    console.log(id)
    let newList = list.filter((item) => item.id !== id)
    setList(newList)
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={submitHandler}>
        {alert.show ? <Alert {...alert} removeAlert={showAlert} /> : null}
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
      {list.length > 0 ? (
        <div className='grocery-container'>
          <List items={list} editItem={editItem} deleteItem={deleteItem} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      ) : null}
    </section>
  )
}

export default App
