import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const getTours = async () => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      // console.log(tours)
      setTours(tours)
      setLoading(!loading)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getTours()
  }, [])

  // console.log(tours)
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <main>
      <h2>Tours Project Setup</h2>
      <Tours tours={tours} />
    </main>
  )
}

export default App
