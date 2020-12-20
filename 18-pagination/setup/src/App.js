import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch()
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([])
  useEffect(() => {
    // check loading b/c data is empty array initially
    if (loading) return
    // then set followers to the data array sub the page number passed in
    setFollowers(data[page])
    // once loading changes from true to false, then rerun callback function
  }, [loading])

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'loading...' : 'pagination'}</h1>
        <div className='underline'></div>
        <section className='followers'>
          <div className='container'>
            {followers.map((follower) => {
              return <Follower key={follower.id} {...follower} />
            })}
          </div>
        </section>
        {loading ? null : (
          <div className='btn-container'>
            {data.map((item, index) => {
              return (
                <button key={index} className='page-btn'>
                  {index + 1}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}

export default App
