import React from 'react'
import './GetToKnow.css'
import Why from '../Assets/why.png'
import Who from '../Assets/who.png'
import What from '../Assets/what.png'
import How from '../Assets/how.png'


function GetToKnow() {
  return (
    <div className='gettoknow'>
          <div className="row">
              <div className="card">
              <img src= {Why} alt="" style={{width: '60%'}}/>
                <div class="container">
                  <h4><b>Our Why</b></h4>
                  <br/>
                  <p>Food waste is a huge problem - millions of tons are thrown away while people struggle to eat. Share-a-Meal steps in as a solution. </p>
                </div>
              </div>
              <div className="card" id='crd'>
              <img src= {How} alt="" style={{width: '60%'}}/>
                <div class="container">
                  <h4><b>Our How</b></h4>
                  <br/>
                  <p> Our user-friendly web application makes donation easy and efficient. It's a win-win for both reducing waste and fighting hunger.</p>
                </div>
              </div>
              <div className="card">
              <img src= {Who} alt="" style={{width: '60%'}}/>
                <div class="container">
                  <h4><b>Our Who</b></h4>
                  <br/>
                  <p>Share-a-Meal is a platform that connects people and businesses with extra food to individuals with little or no food and children homes.</p>
                </div>
              </div>
              <div className="card" id='crd2'>
              <img src= {What} alt="" style={{width: '60%'}}/>
                <div class="container">
                  <h4><b>Our What</b></h4>
                  <br/>
                  <p>Architect & Engineer</p>
                </div>
              </div>
          </div>
       
    </div>
  )
}

export default GetToKnow