import React from 'react'
import SideMenu from './Semi-Components/Menu'
import CBOBody from './Semi-Components/CBOBody'
import './Semi-Components/Styles/Main.css'

function CBODashboard() {
  return (
    <div className='dashboard'>
        <div>
            <SideMenu />
        </div>
        <div>
            <CBOBody />
        </div>
    </div>
  )
}

export default CBODashboard
