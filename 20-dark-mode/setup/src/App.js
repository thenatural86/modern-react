import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>over-reacted</h1>
          <button className='btn'>tiggle/toggle</button>
        </div>
      </nav>
      <section className='articles'>
        {data.map((item) => {
          console.log(item)
          return <Article key={item.id} {...item} />
        })}
      </section>
    </main>
  )
}

export default App
