import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [tabs, setTabs] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    const resp = await fetch(url)
    const data = await resp.json()
    setTabs(data)
  }
  console.log(tabs)
  useEffect(() => {
    getData()
  }, [])
  return (
    <main>
      {tabs.map((tab) => {
        const { company, dates, duties, id, order, title } = tab
        return (
          <section key={id}>
            <h4>{title}</h4>
            <h4>{company}</h4>
            <h4>{dates}</h4>
            <h4>{duties}</h4>
            <h4>{order}</h4>
          </section>
        )
      })}
    </main>
  )
}

export default App
