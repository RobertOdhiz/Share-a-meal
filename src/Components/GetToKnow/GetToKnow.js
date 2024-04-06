import React from 'react'
import './GetToKnow.css'
import Why from '../Assets/why.png'
import Who from '../Assets/who.png'
// import What from '../Assets/what.png'
import How from '../Assets/how.png'


function GetToKnow() {
  return (
    <div className='gettoknow-container'>
      <div className='gettoknow'>
              <div className="card">
              <img src= {Why} alt=""/>
                <div class="card-container">
                  <br/>
                  <p>Food Waste - Millions of tons are thrown away while people struggle to eat</p>
                </div>
              </div>
              <div className="card" id='crd'>
              <img src= {How} alt=""/>
                <div class="card-container">
                  <br/>
                  <p>A user-friendly web application makes donation easy and efficient</p>
                </div>
              </div>
              <div className="card">
              <img src= {Who} alt=""/>
                <div class="card-container">
                  <br/>
                  <p>Connecting people and businesses with surplus food to individuals with little or no food</p>
                </div>
              </div>
              {/* <div className="card" id='crd2'>
              <img src= {What} alt=""/>
                <div class="card-container">
                  <h4><b>Our What</b></h4>
                  <br/>
                  <p>Architect & Engineer</p>
                </div> 
              </div>*/}
        </div>
    </div>
  )
}

export default GetToKnow