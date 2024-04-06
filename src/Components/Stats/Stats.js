import React from 'react'
import './Stats.css';

function Stats() {
  return (
    <div className='stats-container'>
      <h1>Statistics</h1>
      <div className='stats-cards'>
        <div className='stats-card'>
          <i class="bi bi-percent"></i>
          <p><span className='numbers'>40%</span><br /><span> of food that Reaches consumers is thrown away</span></p>
        </div>
        <div className='stats-card'>
          <i class="bi bi-house"></i>
          <p><span className='numbers'>1 out of 5</span><br /><span> families either sleep hungry or survive with a meal a day</span></p>
        </div>
        <div className='stats-card'>
          <i class="bi bi-people"></i>
          <p><span className='numbers'>1M+</span><br /><span> population in Kibra</span></p>
        </div>
        <div className='stats-card'>
          <i class="bi bi-person-check"></i>
          <p><span className='numbers'>17,000+</span><br /><span> CBOs available in Kibra</span></p>
        </div>
      </div>
      <h6>Source <a href='https://nation.africa/kenya/health/beating-hunger-calls-for-action-to-reduce-food-waste-4415090' target='_blank'  rel="noreferrer">Here</a></h6>
    </div>
  )
}

export default Stats