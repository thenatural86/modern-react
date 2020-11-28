import Tour from './Tour'
import React from 'react'

const Tours = ({ tours }) => {
  console.log(tours)
  return (
    <>
      <h2>tours component</h2>
      {tours.map((tour) => {
        return (
          <div>
            <Tour tour={tour} />
          </div>
        )
      })}
    </>
  )
}

export default Tours
