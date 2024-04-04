import React from 'react'
import './Hero.css'
import Food from '../Assets/heropic.png'
import HeroBackground from '../Assets/Food.jpg'

function Hero() {
  
  return (
    <section id='home' className='home'>
      <img src={HeroBackground} alt="" />


          <div className='hero'>

            {/* <div className="hero-left"> */}
              <h2>Share<span>-a-</span>Meal</h2>
              <p>Let's Make Food Affordable For The Hungry</p>
              <br/>
              <button >Partner</button>
            </div>



    </section>

  )
}

export default Hero