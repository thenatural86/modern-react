import Tour from './Tour'
import React from 'react'

const Tours = ({ tours, removeItem }) => {
  // console.log(tours)
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeItem={removeItem} />
        })}
      </div>
    </section>
  )
}

export default Tours
