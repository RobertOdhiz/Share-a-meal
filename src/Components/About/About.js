import React from 'react'
import './About.css'
import Aboutpng from '../Assets/about1.png'
import Track from '../Assets/onenotloc.png';
import SDG from '../Assets/SDG-2.png'



function About() {
  return (
  <div className="about" id="#about">
    <div className="abt-sec">
      {/* <div className="column-right">
       <img src={Aboutpng} alt="" />
      </div> */}
        {/* <h2>About Us</h2> */}
        <div className="abt-cards">
          <div className='card-item'>
            <div className='card-txt'>
            <h5>Web Application</h5>
            <p>
            Share-a-Meal is a user-friendly platform tackling food waste and hunger. 
            </p>
            </div>
            <img src={Aboutpng} alt='' />
          </div>
          <div className='card-item'>
            <div className='card-txt'>
            <h5>Standing Out</h5>
            <p>We streamline the donation process with real-time tracking, notifications, and a feedback system.
            </p>
            </div>
            <img src={Track} alt='' />
          </div>
          <div className='card-item'>
            
            <div className='card-txt'>
            <h5>UN SDG 2</h5>
            <p>This innovative approach promotes sustainability by reducing food waste and fosters a more equitable society by alleviating hunger.
            </p>
            </div>
            <img src={SDG} alt='' className='sdg'/>
          </div>
    </div>
    </div>
    </div>     
  )
}

export default About