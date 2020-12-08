import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'

const Home = () => {
  return (
    <main>
      <button className='sidebar-toggle' onClick={() => {}}>
        <FaBars />
      </button>
      <button className='btn' onClick={() => {}}>
        show modal
      </button>
    </main>
  )
}

export default Home
