import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tabs, setTabs] = useState([])
  const [value, setValue] = useState(0)

  const getData = async () => {
    const resp = await fetch(url)
    const data = await resp.json()
    setTabs(data)
    setLoading(false)
  }
  console.log(tabs)
  useEffect(() => {
    getData()
  }, [])

  if (loading) {
    return (
      <section className='section loading'>
        <h1>loading...</h1>
      </section>
    )
  }
  const { company, dates, duties, id, order, title } = tabs[value]
  return (
    <section className='section' key={id}>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* button container */}
        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='job-desc'>
                <FaAngleDoubleRight className='job-icon' />
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
