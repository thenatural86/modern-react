import React from 'react'

const Menu = ({ title, category, price, img, desc }) => {
  return (
    <div>
      <h4>{title}</h4>
      <h4>{category}</h4>
      <h4>{price}</h4>
      <img src={img} alt={title} />
      <h4>{desc}</h4>
    </div>
  )
}

export default Menu
