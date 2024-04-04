import React from 'react'
import './About.css'
import Aboutpng from '../Assets/about2.jpg'



function About() {
  return (
  <div className="about">
    <div className="row">
      <div className="column-right" style={{backgroundColor: 'white', width: '50%', height:'90vh'}}>
       <img src={Aboutpng} alt="" />
      </div>
      
      <div className="column-left">
       <h2>About Us<hr/></h2>
       <div className="para">
       <p>
       Share-a-Meal is a user-friendly platform tackling food waste and hunger. 
       Businesses and individuals with extra food can easily list it on our app, 
       specifying details like type, quantity, and location. Our matching algorithm connects
        this surplus to nearby charities, food banks, and people in need. 
       </p>
       <br />
       <p>Share-a-Meal streamlines the donation process with real-time tracking, 
        notifications, and a feedback system for all parties involved. We collaborate with local
         organizations to ensure food reaches those who need it most. 
        </p>
        <br />
       <p>This innovative approach promotes sustainability by reducing
         food waste and fosters a more equitable society by alleviating hunger. 
         Share-a-Meal's user-friendly app is accessible nationwide, empowering everyone to be part of the solution. 
      </p>
    </div>
    </div>
    </div>

        

      </div>

         
  
        
  )
}

export default About