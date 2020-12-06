import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items, editItem }) => {
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { title, id } = item
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                onClick={() => editItem(id)}
                type='button'
                className='edit-btn'
              >
                <FaEdit />
              </button>
              <button onClick={() => {}} type='button' className='delete-btn'>
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
