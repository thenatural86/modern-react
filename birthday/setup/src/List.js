import React from 'react'

const List = ({ people }) => {
  console.log(people)
  return (
    <>
      {people.map((person) => {
        const { id, name, image, age } = person
        return (
          <article key={id} className='person'>
            <img src={image} alt='yolo' />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
