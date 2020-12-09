import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In suscipit
            quisquam maiores odio asperiores ratione distinctio hic illum! Nisi
            dolore ipsam rerum sit quae.
          </p>
          <button className='btn'>Start Now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt='phone' className='phone-img' />
        </article>
      </div>
    </section>
  )
}

export default Hero
