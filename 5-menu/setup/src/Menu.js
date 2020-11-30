import React from 'react'

const Menu = ({ title, category, price, img, desc }) => {
  return (
    <>
      <img src={img} alt={title} className='photo' />
      <div className='item-info'>
        <header>
          <h4>{title}</h4>
          <h4 className='price'>${price}</h4>
        </header>
      </div>
      <p className='item=text'>{desc}</p>
      <h4>{category}</h4>
    </>
  )
}

export default Menu
