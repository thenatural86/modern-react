import React, { useState } from 'react'

const Tour = ({ tour }) => {
  console.log(tour)
  const { image, id, name, info, price } = tour
  return (
    <div key={id}>
      <h2>tour component</h2>
      <img src={image} alt='' />
      <h3>{name}</h3>
      <h2>{info}</h2>
      <h2>${price}</h2>
    </div>
  )
}

export default Tour
