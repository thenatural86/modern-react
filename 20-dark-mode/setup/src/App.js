import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

function App() {
  const [theme, setTheme] = useState('light-theme')

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    } else {
      setTheme('light-theme')
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    // setTheme('dark-theme')
  }, [theme])

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <h1>over-reacted</h1>
          <button className='btn' onClick={toggleTheme}>
            tiggle/toggle
          </button>
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
