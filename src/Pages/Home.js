import React from 'react'
import Hero from '../Components/Hero/Hero'
import About from '../Components/About/About'
import GetToKnow from '../Components/GetToKnow/GetToKnow'
import Stats from '../Components/Stats/Stats'

function Home() {
  return (
    <div>
        <Hero />
        <About />
        <GetToKnow />
        <Stats />

    </div>
  )
}

export default Home